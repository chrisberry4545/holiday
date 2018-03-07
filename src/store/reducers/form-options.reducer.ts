import { Action } from './../actions';

import {
  FormOptionsInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  SET_SELECTED_FLIGHT_TIME,
  SetSelectedFlightTimeAction,
} from './../';

const getDefaultState = (): FormOptionsInterface => {
  return {
    possibleActivities: [],
    possibleCostRanges: [],
    possibleFlightTimes: [],
    possibleFoodImportantOptions: [],
    possibleTemperatures: [],
  };
};

export function formOptionsReducer(
  state = getDefaultState(), action: Action,
): FormOptionsInterface {
  switch (action.type) {
    default:
      return state;
  }
}
