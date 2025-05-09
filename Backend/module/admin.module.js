import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

export default EmployeeModel;
