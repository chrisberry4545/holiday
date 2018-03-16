import {
  StateInterface,
} from './../../models';

import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export const getHolidayIdFromUrl = (
  url: string,
) => {
  return url.substring(url.lastIndexOf('/') + 1, url.length);
};

export const getCurrentHolidayIndexForState = (
  state: StateInterface,
) => {
  return state.main.results.holidayResults.findIndex((holiday) => (
    holiday._id === getHolidayIdFromUrl(state.router.location.pathname)
  ));
};

export const getCurrentHolidayForState = (
  state: StateInterface,
) => {
  return state.main.results.holidayResults.find((holiday) => (
    holiday._id === getHolidayIdFromUrl(state.router.location.pathname)
  ));
};
