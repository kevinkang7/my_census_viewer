import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import style from "./BarChart.css";

Highcharts.setOptions({
  lang: {
    decimalPoint: ".",
    thousandsSep: ",",
  },
});

const BarChartDollar = (props) => {
  const { title, data, chartData, yCategory, seperate } = props;
  let chart = chartData ? chartData : data;
  const categories = [];
  let series = [];

  console.log(props);

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
        parseFloat(series[i - 1].data.push(array[i]));
      }
    }
  });
  console.log(categories);
  console.log(series);
  console.log(series[0].data);
  console.log(Object.values(series[0])[1]);

  let categories_reversed = categories.reverse();

  let series_reversed = [];
  series_reversed.push({
    name: yCategory[0],
    data: series[0].data.reverse(),
  });

  console.log(categories_reversed);
  console.log(series_reversed);

  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: title,
    },
    xAxis: {
      categories: categories_reversed,
      type: "category",
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      pointFormat: "${point.y:,0f}",
    },
    series: series_reversed,

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          align: "left",
          format: "${point.y:,0f}",
          inside: false,
        },
      },
    },
  };

  //   if (!seperate) {
  //     options.plotOptions = {
  //       bar: {
  //         stacking: "normal",
  //       },
  //     };
  //   }

  return (
    <div className={style.container}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChartDollar;
