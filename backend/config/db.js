import mongoose from 'mongoose'

const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('connected to db'))
    .catch((error)=>console.log(error.message))
}
export default connectDB