import{g as _,a as P}from"./app-3131a3d4.js";var v={exports:{}};(function(h,E){(function(m,f){h.exports=f(P)})(window,function(m){return function(f){var c={};function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return f[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=f,r.c=c,r.d=function(t,n,a){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},r.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n||4&n&&typeof t=="object"&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&typeof t!="string")for(var y in t)r.d(a,y,(function(b){return t[b]}).bind(null,y));return a},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=13)}({0:function(f,c){f.exports=m},13:function(f,c,r){f.exports=r(14)},14:function(f,c,r){r.r(c),r.d(c,"default",function(){return j});var t=r(0),n=r.n(t);function a(i){return(a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(i)}function y(i,e){for(var o=0;o<e.length;o++){var u=e[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function b(i,e){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,u){return o.__proto__=u,o})(i,e)}function g(i){var e=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var o,u=d(i);if(e){var p=d(this).constructor;o=Reflect.construct(u,arguments,p)}else o=u.apply(this,arguments);return O(this,o)}}function O(i,e){if(e&&(a(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}(i)}function d(i){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(i)}var j=function(i){(function(s,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(l&&l.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),l&&b(s,l)})(p,i);var e,o,u=g(p);function p(s){var l;return function(w,x){if(!(w instanceof x))throw new TypeError("Cannot call a class as a function")}(this,p),(l=u.call(this,s)).defaultTag="div",l}return e=p,(o=[{key:"getTrustedHtml",value:function(){return{__html:this.props.model}}},{key:"render",value:function(){return this.tag=this.props.tag||this.defaultTag,n.a.createElement(this.tag,{className:"fr-view",dangerouslySetInnerHTML:this.getTrustedHtml()})}}])&&y(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),p}(n.a.Component)}})})})(v);var S=v.exports;const R=_(S);export{R as F};