import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import DownloadCSV from "./DownloadCSV";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
import BarChart from "./BarChart";
import BarChartDollar from "./BarChartDollar";
import { connect } from "react-redux";
import DataTable from "./DataTable";
import style from "./VariableWithChart.css";

const VariableWithChart = (props) => {
  const { open, info } = props;
  const {
    data,
    csv,
    title,
    chart,
    header,
    chartData,
    yCategory,
    notes,
    tableID,
    universe,
  } = info;
  let chartDiv;
  if (chart === "pie") {
    chartDiv = <PieChart data={data} title={title} chartData={chartData} />;
  } else if (chart === "column") {
    chartDiv = (
      <ColumnChart
        data={data}
        header={header}
        chartData={chartData}
        yCategory={yCategory}
      />
    );
  } else if (chart === "bar") {
    chartDiv = (
      <BarChart
        data={data}
        header={header}
        chartData={chartData}
        yCategory={yCategory}
      />
    );
  } else if (chart === "barDollar") {
    chartDiv = (
      <BarChartDollar
        data={data}
        header={header}
        chartData={chartData}
        yCategory={yCategory}
      />
    );
  }

  return (
    <div>
      <Divider />
      <Collapse in={open} timeout="auto">
        {data.length ? (
          <div className={style.container}>
            <div className={style.info}>
              <b>Table ID:</b> {tableID}
            </div>
            <div className={style.info}>
              <b>Universe:</b> {universe}
            </div>
            <DataTable
              data={data}
              header={header}
              tableID={tableID}
              universe={universe}
            />
            {chartDiv}
            <ListItem>
              <ListItemIcon>
                <DownloadCSV
                  data={csv}
                  title={title}
                  selected={props.mapState.selected}
                />
              </ListItemIcon>
              <ListItemText primary="download csv" />
            </ListItem>
            {notes ? (
              <Box
                display="flex"
                justifyContent="center"
                fontSize={10}
                mt={3}
                mb={3}
              >
                {notes}
              </Box>
            ) : null}
          </div>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            fontSize={17}
            mt={3}
            mb={3}
          >
            Please select only one census tract to view the data
          </Box>
        )}
      </Collapse>
      <Divider />
    </div>
  );
};

const mapStateToProps = (state) => ({
  mapState: state.map,
});

export default connect(mapStateToProps)(VariableWithChart);
