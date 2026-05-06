import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { message: "Please complete your name, email, and project details." },
      { status: 400 },
    );
  }

  console.log("New portfolio inquiry", {
    name: body.name,
    email: body.email,
    company: body.company ?? "",
  });

  return NextResponse.json({
    message: "Thanks. Your project brief is in and I will reply soon.",
  });
}
