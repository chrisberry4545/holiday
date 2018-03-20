import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  NavUrlInterface,
  PAGE_ORDER,
  StateInterface,
  URLS,
} from './../../models';

import {
  Action,
} from './../../store';

import {
  NavigationDispatchProps,
  NavigationPresentation,
  NavigationStateProps,
} from './';

const mapStateToProps = (
  state: StateInterface,
): NavigationStateProps => {
  const currentUrl = state.router.location && state.router.location.pathname;
  return {
    currentUrl,
    isVisible: currentUrl && currentUrl !== `/${PAGE_ORDER[0].url}`,
    pagesForNav: PAGE_ORDER.filter((page) => !page.hideInNav),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): NavigationDispatchProps => {
  return {
    onGoToPage: (url: NavUrlInterface) => {
      return url.url === URLS.LANDING.url
        ?
        dispatch(push(URLS.LANDING.url))
        :
        dispatch(push(`${url.url}`));
    },
  };
};

export const NavigationComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationPresentation);
