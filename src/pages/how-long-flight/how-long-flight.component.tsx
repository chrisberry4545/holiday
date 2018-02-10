import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  FlightTimesInterface,
  StateInterface,
  URLS,
} from './../../models';

import {
  Action,
  routeToThunk,
  setSelectedFlightTime,
} from './../../store';

import {
  HowLongFlightDispatchProps,
  HowLongFlightPresentation,
  HowLongFlightStateProps,
} from './how-long-flight.presentation';

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
    onFlightTimeChange: (selectedFlightTimeId: string) => {
      dispatch(setSelectedFlightTime(selectedFlightTimeId));
    },
    onNextPage: () => {
      dispatch(routeToThunk(URLS.WHAT_FOOD));
    },
  };
};

export const HowLongFlightComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HowLongFlightPresentation);
