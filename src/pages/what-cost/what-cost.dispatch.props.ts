export interface WhatCostDispatchProps {
  onBack: () => void;
  onComplete: () => void;
  onSelectedCostRange: (costId: string) => void;
}
