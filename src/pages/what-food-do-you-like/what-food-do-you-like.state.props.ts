import {
  FoodTypeInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface WhatFoodDoYouLikeStateProps {
  possibleFoodTypes: FoodTypeInterface[];
  selectedFoodTypeIds: string[];
}
