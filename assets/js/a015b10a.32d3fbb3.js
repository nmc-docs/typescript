"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[4012],{9046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var s=t(4848),r=t(8453);const c={sidebar_position:11},i="Mapped types",d={id:"mapped-types",title:"Mapped types",description:"Mapped types l\xe0 g\xec?",source:"@site/docs/mapped-types.md",sourceDirName:".",slug:"/mapped-types",permalink:"/typescript/mapped-types",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Index signature",permalink:"/typescript/index-signatures"},next:{title:"Utility types",permalink:"/typescript/category/utility-types"}},a={},o=[{value:"Mapped types l\xe0 g\xec?",id:"mapped-types-l\xe0-g\xec",level:2},{value:"M\u1ed9t s\u1ed1 v\xed d\u1ee5 v\u1ec1 vi\u1ec7c s\u1eed d\u1ee5ng Mapped types",id:"m\u1ed9t-s\u1ed1-v\xed-d\u1ee5-v\u1ec1-vi\u1ec7c-s\u1eed-d\u1ee5ng-mapped-types",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"mapped-types",children:"Mapped types"})}),"\n",(0,s.jsx)(n.h2,{id:"mapped-types-l\xe0-g\xec",children:"Mapped types l\xe0 g\xec?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mapped Types"})," l\xe0 m\u1ed9t ",(0,s.jsx)(n.a,{href:"./generics",children:"generic type"})," \u0111\u01b0\u1ee3c x\xe2y d\u1ef1ng d\u1ef1a tr\xean c\xfa ph\xe1p c\u1ee7a ",(0,s.jsx)(n.a,{href:"./index-signatures",children:"Index Signatures"}),". N\xf3 cho ph\xe9p ta t\u1ea1o ra type m\u1edbi t\u1eeb c\xe1c type hi\u1ec7n c\xf3 b\u1eb1ng c\xe1ch \xe1nh x\u1ea1 (mapped) qua c\xe1c thu\u1ed9c t\xednh c\u1ee7a type hi\u1ec7n c\xf3 \u0111\xf3. M\u1ed7i thu\u1ed9c t\xednh c\u1ee7a type hi\u1ec7n c\xf3 \u0111\u01b0\u1ee3c chuy\u1ec3n \u0111\u1ed5i theo quy t\u1eafc m\xe0 ta ch\u1ec9 \u0111\u1ecbnh. C\xe1c thu\u1ed9c t\xednh ch\u1ec9 \u0111\u1ecbnh sau \u0111\xf3 s\u1ebd t\u1ea1o ra type m\u1edbi."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mapped Types"})," s\u1eed d\u1ee5ng t\u1eeb kh\xf3a ",(0,s.jsx)(n.code,{children:"in"})," ho\u1eb7c ",(0,s.jsx)(n.code,{children:"in keyof"})," d\xf9ng \u0111\u1ec3 \xe1nh x\u1ea1 c\xe1c thu\u1ed9c t\xednh c\u1ee7a type hi\u1ec7n c\xf3."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"m\u1ed9t-s\u1ed1-v\xed-d\u1ee5-v\u1ec1-vi\u1ec7c-s\u1eed-d\u1ee5ng-mapped-types",children:"M\u1ed9t s\u1ed1 v\xed d\u1ee5 v\u1ec1 vi\u1ec7c s\u1eed d\u1ee5ng Mapped types"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Chuy\u1ec3n \u0111\u1ed5i ki\u1ec3u c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c ",(0,s.jsx)(n.code,{children:"value"})," trong ",(0,s.jsx)(n.code,{children:"object"})," v\u1ec1 ",(0,s.jsx)(n.code,{children:"boolean"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type OptionsFlags<T> = {\n  [K in keyof T]: boolean;\n};\n\ntype FeatureFlags = {\n  darkMode: () => void;\n  newUserProfile: () => void;\n};\n\ntype FeatureOptions = OptionsFlags<FeatureFlags>;\n/*\ntype FeatureOptions = {\n    darkMode: boolean;\n    newUserProfile: boolean;\n}\n*/\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Thi\u1ebft l\u1eadp ",(0,s.jsx)(n.code,{children:"readonly"})," cho t\u1ea5t c\u1ea3 c\xe1c thu\u1ed9c t\xednh c\u1ee7a ",(0,s.jsx)(n.code,{children:"object"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type ReadOnly<T> = {\n  readonly [K in keyof T]: T[K];\n};\n\ntype Person = {\n  name: string;\n  age: number;\n  address: string;\n};\n\ntype ReadOnlyPerson = ReadOnly<Person>;\n/*\ntype ReadOnlyPerson = {\n    readonly name: string;\n    readonly age: number;\n    readonly address: string;\n}\n*/\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["T\u1ea1o type m\u1edbi c\xf3 ",(0,s.jsx)(n.code,{children:"properties"})," do m\xecnh ch\u1ec9 \u0111\u1ecbnh v\xe0 ki\u1ec3u c\u1ee7a ",(0,s.jsx)(n.code,{children:"value"})," l\xe0 type hi\u1ec7n c\xf3:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'type ReCord<K extends string, T> = {\n  [P in K]: T;\n};\n\ninterface CatInfo {\n  age: number;\n  breed: string;\n}\n\ntype CatName = "miffy" | "boris" | "mordred";\n\ntype ReCordPerson = ReCord<CatName, CatInfo>;\n/*\ntype ReCordPerson = {\n    miffy: CatInfo;\n    boris: CatInfo;\n    mordred: CatInfo;\n} \n*/\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Lo\u1ea1i b\u1ecf ",(0,s.jsx)(n.code,{children:"readonly"})," t\u1eeb c\xe1c ",(0,s.jsx)(n.code,{children:"properties"})," b\u1eb1ng c\xe1ch th\xeam ",(0,s.jsx)(n.code,{children:"\u2013"})," l\xe0m ti\u1ec1n t\u1ed1:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type LockedAccount = {\n  readonly id: string;\n  readonly name: string;\n};\n\ntype CreateMutable<T> = {\n  -readonly [P in keyof T]: T[P];\n};\n\ntype UnlockedAccount = CreateMutable<LockedAccount>;\n/*\ntype UnlockedAccount = {\n    id: string;\n    name: string;\n}\n*/\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Lo\u1ea1i b\u1ecf optional (",(0,s.jsx)(n.code,{children:"?"}),") t\u1eeb c\xe1c ",(0,s.jsx)(n.code,{children:"properties"})," b\u1eb1ng c\xe1ch th\xeam ",(0,s.jsx)(n.code,{children:"-"})," l\xe0m ti\u1ec1n t\u1ed1:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Concrete<T> = {\n  [P in keyof T]-?: T[P];\n};\n\ntype MaybeUser = {\n  id: string;\n  name?: string;\n  age?: number;\n};\n\ntype User = Concrete<MaybeUser>;\n/*\ntype User = {\n    id: string;\n    name: string;\n    age: number;\n}\n*/\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(6540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);