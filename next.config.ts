import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Configuración del Webpack para importar SVG como componentes
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Configura el uso de @svgr/webpack para SVGs
    });

    return config;
  },

  // Otras configuraciones opcionales
  images: {
    domains: ['lectoresbeta.com'], // Configura los dominios permitidos para importar imágenes
  },

  // Puedes incluir configuraciones adicionales como la localización
  i18n: {
    locales: ['es', 'en'], // Locales soportados
    defaultLocale: 'es',   // Idioma por defecto
  },
};

export default nextConfig;
