---
sidebar_position: 4
---

# Intersection types

- Ngoài từ khóa `extends` để mở rộng thuộc tính/phương thức từ một object khác, ta có thể sử dụng toán tử `&` để kết hợp các thuộc tính/phương thức của hai hoặc nhiều object type lại với nhau.

:::caution

Lưu ý: Chỉ khi khai báo kiểu bằng [type aliases](../types/type-aliases) thì mới sử dụng được toán tử & để kết hợp nhiều object type lại với nhau

:::

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

interface Area {
  area: number;
}

type Shape = Colorful & Circle & Area;

const myShape: Shape = {
  color: "red",
  radius: 4,
  area: 100,
};
```
