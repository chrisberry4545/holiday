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

const pageOrder = [
  URLS.HOW_LONG_FLIGHT,
  URLS.WHAT_ACTIVITIES,
  URLS.WHAT_COST,
  URLS.WHAT_FOOD,
  URLS.WHAT_TEMPERATURE,
  URLS.RESULTS,
];

const getPageNumber = (url: string) => {
  return pageOrder.findIndex((pageUrl) => `/${pageUrl}` === url);
};

export const backAPage: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    const currentPageIndex = getPageNumber(getState().router.location.pathname);
    const previousPageIndex = currentPageIndex - 1;
    return dispatch(push(pageOrder[previousPageIndex]));
  };
};

export const nextPage: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    const currentPageIndex = getPageNumber(getState().router.location.pathname);
    const nextPageIndex = currentPageIndex + 1;
    return dispatch(push(pageOrder[nextPageIndex]));
  };
};
