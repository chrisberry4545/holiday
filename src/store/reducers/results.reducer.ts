import { Action } from './../actions';

import {
  SET_HOLIDAY_RESULTS,
  SetHolidayResultsAction,
} from './../';

import {
  ResultsStateInterface,
} from './../../models';

import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

const getDefaultState = (): ResultsStateInterface => {
  return {
    holidayResults: [],
    isLoading: false,
  };
};

const getCurrentHolidayIndex = (
  currentHoliday: HolidayInterface,
  allHolidays: HolidayInterface[],
) => {
  return allHolidays.findIndex((holiday) => (
    currentHoliday._id === holiday._id
  ));
};

export function resultsReducer(
  state = getDefaultState(), action: Action,
): ResultsStateInterface {
  switch (action.type) {
    case SET_HOLIDAY_RESULTS:
      const apiResults = (action as SetHolidayResultsAction);
      return {
        ...state,
        holidayResults: apiResults.holidayResults,
        isLoading: false,
      };
    default:
      return state;
  }
}
