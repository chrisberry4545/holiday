import * as React from 'react';

import * as renderHTML from 'react-render-html';

import './holiday-result.scss';

import {
  HolidayResultDispatchProps,
  HolidayResultStateProps,
} from './';

import {
  SelectorItemPresentation,
} from './../../elements';

import { RouteComponentProps } from 'react-router';

interface HolidayResultCombinedProps
  extends HolidayResultStateProps, HolidayResultDispatchProps {}

export const HolidayResultPresentation: React.SFC<any>
= ({ holidayResult }) => {
  return holidayResult ? (
    <div>
      <div className='c-holiday-result__card c-holiday-result__first-image'
        style={ { backgroundImage: `url(${holidayResult.mainImageUrl})` } }>
        <h1 className='c-holiday-result__header'>
          { holidayResult.name }
        </h1>
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

      {
        holidayResult.country.facts && holidayResult.country.facts.length > 0
        && (
        <div className={'o-main-container c-holiday-result__card ' +
          'c-holiday-result__facts'}>
          <h2>Facts</h2>
          <ul>
            { holidayResult.country.facts.map((fact) => (
              <li key={ fact._id }>{ fact.name }</li>
            )) }
          </ul>
        </div>)
      }

    </div>
  ) :
  <div className='c-holiday-result__none-found'>
    <h2 className='c-holiday-result__none-found__text'>
      No holiday found...
    </h2>
  </div>;
};
