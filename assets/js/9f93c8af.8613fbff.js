"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,g=m["".concat(d,".").concat(u)]||m[u]||p[u]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Use The Email Console",sidebar_position:1},r="Use the Email console",s={unversionedId:"email/console",id:"email/console",title:"Use the Email console",description:"1 Settings and Configuration",source:"@site/docs/email/console.md",sourceDirName:"email",slug:"/email/console",permalink:"/docs/email/console",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/dev/docs/email/console.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Use The Email Console",sidebar_position:1},sidebar:"email",previous:{title:"Before you begin",permalink:"/docs/email/before-start"},next:{title:"index",permalink:"/docs/email/api/"}},d={},l=[{value:"1 Settings and Configuration",id:"1-settings-and-configuration",level:3},{value:"1.1 Domain",id:"11-domain",level:4},{value:"1.2 Sender",id:"12-sender",level:4},{value:"2 Email template Creation and Editing",id:"2-email-template-creation-and-editing",level:3},{value:"1. Create Email Template.",id:"1-create-email-template",level:4},{value:"2. Edit Email Content.",id:"2-edit-email-content",level:4},{value:"2.1 MTE",id:"21-mte",level:5},{value:"2.2 drag&amp;drop editor",id:"22-dragdrop-editor",level:5},{value:"3. Email Sending and Scheduling",id:"3-email-sending-and-scheduling",level:3},{value:"4 Query Email details",id:"4-query-email-details",level:3},{value:"5 Help and Support",id:"5-help-and-support",level:3}],c={toc:l},m="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-the-email-console"},"Use the Email console"),(0,a.kt)("h3",{id:"1-settings-and-configuration"},"1 Settings and Configuration"),(0,a.kt)("h4",{id:"11-domain"},"1.1 Domain"),(0,a.kt)("p",null,"Click the New Domain button.\n",(0,a.kt)("img",{src:n(8407).Z,width:"945",height:"462"}),"\nEnter the domain name creation page, select the domain name type, fill in a second-level domain name, and submit.\n",(0,a.kt)("img",{src:n(8406).Z,width:"945",height:"827"})),(0,a.kt)("p",null,"Click the config button to enter the domain resolution verification page. As shown in the figure, fill in the configuration information of the four parameters in turn on the domain resolution page of your domain management platform.\n",(0,a.kt)("img",{src:n(835).Z,width:"945",height:"460"}),"\nCheck the resolution configuration in your domain management platform against the data provided by the console.\n",(0,a.kt)("img",{src:n(8826).Z,width:"945",height:"462"}),"\nAfter confirming that it is correct, click the Verify Configuration button on the console page. Once you see the status change to Passed, complete domain verification. If you encounter problems, you can contact the corresponding business manager.\n",(0,a.kt)("img",{src:n(5001).Z,width:"945",height:"914"}),"\n",(0,a.kt)("img",{src:n(3394).Z,width:"945",height:"462"})),(0,a.kt)("h4",{id:"12-sender"},"1.2 Sender"),(0,a.kt)("p",null,"Click the New Sender button.\n",(0,a.kt)("img",{src:n(5585).Z,width:"945",height:"462"}),"\nEnter the sender creation page, fill in the email address and nickname corresponding to the domain name, and submit. Complete the sender addition.\n",(0,a.kt)("img",{src:n(781).Z,width:"841",height:"464"})),(0,a.kt)("h3",{id:"2-email-template-creation-and-editing"},"2 Email template Creation and Editing"),(0,a.kt)("h4",{id:"1-create-email-template"},"1. Create Email Template."),(0,a.kt)("p",null,"   According to the picture, find the template management list page, click the New Template button, and select an editor.\n",(0,a.kt)("img",{src:n(9795).Z,width:"945",height:"454"})),(0,a.kt)("p",null,"Editor explanation\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"drag & drop editor\uff1aEasily build beautiful emails! Drag content blocks to create the layout you want. Insert your text and images. Choose color theme or make your own."),(0,a.kt)("li",{parentName:"ul"},"MTE\uff1aMulti-function Text Editor\uff0cThe original editor, great for basic emails, quick sends and completely custom HTML. You can still add images and text combinations")),(0,a.kt)("h4",{id:"2-edit-email-content"},"2. Edit Email Content."),(0,a.kt)("h5",{id:"21-mte"},"2.1 MTE"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Click New Template"),", select MTE, enter the page as shown in the figure, edit and fill in the following information: Template Name, Subject, Email Type, Preview Text and Content.\nEmail Type explanation\uff1a\nThe types of email sending are categorized into trigger-based and batch-based. Trigger-based emails, also known as transactional emails, refer to time-sensitive messages triggered for individual recipients, such as verification code emails or invoice emails. Batch-based emails, on the other hand, are broadcasts that simultaneously send information to many recipients, such as marketing campaigns or newsletters.\n",(0,a.kt)("img",{src:n(4860).Z,width:"945",height:"462"})),(0,a.kt)("h5",{id:"22-dragdrop-editor"},"2.2 drag&drop editor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Click New Template"),", select drag&drop editor, enter the page as shown in the figure, edit and fill in the following information: Template Name, Subject, Email Type, Preview Text and Content."),(0,a.kt)("li",{parentName:"ul"},"You can design the layout first, as shown in the figure, click the Blocks design partition on the right side of the editor; then click Content to design the specific display form, which supports adding pictures, text, buttons, etc.\n",(0,a.kt)("img",{src:n(3442).Z,width:"945",height:"462"}))),(0,a.kt)("h3",{id:"3-email-sending-and-scheduling"},"3. Email Sending and Scheduling"),(0,a.kt)("p",null,"Click Send Email button to create a campaign.\n",(0,a.kt)("img",{src:n(9405).Z,width:"945",height:"443"}),"\nCreate a sending activity and fill in the information. Submit to complete the sending activity creation.\n",(0,a.kt)("img",{src:n(1258).Z,width:"945",height:"452"})),(0,a.kt)("h3",{id:"4-query-email-details"},"4 Query Email details"),(0,a.kt)("p",null,"After creating a campaign, you can view the information on the list page.\n",(0,a.kt)("img",{src:n(8895).Z,width:"945",height:"456"}),"\nCampaigns can be canceled before they are sent.\n",(0,a.kt)("img",{src:n(3626).Z,width:"945",height:"462"})),(0,a.kt)("p",null,"After sending, click the details to view the sent data.\nSubmission status: It indicates the status of submitting the fee deduction, and successful submission means that the fee for an email has been successfully deducted.\n",(0,a.kt)("img",{src:n(9323).Z,width:"945",height:"462"})),(0,a.kt)("h3",{id:"5-help-and-support"},"5 Help and Support"),(0,a.kt)("p",null,"Please Contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@uspeedo.com"},"support@uspeedo.com")," If You Have Any Questions."))}p.isMDXComponent=!0},8407:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_1-46adf37d7e13a842246d14e8c47ccf94.png"},4860:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_10-fe8b731aa3b60212483bfc26c9d90ead.png"},3442:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_11-fe0e64eb76faeb31bbfa1448de99b590.png"},9405:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_12-f43d0cb53d1278489c5d4fad973536e9.png"},1258:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_13-c45d3b4475b1014933f1476969e5290e.png"},8895:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_14-828a13f6b5d51722cd7201234334397a.png"},3626:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_15-94f02e1099a51254c8abfff827e4075a.png"},9323:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_16-2f2accd8baae5dc63de610249c43d4aa.png"},8406:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_2-e3758128362be7c5ef03659cec6f810d.png"},835:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_3-5bf99146c54089db2278cd0207559e4d.png"},8826:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_4-9551ff4a36dcbb32c26b5b9843c6aeac.png"},5001:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_5-5c420abb2bedddd2d1fbf7ad9174fe25.png"},3394:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_6-dfa053c072bc93579521d73baff38273.png"},5585:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_7-d1404265de4e87e88a5c0ec42f747929.png"},781:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_8-653f9ec212e23813a284465e9c71d9b9.png"},9795:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/guide_9-1e1a9e6118bd94d9dea5c238b2b8b14b.png"}}]);