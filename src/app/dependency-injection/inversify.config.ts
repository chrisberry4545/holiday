// file inversify.config.ts

import { Container } from 'inversify';
import { TYPES } from './types';

import {
  HolidayApiService,
  HolidayApiServiceInterface,
} from './../../services';

const myContainer = new Container();
myContainer.bind<HolidayApiServiceInterface>(TYPES.HolidayApiService)
  .to(HolidayApiService);

export { myContainer };
