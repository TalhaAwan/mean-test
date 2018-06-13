'use strict';

const User = require('./user.model');
const config = require('../../config/environment');
const Controller = {};

function handleError(res) {
    return function (err) {
        return res.status(err.statusCode || 500).send(err);
    };
}

/**
 * Get list of users
 */
Controller.index = function (req, res) {
    return User.find({})
        .select('-lastActivity -__v')
        .sort('-lastActivity')
        .exec()
        .then(function (users) {
            return res.status(200).json(users);
        })
        .catch(handleError(res));
};

/**
 * Creates a new user
 */
Controller.create = function (req, res) {
    const newUser = new User(req.body);
    return User.findOne({ id: req.body.id })
        .exec()
        .then(function (user) {
            if (user) {
                throw { "message": "id already taken", statusCode: 400 }
            }
            return newUser.save()
        })
        .then(function (user) {
            return res.json(user);
        })
        .catch(handleError(res));
};

Controller.update = function (req, res) {
    return User.findOneAndUpdate({ id: req.body.id }, req.body, { new: true })
        .exec()
        .then(function (user) {            
            return res.json(user);
        })
        .catch(handleError(res));
};

/**
 * Get a single user
 */
Controller.show = function (req, res, next) {
    return User.findById(req.params.id)
        .select('-lastActivity -__v')
        .exec()
        .then(function (user) {
            if (!user) {
                return res.status(404).end();
            }
            res.json(user);
        })
        .catch(handleError(res));
};

/**
 * Deletes a user
 */
Controller.destroy = function (req, res) {
    return User.findOneAndRemove({ id: req.body.id }).exec()
        .then(function (result) {
            if (!result) {
                return res.status(404).json({ message: `User with ${req.body.id} not found` })
            }
            return res.json({ message: `User with ${req.body.id} deleted successfully!` })
        })
        .catch(handleError(res));
};

module.exports = Controller;
