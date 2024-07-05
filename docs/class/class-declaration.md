---
sidebar_position: 2
---

# Khai báo một class

## Thành phần của một class

- Một **Class** gồm có 3 thành phần chính:

  - Thuộc tính (property)
  - Hàm khởi tạo (constructor)
  - Phương thức (method)

- Để truy cập một thuộc tính hay một phương thức bên trong class, ta sử dụng từ khóa `this`

```ts
class Person {
  //Khai báo các thuộc tính của class
  name: string;
  age: number;
  address: string;
  company: string;

  //Khai báo constructor là hàm khởi tạo của class
  constructor(name: string, age: number, address: string, company: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.company = company;
  }

  //Khai báo các phương thức của class, truy cập thuộc tính của class bằng từ khóa this
  greet = (): void => {
    console.log(`Hello, my name is ${this.name} and I work at ${this.company}`);
  };
}

const person = new Person("John", 30, "USA", "Google");
person.greet(); // Hello, my name is John and I work at Google
```

- Các tham số truyền vào hàm khởi tạo ( **constructor** ) có thể có giá trị mặc định trong trường hợp ta khởi tạo thiếu tham số cho nó.

```ts
class Person {
  name: string;
  age: number;
  address: string;
  company: string;

  constructor(
    name: string,
    age: number,
    address: string,
    company: string = "Microsoft"
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.company = company;
  }

  greet = (): void => {
    console.log(`Hello, my name is ${this.name} and I work at ${this.company}`);
  };
}

const person = new Person("John", 30, "USA");
person.greet(); // Hello, my name is John and I work at Microsoft
```

- Ta có thể sử dụng toán tử optional (`?`) để chỉ định một thuộc tính là tùy chọn trong class:

```ts
class Person {
  name: string;
  age: number;
  address?: string;
  company?: string;

  constructor(name: string, age: number, address?: string, company?: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.company = company;
  }

  greet = (): void => {
    console.log(`Hello, my name is ${this.name} and I live in ${this.address}`);
  };
}

const person = new Person("John", 30, "New York");
person.greet();
```

- Để chỉ định rằng một thuộc tính trong class chỉ có thể được gán một lần và sau đó không thể thay đổi, ta sử dụng từ khóa `readonly`:

```ts
class Person {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }

  setNewName = (newName: string): void => {
    this.name = newName; // Error: Cannot assign to 'name' because it is a read-only property.
  };
}
```

- Khi tạo một class và khai báo các thuộc tính bên trong class đó thì sẽ luôn phải kèm theo hàm khởi tạo `constructor()`, nếu không sẽ báo lỗi. Nếu ta không muốn dùng hàm khởi tạo, ta có 3 cách:

  - Thêm cấu hình sau vào file **tsconfig.json**:

    ```json
    "strictPropertyInitialization": false,
    ```

  - Thêm từ khóa `declare` ở trước tên thuộc tính. Khi ta sử dụng từ khóa `declare` để khai báo một thuộc tính, TypeScript sẽ giả định rằng thuộc tính đó đã được khai báo trong một module khác, và không cần khởi tạo bằng constructor trong class hiện tại.

    ```ts
    class Person {
      //Khai báo các thuộc tính của class
      declare name: string;
      declare age: number;
      declare address: string;
      declare company: string;
    }
    ```

  - Sử dụng toán tử "!" (non-null assertion operator). Điều này đang báo cho TypeScript biết rằng mỗi thuộc tính đó sẽ luôn được khởi tạo và không bao giờ có thể là null hoặc undefined. Điều này thường được sử dụng khi bạn biết rằng các thuộc tính sẽ được khởi tạo ngay sau khi đối tượng được tạo, hoặc khi bạn chắc chắn rằng các giá trị đó sẽ không bao giờ là null trong quá trình chạy của chương trình.

    ```ts
    class Person {
      //Khai báo các thuộc tính của class
      name!: string;
      age!: number;
      address!: string;
      company!: string;
    }
    ```

## Class constructor shorthand

- Ta có thể gộp việc khai báo thuộc tính và hàm khởi tạo của class bằng cách thêm [Access Modifiers](./access-modifiers) trước tên của parameter trong `constructor()`:

```ts
class Person {
  constructor(
    public name: string,
    public age: number,
    public address?: string,
    public company: string = "Google"
  ) {}

  greet = (): void => {
    console.log(`Hello, my name is ${this.name} and I work at ${this.company}`);
  };
}

const person = new Person("John", 30);
person.greet(); // Hello, my name is John and I work at Google
```

```ts
class Person {
  public fullName: string;

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public email: string,
    public address: string
  ) {
    this.fullName = `${firstName} ${lastName}`;
  }
}

const p = new Person("Nguyen", "Chi", 20, "minhchico@gmail.com", "QuangNinh");

console.log(p.fullName); // "Nguyen Chi"
```

## Thuộc tính là hằng số

- Ví dụ dưới đây mô tả việc sử dụng 1 thuộc tính là hằng số trong class:

```ts
class Person {
  private readonly country: string = "Vietnam"; // This is a constant property
  private fullName: string;

  constructor(
    private firstName: string,
    private lastName: string,
    private age: number,
    private email: string,
    private address: string
  ) {
    this.fullName = `${firstName} ${lastName}`;
  }

  greeting = () => {
    console.log(
      `Hello, I am ${this.fullName} and I am from ${this.address}, ${this.country}`
    );
  };
}

const p = new Person("Nguyen", "Chi", 20, "minhchico@gmail.com", "Quang Ninh");
p.greeting(); // "Hello, I am Nguyen Chi and I am from Quang Ninh, Vietnam"
```
