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
  selectHasNextHoliday,
  selectHasPreviousHoliday,
  selectIsLoadingResults,
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
    hasNextHoliday: selectHasNextHoliday(state),
    hasPreviousHoliday: selectHasPreviousHoliday(state),
    isLoading: selectIsLoadingResults(state),
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
