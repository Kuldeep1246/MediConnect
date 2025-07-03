import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import UserRouter from './routes/userRoutes.js'
import { DoctorRouter } from './routes/doctorRoutes.js'
import connectDB from './config/db.js'
const app = express()

app.use(express.json())

app.use('/api/users',UserRouter)
app.use('/api/add-doc-profile',DoctorRouter)
app.get('/',(req,res)=>{
    res.json({message:"done"})
})

app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("server is running on ",process.env.PORT)
})