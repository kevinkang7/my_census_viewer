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
import { updateEducation, clearData } from "../../redux/actions";
import VariableWithChart from "../public/VariableWithChart";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      attainment: false,
      schoolLevel: false,
      schoolType: false,
      degreeField: false,
    };
  }

  setDataToState = (props) => {
    const { layer, neighborhood } = this.props.mapState;
    this.setState({ loading: true });
    const attainmentPromise = _loadAsyncData(props, "group(B15003)");
    const schoolLevelPromise = _loadAsyncData(props, "group(B14001)");
    const schoolTypePromise = _loadAsyncData(props, "group(B14002)");
    const degreeFieldPromise = _loadAsyncData(props, "group(B15012)");

    Promise.all([
      attainmentPromise,
      schoolLevelPromise,
      schoolTypePromise,
      degreeFieldPromise,
    ]).then((values) => {
      const attainmentHeader = ["Educational Attainment", "Count"];
      const schoolLevelHeader = ["School Level", "Count"];
      const schoolTypeHeader = ["School Type", "Count"];
      const degreeFieldHeader = [
        "Field of Bachelor's Degree for First Major",
        "Count",
      ];

      const attainmentData = this.processAttainmentData(values[0][0]);
      const schoolLevelData = this.processSchoolLevelData(values[1][0]);
      const schoolTypeData = this.processSchoolTypeData(values[2][0]);
      const degreeFieldData = this.processDegreeFieldData(values[3][0]);

      this.props.dispatch(
        updateEducation({
          selected: this.props.mapState.selected,
          data: [
            {
              id: "attainment",
              title: "Educational Attainment",
              chart: "pie",
              data: this.processAttainmentData(values[0][0]),
              csv: processCsvData(
                values[0][1],
                this.processAttainmentData,
                attainmentHeader,
                attainmentData,
                layer,
                neighborhood
              ),
              header: attainmentHeader,
              yCategory: ["Count"],
              tableID: "B15003",
              universe: "Population 25 years and over",
            },
            {
              id: "schoolLevel",
              title: "School Enrollment by Level",
              chart: "bar",
              data: this.processSchoolLevelData(values[1][0]),
              csv: processCsvData(
                values[1][1],
                this.processSchoolLevelData,
                schoolLevelHeader,
                schoolLevelData,
                layer,
                neighborhood
              ),
              header: schoolLevelHeader,
              yCategory: ["Count"],
              tableID: "B14001",
              universe: "Population 3 years and over",
            },
            {
              id: "schoolType",
              title: "School Enrollment by Type of School",
              chart: "bar",
              data: this.processSchoolTypeData(values[2][0]),
              csv: processCsvData(
                values[2][1],
                this.processSchoolTypeData,
                schoolTypeHeader,
                schoolTypeData,
                layer,
                neighborhood
              ),
              header: schoolTypeHeader,
              yCategory: ["Count"],
              tableID: "B14002",
              universe: "Population 3 years and over",
            },
            {
              id: "degreeField",
              title: "Fields of Bachelor's Degrees Reported",
              chart: "pie",
              data: this.processDegreeFieldData(values[3][0]),
              csv: processCsvData(
                values[3][1],
                this.processDegreeFieldCsvData,
                degreeFieldHeader,
                degreeFieldData,
                layer,
                neighborhood
              ),
              header: degreeFieldHeader,
              yCategory: ["Count"],
              tableID: "B15012",
              universe:
                "Population 25 years and over with a Bachelor's degree or higher attainment",
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
      (!dataState.education ||
        dataState.education.selected !== mapState.selected) &&
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

  processAttainmentData(data) {
    //Less than high school
    //B15003_002E + B15003_003E + … + B15003_016E
    let temp1 =
      parseInt(data["B15003_002E"]) +
      parseInt(data["B15003_003E"]) +
      parseInt(data["B15003_004E"]) +
      parseInt(data["B15003_005E"]) +
      parseInt(data["B15003_006E"]) +
      parseInt(data["B15003_007E"]) +
      parseInt(data["B15003_008E"]) +
      parseInt(data["B15003_009E"]) +
      parseInt(data["B15003_010E"]) +
      parseInt(data["B15003_011E"]) +
      parseInt(data["B15003_012E"]) +
      parseInt(data["B15003_013E"]) +
      parseInt(data["B15003_014E"]) +
      parseInt(data["B15003_015E"]) +
      parseInt(data["B15003_016E"]);

    //High school graduate//

    //B15003_017E + B15003_018E
    let temp2 = parseInt(data["B15003_017E"]) + parseInt(data["B15003_018E"]);
    //Some colleges or associate's degree
    //B15003_019E + B15003_020E + B15003_021E
    let temp3 =
      parseInt(data["B15003_019E"]) +
      parseInt(data["B15003_020E"]) +
      parseInt(data["B15003_021E"]);

    //Bachelor's degree
    //B15003_022E
    let temp4 = parseInt(data["B15003_022E"]);

    //Graduate or professional degree
    //B15003_023E + B15003_024E + B15003_025E
    let temp5 =
      parseInt(data["B15003_023E"]) +
      parseInt(data["B15003_024E"]) +
      parseInt(data["B15003_025E"]);

    let total = parseInt(data["B15003_001E"]);

    return [
      ["Less than high school", temp1],
      ["High school graduate", temp2],
      ["Some colleges or associate's degree", temp3],
      ["Bachelor's degree", temp4],
      ["Graduate or professional degree", temp5],
      ["Total", total],
    ];
  }

  processSchoolLevelData(data) {
    let temp1 = parseInt(data["B14001_003E"]);
    let temp2 = parseInt(data["B14001_004E"]);
    let temp3 = parseInt(data["B14001_005E"]);
    let temp4 = parseInt(data["B14001_006E"]);
    let temp5 = parseInt(data["B14001_007E"]);
    let temp6 = parseInt(data["B14001_008E"]);
    let temp7 = parseInt(data["B14001_009E"]);
    let temp8 = parseInt(data["B14001_010E"]);
    let total = parseInt(data["B14001_001E"]);

    return [
      ["Enrolled in nursery school preschool", temp1],
      ["Enrolled in kindergarten", temp2],
      ["Enrolled in grade 1 to grade 4", temp3],
      ["Enrolled in grade 5 to grade 8", temp4],
      ["Enrolled in grade 9 to grade 12", temp5],
      ["Enrolled in college undergraduate years", temp6],
      ["Graduate or professional school", temp7],
      ["Not enrolled in school", temp8],
      ["Total", total],
    ];
  }

  processSchoolTypeData(data) {
    return [
      [
        "Enrolled in nursery school preschool, public",
        parseInt(data["B14002_005E"]) + parseInt(data["B14002_029E"]),
      ],
      [
        "Enrolled in nursery school preschool, private",
        parseInt(data["B14002_006E"]) + parseInt(data["B14002_030E"]),
      ],
      [
        "Enrolled in K-12, public school",
        parseInt(data["B14002_008E"]) +
          parseInt(data["B14002_032E"]) +
          parseInt(data["B14002_011E"]) +
          parseInt(data["B14002_035E"]) +
          parseInt(data["B14002_014E"]) +
          parseInt(data["B14002_038E"]) +
          parseInt(data["B14002_017E"]) +
          parseInt(data["B14002_041E"]),
      ],
      [
        "Enrolled in K-12, private school",
        parseInt(data["B14002_009E"]) +
          parseInt(data["B14002_033E"]) +
          parseInt(data["B14002_012E"]) +
          parseInt(data["B14002_036E"]) +
          parseInt(data["B14002_015E"]) +
          parseInt(data["B14002_039E"]) +
          parseInt(data["B14002_018E"]) +
          parseInt(data["B14002_042E"]),
      ],
      [
        "Enrolled in college or university, public",
        parseInt(data["B14002_020E"]) +
          parseInt(data["B14002_044E"]) +
          parseInt(data["B14002_023E"]) +
          parseInt(data["B14002_047E"]),
      ],
      [
        "Enrolled in college or university, private",
        parseInt(data["B14002_021E"]) +
          parseInt(data["B14002_045E"]) +
          parseInt(data["B14002_024E"]) +
          parseInt(data["B14002_048E"]),
      ],
      [
        "Not enrolled in school",
        parseInt(data["B14002_025E"]) + parseInt(data["B14002_049E"]),
      ],
      ["Total", parseInt(data["B14002_001E"])],
    ];
  }

  processDegreeFieldData = (data) => [
    [
      "Science, Engineering, and Related",
      parseInt(data["B15012_002E"]) +
        parseInt(data["B15012_003E"]) +
        parseInt(data["B15012_004E"]) +
        parseInt(data["B15012_005E"]) +
        parseInt(data["B15012_006E"]) +
        parseInt(data["B15012_007E"]) +
        parseInt(data["B15012_008E"]) +
        parseInt(data["B15012_009E"]),
    ],
    ["Business", parseInt(data["B15012_010E"])],
    ["Education", parseInt(data["B15012_011E"])],
    [
      "Arts, Humanities, and Other",
      parseInt(data["B15012_012E"]) +
        parseInt(data["B15012_013E"]) +
        parseInt(data["B15012_014E"]) +
        parseInt(data["B15012_015E"]) +
        parseInt(data["B15012_016E"]),
    ],
    ["Total", parseInt(data["B15012_001E"])],
  ];

  processDegreeFieldCsvData = (data) => [
    ["Computers, Mathematics and Statistics", parseInt(data["B15012_002E"])],
    [
      "Biological, Agricultural, and Environmental Sciences",
      parseInt(data["B15012_003E"]),
    ],
    ["Physical and Related Sciences", parseInt(data["B15012_004E"])],
    ["Psychology", parseInt(data["B15012_005E"])],
    ["Social Sciences", parseInt(data["B15012_006E"])],
    ["Engineering", parseInt(data["B15012_007E"])],
    ["Multidisciplinary Studies", parseInt(data["B15012_008E"])],
    ["Science and Engineering Related Fields", parseInt(data["B15012_009E"])],
    ["Business", parseInt(data["B15012_010E"])],
    ["Education", parseInt(data["B15012_011E"])],
    ["Literature and Languages", parseInt(data["B15012_012E"])],
    ["Liberal Arts and History", parseInt(data["B15012_013E"])],
    ["Visual and Performing Arts", parseInt(data["B15012_014E"])],
    ["Communications", parseInt(data["B15012_015E"])],
    ["Others", parseInt(data["B15012_016E"])],
    ["Total", parseInt(data["B15012_001E"])],
  ];

  handleClickCode(code) {
    switch (code) {
      case "attainment":
        this.setState({ attainment: !this.state.attainment });
        break;
      case "schoolLevel":
        this.setState({ schoolLevel: !this.state.schoolLevel });
        break;
      case "schoolType":
        this.setState({ schoolType: !this.state.schoolType });
        break;
      case "degreeField":
        this.setState({ degreeField: !this.state.degreeField });
        break;
      default:
    }
  }

  render() {
    if (this.props.dataState.education && !this.state.loading) {
      return (
        <div>
          {this.props.dataState.education.data.map((part, index) => (
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

export default connect(mapStateToProps)(Education);
