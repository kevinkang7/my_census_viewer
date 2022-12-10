import React from 'react';
import { Map } from '@esri/react-arcgis';
import { connect } from 'react-redux';
import { loadModules } from 'esri-loader';
import { updateView, updateMap } from '../../redux/actions';
import { handleSelection } from '../public/utils';
import Home from '@arcgis/core/widgets/Home';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      view: null,
      layer: null,
      neighborhood: null,
    };
  }

  handleMapLoad = (map, view) => {
    let that = this;
    this.setState({ map, view });
    this.props.dispatch(updateView(view));
    this.props.dispatch(updateMap(map));

    loadModules([
      'esri/layers/FeatureLayer',
      'esri/layers/support/LabelClass',
    ]).then(([FeatureLayer, LabelClass]) => {
      const layer = new FeatureLayer({
        id: 'blockgroups',
        url: 'https://gis.bostonplans.org/hosting/rest/services/Hosted/US_Census_20_Block_Groups_Public/FeatureServer/0',
      });

      const layer2 = new FeatureLayer({
        id: 'neighborhood',
        url: 'https://gis.bostonplans.org/hosting/rest/services/Hosted/Neighborhoods_BG20/FeatureServer',
        visible: false,
      });

      const layer3 = new FeatureLayer({
        id: 'city',
        url: 'http://gis.cityofboston.gov/arcgis/rest/services/Planning/OpenData/MapServer/9',
        visible: false,
      });

      layer.renderer = {
        type: 'simple',
        symbol: {
          type: 'simple-fill',

          color: [0, 0, 0, 0.1],
          outline: {
            width: 2,
            color: 'grey',
            haloSize: 1.5,
            haloColor: 'white',
          },
        },
      };
      layer2.renderer = {
        type: 'simple',
        symbol: {
          type: 'simple-fill',

          color: [0, 0, 0, 0.1],
          outline: {
            width: 2,
            color: 'grey',
            haloSize: 1.5,
            haloColor: 'white',
          },
        },
      };
      layer3.renderer = {
        type: 'simple',
        symbol: {
          type: 'simple-fill',

       //color: [0, 0, 0, 0.1],
       //highlight color
          color: [51, 51, 204, 0.1],
          outline: {
            width: 2,
           // color: 'grey',
          //highlight color
           color: [51, 51, 204, 0.9],
            haloSize: 1.5,
            haloColor: 'white',
          },
        },
      };

      let statesLabelClass = new LabelClass({
        labelExpressionInfo: {
          expression: '$feature.bgid',
        },
        // minScale: 50000,
        symbol: {
          font: { size: 8 },
          type: 'text',
          color: 'black',
          haloSize: 1,
          haloColor: 'white',
        },
      });

      layer.labelingInfo = [statesLabelClass];

      statesLabelClass = new LabelClass({
        labelExpressionInfo: {
          expression: '$feature.blockgr2020_ctr_neighb_name',
        },
        symbol: {
          type: 'text',
          color: 'black',
          haloSize: 1.5,
          haloColor: 'white',
        },
      });

      layer2.labelingInfo = [statesLabelClass];

      that.setState({ layer: layer });
      that.setState({ neighborhood: layer2 });
      map.addMany([layer, layer2, layer3]);

      var homeBtn = new Home({
        view: view,
      });
      view.ui.add(homeBtn, 'top-left');
    });
  };

  handleOnClick = (e) => {
    handleSelection(e, this.props.mapState, this.props.dispatch);
  };

  componentDidUpdate(prevProps) {
    const { layer, map } = this.props.mapState;
    if (prevProps.mapState.layer && prevProps.mapState.layer !== layer) {
      if (layer === 'neighborhood') {
        map.findLayerById('blockgroups').visible = false;
        map.findLayerById('neighborhood').visible = true;
        map.findLayerById('city').visible = false;
      } else if (layer === 'blockgroups') {
        map.findLayerById('blockgroups').visible = true;
        map.findLayerById('neighborhood').visible = false;
        map.findLayerById('city').visible = false;
      } else if (layer === 'city') {
        map.findLayerById('city').visible = true;
        map.findLayerById('blockgroups').visible = false;
        map.findLayerById('neighborhood').visible = false;
      }
    }
  }

  render() {
    return (
      <Map
        style={{ width: '100vw', height: window.innerHeight - 64 }}
        mapProperties={{
          basemap: 'gray-vector',
        }}
        viewProperties={{
          center: [-71.08499252929566, 42.326779376487536],
          zoom: 12,
          constraints: {
            geometry: {
              type: 'extent',
              xmin: -71.5,
              ymin: 42.15,
              xmax: -70.6,
              ymax: 42.5,
            },
            minScale: 500000,
          },
          highlightOptions: {
            color: [51, 51, 204, 0.9],
            fillOpacity: 0.1,
          },
        }}
        onClick={this.handleOnClick}
        onLoad={this.handleMapLoad}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  mapState: state.map,
  generalState: state.general,
});

export default connect(mapStateToProps)(MapView);
