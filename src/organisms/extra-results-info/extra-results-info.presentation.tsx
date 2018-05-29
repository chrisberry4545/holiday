import * as React from 'react';

import './extra-results-info.scss';

import {
  ExtraResultsInfoDispatchProps,
  ExtraResultsInfoStateProps,
} from './';

import {
  GoogleMapPresentation,
  HolidayHighlightPresentation,
} from './../../molecules';

interface ExtraResultsInfoCombinedProps
  extends ExtraResultsInfoStateProps,
  ExtraResultsInfoDispatchProps {}

export const ExtraResultsInfoPresentation:
React.SFC<ExtraResultsInfoCombinedProps> =
({
  highlights,
  latLng,
  onNextHoliday,
}) => {
  return (
    <div className='c-extra-results-info o-spacing-horizontal-xlarge'>
      <h2 className='c-extra-results-info__title'>
        Highlights
      </h2>
      <div className='c-extra-results-info__highlights-list'>
        { highlights.map((highlight) => (
          <div key={ highlight._id }
            className='c-extra-results-info__highlight'>
            <HolidayHighlightPresentation highlight={ highlight }/>
          </div>
        )) }
      </div>

      <div className='o-spacing-bottom-xlarge'>
        <h2 className='c-extra-results-info__title'>
          Map
        </h2>
        <div className='c-extra-results-info__map'>
          <GoogleMapPresentation latLng={ latLng } />
        </div>
      </div>

      <div className='c-extra-results-info__bottom-btns'>
        <button className='c-btn c-btn--primary'
          onClick={ onNextHoliday }>
          Next
        </button>
      </div>
    </div>
  );
};
