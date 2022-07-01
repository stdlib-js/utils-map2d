// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function s(s,i,n){var o,a,d,l,m,h,p;if(!r(s))throw new TypeError(t("0kd2a",s));if(!e(i))throw new TypeError(t("0kd2S",i));for(d=s.length,o=[],h=0;h<d;h++){if(m=s[h],!r(m))throw new TypeError(t("invalid argument. First argument must be an array-like object containing array-like objects. Index: `%u`. Value: `%s`.",h,m));for(l=m.length,a=[],p=0;p<l;p++)a.push(i.call(n,m[p],h,p,s));o.push(a)}return o}export{s as default};
//# sourceMappingURL=index.mjs.map
