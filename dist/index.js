"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=p(function(f,m){
var l=require('@stdlib/assert-is-array-like-object/dist'),b=require('@stdlib/assert-is-function/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r,g){var n,u,s,v,t,a,i;if(!l(e))throw new TypeError(o('1VZ2O',e));if(!b(r))throw new TypeError(o('1VZ2H',r));for(s=e.length,n=[],a=0;a<s;a++){if(t=e[a],!l(t))throw new TypeError(o('1VZBM',a,t));for(v=t.length,u=[],i=0;i<v;i++)u.push(r.call(g,t[i],[a,i],e));n.push(u)}return n}m.exports=h
});var y=c();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
