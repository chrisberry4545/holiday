// file inversify.config.ts

import { Container } from 'inversify';
import { TYPES } from './types';

import {
  HolidayApiService,
  HolidayApiServiceInterface,
  HttpRequestService,
  HttpRequestServiceInterface,
} from './../../services';

const diContainer = new Container();
diContainer.bind<HolidayApiServiceInterface>(TYPES.HolidayApiService)
  .to(HolidayApiService);
diContainer.bind<HttpRequestServiceInterface>(TYPES.HttpRequestService)
  .to(HttpRequestService);

export { diContainer };
