import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import Admin from "@/models/Admin";

export async function POST(req) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    const existing = await Admin.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "Admin already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "Signup successful" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
