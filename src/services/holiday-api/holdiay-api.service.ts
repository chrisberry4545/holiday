import {
  inject,
  injectable,
} from 'inversify';
import 'reflect-metadata';

import {
  HolidayApiServiceInterface,
} from './';

import {
  API_URLS,
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

@injectable()
export class HolidayApiService implements HolidayApiServiceInterface {
  public getHolidayResults(): Promise<HolidayInterface[]> {
    return fetch(
      `process.env.BACKEND_URL${API_URLS.HOLIDAY_RESULTS}`,
    ).then((resp) => {
      return resp.json();
    });
  }
}
