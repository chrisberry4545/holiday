import { Component, ComponentState, Props } from 'react';
import * as React from 'react';
import './shared-app.component.scss';

import {
  TYPES,
} from './../dependency-injection';

import {
  myContainer,
} from './../dependency-injection/inversify.config';

import {
  HolidayApiServiceInterface,
} from './../../services';

import {
  TEST_ICON,
} from './../icons';

import {
  HolidayResultInterface,
} from '@chrisb-dev/holiday-shared-models';

interface SharedAppStateInterface extends ComponentState {
  returnedData: HolidayResultInterface[];
}

export class SharedAppComponent
extends Component<Props<{}>, SharedAppStateInterface> {
  constructor(
    public props: Props<{}>,
  ) {
    super(props);
    this.state = {
      returnedData: [],
    };
  }

  public render() {
    const holidayApiService =
      myContainer.get<HolidayApiServiceInterface>(TYPES.HolidayApiService);
    holidayApiService.getHolidayResults().then((returnedData) => {
      this.setState({
        returnedData,
      });
    });
    return (
      <div className='c-app'>
        <header className='c-app__header'>
          <h1 className='c-app__title'>ChrisB React Seed</h1>
        </header>
        <h4 className='c-app__color-name'>Primary color</h4>
        <div className='c-app__color c-app__color--primary'></div>
        <h4 className='c-app__color-name'>Secondary color</h4>
        <div className='c-app__color c-app__color--secondary'></div>

        <div>
          {
            this.state.returnedData.map((holidayResult) => {
              return <div>{ holidayResult.country }</div>;
            })
          }
        </div>

        <h4>Svg</h4>
        <TEST_ICON/>
      </div>
    );
  }
}
