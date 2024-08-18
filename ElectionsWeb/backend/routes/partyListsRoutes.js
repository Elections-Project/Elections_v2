const express = require('express');
const router = express.Router();
const partyListsController = require('../controllers/partyListsController');

// Route to get all party lists
router.get('/', partyListsController.getAllPartyLists);

module.exports = router;