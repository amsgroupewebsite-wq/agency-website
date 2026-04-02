// src/app/agencyfolio/page.js
import { Suspense } from "react";
import Agencyfolio from "./Agencyfolio";  // ← changer Home en Agencyfolio

export default function AgencyPage() {
  return (
    <Suspense fallback={null}>
      <Agencyfolio />
    </Suspense>
  );
}