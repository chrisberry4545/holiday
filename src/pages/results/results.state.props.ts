import {
  ResultsStateInterface,
} from './../../models/';

import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface ResultsStateProps extends ResultsStateInterface {
  currentHoliday: HolidayInterface;
}
