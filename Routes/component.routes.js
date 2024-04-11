const express = require('express');
const { GetData, AddData, UpdateData } = require('../Controller/component/component.routes');

const router = express.Router();

router.get('/',GetData);
router.post('/',AddData);
router.put('/:componentId',UpdateData);




module.exports = router;