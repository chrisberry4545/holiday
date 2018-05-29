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
} from './../../molecules';

import {
  ResultsSidebarComponent,
} from './../';

interface HolidayResultCombinedProps
  extends HolidayResultStateProps, HolidayResultDispatchProps {}

export const HolidayResultPresentation: React.SFC<HolidayResultCombinedProps>
= ({ holidayResult }) => {
  return holidayResult ? (
    <div>
      <ResultsSidebarComponent />
      <div className='c-holiday-result__first-image'
        style={ { backgroundImage: `url(${holidayResult.mainImageUrl}` } } />
      <div className={
          'c-holiday-result__details u-raised-1 ' +
          'o-spacing-horizontal-xlarge o-spacing-bottom-xxlarge'
        }>
        <h1>
          { holidayResult.name }
        </h1>
        {
          holidayResult.badges ?
          <BadgeSectionPresentation badges={ holidayResult.badges }/> : null
        }
        <p>
          {
            holidayResult.description &&
            renderHTML(holidayResult.description)
          }
        </p>
      </div>

    </div>
  ) :
  <div className='c-holiday-result__none-found'>
    <h2 className='c-holiday-result__none-found__text'>
      No holiday found...
    </h2>
  </div>;
};
