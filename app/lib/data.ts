import postgres from "postgres";
import { TodoItem } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchTodos() {
  try {
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await sql<TodoItem[]>`SELECT * FROM todos`;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
