// Optional but if used means within our providers we can

type PageRequest<T> = T & {
  size?: number;
  page?: number;
}

type PageResponse<T> = {
  [extraProps: string]: any;
  content: T[]
  pageable: string;
  totalPages: number;
  numberOfElements: number;
  totalElements: number;
  last: boolean;
  sort: {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  }
  first: boolean;
  size: number;
  number: number;
  empty: boolean;
}

export interface RequestTypes {
  login?: {
    [extraProps: string]: any;
  },
  getProjects?: PageRequest<{
  }>;
  getProfile?: {
    id:number
  };
  updateProfile?: {

  };
  register?: {
    [extraProps: string]: any;
  },
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
  profileLoading?: boolean;
  profileError?: string;
  profile?: {
    [extraProps: string]: any;
  };

  // END OF STATE_TYPES
}
