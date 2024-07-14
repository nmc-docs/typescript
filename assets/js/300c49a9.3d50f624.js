"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[9078],{3329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var i=n(4848),s=n(8453);const c={sidebar_position:6},r="Pick<Type, Keys>",o={id:"utility-types/pick",title:"Pick\\<Type, Keys\\>",description:"- Pick tr\u1ea3 v\u1ec1 m\u1ed9t object type d\u1ef1a tr\xean Type m\xe0 ch\u1ec9 ch\u1ee9a c\xe1c thu\u1ed9c t\xednh t\u1eeb Keys (th\u01b0\u1eddng l\xe0 literal types)",source:"@site/docs/utility-types/pick.md",sourceDirName:"utility-types",slug:"/utility-types/pick",permalink:"/typescript/utility-types/pick",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Record\\<Keys, Type\\>",permalink:"/typescript/utility-types/record"},next:{title:"Omit\\<Type, Keys\\>",permalink:"/typescript/utility-types/omit"}},l={},p=[];function a(e){const t={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"picktype-keys",children:"Pick<Type, Keys>"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Pick<Type, Keys>"})," tr\u1ea3 v\u1ec1 m\u1ed9t ",(0,i.jsx)(t.strong,{children:"object type"})," d\u1ef1a tr\xean ",(0,i.jsx)(t.code,{children:"Type"})," m\xe0 ch\u1ec9 ch\u1ee9a c\xe1c thu\u1ed9c t\xednh t\u1eeb ",(0,i.jsx)(t.code,{children:"Keys"})," (th\u01b0\u1eddng l\xe0 ",(0,i.jsx)(t.a,{href:"../types/literal-types",children:"literal types"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n\ntype TodoPreview = Pick<Todo, "title" | "completed">;\n\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false,\n};\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const s={},c=i.createContext(s);function r(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);