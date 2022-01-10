const express = require('express');
const router = express.Router();
const shelfbackupController = require('../controllers/shelfbackupController');

router.post('/', shelfbackupController.createShelfbackup)

module.exports = router;