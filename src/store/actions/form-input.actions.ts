import {
  Action,
} from './';

export interface SetSelectedFlightTimeAction extends Action {
  selectedFlightTimeId: string;
}
export const SET_SELECTED_FLIGHT_TIME = 'SET_SELECTED_FLIGHT_TIME';
export function setSelectedFlightTime(
  selectedFlightTimeId: string,
): SetSelectedFlightTimeAction {
  return {
    selectedFlightTimeId,
    type: SET_SELECTED_FLIGHT_TIME,
  };
}

export interface SetSelectedCostRangeAction extends Action {
  selectedCostId: string;
}
export const SET_SELECTED_COST_RANGE = 'SET_SELECTED_COST_RANGE';
export function setSelectedCostRange(
  selectedCostId: string,
): SetSelectedCostRangeAction {
  return {
    selectedCostId,
    type: SET_SELECTED_COST_RANGE,
  };
}

export interface SetSelectedTemperatureRange extends Action {
  selectedTemperatureId: string;
}
export const SET_SELECTED_TEMPERATURE_RANGE = 'SET_SELECTED_TEMPERATURE_RANGE';
export function setSelectedTemperature(
  selectedTemperatureId: string,
): SetSelectedTemperatureRange {
  return {
    selectedTemperatureId,
    type: SET_SELECTED_TEMPERATURE_RANGE,
  };
}

export interface SetSelectedFoodTypeAction extends Action {
  selectedFoodTypeId: string;
}
export const SET_SELECTED_FOOD_TYPE = 'SET_SELECTED_FOOD_TYPE';
export function setSelectedFoodType(
  selectedFoodTypeId: string,
): SetSelectedFoodTypeAction {
  return {
    selectedFoodTypeId,
    type: SET_SELECTED_FOOD_TYPE,
  };
}

export interface DeselectSelectedFoodTypeAction extends Action {
  deselectedFoodTypeId: string;
}
export const DESELECTED_FOOD_TYPE = 'DESELECTED_FOOD_TYPE';
export function deselectedFoodType(
  deselectedFoodTypeId: string,
): DeselectSelectedFoodTypeAction {
  return {
    deselectedFoodTypeId,
    type: DESELECTED_FOOD_TYPE,
  };
}

export interface SetSelectedActivityCategoryAction extends Action {
  selectedActivityCategoryId: string;
}
export const SET_SELECTED_ACTIVITY_CATEGORY = 'SET_SELECTED_ACTIVITY_CATEGORY';
export function setSelectedActivityCategory(
  selectedActivityCategoryId: string,
): SetSelectedActivityCategoryAction {
  return {
    selectedActivityCategoryId,
    type: SET_SELECTED_ACTIVITY_CATEGORY,
  };
}

export interface DeselectActivityCategoryAction extends Action {
  deselectedActivityCategoryId: string;
}
export const DESELECT_ACTIVITY_CATEGORY = 'DESELECT_ACTIVITY_CATEGORY';
export function deselectActivityCategory(
  deselectedActivityCategoryId: string,
): DeselectActivityCategoryAction {
  return {
    deselectedActivityCategoryId,
    type: DESELECT_ACTIVITY_CATEGORY,
  };
}
