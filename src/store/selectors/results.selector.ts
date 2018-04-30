import { createSelector } from 'reselect';

import {
  selectSelectedHolidayId,
} from './route.selector';

import {
  selectMainState,
} from './main.selectors';

export const selectResults = createSelector(
  selectMainState,
  (main) => main.results,
);

export const selectIsLoadingResults = createSelector(
  selectResults,
  (results) => results.isLoading,
);

export const selectHolidayResults = createSelector(
  selectResults,
  (results) => results.holidayResults,
);

export const selectHolidayResultsIds = createSelector(
  selectHolidayResults,
  (holidayResults) => holidayResults.map((result) => result._id),
);

export const selectSelectedHolidayIndex = createSelector(
  selectSelectedHolidayId,
  selectHolidayResultsIds,
  (selectedHolidayId, holidayResultIds) => (
    holidayResultIds.indexOf(selectedHolidayId)
  ),
);

export const selectHasPreviousHoliday = createSelector(
  selectSelectedHolidayIndex,
  (selectedHolidayIndex) => selectedHolidayIndex > 0,
);

export const selectHasNextHoliday = createSelector(
  selectSelectedHolidayIndex,
  selectHolidayResults,
  (selectedHolidayIndex, holidayResults) => (
    selectedHolidayIndex < holidayResults.length - 1
  ),
);

export const selectPreviousHoliday = createSelector(
  selectSelectedHolidayIndex,
  selectHolidayResults,
  (selectedHolidayIndex, holidayResults) => (
    holidayResults[selectedHolidayIndex - 1]
  ),
);

export const selectNextHoliday = createSelector(
  selectSelectedHolidayIndex,
  selectHolidayResults,
  (selectedHolidayIndex, holidayResults) => (
    holidayResults[selectedHolidayIndex + 1]
  ),
);

export const selectPreviousHolidayId = createSelector(
  selectPreviousHoliday,
  (holiday) => holiday._id,
);

export const selectNextHolidayId = createSelector(
  selectNextHoliday,
  (holiday) => holiday._id,
);

export const selectSelectedHolidayResult = createSelector(
  selectSelectedHolidayId,
  selectHolidayResults,
  (selectedHolidayId, holidayResults) => holidayResults.find((holiday) => (
    holiday._id === selectedHolidayId
  )),
);
