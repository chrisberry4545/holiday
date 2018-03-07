import * as React from 'react';

import './results.scss';

import {
  ResultsDispatchProps,
  ResultsStateProps,
} from './';

import {
  HolidayResultPresentation,
} from './../../organisms';

interface ResultsCombinedProps
  extends ResultsStateProps, ResultsDispatchProps {}

export const ResultsPresentation: React.SFC<ResultsCombinedProps> =
({
  isLoading, currentHoliday, hasPreviousHoliday, hasNextHoliday,
  onPreviousHoliday, onNextHoliday,
}) => {
  return (
    <div className='o-main-container'>
      <h2 className='o-spacing-bottom-xlarge'>Results</h2>
      {
        isLoading ? <div>Loading...</div>
        :
        !currentHoliday ? <div>No results found...</div>
        :
        <HolidayResultPresentation
          holidayResult={ currentHoliday } />
      }
      <div className='o-spacing-top-xlarge'>
        {
          hasPreviousHoliday ?
            <button
            className='c-btn c-btn--primary'
            type='button'
            onClick={ onPreviousHoliday }>
            Previous
          </button> : ''
        }
        {
          hasNextHoliday ?
          <button
            className='c-btn c-btn--primary u-float-right'
            type='button'
            onClick={ onNextHoliday }>
            Next
          </button> : ''
        }
      </div>
    </div>
  );
};
