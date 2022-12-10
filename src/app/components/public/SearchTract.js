import React from "react";
import { loadModules } from "esri-loader";
import { connect, useDispatch } from "react-redux";
import NeighborhoodTract20 from "../../lib/neighborhood_tract";
import {
  updateSelected,
  updateSelected2,
  updateNeighborhood,
} from "../../redux/actions";
import Search from "./Search";
import { highlightPolygon } from "./utils";

const SearchTract = (props) => {
  const dispatch = useDispatch();
  const setLoading = props.setLoading;

  const queryTract = (searchText) => {
    const tractLayer = props.mapState.map.findLayerById("tracts");
    const query = tractLayer.createQuery();

    query.where = `name20 = '${searchText}'`;
    query.outFields = ["name20"];
    query.outSpatialReference = {
      wkid: 3857,
    };
    query.returnGeometry = true;
    return tractLayer.queryFeatures(query).then((response) => {
      if (props.mapState.layer === "tracts") {
        const res = handleQueryResponse(response);
        if (res === false) return false;
      } else if (props.mapState.layer === "neighborhood") {
        if (response.features.length) {
          handleResultClickNeighborhood({
            location: {
              y: response.features[0].geometry.centroid.latitude,
              x: response.features[0].geometry.centroid.longitude,
            },
          });
        } else {
          return false;
        }
      }
    });
  };

  const handleResultClickTract = (result) => {
    loadModules(["esri/geometry/Point"]).then(([Point]) => {
      let point = new Point({
        latitude: result.location.y,
        longitude: result.location.x,
        spatialReference: { wkid: 3857 },
      });
      const tractLayer = props.mapState.map.findLayerById("tracts");
      const query = tractLayer.createQuery();
      query.outFields = ["name20", "tractce20"];
      query.returnGeometry = true;
      query.geometry = point;
      query.spatialRelationship = "intersects";
      return tractLayer.queryFeatures(query).then((response) => {
        const res = handleQueryResponse(response);
        if (res === false) return false;
      });
    });
  };

  const handleResultClickNeighborhood = (result) => {
    loadModules(["esri/geometry/Point"]).then(([Point]) => {
      let point = new Point({
        latitude: result.location.y,
        longitude: result.location.x,
        spatialReference: { wkid: 3857 },
      });
      const neighborhoodLayer =
        props.mapState.map.findLayerById("neighborhood");
      const query = neighborhoodLayer.createQuery();
      //2010 tract based neighborhood, the field name is "Neighborhood"
      //2020 tract based neighborhood, the field name is "neighborhood"
      //query.outFields = ["Neighborhood"];
      query.outFields = ["neighborhood"];
      query.returnGeometry = true;
      query.geometry = point;
      query.spatialRelationship = "intersects";
      return neighborhoodLayer.queryFeatures(query).then((response) => {
        const res = handleQueryResponse(response);
        if (res === false) return false;
      });
    });
  };

  const handleQueryResponse = (response) => {
    console.log(response);
    if (response.features.length) {
      setLoading(false);
      const attributes = {};
      let tracts;
      let tracts2;
      let neighborhood = null;
      if (props.mapState.layer === "tracts") {
        const tract = response.features[0].attributes.tractce20;
        //attributes.TRACTCE10 = tract;
        tracts = [tract];
        const tract2 = response.features[0].attributes.name20;
        //attributes.name20 = tract2;
        tracts2 = [tract2];
      } else if (props.mapState.layer === "neighborhood") {
        //attributes.Neighborhood = neighborhood;
        //2010 tract based neighborhood, the field name is "Neighborhood"
        //2010 tract based neighborhood, the field name is "neighborhood"

        // neighborhood = response.features[0].attributes.Neighborhood;
        neighborhood = response.features[0].attributes.neighborhood;

        tracts = NeighborhoodTract20.filter(
          (record) => record.name === neighborhood
        )[0].tracts;
      }
      highlightPolygon(props.mapState.view, response.features[0].geometry);
      dispatch(updateNeighborhood(neighborhood));
      dispatch(updateSelected(tracts));
      dispatch(updateSelected2(tracts2));
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Search
        setLoading={setLoading}
        queryLayer={queryTract}
        handleResultClickLayer={handleResultClickTract}
        handleResultClickNeighborhood={handleResultClickNeighborhood}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  generalState: state.general,
  mapState: state.map,
});

export default connect(mapStateToProps)(SearchTract);
