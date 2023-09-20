// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(e=r.length,t(e)===e)&&r.length>=0&&r.length<=4294967295;var e}var e=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,u=Object.defineProperty,i=Object.prototype,l=i.toString,f=i.__defineGetter__,c=i.__defineSetter__,a=i.__lookupGetter__,p=i.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?u:function(t,r,e){var n,o,u,y;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===l.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(a.call(t,r)||p.call(t,r)?(n=t.__proto__,t.__proto__=i,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,y="set"in e,o&&(u||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&f&&f.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var y=o;function s(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function b(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return v&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var _=d()?function(t){var r,e,n,o,u;if(null==t)return w.call(t);e=t[h],u=h,r=null!=(o=t)&&g.call(o,u);try{t[h]=void 0}catch(r){return w.call(t)}return n=w.call(t),r?t[h]=e:delete t[h],n}:function(t){return w.call(t)},j=Boolean.prototype.toString;var m=d();function S(t){return"object"==typeof t&&(t instanceof Boolean||(m?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function E(t){return b(t)||S(t)}function O(){return new Function("return this;")()}s(E,"isPrimitive",b),s(E,"isObject",S);var A="object"==typeof self?self:null,T="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof B?B:null;var V=function(t){if(arguments.length){if(!b(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(A)return A;if(T)return T;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),G=V.document&&V.document.childNodes,x=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var M=/^\s*function\s*([^(]*)/i;s(C,"REGEXP",M);var k=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function L(t){return null!==t&&"object"==typeof t}function Z(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=M.exec(n.toString()))return r[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!k(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(L));var F="function"==typeof e||"object"==typeof x||"function"==typeof G?function(t){return Z(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Z(t).toLowerCase():r};function I(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function R(t,e,n){var o,u,i,l,f,c,a;if(!r(t))throw new TypeError(I("1VZ2O,GW",t));if("function"!==F(e))throw new TypeError(I("1VZ2H,G6",e));for(i=t.length,o=[],c=0;c<i;c++){if(!r(f=t[c]))throw new TypeError(I("1VZBM,OD",c,f));for(l=f.length,u=[],a=0;a<l;a++)u.push(e.call(n,f[a],[c,a],t));o.push(u)}return o}export{R as default};
//# sourceMappingURL=mod.js.map
