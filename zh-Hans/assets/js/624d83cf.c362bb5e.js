"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[252],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=u(a),c=r,k=s["".concat(o,".").concat(c)]||s[c]||d[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2451:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"\u5feb\u901f\u5f00\u59cb",sidebar_position:1},i="\u5feb\u901f\u5f00\u59cb",p={unversionedId:"api/index",id:"api/index",title:"\u5feb\u901f\u5f00\u59cb",description:"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/zh-Hans/docs/api/",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/main/docs/docs/api/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u5feb\u901f\u5f00\u59cb",sidebar_position:1},sidebar:"api",next:{title:"\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f",permalink:"/zh-Hans/docs/api/list/CreateUSMSTemplate"}},o={},u=[{value:"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c",id:"\u4e00\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u4e8c\u3001\u8c03\u7528\u65b9\u5f0f",id:"\u4e8c\u8c03\u7528\u65b9\u5f0f",level:2},{value:"\u4e09\u3001\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e",id:"\u4e09\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u56db\u3001\u8fd4\u56de\u53c2\u6570\u8bf4\u660e",id:"\u56db\u8fd4\u56de\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u4e94\u3001API\u5217\u8868",id:"\u4e94api\u5217\u8868",level:2}],m={toc:u},s="wrapper";function d(t){let{components:e,...l}=t;return(0,r.kt)(s,(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("h2",{id:"\u4e00\u51c6\u5907\u5de5\u4f5c"},"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001\u83b7\u53d6\u7b7e\u540d\uff1a\u7528\u6765\u8c03\u7528\u63a5\u53e3\u9274\u6743\u4f7f\u7528\uff0c",(0,r.kt)("a",{parentName:"li",href:"../sdk/signature-2"},"\u83b7\u53d6\u7b7e\u540d")),(0,r.kt)("li",{parentName:"ul"},"2\u3001AccountId: \u670d\u52a1\u8d26\u53f7\uff0c\u6bcf\u4e2a\u7528\u6237\u9ed8\u8ba4\u53ea\u6709\u4e00\u4e2a\uff0c\u9700\u8981\u5f00\u901a\u66f4\u591a\u9700\u8981\u8054\u7cfb\u8fd0\u8425",(0,r.kt)("a",{parentName:"li",href:"mailto:support@uspeedo.com"},"support@uspeedo.com"),"\uff0c",(0,r.kt)("a",{parentName:"li",href:"https://console.uspeedo.com/sms/overview"},"\u83b7\u53d6AccountId"),"\uff0c\u5982\u4e0b\u56fe")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AccountId",src:a(2569).Z,width:"1089",height:"591"})),(0,r.kt)("h2",{id:"\u4e8c\u8c03\u7528\u65b9\u5f0f"},"\u4e8c\u3001\u8c03\u7528\u65b9\u5f0f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u9ed8\u8ba4\u652f\u6301\uff1aSDK")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Golang: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/uSpeedo/usms-sdk-go"},"usms-sdk-go"))),(0,r.kt)("h2",{id:"\u4e09\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e"},"\u4e09\u3001\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6240\u6709API\u90fd\u9700\u8981\u4f20\u9012\u8fd9\u4e24\u4e2a\u53c2\u6570")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"API\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccountId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9879\u76eeID\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://console.uspeedo.com/sms/overview"},"\u83b7\u53d6AccountId")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h2",{id:"\u56db\u8fd4\u56de\u53c2\u6570\u8bf4\u660e"},"\u56db\u3001\u8fd4\u56de\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53c2\u6570\u8fd4\u56de\u7ed3\u6784")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RetCode"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53RetCode\u4e0d\u4e3a0\u65f6\uff0cMessage\u4e2d\u663e\u793a\u5177\u4f53\u9519\u8bef\u63cf\u8ff0\uff0c\u82e5RetCode\u4e3a0\uff0c\u4e0d\u8fd4\u56deMessage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53RetCode\u4e0d\u4e3a0\u65f6\uff0cMessage\u4e2d\u663e\u793a\u5177\u4f53\u9519\u8bef\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))))),(0,r.kt)("h2",{id:"\u4e94api\u5217\u8868"},"\u4e94\u3001API\u5217\u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u77ed\u4fe1\u6a21\u7248",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./list/CreateUSMSTemplate"},"\u7533\u8bf7\u77ed\u4fe1\u6a21\u7248")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./list/DeleteUSMSTemplate"},"\u5220\u9664\u77ed\u4fe1\u6a21\u7248")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./list/UpdateUSMSTemplate"},"\u4fee\u6539\u77ed\u4fe1\u6a21\u7248")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./list/QueryUSMSTemplate"},"\u67e5\u8be2\u77ed\u4fe1\u6a21\u7248")))),(0,r.kt)("li",{parentName:"ul"},"\u53d1\u9001\u77ed\u4fe1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./list/SendBatchUSMSMessage"},"\u6279\u91cf\u53d1\u9001\u77ed\u4fe1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./list/GetUSMSSendReceipt"},"\u83b7\u53d6\u77ed\u4fe1\u53d1\u9001\u72b6\u6001"))))))}d.isMDXComponent=!0},2569:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/accountId-a63c987815f16d56a26f4c2e6427e30a.png"}}]);