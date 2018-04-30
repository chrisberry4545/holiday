import { createSelector } from 'reselect';

import {
  selectMainState,
} from './main.selectors';

export const selectFormOptions = createSelector(
  selectMainState,
  (main) => main.formOptions,
);

export const selectPossibleActivity = createSelector(
  selectFormOptions,
  (formOptions) => formOptions.possibleActivities,
);

export const selectPossibleCostRanges = createSelector(
  selectFormOptions,
  (formOptions) => formOptions.possibleCostRanges,
);

export const selectPossibleFoodImportanceOptions = createSelector(
  selectFormOptions,
  (formOptions) => formOptions.possibleFoodImportantOptions,
);

export const selectPossibleFlightTimes = createSelector(
  selectFormOptions,
  (formOptions) => formOptions.possibleFlightTimes,
);

export const selectPossibleTemperatues = createSelector(
  selectFormOptions,
  (formOptions) => formOptions.possibleTemperatures,
);
