# React Recoil Sample

[Getting Started](https://recoiljs.org/fr/docs/introduction/getting-started/)

```
npm i recoil
```

### Samples

#### with atom

Create state

```js
import { atom } from "recoil";

export const todosState = atom({
  key: "todosState",
  default: []
});
```

Use state

```js
const [todos, setTodos] = useRecoilState(todosState);
```

Only the value

```js
const todos = useRecoilValue(todosState);
```

Only the method

```js
const setTodos = useSetRecoilState(todosState);
setTodos(oldTodos => [newTodo, ...oldTodos]);
```

#### With Selector

Create state

```js
// ...

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
```

Use state

```js
const todos = useRecoilValue(filteredTodosSate);
```
