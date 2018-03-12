import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import PageTransition from 'react-router-page-transition';

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

export const SharedAppWithNavigatorComponent = ({ location, match }) => (
  <div className='c-shared-app-with-navigator'>
    <NavigationComponent />
    <PageTransition timeout={ 1000 }>
      <Switch location={ location }>
        <Route path={ `${match.url}/${URLS.HOW_LONG_FLIGHT.url}` }
          component={ HowLongFlightComponent } />
        <Route path={ `${match.url}/${URLS.WHAT_FOOD.url}` }
          component={ WhatFoodComponent } />
        <Route path={ `${match.url}/${URLS.WHAT_ACTIVITIES.url}` }
          component={ WhatActivitiesComponent } />
        <Route path={ `${match.url}/${URLS.WHAT_COST.url}` }
          component={ WhatCostComponent } />
        <Route path={ `${match.url}/${URLS.WHAT_TEMPERATURE.url}` }
          component={ WhatTemperatureComponent } />
        <Route path={ `${match.url}/${URLS.RESULTS.url}` }
          component={ ResultsComponent } />
      </Switch>
    </PageTransition>

  </div>
);
