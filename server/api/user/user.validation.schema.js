const util = require('util');
const Schema = {};
const id = {
    notEmpty: true,
    isInt: {
        errorMessage: 'id must be integer value',
    }
}

Schema.delete = {
    id
};

Schema.get = {
    id
};

module.exports = Schema;