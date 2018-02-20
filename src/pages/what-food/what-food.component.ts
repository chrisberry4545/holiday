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
  deselectedFoodType,
  nextPage,
  sendUserInputThunk,
  setSelectedFoodType,
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
    possibleFoodTypes: state.main.formOptions.possibleFoodTypes,
    selectedFoodTypeIds: state.main.formInput.selectedFoodTypeIds,
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
    onDeselectFoodType: (foodTypeId: string) => {
      dispatch(deselectedFoodType(foodTypeId));
    },
    onSelectFoodType: (foodTypeId: string) => {
      dispatch(setSelectedFoodType(foodTypeId));
    },
  };
};

export const WhatFoodComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WhatFoodPresentation);
