import * as React from 'react';

import './what-food-do-you-like.scss';

import {
  WhatFoodDoYouLikeDispatchProps,
  WhatFoodDoYouLikeStateProps,
} from '.';

interface WhatFoodDoYouLikeCombinedProps
  extends WhatFoodDoYouLikeStateProps, WhatFoodDoYouLikeDispatchProps {}

export const WhatFoodDoYouLikePresentation: React.StatelessComponent<
  WhatFoodDoYouLikeCombinedProps
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
      {
        possibleFoodTypes.map(({ name, _id }) => {
          const isFoodTypeSelected = Boolean(
            selectedFoodTypeIds.find((foodId) => (
              foodId === _id
            )),
          );
          const additionalClassNames =  isFoodTypeSelected
            ? 'c-what-food-do-you-like__option--selected' : '';
          const handleFoodClick = () => {
            if (isFoodTypeSelected) {
              onDeselectFoodType(_id);
            } else {
              onSelectFoodType(_id);
            }
          };
          return (
            <div
              onClick={ handleFoodClick }
              className={
                'o-spacing-bottom ' +
                `c-what-food-do-you-like__option ${additionalClassNames}`
              }
              key={ _id }>
              { name }
            </div>
          );
        })
      }
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
