export interface HowLongFlightDispatchProps {
  onFlightTimeChange: (selectedFlightTimeId: string) => void;
  onBack: () => void;
  onComplete: () => void;
}
