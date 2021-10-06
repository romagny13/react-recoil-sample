import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredTodosSate, todosState } from "../atoms/todos";
import NewTodo from "../components/NewTodo";
import TodoItem from "../components/TodoItem";
import TodosFilters from "../components/TodosFilters";

export default function Todos() {
  // const [todos, setTodos] = useRecoilState(todosState);
  // or get only the value of the state with useRecoilValue
  // const todos = useRecoilValue(todosState);
  // or filtered
  const todos = useRecoilValue(filteredTodosSate);

  return (
    <div className="container">
      <h1>todos</h1>
      <NewTodo />
      <ul className="list-group mb-3">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
      <TodosFilters />
      <div className="my-3">{JSON.stringify(todos)}</div>
    </div>
  );
}
