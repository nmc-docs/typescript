---
sidebar_position: 1
---

# Các kiểu cơ bản

## Kiểu nguyên thủy

- Kiểu dữ liệu biểu thị dạng chuỗi: `string`
- Kiểu dữ liệu biểu thị dạng số (nguyên + thực): `number`
- Kiểu dữ liệu biểu thị true/false: `boolean`

```ts
const a: number = 4;
const b: string = "TypeScript";
const c: boolean = true;
```

## Kiểu biểu diễn mảng một chiều

- Để biểu diễn kiểu dữ liệu là mảng một chiều, ta viết kiểu dữ liệu của các phần tử mảng trước rồi thêm `[]`
- Ví dụ: `string[]` (biểu thị mảng 1 chiều có các phần tử có kiểu dữ liệu là `string`), `number[]`, `boolean[]`,…

```ts
const arr: string[] = ["JavaScript", "TypeScript", "ReactJS"];
```

## Kiểu biểu diễn object

- Để biểu diễn Object, ta bao bọc các thuộc tính bởi dấu ngoặc nhọn `{}`, sau đó là các cặp `property: value`

```ts
const person: { name: string; age: number } = {
  name: "John",
  age: 20,
};
```

## Kiểu `any`

- Nếu ta không muốn chỉ định rõ một kiểu dữ liệu nhất định, ta có thể dùng kiểu `any` để tránh gây lỗi xung đột kiểu dữ liệu.
- Không nên quá lạm dụng kiểu `any`, chỉ sử dụng khi kiểu dữ liệu quá phức tạp và ta không muốn chỉ định cụ thể từng kiểu
