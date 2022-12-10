import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import style from "./PieChart.css";

Highcharts.setOptions({
  lang: {
    decimalPoint: ".",
    thousandsSep: ",",
  },
});

let PieChart = (props) => {
  const { data, chartData } = props;

  let chart = chartData ? chartData : data;

  const options = {
    chart: {
      type: "pie",
    },
    title: undefined,
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.y:,0f}",
        },
      },
    },
    series: [
      {
        name: "Percentage",
        colorByPoint: true,
        data: chart
          ? chart.filter((item) => (item[0].includes("Total") ? false : true))
          : undefined,
      },
    ],
  };
  return (
    <div className={style.container}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
