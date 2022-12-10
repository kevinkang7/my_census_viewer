import React from "react";
import LoadingBlock from "../public/LoadingBlock";
import { connect } from "react-redux";
import { process2020CsvData } from "../public/utils";
import { _loadCensus2020Data } from "../public/api_census";
import EmptyMessage from "../public/EmptyMessage";
import { clearData, updateGroupQuarter } from "../../redux/actions";
import VariableWithChart from "../public/VariableWithChart";
import ColumnChart from "../public/ColumnChart";
import ChartCentered from "../public/ChartCentered";

class GroupQuarter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  setDataToState = async () => {
    const { layer, neighborhood, selected } = this.props.mapState;
    this.setState({ loading: true });
    const data = await _loadCensus2020Data(layer, selected, ["group(P5)"]);

    console.log(data);

    this.props.dispatch(
      updateGroupQuarter({
        selected: this.props.mapState.selected,
        data: [
          {
            title: "Group Quarter Population",
            data: this.generateTableData(data),
            csv: process2020CsvData(
              data,
              this.processData,
              ["", "Population"],
              [],
              layer,
              neighborhood
            ),
            header: ["", "Population"],
            yCategory: ["Population"],
            tableID: "P5",
            universe: "Population in group quarters",
          },
        ],
      })
    );

    this.setState({ loading: false });
  };

  componentDidMount() {
    const { mapState, dataState } = this.props;
    if (
      (!dataState.groupQuarter ||
        dataState.groupQuarter.selected !== mapState.selected) &&
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

  combineData = (data) => {
    const result = {};
    const keys = Object.keys(data[0]);
    keys.forEach((key) => {
      let temp = 0;
      data.forEach((item) => {
        temp += parseInt(item[key]);
      });
      result[key] = temp;
    });
    return result;
  };

  processData = (data) => [
    ["Correctional facilities for adults", data.P5_003N],
    ["Juvenile facilities", data.P5_004N],
    ["Nursing facilities/Skilled-nursing facilities", data.P5_005N],
    ["Other institutional facilities", data.P5_006N],
    ["College/University student housing", data.P5_008N],
    ["Military quarters", data.P5_009N],
    ["Other noninstitutional facilities", data.P5_010N],
    ["Total", data.P5_001N],
  ];

  generateTableData = (rawData) => {
    return this.processData(this.combineData(rawData));
  };

  render() {
    if (this.props.dataState.groupQuarter && !this.state.loading) {
      return (
        <div>
          {this.props.dataState.groupQuarter.data.map((part, index) => (
            <div key={index}>
              <VariableWithChart open={true} info={part} />
              <ChartCentered
                Component={ColumnChart}
                data={part.data}
                yCategory={part.yCategory}
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

export default connect(mapStateToProps)(GroupQuarter);
