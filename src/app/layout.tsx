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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
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

