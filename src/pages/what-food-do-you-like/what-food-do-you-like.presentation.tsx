import * as React from 'react';

import './what-food-do-you-like.scss';

import {
  FoodTypeInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface WhatFoodDoYouLikeStateProps {
  possibleFoodTypes: FoodTypeInterface[];
  selectedFoodTypeIds: string[];
}

export interface WhatFoodDoYouLikeDispatchProps {
  onBack: () => void;
  onDeselectFoodType: (foodTypeId: string) => void;
  onSelectFoodType: (foodTypeId: string) => void;
}

interface WhatFoodDoYouLikeCombinedProps
  extends WhatFoodDoYouLikeStateProps, WhatFoodDoYouLikeDispatchProps {}

export const WhatFoodDoYouLikePresentation: React.StatelessComponent<
  WhatFoodDoYouLikeCombinedProps
> =
({
  possibleFoodTypes, selectedFoodTypeIds,
  onBack, onDeselectFoodType, onSelectFoodType,
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
              onClick={handleFoodClick}
              className={
                `c-what-food-do-you-like__option ${additionalClassNames}`
              }
              key={id}>
              { name }
            </div>
          );
        })
      }
      <button type='button' onClick={onBack}>
        Go back
      </button>
    </div>
  );
};
