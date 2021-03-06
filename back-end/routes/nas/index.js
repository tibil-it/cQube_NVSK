const express = require('express');
const router = express.Router();
const nasController = require('../../controller/nas/nasController');

router.get("/getNasMetrics", nasController.getNasMetrics);
router.get("/getNasState", nasController.getStateWiseNasData);
module.exports = router;