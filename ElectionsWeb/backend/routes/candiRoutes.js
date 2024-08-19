const express = require('express');
const router = express.Router();
const candiController = require('../controllers/candiController');
router.post('/candidates', candiController.createCandi);


module.exports = router;