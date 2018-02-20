import {
  TemperatureInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface WhatTemperatureStateProps {
  possibleTemperatures: TemperatureInterface[];
  selectedTemperatureId: string;
}
