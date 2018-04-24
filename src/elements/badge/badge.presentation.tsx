import * as React from 'react';

import './badge.scss';

import {
  BadgeStateProps,
} from './';

export const BadgePresentation: React.SFC<BadgeStateProps> =
({ badgeName }) => {
  return (
    <div className='c-badge'>
      <div className='c-badge__inner'>
        { badgeName }
      </div>
    </div>
  );
};
