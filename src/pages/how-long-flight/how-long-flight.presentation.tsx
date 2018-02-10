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
    <div>
      {
        possibleFlightTimes.map(({ id, name }) => {
          const additionalClassNames = id === selectedFlightTimeId ?
            'c-how-long-flight__option--selected' : '';
          return (
            <div key={ id } onClick={ () => onFlightTimeChange(id) }>
              <div className={
                `c-how-long-flight__option ${additionalClassNames}
              `}>
                { name }
              </div>
            </div>
          );
        })
      }
      <button type='button' onClick={ onComplete }>
        Next page
      </button>
    </div>
  );
};
