// app/agency/page.tsx
import { Suspense } from "react";
import Home from "./equipe";

export default function AgencyPage() {
  return (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  );
}
