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

import {
  getCurrentHolidayIndexForState,
} from './../../helpers';

const mapStateToProps = (
  state: StateInterface,
): ResultsStateProps => {
  const currentHolidayIndex = getCurrentHolidayIndexForState(state);
  return {
    ...state.main.results,
    hasNextHoliday:
      currentHolidayIndex < state.main.results.holidayResults.length - 1,
    hasPreviousHoliday: currentHolidayIndex > 0,
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
