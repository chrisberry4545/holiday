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
  nextPage,
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
    possibleFlightTimes: state.main.formOptions.possibleFlightTimes,
    selectedFlightTimeId: state.main.formInput.selectedFlightTimeId,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): HowLongFlightDispatchProps => {
  return {
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
