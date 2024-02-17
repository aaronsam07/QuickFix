import mongoose from "mongoose";

const workSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
    },
    workername: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    phoneno: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      default: 1000,
      required: true,
    },

    zipcode: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "worker",
    },
    notifications: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Booking",
      },
    ],

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Work", workSchema);
