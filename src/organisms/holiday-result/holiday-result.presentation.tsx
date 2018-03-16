import * as React from 'react';

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
  ) : <div>No holiday found...</div>;
};
