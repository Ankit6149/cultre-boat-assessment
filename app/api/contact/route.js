import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  // Validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 },
    );
  }

  // Log (you'll see this in terminal)
  console.log("New contact submission:", { name, email, message });

  return NextResponse.json({ message: "Message received" }, { status: 200 });
}
