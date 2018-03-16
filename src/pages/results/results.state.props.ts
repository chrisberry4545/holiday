import {
  ResultsStateInterface,
} from './../../models/';

export interface ResultsStateProps extends ResultsStateInterface {
  hasNextHoliday: boolean;
  hasPreviousHoliday: boolean;
}
