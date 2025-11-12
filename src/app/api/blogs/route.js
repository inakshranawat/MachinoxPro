import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";
import slugify from "slugify";

// Connect to database before handling request
export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ success: false, message: "Error fetching blogs" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const { title, content, image, category, writtenby } = body;
    if (!title || !content || !image || !category || !writtenby) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    // Generate slug from title
    const slug = slugify(title, { lower: true, strict: true });

    // Create new blog entry
    const blog = await Blog.create({ title, slug, content, image, category, writtenby });

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ success: false, message: "Error creating blog" }, { status: 500 });
  }
}
