import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  jobTitle: { type: String },
  country: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
