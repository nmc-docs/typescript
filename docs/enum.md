---
sidebar_position: 5
---

# Enum

## Enum là gì?

- Trong TypeScript, **enum** là một cấu trúc dữ liệu để định nghĩa một tập hợp các giá trị cố định.
- Khi ta định nghĩa một **enum** , TypeScript tạo ra một kiểu dữ liệu mới, cho phép bạn sử dụng các giá trị của **enum** đó như một kiểu trong khai báo biến, tham số hàm, hoặc kiểu trả về. Điều này giúp bạn xác định các giá trị hợp lệ cho một biến hoặc tham số và giúp kiểm tra kiểu dữ liệu trong quá trình phát triển.

## Cú pháp

```ts
enum EnumName {
  name1 = value1,
  name2 = value2,
  name3 = value3,
  ...
}
```

## Ví dụ

```ts
enum StatusCodes {
  NOT_FOUND = 404,
  SUCCESS = 200,
  ACCEPTED = 202,
  BAD_REQUEST = 400,
}

console.log(StatusCodes.NOT_FOUND); // 404
console.log(StatusCodes.SUCCESS); // 200
```

```ts
enum EAcceptedContactHelpFileType {
  MSWORD = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  EXCEL = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  PDF = "application/pdf",
  CSV = "text/csv",
  VIDEO = "video/mp4",
  MOV = "video/quicktime",
  JPG = "image/jpg",
  JPEG = "image/jpeg",
  PNG = "image/png",
}

const csv: EAcceptedContactHelpFileType = EAcceptedContactHelpFileType.CSV;
console.log(csv); //"text/csv"
```
