"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var g=p(function(f,c){
var m=require('@stdlib/assert-is-array-like-object/dist'),b=require('@stdlib/assert-is-function/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r,n){var u,o,v,l,t,a,i;if(!m(e))throw new TypeError(s('1VZ2O',e));if(!b(r))throw new TypeError(s('1VZ2H',r));for(v=e.length,u=[],a=0;a<v;a++){if(t=e[a],!m(t))throw new TypeError(s('1VZBM',a,t));for(l=t.length,o=[],i=0;i<l;i++)o.push(r.call(n,t[i],[a,i],e));u.push(o)}return u}c.exports=h
});var y=g();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
