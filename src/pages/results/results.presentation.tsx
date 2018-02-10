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
    <div>
      <h1>Results!</h1>
      {
        isLoading ? <div>Loading...</div>
        :
        holidayResults.map((holidayResult) => (
          <div key={ holidayResult.id }>{ holidayResult.name }</div>
        ))
      }
    </div>
  );
};
