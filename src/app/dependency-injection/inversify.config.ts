// file inversify.config.ts

import { Container } from 'inversify';
import { TYPES } from './types';

import {
  ExampleService,
  ExampleServiceInterface,
  LoggerService,
  LoggerServiceInterface,
} from './../../services';

const myContainer = new Container();
myContainer.bind<ExampleServiceInterface>(TYPES.ExampleService)
  .to(ExampleService);
myContainer.bind<LoggerServiceInterface>(TYPES.LoggerService)
  .to(LoggerService);

export { myContainer };
