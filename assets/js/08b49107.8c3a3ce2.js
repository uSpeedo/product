"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[152],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>g});var a=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,a,r=function(e,t){if(null==e)return{};var s,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var s=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(s),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||n;return s?a.createElement(g,o(o({ref:t},p),{},{components:s})):a.createElement(g,o({ref:t},p))}));function g(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=s.length,o=new Array(n);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<n;c++)o[c]=s[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,s)}d.displayName="MDXCreateElement"},256:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=s(7462),r=(s(7294),s(3905));const n={sidebar_label:"Use the SMS console",sidebar_position:2},o="Use the SMS console",i={unversionedId:"sms/started/console",id:"sms/started/console",title:"Use the SMS console",description:"Before you begin",source:"@site/docs/sms/started/console.md",sourceDirName:"sms/started",slug:"/sms/started/console",permalink:"/docs/sms/started/console",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/main/docs/docs/sms/started/console.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Use the SMS console",sidebar_position:2},sidebar:"sms",previous:{title:"Billing",permalink:"/docs/sms/Billing-3"},next:{title:"Use the SMS API or SDKs",permalink:"/docs/sms/started/sdks"}},l={},c=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Send messages",id:"send-messages",level:2},{value:"Query message details",id:"query-message-details",level:2},{value:"Message Analytics",id:"message-analytics",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-the-sms-console"},"Use the SMS console"),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a uSpeedo account and complete upgrade.")),(0,r.kt)("p",null,"To create an account and complete upgrade, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/signup"},"registration page")," and ",(0,r.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/bill/upgrade"},"upgrade page"),". If you already have an account that had been upgraded, proceed to the next step."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Obtain an AccessKey pair.")),(0,r.kt)("p",null,"AccessKey pairs are security tokens used to access product resources by calling API operations. You must create an AccessKey pair before you call SMS API operations. Go to ",(0,r.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/"},"obtain an AccessKey pair"),"."),(0,r.kt)("h2",{id:"send-messages"},"Send messages"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a message template. ",(0,r.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/sms/new-template"},"New template quikly"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait until the message template is approved.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a messaging campaign. ",(0,r.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/sms/message"},"Try to send messages"),". You can send messages to multiple mobile phone numbers at a time."))),(0,r.kt)("h2",{id:"query-message-details"},"Query message details"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/sms/message"},"Messaging campaign details"),". Here, you can view the details of the messaging campaign, including the delivery time, delivery status, total number of mobile phone numbers to which the message is sent, and number of mobile phone numbers to which the message fails to be sent. On the ",(0,r.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/sms/search"},"Message Search page"),", you can view the details of sent messages by mobile phone number, delivery date, delivery status, or destination country or region."),(0,r.kt)("h2",{id:"message-analytics"},"Message Analytics"),(0,r.kt)("p",null,"You can select a period, or query the usage summary in a specific country or region. And you can see the SMS delivery trend chart in the lower part of the ",(0,r.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/sms/analytics"},"Analytics")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/116861648/225559357-e672b2b1-293c-4f37-a9fd-cd01d69efd56.png",alt:"image"}),"."))}m.isMDXComponent=!0}}]);