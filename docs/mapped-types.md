---
sidebar_position: 11
---

# Mapped types

## Mapped types là gì?

- **Mapped Types** là một [generic type](./generics) được xây dựng dựa trên cú pháp của [Index Signatures](./index-signatures). Nó cho phép ta tạo ra type mới từ các type hiện có bằng cách ánh xạ (mapped) qua các thuộc tính của type hiện có đó. Mỗi thuộc tính của type hiện có được chuyển đổi theo quy tắc mà ta chỉ định. Các thuộc tính chỉ định sau đó sẽ tạo ra type mới.
- **Mapped Types** sử dụng từ khóa `in` hoặc `in keyof` dùng để ánh xạ các thuộc tính của type hiện có.

## Một số ví dụ về việc sử dụng Mapped types

- Chuyển đổi kiểu của tất cả các `value` trong `object` về `boolean`:

```ts
type OptionsFlags<T> = {
  [K in keyof T]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
/*
type FeatureOptions = {
    darkMode: boolean;
    newUserProfile: boolean;
}
*/
```

- Thiết lập `readonly` cho tất cả các thuộc tính của `object`:

```ts
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Person = {
  name: string;
  age: number;
  address: string;
};

type ReadOnlyPerson = ReadOnly<Person>;
/*
type ReadOnlyPerson = {
    readonly name: string;
    readonly age: number;
    readonly address: string;
}
*/
```

- Tạo type mới có `properties` do mình chỉ định và kiểu của `value` là type hiện có:

```ts
type ReCord<K extends string, T> = {
  [P in K]: T;
};

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

type ReCordPerson = ReCord<CatName, CatInfo>;
/*
type ReCordPerson = {
    miffy: CatInfo;
    boris: CatInfo;
    mordred: CatInfo;
} 
*/
```

- Loại bỏ `readonly` từ các `properties` bằng cách thêm `–` làm tiền tố:

```ts
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type CreateMutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type UnlockedAccount = CreateMutable<LockedAccount>;
/*
type UnlockedAccount = {
    id: string;
    name: string;
}
*/
```

- Loại bỏ optional (`?`) từ các `properties` bằng cách thêm `-` làm tiền tố:

```ts
type Concrete<T> = {
  [P in keyof T]-?: T[P];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
/*
type User = {
    id: string;
    name: string;
    age: number;
}
*/
```
