"use client";

import { LangProvider } from "../app/context/LangContext";
import GAClient from "../components/GAclient";

export default function ClientProviders({ children }) {
  return (
    <LangProvider>
      {children}
      <GAClient />
    </LangProvider>
  );
}
