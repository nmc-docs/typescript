---
sidebar_position: 4
---

# Indexed Access Types

| Syntax            | Return                                                                   |
| ----------------- | ------------------------------------------------------------------------ |
| `ObjectType[key]` | Trả về `type` là kiểu của `value` tương ứng với `key` trong `ObjectType` |

:::caution

Chú ý:

- `key` phải là một [literal types](../types/literal-types) và phải trùng tên với các thuộc tính trong `ObjectType`, nếu không sẽ báo lỗi.
- Nếu `ObjectType` có dạng [index signature](../index-signatures) thì `key` là tên kiểu dữ liệu của `property` trong `ObjectType`. Ví dụ: với mảng thì `key` có thể là `number`, `string`.

:::

- Ví dụ khi sử dụng `key` là **string / literal types** :

```ts
type Person = {
  name: string;
  age: number;
  alive: boolean;
};

type Age = Person["age"]; // type Age = number

//Using union types
type I1 = Person["age" | "name"]; // type I1 = string | number

//Using keyof
type I2 = Person[keyof Person]; // type I2 = string | number | boolean

//Using type aliases
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; // type I3 = string | boolean
```

```ts
const array = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = (typeof array)[number]; // type Person = {name: string; age: number}

type Age = (typeof array)[number]["age"]; // type Age = number
type Age2 = Person["age"]; // type Age2 = number. Age và Age2 tương đương nhau
```

- Ví dụ khi `ObjectType` là [index signature](../index-signatures):

```ts
type Foo = {
  [key: number]: string;
};

type Bar = Foo[number]; // type Bar = string
```
