import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dispatch,
} from 'redux';

import { ThunkAction } from 'redux-thunk';

import {
  StateInterface,
  URLS,
} from './../../models';

import {
  Action,
  deselectedFoodType,
  routeToThunk,
  sendUserInputThunk,
  setSelectedFoodType,
} from './../../store';

import {
  WhatFoodDoYouLikeDispatchProps,
  WhatFoodDoYouLikePresentation,
  WhatFoodDoYouLikeStateProps,
} from './';

import { push } from 'react-router-redux';

const mapStateToProps = (
  state: StateInterface,
): WhatFoodDoYouLikeStateProps => {
  return {
    possibleFoodTypes: state.main.formOptions.possibleFoodTypes,
    selectedFoodTypeIds: state.main.formInput.selectedFoodTypeIds,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): WhatFoodDoYouLikeDispatchProps => {
  return {
    onBack: () => {
      dispatch(routeToThunk(URLS.HOW_LONG_FLIGHT));
    },
    onComplete: () => {
      // TODO:: Find out how to do this without any
      dispatch(sendUserInputThunk() as any);
    },
    onDeselectFoodType: (foodTypeId: string) => {
      dispatch(deselectedFoodType(foodTypeId));
    },
    onSelectFoodType: (foodTypeId: string) => {
      dispatch(setSelectedFoodType(foodTypeId));
    },
  };
};

export const WhatFoodDoYouLikeComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WhatFoodDoYouLikePresentation);
