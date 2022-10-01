// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,s,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),s="get"in n,y="set"in n,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),y&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===b(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(p(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function y(){var r=Array.prototype.slice.call(arguments,0);return s(p(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function p(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var b="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},v=/./;function d(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return j&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var m,h="function"==typeof Symbol?Symbol.toStringTag:"";m=w()?function(r){var t,n,e,o,u;if(null==r)return _.call(r);n=r[h],u=h,t=null!=(o=r)&&g.call(o,u);try{r[h]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[h]=n:delete r[h],e}:function(r){return _.call(r)};var A=m,O=Boolean.prototype.toString;var E=w();function S(r){return"object"==typeof r&&(r instanceof Boolean||(E?function(r){try{return O.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===A(r)))}function F(r){return d(r)||S(r)}function P(){return new Function("return this;")()}l(F,"isPrimitive",d),l(F,"isObject",S);var N="object"==typeof self?self:null,T="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof B?B:null;var k=function(r){if(arguments.length){if(!d(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return P()}if(N)return N;if(T)return T;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),x=k.document&&k.document.childNodes,M=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var C,G=/^\s*function\s*([^(]*)/i;l(V,"REGEXP",G),C=Array.isArray?Array.isArray:function(r){return"[object Array]"===A(r)};var L=C;function q(r){return null!==r&&"object"==typeof r}var J=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!L(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(q);function R(r){var t,n,e,o;if(("Object"===(n=A(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=G.exec(e.toString()))return t[1]}return q(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(q,"isObjectLikeArray",J);var U="function"==typeof v||"object"==typeof M||"function"==typeof x?function(r){return R(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?R(r).toLowerCase():t};var X,Y,z=Object.getPrototypeOf;Y=Object.getPrototypeOf,X="function"===U(Y)?z:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===A(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=X;function H(r){return null==r?null:(r=Object(r),D(r))}function K(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===A(r))return!0;r=H(r)}return!1}function Q(r){try{return require(r)}catch(r){return K(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var W="function"==typeof Math.fround?Math.fround:null,Z="function"==typeof Float32Array;var $=Number.POSITIVE_INFINITY,rr="function"==typeof Float32Array?Float32Array:null;var tr,nr="function"==typeof Float32Array?Float32Array:void 0;tr=function(){var r,t;if("function"!=typeof rr)return!1;try{r=function(r){return Z&&r instanceof Float32Array||"[object Float32Array]"===A(r)}(t=new rr([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===$}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er=new tr(1);var or,ur="function"==typeof W?W:function(r){return er[0]=r,er[0]},ir=Math.floor;function ar(r,t,n,e){var o,u,i,a,f,c,l,s,y,p,b,v,d;if(r<=0)return 0;if(1===r||0===n)return t[e];if(o=e,r<8){for(b=0,d=0;d<r;d++)b=ur(b+t[o]),o+=n;return b}if(r<=128){for(u=t[o],i=t[o+n],a=t[o+2*n],f=t[o+3*n],c=t[o+4*n],l=t[o+5*n],s=t[o+6*n],y=t[o+7*n],o+=8*n,p=r%8,d=8;d<r-p;d+=8)u=ur(u+t[o]),i=ur(i+t[o+n]),a=ur(a+t[o+2*n]),f=ur(f+t[o+3*n]),c=ur(c+t[o+4*n]),l=ur(l+t[o+5*n]),s=ur(s+t[o+6*n]),y=ur(y+t[o+7*n]),o+=8*n;for(b=ur(ur(ur(u+i)+ur(a+f))+ur(ur(c+l)+ur(s+y)));d<r;d++)b=ur(b+t[o]),o+=n;return b}return v=ir(r/2),ur(ar(v-=v%8,t,n,o)+ar(r-v,t,n,o+v*n))}function fr(r,t,n){var e,o,u;if(r<=0)return 0;if(1===r||0===n)return t[0];if(e=n<0?(1-r)*n:0,r<8){for(o=0,u=0;u<r;u++)o=ur(o+t[e]),e+=n;return o}return ar(r,t,n,e)}l(fr,"ndarray",ar);var cr=Q(y("/home/runner/work/stats-base-svariance/stats-base-svariance/node_modules/@stdlib/blas-ext-base-ssumpw/lib","./native.js")),lr=or=K(cr)?fr:cr;const{ndarray:sr}=or;function yr(r,t,n,e){var o,u,i,a,f,c,l;if(c=r-t,r<=0||c<=0)return NaN;if(1===r||0===e)return 0;for(o=lr(r,n,e)/r,u=e<0?(1-r)*e:0,i=0,a=0,l=0;l<r;l++)f=ur(n[u]-o),i=ur(i+ur(f*f)),a=ur(a+f),u+=e;return ur(ur(i/c)-ur(ur(a/r)*ur(a/c)))}var pr;l(yr,"ndarray",(function(r,t,n,e,o){var u,i,a,f,c,l,s;if(l=r-t,r<=0||l<=0)return NaN;if(1===r||0===e)return 0;for(u=sr(r,n,e,o)/r,i=o,a=0,f=0,s=0;s<r;s++)c=ur(n[i]-u),a=ur(a+ur(c*c)),f=ur(f+c),i+=e;return ur(ur(a/l)-ur(ur(f/r)*ur(f/l)))}));var br=Q(y("/home/runner/work/stats-base-svariance/stats-base-svariance/node_modules/@stdlib/stats-base-svariancepn/lib","./native.js")),vr=pr=br instanceof Error?yr:br;const{ndarray:dr}=pr;function jr(r,t,n,e){return vr(r,t,n,e)}function wr(r,t,n,e,o){return dr(r,t,n,e,o)}l(jr,"ndarray",wr);export{jr as default,wr as ndarray};
//# sourceMappingURL=mod.js.map
