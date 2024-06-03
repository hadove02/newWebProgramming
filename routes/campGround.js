const router = require('express').Router();
const model = require('../models/CampGround/facilitiesRegist');

router.get('/api/facilitiesRegist', model.facilitiesRegist);

module.exports = router;