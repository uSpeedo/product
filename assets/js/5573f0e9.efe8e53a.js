"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,g=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"2 Email template Creation and Editing",sidebar_position:2},o="Email template Creation and Editing",l={unversionedId:"email/console/email-content",id:"email/console/email-content",title:"Email template Creation and Editing",description:"1. Create Email Template.",source:"@site/docs/email/console/email-content.md",sourceDirName:"email/console",slug:"/email/console/email-content",permalink:"/docs/email/console/email-content",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/dev/docs/email/console/email-content.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"2 Email template Creation and Editing",sidebar_position:2},sidebar:"email",previous:{title:"1 Settings and Configuration",permalink:"/docs/email/console/setting"},next:{title:"3 Email Sending and Scheduling",permalink:"/docs/email/console/email-schedule"}},s={},c=[{value:"1. Create Email Template.",id:"1-create-email-template",level:2},{value:"2 Edit Email Content.",id:"2-edit-email-content",level:2},{value:"2.1 MTE",id:"21-mte",level:5},{value:"2.2 drag&amp;drop editor",id:"22-dragdrop-editor",level:5}],d={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"email-template-creation-and-editing"},"Email template Creation and Editing"),(0,a.kt)("h2",{id:"1-create-email-template"},"1. Create Email Template."),(0,a.kt)("p",null,"According to the picture, find the template management list page, click the New Template button, and select an editor.\n",(0,a.kt)("img",{src:n(9795).Z,width:"945",height:"454"})),(0,a.kt)("p",null,"Editor explanation\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"drag & drop editor\uff1aEasily build beautiful emails! Drag content blocks to create the layout you want. Insert your text and images. Choose color theme or make your own."),(0,a.kt)("li",{parentName:"ul"},"MTE\uff1aMulti-function Text Editor\uff0cThe original editor, great for basic emails, quick sends and completely custom HTML. You can still add images and text combinations")),(0,a.kt)("h2",{id:"2-edit-email-content"},"2 Edit Email Content."),(0,a.kt)("h5",{id:"21-mte"},"2.1 MTE"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Click New Template"),", select MTE, enter the page as shown in the figure, edit and fill in the following information: Template Name, Subject, Email Type, Preview Text and Content.\nEmail Type explanation\uff1a\nThe types of email sending are categorized into trigger-based and batch-based. Trigger-based emails, also known as transactional emails, refer to time-sensitive messages triggered for individual recipients, such as verification code emails or invoice emails. Batch-based emails, on the other hand, are broadcasts that simultaneously send information to many recipients, such as marketing campaigns or newsletters.\n",(0,a.kt)("img",{src:n(4860).Z,width:"945",height:"462"})),(0,a.kt)("h5",{id:"22-dragdrop-editor"},"2.2 drag&drop editor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Click New Template"),", select drag&drop editor, enter the page as shown in the figure, edit and fill in the following information: Template Name, Subject, Email Type, Preview Text and Content."),(0,a.kt)("li",{parentName:"ul"},"You can design the layout first, as shown in the figure, click the Blocks design partition on the right side of the editor; then click Content to design the specific display form, which supports adding pictures, text, buttons, etc.\n",(0,a.kt)("img",{src:n(3442).Z,width:"945",height:"462"}))))}p.isMDXComponent=!0},4860:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_10-fe8b731aa3b60212483bfc26c9d90ead.png"},3442:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_11-fe0e64eb76faeb31bbfa1448de99b590.png"},9795:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_9-1e1a9e6118bd94d9dea5c238b2b8b14b.png"}}]);