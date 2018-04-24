import * as React from 'react';

import * as renderHTML from 'react-render-html';

import './holiday-result.scss';

import {
  HolidayResultDispatchProps,
  HolidayResultStateProps,
} from './';

import { RouteComponentProps } from 'react-router';

import {
  BadgeSectionPresentation,
  GoogleMapPresentation,
} from './../../molecules';

interface HolidayResultCombinedProps
  extends HolidayResultStateProps, HolidayResultDispatchProps {}

export const HolidayResultPresentation: React.SFC<HolidayResultCombinedProps>
= ({ holidayResult }) => {
  return holidayResult ? (
    <div>
      <div className='c-holiday-result__card c-holiday-result__first-image'
        style={ { backgroundImage: `url(${holidayResult.mainImageUrl})` } }>
        <h1 className='c-holiday-result__header'>
          { holidayResult.name }
        </h1>
        <p>
          { holidayResult.description && renderHTML(holidayResult.description) }
        </p>
        {
          holidayResult.badges ?
          <BadgeSectionPresentation badges={ holidayResult.badges }/> : null
        }
      </div>
      <div className='c-holiday-result__highlight'>
        { holidayResult.highlights.map((highlight) => (
            <div className='c-holiday-result__card' key={ highlight._id }
              style={ { backgroundImage: `url(${highlight.imageUrl})` } } >
              <div className='c-holiday-result__highlight__content'>
                <div className='c-holiday-result__highlight__inner'>
                  <h2 className='o-spacing-top-xxlarge o-spacing-bottom-xlarge'>
                    { highlight.title }
                  </h2>
                  <p>
                    {
                      highlight.description &&
                      renderHTML(highlight.description)
                    }
                  </p>
                </div>
              </div>
            </div>
        )) }
      </div>

      <div className='c-holiday-result__map'>
        <GoogleMapPresentation latLng={ holidayResult.country.latLng } />
      </div>

    </div>
  ) :
  <div className='c-holiday-result__none-found'>
    <h2 className='c-holiday-result__none-found__text'>
      No holiday found...
    </h2>
  </div>;
};
