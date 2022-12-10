//create data csv export
//handle tract, block group, neighborhood selections

import { loadModules } from "esri-loader";
import {
  updateSelected,
  updateSelected2,
  updateNeighborhood,
  updatePopulation,
  updateGroupQuarter,
  updateHousing,
} from "../../redux/actions";
//import lookup from "../../lib/neighborhood_tract";
import NeighborhoodTract20 from "../../lib/neighborhood_tract20";
import {
  generateGroupQuarterDataFor2020Neighborhood,
  generateHousingDataFor2020Neighborhood,
  generatePopulationDataFor2020Neighborhood,
} from "../decennial2020/utils2020";

// generate csv format data for ACS
export const processCsvData = (
  data,
  process,
  header,
  summarizedData,
  layer,
  neighborhood
) => {
  const len = header.length - 1;
  let tracts = ["Tracts"];

  let head = [header[0]];

  console.log(head);
  let middle = data.map((item) => {
    tracts.push(item.NAME);
    for (let i = 1; i < len; i++) {
      tracts.push("");
    }
    for (let i = 1; i <= len; i++) {
      head.push(header[i]);
    }
    console.log(item);
    return process(item);
  });
  console.log(middle);
  let result = middle[0].map((item) => [item[0]]);
  console.log(result);
  middle.forEach((tract) => {
    tract.forEach((item, index) => {
      [].push.apply(result[index], item.slice(1));
    });
  });
  result.splice(0, 0, head);

  if (layer === "city") {
    const cityHeader = ["Boston City"];
    for (let i = 0; i < len; i++) {
      cityHeader.push("");
    }
    result.splice(0, 0, cityHeader);
  } else {
    result.splice(0, 0, tracts);
  }

  if (layer === "neighborhood") {
    let neighborhoodHeader = [
      "Neighborhood and the Tracts within",
      neighborhood,
    ];
    for (let i = 0; i < len - 1; i++) {
      neighborhoodHeader.push("");
    }
    let neighborhoodData = [];
    for (const item of summarizedData) {
      neighborhoodData.push(item.slice());
    }
    neighborhoodData.splice(0, 0, header.slice());
    neighborhoodData.splice(0, 0, neighborhoodHeader);

    for (let i = 0; i < neighborhoodData.length; i++) {
      [].push.apply(neighborhoodData[i], result[i].slice(1));
    }
    return neighborhoodData;
  } else {
    return result;
  }
};

// generate csv format data for Census 2020
export const process2020CsvData = (
  data,
  process,
  header,
  summarizedData,
  layer,
  neighborhood
) => {
  const len = header.length - 1;

  let head = [header[0]];
  let selected;
  let middle;

  // console.log(data)

  middle = data.map((item) => {
    for (let i = 1; i <= len; i++) {
      head.push(header[i]);
    }
    console.log(item);
    return process(item);
  });

  console.log(data);

  if (layer === "blockgroups") {
    selected = ["Block Groups"];
    data.forEach((item) => {
      selected.push(item.NAME);
      //selected.push(`${item.tract}${item['block-group']}`);
      for (let i = 1; i < len; i++) {
        selected.push("");
      }
    });
  }

  console.log(middle);
  let result = middle[0].map((item) => [item[0]]);
  console.log(result);
  middle.forEach((select) => {
    select.forEach((item, index) => {
      [].push.apply(result[index], item.slice(1));
    });
  });
  result.splice(0, 0, head);

  if (layer === "city") {
    const cityHeader = ["Boston City"];
    for (let i = 0; i < len; i++) {
      cityHeader.push("");
    }
    result.splice(0, 0, cityHeader);
  } else {
    result.splice(0, 0, selected);
  }
  console.log(result);

  if (layer === "neighborhood") {
    let neighborhoodHeader = [
      "Neighborhood and the Tracts within",
      neighborhood,
    ];
    for (let i = 0; i < len - 1; i++) {
      neighborhoodHeader.push("");
    }
    let neighborhoodData = [];
    console.log(summarizedData);
    for (const item of summarizedData) {
      neighborhoodData.push(item.slice());
    }
    neighborhoodData.splice(0, 0, header.slice());
    neighborhoodData.splice(0, 0, neighborhoodHeader);

    console.log(neighborhoodData);
    return neighborhoodData;
  } else {
    return result;
  }
};

// handle tract selection in ACS map
const handleTractSelection = (point, mapState, dispatch, tractID, tractID2) => {
  //TRACTCE10 is 6-digit tract number. NAME10 is formal tract number.
  //we need TRACTCE10 to call API, NAME10 to show labels in the map
  console.log(mapState);
  tractID = "tractce20";
  tractID2 = "name20";
  mapState.view.hitTest(point).then((response) => {
    if (response.results.length) {
      var graphic = response.results.filter(
        (result) => result.graphic.layer.id === "tracts"
      )[0].graphic;

      console.log(graphic.attributes);

      let tractIndex = mapState.selected.indexOf(
        graphic.attributes[tractID].toString()
      );

      console.log(tractIndex);
      console.log(mapState.view.graphics);

      if (tractIndex >= 0) {
        for (let i = 0; i < mapState.view.graphics.length; i++) {
          if (
            mapState.view.graphics.getItemAt(i).attributes.TRACTCE ==
            graphic.attributes[tractID]
          ) {
            mapState.view.graphics.remove(mapState.view.graphics.getItemAt(i));
          }
        }
        let newSelected = [...mapState.selected];
        let newSelected2 = [...mapState.selected2];
        newSelected.splice(tractIndex, 1);
        newSelected2.splice(tractIndex, 1);
        //      console.log(newSelected);
        //      console.log(newSelected2);
        dispatch(updateSelected(newSelected));
        dispatch(updateSelected2(newSelected2));
      } else {
        loadModules(["esri/Graphic"]).then(([Graphic]) => {
          const g = new Graphic({
            geometry: graphic.geometry,
            attributes: {
              TRACTCE: graphic.attributes[tractID],
            },
            symbol: {
              type: "simple-fill",
              color: [51, 51, 204, 0.1],
              style: "solid",
              outline: {
                color: [51, 51, 204, 0.9],
                width: 1,
              },
            },
          });
          mapState.view.graphics.add(g);
        });

        //      console.log(mapState)
        let newSelected = [...mapState.selected];
        let newSelected2 = [...mapState.selected2];
        newSelected.push(graphic.attributes[tractID]);
        newSelected2.push(graphic.attributes[tractID2]);
        //       console.log(newSelected);
        //       console.log(newSelected2);
        dispatch(updateSelected(newSelected));
        dispatch(updateSelected2(newSelected2));
        //     console.log(mapState)
      }
    }
  });
};

// handle block group selection in Census 2020 map
const handleBlockGroupSelection = (point, mapState, dispatch) => {
  mapState.view.hitTest(point).then((response) => {
    if (response.results.length) {
      var graphic = response.results.filter(
        (result) => result.graphic.layer.id === "blockgroups"
      )[0].graphic;

      //   console.log(graphic);

      let tractIndex = mapState.selected.indexOf(graphic.attributes.bgid);

      console.log(tractIndex);

      if (tractIndex >= 0) {
        for (let i = 0; i < mapState.view.graphics.length; i++) {
          if (
            mapState.view.graphics.getItemAt(i).attributes.bgid ==
            graphic.attributes.bgid
          ) {
            mapState.view.graphics.remove(mapState.view.graphics.getItemAt(i));
          }
        }
        let newSelected = [...mapState.selected];
        newSelected.splice(tractIndex, 1);
        console.log(newSelected);
        dispatch(updateSelected(newSelected));
      } else {
        loadModules(["esri/Graphic"]).then(([Graphic]) => {
          const g = new Graphic({
            geometry: graphic.geometry,
            attributes: {
              bgid: graphic.attributes.bgid,
            },
            symbol: {
              type: "simple-fill",
              color: [51, 51, 204, 0.1],
              style: "solid",
              outline: {
                color: [51, 51, 204, 0.9],
                width: 1,
              },
            },
          });
          mapState.view.graphics.add(g);
        });
        let newSelected = [...mapState.selected];
        newSelected.push(graphic.attributes.bgid);
        console.log(newSelected);
        dispatch(updateSelected(newSelected));
      }
    }
  });
};

// handle neighborhood selection in ACS map
const handleNeighborhoodSelection = (point, mapState, dispatch) => {
  const neighborhoodLayer = mapState.map.findLayerById("neighborhood");
  mapState.view.graphics.removeAll();
  dispatch(updateSelected([]));
  dispatch(updateNeighborhood());
  loadModules(["esri/Graphic"]).then(([Graphic]) => {
    var query = neighborhoodLayer.createQuery();
    query.geometry = point.mapPoint;
    query.returnGeometry = true;
    //2010 tract based neighborhood, the field name is "Neighborhood"
    //query.outFields = ["Neighborhood"];
    //2010 tract based neighborhood, the field name is "neighborhood"
    query.outFields = ["neighborhood"];
    neighborhoodLayer.queryFeatures(query).then((result) => {
      console.log(result);
      if (result.features.length > 0) {
        //2010 tract based neighborhood, the field name is "Neighborhood"
        //2020 tract based neighborhood, the field name is "neighborhood"
        //let neighborhood = result.features[0].attributes.Neighborhood;
        let neighborhood = result.features[0].attributes.neighborhood;
        dispatch(updateNeighborhood(neighborhood));
        const g = new Graphic({
          geometry: result.features[0].geometry,
          attributes: neighborhood,
          symbol: {
            type: "simple-fill",
            color: [51, 51, 204, 0.1],
            style: "solid",
            outline: {
              color: [51, 51, 204, 0.9],
              width: 1,
            },
          },
        });
        mapState.view.graphics.add(g);
        console.log(neighborhood);
        const selectedTracts = NeighborhoodTract20.filter(
          (record) => record.name === neighborhood
        );

        dispatch(updateSelected(selectedTracts[0].tracts));
      }
    });
  });
};

// handle neighborhood selection in Census 2020 map
const handle2020NeighborhoodSelection = (point, mapState, dispatch) => {
  console.log(point);
  const neighborhoodLayer = mapState.map.findLayerById("neighborhood");
  mapState.view.graphics.removeAll();
  dispatch(updateSelected([]));
  dispatch(updateNeighborhood());
  loadModules(["esri/Graphic"]).then(([Graphic]) => {
    var query = neighborhoodLayer.createQuery();
    query.geometry = point.mapPoint ? point.mapPoint : point;
    query.returnGeometry = true;
    neighborhoodLayer.queryFeatures(query).then((result) => {
      console.log(result);
      if (result.features.length > 0) {
        let neighborhood =
          result.features[0].attributes.blockgr2020_ctr_neighb_name;
        dispatch(updateNeighborhood(neighborhood));
        const g = new Graphic({
          geometry: result.features[0].geometry,
          attributes: result.features[0].attributes,
          symbol: {
            type: "simple-fill",
            color: [51, 51, 204, 0.1],
            style: "solid",
            outline: {
              color: [51, 51, 204, 0.9],
              width: 1,
            },
          },
        });
        mapState.view.graphics.add(g);
        mapState.view.goTo(g);
        console.log(neighborhood);
        const populationData = generatePopulationDataFor2020Neighborhood(
          result.features[0].attributes
        );
        dispatch(updatePopulation(populationData));
        const groupquarterData = generateGroupQuarterDataFor2020Neighborhood(
          result.features[0].attributes
        );
        dispatch(updateGroupQuarter(groupquarterData));
        const housingData = generateHousingDataFor2020Neighborhood(
          result.features[0].attributes
        );
        dispatch(updateHousing(housingData));
      }
    });
  });
};

export const handleACSSelection = (point, mapState, dispatch) => {
  switch (mapState.layer) {
    case "neighborhood":
      handleNeighborhoodSelection(point, mapState, dispatch);
      break;
    case "tracts":
      handleTractSelection(point, mapState, dispatch);
      break;
  }
};

export const handle2020Selection = (point, mapState, dispatch) => {
  switch (mapState.layer) {
    case "neighborhood":
      handle2020NeighborhoodSelection(point, mapState, dispatch);
      break;
    case "blockgroups":
      handleBlockGroupSelection(point, mapState, dispatch);
      break;
  }
};

export const handleSelection = (point, mapState, dispatch) => {
  if (mapState.survey === "ACS") {
    handleACSSelection(point, mapState, dispatch);
  } else if (mapState.survey === "2020") {
    handle2020Selection(point, mapState, dispatch);
  }
};

// highlight and zoom to input polygon
export const highlightPolygon = (view, geometry) => {
  loadModules(["esri/Graphic"]).then(([Graphic]) => {
    const g = new Graphic({
      geometry: geometry,
      symbol: {
        type: "simple-fill",
        color: [51, 51, 204, 0.1],
        style: "solid",
        outline: {
          color: [51, 51, 204, 0.9],
          width: 1,
        },
      },
    });
    view.graphics.add(g);
    view.goTo({
      target: g,
    });
  });
};
