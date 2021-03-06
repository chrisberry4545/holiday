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
    <div className={'o-main-container ' +
      'c-what-activities'}>
      <h2 className={
        'o-spacing-bottom-xxlarge o-spacing-top-xxlarge c-form-header'
      }>
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
