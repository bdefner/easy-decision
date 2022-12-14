export async function up(sql) {
  await sql`
    CREATE TABLE sessions (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      token varchar(110) NOT NULL UNIQUE,
      csrf_secret varchar(119) NOT NULL UNIQUE,
      expiry_timestamp timestamp NOT NULL DEFAULT NOW() + INTERVAL '72 hours',
			user_id integer REFERENCES users (user_id) ON DELETE CASCADE
    )
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE sessions
  `;
}
