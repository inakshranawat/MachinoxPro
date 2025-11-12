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
    const response = await axios.get(imageUrl, { 
      responseType: "arraybuffer",
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const buffer = Buffer.from(response.data);

    // Get content type from response headers
    const contentType = response.headers['content-type'];
    
    // Determine file extension from content type or URL
    let extension = 'jpg'; // default
    if (contentType) {
      if (contentType.includes('png')) extension = 'png';
      else if (contentType.includes('jpeg') || contentType.includes('jpg')) extension = 'jpg';
      else if (contentType.includes('gif')) extension = 'gif';
      else if (contentType.includes('webp')) extension = 'webp';
    } else {
      // Try to extract from URL
      const urlPath = new URL(imageUrl).pathname;
      const urlExt = path.extname(urlPath).toLowerCase().replace('.', '');
      if (urlExt && ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(urlExt)) {
        extension = urlExt;
      }
    }

    // Generate filename with proper extension
    const timestamp = Date.now();
    const filename = `${timestamp}-url-image.${extension}`;

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
    console.error("Error details:", error.message);
    return NextResponse.json({ 
      error: "Failed to upload image from URL", 
      details: error.message 
    }, { status: 500 });
  }
}