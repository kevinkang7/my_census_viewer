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
import { updateIncome, clearData } from "../../redux/actions";
import VariableWithChart from "../public/VariableWithChart";
import {
  MEDIAN_INCOME,
  MEDIAN_EARNINGS,
  MEDIAN_EARNINGS_FEMALE,
  MEDIAN_EARNINGS_MALE,
} from "./median_variables";

const formatter = Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

//console.log(formatter.format(0.125))    // 12.5%
//console.log(formatter.format(0.12001))  // 12%
//console.log(formatter.format(0.04111))  // 4.11%
//console.log(formatter.format(1))        // 100%

class Income extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      income: false,
      poverty: false,
      insurance: false,
      medianIncome: false,
      medianEarning: false,
    };
  }

  setDataToState = (props) => {
    const { layer, neighborhood } = this.props.mapState;
    this.setState({ loading: true });
    const incomePromise = _loadAsyncData(props, "group(B19001)");
    const povertyPromise = _loadAsyncData(props, "group(B17001)");
    const insurancePromise = _loadAsyncData(props, "group(B27020)");
    const medianIncomePromise = this.handleMedianIncome();
    const medianEarningPromise = this.handleMedianEarnings();
    Promise.all([
      incomePromise,
      povertyPromise,
      insurancePromise,
      medianIncomePromise,
      medianEarningPromise,
    ]).then((values) => {
      const incomeHeader = ["Household Income", "Count"];
      const povertyHeader = ["Age", "Poverty Rate (%)"];
      const insuranceHeader = ["Health Insurance", "Count"];
      const medianIncomeHeader = ["", ""];
      const medianEarningHeader = ["Gender", "Median Earnings"];
      const incomeData = this.processIncomeData(values[0][0]);
      const povertyData = this.processPovertyData(values[1][0]);
      console.log(povertyData);
      console.log(this.processPovertyData);
      const insuranceData = this.processInsuranceData(values[2][0]);
      const medianIncomeData = values[3]
        ? values[3][0][0]
          ? values[3]
          : this.processMedianIncomeData(values[3][0])
        : [];
      const medianEarningData = values[4]
        ? values[4].data
          ? values[4].data
          : this.processMedianEarningData(values[4][0])
        : [];

      const medianIncome = {
        id: "medianIncome",
        title:
          "Median Household Income in the Past 12 Months (In 2021 Inflation-adjusted Dollars)",
        chart: "",
        data: medianIncomeData,
        csv: values[3]
          ? values[3][0][0]
            ? values[3]
            : processCsvData(
                values[3][1],
                this.processMedianIncomeData,
                medianIncomeHeader,
                medianIncomeData,
                layer,
                neighborhood
              )
          : [],
        header: medianIncomeHeader,
        yCategory: ["Median household income"],
        tableID: "B19013",
        universe: "Households",
      };

      const medianEarning = {
        id: "medianEarning",
        title:
          "Median Earnings in the Past 12 Months by Gender (In 2021 Inflation-adjusted Dollars)",
        chart: "barDollar",
        chartData: values[4]
          ? values[4].chartData
            ? values[4].chartData
            : this.processMedianEarningChartData(values[4][0])
          : [],
        data: medianEarningData,
        csv: values[4]
          ? values[4].data
            ? values[4].data
            : processCsvData(
                values[4][1],
                this.processMedianEarningData,
                medianEarningHeader,
                medianEarningData,
                layer,
                neighborhood
              )
          : [],
        header: medianEarningHeader,
        yCategory: ["Median Earnings"],
        tableID: "B20017",
        universe: "Population 16 years and over with earnings",
      };

      if (this.props.mapState.layer === "neighborhood") {
        medianIncome.title =
          "Median Household Income in the Past 12 Months (In 2021 Inflation-adjusted Dollars)*";
        medianIncome.notes =
          "*Note: The BPDA Research estimates median household income at the neighborhood level using ACS Table B19001 by linear interpolation.";
        medianEarning.title =
          "Median Earnings in the Past 12 Months (In 2021 Inflation-adjusted Dollars)*";
        medianEarning.notes =
          "*Note: The BPDA Research estimates median earnings at the neighborhood level using ACS Table B20001 by linear interpolation.";
      }

      this.props.dispatch(
        updateIncome({
          selected: this.props.mapState.selected,
          data: [
            {
              id: "income",
              title:
                "Household Income in the Past 12 Months (In 2021 Inflation-adjusted Dollars)",
              chart: "bar",
              data: incomeData,
              csv: processCsvData(
                values[0][1],
                this.processIncomeData,
                incomeHeader,
                incomeData,
                layer,
                neighborhood
              ),
              header: incomeHeader,
              yCategory: ["Count"],
              tableID: "B19001",
              universe: "Households",
            },
            medianIncome,
            medianEarning,
            {
              id: "poverty",
              title: "Poverty Rate",
              chart: "bar",
              data: povertyData,
              csv: processCsvData(
                values[1][1],
                this.processPovertyData,
                povertyHeader,
                povertyData,
                layer,
                neighborhood
              ),
              header: povertyHeader,
              yCategory: ["Poverty Rate (%)"],
              tableID: "B17001",
              universe: "Population for whom poverty status is determined",
            },
            {
              id: "insurance",
              title: "Health Insurance",
              chart: "pie",
              data: insuranceData,
              csv: processCsvData(
                values[2][1],
                this.processInsuranceData,
                insuranceHeader,
                insuranceData,
                layer,
                neighborhood
              ),
              header: insuranceHeader,
              yCategory: ["Count"],
              tableID: "B27020",
              universe: "Civilian noninstitutionalized population",
            },
          ],
        })
      );
      this.setState({ loading: false });
    });
  };

  handleMedianIncome() {
    const { mapState } = this.props;
    let promise;
    if (mapState.layer === "neighborhood") {
      let neighborhood = mapState.neighborhood;
      let value = MEDIAN_INCOME[neighborhood].toLocaleString();
      promise = [["Median Household Income", `$${value}`]];
    } else if (mapState.layer === "tracts" && mapState.selected.length > 1) {
      promise = null;
    } else {
      promise = _loadAsyncData(this.props, "group(B19013)");
    }
    return promise;
  }

  handleMedianEarnings() {
    const { mapState } = this.props;
    let promise;
    if (mapState.layer === "neighborhood") {
      let neighborhood = mapState.neighborhood;
      let value1 = MEDIAN_EARNINGS_MALE[neighborhood].toLocaleString();
      let value2 = MEDIAN_EARNINGS_FEMALE[neighborhood].toLocaleString();
      let value3 = MEDIAN_EARNINGS[neighborhood].toLocaleString();
      promise = {
        data: [
          [
            "Median earnings, worked full-time year-round in the past 12 month, male",
            `$${value1}`,
          ],
          [
            "Median earnings, worked full-time year-round in the past 12 month, female",
            `$${value2}`,
          ],
          ["Median earnings in the past 12 months, all workers", `$${value3}`],
        ],
        chartData: [
          [
            "Median earnings, worked full-time year-round in the past 12 month, male",
            MEDIAN_EARNINGS_MALE[neighborhood],
          ],
          [
            "Median earnings, worked full-time year-round in the past 12 month, female",
            MEDIAN_EARNINGS_FEMALE[neighborhood],
          ],
          [
            "Median earnings in the past 12 months, all workers",
            MEDIAN_EARNINGS[neighborhood],
          ],
        ],
      };
    } else if (mapState.layer === "tracts" && mapState.selected.length > 1) {
      promise = null;
    } else {
      promise = _loadAsyncData(this.props, "group(B20017)");
    }
    return promise;
  }

  componentDidMount() {
    const { mapState, dataState } = this.props;
    if (
      (!dataState.income || dataState.income.selected !== mapState.selected) &&
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

  processIncomeData(data) {
    let les14999 =
      parseInt(data["B19001_002E"]) + parseInt(data["B19001_003E"]);
    let les24999 =
      parseInt(data["B19001_004E"]) + parseInt(data["B19001_005E"]);
    let les34999 =
      parseInt(data["B19001_006E"]) + parseInt(data["B19001_007E"]);
    let les49999 =
      parseInt(data["B19001_008E"]) +
      parseInt(data["B19001_009E"]) +
      parseInt(data["B19001_010E"]);
    let les74999 =
      parseInt(data["B19001_011E"]) + parseInt(data["B19001_012E"]);
    let les99999 = parseInt(data["B19001_013E"]);
    let les149999 =
      parseInt(data["B19001_014E"]) + parseInt(data["B19001_015E"]);
    let other = parseInt(data["B19001_016E"]) + parseInt(data["B19001_017E"]);

    let total = parseInt(data["B19001_001E"]);
    return [
      ["Less than $14,999", les14999],
      ["$15,000 - $24,999", les24999],
      ["$25,000 - $34,999", les34999],
      ["$35,000 - $49,999", les49999],
      ["$50,000 - $74,999", les74999],
      ["$75,000 - $99,999", les99999],
      ["$100,000 - $149,999", les149999],
      ["$150,000 or more", other],
      ["Total", total],
    ];
  }
  processPovertyData(data) {
    //Under 18 years
    //((B17001_004E + B17001_018E) + (B17001_005E + B17001_019E) + (B17001_006E + B17001_020E) + (B17001_007E + B17001_021E) + (B17001_008E + B17001_022E) + (B17001_009E + B17001_023E)) /
    //((B17001_004E + B17001_018E + B17001_033E + B17001_047E) + (B17001_005E + B17001_019E + B17001_034E + B17001_048E) + (B17001_006E + B17001_020E + B17001_035E + B17001_049E) +
    //(B17001_007E + B17001_021E + B17001_036E + B17001_050E) + (B17001_008E + B17001_022E + B17001_037E + B17001_051E) + (B17001_009E + B17001_023E + B17001_038E + B17001_052E))
    let temp1 =
      (parseInt(data["B17001_004E"]) +
        parseInt(data["B17001_018E"]) +
        parseInt(data["B17001_005E"]) +
        parseInt(data["B17001_019E"]) +
        parseInt(data["B17001_006E"]) +
        parseInt(data["B17001_020E"]) +
        parseInt(data["B17001_007E"]) +
        parseInt(data["B17001_021E"]) +
        parseInt(data["B17001_008E"]) +
        parseInt(data["B17001_022E"]) +
        parseInt(data["B17001_009E"]) +
        parseInt(data["B17001_023E"])) /
      (parseInt(data["B17001_004E"]) +
        parseInt(data["B17001_018E"]) +
        parseInt(data["B17001_033E"]) +
        parseInt(data["B17001_047E"]) +
        parseInt(data["B17001_005E"]) +
        parseInt(data["B17001_019E"]) +
        parseInt(data["B17001_034E"]) +
        parseInt(data["B17001_048E"]) +
        parseInt(data["B17001_006E"]) +
        parseInt(data["B17001_020E"]) +
        parseInt(data["B17001_035E"]) +
        parseInt(data["B17001_049E"]) +
        parseInt(data["B17001_007E"]) +
        parseInt(data["B17001_021E"]) +
        parseInt(data["B17001_036E"]) +
        parseInt(data["B17001_050E"]) +
        parseInt(data["B17001_008E"]) +
        parseInt(data["B17001_022E"]) +
        parseInt(data["B17001_037E"]) +
        parseInt(data["B17001_051E"]) +
        parseInt(data["B17001_009E"]) +
        parseInt(data["B17001_023E"]) +
        parseInt(data["B17001_038E"]) +
        parseInt(data["B17001_052E"]));

    //18 to 64 years
    //((B17001_010E + B17001_024E) + (B17001_011E + B17001_025E) + (B17001_012E + B17001_026E) + (B17001_013E + B17001_027E) + (B17001_014E + B17001_028E)) /
    //((B17001_010E + B17001_024E + B17001_039E + B17001_053E) + (B17001_011E + B17001_025E + B17001_040E + B17001_054E) + (B17001_012E + B17001_026E + B17001_041E + B17001_055E) +
    //(B17001_013E + B17001_027E + B17001_042E + B17001_056E) + (B17001_014E + B17001_028E + B17001_043E + B17001_057E))
    let temp2 =
      (parseInt(data["B17001_010E"]) +
        parseInt(data["B17001_024E"]) +
        parseInt(data["B17001_011E"]) +
        parseInt(data["B17001_025E"]) +
        parseInt(data["B17001_012E"]) +
        parseInt(data["B17001_026E"]) +
        parseInt(data["B17001_013E"]) +
        parseInt(data["B17001_027E"]) +
        parseInt(data["B17001_014E"]) +
        parseInt(data["B17001_028E"])) /
      (parseInt(data["B17001_010E"]) +
        parseInt(data["B17001_024E"]) +
        parseInt(data["B17001_039E"]) +
        parseInt(data["B17001_053E"]) +
        parseInt(data["B17001_011E"]) +
        parseInt(data["B17001_025E"]) +
        parseInt(data["B17001_040E"]) +
        parseInt(data["B17001_054E"]) +
        parseInt(data["B17001_012E"]) +
        parseInt(data["B17001_026E"]) +
        parseInt(data["B17001_041E"]) +
        parseInt(data["B17001_055E"]) +
        parseInt(data["B17001_013E"]) +
        parseInt(data["B17001_027E"]) +
        parseInt(data["B17001_042E"]) +
        parseInt(data["B17001_056E"]) +
        parseInt(data["B17001_014E"]) +
        parseInt(data["B17001_028E"]) +
        parseInt(data["B17001_043E"]) +
        parseInt(data["B17001_057E"]));
    //65 years and over
    //((B17001_015E + B17001_029E) + (B17001_016E + B17001_030E)) /
    //((B17001_015E + B17001_029E + B17001_044E + B17001_058E) + (B17001_016E + B17001_030E + B17001_045E + B17001_059E))
    let temp3 =
      (parseInt(data["B17001_015E"]) +
        parseInt(data["B17001_029E"]) +
        parseInt(data["B17001_016E"]) +
        parseInt(data["B17001_030E"])) /
      (parseInt(data["B17001_015E"]) +
        parseInt(data["B17001_029E"]) +
        parseInt(data["B17001_044E"]) +
        parseInt(data["B17001_058E"]) +
        parseInt(data["B17001_016E"]) +
        parseInt(data["B17001_030E"]) +
        parseInt(data["B17001_045E"]) +
        parseInt(data["B17001_059E"]));

    let total = parseInt(data["B17001_002E"]) / parseInt(data["B17001_001E"]);

    //update the format to percent

    // return [
    //   ["Under 18 years", temp1.toFixed(3) * 100],
    //   ["18 to 64 years", temp2.toFixed(3) * 100],
    //   ["65 years and over", temp3.toFixed(3) * 100],
    //   ["Total", total.toFixed(3) * 100],
    // ];
    // return [
    //   ["Under 18 years", formatter.format(temp1)],
    //   ["18 to 64 years", formatter.format(temp2)],
    //   ["65 years and over", formatter.format(temp3)],
    //   ["Total", formatter.format(total)],
    // ];
    return [
      ["Under 18 years", parseFloat((temp1 * 100).toString().substring(0, 4))],
      ["18 to 64 years", parseFloat((temp2 * 100).toString().substring(0, 4))],
      [
        "65 years and over",
        parseFloat((temp3 * 100).toString().substring(0, 4)),
      ],
      ["Total", parseFloat((total * 100).toString().substring(0, 4))],
    ];
  }

  processInsuranceData = (data) => {
    let temp1 =
      parseInt(data["B27020_004E"]) +
      parseInt(data["B27020_010E"]) +
      parseInt(data["B27020_015E"]);
    let temp2 =
      parseInt(data["B27020_005E"]) +
      parseInt(data["B27020_011E"]) +
      parseInt(data["B27020_016E"]);
    let temp3 =
      parseInt(data["B27020_006E"]) +
      parseInt(data["B27020_012E"]) +
      parseInt(data["B27020_017E"]);
    let total = parseInt(data["B27020_001E"]);
    return [
      ["With private health insurance", temp1],
      ["With public coverage", temp2],
      ["No health insurance coverage", temp3],
      ["Total", total],
    ];
  };

  processMedianIncomeData = (data) => {
    let value = data["B19013_001E"].toLocaleString();
    return [["Median household income", `$${value}`]];
  };

  processMedianEarningChartData = (data) => {
    return [
      [
        "Median earnings, worked full-time year-round in the past 12 month, male",
        parseInt(data["B20017_003E"]),
      ],
      [
        "Median earnings, worked full-time year-round in the past 12 month, female",
        parseInt(data["B20017_006E"]),
      ],
      [
        "Median earnings in the past 12 months, all workers",
        parseInt(data["B20017_001E"]),
      ],
    ];
  };

  processMedianEarningData = (data) => {
    let value1 = data["B20017_003E"].toLocaleString();
    let value2 = data["B20017_006E"].toLocaleString();
    let value3 = data["B20017_001E"].toLocaleString();
    return [
      [
        "Median earnings, worked full-time year-round in the past 12 month, male",
        `$${value1}`,
      ],
      [
        "Median earnings, worked full-time year-round in the past 12 month, female",
        `$${value2}`,
      ],
      ["Median earnings in the past 12 months, all workers", `$${value3}`],
    ];
  };

  handleClickCode(code) {
    switch (code) {
      case "income":
        this.setState({ income: !this.state.income });
        break;
      case "poverty":
        this.setState({ poverty: !this.state.poverty });
        break;
      case "insurance":
        this.setState({ insurance: !this.state.insurance });
        break;
      case "medianIncome":
        this.setState({ medianIncome: !this.state.medianIncome });
        break;
      case "medianEarning":
        this.setState({ medianEarning: !this.state.medianEarning });
        break;
      default:
    }
  }
  render() {
    if (this.props.dataState.income && !this.state.loading) {
      return (
        <div>
          {this.props.dataState.income.data.map((part, index) => (
            <div key={index}>
              <ListItem
                button
                onClick={() => {
                  this.handleClickCode(part.id);
                }}
              >
                <ListItemText>{part.title}</ListItemText>
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

export default connect(mapStateToProps)(Income);
