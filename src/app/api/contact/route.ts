import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const subject = String(body?.subject ?? "General Inquiry").trim();
  const message = String(body?.message ?? "").trim();

  if (!name || name.length > 100) {
    return NextResponse.json({ error: "Name is required (max 100 chars)." }, { status: 400 });
  }
  if (!email || !email.includes("@") || email.length > 255) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return NextResponse.json({ error: "Message is required (max 5000 chars)." }, { status: 400 });
  }

  const { error } = await supabase
    .from("contact_messages")
    .insert({ name, email, subject, message });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
