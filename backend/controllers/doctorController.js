import DoctorModel from "../models/Doctor.js";

export const addDetails = (req,res)=>{
    try {
         const doctor = DoctorModel.create({...req.body,user:req.user._id})
         req.status(201).json({message:'Profile created',doctor})       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}