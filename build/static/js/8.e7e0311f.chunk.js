(this.webpackJsonpDynonary=this.webpackJsonpDynonary||[]).push([[8],{323:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return n}))},324:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return i}));var n=r(25),a=function(e){var t;return{root:(t={height:"100%",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"2fr 1fr 17fr",gridRowGap:"0.8rem"},Object(n.a)(t,e.breakpoints.up("sm"),{height:"85%",gridRowGap:"1.2rem"}),Object(n.a)(t,"& .disabled",{pointerEvents:"none"}),t),summary:{margin:"1.4rem 0","& > *":{fontSize:"1.6rem",fontWeight:400,color:"var(--label-color)"},"& b":{padding:"0 0.4rem",fontSize:"2rem"}},summaryIcon:{fontSize:"2.4rem",margin:"0 0.4rem"}}},c=function(){return{root:{marginTop:"3.2rem","& ::-webkit-scrollbar":{width:"2px"},"& ::-webkit-scrollbar-track":{background:"none"},"& ::-webkit-scrollbar-thumb":{borderRadius:"25px"}},contentWrap:{marginTop:"2.4rem"},listWrap:{padding:"1.2rem 0.4rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",border:"solid 1px var(--border-color)"},list:{padding:"0 2.4rem",height:"calc(100vh - 24rem)",overflow:"auto"},listItem:{margin:"0.6rem 0"},skeleton:{height:"100%","& > *":{margin:"1.2rem 0",height:"calc(10% - 1.2rem)"}}}},o=function(){return{dialogPaper:{backgroundColor:"var(--bg-color-sec)"},title:{"& > *":{color:"var(--title-color)"}},content:{"& *":{color:"var(--text-color)"}},breakLine:{borderColor:"var(--border-color)"}}},i=function(){return{root:{padding:"2.4rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",width:"35rem",backgroundColor:"var(--bg-color-sec)","& > *":{marginTop:"1.2rem",marginBottom:"1.2rem"}},title:{fontSize:"2.4rem",color:"var(--text-color)"},labelIcon:{fontSize:"3.6rem",color:"var(--text-color)"},forgotPw:{color:"var(--title-color)",opacity:.65,fontWeight:500,fontSize:"1.4rem",textAlign:"right","&:hover":{opacity:1}},icon:{fontSize:"1.8rem",color:"var(--grey)",cursor:"pointer"},visiblePw:{color:"var(--primary-color)"}}}},328:function(e,t,r){"use strict";var n=r(36),a=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(r(0)),o=(0,n(r(37)).default)(c.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}),"Loop");t.default=o},336:function(e,t,r){"use strict";var n=r(36),a=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(r(0)),o=(0,n(r(37)).default)(c.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOffOutlined");t.default=o},337:function(e,t,r){"use strict";var n=r(24),a=r(13),c=r(323),o=r(336),i=r.n(o),s=r(6),l=r(19),u=r(0),d=r(292),b=Object(d.a)((function(){return{root:{margin:"2.4rem 0","& input":{outline:"none",padding:"1.6rem 1.2rem",fontSize:"1.8rem",color:"var(--text-color)",background:"none",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",transition:"all 0.25s","&:focus":{borderColor:"var(--secondary-color)"}}},closeIcon:{position:"absolute",right:"1.4rem",top:"50%",transform:"translateY(-50%)",fontSize:"2.4rem",color:"var(--grey)","&:hover, &:active":{color:"var(--primary-color)"}}}})),f=r(1),j=["onSearch"],h=null;function m(e){var t=e.onSearch,r=Object(c.a)(e,j),o=b(),d=Object(u.useRef)(null),m=Object(u.useState)(!1),v=Object(a.a)(m,2),p=v[0],O=v[1];return Object(f.jsxs)("div",{className:"".concat(o.root," w-100 position-rel"),children:[Object(f.jsx)("input",Object(n.a)({placeholder:"T\xecm T\u1eeb ...",className:"w-100 h-100",maxLength:s.e.SEARCH_LEN,onChange:function(e){h=Object(l.c)(h,(function(){var r=e.target.value;""!==r?!p&&O(!0):p&&O(!1),t(r)}),750)},ref:d},r)),p&&Object(f.jsx)(i.a,{className:"".concat(o.closeIcon," cur-pointer"),onClick:function(){d.current.value="",O(!1),t("")}})]})}m.defaultProps={onSearch:function(){}};t.a=m},348:function(e,t,r){"use strict";var n=r(13),a=r(0),c=r(1);function o(e){var t=e.className,r=e.onTouchAnchor,o=e.threshold,i=Object(a.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting&&r()}),{threshold:o})),s=Object(a.useState)(null),l=Object(n.a)(s,2),u=l[0],d=l[1];return Object(a.useEffect)((function(){var e=u,t=i.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[u]),Object(c.jsx)("div",{className:t,ref:d,children:e.children})}o.defaultProps={className:"",onTouchAnchor:function(){},threshold:.5},t.a=o},349:function(e,t,r){"use strict";var n=r(296),a=(r(0),r(1));t.a=function(e){var t=e.className;return Object(a.jsx)("div",{className:t,children:new Array(10).fill(0).map((function(e,t){return Object(a.jsx)(n.a,{animation:"wave",variant:"rect"},t)}))})}},381:function(e,t,r){"use strict";var n=r(36),a=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(r(0)),o=(0,n(r(37)).default)(c.createElement("path",{d:"M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"}),"SortByAlpha");t.default=o},382:function(e,t,r){"use strict";var n=r(36),a=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(r(0)),o=(0,n(r(37)).default)(c.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=o},383:function(e,t,r){"use strict";var n=r(36),a=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(r(0)),o=(0,n(r(37)).default)(c.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.default=o},384:function(e,t,r){"use strict";var n=r(36),a=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(r(0)),o=(0,n(r(37)).default)(c.createElement("path",{d:"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"}),"SwapVert");t.default=o},385:function(e,t,r){"use strict";var n=r(36),a=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(r(0)),o=(0,n(r(37)).default)(c.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=o},386:function(e,t,r){"use strict";var n=r(36),a=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(r(0)),o=(0,n(r(37)).default)(c.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");t.default=o},387:function(e,t,r){"use strict";var n=r(24),a=r(292),c=r(324);t.a=Object(a.a)((function(e){return Object(n.a)({},Object(c.b)(e))}))},392:function(e,t,r){"use strict";var n=r(42),a=r.n(n),c=r(24),o=r(51),i=r(13),s=r(97),l=r(117),u=r(0),d=r(17),b=r(52),f=r(98),j=r(385),h=r.n(j),m=r(386),v=r.n(m),p=r(72),O=r(6),g=r(18),x=r(73),y=r(1);function w(e){var t=e.word,r=Object(d.c)((function(e){return e.userInfo})),n=r.isAuth,c=r.username,i=r.favoriteList,s=Object(g.f)(),l=Object(d.b)(),u=-1!==i.findIndex((function(e){return e.toLowerCase()===t.toLowerCase()})),f=function(){var e=Object(o.a)(a.a.mark((function e(){var r,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.putToggleWordFavorite(c,t,!u);case 3:200===e.sent.status&&l(Object(x.c)({word:t,isAdd:!u})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),o=(null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"Th\u1ea5t b\u1ea1i, th\u1eed l\u1ea1i !",l(Object(b.c)({type:"error",message:o}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:n?Object(y.jsx)(y.Fragment,{children:u?Object(y.jsx)(h.a,{onClick:f,className:"dyno-favorite active"}):Object(y.jsx)(v.a,{onClick:f,className:"dyno-favorite"})}):Object(y.jsx)(v.a,{onClick:function(){return s.push(O.h.LOGIN)},className:"dyno-favorite"})})}w.defaultProps={word:""};var S=w,N=r(19),k=r(292),C=Object(k.a)((function(){return{root:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)",cursor:"pointer",transition:"all 0.35s","&:hover, &:active":{borderBottom:"solid 1px var(--accent-color)"}},picture:{width:"5rem",height:"5rem"},word:{fontSize:"1.8rem",fontWeight:500,color:"var(--primary-color)"},type:{color:"var(--label-color)"},phonetic:{fontSize:"1.5rem",margin:"0.8rem 0"},mean:{fontSize:"1.6rem",color:"var(--text-color)",maxWidth:"80%",lineHeight:1.5}}}));function L(e){var t=e.word,r=e.type,n=e.phonetic,a=e.picture,c=e.mean,o=e.onShowDetail,i=C(),s=Object(N.b)(a||O.c.IMAGE_SRC,50,50,!0,!0);return Object(y.jsxs)("div",{className:"".concat(i.root," flex-center-between"),children:[Object(y.jsxs)("div",{className:"w-100 flex-center--ver",onClick:function(){return o(t)},children:[Object(y.jsx)("img",{className:i.picture,src:s,alt:"photo"}),Object(y.jsxs)("div",{className:"ml-8 flex-grow-1",children:[Object(y.jsxs)("h3",{className:i.word,children:[t," ",Boolean(r)&&Object(y.jsxs)("span",{className:i.type,children:["( ",r," )"]})]}),Boolean(n)&&Object(y.jsxs)("p",{className:"".concat(i.phonetic," phonetic"),children:["/ ",n," /"]}),Object(y.jsx)("p",{className:i.mean,children:c})]})]}),Object(y.jsxs)("div",{className:"flex-center--ver",children:[Object(y.jsx)("div",{className:"mr-5",children:Object(y.jsx)(f.a,{text:t})}),Object(y.jsx)(S,{word:t})]})]})}L.defaultProps={onShowDetail:function(){}};var z=L;t.a=function(e){var t=Object(u.useState)({loading:!1,open:!1}),r=Object(i.a)(t,2),n=r[0],f=r[1],j=Object(d.b)(),h=function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f({open:!0,loading:!0}),e.next=4,s.a.getWordDetails(t);case 4:200===(r=e.sent).status&&f(Object(c.a)({open:!0,loading:!1},r.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),f({open:!1,loading:!1}),j(Object(b.c)({type:"error",message:"Kh\xf4ng th\u1ec3 l\u1ea5y th\xf4ng tin, th\u1eed l\u1ea1i."}));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(z,Object(c.a)(Object(c.a)({},e),{},{onShowDetail:h})),n.open&&Object(y.jsx)(l.a,Object(c.a)(Object(c.a)({},n),{},{onClose:function(){return f({open:!1,loading:!1})}}))]})}},395:function(e,t,r){"use strict";var n=r(13),a=r(157),c=r(317),o=r(382),i=r.n(o),s=r(383),l=r.n(s),u=r(381),d=r.n(u),b=r(384),f=r.n(b),j=r(0),h=r(292),m=Object(h.a)((function(){return{menu:{backgroundColor:"var(--bg-color-accent)"},menuItem:{color:"var(--text-color)",fontSize:"1.6rem"}}})),v=r(1);function p(e){var t=e.classNameIcon,r=e.onSelect,o=Object(j.useState)(null),s=Object(n.a)(o,2),u=s[0],b=s[1],h=m(),p=function(e){b(null),"string"===typeof e&&r(e)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(d.a,{className:t,onClick:function(e){b(e.currentTarget)}}),Object(v.jsxs)(a.a,{classes:{paper:h.menu},anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:p,children:[Object(v.jsxs)(c.a,{className:h.menuItem,onClick:function(){return p("asc")},children:["A-Z\xa0",Object(v.jsx)(i.a,{})]}),Object(v.jsxs)(c.a,{className:h.menuItem,onClick:function(){return p("desc")},children:["Z-A\xa0",Object(v.jsx)(l.a,{})]}),Object(v.jsxs)(c.a,{className:h.menuItem,onClick:function(){return p("rand")},children:["Random\xa0",Object(v.jsx)(f.a,{})]})]})]})}p.defaultProps={classNameIcon:"",onSelect:function(){}};t.a=p},583:function(e,t,r){"use strict";r.r(t);var n=r(96),a=r(42),c=r.n(a),o=r(51),i=r(13),s=r(97),l=r(117),u=r(0),d=r(17),b=r(24),f=r(328),j=r.n(f),h=r(337),m=r(348),v=r(395),p=r(392),O=r(349),g=r(387),x=r(1);function y(e){var t=e.list,r=e.loading,n=e.onLoadData,a=e.more,c=e.isFirstLoad,o=e.onSortTypeChange,i=e.onSearchWord,s=Object(g.a)();return Object(x.jsxs)("div",{className:"".concat(s.root," dyno-container"),children:[Object(x.jsxs)("div",{className:"flex-center-between",children:[Object(x.jsx)("h1",{className:"dyno-title",children:"T\u1eeb \u0111i\u1ec3n c\u1ee7a b\u1ea1n"}),Object(x.jsx)("div",{children:Object(x.jsx)(v.a,{onSelect:o,classNameIcon:"dyno-setting-icon mr-5"})})]}),Object(x.jsx)("div",{className:"dyno-break"}),Object(x.jsxs)("div",{className:s.contentWrap,children:[Object(x.jsx)(h.a,{disabled:r,onSearch:i}),Object(x.jsx)("div",{className:"".concat(s.listWrap," w-100"),children:Object(x.jsx)("ul",{id:"dictionaryId",className:"".concat(s.list," flex-col w-100"),children:Object(x.jsx)(x.Fragment,{children:c?Object(x.jsx)(O.a,{className:s.skeleton}):Object(x.jsx)(x.Fragment,{children:t&&t.length>0?Object(x.jsxs)(x.Fragment,{children:[t.map((function(e,t){return Object(x.jsx)("li",{className:s.listItem,children:Object(x.jsx)(p.a,Object(b.a)({},e))},t)})),!r&&a&&Object(x.jsx)(m.a,{onTouchAnchor:n,threshold:1,children:Object(x.jsx)("div",{className:"w-100 t-center",children:Object(x.jsx)(j.a,{className:"ani-spin"})})})]}):Object(x.jsx)("h3",{className:"notfound-title h-100 flex-center t-center",children:"B\u1ea1n ch\u01b0a \u0111\xe1nh d\u1ea5u t\u1eeb y\xeau th\xedch n\xe0o c\u1ea3. H\xe3y th\xeam t\u1eeb y\xeau th\xedch b\u1eb1ng c\xe1ch b\u1ea5m v\xe0o h\xecnh tr\xe1i tim ngay b\xean t\u1eeb v\u1ef1ng \u0111\xf3 nh\xe9 \ud83d\ude09"})})})})})]})]})}y.defaultProps={list:[],loading:!1,more:!0,isFirstLoad:!0,isTOEIC:!1,onLoadData:function(){},onSearchWord:function(){},onSettingWordPack:function(){},onSortTypeChange:function(){}};var w=y;var S=function(){var e=Object(u.useState)(1),t=Object(i.a)(e,2),r=t[0],a=t[1],b=Object(u.useState)("rand"),f=Object(i.a)(b,2),j=f[0],h=f[1],m=Object(u.useState)(!0),v=Object(i.a)(m,2),p=v[0],O=v[1],g=Object(u.useState)([]),y=Object(i.a)(g,2),S=y[0],N=y[1],k=Object(u.useState)(!0),C=Object(i.a)(k,2),L=C[0],z=C[1],I=Object(u.useState)(!0),M=Object(i.a)(I,2),P=M[0],T=M[1],_=Object(d.c)((function(e){return e.userInfo})).favoriteList.length,E=Object(u.useRef)([]),F=function(){var e=Object(o.a)(c.a.mark((function e(t){var r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==t){e.next=5;break}return N(E.current),z(!0),e.abrupt("return");case 5:return e.next=7,s.a.getSearchWord(t);case 7:200===(r=e.sent).status&&(n=r.data.packList,N(void 0===n?[]:n),z(!1)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){var e=!0;return Object(o.a)(c.a.mark((function t(){var a,o,i,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,O(!0),t.next=4,s.a.getUserFavoriteList(r,20,j);case 4:200===(a=t.sent).status&&e&&(o=a.data.packList,i=void 0===o?[]:o,l=[].concat(Object(n.a)(S),Object(n.a)(i)),E.current=l,N(l)),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:return t.prev=10,e&&(O(!1),P&&T(!1)),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,8,10,13]])})))(),function(){return e=!1}}),[r,j]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w,{list:S,loading:p,onLoadData:function(){r<_?a(r+1):z(!1)},more:L,isFirstLoad:P,onSortTypeChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rand";e!==j&&(E.current=[],h(e),a(1),N([]))},onSearchWord:F}),Object(x.jsx)(l.a,{})]})},N=r(114),k=r(58);t.default=function(){return Object(k.a)("Danh s\xe1ch t\u1eeb v\u1ef1ng y\xeau th\xedch"),Object(N.a)(),Object(x.jsx)(S,{})}}}]);
//# sourceMappingURL=8.e7e0311f.chunk.js.map