import '../styles/globals.css';
import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { createContext, useCallback, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import QueryContextProvider from '../components/QueryContextProvider';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState();
  const [activeScreen, setActiveScreen] = useState(1);
  const [isQueryActive, setIsQueryActive] = useState(false);
  const [numberOfScreens, setNumberOfScreens] = useState(0);

  const refreshUserProfile = useCallback(async () => {
    const profileResponse = await fetch('/api/profile');
    const profileResponseBody = await profileResponse.json();

    if ('errors' in profileResponseBody) {
      setUser(undefined);
    } else {
      setUser(profileResponseBody.user);
      console.log('user: ', user);
    }
  }, []);

  useEffect(() => {
    refreshUserProfile().catch(() => console.log('fetch api failed'));
  }, [refreshUserProfile]);

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          @font-face {
            font-family: Mosk;
            src: url('../public/assets/fonts/Mosk\ Normal\ 400.ttf');
          }
          body {
            font-family: Mosk, -apple-system, BlinkMacSystemFont, 'Segoe UI',
              Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            margin: 0;
          }
        `}
      />
      <QueryContextProvider>
        <Layout
          user={user}
          isQueryActive={isQueryActive}
          setIsQueryActive={setIsQueryActive}
          screen={activeScreen}
          setScreen={setActiveScreen}
          numberOfScreens={numberOfScreens}
        >
          {/*
          The "Component" component refers to
          the current page that is being rendered
        */}
          <Component
            {...pageProps}
            refreshUserProfile={refreshUserProfile}
            screen={activeScreen}
            setScreen={setActiveScreen}
            numberOfScreens={numberOfScreens}
            setNumberOfScreens={setNumberOfScreens}
            isQueryActive={isQueryActive}
            setIsQueryActive={setIsQueryActive}
          />
        </Layout>
      </QueryContextProvider>
    </>
  );
}
