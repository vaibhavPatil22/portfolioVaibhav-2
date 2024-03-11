import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First name must be of at least 3 Characters."],
      maxLength: [60, "First name cannot exceed 60 Characters."],
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Provide a valid email"],
    },
    information: {
      type: String,
      required: true,
      minLength: [3, "Information must be of at least 3 Characters."],
      maxLength: [360, "Information cannot exceed 360 Characters."],
    },
  },
  { timestamps: true }
);

export const Reservation = mongoose.model("Reservation", reservationSchema);
