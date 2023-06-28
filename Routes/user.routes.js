const express = require('express');
const { getUser } = require('../Controller/user.controller');
const Router = express.Router();

Router.get('/', getUser);

module.exports = Router