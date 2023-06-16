"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(a),d=n,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5257:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_label:"Quick Start",sidebar_position:1},i="Quick Start",p={unversionedId:"sms/api/index",id:"sms/api/index",title:"Quick Start",description:"Preparation",source:"@site/docs/sms/api/index.md",sourceDirName:"sms/api",slug:"/sms/api/",permalink:"/docs/sms/api/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Quick Start",sidebar_position:1},sidebar:"sms",previous:{title:"API Signature",permalink:"/docs/sms/signature-1"},next:{title:"Create USMS Template",permalink:"/docs/sms/api/list/CreateUSMSTemplate"}},s={},o=[{value:"Preparation",id:"preparation",level:2},{value:"Calling Method",id:"calling-method",level:2},{value:"Request Parameters",id:"request-parameters",level:2},{value:"Response Parameters",id:"response-parameters",level:2},{value:"API List",id:"api-list",level:2}],u={toc:o},m="wrapper";function c(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quick-start"},"Quick Start"),(0,n.kt)("h2",{id:"preparation"},"Preparation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get signature: Used for API authentication, ",(0,n.kt)("a",{parentName:"li",href:"/docs/sms/signature-1"},"View"),". "),(0,n.kt)("li",{parentName:"ul"},"AccountId: Service account, each user has only one by default. To obtain more, please contact ",(0,n.kt)("a",{parentName:"li",href:"mailto:support@uspeedo.com."},"support@uspeedo.com.")," ",(0,n.kt)("a",{parentName:"li",href:"https://console.uspeedo.com/sms/overview"},"Get AccountId"),", as shown below:")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AccountId",src:a(2569).Z,width:"1089",height:"591"})),(0,n.kt)("h2",{id:"calling-method"},"Calling Method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Currently only supports: SDK")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Golang: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/uSpeedo/usms-sdk-go"},"usms-sdk-go"))),(0,n.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"These two parameters are required for all APIs")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Action"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"API name."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Yes"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AccountId"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Project ID\uff1a",(0,n.kt)("a",{parentName:"td",href:"https://console.uspeedo.com/sms/overview"},"Get AccountId"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,n.kt)("h2",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Parameter return structure")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RetCode"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"When RetCode is not 0, the specific error description is displayed in Message. If RetCode is 0, Message will not be returned."),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Action"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation name."),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Message"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"When RetCode is not 0, the specific error description is displayed in Message."),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,n.kt)("h2",{id:"api-list"},"API List"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SMS Template",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sms/api/list/CreateUSMSTemplate"},"Create USMS Template")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sms/api/list/DeleteUSMSTemplate"},"Delete USMS Template")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sms/api/list/UpdateUSMSTemplate"},"Update USMS Template")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sms/api/list/QueryUSMSTemplate"},"Query USMS Template")))),(0,n.kt)("li",{parentName:"ul"},"Send SMS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sms/api/list/SendBatchUSMSMessage"},"Send Batch USMS Message")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sms/api/list/GetUSMSSendReceipt"},"Get USMS Send Receipt"))))))}c.isMDXComponent=!0},2569:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/accountId-a63c987815f16d56a26f4c2e6427e30a.png"}}]);