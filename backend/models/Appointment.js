import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    slot: {
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true }
    },
    status: {
      type: String,
      enum: ["Scheduled", "Completed", "Cancelled"],
      default: "Scheduled"
    },
    reason: {
      type: String,
      maxlength: 500
    }
  },
  { timestamps: true }
);

const AppointmentModel = mongoose.model("Appointment", appointmentSchema);

export default AppointmentModel;
