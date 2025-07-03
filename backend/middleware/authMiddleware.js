import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

export const protect = async (req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startWith('Bearer')){
        try {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await UserModel.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            res.status(401).json({message:"Not Authorized"})
        }
    }
    if(!token){
        return res.status(401).json({message:"No token provided"})
    }    
}
export const checkRole = (allowedRoles)=>(req,res,next)=>{
    if(allowedRoles.includes(req.user.role)){
        next()
    }
    else res.status(401).json({message:"now allowed"})
}

