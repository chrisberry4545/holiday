import {
  NavUrlInterface,
} from './../../models';

export interface NavigationStateProps {
  currentUrl: string;
  isVisible: boolean;
  pagesForNav: NavUrlInterface[];
}
