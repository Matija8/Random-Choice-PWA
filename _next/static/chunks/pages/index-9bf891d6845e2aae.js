(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(3198)}])},3198:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return d}});var r=e(5893),o=e(7294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){i(n,t,e[t])}))}return n}function u(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done)&&(e.push(c.value),!t||e.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l="No choice yet made!",s={display:"flex",flexDirection:"column"};function f(){var n=function(n){m(y+1),i(n)},t=(0,o.useState)(l),e=t[0],i=t[1],f=(0,o.useState)(["",""]),h=f[0],p=f[1],d=(0,o.useState)(0),y=d[0],m=d[1];return(0,r.jsx)("div",{style:{width:"min(600px, 90vw)",margin:"auto"},children:(0,r.jsxs)("form",{style:c({},s,{gap:"2rem"}),onSubmit:function(n){return n.preventDefault()},children:[(0,r.jsxs)("section",{style:c({},s),children:[(0,r.jsxs)("span",{children:["Choice count: ",y]}),(0,r.jsxs)("span",{children:["Chosen: ",e]})]}),(0,r.jsxs)("section",{style:c({},s),children:[(0,r.jsx)("button",{type:"button",onClick:function(){p([""].concat(a(h)))},children:"+"}),h.map((function(n,t){return(0,r.jsxs)("article",{style:{display:"flex",width:"100%"},children:[(0,r.jsx)("span",{style:{width:"2rem"},children:t+1}),(0,r.jsx)("input",{type:"text",style:{flexGrow:1},value:n,onChange:function(n){return p(h.map((function(e,r){return t!==r?e:n.target.value})))}}),(0,r.jsx)("button",{onClick:function(){return p(h.filter((function(n,e){return e!==t})))},children:"X"})]},t)}))]}),(0,r.jsxs)("section",{style:c({},s),children:[(0,r.jsx)("button",{type:"button",onClick:function(){var t=h.map((function(n,t){return{text:n.trim(),index:t}})).filter((function(n){var t=n.text;return Boolean(t)}));if(t.length<2)n("Can't choose from less than 2 non-empty options!");else{var e=u(function(n){if(n.length<1)throw Error("Can't choose from an empty array!");var t=Math.floor(Math.random()*n.length);return[n[t],t]}(t),1)[0];n("".concat(e.index+1," - ").concat(e.text))}},children:"Make a choice!"}),(0,r.jsx)("button",{type:"button",onClick:function(){m(0),i(l),p(["",""])},children:"Reset"})]})]})})}var h=e(9008);function p(n){var t=n.title;return(0,r.jsxs)(h.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("link",{rel:"icon",href:"".concat("/Random-Choice-PWA","/icons/favicon.png")}),(0,r.jsx)("meta",{name:"description",content:"Progressive web app to help you make choices."})]})}var d=function(){return(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(p,{title:"Random Choice App!"}),(0,r.jsx)("main",{style:{marginTop:"10vh"},children:(0,r.jsx)(f,{})})]})}},9008:function(n,t,e){n.exports=e(5443)}},function(n){n.O(0,[774,888,179],(function(){return t=5301,n(n.s=t);var t}));var t=n.O();_N_E=t}]);