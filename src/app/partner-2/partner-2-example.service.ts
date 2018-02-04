import {
  inject,
  injectable,
} from 'inversify';
import 'reflect-metadata';

import {
  ExampleServiceInterface,
  LoggerServiceInterface,
} from './../../services';

import {
  TYPES,
} from './../../app/dependency-injection';

@injectable()
export class Partner2ExampleService implements ExampleServiceInterface {
  constructor(
    @inject(TYPES.LoggerService)
    private _loggerService: LoggerServiceInterface,
  ) {}

  public getSomeData() {
    const data = ['this is some other dep injected data'];
    this._loggerService.log(`Getting some data ${data}`);
    return data;
  }
}
