import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Props = {
  refreshUserProfile: () => Promise<void>;
};

export default function Login(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function registerHandler() {
    const registerResponse = await fetch('api/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: username.toLowerCase(),
        userEmail: userEmail,
        password,
      }),
    });
    const registerResponseBody =
      (await registerResponse.json()) as RegisterResponseBody;

    if ('errors' in registerResponseBody) {
      setErrors(registerResponseBody.errors);
      return console.log(registerResponseBody.errors);
    }

    const returnTo = router.query.returnTo;
    if (
      returnTo &&
      !Array.isArray(returnTo) && // Security: Validate returnTo parameter against valid path
      // (because this is untrusted user input)
      /^\/[a-zA-Z0-9-?=/]*$/.test(returnTo)
    ) {
      return await router.push(returnTo);
    }

    // refresh the user on state
    // await props.refreshUserProfile();
    // redirect user to user profile
    await router.push(`/profile`);
  }

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="User registration" />
      </Head>
      <div id="AuthPageWrap">
        <div className="AuthFormWrap">
          <h1 id="FormH1">Register account</h1>
          <div>
            <label>
              username <br />
              <input
                onChange={(event) => {
                  setUsername(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <label>
              email <br />
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
            <br />
            <label>
              repeat password <br />
              <input
                onChange={(event) => {
                  setPasswordRepeat(event.currentTarget.value);
                }}
              />
            </label>
          </div>

          <div
            className="mainButton button2 giveSpace"
            onClick={async () => {
              await registerHandler();
            }}
          >
            Sign up
          </div>
          <button
            onClick={async () => {
              await registerHandler();
            }}
          >
            Register test
          </button>
          <p className="smallText">
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}
