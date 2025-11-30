import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
    unique: true
  },
  hod: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty",
  },
  principal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty"
  },
  description: {
    type: String,
  },
  batches: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Batch"
  }],
}, { timestamps: true });

const Department = mongoose.model("Department", departmentSchema);
export { Department };
