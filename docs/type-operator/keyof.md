---
sidebar_position: 2
---

# keyof

| Syntax              | Return                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------- |
| `keyof(ObjectType)` | Trả về một type là [literal types](../types/literal-types) chứa tất cả các key của ObjectType |

- Ví dụ:

```ts
type Person = {
  name: string;
  age: number;
  address: string;
};

type P = keyof Person; // type P = 'name' | 'age' | 'address'
```

- Nếu **object type** có dạng [index signature](../index-signatures) thì `keyof` sẽ trả về type của **key** trong [index signature](../index-signatures) đó.

```ts
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // type M = string | number
```
