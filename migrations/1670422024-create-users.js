import bcrypt from 'bcrypt';

export async function up(sql) {
  const passwordHash = await bcrypt.hash('XXX', 12);

  await sql`
    INSERT INTO
      users
    (username, user_email, password_hash)
    VALUES
      ('John Doe', 'john@doe.com', ${passwordHash})
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE users
  `;
}
