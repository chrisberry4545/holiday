import {
  FormOptionsStateInterface,
} from './';

import {
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface MainStateInterface {
  formInput?: UserInputInterface;
  formOptions: FormOptionsStateInterface;
}
