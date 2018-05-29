import { createSelector } from 'reselect';

import {
  selectMainState,
} from './main.selectors';

export const selectUiState = createSelector(
  selectMainState,
  (main) => main.ui,
);

export const selectIsResultsSidebarOpen = createSelector(
  selectUiState,
  (ui) => ui.isResultsSidebarOpen,
);
