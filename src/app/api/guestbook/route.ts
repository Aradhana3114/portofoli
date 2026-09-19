import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("guestbook")
    .select("id, name, message, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ entries: data });
}

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body?.name ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!name || name.length > 50) {
    return NextResponse.json({ error: "Name must be 1-50 characters." }, { status: 400 });
  }
  if (!message || message.length > 500) {
    return NextResponse.json({ error: "Message must be 1-500 characters." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("guestbook")
    .insert({ name, message })
    .select("id, name, message, created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ entry: data }, { status: 201 });
}
