import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  StateInterface,
  URLS,
} from './../../models';

import {
  Action,
  backAPage,
  nextPage,
  selectPossibleFlightTimes,
  selectSelectedFlightTime,
  setSelectedFlightTime,
} from './../../store';

import {
  HowLongFlightDispatchProps,
  HowLongFlightPresentation,
  HowLongFlightStateProps,
} from './';

const mapStateToProps = (
  state: StateInterface,
): HowLongFlightStateProps => {
  return {
    possibleFlightTimes: selectPossibleFlightTimes(state),
    selectedFlightTimeId: selectSelectedFlightTime(state),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): HowLongFlightDispatchProps => {
  return {
    onBack: () => {
      dispatch(backAPage() as any);
    },
    onComplete: () => {
      dispatch(nextPage() as any);
    },
    onFlightTimeChange: (selectedFlightTimeId: string) => {
      dispatch(setSelectedFlightTime(selectedFlightTimeId));
    },
  };
};

export const HowLongFlightComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HowLongFlightPresentation);
