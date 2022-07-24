"use strict";(self.webpackChunkmy_web=self.webpackChunkmy_web||[]).push([[173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},l="Markdown",i={unversionedId:"tool_note/markdown",id:"tool_note/markdown",title:"Markdown",description:"Basic",source:"@site/docs/tool_note/markdown.md",sourceDirName:"tool_note",slug:"/tool_note/markdown",permalink:"/doc/docs/tool_note/markdown",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tool_note/markdown.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/doc/docs/tool_note/git"},next:{title:"LeetCode",permalink:"/doc/docs/category/leetcode"}},d={},c=[{value:"Basic",id:"basic",level:2},{value:"Heading",id:"heading",level:3},{value:"Bold",id:"bold",level:3},{value:"Italic",id:"italic",level:3},{value:"Blockquote",id:"blockquote",level:3},{value:"Ordered List",id:"ordered-list",level:3},{value:"Unordered List",id:"unordered-list",level:3},{value:"Code",id:"code",level:3},{value:"Horizontal Rule",id:"horizontal-rule",level:3},{value:"Link",id:"link",level:3},{value:"Image",id:"image",level:3},{value:"Table",id:"table",level:3},{value:"Alignment",id:"alignment",level:4},{value:"Task Lists",id:"task-lists",level:3},{value:"Reference",id:"reference",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"markdown"},"Markdown"),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)("h3",{id:"heading"},"Heading"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"# H1 \n## H2\n### H3\n#### H4\n##### H5\n###### H6\n")),(0,a.kt)("h3",{id:"bold"},"Bold"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"**bold text**\n")),(0,a.kt)("h3",{id:"italic"},"Italic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"*italicized text*\n")),(0,a.kt)("h3",{id:"blockquote"},"Blockquote"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"> blockquote\n")),(0,a.kt)("h3",{id:"ordered-list"},"Ordered List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"1. first\n2. second\n3. third\n")),(0,a.kt)("h3",{id:"unordered-list"},"Unordered List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"- first\n- second\n- third\n")),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"`code`\n")),(0,a.kt)("h3",{id:"horizontal-rule"},"Horizontal Rule"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"---\n")),(0,a.kt)("h3",{id:"link"},"Link"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"[title](url)\n")),(0,a.kt)("h3",{id:"image"},"Image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"![alt text](image path)\n")),(0,a.kt)("h3",{id:"table"},"Table"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"| Head 1 | Head 2 |\n| ----------- | ----------- |\n| col 1 | col 1|\n| col 2 | col 2| \n")),(0,a.kt)("h4",{id:"alignment"},"Alignment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"left :---\ncenter :---:\nright ---:\n")),(0,a.kt)("h3",{id:"task-lists"},"Task Lists"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"- [x] todo1\n- [ ] todo2 \n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/cheat-sheet/"},"mark down guide"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://emojipedia.org/"},"Emoji")))}u.isMDXComponent=!0}}]);