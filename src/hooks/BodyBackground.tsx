'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BodyBackground() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/teachers')) {
      document.body.style.background = '#f8f8f8';
    } else {
      document.body.style.background = '#fff';
    }

    return () => {
      document.body.style.background = '';
    };
  }, [pathname]);

  return null;
}