import{H as d,a$ as o,b0 as l}from"./BPtkx-2G.js";var s=d.extend({name:"keyfilter-directive"}),c=o.extend({style:s});function b(t){return k(t)||p(t)||v(t)||m()}function m(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(t,e){if(t){if(typeof t=="string")return u(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function p(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function k(t){if(Array.isArray(t))return u(t)}function u(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(t)}var h=c.extend("keyfilter",{beforeMount:function(e,n){var r=this.getTarget(e);if(r){if(r.$_pkeyfilterModifier=this.getModifiers(n),f(n.value)){var i,a;r.$_pkeyfilterPattern=((i=n.value)===null||i===void 0?void 0:i.pattern)||n.value,r.$_pkeyfilterValidateOnly=((a=n.value)===null||a===void 0?void 0:a.validateOnly)||!1}this.bindEvents(r),r.setAttribute("data-pd-keyfilter",!0)}},updated:function(e,n){var r=this.getTarget(e);if(r){if(r.$_pkeyfilterModifier=this.getModifiers(n),this.unbindEvents(e,n),f(n.value)){var i,a;r.$_pkeyfilterPattern=((i=n.value)===null||i===void 0?void 0:i.pattern)||n.value,r.$_pkeyfilterValidateOnly=((a=n.value)===null||a===void 0?void 0:a.validateOnly)||!1}this.bindEvents(r)}},unmounted:function(e,n){this.unbindEvents(e,n)},DEFAULT_PATTERNS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},methods:{getTarget:function(e){return l(e,"data-pc-name","inputtext")||l(e,"data-pc-name","textarea")?e:null},getModifiers:function(e){return e.modifiers&&Object.keys(e.modifiers).length?Object.keys(e.modifiers)[Object.keys.length-1]:""},getRegex:function(e){return e.$_pkeyfilterPattern?e.$_pkeyfilterPattern:e.$_pkeyfilterModifier?this.DEFAULT_PATTERNS[e.$_pkeyfilterModifier]:/./},bindEvents:function(e){var n=this;e.$_keyfilterKeydownEvent=function(r){return n.onKeydown(r,e)},e.$_keyfilterPasteEvent=function(r){return n.onPaste(r,e)},e.addEventListener("keypress",e.$_keyfilterKeydownEvent),e.addEventListener("paste",e.$_keyfilterPasteEvent)},unbindEvents:function(e){e.removeEventListener("keypress",e.$_keyfilterKeydownEvent),e.removeEventListener("paste",e.$_keyfilterPasteEvent),e.$_keyfilterKeydownEvent=null,e.$_keyfilterPasteEvent=null},onKeydown:function(e,n){if(!(e.ctrlKey||e.altKey||e.metaKey||e.key==="Tab")){var r=this.getRegex(n);if(r!==""){var i="".concat(e.key);n.$_pkeyfilterValidateOnly&&(i="".concat(e.target.value).concat(e.key)),r.test(i)||e.preventDefault()}}},onPaste:function(e,n){var r=this.getRegex(n);if(r!==""){var i=e.clipboardData.getData("text"),a="";b(i).forEach(function(y){if(n.$_pkeyfilterValidateOnly?a+=y:a=y,!r.test(a))return e.preventDefault(),!1})}}}});export{h as K};
