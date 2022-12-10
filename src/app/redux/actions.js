import { ActionTypes } from './actionTypes';

export function updateView(view) {
  return {
    type: ActionTypes.UPDATE_VIEW,
    view: view,
  };
}
export function updateMap(map) {
  return {
    type: ActionTypes.UPDATE_MAP,
    map: map,
  };
}

export function updateSelected(selected) {
  return {
    type: ActionTypes.UPDATE_SELECTED,
    selected: selected,
  };
}


export function updateSelected2(selected2) {
  return {
    type: ActionTypes.UPDATE_SELECTED2,
    selected2: selected2,
  };
}


export function updateNeighborhood(neighborhood) {
  return {
    type: ActionTypes.UPDATE_NEIGHBORHOOD,
    neighborhood: neighborhood,
  };
}

export function updateDrawer(open) {
  return {
    type: ActionTypes.UPDATE_DRAWER,
    open: open,
  };
}

export function changeCategory(category) {
  return {
    type: ActionTypes.CHANGE_CATEGORY,
    category: category,
  };
}

export function updateLayer(layer) {
  return {
    type: ActionTypes.UPDATE_LAYER,
    layer: layer,
  };
}

export function updateDrawerSelection(drawerSelection) {
  return {
    type: ActionTypes.UPDATE_DRAWERSELECTION,
    payload: drawerSelection,
  };
}

export function updatePopulation(data) {
  return {
    type: ActionTypes.UPDATE_POPULATION,
    payload: data,
  };
}

export function updateEducation(data) {
  return {
    type: ActionTypes.UPDATE_EDUCATION,
    payload: data,
  };
}

export function updateIncome(data) {
  return {
    type: ActionTypes.UPDATE_INCOME,
    payload: data,
  };
}

export function updateHousing(data) {
  return {
    type: ActionTypes.UPDATE_HOUSING,
    payload: data,
  };
}

export function updateLabor(data) {
  return {
    type: ActionTypes.UPDATE_LABOR,
    payload: data,
  };
}

export function updateGroupQuarter(data) {
  return {
    type: ActionTypes.UPDATE_GROUP_QUARTER,
    payload: data,
  };
}

export function clearData() {
  return {
    type: ActionTypes.CLEAR_DATA,
  };
}

export function openInfo(open) {
  return {
    type: ActionTypes.OPEN_INFO,
    payload: open,
  };
}

export function changeSurvey(survey) {
  return {
    type: ActionTypes.CHANGE_SURVEY,
    payload: survey,
  };
}
