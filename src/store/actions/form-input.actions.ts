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
