"use client";

import { usePathname } from "next/navigation";

export function useLastPath() {
  const pathname = usePathname();
  return pathname.split("/").filter(Boolean).pop() || "";
}