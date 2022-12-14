export async function up(sql) {
  await sql`
    CREATE TABLE users (
      user_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      username varchar(90) NOT NULL,
      user_email varchar(90) NOT NULL UNIQUE,
      password_hash varchar(70) NOT NULL UNIQUE
    )
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE users
  `;
}
