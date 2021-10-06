import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../atoms/todos";

export default function NewTodo() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todosState); // useSetRecoilState allows to update state

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (text.trim() === "") return;

    const newTodo = { id: Date.now().toString(), text, completed: false };
    setTodos(oldTodos => [newTodo, ...oldTodos]);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        className="form-control"
        placeholder="Add a task"
        value={text}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
}
