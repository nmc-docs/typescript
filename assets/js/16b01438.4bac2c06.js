"use strict";(self.webpackChunktypescript=self.webpackChunktypescript||[]).push([[2404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},y=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},y),{},{components:r})):n.createElement(f,a({ref:t},y))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:4},a="Readonly< Type >",l={unversionedId:"utility-types/readonly",id:"utility-types/readonly",title:"Readonly< Type >",description:"- Readonly tr\u1ea3 v\u1ec1 m\u1ed9t object type m\u1edbi t\u1eeb Type v\u1edbi t\u1ea5t c\u1ea3 c\xe1c thu\u1ed9c t\xednh chuy\u1ec3n th\xe0nh readonly.",source:"@site/docs/utility-types/readonly.md",sourceDirName:"utility-types",slug:"/utility-types/readonly",permalink:"/typescript/utility-types/readonly",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Required< Type >",permalink:"/typescript/utility-types/required"},next:{title:"Record<Keys, Type>",permalink:"/typescript/utility-types/record"}},p={},c=[],y={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"readonly-type-"},"Readonly< Type >"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Readonly<Type>")," tr\u1ea3 v\u1ec1 m\u1ed9t ",(0,o.kt)("strong",{parentName:"li"},"object type")," m\u1edbi t\u1eeb ",(0,o.kt)("inlineCode",{parentName:"li"},"Type")," v\u1edbi t\u1ea5t c\u1ea3 c\xe1c thu\u1ed9c t\xednh chuy\u1ec3n th\xe0nh ",(0,o.kt)("inlineCode",{parentName:"li"},"readonly"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n}\n\nconst todo: Readonly<Todo> = {\n  title: "Delete inactive users",\n};\n\ntodo.title = "Hello"; //Error: Cannot assign to \'title\' because it is a read-only property.\n')))}u.isMDXComponent=!0}}]);