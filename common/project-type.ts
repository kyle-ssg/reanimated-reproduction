export default interface ProjectType {
  [extraProps: string]: any; // Means that extra props are fine
  debug: boolean;
  api: string;
  ga: string;
  logs: {
    DATA: boolean;
    STORE: boolean;
    STORAGE: boolean;
    DISPATCHER: boolean;
    SERVER: boolean;
  };
  grecaptcher: string;
  formly: string;
  mobile: {
    useSecuredStorage: boolean
  };
}
