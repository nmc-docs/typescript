---
sidebar_position: 6
---

# Abstract class

## Abstract class là gì?

:::info

- Trong lập trình hướng đối tượng, một abstract class (lớp trừu tượng) là một lớp không thể được khởi tạo trực tiếp, mà chỉ có thể được sử dụng làm cơ sở cho các lớp khác. Abstract class thường được sử dụng để định nghĩa các phương thức và thuộc tính chung mà các lớp con phải triển khai.
- Dưới đây là các đặc điểm chính của abstract class:

1. **Không thể khởi tạo** : Ta không thể tạo một instance của một abstract class. Nó chỉ có thể được sử dụng như một lớp cơ sở.
2. **Chứa phương thức trừu tượng** : Abstract class có thể chứa các phương thức trừu tượng (abstract methods). Đây là các phương thức không có phần thân, chỉ có định nghĩa và sẽ được triển khai trong các lớp con.
3. **Có thể chứa phương thức thực** : Ngoài các phương thức trừu tượng, abstract class cũng có thể chứa các phương thức đã được triển khai.
4. **Kế thừa** : Các lớp con kế thừa từ abstract class phải triển khai tất cả các phương thức trừu tượng của abstract class đó, trừ khi lớp con cũng là một abstract class.

:::

## Ví dụ

```ts
abstract class Animal {
  constructor(protected name: string, protected age: number) {}

  abstract makeSound: () => void;

  public eat = () => {
    console.log("The animal is eating.");
  };
}

class Cat extends Animal {
  constructor(name: string, age: number, private breed: string) {
    super(name, age);
  }

  public introduce = () => {
    console.log(
      `This is a ${this.breed} cat. The cat is ${this.name}, and he/she is ${this.age} years old`
    );
  };

  public makeSound = () => {
    console.log("Meow meow...");
  };
}

const myCat = new Cat("Kitty", 2, "short hair");
myCat.introduce();
myCat.makeSound();
```

## Sự khác nhau giữa abstract class và implements interface

|                       | Abstract class                                                                                                             | Interface                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Phương thức**       | Abstract class có thể có các phương thức abstract (chưa được triển khai) và phương thức non-abstract (đã được triển khai). | Interface chỉ có các phương thức abstract (không được triển khai).                                                 |
| **Tính kế thừa**      | Một class chỉ có thể kế thừa từ một abstract class.                                                                        | Một class có thể implements nhiều interface.                                                                       |
| **Tính đa hình**      | Các class con của abstract class có thể override (ghi đè) các phương thức non-abstract.                                    | Các class implements interface phải triển khai (implement) tất cả các phương thức được định nghĩa trong interface. |
| **Khả năng truy cập** | Abstract class có thể sử dụng các access modifier như `public`, `private`, `protected`.                                    | Interface các phương thức và thuộc tính đều mặc định là `public`.                                                  |
| **Mục đích sử dụng**  | Abstract class thường dùng để định nghĩa các hành vi chung của một nhóm các class liên quan.                               | Interface thường dùng để định nghĩa các contract mà các class phải tuân thủ.                                       |
