---
sidebar_position: 2
---

# interface

- Sử dụng từ khóa `interface` để định nghĩa kiểu cho một object, cũng tương tự như `type`

```ts
interface Person {
  name: string;
  age: number;
  introduce: () => void;
}

const obj: Person = {
  name: "Chi",
  age: 21,
  introduce: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};
```

- Ta có thể sử dụng toán tử **optional** (`?`) để chỉ định xem một thuộc tính hay một phương thức là tùy chọn trong object:

```ts
interface Person {
  name: string;
  age: number;
  company?: string;
  introduce?: () => void;
}

const obj: Person = {
  name: "Chi",
  age: 21,
};
```

- Ta có thể sử dụng từ khóa `readonly` để ngăn việc thay đổi giá trị một thuộc tính trong object:

```ts
interface Person {
  readonly name: string;
  age: number;
  company?: string;
  introduce?: () => void;
}

const obj: Person = {
  name: "Chi",
  age: 21,
};

obj.name = "Phuc"; //Error: Cannot assign to 'name' because it is a read-only property
```
