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
  selectPossibleCostRanges,
  selectSelectedCostRange,
  sendUserInputThunk,
  setSelectedCostRange,
} from './../../store';

import {
  WhatCostDispatchProps,
  WhatCostPresentation,
  WhatCostStateProps,
} from './';

import { push } from 'react-router-redux';

const mapStateToProps = (
  state: StateInterface,
): WhatCostStateProps => {
  return {
    possibleCostRanges: selectPossibleCostRanges(state),
    selectedCostRangeId: selectSelectedCostRange(state),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): WhatCostDispatchProps => {
  return {
    onBack: () => {
      dispatch(backAPage() as any);
    },
    onComplete: () => {
      // TODO:: Find out how to do this without any
      dispatch(nextPage() as any);
    },
    onSelectedCostRange: (costRangeId: string) => {
      dispatch(setSelectedCostRange(costRangeId));
    },
  };
};

export const WhatCostComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WhatCostPresentation);
