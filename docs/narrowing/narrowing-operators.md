---
sidebar_position: 3
---

# Toán tử Narrowing

## `in`

- JavaScript có một toán tử để xác định xem tên một thuộc tính có nằm trong object hay không: toán tử `in`. TypeScript tính đến điều này như một cách để thu hẹp kiểu dữ liệu.
- Cú pháp:

```ts
/property/ in /object/;
// property: tên thuộc tính (ở dạng string hoặc number)
// object: tên của object (ở dạng biến, hoặc giá trị)
// => Trả về "true" nếu property là một thuộc tính nằm trong object, ngược lại trả về false.
```

- Ví dụ:

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    //animal now is Fish
    return animal.swim();
  }
  //animal now is Bird
  return animal.fly();
}
```

```ts
const arr = [1, 2, 3, 4, 5];
console.log(0 in arr); //true
/*
Giải thích:
Ta có thể viết lại arr như sau
arr = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
}
Do 0 là thuộc tính tồn tại trong arr nên sẽ trả về true.
Không nên hiểu nhầm thành 0 có phải là giá trị của một phần tử nằm trong arr hay không.
*/
```

## `instanceof`

- Toán tử `instanceof` được sử dụng để kiểm tra một đối tượng nào đó có phải là một đối tượng của một lớp được chỉ định hay không. Toán tử này trả về giá trị `true` hoặc `false`.
- Phía bên trái của biểu thức `instanceof` không thể là kiểu dữ liệu nguyên thuỷ, nó phải là một đối tượng (`Object`).
- Phía bên phải của biểu thức `instanceof` phải là một lớp (`class`).

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    //Now x is Date
    console.log(x.toUTCString());
  } else {
    // Now x is a string
    console.log(x.toUpperCase());
  }
}
```
