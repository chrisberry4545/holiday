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
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

@injectable()
export class HolidayApiService implements HolidayApiServiceInterface {
  public getHolidayResults(
    userInput: UserInputInterface,
  ): Promise<HolidayInterface[]> {
    return fetch(
      `process.env.BACKEND_URL${API_URLS.HOLIDAY_RESULTS}`,
      {
        body: JSON.stringify(userInput),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    ).then((resp) => {
      return resp.json();
    });
  }
}
