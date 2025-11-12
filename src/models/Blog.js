import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    writtenby: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Prevent model overwrite issues in Next.js
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
