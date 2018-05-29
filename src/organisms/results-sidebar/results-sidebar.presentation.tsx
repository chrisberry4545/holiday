import * as React from 'react';

import './results-sidebar.scss';

import {
  ResultsSidebarDispatchProps,
  ResultsSidebarStateProps,
} from './';

import {
  ExtraResultsInfoComponent,
} from './../';

import {
  ArrowIcon,
  CrossIcon,
} from './../../icons';

interface ResultsSidebarCombinedProps
  extends ResultsSidebarStateProps,
  ResultsSidebarDispatchProps {}

export const ResultsSidebarPresentation:
React.SFC<ResultsSidebarCombinedProps> =
({
  isResultsSidebarOpen,
  toggleResultsSidebar,
}) => {
  return (
    <div
      className={`c-results-sidebar${
        isResultsSidebarOpen ? ' c-results-sidebar--is-open u-raised-1' : ''
      }`}>
      <button className='c-btn c-btn--primary c-results-sidebar__toggle-btn'
        onClick={ toggleResultsSidebar }>
        <div className={
            'c-icon c-results-sidebar__toggle-btn-icon'
          }>
          {
            isResultsSidebarOpen
            ?
            <CrossIcon />
            :
            <ArrowIcon />
          }
        </div>
      </button>
      <div className='c-results-sidebar__inner'>
        <ExtraResultsInfoComponent />
      </div>
    </div>
  );
};
