import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CookieConsent from './components/CookieConsent/CookieConsent';
import './styles.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lectores Beta</title>
      </head>
      <body>
        <div>
          <Header />
          <main>
          {children}
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
};

