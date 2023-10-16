(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{8864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(1024);n(2265);let i=r._(n(533));function l(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){let n=i.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,t);let o=r.loader;return n({...r,loader:()=>null!=o?o().then(l):Promise.resolve(l(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3699:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return i},NoSSR:function(){return l}}),n(1024),n(2265);let r=n(7669);function i(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function l(e){let{children:t}=e;return t}},533:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(1024),i=r._(n(2265)),l=n(3699),o=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,r=i.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?i.default.Fragment:l.NoSSR,s=t.lazy;return i.default.createElement(i.default.Suspense,{fallback:r},i.default.createElement(o,null,i.default.createElement(s,e)))}return t.lazy=i.default.lazy(t.loader),n.displayName="LoadableComponent",n}},7881:function(){},2759:function(){},9213:function(e,t,n){"use strict";n.d(t,{Q:function(){return c}});var r=n(294),i=n(5085),l=n(8250),o=n(2184),s=n(6465),a=n(2265),u=n(7437),c=(0,l.G)(function(e,t){let{children:n,className:l}=e,{htmlProps:c,...d}=(0,r.Zl)(e),f=(0,i.YO)(),h={...f.container,overflowAnchor:"none"},m=(0,a.useMemo)(()=>d,[d]);return(0,u.jsx)(i.ec,{value:m,children:(0,u.jsx)(o.m.div,{ref:t,...c,className:(0,s.cx)("chakra-accordion__item",l),__css:h,children:"function"==typeof n?n({isExpanded:!!d.isOpen,isDisabled:!!d.isDisabled}):n})})});c.displayName="AccordionItem"},294:function(e,t,n){"use strict";n.d(t,{As:function(){return u},EF:function(){return d},Zl:function(){return f},a2:function(){return c}});var r=n(5085),i=n(310),l=n(7771),o=n(5663),s=n(6465),a=n(2265);function u(e){let{onChange:t,defaultIndex:n,index:i,allowMultiple:o,allowToggle:u,...c}=e;(function(e){let t=e.index||e.defaultIndex,n=null!=t&&!Array.isArray(t)&&e.allowMultiple;(0,s.ZK)({condition:!!n,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})})(e),(0,s.ZK)({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"});let d=(0,r._v)(),[f,h]=(0,a.useState)(-1);(0,a.useEffect)(()=>()=>{h(-1)},[]);let[m,p]=(0,l.T)({value:i,defaultValue:()=>o?null!=n?n:[]:null!=n?n:-1,onChange:t});return{index:m,setIndex:p,htmlProps:c,getAccordionItemProps:e=>{let t=!1;return null!==e&&(t=Array.isArray(m)?m.includes(e):m===e),{isOpen:t,onChange:t=>{if(null!==e){if(o&&Array.isArray(m)){let n=t?m.concat(e):m.filter(t=>t!==e);p(n)}else t?p(e):u&&p(-1)}}}},focusedIndex:f,setFocusedIndex:h,descendants:d}}var[c,d]=(0,i.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function f(e){var t;let{isDisabled:n,isFocusable:i,id:l,...u}=e,{getAccordionItemProps:c,setFocusedIndex:f}=d(),h=(0,a.useRef)(null),m=(0,a.useId)(),p=null!=l?l:m,v=`accordion-button-${p}`,b=`accordion-panel-${p}`;(0,s.ZK)({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `});let{register:g,index:y,descendants:x}=(0,r.mc)({disabled:n&&!i}),{isOpen:E,onChange:N}=c(-1===y?null:y);t={isOpen:E,isDisabled:n},(0,s.ZK)({condition:t.isOpen&&!!t.isDisabled,message:"Cannot open a disabled accordion item"});let _=(0,a.useCallback)(()=>{null==N||N(!E),f(y)},[y,f,E,N]),w=(0,a.useCallback)(e=>{let t={ArrowDown:()=>{let e=x.nextEnabled(y);null==e||e.node.focus()},ArrowUp:()=>{let e=x.prevEnabled(y);null==e||e.node.focus()},Home:()=>{let e=x.firstEnabled();null==e||e.node.focus()},End:()=>{let e=x.lastEnabled();null==e||e.node.focus()}}[e.key];t&&(e.preventDefault(),t(e))},[x,y]),C=(0,a.useCallback)(()=>{f(y)},[f,y]),O=(0,a.useCallback)(function(e={},t=null){return{...e,type:"button",ref:(0,o.lq)(g,h,t),id:v,disabled:!!n,"aria-expanded":!!E,"aria-controls":b,onClick:(0,s.v0)(e.onClick,_),onFocus:(0,s.v0)(e.onFocus,C),onKeyDown:(0,s.v0)(e.onKeyDown,w)}},[v,n,E,_,C,w,b,g]),k=(0,a.useCallback)(function(e={},t=null){return{...e,ref:t,role:"region",id:b,"aria-labelledby":v,hidden:!E}},[v,E,b]);return{isOpen:E,isDisabled:n,isFocusable:i,onOpen:()=>{null==N||N(!0)},onClose:()=>{null==N||N(!1)},getButtonProps:O,getPanelProps:k,htmlProps:u}}},8843:function(e,t,n){"use strict";n.d(t,{H:function(){return c}});var r=n(294),i=n(5085),l=n(8250),o=n(2184),s=n(3156),a=n(6465),u=n(7437),c=(0,l.G)(function(e,t){let{className:n,motionProps:l,...c}=e,{reduceMotion:d}=(0,r.EF)(),{getPanelProps:f,isOpen:h}=(0,i.bB)(),m=f(c,t),p=(0,a.cx)("chakra-accordion__panel",n),v=(0,i.YO)();d||delete m.hidden;let b=(0,u.jsx)(o.m.div,{...m,__css:v.panel,className:p});return d?b:(0,u.jsx)(s.U,{in:h,...l,children:b})});c.displayName="AccordionPanel"},4023:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var r=n(294),i=n(5085),l=n(6248),o=n(6465),s=n(7437);function a(e){let{isOpen:t,isDisabled:n}=(0,i.bB)(),{reduceMotion:a}=(0,r.EF)(),u=(0,o.cx)("chakra-accordion__icon",e.className),c=(0,i.YO)(),d={opacity:n?.4:1,transform:t?"rotate(-180deg)":void 0,transition:a?void 0:"transform 0.2s",transformOrigin:"center",...c.icon};return(0,s.jsx)(l.J,{viewBox:"0 0 24 24","aria-hidden":!0,className:u,__css:d,...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}a.displayName="AccordionIcon"},4221:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});var r=n(5085),i=n(8250),l=n(2184),o=n(6465),s=n(7437),a=(0,i.G)(function(e,t){let{getButtonProps:n}=(0,r.bB)(),i=n(e,t),a=(0,r.YO)(),u={display:"flex",alignItems:"center",width:"100%",outline:0,...a.button};return(0,s.jsx)(l.m.button,{...i,className:(0,o.cx)("chakra-accordion__button",e.className),__css:u})});a.displayName="AccordionButton"},5085:function(e,t,n){"use strict";n.d(t,{YO:function(){return o},_v:function(){return d},bB:function(){return a},di:function(){return u},ec:function(){return s},lh:function(){return l},mc:function(){return f}});var r=n(4763),i=n(310),[l,o]=(0,i.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[s,a]=(0,i.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[u,c,d,f]=(0,r.n)()},5089:function(e,t,n){"use strict";n.d(t,{U:function(){return f}});var r=n(294),i=n(5085),l=n(8250),o=n(3599),s=n(446),a=n(2184),u=n(6465),c=n(2265),d=n(7437),f=(0,l.G)(function({children:e,reduceMotion:t,...n},l){let f=(0,o.jC)("Accordion",n),h=(0,s.Lr)(n),{htmlProps:m,descendants:p,...v}=(0,r.As)(h),b=(0,c.useMemo)(()=>({...v,reduceMotion:!!t}),[v,t]);return(0,d.jsx)(i.di,{value:p,children:(0,d.jsx)(r.a2,{value:b,children:(0,d.jsx)(i.lh,{value:f,children:(0,d.jsx)(a.m.div,{ref:l,...m,className:(0,u.cx)("chakra-accordion",n.className),__css:f.root,children:e})})})})});f.displayName="Accordion"},4763:function(e,t,n){"use strict";n.d(t,{n:function(){return g}});var r=n(2265),i=Object.defineProperty,l=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t,n)=>(l(e,"symbol"!=typeof t?t+"":t,n),n);function s(e){return e.sort((e,t)=>{let n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(n&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var a=e=>"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function u(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function c(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}var d="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,f=e=>e,h=class{constructor(){o(this,"descendants",new Map),o(this,"register",e=>{if(null!=e)return a(e)?this.registerNode(e):t=>{this.registerNode(t,e)}}),o(this,"unregister",e=>{this.descendants.delete(e);let t=s(Array.from(this.descendants.keys()));this.assignIndex(t)}),o(this,"destroy",()=>{this.descendants.clear()}),o(this,"assignIndex",e=>{this.descendants.forEach(t=>{let n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})}),o(this,"count",()=>this.descendants.size),o(this,"enabledCount",()=>this.enabledValues().length),o(this,"values",()=>{let e=Array.from(this.descendants.values());return e.sort((e,t)=>e.index-t.index)}),o(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),o(this,"item",e=>{if(0!==this.count())return this.values()[e]}),o(this,"enabledItem",e=>{if(0!==this.enabledCount())return this.enabledValues()[e]}),o(this,"first",()=>this.item(0)),o(this,"firstEnabled",()=>this.enabledItem(0)),o(this,"last",()=>this.item(this.descendants.size-1)),o(this,"lastEnabled",()=>{let e=this.enabledValues().length-1;return this.enabledItem(e)}),o(this,"indexOf",e=>{var t,n;return e&&null!=(n=null==(t=this.descendants.get(e))?void 0:t.index)?n:-1}),o(this,"enabledIndexOf",e=>null==e?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e))),o(this,"next",(e,t=!0)=>{let n=u(e,this.count(),t);return this.item(n)}),o(this,"nextEnabled",(e,t=!0)=>{let n=this.item(e);if(!n)return;let r=this.enabledIndexOf(n.node),i=u(r,this.enabledCount(),t);return this.enabledItem(i)}),o(this,"prev",(e,t=!0)=>{let n=c(e,this.count()-1,t);return this.item(n)}),o(this,"prevEnabled",(e,t=!0)=>{let n=this.item(e);if(!n)return;let r=this.enabledIndexOf(n.node),i=c(r,this.enabledCount()-1,t);return this.enabledItem(i)}),o(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;let n=Array.from(this.descendants.keys()).concat(e),r=s(n);(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);let i={node:e,index:-1,...t};this.descendants.set(e,i),this.assignIndex(r)})}},m=n(310),p=n(5663),[v,b]=(0,m.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function g(){let e=f(v);return[e,()=>f(b()),()=>(function(){let e=(0,r.useRef)(new h);return d(()=>()=>e.current.destroy()),e.current})(),e=>(function(e){let t=b(),[n,i]=(0,r.useState)(-1),l=(0,r.useRef)(null);d(()=>()=>{l.current&&t.unregister(l.current)},[]),d(()=>{if(!l.current)return;let e=Number(l.current.dataset.index);n==e||Number.isNaN(e)||i(e)});let o=e?f(t.register(e)):f(t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(l.current),register:(0,p.lq)(o,l)}})(e)]}},3453:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});var r=(0,n(2851).I)({d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})},6488:function(e,t,n){"use strict";n.d(t,{HC:function(){return p},QI:function(){return m}});var r=n(6248),i=n(310),l=n(1158),o=n(8250),s=n(3599),a=n(446),u=n(2184),c=n(7437),[d,f]=(0,i.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),h=(0,o.G)(function(e,t){let n=(0,s.jC)("List",e),{children:r,styleType:i="none",stylePosition:o,spacing:f,...h}=(0,a.Lr)(e),m=(0,l.W)(r);return(0,c.jsx)(d,{value:n,children:(0,c.jsx)(u.m.ul,{ref:t,listStyleType:i,listStylePosition:o,role:"list",__css:{...n.container,...f?{"& > *:not(style) ~ *:not(style)":{mt:f}}:{}},...h,children:m})})});h.displayName="List",(0,o.G)((e,t)=>{let{as:n,...r}=e;return(0,c.jsx)(h,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})}).displayName="OrderedList";var m=(0,o.G)(function(e,t){let{as:n,...r}=e;return(0,c.jsx)(h,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...r})});m.displayName="UnorderedList";var p=(0,o.G)(function(e,t){let n=f();return(0,c.jsx)(u.m.li,{ref:t,...e,__css:n.item})});p.displayName="ListItem",(0,o.G)(function(e,t){let n=f();return(0,c.jsx)(r.J,{ref:t,role:"presentation",...e,__css:n.icon})}).displayName="ListIcon"},5310:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var r=(0,n(2184).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});r.displayName="Spacer"},7766:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});var r=n(5536),i=n(8250),l=n(7437),o=(0,i.G)((e,t)=>(0,l.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));o.displayName="VStack"},128:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var r=n(2733),i=n(2265);function l(e,t={}){let{ssr:n=!0,fallback:l}=t,{getWindow:o}=(0,r.O)(),s=Array.isArray(e)?e:[e],a=Array.isArray(l)?l:[l];a=a.filter(e=>null!=e);let[u,c]=(0,i.useState)(()=>s.map((e,t)=>({media:e,matches:n?!!a[t]:o().matchMedia(e).matches})));return(0,i.useEffect)(()=>{let e=o();c(s.map(t=>({media:t,matches:e.matchMedia(t).matches})));let t=s.map(t=>e.matchMedia(t)),n=e=>{c(t=>t.slice().map(t=>t.media===e.media?{...t,matches:e.matches}:t))};return t.forEach(e=>{"function"==typeof e.addListener?e.addListener(n):e.addEventListener("change",n)}),()=>{t.forEach(e=>{"function"==typeof e.removeListener?e.removeListener(n):e.removeEventListener("change",n)})}},[o]),u.map(e=>e.matches)}},7771:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var r=n(2265),i=n(7977);function l(e){let{value:t,defaultValue:n,onChange:l,shouldUpdate:o=(e,t)=>e!==t}=e,s=(0,i.W)(l),a=(0,i.W)(o),[u,c]=(0,r.useState)(n),d=void 0!==t,f=d?t:u,h=(0,i.W)(e=>{let t="function"==typeof e?e(f):e;a(f,t)&&(d||c(t),s(t))},[d,s,f,a]);return[f,h]}},1689:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var r=n(2948),i=n(6123),l=n(6465),o=n(8250),s=n(2184),a=n(7437),u=(0,o.G)(function(e,t){let n=(0,i.WE)({...e,ref:t}),o=(0,r.s)();return(0,a.jsx)(s.m.div,{outline:"0",...n,className:(0,l.cx)("chakra-tabs__tab-panel",e.className),__css:o.tabpanel})});u.displayName="TabPanel"},7094:function(e,t,n){"use strict";n.d(t,{t:function(){return u}});var r=n(2948),i=n(6123),l=n(6465),o=n(8250),s=n(2184),a=n(7437),u=(0,o.G)(function(e,t){let n=(0,i.hp)({...e,ref:t}),o=(0,r.s)(),u={display:"flex",...o.tablist};return(0,a.jsx)(s.m.div,{...n,className:(0,l.cx)("chakra-tabs__tablist",e.className),__css:u})});u.displayName="TabList"},2948:function(e,t,n){"use strict";n.d(t,{m:function(){return m},s:function(){return h}});var r=n(6123),i=n(310),l=n(8250),o=n(3599),s=n(446),a=n(2184),u=n(6465),c=n(2265),d=n(7437),[f,h]=(0,i.k)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),m=(0,l.G)(function(e,t){let n=(0,o.jC)("Tabs",e),{children:i,className:l,...h}=(0,s.Lr)(e),{htmlProps:m,descendants:p,...v}=(0,r.YE)(h),b=(0,c.useMemo)(()=>v,[v]),{isFitted:g,...y}=m;return(0,d.jsx)(r.mE,{value:p,children:(0,d.jsx)(r.X,{value:b,children:(0,d.jsx)(f,{value:n,children:(0,d.jsx)(a.m.div,{className:(0,u.cx)("chakra-tabs",l),ref:t,...y,__css:n.root,children:i})})})})});m.displayName="Tabs"},3879:function(e,t,n){"use strict";n.d(t,{n:function(){return u}});var r=n(2948),i=n(6123),l=n(6465),o=n(8250),s=n(2184),a=n(7437),u=(0,o.G)(function(e,t){let n=(0,i.bt)(e),o=(0,r.s)();return(0,a.jsx)(s.m.div,{...n,width:"100%",ref:t,className:(0,l.cx)("chakra-tabs__tab-panels",e.className),__css:o.tabpanels})});u.displayName="TabPanels"},6123:function(e,t,n){"use strict";n.d(t,{mE:function(){return f},X:function(){return b},xD:function(){return x},hp:function(){return y},WE:function(){return w},bt:function(){return _},YE:function(){return v}});var r=n(2265),i=n(6465),l=n(5663);function o(e){let t=e.target,{tagName:n,isContentEditable:r}=t;return"INPUT"!==n&&"TEXTAREA"!==n&&!0!==r}var s=n(4763),a=n(310),u=n(7771),c=n(1158),d=n(1450),[f,h,m,p]=(0,s.n)();function v(e){var t;let{defaultIndex:n,onChange:i,index:l,isManual:o,isLazy:s,lazyBehavior:a="unmount",orientation:c="horizontal",direction:d="ltr",...f}=e,[h,p]=(0,r.useState)(null!=n?n:0),[v,b]=(0,u.T)({defaultValue:null!=n?n:0,value:l,onChange:i});(0,r.useEffect)(()=>{null!=l&&p(l)},[l]);let g=m(),y=(0,r.useId)(),x=null!=(t=e.id)?t:y,E=`tabs-${x}`;return{id:E,selectedIndex:v,focusedIndex:h,setSelectedIndex:b,setFocusedIndex:p,isManual:o,isLazy:s,lazyBehavior:a,orientation:c,descendants:g,direction:d,htmlProps:f}}var[b,g]=(0,a.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function y(e){let{focusedIndex:t,orientation:n,direction:l}=g(),o=h(),s=(0,r.useCallback)(e=>{let r=()=>{var e;let n=o.nextEnabled(t);n&&(null==(e=n.node)||e.focus())},i=()=>{var e;let n=o.prevEnabled(t);n&&(null==(e=n.node)||e.focus())},s="horizontal"===n,a="vertical"===n,u=e.key,c="ltr"===l?"ArrowLeft":"ArrowRight",d="ltr"===l?"ArrowRight":"ArrowLeft",f={[c]:()=>s&&i(),[d]:()=>s&&r(),ArrowDown:()=>a&&r(),ArrowUp:()=>a&&i(),Home:()=>{var e;let t=o.firstEnabled();t&&(null==(e=t.node)||e.focus())},End:()=>{var e;let t=o.lastEnabled();t&&(null==(e=t.node)||e.focus())}}[u];f&&(e.preventDefault(),f(e))},[o,t,n,l]);return{...e,role:"tablist","aria-orientation":n,onKeyDown:(0,i.v0)(e.onKeyDown,s)}}function x(e){let{isDisabled:t=!1,isFocusable:n=!1,...s}=e,{setSelectedIndex:a,isManual:u,id:c,setFocusedIndex:d,selectedIndex:f}=g(),{index:h,register:m}=p({disabled:t&&!n}),v=h===f,b=function(e={}){let{ref:t,isDisabled:n,isFocusable:s,clickOnEnter:a=!0,clickOnSpace:u=!0,onMouseDown:c,onMouseUp:d,onClick:f,onKeyDown:h,onKeyUp:m,tabIndex:p,onMouseOver:v,onMouseLeave:b,...g}=e,[y,x]=(0,r.useState)(!0),[E,N]=(0,r.useState)(!1),_=function(){let e=(0,r.useRef)(new Map),t=e.current,n=(0,r.useCallback)((t,n,r,i)=>{e.current.set(r,{type:n,el:t,options:i}),t.addEventListener(n,r,i)},[]),i=(0,r.useCallback)((t,n,r,i)=>{t.removeEventListener(n,r,i),e.current.delete(r)},[]);return(0,r.useEffect)(()=>()=>{t.forEach((e,t)=>{i(e.el,e.type,t,e.options)})},[i,t]),{add:n,remove:i}}(),w=y?p:p||0,C=n&&!s,O=(0,r.useCallback)(e=>{if(n){e.stopPropagation(),e.preventDefault();return}let t=e.currentTarget;t.focus(),null==f||f(e)},[n,f]),k=(0,r.useCallback)(e=>{E&&o(e)&&(e.preventDefault(),e.stopPropagation(),N(!1),_.remove(document,"keyup",k,!1))},[E,_]),S=(0,r.useCallback)(e=>{if(null==h||h(e),n||e.defaultPrevented||e.metaKey||!o(e.nativeEvent)||y)return;let t=a&&"Enter"===e.key,r=u&&" "===e.key;if(r&&(e.preventDefault(),N(!0)),t){e.preventDefault();let t=e.currentTarget;t.click()}_.add(document,"keyup",k,!1)},[n,y,h,a,u,_,k]),A=(0,r.useCallback)(e=>{if(null==m||m(e),n||e.defaultPrevented||e.metaKey||!o(e.nativeEvent)||y)return;let t=u&&" "===e.key;if(t){e.preventDefault(),N(!1);let t=e.currentTarget;t.click()}},[u,y,n,m]),I=(0,r.useCallback)(e=>{0===e.button&&(N(!1),_.remove(document,"mouseup",I,!1))},[_]),T=(0,r.useCallback)(e=>{if(0!==e.button)return;if(n){e.stopPropagation(),e.preventDefault();return}y||N(!0);let t=e.currentTarget;t.focus({preventScroll:!0}),_.add(document,"mouseup",I,!1),null==c||c(e)},[n,y,c,_,I]),L=(0,r.useCallback)(e=>{0===e.button&&(y||N(!1),null==d||d(e))},[d,y]),D=(0,r.useCallback)(e=>{if(n){e.preventDefault();return}null==v||v(e)},[n,v]),M=(0,r.useCallback)(e=>{E&&(e.preventDefault(),N(!1)),null==b||b(e)},[E,b]),j=(0,l.lq)(t,e=>{e&&"BUTTON"!==e.tagName&&x(!1)});return y?{...g,ref:j,type:"button","aria-disabled":C?void 0:n,disabled:C,onClick:O,onMouseDown:c,onMouseUp:d,onKeyUp:m,onKeyDown:h,onMouseOver:v,onMouseLeave:b}:{...g,ref:j,role:"button","data-active":(0,i.PB)(E),"aria-disabled":n?"true":void 0,tabIndex:C?void 0:w,onClick:O,onMouseDown:T,onMouseUp:L,onKeyUp:A,onKeyDown:S,onMouseOver:D,onMouseLeave:M}}({...s,ref:(0,l.lq)(m,e.ref),isDisabled:t,isFocusable:n,onClick:(0,i.v0)(e.onClick,()=>{a(h)})});return{...b,id:C(c,h),role:"tab",tabIndex:v?0:-1,type:"button","aria-selected":v,"aria-controls":O(c,h),onFocus:t?void 0:(0,i.v0)(e.onFocus,()=>{d(h);let e=t&&n;u||e||a(h)})}}var[E,N]=(0,a.k)({});function _(e){let t=g(),{id:n,selectedIndex:i}=t,l=(0,c.W)(e.children),o=l.map((e,t)=>(0,r.createElement)(E,{key:t,value:{isSelected:t===i,id:O(n,t),tabId:C(n,t),selectedIndex:i}},e));return{...e,children:o}}function w(e){let{children:t,...n}=e,{isLazy:i,lazyBehavior:l}=g(),{isSelected:o,id:s,tabId:a}=N(),u=(0,r.useRef)(!1);o&&(u.current=!0);let c=(0,d.k)({wasSelected:u.current,isSelected:o,enabled:i,mode:l});return{tabIndex:0,...n,children:c?t:null,role:"tabpanel","aria-labelledby":a,hidden:!o,id:s}}function C(e,t){return`${e}--tab-${t}`}function O(e,t){return`${e}--tabpanel-${t}`}},6115:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(2948),i=n(6123),l=n(6465),o=n(8250),s=n(2184),a=n(7437),u=(0,o.G)(function(e,t){let n=(0,r.s)(),o=(0,i.xD)({...e,ref:t}),u={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...n.tab};return(0,a.jsx)(s.m.button,{...o,className:(0,l.cx)("chakra-tabs__tab",e.className),__css:u})});u.displayName="Tab"},4570:function(e,t,n){"use strict";let r,i;n.d(t,{v:function(){return M}});var l=n(4101),o=n(961),s=n(2265),a=n(6567);let u=new WeakMap;function c({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=u.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function d(e){e.forEach(c)}let f=new Set;var h=n(2868),m=n(9815);let p=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),v=()=>({time:0,x:p(),y:p()}),b={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function g(e,t,n,r){let i=n[t],{length:l,position:o}=b[t],s=i.current,a=n.time;i.current=e["scroll"+o],i.scrollLength=e["scroll"+l]-e["client"+l],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,h.Y)(0,i.scrollLength,i.current);let u=r-a;i.velocity=u>50?0:(0,m.R)(i.current-s,u)}let y={All:[[0,0],[1,1]]},x={start:0,center:.5,end:1};function E(e,t,n=0){let r=0;if(void 0!==x[e]&&(e=x[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let N=[0,0];var _=n(3245),w=n(4269);let C={x:0,y:0};var O=n(3041);let k=new WeakMap,S=new WeakMap,A=new WeakMap,I=e=>e===document.documentElement?window:e;var T=n(538);function L(e,t){(0,a.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let D=()=>({scrollX:(0,l.BX)(0),scrollY:(0,l.BX)(0),scrollXProgress:(0,l.BX)(0),scrollYProgress:(0,l.BX)(0)});function M({container:e,target:t,layoutEffect:n=!0,...l}={}){let c=(0,o.h)(D),h=n?T.L:s.useEffect;return h(()=>(L("target",t),L("container",e),function(e,{container:t=document.documentElement,...n}={}){let l=A.get(t);l||(l=new Set,A.set(t,l));let o=v(),s=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{g(e,"x",n,t),g(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=y.All}=n,{target:i=e,axis:l="y"}=n,o="y"===l?"height":"width",s=i!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect();r=r.parentElement;let t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,l=r.parentNode;for(;!i;)"svg"===l.tagName&&(i=l),l=r.parentNode;r=i}else break;return n}(i,e):C,a=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let c=!t[l].interpolate,d=r.length;for(let e=0;e<d;e++){let n=function(e,t,n,r){let i=Array.isArray(e)?e:N,l=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,x[e]?e:"0"]),E(i[0],n,r)-E(i[1],t)}(r[e],u[o],a[o],s[l]);c||n===t[l].interpolatorOffsets[e]||(c=!0),t[l].offset[e]=n}c&&(t[l].interpolate=(0,_.s)(t[l].offset,(0,w.Y)(r)),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=t[l].interpolate(t[l].current)}(e,n,r)},notify:()=>t(n)}}(t,e,o,n);if(l.add(s),!k.has(t)){let e=()=>{for(let e of l)e.measure()},n=()=>{for(let e of l)e.update(O.frameData.timestamp)},o=()=>{for(let e of l)e.notify()},s=()=>{O.Wi.read(e,!1,!0),O.Wi.update(n,!1,!0),O.Wi.update(o,!1,!0)};k.set(t,s);let c=I(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&S.set(t,"function"==typeof t?(f.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};f.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{f.delete(t),!f.size&&i&&(i=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(d));let n=function(e,t,n){var r;if("string"==typeof e){let i=document;t&&((0,a.k)(!!t.current,"Scope provided, but no element detected."),i=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach(e=>{let n=u.get(e);n||(n=new Set,u.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=u.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),c.addEventListener("scroll",s,{passive:!0})}let c=k.get(t);return O.Wi.read(c,!1,!0),()=>{var e;(0,O.Pn)(c);let n=A.get(t);if(!n||(n.delete(s),n.size))return;let r=k.get(t);k.delete(t),r&&(I(t).removeEventListener("scroll",r),null===(e=S.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{c.scrollX.set(e.current),c.scrollXProgress.set(e.progress),c.scrollY.set(t.current),c.scrollYProgress.set(t.progress)},{...l,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(l.offset)]),c}},9291:function(e,t,n){"use strict";n.d(t,{H:function(){return h}});var r=n(3245);let i=e=>"object"==typeof e&&e.mix,l=e=>i(e)?e.mix:void 0;var o=n(2265),s=n(4101),a=n(5968),u=n(961),c=n(538),d=n(3041);function f(e,t){let n=function(e){let t=(0,u.h)(()=>(0,s.BX)(e)),{isStatic:n}=(0,o.useContext)(a._);if(n){let[,n]=(0,o.useState)(e);(0,o.useEffect)(()=>t.on("change",n),[])}return t}(t()),r=()=>n.set(t());return r(),(0,c.L)(()=>{let t=()=>d.Wi.update(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,d.Pn)(r)}}),n}function h(e,t,n,i){if("function"==typeof e)return function(e){s.S1.current=[],e();let t=f(s.S1.current,e);return s.S1.current=void 0,t}(e);let o="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],o=e[1+n],s=e[2+n],a=e[3+n],u=(0,r.s)(o,s,{mixer:l(s[0]),...a});return t?u(i):u}(t,n,i);return Array.isArray(e)?m(e,o):m([e],([e])=>o(e))}function m(e,t){let n=(0,u.h)(()=>[]);return f(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);