import { combineReducers } from 'redux';

import {
  MainStateInterface,
} from './../../models';

import {
  formInputReducer,
} from './form-input.reducer';

import {
  formOptionsReducer,
} from './form-options.reducer';

import {
  resultsReducer,
} from './results.reducer';

import {
  uiReducer,
} from './ui.reducer';

export const reducer = combineReducers<MainStateInterface>({
  formInput: formInputReducer,
  formOptions: formOptionsReducer,
  results: resultsReducer,
  ui: uiReducer,
});
