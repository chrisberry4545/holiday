import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dispatch,
} from 'redux';

import {
  StateInterface,
  URLS,
} from './../../models';

import {
  Action,
  deselectedFoodType,
  routeToThunk,
  setSelectedFoodType,
} from './../../store';

import {
  WhatFoodDoYouLikeDispatchProps,
  WhatFoodDoYouLikePresentation,
  WhatFoodDoYouLikeStateProps,
} from './what-food-do-you-like.presentation';

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
