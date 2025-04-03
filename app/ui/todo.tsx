"use client";

import { useState } from "react";
import { TodoItem } from "@/app/lib/definitions";

interface TodoProps {
  todo: TodoItem;
  onTodoChange: (newTodo: TodoItem) => void;
  onTodoDelete: (id: string) => void;
}

export default function Todo({ todo, onTodoChange, onTodoDelete }: TodoProps) {
  const [inputVal, setInputVal] = useState(todo.value);
  const [inEditMode, setInEditMode] = useState(
    todo.value.length ? false : true
  );

  function toggleCheck() {
    onTodoChange({
      id: todo.id,
      value: todo.value,
      isChecked: !todo.isChecked,
    });
  }

  function handleConfirm() {
    onTodoChange({
      id: todo.id,
      value: inputVal,
      isChecked: todo.isChecked,
    });

    setInEditMode(false);
  }

  function handleDelete() {
    onTodoDelete(todo.id);
  }

  return (
    <label className="list-group-item d-flex gap-3 justify-between items-center !py-0 h-14">
      <div className="flex items-center gap-x-3">
        <input
          type="checkbox"
          className="form-check-input flex-shrink-0 !text-xl"
          checked={todo.isChecked}
          onChange={toggleCheck}
        />

        {inEditMode ? (
          <input
            type="text"
            className="form-control inline"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            autoFocus
          />
        ) : (
          <span className="pt-1 form-checked-content">
            <strong>{todo.value}</strong>
          </span>
        )}
      </div>

      <div className="flex gap-3 items-center">
        {inEditMode ? (
          <button
            className="btn btn-sm h-7 !text-xs tracking-widest !font-bold btn-success"
            onClick={handleConfirm}
          >
            OK
          </button>
        ) : (
          <button
            className="btn btn-sm h-7 !text-xs tracking-widest !font-bold btn-secondary"
            onClick={() => setInEditMode(true)}
          >
            EDIT
          </button>
        )}

        <button
          className="btn btn-sm btn-danger h-7 !text-xs tracking-widest !font-bold"
          onClick={handleDelete}
        >
          X
        </button>
      </div>
    </label>
  );
}
