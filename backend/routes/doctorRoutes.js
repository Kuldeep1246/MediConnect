import express from 'express'
import { checkRole, protect } from '../middleware/authMiddleware.js'
import { addDetails } from '../controllers/doctorController.js'

export const DoctorRouter = express.Router()

DoctorRouter.use(protect)

DoctorRouter.post('/add-details',checkRole(['doctor']),addDetails)

