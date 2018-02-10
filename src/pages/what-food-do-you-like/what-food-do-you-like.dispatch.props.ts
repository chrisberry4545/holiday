export interface WhatFoodDoYouLikeDispatchProps {
  onBack: () => void;
  onComplete: () => void;
  onDeselectFoodType: (foodTypeId: string) => void;
  onSelectFoodType: (foodTypeId: string) => void;
}
