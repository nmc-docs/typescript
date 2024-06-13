---
sidebar_position: 1
slug: /
---

# Tổng quan về TypeScript

## TypeScript là gì?

- **TypeScript** là một ngôn ngữ lập trình được phát triển và duy trì bởi Microsoft.
- **TypeScript** là một tập hợp siêu cú pháp nghiêm ngặt của JavaScript và thêm tính năng kiểu tĩnh tùy chọn vào ngôn ngữ.
- **TypeScript** được thiết kế để phát triển các ứng dụng lớn và cuối cùng được chuyển đổi sang JavaScript để biên dịch

## Cài đặt và cấu hình cho TypeScript

- Khởi tạo thư mục tên TypeScript
- Khởi tạo npm:

```bash
npm init -y
```

- Cài các dependencies cần thiết:

```
npm install @types/node tslib
```

- Cài các devDependencies cần thiết:

```bash
npm install -D typescript ts-node nodemon tsconfig-paths tsc-alias
```

:::info

- **typescript** : thư viện ngôn ngữ TypeScript
- **nodemon** : tự động restart lại code khi có sự thay đổi
- **ts-node**: dùng để chạy TypeScript trực tiếp
- **tsconfig-paths**: giúp TypeScript hiểu các alias import khi chạy ở môi trường dev
- **tsc-alias** : giúp TypeScript có thể hiểu được alias import (absolute path) khi biên dịch sang JavaScript

:::

- Khởi tạo file `tsconfig.json` để cấu hình cho TypeScript:

```bash
npx tsc --init
```

- Trong file `tsconfig.json`, ta sẽ thực hiện một số cấu hình cho Typescript:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "CommonJS",
    "outDir": "build",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "importHelpers": true,
    "skipLibCheck": true,
    "removeComments": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noUncheckedIndexedAccess": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "baseUrl": ".",
    "paths": {
      "src/*": ["./src/*"]
    }
  },
  "ts-node": {
    "require": ["tsconfig-paths/register"]
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

| Config                                                            | Description                                                                                                                                                                                                                            |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "target": "ESNext"                                                | Chọn phiên bản JavaScript ES mới nhất để biên dịch                                                                                                                                                                                     |
| "module": "CommonJS"                                              | Chỉ định module system cho chương trình                                                                                                                                                                                                |
| "outDir": "build"                                                 | Chỉ định thư mục sẽ chứa tất cả các file được biên dịch sang js                                                                                                                                                                        |
| "baseUrl": ".",<br />"paths": \{ "src/_": ["./src/_ "] \}         | Thiết lập**absolute import** (loại bỏ `../`, `./` khi ta import).                                                                                                                                                                      |
| "moduleResolution": "Node"                                        | Thiết lập cách để TypeScript tìm kiếm các module được import trong dự án của bạn.                                                                                                                                                      |
| "resolveJsonModule": true                                         | Cho phép import file**json**                                                                                                                                                                                                           |
| "importHelpers": true                                             | Cải thiện khả năng tương thích của TypeScript với ECMAScript 5 và các phiên bản trước của công cụ JavaScript vốn không hỗ trợ một số tính năng ngôn ngữ nhất định. Ngoài ra nó có thể giúp giảm kích thước tệp JavaScript đã biên dịch |
| "skipLibCheck": true                                              | Bỏ kiểu tra kiểu trong tất cả các file `.d.ts`. Điều này có thể cải thiện tốc độ biên dịch khi ta sử dụng các thư viện có nhiều tệp `.d.ts`.                                                                                           |
| "removeComments": true                                            | Xóa hết comments trong code khi biên dịch sang js                                                                                                                                                                                      |
| "noUncheckedIndexedAccess": true                                  | Thêm kiểu undefined vào kiểu của property mà được định nghĩa bằng Index signature(giống Non-existing properties)                                                                                                                       |
| "strict": true                                                    | Bật chế độ kiểm tra type nghiêm ngặt                                                                                                                                                                                                   |
| "allowSyntheticDefaultImports": true<br />"esModuleInterop": true | Cho phép ta viết cú pháp `import` default export như ở ES6                                                                                                                                                                             |
| "forceConsistentCasingInFileNames": true                          | Kiểm soát tên file được viết bằng chữ cái in hoa hay chữ thường                                                                                                                                                                        |

- Tạo một thư mục **src** và một file **main.ts** bên trong thư mục đó:

```ts
console.log("Hello TypeScript");
```

- Tạo file `nodemon.json` ở ngoài cùng thư mục dự án để cấu hình nodemon chạy dự án ở môi trường dev:

```json
{
  "events": {
    "start": "clear"
  },
  "watch": ["src"],
  "ext": "ts",
  "exec": "node -r ts-node/register --env-file=.env src/main.ts"
}
```

- Vào file `package.json` tạo script để chạy TypeScript:

```json
{
  "name": "typescript-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/main.ts",
    "build": "tsc && tsc-alias",
    "start": "node build/main.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.0.3",
    "ts-node": "^10.9.2",
    "tsc-alias": "^1.8.8",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.3.3"
  },
  "dependencies": {
    "@types/node": "^20.11.7",
    "tslib": "^2.6.2"
  }
}
```

## Chạy chương trình

:::info

- **npm run dev** : Sử dụng lệnh này để chạy file TypeScript
- **npm run build** : Biên dịch tất cả các file sang JavaScript
- **npm start** : thực hiện chạy file chính sau khi đã biên dịch sang JavaScript

:::
