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
  selectNextHolidayId,
  selectPreviousHolidayId,
} from './../../store';

import {
  getCurrentHolidayIndexForState,
} from './../../helpers';

export const goToPreviousHolidayResultThunk: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    return dispatch(push(
      `${URLS.RESULTS.url}/${selectPreviousHolidayId(getState())}`,
    ));
  };
};

export const goToNextHolidayResultThunk: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    return dispatch(push(
      `${URLS.RESULTS.url}/${selectNextHolidayId(getState())}`,
    ));
  };
};
