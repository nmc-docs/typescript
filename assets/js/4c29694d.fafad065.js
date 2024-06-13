"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[4176],{8875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=t(4848),s=t(8453);const i={sidebar_position:4},c="Indexed Access Types",d={id:"type-operator/indexed-access-types",title:"Indexed Access Types",description:"| Syntax            | Return                                                                   |",source:"@site/docs/type-operator/indexed-access-types.md",sourceDirName:"type-operator",slug:"/type-operator/indexed-access-types",permalink:"/typescript/type-operator/indexed-access-types",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"typeof",permalink:"/typescript/type-operator/typeof"},next:{title:"Index signature",permalink:"/typescript/index-signatures"}},o={},a=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"indexed-access-types",children:"Indexed Access Types"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Syntax"}),(0,r.jsx)(n.th,{children:"Return"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ObjectType[key]"})}),(0,r.jsxs)(n.td,{children:["Tr\u1ea3 v\u1ec1 ",(0,r.jsx)(n.code,{children:"type"})," l\xe0 ki\u1ec3u c\u1ee7a ",(0,r.jsx)(n.code,{children:"value"})," t\u01b0\u01a1ng \u1ee9ng v\u1edbi ",(0,r.jsx)(n.code,{children:"key"})," trong ",(0,r.jsx)(n.code,{children:"ObjectType"})]})]})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"Ch\xfa \xfd:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"key"})," ph\u1ea3i l\xe0 m\u1ed9t ",(0,r.jsx)(n.a,{href:"../types/literal-types",children:"literal types"})," v\xe0 ph\u1ea3i tr\xf9ng t\xean v\u1edbi c\xe1c thu\u1ed9c t\xednh trong ",(0,r.jsx)(n.code,{children:"ObjectType"}),", n\u1ebfu kh\xf4ng s\u1ebd b\xe1o l\u1ed7i."]}),"\n",(0,r.jsxs)(n.li,{children:["N\u1ebfu ",(0,r.jsx)(n.code,{children:"ObjectType"})," c\xf3 d\u1ea1ng ",(0,r.jsx)(n.a,{href:"../index-signatures",children:"index signature"})," th\xec ",(0,r.jsx)(n.code,{children:"key"})," l\xe0 t\xean ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a ",(0,r.jsx)(n.code,{children:"property"})," trong ",(0,r.jsx)(n.code,{children:"ObjectType"}),". V\xed d\u1ee5: v\u1edbi m\u1ea3ng th\xec ",(0,r.jsx)(n.code,{children:"key"})," c\xf3 th\u1ec3 l\xe0 ",(0,r.jsx)(n.code,{children:"number"}),", ",(0,r.jsx)(n.code,{children:"string"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["V\xed d\u1ee5 khi s\u1eed d\u1ee5ng ",(0,r.jsx)(n.code,{children:"key"})," l\xe0 ",(0,r.jsx)(n.strong,{children:"string / literal types"})," :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'type Person = {\n  name: string;\n  age: number;\n  alive: boolean;\n};\n\ntype Age = Person["age"]; // type Age = number\n\n//Using union types\ntype I1 = Person["age" | "name"]; // type I1 = string | number\n\n//Using keyof\ntype I2 = Person[keyof Person]; // type I2 = string | number | boolean\n\n//Using type aliases\ntype AliveOrName = "alive" | "name";\ntype I3 = Person[AliveOrName]; // type I3 = string | boolean\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const array = [\n  { name: "Alice", age: 15 },\n  { name: "Bob", age: 23 },\n  { name: "Eve", age: 38 },\n];\n\ntype Person = (typeof array)[number]; // type Person = {name: string; age: number}\n\ntype Age = (typeof array)[number]["age"]; // type Age = number\ntype Age2 = Person["age"]; // type Age2 = number. Age v\xe0 Age2 t\u01b0\u01a1ng \u0111\u01b0\u01a1ng nhau\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["V\xed d\u1ee5 khi ",(0,r.jsx)(n.code,{children:"ObjectType"})," l\xe0 ",(0,r.jsx)(n.a,{href:"../index-signatures",children:"index signature"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Foo = {\n  [key: number]: string;\n};\n\ntype Bar = Foo[number]; // type Bar = string\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(6540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);