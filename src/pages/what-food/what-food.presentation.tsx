import * as React from 'react';

import './what-food.scss';

import {
  WhatFoodDispatchProps,
  WhatFoodStateProps,
} from '.';

interface WhatFoodCombinedProps
  extends WhatFoodStateProps, WhatFoodDispatchProps {}

import {
  MultiSelectorPresentation,
} from './../../molecules';

export const WhatFoodPresentation: React.StatelessComponent<
  WhatFoodCombinedProps
> =
({
  possibleFoodTypes, selectedFoodTypeIds,
  onBack, onComplete, onDeselectFoodType, onSelectFoodType,
}) => {
  return (
    <div className='o-main-container'>
      <h2 className='o-spacing-bottom-xxlarge'>
        What food do you like?
      </h2>
      <MultiSelectorPresentation
        choices={ possibleFoodTypes.map((foodType) => ({
          _id: foodType._id,
          label: foodType.name,
        })) }
        selectedIds= { selectedFoodTypeIds }
        onSelected={ (id) => onSelectFoodType(id) }
        onDeselected={ (id) => onDeselectFoodType(id) }
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
