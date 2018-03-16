import { push } from 'react-router-redux';

import { ThunkAction } from 'redux-thunk';

import {
  ActionCreator,
  Dispatch,
} from 'redux';

import {
  Action,
  goToNextHolidayResultThunk,
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
ThunkAction<Promise<Action>, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Promise<Action> => {
    const holidayApiService =
      diContainer.get<HolidayApiServiceInterface>(TYPES.HolidayApiService);
    return holidayApiService.getHolidayResults(
      getState().main.formInput,
    ).then((results) => {
      dispatch(setHolidayResults(results));
      return dispatch(goToNextHolidayResultThunk());
    });
  };
};
