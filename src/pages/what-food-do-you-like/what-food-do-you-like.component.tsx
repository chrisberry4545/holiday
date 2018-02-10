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
  routeToThunk,
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
  return {};
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): WhatFoodDoYouLikeDispatchProps => {
  return {
    onBack: () => {
      dispatch(routeToThunk(URLS.HOW_LONG_FLIGHT));
    },
  };
};

export const WhatFoodDoYouLikeComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WhatFoodDoYouLikePresentation);
