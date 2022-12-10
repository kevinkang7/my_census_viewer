import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import style from "./ColumnChart.css";

Highcharts.setOptions({
  lang: {
    decimalPoint: ".",
    thousandsSep: ",",
  },
});

const ColumnChart = (props) => {
  const { title, data, chartData, yCategory, seperate } = props;
  let chart = chartData ? chartData : data;
  const categories = [];
  let series = [];

  for (let category of yCategory) {
    series.push({
      name: category,
      data: [],
    });
  }
  chart.forEach((array) => {
    if (!array[0].includes("Total")) {
      categories.push(array[0]);

      for (let i = 1; i <= yCategory.length; i++) {
        if (!array[i]) {
          array[i] = 0;
        }
        series[i - 1].data.push(array[i]);
      }
    }
  });
  console.log(series);

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: title,
    },
    xAxis: {
      categories: categories,
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "11px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    tooltip: {
      pointFormat: "{point.y:,.0f}",
    },
    series: series,
    dataLabels: {
      enabled: true,
      rotation: -90,
      color: "#FFFFFF",
      align: "right",
      format: "{point.y}", // one decimal
      y: 20,
      style: {
        fontSize: "13px",
        fontFamily: "Verdana, sans-serif",
      },
    },
  };

  if (!seperate) {
    options.plotOptions = {
      column: {
        stacking: "normal",
      },
    };
  }

  console.log(options.series);
  return (
    <div className={style.container}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ColumnChart;
