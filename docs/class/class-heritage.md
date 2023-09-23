---
sidebar_position: 5
---

# Class heritage

- **Class Heritage** trong TypeScript là cách để một lớp kế thừa các thuộc tính và phương thức từ một lớp khác. Điều này cho phép ta sử dụng lại mã của lớp cha và mở rộng chức năng của nó trong lớp con.
- Có hai từ khóa để thể hiện một lớp kế thừa: `implements` và `extends`

## `implements`

- Trong TypeScript, `implements` được sử dụng để khai báo một **class** sẽ triển khai tất cả các phương thức và thuộc tính được khai báo trong một `interface`. Tức là khi một **class** triển khai một `interface`, nó phải cung cấp các phương thức và thuộc tính tương ứng được khai báo trong `interface` đó.
- Khi sử dụng `implements`, **class** sẽ phải định nghĩa lại tất cả các phương thức và thuộc tính của `interface` đó, kể cả những phương thức không sử dụng trong **class**
- Nếu một thuộc tính trong `interface` được đánh dấu là **optional** (có thể có hoặc không có), thì việc implement trong **class** sẽ không bắt buộc.
- Một **class** có thể implement nhiều `interface`, cách nhau bằng dấu `,`

```ts
interface Animal {
  name: string;
  age: number;
  species: string;
  isPet: boolean;
  makeSound: () => void;
}

class Dog implements Animal {
  name: string;
  age: number;
  species: string;
  isPet: boolean;

  constructor(name: string, age: number, species: string, isPet: boolean) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.isPet = isPet;
  }
  makeSound(): void {
    console.log("Woof");
  }
}

const dog = new Dog("Rex", 2, "Dog", true);
dog.makeSound();
```

## `extends`

- Từ khóa `extends` được sử dụng để kế thừa các tính năng của một lớp (class) cha. Khi một lớp con (subclass) kế thừa từ lớp cha (superclass), nó có thể sử dụng các thuộc tính, phương thức và các constructor của lớp cha và có thể định nghĩa các thuộc tính, phương thức và constructor mới.

```ts
class SubClass extends SuperClass {
  // define properties and methods for subclass
}
```

- Ví dụ:

```ts
class Animal {
  move(): void {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
d.move();
d.woof(3);
```

- Để kế thừa lại `constructor` hay các phương thức từ lớp cha (superclass) ở lớp con (subclass), ta sử dụng từ khóa `super`:

```ts
class Animal {
  private name: string;
  private age: number;
  private isPet: boolean;

  constructor(name: string, age: number, isPet: boolean) {
    this.name = name;
    this.age = age;
    this.isPet = isPet;
  }

  makeSound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, isPet: boolean, breed: string) {
    super(name, age, isPet);
    this.breed = breed;
  }

  makeSound(): void {
    super.makeSound();
    console.log("The dog barks");
  }
}

const dog = new Dog("Fido", 3, true, "Labrador");
dog.makeSound();
/*
The animal makes a sound
The dog barks
*/
```
