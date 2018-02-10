import { Action } from './../actions';

import {
  FormInputStateInterface,
} from './../../models';

import {
  SET_SELECTED_FLIGHT_TIME,
  SetSelectedFlightTimeAction,
} from './../';

const getDefaultState = (): FormInputStateInterface => {
  return {
    selectedFlightTimeId: null,
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
    default:
      return state;
  }
}
