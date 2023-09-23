---
sidebar_position: 7
---

# Generics

## Generic là gì?

- Đối với Typescript , **Generic** được định nghĩa như là một công cụ cho phép bạn tạo ra các đoạn code để có thể sử dụng lại với nhiều `type` khác nhau một cách linh hoạt thay vì duy nhất một `type`. Đồng thời nó giúp bạn tránh trùng lặp các đoạn code có chức năng tương tự mà vẫn thể hiện rõ mục đích sử dụng.
- Để hiểu rõ hơn, ta lấy ví dụ sau:

```ts
//Hàm lấy phần tử đầu tiên của mảng
function getFirstElement(arr: string[]): string {
  return arr[0];
}

console.log(getFirstElement(["apple", "orange", "banana"])); //result-> apple
```

:::note

Tuy nhiên hàm `getFirstElement` có một nhược điểm đó là hàm đó chỉ sử dụng được với các tham số đầu vào là một mảng `string` vậy nếu tham số `arr` là một mảng các `number` , hay một mảng các `object` chẳng hạn bạn sẽ lại phải định nghĩa thêm 1 hàm tương tự trong khi logic vẫn giống như hàm ban đầu.

:::

```ts
function getFirstElementNumber(arr: number[]): number {
  return arr[0];
}
console.log(getFirstElementNumber([1, 2, 3])); //result-> 1
```

- Để giải quyết vấn đề trên , `Generic` đã được sinh ra và được coi là 1 giải pháp an toàn để tránh tình trạng các đoạn code bị lặp lại.

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

- Hàm trên sẽ trả về phần tử đầu tiên của mảng có kiểu `T` và sử dụng kiểu `T` cho kết quả được trả về . Hay nói cách khác khi bạn truyền một `array` với một kiểu nào đó chẳng hạn như `string` , trình biên dịch sẽ tự động xác định kiểu dữ liệu `T` chính là `string`

## Sử dụng Generics trong TypeScript

- Sử dụng **Generic** trong `function`:

```ts
function testGeneric<T>(arg: T): T {
  return arg;
}

testGeneric<number>(123);
testGeneric<string>("TypeScript");
testGeneric<boolean>(true);
```

- Sử dụng **Generic** trong arrow `function`:

```ts
const testGeneric = <T>(arg: T): T => {
  return arg;
};
```

- Sử dụng **Generic** trong `interface`:

```ts
interface Frontend<T> {
  languages: T[];
  salary: number;
}

const frontend: Frontend<string> = {
  languages: ["JavaScript", "TypeScript"],
  salary: 5000,
};
```

- Ta cũng có thể chỉ định 2 hoặc nhiều tham số khác nhau đại diện cho nhiều kiểu dữ liệu khác nhau trong **generic type**:

```ts
const Tuple = <K, V>(a: K, b: V): [K, V] => {
  return [a, b];
};

Tuple<number, number>(10, 20); // [10, 20]
Tuple<string, number>("10", 20); // ["10", 20]
Tuple<boolean, Date>(true, new Date()); // [true, Date: "2023-02-06T13:49:24.111Z"]
```

## Generic constraints

- **Generic constraints** là cách ràng buộc (hay giới hạn) kiểu được truyền vào **generic type**
- Dưới đây là hai từ khóa phổ biến để giới hạn kiểu được truyền vào **generic type**
  - `extends`
  - `extends keyof`

### `extends`

- Sử dụng từ khoá `extends` để giới hạn kiểu của `T` phải được mở rộng từ một `type` khác

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee {
  name: string;
  age: number;
  salary: number;
}

function genericConstraints<T extends Person>(arg: T): T {
  return arg;
}

genericConstraints<Employee>({
  name: "Chi",
  age: 21,
  salary: 2000,
});
```

:::note

Ở ví dụ trên, hàm `genericConstraints` đã giới hạn kiểu truyền vào `<T extends Person>`. Tức ta phải truyền vào `function` một kiểu `T` được mở rộng từ `Person` (như ở trên ta truyền vào kiểu `Employee` là thỏa mãn do nó chứa tất cả các thuộc tính của `Person`)

:::

### `extends keyof`

- Sử dụng từ khoá `extends keyof` để ràng buộc `T` phải là thuộc tính của một đối tượng khác

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface X {
  a: number;
  b: number;
  c: number;
  d: number;
}
let x: X = { a: 1, b: 2, c: 3, d: 4 };

getProperty<X, "a">(x, "a");
getProperty<X, "m">(x, "m"); // Error: Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
```

:::info

**Giải thích**

- `keyof T` sẽ trả về một type là `literal types` chứa tất cả các thuộc tính của `T`.
- `K extends keyof T`, tức là `K` phải có kiểu được mở rộng từ tất cả các thuộc tính của `T`, hay nói cách khác: `K` phải là thuộc tính của `T`

:::
