import { css } from '@emotion/react';
import Head from 'next/head';
import { createContext, useContext } from 'react';
import Footer from './Footer';
import Header from './Header';

const mainStyles = css`
  padding: 10px 20px;
`;

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        user={props.user}
        isQueryActive={props.isQueryActive}
        screen={props.screen}
        numberOfScreens={props.numberOfScreens}
      />

      <main css={mainStyles}>{props.children}</main>

      <Footer />
    </>
  );
}
