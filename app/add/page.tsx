import Todos from "../ui/todos";
import { fetchTodos } from "@/app/lib/data";

export default async function Page() {
  const todos = await fetchTodos();

  return (
    <div className="max-w-sm m-auto pt-32">
      <Todos todosProps={todos} />
    </div>
  );
}
