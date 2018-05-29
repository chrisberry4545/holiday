import {
  LOCATION_CHANGE,
} from 'react-router-redux';

import {
  Action,
  TOGGLE_RESULTS_SIDEBAR,
} from './../actions';

import {
  UiStateInterface,
} from './../../models';

import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

const getDefaultState = (): UiStateInterface => {
  return {
    isResultsSidebarOpen: false,
  };
};

export function uiReducer(
  state = getDefaultState(), action: Action,
): UiStateInterface {
  switch (action.type) {
    case TOGGLE_RESULTS_SIDEBAR:
      return {
        ...state,
        isResultsSidebarOpen: !state.isResultsSidebarOpen,
      };
    case LOCATION_CHANGE:
      return {
        ...state,
        isResultsSidebarOpen: false,
      };
    default:
      return state;
  }
}
