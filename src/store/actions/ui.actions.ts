import {
  Action,
} from './';

export const TOGGLE_RESULTS_SIDEBAR = 'TOGGLE_RESULTS_SIDEBAR';
export function toggleResultsSidebar(): Action {
  return {
    type: TOGGLE_RESULTS_SIDEBAR,
  };
}
