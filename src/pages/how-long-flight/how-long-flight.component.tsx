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
  routeToThunk,
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
    count: state.main.counter,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): HowLongFlightDispatchProps => {
  return {
    onIncrement: () => {
      dispatch({
        type: 'INCREMENT',
      });
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
