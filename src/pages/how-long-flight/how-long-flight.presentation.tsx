import * as React from 'react';

import './how-long-flight.scss';

import {
  HowLongFlightDispatchProps,
  HowLongFlightStateProps,
} from './';

import {
  SingleSelectorPresentation,
} from './../../molecules';

interface HowLongFlightCombinedProps
  extends HowLongFlightStateProps, HowLongFlightDispatchProps {}

export const HowLongFlightPresentation: React.SFC<HowLongFlightCombinedProps> =
({
  possibleFlightTimes, selectedFlightTimeId,
  onBack, onComplete, onFlightTimeChange,
}) => {
  return (
    <div
      className={ 'c-how-long-flight o-main-container ' +
        'o-main-container--with-header'}>
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
      <div className='o-spacing-top-xlarge'>
        <button
          className='c-btn c-btn--primary'
          type='button'
          onClick={ onBack }>
          Back
        </button>
        <button
          className='c-btn c-btn--primary u-float-right'
          type='button'
          onClick={ onComplete }>
          Next
        </button>
      </div>
    </div>
  );
};
