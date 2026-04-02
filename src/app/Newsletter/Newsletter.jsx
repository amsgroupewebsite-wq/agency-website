"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email,   setEmail]   = useState("");
  const [status,  setStatus]  = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Une erreur est survenue.");
      } else {
        setStatus("success");
        setMessage("Merci ! Vous êtes bien inscrit à notre newsletter.");
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Impossible de contacter le serveur.");
    }
  };

  return (
    <section className=" max-w-3xl text-white py-16 px-8  absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">

      {/* Label */}
      <p className="text-xs text-black font-semibold tracking-widest uppercase mb-3">
        Newsletter
      </p>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-6"
         style={{ color: "#b0b0b0" }}>
        Recevez nos actualités et offres directement dans votre boîte mail.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          required
          disabled={status === "loading" || status === "success"}
          className="w-full px-4 py-2.5 rounded-lg text-sm text-white
                     focus:outline-none transition-colors disabled:opacity-50"
          style={{
            background:  "rgba(255,255,255,0.06)",
            border:      "1px solid rgba(176,176,176,0.2)",
            color:       "#ffffff",
            caretColor:  "#E54259",
          }}
          onFocus={e  => (e.target.style.borderColor = "#E54259")}
          onBlur={e   => (e.target.style.borderColor = "rgba(176,176,176,0.2)")}
        />

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full py-2.5 rounded-lg text-sm font-semibold text-white
                     transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            background: status === "success" ? "rgba(176,176,176,0.15)" : "#E54259",
          }}
          onMouseEnter={e => { if (status === "idle") e.target.style.background = "#c73a4f"; }}
          onMouseLeave={e => { if (status === "idle") e.target.style.background = "#E54259"; }}
        >
          {status === "loading" ? "Envoi…" : status === "success" ? "Inscrit ✓" : "S'abonner"}
        </button>
      </form>

      {/* Feedback message */}
      {message && (
        <p className="mt-3 text-xs leading-snug"
           style={{ color: status === "success" ? "#b0b0b0" : "#E54259" }}>
          {message}
        </p>
      )}

    </section>
  );
}