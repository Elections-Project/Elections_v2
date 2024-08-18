const express = require('express');
const router = express.Router();
const Ads_Controller = require('../controllers/AdsController');

router.post('/AddAds', Ads_Controller.AddAds);
router.get('/getAds', Ads_Controller.getAds);
router.get('/getInvoice', Ads_Controller.getInvoice);
module.exports = router;