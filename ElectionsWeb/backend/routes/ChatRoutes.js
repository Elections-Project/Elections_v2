const express = require('express');
const router = express.Router();
const Chat_Controller = require('../controllers/ChatController');

router.post('/chatuser', Chat_Controller.UserAddMessage);
router.get('/getmessages', Chat_Controller.getMessages);
module.exports = router;