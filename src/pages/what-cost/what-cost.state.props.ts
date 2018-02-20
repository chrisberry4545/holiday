import {
  CostRangeInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface WhatCostStateProps {
  possibleCostRanges: CostRangeInterface[];
  selectedCostRangeId: string;
}
