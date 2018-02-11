import {
  FormOptionsInterface,
  HolidayInterface,
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface HolidayApiServiceInterface {
  getHolidayResults: (
    userInput: UserInputInterface,
  ) => Promise<HolidayInterface[]>;

  getUserInputFormData: () => Promise<FormOptionsInterface>;
}
