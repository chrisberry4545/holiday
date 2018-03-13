import * as React from 'react';

import './results.scss';

import { Route, Switch } from 'react-router-dom';

import { RouteComponentProps } from 'react-router';

import {
  ResultsDispatchProps,
  ResultsStateProps,
} from './';

import {
  HolidayResultPresentation,
} from './../../organisms';

interface ResultsCombinedProps
  extends ResultsStateProps, ResultsDispatchProps, RouteComponentProps<any> {}

export const ResultsPresentation: React.SFC<ResultsCombinedProps> =
({
  isLoading, currentHoliday, hasPreviousHoliday, hasNextHoliday, match,
  onPreviousHoliday, onNextHoliday,
}) => {
  return (
    <div className='o-main-container c-results'>
      <h2 className='o-spacing-bottom-xlarge'>Results</h2>
      {
        isLoading ? <div>Loading...</div>
        :
        !currentHoliday ? <div>No results found...</div>
        :
        <Switch>
          <Route path={ `${match.url}/:number` } exact
            render={() => (
              <HolidayResultPresentation holidayResult={ currentHoliday } />
            )} />
        </Switch>
      }
      <div className='o-spacing-top-xlarge'>
        {
          hasPreviousHoliday &&
            <button
            className='c-btn c-btn--primary'
            type='button'
            onClick={ onPreviousHoliday }>
            Previous
          </button>
        }
        {
          hasNextHoliday &&
          <button
            className='c-btn c-btn--primary u-float-right'
            type='button'
            onClick={ onNextHoliday }>
            Next
          </button>
        }
      </div>
    </div>
  );
};
