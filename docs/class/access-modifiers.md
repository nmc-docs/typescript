---
sidebar_position: 3
---

# Access modifiers

- **Access Modifiers** trong class TypeScript là các từ khóa dùng để quy định phạm vi truy cập của các thành phần trong class, bao gồm properties và methods
- Có 3 Access Modifiers, đó là:

  - `public`: Các thành phần được khai báo là `public` có thể được truy cập từ bất kỳ đâu, bao gồm từ bên trong và bên ngoài class (ta có thể không cần chỉ định từ khóa này vì nó là mặc định).
  - `private`: Các thành phần được khai báo là `private` chỉ có thể được truy cập từ bên trong class và không thể truy cập từ bên ngoài.
  - `protected`: Các thành phần được khai báo là `protected` có thể được truy cập từ bên trong class và các class kế thừa từ class đó.

```ts
class Animal {
  private name: string;
  protected age: number;
  public color: string;

  constructor(name: string, age: number, color: string) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  public getAge(): number {
    return this.age;
  }

  private getName(): string {
    return this.name;
  }

  protected getColor(): string {
    return this.color;
  }
}

class Dog extends Animal {
  public bark(): void {
    console.log(`Woof! My color is ${this.getColor()}`);
  }
}

const dog = new Dog("Max", 5, "brown");
console.log(dog.color); // "brown"
console.log(dog.getAge()); // 5
dog.bark(); // "Woof! My color is brown"
```

:::note

Trong ví dụ trên, ta có class `Animal` với ba Access Modifiers khác nhau. Trong khi `name` được khai báo là `private` và chỉ có thể được truy cập từ bên trong class `Animal`, `age` và `color` được khai báo là `protected` và `public` lần lượt để cho phép các class kế thừa và truy cập từ bên ngoài class.

:::
