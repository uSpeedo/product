"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[1286],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(g,s(s({ref:t},c),{},{components:a})):r.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6053:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_label:"Use the MMS console",sidebar_position:1},s=void 0,i={unversionedId:"mms/started/console",id:"mms/started/console",title:"console",description:"Before you begin",source:"@site/docs/mms/started/console.md",sourceDirName:"mms/started",slug:"/mms/started/console",permalink:"/docs/mms/started/console",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Use the MMS console",sidebar_position:1},sidebar:"mms"},p={},l=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Send messages",id:"send-messages",level:2},{value:"Query message details",id:"query-message-details",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a uSpeedo account and complete upgrade.")),(0,n.kt)("p",null,"To create an account and complete upgrade, visit the ",(0,n.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/signup"},"registration page")," and ",(0,n.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/bill/upgrade"},"upgrade page"),". If you already have an account that had been upgraded, proceed to the next step."),(0,n.kt)("p",null,"2.Take a free trial."),(0,n.kt)("p",null,"Before using multimedia messaging (MMS), you can upload an image to test the effect of MMS reception.\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/uSpeedo/product/assets/116861648/3e11abb3-ec27-4714-a42c-ce5cdfbbf3a7",alt:"image"})),(0,n.kt)("h2",{id:"send-messages"},"Send messages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a message template. ",(0,n.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/mms/new-template"},"New template quikly"),".You can leverage AIGC to create personalized MMS images based on the target audience.\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/uSpeedo/product/assets/116861648/b0bd6810-eeba-48f7-b1eb-339cce0f2191",alt:"image"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait until the message template is approved.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a messaging campaign. ",(0,n.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/mms/message"},"Try to send messages"),". You can send messages to multiple mobile phone numbers at a time."))),(0,n.kt)("h2",{id:"query-message-details"},"Query message details"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/mms/sending"},"Messaging campaign details"),". Here, you can view the details of the messaging campaign, including the delivery time, delivery status, total number of mobile phone numbers to which the message is sent, and number of mobile phone numbers to which the message fails to be sent. On the ",(0,n.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/mms/search"},"Message Search page"),", you can view the details of sent messages by mobile phone number, delivery date, delivery status, or destination country or region."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/uSpeedo/product/assets/116861648/c1a3f560-ab13-44a5-ba97-82f77ca78270",alt:"image"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/uSpeedo/product/assets/116861648/2bbc7476-aafa-4519-8bf2-623f7621cd0c",alt:"image"})))}u.isMDXComponent=!0}}]);