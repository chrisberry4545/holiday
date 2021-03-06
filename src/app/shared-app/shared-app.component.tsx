import { Component, ComponentState, Props } from 'react';
import * as React from 'react';
import './shared-app.component.scss';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';

import { Provider, Store } from 'react-redux';

import {
  LandingComponent,
  LoadingPresentation,
} from './../../pages';

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

import {
  SharedAppWithNavigatorComponent,
} from './shared-app-with-navigator.component';

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
    const loadBackgroundImagePromise = new Promise((resolve, reject) => {
      const backgroundImage = new Image();
      backgroundImage.src = '/assets/backgrounds/rainforest.jpg';
      backgroundImage.onload = () => {
        resolve();
      };
    });

    const holidayApiService =
      diContainer.get<HolidayApiServiceInterface>(TYPES.HolidayApiService);
    Promise.all([
      loadBackgroundImagePromise,
      holidayApiService.getUserInputFormData(),
    ]).then(([image, formOptions]) => {
      const store = initStore({
        main: {
          formOptions,
        },
      } as StateInterface);
      this.setState({ store });
    });

    [
      '/assets/backgrounds/beach.jpg',
      '/assets/backgrounds/boat-house-cottage.jpg',
      '/assets/backgrounds/city.jpg',
      '/assets/backgrounds/food.jpg',
      '/assets/backgrounds/mountains.jpg',
    ].forEach((imageUrl) => {
      new Image().src = imageUrl;
    });
  }

  public render() {
    return this.state.store ? (
      <Provider store={ this.state.store }>
        <div>
          <ConnectedRouter history={ history }>
            <Route render={ ({ location }) => (
              <TransitionGroup className='u-position-relative'>
                <CSSTransition
                  key={ location.pathname }
                  timeout={ { enter: 300, exit: 0 } }
                  classNames='u-fade' appear>
                  <section className='o-fill-parent'>
                    <Switch location={ location }>
                      <Route exact path={ `/${URLS.LANDING.url}` }
                        component={ LandingComponent } />
                      <Route path={ `/${URLS.APP.url}` } component={
                        SharedAppWithNavigatorComponent
                        } />
                    </Switch>
                  </section>
                </CSSTransition>
              </TransitionGroup>
            ) } />
          </ConnectedRouter>
        </div>
      </Provider>
    ) : (
      <LoadingPresentation />
    );
  }
}
