import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import LoadingBlock from "../public/LoadingBlock";
import { connect } from "react-redux";
import { processCsvData } from "../public/utils";
import { _loadAsyncData } from "../public/api_census";
import EmptyMessage from "../public/EmptyMessage";
import { updateLabor, clearData } from "../../redux/actions";
import VariableWithChart from "../public/VariableWithChart";

class Labor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      transportation: false,
      occupation: false,
      worker: false,
      industry: false,
    };
  }

  setDataToState = (props) => {
    const { layer, neighborhood } = this.props.mapState;
    this.setState({ loading: true });
    const transPromise = _loadAsyncData(props, "group(B08301)");
    const occupationPromise = _loadAsyncData(props, "group(C24010)");
    const workerPromise = _loadAsyncData(props, "group(B24080)");
    const industryPromise = _loadAsyncData(props, "group(C24030)");
    Promise.all([
      transPromise,
      occupationPromise,
      workerPromise,
      industryPromise,
    ]).then((values) => {
      const transHeader = ["Means of Transportation to Work", "Count"];
      const occupationHeader = ["Resident Employment by Occupation", "Count"];
      const workerHeader = ["Class of Workers", "Count"];
      const industryHeader = ["Resident Employment by Industry", "Count"];

      const transData = this.processTransData(values[0][0]);
      const occupationData = this.processOccupationData(values[1][0]);
      const workerData = this.processWorkerData(values[2][0]);
      const industryData = this.processIndustryData(values[3][0]);

      this.props.dispatch(
        updateLabor({
          selected: this.props.mapState.selected,
          data: [
            {
              id: "industry",
              title: "Resident Employment by Industry",
              chart: "bar",
              data: industryData,
              csv: processCsvData(
                values[3][1],
                this.processIndustryData,
                industryHeader,
                industryData,
                layer,
                neighborhood
              ),
              header: industryHeader,
              yCategory: ["Count"],
              tableID: "C24030",
              universe: "Civilian employed population 16 years and over",
            },
            {
              id: "occupation",
              title: "Resident Employment by Occupation",
              chart: "bar",
              data: occupationData,
              csv: processCsvData(
                values[1][1],
                this.processOccupationData,
                occupationHeader,
                occupationData,
                layer,
                neighborhood
              ),
              header: occupationHeader,
              yCategory: ["Count"],
              tableID: "C24010",
              universe: "Civilian employed population 16 years and over",
            },
            {
              id: "worker",
              title: "Class of Workers",
              chart: "pie",
              data: workerData,
              csv: processCsvData(
                values[2][1],
                this.processWorkerData,
                workerHeader,
                workerData,
                layer,
                neighborhood
              ),
              header: workerHeader,
              yCategory: ["Count"],
              tableID: "B24080",
              universe: "Civilian employed population 16 years and over",
            },
            {
              id: "transportation",
              title: "Means of Transportation to Work",
              chart: "pie",
              data: transData,
              csv: processCsvData(
                values[0][1],
                this.processTransData,
                transHeader,
                transData,
                layer,
                neighborhood
              ),
              header: transHeader,
              yCategory: ["Count"],
              tableID: "B08301",
              universe: "Workers 16 years and over",
            },
          ],
        })
      );
      this.setState({ loading: false });
    });
  };

  componentDidMount() {
    const { mapState, dataState } = this.props;
    if (
      (!dataState.labor || dataState.labor.selected !== mapState.selected) &&
      (mapState.selected.length !== 0 || mapState.layer == "city")
    ) {
      this.setDataToState(this.props);
    }
  }
  componentDidUpdate(prevProps, prevState) {
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

  processTransData(data) {
    //Car, truck, or van
    let temp1 = parseInt(data["B08301_002E"]);
    //Public transportation
    let temp2 = parseInt(data["B08301_010E"]);
    //Bicycle
    let temp3 = parseInt(data["B08301_018E"]);
    //Walked
    let temp4 = parseInt(data["B08301_019E"]);
    //Other, or Work at Home
    //B08301_016E + B08301_017E + B08301_020E + B08301_021E
    let temp5 =
      parseInt(data["B08301_016E"]) +
      parseInt(data["B08301_017E"]) +
      parseInt(data["B08301_020E"]) +
      parseInt(data["B08301_021E"]);

    let total = parseInt(data["B08301_001E"]);

    return [
      ["Car, truck, or van", temp1],
      ["Public transportation", temp2],
      ["Bicycle", temp3],
      ["Walked", temp4],
      ["Other, or Work at Home", temp5],
      ["Total", total],
    ];
  }

  processOccupationData(data) {
    //Management
    //C24010_005E + C24010_041E
    let temp1 = parseInt(data["C24010_005E"]) + parseInt(data["C24010_041E"]);

    //Business and financial operations, legal
    //C24010_006E + C24010_042E + C24010_013E + C24010_049E
    let temp2 =
      parseInt(data["C24010_006E"]) +
      parseInt(data["C24010_042E"]) +
      parseInt(data["C24010_013E"]) +
      parseInt(data["C24010_049E"]);
    //Computer, engineering, and science
    //C24010_007E + C24010_043E
    let temp3 = parseInt(data["C24010_007E"]) + parseInt(data["C24010_043E"]);
    //Community and social service, arts, design, entertainment, sports, and media
    //C24010_012E + C24010_048E + C24010_015E + C24010_051E
    let temp4 =
      parseInt(data["C24010_012E"]) +
      parseInt(data["C24010_048E"]) +
      parseInt(data["C24010_015E"]) +
      parseInt(data["C24010_051E"]);

    //Education, training, and library
    //C24010_014E + C24010_050E
    let temp5 = parseInt(data["C24010_014E"]) + parseInt(data["C24010_050E"]);

    //Healthcare practitioners and technical
    //C24010_016E + C24010_052E
    let temp6 = parseInt(data["C24010_016E"]) + parseInt(data["C24010_052E"]);

    //Healthcare support, personal care and service
    //C24010_020E + C24010_056E + C24010_026E + C24010_062E
    let temp7 =
      parseInt(data["C24010_020E"]) +
      parseInt(data["C24010_056E"]) +
      parseInt(data["C24010_026E"]) +
      parseInt(data["C24010_062E"]);

    //Protective service
    //C24010_021E + C24010_057E

    let temp8 = parseInt(data["C24010_021E"]) + parseInt(data["C24010_057E"]);

    //Food preparation and serving
    // C24010_024E + C24010_060E
    let temp9 = parseInt(data["C24010_024E"]) + parseInt(data["C24010_060E"]);
    //Building and grounds cleaning and maintenance
    //C24010_025E + C24010_061E
    let temp10 = parseInt(data["C24010_025E"]) + parseInt(data["C24010_061E"]);
    //Sales, office and administrative support
    //C24010_027E + C24010_063E
    let temp11 = parseInt(data["C24010_027E"]) + parseInt(data["C24010_063E"]);
    //Natural resources, construction, and maintenance
    //C24010_030E + C24010_066E
    let temp12 = parseInt(data["C24010_030E"]) + parseInt(data["C24010_066E"]);
    //Production, transportation, and material moving
    //C24010_034E + C24010_070E
    let temp13 = parseInt(data["C24010_034E"]) + parseInt(data["C24010_070E"]);

    let total = parseInt(data["C24010_001E"]);

    return [
      ["Management", temp1],
      ["Business and financial operations, legal", temp2],
      ["Computer, engineering, and science", temp3],
      [
        "Community and social service, arts, design, entertainment, sports, and media",
        temp4,
      ],
      ["Education, training, and library", temp5],
      ["Healthcare practitioners and technical", temp6],
      ["Healthcare support, personal care and service", temp7],
      ["Protective service", temp8],
      ["Food preparation and serving", temp9],
      ["Building and grounds cleaning and maintenance", temp10],
      ["Sales, office and administrative support", temp11],
      ["Natural resources, construction, and maintenance", temp12],
      ["Production, transportation, and material moving", temp13],
      ["Total", total],
    ];
  }

  processWorkerData(data) {
    //5/24/22 update: breakdwon Private for-profit wage and salary workers
    // //Private for-profit wage and salary workers
    // let temp1 = parseInt(data["B24080_003E"]) + parseInt(data["B24080_013E"]);
    //Employee of private company workers
    let temp1 = parseInt(data["B24080_004E"]) + parseInt(data["B24080_014E"]);
    //Private not-for-proft wage and salary workers
    let temp2 = parseInt(data["B24080_006E"]) + parseInt(data["B24080_016E"]);
    //Government workers
    let temp3 =
      parseInt(data["B24080_007E"]) +
      parseInt(data["B24080_008E"]) +
      parseInt(data["B24080_009E"]) +
      parseInt(data["B24080_017E"]) +
      parseInt(data["B24080_018E"]) +
      parseInt(data["B24080_019E"]);
    //Self-employed in own not incorporated business workers
    let temp4 = parseInt(data["B24080_010E"]) + parseInt(data["B24080_020E"]);
    //Self-employed in own incorporated business workers
    let temp5 = parseInt(data["B24080_005E"]) + parseInt(data["B24080_015E"]);
    //Unpaid family workers
    let temp6 = parseInt(data["B24080_011E"]) + parseInt(data["B24080_021E"]);
    // Civilian employed population 16 years and over
    let total = parseInt(data["B24080_001E"]);

    return [
      ["Employee of private company workers", temp1],
      ["Private not-for-proft wage and salary workers", temp2],
      ["Government workers", temp3],
      ["Self-employed in own not incorporated business workers", temp4],
      ["Self-employed in own incorporated business workers", temp5],
      ["Unpaid family workers", temp6],
      ["Total", total],
    ];
  }

  processIndustryData(data) {
    console.log(data);
    // Agriculture, forestry, fishing and hunting, and mining:
    let temp1 = parseInt(data["C24030_003E"]) + parseInt(data["C24030_030E"]);
    // Utilities
    let temp2 = parseInt(data["C24030_012E"]) + parseInt(data["C24030_039E"]);
    // Construction
    let temp3 = parseInt(data["C24030_006E"]) + parseInt(data["C24030_033E"]);
    // Manufacturing
    let temp4 = parseInt(data["C24030_007E"]) + parseInt(data["C24030_034E"]);
    // Wholesale trade
    let temp5 = parseInt(data["C24030_008E"]) + parseInt(data["C24030_035E"]);
    // Retail trade
    let temp6 = parseInt(data["C24030_009E"]) + parseInt(data["C24030_036E"]);
    // Transportation and warehousing
    let temp7 = parseInt(data["C24030_011E"]) + parseInt(data["C24030_038E"]);
    // Information
    let temp8 = parseInt(data["C24030_013E"]) + parseInt(data["C24030_040E"]);
    // Finance and insurance
    let temp9 = parseInt(data["C24030_015E"]) + parseInt(data["C24030_042E"]);
    // Real estate and rental and leasing
    let temp10 = parseInt(data["C24030_016E"]) + parseInt(data["C24030_043E"]);
    // Professional, scientific, and technical services
    let temp11 = parseInt(data["C24030_018E"]) + parseInt(data["C24030_045E"]);
    // Management of companies and enterprises
    let temp12 = parseInt(data["C24030_019E"]) + parseInt(data["C24030_046E"]);
    // Administrative and support and waste management services
    let temp13 = parseInt(data["C24030_020E"]) + parseInt(data["C24030_047E"]);
    // Educational services
    let temp14 = parseInt(data["C24030_022E"]) + parseInt(data["C24030_049E"]);
    // Health care and social assistance
    let temp15 = parseInt(data["C24030_023E"]) + parseInt(data["C24030_050E"]);
    // Arts, entertainment, and recreation
    let temp16 = parseInt(data["C24030_025E"]) + parseInt(data["C24030_052E"]);
    // Accommodation and food services
    let temp17 = parseInt(data["C24030_026E"]) + parseInt(data["C24030_053E"]);
    // Other services, except public administration
    let temp18 = parseInt(data["C24030_027E"]) + parseInt(data["C24030_054E"]);
    // Public administration
    let temp19 = parseInt(data["C24030_028E"]) + parseInt(data["C24030_055E"]);

    // Tota;
    let total = parseInt(data["C24030_001E"]);

    return [
      ["Agriculture, forestry, fishing and hunting, and mining", temp1],
      ["Utilities", temp2],
      ["Construction", temp3],
      ["Manufacturing", temp4],
      ["Wholesale trade", temp5],
      ["Retail trade", temp6],
      ["Transportation and warehousing", temp7],
      ["Information", temp8],
      ["Finance and insurance", temp9],
      ["Real estate and rental and leasing", temp10],
      ["Professional, scientific, and technical services", temp11],
      ["Management of companies and enterprises", temp12],
      ["Administrative and support and waste management services", temp13],
      ["Educational services", temp14],
      ["Health care and social assistance", temp15],
      ["Arts, entertainment, and recreation", temp16],
      ["Accommodation and food services", temp17],
      ["Other services, except public administration", temp18],
      ["Public administration", temp19],
      ["Total", total],
    ];
  }

  handleClickCode(code) {
    switch (code) {
      case "transportation":
        this.setState({ transportation: !this.state.transportation });
        break;
      case "occupation":
        this.setState({ occupation: !this.state.occupation });
        break;
      case "worker":
        this.setState({ worker: !this.state.worker });
        break;
      case "industry":
        this.setState({ industry: !this.state.industry });
        break;
      default:
    }
  }
  render() {
    if (this.props.dataState.labor && !this.state.loading) {
      return (
        <div>
          {this.props.dataState.labor.data.map((part, index) => (
            <div key={index}>
              <ListItem
                button
                onClick={() => {
                  this.handleClickCode(part.id);
                }}
              >
                <ListItemText primary={part.title} />
                {this.state[part.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <VariableWithChart open={this.state[part.id]} info={part} />
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

export default connect(mapStateToProps)(Labor);
