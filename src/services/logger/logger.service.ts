import {
  injectable,
} from 'inversify';
import 'reflect-metadata';

import {
  LoggerServiceInterface,
} from './..';

@injectable()
export class LoggerService implements LoggerServiceInterface {
  public log(message: string) {
    // tslint:disable-next-line
    console.log('Logger service: ', message);
  }
}
