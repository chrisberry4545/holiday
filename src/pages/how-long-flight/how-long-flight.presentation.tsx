import * as React from 'react';

export interface HowLongFlightStateProps {
  count: number;
}

export interface HowLongFlightDispatchProps {
  onIncrement: () => void;
  onNextPage: () => void;
}

interface HowLongFlightCombinedProps
  extends HowLongFlightStateProps, HowLongFlightDispatchProps {}

export const HowLongFlightPresentation: React.SFC<HowLongFlightCombinedProps> =
({ count, onNextPage, onIncrement }) => {
  return (
    <div>
      <span>{count} </span>
      <button type='button' onClick={onIncrement}>
        Increment
      </button>
      <button type='button' onClick={onNextPage}>
        Next page
      </button>
    </div>
  );
};
