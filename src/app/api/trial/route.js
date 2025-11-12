import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Trial from "@/models/Trial";
import sendFormEmail from "@/lib/sendFormEmail";

// GET → fetch all trials
export async function GET() {
  try {
    const trials = await Trial.find().sort({ createdAt: -1 });
    return NextResponse.json({ trials }, { status: 200 });
  } catch (err) {
    console.error("Error fetching trials:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
  

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();

    const trial = await Trial.create(data);

    // Send emails (user + admin) without SDK
    await sendFormEmail({ formData: data, formType: "trial" });

    return NextResponse.json({ success: true, trial }, { status: 201 });
  } catch (error) {
    console.error("Trial form error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
