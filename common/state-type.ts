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
  uploadFileLoading?: boolean;
  uploadFileSaving?: boolean;
  uploadFileError?: string;
  uploadFile?: {
    [extraProps: string]: any;
  },
  organisationLoading?: boolean;
  organisationSaving?: boolean;
  organisationError?: string;
  organisation?: Record<string, Organisation>,
  organisationUsersLoading?: boolean;
  organisationUsersSaving?: boolean;
  organisationUsersError?: string;
  organisationUsers?: Record<string, PageResponse<{

  }>>,
  // END OF STATE_TYPES
}
