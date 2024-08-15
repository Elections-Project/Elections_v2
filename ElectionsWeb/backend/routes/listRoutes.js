const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');
console.log(listController)
router.post('/lists', listController.createList);
router.get('/lists', listController.getLists);
router.put('/lists/:id', listController.updateList);
router.delete('/lists', listController.deleteList);

module.exports = router;