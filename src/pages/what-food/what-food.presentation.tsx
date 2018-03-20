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
    <div className={ 'o-main-container o-allow-for-header ' +
      'c-what-food' }>
      <h2 className='o-spacing-bottom-xxlarge o-spacing-top-xxlarge'>
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
      <div className='o-spacing-top-xlarge o-space-between-children'>
        <button
          className='c-btn c-btn--primary c-btn--med'
          type='button'
          onClick={ onBack }>
          Back
        </button>
        <button
          className='c-btn c-btn--primary c-btn--med'
          type='button'
          onClick={ onComplete }>
          Next
        </button>
      </div>
    </div>
  );
};
