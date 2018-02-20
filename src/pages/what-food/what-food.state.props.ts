import {
  FoodTypeInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface WhatFoodStateProps {
  possibleFoodTypes: FoodTypeInterface[];
  selectedFoodTypeIds: string[];
}
