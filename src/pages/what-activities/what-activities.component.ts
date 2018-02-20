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
  deselectActivityCategory,
  nextPage,
  sendUserInputThunk,
  setSelectedActivityCategory,
} from './../../store';

import {
  WhatActivitiesDispatchProps,
  WhatActivitiesPresentation,
  WhatActivitiesStateProps,
} from './';

import { push } from 'react-router-redux';

const mapStateToProps = (
  state: StateInterface,
): WhatActivitiesStateProps => {
  return {
    possibleActivityCategories: state.main.formOptions.possibleActivities,
    selectedActivityTypeIds: state.main.formInput.selectedActivityTypeIds,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): WhatActivitiesDispatchProps => {
  return {
    onBack: () => {
      dispatch(backAPage() as any);
    },
    onComplete: () => {
      // TODO:: Find out how to do this without any
      dispatch(nextPage() as any);
    },
    onDeselectActivity: (activityCategoryId: string) => {
      dispatch(deselectActivityCategory(activityCategoryId));
    },
    onSelectActivity: (activityCategoryId: string) => {
      dispatch(setSelectedActivityCategory(activityCategoryId));
    },
  };
};

export const WhatActivitiesComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WhatActivitiesPresentation);
