(this.webpackJsonpDynonary=this.webpackJsonpDynonary||[]).push([[7],{323:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return a}))},324:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return i}));var a=r(25),n=function(e){var t;return{root:(t={height:"100%",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"2fr 1fr 17fr",gridRowGap:"0.8rem"},Object(a.a)(t,e.breakpoints.up("sm"),{height:"85%",gridRowGap:"1.2rem"}),Object(a.a)(t,"& .disabled",{pointerEvents:"none"}),t),summary:{margin:"1.4rem 0","& > *":{fontSize:"1.6rem",fontWeight:400,color:"var(--label-color)"},"& b":{padding:"0 0.4rem",fontSize:"2rem"}},summaryIcon:{fontSize:"2.4rem",margin:"0 0.4rem"}}},o=function(){return{root:{marginTop:"3.2rem","& ::-webkit-scrollbar":{width:"2px"},"& ::-webkit-scrollbar-track":{background:"none"},"& ::-webkit-scrollbar-thumb":{borderRadius:"25px"}},contentWrap:{marginTop:"2.4rem"},listWrap:{padding:"1.2rem 0.4rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",border:"solid 1px var(--border-color)"},list:{padding:"0 2.4rem",height:"calc(100vh - 24rem)",overflow:"auto"},listItem:{margin:"0.6rem 0"},skeleton:{height:"100%","& > *":{margin:"1.2rem 0",height:"calc(10% - 1.2rem)"}}}},c=function(){return{dialogPaper:{backgroundColor:"var(--bg-color-sec)"},title:{"& > *":{color:"var(--title-color)"}},content:{"& *":{color:"var(--text-color)"}},breakLine:{borderColor:"var(--border-color)"}}},i=function(){return{root:{padding:"2.4rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",width:"35rem",backgroundColor:"var(--bg-color-sec)","& > *":{marginTop:"1.2rem",marginBottom:"1.2rem"}},title:{fontSize:"2.4rem",color:"var(--text-color)"},labelIcon:{fontSize:"3.6rem",color:"var(--text-color)"},forgotPw:{color:"var(--title-color)",opacity:.65,fontWeight:500,fontSize:"1.4rem",textAlign:"right","&:hover":{opacity:1}},icon:{fontSize:"1.8rem",color:"var(--grey)",cursor:"pointer"},visiblePw:{color:"var(--primary-color)"}}}},328:function(e,t,r){"use strict";var a=r(36),n=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(37)).default)(o.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}),"Loop");t.default=c},330:function(e,t,r){"use strict";var a=r(36),n=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(37)).default)(o.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=c},333:function(e,t,r){"use strict";var a=r(13),n=r(303),o=r(297),c=r(307),i=r(330),s=r.n(i),l=r(119),u=r.n(l),d=r(118),b=r(112),p=r(0),j=r(292),h=Object(j.a)((function(){return{button:{backgroundColor:"var(--bg-color-accent) !important",boxShadow:"none !important",border:"solid 1px var(--border-color)",color:"var(--label-color)",textTransform:"capitalize",minHeight:"5.6rem","&:hover, &:active":{opacity:.85}},tagsWrap:{paddingTop:"0 !important",paddingBottom:"0 !important"},tags:{display:"flex",flexWrap:"wrap",padding:"2.4rem 1.2rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--sm-border-radius)","& > *":{margin:"0.8rem"}}}})),f=r(1);function m(e){var t=e.onChange,r=e.resetFlag,i=e.buttonTitle,l=e.topicList,b=e.buttonWrapper,j=e.tagsWrapper,m=h(),v=Object(p.useState)(!1),O=Object(a.a)(v,2),g=O[0],x=O[1],y=Object(p.useRef)([]),C=b||c.a,w=j||c.a,k=function(e,r){r?y.current.push(e):y.current=y.current.filter((function(t){return t!==e})),t(y.current)};return Object(p.useEffect)((function(){r&&(y.current=[])}),[r]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C,{children:Object(f.jsx)(n.a,{color:"secondary",variant:"contained",endIcon:g?Object(f.jsx)(s.a,{}):Object(f.jsx)(u.a,{}),className:"".concat(m.button," w-100 h-100"),onClick:function(){return x(!g)},children:i})}),Object(f.jsx)(w,{className:g?"":m.tagsWrap,children:Object(f.jsx)(o.a,{in:g,children:Object(f.jsx)("div",{className:m.tags,children:l.map((function(e,t){return Object(f.jsx)(d.a,{resetFlag:r,iconSrc:e.icon,title:e.title,id:e.key,onChange:k},t)}))})})})]})}m.defaultProps={onChange:function(){},resetFlag:0,buttonTitle:"Ch\u1ecdn ch\u1ee7 \u0111\u1ec1",topicList:b.b};t.a=m},336:function(e,t,r){"use strict";var a=r(36),n=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(37)).default)(o.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOffOutlined");t.default=c},337:function(e,t,r){"use strict";var a=r(24),n=r(13),o=r(323),c=r(336),i=r.n(c),s=r(6),l=r(19),u=r(0),d=r(292),b=Object(d.a)((function(){return{root:{margin:"2.4rem 0","& input":{outline:"none",padding:"1.6rem 1.2rem",fontSize:"1.8rem",color:"var(--text-color)",background:"none",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",transition:"all 0.25s","&:focus":{borderColor:"var(--secondary-color)"}}},closeIcon:{position:"absolute",right:"1.4rem",top:"50%",transform:"translateY(-50%)",fontSize:"2.4rem",color:"var(--grey)","&:hover, &:active":{color:"var(--primary-color)"}}}})),p=r(1),j=["onSearch"],h=null;function f(e){var t=e.onSearch,r=Object(o.a)(e,j),c=b(),d=Object(u.useRef)(null),f=Object(u.useState)(!1),m=Object(n.a)(f,2),v=m[0],O=m[1];return Object(p.jsxs)("div",{className:"".concat(c.root," w-100 position-rel"),children:[Object(p.jsx)("input",Object(a.a)({placeholder:"T\xecm T\u1eeb ...",className:"w-100 h-100",maxLength:s.e.SEARCH_LEN,onChange:function(e){h=Object(l.c)(h,(function(){var r=e.target.value;""!==r?!v&&O(!0):v&&O(!1),t(r)}),750)},ref:d},r)),v&&Object(p.jsx)(i.a,{className:"".concat(c.closeIcon," cur-pointer"),onClick:function(){d.current.value="",O(!1),t("")}})]})}f.defaultProps={onSearch:function(){}};t.a=f},338:function(e,t,r){"use strict";var a=r(24),n=r(13),o=r(323),c=r(300),i=r(320),s=r(317),l=r(312),u=r(0),d=r(292),b=Object(d.a)((function(){return{root:{backgroundColor:"var(--bg-color-accent)",color:"var(--text-color)",borderRadius:"var(--border-radius)","& .Mui-error .MuiSelect-root":{borderColor:"var(--error-color) !important"}},label:{color:"var(--label-color)",fontSize:"1.5rem"},labelFocus:{color:"var(--secondary-color) !important"},selectRoot:{color:"var(--text-color)",fontSize:"1.6rem",borderRadius:"var(--border-radius) !important",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent) !important"},selectIcon:{color:"var(--label-color)"},selectMenu:{backgroundColor:"var(--bg-color-accent)",maxHeight:"25rem","& .MuiMenuItem-root":{fontSize:"1.5rem",padding:"1rem 1.6rem","&:hover, &:active, &.Mui-selected":{backgroundColor:"var(--hover-color)"}}}}})),p=r(1),j=["label","options","className","error","resetFlag","onChange"];function h(e){var t,r=e.label,d=e.options,h=e.className,f=e.error,m=e.resetFlag,v=e.onChange,O=Object(o.a)(e,j),g=Object(u.useState)(null===(t=d[0])||void 0===t?void 0:t.value),x=Object(n.a)(g,2),y=x[0],C=x[1],w=b();return Object(u.useEffect)((function(){var e;m&&C(null===(e=d[0])||void 0===e?void 0:e.value)}),[m]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(c.a,{className:"".concat(w.root," ").concat(h),variant:"filled",children:[Object(p.jsx)(i.a,{classes:{root:w.label,focused:w.labelFocus},id:r,children:r}),Object(p.jsx)(l.a,Object(a.a)(Object(a.a)({classes:{root:w.selectRoot,icon:w.selectIcon},MenuProps:{classes:{paper:w.selectMenu}},disableUnderline:!0,error:f,labelId:r,label:r,value:y,onChange:function(e){C(e.target.value),v(e)}},O),{},{children:d&&d.map((function(e,t){return Object(p.jsx)(s.a,{value:e.value,children:e.label},t)}))}))]})})}h.defaultProps={className:"",label:"Label",options:[],error:!1,resetFlag:0,onChange:function(){}};t.a=h},341:function(e,t,r){"use strict";var a=r(24),n=r(96),o=r(303),c=r(313),i=r(302),s=r(301),l=r(393),u=r(307),d=r(338),b=r(6),p=r(112),j=r(0),h=r(333),f=r(292),m=r(324),v=Object(f.a)((function(e){return Object(a.a)({},Object(m.a)(e))})),O=r(1),g="wordPackForm";function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{value:"-1",label:"T\u1ea5t c\u1ea3"}].concat(Object(n.a)(e))}function y(e){var t=e.onChoose,r=e.onCancel,n=e.open,f=e.topicMultiples,m=e.title,y=e.okBtnText,C=e.cancelBtnText,w=e.okBtnProps,k=e.cancelBtnProps,N=v(),S=Object(j.useRef)([]);return Object(O.jsxs)(c.a,{classes:{paper:N.dialogPaper},maxWidth:"md",fullWidth:!0,disableBackdropClick:!0,open:n,children:[Object(O.jsx)(l.a,{classes:{root:N.title},children:m}),Object(O.jsx)(s.a,{dividers:!0,classes:{dividers:N.breakLine},children:Object(O.jsx)("form",{id:g,onSubmit:function(e){var r,a,n,o;e.preventDefault();var c=e.target,i=(null===(r=c.type)||void 0===r?void 0:r.value)||"-1",s=(null===(a=c.specialty)||void 0===a?void 0:a.value)||"-1",l=(null===(n=c.topic)||void 0===n?void 0:n.value)||"-1",u=(null===(o=c.level)||void 0===o?void 0:o.value)||"-1";t({type:i,specialty:s,level:u,topics:f?S.current:"-1"===l?[]:[l]})},children:Object(O.jsxs)(u.a,{container:!0,spacing:3,children:[Object(O.jsx)(u.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(d.a,{label:"Lo\u1ea1i t\u1eeb",className:"w-100",options:x(b.n),inputProps:{name:"type"}})}),Object(O.jsx)(u.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(d.a,{label:"C\u1ea5p \u0111\u1ed9",className:"w-100",options:x(b.l),inputProps:{name:"level"}})}),Object(O.jsx)(u.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(d.a,{label:"Chuy\xean ng\xe0nh",className:"w-100",options:x(b.m),inputProps:{name:"specialty"}})}),f?Object(O.jsx)(h.a,{onChange:function(e){return S.current=e},buttonWrapper:function(e){return Object(O.jsx)(u.a,Object(a.a)(Object(a.a)({},e),{},{item:!0,xs:12,md:6}))},tagsWrapper:function(e){return Object(O.jsx)(u.a,Object(a.a)(Object(a.a)({},e),{},{item:!0,xs:12}))}}):Object(O.jsx)(u.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(d.a,{label:"Ch\u1ee7 \u0111\u1ec1",className:"w-100",options:x(p.c),inputProps:{name:"topic"}})}),Boolean(e.children)&&Object(O.jsx)(u.a,{item:!0,xs:12,md:6,children:e.children})]})})}),Object(O.jsxs)(i.a,{children:[Object(O.jsx)(o.a,Object(a.a)(Object(a.a)({onClick:r,className:"_btn _btn-stand",variant:"outlined"},k),{},{children:C})),Object(O.jsx)(o.a,Object(a.a)(Object(a.a)({autoFocus:!0,disableFocusRipple:!0,component:"button",type:"submit",form:g,className:"_btn _btn-primary",variant:"contained"},w),{},{children:y}))]})]})}y.defaultProps={onChoose:function(){},open:!0,topicMultiples:!0,title:"G\xf3i t\u1eeb v\u1ef1ng",okBtnText:"Ok",cancelBtnText:"\u0110\xf3ng",okBtnProps:{},cancelBtnProps:{}};t.a=y},348:function(e,t,r){"use strict";var a=r(13),n=r(0),o=r(1);function c(e){var t=e.className,r=e.onTouchAnchor,c=e.threshold,i=Object(n.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting&&r()}),{threshold:c})),s=Object(n.useState)(null),l=Object(a.a)(s,2),u=l[0],d=l[1];return Object(n.useEffect)((function(){var e=u,t=i.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[u]),Object(o.jsx)("div",{className:t,ref:d,children:e.children})}c.defaultProps={className:"",onTouchAnchor:function(){},threshold:.5},t.a=c},349:function(e,t,r){"use strict";var a=r(296),n=(r(0),r(1));t.a=function(e){var t=e.className;return Object(n.jsx)("div",{className:t,children:new Array(10).fill(0).map((function(e,t){return Object(n.jsx)(a.a,{animation:"wave",variant:"rect"},t)}))})}},380:function(e,t,r){"use strict";var a=r(21),n={getWordPackTotal:function(e){return a.a.get("".concat("/common","/word-pack/total"),{params:{packInfo:JSON.stringify(e)}})}};t.a=n},381:function(e,t,r){"use strict";var a=r(36),n=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(37)).default)(o.createElement("path",{d:"M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"}),"SortByAlpha");t.default=c},382:function(e,t,r){"use strict";var a=r(36),n=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(37)).default)(o.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=c},383:function(e,t,r){"use strict";var a=r(36),n=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(37)).default)(o.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.default=c},384:function(e,t,r){"use strict";var a=r(36),n=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(37)).default)(o.createElement("path",{d:"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"}),"SwapVert");t.default=c},385:function(e,t,r){"use strict";var a=r(36),n=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(37)).default)(o.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=c},386:function(e,t,r){"use strict";var a=r(36),n=r(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(37)).default)(o.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");t.default=c},387:function(e,t,r){"use strict";var a=r(24),n=r(292),o=r(324);t.a=Object(n.a)((function(e){return Object(a.a)({},Object(o.b)(e))}))},392:function(e,t,r){"use strict";var a=r(42),n=r.n(a),o=r(24),c=r(51),i=r(13),s=r(97),l=r(117),u=r(0),d=r(17),b=r(52),p=r(98),j=r(385),h=r.n(j),f=r(386),m=r.n(f),v=r(72),O=r(6),g=r(18),x=r(73),y=r(1);function C(e){var t=e.word,r=Object(d.c)((function(e){return e.userInfo})),a=r.isAuth,o=r.username,i=r.favoriteList,s=Object(g.f)(),l=Object(d.b)(),u=-1!==i.findIndex((function(e){return e.toLowerCase()===t.toLowerCase()})),p=function(){var e=Object(c.a)(n.a.mark((function e(){var r,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.putToggleWordFavorite(o,t,!u);case 3:200===e.sent.status&&l(Object(x.c)({word:t,isAdd:!u})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c=(null===(r=e.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message)||"Th\u1ea5t b\u1ea1i, th\u1eed l\u1ea1i !",l(Object(b.c)({type:"error",message:c}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:a?Object(y.jsx)(y.Fragment,{children:u?Object(y.jsx)(h.a,{onClick:p,className:"dyno-favorite active"}):Object(y.jsx)(m.a,{onClick:p,className:"dyno-favorite"})}):Object(y.jsx)(m.a,{onClick:function(){return s.push(O.h.LOGIN)},className:"dyno-favorite"})})}C.defaultProps={word:""};var w=C,k=r(19),N=r(292),S=Object(N.a)((function(){return{root:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)",cursor:"pointer",transition:"all 0.35s","&:hover, &:active":{borderBottom:"solid 1px var(--accent-color)"}},picture:{width:"5rem",height:"5rem"},word:{fontSize:"1.8rem",fontWeight:500,color:"var(--primary-color)"},type:{color:"var(--label-color)"},phonetic:{fontSize:"1.5rem",margin:"0.8rem 0"},mean:{fontSize:"1.6rem",color:"var(--text-color)",maxWidth:"80%",lineHeight:1.5}}}));function T(e){var t=e.word,r=e.type,a=e.phonetic,n=e.picture,o=e.mean,c=e.onShowDetail,i=S(),s=Object(k.b)(n||O.c.IMAGE_SRC,50,50,!0,!0);return Object(y.jsxs)("div",{className:"".concat(i.root," flex-center-between"),children:[Object(y.jsxs)("div",{className:"w-100 flex-center--ver",onClick:function(){return c(t)},children:[Object(y.jsx)("img",{className:i.picture,src:s,alt:"photo"}),Object(y.jsxs)("div",{className:"ml-8 flex-grow-1",children:[Object(y.jsxs)("h3",{className:i.word,children:[t," ",Boolean(r)&&Object(y.jsxs)("span",{className:i.type,children:["( ",r," )"]})]}),Boolean(a)&&Object(y.jsxs)("p",{className:"".concat(i.phonetic," phonetic"),children:["/ ",a," /"]}),Object(y.jsx)("p",{className:i.mean,children:o})]})]}),Object(y.jsxs)("div",{className:"flex-center--ver",children:[Object(y.jsx)("div",{className:"mr-5",children:Object(y.jsx)(p.a,{text:t})}),Object(y.jsx)(w,{word:t})]})]})}T.defaultProps={onShowDetail:function(){}};var P=T;t.a=function(e){var t=Object(u.useState)({loading:!1,open:!1}),r=Object(i.a)(t,2),a=r[0],p=r[1],j=Object(d.b)(),h=function(){var e=Object(c.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p({open:!0,loading:!0}),e.next=4,s.a.getWordDetails(t);case 4:200===(r=e.sent).status&&p(Object(o.a)({open:!0,loading:!1},r.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),p({open:!1,loading:!1}),j(Object(b.c)({type:"error",message:"Kh\xf4ng th\u1ec3 l\u1ea5y th\xf4ng tin, th\u1eed l\u1ea1i."}));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P,Object(o.a)(Object(o.a)({},e),{},{onShowDetail:h})),a.open&&Object(y.jsx)(l.a,Object(o.a)(Object(o.a)({},a),{},{onClose:function(){return p({open:!1,loading:!1})}}))]})}},393:function(e,t,r){"use strict";var a=r(2),n=r(3),o=r(0),c=(r(7),r(4)),i=r(5),s=r(9),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var r=e.align,i=void 0===r?"inherit":r,u=e.classes,d=e.className,b=e.color,p=void 0===b?"initial":b,j=e.component,h=e.display,f=void 0===h?"initial":h,m=e.gutterBottom,v=void 0!==m&&m,O=e.noWrap,g=void 0!==O&&O,x=e.paragraph,y=void 0!==x&&x,C=e.variant,w=void 0===C?"body1":C,k=e.variantMapping,N=void 0===k?l:k,S=Object(n.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),T=j||(y?"p":N[w]||l[w])||"span";return o.createElement(T,Object(a.a)({className:Object(c.a)(u.root,d,"inherit"!==w&&u[w],"initial"!==p&&u["color".concat(Object(s.a)(p))],g&&u.noWrap,v&&u.gutterBottom,y&&u.paragraph,"inherit"!==i&&u["align".concat(Object(s.a)(i))],"initial"!==f&&u["display".concat(Object(s.a)(f))]),ref:t},S))})),d=Object(i.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u),b=o.forwardRef((function(e,t){var r=e.children,i=e.classes,s=e.className,l=e.disableTypography,u=void 0!==l&&l,b=Object(n.a)(e,["children","classes","className","disableTypography"]);return o.createElement("div",Object(a.a)({className:Object(c.a)(i.root,s),ref:t},b),u?r:o.createElement(d,{component:"h2",variant:"h6"},r))}));t.a=Object(i.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(b)},395:function(e,t,r){"use strict";var a=r(13),n=r(157),o=r(317),c=r(382),i=r.n(c),s=r(383),l=r.n(s),u=r(381),d=r.n(u),b=r(384),p=r.n(b),j=r(0),h=r(292),f=Object(h.a)((function(){return{menu:{backgroundColor:"var(--bg-color-accent)"},menuItem:{color:"var(--text-color)",fontSize:"1.6rem"}}})),m=r(1);function v(e){var t=e.classNameIcon,r=e.onSelect,c=Object(j.useState)(null),s=Object(a.a)(c,2),u=s[0],b=s[1],h=f(),v=function(e){b(null),"string"===typeof e&&r(e)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{className:t,onClick:function(e){b(e.currentTarget)}}),Object(m.jsxs)(n.a,{classes:{paper:h.menu},anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:v,children:[Object(m.jsxs)(o.a,{className:h.menuItem,onClick:function(){return v("asc")},children:["A-Z\xa0",Object(m.jsx)(i.a,{})]}),Object(m.jsxs)(o.a,{className:h.menuItem,onClick:function(){return v("desc")},children:["Z-A\xa0",Object(m.jsx)(l.a,{})]}),Object(m.jsxs)(o.a,{className:h.menuItem,onClick:function(){return v("rand")},children:["Random\xa0",Object(m.jsx)(p.a,{})]})]})]})}v.defaultProps={classNameIcon:"",onSelect:function(){}};t.a=v},575:function(e,t,r){"use strict";r.r(t);var a=r(96),n=r(42),o=r.n(n),c=r(51),i=r(13),s=r(380),l=r(97),u=r(117),d=r(112),b=r(19),p=r(0),j=r(24),h=r(328),f=r.n(h),m=r(337),v=r(348),O=r(395),g=r(392),x=r(74),y=r.n(x),C=r(341),w=r(1);function k(e){var t=e.classNameIcon,r=e.onChoose,a=Object(p.useState)(!1),n=Object(i.a)(a,2),o=n[0],c=n[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y.a,{className:t,onClick:function(){return c(!0)}}),o&&Object(w.jsx)(C.a,{open:o,onCancel:function(){return c(!1)},onChoose:function(e){r(e),c(!1)}})]})}k.defaultProps={onChoose:function(){}};var N=k,S=r(349),T=r(387);function P(e){var t=e.list,r=e.loading,a=e.onLoadData,n=e.more,o=e.isFirstLoad,c=e.onSettingWordPack,i=e.onSortTypeChange,s=e.onSearchWord,l=e.isTOEIC,u=Object(T.a)();return Object(w.jsxs)("div",{className:"".concat(u.root," dyno-container"),children:[Object(w.jsxs)("div",{className:"flex-center-between",children:[Object(w.jsx)("h1",{className:"dyno-title",children:"T\u1eeb \u0111i\u1ec3n Dynonary"}),Object(w.jsxs)("div",{children:[Object(w.jsx)(O.a,{onSelect:i,classNameIcon:"dyno-setting-icon mr-5"}),!l&&Object(w.jsx)(N,{onChoose:c,classNameIcon:"dyno-setting-icon"})]})]}),Object(w.jsx)("div",{className:"dyno-break"}),Object(w.jsxs)("div",{className:u.contentWrap,children:[Object(w.jsx)(m.a,{disabled:r,onSearch:s}),Object(w.jsx)("div",{className:"".concat(u.listWrap," w-100"),children:Object(w.jsx)("ul",{id:"dictionaryId",className:"".concat(u.list," flex-col w-100"),children:Object(w.jsx)(w.Fragment,{children:o?Object(w.jsx)(S.a,{className:u.skeleton}):Object(w.jsx)(w.Fragment,{children:t&&t.length>0?Object(w.jsxs)(w.Fragment,{children:[t.map((function(e,t){return Object(w.jsx)("li",{className:u.listItem,children:Object(w.jsx)(g.a,Object(j.a)({},e))},t)})),!r&&n&&Object(w.jsx)(v.a,{onTouchAnchor:a,threshold:1,children:Object(w.jsx)("div",{className:"w-100 t-center",children:Object(w.jsx)(f.a,{className:"ani-spin"})})})]}):Object(w.jsx)("h3",{className:"notfound-title h-100 flex-center t-center",children:"Kh\xf4ng t\xecm th\u1ea5y t\u1eeb n\xe0o trong t\u1eeb \u0111i\u1ec3n"})})})})})]})]})}P.defaultProps={list:[],loading:!1,more:!0,isFirstLoad:!0,isTOEIC:!1,onLoadData:function(){},onSearchWord:function(){},onSettingWordPack:function(){},onSortTypeChange:function(){}};var I=P;function L(e){var t=e.isTOEIC,r=Object(p.useState)(1),n=Object(i.a)(r,2),j=n[0],h=n[1],f=Object(p.useState)("rand"),m=Object(i.a)(f,2),v=m[0],O=m[1],g=Object(p.useState)((function(){return{type:"-1",level:"-1",specialty:"-1",topics:t?[d.a]:[]}})),x=Object(i.a)(g,2),y=x[0],C=x[1],k=Object(p.useState)(!0),N=Object(i.a)(k,2),S=N[0],T=N[1],P=Object(p.useState)([]),L=Object(i.a)(P,2),M=L[0],z=L[1],E=Object(p.useState)(!0),W=Object(i.a)(E,2),F=W[0],B=W[1],R=Object(p.useState)(!0),_=Object(i.a)(R,2),A=_[0],D=_[1],V=Object(p.useRef)(0),H=Object(p.useRef)([]),G=function(){var e=Object(c.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==t){e.next=5;break}return z(H.current),B(!0),e.abrupt("return");case 5:return e.next=7,l.a.getSearchWord(t);case 7:200===(r=e.sent).status&&(a=r.data.packList,z(void 0===a?[]:a),B(!1)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.useEffect)((function(){var e=!0;return Object(c.a)(o.a.mark((function t(){var r,a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.getWordPackTotal(y);case 3:200===(r=t.sent).status&&e&&(a=r.data.total,n=void 0===a?0:a,V.current=Math.ceil(n/20)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))(),function(){return e=!1}}),[y]),Object(p.useEffect)((function(){var e=!0;return Object(c.a)(o.a.mark((function t(){var r,n,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,T(!0),t.next=4,l.a.getWordList(j,20,y,v);case 4:200===(r=t.sent).status&&e&&(n=r.data.packList,c=void 0===n?[]:n,i=[].concat(Object(a.a)(M),Object(a.a)(c)),H.current=i,z(i)),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:return t.prev=10,e&&(T(!1),A&&D(!1)),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,8,10,13]])})))(),function(){return e=!1}}),[j,y,v]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(I,{isTOEIC:t,list:M,loading:S,onLoadData:function(){j<V.current?h(j+1):B(!1)},more:F,isFirstLoad:A,onSettingWordPack:function(e){var t=!0;for(var r in y)if("topics"!==r&&y[r]!==e[r]){t=!1;break}t&&(t=Object(b.d)(y.topics,e.topics)),V.current=0,H.current=[],B(!0),z([]),C(e),h(1)},onSortTypeChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rand";e!==v&&(H.current=[],O(e),h(1),z([]))},onSearchWord:G}),Object(w.jsx)(u.a,{})]})}L.defaultProps={isTOEIC:!1};var M=L,z=r(114),E=r(58);function W(e){var t=e.isTOEIC;return Object(E.a)(t?"T\u1eeb v\u1ef1ng TOEIC":"T\u1eeb \u0111i\u1ec3n"),Object(z.a)(),Object(w.jsx)("div",{className:"container",children:Object(w.jsx)(M,{isTOEIC:t})})}W.defaultProps={isTOEIC:!1};t.default=W}}]);
//# sourceMappingURL=7.27af3562.chunk.js.map