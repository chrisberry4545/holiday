import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dispatch,
} from 'redux';

import { ThunkAction } from 'redux-thunk';

import {
  StateInterface,
} from './../../models';

import {
  Action,
  backAPage,
  nextPage,
  setSelectedTemperature,
} from './../../store';

import {
  WhatTemperatureDispatchProps,
  WhatTemperaturePresentation,
  WhatTemperatureStateProps,
} from './';

import { push } from 'react-router-redux';

const mapStateToProps = (
  state: StateInterface,
): WhatTemperatureStateProps => {
  return {
    possibleTemperatures: state.main.formOptions.possibleTemperatures,
    selectedTemperatureId: state.main.formInput.selectedTemperatureId,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): WhatTemperatureDispatchProps => {
  return {
    onBack: () => {
      dispatch(backAPage() as any);
    },
    onComplete: () => {
      // TODO:: Find out how to do this without any
      dispatch(nextPage() as any);
    },
    onSelectTemperature: (temperatureId: string) => {
      dispatch(setSelectedTemperature(temperatureId));
    },
  };
};

export const WhatTemperatureComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WhatTemperaturePresentation);
