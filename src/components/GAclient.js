// app/components/GAClient.js
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '../lib/gtag';

export default function GAClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // S'assurer que gtag existe
    if (typeof window === 'undefined' || !window.gtag) return;
    
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}