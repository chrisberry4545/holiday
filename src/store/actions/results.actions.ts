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

export interface GoToHolidayResultAction extends Action {
  holidayIndex: number;
}
export const GO_TO_HOLIDAY_RESULT = 'GO_TO_HOLIDAY_RESULT';
export function goToHolidayResult(
  holidayIndex: number,
): GoToHolidayResultAction {
  return {
    holidayIndex,
    type: GO_TO_HOLIDAY_RESULT,
  };
}
