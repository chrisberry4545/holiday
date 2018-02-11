import * as React from 'react';

import './how-long-flight.scss';

import {
  HowLongFlightDispatchProps,
  HowLongFlightStateProps,
} from './';

interface HowLongFlightCombinedProps
  extends HowLongFlightStateProps, HowLongFlightDispatchProps {}

export const HowLongFlightPresentation: React.SFC<HowLongFlightCombinedProps> =
({
  possibleFlightTimes, selectedFlightTimeId,
  onComplete, onFlightTimeChange,
}) => {
  return (
    <div className='o-main-container'>
      <h2 className='o-spacing-bottom-xxlarge'>
        What sort of flight time do you want?
      </h2>
      {
        possibleFlightTimes.map(({ _id, name }) => {
          const additionalClassNames = _id === selectedFlightTimeId ?
            'c-how-long-flight__option--selected' : '';
          return (
            <div
              key={ _id }
              onClick={ () => onFlightTimeChange(_id) }
              className={
                'o-spacing-bottom ' +
                `c-how-long-flight__option ${additionalClassNames}`
              }
            >
              { name }
            </div>
          );
        })
      }
      <button
        className='o-spacing-top-xlarge c-btn c-btn--primary u-float-right'
        type='button'
        onClick={ onComplete }>
        Next
      </button>
    </div>
  );
};
