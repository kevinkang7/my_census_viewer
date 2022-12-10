import React from "react";
import { Map } from "@esri/react-arcgis";
import { connect } from "react-redux";
import { loadModules } from "esri-loader";
import { updateView, updateMap } from "../../redux/actions";
import { handleSelection } from "../public/utils";
import Home from "@arcgis/core/widgets/Home";
//import Sketch from "@arcgis/core/widgets/Sketch";
import { FeaturedVideoSharp } from "@material-ui/icons";

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
      "esri/layers/FeatureLayer",
      "esri/layers/support/LabelClass",
      //'esri/layers/GraphicsLayer',
      //'esri/widgets/Sketch',
      //'esri/widgets/Sketch/SketchViewModel',
      //"esri/layers/CSVLayer",
    ]).then(([FeatureLayer, LabelClass]) => {
      const layer = new FeatureLayer({
        id: "tracts",
        url: "https://gis.bostonplans.org/hosting/rest/services/Hosted/Census_2020_Tracts/FeatureServer/0",
      });
      //use layer.outFields. layer.fields doesn't work because field names are from the service
      //Including all the fields outFields: layer.outFields = ["*"];
      //TRACTCE10/TRACTCE20 is 6-digit tract number. NAME10/NAME20 is formal tract number.
      //we need TRACTCE10 to call API, NAME10 to show labels in the map
      //2010 tract based nbhd url:
      //url: "https://services.arcgis.com/sFnw0xNflSi8J0uh/arcgis/rest/services/Census_2010_Tracts/FeatureServer/0"
      //"https://gis.bostonplans.org/hosting/rest/services/Hosted/Census_2020_Tracts/FeatureServer/0"
      console.log(layer);
      layer.outFields = ["name20", "tractce20"];

      const layer2 = new FeatureLayer({
        id: "neighborhood",
        url: "https://gis.bostonplans.org/hosting/rest/services/Hosted/Neighborhoods_CT20/FeatureServer/79",
        visible: false,
      });

      const layer3 = new FeatureLayer({
        id: "city",
        url: "http://gis.cityofboston.gov/arcgis/rest/services/Planning/OpenData/MapServer/9",
        visible: false,
      });

      layer.renderer = {
        type: "simple",
        symbol: {
          type: "simple-fill",

          color: [0, 0, 0, 0.1],
          outline: {
            width: 2,
            color: "grey",
            haloSize: 1.5,
            haloColor: "white",
          },
        },
      };
      layer2.renderer = {
        type: "simple",
        symbol: {
          type: "simple-fill",

          color: [0, 0, 0, 0.1],
          outline: {
            width: 2,
            color: "grey",
            haloSize: 1.5,
            haloColor: "white",
          },
        },
      };
      layer3.renderer = {
        type: "simple",
        symbol: {
          type: "simple-fill",

          //    color: [0, 0, 0, 0.1],
          //highlight color
          color: [51, 51, 204, 0.1],
          outline: {
            width: 2,
            //color: 'grey',
            //highlight color
            color: [51, 51, 204, 0.9],
            haloSize: 1.5,
            haloColor: "white",
          },
        },
      };

      let statesLabelClass = new LabelClass({
        labelExpressionInfo: { expression: `$feature.name20` },
        symbol: {
          type: "text",
          color: "black",
          haloSize: 1.5,
          haloColor: "white",
        },
      });

      layer.labelingInfo = [statesLabelClass];

      statesLabelClass = new LabelClass({
        labelExpressionInfo: { expression: "$feature.Neighborhood" },
        symbol: {
          type: "text",
          color: "black",
          haloSize: 1.5,
          haloColor: "white",
        },
      });

      layer2.labelingInfo = [statesLabelClass];

      that.setState({ layer: layer });
      that.setState({ neighborhood: layer2 });
      map.addMany([layer, layer2, layer3]);

      var homeBtn = new Home({
        view: view,
      });
      view.ui.add(homeBtn, "top-left");

      //   const graphicsLayer = new GraphicsLayer();

      //    const polygonGraphicsLayer = new GraphicsLayer();
      //    map.add(polygonGraphicsLayer);
    });
  };

  handleOnClick = (e) => {
    //   console.log(e)

    handleSelection(e, this.props.mapState, this.props.dispatch);
  };

  componentDidUpdate(prevProps) {
    const { layer, map } = this.props.mapState;
    if (prevProps.mapState.layer && prevProps.mapState.layer !== layer) {
      if (layer === "neighborhood") {
        map.findLayerById("tracts").visible = false;
        map.findLayerById("neighborhood").visible = true;
        map.findLayerById("city").visible = false;
      } else if (layer === "tracts") {
        map.findLayerById("tracts").visible = true;
        map.findLayerById("neighborhood").visible = false;
        map.findLayerById("city").visible = false;
      } else if (layer === "city") {
        map.findLayerById("city").visible = true;
        map.findLayerById("tracts").visible = false;
        map.findLayerById("neighborhood").visible = false;
      }
    }
  }

  render() {
    return (
      <Map
        style={{ width: "100vw", height: window.innerHeight - 64 }}
        mapProperties={{
          basemap: "gray-vector",
        }}
        viewProperties={{
          center: [-71.08499252929566, 42.326779376487536],
          zoom: 12,
          constraints: {
            geometry: {
              type: "extent",
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
