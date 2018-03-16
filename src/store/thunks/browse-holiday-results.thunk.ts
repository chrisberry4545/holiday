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
} from './../../store/actions';

import {
  getCurrentHolidayIndexForState,
} from './../../helpers';

export const goToPreviousHolidayResultThunk: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    const state = getState();
    const currentHolidayIndex = getCurrentHolidayIndexForState(state);
    const previousHoliday = state.main.results.holidayResults[
      currentHolidayIndex - 1
    ];
    return dispatch(push(
      `/${URLS.APP.url}/${URLS.RESULTS.url}/${previousHoliday._id}`,
    ));
  };
};

export const goToNextHolidayResultThunk: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    const state = getState();
    const currentHolidayIndex = getCurrentHolidayIndexForState(state);
    const nextHoliday = state.main.results.holidayResults[
      currentHolidayIndex + 1
    ];
    return dispatch(push(
      `/${URLS.APP.url}/${URLS.RESULTS.url}/${nextHoliday._id}`,
    ));
  };
};
