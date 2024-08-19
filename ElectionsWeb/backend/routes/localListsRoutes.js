const express = require('express');
const router = express.Router();
const localListsController = require('../controllers/localListsController');

// Route to get all local lists
router.get('/', localListsController.getAllLocalLists); // Route should match the API endpoint in React

module.exports = router;
