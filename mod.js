// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var s=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":s(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,A=isNaN,O=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,s,f,l,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",f=1,l=0;l<r.length;l++)if(c(n=r[l]))s+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",f+=1}return s}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){return"string"==typeof r}function I(r){var e,t,n;if(!P(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var V,N=Object.prototype,$=N.toString,C=N.__defineGetter__,M=N.__defineSetter__,R=N.__lookupGetter__,B=N.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var L=V;function G(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function q(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var z=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,W=function(r){return z.exec(r).slice(1)};function U(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=q(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function X(r){var e=D(r),t="/"===tr(r,-1);return(r=q(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function D(r){return"/"===r.charAt(0)}function J(){var r=Array.prototype.slice.call(arguments,0);return X(er(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function Y(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=U(r).substr(1),e=U(e).substr(1);for(var n=t(r.split("/")),o=t(e.split("/")),i=Math.min(n.length,o.length),a=i,u=0;u<i;u++)if(n[u]!==o[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(o.slice(a))).join("/")}function H(r){var e=W(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function K(r,e){var t=W(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function Q(r){return W(r)[3]}var rr={extname:Q,basename:K,dirname:H,sep:"/",delimiter:":",relative:Y,join:J,isAbsolute:D,normalize:X,resolve:U};function er(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var tr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},nr=Z(Object.freeze({__proto__:null,basename:K,default:rr,delimiter:":",dirname:H,extname:Q,isAbsolute:D,join:J,normalize:X,relative:Y,resolve:U,sep:"/"}));var or=Object,ir=/./;function ar(r){return"boolean"==typeof r}var ur="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function cr(){return ur&&"symbol"==typeof Symbol.toStringTag}var sr=Object.prototype.toString;var fr=Object.prototype.hasOwnProperty;var lr,pr="function"==typeof Symbol?Symbol:void 0,gr="function"==typeof pr?pr.toStringTag:"";lr=cr()?function(r){var e,t,n,o,i;if(null==r)return sr.call(r);t=r[gr],i=gr,e=null!=(o=r)&&fr.call(o,i);try{r[gr]=void 0}catch(e){return sr.call(r)}return n=sr.call(r),e?r[gr]=t:delete r[gr],n}:function(r){return sr.call(r)};var dr=lr,yr=Boolean,br=Boolean.prototype.toString;var vr=cr();function hr(r){return"object"==typeof r&&(r instanceof yr||(vr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===dr(r)))}function wr(r){return ar(r)||hr(r)}function mr(){return new Function("return this;")()}G(wr,"isPrimitive",ar),G(wr,"isObject",hr);var jr="object"==typeof self?self:null,_r="object"==typeof window?window:null,Er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ar="object"==typeof Er?Er:null,Or="object"==typeof globalThis?globalThis:null;var Sr=function(r){if(arguments.length){if(!ar(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return mr()}if(Or)return Or;if(jr)return jr;if(_r)return _r;if(Ar)return Ar;throw new Error("unexpected error. Unable to resolve global object.")}(),kr=Sr.document&&Sr.document.childNodes,xr=Int8Array;function Fr(){return/^\s*function\s*([^(]*)/i}var Tr,Pr=/^\s*function\s*([^(]*)/i;G(Fr,"REGEXP",Pr),Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===dr(r)};var Ir=Tr;function Vr(r){return null!==r&&"object"==typeof r}var Nr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Vr);function $r(r){var e,t,n,o;if(("Object"===(t=dr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Pr.exec(n.toString()))return e[1]}return Vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(Vr,"isObjectLikeArray",Nr);var Cr="function"==typeof ir||"object"==typeof xr||"function"==typeof kr?function(r){return $r(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?$r(r).toLowerCase():e};var Mr,Rr,Br=Object.getPrototypeOf;Rr=Object.getPrototypeOf,Mr="function"===Cr(Rr)?Br:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Lr=Mr;function Gr(r){return null==r?null:(r=or(r),Lr(r))}function Zr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===dr(r))return!0;r=Gr(r)}return!1}function qr(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Zr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var zr="function"==typeof Math.fround?Math.fround:null,Wr="function"==typeof Float32Array;var Ur=Number.POSITIVE_INFINITY,Xr="function"==typeof Float32Array?Float32Array:null;var Dr,Jr="function"==typeof Float32Array?Float32Array:void 0;Dr=function(){var r,e;if("function"!=typeof Xr)return!1;try{r=function(r){return Wr&&r instanceof Float32Array||"[object Float32Array]"===dr(r)}(e=new Xr([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Ur}catch(e){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Yr=new Dr(1);var Hr="function"==typeof zr?zr:function(r){return Yr[0]=r,Yr[0]},Kr=Math.floor;function Qr(r,e,t,n){var o,i,a,u,c,s,f,l,p,g,d,y,b;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(d=0,b=0;b<r;b++)d=Hr(d+e[o]),o+=t;return d}if(r<=128){for(i=e[o],a=e[o+t],u=e[o+2*t],c=e[o+3*t],s=e[o+4*t],f=e[o+5*t],l=e[o+6*t],p=e[o+7*t],o+=8*t,g=r%8,b=8;b<r-g;b+=8)i=Hr(i+e[o]),a=Hr(a+e[o+t]),u=Hr(u+e[o+2*t]),c=Hr(c+e[o+3*t]),s=Hr(s+e[o+4*t]),f=Hr(f+e[o+5*t]),l=Hr(l+e[o+6*t]),p=Hr(p+e[o+7*t]),o+=8*t;for(d=Hr(Hr(Hr(i+a)+Hr(u+c))+Hr(Hr(s+f)+Hr(l+p)));b<r;b++)d=Hr(d+e[o]),o+=t;return d}return y=Kr(r/2),Hr(Qr(y-=y%8,e,t,o)+Qr(r-y,e,t,o+y*t))}function re(r,e,t){var n,o,i;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,i=0;i<r;i++)o=Hr(o+e[n]),n+=t;return o}return Qr(r,e,t,n)}G(re,"ndarray",Qr);var ee,te=qr((0,nr.join)("/home/runner/work/stats-base-svariance/stats-base-svariance/node_modules/@stdlib/blas-ext-base-ssumpw/lib","./native.js")),ne=ee=Zr(te)?re:te;const{ndarray:oe}=ee;function ie(r,e,t,n){var o,i,a,u,c,s,f;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===n)return 0;for(o=ne(r,t,n)/r,i=n<0?(1-r)*n:0,a=0,u=0,f=0;f<r;f++)c=Hr(t[i]-o),a=Hr(a+Hr(c*c)),u=Hr(u+c),i+=n;return Hr(Hr(a/s)-Hr(Hr(u/r)*Hr(u/s)))}G(ie,"ndarray",(function(r,e,t,n,o){var i,a,u,c,s,f,l;if(f=r-e,r<=0||f<=0)return NaN;if(1===r||0===n)return 0;for(i=oe(r,t,n,o)/r,a=o,u=0,c=0,l=0;l<r;l++)s=Hr(t[a]-i),u=Hr(u+Hr(s*s)),c=Hr(c+s),a+=n;return Hr(Hr(u/f)-Hr(Hr(c/r)*Hr(c/f)))}));var ae,ue=qr((0,nr.join)("/home/runner/work/stats-base-svariance/stats-base-svariance/node_modules/@stdlib/stats-base-svariancepn/lib","./native.js")),ce=ae=Zr(ue)?ie:ue;const{ndarray:se}=ae;function fe(r,e,t,n){return ce(r,e,t,n)}function le(r,e,t,n,o){return se(r,e,t,n,o)}G(fe,"ndarray",le);export{fe as default,le as ndarray};
//# sourceMappingURL=mod.js.map
