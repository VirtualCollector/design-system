import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from '../stitches.config';

import '../styles.css';
import { DesignSystemProvider } from '../primitives/DesignSystemProvider';

function App({ Component, pageProps }) {
  return (
    <DesignSystemProvider>
      <div>
        <Head>
          <title>Design System</title>
          <link rel="stylesheet" href="/fonts/fonts.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          value={{ light: 'light-theme', dark: darkTheme.className }}
          defaultTheme="dark"
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </DesignSystemProvider>
  );
}

export default App;
