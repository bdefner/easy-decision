import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createSession } from '../../database/sessions';
import { createUser, getUserByEmail } from '../../database/users';
import { createSerializedRegisterSessionTokenCookie } from '../../utils/cookies';
import { createCsrfSecret } from '../../utils/csrf';

export type RegisterResponseBody =
  | { errors: { message: string }[] }
  | { user: { userId: number } };

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<RegisterResponseBody>,
) {
  if (request.method != 'POST') {
    response.status(401).json({ errors: [{ message: 'Method not allowed' }] });
    return;
  } else {
    // Test if data is provided

    if (
      // typeof request.body.username !== 'string' ||
      // typeof request.body.password !== 'string' ||
      !request.body.username ||
      !request.body.password ||
      !request.body.userEmail
    ) {
      return response.status(400).json({
        errors: [{ message: 'username, email or password not provided' }],
      });
    }

    // Check if the user already exists

    const user = await getUserByEmail(request.body.userEmail);

    if (user) {
      return response.status(401).json({
        errors: [
          {
            message:
              'There is already an account associated with that email address!',
          },
        ],
      });
    }

    // Hash the password

    const passwordHash = await bcrypt.hash(request.body.password, 12);

    const newUser = await createUser(
      request.body.username,
      request.body.userEmail,
      passwordHash,
    );

    // Create a csrf secret
    const secret = await createCsrfSecret();

    // Create a session token and serialize a cookie with the token

    console.log('heres!');

    const session = await createSession(
      newUser.userId,
      crypto.randomBytes(80).toString('base64'),
      secret,
    );

    const serializedCookie = createSerializedRegisterSessionTokenCookie(
      session.token,
    );

    response
      .status(200)
      .setHeader('Set-Cookie', serializedCookie)
      .json({ user: { userId: newUser.userId } });
  }
}
