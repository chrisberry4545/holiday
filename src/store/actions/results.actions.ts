import {
  Action,
} from './';

import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface SetHolidayResultsAction extends Action {
  holidayResults: HolidayInterface[];
}
export const SET_HOLIDAY_RESULTS = 'SET_HOLIDAY_RESULTS';
export function setHolidayResults(
  holidayResults: HolidayInterface[],
): SetHolidayResultsAction {
  return {
    holidayResults,
    type: SET_HOLIDAY_RESULTS,
  };
}

export const GO_TO_NEXT_HOLIDAY_RESULT = 'GO_TO_NEXT_HOLIDAY_RESULT';
export function goToNextHolidayResult(): Action {
  return {
    type: GO_TO_NEXT_HOLIDAY_RESULT,
  };
}

export const GO_TO_PREVIOUS_HOLIDAY_RESULT = 'GO_TO_PREVIOUS_HOLIDAY_RESULT';
export function goToPreviousHolidayResult(): Action {
  return {
    type: GO_TO_PREVIOUS_HOLIDAY_RESULT,
  };
}
