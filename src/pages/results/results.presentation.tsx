import * as React from 'react';

import './results.scss';

import {
  ResultsDispatchProps,
  ResultsStateProps,
} from './';

interface ResultsCombinedProps
  extends ResultsStateProps, ResultsDispatchProps {}

export const ResultsPresentation: React.SFC<ResultsCombinedProps> =
() => {
  return (
    <div>
      <h1>Results!</h1>
    </div>
  );
};
