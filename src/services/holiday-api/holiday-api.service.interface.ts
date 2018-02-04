import {
  HolidayResultInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface HolidayApiServiceInterface {
  getHolidayResults: () => Promise<HolidayResultInterface[]>;
}
