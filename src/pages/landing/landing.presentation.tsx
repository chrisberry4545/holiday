import * as React from 'react';

import './landing.scss';

import {
  LandingDispatchProps,
  LandingStateProps,
} from './';

interface LandingCombinedProps
  extends LandingStateProps, LandingDispatchProps {}

export const LandingPresentation: React.SFC<LandingCombinedProps> =
({ onStartJourney }) => {
  return (
    <div className='c-landing'>
      <div className='c-landing__content'>
        <button
          className={ 'o-spacing-bottom-xxlarge o-spacing-top-xxlarge ' +
            'c-landing__start-journey-btn c-btn c-btn--primary' }
          type='button'
          onClick={ onStartJourney }>
          Find me a holiday
        </button>
        <h1 className='o-spacing-bottom-xxlarge c-form-header'>
          Where should I go on holiday?
        </h1>
        <p className='c-landing__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent ut nisl finibus, egestas risus eget, placerat nunc.
          Phasellus dui lorem, vehicula lobortis lobortis ut, malesuada et
          libero. Nam tempus diam eu venenatis dictum. Etiam ac velit eget
          orci bibendum aliquam vitae sit amet est.
        </p>
      </div>
    </div>
  );
};
