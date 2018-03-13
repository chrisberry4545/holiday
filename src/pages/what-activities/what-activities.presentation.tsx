import * as React from 'react';

import './what-activities.scss';

import {
  WhatActivitiesDispatchProps,
  WhatActivitiesStateProps,
} from '.';

interface WhatActivitiesCombinedProps
  extends WhatActivitiesStateProps, WhatActivitiesDispatchProps {}

import {
  MultiSelectorPresentation,
} from './../../molecules';

export const WhatActivitiesPresentation: React.StatelessComponent<
  WhatActivitiesCombinedProps
> =
({
  possibleActivityCategories, selectedActivityTypeIds,
  onBack, onComplete, onDeselectActivity, onSelectActivity,
}) => {
  return (
    <div className={'o-main-container c-what-activities'}>
      <h2 className='o-spacing-bottom-xxlarge'>
        What activities?
      </h2>
      <MultiSelectorPresentation
        choices={ possibleActivityCategories.map((foodType) => ({
          _id: foodType._id,
          label: foodType.name,
        })) }
        selectedIds= { selectedActivityTypeIds }
        onSelected={ (id) => onSelectActivity(id) }
        onDeselected={ (id) => onDeselectActivity(id) }
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
