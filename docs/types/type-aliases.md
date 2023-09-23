---
sidebar_position: 4
---

# Type aliases

- **Type aliases** trong Typescript cho phép người dùng đặt tên cho các kiểu dữ liệu đã được định nghĩa trước để sử dụng lại. Các **type aliases** có thể được sử dụng để định nghĩa kiểu dữ liệu cho các biến, tham số và kết quả của các hàm.
- Việc sử dụng **type aliases** giúp mã nguồn trở nên dễ đọc hơn
- Ví dụ:

```ts
// Sử dụng type aliases để định nghĩa kiểu cho một object
type Person = {
  name: string;
  birthYear: number;
  introduce: () => void;
  isOldEnough: (currentYear: number) => boolean;
};

const p1: Person = {
  name: "Chi",
  birthYear: 2002,
  introduce: function () {
    console.log(`Hello I am ${this.name}`);
  },
  isOldEnough: function (currentYear) {
    return currentYear - this.birthYear > 18;
  },
};

p1.introduce();
console.log(p1.isOldEnough(2023));
```

```ts
// Sử dụng type aliases với union types
type ID = string | number;
const id: ID = "123";
```
