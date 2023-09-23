---
sidebar_position: 2
---

# Partial< Type >

- `Partial<Type>` trả về một **object type** mới từ `Type` với tất cả các thuộc tính được chuyển thành `optional`
- `Partial<Type>` hữu ích khi muốn cập nhật một vài thuộc tính của object thay vì tất cả các thuộc tính.

```ts
interface Person {
    name: string
    age: number
    address: string
    id: string
}

const updatePerson = (person: Person, fieldsToUpdate: Partial<Person>) => {
    return {...person, ...fieldsToUpdate};
}

const person: Person = {
    name: 'Chi',
    age: 21,
    address: 'Hanoi',
    id: '123456789'
}

console.log(updatePerson(person, {address: 'QuangNinh', id: '987654321'}));
/*
{
  "name": "Chi",
  "age": 21,
  "address": "QuangNinh",
  "id": "987654321"
}
```
