const Validator = {};

/**
 * Validate req body against schema
 */
Validator.body = function (schema) {
    return function (req, res, next) {
        req.checkBody(schema);
        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {
                return res.status(400).json({
                    message: "invalid body",
                    errors: result.array()
                })
            }
            else {
                return next();
            }
        });
    }
}

/**
 * Validate req params against schema
 */
Validator.params = function (schema) {
    return function (req, res, next) {
        req.checkParams(schema);
        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {
                return res.status(400).json({
                    message: "invalid params",
                    errors: result.array()
                })
            }
            else {
                return next();
            }
        });
    }
}

/**
 * Validate req query against schema
 */
Validator.query = function (schema) {
    return function (req, res, next) {
        req.checkQuery(schema);
        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {
                return res.status(400).json({
                    message: "invalid query",
                    errors: result.array()
                })
            }
            else {
                return next();
            }
        });
    }
}


module.exports = Validator;