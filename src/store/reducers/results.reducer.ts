import { Action } from './../actions';

import {
  SET_HOLIDAY_RESULTS,
  SetHolidayResultsAction,
} from './../';

import {
  ResultsStateInterface,
} from './../../models';

const getDefaultState = (): ResultsStateInterface => {
  return {
    holidayResults: [],
    isLoading: false,
  };
};

export function resultsReducer(
  state = getDefaultState(), action: Action,
): ResultsStateInterface {
  switch (action.type) {
    case SET_HOLIDAY_RESULTS:
      return {
        ...state,
        holidayResults: (action as SetHolidayResultsAction).holidayResults,
        isLoading: false,
      };
    default:
      return state;
  }
}
