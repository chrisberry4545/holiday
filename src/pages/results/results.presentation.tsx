import * as React from 'react';

import './results.scss';

import { Route, Switch } from 'react-router-dom';

import { RouteComponentProps } from 'react-router';

import {
  ResultsDispatchProps,
  ResultsStateProps,
} from './';

import {
  HolidayResultsComponent,
} from './../../organisms';

interface ResultsCombinedProps
  extends ResultsStateProps, ResultsDispatchProps, RouteComponentProps<any> {}

export const ResultsPresentation: React.SFC<ResultsCombinedProps> =
({
  isLoading, hasPreviousHoliday, hasNextHoliday, match,
  onPreviousHoliday, onNextHoliday,
}) => {
  return (
    <div className='o-allow-for-header c-results'>
      {
        isLoading ? <div>Loading...</div>
        :
        <Switch>
          <Route path={ `${match.url}/:id` } exact>
            <HolidayResultsComponent />
          </Route>
        </Switch>
      }
      <div className={'o-spacing-top-xlarge o-main-container ' +
        'o-space-between-children'}>
        {
          hasPreviousHoliday ?
            <button
            className='c-btn c-btn--primary c-btn--med'
            type='button'
            onClick={ onPreviousHoliday }>
            Previous
          </button> : <div></div>
        }
        {
          hasNextHoliday &&
          <button
            className='c-btn c-btn--primary c-btn--med'
            type='button'
            onClick={ onNextHoliday }>
            Next
          </button>
        }
      </div>
    </div>
  );
};
