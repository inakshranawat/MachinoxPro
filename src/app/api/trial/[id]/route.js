import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Trial from "@/models/Trial";

export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = await params;

    if (!id) return NextResponse.json({ success: false, error: "Missing ID" }, { status: 400 });

    const deleted = await Trial.findByIdAndDelete(id);

    if (!deleted) return NextResponse.json({ success: false, error: "Trial not found" }, { status: 404 });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error deleting trial:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
