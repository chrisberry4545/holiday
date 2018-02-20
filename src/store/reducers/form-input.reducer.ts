import { Action } from './../actions';

import {
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  DESELECT_ACTIVITY_CATEGORY,
  DeselectActivityCategoryAction,
  DESELECTED_FOOD_TYPE,
  DeselectSelectedFoodTypeAction,
  SET_SELECTED_ACTIVITY_CATEGORY,
  SET_SELECTED_COST_RANGE,
  SET_SELECTED_FLIGHT_TIME,
  SET_SELECTED_FOOD_TYPE,
  SET_SELECTED_TEMPERATURE_RANGE,
  SetSelectedActivityCategoryAction,
  SetSelectedCostRangeAction,
  SetSelectedFlightTimeAction,
  SetSelectedFoodTypeAction,
  SetSelectedTemperatureRange,
} from './../';

const getDefaultState = (): UserInputInterface => {
  return {
    selectedActivityTypeIds: [],
    selectedCostRangeId: null,
    selectedFlightTimeId: null,
    selectedFoodTypeIds: [],
    selectedTemperatureId: null,
  };
};

export function formInputReducer(
  state = getDefaultState(), action: Action,
): UserInputInterface {
  switch (action.type) {
    case SET_SELECTED_FLIGHT_TIME:
      return {
        ...state,
        selectedFlightTimeId: (action as SetSelectedFlightTimeAction)
          .selectedFlightTimeId,
      };

    case SET_SELECTED_FOOD_TYPE:
      return {
        ...state,
        selectedFoodTypeIds: [
          ...state.selectedFoodTypeIds,
          (action as SetSelectedFoodTypeAction).selectedFoodTypeId,
        ],
      };
    case DESELECTED_FOOD_TYPE:
      return {
        ...state,
        selectedFoodTypeIds: state.selectedFoodTypeIds.filter((id) => (
          id !== (action as DeselectSelectedFoodTypeAction).deselectedFoodTypeId
        )),
      };

    case SET_SELECTED_COST_RANGE:
      return {
        ...state,
        selectedCostRangeId: (action as SetSelectedCostRangeAction)
          .selectedCostId,
      };

    case SET_SELECTED_TEMPERATURE_RANGE:
      return {
        ...state,
        selectedTemperatureId: (action as SetSelectedTemperatureRange)
          .selectedTemperatureId,
      };

    case SET_SELECTED_ACTIVITY_CATEGORY:
      return {
        ...state,
        selectedActivityTypeIds: [
          ...state.selectedActivityTypeIds,
          (action as SetSelectedActivityCategoryAction)
            .selectedActivityCategoryId,
        ],
      };
    case DESELECT_ACTIVITY_CATEGORY:
      return {
        ...state,
        selectedActivityTypeIds: state.selectedActivityTypeIds.filter((id) => (
          id !== (action as DeselectActivityCategoryAction)
            .deselectedActivityCategoryId
        )),
      };
    default:
      return state;
  }
}
