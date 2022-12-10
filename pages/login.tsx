import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LoginResponseBody } from './api/login';

type Props = {
  refreshUserProfile: () => Promise<void>;
};

export default function Login(props: Props) {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();
  props.setIsQueryActive(false);

  async function loginHandler() {
    const loginResponse = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: userEmail.toLowerCase(),
        password,
      }),
    });
    const loginResponseBody = (await loginResponse.json()) as LoginResponseBody;

    if ('errors' in loginResponseBody) {
      setErrors(loginResponseBody.errors);
      return console.log(loginResponseBody.errors);
    }

    console.log(router.query.returnTo);

    const returnTo = router.query.returnTo;

    if (
      returnTo &&
      !Array.isArray(returnTo) && // Security: Validate returnTo parameter against valid path
      // (because this is untrusted user input)
      /^\/[a-zA-Z0-9-?=/]*$/.test(returnTo)
    ) {
      // refresh the user on state
      await props.refreshUserProfile();
      return await router.push(returnTo);
    }

    // refresh the user on state
    await props.refreshUserProfile();
    // redirect user to user profile
    await router.push(`/profile`);
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="User login" />
      </Head>
      <div id="AuthPageWrap">
        <div className="AuthFormWrap">
          <h1 id="FormH1">Login</h1>
          <div>
            <label>
              E-mail <br />
              <input
                onChange={(event) => {
                  setUserEmail(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <label>
              password <br />
              <input
                onChange={(event) => {
                  setPassword(event.currentTarget.value);
                }}
              />
            </label>
          </div>

          <div
            className="mainButton button1 giveSpace"
            onClick={async () => {
              await loginHandler();
            }}
          >
            login
          </div>
          <p className="smallText">
            Don't have an account yet? <Link href="/signup">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}
