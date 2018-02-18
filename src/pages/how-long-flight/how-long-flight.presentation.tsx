import * as React from 'react';

import './how-long-flight.scss';

import {
  HowLongFlightDispatchProps,
  HowLongFlightStateProps,
} from './';

import {
  SingleSelectorPresentation,
} from './../../elements';

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
      <SingleSelectorPresentation
        choices = { possibleFlightTimes.map((flighTime) => ({
          _id: flighTime._id,
          label: flighTime.name,
        })) }
        selectedId = { selectedFlightTimeId }
        onSelected = { (id) => onFlightTimeChange(id) }
      />
      <button
        className='o-spacing-top-xlarge c-btn c-btn--primary u-float-right'
        type='button'
        onClick={ onComplete }>
        Next
      </button>
    </div>
  );
};
