export interface WhatActivitiesDispatchProps {
  onBack: () => void;
  onComplete: () => void;
  onDeselectActivity: (activityId: string) => void;
  onSelectActivity: (activityId: string) => void;
}
