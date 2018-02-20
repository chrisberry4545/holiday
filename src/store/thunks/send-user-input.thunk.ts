import { push } from 'react-router-redux';

import { ThunkAction } from 'redux-thunk';

import {
  ActionCreator,
  Dispatch,
} from 'redux';

import {
  Action,
  setHolidayResults,
} from './../../store/';

import {
  StateInterface,
  URLS,
} from './../../models';

import {
  diContainer,
  TYPES,
} from './../../app/dependency-injection/';

import {
  HolidayApiServiceInterface,
} from './../../services';

export const sendUserInputThunk: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    const holidayApiService =
      diContainer.get<HolidayApiServiceInterface>(TYPES.HolidayApiService);
    holidayApiService.getHolidayResults(
      getState().main.formInput,
    ).then((results) => {
      return dispatch(setHolidayResults(results));
    });
    return dispatch(push(URLS.RESULTS));
  };
};
