import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface HolidayApiServiceInterface {
  getHolidayResults: () => Promise<HolidayInterface[]>;
}
