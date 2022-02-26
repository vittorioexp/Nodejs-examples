
class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode=statusCode;
    }
};

const createCustomError = (msg, code) => {
    return new CustomAPIError(msg, code);
};

module.exports = {createCustomError, CustomAPIError};