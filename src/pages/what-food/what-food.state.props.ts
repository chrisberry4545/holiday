import {
  FoodImportanceInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface WhatFoodStateProps {
  possibleFoodImportanceOptions: FoodImportanceInterface[];
  selectedFoodImportanceId: string;
}
