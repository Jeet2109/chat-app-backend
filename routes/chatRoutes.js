const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup, removeFromGroup1 } = require("../controllers/chatController");

const ChatRouter = express.Router();

ChatRouter.route("/").post(protect, accessChat);
ChatRouter.route("/").get(protect, fetchChats);
ChatRouter.route("/group/create").post(protect, createGroupChat);
ChatRouter.route("/group/rename").put(protect, renameGroup);
ChatRouter.route("/group/removeUser").put(protect, removeFromGroup1);
ChatRouter.route("/group/addUser").put(protect, addToGroup);

module.exports = ChatRouter
