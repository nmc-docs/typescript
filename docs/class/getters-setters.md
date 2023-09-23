---
sidebar_position: 4
---

# Getters/setters

- Khi khai báo một property cho class, việc sử dụng Access Modifiers `private` là rất quan trọng. Nó sẽ giúp ta tránh truy cập hay thay đổi giá trị của các thuộc tính từ bên ngoài. Do vậy, TypeScript sẽ cung cấp cho ta 2 từ khóa là `get` và `set` để lần lượt lấy và thiết lập giá trị của thuộc tính.

```ts
class Person {
  private _age: number;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      console.log("Invalid age!");
      return;
    }
    this._age = value;
  }
}

const person = new Person();
person.age = 30;
console.log(person.age); // Output: 30

person.age = -10; // Output: Invalid age!
console.log(person.age); // Output: 30
```

:::note

Trong ví dụ này, ta định nghĩa **getter** và **setter** cho thuộc tính `_age`.

- Khi truy cập vào giá trị age của đối tượng person, ta sẽ lấy được giá trị của `_age` thông qua **getter** .
- Khi thiết lập giá trị age, ta sẽ sử dụng **setter** để kiểm tra giá trị nhập vào. Nếu giá trị đó là một số âm, ta sẽ in ra thông báo lỗi và không thay đổi giá trị của `_age`.

:::
