'use strict';

const Router = require('express').Router;
const controller = require('./user.controller');
const validationSchema = require('./user.validation.schema');
const validator = require('../../utils/request.validator.js');

const router = new Router();

router.post('/ping', controller.create);
router.delete('/delete', validator.body(validationSchema.delete), controller.destroy);
router.get('/user/:id', validator.params(validationSchema.get), controller.show);
router.get('/users', controller.index);

module.exports = router;
