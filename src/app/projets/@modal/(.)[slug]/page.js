"use client";

import { useRouter } from "next/navigation";
import { use, useEffect } from "react";
import { projets } from "../../../../lib/projets";
import ProjetDetail from "../../../../components/ProjetDetail";

export default function ProjetModal({ params }) {
  const { slug } = use(params);
  const router = useRouter();
  const projet = projets.find((p) => p.slug === slug);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") router.back(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!projet) return null;

  return (
    <>
      {/* Fond sombre */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={() => router.back()}
        style={{ animation: "fadeIn 0.35s ease" }}
      />

      {/* Panneau blanc */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white overflow-y-auto"
        style={{
          borderRadius: "2.5rem 2.5rem 0 0",
          maxHeight: "90vh",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.15)",
          animation: "slideUp 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Poignée */}
        <div className="flex justify-center pt-5 pb-2 sticky top-0 bg-white z-10">
          <div className="w-10 h-1 rounded-full bg-black/20" />
        </div>

        {/* Contenu partagé en mode modal */}
        <ProjetDetail
          projet={projet}
          isModal={true}
          onClose={() => router.back()}
        />
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>
    </>
  );
}