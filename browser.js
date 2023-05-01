// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__,i=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,i){var l,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof i||null===i||"[object Array]"===n.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((c="value"in i)&&(a.call(r,t)||f.call(r,t)?(l=r.__proto__,r.__proto__=e,delete r[t],r[t]=i.value,r.__proto__=l):r[t]=i.value),y="get"in i,p="set"in i,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,i.get),p&&u&&u.call(r,t,i.set),r};function l(r,t,e){i(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var c="function"==typeof Math.fround?Math.fround:null,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",_=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,u;if(null==r)return p.call(r);e=r[d],u=d,t=null!=(o=r)&&b.call(o,u);try{r[d]=void 0}catch(t){return p.call(r)}return n=p.call(r),t?r[d]=e:delete r[d],n}:function(r){return p.call(r)},s="function"==typeof Float32Array,m=Number.POSITIVE_INFINITY,v="function"==typeof Float32Array?Float32Array:null,g="function"==typeof Float32Array?Float32Array:void 0,h=new(function(){var r,t,e;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,5e40]),e=t,r=(s&&e instanceof Float32Array||"[object Float32Array]"===_(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===m}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")})(1),j="function"==typeof c?c:function(r){return h[0]=r,h[0]},w=Math.floor;function S(r,t,e,n){var o,u,a,f,i,l,c,y,p,b,d,_,s;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(d=0,s=0;s<r;s++)d=j(d+t[o]),o+=e;return d}if(r<=128){for(u=t[o],a=t[o+e],f=t[o+2*e],i=t[o+3*e],l=t[o+4*e],c=t[o+5*e],y=t[o+6*e],p=t[o+7*e],o+=8*e,b=r%8,s=8;s<r-b;s+=8)u=j(u+t[o]),a=j(a+t[o+e]),f=j(f+t[o+2*e]),i=j(i+t[o+3*e]),l=j(l+t[o+4*e]),c=j(c+t[o+5*e]),y=j(y+t[o+6*e]),p=j(p+t[o+7*e]),o+=8*e;for(d=j(j(j(u+a)+j(f+i))+j(j(l+c)+j(y+p)));s<r;s++)d=j(d+t[o]),o+=e;return d}return _=w(r/2),j(S(_-=_%8,t,e,o)+S(r-_,t,e,o+_*e))}function A(r,t,e){var n,o,u;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)o=j(o+t[n]),n+=e;return o}return S(r,t,e,n)}function F(r,t,e,n){var o,u,a,f,i,l,c;if(l=r-t,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(o=A(r,e,n)/r,u=n<0?(1-r)*n:0,a=0,f=0,c=0;c<r;c++)i=j(e[u]-o),a=j(a+j(i*i)),f=j(f+i),u+=n;return j(j(a/l)-j(j(f/r)*j(f/l)))}function O(r,t,e,n,o){var u,a,f,i,l,c,y;if(c=r-t,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(u=S(r,e,n,o)/r,a=o,f=0,i=0,y=0;y<r;y++)l=j(e[a]-u),f=j(f+j(l*l)),i=j(i+l),a+=n;return j(j(f/c)-j(j(i/r)*j(i/c)))}function T(r,t,e,n){return F(r,t,e,n)}return l(A,"ndarray",S),l(F,"ndarray",O),l(T,"ndarray",(function(r,t,e,n,o){return O(r,t,e,n,o)})),T},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).svariance=t();
//# sourceMappingURL=browser.js.map