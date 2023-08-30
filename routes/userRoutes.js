const express = require('express');
const { registerUser, authUser, allUsers } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

const UserRouter = express.Router()

UserRouter.route('/').get(protect, allUsers)

UserRouter.route('/').post(registerUser)

UserRouter.post('/login', authUser)

module.exports = UserRouter;