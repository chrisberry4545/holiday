import * as React from 'react';

import './what-cost.scss';

import {
  WhatCostDispatchProps,
  WhatCostStateProps,
} from '.';

interface WhatCostCombinedProps
  extends WhatCostStateProps, WhatCostDispatchProps {}

import {
  SingleSelectorPresentation,
} from './../../molecules';

export const WhatCostPresentation: React.StatelessComponent<
  WhatCostCombinedProps
> =
({
  possibleCostRanges, selectedCostRangeId,
  onBack, onComplete, onSelectedCostRange,
}) => {
  return (
    <div className={ 'o-main-container o-main-container--with-header ' +
      'c-what-cost' }>
      <h2 className='o-spacing-bottom-xxlarge'>
        What cost?
      </h2>
      <SingleSelectorPresentation
        choices={ possibleCostRanges.map((costRange) => ({
          _id: costRange._id,
          label: costRange.name,
        })) }
        selectedId= { selectedCostRangeId }
        onSelected={ (id) => onSelectedCostRange(id) }
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
