import postgres from "postgres";
import { initTodos } from "../lib/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seedTodos() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS todos (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      value VARCHAR(255) NOT NULL,
      isChecked BOOLEAN NOT NULL
    );
  `;

  const insertedTodos = await Promise.all(
    initTodos.map(async (todo) => {
      return sql`
        INSERT INTO todos (id, value, isChecked)
        VALUES (${todo.id}, ${todo.value}, ${todo.isChecked})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedTodos;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [seedTodos()]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
