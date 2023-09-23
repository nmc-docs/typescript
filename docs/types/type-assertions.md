# Type assertions

- **Type Assertions** được hiểu là ép kiểu trong TypeScript.
- Ta có ví dụ sau:

```ts
let input = document.querySelector('input["type="text"]');
```

:::danger

Vì kiểu trả về của `document.querySelector()` là kiểu `Element`, cho nên đoạn mã sau sẽ gây ra lỗi biên dịch

```ts
console.log(input.value);
```

:::

:::note

Lý do là vì thuộc tính `value` không tồn tại trong kiểu `Element`. Nó chỉ tồn tại trên kiểu `HTMLInputElement`. Để giải quyết vấn đề này, ta có thể ép kiểu `Element` sang kiểu `HTMLInputElement` bằng cách sử dụng từ khóa **`as`**

```ts
let input = document.querySelector('input[type="text"]') as HTMLInputElement;
```

:::

:::note

Lưu ý rằng kiểu `HTMLInputElement` được mở rộng (kế thừa) từ kiểu `HTMLElement`. Khi ta ép kiểu `HTMLElement` về kiểu `HTMLInputElement`, kiểu ép kiểu này còn được gọi là ép kiểu xuống

:::

🔑 Nói tóm lại: **Type Assertions** giúp ta ép kiểu dữ liệu cụ thể cho một phần tử. TypeScript chỉ cho phép chuyển đổi kiểu (ép kiểu) thành một kiểu cụ thể hơn hoặc kế thừa từ một kiểu bao quát hơn. Quy tắc này ngăn chặn các hành động ép kiểu "bất khả thi" như `const x = "hello" as number`

- Một số ví dụ về **Type Assertions**:

```ts
interface Employee {
  name: string;
  cardNumber: string;
  age: number;
  address: string;
}

const employee1 = {
  name: "John",
  cardNumber: "022202004326",
  age: 28,
  address: "New York",
} as Employee; // Biến employee1 đã trở thành biến có kiểu là Employee
```
