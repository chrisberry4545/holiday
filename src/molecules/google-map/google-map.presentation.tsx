import * as React from 'react';

import GoogleMapReact from 'google-map-react';

import {
  GoogleMapDispatchProps,
  GoogleMapStateProps,
} from './index';

interface GoogleMapCombinedProps
  extends GoogleMapStateProps, GoogleMapDispatchProps {}

export const GoogleMapPresentation: React.SFC<GoogleMapCombinedProps> =
({
  latLng,
  defaultZoomLevel = 4,
}) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={ { key: 'AIzaSyAjbktyohhEdgC9zeTP0-3ajwZNBNUKknQ' } }
      defaultCenter={ {
        lat: parseInt(latLng.lat, 10),
        lng: parseInt(latLng.lng, 10),
      } }
      defaultZoom={ defaultZoomLevel }
    >
    </GoogleMapReact>
  );
};
