"use client";

import { useEffect } from 'react';

interface ReCaptchaProps {
  onVerify: (token: string | null) => void;
  action: string;
}

const ReCaptcha = ({ onVerify, action }: ReCaptchaProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadRecaptcha = () => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string, { action })
            .then((token: string) => {
              onVerify(token);
            });
        });
      };

      // Carga el script de reCAPTCHA si no está ya cargado
      if (!window.grecaptcha) {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.onload = loadRecaptcha;
        document.body.appendChild(script);
      } else {
        loadRecaptcha();
      }
    }
  }, [onVerify, action]);

  return null; // No renderiza nada en la interfaz
};

export default ReCaptcha;
