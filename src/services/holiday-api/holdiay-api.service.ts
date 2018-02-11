import {
  injectable,
} from 'inversify';
import 'reflect-metadata';

import {
  HolidayApiServiceInterface,
  HttpRequestServiceInterface,
} from './..';

import {
  API_URLS,
  FormOptionsInterface,
  HolidayInterface,
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  diContainer,
  TYPES,
} from './../../app/dependency-injection/';

@injectable()
export class HolidayApiService implements HolidayApiServiceInterface {
  private _httpRequestService: HttpRequestServiceInterface;
  constructor() {
    this._httpRequestService =
      diContainer.get<HttpRequestServiceInterface>(TYPES.HttpRequestService);
  }

  public getHolidayResults(
    userInput: UserInputInterface,
  ): Promise<HolidayInterface[]> {
    return this._httpRequestService.post(
      `process.env.BACKEND_URL${API_URLS.HOLIDAY_RESULTS}`,
      userInput,
    );
  }

  public getUserInputFormData(): Promise<FormOptionsInterface> {
    return this._httpRequestService.get(
      `process.env.BACKEND_URL${API_URLS.USER_INPUT_FORM_DATA}`,
    );
  }
}
