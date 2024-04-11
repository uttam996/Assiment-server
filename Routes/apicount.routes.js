
const express = require('express');

const { GetApiCount } = require('../Controller/ApiCount/apicount.controller');

const router = express.Router();

router.get('/', GetApiCount);

module.exports = router;