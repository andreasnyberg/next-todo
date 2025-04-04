"use client";

import { useState } from "react";
import Todo from "./todo";
import { TodoItem } from "@/app/lib/definitions";

export default function Todos({ todosProps }: { todosProps: TodoItem[] }) {
  const [todos, setTodos] = useState<TodoItem[]>(todosProps);

  function addNewTodo() {
    const updatedTodos = todos.map((todo) => todo);

    updatedTodos.push({
      id: (todos.length + 1).toString(),
      value: "",
      ischecked: false,
    });

    setTodos(updatedTodos);
  }

  function editTodo(newTodo: TodoItem) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return {
          ...todo,
          value: newTodo.value,
          ischecked: newTodo.ischecked,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function deleteTodo(id: string) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  }

  return (
    <>
      <div className="list-group">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onTodoChange={editTodo}
            onTodoDelete={deleteTodo}
          />
        ))}
      </div>

      <button
        className="w-100 btn btn-secondary btn-lg mt-4"
        onClick={addNewTodo}
      >
        ADD NEW +
      </button>

      <button className="w-100 btn btn-primary btn-lg mt-4">SAVE</button>
    </>
  );
}
