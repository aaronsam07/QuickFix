
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    workId: {
      type: mongoose.Types.ObjectId,
      ref:"works",
    },
    userId: {
      type: String
    },
    userEmail: {
       type: String
    },
    fullName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookAt:{
        type:Date,
        required:true
    },

  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
