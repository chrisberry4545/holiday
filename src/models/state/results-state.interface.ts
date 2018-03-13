import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface ResultsStateInterface {
  hasNextHoliday: boolean;
  hasPreviousHoliday: boolean;
  holidayIndex: number;
  holidayResults: HolidayInterface[];
  isLoading: boolean;
}
