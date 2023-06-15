"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[4835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"API Signature",sidebar_position:1},o="How to construct api signature",s={unversionedId:"sms/signature-1",id:"sms/signature-1",title:"How to construct api signature",description:"Preparation",source:"@site/docs/sms/signature-1.md",sourceDirName:"sms",slug:"/sms/signature-1",permalink:"/docs/sms/signature-1",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/dev/docs/sms/signature-1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"API Signature",sidebar_position:1},sidebar:"sms",previous:{title:"Get AccessKeyId",permalink:"/docs/sms/get-accesskey-1"},next:{title:"Quick Start",permalink:"/docs/sms/api/"}},l={},p=[{value:"Preparation",id:"preparation",level:2},{value:"Constructing the Signature String",id:"constructing-the-signature-string",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-construct-api-signature"},"How to construct api signature"),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"When generating the signature (",(0,a.kt)("inlineCode",{parentName:"p"},"X-Signature"),") in an API request, you need to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeyId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeySecret"),", which can be obtained from your console account."),(0,a.kt)("p",null,"See : ",(0,a.kt)("a",{parentName:"p",href:"/docs/sms/get-accesskey-1"},"How to get AccessKeyId")),(0,a.kt)("h2",{id:"constructing-the-signature-string"},"Constructing the Signature String"),(0,a.kt)("p",null,"To generate the signature, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Put all the parameters and their values into a map and sort them in ascending order by the key values.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Concatenate all the parameters to form the signature plaintext.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign the plaintext using SHA1."),(0,a.kt)("p",{parentName:"li"},"notice\uff1aIf the interface requires a file upload request (e.g., image or video), the file stream is not involved in the signature. Convert the file into a file stream format and request it separately."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Get the ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeySecret")," from ",(0,a.kt)("a",{parentName:"p",href:"https://console.uspeedo.com"},"console")," ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MjI3YmYyMjItNmM4Mi00ZGM5LWEwNDQtN2EzZjM0Yzk2OWE1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Get the request body from the request and sort it in ascending order based on the ASCII code of the first character (in ascending alphabetical order). If the characters are the same, sort them based on the ASCII code of the second character, and so on."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Action": "SendBatchUSMSMessage",\n    "AccountId": 0\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Combine the sorted parameters and their corresponding values into the format ",(0,a.kt)("inlineCode",{parentName:"p"},"parameter=parametervalue"),". Append ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeySecret")," at the end of this signature string. The resulting string is the unsigned string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AccountId0ActionSendBatchUSMSMessageMjI3YmYyMjItNmM4Mi00ZGM5LWEwNDQtN2EzZjM0Yzk2OWE1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"step 4: Calculate the Signature Value")),(0,a.kt)("p",null,"Encode the unsigned string using SHA1 to generate the request signature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cf44481ba31ec8d2943d0699e9e38062de44a7da\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5: Set HTTP Headers")),(0,a.kt)("p",null,"API requests require the signature information to be passed through the HTTP header. It must include the following four parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-Signature"),": The signature value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-Timestamp"),": The timestamp (within five minutes)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-Nonce"),": A random string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-Access-Key-Id"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessKeyId")," of the console account")))}d.isMDXComponent=!0}}]);