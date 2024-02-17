import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // phoneno: {
    //   type: Number,
    //   required: true,
    // },
    // location: {
    //   type: String,
    //   required: true,
    // },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "user",
    },
    
    // zipcode: {
    //   type: Number,
    //   required: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
