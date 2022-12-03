import '../styles/globals.css';
import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState();
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            margin: 0;
          }
        `}
      />
      <Layout user={user}>
        {/*
          The "Component" component refers to
          the current page that is being rendered
        */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
