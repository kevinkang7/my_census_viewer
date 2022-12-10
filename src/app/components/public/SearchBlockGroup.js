import React from 'react';
import { loadModules } from 'esri-loader';
import { connect, useDispatch } from 'react-redux';
import {
  updateSelected,
  updateNeighborhood,
  updatePopulation,
  updateGroupQuarter,
  updateHousing,
} from '../../redux/actions';
import { BLOCKGROUP_NEIGHBORHOOD_MAP } from '../../lib/blockgroup_neighborhood';
import { handleSelection, highlightPolygon } from './utils';
import {
  generateGroupQuarterDataFor2020Neighborhood,
  generateHousingDataFor2020Neighborhood,
  generatePopulationDataFor2020Neighborhood,
} from '../decennial2020/utils2020';
import Search from './Search';

const SearchBlockGroup = (props) => {
  const dispatch = useDispatch();
  const setLoading = props.setLoading;

  const queryBlockGroup = (searchText) => {
    if (props.mapState.layer === 'neighborhood') {
      const neighborhood = BLOCKGROUP_NEIGHBORHOOD_MAP[searchText];
      if (!neighborhood) {
        return false;
      }
      dispatch(updateNeighborhood(neighborhood));
      const neighborhoodLayer =
        props.mapState.map.findLayerById('neighborhood');

      var query = neighborhoodLayer.createQuery();
      query.where = `blockgr2020_ctr_neighb_name = '${neighborhood}'`;
      query.returnGeometry = true;
      query.outSpatialReference = {
        wkid: 3857,
      };
      return neighborhoodLayer.queryFeatures(query).then((result) => {
        console.log(result);
        if (result.features.length > 0) {
          highlightPolygon(props.mapState.view, result.features[0].geometry);
          const populationData = generatePopulationDataFor2020Neighborhood(
            result.features[0].attributes
          );
          dispatch(updatePopulation(populationData));
          const groupquarterData = generateGroupQuarterDataFor2020Neighborhood(
            result.features[0].attributes
          );
          dispatch(updateGroupQuarter(groupquarterData));
          const housingData = generateHousingDataFor2020Neighborhood(
            result.features[0].attributes
          );
          dispatch(updateHousing(housingData));
          setLoading(false);
        } else {
          return false;
        }
      });
    } else {
      const searchLayer = props.mapState.map.findLayerById('blockgroups');
      const query = searchLayer.createQuery();
      query.where = `bgid = '${searchText}'`;
      query.outFields = ['bgid'];
      query.returnGeometry = true;
      query.outSpatialReference = {
        wkid: 3857,
      };
      console.log(query);
      return searchLayer.queryFeatures(query).then((response) => {
        const res = handleQueryResponse(response);
        if (res === false) return false;
      });
    }
  };

  const handleResultClickBlockGroup = (result) => {
    loadModules(['esri/geometry/Point']).then(([Point]) => {
      let point = new Point({
        latitude: result.location.y,
        longitude: result.location.x,
        spatialReference: { wkid: 3857 },
      });
      const searchLayer = props.mapState.map.findLayerById('blockgroups');
      const query = searchLayer.createQuery();
      query.outFields = ['bgid'];
      query.returnGeometry = true;
      query.geometry = point;
      query.spatialRelationship = 'intersects';
      return searchLayer.queryFeatures(query).then((response) => {
        const res = handleQueryResponse(response);
        if (res === false) return false;
      });
    });
  };

  const handleResultClickNeighborhood = (result) => {
    loadModules(['esri/geometry/Point']).then(([Point]) => {
      let point = new Point({
        latitude: result.location.y,
        longitude: result.location.x,
        spatialReference: { wkid: 3857 },
      });
      handleSelection(point, props.mapState, props.dispatch);
    });
  };

  const handleQueryResponse = (response) => {
    console.log(response);
    if (response.features.length) {
      setLoading(false);
      const attributes = {};
      let searched;
      if (props.mapState.layer === 'blockgroups') {
        const blockgroup = response.features[0].attributes.bgid;
        attributes.bgid = blockgroup;
        searched = [blockgroup];
      }
      highlightPolygon(props.mapState.view, response.features[0].geometry);
      dispatch(updateSelected(searched));
    } else {
      return false;
    }
  };

  return (
    <Search
      setLoading={setLoading}
      queryLayer={queryBlockGroup}
      handleResultClickLayer={handleResultClickBlockGroup}
      handleResultClickNeighborhood={handleResultClickNeighborhood}
    />
  );
};

const mapStateToProps = (state) => ({
  generalState: state.general,
  mapState: state.map,
});

export default connect(mapStateToProps)(SearchBlockGroup);
