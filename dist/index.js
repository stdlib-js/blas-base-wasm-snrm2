"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=u(function(G,d){
var b=require("path").resolve,R=require('@stdlib/fs-read-wasm/dist').sync,W=R(b(__dirname,"..","src","main.wasm"));d.exports=W
});var v=u(function(H,f){
var A=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),g=y();function n(e){if(!(this instanceof n))return new n(e);if(!A(e))throw new TypeError(S('271H0',e));return m.call(this,g,e,{env:{memory:e}}),this}O(n,m);q(n.prototype,"main",function(r,i,t){return this._instance.exports.c_snrm2(r,i,t)});q(n.prototype,"ndarray",function(r,i,t,o){return this._instance.exports.c_snrm2_ndarray(r,i,t,o)});f.exports=n
});var M=u(function(I,w){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),z=require('@stdlib/strided-base-stride2offset/dist'),B=require('@stdlib/wasm-memory/dist'),E=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),c=v();function s(){return this instanceof s?(c.call(this,new B({initial:0})),this):new s}j(s,c);h(s.prototype,"main",function(r,i,t){return this.ndarray(r,i,t,z(r,t))});h(s.prototype,"ndarray",function(r,i,t,o){var p,a;return p=E(this,[T(r,i,t,o)]),a=p[0],c.prototype.ndarray.call(this,r,a.ptr,a.stride,a.offset)});w.exports=s
});var _=u(function(J,x){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=M(),C=v(),l=new k;l.initializeSync();V(l,"Module",C.bind(null));x.exports=l
});var D=_();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
