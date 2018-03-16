import { push } from 'react-router-redux';

import {
  StateInterface,
  URLS,
} from './../../models';

import { ThunkAction } from 'redux-thunk';

import {
  ActionCreator,
  Dispatch,
} from 'redux';

import {
  Action,
  goToHolidayResult,
} from './../../store/actions';

export const goToPreviousHolidayResultThunk: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    const previousHolidayIndex = getState().main.results.holidayIndex - 1;
    dispatch(goToHolidayResult(previousHolidayIndex));
    return dispatch(push(
      `/${URLS.APP.url}/${URLS.RESULTS.url}` +
      `/${previousHolidayIndex + 1}`,
    ));
  };
};

export const goToNextHolidayResultThunk: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    const nextHolidayIndex = getState().main.results.holidayIndex + 1;
    dispatch(goToHolidayResult(nextHolidayIndex));
    return dispatch(push(
      `/${URLS.APP.url}/${URLS.RESULTS.url}` +
      `/${nextHolidayIndex + 1}`,
    ));
  };
};
