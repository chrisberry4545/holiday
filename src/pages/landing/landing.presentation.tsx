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
    <div className='o-main-container c-landing transition-item'>
      <div className='c-landing__main'>
        <div className='c-landing__content'>
          <button
            className={ 'o-spacing-bottom-xxlarge ' +
              'c-landing__start-journey-btn c-btn c-btn--primary' }
            type='button'
            onClick={ onStartJourney }>
            Find me a holiday
          </button>
          <h1 className='o-spacing-bottom-xxlarge'>
            Where should I go on holiday?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent ut nisl finibus, egestas risus eget, placerat nunc.
            Phasellus dui lorem, vehicula lobortis lobortis ut, malesuada et
            libero. Nam tempus diam eu venenatis dictum. Etiam ac velit eget
            orci bibendum aliquam vitae sit amet est.
          </p>
        </div>
      </div>
    </div>
  );
};
