import postgres from "postgres";
import { TodoItem } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// TODO testa att köra denna!
export async function fetchTodos() {
  console.log("Fetching TODOS...");

  try {
    console.log("Fetching todos...");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const data = await sql<TodoItem[]>`SELECT * FROM todos`;

    console.log("Data fetch completed after 2 seconds.");

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
