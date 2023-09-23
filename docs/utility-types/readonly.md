---
sidebar_position: 4
---

# Readonly< Type >

- `Readonly<Type>` trả về một **object type** mới từ `Type` với tất cả các thuộc tính chuyển thành `readonly`.

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello"; //Error: Cannot assign to 'title' because it is a read-only property.
```
