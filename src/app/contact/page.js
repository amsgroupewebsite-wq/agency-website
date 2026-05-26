// app/contact/page.js
import { Suspense } from "react";
import Contact from "./contact";

export const metadata = {
  title: "Contact", // → "Contact | AMS Agency"
  description:
    "Contactez AMS Agency, agence de communication en Algérie. Confiez-nous votre projet de branding, audiovisuel, marketing digital ou web — réponse rapide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | AMS Agency",
    description:
      "Parlons de votre projet de communication. Contactez l'équipe AMS Agency.",
    url: "https://www.agencyams.com/contact",
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <Contact />
    </Suspense>
  );
}