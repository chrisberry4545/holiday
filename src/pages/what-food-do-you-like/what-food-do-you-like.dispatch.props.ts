export interface WhatFoodDoYouLikeDispatchProps {
  onBack: () => void;
  onDeselectFoodType: (foodTypeId: string) => void;
  onSelectFoodType: (foodTypeId: string) => void;
}
