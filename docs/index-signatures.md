---
sidebar_position: 10
---

# Index signature

## Bài toán đặt ra:

- Giả sử ta có 2 object biểu diễn lương của Software Developers như sau:

```ts
const salary1 = {
  baseSalary: 100_000,
  yearlyBonus: 20_000,
};

const salary2 = {
  contractSalary: 110_000,
};
```

- Bây giờ ta muốn triển khai một hàm tính tổng tiền lương dựa trên đối tượng Salary:

```ts
function totalSalary(salaryObject: ???) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}
totalSalary(salary1); // => 120_000
totalSalary(salary2); // => 110_000
```

:::note

Vấn đề đặt ra: làm sao ta có thể biểu diễn kiểu của tham số `salaryObject` mà ta truyền vào mà thỏa mãn cả 2 object `salary1` và `salary2` có chung đặc điểm là `string keys` và `number values`. Vì vậy, ta sẽ sử dụng **Index Signatures** trong TypeScript.

:::

## Định nghĩa

- **Index signatures** trong Typescript là cách để khai báo kiểu cho các thuộc tính không biết trước của một đối tượng. Nó cho phép bạn định nghĩa kiểu cho các thuộc tính có tên không biết trước và không giới hạn số lượng các thuộc tính đó.

## Cú pháp

```ts
[propertyName: propertyType]: valueType
```

:::info

Trong đó:

- `propertyName` là tên thuộc tính không biết trước (thường được đặt là **key** )
- `propertyType` là kiểu của thuộc tính.
- `valueType` là kiểu của giá trị tương ứng với thuộc tính.

:::

- Ví dụ:

```ts
interface Dictionary {
  [key: string]: number;
}

const myDict: Dictionary = {
  foo: 1,
  bar: 2,
  baz: 3,
};
```

Trong ví dụ này, chúng ta định nghĩa một `interface Dictionary` có một **index signature** với kiểu `key` là `string` và kiểu `value` là `number`. Điều này cho phép chúng ta tạo ra một đối tượng có các thuộc tính có tên không biết trước, nhưng giá trị của các thuộc tính đó phải là `number`.

## Một số lưu ý đối với Index Signatures

### Kiểu dữ liệu của `value` (`valueType`) trong Index Signatures

- Kiểu của `value` trong **index signatures** phải bao quát hết kiểu của các thuộc tính còn lại (nếu có) ở trong object
- Ví dụ:

```ts
interface Person {
  [key: string]: string;
  age: number; // Error: Property 'age' of type 'number' is not assignable to 'string' index type 'string'
}
```

**Cách sửa**

```ts
interface Person {
  [key: string]: string | number;
  age: number;
}
```

### Non-existing properties (thuộc tính không tồn tại trong object)

- Khi truy cập vào những thuộc tính không có trong object, thay vì nó có giá trị `undefined` thì TypeScript vẫn gán kiểu cho nó là kiểu của `value` trong **index signatures** như ta đã chỉ định. Việc này gây ra lỗi khi chạy.
- Ví dụ:

```ts
interface StringByString {
  [key: string]: string;
}

const object: StringByString = {};

const value = object["nonExistingProp"]; // value is still a "string"
```

**Khắc phục** : ta thêm `undefined` vào kiểu của `value` trong **index signatures**

```ts
interface StringByString {
  [key: string]: string | undefined;
}

const object: StringByString = {};

const value = object["nonExistingProp"];
```

### String and number key

- Ta có ví dụ sau:

```ts
interface NumbersNames {
  [key: string]: string;
}

const names: NumbersNames = {
  "1": "one",
  "2": "two",
  "3": "three",
  // etc...
};

const value1 = names["1"];
const value2 = names[1];
```

- Ta có thể truy cập thuộc tính của object `names` thông qua cả 2 cách như trên: **string key** và **number key** . Điều này là do JavaScript đã ép **number key** thành **string key** và TypeScript cũng vậy (`names[‘1’] === names[1]`)
- Do đó: `[key: string]` tương đương với `[key: string | number]`
