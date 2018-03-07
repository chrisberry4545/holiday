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
  goToNextHolidayResult,
  goToPreviousHolidayResult,
} from './../../store';

import {
  ResultsDispatchProps,
  ResultsPresentation,
  ResultsStateProps,
} from './';

const mapStateToProps = (
  state: StateInterface,
): ResultsStateProps => {
  return state.main.results;
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): ResultsDispatchProps => {
  return {
    onNextHoliday: () => {
      dispatch(goToNextHolidayResult());
    },
    onPreviousHoliday: () => {
      dispatch(goToPreviousHolidayResult());
    },
  };
};

export const ResultsComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsPresentation);
