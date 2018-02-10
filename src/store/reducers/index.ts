import { combineReducers } from 'redux';

import {
  StateInterface,
} from './../../models';

import {
  Action,
} from './../actions';

import {
  counter,
} from './count.reducer';

export const reducer = combineReducers<StateInterface>({
  counter,
});
