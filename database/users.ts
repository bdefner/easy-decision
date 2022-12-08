import { sql } from './connect';

export type User = {
  userId: number;
  username: string;
  email: string;
  passwordHash: string;
  account_type_id: number;
};

export type UserWithoutPasswordHash = {
  userId: number;
  username: string;
  email: string;
  account_type_id: number;
};

export async function getUserWithPasswordHashByUserId(userId: number) {
  const [user] = await sql<User[]>`

  SELECT
    *
  FROM
    users
  WHERE
    users.user_id = ${userId}
  `;

  return user;
}

export async function getUserByEmail(userEmail: string) {
  const [user] = await sql<User[]>`
  SELECT
    user_id,
    username
  FROM
    users
  WHERE
    user_email=${userEmail}`;
  return user;
}

export async function getUserWithPasswordHashByEmail(userEmail: string) {
  const [user] = await sql<User[]>`
  SELECT
    user_id,
    username,
    password_hash
  FROM
    users
  WHERE
    user_email=${userEmail}`;
  return user;
}

export async function getUserBySessionToken(token: string) {
  if (!token) return undefined;

  const [user] = await sql<{ id: number; username: string }[]>`
    SELECT
      users.user_id,
      users.username
    FROM
      users
    INNER JOIN
      sessions ON (
        sessions.token = ${token} AND
        sessions.user_id = users.user_id AND
        sessions.expiry_timestamp > now()
      )
  `;

  return user;
}

export async function createUser(
  username: string,
  userEmail: string,
  passwordHash: string,
) {
  const [user] = await sql<User[]>`
  INSERT INTO users
    (username, user_email, password_hash)
  VALUES
    (${username}, ${userEmail}, ${passwordHash})
  RETURNING
    user_id
    username,
    user_email
  `;
  return user;
}
