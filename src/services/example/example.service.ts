import {
  inject,
  injectable,
} from 'inversify';
import 'reflect-metadata';

import {
  ExampleServiceInterface,
  LoggerServiceInterface,
} from './..';

import {
  TYPES,
} from './../../app/dependency-injection';

@injectable()
export class ExampleService implements ExampleServiceInterface {
  constructor(
    @inject(TYPES.LoggerService)
    private _loggerService: LoggerServiceInterface,
  ) {}

  public getSomeData() {
    const data = ['abc', '123'];
    this._loggerService.log(`Getting some data ${data}`);
    return data;
  }
}
