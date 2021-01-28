const parseErrorFromAPI = (error) => {
  // Write code for handling errors from API here.
  return _.get(error, "message") || Strings.defaultErrorMessage;
};

const errorHandler = (e) => {
  const defaultErrorMessage = Strings.defaultErrorMessage;
  if (!e) return defaultErrorMessage;

  if (e && e.message) {
    return e.message;
  }
  // Handle string errors.
  if (typeof e === "string") return e;

  // Handle JS errors.
  if (e instanceof Error) return e.message || defaultErrorMessage;

  // Handle status codes
  if (e.httpStatus) {
    switch (e.httpStatus) {
      case 504: // Gateway timeout
        return Strings.gatewayTimeoutError;
      default:
        break;
    }
  }

  // Handle API errors
  try {
    if (e._bodyText) {
      const error = JSON.parse(e._bodyText);
      return parseErrorFromAPI(error) || defaultErrorMessage;
    }
    return defaultErrorMessage;
  } catch (err) {
    return defaultErrorMessage;
  }
};

export default errorHandler
