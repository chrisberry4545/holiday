import {
  ActivityCategoryInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface WhatActivitiesStateProps {
  possibleActivityCategories: ActivityCategoryInterface[];
  selectedActivityTypeIds: string[];
}
