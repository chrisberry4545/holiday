import { Component, ComponentState, Props } from 'react';
import * as React from 'react';
import './shared-app.component.scss';

import * as RouterTransitions from 'react-router-transition';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';

import { Provider, Store } from 'react-redux';

import {
  HowLongFlightComponent,
  LandingComponent,
  ResultsComponent,
  WhatActivitiesComponent,
  WhatCostComponent,
  WhatFoodComponent,
  WhatTemperatureComponent,
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

import {
  diContainer,
  TYPES,
} from './../../app/dependency-injection/';

import {
  HolidayApiServiceInterface,
} from './../../services';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const initStore = (initialState: StateInterface) => {
  return createStore<StateInterface>(
    combineReducers({
      main: reducer,
      router: routerReducer,
    }),
    initialState,
    applyMiddleware(historyMiddleware, thunk),
  );
};

function glide(val) {
  return RouterTransitions.spring(val, {
    damping: 24,
    stiffness: 174,
  });
}

const pageTransitions = {
  atActive: {
    offset: glide(0),
  },
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
};

interface SharedAppStateInterface extends ComponentState {
  store: Store<StateInterface>;
}

export class SharedAppComponent
extends Component<Props<{}>, SharedAppStateInterface> {
  constructor(
    public props: Props<{}>,
  ) {
    super(props);
    this.state = {
      store: null,
    };
  }

  public componentDidMount() {
    const holidayApiService =
      diContainer.get<HolidayApiServiceInterface>(TYPES.HolidayApiService);
    holidayApiService.getUserInputFormData().then((formOptions) => {
      const store = initStore({
        main: {
          formOptions,
        },
      } as StateInterface);
      this.setState({ store });
    });
  }

  public render() {
    return this.state.store ? (
      <Provider store={this.state.store}>
        <ConnectedRouter history={history}>
          <RouterTransitions.AnimatedSwitch
            { ...pageTransitions }
            mapStyles={ (styles) => ({
              transform: `translateX(${styles.offset}%)`,
            }) }
            className='c-app__switch-wrapper'>
            <Route exact path={ `/${URLS.LANDING}` }
              component={ LandingComponent } />
            <Route path={ `/${URLS.HOW_LONG_FLIGHT}` }
              component={ HowLongFlightComponent } />
            <Route path={ `/${URLS.WHAT_FOOD}` }
              component={ WhatFoodComponent } />
            <Route path={ `/${URLS.WHAT_ACTIVITIES}` }
              component={ WhatActivitiesComponent } />
            <Route path={ `/${URLS.WHAT_COST}` }
              component={ WhatCostComponent } />
            <Route path={ `/${URLS.WHAT_TEMPERATURE}` }
              component={ WhatTemperatureComponent } />
              <Route path={ `/${URLS.RESULTS}` }
                component={ ResultsComponent } />
          </RouterTransitions.AnimatedSwitch>
        </ConnectedRouter>
      </Provider>
    ) : (
      <div>Loading data..</div>
    );
  }
}
