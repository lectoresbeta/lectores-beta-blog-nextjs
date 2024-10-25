"use client";

import { useEffect } from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-KKRZLDYB14');
  }, []);

  return (
    <>
      {/* Carga el script de Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KKRZLDYB14"
        strategy="afterInteractive"
      />
    </>
  );
};

export default GoogleAnalytics;
