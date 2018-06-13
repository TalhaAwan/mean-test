const util = require('util');
const Schema = {};
const id = {
    matches: {
        options: /^[a-f\d]{24}$/i,
        errorMessage: 'Invalid id'
    }
}

Schema.delete = {
    id
};

Schema.get = {
    id
};

module.exports = Schema;