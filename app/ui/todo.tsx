"use client";

import { useState } from "react";

export default function Todo() {
  const [checked, setChecked] = useState(false);
  const [inEditMode, setInEditMode] = useState(false);

  function toggleCheck() {
    setChecked(!checked);
  }

  return (
    <label className="list-group-item d-flex gap-3 justify-between items-center !py-0 h-14">
      <div className="flex items-center gap-x-3">
        <input
          type="checkbox"
          className="form-check-input flex-shrink-0"
          checked={checked}
          onChange={toggleCheck}
        />

        {inEditMode ? (
          <input type="text" className="form-control inline" />
        ) : (
          <span className="pt-1 form-checked-content">
            <strong>hej</strong>
          </span>
        )}
      </div>

      <div className="flex gap-3 items-center">
        {inEditMode ? (
          <button
            className="btn btn-sm h-7 !text-xs tracking-widest !font-bold btn-success"
            onClick={() => setInEditMode(false)}
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

        <button className="btn btn-sm btn-danger h-7 !text-xs tracking-widest !font-bold">
          X
        </button>
      </div>
    </label>
  );
}
