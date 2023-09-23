---
sidebar_position: 2
---

# Các cách để thu hẹp kiểu dữ liệu

## Sử dụng câu lệnh rẽ nhánh `if else`:

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

## Sử dụng toán tử `===`, `!==`:

```ts
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    //Now typeof x and y is "string"
    x.toUpperCase();
    y.toLowerCase();
  } else {
    //typeof x and y is same as original
  }
}
// Khi ta kiểm tra xem cả x và y đều bằng nhau hay không, TypeScript biết rằng kiểu dữ liệu của chúng cũng phải bằng nhau. Vì string là kiểu dữ liệu duy nhất mà cả x và y có thể đảm nhận, nên x và y phải có kiểu dữ liệu là string
```

```ts
type TriState = "yes" | "no" | "unknown";

function logOutState(state: TriState) {
  if (state === "yes") {
    console.log("User selected yes");
  } else if (state === "no") {
    console.log("User selected no");
  } else {
    console.log("User has not made a selection yet");
  }
}
```
