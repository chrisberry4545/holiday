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
    url: `/${appUrl}/flight-times`,
  },
  LANDING: {
    navName: 'Home',
    url: '',
  },
  RESULTS: {
    hideInNav: true,
    url: `/${appUrl}/results`,
  },
  WHAT_ACTIVITIES: {
    navName: 'Activities',
    url: `/${appUrl}/what-activities`,
  },
  WHAT_COST: {
    navName: 'Cost',
    url: `/${appUrl}/what-cost`,
  },
  WHAT_FOOD: {
    navName: 'Food',
    url: `/${appUrl}/what-food`,
  },
  WHAT_TEMPERATURE: {
    navName: 'Weather',
    url: `/${appUrl}/what-temperature`,
  },
};
