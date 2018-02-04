import { Component } from 'react';
import * as React from 'react';
import './shared-app.component.scss';

import {
  TYPES,
} from './../dependency-injection';

import {
  myContainer,
} from './../dependency-injection/inversify.config';

import {
  ExampleServiceInterface,
} from './../../services';

import {
  TEST_ICON,
} from './../icons';

export class SharedAppComponent extends Component {
  public render() {
    const exampleService =
      myContainer.get<ExampleServiceInterface>(TYPES.ExampleService);
    const returnedData = exampleService.getSomeData();
    return (
      <div className='c-app'>
        <header className='c-app__header'>
          <h1 className='c-app__title'>ChrisB React Seed</h1>
        </header>
        <h4 className='c-app__color-name'>Primary color</h4>
        <div className='c-app__color c-app__color--primary'></div>
        <h4 className='c-app__color-name'>Secondary color</h4>
        <div className='c-app__color c-app__color--secondary'></div>

        <div>Test data {returnedData}</div>

        <h4>Svg</h4>
        <TEST_ICON/>
      </div>
    );
  }
}
