import { Component, ComponentState, Props } from 'react';
import * as React from 'react';
import './shared-app.component.scss';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

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
  HolidayInterface,
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

const initialState = {
  main: {
    formOptions: {
      possibleFlightTimes: [{
        id: '1',
        name: '1 - 2 hours',
      }, {
        id: '2',
        name: '2 - 4 hours',
      }],
    },
  },
} as StateInterface;

const store = createStore<StateInterface>(
  combineReducers({
    main: reducer,
    router: routerReducer,
  }),
  initialState,
  applyMiddleware(historyMiddleware, thunk),
);

interface SharedAppStateInterface extends ComponentState {
  returnedData: HolidayInterface[];
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
