import * as React from 'react';

import './loading.scss';

import {
  LoadingSpinnerPresentation,
} from './../../elements';

export const LoadingPresentation: React.SFC = () => {
  return (
    <div className='c-loading'>
      <LoadingSpinnerPresentation />
      <h2>Loading...</h2>
    </div>
  );
};
