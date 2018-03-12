import {
  NavUrlInterface,
} from './../';

const appUrl = 'holiday';

export const URLS: { [key: string]: NavUrlInterface } = {
  APP: {
    navName: undefined,
    url: appUrl,
  },
  HOW_LONG_FLIGHT: {
    navName: 'Flights',
    url: `flight-times`,
  },
  LANDING: {
    navName: 'Home',
    url: '',
  },
  RESULTS: {
    navName: undefined,
    url: `results`,
  },
  WHAT_ACTIVITIES: {
    navName: 'Activities',
    url: `what-activities`,
  },
  WHAT_COST: {
    navName: 'Cost',
    url: `what-cost`,
  },
  WHAT_FOOD: {
    navName: 'Food',
    url: `what-food`,
  },
  WHAT_TEMPERATURE: {
    navName: 'Weather',
    url: `what-temperature`,
  },
};
