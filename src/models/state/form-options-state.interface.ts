import {
  FlightTimesInterface,
  FoodTypeInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface FormOptionsStateInterface {
  possibleFlightTimes: FlightTimesInterface[];
  possibleFoodTypes: FoodTypeInterface[];
}
