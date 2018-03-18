import * as React from 'react';

import './what-food.scss';

import {
  WhatFoodDispatchProps,
  WhatFoodStateProps,
} from '.';

interface WhatFoodCombinedProps
  extends WhatFoodStateProps, WhatFoodDispatchProps {}

import {
  SingleSelectorPresentation,
} from './../../molecules';

export const WhatFoodPresentation: React.StatelessComponent<
  WhatFoodCombinedProps
> =
({
  possibleFoodImportanceOptions, selectedFoodImportanceId,
  onBack, onComplete, onSelectFoodImportance,
}) => {
  return (
    <div className={ 'o-main-container o-main-container--with-header ' +
      'c-what-food' }>
      <h2 className='o-spacing-bottom-xxlarge'>
        What food do you like?
      </h2>
      <SingleSelectorPresentation
        choices={ possibleFoodImportanceOptions.map((foodType) => ({
          _id: foodType._id,
          label: foodType.name,
        })) }
        selectedId= { selectedFoodImportanceId }
        onSelected={ (id) => onSelectFoodImportance(id) }
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
