import * as React from 'react';

import './holiday-result.scss';

import {
  HolidayResultDispatchProps,
  HolidayResultStateProps,
} from './';

import {
  SelectorItemPresentation,
} from './../../elements';

interface HolidayResultCombinedProps
  extends HolidayResultStateProps, HolidayResultDispatchProps {}

export const HolidayResultPresentation: React.SFC<HolidayResultCombinedProps>
= ({ holidayResult }) => {
  return (
    <div>
      <h2>{ holidayResult.name }</h2>
      <ul>
        { holidayResult.country.facts.map((fact) => (
          <li key={ fact._id }>{ fact.name }</li>
        )) }
      </ul>
        { holidayResult.highlights.map((highlight) => (
          <div key={ highlight._id }>
            <h4>{ highlight.title }</h4>
            <img src={ highlight.imageUrl }
              className='c-holiday-result__image' />
            <p>{ highlight.description }</p>
          </div>
        )) }
    </div>
  );
};
