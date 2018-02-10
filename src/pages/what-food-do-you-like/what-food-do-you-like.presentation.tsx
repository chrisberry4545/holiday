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
    <div>
      {
        possibleFoodTypes.map(({ name, id }) => {
          const isFoodTypeSelected = Boolean(
            selectedFoodTypeIds.find((foodId) => (
              foodId === id
            )),
          );
          const additionalClassNames =  isFoodTypeSelected
            ? 'c-what-food-do-you-like__option--selected' : '';
          const handleFoodClick = () => {
            if (isFoodTypeSelected) {
              onDeselectFoodType(id);
            } else {
              onSelectFoodType(id);
            }
          };
          return (
            <div
              onClick={ handleFoodClick }
              className={
                `c-what-food-do-you-like__option ${additionalClassNames}`
              }
              key={ id }>
              { name }
            </div>
          );
        })
      }
      <button type='button' onClick={ onBack }>
        Go back
      </button>
      <button type='button' onClick={ onComplete }>
        Next
      </button>
    </div>
  );
};
