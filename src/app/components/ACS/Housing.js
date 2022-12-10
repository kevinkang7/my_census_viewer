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
import { updateHousing, clearData } from "../../redux/actions";
import VariableWithChart from "../public/VariableWithChart";
import { MEDIAN_RENT } from "./median_variables";

class Housing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      tenure: false,
      size: false,
      rent: false,
      rentPercentage: false,
      yearBuilt: false,
      structure: false,
    };
  }

  setDataToState = (props) => {
    const { layer, neighborhood } = this.props.mapState;
    this.setState({ loading: true });
    const tenurePromise = _loadAsyncData(props, "group(B25042)");
    const sizePromise = _loadAsyncData(props, "group(B11016)");
    const rentPromise = this.handleMedian();
    const rentPercentagePromise = _loadAsyncData(props, "group(B25106)");
    const yearBuiltPromise = _loadAsyncData(props, "group(B25034)");
    const structurePromise = _loadAsyncData(props, "group(B25024)");
    Promise.all([
      tenurePromise,
      sizePromise,
      rentPromise,
      rentPercentagePromise,
      yearBuiltPromise,
      structurePromise,
    ]).then((values) => {
      const tenureHeader = [
        "Housing Tenure",
        "Owner-Occupied",
        "Renter-Occupied",
      ];
      const sizeHeader = [
        "Household Size",
        "Family Households",
        "Nonfamily Households",
      ];
      const medianRentHeader = ["Bedrooms", "Median Gross Rent"];
      const rentPercentageHeader = [
        "Household Income",
        "Renter Costs < 30% Household Income",
        "Renter Costs >= 30% Household Income",
        "Total",
      ];
      const yearBuiltHeader = ["Year Structure Built", "Count"];
      const structureHeader = ["Unit in Structure", "Count"];

      const tenureData = this.processHousingData(values[0][0]);
      const sizeData = this.processHousingSize(values[1][0]);
      const rentPercentageData = this.processRentPercentageData(values[3][0]);
      const yearBuiltData = this.processYearBuiltData(values[4][0]);
      const structureData = this.processStructureData(values[5][0]);

      console.log(values);
      const medianRent = {
        id: "rent",
        title: "Median Gross Rent by Bedrooms",
        chart: "",
        data: values[2],
        csv: values[2],
        header: medianRentHeader,
        yCategory: ["Median Gross Rent"],
        tableID: "B25031",
        universe: "Renter-occupied housing units paying cash rent",
      };

      console.log(values[2]);
      if (this.props.mapState.layer !== "neighborhood") {
        medianRent.chart = "column";
        medianRent.chartData = values[2]
          ? this.processRentChartData(values[2][0])
          : [];

        medianRent.data = values[2] ? this.processRentData(values[2][0]) : [];
        medianRent.csv = values[2]
          ? processCsvData(
              values[2][1],
              this.processRentData,
              medianRentHeader,
              medianRent.data,
              layer,
              neighborhood
            )
          : [];
      } else {
        medianRent.title = "Median Gross Rent by Bedrooms*";
        medianRent.notes =
          "*Note: The BPDA Research estimates median rent at the neighborhood level using ACS Table B25063 by linear interpolation.";
      }

      this.props.dispatch(
        updateHousing({
          selected: this.props.mapState.selected,
          data: [
            {
              id: "tenure",
              title: "Housing Tenure",
              chart: "column",
              data: tenureData,
              csv: processCsvData(
                values[0][1],
                this.processHousingData,
                tenureHeader,
                tenureData,
                layer,
                neighborhood
              ),
              header: tenureHeader,
              yCategory: ["Owner-Occupied", "Renter-Occupied"],
              tableID: "B25042",
              universe: "Occupied housing units",
            },
            {
              id: "size",
              title: "Household Type by Household Size",
              chart: "column",
              data: sizeData,
              csv: processCsvData(
                values[1][1],
                this.processHousingSize,
                sizeHeader,
                sizeData,
                layer,
                neighborhood
              ),
              header: sizeHeader,
              yCategory: ["Family Households", "Nonfamily Households"],
              tableID: "B11016",
              universe: "Households",
            },
            medianRent,
            {
              id: "rentPercentage",
              title:
                "Renter Costs as a Percentage of Household Income by Income Level in the Past 12 Months",
              chart: "column",
              data: rentPercentageData,
              chartData: rentPercentageData.slice(
                0,
                rentPercentageData.length - 3
              ),
              csv: processCsvData(
                values[3][1],
                this.processRentPercentageData,
                rentPercentageHeader,
                rentPercentageData,
                layer,
                neighborhood
              ),
              header: rentPercentageHeader,
              yCategory: [
                "Renter Costs < 30% Household Income",
                "Renter Costs >= 30% Household Income",
              ],
              tableID: "B25106",
              universe: "Occupied housing units",
            },
            {
              id: "yearBuilt",
              title: "Year Structure Built",
              chart: "bar",
              data: yearBuiltData,
              csv: processCsvData(
                values[4][1],
                this.processYearBuiltData,
                yearBuiltHeader,
                yearBuiltData,
                layer,
                neighborhood
              ),
              header: yearBuiltHeader,
              yCategory: ["Count"],
              tableID: "B25034",
              universe: "Housing units",
            },
            {
              id: "structure",
              title: "Unit in Structure",
              chart: "bar",
              data: structureData,
              csv: processCsvData(
                values[5][1],
                this.processStructureData,
                structureHeader,
                structureData,
                layer,
                neighborhood
              ),
              header: structureHeader,
              yCategory: ["Count"],
              tableID: "B25024",
              universe: "Housing units",
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
      (!dataState.housing ||
        dataState.housing.selected !== mapState.selected) &&
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

  handleMedian() {
    const { mapState } = this.props;
    let rentPromise;
    console.log(mapState.selected);
    if (mapState.layer === "neighborhood") {
      let neighborhood = mapState.neighborhood;
      let value = MEDIAN_RENT[neighborhood].toLocaleString();
      rentPromise = [["Median Gross Rent", `$${value}`]];
      console.log(rentPromise);
    } else if (mapState.layer === "tracts" && mapState.selected.length > 1) {
      rentPromise = null;
    } else {
      rentPromise = _loadAsyncData(this.props, "group(B25031)");
    }
    return rentPromise;
  }

  processHousingData(data) {
    return [
      [
        "Studio or 1 bedroom",
        parseInt(data["B25042_003E"]) + parseInt(data["B25042_004E"]),
        parseInt(data["B25042_010E"]) + parseInt(data["B25042_011E"]),
      ],
      [
        "2 bedrooms",
        parseInt(data["B25042_005E"]),
        parseInt(data["B25042_012E"]),
      ],

      [
        "3 or more bedrooms",
        parseInt(data["B25042_006E"]) +
          parseInt(data["B25042_007E"]) +
          parseInt(data["B25042_008E"]),
        parseInt(data["B25042_013E"]) +
          parseInt(data["B25042_014E"]) +
          parseInt(data["B25042_015E"]),
      ],
      [
        "Total",
        parseInt(data["B25042_003E"]) +
          parseInt(data["B25042_004E"]) +
          parseInt(data["B25042_005E"]) +
          parseInt(data["B25042_006E"]) +
          parseInt(data["B25042_007E"]) +
          parseInt(data["B25042_008E"]),
        parseInt(data["B25042_010E"]) +
          parseInt(data["B25042_011E"]) +
          parseInt(data["B25042_012E"]) +
          parseInt(data["B25042_013E"]) +
          parseInt(data["B25042_014E"]) +
          parseInt(data["B25042_015E"]),
      ],
    ];
  }

  processHousingSize(data) {
    const familyTotal =
      parseInt(data["B11016_003E"]) +
      parseInt(data["B11016_004E"]) +
      parseInt(data["B11016_005E"]) +
      parseInt(data["B11016_006E"]) +
      parseInt(data["B11016_007E"]) +
      parseInt(data["B11016_008E"]);
    const nonFamilyTotal =
      parseInt(data["B11016_010E"]) +
      parseInt(data["B11016_011E"]) +
      parseInt(data["B11016_012E"]) +
      parseInt(data["B11016_013E"]) +
      parseInt(data["B11016_014E"]) +
      parseInt(data["B11016_015E"]) +
      parseInt(data["B11016_016E"]);
    return [
      ["1-person household", null, parseInt(data["B11016_010E"])],
      [
        "2-person household",
        parseInt(data["B11016_003E"]),
        parseInt(data["B11016_011E"]),
      ],
      [
        "3-person household",
        parseInt(data["B11016_004E"]),
        parseInt(data["B11016_012E"]),
      ],
      [
        "4-person household",
        parseInt(data["B11016_005E"]),
        parseInt(data["B11016_013E"]),
      ],
      [
        "5-person household",
        parseInt(data["B11016_006E"]),
        parseInt(data["B11016_014E"]),
      ],
      [
        "6-person household",
        parseInt(data["B11016_007E"]),
        parseInt(data["B11016_015E"]),
      ],
      [
        "7-or-more person household",
        parseInt(data["B11016_008E"]),
        parseInt(data["B11016_016E"]),
      ],
      ["Total", familyTotal, nonFamilyTotal],
      // ['Total', parseInt(data['B11016_001E'])],
    ];
  }
  //to deal with $3,500 + rent
  processRentData(data) {
    console.log(data);
    for (let key in data) {
      if (data[key] < 0) {
        data[key] = NaN;
      } else if (data[key] > 3500) {
        data[key] = "$3,500+";
      } else if (data[key]) {
        let value = data[key] ? data[key].toLocaleString() : NaN;
        data[key] = `$${value}`;
      }
    }
    return [
      ["No bedroom", data["B25031_002E"]],
      ["1 bedroom", data["B25031_003E"]],
      ["2 bedrooms", data["B25031_004E"]],
      ["3 bedrooms", data["B25031_005E"]],
      ["Total", data["B25031_001E"]],
    ];
  }

  processRentChartData(data) {
    for (let key in data) {
      if (data[key] < 0) {
        data[key] = NaN;
      }
    }
    return [
      ["No bedroom", parseInt(data["B25031_002E"])],
      ["1 bedroom", parseInt(data["B25031_003E"])],
      ["2 bedrooms", parseInt(data["B25031_004E"])],
      ["3 bedrooms", parseInt(data["B25031_005E"])],
      ["Total", parseInt(data["B25031_001E"])],
    ];
  }

  processRentCsvData(data) {
    console.log(data);
    for (let key in data) {
      if (data[key] < 0) {
        data[key] = NaN;
      }
    }
    return [
      ["No bedroom", parseInt(data["B25031_002E"])],
      ["1 bedroom", parseInt(data["B25031_003E"])],
      ["2 bedrooms", parseInt(data["B25031_004E"])],
      ["3 bedrooms", parseInt(data["B25031_005E"])],
      ["4 bedrooms", parseInt(data["B25031_006E"])],
      ["5 or more bedrooms", parseInt(data["B25031_007E"])],
      ["Total", parseInt(data["B25031_001E"])],
    ];
  }

  processRentPercentageData(data) {
    return [
      [
        "Less than $20,000",
        parseInt(data["B25106_026E"]) + parseInt(data["B25106_027E"]),
        parseInt(data["B25106_028E"]),
        parseInt(data["B25106_025E"]),
      ],
      [
        "$20,000 to $34,999",
        parseInt(data["B25106_030E"]) + parseInt(data["B25106_031E"]),
        parseInt(data["B25106_032E"]),
        parseInt(data["B25106_029E"]),
      ],
      [
        "$35,000 to $49,999",
        parseInt(data["B25106_034E"]) + parseInt(data["B25106_035E"]),
        parseInt(data["B25106_036E"]),
        parseInt(data["B25106_033E"]),
      ],
      [
        "$50,000 to $74,999",
        parseInt(data["B25106_038E"]) + parseInt(data["B25106_039E"]),
        parseInt(data["B25106_040E"]),
        parseInt(data["B25106_037E"]),
      ],
      [
        "$75,000 or more",
        parseInt(data["B25106_042E"]) + parseInt(data["B25106_043E"]),
        parseInt(data["B25106_044E"]),
        parseInt(data["B25106_041E"]),
      ],
      ["Zero or negative income", "", "", parseInt(data["B25106_045E"])],
      ["No cash rent", "", "", parseInt(data["B25106_046E"])],
      ["Renter-occupied housing units", "", "", parseInt(data["B25106_024E"])],
    ];
  }

  processYearBuiltData(data) {
    return [
      ["Built 2014 or later", parseInt(data["B25034_002E"])],
      ["Built 2010 to 2013", parseInt(data["B25034_003E"])],
      ["Built 2000 to 2009", parseInt(data["B25034_004E"])],
      ["Built 1990 to 1999", parseInt(data["B25034_005E"])],
      ["Built 1980 to 1989", parseInt(data["B25034_006E"])],
      ["Built 1970 to 1979", parseInt(data["B25034_007E"])],
      ["Built 1960 to 1969", parseInt(data["B25034_008E"])],
      ["Built 1950 to 1959", parseInt(data["B25034_009E"])],
      ["Built 1940 to 1949", parseInt(data["B25034_010E"])],
      ["Built 1939 or earlier", parseInt(data["B25034_011E"])],
      ["Total", parseInt(data["B25034_001E"])],
    ];
  }
  processStructureData(data) {
    return [
      ["1 detached", parseInt(data["B25024_002E"])],
      ["1 attached", parseInt(data["B25024_003E"])],
      ["2", parseInt(data["B25024_004E"])],
      ["3 or 4", parseInt(data["B25024_005E"])],
      ["5 to 9", parseInt(data["B25024_006E"])],
      ["10 to 19", parseInt(data["B25024_007E"])],
      ["20 to 49", parseInt(data["B25024_008E"])],
      ["50 or more", parseInt(data["B25024_009E"])],
      ["Mobile home", parseInt(data["B25024_010E"])],
      ["Boat RV van etc.", parseInt(data["B25024_011E"])],
      ["Total", parseInt(data["B25024_001E"])],
    ];
  }

  handleClickCode(code) {
    switch (code) {
      case "tenure":
        this.setState({ tenure: !this.state.tenure });
        break;
      case "size":
        this.setState({ size: !this.state.size });
        break;
      case "rent":
        this.setState({ rent: !this.state.rent });
        break;
      case "rentPercentage":
        this.setState({ rentPercentage: !this.state.rentPercentage });
        break;
      case "yearBuilt":
        this.setState({ yearBuilt: !this.state.yearBuilt });
      case "structure":
        this.setState({ structure: !this.state.structure });
        break;
    }
  }

  render() {
    console.log(this.props.dataState.housing);
    if (this.props.dataState.housing && !this.state.loading) {
      return (
        <div>
          {this.props.dataState.housing.data.map((part, index) => (
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

export default connect(mapStateToProps)(Housing);
