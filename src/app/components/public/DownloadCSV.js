import React, { useState, useEffect } from "react";
import { ExportToCsv } from "export-to-csv";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/SaveAlt";
import { connect } from "react-redux";

let DownloadCSV = (props) => {
  console.log(props);
  let [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const handleDownload = () => {
    {
      let selected = props.selected ? props.selected : "Citywide";
      let selected2 = props.mapState.selected2;
      let survey = props.mapState.survey;

      let suffix =
        survey === "ACS"
          ? "5YR ACS 2017-2021"
          : "2020 Decennial Census (Redistricting Data)";

      let surveyName =
        survey === "ACS"
          ? "2017-2021 American Community Survey 5-Year Estimates"
          : "2020 Decennial Census (Redistricting Data)";

      const options = {
        fieldSeparator: ",",
        quoteStrings: '"',
        decimalSeparator: ".",
        showLabels: false,
        showTitle: false,
        useTextFile: false,
        filename: props.title + " " + suffix,
      };

      let tempArr = [];

      tempArr = tempArr.concat(data);

      tempArr.push([
        `Source: U.S Census Bureau, ${surveyName}, BPDA GIS, BPDA Research Division Analysis`,
      ]);
      console.log(selected2);

      if (props.mapState.layer === "neighborhood") {
        tempArr.push(["For Region(s):" + props.mapState.neighborhood]);
      } else if (props.mapState.layer === "tracts") {
        tempArr.push(["For Region(s): " + selected2.join(", ")]);
      } else if (props.mapState.layer === "blockgroups") {
        tempArr.push(["For Region(s):" + selected]);
      } else {
        tempArr.push(["For Region(s): Boston City"]);
      }

      console.log(tempArr);

      //fill the empty columns in the last two rows
      for (let i = 0; i < tempArr[0].length - 1; i++) {
        tempArr[tempArr.length - 1].push("");
        tempArr[tempArr.length - 2].push("");
      }

      console.log(data, tempArr);

      const csvExporter = new ExportToCsv(options);

      csvExporter.generateCsv(tempArr);
    }
  };
  return (
    <IconButton aria-label="Delete" onClick={handleDownload}>
      <SaveIcon />
    </IconButton>
  );
};

const mapStateToProps = (state) => ({
  mapState: state.map,
});

export default connect(mapStateToProps)(DownloadCSV);
