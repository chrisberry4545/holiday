import * as React from 'react';

import './what-temperature.scss';

import {
  WhatTemperatureDispatchProps,
  WhatTemperatureStateProps,
} from '.';

interface WhatTemperatureCombinedProps
  extends WhatTemperatureStateProps, WhatTemperatureDispatchProps {}

import {
  SingleSelectorPresentation,
} from './../../molecules';

export const WhatTemperaturePresentation: React.StatelessComponent<
  WhatTemperatureCombinedProps
> =
({
  possibleTemperatures, selectedTemperatureId,
  onBack, onComplete, onSelectTemperature,
}) => {
  return (
    <div className={ 'o-main-container o-allow-for-header ' +
      'c-what-temperature' }>
      <h2 className='o-spacing-bottom-xxlarge o-spacing-top-xxlarge'>
        What temperature?
      </h2>
      <SingleSelectorPresentation
        choices={ possibleTemperatures.map((foodType) => ({
          _id: foodType._id,
          label: foodType.name,
        })) }
        selectedId= { selectedTemperatureId }
        onSelected={ (id) => onSelectTemperature(id) }
      />
      <div className='o-spacing-top-xlarge'>
        <button
          className='c-btn c-btn--primary c-btn--med'
          type='button'
          onClick={ onBack }>
          Back
        </button>
        <button
          className='c-btn c-btn--primary c-btn--med u-float-right'
          type='button'
          onClick={ onComplete }>
          Next
        </button>
      </div>
    </div>
  );
};
