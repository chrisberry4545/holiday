import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  HowLongFlightComponent,
  LandingComponent,
  ResultsComponent,
  WhatActivitiesComponent,
  WhatCostComponent,
  WhatFoodComponent,
  WhatTemperatureComponent,
} from './../../pages';

import './shared-app-with-navigator.scss';

import {
  URLS,
} from './../../models';

import {
  NavigationComponent,
} from './../../organisms';

export const SharedAppWithNavigatorComponent = ({ location, match }) => {
  return (
    <div className='c-shared-app-with-navigator'>
      <NavigationComponent />
      <TransitionGroup className='c-shared-app-with-navigator__main'>
        <CSSTransition
          key={ location.pathname } timeout={ 300 } classNames='u-fade' appear>
          <section className='c-shared-app-with-navigator__inner'>
            <Switch location={ location }>
              <Route path={ `${URLS.HOW_LONG_FLIGHT.url}` }
                component={ HowLongFlightComponent } />
              <Route path={ `${URLS.WHAT_FOOD.url}` }
                component={ WhatFoodComponent } />
              <Route path={ `${URLS.WHAT_ACTIVITIES.url}` }
                component={ WhatActivitiesComponent } />
              <Route path={ `${URLS.WHAT_COST.url}` }
                component={ WhatCostComponent } />
              <Route path={ `${URLS.WHAT_TEMPERATURE.url}` }
                component={ WhatTemperatureComponent } />
              <Route path={ `${URLS.RESULTS.url}` }
                component={ ResultsComponent } />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>

    </div>
  );
};
