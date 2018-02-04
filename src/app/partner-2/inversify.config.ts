// file inversify.config.ts

import { Container } from 'inversify';
import { myContainer, TYPES } from './../dependency-injection/';

import {
  ExampleServiceInterface,
  LoggerService,
  LoggerServiceInterface,
} from './../../services';

import {
  Partner2ExampleService,
} from './partner-2-example.service';

myContainer.unbind(TYPES.ExampleService);
myContainer.bind<ExampleServiceInterface>(TYPES.ExampleService)
.to(Partner2ExampleService);

export { myContainer };
