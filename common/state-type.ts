// Optional but if used means within our providers we can

export interface RequestTypes {
// END OF REQUEST_TYPES
}

export type ImageFile = {
  cropRect: {
    y: number;
    height: number;
    width: number;
    x: number;
  };
  modificationDate: string;
  width: number;
  size: number;
  mime: string;
  data: string;
  height: number;
  path: string;
}

export interface AppState {
  [extraProps: string]: any; // Means that extra props are fine
  userLoading?: boolean;
  userError?: string;
  theme?: {}
  user?: {
    firstName: string;
    lastName: string;
    [extraProps: string]: any;
  };
  // END OF STATE_TYPES
}
