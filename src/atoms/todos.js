import { atom, selector } from "recoil";

export const todosState = atom({
  key: "todosState",
  default: []
});

export const todosFilterState = atom({
  key: "todosFilterState",
  default: "Show all" // Show dones, Show remaining
});

export const filteredTodosSate = selector({
  key: "filteredTodosSate",
  get: ({ get }) => {
    const filter = get(todosFilterState);
    const todos = get(todosState);

    switch (filter) {
      case "Show dones":
        return todos.filter(x => x.completed === true);
      case "Show remaining":
        return todos.filter(x => x.completed === false);
      default:
        return todos;
    }
  }
});
