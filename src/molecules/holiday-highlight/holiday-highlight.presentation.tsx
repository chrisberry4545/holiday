import * as React from 'react';

import './holiday-highlight.scss';

import * as renderHTML from 'react-render-html';

import {
  HolidayHighlightDispatchProps,
  HolidayHighlightStateProps,
} from './';

interface HolidayHighlightCombinedProps
  extends HolidayHighlightStateProps,
  HolidayHighlightDispatchProps {}

export const HolidayHighlightPresentation:
React.SFC<HolidayHighlightCombinedProps> =
({ highlight }) => {
  return (
    <div>
      <div className='c-holiday-highlight__image'
        style={ { backgroundImage: `url(${highlight.imageUrl}`} } />
      <div className='c-holiday-highlight__text'>
        <h3>
          { highlight.title }
        </h3>
        <p>
          {
            highlight.description &&
            renderHTML(highlight.description)
          }
        </p>
      </div>
    </div>
  );
};
