import * as React from 'react';

import './badge-section.scss';

import {
  BadgeSectionStateProps,
} from './';

import {
  BadgePresentation,
} from './../../elements';

export const BadgeSectionPresentation: React.SFC<BadgeSectionStateProps> =
({ badges }) => {
  return (
    <div className='c-badge-section'>
    {
      badges.cost ?
      <BadgePresentation badgeName={ 'Within budget' }/> : null
    }
    {
      badges.activity ?
      <BadgePresentation badgeName={ 'Many matching activities' }/> : null
    }
    {
      badges.food ?
      <BadgePresentation badgeName={ 'Good food' }/> : null
    }
    {
      badges.temperature ?
      <BadgePresentation badgeName={ 'Meets temperature criteria' }/> : null
    }
    {
      badges.flight ?
      <BadgePresentation badgeName={ 'Within flight time' }/> : null
    }
    </div>
  );
};
