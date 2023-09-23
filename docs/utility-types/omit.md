---
sidebar_position: 7
---

# Omit<Type, Keys>

- `Omit<Type, Keys>` trả về một **object type** dựa trên `Type` và loại bỏ đi các thuộc tính từ `Keys` (thường là [literal types](../types/literal-types))

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
```
