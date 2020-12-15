// Optional but if used means within our providers we can

export interface RequestTypes {
// END OF REQUEST_TYPES
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
