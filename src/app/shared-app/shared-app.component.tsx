import { Component, ComponentState, Props } from 'react';
import * as React from 'react';
import './shared-app.component.scss';

import { applyMiddleware, combineReducers, createStore } from 'redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';

import { Provider } from 'react-redux';

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
  HowLongFlightComponent,
  WhatFoodDoYouLikeComponent,
} from './../../pages';

import {
  HolidayResultInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  reducer,
} from './../../store';

import {
  StateInterface,
  URLS,
} from './../../models';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const store = createStore<StateInterface>(
  combineReducers({
    main: reducer,
    router: routerReducer,
  }),
  undefined,
  applyMiddleware(historyMiddleware),
);

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
    const holidayApiService =
      myContainer.get<HolidayApiServiceInterface>(TYPES.HolidayApiService);
    holidayApiService.getHolidayResults().then((returnedData) => {
      this.setState({
        returnedData,
      });
    });
  }

  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={'/' + URLS.HOW_LONG_FLIGHT}
              component={HowLongFlightComponent} />
            <Route path={'/' + URLS.WHAT_FOOD}
              component={WhatFoodDoYouLikeComponent} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
