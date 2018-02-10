import { push } from 'react-router-redux';

import {
  Dispatch,
} from 'redux';

import {
  Action,
  routeToThunk,
} from './../../store/';

import {
  URLS,
} from './../../models';

export const sendUserInputThunk = () => {
  return (dispatch: Dispatch<Action>) => {
    return dispatch(routeToThunk(URLS.RESULTS));
  };
};
