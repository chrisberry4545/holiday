import {
  Action,
} from './';

import {
  FlightTimesInterface,
} from './../../models';

export interface SetSelectedFlightTimeAction extends Action {
  selectedFlightTimeId: string;
}
export const SET_SELECTED_FLIGHT_TIME = 'SET_SELECTED_FLIGHT_TIME';
export function setSelectedFlightTime(
  selectedFlightTimeId: string,
): SetSelectedFlightTimeAction {
  return {
    selectedFlightTimeId,
    type: SET_SELECTED_FLIGHT_TIME,
  };
}
