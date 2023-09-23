"use strict";(self.webpackChunktypescript=self.webpackChunktypescript||[]).push([[946],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),m=r,k=s["".concat(p,".").concat(m)]||s[m]||g[m]||i;return t?a.createElement(k,l(l({ref:n},u),{},{components:t})):a.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:10},l="Index signature",o={unversionedId:"index-signatures",id:"index-signatures",title:"Index signature",description:"B\xe0i to\xe1n \u0111\u1eb7t ra:",source:"@site/docs/index-signatures.md",sourceDirName:".",slug:"/index-signatures",permalink:"/typescript/index-signatures",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Indexed Access Types",permalink:"/typescript/type-operator/indexed-access-types"},next:{title:"Mapped types",permalink:"/typescript/mapped-types"}},p={},c=[{value:"B\xe0i to\xe1n \u0111\u1eb7t ra:",id:"b\xe0i-to\xe1n-\u0111\u1eb7t-ra",level:2},{value:"\u0110\u1ecbnh ngh\u0129a",id:"\u0111\u1ecbnh-ngh\u0129a",level:2},{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"M\u1ed9t s\u1ed1 l\u01b0u \xfd \u0111\u1ed1i v\u1edbi Index Signatures",id:"m\u1ed9t-s\u1ed1-l\u01b0u-\xfd-\u0111\u1ed1i-v\u1edbi-index-signatures",level:2},{value:"Ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a <code>value</code> (<code>valueType</code>) trong Index Signatures",id:"ki\u1ec3u-d\u1eef-li\u1ec7u-c\u1ee7a-value-valuetype-trong-index-signatures",level:3},{value:"Non-existing properties (thu\u1ed9c t\xednh kh\xf4ng t\u1ed3n t\u1ea1i trong object)",id:"non-existing-properties-thu\u1ed9c-t\xednh-kh\xf4ng-t\u1ed3n-t\u1ea1i-trong-object",level:3},{value:"String and number key",id:"string-and-number-key",level:3}],u={toc:c},s="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"index-signature"},"Index signature"),(0,r.kt)("h2",{id:"b\xe0i-to\xe1n-\u0111\u1eb7t-ra"},"B\xe0i to\xe1n \u0111\u1eb7t ra:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gi\u1ea3 s\u1eed ta c\xf3 2 object bi\u1ec3u di\u1ec5n l\u01b0\u01a1ng c\u1ee7a Software Developers nh\u01b0 sau:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const salary1 = {\n  baseSalary: 100_000,\n  yearlyBonus: 20_000,\n};\n\nconst salary2 = {\n  contractSalary: 110_000,\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"B\xe2y gi\u1edd ta mu\u1ed1n tri\u1ec3n khai m\u1ed9t h\xe0m t\xednh t\u1ed5ng ti\u1ec1n l\u01b0\u01a1ng d\u1ef1a tr\xean \u0111\u1ed1i t\u01b0\u1ee3ng Salary:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function totalSalary(salaryObject: ???) {\n  let total = 0;\n  for (const name in salaryObject) {\n    total += salaryObject[name];\n  }\n  return total;\n}\ntotalSalary(salary1); // => 120_000\ntotalSalary(salary2); // => 110_000\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"V\u1ea5n \u0111\u1ec1 \u0111\u1eb7t ra: l\xe0m sao ta c\xf3 th\u1ec3 bi\u1ec3u di\u1ec5n ki\u1ec3u c\u1ee7a tham s\u1ed1 ",(0,r.kt)("inlineCode",{parentName:"p"},"salaryObject")," m\xe0 ta truy\u1ec1n v\xe0o m\xe0 th\u1ecfa m\xe3n c\u1ea3 2 object ",(0,r.kt)("inlineCode",{parentName:"p"},"salary1")," v\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"salary2")," c\xf3 chung \u0111\u1eb7c \u0111i\u1ec3m l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"string keys")," v\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"number values"),". V\xec v\u1eady, ta s\u1ebd s\u1eed d\u1ee5ng ",(0,r.kt)("strong",{parentName:"p"},"Index Signatures")," trong TypeScript.")),(0,r.kt)("h2",{id:"\u0111\u1ecbnh-ngh\u0129a"},"\u0110\u1ecbnh ngh\u0129a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Index signatures")," trong Typescript l\xe0 c\xe1ch \u0111\u1ec3 khai b\xe1o ki\u1ec3u cho c\xe1c thu\u1ed9c t\xednh kh\xf4ng bi\u1ebft tr\u01b0\u1edbc c\u1ee7a m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng. N\xf3 cho ph\xe9p b\u1ea1n \u0111\u1ecbnh ngh\u0129a ki\u1ec3u cho c\xe1c thu\u1ed9c t\xednh c\xf3 t\xean kh\xf4ng bi\u1ebft tr\u01b0\u1edbc v\xe0 kh\xf4ng gi\u1edbi h\u1ea1n s\u1ed1 l\u01b0\u1ee3ng c\xe1c thu\u1ed9c t\xednh \u0111\xf3.")),(0,r.kt)("h2",{id:"c\xfa-ph\xe1p"},"C\xfa ph\xe1p"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"[propertyName: propertyType]: valueType\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Trong \u0111\xf3:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"propertyName")," l\xe0 t\xean thu\u1ed9c t\xednh kh\xf4ng bi\u1ebft tr\u01b0\u1edbc (th\u01b0\u1eddng \u0111\u01b0\u1ee3c \u0111\u1eb7t l\xe0 ",(0,r.kt)("strong",{parentName:"li"},"key")," )"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"propertyType")," l\xe0 ki\u1ec3u c\u1ee7a thu\u1ed9c t\xednh."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueType")," l\xe0 ki\u1ec3u c\u1ee7a gi\xe1 tr\u1ecb t\u01b0\u01a1ng \u1ee9ng v\u1edbi thu\u1ed9c t\xednh."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Dictionary {\n  [key: string]: number;\n}\n\nconst myDict: Dictionary = {\n  foo: 1,\n  bar: 2,\n  baz: 3,\n};\n")),(0,r.kt)("p",null,"Trong v\xed d\u1ee5 n\xe0y, ch\xfang ta \u0111\u1ecbnh ngh\u0129a m\u1ed9t ",(0,r.kt)("inlineCode",{parentName:"p"},"interface Dictionary")," c\xf3 m\u1ed9t ",(0,r.kt)("strong",{parentName:"p"},"index signature")," v\u1edbi ki\u1ec3u ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," v\xe0 ki\u1ec3u ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),". \u0110i\u1ec1u n\xe0y cho ph\xe9p ch\xfang ta t\u1ea1o ra m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng c\xf3 c\xe1c thu\u1ed9c t\xednh c\xf3 t\xean kh\xf4ng bi\u1ebft tr\u01b0\u1edbc, nh\u01b0ng gi\xe1 tr\u1ecb c\u1ee7a c\xe1c thu\u1ed9c t\xednh \u0111\xf3 ph\u1ea3i l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,r.kt)("h2",{id:"m\u1ed9t-s\u1ed1-l\u01b0u-\xfd-\u0111\u1ed1i-v\u1edbi-index-signatures"},"M\u1ed9t s\u1ed1 l\u01b0u \xfd \u0111\u1ed1i v\u1edbi Index Signatures"),(0,r.kt)("h3",{id:"ki\u1ec3u-d\u1eef-li\u1ec7u-c\u1ee7a-value-valuetype-trong-index-signatures"},"Ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a ",(0,r.kt)("inlineCode",{parentName:"h3"},"value")," (",(0,r.kt)("inlineCode",{parentName:"h3"},"valueType"),") trong Index Signatures"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ki\u1ec3u c\u1ee7a ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," trong ",(0,r.kt)("strong",{parentName:"li"},"index signatures")," ph\u1ea3i bao qu\xe1t h\u1ebft ki\u1ec3u c\u1ee7a c\xe1c thu\u1ed9c t\xednh c\xf2n l\u1ea1i (n\u1ebfu c\xf3) \u1edf trong object"),(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  [key: string]: string;\n  age: number; // Error: Property 'age' of type 'number' is not assignable to 'string' index type 'string'\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"C\xe1ch s\u1eeda")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  [key: string]: string | number;\n  age: number;\n}\n")),(0,r.kt)("h3",{id:"non-existing-properties-thu\u1ed9c-t\xednh-kh\xf4ng-t\u1ed3n-t\u1ea1i-trong-object"},"Non-existing properties (thu\u1ed9c t\xednh kh\xf4ng t\u1ed3n t\u1ea1i trong object)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Khi truy c\u1eadp v\xe0o nh\u1eefng thu\u1ed9c t\xednh kh\xf4ng c\xf3 trong object, thay v\xec n\xf3 c\xf3 gi\xe1 tr\u1ecb ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," th\xec TypeScript v\u1eabn g\xe1n ki\u1ec3u cho n\xf3 l\xe0 ki\u1ec3u c\u1ee7a ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," trong ",(0,r.kt)("strong",{parentName:"li"},"index signatures")," nh\u01b0 ta \u0111\xe3 ch\u1ec9 \u0111\u1ecbnh. Vi\u1ec7c n\xe0y g\xe2y ra l\u1ed7i khi ch\u1ea1y."),(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface StringByString {\n  [key: string]: string;\n}\n\nconst object: StringByString = {};\n\nconst value = object["nonExistingProp"]; // value is still a "string"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kh\u1eafc ph\u1ee5c")," : ta th\xeam ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," v\xe0o ki\u1ec3u c\u1ee7a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," trong ",(0,r.kt)("strong",{parentName:"p"},"index signatures")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface StringByString {\n  [key: string]: string | undefined;\n}\n\nconst object: StringByString = {};\n\nconst value = object["nonExistingProp"];\n')),(0,r.kt)("h3",{id:"string-and-number-key"},"String and number key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ta c\xf3 v\xed d\u1ee5 sau:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface NumbersNames {\n  [key: string]: string;\n}\n\nconst names: NumbersNames = {\n  "1": "one",\n  "2": "two",\n  "3": "three",\n  // etc...\n};\n\nconst value1 = names["1"];\nconst value2 = names[1];\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ta c\xf3 th\u1ec3 truy c\u1eadp thu\u1ed9c t\xednh c\u1ee7a object ",(0,r.kt)("inlineCode",{parentName:"li"},"names")," th\xf4ng qua c\u1ea3 2 c\xe1ch nh\u01b0 tr\xean: ",(0,r.kt)("strong",{parentName:"li"},"string key")," v\xe0 ",(0,r.kt)("strong",{parentName:"li"},"number key")," . \u0110i\u1ec1u n\xe0y l\xe0 do JavaScript \u0111\xe3 \xe9p ",(0,r.kt)("strong",{parentName:"li"},"number key")," th\xe0nh ",(0,r.kt)("strong",{parentName:"li"},"string key")," v\xe0 TypeScript c\u0169ng v\u1eady (",(0,r.kt)("inlineCode",{parentName:"li"},"names[\u20181\u2019] === names[1]"),")"),(0,r.kt)("li",{parentName:"ul"},"Do \u0111\xf3: ",(0,r.kt)("inlineCode",{parentName:"li"},"[key: string]")," t\u01b0\u01a1ng \u0111\u01b0\u01a1ng v\u1edbi ",(0,r.kt)("inlineCode",{parentName:"li"},"[key: string | number]"))))}g.isMDXComponent=!0}}]);