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
  goToNextHolidayResultThunk,
  goToPreviousHolidayResultThunk,
} from './../../store';

import {
  ResultsDispatchProps,
  ResultsPresentation,
  ResultsStateProps,
} from './';

const mapStateToProps = (
  state: StateInterface,
): ResultsStateProps => {
  return {
    ...state.main.results,
    currentHoliday: state.main.results.holidayResults[
      state.main.results.holidayIndex
    ],
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): ResultsDispatchProps => {
  return {
    onNextHoliday: () => {
      dispatch(goToNextHolidayResultThunk() as any);
    },
    onPreviousHoliday: () => {
      dispatch(goToPreviousHolidayResultThunk() as any);
    },
  };
};

export const ResultsComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsPresentation);
