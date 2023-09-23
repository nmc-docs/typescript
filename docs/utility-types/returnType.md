---
sidebar_position: 8
---

# ReturnType< Type >

- `ReturnType<Type>` trả về một **type** tương ứng với **type** trả về từ function `Type`

```ts
const f1 = (a: number, b: string) => {
  return { a, b };
};

type T0 = ReturnType<() => string>; // type T0 = string
type T1 = ReturnType<(s: string) => void>; // type T1 = void
type T2 = ReturnType<<T>() => T>; // type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // type T3 = number[]
type T4 = ReturnType<typeof f1>; // type T4 = { a: number, b: string }
```
