import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import sendFormEmail from "@/lib/sendFormEmail"; // combined email logic


// GET → fetch all contacts
export async function GET() {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ contacts }, { status: 200 });
  } catch (err) {
    console.error("Error fetching contacts:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();

    // Save contact form in MongoDB
    const contact = await Contact.create(data);

    // Send emails (welcome to user + details to admin) without SDK
    await sendFormEmail({ formData: data, formType: "contact" });

    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
