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
  selectPossibleFoodImportanceOptions,
  selectSelectedFoodImportanceId,
  sendUserInputThunk,
  setSelectedFoodImportance,
} from './../../store';

import {
  WhatFoodDispatchProps,
  WhatFoodPresentation,
  WhatFoodStateProps,
} from './';

import { push } from 'react-router-redux';

const mapStateToProps = (
  state: StateInterface,
): WhatFoodStateProps => {
  return {
    possibleFoodImportanceOptions: selectPossibleFoodImportanceOptions(state),
    selectedFoodImportanceId: selectSelectedFoodImportanceId(state),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): WhatFoodDispatchProps => {
  return {
    onBack: () => {
      dispatch(backAPage() as any);
    },
    onComplete: () => {
      // TODO:: Find out how to do this without any
      dispatch(nextPage() as any);
    },
    onSelectFoodImportance: (foodTypeId: string) => {
      dispatch(setSelectedFoodImportance(foodTypeId));
    },
  };
};

export const WhatFoodComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WhatFoodPresentation);
