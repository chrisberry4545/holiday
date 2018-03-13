import { Action } from './../actions';

import {
  GO_TO_HOLIDAY_RESULT,
  GoToHolidayResultAction,
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
    hasNextHoliday: false,
    hasPreviousHoliday: false,
    holidayIndex: -1,
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
        hasNextHoliday: true,
        hasPreviousHoliday: false,
        holidayResults: apiResults.holidayResults,
        isLoading: false,
      };
    case GO_TO_HOLIDAY_RESULT:
      const { holidayIndex } = action as GoToHolidayResultAction;
      return {
        ...state,
        hasNextHoliday: holidayIndex < state.holidayResults.length - 1,
        hasPreviousHoliday: holidayIndex > 0,
        holidayIndex,
      };
    default:
      return state;
  }
}
