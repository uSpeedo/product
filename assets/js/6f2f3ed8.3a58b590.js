"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(k,l(l({ref:t},i),{},{components:n})):r.createElement(k,l({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:2},l="SMS\u534f\u8bae",o={unversionedId:"sms/started/index",id:"sms/started/index",title:"SMS\u534f\u8bae",description:"\u4e00\u3001\u51c6\u5907",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sms/started/index.md",sourceDirName:"sms/started",slug:"/sms/started/",permalink:"/docs/sms/started/",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/main/docs/docs/sms/started/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sms",previous:{title:"Introduction",permalink:"/docs/sms/Introduction"},next:{title:"\u6ce8\u518c",permalink:"/docs/sms/started/signin"}},c={},p=[{value:"\u4e00\u3001\u51c6\u5907",id:"\u4e00\u51c6\u5907",level:2},{value:"1\u3001\u767b\u5f55uSpeedo\u7cfb\u7edf",id:"1\u767b\u5f55uspeedo\u7cfb\u7edf",level:3},{value:"2\u3001\u83b7\u53d6\u5bc6\u94a5AccessKeyId\u548cAccessKeySecret",id:"2\u83b7\u53d6\u5bc6\u94a5accesskeyid\u548caccesskeysecret",level:3},{value:"3\u3001\u83b7\u53d6\u8981\u8c03\u7528\u7684\u63a5\u53e3\uff0cAPI\u6587\u6863",id:"3\u83b7\u53d6\u8981\u8c03\u7528\u7684\u63a5\u53e3api\u6587\u6863",level:3},{value:"\u4e8c\u3001\u6784\u9020\u7b7e\u540d",id:"\u4e8c\u6784\u9020\u7b7e\u540d",level:2},{value:"1\u3001\u5c06\u8bf7\u6c42\u53c2\u6570\u6309\u7167\u540d\u79f0\u8fdb\u884c\u5347\u5e8f\u6392\u5217",id:"1\u5c06\u8bf7\u6c42\u53c2\u6570\u6309\u7167\u540d\u79f0\u8fdb\u884c\u5347\u5e8f\u6392\u5217",level:3},{value:"2\u3001\u6784\u9020\u88ab\u7b7e\u540d\u53c2\u6570\u4e32",id:"2\u6784\u9020\u88ab\u7b7e\u540d\u53c2\u6570\u4e32",level:3},{value:"\u4e09\u3001\u751f\u6210\u7b7e\u540d\u503c",id:"\u4e09\u751f\u6210\u7b7e\u540d\u503c",level:2},{value:"\u56db\u3001SDK\u4e2d\u5185\u7f6e\u5904\u7406\u7b7e\u540d\u5904\u7406\u7b97\u6cd5",id:"\u56dbsdk\u4e2d\u5185\u7f6e\u5904\u7406\u7b7e\u540d\u5904\u7406\u7b97\u6cd5",level:2}],i={toc:p},u="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(u,(0,r.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sms\u534f\u8bae"},"SMS\u534f\u8bae"),(0,a.kt)("h2",{id:"\u4e00\u51c6\u5907"},"\u4e00\u3001\u51c6\u5907"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u751f\u6210 API \u8bf7\u6c42\u4e2d\u7684\u7b7e\u540d\uff08Signature\uff09 \u65f6\uff0c\u9700\u8981\u63d0\u4f9b AccessKeyId \u548c AccessKeySecret\u53ef\u4ece\u63a7\u5236\u53f0\u8d26\u6237\u4e2d\u83b7\u53d6\uff0c\u5177\u4f53\u83b7\u53d6\u65b9\u6cd5\u5982\u4e0b\uff1a")),(0,a.kt)("h3",{id:"1\u767b\u5f55uspeedo\u7cfb\u7edf"},"1\u3001\u767b\u5f55",(0,a.kt)("a",{parentName:"h3",href:"https://console.uspeedo.com"},"uSpeedo\u7cfb\u7edf")),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u8d26\u53f7\u8981\u5148",(0,a.kt)("a",{parentName:"p",href:"https://console.uspeedo.com/signin"},"\u6ce8\u518c")),(0,a.kt)("h3",{id:"2\u83b7\u53d6\u5bc6\u94a5accesskeyid\u548caccesskeysecret"},"2\u3001\u83b7\u53d6\u5bc6\u94a5AccessKeyId\u548cAccessKeySecret"),(0,a.kt)("p",null,"\u8fdb\u5165",(0,a.kt)("a",{parentName:"p",href:"https://console.uspeedo.com"},"Dashboard"),"\u9875\u9762\uff0c\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Key",src:n(223).Z,width:"2072",height:"628"})),(0,a.kt)("p",null,"\u70b9\u51fb\u4e0a\u56feGENERATE\u6309\u94ae\u751f\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeyId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeySecret")),(0,a.kt)("p",null,"\u8fd9\u91cc\u5047\u8bbe\u83b7\u53d6\u7684\u5bc6\u94a5\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'AccessKeyId := ""\nAccessKeySecret := ""\n')),(0,a.kt)("h3",{id:"3\u83b7\u53d6\u8981\u8c03\u7528\u7684\u63a5\u53e3api\u6587\u6863"},"3\u3001\u83b7\u53d6\u8981\u8c03\u7528\u7684\u63a5\u53e3\uff0c",(0,a.kt)("a",{parentName:"h3",href:"http://baidu.com"},"API\u6587\u6863")),(0,a.kt)("p",null,"\u6211\u4eec\u4ee5",(0,a.kt)("a",{parentName:"p",href:"http://uspeedo.page.ucloudadmin.com/api-doc/USMS/%E6%8E%A7%E5%88%B6%E5%8F%B0API/CreateUSMSTemplate.html"},"\u7533\u8bf7\u77ed\u4fe1\u6a21\u7248API"),"\u4e3a\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    "Action": "CreateUSMSTemplate",\n    "AccountId": 10000,\n    "TemplateName": "this is a test template",\n    "Template": "test template"\n    "Purpose": 1,\n}\n')),(0,a.kt)("h2",{id:"\u4e8c\u6784\u9020\u7b7e\u540d"},"\u4e8c\u3001\u6784\u9020\u7b7e\u540d"),(0,a.kt)("p",null,"\u751f\u6210\u7b7e\u540d\u65b9\u9996\u5148\u5c06\u6240\u6709\u53c2\u6570\u548c\u503c\u653e\u5165\u4e00\u4e2amap \u4e2d\uff0c\u5e76\u6309\u7167 key \u503c\u5347\u5e8f\u6392\u5217\u3002\u7136\u540e\u5c06\u6240\u6709\u53c2\u6570\u62fc\u63a5\u8d77\u6765\uff0c\u7ec4\u6210\u7b7e\u540d\u539f\u6587\u3002\u6700\u540e\u4f7f\u7528 SHA1\u7b7e\u540d\u539f\u6587\u8fdb\u884c\u7b7e\u540d\u3002\u82e5\u63a5\u53e3\u4e2d\u9700\u643a\u5e26\u56fe\u7247/\u89c6\u9891\u7b49\u6587\u4ef6\u4e0a\u4f20\u8bf7\u6c42\uff0c\u6587\u4ef6\u6d41\u4e0d\u53c2\u4e0e\u7b7e\u540d\uff0c\u8bf7\u81ea\u884c\u5c06\u6587\u4ef6\u8f6c\u6362\u6210\u6587\u4ef6\u6d41\u5f62\u5f0f\uff0c\u4e14\u4ee5\u6587\u4ef6\u6d41\u683c\u5f0f\u8bf7\u6c42\u3002"),(0,a.kt)("h3",{id:"1\u5c06\u8bf7\u6c42\u53c2\u6570\u6309\u7167\u540d\u79f0\u8fdb\u884c\u5347\u5e8f\u6392\u5217"},"1\u3001\u5c06\u8bf7\u6c42\u53c2\u6570\u6309\u7167\u540d\u79f0\u8fdb\u884c\u5347\u5e8f\u6392\u5217"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u83b7\u53d6\u8bf7\u6c42\u4e2d\u7684\u8bf7\u6c42\u62a5\u6587\u4e3b\u4f53\uff08request body\uff09\u5e76\u6309\u7167\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u952e\u503c ASCII \u7801\u9012\u589e\u6392\u5e8f\uff08\u5b57\u6bcd\u5347\u5e8f\u6392\u5e8f\uff09\uff0c\u5982\u679c\u9047\u5230\u76f8\u540c\u5b57\u7b26\u5219\u6309\u7167\u7b2c\u4e8c\u4e2a\u5b57\u7b26\u7684\u952e\u503c ASCII \u7801\u9012\u589e\u6392\u5e8f\uff0c\u4ee5\u6b64\u7c7b\u63a8")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    "AccountId": 10000,\n    "Action": "CreateUSMSTemplate",\n    "Purpose": 1,\n    "Template": "test template",\n    "TemplateName": "this is a test template",\n}\n')),(0,a.kt)("h3",{id:"2\u6784\u9020\u88ab\u7b7e\u540d\u53c2\u6570\u4e32"},"2\u3001\u6784\u9020\u88ab\u7b7e\u540d\u53c2\u6570\u4e32"),(0,a.kt)("p",null,"\u88ab\u7b7e\u540d\u4e32\u7684\u6784\u9020\u89c4\u5219\u4e3a: \u88ab\u7b7e\u540d\u4e32 = \u6240\u6709\u8bf7\u6c42\u53c2\u6570\u62fc\u63a5(\u65e0\u9700 HTTP \u8f6c\u4e49)\u3002\u5e76\u5728\u672c\u7b7e\u540d\u4e32\u7684\u7ed3\u5c3e\u62fc\u63a5 API \u5bc6\u94a5\u7684\u79c1\u94a5\uff08AccessKeySecret\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AccountId60000051ActionCreateUSMSTemplateInternationaltruePurpose1Templatethis is a test templateTemplateNametest template AccountId60000051ActionCreateUSMSTemplateInternationaltruePurpose1Templatethis is a test templateTemplateNametest templateYmZmYWJiZTItZmFlNC00MWMwLTk4MzUtOWM5NjZhZjhhODJm\n")),(0,a.kt)("p",null,"TODO: \u9700\u8981\u786e\u8ba4\u6211\u4eecSDK\u7684\u89c4\u5219\u662f\u5426\u548cucloud\u7edf\u4e00\uff0c\u5173\u4e8e\u7a7a\u683c\u548c\u81ea\u5b9a\u4e49\u7b26\u53f7\u600e\u4e48\u8bf4\uff1f"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e bool \u7c7b\u578b\uff0c\u5e94\u7f16\u7801\u4e3a true/false"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6d6e\u70b9\u6570\u7c7b\u578b\uff0c\u5982\u679c\u5c0f\u6570\u90e8\u5206\u4e3a 0\uff0c\u5e94\u4ec5\u4fdd\u7559\u6574\u6570\u90e8\u5206\uff0c\u5982 42.0 \u5e94\u4fdd\u7559 42"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6d6e\u70b9\u6570\u7c7b\u578b\uff0c\u4e0d\u80fd\u4f7f\u7528\u79d1\u5b66\u8ba1\u6570\u6cd5")),(0,a.kt)("h2",{id:"\u4e09\u751f\u6210\u7b7e\u540d\u503c"},"\u4e09\u3001\u751f\u6210\u7b7e\u540d\u503c"),(0,a.kt)("p",null,"\u4f7f\u7528SHA1\u7f16\u7801\u88ab\u7b7e\u540d\u53c2\u6570\u4e32\uff0c\u751f\u6210\u8bf7\u6c42\u7b7e\u540d"),(0,a.kt)("h2",{id:"\u56dbsdk\u4e2d\u5185\u7f6e\u5904\u7406\u7b7e\u540d\u5904\u7406\u7b97\u6cd5"},"\u56db\u3001SDK\u4e2d\u5185\u7f6e\u5904\u7406\u7b7e\u540d\u5904\u7406\u7b97\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/uSpeedo/usms-sdk-go/um/auth"\n)\n\nfunc main() {\n    params := map[string]interface{} {\n        "Action": "CreateUSMSTemplate",\n        "AccountId": um.Int(600000),\n        "Purpose": um.Int(1),\n        "International": true,\n        "TemplateName": um.String("test template"),\n        "Template": um.String("this is a test template"),\n    }\n    r := auth.CalculateSignature(params, AccessKeySecret)\n    fmt.Print("r", r)\n}\n')))}m.isMDXComponent=!0},223:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/key-35bd346d7d03ea294d65a3fede977a7f.png"}}]);