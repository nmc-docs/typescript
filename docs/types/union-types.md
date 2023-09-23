---
sidebar_position: 2
---

# Union types

- **Union Types** trong Typescript cho phép định nghĩa một kiểu dữ liệu có thể chứa giá trị của nhiều kiểu dữ liệu khác nhau. Khi sử dụng **Union Types** , chúng ta có thể chỉ định cho một biến có thể chứa giá trị của một hoặc nhiều kiểu dữ liệu khác nhau. Điều này cho phép chúng ta viết code linh hoạt hơn và xử lý các trường hợp dữ liệu đa dạng một cách dễ dàng hơn.
- Cú pháp: `type1 | type2 | type3 | .. | typeN`
- Ví dụ:

```ts
let myVar: string | number | boolean;
```

=> Trong đó, biến `myVar` có thể chứa giá trị của kiểu dữ liệu `string`, `number` hoặc `boolean`
