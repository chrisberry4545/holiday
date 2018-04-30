import { push } from 'react-router-redux';

import {
  PAGE_ORDER,
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
  selectPathname,
} from './../../store';

import {
  sendUserInputThunk,
} from './';

const getPageNumber = (url: string) => {
  return PAGE_ORDER.findIndex((pageUrl) => (
    `${pageUrl.url}` === url
  ));
};

export const backAPage: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    const currentPageIndex = getPageNumber(selectPathname(getState()));
    const previousPageIndex = currentPageIndex - 1;
    return dispatch(push(`${PAGE_ORDER[previousPageIndex].url}`));
  };
};

export const nextPage: ActionCreator<
ThunkAction<Action, StateInterface, void>
> = () => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Action => {
    const currentPageIndex = getPageNumber(selectPathname(getState()));
    const nextPageIndex = currentPageIndex + 1;
    if (nextPageIndex === PAGE_ORDER.length - 1) {
      return dispatch(sendUserInputThunk() as any);
    }
    return dispatch(push(`${PAGE_ORDER[nextPageIndex].url}`));
  };
};
