// pages/_app.js
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ThemeProvider } from "theme-ui"
import theme from "../theme"

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          </ThemeProvider>
    </UserProvider>
  );
}
