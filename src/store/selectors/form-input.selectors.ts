import { createSelector } from 'reselect';

import {
  selectMainState,
} from './main.selectors';

export const selectFormInputs = createSelector(
  selectMainState,
  (main) => main.formInput,
);

export const selectSelectedActivityTypeIds = createSelector(
  selectFormInputs,
  (main) => main.selectedActivityTypeIds,
);

export const selectSelectedCostRange = createSelector(
  selectFormInputs,
  (main) => main.selectedCostRangeId,
);

export const selectSelectedFlightTime = createSelector(
  selectFormInputs,
  (main) => main.selectedFlightTimeId,
);

export const selectSelectedFoodImportanceId = createSelector(
  selectFormInputs,
  (main) => main.selectedFoodImportanceId,
);

export const selectSelectedMonthNumber = createSelector(
  selectFormInputs,
  (main) => main.selectedMonthNumber,
);

export const selectSelectedTemperatureId = createSelector(
  selectFormInputs,
  (main) => main.selectedTemperatureId,
);
