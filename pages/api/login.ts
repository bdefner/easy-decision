// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createSession } from '../../database/sessions';
import {
  getUserByEmail,
  getUserWithPasswordHashByEmail,
  getUserWithPasswordHashByUsername,
} from '../../database/users';
import { createSerializedRegisterSessionTokenCookie } from '../../utils/cookies';
import { createCsrfSecret } from '../../utils/csrf';

export type LoginResponseBody =
  | { errors: { message: string }[] }
  | { user: { username: string } };

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<LoginResponseBody>,
) {
  if (request.method === 'POST') {
    // Make sure the data exist
    if (
      typeof request.body.userEmail !== 'string' ||
      typeof request.body.password !== 'string' ||
      !request.body.userEmail ||
      !request.body.password
    ) {
      return response
        .status(400)
        .json({ errors: [{ message: 'Email or password not provided' }] });
    }
    // Get the user by the Email
    const user = await getUserWithPasswordHashByEmail(request.body.userEmail);

    console.log('user: ', user);

    if (!user) {
      return response
        .status(401)
        .json({ errors: [{ message: 'user not found' }] });
    }

    // Check if the hash and the password match
    const isValidPassword = await bcrypt.compare(
      request.body.password,
      user.passwordHash,
    );

    if (!isValidPassword) {
      return response
        .status(401)
        .json({ errors: [{ message: 'password is not valid' }] });
    }

    // Create a csrf secret
    const secret = await createCsrfSecret();
    // Create a session token and serialize a cookie with the token
    const session = await createSession(
      user.userId,
      crypto.randomBytes(80).toString('base64'),
      secret,
    );

    const serializedCookie = createSerializedRegisterSessionTokenCookie(
      session.token,
    );

    response
      .status(200)
      .setHeader('Set-Cookie', serializedCookie)
      .json({ user: { username: user.username } });
  } else {
    response.status(401).json({ errors: [{ message: 'Method not allowed' }] });
  }
}
