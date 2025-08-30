import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  position: String,
  isManager: Boolean,
});

export default mongoose.model("employee", employeeSchema);
