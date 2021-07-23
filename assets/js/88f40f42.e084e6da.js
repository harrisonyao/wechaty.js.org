(self.webpackChunk=self.webpackChunk||[]).push([[5193],{5318:function(t,e,a){"use strict";a.d(e,{Zo:function(){return h},kt:function(){return d}});var r=a(7378);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),l=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),p=l(a),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return a?r.createElement(m,i(i({ref:e},h),{},{components:a})):r.createElement(m,i({ref:e},h))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5626:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},8948:function(t,e,a){"use strict";a.d(e,{C:function(){return o},Z:function(){return i}});var r=a(353),n=a(5626);function o(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(s)return e+a;var h=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+h:h}(o,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},8045:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return u},default:function(){return d}});var r=a(9603),n=a(120),o=(a(7378),a(5318)),i=a(8948),s=["components"],c={sidebar_label:"OSS.Chat",title:"Case Study: OSS.Chat"},l=void 0,h={unversionedId:"showcases/osschat-bot",id:"showcases/osschat-bot",isDocsHomePage:!1,title:"Case Study: OSS.Chat",description:"A bridge to the Apache Way in China",source:"@site/docs/showcases/osschat-bot.mdx",sourceDirName:"showcases",slug:"/showcases/osschat-bot",permalink:"/docs/showcases/osschat-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/showcases/osschat-bot.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1627048928,formattedLastUpdatedAt:"7/23/2021",frontMatter:{sidebar_label:"OSS.Chat",title:"Case Study: OSS.Chat"},sidebar:"docs",previous:{title:"Showcases: Index",permalink:"/docs/showcases/"},next:{title:"Rui.BOT",permalink:"/docs/showcases/rui-bot"}},u=[{value:"A bridge to the Apache Way in China",id:"a-bridge-to-the-apache-way-in-china",children:[]},{value:"What is OSS.Chat BOT",id:"what-is-osschat-bot",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Apache Incubator Proposal",id:"apache-incubator-proposal",children:[]},{value:"Mentors",id:"mentors",children:[]},{value:"Committers",id:"committers",children:[]},{value:"Talk from ApacheCon 2020: OSS.Chat - A bridge to the Apache Way in China",id:"talk-from-apachecon-2020-osschat---a-bridge-to-the-apache-way-in-china",children:[]},{value:"Slides",id:"slides",children:[]},{value:"Links",id:"links",children:[]},{value:"Credit",id:"credit",children:[]}],p={toc:u};function d(t){var e=t.components,a=(0,n.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("img",{alt:"Friday.BOT",src:(0,i.Z)("img/docs/osschat-bot.svg"),width:"256",height:"256"}),(0,o.kt)("h2",{id:"a-bridge-to-the-apache-way-in-china"},"A bridge to the Apache Way in China"),(0,o.kt)("p",null,"The mission of the OSS.Chat project is to bridge the three-way communication and translation barriers between WeChat and other social platforms (future) and GitHub Issues and mailing lists to the open-source development community, making ASF's cultural, technical, and collaborative processes acceptable quickly and easily, rather than stumbling from the start."),(0,o.kt)("h2",{id:"what-is-osschat-bot"},"What is OSS.Chat BOT"),(0,o.kt)("p",null,"With Chatbot, an automated process mechanism, developers can more easily share and communicate information about the development of open-source projects."),(0,o.kt)("p",null,"In particular, the archiving and secondary induction of open information to the community is one of the things that we think is very meaningful."),(0,o.kt)("p",null,"Through OSS.Chat project, we hope to further promote, disseminate, and even optimize the culture, technology, and collaboration of the Apache project community."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"use osschat is so easy, just need 4 steps, please refer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kaiyuanshe/osschat/blob/master/docs/pages/how-to-use.md"},"How to use OSS.Chat")),(0,o.kt)("p",null,"Here's an video recorded from our weekly meeeting, introduced the OSS Bot and how to sync GitHub issues with WeChat rooms for any open-source projects."),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",paddingTop:"30px",height:0,overflow:"hidden"}},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/HNksCmm_pvY",allowFullScreen:!0,webkitallowfullscreen:"true",frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"YouTube: ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/HNksCmm_pvY"},"https://youtu.be/HNksCmm_pvY"))),(0,o.kt)("h2",{id:"apache-incubator-proposal"},"Apache Incubator Proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/OSSBotProposal"},"Incubator OSSChat Proposal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shimo.im/docs/wGHydDxvWGjWKgDK"},"Weekly Meeting Notes"))),(0,o.kt)("h2",{id:"mentors"},"Mentors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/clr-apache"},"Craig L. Russell"),", Chairman, Apache Software Fundation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/JunpingDu"},"Junping Du"),", Chairman, Tencent Open Source Alliance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tedliu1"},"Ted Liu"),", Chairman, kaiyuanshe")),(0,o.kt)("h2",{id:"committers"},"Committers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zhuangbiaowei"},"Zhuang Biaowei"),", ",(0,o.kt)("a",{parentName:"li",href:"http://www.zhuangbiaowei.com/blog/"},"(\u5e84\u8868\u4f1f)"),", Product Manager from Huawei technologies co. ltd"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/huan"},"Huan")," ",(0,o.kt)("a",{parentName:"li",href:"http://linkedin.com/in/zixia"},"(\u674e\u5353\u6853)"),", ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/tvp/138"},"Tencent TVP of Chatbot"),", ",(0,o.kt)("a",{parentName:"li",href:"mailto:huan@kaiyuanshe.org"},"huan@kaiyuanshe.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lijiarui"},"Rui"),(0,o.kt)("a",{parentName:"li",href:"https://lijiarui.github.io"},"(\u674e\u4f73\u82ae)"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," Co-author, Founder of ",(0,o.kt)("a",{parentName:"li",href:"https://www.botorange.com/"},"JuziBot"))),(0,o.kt)("h2",{id:"talk-from-apachecon-2020-osschat---a-bridge-to-the-apache-way-in-china"},"Talk from ApacheCon 2020: OSS.Chat - A bridge to the Apache Way in China"),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",paddingTop:"30px",height:0,overflow:"hidden"}},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/Jle85e6m0fU",allowFullScreen:!0,webkitallowfullscreen:"true",frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OSS.Chat - \u901a\u5f80 Apache Way \u7684\u4e00\u9053\u8679\u6865: ",(0,o.kt)("a",{parentName:"p",href:"https://coscon.kaiyuanshe.cn/#activity/agenda?pid=135"},"https://coscon.kaiyuanshe.cn/#activity/agenda?pid=135"))),(0,o.kt)("h2",{id:"slides"},"Slides"),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",paddingTop:"30px",height:0,overflow:"hidden"}},(0,o.kt)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vTbKXWSBCe7BI_FFpQvs9Cox--zEdejs-HZuE9dys6lv9W8ywtaK41j2kghwvmav9AXVIu0Asa-X0OB/embed?start=true&loop=true&delayms=3000",allowFullScreen:!0,webkitallowfullscreen:"true",frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Slides: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1ws1loxT0JVzNkZO_7G5Xx8T3mDvAmh8PCZ-sAs9rfqM/edit?usp=sharing"},"https://docs.google.com/presentation/d/1ws1loxT0JVzNkZO_7G5Xx8T3mDvAmh8PCZ-sAs9rfqM/edit?usp=sharing"))),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dashboard: ",(0,o.kt)("a",{parentName:"li",href:"https://oss.chat"},"https://oss.chat")),(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kaiyuanshe/osschat"},"https://github.com/kaiyuanshe/osschat"))),(0,o.kt)("h2",{id:"credit"},"Credit"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kaiyuanshe.cn"},"\u5f00\u6e90\u793e"),", \u7531 CSDN\u3001GitCafe\u3001GNOME.Asia\u3001\u5fae\u8f6f\u5f00\u653e\u6280\u672f\u516c\u53f8\u3001\u4f18\u9e92\u9e9f\u793e\u533a\u8054\u5408\u521b\u59cb\uff0c\u7531\u56fd\u5185\u5916\u652f\u6301\u5f00\u6e90\u7684\u4f01\u4e1a\u3001\u793e\u533a\u53ca\u4e2a\u4eba\uff0c\u4f9d\u201c\u8d21\u732e\u3001\u5171\u8bc6\u3001\u5171\u6cbb\u201d\u539f\u5219\uff0c\u6240\u7ec4\u7ec7\u7684\u5f00\u6e90\u8054\u76df\uff0c\u65e8\u5728\u5171\u521b\u5065\u5eb7\u53ef\u6301\u7eed\u53d1\u5c55\u7684\u5f00\u6e90\u751f\u6001\u4f53\u7cfb\uff0c\u5e76\u63a8\u52a8\u4e2d\u56fd\u5f00\u6e90\u793e\u533a\u6210\u4e3a\u5168\u7403\u5f00\u6e90\u8f6f\u4ef6\u7684\u79ef\u6781\u53c2\u4e0e\u53ca\u8d21\u732e\u8005\u3002"))}d.isMDXComponent=!0}}]);