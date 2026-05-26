"use client";

import { Suspense } from "react";
import GAClient from "../components/GAclient";

export default function ClientProviders({ children }) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <GAClient />
      </Suspense>
    </>
  );
}