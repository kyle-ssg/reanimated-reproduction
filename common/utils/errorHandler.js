const parseErrorFromAPI = (error) => {
    // Write code for handling errors from API here.
    return _.get(error, 'message') || Strings.defaultErrorMessage;
};

export default (e) => {
    const defaultErrorMessage = Strings.defaultErrorMessage;

    if (!e) return defaultErrorMessage;

    // Handle string errors.
    if (typeof e === 'string') return e;

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
