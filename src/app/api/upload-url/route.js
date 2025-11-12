// ========================================
// FILE 2: src/app/api/upload-url/route.js
// ========================================
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import axios from "axios";

export async function POST(request) {
  try {
    const { imageUrl } = await request.json();

    if (!imageUrl) {
      return NextResponse.json({ error: "No image URL provided" }, { status: 400 });
    }

    // Fetch image from URL
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");

    // Extract filename from URL or generate one
    const urlPath = new URL(imageUrl).pathname;
    const originalName = path.basename(urlPath) || "image.jpg";
    const timestamp = Date.now();
    const filename = `${timestamp}-${originalName}`;

    // Define upload directory
    const uploadDir = path.join(process.cwd(), "public", "uploads", "blogs");
    
    // Create directory if it doesn't exist
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      // Directory already exists
    }

    // Save file
    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);

    // Return relative URL path (what gets stored in DB)
    const url = `/uploads/blogs/${filename}`;

    return NextResponse.json({ success: true, url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}