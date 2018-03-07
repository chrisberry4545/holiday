export interface WhatFoodDispatchProps {
  onBack: () => void;
  onComplete: () => void;
  onSelectFoodImportance: (foodImportanceId: string) => void;
}
