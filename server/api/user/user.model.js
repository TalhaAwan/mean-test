'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    id: {type: Number, unique : true, required : true, dropDups: true},
    value: Number,
    lastActivity: { type: Date, default: Date.now }
});

UserSchema.index({value: 1, lastActivity: -1});
module.exports = mongoose.model('User', UserSchema);
