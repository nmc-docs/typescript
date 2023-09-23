---
sidebar_position: 7
---

# Generic class

- Generic class là một loại class trong TypeScript cho phép khai báo các kiểu dữ liệu động trong class, giúp tái sử dụng code và tránh lặp code cho các kiểu dữ liệu khác nhau. Khi sử dụng generic class, ta có thể tạo ra các instance của class với kiểu dữ liệu cụ thể mà không cần phải tạo ra một class mới cho từng kiểu dữ liệu đó.

```ts
class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

const stringStack = new Stack<string>();
stringStack.push("a");
stringStack.push("b");
stringStack.push("c");
```
