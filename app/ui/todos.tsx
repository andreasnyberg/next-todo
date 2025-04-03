"use client";

import { useState } from "react";
import Todo from "./todo";
import { TodoItem } from "@/app/lib/definitions";

const initItems: TodoItem[] = [
  {
    id: "1",
    value: "Take out trash",
    isChecked: false,
  },
  {
    id: "2",
    value: "Buy milk",
    isChecked: false,
  },
  {
    id: "3",
    value: "Drink water",
    isChecked: false,
  },
];

export default function Todos() {
  const [todos, setTodos] = useState<TodoItem[]>(initItems);

  function addNewTodo() {
    const updatedTodos = todos.map((todo) => todo);
    updatedTodos.push({
      id: (todos.length + 1).toString(),
      value: "Drink water",
      isChecked: false,
    });

    setTodos(updatedTodos);
  }

  function editTodo(newTodo: TodoItem) {
    console.log("new todo:");

    const updatedTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return {
          ...todo,
          value: newTodo.value,
          isChecked: newTodo.isChecked,
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
        className="w-100 btn btn-primary btn-lg mt-4"
        onClick={addNewTodo}
      >
        ADD NEW
      </button>
    </>
  );
}
