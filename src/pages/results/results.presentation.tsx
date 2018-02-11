import * as React from 'react';

import './results.scss';

import {
  ResultsDispatchProps,
  ResultsStateProps,
} from './';

interface ResultsCombinedProps
  extends ResultsStateProps, ResultsDispatchProps {}

export const ResultsPresentation: React.SFC<ResultsCombinedProps> =
({
  isLoading, holidayResults,
}) => {
  return (
    <div className='o-main-container'>
      <h2 className='o-spacing-bottom-xlarge'>Results</h2>
      {
        isLoading ? <div>Loading...</div>
        :
        holidayResults.map(({ _id, name }) => (
          <div className='o-spacing-bottom'
            key={ _id }>
            { name }
          </div>
        ))
      }
    </div>
  );
};
