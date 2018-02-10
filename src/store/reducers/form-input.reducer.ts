import { Action } from './../actions';

import {
  FormInputStateInterface,
} from './../../models';

import {
  DESELECTED_FOOD_TYPE,
  DeselectSelectedFoodTypeAction,
  SET_SELECTED_FLIGHT_TIME,
  SET_SELECTED_FOOD_TYPE,
  SetSelectedFlightTimeAction,
  SetSelectedFoodTypeAction,
} from './../';

const getDefaultState = (): FormInputStateInterface => {
  return {
    selectedFlightTimeId: null,
    selectedFoodTypeIds: [],
  };
};

export function formInputReducer(
  state = getDefaultState(), action: Action,
): FormInputStateInterface {
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
    default:
      return state;
  }
}
