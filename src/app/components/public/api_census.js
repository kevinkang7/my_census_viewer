//const census = require("citysdk");
import census from "citysdk";

// load ACS data from census API
export const _loadAsyncData = (props, values) => {
  console.log(props.mapState.selected);
  let Args =
    props.mapState.layer === "city"
      ? {
          vintage: 2021,
          geoHierarchy: {
            state: "25",
            county: "025",
            "county subdivision": "07000",
          },
          sourcePath: ["acs", "acs5"],
          values: [values],
        }
      : {
          vintage: 2021,
          geoHierarchy: {
            state: "25",
            county: "025",
            tract: props.mapState.selected.join(","),
          },
          sourcePath: ["acs", "acs5"],
          values: [values],
        };
  console.log(values);
  return new Promise((resolve, reject) => {
    census(Args, (err, res) => {
      if (err) {
        reject(err);
      } else {
        console.log(res[0]);

        let keys = Object.keys(res[0]);
        let tempObj = {};
        keys.forEach((key) => {
          let temp = 0;
          for (var i = 0; i < res.length; i++) {
            temp += parseInt(res[i][key]);
          }
          tempObj[key] = temp;
        });
        resolve([tempObj, res]);
      }
    });
  });
};

// load Census 2020 data from census API
export const _loadCensus2020Data = (layer, selected, variables) => {
  const variablesCount = variables.length;

  const args = [];
  if (layer === "blockgroups") {
    selected.forEach((bgid) => {
      variables.forEach((variable) => {
        args.push({
          vintage: "2020",
          geoHierarchy: {
            state: "25",
            county: "025",
            tract: bgid.substring(0, 6),
            "block-group": bgid.substring(6),
          },
          sourcePath: ["dec", "pl"],
          values: [variable],
        });
      });
    });
  } else if (layer === "city") {
    variables.forEach((variable) => {
      args.push({
        vintage: "2020",
        geoHierarchy: {
          state: "25",
          county: "025",
          "county subdivision": "07000",
        },
        sourcePath: ["dec", "pl"],
        values: [variable],
      });
    });
  }

  const promises = [];
  args.forEach((arg) => {
    promises.push(
      new Promise((resolve, reject) => {
        census(arg, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      })
    );
  });

  return Promise.all(promises).then((res) => {
    let result = [];
    //variablesCount ===1, one call every time. Deal with the group quarter call and the housing call.
    if (variablesCount === 1) {
      //   res.forEach((blockgroup) => {
      //     result.push(blockgroup[0]);
      //   });
      // }
      console.log(promises);
      console.log(res);
      // for (let i = 0; i < res.length - 1; i = i + 2) {
      //   result.push({ ...res[i][0], ...res[i + 1][0] });
      // }
      //kk: not sure why result returns to number format ????? now it works... tbd...
      //
      for (let i = 0; i < res.length; i++) {
        console.log(res[0]);
        result.push({ ...res[i][0] });
      }
    }

    //this is the ad hoc solution. when API call, it calls two group variables. P2 and P4
    //so it returns two arrays for each call.
    //have to aggregate two arrays for every block group, that's what ...res[i][0], ...res[i + 1][0] does
    else if (variablesCount === 2) {
      console.log(res);
      for (let i = 0; i < res.length - 1; i = i + 2) {
        result.push({ ...res[i][0], ...res[i + 1][0] });
      }
    }

    console.log(result);
    console.log(selected);
    //KK: unnecessary codes by PJ
    // combine values from different groups into single object
    // result.forEach((selected) => {
    //   for (const key in selected) {
    //     selected[key] = parseInt(selected[key]);
    //   }
    // });

    return result;
  });
};
