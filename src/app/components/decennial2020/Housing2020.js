import React from 'react';
import LoadingBlock from '../public/LoadingBlock';
import { connect } from 'react-redux';
import {process2020CsvData} from '../public/utils';
import {_loadCensus2020Data,} from '../public/api_census';
import EmptyMessage from '../public/EmptyMessage';
import {
  clearData,
  updateGroupQuarter,
  updateHousing,
} from '../../redux/actions';
import VariableWithChart from '../public/VariableWithChart';
import PieChart from '../public/PieChart';
import ChartCentered from '../public/ChartCentered';

class Housing2020 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  setDataToState = async () => {
    const { layer, neighborhood, selected } = this.props.mapState;
    this.setState({ loading: true });
    const data = await _loadCensus2020Data(layer, selected, ['group(H1)']);

    

    console.log(data);

    console.log(this.props)

    this.props.dispatch(
      updateHousing({
        selected: this.props.mapState.selected,

        data: [
          {
            title: 'Housing',
            data: this.generateTableData(data),
            csv: process2020CsvData(
              data,
              this.processData,
              ['', 'Count'],
              [],
              layer,
              neighborhood
            ),
            header: ['', 'Count'],
            tableID: 'H1',
            universe: 'Housing units',
          },
        ],      
      })
    );

    console.log(this.props)

    this.setState({ loading: false });
  };

  componentDidMount() {
    const { mapState, dataState } = this.props;
    if (
      (!dataState.housing ||
        dataState.housing.selected !== mapState.selected) &&
      (mapState.selected.length !== 0 || mapState.layer == 'city')
    ) {
      this.setDataToState(this.props);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mapState.selected !== this.props.mapState.selected) {
      if (
        this.props.mapState.selected.length !== 0 ||
        this.props.mapState.layer == 'city'
      ) {
        this.setDataToState(this.props);
      } else {
        this.props.dispatch(clearData());
      }
    }
  }

  combineData = (data) => {
    console.log(data)
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
    ['Occupied', data.H1_002N],
    ['Vacant', data.H1_003N],
    ['Total', data.H1_001N],
  ];

  generateTableData = (rawData) => {
    return this.processData(this.combineData(rawData));
  };

  render() {
    if (this.props.dataState.housing && !this.state.loading) {
      return (
        <div>
          {this.props.dataState.housing.data.map((part, index) => (
            <div key={index}>
              <VariableWithChart open={true} info={part} />
              <ChartCentered Component={PieChart} data={part.data} />
            </div>
          ))}
        </div>
      );
    } else if (this.state.loading) {
      console.log('LOADING');
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

export default connect(mapStateToProps)(Housing2020);
