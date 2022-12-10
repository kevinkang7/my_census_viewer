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
import { updatePopulation, clearData } from "../../redux/actions";
import VariableWithChart from "../public/VariableWithChart";

class Population extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      race: false,
      gender: false,
      age: false,
      nativity: false,
      language: false,
    };
  }

  setDataToState = (props) => {
    const { layer, neighborhood } = this.props.mapState;
    this.setState({ loading: true });
    const agePromise = _loadAsyncData(props, "group(B01001)");
    const racePromise = _loadAsyncData(props, "group(B03002)");
    const genderPromise = _loadAsyncData(props, "group(B01001)");
    const nativityPromise = _loadAsyncData(props, "group(B05002)");
    const languagePromise = _loadAsyncData(props, "group(C16001)");
    Promise.all([
      agePromise,
      racePromise,
      genderPromise,
      nativityPromise,
      languagePromise,
    ]).then((values) => {
      const ageHeader = ["Age", "Count"];
      const raceHeader = ["Race/Ethnicity", "Count"];
      const genderHeader = ["Gender", "Count"];
      const nativityHeader = ["Nativity", "Count"];
      const languageHeader = [
        "Language Spoken at Home",
        'Speak English "Very Well"',
        'Speak English Less Than "Very Well"',
        "Total Population 5 Years and Over",
      ];
      const ageData = this.processAgeData(values[0][0]);
      const raceData = this.processRaceData(values[1][0]);
      const genderData = this.processGenderData(values[2][0]);
      const nativityData = this.processNativityData(values[3][0]);
      const languageData = this.processLanguageData(values[4][0]);

      console.log(this.processAgeData(values[0][0]));
      console.log(this.processLanguageData(values[4][0]));

      this.props.dispatch(
        updatePopulation({
          selected: this.props.mapState.selected2,
          data: [
            {
              id: "age",
              title: "Population by Age",
              chart: "bar",
              data: ageData,
              csv: processCsvData(
                values[0][1],
                this.processAgeData,
                ageHeader,
                ageData,
                layer,
                neighborhood
              ),
              header: ageHeader,
              yCategory: ["Count"],
              tableID: "B01001",
              universe: "Total population",
            },

            {
              id: "gender",
              title: "Gender",
              chart: "pie",
              data: genderData,
              csv: processCsvData(
                values[2][1],
                this.processGenderData,
                genderHeader,
                genderData,
                layer,
                neighborhood
              ),
              header: genderHeader,
              yCategory: ["Count"],
              tableID: "B01001",
              universe: "Total population",
            },
            {
              id: "race",
              title: "Race/Ethnicity",
              chart: "pie",
              data: raceData,
              csv: processCsvData(
                values[1][1],
                this.processRaceData,
                raceHeader,
                raceData,
                layer,
                neighborhood
              ),
              header: raceHeader,
              yCategory: ["Count"],
              tableID: "B03002",
              universe: "Total population",
            },
            {
              id: "nativity",
              title: "Nativity",
              chart: "pie",
              data: nativityData,
              csv: processCsvData(
                values[3][1],
                this.processNativityData,
                nativityHeader,
                nativityData,
                layer,
                neighborhood
              ),
              header: nativityHeader,
              yCategory: ["Count"],
              tableID: "B05002",
              universe: "Total population",
            },
            {
              id: "language",
              title: "Language Spoken at Home",
              chart: "column",
              data: languageData,
              chartData: languageData.slice(0, languageData.length - 2),
              csv: processCsvData(
                values[4][1],
                this.processLanguageData,
                languageHeader,
                languageData,
                layer,
                neighborhood
              ),
              header: languageHeader,
              yCategory: [
                'Speak English "Very Well"',
                'Speak English Less Than "Very Well"',
              ],
              tableID: "C16001",
              universe: "Population 5 years and over",
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
      (!dataState.population ||
        dataState.population.selected !== mapState.selected) &&
      (mapState.selected.length !== 0 || mapState.layer == "city")
    ) {
      console.log(111111111111111111111111111);
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

  processRaceData = (data) => {
    //White alone
    let temp1 = parseInt(data["B03002_003E"]);
    //Black or African American alone
    let temp2 = parseInt(data["B03002_004E"]);
    //Asian, Native Hawaiian and Pacific Islander alone
    //B03002_006E + B03002_007E
    let temp3 = parseInt(data["B03002_006E"]) + parseInt(data["B03002_007E"]);
    //Hispanic or Latino
    //B03002_012E
    let temp4 = parseInt(data["B03002_012E"]);
    //Others
    //B08301_016E + B08301_017E + B08301_020E + B08301_021E
    let temp5 =
      parseInt(data["B03002_005E"]) +
      parseInt(data["B03002_008E"]) +
      parseInt(data["B03002_010E"]) +
      parseInt(data["B03002_011E"]);

    let total = parseInt(data["B03002_001E"]);

    return [
      ["Non-Hispanic White alone", temp1],
      ["Non-Hispanic Black or African American alone", temp2],
      ["Non-Hispanic Asian, Native Hawaiian and Pacific Islander alone", temp3],
      ["Hispanic or Latino", temp4],
      ["Others", temp5],
      ["Total", total],
    ];
  };
  processGenderData = (data) => {
    return [
      ["Male", parseInt(data["B01001_002E"])],
      ["Female", parseInt(data["B01001_026E"])],
      ["Total", parseInt(data["B01001_001E"])],
    ];
  };
  processNativityData = (data) => {
    return [
      ["Native-born citizen", parseInt(data["B05002_002E"])],
      ["Naturalized citizen", parseInt(data["B05002_014E"])],
      ["Not a citizen", parseInt(data["B05002_021E"])],
      ["Total", parseInt(data["B05002_001E"])],
    ];
  };

  processAgeData(data) {
    //0-4
    //B01001_003E + B01001_027E
    let temp1_m = parseInt(data["B01001_003E"]);
    let temp1_f = parseInt(data["B01001_027E"]);
    let temp1 = temp1_m + temp1_f;

    //5-17
    //(B01001_004E + B01001_028E) + (B01001_005E + B01001_029E) + (B01001_006E + B01001_030E)
    let temp2_m =
      parseInt(data["B01001_004E"]) +
      parseInt(data["B01001_005E"]) +
      parseInt(data["B01001_006E"]);
    let temp2_f =
      parseInt(data["B01001_028E"]) +
      parseInt(data["B01001_029E"]) +
      parseInt(data["B01001_030E"]);
    let temp2 = temp2_m + temp2_f;

    //18-24
    //(B01001_007E + B01001_031E) + (B01001_008E + B01001_032E) + (B01001_009E + B01001_033E) + (B01001_010E + B01001_034E)
    let temp3_m =
      parseInt(data["B01001_007E"]) +
      parseInt(data["B01001_008E"]) +
      parseInt(data["B01001_009E"]) +
      parseInt(data["B01001_010E"]);
    let temp3_f =
      parseInt(data["B01001_031E"]) +
      parseInt(data["B01001_032E"]) +
      parseInt(data["B01001_033E"]) +
      parseInt(data["B01001_034E"]);
    let temp3 = temp3_m + temp3_f;

    //updated breakdowns:
    //25-29
    //B01001_011E+ B01001_035E
    let temp4_m = parseInt(data["B01001_011E"]);
    let temp4_f = parseInt(data["B01001_035E"]);
    let temp4 = temp4_m + temp4_f;

    //30-39
    //(B01001_012E + B01001_036E) + (B01001_013E + B01001_037E)
    let temp5_m = parseInt(data["B01001_012E"]) + parseInt(data["B01001_013E"]);
    let temp5_f = parseInt(data["B01001_036E"]) + parseInt(data["B01001_037E"]);
    let temp5 = temp5_m + temp5_f;

    //40-49
    //(B01001_014E + B01001_038E) + (B01001_015E + B01001_039E)
    let temp6_m = parseInt(data["B01001_014E"]) + parseInt(data["B01001_015E"]);
    let temp6_f = parseInt(data["B01001_038E"]) + parseInt(data["B01001_039E"]);
    let temp6 = temp6_m + temp6_f;

    //50-59
    //(B01001_016E + B01001_040E) + (B01001_017E + B01001_041E)
    let temp7_m = parseInt(data["B01001_016E"]) + parseInt(data["B01001_017E"]);

    let temp7_f = parseInt(data["B01001_040E"]) + parseInt(data["B01001_041E"]);
    let temp7 = temp7_m + temp7_f;

    //60+
    //(B01001_018E + B01001_042E) + (B01001_019E + B01001_043E)+(B01001_020E + B01001_044E) + (B01001_021E + B01001_045E) + (B01001_022E + B01001_046E) + (B01001_023E + B01001_047E) + (B01001_024E + B01001_048E) + (B01001_025E + B01001_049E)

    let temp8_m =
      parseInt(data["B01001_018E"]) +
      parseInt(data["B01001_019E"]) +
      parseInt(data["B01001_020E"]) +
      parseInt(data["B01001_021E"]) +
      parseInt(data["B01001_022E"]) +
      parseInt(data["B01001_023E"]) +
      parseInt(data["B01001_024E"]) +
      parseInt(data["B01001_025E"]);
    let temp8_f =
      parseInt(data["B01001_042E"]) +
      parseInt(data["B01001_043E"]) +
      parseInt(data["B01001_044E"]) +
      parseInt(data["B01001_045E"]) +
      parseInt(data["B01001_046E"]) +
      parseInt(data["B01001_047E"]) +
      parseInt(data["B01001_048E"]) +
      parseInt(data["B01001_049E"]);
    let temp8 = temp8_m + temp8_f;

    // //25-34
    // //(B01001_011E + B01001_035E) + (B01001_012E + B01001_036E)
    // let temp4_m = parseInt(data["B01001_011E"]) + parseInt(data["B01001_012E"]);
    // let temp4_f = parseInt(data["B01001_035E"]) + parseInt(data["B01001_036E"]);
    // let temp4 = temp4_m + temp4_f;

    // //35-44
    // //(B01001_013E + B01001_037E) + (B01001_014E + B01001_038E)
    // let temp5_m = parseInt(data["B01001_013E"]) + parseInt(data["B01001_014E"]);
    // let temp5_f = parseInt(data["B01001_037E"]) + parseInt(data["B01001_038E"]);
    // let temp5 = temp5_m + temp5_f;

    // //45-54
    // //(B01001_015E + B01001_039E) + (B01001_016E + B01001_040E)
    // let temp6_m = parseInt(data["B01001_015E"]) + parseInt(data["B01001_016E"]);
    // let temp6_f = parseInt(data["B01001_039E"]) + parseInt(data["B01001_040E"]);
    // let temp6 = temp6_m + temp6_f;

    // //55-64
    // //(B01001_017E + B01001_041E) + (B01001_018E + B01001_042E) + (B01001_019E + B01001_043E)
    // let temp7_m =
    //   parseInt(data["B01001_017E"]) +
    //   parseInt(data["B01001_018E"]) +
    //   parseInt(data["B01001_019E"]);
    // let temp7_f =
    //   parseInt(data["B01001_041E"]) +
    //   parseInt(data["B01001_042E"]) +
    //   parseInt(data["B01001_043E"]);
    // let temp7 = temp7_m + temp7_f;

    // //65+
    // //(B01001_020E + B01001_044E) + (B01001_021E + B01001_045E) + (B01001_022E + B01001_046E) + (B01001_023E + B01001_047E) + (B01001_024E + B01001_048E) + (B01001_025E + B01001_049E)

    // let temp8_m =
    //   parseInt(data["B01001_020E"]) +
    //   parseInt(data["B01001_021E"]) +
    //   parseInt(data["B01001_022E"]) +
    //   parseInt(data["B01001_023E"]) +
    //   parseInt(data["B01001_024E"]) +
    //   parseInt(data["B01001_025E"]);
    // let temp8_f =
    //   parseInt(data["B01001_044E"]) +
    //   parseInt(data["B01001_045E"]) +
    //   parseInt(data["B01001_046E"]) +
    //   parseInt(data["B01001_047E"]) +
    //   parseInt(data["B01001_048E"]) +
    //   parseInt(data["B01001_049E"]);
    // let temp8 = temp8_m + temp8_f;

    let total = parseInt(data["B01001_001E"]);

    return [
      ["0-4", temp1],
      ["5-17", temp2],
      ["18-24", temp3],
      ["25-29", temp4],
      ["30-39", temp5],
      ["40-49", temp6],
      ["50-59", temp7],
      ["60+", temp8],
      ["Total", total],
    ];
    // return [
    //   ["0-4", temp1],
    //   ["5-17", temp2],
    //   ["18-24", temp3],
    //   ["25-34", temp4],
    //   ["35-44", temp5],
    //   ["45-54", temp6],
    //   ["55-64", temp7],
    //   ["65+", temp8],
    //   ["Total", total],
    // ];
  }

  processLanguageData(data) {
    return [
      [
        "Spanish",
        parseInt(data["C16001_004E"]),
        parseInt(data["C16001_005E"]),
        parseInt(data["C16001_003E"]),
      ],
      [
        "French, Haitian, or Cajun",
        parseInt(data["C16001_007E"]),
        parseInt(data["C16001_008E"]),
        parseInt(data["C16001_006E"]),
      ],
      [
        "German or other West Germanic languages",
        parseInt(data["C16001_010E"]),
        parseInt(data["C16001_011E"]),
        parseInt(data["C16001_009E"]),
      ],
      [
        "Russian, Polish, or other Slavic languages",
        parseInt(data["C16001_013E"]),
        parseInt(data["C16001_014E"]),
        parseInt(data["C16001_012E"]),
      ],
      [
        "Other Indo-European languages",
        parseInt(data["C16001_016E"]),
        parseInt(data["C16001_017E"]),
        parseInt(data["C16001_015E"]),
      ],
      [
        "Korean",
        parseInt(data["C16001_019E"]),
        parseInt(data["C16001_020E"]),
        parseInt(data["C16001_018E"]),
      ],
      [
        "Chinese (incl. Mandarin, Cantonese)",
        parseInt(data["C16001_022E"]),
        parseInt(data["C16001_023E"]),
        parseInt(data["C16001_021E"]),
      ],
      [
        "Vietnamese",
        parseInt(data["C16001_025E"]),
        parseInt(data["C16001_026E"]),
        parseInt(data["C16001_024E"]),
      ],
      [
        "Tagalog (incl. Filipino)",
        parseInt(data["C16001_028E"]),
        parseInt(data["C16001_029E"]),
        parseInt(data["C16001_027E"]),
      ],
      [
        "Other Asian and Pacific Island languages",
        parseInt(data["C16001_031E"]),
        parseInt(data["C16001_032E"]),
        parseInt(data["C16001_030E"]),
      ],
      [
        "Arabic",
        parseInt(data["C16001_034E"]),
        parseInt(data["C16001_035E"]),
        parseInt(data["C16001_033E"]),
      ],
      [
        "Other and unspecified languages",
        parseInt(data["C16001_037E"]),
        parseInt(data["C16001_038E"]),
        parseInt(data["C16001_036E"]),
      ],
      ["Speak only English", "", "", parseInt(data["C16001_002E"])],
      ["Total", "", "", parseInt(data["C16001_001E"])],
    ];
  }

  handleClickCode(code) {
    switch (code) {
      case "race":
        // setNativityOpen(!nativityOpen);
        this.setState({ race: !this.state.race });
        break;
      case "gender":
        // setAgeOpen(!ageOpen);
        this.setState({ gender: !this.state.gender });
        break;
      case "nativity":
        // setAgeOpen(!ageOpen);
        this.setState({ nativity: !this.state.nativity });
        break;
      case "age":
        // setAgeOpen(!ageOpen);
        this.setState({ age: !this.state.age });
        break;
      case "language":
        // setAgeOpen(!ageOpen);
        this.setState({ language: !this.state.language });
        break;
      default:
    }
  }
  render() {
    if (this.props.dataState.population && !this.state.loading) {
      return (
        <div>
          {this.props.dataState.population.data.map((part, index) => (
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

export default connect(mapStateToProps)(Population);
