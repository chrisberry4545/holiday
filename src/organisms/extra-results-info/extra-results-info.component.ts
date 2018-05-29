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
  goToNextHolidayResultThunk,
  selectSelectedHolidayHighlights,
  selectSelectedHolidayLatLng,
} from './../../store';

import {
  ExtraResultsInfoDispatchProps,
  ExtraResultsInfoPresentation,
  ExtraResultsInfoStateProps,
} from './';

const mapStateToProps = (
  state: StateInterface,
): ExtraResultsInfoStateProps => {
  return {
    highlights: selectSelectedHolidayHighlights(state),
    latLng: selectSelectedHolidayLatLng(state),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): ExtraResultsInfoDispatchProps => {
  return {
    onNextHoliday: () => {
      dispatch(goToNextHolidayResultThunk() as any);
    },
  };
};

export const ExtraResultsInfoComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExtraResultsInfoPresentation);
