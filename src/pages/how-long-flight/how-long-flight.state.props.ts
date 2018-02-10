import {
  FlightTimesInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface HowLongFlightStateProps {
  possibleFlightTimes: FlightTimesInterface[];
  selectedFlightTimeId: string;
}
