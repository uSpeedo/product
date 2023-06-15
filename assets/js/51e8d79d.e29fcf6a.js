"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(n),h=o,m=l["".concat(p,".").concat(h)]||l[h]||d[h]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Get started with the WhatsApp Business API",sidebar_position:1},s="Get started with the WhatsApp Business API",i={unversionedId:"whatsapp/Introduction-1",id:"whatsapp/Introduction-1",title:"Get started with the WhatsApp Business API",description:"Before you begin",source:"@site/docs/whatsapp/Introduction-1.md",sourceDirName:"whatsapp",slug:"/whatsapp/Introduction-1",permalink:"/docs/whatsapp/Introduction-1",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/dev/docs/whatsapp/Introduction-1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get started with the WhatsApp Business API",sidebar_position:1},sidebar:"whatsapp",previous:{title:"Get started with the WhatsApp Business API",permalink:"/docs/whatsapp/Embedded signup"},next:{title:"GetAccountPhoneList",permalink:"/docs/whatsapp/api/List/GetAccountPhoneList"}},p={},c=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Before connecting WhatsApp, you must have:",id:"before-connecting-whatsapp-you-must-have",level:2}],u={toc:c},l="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started-with-the-whatsapp-business-api"},"Get started with the WhatsApp Business API"),(0,o.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a uSpeedo account and complete upgrade.")),(0,o.kt)("p",null,"To create an account and complete upgrade, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/signup"},"registration page")," and ",(0,o.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/bill/upgrade"},"upgrade page"),". If you already have an account that had been upgraded, proceed to the next step."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Obtain an AccessKey pair.")),(0,o.kt)("p",null,"AccessKey pairs are security tokens used to access product resources by calling API operations. You must create an AccessKey pair before you call SMS API operations. Go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/"},"obtain an AccessKey pair"),"."),(0,o.kt)("h2",{id:"before-connecting-whatsapp-you-must-have"},"Before connecting WhatsApp, you must have:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"a Facebook account")),(0,o.kt)("p",null,"To set up a Facebook account, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.facebook.com/help/188157731232424"},"How to create a Facebook account")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Phone number\nThe sender (phone number) meets the following requirements from WhatsApp:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Must be in the E.164 international format and must be internationally reachable."),(0,o.kt)("li",{parentName:"ul"},"Must be active during the verification process. You will receive either an SMS or a voice call for 2FA and to confirm number ownership."),(0,o.kt)("li",{parentName:"ul"},"No short codes."),(0,o.kt)("li",{parentName:"ul"},"No toll-free numbers or numbers under IVR. Refer to the guidance in the Important Information section for embedded signup."),(0,o.kt)("li",{parentName:"ul"},"Number must not been used with the WhatsApp Business API before."),(0,o.kt)("li",{parentName:"ul"},"If the number is already registered in the Android, iPhone, or Business Application versions of WhatsApp, refer to the guidance in the Important Information section for embedded signup.")))}d.isMDXComponent=!0}}]);