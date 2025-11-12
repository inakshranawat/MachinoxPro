import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";
import mongoose from "mongoose";

// ✅ GET a single blog by ID or slug
export async function GET(req, { params }) {
  try {
    const { blogId } = await params; // ← MUST AWAIT
    await dbConnect();

    let blog;
    if (mongoose.Types.ObjectId.isValid(blogId)) {
      blog = await Blog.findOne({
        $or: [{ _id: blogId }, { slug: blogId }],
      });
    } else {
      blog = await Blog.findOne({ slug: blogId });
    }

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog }, { status: 200 });
  } catch (error) {
    console.error("GET Blog Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// ✅ UPDATE blog by ID
export async function PUT(req, { params }) {
  try {
    const { blogId } = await params; // ← MUST AWAIT
    const body = await req.json();
    await dbConnect();

    const updatedBlog = await Blog.findByIdAndUpdate(blogId, body, { new: true });
    if (!updatedBlog)
      return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });

    return NextResponse.json({ success: true, blog: updatedBlog }, { status: 200 });
  } catch (error) {
    console.error("PUT Blog Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// ✅ DELETE blog by ID
export async function DELETE(req, { params }) {
  try {
    const { blogId } = await params; // ← MUST AWAIT
    await dbConnect();

    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog)
      return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });

    return NextResponse.json({ success: true, message: "Blog deleted" }, { status: 200 });
  } catch (error) {
    console.error("DELETE Blog Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}