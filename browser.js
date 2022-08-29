// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,i=n.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var l,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(f.call(r,t)||i.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&u&&u.call(r,t,e.set),r};function c(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y="function"==typeof Math.fround?Math.fround:null,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,b=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",s=p&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,a;if(null==r)return d.call(r);e=r[_],a=_,t=null!=(o=r)&&b.call(o,a);try{r[_]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[_]=e:delete r[_],n}:function(r){return d.call(r)},v="function"==typeof Float32Array,m=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null,h="function"==typeof Float32Array?Float32Array:void 0,j=new(function(){var r,t,e;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,5e40]),e=t,r=(v&&e instanceof Float32Array||"[object Float32Array]"===s(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===m}catch(t){r=!1}return r}()?h:function(){throw new Error("not implemented")})(1),w="function"==typeof y?y:function(r){return j[0]=r,j[0]},S=Math.floor;function A(r,t,e,n){var o,a,u,f,i,l,c,y,p,d,b,_,s;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,s=0;s<r;s++)b=w(b+t[o]),o+=e;return b}if(r<=128){for(a=t[o],u=t[o+e],f=t[o+2*e],i=t[o+3*e],l=t[o+4*e],c=t[o+5*e],y=t[o+6*e],p=t[o+7*e],o+=8*e,d=r%8,s=8;s<r-d;s+=8)a=w(a+t[o]),u=w(u+t[o+e]),f=w(f+t[o+2*e]),i=w(i+t[o+3*e]),l=w(l+t[o+4*e]),c=w(c+t[o+5*e]),y=w(y+t[o+6*e]),p=w(p+t[o+7*e]),o+=8*e;for(b=w(w(w(a+u)+w(f+i))+w(w(l+c)+w(y+p)));s<r;s++)b=w(b+t[o]),o+=e;return b}return _=S(r/2),w(A(_-=_%8,t,e,o)+A(r-_,t,e,o+_*e))}function F(r,t,e){var n,o,a;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,a=0;a<r;a++)o=w(o+t[n]),n+=e;return o}return A(r,t,e,n)}function O(r,t,e,n){var o,a,u,f,i,l,c;if(l=r-t,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(o=F(r,e,n)/r,a=n<0?(1-r)*n:0,u=0,f=0,c=0;c<r;c++)i=w(e[a]-o),u=w(u+w(i*i)),f=w(f+i),a+=n;return w(w(u/l)-w(w(f/r)*w(f/l)))}function T(r,t,e,n,o){var a,u,f,i,l,c,y;if(c=r-t,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(a=A(r,e,n,o)/r,u=o,f=0,i=0,y=0;y<r;y++)l=w(e[u]-a),f=w(f+w(l*l)),i=w(i+l),u+=n;return w(w(f/c)-w(w(i/r)*w(i/c)))}function N(r,t,e,n){return O(r,t,e,n)}function P(r,t,e,n,o){return T(r,t,e,n,o)}c(F,"ndarray",A),c(O,"ndarray",T),c(N,"ndarray",P),r.default=N,r.ndarray=P,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).svariance={});
//# sourceMappingURL=browser.js.map
