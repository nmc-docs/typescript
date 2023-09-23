---
sidebar_position: 3
---

# Literal types

- Trong TypeScript, **Literal types** là một loại kiểu dữ liệu cho phép bạn chỉ định các giá trị cụ thể cho một biến. Các giá trị này được xác định bằng từ khóa `literal` như `string`, `number`, `boolean`
- Ví dụ, ta có thể định nghĩa kiểu dữ liệu cho một biến `status` với các giá trị chỉ định là `"loading"`, `"success"`, `"error"` bằng cách sử dụng **Literal types** như sau:

```ts
type Status = "loading" | "success" | "error";

function getStatus(): Status {
  return "loading";
}

const currentStatus: Status = "loading";
```

- Với **Literal types** , ta có thể kiểm tra được các giá trị đầu vào của một hàm hoặc một biến. Nếu một giá trị không thuộc vào các giá trị chỉ định, TypeScript sẽ báo lỗi để tránh các lỗi tiềm ẩn.
