import React from "react";
import LoadingBlock from "../public/LoadingBlock";
import { connect } from "react-redux";
import { process2020CsvData } from "../public/utils";
import { _loadCensus2020Data } from "../public/api_census";
import EmptyMessage from "../public/EmptyMessage";
import { updatePopulation, clearData } from "../../redux/actions";
import VariableWithChart from "../public/VariableWithChart";
import PieChart from "../public/PieChart";
import ColumnChart from "../public/ColumnChart";
import ChartCentered from "../public/ChartCentered";

class Population2020 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  setDataToState = async () => {
    const { layer, neighborhood, selected } = this.props.mapState;
    this.setState({ loading: true });
    const data = await _loadCensus2020Data(layer, selected, [
      "group(P2)",
      "group(P4)",
    ]);

    console.log(data);

    const tableData = this.generateTableData(data);
    console.log(tableData);

    const chartData1 = tableData.map((item) => {
      return item.slice(0, 2);
    });

    const chartData2 = [
      ["Adult Population (Age 18 and Over)", tableData[7][2]],
      ["Child Population (Under Age 18)", tableData[7][3]],
    ];

    const chartData3 = tableData.map((item) =>
      item.filter((element, index) => index !== 1)
    );

    this.props.dispatch(
      updatePopulation({
        selected: this.props.mapState.selected,
        data: [
          {
            title: "Population by Race/Ethnicity",
            data: tableData,
            chartData1: chartData1,
            chartData2: chartData2,
            chartData3: chartData3,
            csv: process2020CsvData(
              data,
              this.processData,
              [
                "",
                "Total Population",
                "Adult Population (Age 18 and Over)",
                "Child Population (Under Age 18)",
              ],
              [],
              layer,
              neighborhood
            ),
            header: [
              "",
              "Total Population",
              "Adult Population (Age 18 and Over)",
              "Child Population (Under Age 18)",
            ],
            yCategory: [
              "Adult Population (Age 18 and Over)",
              "Child Population (Under Age 18)",
            ],
            tableID: "P2, P4",
            universe: "Total population",
          },
        ],
      })
    );

    this.setState({ loading: false });
  };

  componentDidMount() {
    const { mapState, dataState } = this.props;
    if (
      (!dataState.population ||
        dataState.population.selected !== mapState.selected) &&
      (mapState.selected.length !== 0 || mapState.layer == "city")
    ) {
      this.setDataToState(this.props);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mapState.selected !== this.props.mapState.selected) {
      if (
        this.props.mapState.selected.length !== 0 ||
        this.props.mapState.layer == "city"
      ) {
        this.setDataToState(this.props);
      } else {
        this.props.dispatch(clearData());
      }
    }
  }
  //combine data: write summary
  combineData = (data) => {
    // console.log(data);
    // const result = {};
    // const keys = Object.keys(data[0]);
    // const keys_p4 = Object.keys(data[1]);
    // console.log(keys_p2)
    // keys_p2.forEach((key) => {
    //   let temp_p2 = 0;
    //   // data.forEach((item) => {
    //   //   temp += parseInt(item[key]);
    //   // });
    //   for (var i = 0; i < data.length; i=i+2) {
    //     temp_p2 += parseInt(data[i][key])
    //   }
    //   result[key] = temp_p2;
    // });
    // keys_p4.forEach((key) => {
    //   let temp_p4 = 0;
    //   // data.forEach((item) => {
    //   //   temp += parseInt(item[key]);
    //   // });
    //   for (var i = 1; i < data.length; i=i+2) {
    //     temp_p4 += parseInt(data[i][key])
    //   }
    //   result[key] = temp_p4;
    // });

    console.log(data);
    const result = {};
    const keys = Object.keys(data[0]);
    console.log(keys);
    keys.forEach((key) => {
      let temp = 0;
      // data.forEach((item) => {
      //   temp += parseInt(item[key]);
      // });
      for (var i = 0; i < data.length; i = i + 1) {
        temp += parseInt(data[i][key]);
      }
      result[key] = temp;
    });
    console.log(result);
    return result;
  };

  processData = (data) => [
    [
      "Non-Hisp. White alone",
      parseInt(data.P2_005N),
      parseInt(data.P4_005N),
      parseInt(data.P2_005N) - parseInt(data.P4_005N),
    ],
    [
      "Non-Hisp. Black or African American alone",
      parseInt(data.P2_006N),
      parseInt(data.P4_006N),
      parseInt(data.P2_006N) - parseInt(data.P4_006N),
    ],
    [
      "Hispanic or Latino",
      parseInt(data.P2_002N),
      parseInt(data.P4_002N),
      parseInt(data.P2_002N) - parseInt(data.P4_002N),
    ],
    [
      "Non-Hisp. Asian, Native Hawaiian and Pacific Islander alone",
      parseInt(data.P2_008N) + parseInt(data.P2_009N),
      parseInt(data.P4_008N) + parseInt(data.P4_009N),
      parseInt(data.P2_008N) + parseInt(data.P2_009N) - parseInt(data.P4_009N),
    ],
    [
      "Non-Hisp. American Indian and Alaska Native alone",
      parseInt(data.P2_007N),
      parseInt(data.P4_007N),
      parseInt(data.P2_007N) - parseInt(data.P4_007N),
    ],
    [
      "Non-Hisp. Some Other Race alone",
      parseInt(data.P2_010N),
      parseInt(data.P4_010N),
      parseInt(data.P2_010N) - parseInt(data.P4_010N),
    ],
    [
      "Non-Hisp. Two or More Races",
      parseInt(data.P2_011N),
      parseInt(data.P4_011N),
      parseInt(data.P2_011N) - parseInt(data.P4_011N),
    ],
    [
      "Total",
      parseInt(data.P2_001N),
      parseInt(data.P4_001N),
      parseInt(data.P2_001N) - parseInt(data.P4_001N),
    ],
  ];

  generateTableData = (rawData) => {
    const data = this.combineData(rawData);
    return this.processData(data);
  };

  render() {
    if (this.props.dataState.population && !this.state.loading) {
      return (
        <div>
          {this.props.dataState.population.data.map((part, index) => (
            <div key={index}>
              <VariableWithChart open={true} info={part} />
              <ChartCentered Component={PieChart} data={part.chartData1} />
              <ChartCentered Component={PieChart} data={part.chartData2} />
              <ChartCentered
                Component={ColumnChart}
                data={part.chartData3}
                yCategory={part.yCategory}
                seperate={true}
              />
            </div>
          ))}
        </div>
      );
    } else if (this.state.loading) {
      console.log("LOADING");
      return <LoadingBlock />;
    } else {
      return <EmptyMessage />;
    }
  }
}

const mapStateToProps = (state) => ({
  mapState: state.map,
  dataState: state.data,
});

export default connect(mapStateToProps)(Population2020);
