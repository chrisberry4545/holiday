import * as React from 'react';

import './navigation.scss';

import {
  PAGE_ORDER,
} from './../../models';

import {
  NavigationDispatchProps,
  NavigationStateProps,
} from './';

import {
  SelectorItemPresentation,
} from './../../elements';

interface NavigationCombinedProps
  extends NavigationStateProps, NavigationDispatchProps {}

export const NavigationPresentation: React.SFC<NavigationCombinedProps>
= ({
  currentUrl, isVisible, pagesForNav,
  onGoToPage,
}) => {
  return (
    isVisible &&
    <div className='c-navigation'>
      { pagesForNav.map((urlInfo) => (
        <div onClick={ () => onGoToPage(urlInfo) }
          className={`c-navigation__link ` +
            `${urlInfo.url === currentUrl ?
                'c-navigation__link--selected' : ''}`
          }
          key={ urlInfo.url }>
          { urlInfo.navName }
        </div>
      )) }
    </div>
  );
};
