import { Action } from './../actions';

import {
  GO_TO_NEXT_HOLIDAY_RESULT,
  GO_TO_PREVIOUS_HOLIDAY_RESULT,
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
    currentHoliday: null,
    hasNextHoliday: false,
    hasPreviousHoliday: false,
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
        currentHoliday: apiResults.holidayResults[0],
        hasNextHoliday: true,
        hasPreviousHoliday: false,
        holidayResults: apiResults.holidayResults,
        isLoading: false,
      };
    case GO_TO_NEXT_HOLIDAY_RESULT:
      const nextHolidayIndex = getCurrentHolidayIndex(
        state.currentHoliday, state.holidayResults,
      ) + 1;
      return {
        ...state,
        currentHoliday: state.holidayResults[nextHolidayIndex],
        hasNextHoliday: nextHolidayIndex < state.holidayResults.length - 1,
        hasPreviousHoliday: true,
      };
    case GO_TO_PREVIOUS_HOLIDAY_RESULT:
      const previousHolidayIndex = getCurrentHolidayIndex(
        state.currentHoliday, state.holidayResults,
      ) - 1;
      return {
        ...state,
        currentHoliday: state.holidayResults[previousHolidayIndex],
        hasNextHoliday: true,
        hasPreviousHoliday: previousHolidayIndex > 0,
      };
    default:
      return state;
  }
}
