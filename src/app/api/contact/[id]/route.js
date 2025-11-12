import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export async function DELETE(req, { params }) {
  try {
    await dbConnect(); // ensure connection inside function
    const { id } = await params;

    if (!id) return NextResponse.json({ success: false, error: "Missing ID" }, { status: 400 });

    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) return NextResponse.json({ success: false, error: "Contact not found" }, { status: 404 });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error deleting contact:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
