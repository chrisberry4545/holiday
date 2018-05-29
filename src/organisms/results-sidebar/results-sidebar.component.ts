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
  selectIsResultsSidebarOpen,
  toggleResultsSidebar,
} from './../../store';

import {
  ResultsSidebarDispatchProps,
  ResultsSidebarPresentation,
  ResultsSidebarStateProps,
} from './';

const mapStateToProps = (
  state: StateInterface,
): ResultsSidebarStateProps => {
  return {
    isResultsSidebarOpen: selectIsResultsSidebarOpen(state),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): ResultsSidebarDispatchProps => {
  return {
    toggleResultsSidebar: () => {
      dispatch(toggleResultsSidebar());
    },
  };
};

export const ResultsSidebarComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsSidebarPresentation);
