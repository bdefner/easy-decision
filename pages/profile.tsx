import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getUserBySessionToken, User } from '../database/users';

type Props = {
  user?: User;
};

export default function Profile(props: Props) {
  props.isQueryActive && props.setIsQueryActive(false);
  if (!props.user) {
    return (
      <>
        <Head>
          <title>User not found</title>
          <meta name="description" content="User not found" />
        </Head>
        <h1>404 - User not found</h1>
        Better luck next time
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Personal Information</title>
        <meta name="description" content="Biography of the person" />
      </Head>
      <section className="mainSection">
        <div className="centerFlexContainer profileMenuWrap">
          {props.screen > 1 && (
            <Link href="/query" className="profileNavButton button2">
              <Image
                src="/../public/assets/icons/arrow.png"
                alt=""
                width="32"
                height="32"
              />
              <p>continue</p>
            </Link>
          )}
          <Link href="/query" className="profileNavButton button1">
            <Image
              src="/../public/assets/icons/plus.png"
              alt=""
              width="32"
              height="32"
            />
            <p>start new</p>
          </Link>
          <Link href="/" className="profileNavButton button2">
            <Image
              src="/../public/assets/icons/settings.png"
              alt=""
              width="32"
              height="32"
            />
            <p>settings</p>
          </Link>
        </div>
      </section>
      <section className="mainSection">
        <div className="mainContainer">
          <div className="flexRowWrap">
            <hr />
            <p>see your past queries</p>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = context.req.cookies.sessionToken;

  const user = token && (await getUserBySessionToken(token));

  if (!user) {
    return {
      redirect: {
        destination: '/login?returnTo=/profile',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}
