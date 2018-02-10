import * as React from 'react';

import './how-long-flight.scss';

import {
  FlightTimesInterface,
} from './../../models';

export interface HowLongFlightStateProps {
  possibleFlightTimes: FlightTimesInterface[];
  selectedFlightTimeId: string;
}

export interface HowLongFlightDispatchProps {
  onFlightTimeChange: (selectedFlightTimeId: string) => void;
  onNextPage: () => void;
}

interface HowLongFlightCombinedProps
  extends HowLongFlightStateProps, HowLongFlightDispatchProps {}

export const HowLongFlightPresentation: React.SFC<HowLongFlightCombinedProps> =
({
  possibleFlightTimes, selectedFlightTimeId,
  onNextPage, onFlightTimeChange,
}) => {
  return (
    <div>
      {
        possibleFlightTimes.map(({ id, label }) => {
          const elementId = `flight-time-${id}`;
          const additionalClassNames = id === selectedFlightTimeId ?
            'c-how-long-flight__option--selected' : '';
          return (
            <div key={ id } onClick={() => onFlightTimeChange(id)}>
              <div className={
                `c-how-long-flight__option ${additionalClassNames}
              `}>
                { label }
              </div>
            </div>
          );
        })
      }
      <button type='button' onClick={onNextPage}>
        Next page
      </button>
    </div>
  );
};
