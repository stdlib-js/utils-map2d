// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).map2d=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=Math.floor;var t=function(r){return e(r)===r},n=t;var i=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&n(r.length)&&r.length>=0&&r.length<=4294967295},a=/./,o="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=function(){try{return o({},"x",{}),!0}catch(r){return!1}},c=Object.defineProperty,f=Object.prototype,s=f.toString,l=f.__defineGetter__,p=f.__defineSetter__,g=f.__lookupGetter__,v=f.__lookupSetter__;var d=function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===s.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===s.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(g.call(r,e)||v.call(r,e)?(n=r.__proto__,r.__proto__=f,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&l&&l.call(r,e,t.get),o&&p&&p.call(r,e,t.set),r},h=c,m=d,b=u()?h:m;var y=function(r,e,t){b(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},w=y;var E=function(r){return"boolean"==typeof r};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var P=function(){return j&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,T=_;var x=function(r){return T.call(r)},O=Object.prototype.hasOwnProperty;var V=function(r,e){return null!=r&&O.call(r,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",k=V,I=S,A=_;var F=x,R=function(r){var e,t,n;if(null==r)return A.call(r);t=r[I],e=k(r,I);try{r[I]=void 0}catch(e){return A.call(r)}return n=A.call(r),e?r[I]=t:delete r[I],n},$=P()?R:F,M=Boolean.prototype.toString;var C=$,N=function(r){try{return M.call(r),!0}catch(r){return!1}},B=P();var G=function(r){return"object"==typeof r&&(r instanceof Boolean||(B?N(r):"[object Boolean]"===C(r)))},L=E,Z=G;var W=w,X=function(r){return L(r)||Z(r)},z=G;W(X,"isPrimitive",E),W(X,"isObject",z);var U=X;var Y=function(){return new Function("return this;")()},D="object"==typeof self?self:null,q="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof H?H:null;module.exports=J;var K=U.isPrimitive,Q=Y,rr=D,er=q,tr=r(Object.freeze({__proto__:null}));var nr=function(r){if(arguments.length){if(!K(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Q()}if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")},ir=nr(),ar=ir.document&&ir.document.childNodes,or=Int8Array,ur=a,cr=ar,fr=or;var sr=function(){return"function"==typeof ur||"object"==typeof fr||"function"==typeof cr};var lr=function(){return/^\s*function\s*([^(]*)/i},pr=lr;w(pr,"REGEXP",lr());var gr=pr,vr=$;var dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===vr(r)};var hr=function(r){return null!==r&&"object"==typeof r};w(hr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(hr));var mr=hr;var br=$,yr=gr.REGEXP,wr=function(r){return mr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Er=function(r){var e,t,n;if(("Object"===(t=br(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return wr(r)?"Buffer":t},jr=Er;var Pr=Er;var _r=function(r){var e;return null===r?"null":"object"===(e=typeof r)?jr(r).toLowerCase():e},Tr=function(r){return Pr(r).toLowerCase()},xr=sr()?Tr:_r;var Or=function(r){return"function"===xr(r)};var Vr=function(r){return"string"==typeof r},Sr=String.prototype.valueOf;var kr=$,Ir=function(r){try{return Sr.call(r),!0}catch(r){return!1}},Ar=P();var Fr=function(r){return"object"==typeof r&&(r instanceof String||(Ar?Ir(r):"[object String]"===kr(r)))},Rr=Vr,$r=Fr;var Mr=w,Cr=function(r){return Rr(r)||$r(r)},Nr=Fr;Mr(Cr,"isPrimitive",Vr),Mr(Cr,"isObject",Nr);var Br=Cr,Gr=t;var Lr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Gr(r.length)&&r.length>=0&&r.length<=9007199254740991};var Zr=function(r){return"number"==typeof r},Wr=Number,Xr=Wr.prototype.toString;var zr=$,Ur=Wr,Yr=function(r){try{return Xr.call(r),!0}catch(r){return!1}},Dr=P();var qr=function(r){return"object"==typeof r&&(r instanceof Ur||(Dr?Yr(r):"[object Number]"===zr(r)))},Hr=Zr,Jr=qr;var Kr=w,Qr=function(r){return Hr(r)||Jr(r)},re=qr;Kr(Qr,"isPrimitive",Zr),Kr(Qr,"isObject",re);var ee=Qr,te=Number.POSITIVE_INFINITY,ne=Wr.NEGATIVE_INFINITY,ie=te,ae=ne,oe=t;var ue=function(r){return r<ie&&r>ae&&oe(r)},ce=ee.isPrimitive,fe=ue;var se=function(r){return ce(r)&&fe(r)},le=ee.isObject,pe=ue;var ge=function(r){return le(r)&&pe(r.valueOf())},ve=se,de=ge;var he=w,me=function(r){return ve(r)||de(r)},be=ge;he(me,"isPrimitive",se),he(me,"isObject",be);var ye=me;var we=function(r){return r!=r},Ee=ee.isPrimitive,je=we;var Pe=function(r){return Ee(r)&&je(r)},_e=ee.isObject,Te=we;var xe=function(r){return _e(r)&&Te(r.valueOf())},Oe=Pe,Ve=xe;var Se=w,ke=function(r){return Oe(r)||Ve(r)},Ie=xe;Se(ke,"isPrimitive",Pe),Se(ke,"isObject",Ie);var Ae=Lr,Fe=ye.isPrimitive,Re=Br.isPrimitive,$e=ke.isPrimitive;var Me=function(r,e,t){var n,i,a;if(!Ae(r)&&!Re(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Fe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Re(r)){if(!Re(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,$e(e)){for(a=i;a<n;a++)if($e(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Ce=Me,Ne=Br.isPrimitive;var Be=function(r){if(!Ne(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ge=Br.isPrimitive;var Le=function(r){if(!Ge(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ze=Be,We=Le,Xe=Br.isPrimitive;var ze=function(r){return Xe(r)&&r===We(r)&&r!==Ze(r)},Ue=te,Ye=ne;var De=function(r){return r==r&&r>Ye&&r<Ue},qe=ye.isPrimitive;var He=function(r){return qe(r)&&r>=0},Je=ye.isObject;var Ke=function(r){return Je(r)&&r.valueOf()>=0},Qe=He,rt=Ke;var et=w,tt=function(r){return Qe(r)||rt(r)},nt=Ke;et(tt,"isPrimitive",He),et(tt,"isObject",nt);var it=tt.isPrimitive,at=Br.isPrimitive;var ot=function(r,e){var t,n;if(!at(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!it(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ut=ye.isPrimitive,ct=Br.isPrimitive;var ft=function(r,e,t){var n,i;if(!ct(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ct(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ut(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},st=ot,lt=ft;var pt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(lt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+st("0",i):st("0",i)+r,n&&(r="-"+r)),r},gt=ze,vt=Le,dt=Be,ht=De,mt=ee.isPrimitive,bt=pt;var yt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!ht(n)){if(!mt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=bt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=bt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=gt(r.specifier)?vt(t):dt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},wt=Br.isPrimitive,Et=/[-\/\\^$*+?.()|[\]{}]/g;var jt=function(r){var e,t;if(!wt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Et,"\\$&"):(e=(e=r.substring(1,t)).replace(Et,"\\$&"),r=r[0]+e+r.substring(t))},Pt=RegExp.prototype.exec;var _t=$,Tt=function(r){try{return Pt.call(r),!0}catch(r){return!1}},xt=P();var Ot=jt,Vt=Or,St=Br.isPrimitive,kt=function(r){return"object"==typeof r&&(r instanceof RegExp||(xt?Tt(r):"[object RegExp]"===_t(r)))};var It=ze,At=Le,Ft=Be,Rt=function(r,e,t){if(!St(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(St(e))e=Ot(e),e=new RegExp(e,"g");else if(!kt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!St(t)&&!Vt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},$t=De,Mt=ee.isPrimitive,Ct=function(r){return Math.abs(r)},Nt=/e\+(\d)$/,Bt=/e-(\d)$/,Gt=/^(\d+)$/,Lt=/^(\d+)e/,Zt=/\.0$/,Wt=/\.0*e/,Xt=/(\..*[^0])0*e/;var zt=function(r){var e,t,n=parseFloat(r.arg);if(!$t(n)){if(!Mt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ct(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Rt(t,Xt,"$1e"),t=Rt(t,Wt,"e"),t=Rt(t,Zt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Rt(t,Nt,"e+0$1"),t=Rt(t,Bt,"e-0$1"),r.alternate&&(t=Rt(t,Gt,"$1."),t=Rt(t,Lt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=It(r.specifier)?At(t):Ft(t)},Ut=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Yt=ot;var Dt=Br.isPrimitive,qt=Ce,Ht=we,Jt=yt,Kt=zt,Qt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Ut.exec(r);a;)(t=r.slice(e,Ut.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Ut.lastIndex,a=Ut.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},rn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Yt(" ",n):Yt(" ",n)+r},en=pt,tn=String.fromCharCode;var nn=function(r){var e,t,n,i,a,o,u,c,f;if(!Dt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Qt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Dt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!qt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Ht(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Ht(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Jt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Ht(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ht(a)?String(n.arg):tn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Kt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=en(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=rn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},an=i,on=Or,un=nn;return function(r,e,t){var n,i,a,o,u,c,f;if(!an(r))throw new TypeError(un("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(!on(e))throw new TypeError(un("invalid argument. Second argument must be a function. Value: `%s`.",e));for(a=r.length,n=[],c=0;c<a;c++){if(u=r[c],!an(u))throw new TypeError(un("invalid argument. First argument must be an array-like object containing array-like objects. Index: %u. Value: `%s`.",c,u));for(o=u.length,i=[],f=0;f<o;f++)i.push(e.call(t,u[f],c,f,r));n.push(i)}return n}}));
//# sourceMappingURL=bundle.js.map
