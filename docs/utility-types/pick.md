---
sidebar_position: 6
---

# Pick\<Type, Keys\>

- `Pick<Type, Keys>` trả về một **object type** dựa trên `Type` mà chỉ chứa các thuộc tính từ `Keys` (thường là [literal types](../types/literal-types))

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```
