import {
  ResultsStateInterface,
  UiStateInterface,
} from './';

import {
  FormOptionsInterface,
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface MainStateInterface {
  formInput?: UserInputInterface;
  formOptions: FormOptionsInterface;
  results: ResultsStateInterface;
  ui: UiStateInterface;
}
