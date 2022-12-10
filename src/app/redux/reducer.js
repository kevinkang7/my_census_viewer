import { combineReducers } from 'redux';
import { ActionTypes } from './actionTypes';

const initMapState = {
  survey: null,
  map: null,
  view: null,
  selected: [],
  selected2:[],
  layer: null,
  neighborhood: null,
};

const initGeneralState = {
  drawerOpen: false,
  drawerSelection: 'point',
  category: 'population',
  infoOpen: false,
};

const initDataState = {
  population: null,
  education: null,
  income: null,
  housing: null,
  labor: null,
  groupQuarter: null,
};

function general(state = initGeneralState, action) {
  if (typeof state === 'undefined') {
    return initGeneralState;
  }
  switch (action.type) {
    case ActionTypes.UPDATE_DRAWER:
      return {
        ...state,
        drawerOpen: action.open,
      };
    case ActionTypes.UPDATE_DRAWERSELECTION:
      return {
        ...state,
        drawerSelection: action.payload,
      };
    case ActionTypes.CHANGE_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case ActionTypes.OPEN_INFO:
      return {
        ...state,
        infoOpen: action.payload,
      };
  }

  return state;
}

function map(state = initMapState, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case ActionTypes.CHANGE_SURVEY:
      return {
        ...state,
        survey: action.payload,
      };
    case ActionTypes.UPDATE_VIEW:
      return {
        ...state,
        view: action.view,
      };
    case ActionTypes.UPDATE_MAP:
      return {
        ...state,
        map: action.map,
      };
    case ActionTypes.UPDATE_SELECTED:
      return {
        ...state,
        selected: action.selected,
      };
    
      case ActionTypes.UPDATE_SELECTED2:
        return {
          ...state,
          selected2: action.selected2,
        };
  

    case ActionTypes.UPDATE_NEIGHBORHOOD:
      return {
        ...state,
        neighborhood: action.neighborhood,
      };
    case ActionTypes.UPDATE_LAYER:
      return {
        ...state,
        layer: action.layer,
      };

    default:
      return state;
  }
}

const data = (state = initDataState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_POPULATION:
      return {
        ...state,
        population: action.payload,
      };
    case ActionTypes.UPDATE_EDUCATION:
      return {
        ...state,
        education: action.payload,
      };
    case ActionTypes.UPDATE_INCOME:
      return {
        ...state,
        income: action.payload,
      };
    case ActionTypes.UPDATE_HOUSING:
      return {
        ...state,
        housing: action.payload,
      };
    case ActionTypes.UPDATE_LABOR:
      return {
        ...state,
        labor: action.payload,
      };
    case ActionTypes.UPDATE_GROUP_QUARTER:
      return {
        ...state,
        groupQuarter: action.payload,
      };
    case ActionTypes.CLEAR_DATA:
      return {
        ...state,
        population: null,
        education: null,
        income: null,
        housing: null,
        labor: null,
        groupQuarter: null,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  map,
  general,
  data,
});

export default reducer;
