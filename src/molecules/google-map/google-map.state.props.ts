import {
  LatLongInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface GoogleMapStateProps {
  defaultZoomLevel?: number;
  latLng: LatLongInterface;
}
