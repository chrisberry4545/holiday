import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  StateInterface,
} from './../../models';

import {
  Action,
  nextPage,
} from './../../store';

import {
  LandingDispatchProps,
  LandingPresentation,
  LandingStateProps,
} from './';

const mapStateToProps = (
  state: StateInterface,
): LandingStateProps => {
  return {
    possibleFlightTimes: state.main.formOptions.possibleFlightTimes,
    selectedFlightTimeId: state.main.formInput.selectedFlightTimeId,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): LandingDispatchProps => {
  return {
    onStartJourney: () => {
      dispatch(nextPage() as any);
    },
  };
};

export const LandingComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPresentation);
