---
sidebar_position: 6
---

# Function

## Function trong TypeScript

- Giờ đây ta có thể chỉ định kiểu dữ liệu của các `parameter`, kiểu trả về của `function`.

```ts
function sum(a: number, b: number): number {
  return a + b;
}

const sum = (a: number, b: number): number => {
  return a + b;
};
```

:::info

TypeScript có thể tự **suy ra** kiểu trả của một `function` mà ta không cần chỉ định kiểu trước đó. Nhưng nó chỉ tự **suy ra** đối với các kiểu dữ liệu nguyên thủy như `number`, `string`, `boolean`, `array` (`number[]`, `string[]`,…). Còn đối với kiểu trả về là một `object` phức tạp, ta buộc phải tự chỉ định.

:::

- Một cách khác đó là khai báo kiểu hàm riêng:

```ts
interface IFormValues {
  name: string;
  age: number;
  address: string;
}

type TSubmitHandler = (value: IFormValues) => void;

const handleSubmitForm: TSubmitHandler = (value) => {
  console.log(value);
};

handleSubmitForm({ name: "Chi", age: 21, address: "QuangNinh" });
```

## Optional parameters

- Khi truyền đối số vào function, có những đối số mà ta có thể tùy chọn truyền hoặc không truyền, những `parameter` ứng với đối số đó được gọi là **optional parameters** .
- Các **optional parameters** ứng với đối số mà **KHÔNG** được truyền sẽ nhận giá trị mặc định là `undefined`

:::caution

Lưu ý rằng tất cả **optional parameters** phải được đặt làm `parameter` ở cuối của một function

:::

```ts
const greeting = (lastName: string, firstName?: string): void => {
  console.log(lastName);
  console.log(firstName);
};
greeting("John");
/* 
"John" 
undefined
*/
```

## Default parameters

- Ta sử dụng **default parameter** như là một giá trị mặc định nếu `parameter` ứng với đối số được truyền vào `function` mà có giá trị `undefined` hoặc khi đối số đó không được truyền.
- Các **default parameter** này phải được đặt làm `parameter` ở cuối function

:::caution

Lưu ý: không thể kết hợp cùng lúc **optional parameter** và **default parameter** .

:::

```ts
const sumOfThreeNumbers = (
  x: number,
  y: number = 100,
  z: number = 200
): number => {
  return x + y + z;
};

console.log(sumOfThreeNumbers(1000, 1000, 1000)); // 3000
console.log(sumOfThreeNumbers(1000, 1000)); // 2200
console.log(sumOfThreeNumbers(1000)); // 1300
```

## Toán tử `rest` kết hợp với `parameter` trong `function` (`rest parameter`)

```ts
const multiply = (n: number, ...m: number[]): number[] => {
  return m.map((x) => n * x);
};

console.log(multiply(10, 1, 2, 3, 4)); // [10, 20, 30, 40]
```

## Parameter Destructuring

- Đối với `array`:

```ts
const transformArray = ([firstElement, ...otherElements]: number[]) => {
  return otherElements.map((e) => e * firstElement);
};

console.log(transformArray([10, 2, 3, 4, 5, 6])); // [20, 30, 40, 50, 60]
```

- Đối với `object`:

```ts
interface ABC {
  a: number;
  b: number;
  c: number;
}

const sum = ({ a, b, c }: ABC) => {
  return a + b + c;
};

console.log(sum({ a: 10, b: 10, c: 10 })); // 30
```

```ts
interface Person {
  name: string;
  age: number;
  address: string;
  company: string;
  salary: number;
}

//Sử dụng parameter destructuring với tên biến thay thế (không áp được với toán tử rest)
const introduce = ({ name: myName, age: myAge, ...rest }: Person): void => {
  console.log(`Hello I am ${myName} and I am ${myAge} years old`);
};

const me: Person = {
  name: "John",
  age: 25,
  address: "New York",
  company: "Linkedin",
  salary: 2100,
};

introduce(me); //"Hello I am John and I am 25 years old"
```
