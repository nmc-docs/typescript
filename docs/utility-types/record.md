---
sidebar_position: 5
---

# Record<Keys, Type>

- `Record<Keys, Type>` trả về một **object type** với tất cả các `properties` từ `Keys` (thường là [literal types](../types/literal-types)) và kiểu của `value` là `Type`

```ts
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```
