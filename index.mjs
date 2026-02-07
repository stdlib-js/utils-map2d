// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";function e(e,o,i){var n,d,m,h,l,p,f;if(!r(e))throw new TypeError(s("1VZ2O",e));if(!t(o))throw new TypeError(s("1VZ2H",o));for(m=e.length,n=[],p=0;p<m;p++){if(l=e[p],!r(l))throw new TypeError(s("1VZBM",p,l));for(h=l.length,d=[],f=0;f<h;f++)d.push(o.call(i,l[f],[p,f],e));n.push(d)}return n}export{e as default};
//# sourceMappingURL=index.mjs.map
