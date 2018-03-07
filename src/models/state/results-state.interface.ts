import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface ResultsStateInterface {
  currentHoliday: HolidayInterface;
  hasNextHoliday: boolean;
  hasPreviousHoliday: boolean;
  holidayResults: HolidayInterface[];
  isLoading: boolean;
}
