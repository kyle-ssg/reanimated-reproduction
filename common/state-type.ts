// Optional but if used means within our providers we can
import { RouteUrls } from '../mobile/app/route-urls';

export interface AppState {
  [extraProps: string]: any; // Means that extra props are fine
  userLoading?: boolean;
  userError?: string;
  activeScreen?: {
    [extraProps: string]: RouteUrls; // Means that extra props are fine
    root: RouteUrls;
  };
  user?: {
    firstName: string;
    lastName: string;
    [extraProps: string]: any;
  },
  // END OF STATE_TYPES
}
