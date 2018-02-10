import { push } from 'react-router-redux';

import {
  Dispatch,
} from 'redux';

import {
  Action,
} from './../../store/actions';

export const routeToThunk = (url: string) => {
  return (dispatch: Dispatch<Action>) => {
    return dispatch(push(url));
  };
};
