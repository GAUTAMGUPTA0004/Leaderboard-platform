const express = require('express');
const router = express.Router();
const { claimPoints, getHistory } = require('../controllers/claimcontroller');

router.post('/:userId', claimPoints);
router.get('/history', getHistory);

module.exports = router;
