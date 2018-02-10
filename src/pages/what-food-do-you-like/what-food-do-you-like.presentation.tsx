import * as React from 'react';

export interface WhatFoodDoYouLikeStateProps {}

export interface WhatFoodDoYouLikeDispatchProps {
  onBack: () => void;
}

interface WhatFoodDoYouLikeCombinedProps
  extends WhatFoodDoYouLikeStateProps, WhatFoodDoYouLikeDispatchProps {}

export const WhatFoodDoYouLikePresentation: React.StatelessComponent<
  WhatFoodDoYouLikeCombinedProps
> =
({ onBack }) => {
  return (
    <div>
      <div>WHAT FOOD?!</div>
      <button type='button' onClick={onBack}>
        Go back
      </button>
    </div>
  );
};
