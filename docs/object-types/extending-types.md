---
sidebar_position: 3
---

# Extending types

- Ta có thể mở rộng các phương thức, thuộc tính từ một trường khác thông qua từ khóa `extends`

```ts
interface Person {
  name: string;
  dateOfBirth: Date;
  address: string;
}

//Trường Employee sẽ có tất cả các thuộc tính của trường Person và thêm các thuộc tính id, workingHours
interface Employee extends Person {
  id: string;
  workingHours: number;
}

const employee: Employee = {
  name: "Nguyen Van A",
  dateOfBirth: new Date(),
  address: "Hanoi",
  id: "123456789",
  workingHours: 8,
};
```

- Để một `interface extends` từ nhiều `interface`, `type` khác, ta ngăn cách nhau bởi dấu phẩy:

```ts
type Dog = {
  name: string;
  age: number;
};

interface Shepherd {
  guardian: boolean;
}

interface Animal extends Dog, Shepherd {}

const animal1: Animal = {
  name: "Tom",
  age: 3,
  guardian: true,
};
```
