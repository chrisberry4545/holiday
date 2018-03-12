import {
  NavUrlInterface,
} from './../../models';

export interface NavigationDispatchProps {
  onGoToPage: (url: NavUrlInterface) => void;
}
