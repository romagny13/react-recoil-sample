import React from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../atoms/todos";
import { replaceItemAtIndex } from "../util/utils";

import "./TodoItem.css";

export default function TodoItem({ todo, index }) {
  const [todos, setTodos] = useRecoilState(todosState);

  const handleToggleCompleted = () => {
    const newTodos = replaceItemAtIndex(todos, index, {
      ...todo,
      completed: !todo.completed
    });

    setTodos(newTodos);
  };

  return (
    <li className={`list-group-item ${todo.completed ? " completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleCompleted}
      />
      <label className="ms-2">{todo.text}</label>
    </li>
  );
}


