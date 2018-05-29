import {
  HolidayHighlightInterface,
  LatLongInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface ExtraResultsInfoStateProps {
  latLng: LatLongInterface;
  highlights: HolidayHighlightInterface[];
}
