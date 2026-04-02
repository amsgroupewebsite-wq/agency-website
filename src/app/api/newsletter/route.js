// app/api/newsletter/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }

  const API_KEY   = process.env.MAILCHIMP_API_KEY;
  const LIST_ID   = process.env.MAILCHIMP_AUDIENCE_ID;
  const DC        = process.env.MAILCHIMP_DC;

  const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",  // ou "pending" pour double opt-in
    }),
  });

  const data = await res.json();

  // Déjà abonné
  if (data.title === "Member Exists") {
    return NextResponse.json({ error: "Vous êtes déjà abonné !" }, { status: 400 });
  }

  if (!res.ok) {
    return NextResponse.json({ error: "Une erreur est survenue." }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}