"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[7401],{8388:(t,c,n)=>{n.r(c),n.d(c,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=n(4848),e=n(8453);const i={sidebar_position:7},r="Static members",a={id:"class/static-members",title:"Static members",description:"- Static members l\xe0 c\xe1c thu\u1ed9c t\xednh ho\u1eb7c ph\u01b0\u01a1ng th\u1ee9c thu\u1ed9c v\u1ec1 l\u1edbp (class) ch\u1ee9 kh\xf4ng ph\u1ea3i \u0111\u1ed1i t\u01b0\u1ee3ng (instance) c\u1ee7a l\u1edbp \u0111\xf3. C\xe1c thu\u1ed9c t\xednh v\xe0 ph\u01b0\u01a1ng th\u1ee9c static c\xf3 th\u1ec3 truy c\u1eadp tr\u1ef1c ti\u1ebfp th\xf4ng qua t\xean c\u1ee7a l\u1edbp, kh\xf4ng c\u1ea7n ph\u1ea3i t\u1ea1o ra m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng m\u1edbi.",source:"@site/docs/class/static-members.md",sourceDirName:"class",slug:"/class/static-members",permalink:"/typescript/class/static-members",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Abstract class",permalink:"/typescript/class/abstract-class"},next:{title:"Generic class",permalink:"/typescript/class/generic-class"}},h={},o=[];function l(t){const c={admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.header,{children:(0,s.jsx)(c.h1,{id:"static-members",children:"Static members"})}),"\n",(0,s.jsxs)(c.ul,{children:["\n",(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.strong,{children:"Static members"})," l\xe0 c\xe1c thu\u1ed9c t\xednh ho\u1eb7c ph\u01b0\u01a1ng th\u1ee9c thu\u1ed9c v\u1ec1 l\u1edbp (class) ch\u1ee9 kh\xf4ng ph\u1ea3i \u0111\u1ed1i t\u01b0\u1ee3ng (instance) c\u1ee7a l\u1edbp \u0111\xf3. C\xe1c thu\u1ed9c t\xednh v\xe0 ph\u01b0\u01a1ng th\u1ee9c static c\xf3 th\u1ec3 truy c\u1eadp tr\u1ef1c ti\u1ebfp th\xf4ng qua t\xean c\u1ee7a l\u1edbp, kh\xf4ng c\u1ea7n ph\u1ea3i t\u1ea1o ra m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng m\u1edbi."]}),"\n",(0,s.jsxs)(c.li,{children:["\u0110\u1ec3 khai b\xe1o m\u1ed9t thu\u1ed9c t\xednh ho\u1eb7c ph\u01b0\u01a1ng th\u1ee9c l\xe0 static trong TypeScript, ta s\u1eed d\u1ee5ng t\u1eeb kh\xf3a ",(0,s.jsx)(c.code,{children:"static"})," tr\u01b0\u1edbc t\xean c\u1ee7a n\xf3."]}),"\n",(0,s.jsxs)(c.li,{children:["Khi khai b\xe1o m\u1ed9t thu\u1ed9c t\xednh b\u1eb1ng ",(0,s.jsx)(c.code,{children:"static"})," th\xec s\u1ebd kh\xf4ng c\xf3 h\xe0m kh\u1edfi t\u1ea1o ",(0,s.jsx)(c.strong,{children:"constructor()"})]}),"\n",(0,s.jsx)(c.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-ts",children:'class MyClass {\n  static myStaticProperty = "hello";\n  static myStaticMethod() {\n    return "world";\n  }\n}\n\nconsole.log(MyClass.myStaticProperty); // hello\nconsole.log(MyClass.myStaticMethod()); // world\n'})}),"\n",(0,s.jsx)(c.admonition,{type:"note",children:(0,s.jsxs)(c.p,{children:["\u1ede v\xed d\u1ee5 tr\xean, ",(0,s.jsx)(c.code,{children:"myStaticProperty"})," v\xe0 ",(0,s.jsx)(c.code,{children:"myStaticMethod()"})," l\xe0 hai th\xe0nh vi\xean static c\u1ee7a l\u1edbp ",(0,s.jsx)(c.code,{children:"MyClass"}),". Ta kh\xf4ng c\u1ea7n t\u1ea1o m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng ",(0,s.jsx)(c.code,{children:"MyClass"})," m\u1edbi \u0111\u1ec3 truy c\u1eadp \u0111\u1ebfn c\xe1c th\xe0nh vi\xean static n\xe0y."]})}),"\n",(0,s.jsxs)(c.ul,{children:["\n",(0,s.jsxs)(c.li,{children:["Trong m\u1ed9t ",(0,s.jsx)(c.strong,{children:"static method"})," , ta kh\xf4ng th\u1ec3 tr\u1ef1c ti\u1ebfp truy c\u1eadp v\xe0o c\xe1c thu\u1ed9c t\xednh kh\xf4ng ph\u1ea3i l\xe0 ",(0,s.jsx)(c.code,{children:"static"})," c\u1ee7a c\xf9ng m\u1ed9t class. ",(0,s.jsx)(c.strong,{children:"Static method"})," ch\u1ec9 c\xf3 th\u1ec3 truy c\u1eadp v\xe0 thao t\xe1c v\u1edbi c\xe1c th\xe0nh ph\u1ea7n ",(0,s.jsx)(c.code,{children:"static"})," kh\xe1c trong c\xf9ng class, bao g\u1ed3m c\xe1c ",(0,s.jsx)(c.strong,{children:"static property"})," v\xe0 ",(0,s.jsx)(c.strong,{children:"static method"})," kh\xe1c."]}),"\n"]}),"\n",(0,s.jsx)(c.p,{children:(0,s.jsx)(c.img,{alt:"1695453601857",src:n(1e3).A+"",width:"981",height:"286"})}),"\n",(0,s.jsx)(c.admonition,{type:"tip",children:(0,s.jsxs)(c.p,{children:["N\u1ebfu m\u1ed9t class m\xe0 c\xf3 ",(0,s.jsx)(c.strong,{children:"static method"})," hay ",(0,s.jsx)(c.strong,{children:"static property"})," th\xec t\u1ea5t c\u1ea3 c\xe1c thu\u1ed9c t\xednh, ph\u01b0\u01a1ng th\u1ee9c b\xean trong class \u0111\xf3 c\u0169ng n\xean \u0111\u1ec3 l\xe0 ",(0,s.jsx)(c.code,{children:"static"})]})})]})}function d(t={}){const{wrapper:c}={...(0,e.R)(),...t.components};return c?(0,s.jsx)(c,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},1e3:(t,c,n)=>{n.d(c,{A:()=>s});const s=n.p+"assets/images/1695453601857-d95a67c24b2d698aa8bb2f4aa7e3d188.png"},8453:(t,c,n)=>{n.d(c,{R:()=>r,x:()=>a});var s=n(6540);const e={},i=s.createContext(e);function r(t){const c=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(c):{...c,...t}}),[c,t])}function a(t){let c;return c=t.disableParentContext?"function"==typeof t.components?t.components(e):t.components||e:r(t.components),s.createElement(i.Provider,{value:c},t.children)}}}]);