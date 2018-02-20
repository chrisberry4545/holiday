export interface WhatTemperatureDispatchProps {
  onBack: () => void;
  onComplete: () => void;
  onSelectTemperature: (temperatureId: string) => void;
}
