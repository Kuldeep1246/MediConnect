import express from 'express'
import {addUser,loginUser} from '../controllers/userController.js'
const UserRouter = express.Router()

UserRouter.post('/signup',addUser)
UserRouter.post('/login',loginUser)

export default UserRouter