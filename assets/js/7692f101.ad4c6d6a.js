"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[2207],{9278:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(4848),r=t(8453);const o={sidebar_position:3},c="To\xe1n t\u1eed Narrowing",s={id:"narrowing/narrowing-operators",title:"To\xe1n t\u1eed Narrowing",description:"in",source:"@site/docs/narrowing/narrowing-operators.md",sourceDirName:"narrowing",slug:"/narrowing/narrowing-operators",permalink:"/typescript/narrowing/narrowing-operators",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"C\xe1c c\xe1ch \u0111\u1ec3 thu h\u1eb9p ki\u1ec3u d\u1eef li\u1ec7u",permalink:"/typescript/narrowing/narrowing-ways"},next:{title:"Savoring the Taste of Coffee Amidst Urban Life",permalink:"/typescript/coffee-in-street"}},a={},l=[{value:"<code>in</code>",id:"in",level:2},{value:"<code>instanceof</code>",id:"instanceof",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"to\xe1n-t\u1eed-narrowing",children:"To\xe1n t\u1eed Narrowing"}),"\n",(0,i.jsx)(e.h2,{id:"in",children:(0,i.jsx)(e.code,{children:"in"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["JavaScript c\xf3 m\u1ed9t to\xe1n t\u1eed \u0111\u1ec3 x\xe1c \u0111\u1ecbnh xem t\xean m\u1ed9t thu\u1ed9c t\xednh c\xf3 n\u1eb1m trong object hay kh\xf4ng: to\xe1n t\u1eed ",(0,i.jsx)(e.code,{children:"in"}),". TypeScript t\xednh \u0111\u1ebfn \u0111i\u1ec1u n\xe0y nh\u01b0 m\u1ed9t c\xe1ch \u0111\u1ec3 thu h\u1eb9p ki\u1ec3u d\u1eef li\u1ec7u."]}),"\n",(0,i.jsx)(e.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'/property/ in /object/;\n// property: t\xean thu\u1ed9c t\xednh (\u1edf d\u1ea1ng string ho\u1eb7c number)\n// object: t\xean c\u1ee7a object (\u1edf d\u1ea1ng bi\u1ebfn, ho\u1eb7c gi\xe1 tr\u1ecb)\n// => Tr\u1ea3 v\u1ec1 "true" n\u1ebfu property l\xe0 m\u1ed9t thu\u1ed9c t\xednh n\u1eb1m trong object, ng\u01b0\u1ee3c l\u1ea1i tr\u1ea3 v\u1ec1 false.\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'type Fish = { swim: () => void };\ntype Bird = { fly: () => void };\n\nfunction move(animal: Fish | Bird) {\n  if ("swim" in animal) {\n    //animal now is Fish\n    return animal.swim();\n  }\n  //animal now is Bird\n  return animal.fly();\n}\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"const arr = [1, 2, 3, 4, 5];\nconsole.log(0 in arr); //true\n/*\nGi\u1ea3i th\xedch:\nTa c\xf3 th\u1ec3 vi\u1ebft l\u1ea1i arr nh\u01b0 sau\narr = {\n    0: 1,\n    1: 2,\n    2: 3,\n    3: 4,\n    4: 5,\n}\nDo 0 l\xe0 thu\u1ed9c t\xednh t\u1ed3n t\u1ea1i trong arr n\xean s\u1ebd tr\u1ea3 v\u1ec1 true.\nKh\xf4ng n\xean hi\u1ec3u nh\u1ea7m th\xe0nh 0 c\xf3 ph\u1ea3i l\xe0 gi\xe1 tr\u1ecb c\u1ee7a m\u1ed9t ph\u1ea7n t\u1eed n\u1eb1m trong arr hay kh\xf4ng.\n*/\n"})}),"\n",(0,i.jsx)(e.h2,{id:"instanceof",children:(0,i.jsx)(e.code,{children:"instanceof"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["To\xe1n t\u1eed ",(0,i.jsx)(e.code,{children:"instanceof"})," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ki\u1ec3m tra m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng n\xe0o \u0111\xf3 c\xf3 ph\u1ea3i l\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a m\u1ed9t l\u1edbp \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh hay kh\xf4ng. To\xe1n t\u1eed n\xe0y tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb ",(0,i.jsx)(e.code,{children:"true"})," ho\u1eb7c ",(0,i.jsx)(e.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Ph\xeda b\xean tr\xe1i c\u1ee7a bi\u1ec3u th\u1ee9c ",(0,i.jsx)(e.code,{children:"instanceof"})," kh\xf4ng th\u1ec3 l\xe0 ki\u1ec3u d\u1eef li\u1ec7u nguy\xean thu\u1ef7, n\xf3 ph\u1ea3i l\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng (",(0,i.jsx)(e.code,{children:"Object"}),")."]}),"\n",(0,i.jsxs)(e.li,{children:["Ph\xeda b\xean ph\u1ea3i c\u1ee7a bi\u1ec3u th\u1ee9c ",(0,i.jsx)(e.code,{children:"instanceof"})," ph\u1ea3i l\xe0 m\u1ed9t l\u1edbp (",(0,i.jsx)(e.code,{children:"class"}),")."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"function logValue(x: Date | string) {\n  if (x instanceof Date) {\n    //Now x is Date\n    console.log(x.toUTCString());\n  } else {\n    // Now x is a string\n    console.log(x.toUpperCase());\n  }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>s});var i=t(6540);const r={},o=i.createContext(r);function c(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);