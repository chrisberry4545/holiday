import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface ResultsStateInterface {
  holidayResults: HolidayInterface[];
  isLoading: boolean;
}
