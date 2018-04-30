import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  PAGE_ORDER,
  StateInterface,
  URLS,
} from './../../models';

import {
  Action,
} from './../../store';

import {
  LandingDispatchProps,
  LandingPresentation,
  LandingStateProps,
} from './';

const mapStateToProps = (
  state: StateInterface,
): LandingStateProps => {
  return {};
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): LandingDispatchProps => {
  return {
    onStartJourney: () => {
      dispatch(push(`${PAGE_ORDER[1].url}`));
    },
  };
};

export const LandingComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPresentation);
