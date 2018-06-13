'use strict';

const path = require('path');

module.exports = function (app) {
    // Insert routes below
    app.use('/api/', require('./api/user'));

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(function (req, res) {
            res.status(404);
        });

    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function (req, res) {
            res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
        })
}
