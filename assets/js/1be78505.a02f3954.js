(self.webpackChunksurface_gentoo_docs=self.webpackChunksurface_gentoo_docs||[]).push([[514,608],{6:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Se}});var a=n(7294),r=n(3905),o=n(2263),l=n(6291),i=n(261),c=n(6010),s=n(3018),u=n(3783),d=n(7898),m=n(5537),p=n(2122),h=function(e){return a.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(4973),g=n(9756),y=n(6742),v=n(3919),b=n(8617),k="menuLinkText_1J2g",E=["items"],C=["item"],Z=["item","onItemClick","activePath"],N=["item","onItemClick","activePath"],_=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=(0,a.memo)((function(e){var t=e.items,n=(0,g.Z)(e,E);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(S,(0,p.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,g.Z)(e,C);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(x,(0,p.Z)({item:t},n));case"link":default:return a.createElement(I,(0,p.Z)({item:t},n))}}function x(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=(0,g.Z)(e,Z),i=n.items,u=n.label,d=n.collapsible,m=_(n,o),h=(0,s.uR)({initialState:function(){return!!d&&(!m&&n.collapsed)}}),f=h.collapsed,y=h.setCollapsed,v=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,s.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:m,collapsed:f,setCollapsed:y}),a.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":f})},a.createElement("a",(0,p.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&m},t[k]=!d,t)),onClick:d?function(e){e.preventDefault(),v()}:void 0,href:d?"#":void 0},l),u),a.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},a.createElement(T,{items:i,tabIndex:f?-1:0,onItemClick:r,activePath:o})))}function I(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,g.Z)(e,N),l=t.href,i=t.label,s=_(t,r);return a.createElement("li",{className:"menu__list-item",key:i},a.createElement(y.Z,(0,p.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:l},(0,v.Z)(l)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,v.Z)(l)?i:a.createElement("span",null,i,a.createElement(b.Z,null))))}var j="sidebar_15mo",L="sidebarWithHideableNavbar_267A",P="sidebarHidden_2kNb",B="sidebarLogo_3h0W",w="menu_Bmed",A="menuWithAnnouncementBar_2WvA",D="collapseSidebarButton_1CGd",M="collapseSidebarButtonIcon_3E-R";function F(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",D),onClick:t},a.createElement(h,{className:M}))}function O(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,i=e.isHidden,u=function(){var e=(0,s.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,s.LU)(),h=p.navbar.hideOnScroll,f=p.hideableSidebar,g=(0,s.nT)().isClosed;return a.createElement("div",{className:(0,c.Z)(j,(t={},t[L]=h,t[P]=i,t))},h&&a.createElement(m.Z,{tabIndex:-1,className:B}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",w,(n={},n[A]=!g&&u,n))},a.createElement("ul",{className:"menu__list"},a.createElement(T,{items:o,activePath:r}))),f&&a.createElement(F,{onClick:l}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(T,{items:n,activePath:r,onItemClick:function(){return t()}}))};function H(e){return a.createElement(s.Cv,{component:R,props:e})}var z=a.memo(O),W=a.memo(H);function U(e){var t=(0,u.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(z,e),r&&a.createElement(W,e))}var Y={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$={Prism:n(7410).Z,theme:Y};function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var K=/\r\n|\r|\n/,G=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},q=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Q=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=J({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=J({},n,{backgroundColor:null}),r};function X(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var ee=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),V(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Q(e.theme,e.language):void 0;return t.themeDict=n})),V(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=J({},X(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?J({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),V(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),V(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=J({},X(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?J({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),V(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=q(u,d.type),d.alias&&(u=q(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(K),p=m.length;i.push({types:u,content:m[0]});for(var h=1;h<p;h++)G(i),c.push(i=[]),i.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return G(i),c}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var te=n(7594),ne=n.n(te),ae={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},re=n(5350),oe=function(){var e=(0,s.LU)().prism,t=(0,re.Z)().isDarkTheme,n=e.theme||ae,a=e.darkTheme||n;return t?a:n},le="codeBlockContainer_K1bP",ie="codeBlockContent_hGly",ce="codeBlockTitle_eoMF",se="codeBlock_23N8",ue="copyButton_Ue-o",de="codeBlockLines_39YC",me=/{([\d,-]+)}/,pe=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function he(e){var t=e.children,n=e.className,r=e.metastring,o=e.title,l=(0,s.LU)().prism,i=(0,a.useState)(!1),u=i[0],d=i[1],m=(0,a.useState)(!1),h=m[0],g=m[1];(0,a.useEffect)((function(){g(!0)}),[]);var y=(0,s.bc)(r)||o,v=(0,a.useRef)(null),b=[],k=oe(),E=Array.isArray(t)?t.join(""):t;if(r&&me.test(r)){var C=r.match(me)[1];b=ne()(C).filter((function(e){return e>0}))}var Z=n&&n.replace(/language-/,"");!Z&&l.defaultLanguage&&(Z=l.defaultLanguage);var N=E.replace(/\n$/,"");if(0===b.length&&void 0!==Z){for(var _,T="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return pe(["js","jsBlock"]);case"jsx":case"tsx":return pe(["js","jsBlock","jsx"]);case"html":return pe(["js","jsBlock","html"]);case"python":case"py":return pe(["python"]);default:return pe()}}(Z),x=E.replace(/\n$/,"").split("\n"),I=0;I<x.length;){var j=I+1,L=x[I].match(S);if(null!==L){switch(L.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":T+=j+",";break;case"highlight-start":_=j;break;case"highlight-end":T+=_+"-"+(j-1)+","}x.splice(I,1)}else I+=1}b=ne()(T),N=x.join("\n")}var P=function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}r.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(N),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.createElement(ee,(0,p.Z)({},$,{key:String(h),theme:k,code:N,language:Z}),(function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,l=e.getTokenProps;return a.createElement("div",{className:le},y&&a.createElement("div",{style:n,className:ce},y),a.createElement("div",{className:(0,c.Z)(ie,Z)},a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,se,"thin-scrollbar"),style:n},a.createElement("code",{className:de},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t});return b.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,p.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,p.Z)({key:t},l({token:e,key:t})))})))})))),a.createElement("button",{ref:v,type:"button","aria-label":(0,f.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(ue,"clean-btn"),onClick:P},u?a.createElement(f.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(f.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var fe=n(6159),ge="details_1VDD";function ye(e){var t=Object.assign({},e);return a.createElement(s.PO,(0,p.Z)({},t,{className:(0,c.Z)("alert alert--info",ge,t.className)}))}var ve={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(he,e):a.createElement("code",e)},a:function(e){return a.createElement(y.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(he,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(ye,(0,p.Z)({},e,{summary:n}),r)},h1:(0,fe.Z)("h1"),h2:(0,fe.Z)("h2"),h3:(0,fe.Z)("h3"),h4:(0,fe.Z)("h4"),h5:(0,fe.Z)("h5"),h6:(0,fe.Z)("h6")},be=n(4608),ke="backToTopButton_35hR",Ee="backToTopButtonShow_18ls";function Ce(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Ze=function(){var e,t=Ce(),n=t.smoothScrollTop,r=t.cancelScrollToTop,o=(0,a.useState)(!1),l=o[0],i=o[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||r(),n<300)i(!1);else if(a){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&i(!0)}else i(!1)}}),[]),a.createElement("button",{className:(0,c.Z)("clean-btn",ke,(e={},e[Ee]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},Ne=n(5977),_e={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function Te(e){var t,n,l,u=e.currentDocRoute,d=e.versionMetadata,m=e.children,p=(0,o.Z)().isClient,g=d.pluginId,y=d.version,v=u.sidebar,b=v?d.docsSidebars[v]:void 0,k=(0,a.useState)(!1),E=k[0],C=k[1],Z=(0,a.useState)(!1),N=Z[0],_=Z[1],T=(0,a.useCallback)((function(){N&&_(!1),C(!E)}),[N]);return a.createElement(i.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:y,tag:(0,s.os)(g,y)}},a.createElement("div",{className:_e.docPage},a.createElement(Ze,null),b&&a.createElement("aside",{className:(0,c.Z)(_e.docSidebarContainer,(t={},t[_e.docSidebarContainerHidden]=E,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(_e.docSidebarContainer)&&E&&_(!0)}},a.createElement(U,{key:v,sidebar:b,path:u.path,onCollapse:T,isHidden:N}),N&&a.createElement("div",{className:_e.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},a.createElement(h,{className:_e.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(_e.docMainContainer,(n={},n[_e.docMainContainerEnhanced]=E||!b,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",_e.docItemWrapper,(l={},l[_e.docItemWrapperEnhanced]=E,l))},a.createElement(r.Zo,{components:ve},m)))))}var Se=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,Ne.LX)(r.pathname,e)}));return o?a.createElement(Te,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):a.createElement(be.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(9756),r=n(2122),o=n(7294),l=n(6010),i=n(4973),c=n(3018),s="enhancedAnchor_2LWZ",u="h1Heading_27L5",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0,className:u}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,r=e.id,u=(0,a.Z)(e,d),m=(0,c.LU)().navbar.hideOnScroll;return r?o.createElement(t,u,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[s]=!m,n)),id:r}),u.children,o.createElement("a",{className:"hash-link",href:"#"+r,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,u)});var t}},4608:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(261),o=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);