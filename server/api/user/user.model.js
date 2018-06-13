'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    value: Number,
    lastActivity: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
