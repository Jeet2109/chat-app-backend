const express = require("express")
const { protect } = require("../middlewares/authMiddleware");
const { sendMessage, allMessages } = require("../controllers/messageController");

const MessageRouter = express.Router()

MessageRouter.route('/').post(protect, sendMessage)
MessageRouter.route('/:chatId').get(protect, allMessages)

module.exports = MessageRouter;