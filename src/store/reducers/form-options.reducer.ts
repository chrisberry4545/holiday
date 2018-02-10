import { Action } from './../actions';

import {
  FormOptionsStateInterface,
} from './../../models';

import {
  SET_SELECTED_FLIGHT_TIME,
  SetSelectedFlightTimeAction,
} from './../';

const getDefaultState = (): FormOptionsStateInterface => {
  return {
    possibleFlightTimes: [],
  };
};

export function formOptionsReducer(
  state = getDefaultState(), action: Action,
): FormOptionsStateInterface {
  switch (action.type) {
    default:
      return state;
  }
}
