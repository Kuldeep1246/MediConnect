import mongoose from 'mongoose'
const slotSchema = new mongoose.Schema({
    startDate:{type:Date,required:true},
    endDate:{type:Date,required:true},
    isBooked:{type:Boolean,default:false}
})
const doctorSchema = new mongoose.Schema(
  {
    specialization: { type:String, required: true },
    fee:{type:Number,required:true},

    experience: { type: Number, required: true },

    hospital: { type: String },

    availableSlots: [slotSchema],

    clinicAddress:{type:String,required:true},
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  
  { timestamps: true }
);

const DoctorModel = mongoose.model('Doctor',doctorSchema)

export default DoctorModel