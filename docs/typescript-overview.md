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

- Tạo một thư mục dự án.
- Khởi tạo npm:

```bash
npm init -y
```

- Cài đặt Bun để chạy Typescript trực tiếp:

```bash
npm install -g bun
```

- Cài các dependencies cần thiết:

```bash
npm install @types/node tslib
```

- Cài các devDependencies cần thiết:

```bash
npm install -D typescript tsc-alias
```

:::info

- **typescript** : thư viện ngôn ngữ TypeScript
- **tsc-alias** : giúp TypeScript có thể hiểu được alias import (absolute path) khi biên dịch sang JavaScript

:::

- Khởi tạo file `tsconfig.json` để cấu hình cho TypeScript:

```bash
npx tsc --init
```

- Trong file `tsconfig.json`, ta sẽ thực hiện một số cấu hình cho Typescript:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "strict": true,
    "module": "commonjs",
    "moduleResolution": "Node",
    "declaration": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowJs": true,
    "target": "ES2021",
    "sourceMap": true,
    "outDir": "./dist",
    "incremental": true,
    "noFallthroughCasesInSwitch": true,
    "resolveJsonModule": true,
    "importHelpers": true,
    "skipLibCheck": true,
    "removeComments": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noUncheckedIndexedAccess": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "src/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

| Config                                   | Description                                                                                                                                                                                                                                                       |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `strict: true`                           | Bật tất cả các chế độ kiểm tra chặt chẽ của TypeScript (bao gồm kiểm tra kiểu chặt chẽ, kiểm tra null và undefined, v.v.).                                                                                                                                        |
| `module: "commonjs"`                     | Chỉ định hệ thống module được sử dụng. Ở đây,`commonjs` là hệ thống module tiêu chuẩn của Node.js.                                                                                                                                                                |
| `moduleResolution: "Node"`               | Chỉ định cách trình biên dịch tìm kiếm các tệp module. Với giá trị `"Node"`, TypeScript sẽ sử dụng cơ chế tìm kiếm module giống như Node.js (tìm kiếm qua các thư mục `node_modules` và các đường dẫn liên quan).                                                 |
| `declaration: true`                      | Tạo các tệp `.d.ts` để xuất ra các khai báo kiểu TypeScript cho mã của bạn, hữu ích khi người khác sử dụng mã của bạn như là một thư viện.                                                                                                                        |
| `emitDecoratorMetadata: true`            | Cho phép TypeScript phát ra metadata cho các decorators (thường sử dụng trong các framework như Angular hay NestJS).                                                                                                                                              |
| `experimentalDecorators: true`           | Cho phép sử dụng decorators, một tính năng chưa được chính thức chuẩn hóa trong JavaScript nhưng có trong TypeScript.                                                                                                                                             |
| `target: "ES2021"`                       | Chỉ định phiên bản ECMAScript mà mã TypeScript sẽ được biên dịch xuống. Ở đây, mã sẽ biên dịch xuống phiên bản ES2021 (tương đương ECMAScript 12).                                                                                                                |
| `sourceMap: true`                        | Tạo tệp source maps để giúp dễ dàng gỡ lỗi bằng cách ánh xạ mã biên dịch với mã TypeScript gốc.                                                                                                                                                                   |
| `outDir: "./dist"`                       | Chỉ định thư mục đầu ra cho các tệp đã biên dịch, trong trường hợp này là thư mục `./dist`.                                                                                                                                                                       |
| `incremental: true`                      | Bật tính năng biên dịch gia tăng, giúp tăng tốc quá trình biên dịch bằng cách chỉ biên dịch lại các tệp thay đổi.                                                                                                                                                 |
| `noFallthroughCasesInSwitch: true`       | Loại bỏ lỗi khi một case trong cấu trúc `switch` không có từ khóa `break`, giúp tránh các lỗi ngẫu nhiên khi chuyển case.                                                                                                                                         |
| `resolveJsonModule: true`                | Cho phép nhập các tệp `.json` dưới dạng module, hữu ích khi cần sử dụng dữ liệu JSON trong dự án.                                                                                                                                                                 |
| `importHelpers: true`                    | Sử dụng các helpers từ thư viện `tslib` để giảm bớt sự trùng lặp trong mã biên dịch, giúp mã nhỏ gọn hơn.                                                                                                                                                         |
| `skipLibCheck: true`                     | Bỏ qua việc kiểm tra kiểu trong các tệp khai báo (tệp `.d.ts`), giúp tăng tốc độ biên dịch.                                                                                                                                                                       |
| `removeComments: true`                   | Xóa các bình luận khỏi mã JavaScript đã biên dịch để làm cho tệp đầu ra nhỏ hơn.                                                                                                                                                                                  |
| `allowSyntheticDefaultImports: true`     | Cho phép sử dụng cú pháp import mặc định ngay cả khi module không xuất một giá trị mặc định.                                                                                                                                                                      |
| `esModuleInterop: true`                  | Cho phép tương thích tốt hơn giữa các module ES và CommonJS. Điều này thêm mã bổ sung để giúp các import mặc định từ các module CommonJS hoạt động trơn tru hơn.                                                                                                  |
| `noUncheckedIndexedAccess: true`         | Đảm bảo việc truy cập vào các thuộc tính qua chỉ mục (`[]`) sẽ luôn trả về kiểu `undefined` nếu thuộc tính đó không tồn tại, cải thiện kiểm tra kiểu an toàn hơn.                                                                                                 |
| `forceConsistentCasingInFileNames: true` | Đảm bảo rằng các tệp và thư mục trong dự án luôn được truy cập với tên chính xác về kiểu chữ (lowercase/uppercase), giúp tránh lỗi trên các hệ thống tập tin không phân biệt chữ hoa và chữ thường.                                                               |
| `allowJs: true`                          | Cho phép TypeScript biên dịch các tệp JavaScript (`.js`) cùng với các tệp TypeScript (`.ts`).                                                                                                                                                                     |
| `baseUrl: "."`                           | `baseUrl` đặt đường dẫn cơ sở cho các module không có đường dẫn tương đối (`./` hoặc `../`). Trong trường hợp này, giá trị `"."` đặt thư mục gốc của dự án làm đường dẫn cơ sở.                                                                                   |
| `paths`                                  | Tùy chọn `paths` cho phép ta tạo các alias (bí danh) cho các đường dẫn nhập module. Trong cấu hình này, ta đã tạo một alias cho thư mục `src`. Bất kỳ khi nào ta nhập một module từ `src/*`, TypeScript sẽ ánh xạ đường dẫn đó tới thư mục `./src/*` trong dự án. |

- Ngoài ra, còn có một số cấu hình khác tùy bạn có thể thêm hoặc không:

| Config                     | Description                                                                                                                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isolatedModules: true`    | Tùy chọn này yêu cầu mỗi tệp TypeScript phải là một module độc lập. Điều này hữu ích khi bạn sử dụng các công cụ biên dịch hoặc bộ tải module khác ngoài TypeScript (như Babel) để đảm bảo rằng TypeScript sẽ không tạo ra lỗi khi tệp không chứa module exports/imports. |
| `moduleDetection: "force"` | Thuộc tính này điều chỉnh cách TypeScript phát hiện module trong tệp. Với giá trị `"force"`, TypeScript sẽ cư xử như thể mọi tệp đều là một module, ngay cả khi chúng không có `import` hoặc `export`.                                                                    |
| `noEmit: true`             | Tùy chọn này chỉ định rằng TypeScript sẽ không xuất ra bất kỳ tệp `.js` nào khi biên dịch. Nó chỉ thực hiện việc kiểm tra kiểu mà không thực sự biên dịch mã sang JavaScript.                                                                                             |

- Tạo một thư mục **src** và một file **main.ts** bên trong thư mục đó:

```ts title="src/main.ts"
console.log("Hello TypeScript");
```

- Vào file `package.json` tạo script để chạy TypeScript:

```json title="package.json"
{
  "name": "typescript-learning",
  "version": "1.0.0",
  "description": "TypeScript Learning",
  "main": "index.js",
  "scripts": {
    "dev": "bun --env-file=.env --watch src/main.ts",
    "build": "tsc && tsc-alias",
    "start": "node dist/main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "minhchi1509",
  "license": "ISC",
  "dependencies": {
    "@types/node": "^22.5.4",
    "tslib": "^2.7.0"
  },
  "devDependencies": {
    "tsc-alias": "^1.8.10",
    "typescript": "^5.6.2"
  }
}
```

## Chạy chương trình

:::info

- **bun dev** : Sử dụng lệnh này để chạy file TypeScript
- **bun run build** : Biên dịch tất cả các file sang JavaScript
- **bun run start** : thực hiện chạy file chính sau khi đã biên dịch sang JavaScript

:::
