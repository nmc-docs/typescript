---
sidebar_position: 3
---

# Required< Type >

- `Required<Type>` trả về một **object type** mới từ `Type` với tất cả các thuộc tính `optional` (nếu có) được chuyển thành `required`

```ts
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };
const obj2: Required<Props> = { a: 5 }; //Error: Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```
