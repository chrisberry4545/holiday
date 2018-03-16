import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dispatch,
} from 'redux';

import {
  StateInterface,
} from './../../models';

import {
  Action,
} from './../../store';

import {
  HolidayResultDispatchProps,
  HolidayResultPresentation,
  HolidayResultStateProps,
} from './';

const mapStateToProps = (
  state: StateInterface,
): HolidayResultStateProps => {
  return {
    holidayResult: state.main.results.holidayResults[
      state.main.results.holidayIndex
    ],
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): HolidayResultDispatchProps => {
  return {};
};

export const HolidayResultsComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HolidayResultPresentation);
