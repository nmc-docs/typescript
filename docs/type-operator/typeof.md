---
sidebar_position: 3
---

# typeof

| Syntax             | Return                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `typeof(variable)` | Trả về `type` tương ứng với `variable`. Sau đây là một số giá trị mà nó có thể trả về (không phải là tất cả): `string`, `number`, `boolean`, `object`, `function`, `undefined` |

- Nếu `variable` là một `object` thì nó sẽ trích xuất toàn bộ `property` và kiểu của `value` tương ứng trong `object` đó để tạo thành kiểu cho object `variable`

```ts
const array = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = (typeof array)[number]; // type Person = {name: string; age: number}
```

- Ví dụ về sử dụng kết hợp giữa `typeof` và `keyof`:

```ts
const person = {
  name: "John",
  age: 30,
  country: "US",
  career: "Software Engineer",
};

type PersonKey = keyof typeof person; // type PersonKey = "name" | "age" | "country" | "career"
```

```ts
enum StatusCodes {
  NOT_FOUND = 404,
  SUCCESS = 200,
  ACCEPTED = 202,
  BAD_REQUEST = 400,
}

type StatusCodesKey = keyof typeof StatusCodes;
// type StatusCodesKey = "NOT_FOUND" | "SUCCESS" | "ACCEPTED" | "BAD_REQUEST"
```
