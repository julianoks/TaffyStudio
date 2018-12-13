(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.studio = {})));
}(this, (function (exports) { 'use strict';

	// https://d3js.org Version 5.4.0. Copyright 2018 Mike Bostock.
	const d3 = (function(t,n){return n({});})(undefined,function(t){function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){return 1===t.length&&(t=function(t){return function(e,r){return n(t(e),r)}}(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o;}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1;}return r}}}function r(t,n){return [t,n]}function i(t){return null===t?NaN:+t}function o(t,n){var e,r,o=t.length,a=0,u=-1,f=0,c=0;if(null==n)for(;++u<o;)isNaN(e=i(t[u]))||(c+=(r=e-f)*(e-(f+=r/++a)));else for(;++u<o;)isNaN(e=i(n(t[u],u,t)))||(c+=(r=e-f)*(e-(f+=r/++a)));if(a>1)return c/(a-1)}function a(t,n){var e=o(t,n);return e?Math.sqrt(e):e}function u(t,n){var e,r,i,o=t.length,a=-1;if(null==n){for(;++a<o;)if(null!=(e=t[a])&&e>=e)for(r=i=e;++a<o;)null!=(e=t[a])&&(r>e&&(r=e),i<e&&(i=e));}else for(;++a<o;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=i=e;++a<o;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),i<e&&(i=e));return [r,i]}function f(t){return function(){return t}}function c(t){return t}function s(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}function l(t,n,e){var r,i,o,a,u=-1;if(n=+n,t=+t,e=+e,t===n&&e>0)return [t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=h(t,n,e))||!isFinite(a))return [];if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a;else for(t=Math.floor(t*a),n=Math.ceil(n*a),o=new Array(i=Math.ceil(t-n+1));++u<i;)o[u]=(t-u)/a;return r&&o.reverse(),o}function h(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=rs?10:o>=is?5:o>=os?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=rs?10:o>=is?5:o>=os?2:1)}function d(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=rs?i*=10:o>=is?i*=5:o>=os&&(i*=2),n<t?-i:i}function p(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function v(t,n,e){if(null==e&&(e=i),r=t.length){if((n=+n)<=0||r<2)return +e(t[0],0,t);if(n>=1)return +e(t[r-1],r-1,t);var r,o=(r-1)*n,a=Math.floor(o),u=+e(t[a],a,t);return u+(+e(t[a+1],a+1,t)-u)*(o-a)}}function g(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e);}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r}function y(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n];return e}function _(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e);}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r}function b(t){if(!(i=t.length))return [];for(var n=-1,e=_(t,m),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n];return r}function m(t){return t.length}function x(t){return t}function w(t){return "translate("+(t+.5)+",0)"}function M(t){return "translate(0,"+(t+.5)+")"}function A(){return !this.__axis}function T(t,n){function e(e){var h=null==i?n.ticks?n.ticks.apply(n,r):n.domain():i,d=null==o?n.tickFormat?n.tickFormat.apply(n,r):x:o,p=Math.max(a,0)+f,v=n.range(),g=+v[0]+.5,y=+v[v.length-1]+.5,_=(n.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return +t(e)+n}}:function(t){return function(n){return +t(n)}})(n.copy()),b=e.selection?e.selection():e,m=b.selectAll(".domain").data([null]),w=b.selectAll(".tick").data(h,n).order(),M=w.exit(),T=w.enter().append("g").attr("class","tick"),N=w.select("line"),S=w.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),w=w.merge(T),N=N.merge(T.append("line").attr("stroke","#000").attr(s+"2",c*a)),S=S.merge(T.append("text").attr("fill","#000").attr(s,c*p).attr("dy",t===us?"0em":t===cs?"0.71em":"0.32em")),e!==b&&(m=m.transition(e),w=w.transition(e),N=N.transition(e),S=S.transition(e),M=M.transition(e).attr("opacity",ls).attr("transform",function(t){return isFinite(t=_(t))?l(t):this.getAttribute("transform")}),T.attr("opacity",ls).attr("transform",function(t){var n=this.parentNode.__axis;return l(n&&isFinite(n=n(t))?n:_(t))})),M.remove(),m.attr("d",t===ss||t==fs?"M"+c*u+","+g+"H0.5V"+y+"H"+c*u:"M"+g+","+c*u+"V0.5H"+y+"V"+c*u),w.attr("opacity",1).attr("transform",function(t){return l(_(t))}),N.attr(s+"2",c*a),S.attr(s,c*p).text(d),b.filter(A).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===fs?"start":t===ss?"end":"middle"),b.each(function(){this.__axis=_;});}var r=[],i=null,o=null,a=6,u=6,f=3,c=t===us||t===ss?-1:1,s=t===ss||t===fs?"x":"y",l=t===us||t===cs?w:M;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return r=as.call(arguments),e},e.tickArguments=function(t){return arguments.length?(r=null==t?[]:as.call(t),e):r.slice()},e.tickValues=function(t){return arguments.length?(i=null==t?null:as.call(t),e):i&&i.slice()},e.tickFormat=function(t){return arguments.length?(o=t,e):o},e.tickSize=function(t){return arguments.length?(a=u=+t,e):a},e.tickSizeInner=function(t){return arguments.length?(a=+t,e):a},e.tickSizeOuter=function(t){return arguments.length?(u=+t,e):u},e.tickPadding=function(t){return arguments.length?(f=+t,e):f},e}function N(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[];}return new S(r)}function S(t){this._=t;}function E(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=hs,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function k(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),ps.hasOwnProperty(n)?{space:ps[n],local:t}:t}function C(t){var n=k(t);return (n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===ds&&n.documentElement.namespaceURI===ds?n.createElement(t):n.createElementNS(e,t)}})(n)}function P(){}function z(t){return null==t?P:function(){return this.querySelector(t)}}function R(){return []}function L(t){return null==t?R:function(){return this.querySelectorAll(t)}}function D(t){return new Array(t.length)}function U(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n;}function q(t,n,e,r,i,o){for(var a,u=0,f=n.length,c=o.length;u<c;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new U(t,o[u]);for(;u<f;++u)(a=n[u])&&(i[u]=a);}function O(t,n,e,r,i,o,a){var u,f,c,s={},l=n.length,h=o.length,d=new Array(l);for(u=0;u<l;++u)(f=n[u])&&(d[u]=c=bs+a.call(f,f.__data__,u,n),c in s?i[u]=f:s[c]=f);for(u=0;u<h;++u)(f=s[c=bs+a.call(t,o[u],u,o)])?(r[u]=f,f.__data__=o[u],s[c]=null):e[u]=new U(t,o[u]);for(u=0;u<l;++u)(f=n[u])&&s[d[u]]===f&&(i[u]=f);}function Y(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function B(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function F(t,n){return t.style.getPropertyValue(n)||B(t).getComputedStyle(t,null).getPropertyValue(n)}function I(t){return t.trim().split(/^|\s+/)}function j(t){return t.classList||new H(t)}function H(t){this._node=t,this._names=I(t.getAttribute("class")||"");}function X(t,n){for(var e=j(t),r=-1,i=n.length;++r<i;)e.add(n[r]);}function G(t,n){for(var e=j(t),r=-1,i=n.length;++r<i;)e.remove(n[r]);}function V(){this.textContent="";}function $(){this.innerHTML="";}function W(){this.nextSibling&&this.parentNode.appendChild(this);}function Z(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild);}function Q(){return null}function J(){var t=this.parentNode;t&&t.removeChild(this);}function K(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function tt(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}function nt(t,n,e){return t=et(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n);}}function et(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r);}finally{t.event=o;}}}function rt(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on;}}}function it(t,n,e){var r=ms.hasOwnProperty(t.type)?nt:et;return function(i,o,a){var u,f=this.__on,c=r(n,o,a);if(f)for(var s=0,l=f.length;s<l;++s)if((u=f[s]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=c,u.capture=e),void(u.value=n);this.addEventListener(t.type,c,e),u={type:t.type,name:t.name,value:n,listener:c,capture:e},f?f.push(u):this.__on=[u];}}function ot(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o;}}function at(t,n,e){var r=B(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i);}function ut(t,n){this._groups=t,this._parents=n;}function ft(){return new ut([[document.documentElement]],xs)}function ct(t){return "string"==typeof t?new ut([[document.querySelector(t)]],[document.documentElement]):new ut([[t]],xs)}function st(){return new lt}function lt(){this._="@"+(++ws).toString(36);}function ht(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function dt(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return [n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function pt(t){var n=ht();return n.changedTouches&&(n=n.changedTouches[0]),dt(t,n)}function vt(t,n,e){arguments.length<3&&(e=n,n=ht().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return dt(t,r);return null}function gt(){t.event.stopImmediatePropagation();}function yt(){t.event.preventDefault(),t.event.stopImmediatePropagation();}function _t(t){var n=t.document.documentElement,e=ct(t).on("dragstart.drag",yt,!0);"onselectstart"in n?e.on("selectstart.drag",yt,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none");}function bt(t,n){var e=t.document.documentElement,r=ct(t).on("dragstart.drag",null);n&&(r.on("click.drag",yt,!0),setTimeout(function(){r.on("click.drag",null);},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect);}function mt(t){return function(){return t}}function xt(t,n,e,r,i,o,a,u,f,c){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=f,this._=c;}function wt(){return !t.event.button}function Mt(){return this.parentNode}function At(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Tt(){return "ontouchstart"in this}function Nt(t,n,e){t.prototype=n.prototype=e,e.constructor=t;}function St(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Et(){}function kt(t){var n;return t=(t+"").trim().toLowerCase(),(n=Ns.exec(t))?(n=parseInt(n[1],16),new Lt(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=Ss.exec(t))?Ct(parseInt(n[1],16)):(n=Es.exec(t))?new Lt(n[1],n[2],n[3],1):(n=ks.exec(t))?new Lt(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Cs.exec(t))?Pt(n[1],n[2],n[3],n[4]):(n=Ps.exec(t))?Pt(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=zs.exec(t))?Ut(n[1],n[2]/100,n[3]/100,1):(n=Rs.exec(t))?Ut(n[1],n[2]/100,n[3]/100,n[4]):Ls.hasOwnProperty(t)?Ct(Ls[t]):"transparent"===t?new Lt(NaN,NaN,NaN,0):null}function Ct(t){return new Lt(t>>16&255,t>>8&255,255&t,1)}function Pt(t,n,e,r){return r<=0&&(t=n=e=NaN),new Lt(t,n,e,r)}function zt(t){return t instanceof Et||(t=kt(t)),t?(t=t.rgb(),new Lt(t.r,t.g,t.b,t.opacity)):new Lt}function Rt(t,n,e,r){return 1===arguments.length?zt(t):new Lt(t,n,e,null==r?1:r)}function Lt(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r;}function Dt(t){return ((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Ut(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Ot(t,n,e,r)}function qt(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof Ot)return new Ot(t.h,t.s,t.l,t.opacity);if(t instanceof Et||(t=kt(t)),!t)return new Ot;if(t instanceof Ot)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,f=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=f<.5?o+i:2-o-i,a*=60):u=f>0&&f<1?0:a,new Ot(a,u,f,t.opacity)}(t):new Ot(t,n,e,null==r?1:r)}function Ot(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r;}function Yt(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function Bt(t){if(t instanceof It)return new It(t.l,t.a,t.b,t.opacity);if(t instanceof Wt){if(isNaN(t.h))return new It(t.l,0,0,t.opacity);var n=t.h*Ds;return new It(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof Lt||(t=zt(t));var e,r,i=Gt(t.r),o=Gt(t.g),a=Gt(t.b),u=jt((.2225045*i+.7168786*o+.0606169*a)/Os);return i===o&&o===a?e=r=u:(e=jt((.4360747*i+.3850649*o+.1430804*a)/qs),r=jt((.0139322*i+.0971045*o+.7141733*a)/Ys)),new It(116*u-16,500*(e-u),200*(u-r),t.opacity)}function Ft(t,n,e,r){return 1===arguments.length?Bt(t):new It(t,n,e,null==r?1:r)}function It(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r;}function jt(t){return t>js?Math.pow(t,1/3):t/Is+Bs}function Ht(t){return t>Fs?t*t*t:Is*(t-Bs)}function Xt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Gt(t){return (t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Vt(t){if(t instanceof Wt)return new Wt(t.h,t.c,t.l,t.opacity);if(t instanceof It||(t=Bt(t)),0===t.a&&0===t.b)return new Wt(NaN,0,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*Us;return new Wt(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function $t(t,n,e,r){return 1===arguments.length?Vt(t):new Wt(t,n,e,null==r?1:r)}function Wt(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r;}function Zt(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof Qt)return new Qt(t.h,t.s,t.l,t.opacity);t instanceof Lt||(t=zt(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(Ws*r+Vs*n-$s*e)/(Ws+Vs-$s),o=r-i,a=(Gs*(e-i)-Hs*o)/Xs,u=Math.sqrt(a*a+o*o)/(Gs*i*(1-i)),f=u?Math.atan2(a,o)*Us-120:NaN;return new Qt(f<0?f+360:f,u,i,t.opacity)}(t):new Qt(t,n,e,null==r?1:r)}function Qt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r;}function Jt(t,n,e,r,i){var o=t*t,a=o*t;return ((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function Kt(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return Jt((e-r/n)*n,a,i,o,u)}}function tn(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return Jt((e-r/n)*n,i,o,a,u)}}function nn(t){return function(){return t}}function en(t,n){return function(e){return t+e*n}}function rn(t,n){var e=n-t;return e?en(t,e>180||e<-180?e-360*Math.round(e/360):e):nn(isNaN(t)?n:t)}function on(t){return 1==(t=+t)?an:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):nn(isNaN(n)?e:n)}}function an(t,n){var e=n-t;return e?en(t,e):nn(isNaN(t)?n:t)}function un(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=Rt(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}function fn(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=dn(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}function cn(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}}function sn(t,n){return t=+t,n-=t,function(e){return t+n*e}}function ln(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=dn(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}function hn(t,n){var e,r,i,o=ol.lastIndex=al.lastIndex=0,a=-1,u=[],f=[];for(t+="",n+="";(e=ol.exec(t))&&(r=al.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,f.push({i:a,x:sn(e,r)})),o=al.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?f[0]?function(t){return function(n){return t(n)+""}}(f[0].x):function(t){return function(){return t}}(n):(n=f.length,function(t){for(var e,r=0;r<n;++r)u[(e=f[r]).i]=e.x(t);return u.join("")})}function dn(t,n){var e,r=typeof n;return null==n||"boolean"===r?nn(n):("number"===r?sn:"string"===r?(e=kt(n))?(n=e,el):hn:n instanceof kt?el:n instanceof Date?cn:Array.isArray(n)?fn:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?ln:sn)(t,n)}function pn(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}}function vn(t,n,e,r,i,o){var a,u,f;return (a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(f=t*e+n*r)&&(e-=t*f,r-=n*f),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,f/=u),t*r<n*e&&(t=-t,n=-n,f=-f,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*ul,skewX:Math.atan(f)*ul,scaleX:a,scaleY:u}}function gn(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],f=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var f=a.push("translate(",null,n,null,e);u.push({i:f-4,x:sn(t,i)},{i:f-2,x:sn(r,o)});}else(i||o)&&a.push("translate("+i+n+o+e);}(o.translateX,o.translateY,a.translateX,a.translateY,u,f),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:sn(t,n)})):n&&e.push(i(e)+"rotate("+n+r);}(o.rotate,a.rotate,u,f),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:sn(t,n)}):n&&e.push(i(e)+"skewX("+n+r);}(o.skewX,a.skewX,u,f),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:sn(t,e)},{i:u-2,x:sn(n,r)});}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")");}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,f),o=a=null,function(t){for(var n,e=-1,r=f.length;++e<r;)u[(n=f[e]).i]=n.x(t);return u.join("")}}}function yn(t){return ((t=Math.exp(t))+1/t)/2}function _n(t,n){var e,r,i=t[0],o=t[1],a=t[2],u=n[0],f=n[1],c=n[2],s=u-i,l=f-o,h=s*s+l*l;if(h<pl)r=Math.log(c/a)/ll,e=function(t){return [i+t*s,o+t*l,a*Math.exp(ll*t*r)]};else{var d=Math.sqrt(h),p=(c*c-a*a+dl*h)/(2*a*hl*d),v=(c*c-a*a-dl*h)/(2*c*hl*d),g=Math.log(Math.sqrt(p*p+1)-p),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-g)/ll,e=function(t){var n=t*r,e=yn(g),u=a/(hl*d)*(e*function(t){return ((t=Math.exp(2*t))-1)/(t+1)}(ll*n+g)-function(t){return ((t=Math.exp(t))-1/t)/2}(g));return [i+u*s,o+u*l,a*e/yn(ll*n+g)]};}return e.duration=1e3*r,e}function bn(t){return function(n,e){var r=t((n=qt(n)).h,(e=qt(e)).h),i=an(n.s,e.s),o=an(n.l,e.l),a=an(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}function mn(t){return function(n,e){var r=t((n=$t(n)).h,(e=$t(e)).h),i=an(n.c,e.c),o=an(n.l,e.l),a=an(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}function xn(t){return function n(e){function r(n,r){var i=t((n=Zt(n)).h,(r=Zt(r)).h),o=an(n.s,r.s),a=an(n.l,r.l),u=an(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}function wn(){return Nl||(kl(Mn),Nl=El.now()+Sl)}function Mn(){Nl=0;}function An(){this._call=this._time=this._next=null;}function Tn(t,n,e){var r=new An;return r.restart(t,n,e),r}function Nn(){wn(),++xl;for(var t,n=tl;n;)(t=Nl-n._time)>=0&&n._call.call(null,t),n=n._next;--xl;}function Sn(){Nl=(Tl=El.now())+Sl,xl=wl=0;try{Nn();}finally{xl=0,function(){var t,n,e=tl,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:tl=n);nl=t,kn(r);}(),Nl=0;}}function En(){var t=El.now(),n=t-Tl;n>Al&&(Sl-=n,Tl=t);}function kn(t){if(!xl){wl&&(wl=clearTimeout(wl));t-Nl>24?(t<1/0&&(wl=setTimeout(Sn,t-El.now()-Sl)),Ml&&(Ml=clearInterval(Ml))):(Ml||(Tl=El.now(),Ml=setInterval(En,Al)),xl=1,kl(Sn));}}function Cn(t,n,e){var r=new An;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n);},n,e),r}function Pn(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};(function(t,n,e){function r(f){var c,s,l,h;if(e.state!==Rl)return o();for(c in u)if((h=u[c]).name===e.name){if(h.state===Dl)return Cn(r);h.state===Ul?(h.state=Ol,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete u[c]):+c<n&&(h.state=Ol,h.timer.stop(),delete u[c]);}if(Cn(function(){e.state===Dl&&(e.state=Ul,e.timer.restart(i,e.delay,e.time),i(f));}),e.state=Ll,e.on.call("start",t,t.__data__,e.index,e.group),e.state===Ll){for(e.state=Dl,a=new Array(l=e.tween.length),c=0,s=-1;c<l;++c)(h=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(a[++s]=h);a.length=s+1;}}function i(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(o),e.state=ql,1),i=-1,u=a.length;++i<u;)a[i].call(null,r);e.state===ql&&(e.on.call("end",t,t.__data__,e.index,e.group),o());}function o(){e.state=Ol,e.timer.stop(),delete u[n];for(var r in u)return;delete t.__transition;}var a,u=t.__transition;u[n]=e,e.timer=Tn(function(t){e.state=Rl,e.timer.restart(r,e.delay,e.time),e.delay<=t&&r(t-e.delay);},0,e.time);})(t,e,{name:n,index:r,group:i,on:Cl,tween:Pl,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:zl});}function zn(t,n){var e=Ln(t,n);if(e.state>zl)throw new Error("too late; already scheduled");return e}function Rn(t,n){var e=Ln(t,n);if(e.state>Ll)throw new Error("too late; already started");return e}function Ln(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Dn(t,n){var e,r,i,o=t.__transition,a=!0;if(o){n=null==n?null:n+"";for(i in o)(e=o[i]).name===n?(r=e.state>Ll&&e.state<ql,e.state=Ol,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition;}}function Un(t,n,e){var r=t._id;return t.each(function(){var t=Rn(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments);}),function(t){return Ln(t,r).value[n]}}function qn(t,n){var e;return ("number"==typeof n?sn:n instanceof kt?el:(e=kt(n))?(n=e,el):hn)(t,n)}function On(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r;}function Yn(t){return ft().transition(t)}function Bn(){return ++Bl}function Fn(t){return ((t*=2)<=1?t*t:--t*(2-t)+1)/2}function In(t){return ((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function jn(t){return (1-Math.cos(Xl*t))/2}function Hn(t){return ((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function Xn(t){return ((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function Gn(t){return (t=+t)<Vl?eh*t*t:t<Wl?eh*(t-=$l)*t+Zl:t<Jl?eh*(t-=Ql)*t+Kl:eh*(t-=th)*t+nh}function Vn(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return sh.time=wn(),sh;return e}function $n(t){return function(){return t}}function Wn(){t.event.stopImmediatePropagation();}function Zn(){t.event.preventDefault(),t.event.stopImmediatePropagation();}function Qn(t){return {type:t}}function Jn(){return !t.event.button}function Kn(){var t=this.ownerSVGElement||this;return [[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function te(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function ne(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function ee(n){function e(t){var e=t.property("__brush",u).selectAll(".overlay").data([Qn("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",bh.overlay).merge(e).each(function(){var t=te(this).extent;ct(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1]);}),t.selectAll(".selection").data([Qn("selection")]).enter().append("rect").attr("class","selection").attr("cursor",bh.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var i=t.selectAll(".handle").data(n.handles,function(t){return t.type});i.exit().remove(),i.enter().append("rect").attr("class",function(t){return "handle handle--"+t.type}).attr("cursor",function(t){return bh[t.type]}),t.each(r).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",a);}function r(){var t=ct(this),n=te(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return "e"===t.type[t.type.length-1]?n[1][0]-h/2:n[0][0]-h/2}).attr("y",function(t){return "s"===t.type[0]?n[1][1]-h/2:n[0][1]-h/2}).attr("width",function(t){return "n"===t.type||"s"===t.type?n[1][0]-n[0][0]+h:h}).attr("height",function(t){return "e"===t.type||"w"===t.type?n[1][1]-n[0][1]+h:h})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null);}function i(t,n){return t.__brush.emitter||new o(t,n)}function o(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0;}function a(){function e(){var t=pt(w);!L||m||x||(Math.abs(t[0]-U[0])>Math.abs(t[1]-U[1])?x=!0:m=!0),U=t,b=!0,Zn(),o();}function o(){var t;switch(y=U[0]-D[0],_=U[1]-D[1],A){case dh:case hh:T&&(y=Math.max(C-u,Math.min(z-d,y)),c=u+y,p=d+y),N&&(_=Math.max(P-l,Math.min(R-v,_)),h=l+_,g=v+_);break;case ph:T<0?(y=Math.max(C-u,Math.min(z-u,y)),c=u+y,p=d):T>0&&(y=Math.max(C-d,Math.min(z-d,y)),c=u,p=d+y),N<0?(_=Math.max(P-l,Math.min(R-l,_)),h=l+_,g=v):N>0&&(_=Math.max(P-v,Math.min(R-v,_)),h=l,g=v+_);break;case vh:T&&(c=Math.max(C,Math.min(z,u-y*T)),p=Math.max(C,Math.min(z,d+y*T))),N&&(h=Math.max(P,Math.min(R,l-_*N)),g=Math.max(P,Math.min(R,v+_*N)));}p<c&&(T*=-1,t=u,u=d,d=t,t=c,c=p,p=t,M in mh&&Y.attr("cursor",bh[M=mh[M]])),g<h&&(N*=-1,t=l,l=v,v=t,t=h,h=g,g=t,M in xh&&Y.attr("cursor",bh[M=xh[M]])),S.selection&&(k=S.selection),m&&(c=k[0][0],p=k[1][0]),x&&(h=k[0][1],g=k[1][1]),k[0][0]===c&&k[0][1]===h&&k[1][0]===p&&k[1][1]===g||(S.selection=[[c,h],[p,g]],r.call(w),q.brush());}function a(){if(Wn(),t.event.touches){if(t.event.touches.length)return;f&&clearTimeout(f),f=setTimeout(function(){f=null;},500),O.on("touchmove.brush touchend.brush touchcancel.brush",null);}else bt(t.event.view,b),B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);O.attr("pointer-events","all"),Y.attr("cursor",bh.overlay),S.selection&&(k=S.selection),ne(k)&&(S.selection=null,r.call(w)),q.end();}if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return Zn()}else if(f)return;if(s.apply(this,arguments)){var u,c,l,h,d,p,v,g,y,_,b,m,x,w=this,M=t.event.target.__data__.type,A="selection"===(t.event.metaKey?M="overlay":M)?hh:t.event.altKey?vh:ph,T=n===yh?null:wh[M],N=n===gh?null:Mh[M],S=te(w),E=S.extent,k=S.selection,C=E[0][0],P=E[0][1],z=E[1][0],R=E[1][1],L=T&&N&&t.event.shiftKey,D=pt(w),U=D,q=i(w,arguments).beforestart();"overlay"===M?S.selection=k=[[u=n===yh?C:D[0],l=n===gh?P:D[1]],[d=n===yh?z:u,v=n===gh?R:l]]:(u=k[0][0],l=k[0][1],d=k[1][0],v=k[1][1]),c=u,h=l,p=d,g=v;var O=ct(w).attr("pointer-events","none"),Y=O.selectAll(".overlay").attr("cursor",bh[M]);if(t.event.touches)O.on("touchmove.brush",e,!0).on("touchend.brush touchcancel.brush",a,!0);else{var B=ct(t.event.view).on("keydown.brush",function(){switch(t.event.keyCode){case 16:L=T&&N;break;case 18:A===ph&&(T&&(d=p-y*T,u=c+y*T),N&&(v=g-_*N,l=h+_*N),A=vh,o());break;case 32:A!==ph&&A!==vh||(T<0?d=p-y:T>0&&(u=c-y),N<0?v=g-_:N>0&&(l=h-_),A=dh,Y.attr("cursor",bh.selection),o());break;default:return}Zn();},!0).on("keyup.brush",function(){switch(t.event.keyCode){case 16:L&&(m=x=L=!1,o());break;case 18:A===vh&&(T<0?d=p:T>0&&(u=c),N<0?v=g:N>0&&(l=h),A=ph,o());break;case 32:A===dh&&(t.event.altKey?(T&&(d=p-y*T,u=c+y*T),N&&(v=g-_*N,l=h+_*N),A=vh):(T<0?d=p:T>0&&(u=c),N<0?v=g:N>0&&(l=h),A=ph),Y.attr("cursor",bh[M]),o());break;default:return}Zn();},!0).on("mousemove.brush",e,!0).on("mouseup.brush",a,!0);_t(t.event.view);}Wn(),Dn(w),r.call(w),q.start();}}function u(){var t=this.__brush||{selection:null};return t.extent=c.apply(this,arguments),t.dim=n,t}var f,c=Kn,s=Jn,l=N(e,"start","brush","end"),h=6;return e.move=function(t,e){t.selection?t.on("start.brush",function(){i(this,arguments).beforestart().start();}).on("interrupt.brush end.brush",function(){i(this,arguments).end();}).tween("brush",function(){function t(t){a.selection=1===t&&ne(c)?null:s(t),r.call(o),u.brush();}var o=this,a=o.__brush,u=i(o,arguments),f=a.selection,c=n.input("function"==typeof e?e.apply(this,arguments):e,a.extent),s=dn(f,c);return f&&c?t:t(1)}):t.each(function(){var t=arguments,o=this.__brush,a=n.input("function"==typeof e?e.apply(this,t):e,o.extent),u=i(this,t).beforestart();Dn(this),o.selection=null==a||ne(a)?null:a,r.call(this),u.start().brush().end();});},o.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){ot(new function(t,n,e){this.target=t,this.type=n,this.selection=e;}(e,t,n.output(this.state.selection)),l.apply,l,[t,this.that,this.args]);}},e.extent=function(t){return arguments.length?(c="function"==typeof t?t:$n([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),e):c},e.filter=function(t){return arguments.length?(s="function"==typeof t?t:$n(!!t),e):s},e.handleSize=function(t){return arguments.length?(h=+t,e):h},e.on=function(){var t=l.on.apply(l,arguments);return t===l?e:t},e}function re(t){return function(){return t}}function ie(){this._x0=this._y0=this._x1=this._y1=null,this._="";}function oe(){return new ie}function ae(t){return t.source}function ue(t){return t.target}function fe(t){return t.radius}function ce(t){return t.startAngle}function se(t){return t.endAngle}function le(){}function he(t,n){var e=new le;if(t instanceof le)t.each(function(t,n){e.set(n,t);});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r);}else if(t)for(var a in t)e.set(a,t[a]);return e}function de(){return {}}function pe(t,n,e){t[n]=e;}function ve(){return he()}function ge(t,n,e){t.set(n,e);}function ye(){}function _e(t,n){var e=new ye;if(t instanceof ye)t.each(function(t){e.add(t);});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t));}return e}function be(t,n){return t-n}function me(t){return function(){return t}}function xe(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=function(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var f=t[o],c=f[0],s=f[1],l=t[u],h=l[0],d=l[1];if(function(t,n,e){var r;return function(t,n,e){return (n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&function(t,n,e){return t<=n&&n<=e||e<=n&&n<=t}(t[r=+(t[0]===n[0])],e[r],n[r])}(f,l,n))return 0;s>r!=d>r&&e<(h-c)*(r-s)/(d-s)+c&&(i=-i);}return i}(t,n[r]))return e;return 0}function we(){}function Me(){function t(t){var e=a(t);if(Array.isArray(e))e=e.slice().sort(be);else{var r=u(t),i=r[0],o=r[1];e=d(i,o,e),e=s(Math.floor(i/e)*e,Math.floor(o/e)*e,e);}return e.map(function(e){return n(t,e)})}function n(t,n){var r=[],a=[];return function(t,n,r){function a(t){var n,i,o=[t[0][0]+u,t[0][1]+f],a=[t[1][0]+u,t[1][1]+f],c=e(o),s=e(a);(n=p[c])?(i=d[s])?(delete p[n.end],delete d[i.start],n===i?(n.ring.push(a),r(n.ring)):d[n.start]=p[i.end]={start:n.start,end:i.end,ring:n.ring.concat(i.ring)}):(delete p[n.end],n.ring.push(a),p[n.end=s]=n):(n=d[s])?(i=p[c])?(delete d[n.start],delete p[i.end],n===i?(n.ring.push(a),r(n.ring)):d[i.start]=p[n.end]={start:i.start,end:n.end,ring:i.ring.concat(n.ring)}):(delete d[n.start],n.ring.unshift(o),d[n.start=c]=n):d[c]=p[s]={start:c,end:s,ring:[o,a]};}var u,f,c,s,l,h,d=new Array,p=new Array;u=f=-1,s=t[0]>=n,Uh[s<<1].forEach(a);for(;++u<i-1;)c=s,s=t[u+1]>=n,Uh[c|s<<1].forEach(a);Uh[s<<0].forEach(a);for(;++f<o-1;){for(u=-1,s=t[f*i+i]>=n,l=t[f*i]>=n,Uh[s<<1|l<<2].forEach(a);++u<i-1;)c=s,s=t[f*i+i+u+1]>=n,h=l,l=t[f*i+u+1]>=n,Uh[c|s<<1|l<<2|h<<3].forEach(a);Uh[s|l<<3].forEach(a);}u=-1,l=t[f*i]>=n,Uh[l<<2].forEach(a);for(;++u<i-1;)h=l,l=t[f*i+u+1]>=n,Uh[l<<2|h<<3].forEach(a);Uh[l<<3].forEach(a);}(t,n,function(e){f(e,t,n),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r}(e)>0?r.push([e]):a.push(e);}),a.forEach(function(t){for(var n,e=0,i=r.length;e<i;++e)if(-1!==xe((n=r[e])[0],t))return void n.push(t)}),{type:"MultiPolygon",value:n,coordinates:r}}function e(t){return 2*t[0]+t[1]*(i+1)*4}function r(t,n,e){t.forEach(function(t){var r,a=t[0],u=t[1],f=0|a,c=0|u,s=n[c*i+f];a>0&&a<i&&f===a&&(r=n[c*i+f-1],t[0]=a+(e-r)/(s-r)-.5),u>0&&u<o&&c===u&&(r=n[(c-1)*i+f],t[1]=u+(e-r)/(s-r)-.5);});}var i=1,o=1,a=p,f=r;return t.contour=n,t.size=function(n){if(!arguments.length)return [i,o];var e=Math.ceil(n[0]),r=Math.ceil(n[1]);if(!(e>0&&r>0))throw new Error("invalid size");return i=e,o=r,t},t.thresholds=function(n){return arguments.length?(a="function"==typeof n?n:Array.isArray(n)?me(Dh.call(n)):me(n),t):a},t.smooth=function(n){return arguments.length?(f=n?r:we,t):f===r},t}function Ae(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,f=0;u<r+e;++u)u<r&&(f+=t.data[u+a*r]),u>=e&&(u>=o&&(f-=t.data[u-o+a*r]),n.data[u-e+a*r]=f/Math.min(u+1,r-1+o-u,o));}function Te(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,f=0;u<i+e;++u)u<i&&(f+=t.data[a+u*r]),u>=e&&(u>=o&&(f-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=f/Math.min(u+1,i-1+o-u,o));}function Ne(t){return t[0]}function Se(t){return t[1]}function Ee(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function ke(t){function n(t,n){function e(){if(c)return Oh;if(s)return s=!1,qh;var n,e,r=u;if(t.charCodeAt(r)===Yh){for(;u++<a&&t.charCodeAt(u)!==Yh||t.charCodeAt(++u)===Yh;);return (n=u)>=a?c=!0:(e=t.charCodeAt(u++))===Bh?s=!0:e===Fh&&(s=!0,t.charCodeAt(u)===Bh&&++u),t.slice(r+1,n-1).replace(/""/g,'"')}for(;u<a;){if((e=t.charCodeAt(n=u++))===Bh)s=!0;else if(e===Fh)s=!0,t.charCodeAt(u)===Bh&&++u;else if(e!==o)continue;return t.slice(r,n)}return c=!0,t.slice(r,a)}var r,i=[],a=t.length,u=0,f=0,c=a<=0,s=!1;for(t.charCodeAt(a-1)===Bh&&--a,t.charCodeAt(a-1)===Fh&&--a;(r=e())!==Oh;){for(var l=[];r!==qh&&r!==Oh;)l.push(r),r=e();n&&null==(l=n(l,f++))||i.push(l);}return i}function e(n){return n.map(r).join(t)}function r(t){return null==t?"":i.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}var i=new RegExp('["'+t+"\n\r]"),o=t.charCodeAt(0);return {parse:function(t,e){var r,i,o=n(t,function(t,n){if(r)return r(t,n-1);i=t,r=e?function(t,n){var e=Ee(t);return function(r,i){return n(e(r),i,t)}}(t,e):Ee(t);});return o.columns=i||[],o},parseRows:n,format:function(n,e){return null==e&&(e=function(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r);}),e}(n)),[e.map(r).join(t)].concat(n.map(function(n){return e.map(function(t){return r(n[t])}).join(t)})).join("\n")},formatRows:function(t){return t.map(e).join("\n")}}}function Ce(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}function Pe(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()}function ze(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function Re(t,n){return fetch(t,n).then(ze)}function Le(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),Re(n,e).then(function(n){return t(n,r)})}}function De(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}function Ue(t){return function(n,e){return Re(n,e).then(function(n){return (new DOMParser).parseFromString(n,t)})}}function qe(t){return function(){return t}}function Oe(){return 1e-6*(Math.random()-.5)}function Ye(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,f,c,s,l,h,d=t._root,p={data:r},v=t._x0,g=t._y0,y=t._x1,_=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((c=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a,i=d,!(d=d[l=s<<1|c]))return i[l]=p,t;if(u=+t._x.call(null,d.data),f=+t._y.call(null,d.data),n===u&&e===f)return p.next=d,i?i[l]=p:t._root=p,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(c=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a;}while((l=s<<1|c)==(h=(f>=a)<<1|u>=o));return i[h]=d,i[l]=p,t}function Be(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i;}function Fe(t){return t[0]}function Ie(t){return t[1]}function je(t,n,e){var r=new He(null==n?Fe:n,null==e?Ie:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function He(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0;}function Xe(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}function Ge(t){return t.x+t.vx}function Ve(t){return t.y+t.vy}function $e(t){return t.index}function We(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function Ze(t){return t.x}function Qe(t){return t.y}function Je(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return [r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function Ke(t){return (t=Je(Math.abs(t)))?t[1]:NaN}function tr(t){return new nr(t)}function nr(t){if(!(n=ad.exec(t)))throw new Error("invalid format: "+t);var n;this.fill=n[1]||" ",this.align=n[2]||">",this.sign=n[3]||"-",this.symbol=n[4]||"",this.zero=!!n[5],this.width=n[6]&&+n[6],this.comma=!!n[7],this.precision=n[8]&&+n[8].slice(1),this.trim=!!n[9],this.type=n[10]||"";}function er(t,n){var e=Je(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}function rr(t){return t}function ir(t){function n(t){function n(t){var n,r,a,s=y,x=_;if("c"===g)x=b(t)+x,t="";else{var w=(t=+t)<0;if(t=b(Math.abs(t),p),v&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(i>0){if(!+t[r])break t;i=0;}}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),w&&0==+t&&(w=!1),s=(w?"("===c?c:"-":"-"===c||"("===c?"":c)+s,x=("s"===g?sd[8+ud/3]:"")+x+(w&&"("===c?")":""),m)for(n=-1,r=t.length;++n<r;)if(48>(a=t.charCodeAt(n))||a>57){x=(46===a?i+t.slice(n+1):t.slice(n))+x,t=t.slice(0,n);break}}d&&!l&&(t=e(t,1/0));var M=s.length+t.length+x.length,A=M<h?new Array(h-M+1).join(u):"";switch(d&&l&&(t=e(A+t,A.length?h-x.length:1/0),A=""),f){case"<":t=s+t+x+A;break;case"=":t=s+A+t+x;break;case"^":t=A.slice(0,M=A.length>>1)+s+t+x+A.slice(M);break;default:t=A+s+t+x;}return o(t)}var u=(t=tr(t)).fill,f=t.align,c=t.sign,s=t.symbol,l=t.zero,h=t.width,d=t.comma,p=t.precision,v=t.trim,g=t.type;"n"===g?(d=!0,g="g"):cd[g]||(null==p&&(p=12),v=!0,g="g"),(l||"0"===u&&"="===f)&&(l=!0,u="0",f="=");var y="$"===s?r[0]:"#"===s&&/[boxX]/.test(g)?"0"+g.toLowerCase():"",_="$"===s?r[1]:/[%p]/.test(g)?a:"",b=cd[g],m=/[defgprs%]/.test(g);return p=null==p?6:/[gprs]/.test(g)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p)),n.toString=function(){return t+""},n}var e=t.grouping&&t.thousands?function(t,n){return function(e,r){for(var i=e.length,o=[],a=0,u=t[0],f=0;i>0&&u>0&&(f+u+1>r&&(u=Math.max(1,r-f)),o.push(e.substring(i-=u,i+u)),!((f+=u+1)>r));)u=t[a=(a+1)%t.length];return o.reverse().join(n)}}(t.grouping,t.thousands):rr,r=t.currency,i=t.decimal,o=t.numerals?function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(t.numerals):rr,a=t.percent||"%";return {format:n,formatPrefix:function(t,e){var r=n((t=tr(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(Ke(e)/3))),o=Math.pow(10,-i),a=sd[8+i/3];return function(t){return r(o*t)+a}}}}function or(n){return fd=ir(n),t.format=fd.format,t.formatPrefix=fd.formatPrefix,fd}function ar(t){return Math.max(0,-Ke(Math.abs(t)))}function ur(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Ke(n)/3)))-Ke(Math.abs(t)))}function fr(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Ke(n)-Ke(t))+1}function cr(){return new sr}function sr(){this.reset();}function lr(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i);}function hr(t){return t>1?0:t<-1?Xd:Math.acos(t)}function dr(t){return t>1?Gd:t<-1?-Gd:Math.asin(t)}function pr(t){return (t=op(t/2))*t}function vr(){}function gr(t,n){t&&sp.hasOwnProperty(t.type)&&sp[t.type](t,n);}function yr(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd();}function _r(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)yr(t[e],n,1);n.polygonEnd();}function br(t,n){t&&cp.hasOwnProperty(t.type)?cp[t.type](t,n):gr(t,n);}function mr(){dp.point=wr;}function xr(){Mr(ld,hd);}function wr(t,n){dp.point=Mr,ld=t,hd=n,dd=t*=Zd,pd=tp(n=(n*=Zd)/2+Vd),vd=op(n);}function Mr(t,n){n=(n*=Zd)/2+Vd;var e=(t*=Zd)-dd,r=e>=0?1:-1,i=r*e,o=tp(n),a=op(n),u=vd*a,f=pd*o+u*tp(i),c=u*r*op(i);lp.add(Kd(c,f)),dd=t,pd=o,vd=a;}function Ar(t){return [Kd(t[1],t[0]),dr(t[2])]}function Tr(t){var n=t[0],e=t[1],r=tp(e);return [r*tp(n),r*op(n),op(e)]}function Nr(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Sr(t,n){return [t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Er(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2];}function kr(t,n){return [t[0]*n,t[1]*n,t[2]*n]}function Cr(t){var n=up(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n;}function Pr(t,n){Ad.push(Td=[gd=t,_d=t]),n<yd&&(yd=n),n>bd&&(bd=n);}function zr(t,n){var e=Tr([t*Zd,n*Zd]);if(Md){var r=Sr(Md,e),i=Sr([r[1],-r[0],0],r);Cr(i),i=Ar(i);var o,a=t-md,u=a>0?1:-1,f=i[0]*Wd*u,c=Qd(a)>180;c^(u*md<f&&f<u*t)?(o=i[1]*Wd)>bd&&(bd=o):(f=(f+360)%360-180,c^(u*md<f&&f<u*t)?(o=-i[1]*Wd)<yd&&(yd=o):(n<yd&&(yd=n),n>bd&&(bd=n))),c?t<md?Or(gd,t)>Or(gd,_d)&&(_d=t):Or(t,_d)>Or(gd,_d)&&(gd=t):_d>=gd?(t<gd&&(gd=t),t>_d&&(_d=t)):t>md?Or(gd,t)>Or(gd,_d)&&(_d=t):Or(t,_d)>Or(gd,_d)&&(gd=t);}else Ad.push(Td=[gd=t,_d=t]);n<yd&&(yd=n),n>bd&&(bd=n),Md=e,md=t;}function Rr(){vp.point=zr;}function Lr(){Td[0]=gd,Td[1]=_d,vp.point=Pr,Md=null;}function Dr(t,n){if(Md){var e=t-md;pp.add(Qd(e)>180?e+(e>0?360:-360):e);}else xd=t,wd=n;dp.point(t,n),zr(t,n);}function Ur(){dp.lineStart();}function qr(){Dr(xd,wd),dp.lineEnd(),Qd(pp)>jd&&(gd=-(_d=180)),Td[0]=gd,Td[1]=_d,Md=null;}function Or(t,n){return (n-=t)<0?n+360:n}function Yr(t,n){return t[0]-n[0]}function Br(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function Fr(t,n){t*=Zd;var e=tp(n*=Zd);Ir(e*tp(t),e*op(t),op(n));}function Ir(t,n,e){Ed+=(t-Ed)/++Nd,kd+=(n-kd)/Nd,Cd+=(e-Cd)/Nd;}function jr(){gp.point=Hr;}function Hr(t,n){t*=Zd;var e=tp(n*=Zd);Yd=e*tp(t),Bd=e*op(t),Fd=op(n),gp.point=Xr,Ir(Yd,Bd,Fd);}function Xr(t,n){t*=Zd;var e=tp(n*=Zd),r=e*tp(t),i=e*op(t),o=op(n),a=Kd(up((a=Bd*o-Fd*i)*a+(a=Fd*r-Yd*o)*a+(a=Yd*i-Bd*r)*a),Yd*r+Bd*i+Fd*o);Sd+=a,Pd+=a*(Yd+(Yd=r)),zd+=a*(Bd+(Bd=i)),Rd+=a*(Fd+(Fd=o)),Ir(Yd,Bd,Fd);}function Gr(){gp.point=Fr;}function Vr(){gp.point=Wr;}function $r(){Zr(qd,Od),gp.point=Fr;}function Wr(t,n){qd=t,Od=n,t*=Zd,n*=Zd,gp.point=Zr;var e=tp(n);Yd=e*tp(t),Bd=e*op(t),Fd=op(n),Ir(Yd,Bd,Fd);}function Zr(t,n){t*=Zd;var e=tp(n*=Zd),r=e*tp(t),i=e*op(t),o=op(n),a=Bd*o-Fd*i,u=Fd*r-Yd*o,f=Yd*i-Bd*r,c=up(a*a+u*u+f*f),s=dr(c),l=c&&-s/c;Ld+=l*a,Dd+=l*u,Ud+=l*f,Sd+=s,Pd+=s*(Yd+(Yd=r)),zd+=s*(Bd+(Bd=i)),Rd+=s*(Fd+(Fd=o)),Ir(Yd,Bd,Fd);}function Qr(t){return function(){return t}}function Jr(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return (e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function Kr(t,n){return [t>Xd?t-$d:t<-Xd?t+$d:t,n]}function ti(t,n,e){return (t%=$d)?n||e?Jr(ei(t),ri(n,e)):ei(t):n||e?ri(n,e):Kr}function ni(t){return function(n,e){return n+=t,[n>Xd?n-$d:n<-Xd?n+$d:n,e]}}function ei(t){var n=ni(t);return n.invert=ni(-t),n}function ri(t,n){function e(t,n){var e=tp(n),u=tp(t)*e,f=op(t)*e,c=op(n),s=c*r+u*i;return [Kd(f*o-s*a,u*r-c*i),dr(s*o+f*a)]}var r=tp(t),i=op(t),o=tp(n),a=op(n);return e.invert=function(t,n){var e=tp(n),u=tp(t)*e,f=op(t)*e,c=op(n),s=c*o-f*a;return [Kd(f*o+c*a,u*r+s*i),dr(s*r-u*i)]},e}function ii(t){function n(n){return n=t(n[0]*Zd,n[1]*Zd),n[0]*=Wd,n[1]*=Wd,n}return t=ti(t[0]*Zd,t[1]*Zd,t.length>2?t[2]*Zd:0),n.invert=function(n){return n=t.invert(n[0]*Zd,n[1]*Zd),n[0]*=Wd,n[1]*=Wd,n},n}function oi(t,n,e,r,i,o){if(e){var a=tp(n),u=op(n),f=r*e;null==i?(i=n+r*$d,o=n-f/2):(i=ai(a,i),o=ai(a,o),(r>0?i<o:i>o)&&(i+=r*$d));for(var c,s=i;r>0?s>o:s<o;s-=f)c=Ar([a,-u*tp(s),-u*op(s)]),t.point(c[0],c[1]);}}function ai(t,n){(n=Tr(n))[0]-=t,Cr(n);var e=hr(-n[1]);return ((-n[2]<0?-e:e)+$d-jd)%$d}function ui(){var t,n=[];return {point:function(n,e){t.push([n,e]);},lineStart:function(){n.push(t=[]);},lineEnd:vr,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()));},result:function(){var e=n;return n=[],t=null,e}}}function fi(t,n){return Qd(t[0]-n[0])<jd&&Qd(t[1]-n[1])<jd}function ci(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null;}function si(t,n,e,r,i){var o,a,u=[],f=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n];if(fi(r,a)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);i.lineEnd();}else u.push(e=new ci(r,t,null,!0)),f.push(e.o=new ci(r,null,e,!1)),u.push(e=new ci(a,t,null,!1)),f.push(e.o=new ci(a,null,e,!0));}}),u.length){for(f.sort(n),li(u),li(f),o=0,a=f.length;o<a;++o)f[o].e=e=!e;for(var c,s,l=u[0];;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;c=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=c.length;o<a;++o)i.point((s=c[o])[0],s[1]);else r(h.x,h.n.x,1,i);h=h.n;}else{if(d)for(c=h.p.z,o=c.length-1;o>=0;--o)i.point((s=c[o])[0],s[1]);else r(h.x,h.p.x,-1,i);h=h.p;}c=(h=h.o).z,d=!d;}while(!h.v);i.lineEnd();}}}function li(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i;}}function hi(t,n){var e=n[0],r=n[1],i=op(r),o=[op(e),-tp(e),0],a=0,u=0;Ep.reset(),1===i?r=Gd+jd:-1===i&&(r=-Gd-jd);for(var f=0,c=t.length;f<c;++f)if(l=(s=t[f]).length)for(var s,l,h=s[l-1],d=h[0],p=h[1]/2+Vd,v=op(p),g=tp(p),y=0;y<l;++y,d=b,v=x,g=w,h=_){var _=s[y],b=_[0],m=_[1]/2+Vd,x=op(m),w=tp(m),M=b-d,A=M>=0?1:-1,T=A*M,N=T>Xd,S=v*x;if(Ep.add(Kd(S*A*op(T),g*w+S*tp(T))),a+=N?M+A*$d:M,N^d>=e^b>=e){var E=Sr(Tr(h),Tr(_));Cr(E);var k=Sr(o,E);Cr(k);var C=(N^M>=0?-1:1)*dr(k[2]);(r>C||r===C&&(E[0]||E[1]))&&(u+=N^M>=0?1:-1);}}return (a<-jd||a<jd&&Ep<-jd)^1&u}function di(t,n,e,r){return function(i){function o(n,e){t(n,e)&&i.point(n,e);}function a(t,n){v.point(t,n);}function u(){m.point=a,v.lineStart();}function f(){m.point=o,v.lineEnd();}function c(t,n){p.push([t,n]),_.point(t,n);}function s(){_.lineStart(),p=[];}function l(){c(p[0][0],p[0][1]),_.lineEnd();var t,n,e,r,o=_.clean(),a=g.result(),u=a.length;if(p.pop(),h.push(p),p=null,u)if(1&o){if(e=a[0],(n=e.length-1)>0){for(b||(i.polygonStart(),b=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1]);i.lineEnd();}}else u>1&&2&o&&a.push(a.pop().concat(a.shift())),d.push(a.filter(pi));}var h,d,p,v=n(i),g=ui(),_=n(g),b=!1,m={point:o,lineStart:u,lineEnd:f,polygonStart:function(){m.point=c,m.lineStart=s,m.lineEnd=l,d=[],h=[];},polygonEnd:function(){m.point=o,m.lineStart=u,m.lineEnd=f,d=y(d);var t=hi(h,r);d.length?(b||(i.polygonStart(),b=!0),si(d,vi,t,e,i)):t&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),d=h=null;},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd();}};return m}}function pi(t){return t.length>1}function vi(t,n){return ((t=t.x)[0]<0?t[1]-Gd-jd:Gd-t[1])-((n=n.x)[0]<0?n[1]-Gd-jd:Gd-n[1])}function gi(t){function n(t,n){return tp(t)*tp(n)>i}function e(t,n,e){var r=[1,0,0],o=Sr(Tr(t),Tr(n)),a=Nr(o,o),u=o[0],f=a-u*u;if(!f)return !e&&t;var c=i*a/f,s=-i*u/f,l=Sr(r,o),h=kr(r,c);Er(h,kr(o,s));var d=l,p=Nr(h,d),v=Nr(d,d),g=p*p-v*(Nr(h,h)-1);if(!(g<0)){var y=up(g),_=kr(d,(-p-y)/v);if(Er(_,h),_=Ar(_),!e)return _;var b,m=t[0],x=n[0],w=t[1],M=n[1];x<m&&(b=m,m=x,x=b);var A=x-m,T=Qd(A-Xd)<jd;if(!T&&M<w&&(b=w,w=M,M=b),T||A<jd?T?w+M>0^_[1]<(Qd(_[0]-m)<jd?w:M):w<=_[1]&&_[1]<=M:A>Xd^(m<=_[0]&&_[0]<=x)){var N=kr(d,(-p+y)/v);return Er(N,h),[_,Ar(N)]}}}function r(n,e){var r=a?t:Xd-t,i=0;return n<-r?i|=1:n>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var i=tp(t),o=6*Zd,a=i>0,u=Qd(i)>jd;return di(n,function(t){var i,o,f,c,s;return {lineStart:function(){c=f=!1,s=1;},point:function(l,h){var d,p=[l,h],v=n(l,h),g=a?v?0:r(l,h):v?r(l+(l<0?Xd:-Xd),h):0;if(!i&&(c=f=v)&&t.lineStart(),v!==f&&(!(d=e(i,p))||fi(i,d)||fi(p,d))&&(p[0]+=jd,p[1]+=jd,v=n(p[0],p[1])),v!==f)s=0,v?(t.lineStart(),d=e(p,i),t.point(d[0],d[1])):(d=e(i,p),t.point(d[0],d[1]),t.lineEnd()),i=d;else if(u&&i&&a^v){var y;g&o||!(y=e(p,i,!0))||(s=0,a?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])));}!v||i&&fi(i,p)||t.point(p[0],p[1]),i=p,f=v,o=g;},lineEnd:function(){f&&t.lineEnd(),i=null;},clean:function(){return s|(c&&f)<<1}}},function(n,e,r,i){oi(i,t,o,r,n,e);},a?[0,-t]:[-Xd,t-Xd])}function yi(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,c){var s=0,l=0;if(null==i||(s=a(i,u))!==(l=a(o,u))||f(i,o)<0^u>0)do{c.point(0===s||3===s?t:e,s>1?r:n);}while((s=(s+u+4)%4)!==l);else c.point(o[0],o[1]);}function a(r,i){return Qd(r[0]-t)<jd?i>0?0:3:Qd(r[0]-e)<jd?i>0?2:1:Qd(r[1]-n)<jd?i>0?1:0:i>0?3:2}function u(t,n){return f(t.x,n.x)}function f(t,n){var e=a(t,1),r=a(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){function f(t,n){i(t,n)&&w.point(t,n);}function c(o,a){var u=i(o,a);if(l&&h.push([o,a]),m)d=o,p=a,v=u,m=!1,u&&(w.lineStart(),w.point(o,a));else if(u&&b)w.point(o,a);else{var f=[g=Math.max(Pp,Math.min(Cp,g)),_=Math.max(Pp,Math.min(Cp,_))],c=[o=Math.max(Pp,Math.min(Cp,o)),a=Math.max(Pp,Math.min(Cp,a))];!function(t,n,e,r,i,o){var a,u=t[0],f=t[1],c=0,s=1,l=n[0]-u,h=n[1]-f;if(a=e-u,l||!(a>0)){if(a/=l,l<0){if(a<c)return;a<s&&(s=a);}else if(l>0){if(a>s)return;a>c&&(c=a);}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>c&&(c=a);}else if(l>0){if(a<c)return;a<s&&(s=a);}if(a=r-f,h||!(a>0)){if(a/=h,h<0){if(a<c)return;a<s&&(s=a);}else if(h>0){if(a>s)return;a>c&&(c=a);}if(a=o-f,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>c&&(c=a);}else if(h>0){if(a<c)return;a<s&&(s=a);}return c>0&&(t[0]=u+c*l,t[1]=f+c*h),s<1&&(n[0]=u+s*l,n[1]=f+s*h),!0}}}}}(f,c,t,n,e,r)?u&&(w.lineStart(),w.point(o,a),x=!1):(b||(w.lineStart(),w.point(f[0],f[1])),w.point(c[0],c[1]),u||w.lineEnd(),x=!1);}g=o,_=a,b=u;}var s,l,h,d,p,v,g,_,b,m,x,w=a,M=ui(),A={point:f,lineStart:function(){A.point=c,l&&l.push(h=[]),m=!0,b=!1,g=_=NaN;},lineEnd:function(){s&&(c(d,p),v&&b&&M.rejoin(),s.push(M.result())),A.point=f,b&&w.lineEnd();},polygonStart:function(){w=M,s=[],l=[],x=!0;},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=l.length;e<i;++e)for(var o,a,u=l[e],f=1,c=u.length,s=u[0],h=s[0],d=s[1];f<c;++f)o=h,a=d,h=(s=u[f])[0],d=s[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n;return n}(),e=x&&n,i=(s=y(s)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&si(s,u,n,o,a),a.polygonEnd()),w=a,s=l=h=null;}};return A}}function _i(){Rp.point=Rp.lineEnd=vr;}function bi(t,n){yp=t*=Zd,_p=op(n*=Zd),bp=tp(n),Rp.point=mi;}function mi(t,n){t*=Zd;var e=op(n*=Zd),r=tp(n),i=Qd(t-yp),o=tp(i),a=r*op(i),u=bp*e-_p*r*o,f=_p*e+bp*r*o;zp.add(Kd(up(a*a+u*u),f)),yp=t,_p=e,bp=r;}function xi(t){return zp.reset(),br(t,Rp),+zp}function wi(t,n){return Lp[0]=t,Lp[1]=n,xi(Dp)}function Mi(t,n){return !(!t||!qp.hasOwnProperty(t.type))&&qp[t.type](t,n)}function Ai(t,n){return 0===wi(t,n)}function Ti(t,n){var e=wi(t[0],t[1]);return wi(t[0],n)+wi(n,t[1])<=e+jd}function Ni(t,n){return !!hi(t.map(Si),Ei(n))}function Si(t){return (t=t.map(Ei)).pop(),t}function Ei(t){return [t[0]*Zd,t[1]*Zd]}function ki(t,n,e){var r=s(t,n-jd,e).concat(n);return function(t){return r.map(function(n){return [t,n]})}}function Ci(t,n,e){var r=s(t,n-jd,e).concat(n);return function(t){return r.map(function(n){return [n,t]})}}function Pi(){function t(){return {type:"MultiLineString",coordinates:n()}}function n(){return s(np(o/y)*y,i,y).map(d).concat(s(np(c/_)*_,f,_).map(p)).concat(s(np(r/v)*v,e,v).filter(function(t){return Qd(t%y)>jd}).map(l)).concat(s(np(u/g)*g,a,g).filter(function(t){return Qd(t%_)>jd}).map(h))}var e,r,i,o,a,u,f,c,l,h,d,p,v=10,g=v,y=90,_=360,b=2.5;return t.lines=function(){return n().map(function(t){return {type:"LineString",coordinates:t}})},t.outline=function(){return {type:"Polygon",coordinates:[d(o).concat(p(f).slice(1),d(i).reverse().slice(1),p(c).reverse().slice(1))]}},t.extent=function(n){return arguments.length?t.extentMajor(n).extentMinor(n):t.extentMinor()},t.extentMajor=function(n){return arguments.length?(o=+n[0][0],i=+n[1][0],c=+n[0][1],f=+n[1][1],o>i&&(n=o,o=i,i=n),c>f&&(n=c,c=f,f=n),t.precision(b)):[[o,c],[i,f]]},t.extentMinor=function(n){return arguments.length?(r=+n[0][0],e=+n[1][0],u=+n[0][1],a=+n[1][1],r>e&&(n=r,r=e,e=n),u>a&&(n=u,u=a,a=n),t.precision(b)):[[r,u],[e,a]]},t.step=function(n){return arguments.length?t.stepMajor(n).stepMinor(n):t.stepMinor()},t.stepMajor=function(n){return arguments.length?(y=+n[0],_=+n[1],t):[y,_]},t.stepMinor=function(n){return arguments.length?(v=+n[0],g=+n[1],t):[v,g]},t.precision=function(n){return arguments.length?(b=+n,l=ki(u,a,90),h=Ci(r,e,b),d=ki(c,f,90),p=Ci(o,i,b),t):b},t.extentMajor([[-180,-90+jd],[180,90-jd]]).extentMinor([[-180,-80-jd],[180,80+jd]])}function zi(t){return t}function Ri(){Bp.point=Li;}function Li(t,n){Bp.point=Di,mp=wp=t,xp=Mp=n;}function Di(t,n){Yp.add(Mp*t-wp*n),wp=t,Mp=n;}function Ui(){Di(mp,xp);}function qi(t,n){Gp+=t,Vp+=n,++$p;}function Oi(){nv.point=Yi;}function Yi(t,n){nv.point=Bi,qi(Np=t,Sp=n);}function Bi(t,n){var e=t-Np,r=n-Sp,i=up(e*e+r*r);Wp+=i*(Np+t)/2,Zp+=i*(Sp+n)/2,Qp+=i,qi(Np=t,Sp=n);}function Fi(){nv.point=qi;}function Ii(){nv.point=Hi;}function ji(){Xi(Ap,Tp);}function Hi(t,n){nv.point=Xi,qi(Ap=Np=t,Tp=Sp=n);}function Xi(t,n){var e=t-Np,r=n-Sp,i=up(e*e+r*r);Wp+=i*(Np+t)/2,Zp+=i*(Sp+n)/2,Qp+=i,Jp+=(i=Sp*t-Np*n)*(Np+t),Kp+=i*(Sp+n),tv+=3*i,qi(Np=t,Sp=n);}function Gi(t){this._context=t;}function Vi(t,n){fv.point=$i,rv=ov=t,iv=av=n;}function $i(t,n){ov-=t,av-=n,uv.add(up(ov*ov+av*av)),ov=t,av=n;}function Wi(){this._string=[];}function Zi(t){return "m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Qi(t){return function(n){var e=new Ji;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Ji(){}function Ki(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),br(e,t.stream(Xp)),n(Xp.result()),null!=r&&t.clipExtent(r),t}function to(t,n,e){return Ki(t,function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,u]);},e)}function no(t,n,e){return to(t,[[0,0],n],e)}function eo(t,n,e){return Ki(t,function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a]);},e)}function ro(t,n,e){return Ki(t,function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a]);},e)}function io(t,n){return +n?function(t,n){function e(r,i,o,a,u,f,c,s,l,h,d,p,v,g){var y=c-r,_=s-i,b=y*y+_*_;if(b>4*n&&v--){var m=a+h,x=u+d,w=f+p,M=up(m*m+x*x+w*w),A=dr(w/=M),T=Qd(Qd(w)-1)<jd||Qd(o-l)<jd?(o+l)/2:Kd(x,m),N=t(T,A),S=N[0],E=N[1],k=S-r,C=E-i,P=_*k-y*C;(P*P/b>n||Qd((y*k+_*C)/b-.5)>.3||a*h+u*d+f*p<sv)&&(e(r,i,o,a,u,f,S,E,T,m/=M,x/=M,w,v,g),g.point(S,E),e(S,E,T,m,x,w,c,s,l,h,d,p,v,g));}}return function(n){function r(e,r){e=t(e,r),n.point(e[0],e[1]);}function i(){y=NaN,w.point=o,n.lineStart();}function o(r,i){var o=Tr([r,i]),a=t(r,i);e(y,_,g,b,m,x,y=a[0],_=a[1],g=r,b=o[0],m=o[1],x=o[2],cv,n),n.point(y,_);}function a(){w.point=r,n.lineEnd();}function u(){i(),w.point=f,w.lineEnd=c;}function f(t,n){o(s=t,n),l=y,h=_,d=b,p=m,v=x,w.point=o;}function c(){e(y,_,g,b,m,x,l,h,s,d,p,v,cv,n),w.lineEnd=a,a();}var s,l,h,d,p,v,g,y,_,b,m,x,w={point:r,lineStart:i,lineEnd:a,polygonStart:function(){n.polygonStart(),w.lineStart=u;},polygonEnd:function(){n.polygonEnd(),w.lineStart=i;}};return w}}(t,n):function(t){return Qi({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1]);}})}(t)}function oo(t,n,e,r){function i(t,r){return [u*t-f*r+n,e-f*t-u*r]}var o=tp(r),a=op(r),u=o*t,f=a*t,c=o/t,s=a/t,l=(a*e-o*n)/t,h=(a*n+o*e)/t;return i.invert=function(t,n){return [c*t-s*n+l,h-s*t-c*n]},i}function ao(t){return uo(function(){return t})()}function uo(t){function n(t){return l(t[0]*Zd,t[1]*Zd)}function e(){var t=oo(p,0,0,w).apply(null,i(y,_)),n=(w?oo:function(t,n,e){function r(r,i){return [n+t*r,e-t*i]}return r.invert=function(r,i){return [(r-n)/t,(e-i)/t]},r})(p,v-t[0],g-t[1],w);return o=ti(b,m,x),s=Jr(i,n),l=Jr(o,s),c=io(s,S),r()}function r(){return h=d=null,n}var i,o,a,u,f,c,s,l,h,d,p=150,v=480,g=250,y=0,_=0,b=0,m=0,x=0,w=0,M=null,A=kp,T=null,N=zi,S=.5;return n.stream=function(t){return h&&d===t?h:h=lv(function(t){return Qi({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(o)(A(c(N(d=t)))))},n.preclip=function(t){return arguments.length?(A=t,M=void 0,r()):A},n.postclip=function(t){return arguments.length?(N=t,T=a=u=f=null,r()):N},n.clipAngle=function(t){return arguments.length?(A=+t?gi(M=t*Zd):(M=null,kp),r()):M*Wd},n.clipExtent=function(t){return arguments.length?(N=null==t?(T=a=u=f=null,zi):yi(T=+t[0][0],a=+t[0][1],u=+t[1][0],f=+t[1][1]),r()):null==T?null:[[T,a],[u,f]]},n.scale=function(t){return arguments.length?(p=+t,e()):p},n.translate=function(t){return arguments.length?(v=+t[0],g=+t[1],e()):[v,g]},n.center=function(t){return arguments.length?(y=t[0]%360*Zd,_=t[1]%360*Zd,e()):[y*Wd,_*Wd]},n.rotate=function(t){return arguments.length?(b=t[0]%360*Zd,m=t[1]%360*Zd,x=t.length>2?t[2]%360*Zd:0,e()):[b*Wd,m*Wd,x*Wd]},n.angle=function(t){return arguments.length?(w=t%360*Zd,e()):w*Wd},n.precision=function(t){return arguments.length?(c=io(s,S=t*t),r()):up(S)},n.fitExtent=function(t,e){return to(n,t,e)},n.fitSize=function(t,e){return no(n,t,e)},n.fitWidth=function(t,e){return eo(n,t,e)},n.fitHeight=function(t,e){return ro(n,t,e)},function(){return i=t.apply(this,arguments),n.invert=i.invert&&function(t){return (t=l.invert(t[0],t[1]))&&[t[0]*Wd,t[1]*Wd]},e()}}function fo(t){var n=0,e=Xd/3,r=uo(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*Zd,e=t[1]*Zd):[n*Wd,e*Wd]},i}function co(t,n){function e(t,n){var e=up(o-2*i*op(n))/i;return [e*op(t*=i),a-e*tp(t)]}var r=op(t),i=(r+op(n))/2;if(Qd(i)<jd)return function(t){function n(t,n){return [t*e,op(n)/e]}var e=tp(t);return n.invert=function(t,n){return [t/e,dr(n*e)]},n}(t);var o=1+r*(2*i-r),a=up(o)/i;return e.invert=function(t,n){var e=a-n;return [Kd(t,Qd(e))/i*ap(e),dr((o-(t*t+e*e)*i*i)/(2*i))]},e}function so(){return fo(co).scale(155.424).center([0,33.6442])}function lo(){return so().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function ho(t){return function(n,e){var r=tp(n),i=tp(e),o=t(r*i);return [o*i*op(n),o*op(e)]}}function po(t){return function(n,e){var r=up(n*n+e*e),i=t(r),o=op(i),a=tp(i);return [Kd(n*o,r*a),dr(r&&e*o/r)]}}function vo(t,n){return [t,rp(fp((Gd+n)/2))]}function go(t){function n(){var n=Xd*u(),a=o(ii(o.rotate()).invert([0,0]));return c(null==s?[[a[0]-n,a[1]-n],[a[0]+n,a[1]+n]]:t===vo?[[Math.max(a[0]-n,s),e],[Math.min(a[0]+n,r),i]]:[[s,Math.max(a[1]-n,e)],[r,Math.min(a[1]+n,i)]])}var e,r,i,o=ao(t),a=o.center,u=o.scale,f=o.translate,c=o.clipExtent,s=null;return o.scale=function(t){return arguments.length?(u(t),n()):u()},o.translate=function(t){return arguments.length?(f(t),n()):f()},o.center=function(t){return arguments.length?(a(t),n()):a()},o.clipExtent=function(t){return arguments.length?(null==t?s=e=r=i=null:(s=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),n()):null==s?null:[[s,e],[r,i]]},n()}function yo(t){return fp((Gd+t)/2)}function _o(t,n){function e(t,n){o>0?n<-Gd+jd&&(n=-Gd+jd):n>Gd-jd&&(n=Gd-jd);var e=o/ip(yo(n),i);return [e*op(i*t),o-e*tp(i*t)]}var r=tp(t),i=t===n?op(t):rp(r/tp(n))/rp(yo(n)/yo(t)),o=r*ip(yo(t),i)/i;return i?(e.invert=function(t,n){var e=o-n,r=ap(i)*up(t*t+e*e);return [Kd(t,Qd(e))/i*ap(e),2*Jd(ip(o/r,1/i))-Gd]},e):vo}function bo(t,n){return [t,n]}function mo(t,n){function e(t,n){var e=o-n,r=i*t;return [e*op(r),o-e*tp(r)]}var r=tp(t),i=t===n?op(t):(r-tp(n))/(n-t),o=r/i+t;return Qd(i)<jd?bo:(e.invert=function(t,n){var e=o-n;return [Kd(t,Qd(e))/i*ap(e),o-ap(i)*up(t*t+e*e)]},e)}function xo(t,n){var e=tp(n),r=tp(t)*e;return [e*op(t)/r,op(n)/r]}function wo(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?zi:Qi({point:function(i,o){this.stream.point(i*t+e,o*n+r);}})}function Mo(t,n){var e=n*n,r=e*e;return [t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function Ao(t,n){return [tp(n)*op(t),op(n)]}function To(t,n){var e=tp(n),r=1+tp(t)*e;return [e*op(t)/r,op(n)/r]}function No(t,n){return [rp(fp((Gd+n)/2)),-t]}function So(t,n){return t.parent===n.parent?1:2}function Eo(t,n){return t+n.x}function ko(t,n){return Math.max(t,n.y)}function Co(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n;}function Po(t,n){var e,r,i,o,a,u=new Do(t),f=+t.value&&(u.value=t.value),c=[u];for(null==n&&(n=zo);e=c.pop();)if(f&&(e.value=+e.data.value),(i=n(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)c.push(r=e.children[o]=new Do(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(Lo)}function zo(t){return t.children}function Ro(t){t.data=t.data.data;}function Lo(t){var n=0;do{t.height=n;}while((t=t.parent)&&t.height<++n)}function Do(t){this.data=t,this.depth=this.height=0,this.parent=null;}function Uo(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}(pv.call(t))).length,o=[];r<i;)n=t[r],e&&Oo(e,n)?++r:(e=function(t){switch(t.length){case 1:return function(t){return {x:t.x,y:t.y,r:t.r}}(t[0]);case 2:return Bo(t[0],t[1]);case 3:return Fo(t[0],t[1],t[2])}}(o=function(t,n){var e,r;if(Yo(n,t))return [n];for(e=0;e<t.length;++e)if(qo(n,t[e])&&Yo(Bo(t[e],n),t))return [t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(qo(Bo(t[e],t[r]),n)&&qo(Bo(t[e],n),t[r])&&qo(Bo(t[r],n),t[e])&&Yo(Fo(t[e],t[r],n),t))return [t[e],t[r],n];throw new Error}(o,n)),r=0);return e}function qo(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function Oo(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Yo(t,n){for(var e=0;e<n.length;++e)if(!Oo(t,n[e]))return !1;return !0}function Bo(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,f=o-e,c=a-r,s=u-i,l=Math.sqrt(f*f+c*c);return {x:(e+o+f/l*s)/2,y:(r+a+c/l*s)/2,r:(l+i+u)/2}}function Fo(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,f=n.r,c=e.x,s=e.y,l=e.r,h=r-a,d=r-c,p=i-u,v=i-s,g=f-o,y=l-o,_=r*r+i*i-o*o,b=_-a*a-u*u+f*f,m=_-c*c-s*s+l*l,x=d*p-h*v,w=(p*m-v*b)/(2*x)-r,M=(v*g-p*y)/x,A=(d*b-h*m)/(2*x)-i,T=(h*y-d*g)/x,N=M*M+T*T-1,S=2*(o+w*M+A*T),E=w*w+A*A-o*o,k=-(N?(S+Math.sqrt(S*S-4*N*E))/(2*N):E/S);return {x:r+w+M*k,y:i+A+T*k,r:k}}function Io(t,n,e){var r,i,o,a,u=t.x-n.x,f=t.y-n.y,c=u*u+f*f;c?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(c+a-i)/(2*c),o=Math.sqrt(Math.max(0,a/c-r*r)),e.x=t.x-r*u-o*f,e.y=t.y-r*f+o*u):(r=(c+i-a)/(2*c),o=Math.sqrt(Math.max(0,i/c-r*r)),e.x=n.x+r*u-o*f,e.y=n.y+r*f+o*u)):(e.x=n.x+e.r,e.y=n.y);}function jo(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Ho(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function Xo(t){this._=t,this.next=null,this.previous=null;}function Go(t){if(!(i=t.length))return 0;var n,e,r,i,o,a,u,f,c,s,l;if(n=t[0],n.x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;Io(e,n,r=t[2]),n=new Xo(n),e=new Xo(e),r=new Xo(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(u=3;u<i;++u){Io(n._,e._,r=t[u]),r=new Xo(r),f=e.next,c=n.previous,s=e._.r,l=n._.r;do{if(s<=l){if(jo(f._,r._)){e=f,n.next=e,e.previous=n,--u;continue t}s+=f._.r,f=f.next;}else{if(jo(c._,r._)){(n=c).next=e,e.previous=n,--u;continue t}l+=c._.r,c=c.previous;}}while(f!==c.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=Ho(n);(r=r.next)!==e;)(a=Ho(r))<o&&(n=r,o=a);e=n.next;}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=Uo(n),u=0;u<i;++u)n=t[u],n.x-=r.x,n.y-=r.y;return r.r}function Vo(t){if("function"!=typeof t)throw new Error;return t}function $o(){return 0}function Wo(t){return function(){return t}}function Zo(t){return Math.sqrt(t.value)}function Qo(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0));}}function Jo(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0;if(u)for(i=0;i<a;++i)r[i].r+=u;if(o=Go(r),u)for(i=0;i<a;++i)r[i].r-=u;e.r=o+u;}}}function Ko(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y);}}function ta(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1);}function na(t,n,e,r,i){for(var o,a=t.children,u=-1,f=a.length,c=t.value&&(r-n)/t.value;++u<f;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*c;}function ea(t){return t.id}function ra(t){return t.parentId}function ia(t,n){return t.parent===n.parent?1:2}function oa(t){var n=t.children;return n?n[0]:t.t}function aa(t){var n=t.children;return n?n[n.length-1]:t.t}function ua(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e;}function fa(t,n,e){return t.a.parent===n.parent?t.a:e}function ca(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n;}function sa(t,n,e,r,i){for(var o,a=t.children,u=-1,f=a.length,c=t.value&&(i-e)/t.value;++u<f;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*c;}function la(t,n,e,r,i,o){for(var a,u,f,c,s,l,h,d,p,v,g,y=[],_=n.children,b=0,m=0,x=_.length,w=n.value;b<x;){f=i-e,c=o-r;do{s=_[m++].value;}while(!s&&m<x);for(l=h=s,g=s*s*(v=Math.max(c/f,f/c)/(w*t)),p=Math.max(h/g,g/l);m<x;++m){if(s+=u=_[m].value,u<l&&(l=u),u>h&&(h=u),g=s*s*v,(d=Math.max(h/g,g/l))>p){s-=u;break}p=d;}y.push(a={value:s,dice:f<c,children:_.slice(b,m)}),a.dice?na(a,e,r,i,w?r+=c*s/w:o):sa(a,e,r,w?e+=f*s/w:i,o),w-=s,b=m;}return y}function ha(t,n,e){return (n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function da(t,n){return t[0]-n[0]||t[1]-n[1]}function pa(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&ha(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i;}return e.slice(0,r)}function va(){return Math.random()}function ga(t){function n(n){var o=n+"",a=e.get(o);if(!a){if(i!==Cv)return i;e.set(o,a=r.push(n));}return t[(a-1)%t.length]}var e=he(),r=[],i=Cv;return t=null==t?[]:kv.call(t),n.domain=function(t){if(!arguments.length)return r.slice();r=[],e=he();for(var i,o,a=-1,u=t.length;++a<u;)e.has(o=(i=t[a])+"")||e.set(o,r.push(i));return n},n.range=function(e){return arguments.length?(t=kv.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(i=t,n):i},n.copy=function(){return ga().domain(r).range(t).unknown(i)},n}function ya(){function t(){var t=i().length,r=a[1]<a[0],h=a[r-0],d=a[1-r];n=(d-h)/Math.max(1,t-f+2*c),u&&(n=Math.floor(n)),h+=(d-h-n*(t-f))*l,e=n*(1-f),u&&(h=Math.round(h),e=Math.round(e));var p=s(t).map(function(t){return h+n*t});return o(r?p.reverse():p)}var n,e,r=ga().unknown(void 0),i=r.domain,o=r.range,a=[0,1],u=!1,f=0,c=0,l=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i()},r.range=function(n){return arguments.length?(a=[+n[0],+n[1]],t()):a.slice()},r.rangeRound=function(n){return a=[+n[0],+n[1]],u=!0,t()},r.bandwidth=function(){return e},r.step=function(){return n},r.round=function(n){return arguments.length?(u=!!n,t()):u},r.padding=function(n){return arguments.length?(f=c=Math.max(0,Math.min(1,n)),t()):f},r.paddingInner=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),t()):f},r.paddingOuter=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c},r.align=function(n){return arguments.length?(l=Math.max(0,Math.min(1,n)),t()):l},r.copy=function(){return ya().domain(i()).range(a).round(u).paddingInner(f).paddingOuter(c).align(l)},t()}function _a(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return _a(n())},t}function ba(t){return function(){return t}}function ma(t){return +t}function xa(t,n){return (n-=t=+t)?function(e){return (e-t)/n}:ba(n)}function wa(t,n,e,r){var i=t[0],o=t[1],a=n[0],u=n[1];return o<i?(i=e(o,i),a=r(u,a)):(i=e(i,o),a=r(a,u)),function(t){return a(i(t))}}function Ma(t,n,e,r){var i=Math.min(t.length,n.length)-1,o=new Array(i),a=new Array(i),u=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<i;)o[u]=e(t[u],t[u+1]),a[u]=r(n[u],n[u+1]);return function(n){var e=Jc(t,n,1,i)-1;return a[e](o[e](n))}}function Aa(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function Ta(t,n){function e(){return i=Math.min(u.length,f.length)>2?Ma:wa,o=a=null,r}function r(n){return (o||(o=i(u,f,s?function(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}(t):t,c)))(+n)}var i,o,a,u=Pv,f=Pv,c=dn,s=!1;return r.invert=function(t){return (a||(a=i(f,u,xa,s?function(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}(n):n)))(+t)},r.domain=function(t){return arguments.length?(u=Ev.call(t,ma),e()):u.slice()},r.range=function(t){return arguments.length?(f=kv.call(t),e()):f.slice()},r.rangeRound=function(t){return f=kv.call(t),c=pn,e()},r.clamp=function(t){return arguments.length?(s=!!t,e()):s},r.interpolate=function(t){return arguments.length?(c=t,e()):c},e()}function Na(n){var e=n.domain;return n.ticks=function(t){var n=e();return l(n[0],n[n.length-1],null==t?10:t)},n.tickFormat=function(n,r){return function(n,e,r){var i,o=n[0],a=n[n.length-1],u=d(o,a,null==e?10:e);switch((r=tr(null==r?",f":r)).type){case"s":var f=Math.max(Math.abs(o),Math.abs(a));return null!=r.precision||isNaN(i=ur(u,f))||(r.precision=i),t.formatPrefix(r,f);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=fr(u,Math.max(Math.abs(o),Math.abs(a))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=ar(u))||(r.precision=i-2*("%"===r.type));}return t.format(r)}(e(),n,r)},n.nice=function(t){null==t&&(t=10);var r,i=e(),o=0,a=i.length-1,u=i[o],f=i[a];return f<u&&(r=u,u=f,f=r,r=o,o=a,a=r),(r=h(u,f,t))>0?r=h(u=Math.floor(u/r)*r,f=Math.ceil(f/r)*r,t):r<0&&(r=h(u=Math.ceil(u*r)/r,f=Math.floor(f*r)/r,t)),r>0?(i[o]=Math.floor(u/r)*r,i[a]=Math.ceil(f/r)*r,e(i)):r<0&&(i[o]=Math.ceil(u*r)/r,i[a]=Math.floor(f*r)/r,e(i)),n},n}function Sa(){var t=Ta(xa,sn);return t.copy=function(){return Aa(t,Sa())},Na(t)}function Ea(){function t(t){return +t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=Ev.call(e,ma),t):n.slice()},t.copy=function(){return Ea().domain(n)},Na(t)}function ka(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function Ca(t,n){return (n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:ba(n)}function Pa(t,n){return t<0?function(e){return -Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function za(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Ra(t){return 10===t?za:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function La(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function Da(t){return function(n){return -t(-n)}}function Ua(){function n(){return o=La(i),a=Ra(i),r()[0]<0&&(o=Da(o),a=Da(a)),e}var e=Ta(Ca,Pa).domain([1,10]),r=e.domain,i=10,o=La(10),a=Ra(10);return e.base=function(t){return arguments.length?(i=+t,n()):i},e.domain=function(t){return arguments.length?(r(t),n()):r()},e.ticks=function(t){var n,e=r(),u=e[0],f=e[e.length-1];(n=f<u)&&(d=u,u=f,f=d);var c,s,h,d=o(u),p=o(f),v=null==t?10:+t,g=[];if(!(i%1)&&p-d<v){if(d=Math.round(d)-1,p=Math.round(p)+1,u>0){for(;d<p;++d)for(s=1,c=a(d);s<i;++s)if(!((h=c*s)<u)){if(h>f)break;g.push(h);}}else for(;d<p;++d)for(s=i-1,c=a(d);s>=1;--s)if(!((h=c*s)<u)){if(h>f)break;g.push(h);}}else g=l(d,p,Math.min(p-d,v)).map(a);return n?g.reverse():g},e.tickFormat=function(n,r){if(null==r&&(r=10===i?".0e":","),"function"!=typeof r&&(r=t.format(r)),n===1/0)return r;null==n&&(n=10);var u=Math.max(1,i*n/e.ticks().length);return function(t){var n=t/a(Math.round(o(t)));return n*i<i-.5&&(n*=i),n<=u?r(t):""}},e.nice=function(){return r(ka(r(),{floor:function(t){return a(Math.floor(o(t)))},ceil:function(t){return a(Math.ceil(o(t)))}}))},e.copy=function(){return Aa(e,Ua().base(i))},e}function qa(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function Oa(){var t=1,n=Ta(function(n,e){return (e=qa(e,t)-(n=qa(n,t)))?function(r){return (qa(r,t)-n)/e}:ba(e)},function(n,e){return e=qa(e,t)-(n=qa(n,t)),function(r){return qa(n+e*r,1/t)}}),e=n.domain;return n.exponent=function(n){return arguments.length?(t=+n,e(e())):t},n.copy=function(){return Aa(n,Oa().exponent(t))},Na(n)}function Ya(){function t(){var t=0,n=Math.max(1,i.length);for(o=new Array(n-1);++t<n;)o[t-1]=v(r,t/n);return e}function e(t){if(!isNaN(t=+t))return i[Jc(o,t)]}var r=[],i=[],o=[];return e.invertExtent=function(t){var n=i.indexOf(t);return n<0?[NaN,NaN]:[n>0?o[n-1]:r[0],n<o.length?o[n]:r[r.length-1]]},e.domain=function(e){if(!arguments.length)return r.slice();r=[];for(var i,o=0,a=e.length;o<a;++o)null==(i=e[o])||isNaN(i=+i)||r.push(i);return r.sort(n),t()},e.range=function(n){return arguments.length?(i=kv.call(n),t()):i.slice()},e.quantiles=function(){return o.slice()},e.copy=function(){return Ya().domain(r).range(i)},e}function Ba(){function t(t){if(t<=t)return a[Jc(o,t,0,i)]}function n(){var n=-1;for(o=new Array(i);++n<i;)o[n]=((n+1)*r-(n-i)*e)/(i+1);return t}var e=0,r=1,i=1,o=[.5],a=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r]},t.range=function(t){return arguments.length?(i=(a=kv.call(t)).length-1,n()):a.slice()},t.invertExtent=function(t){var n=a.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,o[0]]:n>=i?[o[i-1],r]:[o[n-1],o[n]]},t.copy=function(){return Ba().domain([e,r]).range(a)},Na(t)}function Fa(){function t(t){if(t<=t)return e[Jc(n,t,0,r)]}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=kv.call(i),r=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(i){return arguments.length?(e=kv.call(i),r=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return [n[r-1],n[r]]},t.copy=function(){return Fa().domain(n).range(e)},t}function Ia(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(a=new Date(+e)),n(e,o),t(e);}while(a<e&&e<r);return u},i.filter=function(e){return Ia(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1);},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return zv.setTime(+n),Rv.setTime(+r),t(zv),t(Rv),Math.floor(e(zv,Rv))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}function ja(t){return Ia(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0);},function(t,n){t.setDate(t.getDate()+7*n);},function(t,n){return (n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Uv)/qv})}function Ha(t){return Ia(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0);},function(t,n){t.setUTCDate(t.getUTCDate()+7*n);},function(t,n){return (n-t)/qv})}function Xa(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function Ga(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Va(t){return {y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function $a(t){function n(t,n){return function(e){var r,i,o,a=[],u=-1,f=0,c=t.length;for(e instanceof Date||(e=new Date(+e));++u<c;)37===t.charCodeAt(u)&&(a.push(t.slice(f,u)),null!=(i=Dg[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),f=u+1);return a.push(t.slice(f,u)),a.join("")}}function e(t,n){return function(e){var i,o,a=Va(1900);if(r(a,t,e+="",0)!=e.length)return null;if("Q"in a)return new Date(a.Q);if("p"in a&&(a.H=a.H%12+12*a.p),"V"in a){if(a.V<1||a.V>53)return null;"w"in a||(a.w=1),"Z"in a?(i=(o=(i=Ga(Va(a.y))).getUTCDay())>4||0===o?yg.ceil(i):yg(i),i=pg.offset(i,7*(a.V-1)),a.y=i.getUTCFullYear(),a.m=i.getUTCMonth(),a.d=i.getUTCDate()+(a.w+6)%7):(i=(o=(i=n(Va(a.y))).getDay())>4||0===o?Vv.ceil(i):Vv(i),i=Hv.offset(i,7*(a.V-1)),a.y=i.getFullYear(),a.m=i.getMonth(),a.d=i.getDate()+(a.w+6)%7);}else("W"in a||"U"in a)&&("w"in a||(a.w="u"in a?a.u%7:"W"in a?1:0),o="Z"in a?Ga(Va(a.y)).getUTCDay():n(Va(a.y)).getDay(),a.m=0,a.d="W"in a?(a.w+6)%7+7*a.W-(o+5)%7:a.w+7*a.U-(o+6)%7);return "Z"in a?(a.H+=a.Z/100|0,a.M+=a.Z%100,Ga(a)):n(a)}}function r(t,n,e,r){for(var i,o,a=0,u=n.length,f=e.length;a<u;){if(r>=f)return -1;if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=A[i in Dg?n.charAt(a++):i])||(r=o(t,e,r))<0)return -1}else if(i!=e.charCodeAt(r++))return -1}return r}var i=t.dateTime,o=t.date,a=t.time,u=t.periods,f=t.days,c=t.shortDays,s=t.months,l=t.shortMonths,h=Qa(u),d=Ja(u),p=Qa(f),v=Ja(f),g=Qa(c),y=Ja(c),_=Qa(s),b=Ja(s),m=Qa(l),x=Ja(l),w={a:function(t){return c[t.getDay()]},A:function(t){return f[t.getDay()]},b:function(t){return l[t.getMonth()]},B:function(t){return s[t.getMonth()]},c:null,d:_u,e:_u,f:Mu,H:bu,I:mu,j:xu,L:wu,m:Au,M:Tu,p:function(t){return u[+(t.getHours()>=12)]},Q:Ku,s:tf,S:Nu,u:Su,U:Eu,V:ku,w:Cu,W:Pu,x:null,X:null,y:zu,Y:Ru,Z:Lu,"%":Ju},M={a:function(t){return c[t.getUTCDay()]},A:function(t){return f[t.getUTCDay()]},b:function(t){return l[t.getUTCMonth()]},B:function(t){return s[t.getUTCMonth()]},c:null,d:Du,e:Du,f:Bu,H:Uu,I:qu,j:Ou,L:Yu,m:Fu,M:Iu,p:function(t){return u[+(t.getUTCHours()>=12)]},Q:Ku,s:tf,S:ju,u:Hu,U:Xu,V:Gu,w:Vu,W:$u,x:null,X:null,y:Wu,Y:Zu,Z:Qu,"%":Ju},A={a:function(t,n,e){var r=g.exec(n.slice(e));return r?(t.w=y[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=p.exec(n.slice(e));return r?(t.w=v[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=m.exec(n.slice(e));return r?(t.m=x[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=_.exec(n.slice(e));return r?(t.m=b[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,n,e){return r(t,i,n,e)},d:fu,e:fu,f:pu,H:su,I:su,j:cu,L:du,m:uu,M:lu,p:function(t,n,e){var r=h.exec(n.slice(e));return r?(t.p=d[r[0].toLowerCase()],e+r[0].length):-1},Q:gu,s:yu,S:hu,u:tu,U:nu,V:eu,w:Ka,W:ru,x:function(t,n,e){return r(t,o,n,e)},X:function(t,n,e){return r(t,a,n,e)},y:ou,Y:iu,Z:au,"%":vu};return w.x=n(o,w),w.X=n(a,w),w.c=n(i,w),M.x=n(o,M),M.X=n(a,M),M.c=n(i,M),{format:function(t){var e=n(t+="",w);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",Xa);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",M);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,Ga);return n.toString=function(){return t},n}}}function Wa(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function Za(t){return t.replace(Og,"\\$&")}function Qa(t){return new RegExp("^(?:"+t.map(Za).join("|")+")","i")}function Ja(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function Ka(t,n,e){var r=Ug.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function tu(t,n,e){var r=Ug.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function nu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function eu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function ru(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function iu(t,n,e){var r=Ug.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function ou(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function au(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function uu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function fu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function cu(t,n,e){var r=Ug.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function su(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function lu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function hu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function du(t,n,e){var r=Ug.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function pu(t,n,e){var r=Ug.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function vu(t,n,e){var r=qg.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function gu(t,n,e){var r=Ug.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function yu(t,n,e){var r=Ug.exec(n.slice(e));return r?(t.Q=1e3*+r[0],e+r[0].length):-1}function _u(t,n){return Wa(t.getDate(),n,2)}function bu(t,n){return Wa(t.getHours(),n,2)}function mu(t,n){return Wa(t.getHours()%12||12,n,2)}function xu(t,n){return Wa(1+Hv.count(fg(t),t),n,3)}function wu(t,n){return Wa(t.getMilliseconds(),n,3)}function Mu(t,n){return wu(t,n)+"000"}function Au(t,n){return Wa(t.getMonth()+1,n,2)}function Tu(t,n){return Wa(t.getMinutes(),n,2)}function Nu(t,n){return Wa(t.getSeconds(),n,2)}function Su(t){var n=t.getDay();return 0===n?7:n}function Eu(t,n){return Wa(Gv.count(fg(t),t),n,2)}function ku(t,n){var e=t.getDay();return t=e>=4||0===e?Zv(t):Zv.ceil(t),Wa(Zv.count(fg(t),t)+(4===fg(t).getDay()),n,2)}function Cu(t){return t.getDay()}function Pu(t,n){return Wa(Vv.count(fg(t),t),n,2)}function zu(t,n){return Wa(t.getFullYear()%100,n,2)}function Ru(t,n){return Wa(t.getFullYear()%1e4,n,4)}function Lu(t){var n=t.getTimezoneOffset();return (n>0?"-":(n*=-1,"+"))+Wa(n/60|0,"0",2)+Wa(n%60,"0",2)}function Du(t,n){return Wa(t.getUTCDate(),n,2)}function Uu(t,n){return Wa(t.getUTCHours(),n,2)}function qu(t,n){return Wa(t.getUTCHours()%12||12,n,2)}function Ou(t,n){return Wa(1+pg.count(zg(t),t),n,3)}function Yu(t,n){return Wa(t.getUTCMilliseconds(),n,3)}function Bu(t,n){return Yu(t,n)+"000"}function Fu(t,n){return Wa(t.getUTCMonth()+1,n,2)}function Iu(t,n){return Wa(t.getUTCMinutes(),n,2)}function ju(t,n){return Wa(t.getUTCSeconds(),n,2)}function Hu(t){var n=t.getUTCDay();return 0===n?7:n}function Xu(t,n){return Wa(gg.count(zg(t),t),n,2)}function Gu(t,n){var e=t.getUTCDay();return t=e>=4||0===e?mg(t):mg.ceil(t),Wa(mg.count(zg(t),t)+(4===zg(t).getUTCDay()),n,2)}function Vu(t){return t.getUTCDay()}function $u(t,n){return Wa(yg.count(zg(t),t),n,2)}function Wu(t,n){return Wa(t.getUTCFullYear()%100,n,2)}function Zu(t,n){return Wa(t.getUTCFullYear()%1e4,n,4)}function Qu(){return "+0000"}function Ju(){return "%"}function Ku(t){return +t}function tf(t){return Math.floor(+t/1e3)}function nf(n){return Rg=$a(n),t.timeFormat=Rg.format,t.timeParse=Rg.parse,t.utcFormat=Rg.utcFormat,t.utcParse=Rg.utcParse,Rg}function ef(t){return new Date(t)}function rf(t){return t instanceof Date?+t:+new Date(+t)}function of(t,n,r,i,o,a,u,f,c){function s(e){return (u(e)<e?g:a(e)<e?y:o(e)<e?_:i(e)<e?b:n(e)<e?r(e)<e?m:x:t(e)<e?w:M)(e)}function l(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(i-r)/n,u=e(function(t){return t[2]}).right(A,a);u===A.length?(o=d(r/$g,i/$g,n),n=t):u?(o=(u=A[a/A[u-1][2]<A[u][2]/a?u-1:u])[1],n=u[0]):(o=Math.max(d(r,i,n),1),n=f);}return null==o?n:n.every(o)}var h=Ta(xa,sn),p=h.invert,v=h.domain,g=c(".%L"),y=c(":%S"),_=c("%I:%M"),b=c("%I %p"),m=c("%a %d"),x=c("%b %d"),w=c("%B"),M=c("%Y"),A=[[u,1,Ig],[u,5,5*Ig],[u,15,15*Ig],[u,30,30*Ig],[a,1,jg],[a,5,5*jg],[a,15,15*jg],[a,30,30*jg],[o,1,Hg],[o,3,3*Hg],[o,6,6*Hg],[o,12,12*Hg],[i,1,Xg],[i,2,2*Xg],[r,1,Gg],[n,1,Vg],[n,3,3*Vg],[t,1,$g]];return h.invert=function(t){return new Date(p(t))},h.domain=function(t){return arguments.length?v(Ev.call(t,rf)):v().map(ef)},h.ticks=function(t,n){var e,r=v(),i=r[0],o=r[r.length-1],a=o<i;return a&&(e=i,i=o,o=e),e=l(t,i,o,n),e=e?e.range(i,o+1):[],a?e.reverse():e},h.tickFormat=function(t,n){return null==n?s:c(n)},h.nice=function(t,n){var e=v();return (t=l(t,e[0],e[e.length-1],n))?v(ka(e,t)):h},h.copy=function(){return Aa(h,of(t,n,r,i,o,a,u,f,c))},h}function af(t){function n(n){var o=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,o)):o)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return af(t).domain([e,r]).clamp(i)},Na(n)}function uf(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}function ff(t){return rl(t[t.length-1])}function cf(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function sf(t){return function(){return t}}function lf(t){return t>=1?A_:t<=-1?-A_:Math.asin(t)}function hf(t){return t.innerRadius}function df(t){return t.outerRadius}function pf(t){return t.startAngle}function vf(t){return t.endAngle}function gf(t){return t&&t.padAngle}function yf(t,n,e,r,i,o,a){var u=t-e,f=n-r,c=(a?o:-o)/x_(u*u+f*f),s=c*f,l=-c*u,h=t+s,d=n+l,p=e+s,v=r+l,g=(h+p)/2,y=(d+v)/2,_=p-h,b=v-d,m=_*_+b*b,x=i-o,w=h*v-p*d,M=(b<0?-1:1)*x_(__(0,x*x*m-w*w)),A=(w*b-_*M)/m,T=(-w*_-b*M)/m,N=(w*b+_*M)/m,S=(-w*_+b*M)/m,E=A-g,k=T-y,C=N-g,P=S-y;return E*E+k*k>C*C+P*P&&(A=N,T=S),{cx:A,cy:T,x01:-s,y01:-l,x11:A*(i/x-1),y11:T*(i/x-1)}}function _f(t){this._context=t;}function bf(t){return new _f(t)}function mf(t){return t[0]}function xf(t){return t[1]}function wf(){function t(t){var u,f,c,s=t.length,l=!1;for(null==i&&(a=o(c=oe())),u=0;u<=s;++u)!(u<s&&r(f=t[u],u,t))===l&&((l=!l)?a.lineStart():a.lineEnd()),l&&a.point(+n(f,u,t),+e(f,u,t));if(c)return a=null,c+""||null}var n=mf,e=xf,r=sf(!0),i=null,o=bf,a=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:sf(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:sf(+n),t):e},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:sf(!!n),t):r},t.curve=function(n){return arguments.length?(o=n,null!=i&&(a=o(i)),t):o},t.context=function(n){return arguments.length?(null==n?i=a=null:a=o(i=n),t):i},t}function Mf(){function t(t){var n,s,l,h,d,p=t.length,v=!1,g=new Array(p),y=new Array(p);for(null==u&&(c=f(d=oe())),n=0;n<=p;++n){if(!(n<p&&a(h=t[n],n,t))===v)if(v=!v)s=n,c.areaStart(),c.lineStart();else{for(c.lineEnd(),c.lineStart(),l=n-1;l>=s;--l)c.point(g[l],y[l]);c.lineEnd(),c.areaEnd();}v&&(g[n]=+e(h,n,t),y[n]=+i(h,n,t),c.point(r?+r(h,n,t):g[n],o?+o(h,n,t):y[n]));}if(d)return c=null,d+""||null}function n(){return wf().defined(a).curve(f).context(u)}var e=mf,r=null,i=sf(0),o=xf,a=sf(!0),u=null,f=bf,c=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:sf(+n),r=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:sf(+n),t):e},t.x1=function(n){return arguments.length?(r=null==n?null:"function"==typeof n?n:sf(+n),t):r},t.y=function(n){return arguments.length?(i="function"==typeof n?n:sf(+n),o=null,t):i},t.y0=function(n){return arguments.length?(i="function"==typeof n?n:sf(+n),t):i},t.y1=function(n){return arguments.length?(o=null==n?null:"function"==typeof n?n:sf(+n),t):o},t.lineX0=t.lineY0=function(){return n().x(e).y(i)},t.lineY1=function(){return n().x(e).y(o)},t.lineX1=function(){return n().x(r).y(i)},t.defined=function(n){return arguments.length?(a="function"==typeof n?n:sf(!!n),t):a},t.curve=function(n){return arguments.length?(f=n,null!=u&&(c=f(u)),t):f},t.context=function(n){return arguments.length?(null==n?u=c=null:c=f(u=n),t):u},t}function Af(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Tf(t){return t}function Nf(t){this._curve=t;}function Sf(t){function n(n){return new Nf(t(n))}return n._curve=t,n}function Ef(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Sf(t)):n()._curve},t}function kf(){return Ef(wf().curve(N_))}function Cf(){var t=Mf().curve(N_),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Ef(e())},delete t.lineX0,t.lineEndAngle=function(){return Ef(r())},delete t.lineX1,t.lineInnerRadius=function(){return Ef(i())},delete t.lineY0,t.lineOuterRadius=function(){return Ef(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(Sf(t)):n()._curve},t}function Pf(t,n){return [(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}function zf(t){return t.source}function Rf(t){return t.target}function Lf(t){function n(){var n,u=S_.call(arguments),f=e.apply(this,u),c=r.apply(this,u);if(a||(a=n=oe()),t(a,+i.apply(this,(u[0]=f,u)),+o.apply(this,u),+i.apply(this,(u[0]=c,u)),+o.apply(this,u)),n)return a=null,n+""||null}var e=zf,r=Rf,i=mf,o=xf,a=null;return n.source=function(t){return arguments.length?(e=t,n):e},n.target=function(t){return arguments.length?(r=t,n):r},n.x=function(t){return arguments.length?(i="function"==typeof t?t:sf(+t),n):i},n.y=function(t){return arguments.length?(o="function"==typeof t?t:sf(+t),n):o},n.context=function(t){return arguments.length?(a=null==t?null:t,n):a},n}function Df(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i);}function Uf(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i);}function qf(t,n,e,r,i){var o=Pf(n,e),a=Pf(n,e=(e+i)/2),u=Pf(r,e),f=Pf(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],f[0],f[1]);}function Of(){}function Yf(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6);}function Bf(t){this._context=t;}function Ff(t){this._context=t;}function If(t){this._context=t;}function jf(t,n){this._basis=new Bf(t),this._beta=n;}function Hf(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2);}function Xf(t,n){this._context=t,this._k=(1-n)/6;}function Gf(t,n){this._context=t,this._k=(1-n)/6;}function Vf(t,n){this._context=t,this._k=(1-n)/6;}function $f(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>w_){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,f=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/f,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/f;}if(t._l23_a>w_){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,s=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*c+t._x1*t._l23_2a-n*t._l12_2a)/s,a=(a*c+t._y1*t._l23_2a-e*t._l12_2a)/s;}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2);}function Wf(t,n){this._context=t,this._alpha=n;}function Zf(t,n){this._context=t,this._alpha=n;}function Qf(t,n){this._context=t,this._alpha=n;}function Jf(t){this._context=t;}function Kf(t){return t<0?-1:1}function tc(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return (Kf(o)+Kf(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function nc(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function ec(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a);}function rc(t){this._context=t;}function ic(t){this._context=new oc(t);}function oc(t){this._context=t;}function ac(t){this._context=t;}function uc(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return [i,o]}function fc(t,n){this._context=t,this._t=n;}function cc(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1];}function sc(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function lc(t,n){return t[n]}function hc(t){var n=t.map(dc);return sc(t).sort(function(t,e){return n[t]-n[e]})}function dc(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function pc(t){return function(){return t}}function vc(t){return t[0]}function gc(t){return t[1]}function yc(){this._=null;}function _c(t){t.U=t.C=t.L=t.R=t.P=t.N=null;}function bc(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e;}function mc(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e;}function xc(t){for(;t.L;)t=t.L;return t}function wc(t,n,e,r){var i=[null,null],o=eb.push(i)-1;return i.left=t,i.right=n,e&&Ac(i,t,n,e),r&&Ac(i,n,t,r),tb[t.index].halfedges.push(o),tb[n.index].halfedges.push(o),i}function Mc(t,n,e){var r=[n,e];return r.left=t,r}function Ac(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e);}function Tc(t,n,e,r,i){var o,a=t[0],u=t[1],f=a[0],c=a[1],s=0,l=1,h=u[0]-f,d=u[1]-c;if(o=n-f,h||!(o>0)){if(o/=h,h<0){if(o<s)return;o<l&&(l=o);}else if(h>0){if(o>l)return;o>s&&(s=o);}if(o=r-f,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>s&&(s=o);}else if(h>0){if(o<s)return;o<l&&(l=o);}if(o=e-c,d||!(o>0)){if(o/=d,d<0){if(o<s)return;o<l&&(l=o);}else if(d>0){if(o>l)return;o>s&&(s=o);}if(o=i-c,d||!(o<0)){if(o/=d,d<0){if(o>l)return;o>s&&(s=o);}else if(d>0){if(o<s)return;o<l&&(l=o);}return !(s>0||l<1)||(s>0&&(t[0]=[f+s*h,c+s*d]),l<1&&(t[1]=[f+l*h,c+l*d]),!0)}}}}}function Nc(t,n,e,r,i){var o=t[1];if(o)return !0;var a,u,f=t[0],c=t.left,s=t.right,l=c[0],h=c[1],d=s[0],p=s[1],v=(l+d)/2,g=(h+p)/2;if(p===h){if(v<n||v>=r)return;if(l>d){if(f){if(f[1]>=i)return}else f=[v,e];o=[v,i];}else{if(f){if(f[1]<e)return}else f=[v,i];o=[v,e];}}else if(a=(l-d)/(p-h),u=g-a*v,a<-1||a>1)if(l>d){if(f){if(f[1]>=i)return}else f=[(e-u)/a,e];o=[(i-u)/a,i];}else{if(f){if(f[1]<e)return}else f=[(i-u)/a,i];o=[(e-u)/a,e];}else if(h<p){if(f){if(f[0]>=r)return}else f=[n,a*n+u];o=[r,a*r+u];}else{if(f){if(f[0]<n)return}else f=[r,a*r+u];o=[n,a*n+u];}return t[0]=f,t[1]=o,!0}function Sc(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function Ec(t,n){return n[+(n.left!==t.site)]}function kc(t,n){return n[+(n.left===t.site)]}function Cc(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var a=i[0],u=i[1],f=r[0]-a,c=r[1]-u,s=o[0]-a,l=o[1]-u,h=2*(f*l-c*s);if(!(h>=-ab)){var d=f*f+c*c,p=s*s+l*l,v=(l*d-c*p)/h,g=(f*p-s*d)/h,y=rb.pop()||new function(){_c(this),this.x=this.y=this.arc=this.site=this.cy=null;};y.arc=t,y.site=i,y.x=v+a,y.y=(y.cy=g+u)+Math.sqrt(v*v+g*g),t.circle=y;for(var _=null,b=nb._;b;)if(y.y<b.y||y.y===b.y&&y.x<=b.x){if(!b.L){_=b.P;break}b=b.L;}else{if(!b.R){_=b;break}b=b.R;}nb.insert(_,y),_||(J_=y);}}}}function Pc(t){var n=t.circle;n&&(n.P||(J_=n.N),nb.remove(n),rb.push(n),_c(n),t.circle=null);}function zc(t){var n=ib.pop()||new function(){_c(this),this.edge=this.site=this.circle=null;};return n.site=t,n}function Rc(t){Pc(t),K_.remove(t),ib.push(t),_c(t);}function Lc(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,a=t.N,u=[t];Rc(t);for(var f=o;f.circle&&Math.abs(e-f.circle.x)<ob&&Math.abs(r-f.circle.cy)<ob;)o=f.P,u.unshift(f),Rc(f),f=o;u.unshift(f),Pc(f);for(var c=a;c.circle&&Math.abs(e-c.circle.x)<ob&&Math.abs(r-c.circle.cy)<ob;)a=c.N,u.push(c),Rc(c),c=a;u.push(c),Pc(c);var s,l=u.length;for(s=1;s<l;++s)c=u[s],f=u[s-1],Ac(c.edge,f.site,c.site,i);f=u[0],(c=u[l-1]).edge=wc(f.site,c.site,null,i),Cc(f),Cc(c);}function Dc(t){for(var n,e,r,i,o=t[0],a=t[1],u=K_._;u;)if((r=Uc(u,a)-o)>ob)u=u.L;else{if(!((i=o-function(t,n){var e=t.N;if(e)return Uc(e,n);var r=t.site;return r[1]===n?r[0]:1/0}(u,a))>ob)){r>-ob?(n=u.P,e=u):i>-ob?(n=u,e=u.N):n=e=u;break}if(!u.R){n=u;break}u=u.R;}(function(t){tb[t.index]={site:t,halfedges:[]};})(t);var f=zc(t);if(K_.insert(n,f),n||e){if(n===e)return Pc(n),e=zc(n.site),K_.insert(f,e),f.edge=e.edge=wc(n.site,f.site),Cc(n),void Cc(e);if(e){Pc(n),Pc(e);var c=n.site,s=c[0],l=c[1],h=t[0]-s,d=t[1]-l,p=e.site,v=p[0]-s,g=p[1]-l,y=2*(h*g-d*v),_=h*h+d*d,b=v*v+g*g,m=[(g*_-d*b)/y+s,(h*b-v*_)/y+l];Ac(e.edge,c,p,m),f.edge=wc(c,t,null,m),e.edge=wc(t,p,null,m),Cc(n),Cc(e);}else f.edge=wc(n.site,f.site);}}function Uc(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var a=t.P;if(!a)return -1/0;var u=(e=a.site)[0],f=e[1],c=f-n;if(!c)return u;var s=u-r,l=1/o-1/c,h=s/c;return l?(-h+Math.sqrt(h*h-2*l*(s*s/(-2*c)-f+c/2+i-o/2)))/l+r:(r+u)/2}function qc(t,n,e){return (t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function Oc(t,n){return n[1]-t[1]||n[0]-t[0]}function Yc(t,n){var e,r,i,o=t.sort(Oc).pop();for(eb=[],tb=new Array(t.length),K_=new yc,nb=new yc;;)if(i=J_,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(Dc(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;Lc(i.arc);}if(function(){for(var t,n,e,r,i=0,o=tb.length;i<o;++i)if((t=tb[i])&&(r=(n=t.halfedges).length)){var a=new Array(r),u=new Array(r);for(e=0;e<r;++e)a[e]=e,u[e]=Sc(t,eb[n[e]]);for(a.sort(function(t,n){return u[n]-u[t]}),e=0;e<r;++e)u[e]=n[a[e]];for(e=0;e<r;++e)n[e]=u[e];}}(),n){var a=+n[0][0],u=+n[0][1],f=+n[1][0],c=+n[1][1];(function(t,n,e,r){for(var i,o=eb.length;o--;)Nc(i=eb[o],t,n,e,r)&&Tc(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>ob||Math.abs(i[0][1]-i[1][1])>ob)||delete eb[o];})(a,u,f,c),function(t,n,e,r){var i,o,a,u,f,c,s,l,h,d,p,v,g=tb.length,y=!0;for(i=0;i<g;++i)if(o=tb[i]){for(a=o.site,u=(f=o.halfedges).length;u--;)eb[f[u]]||f.splice(u,1);for(u=0,c=f.length;u<c;)p=(d=kc(o,eb[f[u]]))[0],v=d[1],l=(s=Ec(o,eb[f[++u%c]]))[0],h=s[1],(Math.abs(p-l)>ob||Math.abs(v-h)>ob)&&(f.splice(u,0,eb.push(Mc(a,d,Math.abs(p-t)<ob&&r-v>ob?[t,Math.abs(l-t)<ob?h:r]:Math.abs(v-r)<ob&&e-p>ob?[Math.abs(h-r)<ob?l:e,r]:Math.abs(p-e)<ob&&v-n>ob?[e,Math.abs(l-e)<ob?h:n]:Math.abs(v-n)<ob&&p-t>ob?[Math.abs(h-n)<ob?l:t,n]:null))-1),++c);c&&(y=!1);}if(y){var _,b,m,x=1/0;for(i=0,y=null;i<g;++i)(o=tb[i])&&(m=(_=(a=o.site)[0]-t)*_+(b=a[1]-n)*b)<x&&(x=m,y=o);if(y){var w=[t,n],M=[t,r],A=[e,r],T=[e,n];y.halfedges.push(eb.push(Mc(a=y.site,w,M))-1,eb.push(Mc(a,M,A))-1,eb.push(Mc(a,A,T))-1,eb.push(Mc(a,T,w))-1);}}for(i=0;i<g;++i)(o=tb[i])&&(o.halfedges.length||delete tb[i]);}(a,u,f,c);}this.edges=eb,this.cells=tb,K_=nb=eb=tb=null;}function Bc(t){return function(){return t}}function Fc(t,n,e){this.k=t,this.x=n,this.y=e;}function Ic(t){return t.__zoom||ub}function jc(){t.event.stopImmediatePropagation();}function Hc(){t.event.preventDefault(),t.event.stopImmediatePropagation();}function Xc(){return !t.event.button}function Gc(){var t,n,e=this;return e instanceof SVGElement?(t=(e=e.ownerSVGElement||e).width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function Vc(){return this.__zoom||ub}function $c(){return -t.event.deltaY*(t.event.deltaMode?120:1)/500}function Wc(){return "ontouchstart"in this}function Zc(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}var Qc=e(n),Jc=Qc.right,Kc=Qc.left,ts=Array.prototype,ns=ts.slice,es=ts.map,rs=Math.sqrt(50),is=Math.sqrt(10),os=Math.sqrt(2),as=Array.prototype.slice,us=1,fs=2,cs=3,ss=4,ls=1e-6,hs={value:function(){}};S.prototype=N.prototype={constructor:S,on:function(t,n){var e,r=this._,i=function(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return {type:t,name:e}})}(t+"",r),o=-1,a=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=E(r[e],t.name,n);else if(null==n)for(e in r)r[e]=E(r[e],t.name,null);return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=function(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new S(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i);},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e);}};var ds="http://www.w3.org/1999/xhtml",ps={svg:"http://www.w3.org/2000/svg",xhtml:ds,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},vs=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var gs=document.documentElement;if(!gs.matches){var ys=gs.webkitMatchesSelector||gs.msMatchesSelector||gs.mozMatchesSelector||gs.oMatchesSelector;vs=function(t){return function(){return ys.call(this,t)}};}}var _s=vs;U.prototype={constructor:U,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var bs="$";H.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")));},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")));},contains:function(t){return this._names.indexOf(t)>=0}};var ms={};if(t.event=null,"undefined"!=typeof document){"onmouseenter"in document.documentElement||(ms={mouseenter:"mouseover",mouseleave:"mouseout"});}var xs=[null];ut.prototype=ft.prototype={constructor:ut,select:function(t){"function"!=typeof t&&(t=z(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],f=u.length,c=r[i]=new Array(f),s=0;s<f;++s)(o=u[s])&&(a=t.call(o,o.__data__,s,u))&&("__data__"in o&&(a.__data__=o.__data__),c[s]=a);return new ut(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=L(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],f=u.length,c=0;c<f;++c)(a=u[c])&&(r.push(t.call(a,a.__data__,c,u)),i.push(a));return new ut(r,i)},filter:function(t){"function"!=typeof t&&(t=_s(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,f=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&f.push(o);return new ut(r,this._parents)},data:function(t,n){if(!t)return d=new Array(this.size()),c=-1,this.each(function(t){d[++c]=t;}),d;var e=n?O:q,r=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var o=i.length,a=new Array(o),u=new Array(o),f=new Array(o),c=0;c<o;++c){var s=r[c],l=i[c],h=l.length,d=t.call(s,s&&s.__data__,c,r),p=d.length,v=u[c]=new Array(p),g=a[c]=new Array(p);e(s,l,v,g,f[c]=new Array(h),d,n);for(var y,_,b=0,m=0;b<p;++b)if(y=v[b]){for(b>=m&&(m=b+1);!(_=g[m])&&++m<p;);y._next=_||null;}}return a=new ut(a,r),a._enter=u,a._exit=f,a},enter:function(){return new ut(this._enter||this._groups.map(D),this._parents)},exit:function(){return new ut(this._exit||this._groups.map(D),this._parents)},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var f,c=n[u],s=e[u],l=c.length,h=a[u]=new Array(l),d=0;d<l;++d)(f=c[d]||s[d])&&(h[d]=f);for(;u<r;++u)a[u]=n[u];return new ut(a,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&a!==r.nextSibling&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=Y);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],f=u.length,c=i[o]=new Array(f),s=0;s<f;++s)(a=u[s])&&(c[s]=a);c.sort(n);}return new ut(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this;}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){var t=0;return this.each(function(){++t;}),t},empty:function(){return !this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=k(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local);}}:function(t){return function(){this.removeAttribute(t);}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e);}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e);}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n);}}:function(t,n){return function(){this.setAttribute(t,n);}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t);}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e);}}:function(t,n,e){return function(){this.style.setProperty(t,n,e);}})(t,n,null==e?"":e)):F(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t];}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e;}}:function(t,n){return function(){this[t]=n;}})(t,n)):this.node()[t]},classed:function(t,n){var e=I(t+"");if(arguments.length<2){for(var r=j(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return !1;return !0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?X:G)(this,t);}}:n?function(t){return function(){X(this,t);}}:function(t){return function(){G(this,t);}})(e,n))},text:function(t){return arguments.length?this.each(null==t?V:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n;}}:function(t){return function(){this.textContent=t;}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?$:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n;}}:function(t){return function(){this.innerHTML=t;}})(t)):this.node().innerHTML},raise:function(){return this.each(W)},lower:function(){return this.each(Z)},append:function(t){var n="function"==typeof t?t:C(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:C(t),r=null==n?Q:"function"==typeof n?n:z(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(J)},clone:function(t){return this.select(t?tt:K)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?it:rt,null==e&&(e=!1),r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var f,c=0,s=u.length;c<s;++c)for(r=0,f=u[c];r<a;++r)if((i=o[r]).type===f.type&&i.name===f.name)return f.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return at(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return at(this,t,n)}})(t,n))}};var ws=0;lt.prototype=st.prototype={constructor:lt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},xt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var Ms="\\s*([+-]?\\d+)\\s*",As="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ts="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ns=/^#([0-9a-f]{3})$/,Ss=/^#([0-9a-f]{6})$/,Es=new RegExp("^rgb\\("+[Ms,Ms,Ms]+"\\)$"),ks=new RegExp("^rgb\\("+[Ts,Ts,Ts]+"\\)$"),Cs=new RegExp("^rgba\\("+[Ms,Ms,Ms,As]+"\\)$"),Ps=new RegExp("^rgba\\("+[Ts,Ts,Ts,As]+"\\)$"),zs=new RegExp("^hsl\\("+[As,Ts,Ts]+"\\)$"),Rs=new RegExp("^hsla\\("+[As,Ts,Ts,As]+"\\)$"),Ls={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Nt(Et,kt,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),Nt(Lt,Rt,St(Et,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Lt(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Lt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},hex:function(){return "#"+Dt(this.r)+Dt(this.g)+Dt(this.b)},toString:function(){var t=this.opacity;return (1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Nt(Ot,qt,St(Et,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Ot(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Ot(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new Lt(Yt(t>=240?t-240:t+120,i,r),Yt(t,i,r),Yt(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return (0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var Ds=Math.PI/180,Us=180/Math.PI,qs=.96422,Os=1,Ys=.82521,Bs=4/29,Fs=6/29,Is=3*Fs*Fs,js=Fs*Fs*Fs;Nt(It,Ft,St(Et,{brighter:function(t){return new It(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new It(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return n=qs*Ht(n),t=Os*Ht(t),e=Ys*Ht(e),new Lt(Xt(3.1338561*n-1.6168667*t-.4906146*e),Xt(-.9787684*n+1.9161415*t+.033454*e),Xt(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Nt(Wt,$t,St(Et,{brighter:function(t){return new Wt(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Wt(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Bt(this).rgb()}}));var Hs=-.29227,Xs=-.90649,Gs=1.97294,Vs=Gs*Xs,$s=1.78277*Gs,Ws=1.78277*Hs- -.14861*Xs;Nt(Qt,Zt,St(Et,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Qt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Qt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Ds,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new Lt(255*(n+e*(-.14861*r+1.78277*i)),255*(n+e*(Hs*r+Xs*i)),255*(n+e*(Gs*r)),this.opacity)}}));var Zs,Qs,Js,Ks,tl,nl,el=function t(n){function e(t,n){var e=r((t=Rt(t)).r,(n=Rt(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),a=an(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}var r=on(n);return e.gamma=t,e}(1),rl=un(Kt),il=un(tn),ol=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,al=new RegExp(ol.source,"g"),ul=180/Math.PI,fl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},cl=gn(function(t){return "none"===t?fl:(Zs||(Zs=document.createElement("DIV"),Qs=document.documentElement,Js=document.defaultView),Zs.style.transform=t,t=Js.getComputedStyle(Qs.appendChild(Zs),null).getPropertyValue("transform"),Qs.removeChild(Zs),t=t.slice(7,-1).split(","),vn(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),sl=gn(function(t){return null==t?fl:(Ks||(Ks=document.createElementNS("http://www.w3.org/2000/svg","g")),Ks.setAttribute("transform",t),(t=Ks.transform.baseVal.consolidate())?(t=t.matrix,vn(t.a,t.b,t.c,t.d,t.e,t.f)):fl)},", ",")",")"),ll=Math.SQRT2,hl=2,dl=4,pl=1e-12,vl=bn(rn),gl=bn(an),yl=mn(rn),_l=mn(an),bl=xn(rn),ml=xn(an),xl=0,wl=0,Ml=0,Al=1e3,Tl=0,Nl=0,Sl=0,El="object"==typeof performance&&performance.now?performance:Date,kl="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17);};An.prototype=Tn.prototype={constructor:An,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?wn():+e)+(null==n?0:+n),this._next||nl===this||(nl?nl._next=this:tl=this,nl=this),this._call=t,this._time=e,kn();},stop:function(){this._call&&(this._call=null,this._time=1/0,kn());}};var Cl=N("start","end","interrupt"),Pl=[],zl=0,Rl=1,Ll=2,Dl=3,Ul=4,ql=5,Ol=6,Yl=ft.prototype.constructor,Bl=0,Fl=ft.prototype;On.prototype=Yn.prototype={constructor:On,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=z(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,f,c=r[a],s=c.length,l=o[a]=new Array(s),h=0;h<s;++h)(u=c[h])&&(f=t.call(u,u.__data__,h,c))&&("__data__"in u&&(f.__data__=u.__data__),l[h]=f,Pn(l[h],n,e,h,l,Ln(u,e)));return new On(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=L(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var f,c=r[u],s=c.length,l=0;l<s;++l)if(f=c[l]){for(var h,d=t.call(f,f.__data__,l,c),p=Ln(f,e),v=0,g=d.length;v<g;++v)(h=d[v])&&Pn(h,n,e,v,d,p);o.push(d),a.push(f);}return new On(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=_s(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,f=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&f.push(o);return new On(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var f,c=n[u],s=e[u],l=c.length,h=a[u]=new Array(l),d=0;d<l;++d)(f=c[d]||s[d])&&(h[d]=f);for(;u<r;++u)a[u]=n[u];return new On(a,this._parents,this._name,this._id)},selection:function(){return new Yl(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Bn(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],f=u.length,c=0;c<f;++c)if(a=u[c]){var s=Ln(a,n);Pn(a,t,e,c,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease});}return new On(r,this._parents,t,e)},call:Fl.call,nodes:Fl.nodes,node:Fl.node,size:Fl.size,empty:Fl.empty,each:Fl.each,on:function(t,n){var e=this._id;return arguments.length<2?Ln(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return (t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?zn:Rn;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i;}}(e,t,n))},attr:function(t,n){var e=k(t),r="transform"===e?sl:qn;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var a,u=e(this);if(null!=u)return (a=this.getAttributeNS(t.space,t.local))===u?null:a===r&&u===i?o:o=n(r=a,i=u);this.removeAttributeNS(t.space,t.local);}}:function(t,n,e){var r,i,o;return function(){var a,u=e(this);if(null!=u)return (a=this.getAttribute(t))===u?null:a===r&&u===i?o:o=n(r=a,i=u);this.removeAttribute(t);}})(e,r,Un(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local);}}:function(t){return function(){this.removeAttribute(t);}})(e):(e.local?function(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}:function(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}})(e,r,n+""))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return (e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=k(t);return this.tween(e,(r.local?function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n));}}return e._value=n,e}:function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n));}}return e._value=n,e})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?cl:qn;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=F(this,t),a=(this.style.removeProperty(t),F(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,function(t){return function(){this.style.removeProperty(t);}}(t)):this.styleTween(t,"function"==typeof n?function(t,n,e){var r,i,o;return function(){var a=F(this,t),u=e(this);return null==u&&(this.style.removeProperty(t),u=F(this,t)),a===u?null:a===r&&u===i?o:o=n(r=a,i=u)}}(t,r,Un(this,"style."+t,n)):function(t,n,e){var r,i;return function(){var o=F(this,t);return o===e?null:o===r?i:i=n(r=o,e)}}(t,r,n+""),e)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return (r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e);}}return r._value=n,r}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n;}}(Un(this,"text",t)):function(t){return function(){this.textContent=t;}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this);}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Ln(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=Rn(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r;}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Rn(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},f=0,c=i.length;f<c;++f)if(i[f].name===n){i[f]=u;break}f===c&&i.push(u);}o.tween=i;}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){zn(this,t).delay=+n.apply(this,arguments);}}:function(t,n){return n=+n,function(){zn(this,t).delay=n;}})(n,t)):Ln(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){Rn(this,t).duration=+n.apply(this,arguments);}}:function(t,n){return n=+n,function(){Rn(this,t).duration=n;}})(n,t)):Ln(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){Rn(this,t).ease=n;}}(n,t)):Ln(this.node(),n).ease}};var Il=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),jl=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Hl=function t(n){function e(t){return ((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Xl=Math.PI,Gl=Xl/2,Vl=4/11,$l=6/11,Wl=8/11,Zl=.75,Ql=9/11,Jl=10/11,Kl=.9375,th=21/22,nh=63/64,eh=1/Vl/Vl,rh=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),ih=function t(n){function e(t){return --t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),oh=function t(n){function e(t){return ((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),ah=2*Math.PI,uh=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=ah);return r.amplitude=function(n){return t(n,e*ah)},r.period=function(e){return t(n,e)},r}(1,.3),fh=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=ah);return r.amplitude=function(n){return t(n,e*ah)},r.period=function(e){return t(n,e)},r}(1,.3),ch=function t(n,e){function r(t){return ((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=ah);return r.amplitude=function(n){return t(n,e*ah)},r.period=function(e){return t(n,e)},r}(1,.3),sh={time:null,delay:0,duration:250,ease:In};ft.prototype.interrupt=function(t){return this.each(function(){Dn(this,t);})},ft.prototype.transition=function(t){var n,e;t instanceof On?(n=t._id,t=t._name):(n=Bn(),(e=sh).time=wn(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],f=u.length,c=0;c<f;++c)(a=u[c])&&Pn(a,t,n,c,u,e||Vn(a,n));return new On(r,this._parents,t,n)};var lh=[null],hh={name:"drag"},dh={name:"space"},ph={name:"handle"},vh={name:"center"},gh={name:"x",handles:["e","w"].map(Qn),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},yh={name:"y",handles:["n","s"].map(Qn),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},_h={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(Qn),input:function(t){return t},output:function(t){return t}},bh={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},mh={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},xh={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},wh={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Mh={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1},Ah=Math.cos,Th=Math.sin,Nh=Math.PI,Sh=Nh/2,Eh=2*Nh,kh=Math.max,Ch=Array.prototype.slice,Ph=Math.PI,zh=2*Ph,Rh=zh-1e-6;ie.prototype=oe.prototype={constructor:ie,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n);},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z");},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n);},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r);},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o);},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,a=this._y1,u=e-t,f=r-n,c=o-t,s=a-n,l=c*c+s*s;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(s*u-f*c)>1e-6&&i){var h=e-o,d=r-a,p=u*u+f*f,v=h*h+d*d,g=Math.sqrt(p),y=Math.sqrt(l),_=i*Math.tan((Ph-Math.acos((p+l-v)/(2*g*y)))/2),b=_/y,m=_/g;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*c)+","+(n+b*s)),this._+="A"+i+","+i+",0,0,"+ +(s*h>c*d)+","+(this._x1=t+m*u)+","+(this._y1=n+m*f);}else this._+="L"+(this._x1=t)+","+(this._y1=n);},arc:function(t,n,e,r,i,o){t=+t,n=+n;var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),f=t+a,c=n+u,s=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+f+","+c:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-c)>1e-6)&&(this._+="L"+f+","+c),e&&(l<0&&(l=l%zh+zh),l>Rh?this._+="A"+e+","+e+",0,1,"+s+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+s+","+(this._x1=f)+","+(this._y1=c):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Ph)+","+s+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))));},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z";},toString:function(){return this._}};le.prototype=he.prototype={constructor:le,has:function(t){return "$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t];},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return !1;return !0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this);}};var Lh=he.prototype;ye.prototype=_e.prototype={constructor:ye,has:Lh.has,add:function(t){return t+="",this["$"+t]=t,this},remove:Lh.remove,clear:Lh.clear,values:Lh.keys,size:Lh.size,empty:Lh.empty,each:Lh.each};var Dh=Array.prototype.slice,Uh=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]],qh={},Oh={},Yh=34,Bh=10,Fh=13,Ih=ke(","),jh=Ih.parse,Hh=Ih.parseRows,Xh=Ih.format,Gh=Ih.formatRows,Vh=ke("\t"),$h=Vh.parse,Wh=Vh.parseRows,Zh=Vh.format,Qh=Vh.formatRows,Jh=Le(jh),Kh=Le($h),td=Ue("application/xml"),nd=Ue("text/html"),ed=Ue("image/svg+xml"),rd=je.prototype=He.prototype;rd.copy=function(){var t,n,e=new He(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=Xe(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=Xe(n));return e},rd.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return Ye(this.cover(n,e),n,e,t)},rd.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),f=1/0,c=1/0,s=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<f&&(f=r),r>s&&(s=r),i<c&&(c=i),i>l&&(l=i));for(s<f&&(f=this._x0,s=this._x1),l<c&&(c=this._y0,l=this._y1),this.cover(f,c).cover(s,l),e=0;e<o;++e)Ye(this,a[e],u[e],t[e]);return this},rd.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var a,u,f=i-e,c=this._root;switch(u=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do{a=new Array(4),a[u]=c,c=a;}while(f*=2,i=e+f,o=r+f,t>i||n>o);break;case 1:do{a=new Array(4),a[u]=c,c=a;}while(f*=2,e=i-f,o=r+f,e>t||n>o);break;case 2:do{a=new Array(4),a[u]=c,c=a;}while(f*=2,i=e+f,r=o-f,t>i||r>n);break;case 3:do{a=new Array(4),a[u]=c,c=a;}while(f*=2,e=i-f,r=o-f,e>t||r>n)}this._root&&this._root.length&&(this._root=c);}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},rd.data=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data);}while(n=n.next)}),t},rd.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},rd.find=function(t,n,e){var r,i,o,a,u,f,c,s=this._x0,l=this._y0,h=this._x1,d=this._y1,p=[],v=this._root;for(v&&p.push(new Be(v,s,l,h,d)),null==e?e=1/0:(s=t-e,l=n-e,h=t+e,d=n+e,e*=e);f=p.pop();)if(!(!(v=f.node)||(i=f.x0)>h||(o=f.y0)>d||(a=f.x1)<s||(u=f.y1)<l))if(v.length){var g=(i+a)/2,y=(o+u)/2;p.push(new Be(v[3],g,y,a,u),new Be(v[2],i,y,g,u),new Be(v[1],g,o,a,y),new Be(v[0],i,o,g,y)),(c=(n>=y)<<1|t>=g)&&(f=p[p.length-1],p[p.length-1]=p[p.length-1-c],p[p.length-1-c]=f);}else{var _=t-+this._x.call(null,v.data),b=n-+this._y.call(null,v.data),m=_*_+b*b;if(m<e){var x=Math.sqrt(e=m);s=t-x,l=n-x,h=t+x,d=n+x,r=v.data;}}return r},rd.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,f,c,s,l,h,d=this._root,p=this._x0,v=this._y0,g=this._x1,y=this._y1;if(!d)return this;if(d.length)for(;;){if((c=o>=(u=(p+g)/2))?p=u:g=u,(s=a>=(f=(v+y)/2))?v=f:y=f,n=d,!(d=d[l=s<<1|c]))return this;if(!d.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l);}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return (i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},rd.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},rd.root=function(){return this._root},rd.size=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t;}while(n=n.next)}),t},rd.visit=function(t){var n,e,r,i,o,a,u=[],f=this._root;for(f&&u.push(new Be(f,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(f=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&f.length){var c=(r+o)/2,s=(i+a)/2;(e=f[3])&&u.push(new Be(e,c,s,o,a)),(e=f[2])&&u.push(new Be(e,r,s,c,a)),(e=f[1])&&u.push(new Be(e,c,i,o,s)),(e=f[0])&&u.push(new Be(e,r,i,c,s));}return this},rd.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new Be(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,a=n.x0,u=n.y0,f=n.x1,c=n.y1,s=(a+f)/2,l=(u+c)/2;(o=i[0])&&e.push(new Be(o,a,u,s,l)),(o=i[1])&&e.push(new Be(o,s,u,f,l)),(o=i[2])&&e.push(new Be(o,a,l,s,c)),(o=i[3])&&e.push(new Be(o,s,l,f,c));}r.push(n);}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},rd.x=function(t){return arguments.length?(this._x=t,this):this._x},rd.y=function(t){return arguments.length?(this._y=t,this):this._y};var id=10,od=Math.PI*(3-Math.sqrt(5)),ad=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;tr.prototype=nr.prototype,nr.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var ud,fd,cd={"%":function(t,n){return (100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return er(100*t,n)},r:er,s:function(t,n){var e=Je(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(ud=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Je(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},sd=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];or({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),sr.prototype={constructor:sr,reset:function(){this.s=this.t=0;},add:function(t){lr(Id,t,this.t),lr(this,Id.s,this.s),this.s?this.t+=Id.t:this.s=Id.t;},valueOf:function(){return this.s}};var ld,hd,dd,pd,vd,gd,yd,_d,bd,md,xd,wd,Md,Ad,Td,Nd,Sd,Ed,kd,Cd,Pd,zd,Rd,Ld,Dd,Ud,qd,Od,Yd,Bd,Fd,Id=new sr,jd=1e-6,Hd=1e-12,Xd=Math.PI,Gd=Xd/2,Vd=Xd/4,$d=2*Xd,Wd=180/Xd,Zd=Xd/180,Qd=Math.abs,Jd=Math.atan,Kd=Math.atan2,tp=Math.cos,np=Math.ceil,ep=Math.exp,rp=Math.log,ip=Math.pow,op=Math.sin,ap=Math.sign||function(t){return t>0?1:t<0?-1:0},up=Math.sqrt,fp=Math.tan,cp={Feature:function(t,n){gr(t.geometry,n);},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)gr(e[r].geometry,n);}},sp={Sphere:function(t,n){n.sphere();},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2]);},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2]);},LineString:function(t,n){yr(t.coordinates,n,0);},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)yr(e[r],n,0);},Polygon:function(t,n){_r(t.coordinates,n);},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)_r(e[r],n);},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)gr(e[r],n);}},lp=cr(),hp=cr(),dp={point:vr,lineStart:vr,lineEnd:vr,polygonStart:function(){lp.reset(),dp.lineStart=mr,dp.lineEnd=xr;},polygonEnd:function(){var t=+lp;hp.add(t<0?$d+t:t),this.lineStart=this.lineEnd=this.point=vr;},sphere:function(){hp.add($d);}},pp=cr(),vp={point:Pr,lineStart:Rr,lineEnd:Lr,polygonStart:function(){vp.point=Dr,vp.lineStart=Ur,vp.lineEnd=qr,pp.reset(),dp.polygonStart();},polygonEnd:function(){dp.polygonEnd(),vp.point=Pr,vp.lineStart=Rr,vp.lineEnd=Lr,lp<0?(gd=-(_d=180),yd=-(bd=90)):pp>jd?bd=90:pp<-jd&&(yd=-90),Td[0]=gd,Td[1]=_d;}},gp={sphere:vr,point:Fr,lineStart:jr,lineEnd:Gr,polygonStart:function(){gp.lineStart=Vr,gp.lineEnd=$r;},polygonEnd:function(){gp.lineStart=jr,gp.lineEnd=Gr;}};Kr.invert=Kr;var yp,_p,bp,mp,xp,wp,Mp,Ap,Tp,Np,Sp,Ep=cr(),kp=di(function(){return !0},function(t){var n,e=NaN,r=NaN,i=NaN;return {lineStart:function(){t.lineStart(),n=1;},point:function(o,a){var u=o>0?Xd:-Xd,f=Qd(o-e);Qd(f-Xd)<jd?(t.point(e,r=(r+a)/2>0?Gd:-Gd),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&f>=Xd&&(Qd(e-i)<jd&&(e-=i*jd),Qd(o-u)<jd&&(o-=u*jd),r=function(t,n,e,r){var i,o,a=op(t-e);return Qd(a)>jd?Jd((op(n)*(o=tp(r))*op(e)-op(r)*(i=tp(n))*op(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u;},lineEnd:function(){t.lineEnd(),e=r=NaN;},clean:function(){return 2-n}}},function(t,n,e,r){var i;if(null==t)i=e*Gd,r.point(-Xd,i),r.point(0,i),r.point(Xd,i),r.point(Xd,0),r.point(Xd,-i),r.point(0,-i),r.point(-Xd,-i),r.point(-Xd,0),r.point(-Xd,i);else if(Qd(t[0]-n[0])>jd){var o=t[0]<n[0]?Xd:-Xd;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i);}else r.point(n[0],n[1]);},[-Xd,-Gd]),Cp=1e9,Pp=-Cp,zp=cr(),Rp={sphere:vr,point:vr,lineStart:function(){Rp.point=bi,Rp.lineEnd=_i;},lineEnd:vr,polygonStart:vr,polygonEnd:vr},Lp=[null,null],Dp={type:"LineString",coordinates:Lp},Up={Feature:function(t,n){return Mi(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(Mi(e[r].geometry,n))return !0;return !1}},qp={Sphere:function(){return !0},Point:function(t,n){return Ai(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Ai(e[r],n))return !0;return !1},LineString:function(t,n){return Ti(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Ti(e[r],n))return !0;return !1},Polygon:function(t,n){return Ni(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Ni(e[r],n))return !0;return !1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(Mi(e[r],n))return !0;return !1}},Op=cr(),Yp=cr(),Bp={point:vr,lineStart:vr,lineEnd:vr,polygonStart:function(){Bp.lineStart=Ri,Bp.lineEnd=Ui;},polygonEnd:function(){Bp.lineStart=Bp.lineEnd=Bp.point=vr,Op.add(Qd(Yp)),Yp.reset();},result:function(){var t=Op/2;return Op.reset(),t}},Fp=1/0,Ip=Fp,jp=-Fp,Hp=jp,Xp={point:function(t,n){t<Fp&&(Fp=t),t>jp&&(jp=t),n<Ip&&(Ip=n),n>Hp&&(Hp=n);},lineStart:vr,lineEnd:vr,polygonStart:vr,polygonEnd:vr,result:function(){var t=[[Fp,Ip],[jp,Hp]];return jp=Hp=-(Ip=Fp=1/0),t}},Gp=0,Vp=0,$p=0,Wp=0,Zp=0,Qp=0,Jp=0,Kp=0,tv=0,nv={point:qi,lineStart:Oi,lineEnd:Fi,polygonStart:function(){nv.lineStart=Ii,nv.lineEnd=ji;},polygonEnd:function(){nv.point=qi,nv.lineStart=Oi,nv.lineEnd=Fi;},result:function(){var t=tv?[Jp/tv,Kp/tv]:Qp?[Wp/Qp,Zp/Qp]:$p?[Gp/$p,Vp/$p]:[NaN,NaN];return Gp=Vp=$p=Wp=Zp=Qp=Jp=Kp=tv=0,t}};Gi.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0;},polygonEnd:function(){this._line=NaN;},lineStart:function(){this._point=0;},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN;},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,$d);}},result:vr};var ev,rv,iv,ov,av,uv=cr(),fv={point:vr,lineStart:function(){fv.point=Vi;},lineEnd:function(){ev&&$i(rv,iv),fv.point=vr;},polygonStart:function(){ev=!0;},polygonEnd:function(){ev=null;},result:function(){var t=+uv;return uv.reset(),t}};Wi.prototype={_radius:4.5,_circle:Zi(4.5),pointRadius:function(t){return (t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0;},polygonEnd:function(){this._line=NaN;},lineStart:function(){this._point=0;},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN;},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=Zi(this._radius)),this._string.push("M",t,",",n,this._circle);}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},Ji.prototype={constructor:Ji,point:function(t,n){this.stream.point(t,n);},sphere:function(){this.stream.sphere();},lineStart:function(){this.stream.lineStart();},lineEnd:function(){this.stream.lineEnd();},polygonStart:function(){this.stream.polygonStart();},polygonEnd:function(){this.stream.polygonEnd();}};var cv=16,sv=tp(30*Zd),lv=Qi({point:function(t,n){this.stream.point(t*Zd,n*Zd);}}),hv=ho(function(t){return up(2/(1+t))});hv.invert=po(function(t){return 2*dr(t/2)});var dv=ho(function(t){return (t=hr(t))&&t/op(t)});dv.invert=po(function(t){return t}),vo.invert=function(t,n){return [t,2*Jd(ep(n))-Gd]},bo.invert=bo,xo.invert=po(Jd),Mo.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,a=o*o;r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)));}while(Qd(e)>jd&&--i>0);return [t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},Ao.invert=po(dr),To.invert=po(function(t){return 2*Jd(t)}),No.invert=function(t,n){return [-n,2*Jd(ep(t))-Gd]},Do.prototype=Po.prototype={constructor:Do,count:function(){return this.eachAfter(Co)},each:function(t){var n,e,r,i,o=this,a=[o];do{for(n=a.reverse(),a=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r]);}while(a.length);return this},eachAfter:function(t){for(var n,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=a.pop();)t(i);return this},eachBefore:function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},sum:function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e;})},sort:function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t);})},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){var t=[];return this.each(function(n){t.push(n);}),t},leaves:function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n);}),t},links:function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e});}),n},copy:function(){return Po(this).eachBefore(Ro)}};var pv=Array.prototype.slice,vv="$",gv={depth:-1},yv={};ca.prototype=Object.create(Do.prototype);var _v=(1+Math.sqrt(5))/2,bv=function t(n){function e(t,e,r,i,o){la(n,t,e,r,i,o);}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(_v),mv=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,f,c,s,l=-1,h=a.length,d=t.value;++l<h;){for(f=(u=a[l]).children,c=u.value=0,s=f.length;c<s;++c)u.value+=f[c].value;u.dice?na(u,e,r,i,r+=(o-r)*u.value/d):sa(u,e,r,e+=(i-e)*u.value/d,o),d-=u.value;}else t._squarify=a=la(n,t,e,r,i,o),a.ratio=n;}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(_v),xv=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(va),wv=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o;}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(va),Mv=function t(n){function e(){var t=wv.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(va),Av=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(va),Tv=function t(n){function e(t){var e=Av.source(n)(t);return function(){return e()/t}}return e.source=t,e}(va),Nv=function t(n){function e(t){return function(){return -Math.log(1-n())/t}}return e.source=t,e}(va),Sv=Array.prototype,Ev=Sv.map,kv=Sv.slice,Cv={name:"implicit"},Pv=[0,1],zv=new Date,Rv=new Date,Lv=Ia(function(){},function(t,n){t.setTime(+t+n);},function(t,n){return n-t});Lv.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Ia(function(n){n.setTime(Math.floor(n/t)*t);},function(n,e){n.setTime(+n+e*t);},function(n,e){return (e-n)/t}):Lv:null};var Dv=Lv.range,Uv=6e4,qv=6048e5,Ov=Ia(function(t){t.setTime(1e3*Math.floor(t/1e3));},function(t,n){t.setTime(+t+1e3*n);},function(t,n){return (n-t)/1e3},function(t){return t.getUTCSeconds()}),Yv=Ov.range,Bv=Ia(function(t){t.setTime(Math.floor(t/Uv)*Uv);},function(t,n){t.setTime(+t+n*Uv);},function(t,n){return (n-t)/Uv},function(t){return t.getMinutes()}),Fv=Bv.range,Iv=Ia(function(t){var n=t.getTimezoneOffset()*Uv%36e5;n<0&&(n+=36e5),t.setTime(36e5*Math.floor((+t-n)/36e5)+n);},function(t,n){t.setTime(+t+36e5*n);},function(t,n){return (n-t)/36e5},function(t){return t.getHours()}),jv=Iv.range,Hv=Ia(function(t){t.setHours(0,0,0,0);},function(t,n){t.setDate(t.getDate()+n);},function(t,n){return (n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Uv)/864e5},function(t){return t.getDate()-1}),Xv=Hv.range,Gv=ja(0),Vv=ja(1),$v=ja(2),Wv=ja(3),Zv=ja(4),Qv=ja(5),Jv=ja(6),Kv=Gv.range,tg=Vv.range,ng=$v.range,eg=Wv.range,rg=Zv.range,ig=Qv.range,og=Jv.range,ag=Ia(function(t){t.setDate(1),t.setHours(0,0,0,0);},function(t,n){t.setMonth(t.getMonth()+n);},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),ug=ag.range,fg=Ia(function(t){t.setMonth(0,1),t.setHours(0,0,0,0);},function(t,n){t.setFullYear(t.getFullYear()+n);},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});fg.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Ia(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0);},function(n,e){n.setFullYear(n.getFullYear()+e*t);}):null};var cg=fg.range,sg=Ia(function(t){t.setUTCSeconds(0,0);},function(t,n){t.setTime(+t+n*Uv);},function(t,n){return (n-t)/Uv},function(t){return t.getUTCMinutes()}),lg=sg.range,hg=Ia(function(t){t.setUTCMinutes(0,0,0);},function(t,n){t.setTime(+t+36e5*n);},function(t,n){return (n-t)/36e5},function(t){return t.getUTCHours()}),dg=hg.range,pg=Ia(function(t){t.setUTCHours(0,0,0,0);},function(t,n){t.setUTCDate(t.getUTCDate()+n);},function(t,n){return (n-t)/864e5},function(t){return t.getUTCDate()-1}),vg=pg.range,gg=Ha(0),yg=Ha(1),_g=Ha(2),bg=Ha(3),mg=Ha(4),xg=Ha(5),wg=Ha(6),Mg=gg.range,Ag=yg.range,Tg=_g.range,Ng=bg.range,Sg=mg.range,Eg=xg.range,kg=wg.range,Cg=Ia(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0);},function(t,n){t.setUTCMonth(t.getUTCMonth()+n);},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),Pg=Cg.range,zg=Ia(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n);},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});zg.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Ia(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t);}):null};var Rg,Lg=zg.range,Dg={"-":"",_:" ",0:"0"},Ug=/^\s*\d+/,qg=/^%/,Og=/[\\^$*+?|[\]().{}]/g;nf({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Yg="%Y-%m-%dT%H:%M:%S.%LZ",Bg=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat(Yg),Fg=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:t.utcParse(Yg),Ig=1e3,jg=60*Ig,Hg=60*jg,Xg=24*Hg,Gg=7*Xg,Vg=30*Xg,$g=365*Xg,Wg=uf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Zg=uf("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),Qg=uf("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),Jg=uf("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),Kg=uf("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),ty=uf("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),ny=uf("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),ey=uf("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),ry=uf("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),iy=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(uf),oy=ff(iy),ay=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(uf),uy=ff(ay),fy=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(uf),cy=ff(fy),sy=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(uf),ly=ff(sy),hy=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(uf),dy=ff(hy),py=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(uf),vy=ff(py),gy=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(uf),yy=ff(gy),_y=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(uf),by=ff(_y),my=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(uf),xy=ff(my),wy=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(uf),My=ff(wy),Ay=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(uf),Ty=ff(Ay),Ny=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(uf),Sy=ff(Ny),Ey=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(uf),ky=ff(Ey),Cy=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(uf),Py=ff(Cy),zy=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(uf),Ry=ff(zy),Ly=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(uf),Dy=ff(Ly),Uy=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(uf),qy=ff(Uy),Oy=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(uf),Yy=ff(Oy),By=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(uf),Fy=ff(By),Iy=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(uf),jy=ff(Iy),Hy=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(uf),Xy=ff(Hy),Gy=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(uf),Vy=ff(Gy),$y=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(uf),Wy=ff($y),Zy=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(uf),Qy=ff(Zy),Jy=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(uf),Ky=ff(Jy),t_=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(uf),n_=ff(t_),e_=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(uf),r_=ff(e_),i_=ml(Zt(300,.5,0),Zt(-240,.5,1)),o_=ml(Zt(-100,.75,.35),Zt(80,1.5,.8)),a_=ml(Zt(260,.75,.35),Zt(80,1.5,.8)),u_=Zt(),f_=Rt(),c_=Math.PI/3,s_=2*Math.PI/3,l_=cf(uf("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),h_=cf(uf("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),d_=cf(uf("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),p_=cf(uf("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),v_=Math.abs,g_=Math.atan2,y_=Math.cos,__=Math.max,b_=Math.min,m_=Math.sin,x_=Math.sqrt,w_=1e-12,M_=Math.PI,A_=M_/2,T_=2*M_;_f.prototype={areaStart:function(){this._line=0;},areaEnd:function(){this._line=NaN;},lineStart:function(){this._point=0;},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n);}}};var N_=Sf(bf);Nf.prototype={areaStart:function(){this._curve.areaStart();},areaEnd:function(){this._curve.areaEnd();},lineStart:function(){this._curve.lineStart();},lineEnd:function(){this._curve.lineEnd();},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t));}};var S_=Array.prototype.slice,E_={draw:function(t,n){var e=Math.sqrt(n/M_);t.moveTo(e,0),t.arc(0,0,e,0,T_);}},k_={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath();}},C_=Math.sqrt(1/3),P_=2*C_,z_={draw:function(t,n){var e=Math.sqrt(n/P_),r=e*C_;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath();}},R_=Math.sin(M_/10)/Math.sin(7*M_/10),L_=Math.sin(T_/10)*R_,D_=-Math.cos(T_/10)*R_,U_={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=L_*e,i=D_*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var a=T_*o/5,u=Math.cos(a),f=Math.sin(a);t.lineTo(f*e,-u*e),t.lineTo(u*r-f*i,f*r+u*i);}t.closePath();}},q_={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e);}},O_=Math.sqrt(3),Y_={draw:function(t,n){var e=-Math.sqrt(n/(3*O_));t.moveTo(0,2*e),t.lineTo(-O_*e,-e),t.lineTo(O_*e,-e),t.closePath();}},B_=Math.sqrt(3)/2,F_=1/Math.sqrt(12),I_=3*(F_/2+1),j_={draw:function(t,n){var e=Math.sqrt(n/I_),r=e/2,i=e*F_,o=r,a=e*F_+e,u=-o,f=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,f),t.lineTo(-.5*r-B_*i,B_*r+-.5*i),t.lineTo(-.5*o-B_*a,B_*o+-.5*a),t.lineTo(-.5*u-B_*f,B_*u+-.5*f),t.lineTo(-.5*r+B_*i,-.5*i-B_*r),t.lineTo(-.5*o+B_*a,-.5*a-B_*o),t.lineTo(-.5*u+B_*f,-.5*f-B_*u),t.closePath();}},H_=[E_,k_,z_,q_,U_,Y_,j_];Bf.prototype={areaStart:function(){this._line=0;},areaEnd:function(){this._line=NaN;},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0;},lineEnd:function(){switch(this._point){case 3:Yf(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Yf(this,t,n);}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n;}},Ff.prototype={areaStart:Of,areaEnd:Of,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0;},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Yf(this,t,n);}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n;}},If.prototype={areaStart:function(){this._line=0;},areaEnd:function(){this._line=NaN;},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0;},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:Yf(this,t,n);}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n;}},jf.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart();},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,f=-1;++f<=e;)r=f/e,this._basis.point(this._beta*t[f]+(1-this._beta)*(i+r*a),this._beta*n[f]+(1-this._beta)*(o+r*u));this._x=this._y=null,this._basis.lineEnd();},point:function(t,n){this._x.push(+t),this._y.push(+n);}};var X_=function t(n){function e(t){return 1===n?new Bf(t):new jf(t,n)}return e.beta=function(n){return t(+n)},e}(.85);Xf.prototype={areaStart:function(){this._line=0;},areaEnd:function(){this._line=NaN;},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0;},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Hf(this,this._x1,this._y1);}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:Hf(this,t,n);}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}};var G_=function t(n){function e(t){return new Xf(t,n)}return e.tension=function(n){return t(+n)},e}(0);Gf.prototype={areaStart:Of,areaEnd:Of,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0;},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Hf(this,t,n);}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}};var V_=function t(n){function e(t){return new Gf(t,n)}return e.tension=function(n){return t(+n)},e}(0);Vf.prototype={areaStart:function(){this._line=0;},areaEnd:function(){this._line=NaN;},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0;},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Hf(this,t,n);}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}};var $_=function t(n){function e(t){return new Vf(t,n)}return e.tension=function(n){return t(+n)},e}(0);Wf.prototype={areaStart:function(){this._line=0;},areaEnd:function(){this._line=NaN;},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0;},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha));}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:$f(this,t,n);}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}};var W_=function t(n){function e(t){return n?new Wf(t,n):new Xf(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Zf.prototype={areaStart:Of,areaEnd:Of,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0;},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha));}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:$f(this,t,n);}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}};var Z_=function t(n){function e(t){return n?new Zf(t,n):new Gf(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Qf.prototype={areaStart:function(){this._line=0;},areaEnd:function(){this._line=NaN;},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0;},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha));}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:$f(this,t,n);}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}};var Q_=function t(n){function e(t){return n?new Qf(t,n):new Vf(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Jf.prototype={areaStart:Of,areaEnd:Of,lineStart:function(){this._point=0;},lineEnd:function(){this._point&&this._context.closePath();},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n));}},rc.prototype={areaStart:function(){this._line=0;},areaEnd:function(){this._line=NaN;},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0;},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:ec(this,this._t0,nc(this,this._t0));}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,ec(this,nc(this,e=tc(this,t,n)),e);break;default:ec(this,this._t0,e=tc(this,t,n));}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e;}}},(ic.prototype=Object.create(rc.prototype)).point=function(t,n){rc.prototype.point.call(this,n,t);},oc.prototype={moveTo:function(t,n){this._context.moveTo(n,t);},closePath:function(){this._context.closePath();},lineTo:function(t,n){this._context.lineTo(n,t);},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i);}},ac.prototype={areaStart:function(){this._line=0;},areaEnd:function(){this._line=NaN;},lineStart:function(){this._x=[],this._y=[];},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=uc(t),i=uc(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null;},point:function(t,n){this._x.push(+t),this._y.push(+n);}},fc.prototype={areaStart:function(){this._line=0;},areaEnd:function(){this._line=NaN;},lineStart:function(){this._x=this._y=NaN,this._point=0;},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line);},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n);}}this._x=t,this._y=n;}},yc.prototype={constructor:yc,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n;}else t.R=n;e=t;}else this._?(t=xc(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(bc(this,e),e=(t=e).U),e.C=!1,r.C=!0,mc(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(mc(this,e),e=(t=e).U),e.C=!1,r.C=!0,bc(this,r)),e=t.U;this._.C=!1;},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,a=t.R;if(e=o?a?xc(a):o:a,i?i.L===t?i.L=e:i.R=e:this._=e,o&&a?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==a?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=a,a.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,bc(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,mc(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,bc(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,mc(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,bc(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,mc(this,i),t=this._;break}n.C=!0,t=i,i=i.U;}while(!t.C);t&&(t.C=!1);}}};var J_,K_,tb,nb,eb,rb=[],ib=[],ob=1e-6,ab=1e-12;Yc.prototype={constructor:Yc,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return Ec(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,a,u=e.site,f=-1,c=n[i[o-1]],s=c.left===u?c.right:c.left;++f<o;)a=s,s=(c=n[i[f]]).left===u?c.right:c.left,a&&s&&r<a.index&&r<s.index&&qc(u,a,s)<0&&t.push([u.data,a.data,s.data]);}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return {source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null;var f=t-i.site[0],c=n-i.site[1],s=f*f+c*c;do{i=o.cells[r=a],a=null,i.halfedges.forEach(function(e){var r=o.edges[e],u=r.left;if(u!==i.site&&u||(u=r.right)){var f=t-u[0],c=n-u[1],l=f*f+c*c;l<s&&(s=l,a=u.index);}});}while(null!==a);return o._found=r,null==e||s<=e*e?i.site:null}},Fc.prototype={constructor:Fc,scale:function(t){return 1===t?this:new Fc(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Fc(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return [t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return [(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return (t-this.x)/this.k},invertY:function(t){return (t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return "translate("+this.x+","+this.y+") scale("+this.k+")"}};var ub=new Fc(1,0,0);Ic.prototype=Fc.prototype,t.version="5.4.0",t.bisect=Jc,t.bisectRight=Jc,t.bisectLeft=Kc,t.ascending=n,t.bisector=e,t.cross=function(t,n,e){var i,o,a,u,f=t.length,c=n.length,s=new Array(f*c);for(null==e&&(e=r),i=a=0;i<f;++i)for(u=t[i],o=0;o<c;++o,++a)s[a]=e(u,n[o]);return s},t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=a,t.extent=u,t.histogram=function(){function t(t){var i,o,a=t.length,u=new Array(a);for(i=0;i<a;++i)u[i]=n(t[i],i,t);var f=e(u),c=f[0],l=f[1],h=r(u,c,l);Array.isArray(h)||(h=d(c,l,h),h=s(Math.ceil(c/h)*h,Math.floor(l/h)*h,h));for(var p=h.length;h[0]<=c;)h.shift(),--p;for(;h[p-1]>l;)h.pop(),--p;var v,g=new Array(p+1);for(i=0;i<=p;++i)(v=g[i]=[]).x0=i>0?h[i-1]:c,v.x1=i<p?h[i]:l;for(i=0;i<a;++i)c<=(o=u[i])&&o<=l&&g[Jc(h,o,0,p)].push(t[i]);return g}var n=c,e=u,r=p;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:f(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:f([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:Array.isArray(n)?f(ns.call(n)):f(n),t):r},t},t.thresholdFreedmanDiaconis=function(t,e,r){return t=es.call(t,i).sort(n),Math.ceil((r-e)/(2*(v(t,.75)-v(t,.25))*Math.pow(t.length,-1/3)))},t.thresholdScott=function(t,n,e){return Math.ceil((e-n)/(3.5*a(t)*Math.pow(t.length,-1/3)))},t.thresholdSturges=p,t.max=g,t.mean=function(t,n){var e,r=t.length,o=r,a=-1,u=0;if(null==n)for(;++a<r;)isNaN(e=i(t[a]))?--o:u+=e;else for(;++a<r;)isNaN(e=i(n(t[a],a,t)))?--o:u+=e;if(o)return u/o},t.median=function(t,e){var r,o=t.length,a=-1,u=[];if(null==e)for(;++a<o;)isNaN(r=i(t[a]))||u.push(r);else for(;++a<o;)isNaN(r=i(e(t[a],a,t)))||u.push(r);return v(u.sort(n),.5)},t.merge=y,t.min=_,t.pairs=function(t,n){null==n&&(n=r);for(var e=0,i=t.length-1,o=t[0],a=new Array(i<0?0:i);e<i;)a[e]=n(o,o=t[++e]);return a},t.permute=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},t.quantile=v,t.range=s,t.scan=function(t,e){if(r=t.length){var r,i,o=0,a=0,u=t[a];for(null==e&&(e=n);++o<r;)(e(i=t[o],u)<0||0!==e(u,u))&&(u=i,a=o);return 0===e(u,u)?a:void 0}},t.shuffle=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},t.sum=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},t.ticks=l,t.tickIncrement=h,t.tickStep=d,t.transpose=b,t.variance=o,t.zip=function(){return b(arguments)},t.axisTop=function(t){return T(us,t)},t.axisRight=function(t){return T(fs,t)},t.axisBottom=function(t){return T(cs,t)},t.axisLeft=function(t){return T(ss,t)},t.brush=function(){return ee(_h)},t.brushX=function(){return ee(gh)},t.brushY=function(){return ee(yh)},t.brushSelection=function(t){var n=t.__brush;return n?n.dim.output(n.selection):null},t.chord=function(){function t(t){var o,a,u,f,c,l,h=t.length,d=[],p=s(h),v=[],g=[],y=g.groups=new Array(h),_=new Array(h*h);for(o=0,c=-1;++c<h;){for(a=0,l=-1;++l<h;)a+=t[c][l];d.push(a),v.push(s(h)),o+=a;}for(e&&p.sort(function(t,n){return e(d[t],d[n])}),r&&v.forEach(function(n,e){n.sort(function(n,i){return r(t[e][n],t[e][i])});}),f=(o=kh(0,Eh-n*h)/o)?n:Eh/h,a=0,c=-1;++c<h;){for(u=a,l=-1;++l<h;){var b=p[c],m=v[b][l],x=t[b][m],w=a,M=a+=x*o;_[m*h+b]={index:b,subindex:m,startAngle:w,endAngle:M,value:x};}y[b]={index:b,startAngle:u,endAngle:a,value:d[b]},a+=f;}for(c=-1;++c<h;)for(l=c-1;++l<h;){var A=_[l*h+c],T=_[c*h+l];(A.value||T.value)&&g.push(A.value<T.value?{source:T,target:A}:{source:A,target:T});}return i?g.sort(i):g}var n=0,e=null,r=null,i=null;return t.padAngle=function(e){return arguments.length?(n=kh(0,e),t):n},t.sortGroups=function(n){return arguments.length?(e=n,t):e},t.sortSubgroups=function(n){return arguments.length?(r=n,t):r},t.sortChords=function(n){return arguments.length?(null==n?i=null:(i=function(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}(n))._=n,t):i&&i._},t},t.ribbon=function(){function t(){var t,u=Ch.call(arguments),f=n.apply(this,u),c=e.apply(this,u),s=+r.apply(this,(u[0]=f,u)),l=i.apply(this,u)-Sh,h=o.apply(this,u)-Sh,d=s*Ah(l),p=s*Th(l),v=+r.apply(this,(u[0]=c,u)),g=i.apply(this,u)-Sh,y=o.apply(this,u)-Sh;if(a||(a=t=oe()),a.moveTo(d,p),a.arc(0,0,s,l,h),l===g&&h===y||(a.quadraticCurveTo(0,0,v*Ah(g),v*Th(g)),a.arc(0,0,v,g,y)),a.quadraticCurveTo(0,0,d,p),a.closePath(),t)return a=null,t+""||null}var n=ae,e=ue,r=fe,i=ce,o=se,a=null;return t.radius=function(n){return arguments.length?(r="function"==typeof n?n:re(+n),t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:re(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:re(+n),t):o},t.source=function(e){return arguments.length?(n=e,t):n},t.target=function(n){return arguments.length?(e=n,t):e},t.context=function(n){return arguments.length?(a=null==n?null:n,t):a},t},t.nest=function(){function t(n,i,a,u){if(i>=o.length)return null!=e&&n.sort(e),null!=r?r(n):n;for(var f,c,s,l=-1,h=n.length,d=o[i++],p=he(),v=a();++l<h;)(s=p.get(f=d(c=n[l])+""))?s.push(c):p.set(f,[c]);return p.each(function(n,e){u(v,e,t(n,i,a,u));}),v}function n(t,e){if(++e>o.length)return t;var i,u=a[e-1];return null!=r&&e>=o.length?i=t.entries():(i=[],t.each(function(t,r){i.push({key:r,values:n(t,e)});})),null!=u?i.sort(function(t,n){return u(t.key,n.key)}):i}var e,r,i,o=[],a=[];return i={object:function(n){return t(n,0,de,pe)},map:function(n){return t(n,0,ve,ge)},entries:function(e){return n(t(e,0,ve,ge),0)},key:function(t){return o.push(t),i},sortKeys:function(t){return a[o.length-1]=t,i},sortValues:function(t){return e=t,i},rollup:function(t){return r=t,i}}},t.set=_e,t.map=he,t.keys=function(t){var n=[];for(var e in t)n.push(e);return n},t.values=function(t){var n=[];for(var e in t)n.push(t[e]);return n},t.entries=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},t.color=kt,t.rgb=Rt,t.hsl=qt,t.lab=Ft,t.hcl=$t,t.lch=function(t,n,e,r){return 1===arguments.length?Vt(t):new Wt(e,n,t,null==r?1:r)},t.gray=function(t,n){return new It(t,0,0,null==n?1:n)},t.cubehelix=Zt,t.contours=Me,t.contourDensity=function(){function t(t){var e=new Float32Array(v*y),r=new Float32Array(v*y);t.forEach(function(t,n,r){var i=a(t,n,r)+p>>h,o=u(t,n,r)+p>>h;i>=0&&i<v&&o>=0&&o<y&&++e[i+o*v];}),Ae({width:v,height:y,data:e},{width:v,height:y,data:r},l>>h),Te({width:v,height:y,data:r},{width:v,height:y,data:e},l>>h),Ae({width:v,height:y,data:e},{width:v,height:y,data:r},l>>h),Te({width:v,height:y,data:r},{width:v,height:y,data:e},l>>h),Ae({width:v,height:y,data:e},{width:v,height:y,data:r},l>>h),Te({width:v,height:y,data:r},{width:v,height:y,data:e},l>>h);var i=_(e);if(!Array.isArray(i)){var o=g(e);i=d(0,o,i),(i=s(0,Math.floor(o/i)*i,i)).shift();}return Me().thresholds(i).size([v,y])(e).map(n)}function n(t){return t.value*=Math.pow(2,-2*h),t.coordinates.forEach(e),t}function e(t){t.forEach(r);}function r(t){t.forEach(i);}function i(t){t[0]=t[0]*Math.pow(2,h)-p,t[1]=t[1]*Math.pow(2,h)-p;}function o(){return p=3*l,v=f+2*p>>h,y=c+2*p>>h,t}var a=Ne,u=Se,f=960,c=500,l=20,h=2,p=3*l,v=f+2*p>>h,y=c+2*p>>h,_=me(20);return t.x=function(n){return arguments.length?(a="function"==typeof n?n:me(+n),t):a},t.y=function(n){return arguments.length?(u="function"==typeof n?n:me(+n),t):u},t.size=function(t){if(!arguments.length)return [f,c];var n=Math.ceil(t[0]),e=Math.ceil(t[1]);if(!(n>=0||n>=0))throw new Error("invalid size");return f=n,c=e,o()},t.cellSize=function(t){if(!arguments.length)return 1<<h;if(!((t=+t)>=1))throw new Error("invalid cell size");return h=Math.floor(Math.log(t)/Math.LN2),o()},t.thresholds=function(n){return arguments.length?(_="function"==typeof n?n:Array.isArray(n)?me(Dh.call(n)):me(n),t):_},t.bandwidth=function(t){if(!arguments.length)return Math.sqrt(l*(l+1));if(!((t=+t)>=0))throw new Error("invalid bandwidth");return l=Math.round((Math.sqrt(4*t*t+1)-1)/2),o()},t},t.dispatch=N,t.drag=function(){function n(t){t.on("mousedown.drag",e).filter(g).on("touchstart.drag",o).on("touchmove.drag",a).on("touchend.drag touchcancel.drag",u).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)");}function e(){if(!h&&d.apply(this,arguments)){var n=f("mouse",p.apply(this,arguments),pt,this,arguments);n&&(ct(t.event.view).on("mousemove.drag",r,!0).on("mouseup.drag",i,!0),_t(t.event.view),gt(),l=!1,c=t.event.clientX,s=t.event.clientY,n("start"));}}function r(){if(yt(),!l){var n=t.event.clientX-c,e=t.event.clientY-s;l=n*n+e*e>m;}y.mouse("drag");}function i(){ct(t.event.view).on("mousemove.drag mouseup.drag",null),bt(t.event.view,l),yt(),y.mouse("end");}function o(){if(d.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=p.apply(this,arguments),o=r.length;for(n=0;n<o;++n)(e=f(r[n].identifier,i,vt,this,arguments))&&(gt(),e("start"));}}function a(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=y[r[n].identifier])&&(yt(),e("drag"));}function u(){var n,e,r=t.event.changedTouches,i=r.length;for(h&&clearTimeout(h),h=setTimeout(function(){h=null;},500),n=0;n<i;++n)(e=y[r[n].identifier])&&(gt(),e("end"));}function f(e,r,i,o,a){var u,f,c,s=i(r,e),l=_.copy();if(ot(new xt(n,"beforestart",u,e,b,s[0],s[1],0,0,l),function(){return null!=(t.event.subject=u=v.apply(o,a))&&(f=u.x-s[0]||0,c=u.y-s[1]||0,!0)}))return function t(h){var d,p=s;switch(h){case"start":y[e]=t,d=b++;break;case"end":delete y[e],--b;case"drag":s=i(r,e),d=b;}ot(new xt(n,h,u,e,d,s[0]+f,s[1]+c,s[0]-p[0],s[1]-p[1],l),l.apply,l,[h,o,a]);}}var c,s,l,h,d=wt,p=Mt,v=At,g=Tt,y={},_=N("start","drag","end"),b=0,m=0;return n.filter=function(t){return arguments.length?(d="function"==typeof t?t:mt(!!t),n):d},n.container=function(t){return arguments.length?(p="function"==typeof t?t:mt(t),n):p},n.subject=function(t){return arguments.length?(v="function"==typeof t?t:mt(t),n):v},n.touchable=function(t){return arguments.length?(g="function"==typeof t?t:mt(!!t),n):g},n.on=function(){var t=_.on.apply(_,arguments);return t===_?n:t},n.clickDistance=function(t){return arguments.length?(m=(t=+t)*t,n):Math.sqrt(m)},n},t.dragDisable=_t,t.dragEnable=bt,t.dsvFormat=ke,t.csvParse=jh,t.csvParseRows=Hh,t.csvFormat=Xh,t.csvFormatRows=Gh,t.tsvParse=$h,t.tsvParseRows=Wh,t.tsvFormat=Zh,t.tsvFormatRows=Qh,t.easeLinear=function(t){return +t},t.easeQuad=Fn,t.easeQuadIn=function(t){return t*t},t.easeQuadOut=function(t){return t*(2-t)},t.easeQuadInOut=Fn,t.easeCubic=In,t.easeCubicIn=function(t){return t*t*t},t.easeCubicOut=function(t){return --t*t*t+1},t.easeCubicInOut=In,t.easePoly=Hl,t.easePolyIn=Il,t.easePolyOut=jl,t.easePolyInOut=Hl,t.easeSin=jn,t.easeSinIn=function(t){return 1-Math.cos(t*Gl)},t.easeSinOut=function(t){return Math.sin(t*Gl)},t.easeSinInOut=jn,t.easeExp=Hn,t.easeExpIn=function(t){return Math.pow(2,10*t-10)},t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)},t.easeExpInOut=Hn,t.easeCircle=Xn,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCircleInOut=Xn,t.easeBounce=Gn,t.easeBounceIn=function(t){return 1-Gn(1-t)},t.easeBounceOut=Gn,t.easeBounceInOut=function(t){return ((t*=2)<=1?1-Gn(1-t):Gn(t-1)+1)/2},t.easeBack=oh,t.easeBackIn=rh,t.easeBackOut=ih,t.easeBackInOut=oh,t.easeElastic=fh,t.easeElasticIn=uh,t.easeElasticOut=fh,t.easeElasticInOut=ch,t.blob=function(t,n){return fetch(t,n).then(Ce)},t.buffer=function(t,n){return fetch(t,n).then(Pe)},t.dsv=function(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0);var i=ke(t);return Re(n,e).then(function(t){return i.parse(t,r)})},t.csv=Jh,t.tsv=Kh,t.image=function(t,n){return new Promise(function(e,r){var i=new Image;for(var o in n)i[o]=n[o];i.onerror=r,i.onload=function(){e(i);},i.src=t;})},t.json=function(t,n){return fetch(t,n).then(De)},t.text=Re,t.xml=td,t.html=nd,t.svg=ed,t.forceCenter=function(t,n){function e(){var e,i,o=r.length,a=0,u=0;for(e=0;e<o;++e)a+=(i=r[e]).x,u+=i.y;for(a=a/o-t,u=u/o-n,e=0;e<o;++e)(i=r[e]).x-=a,i.y-=u;}var r;return null==t&&(t=0),null==n&&(n=0),e.initialize=function(t){r=t;},e.x=function(n){return arguments.length?(t=+n,e):t},e.y=function(t){return arguments.length?(n=+t,e):n},e},t.forceCollide=function(t){function n(){for(var t,n,r,f,c,s,l,h=i.length,d=0;d<u;++d)for(n=je(i,Ge,Ve).visitAfter(e),t=0;t<h;++t)r=i[t],s=o[r.index],l=s*s,f=r.x+r.vx,c=r.y+r.vy,n.visit(function(t,n,e,i,o){var u=t.data,h=t.r,d=s+h;if(!u)return n>f+d||i<f-d||e>c+d||o<c-d;if(u.index>r.index){var p=f-u.x-u.vx,v=c-u.y-u.vy,g=p*p+v*v;g<d*d&&(0===p&&(p=Oe(),g+=p*p),0===v&&(v=Oe(),g+=v*v),g=(d-(g=Math.sqrt(g)))/g*a,r.vx+=(p*=g)*(d=(h*=h)/(l+h)),r.vy+=(v*=g)*d,u.vx-=p*(d=1-d),u.vy-=v*d);}});}function e(t){if(t.data)return t.r=o[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r);}function r(){if(i){var n,e,r=i.length;for(o=new Array(r),n=0;n<r;++n)e=i[n],o[e.index]=+t(e,n,i);}}var i,o,a=1,u=1;return "function"!=typeof t&&(t=qe(null==t?1:+t)),n.initialize=function(t){i=t,r();},n.iterations=function(t){return arguments.length?(u=+t,n):u},n.strength=function(t){return arguments.length?(a=+t,n):a},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:qe(+e),r(),n):t},n},t.forceLink=function(t){function n(n){for(var e=0,r=t.length;e<d;++e)for(var i,u,f,s,l,h,p,v=0;v<r;++v)u=(i=t[v]).source,s=(f=i.target).x+f.vx-u.x-u.vx||Oe(),l=f.y+f.vy-u.y-u.vy||Oe(),s*=h=((h=Math.sqrt(s*s+l*l))-a[v])/h*n*o[v],l*=h,f.vx-=s*(p=c[v]),f.vy-=l*p,u.vx+=s*(p=1-p),u.vy+=l*p;}function e(){if(u){var n,e,l=u.length,h=t.length,d=he(u,s);for(n=0,f=new Array(l);n<h;++n)(e=t[n]).index=n,"object"!=typeof e.source&&(e.source=We(d,e.source)),"object"!=typeof e.target&&(e.target=We(d,e.target)),f[e.source.index]=(f[e.source.index]||0)+1,f[e.target.index]=(f[e.target.index]||0)+1;for(n=0,c=new Array(h);n<h;++n)e=t[n],c[n]=f[e.source.index]/(f[e.source.index]+f[e.target.index]);o=new Array(h),r(),a=new Array(h),i();}}function r(){if(u)for(var n=0,e=t.length;n<e;++n)o[n]=+l(t[n],n,t);}function i(){if(u)for(var n=0,e=t.length;n<e;++n)a[n]=+h(t[n],n,t);}var o,a,u,f,c,s=$e,l=function(t){return 1/Math.min(f[t.source.index],f[t.target.index])},h=qe(30),d=1;return null==t&&(t=[]),n.initialize=function(t){u=t,e();},n.links=function(r){return arguments.length?(t=r,e(),n):t},n.id=function(t){return arguments.length?(s=t,n):s},n.iterations=function(t){return arguments.length?(d=+t,n):d},n.strength=function(t){return arguments.length?(l="function"==typeof t?t:qe(+t),r(),n):l},n.distance=function(t){return arguments.length?(h="function"==typeof t?t:qe(+t),i(),n):h},n},t.forceManyBody=function(){function t(t){var n,u=i.length,f=je(i,Ze,Qe).visitAfter(e);for(a=t,n=0;n<u;++n)o=i[n],f.visit(r);}function n(){if(i){var t,n,e=i.length;for(u=new Array(e),t=0;t<e;++t)n=i[t],u[n.index]=+f(n,t,i);}}function e(t){var n,e,r,i,o,a=0,f=0;if(t.length){for(r=i=o=0;o<4;++o)(n=t[o])&&(e=Math.abs(n.value))&&(a+=n.value,f+=e,r+=e*n.x,i+=e*n.y);t.x=r/f,t.y=i/f;}else{(n=t).x=n.data.x,n.y=n.data.y;do{a+=u[n.data.index];}while(n=n.next)}t.value=a;}function r(t,n,e,r){if(!t.value)return !0;var i=t.x-o.x,f=t.y-o.y,h=r-n,d=i*i+f*f;if(h*h/l<d)return d<s&&(0===i&&(i=Oe(),d+=i*i),0===f&&(f=Oe(),d+=f*f),d<c&&(d=Math.sqrt(c*d)),o.vx+=i*t.value*a/d,o.vy+=f*t.value*a/d),!0;if(!(t.length||d>=s)){(t.data!==o||t.next)&&(0===i&&(i=Oe(),d+=i*i),0===f&&(f=Oe(),d+=f*f),d<c&&(d=Math.sqrt(c*d)));do{t.data!==o&&(h=u[t.data.index]*a/d,o.vx+=i*h,o.vy+=f*h);}while(t=t.next)}}var i,o,a,u,f=qe(-30),c=1,s=1/0,l=.81;return t.initialize=function(t){i=t,n();},t.strength=function(e){return arguments.length?(f="function"==typeof e?e:qe(+e),n(),t):f},t.distanceMin=function(n){return arguments.length?(c=n*n,t):Math.sqrt(c)},t.distanceMax=function(n){return arguments.length?(s=n*n,t):Math.sqrt(s)},t.theta=function(n){return arguments.length?(l=n*n,t):Math.sqrt(l)},t},t.forceRadial=function(t,n,e){function r(t){for(var r=0,i=o.length;r<i;++r){var f=o[r],c=f.x-n||1e-6,s=f.y-e||1e-6,l=Math.sqrt(c*c+s*s),h=(u[r]-l)*a[r]*t/l;f.vx+=c*h,f.vy+=s*h;}}function i(){if(o){var n,e=o.length;for(a=new Array(e),u=new Array(e),n=0;n<e;++n)u[n]=+t(o[n],n,o),a[n]=isNaN(u[n])?0:+f(o[n],n,o);}}var o,a,u,f=qe(.1);return "function"!=typeof t&&(t=qe(+t)),null==n&&(n=0),null==e&&(e=0),r.initialize=function(t){o=t,i();},r.strength=function(t){return arguments.length?(f="function"==typeof t?t:qe(+t),i(),r):f},r.radius=function(n){return arguments.length?(t="function"==typeof n?n:qe(+n),i(),r):t},r.x=function(t){return arguments.length?(n=+t,r):n},r.y=function(t){return arguments.length?(e=+t,r):e},r},t.forceSimulation=function(t){function n(){e(),d.call("tick",o),a<u&&(h.stop(),d.call("end",o));}function e(){var n,e,r=t.length;for(a+=(c-a)*f,l.each(function(t){t(a);}),n=0;n<r;++n)null==(e=t[n]).fx?e.x+=e.vx*=s:(e.x=e.fx,e.vx=0),null==e.fy?e.y+=e.vy*=s:(e.y=e.fy,e.vy=0);}function r(){for(var n,e=0,r=t.length;e<r;++e){if(n=t[e],n.index=e,isNaN(n.x)||isNaN(n.y)){var i=id*Math.sqrt(e),o=e*od;n.x=i*Math.cos(o),n.y=i*Math.sin(o);}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0);}}function i(n){return n.initialize&&n.initialize(t),n}var o,a=1,u=.001,f=1-Math.pow(u,1/300),c=0,s=.6,l=he(),h=Tn(n),d=N("tick","end");return null==t&&(t=[]),r(),o={tick:e,restart:function(){return h.restart(n),o},stop:function(){return h.stop(),o},nodes:function(n){return arguments.length?(t=n,r(),l.each(i),o):t},alpha:function(t){return arguments.length?(a=+t,o):a},alphaMin:function(t){return arguments.length?(u=+t,o):u},alphaDecay:function(t){return arguments.length?(f=+t,o):+f},alphaTarget:function(t){return arguments.length?(c=+t,o):c},velocityDecay:function(t){return arguments.length?(s=1-t,o):1-s},force:function(t,n){return arguments.length>1?(null==n?l.remove(t):l.set(t,i(n)),o):l.get(t)},find:function(n,e,r){var i,o,a,u,f,c=0,s=t.length;for(null==r?r=1/0:r*=r,c=0;c<s;++c)(a=(i=n-(u=t[c]).x)*i+(o=e-u.y)*o)<r&&(f=u,r=a);return f},on:function(t,n){return arguments.length>1?(d.on(t,n),o):d.on(t)}}},t.forceX=function(t){function n(t){for(var n,e=0,a=r.length;e<a;++e)(n=r[e]).vx+=(o[e]-n.x)*i[e]*t;}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+a(r[n],n,r);}}var r,i,o,a=qe(.1);return "function"!=typeof t&&(t=qe(null==t?0:+t)),n.initialize=function(t){r=t,e();},n.strength=function(t){return arguments.length?(a="function"==typeof t?t:qe(+t),e(),n):a},n.x=function(r){return arguments.length?(t="function"==typeof r?r:qe(+r),e(),n):t},n},t.forceY=function(t){function n(t){for(var n,e=0,a=r.length;e<a;++e)(n=r[e]).vy+=(o[e]-n.y)*i[e]*t;}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+a(r[n],n,r);}}var r,i,o,a=qe(.1);return "function"!=typeof t&&(t=qe(null==t?0:+t)),n.initialize=function(t){r=t,e();},n.strength=function(t){return arguments.length?(a="function"==typeof t?t:qe(+t),e(),n):a},n.y=function(r){return arguments.length?(t="function"==typeof r?r:qe(+r),e(),n):t},n},t.formatDefaultLocale=or,t.formatLocale=ir,t.formatSpecifier=tr,t.precisionFixed=ar,t.precisionPrefix=ur,t.precisionRound=fr,t.geoArea=function(t){return hp.reset(),br(t,dp),2*hp},t.geoBounds=function(t){var n,e,r,i,o,a,u;if(bd=_d=-(gd=yd=1/0),Ad=[],br(t,vp),e=Ad.length){for(Ad.sort(Yr),n=1,o=[r=Ad[0]];n<e;++n)Br(r,(i=Ad[n])[0])||Br(r,i[1])?(Or(r[0],i[1])>Or(r[0],r[1])&&(r[1]=i[1]),Or(i[0],r[1])>Or(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=Or(r[1],i[0]))>a&&(a=u,gd=i[0],_d=r[1]);}return Ad=Td=null,gd===1/0||yd===1/0?[[NaN,NaN],[NaN,NaN]]:[[gd,yd],[_d,bd]]},t.geoCentroid=function(t){Nd=Sd=Ed=kd=Cd=Pd=zd=Rd=Ld=Dd=Ud=0,br(t,gp);var n=Ld,e=Dd,r=Ud,i=n*n+e*e+r*r;return i<Hd&&(n=Pd,e=zd,r=Rd,Sd<jd&&(n=Ed,e=kd,r=Cd),(i=n*n+e*e+r*r)<Hd)?[NaN,NaN]:[Kd(e,n)*Wd,dr(r/up(i))*Wd]},t.geoCircle=function(){function t(){var t=r.apply(this,arguments),u=i.apply(this,arguments)*Zd,f=o.apply(this,arguments)*Zd;return n=[],e=ti(-t[0]*Zd,-t[1]*Zd,0).invert,oi(a,u,f,1),t={type:"Polygon",coordinates:[n]},n=e=null,t}var n,e,r=Qr([0,0]),i=Qr(90),o=Qr(6),a={point:function(t,r){n.push(t=e(t,r)),t[0]*=Wd,t[1]*=Wd;}};return t.center=function(n){return arguments.length?(r="function"==typeof n?n:Qr([+n[0],+n[1]]),t):r},t.radius=function(n){return arguments.length?(i="function"==typeof n?n:Qr(+n),t):i},t.precision=function(n){return arguments.length?(o="function"==typeof n?n:Qr(+n),t):o},t},t.geoClipAntimeridian=kp,t.geoClipCircle=gi,t.geoClipExtent=function(){var t,n,e,r=0,i=0,o=960,a=500;return e={stream:function(e){return t&&n===e?t:t=yi(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}},t.geoClipRectangle=yi,t.geoContains=function(t,n){return (t&&Up.hasOwnProperty(t.type)?Up[t.type]:Mi)(t,n)},t.geoDistance=wi,t.geoGraticule=Pi,t.geoGraticule10=function(){return Pi()()},t.geoInterpolate=function(t,n){var e=t[0]*Zd,r=t[1]*Zd,i=n[0]*Zd,o=n[1]*Zd,a=tp(r),u=op(r),f=tp(o),c=op(o),s=a*tp(e),l=a*op(e),h=f*tp(i),d=f*op(i),p=2*dr(up(pr(o-r)+a*f*pr(i-e))),v=op(p),g=p?function(t){var n=op(t*=p)/v,e=op(p-t)/v,r=e*s+n*h,i=e*l+n*d,o=e*u+n*c;return [Kd(i,r)*Wd,Kd(o,up(r*r+i*i))*Wd]}:function(){return [e*Wd,r*Wd]};return g.distance=p,g},t.geoLength=xi,t.geoPath=function(t,n){function e(t){return t&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),br(t,r(i))),i.result()}var r,i,o=4.5;return e.area=function(t){return br(t,r(Bp)),Bp.result()},e.measure=function(t){return br(t,r(fv)),fv.result()},e.bounds=function(t){return br(t,r(Xp)),Xp.result()},e.centroid=function(t){return br(t,r(nv)),nv.result()},e.projection=function(n){return arguments.length?(r=null==n?(t=null,zi):(t=n).stream,e):t},e.context=function(t){return arguments.length?(i=null==t?(n=null,new Wi):new Gi(n=t),"function"!=typeof o&&i.pointRadius(o),e):n},e.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),e):o},e.projection(t).context(n)},t.geoAlbers=lo,t.geoAlbersUsa=function(){function t(t){var n=t[0],e=t[1];return u=null,i.point(n,e),u||(o.point(n,e),u)||(a.point(n,e),u)}function n(){return e=r=null,t}var e,r,i,o,a,u,f=lo(),c=so().rotate([154,0]).center([-2,58.5]).parallels([55,65]),s=so().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(t,n){u=[t,n];}};return t.invert=function(t){var n=f.scale(),e=f.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return (i>=.12&&i<.234&&r>=-.425&&r<-.214?c:i>=.166&&i<.234&&r>=-.214&&r<-.115?s:f).invert(t)},t.stream=function(t){return e&&r===t?e:e=function(t){var n=t.length;return {point:function(e,r){for(var i=-1;++i<n;)t[i].point(e,r);},sphere:function(){for(var e=-1;++e<n;)t[e].sphere();},lineStart:function(){for(var e=-1;++e<n;)t[e].lineStart();},lineEnd:function(){for(var e=-1;++e<n;)t[e].lineEnd();},polygonStart:function(){for(var e=-1;++e<n;)t[e].polygonStart();},polygonEnd:function(){for(var e=-1;++e<n;)t[e].polygonEnd();}}}([f.stream(r=t),c.stream(t),s.stream(t)])},t.precision=function(t){return arguments.length?(f.precision(t),c.precision(t),s.precision(t),n()):f.precision()},t.scale=function(n){return arguments.length?(f.scale(n),c.scale(.35*n),s.scale(n),t.translate(f.translate())):f.scale()},t.translate=function(t){if(!arguments.length)return f.translate();var e=f.scale(),r=+t[0],u=+t[1];return i=f.translate(t).clipExtent([[r-.455*e,u-.238*e],[r+.455*e,u+.238*e]]).stream(l),o=c.translate([r-.307*e,u+.201*e]).clipExtent([[r-.425*e+jd,u+.12*e+jd],[r-.214*e-jd,u+.234*e-jd]]).stream(l),a=s.translate([r-.205*e,u+.212*e]).clipExtent([[r-.214*e+jd,u+.166*e+jd],[r-.115*e-jd,u+.234*e-jd]]).stream(l),n()},t.fitExtent=function(n,e){return to(t,n,e)},t.fitSize=function(n,e){return no(t,n,e)},t.fitWidth=function(n,e){return eo(t,n,e)},t.fitHeight=function(n,e){return ro(t,n,e)},t.scale(1070)},t.geoAzimuthalEqualArea=function(){return ao(hv).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=hv,t.geoAzimuthalEquidistant=function(){return ao(dv).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=dv,t.geoConicConformal=function(){return fo(_o).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=_o,t.geoConicEqualArea=so,t.geoConicEqualAreaRaw=co,t.geoConicEquidistant=function(){return fo(mo).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=mo,t.geoEquirectangular=function(){return ao(bo).scale(152.63)},t.geoEquirectangularRaw=bo,t.geoGnomonic=function(){return ao(xo).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=xo,t.geoIdentity=function(){function t(){return i=o=null,a}var n,e,r,i,o,a,u=1,f=0,c=0,s=1,l=1,h=zi,d=null,p=zi;return a={stream:function(t){return i&&o===t?i:i=h(p(o=t))},postclip:function(i){return arguments.length?(p=i,d=n=e=r=null,t()):p},clipExtent:function(i){return arguments.length?(p=null==i?(d=n=e=r=null,zi):yi(d=+i[0][0],n=+i[0][1],e=+i[1][0],r=+i[1][1]),t()):null==d?null:[[d,n],[e,r]]},scale:function(n){return arguments.length?(h=wo((u=+n)*s,u*l,f,c),t()):u},translate:function(n){return arguments.length?(h=wo(u*s,u*l,f=+n[0],c=+n[1]),t()):[f,c]},reflectX:function(n){return arguments.length?(h=wo(u*(s=n?-1:1),u*l,f,c),t()):s<0},reflectY:function(n){return arguments.length?(h=wo(u*s,u*(l=n?-1:1),f,c),t()):l<0},fitExtent:function(t,n){return to(a,t,n)},fitSize:function(t,n){return no(a,t,n)},fitWidth:function(t,n){return eo(a,t,n)},fitHeight:function(t,n){return ro(a,t,n)}}},t.geoProjection=ao,t.geoProjectionMutator=uo,t.geoMercator=function(){return go(vo).scale(961/$d)},t.geoMercatorRaw=vo,t.geoNaturalEarth1=function(){return ao(Mo).scale(175.295)},t.geoNaturalEarth1Raw=Mo,t.geoOrthographic=function(){return ao(Ao).scale(249.5).clipAngle(90+jd)},t.geoOrthographicRaw=Ao,t.geoStereographic=function(){return ao(To).scale(250).clipAngle(142)},t.geoStereographicRaw=To,t.geoTransverseMercator=function(){var t=go(No),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):(t=n(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):(t=e(),[t[0],t[1],t[2]-90])},e([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=No,t.geoRotation=ii,t.geoStream=br,t.geoTransform=function(t){return {stream:Qi(t)}},t.cluster=function(){function t(t){var o,a=0;t.eachAfter(function(t){var e=t.children;e?(t.x=function(t){return t.reduce(Eo,0)/t.length}(e),t.y=function(t){return 1+t.reduce(ko,0)}(e)):(t.x=o?a+=n(t,o):0,t.y=0,o=t);});var u=function(t){for(var n;n=t.children;)t=n[0];return t}(t),f=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(t),c=u.x-n(u,f)/2,s=f.x+n(f,u)/2;return t.eachAfter(i?function(n){n.x=(n.x-t.x)*e,n.y=(t.y-n.y)*r;}:function(n){n.x=(n.x-c)/(s-c)*e,n.y=(1-(t.y?n.y/t.y:1))*r;})}var n=So,e=1,r=1,i=!1;return t.separation=function(e){return arguments.length?(n=e,t):n},t.size=function(n){return arguments.length?(i=!1,e=+n[0],r=+n[1],t):i?null:[e,r]},t.nodeSize=function(n){return arguments.length?(i=!0,e=+n[0],r=+n[1],t):i?[e,r]:null},t},t.hierarchy=Po,t.pack=function(){function t(t){return t.x=e/2,t.y=r/2,n?t.eachBefore(Qo(n)).eachAfter(Jo(i,.5)).eachBefore(Ko(1)):t.eachBefore(Qo(Zo)).eachAfter(Jo($o,1)).eachAfter(Jo(i,t.r/Math.min(e,r))).eachBefore(Ko(Math.min(e,r)/(2*t.r))),t}var n=null,e=1,r=1,i=$o;return t.radius=function(e){return arguments.length?(n=function(t){return null==t?null:Vo(t)}(e),t):n},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i="function"==typeof n?n:Wo(+n),t):i},t},t.packSiblings=function(t){return Go(t),t},t.packEnclose=Uo,t.partition=function(){function t(t){var o=t.height+1;return t.x0=t.y0=r,t.x1=n,t.y1=e/o,t.eachBefore(function(t,n){return function(e){e.children&&na(e,e.x0,t*(e.depth+1)/n,e.x1,t*(e.depth+2)/n);var i=e.x0,o=e.y0,a=e.x1-r,u=e.y1-r;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),e.x0=i,e.y0=o,e.x1=a,e.y1=u;}}(e,o)),i&&t.eachBefore(ta),t}var n=1,e=1,r=0,i=!1;return t.round=function(n){return arguments.length?(i=!!n,t):i},t.size=function(r){return arguments.length?(n=+r[0],e=+r[1],t):[n,e]},t.padding=function(n){return arguments.length?(r=+n,t):r},t},t.stratify=function(){function t(t){var r,i,o,a,u,f,c,s=t.length,l=new Array(s),h={};for(i=0;i<s;++i)r=t[i],u=l[i]=new Do(r),null!=(f=n(r,i,t))&&(f+="")&&(h[c=vv+(u.id=f)]=c in h?yv:u);for(i=0;i<s;++i)if(u=l[i],null!=(f=e(t[i],i,t))&&(f+="")){if(!(a=h[vv+f]))throw new Error("missing: "+f);if(a===yv)throw new Error("ambiguous: "+f);a.children?a.children.push(u):a.children=[u],u.parent=a;}else{if(o)throw new Error("multiple roots");o=u;}if(!o)throw new Error("no root");if(o.parent=gv,o.eachBefore(function(t){t.depth=t.parent.depth+1,--s;}).eachBefore(Lo),o.parent=null,s>0)throw new Error("cycle");return o}var n=ea,e=ra;return t.id=function(e){return arguments.length?(n=Vo(e),t):n},t.parentId=function(n){return arguments.length?(e=Vo(n),t):e},t},t.tree=function(){function t(t){var f=function(t){for(var n,e,r,i,o,a=new ca(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new ca(r[i],i)),e.parent=n;return (a.parent=new ca(null,0)).children=[a],a}(t);if(f.eachAfter(n),f.parent.m=-f.z,f.eachBefore(e),u)t.eachBefore(r);else{var c=t,s=t,l=t;t.eachBefore(function(t){t.x<c.x&&(c=t),t.x>s.x&&(s=t),t.depth>l.depth&&(l=t);});var h=c===s?1:i(c,s)/2,d=h-c.x,p=o/(s.x+h+d),v=a/(l.depth||1);t.eachBefore(function(t){t.x=(t.x+d)*p,t.y=t.depth*v;});}return t}function n(t){var n=t.children,e=t.parent.children,r=t.i?e[t.i-1]:null;if(n){(function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c);})(t);var o=(n[0].z+n[n.length-1].z)/2;r?(t.z=r.z+i(t._,r._),t.m=t.z-o):t.z=o;}else r&&(t.z=r.z+i(t._,r._));t.parent.A=function(t,n,e){if(n){for(var r,o=t,a=t,u=n,f=o.parent.children[0],c=o.m,s=a.m,l=u.m,h=f.m;u=aa(u),o=oa(o),u&&o;)f=oa(f),(a=aa(a)).a=t,(r=u.z+l-o.z-c+i(u._,o._))>0&&(ua(fa(u,t,e),t,r),c+=r,s+=r),l+=u.m,c+=o.m,h+=f.m,s+=a.m;u&&!aa(a)&&(a.t=u,a.m+=l-s),o&&!oa(f)&&(f.t=o,f.m+=c-h,e=t);}return e}(t,r,t.parent.A||e[0]);}function e(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m;}function r(t){t.x*=o,t.y=t.depth*a;}var i=ia,o=1,a=1,u=null;return t.separation=function(n){return arguments.length?(i=n,t):i},t.size=function(n){return arguments.length?(u=!1,o=+n[0],a=+n[1],t):u?null:[o,a]},t.nodeSize=function(n){return arguments.length?(u=!0,o=+n[0],a=+n[1],t):u?[o,a]:null},t},t.treemap=function(){function t(t){return t.x0=t.y0=0,t.x1=i,t.y1=o,t.eachBefore(n),a=[0],r&&t.eachBefore(ta),t}function n(t){var n=a[t.depth],r=t.x0+n,i=t.y0+n,o=t.x1-n,h=t.y1-n;o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),t.x0=r,t.y0=i,t.x1=o,t.y1=h,t.children&&(n=a[t.depth+1]=u(t)/2,r+=l(t)-n,i+=f(t)-n,o-=c(t)-n,h-=s(t)-n,o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),e(t,r,i,o,h));}var e=bv,r=!1,i=1,o=1,a=[0],u=$o,f=$o,c=$o,s=$o,l=$o;return t.round=function(n){return arguments.length?(r=!!n,t):r},t.size=function(n){return arguments.length?(i=+n[0],o=+n[1],t):[i,o]},t.tile=function(n){return arguments.length?(e=Vo(n),t):e},t.padding=function(n){return arguments.length?t.paddingInner(n).paddingOuter(n):t.paddingInner()},t.paddingInner=function(n){return arguments.length?(u="function"==typeof n?n:Wo(+n),t):u},t.paddingOuter=function(n){return arguments.length?t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):t.paddingTop()},t.paddingTop=function(n){return arguments.length?(f="function"==typeof n?n:Wo(+n),t):f},t.paddingRight=function(n){return arguments.length?(c="function"==typeof n?n:Wo(+n),t):c},t.paddingBottom=function(n){return arguments.length?(s="function"==typeof n?n:Wo(+n),t):s},t.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:Wo(+n),t):l},t},t.treemapBinary=function(t,n,e,r,i){function o(t,n,e,r,i,a,u){if(t>=n-1){var c=f[t];return c.x0=r,c.y0=i,c.x1=a,void(c.y1=u)}for(var l=s[t],h=e/2+l,d=t+1,p=n-1;d<p;){var v=d+p>>>1;s[v]<h?d=v+1:p=v;}h-s[d-1]<s[d]-h&&t+1<d&&--d;var g=s[d]-l,y=e-g;if(a-r>u-i){var _=(r*y+a*g)/e;o(t,d,g,r,i,_,u),o(d,n,y,_,i,a,u);}else{var b=(i*y+u*g)/e;o(t,d,g,r,i,a,b),o(d,n,y,r,b,a,u);}}var a,u,f=t.children,c=f.length,s=new Array(c+1);for(s[0]=u=a=0;a<c;++a)s[a+1]=u+=f[a].value;o(0,c,t.value,n,e,r,i);},t.treemapDice=na,t.treemapSlice=sa,t.treemapSliceDice=function(t,n,e,r,i){(1&t.depth?sa:na)(t,n,e,r,i);},t.treemapSquarify=bv,t.treemapResquarify=mv,t.interpolate=dn,t.interpolateArray=fn,t.interpolateBasis=Kt,t.interpolateBasisClosed=tn,t.interpolateDate=cn,t.interpolateNumber=sn,t.interpolateObject=ln,t.interpolateRound=pn,t.interpolateString=hn,t.interpolateTransformCss=cl,t.interpolateTransformSvg=sl,t.interpolateZoom=_n,t.interpolateRgb=el,t.interpolateRgbBasis=rl,t.interpolateRgbBasisClosed=il,t.interpolateHsl=vl,t.interpolateHslLong=gl,t.interpolateLab=function(t,n){var e=an((t=Ft(t)).l,(n=Ft(n)).l),r=an(t.a,n.a),i=an(t.b,n.b),o=an(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}},t.interpolateHcl=yl,t.interpolateHclLong=_l,t.interpolateCubehelix=bl,t.interpolateCubehelixLong=ml,t.piecewise=function(t,n){for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e]);return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return o[n](t-n)}},t.quantize=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},t.path=oe,t.polygonArea=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},t.polygonCentroid=function(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],f=0;++r<i;)n=u,u=t[r],f+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e;return f*=3,[o/f,a/f]},t.polygonHull=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(da),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=pa(r),a=pa(i),u=a[0]===o[0],f=a[a.length-1]===o[o.length-1],c=[];for(n=o.length-1;n>=0;--n)c.push(t[r[o[n]][2]]);for(n=+u;n<a.length-f;++n)c.push(t[r[a[n]][2]]);return c},t.polygonContains=function(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],f=o[0],c=o[1],s=!1,l=0;l<i;++l)e=(o=t[l])[0],(r=o[1])>u!=c>u&&a<(f-e)*(u-r)/(c-r)+e&&(s=!s),f=e,c=r;return s},t.polygonLength=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],f=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],f+=Math.sqrt(n*n+e*e);return f},t.quadtree=je,t.randomUniform=xv,t.randomNormal=wv,t.randomLogNormal=Mv,t.randomBates=Tv,t.randomIrwinHall=Av,t.randomExponential=Nv,t.scaleBand=ya,t.scalePoint=function(){return _a(ya().paddingInner(1))},t.scaleIdentity=Ea,t.scaleLinear=Sa,t.scaleLog=Ua,t.scaleOrdinal=ga,t.scaleImplicit=Cv,t.scalePow=Oa,t.scaleSqrt=function(){return Oa().exponent(.5)},t.scaleQuantile=Ya,t.scaleQuantize=Ba,t.scaleThreshold=Fa,t.scaleTime=function(){return of(fg,ag,Gv,Hv,Iv,Bv,Ov,Lv,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},t.scaleUtc=function(){return of(zg,Cg,gg,pg,hg,sg,Ov,Lv,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},t.scaleSequential=af,t.schemeCategory10=Wg,t.schemeAccent=Zg,t.schemeDark2=Qg,t.schemePaired=Jg,t.schemePastel1=Kg,t.schemePastel2=ty,t.schemeSet1=ny,t.schemeSet2=ey,t.schemeSet3=ry,t.interpolateBrBG=oy,t.schemeBrBG=iy,t.interpolatePRGn=uy,t.schemePRGn=ay,t.interpolatePiYG=cy,t.schemePiYG=fy,t.interpolatePuOr=ly,t.schemePuOr=sy,t.interpolateRdBu=dy,t.schemeRdBu=hy,t.interpolateRdGy=vy,t.schemeRdGy=py,t.interpolateRdYlBu=yy,t.schemeRdYlBu=gy,t.interpolateRdYlGn=by,t.schemeRdYlGn=_y,t.interpolateSpectral=xy,t.schemeSpectral=my,t.interpolateBuGn=My,t.schemeBuGn=wy,t.interpolateBuPu=Ty,t.schemeBuPu=Ay,t.interpolateGnBu=Sy,t.schemeGnBu=Ny,t.interpolateOrRd=ky,t.schemeOrRd=Ey,t.interpolatePuBuGn=Py,t.schemePuBuGn=Cy,t.interpolatePuBu=Ry,t.schemePuBu=zy,t.interpolatePuRd=Dy,t.schemePuRd=Ly,t.interpolateRdPu=qy,t.schemeRdPu=Uy,t.interpolateYlGnBu=Yy,t.schemeYlGnBu=Oy,t.interpolateYlGn=Fy,t.schemeYlGn=By,t.interpolateYlOrBr=jy,t.schemeYlOrBr=Iy,t.interpolateYlOrRd=Xy,t.schemeYlOrRd=Hy,t.interpolateBlues=Vy,t.schemeBlues=Gy,t.interpolateGreens=Wy,t.schemeGreens=$y,t.interpolateGreys=Qy,t.schemeGreys=Zy,t.interpolatePurples=Ky,t.schemePurples=Jy,t.interpolateReds=n_,t.schemeReds=t_,t.interpolateOranges=r_,t.schemeOranges=e_,t.interpolateCubehelixDefault=i_,t.interpolateRainbow=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return u_.h=360*t-100,u_.s=1.5-1.5*n,u_.l=.8-.9*n,u_+""},t.interpolateWarm=o_,t.interpolateCool=a_,t.interpolateSinebow=function(t){var n;return t=(.5-t)*Math.PI,f_.r=255*(n=Math.sin(t))*n,f_.g=255*(n=Math.sin(t+c_))*n,f_.b=255*(n=Math.sin(t+s_))*n,f_+""},t.interpolateViridis=l_,t.interpolateMagma=h_,t.interpolateInferno=d_,t.interpolatePlasma=p_,t.create=function(t){return ct(C(t).call(document.documentElement))},t.creator=C,t.local=st,t.matcher=_s,t.mouse=pt,t.namespace=k,t.namespaces=ps,t.clientPoint=dt,t.select=ct,t.selectAll=function(t){return "string"==typeof t?new ut([document.querySelectorAll(t)],[document.documentElement]):new ut([null==t?[]:t],xs)},t.selection=ft,t.selector=z,t.selectorAll=L,t.style=F,t.touch=vt,t.touches=function(t,n){null==n&&(n=ht().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=dt(t,n[e]);return i},t.window=B,t.customEvent=ot,t.arc=function(){function t(){var t,c,s=+n.apply(this,arguments),l=+e.apply(this,arguments),h=o.apply(this,arguments)-A_,d=a.apply(this,arguments)-A_,p=v_(d-h),v=d>h;if(f||(f=t=oe()),l<s&&(c=l,l=s,s=c),l>w_)if(p>T_-w_)f.moveTo(l*y_(h),l*m_(h)),f.arc(0,0,l,h,d,!v),s>w_&&(f.moveTo(s*y_(d),s*m_(d)),f.arc(0,0,s,d,h,v));else{var g,y,_=h,b=d,m=h,x=d,w=p,M=p,A=u.apply(this,arguments)/2,T=A>w_&&(i?+i.apply(this,arguments):x_(s*s+l*l)),N=b_(v_(l-s)/2,+r.apply(this,arguments)),S=N,E=N;if(T>w_){var k=lf(T/s*m_(A)),C=lf(T/l*m_(A));(w-=2*k)>w_?(k*=v?1:-1,m+=k,x-=k):(w=0,m=x=(h+d)/2),(M-=2*C)>w_?(C*=v?1:-1,_+=C,b-=C):(M=0,_=b=(h+d)/2);}var P=l*y_(_),z=l*m_(_),R=s*y_(x),L=s*m_(x);if(N>w_){var D=l*y_(b),U=l*m_(b),q=s*y_(m),O=s*m_(m);if(p<M_){var Y=w>w_?function(t,n,e,r,i,o,a,u){var f=e-t,c=r-n,s=a-i,l=u-o,h=(s*(n-o)-l*(t-i))/(l*f-s*c);return [t+h*f,n+h*c]}(P,z,q,O,D,U,R,L):[R,L],B=P-Y[0],F=z-Y[1],I=D-Y[0],j=U-Y[1],H=1/m_(function(t){return t>1?0:t<-1?M_:Math.acos(t)}((B*I+F*j)/(x_(B*B+F*F)*x_(I*I+j*j)))/2),X=x_(Y[0]*Y[0]+Y[1]*Y[1]);S=b_(N,(s-X)/(H-1)),E=b_(N,(l-X)/(H+1));}}M>w_?E>w_?(g=yf(q,O,P,z,l,E,v),y=yf(D,U,R,L,l,E,v),f.moveTo(g.cx+g.x01,g.cy+g.y01),E<N?f.arc(g.cx,g.cy,E,g_(g.y01,g.x01),g_(y.y01,y.x01),!v):(f.arc(g.cx,g.cy,E,g_(g.y01,g.x01),g_(g.y11,g.x11),!v),f.arc(0,0,l,g_(g.cy+g.y11,g.cx+g.x11),g_(y.cy+y.y11,y.cx+y.x11),!v),f.arc(y.cx,y.cy,E,g_(y.y11,y.x11),g_(y.y01,y.x01),!v))):(f.moveTo(P,z),f.arc(0,0,l,_,b,!v)):f.moveTo(P,z),s>w_&&w>w_?S>w_?(g=yf(R,L,D,U,s,-S,v),y=yf(P,z,q,O,s,-S,v),f.lineTo(g.cx+g.x01,g.cy+g.y01),S<N?f.arc(g.cx,g.cy,S,g_(g.y01,g.x01),g_(y.y01,y.x01),!v):(f.arc(g.cx,g.cy,S,g_(g.y01,g.x01),g_(g.y11,g.x11),!v),f.arc(0,0,s,g_(g.cy+g.y11,g.cx+g.x11),g_(y.cy+y.y11,y.cx+y.x11),v),f.arc(y.cx,y.cy,S,g_(y.y11,y.x11),g_(y.y01,y.x01),!v))):f.arc(0,0,s,x,m,v):f.lineTo(R,L);}else f.moveTo(0,0);if(f.closePath(),t)return f=null,t+""||null}var n=hf,e=df,r=sf(0),i=null,o=pf,a=vf,u=gf,f=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-M_/2;return [y_(r)*t,m_(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:sf(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:sf(+n),t):e},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:sf(+n),t):r},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:sf(+n),t):i},t.startAngle=function(n){return arguments.length?(o="function"==typeof n?n:sf(+n),t):o},t.endAngle=function(n){return arguments.length?(a="function"==typeof n?n:sf(+n),t):a},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:sf(+n),t):u},t.context=function(n){return arguments.length?(f=null==n?null:n,t):f},t},t.area=Mf,t.line=wf,t.pie=function(){function t(t){var u,f,c,s,l,h=t.length,d=0,p=new Array(h),v=new Array(h),g=+i.apply(this,arguments),y=Math.min(T_,Math.max(-T_,o.apply(this,arguments)-g)),_=Math.min(Math.abs(y)/h,a.apply(this,arguments)),b=_*(y<0?-1:1);for(u=0;u<h;++u)(l=v[p[u]=u]=+n(t[u],u,t))>0&&(d+=l);for(null!=e?p.sort(function(t,n){return e(v[t],v[n])}):null!=r&&p.sort(function(n,e){return r(t[n],t[e])}),u=0,c=d?(y-h*b)/d:0;u<h;++u,g=s)f=p[u],s=g+((l=v[f])>0?l*c:0)+b,v[f]={data:t[f],index:u,value:l,startAngle:g,endAngle:s,padAngle:_};return v}var n=Tf,e=Af,r=null,i=sf(0),o=sf(T_),a=sf(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:sf(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e},t.sort=function(n){return arguments.length?(r=n,e=null,t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:sf(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:sf(+n),t):o},t.padAngle=function(n){return arguments.length?(a="function"==typeof n?n:sf(+n),t):a},t},t.areaRadial=Cf,t.radialArea=Cf,t.lineRadial=kf,t.radialLine=kf,t.pointRadial=Pf,t.linkHorizontal=function(){return Lf(Df)},t.linkVertical=function(){return Lf(Uf)},t.linkRadial=function(){var t=Lf(qf);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t},t.symbol=function(){function t(){var t;if(r||(r=t=oe()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t)return r=null,t+""||null}var n=sf(E_),e=sf(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:sf(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:sf(+n),t):e},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r},t},t.symbols=H_,t.symbolCircle=E_,t.symbolCross=k_,t.symbolDiamond=z_,t.symbolSquare=q_,t.symbolStar=U_,t.symbolTriangle=Y_,t.symbolWye=j_,t.curveBasisClosed=function(t){return new Ff(t)},t.curveBasisOpen=function(t){return new If(t)},t.curveBasis=function(t){return new Bf(t)},t.curveBundle=X_,t.curveCardinalClosed=V_,t.curveCardinalOpen=$_,t.curveCardinal=G_,t.curveCatmullRomClosed=Z_,t.curveCatmullRomOpen=Q_,t.curveCatmullRom=W_,t.curveLinearClosed=function(t){return new Jf(t)},t.curveLinear=bf,t.curveMonotoneX=function(t){return new rc(t)},t.curveMonotoneY=function(t){return new ic(t)},t.curveNatural=function(t){return new ac(t)},t.curveStep=function(t){return new fc(t,.5)},t.curveStepAfter=function(t){return new fc(t,1)},t.curveStepBefore=function(t){return new fc(t,0)},t.stack=function(){function t(t){var o,a,u=n.apply(this,arguments),f=t.length,c=u.length,s=new Array(c);for(o=0;o<c;++o){for(var l,h=u[o],d=s[o]=new Array(f),p=0;p<f;++p)d[p]=l=[0,+i(t[p],h,p,t)],l.data=t[p];d.key=h;}for(o=0,a=e(s);o<c;++o)s[a[o]].index=o;return r(s,a),s}var n=sf([]),e=sc,r=cc,i=lc;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:sf(S_.call(e)),t):n},t.value=function(n){return arguments.length?(i="function"==typeof n?n:sf(+n),t):i},t.order=function(n){return arguments.length?(e=null==n?sc:"function"==typeof n?n:sf(S_.call(n)),t):e},t.offset=function(n){return arguments.length?(r=null==n?cc:n,t):r},t},t.stackOffsetExpand=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i;}cc(t,n);}},t.stackOffsetDiverging=function(t,n){if((u=t.length)>1)for(var e,r,i,o,a,u,f=0,c=t[n[0]].length;f<c;++f)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][f])[1]-r[0])>=0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):r[0]=o;},t.stackOffsetNone=cc,t.stackOffsetSilhouette=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2;}cc(t,n);}},t.stackOffsetWiggle=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,f=0,c=0;u<i;++u){for(var s=t[n[u]],l=s[a][1]||0,h=(l-(s[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]];h+=(p[a][1]||0)-(p[a-1][1]||0);}f+=l,c+=h*l;}e[a-1][1]+=e[a-1][0]=o,f&&(o-=c/f);}e[a-1][1]+=e[a-1][0]=o,cc(t,n);}},t.stackOrderAscending=hc,t.stackOrderDescending=function(t){return hc(t).reverse()},t.stackOrderInsideOut=function(t){var n,e,r=t.length,i=t.map(dc),o=sc(t).sort(function(t,n){return i[n]-i[t]}),a=0,u=0,f=[],c=[];for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],f.push(e)):(u+=i[e],c.push(e));return c.reverse().concat(f)},t.stackOrderNone=sc,t.stackOrderReverse=function(t){return sc(t).reverse()},t.timeInterval=Ia,t.timeMillisecond=Lv,t.timeMilliseconds=Dv,t.utcMillisecond=Lv,t.utcMilliseconds=Dv,t.timeSecond=Ov,t.timeSeconds=Yv,t.utcSecond=Ov,t.utcSeconds=Yv,t.timeMinute=Bv,t.timeMinutes=Fv,t.timeHour=Iv,t.timeHours=jv,t.timeDay=Hv,t.timeDays=Xv,t.timeWeek=Gv,t.timeWeeks=Kv,t.timeSunday=Gv,t.timeSundays=Kv,t.timeMonday=Vv,t.timeMondays=tg,t.timeTuesday=$v,t.timeTuesdays=ng,t.timeWednesday=Wv,t.timeWednesdays=eg,t.timeThursday=Zv,t.timeThursdays=rg,t.timeFriday=Qv,t.timeFridays=ig,t.timeSaturday=Jv,t.timeSaturdays=og,t.timeMonth=ag,t.timeMonths=ug,t.timeYear=fg,t.timeYears=cg,t.utcMinute=sg,t.utcMinutes=lg,t.utcHour=hg,t.utcHours=dg,t.utcDay=pg,t.utcDays=vg,t.utcWeek=gg,t.utcWeeks=Mg,t.utcSunday=gg,t.utcSundays=Mg,t.utcMonday=yg,t.utcMondays=Ag,t.utcTuesday=_g,t.utcTuesdays=Tg,t.utcWednesday=bg,t.utcWednesdays=Ng,t.utcThursday=mg,t.utcThursdays=Sg,t.utcFriday=xg,t.utcFridays=Eg,t.utcSaturday=wg,t.utcSaturdays=kg,t.utcMonth=Cg,t.utcMonths=Pg,t.utcYear=zg,t.utcYears=Lg,t.timeFormatDefaultLocale=nf,t.timeFormatLocale=$a,t.isoFormat=Bg,t.isoParse=Fg,t.now=wn,t.timer=Tn,t.timerFlush=Nn,t.timeout=Cn,t.interval=function(t,n,e){var r=new An,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?wn():+e,r.restart(function o(a){a+=i,r.restart(o,i+=n,e),t(a);},n,e),r)},t.transition=Yn,t.active=function(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>Rl&&e.name===n)return new On([[t]],lh,n,+r)}return null},t.interrupt=Dn,t.voronoi=function(){function t(t){return new Yc(t.map(function(r,i){var o=[Math.round(n(r,i,t)/ob)*ob,Math.round(e(r,i,t)/ob)*ob];return o.index=i,o.data=r,o}),r)}var n=vc,e=gc,r=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:pc(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:pc(+n),t):e},t.extent=function(n){return arguments.length?(r=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(n){return arguments.length?(r=null==n?null:[[0,0],[+n[0],+n[1]]],t):r&&[r[1][0]-r[0][0],r[1][1]-r[0][1]]},t},t.zoom=function(){function n(t){t.property("__zoom",Vc).on("wheel.zoom",f).on("mousedown.zoom",c).on("dblclick.zoom",s).filter(m).on("touchstart.zoom",l).on("touchmove.zoom",h).on("touchend.zoom touchcancel.zoom",d).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)");}function e(t,n){return (n=Math.max(x[0],Math.min(x[1],n)))===t.k?t:new Fc(n,t.x,t.y)}function r(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Fc(t.k,r,i)}function i(t){return [(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function o(t,n,e){t.on("start.zoom",function(){a(this,arguments).start();}).on("interrupt.zoom end.zoom",function(){a(this,arguments).end();}).tween("zoom",function(){var t=arguments,r=a(this,t),o=y.apply(this,t),u=e||i(o),f=Math.max(o[1][0]-o[0][0],o[1][1]-o[0][1]),c=this.__zoom,s="function"==typeof n?n.apply(this,t):n,l=A(c.invert(u).concat(f/c.k),s.invert(u).concat(f/s.k));return function(t){if(1===t)t=s;else{var n=l(t),e=f/n[2];t=new Fc(e,u[0]-n[0]*e,u[1]-n[1]*e);}r.zoom(null,t);}});}function a(t,n){for(var e,r=0,i=T.length;r<i;++r)if((e=T[r]).that===t)return e;return new u(t,n)}function u(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=y.apply(t,n);}function f(){if(g.apply(this,arguments)){var t=a(this,arguments),n=this.__zoom,i=Math.max(x[0],Math.min(x[1],n.k*Math.pow(2,b.apply(this,arguments)))),o=pt(this);if(t.wheel)t.mouse[0][0]===o[0]&&t.mouse[0][1]===o[1]||(t.mouse[1]=n.invert(t.mouse[0]=o)),clearTimeout(t.wheel);else{if(n.k===i)return;t.mouse=[o,n.invert(o)],Dn(this),t.start();}Hc(),t.wheel=setTimeout(function(){t.wheel=null,t.end();},k),t.zoom("mouse",_(r(e(n,i),t.mouse[0],t.mouse[1]),t.extent,w));}}function c(){if(!v&&g.apply(this,arguments)){var n=a(this,arguments),e=ct(t.event.view).on("mousemove.zoom",function(){if(Hc(),!n.moved){var e=t.event.clientX-o,i=t.event.clientY-u;n.moved=e*e+i*i>C;}n.zoom("mouse",_(r(n.that.__zoom,n.mouse[0]=pt(n.that),n.mouse[1]),n.extent,w));},!0).on("mouseup.zoom",function(){e.on("mousemove.zoom mouseup.zoom",null),bt(t.event.view,n.moved),Hc(),n.end();},!0),i=pt(this),o=t.event.clientX,u=t.event.clientY;_t(t.event.view),jc(),n.mouse=[i,this.__zoom.invert(i)],Dn(this),n.start();}}function s(){if(g.apply(this,arguments)){var i=this.__zoom,a=pt(this),u=i.invert(a),f=i.k*(t.event.shiftKey?.5:2),c=_(r(e(i,f),a,u),y.apply(this,arguments),w);Hc(),M>0?ct(this).transition().duration(M).call(o,c,a):ct(this).call(n.transform,c);}}function l(){if(g.apply(this,arguments)){var n,e,r,i,o=a(this,arguments),u=t.event.changedTouches,f=u.length;for(jc(),e=0;e<f;++e)i=[i=vt(this,u,(r=u[e]).identifier),this.__zoom.invert(i),r.identifier],o.touch0?o.touch1||(o.touch1=i):(o.touch0=i,n=!0);if(p&&(p=clearTimeout(p),!o.touch1))return o.end(),void((i=ct(this).on("dblclick.zoom"))&&i.apply(this,arguments));n&&(p=setTimeout(function(){p=null;},E),Dn(this),o.start());}}function h(){var n,i,o,u,f=a(this,arguments),c=t.event.changedTouches,s=c.length;for(Hc(),p&&(p=clearTimeout(p)),n=0;n<s;++n)o=vt(this,c,(i=c[n]).identifier),f.touch0&&f.touch0[2]===i.identifier?f.touch0[0]=o:f.touch1&&f.touch1[2]===i.identifier&&(f.touch1[0]=o);if(i=f.that.__zoom,f.touch1){var l=f.touch0[0],h=f.touch0[1],d=f.touch1[0],v=f.touch1[1],g=(g=d[0]-l[0])*g+(g=d[1]-l[1])*g,y=(y=v[0]-h[0])*y+(y=v[1]-h[1])*y;i=e(i,Math.sqrt(g/y)),o=[(l[0]+d[0])/2,(l[1]+d[1])/2],u=[(h[0]+v[0])/2,(h[1]+v[1])/2];}else{if(!f.touch0)return;o=f.touch0[0],u=f.touch0[1];}f.zoom("touch",_(r(i,o,u),f.extent,w));}function d(){var n,e,r=a(this,arguments),i=t.event.changedTouches,o=i.length;for(jc(),v&&clearTimeout(v),v=setTimeout(function(){v=null;},E),n=0;n<o;++n)e=i[n],r.touch0&&r.touch0[2]===e.identifier?delete r.touch0:r.touch1&&r.touch1[2]===e.identifier&&delete r.touch1;r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0?r.touch0[1]=this.__zoom.invert(r.touch0[0]):r.end();}var p,v,g=Xc,y=Gc,_=Zc,b=$c,m=Wc,x=[0,1/0],w=[[-1/0,-1/0],[1/0,1/0]],M=250,A=_n,T=[],S=N("start","zoom","end"),E=500,k=150,C=0;return n.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",Vc),t!==e?o(t,n):e.interrupt().each(function(){a(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end();});},n.scaleBy=function(t,e){n.scaleTo(t,function(){return this.__zoom.k*("function"==typeof e?e.apply(this,arguments):e)});},n.scaleTo=function(t,o){n.transform(t,function(){var t=y.apply(this,arguments),n=this.__zoom,a=i(t),u=n.invert(a),f="function"==typeof o?o.apply(this,arguments):o;return _(r(e(n,f),a,u),t,w)});},n.translateBy=function(t,e,r){n.transform(t,function(){return _(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof r?r.apply(this,arguments):r),y.apply(this,arguments),w)});},n.translateTo=function(t,e,r){n.transform(t,function(){var t=y.apply(this,arguments),n=this.__zoom,o=i(t);return _(ub.translate(o[0],o[1]).scale(n.k).translate("function"==typeof e?-e.apply(this,arguments):-e,"function"==typeof r?-r.apply(this,arguments):-r),t,w)});},u.prototype={start:function(){return 1==++this.active&&(this.index=T.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(T.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){ot(new function(t,n,e){this.target=t,this.type=n,this.transform=e;}(n,t,this.that.__zoom),S.apply,S,[t,this.that,this.args]);}},n.wheelDelta=function(t){return arguments.length?(b="function"==typeof t?t:Bc(+t),n):b},n.filter=function(t){return arguments.length?(g="function"==typeof t?t:Bc(!!t),n):g},n.touchable=function(t){return arguments.length?(m="function"==typeof t?t:Bc(!!t),n):m},n.extent=function(t){return arguments.length?(y="function"==typeof t?t:Bc([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):y},n.scaleExtent=function(t){return arguments.length?(x[0]=+t[0],x[1]=+t[1],n):[x[0],x[1]]},n.translateExtent=function(t){return arguments.length?(w[0][0]=+t[0][0],w[1][0]=+t[1][0],w[0][1]=+t[0][1],w[1][1]=+t[1][1],n):[[w[0][0],w[0][1]],[w[1][0],w[1][1]]]},n.constrain=function(t){return arguments.length?(_=t,n):_},n.duration=function(t){return arguments.length?(M=+t,n):M},n.interpolate=function(t){return arguments.length?(A=t,n):A},n.on=function(){var t=S.on.apply(S,arguments);return t===S?n:t},n.clickDistance=function(t){return arguments.length?(C=(t=+t)*t,n):Math.sqrt(C)},n},t.zoomTransform=Ic,t.zoomIdentity=ub,Object.defineProperty(t,"__esModule",{value:!0});return t;});

	function makeGridLines(selection, svgSize, minGridLines=100){
		const [width, height] = svgSize,
		increment = Math.min(...svgSize) / minGridLines,
		style = "fill: none; stroke: #ddd; shape-rendering: crispEdges; vector-effect: non-scaling-stroke;";
		const grid = selection.append("g").classed("gridLines", true);
		grid.append("g").selectAll("line")
			.data(d3.range(0, width + (increment/2), increment))
			.enter().append("line")
			.attr("x1", d=>d).attr("x2", d=>d)
			.attr("y1", 0).attr("y2", height)
			.attr("style", style);
		grid.append("g").selectAll("line")
			.data(d3.range(0, height + (increment/2), increment))
			.enter().append("line")
				.attr("y1", d=>d).attr("y2", d=>d)
				.attr("x1", 0).attr("x2", width)
				.attr("style", style);
	}

	function addMarkerDef(svgSelection){
		const markers = {
			arrowEnd: s => s.append("path").attr("d", "M 0,0 m -5,-5 L 5,0 L -5,5 Z"),
			circleEnd: s => s.append("circle").attr("cx",0).attr("cy",0).attr("r",5)
		};
		svgSelection.append("defs").selectAll("marker")
			.data(Object.entries(markers))
				.enter().append("marker")
				.attr("id", d=>d[0])
				.attr("refX", 0).attr("refY", 0)
				.attr("orient", "auto")
				.attr("viewBox", "-5 -5 10 10")
				.attr("markerWidth", 3).attr("markerHeight", 3)
				.each(function(d){d[1](d3.select(this));});
	}

	// make n circles
	function makeSVGCircles(selection, n, diameterBetweenCircles=0.5){
		const xPos = i => 0.5+(0.5*diameterBetweenCircles)+(i*(1+diameterBetweenCircles));
		selection
			.append("rect")
			.attr("height", 1)
			.attr("width", Math.max(3,n) * (1+diameterBetweenCircles))
			.attr("fill", "none");
		return selection.selectAll("circle")
			.data(d3.range(n))
			.enter()
			.append("circle")
			.attr("cx", n<3? i => xPos(i+(1/n)) : xPos)
			.attr("cy", 0.5)
			.attr("r", 0.5)
			.datum(d => ({index: d}))
	}




	const _makePointTransformer = (svgEle, matrix) => ([x,y]) => {
		let point = svgEle.createSVGPoint();
		point.x = x;
		point.y = y;
		point = point.matrixTransform(matrix);
		return [point.x, point.y]
	};
	const _getCTMs = (target, endSelector) => {
		let end = target;
		while(!end.matches(endSelector)){ end = end.parentElement; }
		return {endT: end.getScreenCTM(), targetT: target.getScreenCTM()}
	};

	function inverseRelativeTransform(target, endSelector="svg"){
		const {endT, targetT} = _getCTMs(target, endSelector),
		inv = targetT.inverse().multiply(endT); // is equivalent to `endT.inverse().multiply(targetT).inverse()`, but avoids an inverse
		return _makePointTransformer(target.ownerSVGElement, inv)
	}

	function relativeTransform(target, endSelector="svg"){
		const {endT, targetT} = _getCTMs(target, endSelector),
		inv = endT.inverse().multiply(targetT);
		return _makePointTransformer(target.ownerSVGElement, inv)
	}

	function getValue(ele){
	    let node, outIndex;
	    if(ele.tagName === 'path'){
	        const {index} = ele.__data__.edgeRelation.from;
	        outIndex = index;
	        node = ele.__data__.edgeRelation.from.node;
	    } else if(ele.tagName === 'circle'){
	        node = ele.closest('.nodeContainer');
	        outIndex = ele.__data__.index;
	    } else {return false}
	    if(!(node.__data__.hasOwnProperty('outputVals') &&
	        node.__data__.outputVals.hasOwnProperty(outIndex))){return false}
	    const value = node.__data__.outputVals[outIndex];
	    return {value}
	}

	function valueToHTML(value){
	    if(value.constructor.name === 'tensor_description'){
	        const shape = value.shape;
	        const dtype = value.dtype;
	        let size = shape.filter(Number.isInteger).reduce((acc,x)=>acc*x, 1);
	        size += shape.filter(isNaN).reduce((acc,s)=>`${acc}*${s}`, '');
	        return '<style>.tensorDescTable td{color:#fff;padding:0 5px 0 5px;}</style>' +
	            `<table class="tensorDescTable"><tr><td>Shape: <td>${JSON.stringify(shape)}<tr><td>Size: <td>${size}<tr><td>DType: <td>${dtype}</table>`
	    }
	    return JSON.stringify(value)
	}

	function getInner(ele){
	    const res = getValue(ele);
	    if(res === false){ return '' }
	    const {value} = res;
	    const inside = valueToHTML(value);
	    return `<style>.valueTooltip{max-width:20vw;font-size:12px;position:absolute;line-height:1;font-weight:700;padding:12px;background:#37364d;color:#fff;border-radius:2px}</style><div class="valueTooltip">${inside}</div>`
	}

	const valueHover = {
	    mouseover: (ele) => {
	        d3.selectAll('.outputValueTooltipHolder').remove();
	        d3.select(ele.ownerSVGElement.parentElement)
	            .append('div').classed('outputValueTooltipHolder', true)
	            .html(getInner(ele))
	            .style('left', d3.event.pageX + 'px')		
	            .style('top', d3.event.pageY + 'px')
	            .style('position', 'absolute')
	            .style('pointer-events', 'none');
	        
	    },
	    mouseout: () => {
	        d3.selectAll('.outputValueTooltipHolder')
	            .transition()
	            .style('opacity', 0)
	            .remove();
	    }
	};

	function createEdge(svgSelection){
		return svgSelection.select(".edgesGroup")
			.append("path")
			.attr("stroke-width", "0.5%")
			.attr("stroke", "black")
			.attr("marker-end", "url(#arrowEnd)") //"url(#circleEnd)")
			.style('fill', 'none')
	}
	function positionEdge(edgeSelection, x1,y1, x2,y2){
		const xBetween = Math.min(x1,x2) + (Math.abs(x2-x1) / 2);
		edgeSelection
			.attr('d', `M${x1},${y1} C${xBetween},${y1} ${xBetween},${y2} ${x2},${y2}`);
	}




	const portDragBehavior = d3.drag()
	    .on("start", function(d){
	    	//d3.event.sourceEvent.stopPropagation()
	    	this.__dragCache = {
	    		isOutgoing: null,
	    		relativePosition: null,
	    		edgeElement: null,
	    		setPosition: null,
	    		mouseEnterAction: null,
	    		mouseLeaveAction: null
	    	};
	    	let cache = this.__dragCache;

	    	cache.isOutgoing = this.parentElement.matches(".nodeOutPort");
	    	cache.relativePosition = relativeTransform(this, ".drawCanvas");
	    	cache.edgeElement = createEdge(d3.select(this.ownerSVGElement));

	    	const startPos = cache.relativePosition([+this.getAttribute("cx"), +this.getAttribute("cy")]);
	    	if(cache.isOutgoing){
	    		cache.setPosition = endPos => positionEdge(cache.edgeElement, ...startPos, ...endPos);
	    	}else{
	    		cache.setPosition = endPos => positionEdge(cache.edgeElement, ...endPos, ...startPos);
	    	}
	    	cache.setPosition(startPos);

	    	const nodeContainer = this.parentElement.parentElement.parentElement,
	    	mouseEnterFn = nodeContainer.__on.find(({type}) => type=='mouseenter').value,
	    	mouseLeaveFn = nodeContainer.__on.find(({type}) => type=='mouseleave').value;
	    	cache.mouseEnterAction = () => mouseEnterFn(nodeContainer, true);
	    	cache.mouseLeaveAction = () => mouseLeaveFn(nodeContainer, true);
		})
	    .on("drag", function(d){
	    	const cache = this.__dragCache,
	    	currentPos = cache.relativePosition([d3.event.x, d3.event.y]);
	    	cache.setPosition(currentPos);
	    	cache.mouseEnterAction();
		})
	    .on("end", function(d){
	    	const cache = this.__dragCache;
	    	cache.mouseLeaveAction();
	    	const lastPort = this.ownerSVGElement.__data__.lastPortHovered;
	    	const portType = e => e.parentElement.className.baseVal;
	    	const edge = cache.isOutgoing? [this, lastPort] : [lastPort, this];
	    	const alreadyIngoing = () => {
	    		const inGoing = edge[1];
				const inContainer = inGoing.closest('.nodeContainer');
				const inName = inContainer.__data__.vertexName;
	    		const edgeElements = inGoing.ownerSVGElement.__data__.graphStructure.getIncidentEdgeElements(inName);
	    		return edgeElements.some(e => {
	    			const {node, index} = e.__data__.edgeRelation.to;
	    			return node === inContainer && index === inGoing.__data__.index
	    		})
	    	};
			if(lastPort === undefined ||
				portType(lastPort) === portType(this) ||
	    		this.parentElement.parentElement === lastPort.parentElement.parentElement || 
	    		alreadyIngoing()){
	    		cache.edgeElement.remove();
	    	} else {
		    	finalizeEdge(edge, cache.edgeElement, true);
	    	}
	    	delete(this.__dragCache);
	    });

	function finalizeEdge(edge, edgeElement, runDebug){
		const updatePositionFn = edgeEle => () => {
			const [vin,vout] = edge,
			fromC = [+vin.getAttribute("cx"), +vin.getAttribute("cy")],
			from = relativeTransform(vin, ".drawCanvas")(fromC),
			toC = [+vout.getAttribute("cx"), +vout.getAttribute("cy")],
			to = relativeTransform(vout, ".drawCanvas")(toC);
			positionEdge(d3.select(edgeEle), ...from, ...to);
		};
		edgeElement
			.datum(function(){
	    		const updatePosition = updatePositionFn(this);
	    		const getContainer = e => e.closest('.nodeContainer'),
				nodes = edge.map(getContainer),
				nodeNames = nodes.map(e => e.__data__.vertexName),
	    		edgeRelation = {
	    			from: 	{node: nodes[0], index: edge[0].__data__.index},
	    			to: 	{node: nodes[1], index: edge[1].__data__.index}
	    		};
	    		// update edge position and register edge
	    		updatePosition();
	    		this.ownerSVGElement.__data__.graphStructure.addEdge(this, ...nodeNames);
	    		return {updatePosition, edgeRelation}
			})
			.transition().attr("stroke-width", "0.25%");
		edgeElement.on('mouseover', function(){
			valueHover.mouseover(this);
			d3.select(this).transition()
					.attr("stroke-width", "1.5%").duration(100);
		});
		edgeElement.on('mouseout', function(){
			valueHover.mouseout();
			d3.select(this).transition()
					.attr("stroke-width", "0.25%").duration(100);
		});
		function removeEdge(edgeEle){
			const getName = ft => edgeEle.__data__.edgeRelation[ft].node.__data__.vertexName;
			const [from, to] = ['from', 'to'].map(getName);
			const {graphStructure} = edgeEle.ownerSVGElement.__data__;
			graphStructure.deleteEdge(from, to)
				.filter(ele => ele !== edgeEle)
				.forEach(ele => graphStructure.addEdge(ele, from, to));
			edgeEle.ownerSVGElement.__data__.debugModule();
			edgeEle.remove();
		}
		edgeElement.on('click', function(){
			d3.event.stopPropagation();
			removeEdge(this);
			valueHover.mouseout();
		});
		if(runDebug){edgeElement.each(function(){
			try{this.ownerSVGElement.__data__.debugModule();}
			catch(e){
				if(e.metaDataIdentifier === 'cyclic_graph'){
					removeEdge(this);
					alert('Edge created cycle; edge was deleted.');
				}
			}
		});}
	}

	// position ports
	function scaleAndTranslatePorts(nodeContainerSelection){
		const pd = (a,b) => b==0? 1 : a/b;
		nodeContainerSelection.each(function(){
			const container = this,
			body = d3.select(container).select(".nodeBody").node(),
			bodyW = +body.getAttribute("width"),
			bodyH = +body.getAttribute("height"),
			inPort = d3.select(container).select(".nodeInPort").node(),
			outPort = d3.select(container).select(".nodeOutPort").node(),
			inBbox = inPort.getBBox(),
			outBbox = outPort.getBBox();
			// transform .nodeInPort
			const inScaleX = pd(bodyW, inBbox.width),
			inScaleY = Math.min(inScaleX, pd(bodyH, inBbox.height)),
			inTransY = (bodyH + inBbox.height) / inScaleY;
			d3.select(inPort)
				.attr("transform", `scale(${[inScaleX, inScaleY]})translate(0,${inTransY})`);
			// transform .nodeOutPort
			const outScaleX = pd(bodyW, outBbox.width),
			outScaleY = Math.min(outScaleX, pd(bodyH, outBbox.height)),
			outTransY = -1 * outBbox.height;
			d3.select(outPort)
				.attr("transform", `scale(${[outScaleX, outScaleY]})translate(0,${outTransY})`);
		});
	}

	// add node ports
	function giveNodePorts(nodeContainer, nInPorts, nOutPorts, runDebug=true){
		// make the circles
		const inPort = nodeContainer.select(".nodeInPort");
		inPort.selectAll('*').remove();
		const inCircles = makeSVGCircles(inPort, nInPorts);
		const outPort = nodeContainer.select(".nodeOutPort");
		outPort.selectAll('*').remove();
		const outCircles = makeSVGCircles(outPort, nOutPorts);
		// stylize circles, add dragging and mouseover behavior
		inCircles
			.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
			.call(portDragBehavior)
			.on("mouseover", function(){this.ownerSVGElement.__data__.lastPortHovered = this;});
		outCircles
			.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
			.call(portDragBehavior)
			.on("mouseover", function(){
				this.ownerSVGElement.__data__.lastPortHovered = this;
				valueHover.mouseover(this);
			})
			.on("mouseout", valueHover.mouseout);
		nodeContainer.call(scaleAndTranslatePorts);
		// remove old edge elements, add preexisting edge relations
		nodeContainer.each(function(){
			const container = this;
			const {graphStructure, moduleMetaData} = container.ownerSVGElement.__data__;
			if(moduleMetaData.inputNode === container){
				for(let i=0;i<nOutPorts;i++){
					const name = `INPUT_${i}`;
					if(!moduleMetaData.inputDescriptions.hasOwnProperty(name)){
						moduleMetaData.inputDescriptions[name] = {
							selectedType: "tensor", shape: [], dtype: "float32", JSONtext: ""};
					}
				}
			}
			const edges = graphStructure.getIncidentEdgeElements(container.__data__.vertexName);
			const edgeRelations = edges.map(e => e.__data__.edgeRelation);
			const getName = v => v.__data__.vertexName;
			edgeRelations.forEach(({from,to}) => graphStructure.deleteEdge(getName(from.node), getName(to.node)));
			edges.forEach(e => e.remove());
			edgeRelations.forEach(({from,to}) => {
				if(to.node === container && to.index >= nInPorts){ return; }
				if(from.node === container && from.index >= nOutPorts){ return; }
				const edgeElement = createEdge(d3.select(container.ownerSVGElement));
				const circleOut = graphStructure.V[getName(from.node)].querySelector('.nodeOutPort').children[1+from.index];
				const circleIn = graphStructure.V[getName(to.node)].querySelector('.nodeInPort').children[1+to.index];
				finalizeEdge([circleOut, circleIn], edgeElement, false);
			});
			if(runDebug){ container.ownerSVGElement.__data__.debugModule(); }
		});
		return {inCircles, outCircles}
	}

	/**
	 * 
	 * @param {String} fromValRef of the form `node:index` 
	 * @param {String} toValRef of the form `node:index`  
	 * @param {boolean} debug whether to run debug or not 
	 */
	function addEdge(fromValRef, toValRef, debug=false){
		const {svgElement} = this;
		let [from, fromI] = fromValRef.split(':');
		from = svgElement.__data__.graphStructure.V[from];
		fromI = parseInt(fromI);
		let [to, toI] = toValRef.split(':');
		to = svgElement.__data__.graphStructure.V[to];
		toI = parseInt(toI);
		const edgeEle = createEdge(d3.select(svgElement));
		{
			const nOut = from.querySelector('.nodeOutPort').childElementCount-1;
			if(nOut <= fromI){
				const nIn = from.querySelector('.nodeInPort').childElementCount-1;
				giveNodePorts(d3.select(from), nIn, fromI+1, debug);
			}
		}
		{
			const nIn = to.querySelector('.nodeInPort').childElementCount-1;
			if(nIn <= toI){
				const nOut = to.querySelector('.nodeOutPort').childElementCount-1;
				giveNodePorts(d3.select(to), toI+1, nOut, debug);
			}
		}
		const fromCirc = from.querySelector('.nodeOutPort').children[fromI+1];
		const toCirc = to.querySelector('.nodeInPort').children[toI+1];
		finalizeEdge([fromCirc, toCirc], edgeEle, debug);
	}

	// node drag behavior
	const __nodeOnDrag = function(ele){
		ele.__dragCache.mouseLeaveAction(ele);
		const nodeBody = d3.select(ele).select(".nodeBody").node(),
		{width, height} = nodeBody.getBBox(),
		[cx,cy] = [d3.event.x - (width / 2), d3.event.y - (height / 2)];
		d3.select(ele).attr("transform", `translate(${cx},${cy})`);
		ele.ownerSVGElement.__data__.graphStructure
			.getIncidentEdgeElements(ele.__data__.vertexName)
			.forEach(e => e.__data__.updatePosition());
	};
	const nodeDragBehavior = d3.drag()
	    .on("start", function(d){
	    	d3.event.sourceEvent.stopPropagation();
	    	const mouseLeaveFn = this.__on.find(({type}) => type=='mouseleave').value,
	    	mouseEnterFn = this.__on.find(({type}) => type=='mouseenter').value;
	    	this.__dragCache = {
	    		mouseLeaveAction: ele => mouseLeaveFn(ele, true),
	    		mouseEnterAction: ele => mouseEnterFn(ele, true)
	    	};
	    	__nodeOnDrag(this);
		})
	    .on("drag", function(d){__nodeOnDrag(this);})
	    .on("end", function(d){
	    	__nodeOnDrag(this);
	    	this.__dragCache.mouseEnterAction(this);
	    	delete(this.__dragCache);
	    });

	// add node to SVG
	function addNode(svgSelection, coords, nodeParam, eventHandlers, populateNode, name=undefined){
		// unpack nodeParam and eventHandlers
		const svgScale = Math.min(+svgSelection.node().getAttribute('width'), +svgSelection.node().getAttribute('height')),
		defaultNodeParam = Object.entries({width: 0.12, height: 0.06, rounding: 0.005})
			.reduce((acc,[k,v]) => Object.assign(acc, {[k]: v*svgScale}), {}),
		{width, height, rounding} = Object.assign({}, defaultNodeParam, nodeParam);
		// see ```_nodeEventHandlers``` for the eventHandlers being used
		const defaultEventHandlers = {click: ()=>{}, mouseEnter: ()=>{}, mouseLeave: ()=>{}},
		{click, mouseEnter, mouseLeave} = Object.assign({}, defaultEventHandlers, eventHandlers);
		const [mx, my] = coords;
		// create elements
		const nodeContainer = svgSelection.selectAll(".drawCanvas > .nodesGroup").append("g"),
		nodePorts = nodeContainer.append("g"),
		nodeInPort = nodePorts.append("g"),
		nodeOutPort = nodePorts.append("g"),
		nodeBody = nodeContainer.append("rect"),
		nodeGuts = nodeContainer.append('foreignObject');
		// populate elements and attach event handlers
		nodeContainer
			.classed("nodeContainer", true)
			.attr("transform", `translate(${mx - (width / 2)},${my - (height / 2)})`)
			.on("mouseenter", function(ele, override=false){mouseEnter(override? ele : this);})
			.on("mouseleave", function(ele, override=false){mouseLeave(override? ele : this);})
			.on("click", function(){d3.event.stopPropagation();click(this);})
			.call(nodeDragBehavior)
			.datum(function(){
				const vertexName = this.ownerSVGElement.__data__.graphStructure.addVertex(this, name);
				return {
					vertexName,
					addText: text => addTextToGuts(d3.select(this), text)
				}
			});
		nodePorts.classed("nodePorts", true);
		nodeInPort.classed("nodeInPort", true).style("pointer-events", "all");
		nodeOutPort.classed("nodeOutPort", true).style("pointer-events", "all");
		nodeBody
			.classed("nodeBody", true)
			.attr("width", width)
			.attr("height", height)
			.attr("rx", rounding)
			.attr("ry", rounding);
		nodeGuts
			.classed('nodeGuts', true)
			.style('width', width)
			.style('height', height);
		nodeContainer.each(function({vertexName}){
			// add node's metadata to the graph
			this.ownerSVGElement.__data__.nodeMetaData[vertexName] = {
				op: undefined,
				literal: []
			};
			// focus the sidebar on the newly created node
			this.ownerSVGElement.__data__.sideBarNode(vertexName);
		});
		// upon completion call populateNode callback on node, rescale ports
		if(typeof populateNode === "function"){
			nodeContainer.call(populateNode);
		}
		return nodeContainer
	}

	const _nodeEventHandlers = {
		mouseEnter: ele => {
			const s = d3.select(ele);
			s.select(".nodeGuts")
				.transition().style("opacity", 1);
				//.style('visibility', 'inherit')
			s.select(".nodePorts")
				.transition().style("opacity", 1);
		},
		mouseLeave: ele => {
			/*
			const s = d3.select(ele)
			s.select(".nodeGuts")
				.transition().style("opacity", 0.5)
				//.style('visibility', 'hidden')
			s.select(".nodePorts")
				.transition().style("opacity", 0.5)
			*/
		},
		click: ele => {
			ele.ownerSVGElement.__data__.sideBarNode(ele.__data__.vertexName);
		}
	};
	const _populateNode = container => {
		container
			.call(s => giveNodePorts(s, 0, 0))
			.select(".nodeBody")
				.attr("fill", "#bac5dd")
				.attr("stroke-width", "2px")
				.attr("stroke", "#828a9b");
	};

	const addTextToGuts = (container, text) => {
		container.select('.nodeGuts').html('')
			.append('xhtml:div')
			.style('width', '100%')
			.style('height', '100%')
			.style('display', 'table')
				.append('div')
				.style('display', 'table-cell')
				.style('text-align', 'center')
				.style('vertical-align', 'middle')
				.style('font-weight', '500')
				.text(text);
	};


	function addInputOutputNodes(svgSelection){
		const unscaledNodeParam = {width: 0.25, height: 0.05, rounding: 0.005};
		svgSelection.each(function(){
			const svgEle = this;
			const width = +svgEle.getAttribute('width');
			const height = +svgEle.getAttribute('height');
			const svgScale = Math.min(width, height);
			const nodeParam = Object.entries(unscaledNodeParam)
				.reduce((acc,[k,v]) => Object.assign(acc, {[k]: v*svgScale}), {});
			const xPos = (width/2);
			const bottomYPos = height - (nodeParam.height / 2);
			const topYPos = nodeParam.height/2;
			// input
			const populateInput = container => {
				container
					.call(s => giveNodePorts(s, 0, 1, false))
					.each(function({vertexName}){
						this.ownerSVGElement.__data__.nodeMetaData[vertexName].op = "INPUTS";
					});
				container.select(".nodeBody")
					.attr("fill", "#ebaaea")
					.attr("stroke-width", "2px")
					.attr("stroke", "#897e9f");
				container.call(s => addTextToGuts(s, 'Inputs'));
				svgEle.__data__.moduleMetaData.inputNode = container.node();
			};
			addNode(d3.select(svgEle), [xPos, bottomYPos], nodeParam, _nodeEventHandlers, populateInput, 'Inputs');
			// output
			const populateOutput = container => {
				container
					.call(s => giveNodePorts(s, 1, 0, false))
					.each(function({vertexName}){
						this.ownerSVGElement.__data__.nodeMetaData[vertexName].op = "OUTPUTS";
					});
				container.select(".nodeBody")
					.attr("fill", "#ebaaea")
					.attr("stroke-width", "2px")
					.attr("stroke", "#897e9f");
				container.call(s => addTextToGuts(s, 'Outputs'));
				svgEle.__data__.moduleMetaData.outputNode = container.node();
			};
			addNode(d3.select(svgEle), [xPos, topYPos], nodeParam, _nodeEventHandlers, populateOutput, 'Outputs');
			svgEle.__data__.sideBarNode('Inputs');
		});
	}

	// add click event to SVG for creating nodes
	function addNodes(svg){
		svg.on("click", () => {
			const screenCoord = d3.mouse(d3.event.currentTarget);
			d3.select(d3.event.currentTarget)
				.selectAll(".drawCanvas").each(function(){
					const inverted = inverseRelativeTransform(this, "svg")(screenCoord);
					addNode(svg, inverted, {}, _nodeEventHandlers, _populateNode);
				});
		})
		.call(addInputOutputNodes);
	}

	function addNodeNoGUI(coords, op, literal, name, params={}){
		const {svgElement, nodeMetaData} = this;
		const node = addNode(d3.select(svgElement),
				coords, params, _nodeEventHandlers, _populateNode, name)
			.call(s => addTextToGuts(s, name.startsWith('vertex_')? op : name))
			.each(({vertexName}) => {
				nodeMetaData[vertexName] = {op, literal};
			});
		if(op==='literals'){svgElement.__data__.setNodeColor(name, 'rgba(255,255,255,0.5)');}
		return node
	}

	function valid_C_identifier(str){
		return (z=>z[0]==z['input'])(str.match(/[_a-zA-Z][_a-zA-Z0-9]*/))
	}

	function list_of(arr, constructor){
		return arr.constructor === [].constructor &&
				(arr.length == 0 || arr.every(x => x.constructor === constructor))
	}

	/*
	----------------------------------------------------
	-------------- Taffy Object Constructors -----------
	----------------------------------------------------
	*/


	const constructors = {
		library: function(modules, tensors=[], doc=''){
			if(!list_of(modules, constructors.module)){
				throw('`modules` must be a list of module objects')
			}
			if(typeof tensors !== typeof {}){
				throw('`tensors` must either be an associative array or undefined')
			}

			this.modules = modules; // list of `module` objects
			this.tensors = tensors; // name/tensor pairs (as associative array)
			this.doc = doc; // free-form documentation for the collection of modules
		},

		module: function(name, input, output, nodes, module_import=[], doc=''){
			if((typeof name !== typeof '') || !valid_C_identifier(name)){
				throw('`name` must be a string that is a valid C identifier')
			}
			if(!list_of(input, ''.constructor)){
				throw('`input` must be a list of strings')
			}
			if(!list_of(output, ''.constructor)){
				throw('`output` must be a list of strings')
			}
			if(!list_of(nodes, constructors.node)){
				throw('`nodes` must be a list of node objects')
			}
			if(!list_of(module_import, ''.constructor)){
				throw('`module_import` must be a list of strings')
			}

			// a C identifier unique among primitives and modules in the library
			this.name = name;
			// ordered list of input node names (as string)
			this.input = input;
			// ordered list of output value references
			this.output = output;
			// unordered list of `node` objects
			this.nodes = nodes;
			// list of module names (as strings) to import as operations
			this.module_import = module_import;
			// module's documentation, as an `op_doc` object
			this.doc = doc;
		},

		node: function(name, op, input, literal=[]){
			if((typeof name !== typeof '') || !valid_C_identifier(name)){
				throw('`name` must be a string that is a valid C identifier')
			}
			if(typeof op !== typeof ''){
				throw('`op` must be a string')
			}
			if(!list_of(input, ''.constructor)){
				throw('`input` must be a list of strings')
			}
			const notTensor = n => n.constructor !== constructors.tensor_description;
			if((!(literal.length==0 || literal.every(notTensor)))){
				throw('`literal` must be a list of literals')
			}

			// a valid C identifier, unique among node names in the module
			this.name = name;
			// the identifier of the operation to implement
			this.op = op;
			// an ordered list of input value references
			this.input = input;
			// an ordered list of javascript literals
			this.literal = literal;
		},

		tensor_shape: function(integerVec){
			var shape = integerVec
				.map(x => Number.isSafeInteger(x)? Math.floor(x) : x);

			const entriesOK = shape.every(x => {
				return (typeof x === typeof '' && valid_C_identifier(x)) ||
					Number.isSafeInteger(x)
			});

			if((typeof shape !== typeof []) || !entriesOK){
				throw('`shape` must be a vector of integers or ' +
					'strings that are valid C identifiers')
			}

			this.shape = shape;
		},

		tensor_description: function(shape, dtype, val_ref, op, input, attr){
			if(shape.constructor !== constructors.tensor_shape){
				throw('`shape` must be a tensor_shape object')
			}
			if(typeof dtype !== typeof ''){
				throw('`dtype` must be a string')
			}
			if(typeof val_ref !== typeof ''){
				throw('`val_ref` must be a string')
			}
			if(typeof op !== typeof ''){
				throw('`op` must be a string')
			}
			if(!list_of(input, ''.constructor)){
				throw('`input` must be a list of strings')
			}
			if(typeof attr !== typeof {}){
				throw('`attr` must be an object')
			}

			this.shape = shape.shape;
			this.dtype = dtype;
			this.val_ref = val_ref;
			this.op = op;
			this.input = input;
			this.attr = attr;
		},

		op_doc: function(input, output, doc){
			if(!list_of(input, ''.constructor)){
				throw('`input` must be a list of strings')
			}
			if(!list_of(output, ''.constructor)){
				throw('`output` must be a list of strings')
			}

			this.input = input;
			this.output = output;
			this.doc = doc;
		}

	};

	const {tensor_description, tensor_shape} = constructors;

	const isTensor = obj => obj.constructor === tensor_description;

	const zip = (...arrs) => arrs[0].map((_,i) => arrs.map(a=>a[i]));

	function strideToArray(stride, filter){
		if(Array.isArray(stride)) return stride
		const nDims = filter.shape.length - 2;
		return Array(nDims).fill(stride)
	}

	function getConvOutShape(x, outChannels, filterInDims, stride, padding){
		const batchSize = x.shape.slice(0, 1);
		const middleInDims = x.shape.slice(1, -1);
		let middleOutDims = [];
		if(padding === 'same'){
			middleOutDims = zip(middleInDims, stride)
				.map(([inD, s]) => Math.ceil(inD / s));
		}
		if(padding === 'valid'){
			middleOutDims = zip(middleInDims, filterInDims, stride)
				.map(([inD, f, s]) => Math.ceil((1 + inD - f) / s));
		}
		if(Number.isInteger(+padding)){
			middleOutDims = zip(middleInDims, filterInDims, stride)
				.map(([inD, f, s]) => 1 + ((inD - f + (2 * padding)) / s));
			if(!middleOutDims.every(Number.isInteger)){
				throw({message: 'Invalid output shape (not an integer). ' +
					'Please change the stride or padding.'})
			}
		}
		const resultShape = [].concat(batchSize, middleOutDims, outChannels);
		return new tensor_shape(resultShape)
	}

	function __convolution__desc_func(tensor_trace, node, inputs){
		if(inputs.length < 2) throw({message: 'must take at least two inputs'})
		if(!inputs.slice(0,2).every(isTensor)){
			throw({message: '`x` and `filter` must be tensors'})
		}
		if(inputs[0].shape.length !== inputs[1].shape.length){
			throw({message: `x (rank ${inputs[0].shape.length}) and ` +
				`filter (rank ${inputs[1].shape.length}) must be the same rank`})
		}
		if(inputs[0].shape.length < 3){
			throw({message: '`x` and `filter` must be of rank 3 or greater'})
		}
		if(inputs[0].shape.slice(-1)[0] !== inputs[1].shape.slice(-2)[0]){
			throw({message: 'The second to last dimension of x ' +
				`(shape ${inputs[0].shape}) ` +
				'should equal the last dimension of filter ' +
				`(shape ${inputs[1].shape})`})
		}
		if(inputs[2] !== undefined){
			if(!isNaN(inputs[2])){
				if(!(Number.isInteger(inputs[2]) && inputs[2]>0)){
					const message = 'if `stride` is a number, ' +
						'it must be a positive integer';
					throw({message})
				}
			} else if(Array.isArray(inputs[2])){
				if(inputs[2].length !== (inputs[0].length - 2)){
					throw({message: 'If `stride` is an array, ' +
						'it must have 2 fewer dimensions than `x`'})
				}
				if(!inputs[2].every(n => Number.isInteger(n) && n>0)){
					throw({message: '`stride` must only contain positive integers'})
				}
			}
		}
		if(!(inputs[3] === undefined ||
				inputs[3] === 'same' ||
				inputs[3] === 'valid' ||
				(Number.isInteger(+inputs[3]) && (+inputs[3] >= 0)))){
			const message = '`padding` must either be "same", "valid", ' +
				'or a non-negative integer';
			throw({message})
		}
		const [x, filter] = inputs.slice(0,2),
			stride = strideToArray(inputs[2] || 1, filter),
			padding = inputs[3] || 'same';
		const dtype = x.dtype,
			shape = getConvOutShape(x,
				filter.shape.slice(-1), filter.shape.slice(1, -1),
				stride, padding),
			out = new tensor_description(shape, dtype, node.name+':0',
				'convolution',
				[x.val_ref, filter.val_ref],
				{stride, padding, shape: shape.shape}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}



	const poolGenericDescFunc = opName => (tensor_trace, node, inputs) => {
		if(inputs.length < 1) throw({message: 'must take at least one input'})
		let [x, filterSize, stride, padding] = inputs;
		filterSize = filterSize || 2;
		stride = stride || 1;
		padding = padding || 'valid';
		if(!(isTensor(x) && x.shape.length >= 3)){
			throw({message: 'first input must be a tensor of rank 3 or greater'})
		}
		if(!(Number.isInteger(filterSize) && filterSize>0)){
			throw({message: 'second input must be a positive integer'})
		}
		if(!(Number.isInteger(stride) && stride>0)){
			throw({message: 'third input must be a positive integer'})
		}
		if(!(padding === 'same' || padding === 'valid')){
			throw({message: 'fourth input must be "same" or "valid"'})
		}
		const vec = int => Array(x.shape.length).fill(int);
		const dtype = x.dtype;
		const shape = getConvOutShape(x, x.shape.slice(-1),
			vec(filterSize), vec(stride), padding);
		const out = new tensor_description(shape, dtype, node.name+':0',
			opName,
			[x.val_ref],
			{filterSize, stride, padding, shape: shape.shape});
		const results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	};

	const __max_pool__desc_func = poolGenericDescFunc('max_pool');
	const __avg_pool__desc_func = poolGenericDescFunc('avg_pool');

	const {op_doc} = constructors;

	function executeModule(moduleName, inputs, parentArgs, prefix){
		const [tensor_trace, , , collections, modules] = parentArgs;
		const module = modules[moduleName];
		let valueTrace = module.input.map(s=>prefix+s+':0').reduce((acc,k,i) =>
			Object.assign(acc, {[k]:inputs[i]}), {});
		module.nodes.forEach(nodeOrig => {
			const node = Object.assign({}, nodeOrig, {name: prefix+nodeOrig.name});
			if(node.op === 'placeholder'){return}
			const fn = nodeIn => primitives[node.op]
				.desc_function(tensor_trace, node,nodeIn, collections, modules);
			const fnOut = fn(node.input.map(ref => valueTrace[prefix+ref]));
			Object.assign(valueTrace, fnOut);
		});
		const result = module.output.map(s=>prefix+s).reduce((acc, k) =>
			Object.assign(acc, {[k]:valueTrace[k]}), {});
		return result
	}

	function assertListOfArrays(inputs){
		if(!inputs.every(a => Array.isArray(a))){
			throw({message: 'inputs must be arrays'})
		}
	}

	const makeOpFn = (op, args) => {
		const [tensor_trace, node, , colls, modules] = args;
		if(primitives.hasOwnProperty(op)){
			let counter = 0;
			return inputs => {
				const name = `${node.name}/ITERATION_${counter++}`;
				const newNode = Object.assign({}, node, {name});
				return primitives[op].desc_function(
					tensor_trace, newNode, inputs, colls, modules)
			}
		} else if(modules.hasOwnProperty(op)){
			let counter = 0;
			return inputs => executeModule(op, inputs, args,
				`${node.name}/ITERATION_${counter++}/`)
		} else {
			throw({message: `"${op}" is not a primitive or module name`})
		}
	};

	/*
	---------------------------------
	-------------- map --------------
	---------------------------------
	*/
	function __map__desc_func(...args){
		const [, node, inputs] = args;
		const op = node.literal[0];
		const opFn = makeOpFn(op, args);
		assertListOfArrays(inputs);
		if(!inputs.every(a => a.length===inputs[0].length)){
			throw({message: 'inputs must be of same length'})
		}
		const transposed = inputs[0].map((_,i) => inputs.map(r => r[i]));
		const results = transposed.map(opFn).map(o => Object.values(o)[0]);
		return {[`${node.name}:0`]: results}
	}

	const __map__primitive = {
		name: 'map',
		type: 'control',
		desc_function: __map__desc_func,
		doc: new op_doc(['...rows'],
			['the result of applying the operation to each column'],
			'maps the specified operation across columns')
	};

	/*
	---------------------------------
	------------- reduce ------------
	---------------------------------
	*/
	function __reduce__desc_func(...args){
		const [, node, inputs] = args;
		const op = node.literal[0];
		const opFn = makeOpFn(op, args);
		if(inputs[0].length==0){return null}
		if(!Array.isArray(inputs[0])){
			throw({message: 'First input must be an array'})
		}
		const getFirst = o => Object.values(o)[0];
		const reducer = (a,b) => getFirst(opFn([a,b]));
		const results = inputs.length==1? inputs[0].reduce(reducer) :
			inputs[0].reduce(reducer, inputs[1]);
		return {[`${node.name}:0`]: results}
	}

	const __reduce__primitive = {
		name: 'reduce',
		type: 'control',
		desc_function: __reduce__desc_func,
		doc: new op_doc(['array of values', '(optional) initial accumulator'],
			['The resulting accumulator'],
			'Executes the operation along the array, ie f(x3,f(x1,x2)). '+
	        'The operation takes the accumulator as the first argument.')
	};

	/*
	---------------------------------
	----------- reductions ----------
	---------------------------------
	*/
	function __reductions__desc_func(...args){
		const [, node, inputs] = args;
		const op = node.literal[0];
		const opFn = makeOpFn(op, args);
		if(inputs[0].length==0){return {[`${node.name}:0`]:null}}
		if(!Array.isArray(inputs[0])){
			throw({message: 'First input must be an array'})
		}
		const getFirst = o => Object.values(o)[0];
		const reducer = (a,b) => getFirst(opFn([a,b]));
		const fullReductions = (arr, init) => arr.reduce((acc,v) => 
			acc.concat([reducer(acc.slice(-1)[0], v)]), [init]);
		const results = inputs.length>1? fullReductions(...inputs) :
			fullReductions(inputs[0].slice(1), inputs[0][0]);
		return {[`${node.name}:0`]: results}
	}

	const __reductions__primitive = {
		name: 'reductions',
		type: 'control',
		desc_function: __reductions__desc_func,
		doc: new op_doc(['array of values', '(optional) initial accumulator'],
			['An array of the history of the accumulator'],
			'Executes the operation along the array, ie x1, f(x1,x2), '+
	        'f(x3,f(x1,x2)),... .'+
	        'The operation takes the accumulator as the first argument.')
	};

	/*
	---------------------------------
	------------- apply -------------
	---------------------------------
	*/
	function __apply__desc_func(...args){
		const [, node, inputs] = args;
		const op = node.literal[0];
		const opFn = makeOpFn(op, args);
		if(inputs[0].length==0){return {[`${node.name}:0`]:null}}
		if(!Array.isArray(inputs[0])){
			throw({message: 'First input must be an array'})
		}
		const results = opFn(inputs[0]);
		return {[`${node.name}:0`]: Object.values(results)[0]}
	}

	const __apply__primitive = {
		name: 'apply',
		type: 'control',
		desc_function: __apply__desc_func,
		doc: new op_doc(['array of values'],
			['The result of applying the operation to the values'],
			'Executes the operation on the values in the array. ')
	};

	const higherOrderPrimitives = [__map__primitive,
		__reduce__primitive, __apply__primitive, __reductions__primitive];

	const {op_doc: op_doc$1, tensor_description: tensor_description$1, tensor_shape: tensor_shape$1} = constructors;

	/*
	---------------------------------
	---------- helper fns -----------
	---------------------------------
	*/
	const isTensor$1 = v => {
		try {return v.constructor === constructors.tensor_description}
		catch(e){return false}
	};

	const ensureAllTensors = tensors => tensors.forEach((t,i) => {
		if(!isTensor$1(t)){
			let got = '';
			try {
				got = `type "${t.constructor.name}"`;
			} catch(e){ got = '"unknown"'; }
			const message = `argument ${i} is not a tensor, instead got ${got}`;
			throw({message, i, arg: t})
		}
	});

	// TODO: broadcast to most general dtype
	function broadcastDTypes(tensors){
		return tensors[0].dtype
	}

	function broadcastShapes(tensors){
		const rank = Math.max(...tensors.map(t=>t.shape.length)),
			shapes = tensors
				.map(t => Array(rank-t.shape.length).fill(1).concat(t.shape)),
			res_shape = Array(rank).fill().map((_, i) => {
				const dims = shapes.map(s => s[i]),
					symbols = [...new Set(dims.filter(isNaN))],
					numbersNotOne = [...new Set(dims.filter(x=>!isNaN(x) && x!=1))];
				if(numbersNotOne.length > 1){
					const message = 'tensors are not broadcastable along ' +
						`dimension ${i}, with values ${dims}`;
					throw({message, metaData: {dims, i},
						metaDataIdentifier: 'not_broadcastable'})	
				}
				if(symbols.length > 1){
					const message = 'symbolic dimensions are broadcastable, '+
						`along dimension ${i}, with values ${dims}`;
					throw({message, metaData: {dims, i},
						metaDataIdentifier: 'not_broadcastable'})	
				}
				if(symbols.length == 1){
					return numbersNotOne.length == 0? symbols[0] : numbersNotOne[0]
				}
				return numbersNotOne.length == 0? 1 : numbersNotOne[0]
			}),
			res_dtype = broadcastDTypes(tensors);
		if(!tensors.every(t => t.dtype == res_dtype)){
			throw({message: 'tensors are of different dtypes'})
		}
		return {shape: new tensor_shape$1(res_shape), dtype: res_dtype}
	}


	/*
	---------------------------------
	---------- placeholder  ---------
	---------------------------------
	*/
	const __placeholder__primitive = {
		name: 'placeholder',
		type: 'placeholder',
		desc_function: function(){
			throw({message: 'The placeholder desc_function shouldn\'t be called!'})
		},
		doc: new op_doc$1([],
			['Any value supplied to the placeholder'],
			'Forwards a single supplied value. Takes no inputs.')
	};


	/*
	---------------------------------
	------------- relu  -------------
	---------------------------------
	*/
	function __relu__desc_func(tensor_trace, node, tensors){
		if(tensors.length<1) throw({message: 'must take >=1 tensors'})
		ensureAllTensors(tensors);
		const results = tensors.reduce((acc, tensor, i) => {
			const shape = new tensor_shape$1(tensor.shape),
				dtype = tensor.dtype,
				val_ref = node.name + ':' + i,
				out = new tensor_description$1(shape, dtype, val_ref, 'relu',
					[tensor.val_ref], {});
			return Object.assign(acc, {[val_ref]: out})
		}, {});
		Object.assign(tensor_trace, results);
		return results
	}

	const __relu__primitive = {
		name: 'relu',
		type: 'tensor',
		desc_function: __relu__desc_func,
		doc: new op_doc$1(['tensor'], ['ReLU, ie f(x)=max(0,x)'],
			'ReLU activation function')
	};


	/*
	---------------------------------
	------------ sigmoid  -----------
	---------------------------------
	*/
	function __sigmoid__desc_func(tensor_trace, node, tensors){
		if(tensors.length<1) throw({message: 'must take >=1 tensors'})
		ensureAllTensors(tensors);
		const results = tensors.reduce((acc, tensor, i) => {
			const shape = new tensor_shape$1(tensor.shape),
				dtype = tensor.dtype,
				val_ref = node.name + ':' + i,
				out = new tensor_description$1(shape, dtype, val_ref, 'sigmoid',
					[tensor.val_ref], {});
			return Object.assign(acc, {[val_ref]: out})
		}, {});
		Object.assign(tensor_trace, results);
		return results
	}

	const __sigmoid__primitive = {
		name: 'sigmoid',
		type: 'tensor',
		desc_function: __sigmoid__desc_func,
		doc: new op_doc$1(['tensor'], ['sigmoid of input'],
			'sigmoid activation function')
	};


	/*
	---------------------------------
	------------- tanh  -------------
	---------------------------------
	*/
	function __tanh__desc_func(tensor_trace, node, tensors){
		if(tensors.length<1) throw({message: 'must take >=1 tensors'})
		ensureAllTensors(tensors);
		const results = tensors.reduce((acc, tensor, i) => {
			const shape = new tensor_shape$1(tensor.shape),
				dtype = tensor.dtype,
				val_ref = node.name + ':' + i,
				out = new tensor_description$1(shape, dtype, val_ref, 'tanh',
					[tensor.val_ref], {});
			return Object.assign(acc, {[val_ref]: out})
		}, {});
		Object.assign(tensor_trace, results);
		return results
	}

	const __tanh__primitive = {
		name: 'tanh',
		type: 'tensor',
		desc_function: __tanh__desc_func,
		doc: new op_doc$1(['tensor'], ['tanh of input'], 'tanh activation function')
	};


	/*
	---------------------------------
	-------------- exp  -------------
	---------------------------------
	*/
	function __exp__desc_func(tensor_trace, node, tensors){
		if(tensors.length!==1) throw({message: 'must take 1 tensor'})
		ensureAllTensors(tensors);
		const tensor = tensors[0],
			shape = new tensor_shape$1(tensor.shape),
			dtype = tensor.dtype,
			out = new tensor_description$1(shape, dtype, node.name+':0', 'exp',
				[tensor.val_ref], {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __exp__primitive = {
		name: 'exp',
		type: 'tensor',
		desc_function: __exp__desc_func,
		doc: new op_doc$1(['tensor'], ['elementwise exp, ie f(x)=e^x'],
			'exponential function, ie f(x)=e^x')
	};


	/*
	---------------------------------
	-------------- abs  -------------
	---------------------------------
	*/
	function __abs__desc_func(tensor_trace, node, tensors){
		if(tensors.length!==1) throw({message: 'must take 1 tensor'})
		ensureAllTensors(tensors);
		const tensor = tensors[0],
			shape = new tensor_shape$1(tensor.shape),
			dtype = tensor.dtype,
			out = new tensor_description$1(shape, dtype, node.name+':0', 'abs',
				[tensor.val_ref], {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __abs__primitive = {
		name: 'abs',
		type: 'tensor',
		desc_function: __abs__desc_func,
		doc: new op_doc$1(['tensor'], ['elementwise absolute value, ie f(x)=|x|'],
			'abs value function, ie f(x)=|x|')
	};


	/*
	---------------------------------
	------------- negate  -----------
	---------------------------------
	*/
	function __negate__desc_func(tensor_trace, node, tensors){
		if(tensors.length!==1) throw({message: 'must take 1 tensor'})
		ensureAllTensors(tensors);
		const tensor = tensors[0],
			shape = new tensor_shape$1(tensor.shape),
			dtype = tensor.dtype,
			out = new tensor_description$1(shape, dtype, node.name+':0', 'negate',
				[tensor.val_ref], {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __negate__primitive = {
		name: 'negate',
		type: 'tensor',
		desc_function: __negate__desc_func,
		doc: new op_doc$1(['tensor'], ['negation, ie f(x)=-x'],
			'negation function, ie f(x)=-x')
	};


	/*
	---------------------------------
	------------- sqrt  -------------
	---------------------------------
	*/
	function __sqrt__desc_func(tensor_trace, node, tensors){
		if(tensors.length!==1) throw({message: 'must take 1 tensor'})
		ensureAllTensors(tensors);
		const tensor = tensors[0],
			shape = new tensor_shape$1(tensor.shape),
			dtype = tensor.dtype,
			out = new tensor_description$1(shape, dtype, node.name+':0', 'sqrt',
				[tensor.val_ref], {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __sqrt__primitive = {
		name: 'sqrt',
		type: 'tensor',
		desc_function: __sqrt__desc_func,
		doc: new op_doc$1(['tensor'], ['elementwise square root'],
			'square root function')
	};


	/*
	---------------------------------
	------------- matmul  -----------
	---------------------------------
	*/
	function __matmul__desc_func(tensor_trace, node, tensors){
		if(tensors.length!=2) throw({message: 'must take 2 tensors'})
		ensureAllTensors(tensors);
		if(tensors[0].dtype !== tensors[1].dtype){
			throw({message: 'tensors are of different dtypes'})
		}
		if(!tensors.every(t => t.shape.length >= 2)){
			throw({message: 'tensors must be of rank >=2'})
		}
		if(tensors[0].shape.length !== tensors[1].shape.length){
			throw({message: 'tensors are of different rank'})
		}
		if(!isNaN(tensors[0].shape.slice(-1)[0]) && 
			!isNaN(tensors[1].shape.slice(-2)[0]) && 
			tensors[0].shape.slice(-1)[0] !== tensors[1].shape.slice(-2)[0]){
			throw({message: 'shapes don\'t match (dimension -1 != dimension -2)'})
		}
		const prefix = tensors[0].shape.slice(0,-2).map((d1,i) => {
				const d2 = tensors[1].shape[i];
				if(!isNaN(d1) && !isNaN(d2)){
					if(d1!=d2){
						const message = 'tensors are not broadcastable '+
							`along dimension ${i}, with values ${[d1, d2]}`;
						throw({message, metaData: {dims: [d1,d2], i},
							metaDataIdentifier: 'not_broadcastable'})	
					}
					return d1
				}
				if(isNaN(d1) && isNaN(d2)) return d1
				return isNaN(d1)? d1 : d2
			}),
			d1 = tensors[0].shape.slice(-2)[0],
			d2 = tensors[1].shape.slice(-1)[0],
			shape = new tensor_shape$1(prefix.concat([d1,d2])),
			dtype = tensors[0].dtype,
			out = new tensor_description$1(shape, dtype, node.name+':0', 'matmul',
				tensors.map(t => t.val_ref), {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __matmul__primitive = {
		name: 'matmul',
		type: 'tensor',
		desc_function: __matmul__desc_func,
		doc: new op_doc$1(['tensor 1', 'tensor 2'],
			['matrix multiplication of tensors'],
			'matrix multiplication of tensors')
	};


	/*
	---------------------------------
	-------------- add  -------------
	---------------------------------
	*/
	function __add__desc_func(tensor_trace, node, tensors){
		if(tensors.length==0) throw({message: 'must take n>=1 tensors'})
		ensureAllTensors(tensors);
		const {shape, dtype} = broadcastShapes(tensors),
			out = new tensor_description$1(shape, dtype, node.name+':0', 'add',
				tensors.map(t => t.val_ref), {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __add__primitive = {
		name: 'add',
		type: 'tensor',
		desc_function: __add__desc_func,
		doc: new op_doc$1(['...tensor values'], ['sum of tensors'],
			'variadic function that adds n>=1 tensors')
	};


	/*
	---------------------------------
	----------- subtract  -----------
	---------------------------------
	*/
	function __subtract__desc_func(tensor_trace, node, tensors){
		if(tensors.length!==2) throw({message: 'must take 2 tensors'})
		ensureAllTensors(tensors);
		const {shape, dtype} = broadcastShapes(tensors),
			out = new tensor_description$1(shape, dtype, node.name+':0', 'subtract',
				tensors.map(t => t.val_ref), {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __subtract__primitive = {
		name: 'subtract',
		type: 'tensor',
		desc_function: __subtract__desc_func,
		doc: new op_doc$1(['tensor 1', 'tensor 2'],
			['element-wise subtraction of tensors'],
			'subtracts 2 tensors element-wise')
	};


	/*
	---------------------------------
	------------ multiply  ----------
	---------------------------------
	*/
	function __multiply__desc_func(tensor_trace, node, tensors){
		if(tensors.length==0) throw({message: 'must take n>=1 tensors'})
		ensureAllTensors(tensors);
		const {shape, dtype} = broadcastShapes(tensors),
			out = new tensor_description$1(shape, dtype, node.name+':0', 'multiply',
				tensors.map(t => t.val_ref), {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __multiply__primitive = {
		name: 'multiply',
		type: 'tensor',
		desc_function: __multiply__desc_func,
		doc: new op_doc$1(['...tensor values'],
			['element-wise product of tensors'],
			'variadic function that multiplies n>=1 tensors element-wise')
	};


	/*
	---------------------------------
	------------- divide  -----------
	---------------------------------
	*/
	function __divide__desc_func(tensor_trace, node, tensors){
		if(tensors.length!==2) throw({message: 'must take 2 tensors'})
		ensureAllTensors(tensors);
		const {shape, dtype} = broadcastShapes(tensors),
			out = new tensor_description$1(shape, dtype, node.name+':0', 'divide',
				tensors.map(t => t.val_ref), {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __divide__primitive = {
		name: 'divide',
		type: 'tensor',
		desc_function: __divide__desc_func,
		doc: new op_doc$1(['tensor 1', 'tensor 2'],
			['element-wise division of tensors'],
			'divides 2 tensors element-wise')
	};


	/*
	---------------------------------
	-------------- pow  -------------
	---------------------------------
	*/
	function __pow__desc_func(tensor_trace, node, tensors){
		if(tensors.length!==2) throw({message: 'must take 2 tensors'})
		ensureAllTensors(tensors);
		const {shape, dtype} = broadcastShapes(tensors),
			out = new tensor_description$1(shape, dtype, node.name+':0', 'pow',
				tensors.map(t => t.val_ref), {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __pow__primitive = {
		name: 'pow',
		type: 'tensor',
		desc_function: __pow__desc_func,
		doc: new op_doc$1(['tensor 1', 'tensor 2'],
			['The power of tensor 1 to tensor 2'],
			'The power of tensor 1 to tensor 2')
	};


	/*
	---------------------------------
	---------- get_tensor  ----------
	---------------------------------
	*/

	function __get_tensor__desc_func(tensor_trace, node, inputs){
		let [shape, fill, dtype] = inputs;
		if(shape == undefined) throw({message: 'shape must be defined'})
		if(fill == undefined) throw({message: 'fill must be defined'})
		dtype = dtype || 'float32';
		if(isTensor$1(dtype)) { dtype = dtype.dtype; }
		if(isTensor$1(shape)){ shape = shape.shape; }
		try{shape = new tensor_shape$1(shape);}
		catch(e){
			const message = 'Provided shape is not a valid tensor shape. ' +
				'A tensor shape must be a vector of integers or ' +
				'strings that are valid C identifiers.';
			throw({message})
		}
		if(shape.shape.some(x=> typeof(x)===typeof(''))){
			throw({message: 'Shape must not contain symbolic dimensions'})
		}
		const supported_fills = new Set(['ones', 'zeros',
			'normal', 'truncated_normal']);
		if(supported_fills.has(fill)){
			fill = {type: 'symbol', symbol: fill};
		} else if(!isNaN(+fill)){
			fill = {type: 'scalar', val: +fill};
		} else{
			const message = `Fill not supported: "${fill}". ` +
				'Must either be a number (as a string), or one of the following: '+
				[...supported_fills].map(a=>`"${a}"`).join(', ');
			throw({message})
		}
		const out = new tensor_description$1(shape, dtype, node.name+':0',
				'get_tensor', [], {shape, fill, dtype}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __get_tensor__primitive = {
		name: 'get_tensor',
		type: 'tensor',
		desc_function: __get_tensor__desc_func,
		doc: new op_doc$1(['shape, a vector or tensor whose shape will be inherited',
			'fill, one of (number, "ones", "zeros", "normal", "truncated_normal")',
			'(optional) dtype, either undefined, a string, ' +
				'or a tensor whose dtype will be inherited'],
		['tensor'], 'produces a tensor')
	};

	/*
	---------------------------------
	------------- scalar  -----------
	---------------------------------
	*/

	function __scalar__desc_func(tensor_trace, node, inputs){
		let [number, dtype] = inputs;
		dtype = dtype || 'float32';
		const shape = [];
		if(isNaN(+number)){throw({message: 'First input must be a number'})}
		if(typeof(dtype) !== typeof('')){
			throw({message: 'Second input must be a string (or undefined)'})
		}
		return __get_tensor__desc_func(tensor_trace, node, [shape, number, dtype])
	}

	const __scalar__primitive = {
		name: 'scalar',
		type: 'control',
		desc_function: __scalar__desc_func,
		doc: new op_doc$1(['A number', '(optional) dtype'],
			['a scalar tensor'], 'produces a tensor from a scalar')
	};


	/*
	---------------------------------
	----------- variable  -----------
	---------------------------------
	*/
	function __variable__desc_func(tensor_trace, node, inputs, collection_bins){
		if(!(inputs.length === 1 || inputs.length === 2)){
			throw({message: 'must take one or two inputs'})
		}
		let [tensor, collections] = inputs;
		if(!isTensor$1(tensor)) throw({message: 'input #0 must be a tensor'})
		if(tensor.shape.some(x=> typeof(x)===typeof(''))){
			throw({message: 'Tensor must not contain symbolic dimensions'})
		}
		collections = collections || [];
		collections = typeof(collections)===typeof('')? [collections] : collections;
		if(!collections.every(s => typeof(s)===typeof(''))){
			throw({message: 'input #1 must be a string or list of strings'})
		}
		const name = `${node.name}:0`,
			{shape, dtype} = tensor,
			tshape = new tensor_shape$1(shape),
			out = new tensor_description$1(tshape, dtype, name, 'variable',
				[tensor.val_ref], {});
		collections.forEach(bin => {
			if(collection_bins.hasOwnProperty(bin)){
				collection_bins[bin][out.val_ref] = out;
			} else {
				collection_bins[bin] = {[out.val_ref]: out};
			}
		});
		const results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __variable__primitive = {
		name: 'variable',
		type: 'tensor',
		desc_function: __variable__desc_func,
		doc: new op_doc$1(
			['tensor', '(optional) a bin or list of bins to add the tensor to'],
			['tensor'],
			'initializes tensor to provided value')
	};


	/*
	---------------------------------
	----------- identity  -----------
	---------------------------------
	*/
	function __identity__desc_func(tensor_trace, node, inputs){
		return inputs.reduce((a,v,i) => {
			return Object.assign(a, {[node.name+':'+i]: v})
		}, {})
	}

	const __identity__primitive = {
		name: 'identity',
		type: 'control',
		desc_function: __identity__desc_func,
		doc: new op_doc$1(['...inputs'], ['...inputs'], 'forwards inputs, unchanged')
	};



	/*
	---------------------------------
	----------- literals  -----------
	---------------------------------
	*/
	function __literals__desc_func(tensor_trace, node){
		return node.literal.reduce((a,v,i) => {
			return Object.assign(a, {[node.name+':'+i]: v})
		}, {}) 
	}

	const __literals__primitive = {
		name: 'literals',
		type: 'control',
		desc_function: __literals__desc_func,
		doc: new op_doc$1([], ['...literals'], 'forwards literals, unchanged')
	};


	/*
	---------------------------------
	---------- parse_json  ----------
	---------------------------------
	*/
	function __parse_json__desc_func(tensor_trace, node, inputs){
		return inputs.reduce((a,v,i) => {
			try{return Object.assign(a, {[node.name+':'+i]: JSON.parse(v)})}
			catch(e){throw({message:`Couldn't parse JSON literal #${i}, "${v}"`})}
		}, {})
	}

	const __parse_json__primitive = {
		name: 'parse_json',
		type: 'control',
		desc_function: __parse_json__desc_func,
		doc: new op_doc$1(['...inputs (literals)'], ['...inputs'],
			'parses JSON literals')
	};


	/*
	---------------------------------
	------- parse_json_list  --------
	---------------------------------
	*/
	function __parse_json_list__desc_func(tensor_trace, node, inputs){
		if(inputs.length != 1) throw({message: 'must take exactly 1 input'})
		if(typeof(inputs[0])!=='string') throw({message: 'input must be a string'})
		let parsed = '';
		try{parsed = JSON.parse(inputs[0]);}
		catch(e){throw({message:'Couldn\'t parse JSON'})}
		if(!Array.isArray(parsed)) throw({message: 'value is not a list'})
		return parsed
			.reduce((acc,v,i) => Object.assign(acc, {[node.name+':'+i]: v}), {})
	}

	const __parse_json_list__primitive = {
		name: 'parse_json_list',
		type: 'control',
		desc_function: __parse_json_list__desc_func,
		doc: new op_doc$1(['JSON representation of a list'],
			['...parsed entries of list'],
			'parses a JSON representation of a list')
	};




	/*
	---------------------------------
	--------- if statement  ---------
	---------------------------------
	*/
	function __if__desc_func(tensor_trace, node, inputs){
		if(typeof(inputs[0]) === 'boolean'){
			throw({message: 'first argument must be boolean'})
		}
		if(inputs.length != 3) throw({message: 'must take 3 arguments'})
		return {[node.name+':0']: inputs[0]? inputs[1] : inputs[2]}
	}

	const __if__primitive = {
		name: 'if',
		type: 'control',
		desc_function: __if__desc_func,
		doc: new op_doc$1(['boolean', 'value', 'value'], ['one of the values'],
			'forwards one of the values')
	};



	/*
	---------------------------------
	----------- pack_list  ----------
	---------------------------------
	*/
	function __pack_list__desc_func(tensor_trace, node, inputs){
		return {[node.name+':0']: inputs}
	}

	const __pack_list__primitive = {
		name: 'pack_list',
		type: 'control',
		desc_function: __pack_list__desc_func,
		doc: new op_doc$1(['...values'], ['array containing the values'],
			'packs the input values into an array')
	};

	/*
	---------------------------------
	---------- unpack_list  ---------
	---------------------------------
	*/
	function __unpack_list__desc_func(tensor_trace, node, inputs){
		if(!Array.isArray(inputs[0])) throw({message: 'input is not an array'})
		return inputs[0]
			.reduce((acc,v,i)=> Object.assign(acc, {[node.name+':'+i]: v}), {})
	}

	const __unpack_list__primitive = {
		name: 'unpack_list',
		type: 'control',
		desc_function: __unpack_list__desc_func,
		doc: new op_doc$1(['array of values'], ['...values'],
			'unpacks the input values from an array')
	};



	/*
	---------------------------------
	------------ softmax  -----------
	---------------------------------
	*/
	function __softmax__desc_func(tensor_trace, node, inputs){
		if(inputs.length!==1) throw({message: 'must take 1 tensor'})
		ensureAllTensors(inputs);
		const tensor = inputs[0],
			shape = new tensor_shape$1(tensor.shape),
			dtype = tensor.dtype,
			out = new tensor_description$1(shape, dtype, node.name+':0', 'softmax',
				[tensor.val_ref], {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __softmax__primitive = {
		name: 'softmax',
		type: 'tensor',
		desc_function: __softmax__desc_func,
		doc: new op_doc$1(['tensor'], ['softmax of tensor'],
			'applies the softmax function to a tensor')
	};



	/*
	---------------------------------
	------------- log  --------------
	---------------------------------
	*/
	function __log__desc_func(tensor_trace, node, inputs){
		if(inputs.length!==1) throw({message: 'must take 1 tensor'})
		ensureAllTensors(inputs);
		const tensor = inputs[0],
			shape = new tensor_shape$1(tensor.shape),
			dtype = tensor.dtype,
			out = new tensor_description$1(shape, dtype, node.name+':0', 'log',
				[tensor.val_ref], {}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __log__primitive = {
		name: 'log',
		type: 'tensor',
		desc_function: __log__desc_func,
		doc: new op_doc$1(['tensor'], ['natural log of tensor'],
			'applies the natural log function to a tensor')
	};

	/*
	---------------------------------
	---------- reduce_sum  ----------
	---------------------------------
	*/
	function __reduce_sum__desc_func(tensor_trace, node, inputs){
		if(!(inputs.length == 1 || inputs.length == 2)){
			throw({message: 'must take one or two inputs'})
		}
		if(!isTensor$1(inputs[0])){
			throw({message: 'input must be a tensor'})	
		} 
		const tensor = inputs[0],
			default_perm = tensor.shape.map((_,i)=>i),
			axis = !isNaN(inputs[1])? [inputs[1]] :
				[...(new Set(inputs[1] || default_perm))].sort();
		if(!axis.every(x=> !isNaN(x) && 0<=x && x<tensor.shape.length)){
			throw({message: `axis out of bounds: ${axis}`})
		}
		const dtype = tensor.dtype,
			raw_shape = tensor.shape
				.reduce((acc,v,i) => axis.includes(i)? acc : [...acc,v], []),
			shape = new tensor_shape$1(raw_shape),
			out = new tensor_description$1(shape, dtype, node.name+':0', 'reduce_sum',
				[tensor.val_ref], {axis:axis}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __reduce_sum__primitive = {
		name: 'reduce_sum',
		type: 'tensor',
		desc_function: __reduce_sum__desc_func,
		doc: new op_doc$1(['tensor', 'axis; a integer or array of integers'],
			['a scalar'], 'sums a tensor')
	};

	/*
	---------------------------------
	---------- reduce_avg  ----------
	---------------------------------
	*/
	function __reduce_avg__desc_func(tensor_trace, node, inputs){
		if(!(inputs.length == 1 || inputs.length == 2)){
			throw({message: 'must take one or two inputs'})
		}
		if(!isTensor$1(inputs[0])) throw({message: 'input must be a tensor'})
		const tensor = inputs[0],
			default_perm = tensor.shape.map((_,i)=>i),
			axis = !isNaN(inputs[1])? [inputs[1]] :
				[...(new Set(inputs[1] || default_perm))].sort();
		if(!axis.every(x=> !isNaN(x) && 0<=x && x<tensor.shape.length)){
			throw({message: `axis out of bounds: ${axis}`})
		}
		const dtype = tensor.dtype,
			raw_shape = tensor.shape
				.reduce((acc,v,i) => axis.includes(i)? acc : [...acc,v], []),
			shape = new tensor_shape$1(raw_shape),
			out = new tensor_description$1(shape, dtype, node.name+':0', 'reduce_avg',
				[tensor.val_ref], {axis:axis}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __reduce_avg__primitive = {
		name: 'reduce_avg',
		type: 'tensor',
		desc_function: __reduce_avg__desc_func,
		doc: new op_doc$1(['tensor', 'axis; a integer or array of integers'],
			['a scalar'],
			'averages a tensor')
	};

	/*
	---------------------------------
	----------- transpose  ----------
	---------------------------------
	*/
	function __transpose__desc_func(tensor_trace, node, inputs){
		if(!(inputs.length == 1 || inputs.length == 2)){
			throw({message: 'must take one or two inputs'})
		}
		if(!isTensor$1(inputs[0])) throw({message: 'first input must be a tensor'})
		const tensor = inputs[0],
			default_perm = Array(tensor.shape.length).fill()
				.map((_,i)=>i).reverse(),
			default_perm_set = new Set(default_perm),
			perm = inputs[1] || default_perm;
		if(!(default_perm.length==perm.length &&
			perm.every(v => default_perm_set.has(v)))){
			throw({message: 'permutation isn\'t a permutation of 0...n-1, ' +
				`recieved ${perm}`})
		}
		const dtype = tensor.dtype,
			shape = new tensor_shape$1(perm.map(i=>tensor.shape[i])),
			out = new tensor_description$1(shape, dtype, node.name+':0', 'transpose',
				[tensor.val_ref], {perm:perm}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __transpose__primitive = {
		name: 'transpose',
		type: 'tensor',
		desc_function: __transpose__desc_func,
		doc: new op_doc$1(['tensor', 'permutation (optional)'],
			['tensor with permuted dimensions'],
			'permutes the dimensions of tensor according to ' +
			'the supplied permutation')
	};

	/*
	---------------------------------
	------------ one_hot  -----------
	---------------------------------
	*/
	function __one_hot__desc_func(tensor_trace, node, inputs){
		if(inputs.length != 2) throw({message: 'must take two inputs'})
		if(!(isTensor$1(inputs[0]) && inputs[0].shape.length == 1)){
			throw({message: 'first input must be a rank 1 tensor'})
		}
		if(isNaN(inputs[1]) || Math.floor(+inputs[1])<2){
			throw({message: 'second input must be a number >=2'})
		}
		const tensor = inputs[0],
			n_colls = Math.floor(+inputs[1]),
			dtype = tensor.dtype,
			shape = new tensor_shape$1([tensor.shape[0], n_colls]),
			out = new tensor_description$1(shape, dtype, node.name+':0', 'one_hot',
				[tensor.val_ref], {n_colls:n_colls}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __one_hot__primitive = {
		name: 'one_hot',
		type: 'tensor',
		desc_function: __one_hot__desc_func,
		doc: new op_doc$1(['indices (as rank 1 tensor)', 'number of columns'],
			['matrix with one hot vectors as rows'],
			'constructs a matrix where each row is a one hot vector, ' +
			'with n_colls columns and one row for each index')
	};

	/*
	---------------------------------
	------------- cast  -------------
	---------------------------------
	*/
	function __cast__desc_func(tensor_trace, node, inputs){
		if(inputs.length != 2) throw({message: 'must take two inputs'})
		const [tensor, given_dtype] = inputs;
		if(!isTensor$1(tensor)) throw({message: 'first input must be a tensor'})
		if(!(typeof(given_dtype) == 'string' || isTensor$1(given_dtype))){
			throw({message: 'second input must be a string or a tensor'})	
		}
		const dtype = isTensor$1(given_dtype)? given_dtype.dtype : given_dtype,
			shape = new tensor_shape$1(tensor.shape),
			out = new tensor_description$1(shape, dtype, node.name+':0', 'cast',
				[tensor.val_ref], {dtype:dtype}),
			results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __cast__primitive = {
		name: 'cast',
		type: 'tensor',
		desc_function: __cast__desc_func,
		doc: new op_doc$1(['tensor', 'dtype (a string)'],
			['tensor cast as dtype'],
			'casts a tensor to a specified dtype')
	};

	/*
	---------------------------------
	------------ gather  ------------
	---------------------------------
	*/
	function __gather__desc_func(tensor_trace, node, inputs){
		if(!(inputs.length === 2 || inputs.length === 3)){
			throw({message: 'must take two or three inputs'})
		}
		const [tensor, indices] = inputs;
		const axis = inputs[2]? inputs[2] : 0;
		ensureAllTensors(inputs.slice(0,2));
		// checking tensor
		if(tensor.shape.length == 0){
			throw({message: 'first input must not be a scalar'})
		}
		// checking indices
		if(indices.dtype !== 'int32'){
			throw({message: 'second input must have dtype "int32", instead got "'+
				indices.dtype+'"'})
		}
		if(indices.shape.length !== 1){
			throw({message: 'second input must be one dimensional'})
		}
		// checking axis
		if(!(Number.isInteger(axis) && axis>=0 && axis<tensor.shape.length)){
			throw({message: 'third input must be an integer between 0-'+
				tensor.shape.length-1})
		}
		let shape = tensor.shape.slice();
		shape[axis] = indices.shape[0];
		shape = new tensor_shape$1(shape);
		const out = new tensor_description$1(shape, tensor.dtype, node.name+':0',
			'gather', [tensor.val_ref, indices.val_ref], {axis});
		const results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __gather__primitive = {
		name: 'gather',
		type: 'tensor',
		desc_function: __gather__desc_func,
		doc: new op_doc$1(['x', 'indices (1d tensor with dtype "int32")',
			'(optional) axis'],
		['tensor of slices from `x`'],
		'takes slices from `x` along `axis` at the specified `indices`')
	};

	/*
	---------------------------------
	--------- gather_rows  ----------
	---------------------------------
	*/
	function __gather_rows__desc_func(tensor_trace, node, inputs){
		if(inputs.length !== 2){
			throw({message: 'must take two inputs'})
		}
		const [x, colls] = inputs;
		if(!(isTensor$1(x) && x.shape.length>=2)){
			throw({message: 'first input must be a tensor of rank>=2'})
		}
		if(!(isTensor$1(colls) && colls.shape.length==1)){
			throw({message: 'second input must be a tensor of '+
				'rank 1 with dtype "int32"'})
		}
		if(x.shape[0] !== colls.shape[0]){
			throw({message: 'first dimensions must match, '+
				`(${x.shape[0]} != ${colls.shape[0]})`})
		}
		let shape = [x.shape[0], ...x.shape.slice(2)];
		shape = new tensor_shape$1(shape);
		const out = new tensor_description$1(shape, x.dtype, node.name+':0',
			'gather_rows', [x.val_ref, colls.val_ref], {});
		const results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __gather_rows__primitive = {
		name: 'gather_rows',
		type: 'tensor',
		desc_function: __gather_rows__desc_func,
		doc: new op_doc$1(['x', 'indices (1d tensor with dtype "int32")'],
			['tensor of slices from rows of `x` at the provided indices'],
			'takes slices from rows of `x` along at the provided `indices`')
	};

	/*
	---------------------------------
	----------- reshape  ------------
	---------------------------------
	*/
	function __reshape__desc_func(tensor_trace, node, inputs){
		if(inputs.length != 2) throw({message: 'must take two inputs'})
		let [tensor, newShape] = inputs;
		if(!isTensor$1(tensor)) throw({message: 'first input must be a tensor'})
		// checking shape
		newShape = Array.isArray(newShape)? newShape : [newShape];
		const oldSymbols = JSON.stringify(tensor.shape.filter(isNaN).sort());
		const newSymbols = JSON.stringify(newShape.filter(isNaN).sort());
		if(oldSymbols !== newSymbols){
			throw({message: 'Symbolic dimensions did not match.'})
		}
		if(!newShape.filter(x=>!isNaN(x)).every(x=>Number.isInteger(x)&&x>=0)){
			throw({message: 'Dimensions must be nonnegative integers.'})
		}
		const getSize = arr => arr.filter(x=>!isNaN(x)).reduce((a,b) => a*b, 1);
		if(getSize(newShape) !== getSize(tensor.shape)){
			throw({message: 'Sizes do not match'})
		}
		const shapeEncoding = newShape.map(x => !isNaN(x)? x :
			''+tensor.shape.indexOf(x));
		try {
			newShape = new tensor_shape$1(newShape);
		} catch(message){ throw({message}) }
		const out = new tensor_description$1(newShape, tensor.dtype, node.name+':0',
			'reshape', [tensor.val_ref], {shapeEncoding});
		const results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __reshape__primitive = {
		name: 'reshape',
		type: 'tensor',
		desc_function: __reshape__desc_func,
		doc: new op_doc$1(['x', 'shape (array of nonnegative integers)'],
			['`x` reshaped to given `shape`'],
			'reshapes `x` into given shape `shape`')
	};


	/*
	---------------------------------
	---------- js_function  ----------
	---------------------------------
	*/
	function __js_function__desc_func(tensor_trace, node, inputs){
		let fn = undefined;
		let result = undefined;
		try {
			fn = eval(node.literal[0]);
		} catch(e){
			throw({message: 'Could not evaluate function string, '+
				`got error: ${e.toString()}`})
		}
		if(typeof(fn) !== 'function'){
			throw({message: 'Function string did not evaluate to a function, '+
				`instead got type "${typeof(fn)}"`})
		}
		try {
			result = fn(...inputs);
		} catch(e){
			throw({message: `Error in applying function: ${e.toString()}`})
		}
		const resultsArray = Array.isArray(result)? result : [result];
		return resultsArray.reduce((acc, res, i) =>
			Object.assign(acc, {[node.name+':'+i]: res}), {})
	}

	const __js_function__primitive = {
		name: 'js_function',
		type: 'control',
		desc_function: __js_function__desc_func, 
		doc: new op_doc$1(['...arguments'],
			['the outputs of the function applied to the arguments'],
			'applies the function to the arguments, and returns the results')
	};

	/*
	---------------------------------
	-------- get_collection  --------
	---------------------------------
	*/
	function __get_collection__desc_func(tensor_trace, node, inputs, coll_bins){
		const collections = Array.isArray(inputs[0])? inputs[0] : [inputs[0]];
		if(!collections.every(s => typeof(s)===typeof(''))){
			throw({message: 'Input must be a string or list of strings'})
		}
		const dict = collections
			.filter(name => coll_bins.hasOwnProperty(name))
			.map(name => coll_bins[name])
			.reduce((acc, coll) => Object.assign(acc,coll), {});
		const results = {[`${node.name}:0`]: Array.from(Object.values(dict))};
		return results
	}

	const __get_collection__primitive = {
		name: 'get_collection',
		type: 'control',
		desc_function: __get_collection__desc_func,
		doc: new op_doc$1(
			['collection name, or list of names, as strings',
				'...optional control edges'],
			['list of tensors in the specified collections'],
			'finds a list of tensors in the specified collection(s)')
	};

	/*
	---------------------------------
	---------- batch_norm  ----------
	---------------------------------
	*/
	function __batch_norm__desc_func(tensor_trace, node, inputs, coll_bins){
		const tensor = inputs[0];
		if(!isTensor$1(tensor)){throw({message: 'First input must be tensor'})}
		if(tensor.shape.slice(1).some(x=> typeof(x)===typeof(''))){
			throw({message: 'Tensor must not contain symbolic dimensions'+
				' (except for first dimension)'})
		}
		const shape = [1, ...tensor.shape.slice(1)];
		const dtype = tensor.dtype;
		const newNode = ext =>  Object.assign({}, node, {name: node.name+ext});
		const bins = ['trainable', 'batchNorm'];
		const getValue = (name, fill) => {
			const nodeInit = newNode(`/${name}/init`);
			const nodeVar = newNode(`/${name}/variable`);
			const init = Object.values(__get_tensor__desc_func(
				tensor_trace, nodeInit, [shape, fill, dtype]))[0];
			return Object.values(__variable__desc_func(
				tensor_trace, nodeVar, [init, bins], coll_bins))[0]
		};
		const mean = getValue('mean', 0);
		const variance = getValue('variance', 1);
		const scale = getValue('scale', 1);
		const offset = getValue('offset', 0);
		// batch norm
		const newShape = new tensor_shape$1(tensor.shape);
		const valRefs = [tensor, mean, variance, scale, offset].map(t=>t.val_ref);
		const out = new tensor_description$1(newShape, dtype, node.name+':0',
			'batch_norm', valRefs, {});
		const results = {[out.val_ref]: out};
		Object.assign(tensor_trace, results);
		return results
	}

	const __batch_norm__primitive = {
		name: 'batch_norm',
		type: 'tensor',
		desc_function: __batch_norm__desc_func,
		doc: new op_doc$1(['input tensor'], ['normalized tensor'],
			'applies batch normalization to the input')
	};


	/*
	---------------------------------
	--------- convolution  ----------
	---------------------------------
	*/
	const __convolution__primitive = {
		name: 'convolution',
		type: 'tensor',
		desc_function: __convolution__desc_func,
		doc: new op_doc$1(['x', 'filter', '(optional) stride', '(optional) padding'],
			['x convolved with filter'],
			'convolves x with filter')
	};

	/*
	---------------------------------
	----------- max_pool  -----------
	---------------------------------
	*/
	const __max_pool__primitive = {
		name: 'max_pool',
		type: 'tensor',
		desc_function: __max_pool__desc_func,
		doc: new op_doc$1(['x', '(optional) filterSize',
			'(optional) stride', '(optional) padding'],
		['max pooling of x'],
		'applies max pooling to x')
	};

	/*
	---------------------------------
	----------- avg_pool  -----------
	---------------------------------
	*/
	const __avg_pool__primitive = {
		name: 'avg_pool',
		type: 'tensor',
		desc_function: __avg_pool__desc_func,
		doc: new op_doc$1(['x', '(optional) filterSize',
			'(optional) stride', '(optional) padding'],
		['average pooling of x'],
		'applies average pooling to x')
	};


	const primitives = [
		__placeholder__primitive,
		__relu__primitive,
		__sigmoid__primitive,
		__tanh__primitive,
		__exp__primitive,
		__matmul__primitive,
		__add__primitive,
		__multiply__primitive,
		__divide__primitive,
		__identity__primitive,
		__if__primitive,
		__scalar__primitive,
		__literals__primitive,
		__parse_json__primitive,
		__parse_json_list__primitive,
		__pow__primitive,
		__sqrt__primitive,
		__get_tensor__primitive,
		__variable__primitive,
		__pack_list__primitive,
		__unpack_list__primitive,
		__softmax__primitive,
		__log__primitive,
		__reduce_sum__primitive,
		__negate__primitive,
		__transpose__primitive,
		__one_hot__primitive,
		__cast__primitive,
		__reduce_avg__primitive,
		__subtract__primitive,
		__abs__primitive,
		__convolution__primitive,
		__gather__primitive,
		__reshape__primitive,
		__js_function__primitive,
		__get_collection__primitive,
		...higherOrderPrimitives,
		__batch_norm__primitive,
		__gather_rows__primitive,
		__max_pool__primitive,
		__avg_pool__primitive,
	].reduce((a,p)=>Object.assign(a, {[p.name]: p}), {});

	/*
	----------------------------------------------------
	------------------ Topoological Sort ---------------
	----------------------------------------------------
	*/

	function _copy_G(G){ // written in old-school JS for speed
		const keys = Object.keys(G);
		let new_G = {};
		for(let i=0; i<keys.length; i++){
			const key = keys[i];
			new_G[key] = {in: G[key].in.slice()};
		}
		return new_G
	}

	// Gives graph an outdirection, inplace
	function _give_out_direction(G){
		Object.keys(G).forEach(k => G[k].out = []);
		Object.keys(G).forEach(k => {
			G[k].in.forEach(k_in => G[k_in].out.push(k));
		});
	}

	// Kahn's algorithm
	// https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm
	// note that this modifies the graph, G
	function _side_effects_topological_sort(G){
		let L = [],
			S = Object.keys(G).filter(k => G[k].in.length == 0).sort();
		_give_out_direction(G);
		while(S.length > 0){
			let n = S.pop(),
				new_S = [];
			L.push(n);
			for(let i=G[n].out.length-1; i>=0; i--){
				let m = G[n].out[i];
				G[n].out.splice(i,1);
				if(G[m].in.length == 1){
					new_S.push(m);
					G[m].in = [];
				}	
				else{
					G[m].in.splice(G[m].in.indexOf(n),1);
				}
			}
			S.push(...new_S.sort());
		}
		if(!Object.keys(G).every(k=>G[k].in.length==0)) return false
		return L
	}

	function topological_sort(orig_G){
		let G = _copy_G(orig_G);
		return _side_effects_topological_sort(G)
	}


	function find_ancestors(graph, nodes){
		let stack = [...nodes],
			visited = new Set([]);
		while(stack.length > 0){
			const node = stack.pop();
			visited.add(node);
			stack.push(...graph[node].in.filter(p => !visited.has(p)));
		}
		return visited
	}


	function prune_and_topsort(G, nodes){
		const pruned_G = Array.from(find_ancestors(G, nodes))
			.reduce((acc,k) => Object.assign(acc, {[k]: G[k]}), {});
		return topological_sort(pruned_G)
	}


	const _defaultSliceName = s => s.slice(0,s.lastIndexOf(':'));
	function get_init_subgraphs(nodes, output, init_ops,
		slice_name=_defaultSliceName){
		const init_ops_set = new Set(init_ops),
			node_map = nodes.reduce((acc,n)=>Object.assign(acc,{[n.name]:n}), {}),
			walkable = name => !init_ops_set.has(node_map[name].op),
			graph = nodes.reduce((acc,node) => {
				const inputs = node.input.map(slice_name).filter(walkable);
				return Object.assign(acc, {[node.name]: {in: inputs}})
			}, {}),
			output_nodes = output.map(slice_name),
			init_nodes = nodes.filter(n=>init_ops_set.has(n.op)).map(n=>n.name),
			forward_ancestor = find_ancestors(graph, output_nodes),
			init_ancestor = find_ancestors(graph, init_nodes);
		return {init_deps: 	init_ancestor,
			init_nodes: init_nodes,
			forward: 	new Set([...forward_ancestor, ...init_nodes])}
	}

	function pruneTopsortNodes(nodes, outputNames, prune){
		const stripIndices = arr => arr.map(s => s.slice(0,s.lastIndexOf(':'))),
			nodeDict = nodes.reduce((a,n) => Object.assign(a,{[n.name]: n}), {}),
			nodeDeps = nodes.reduce((a,n) => 
				Object.assign(a,{[n.name]: {in: stripIndices(n.input)}}), {});
		const graph = prune?
			prune_and_topsort(nodeDeps, stripIndices(outputNames)) :
			topological_sort(nodeDeps);
		if(graph === false){
			throw({message: 'Graph contains cycle',
				metaDataIdentifier: 'cyclic_graph'})
		}
		return graph.map(k => nodeDict[k])
	}

	// node to module's list of nodes replacement rule
	// args: node object, module object
	// returns: list of node objects
	function nodeToModule(parentNode, module){
		const rename = s => parentNode.name + '/' + s,
			inputToIndex = module.input.reduce(
				(a,name,i) => Object.assign(a,{[name]:i}), {});
		return module.nodes.map(node => {
			const newNode = {
				name: 	rename(node.name),
				input: 	node.input.map(rename),
				op: 	node.op,
				literal: node.literal};
			if(!inputToIndex.hasOwnProperty(node.name)) return newNode
			return Object.assign(newNode,
				{op: 'identity',
					input: [parentNode.input[inputToIndex[node.name]]]})
		}).concat([{name: parentNode.name,
			input: module.output.map(rename),
			op: 'identity', literal: []}])
	}


	/**
	 * Flattens each module in a node such that each module 
	 * only contains primitive operations.
	 * Additionally, it puts each module's nodes in topologically 
	 * sorted order, and nodes that do not contribute to the output 
	 * are optionally pruned.
	 * @param {`taffy library`} library A taffy library
	 * @param {boolean=} prune Whether to prune nodes that 
	 * don't contribute to a module's output
	 * @return {Object<string, Object<string, any>>} Flattened modules
	 */
	function stage_one(library, prune=true){
		// build dependency graph of modules and find topological ordering
		const origModules = library.modules.reduce(
				(a,x) => Object.assign(a, {[x.name]: x}), {}),
			deps = library.modules.reduce(
				(a,x) => Object.assign(a, {[x.name]: {in: x.module_import}}),{}),
			moduleOrder = topological_sort(deps);
		if(moduleOrder === false){throw('Module dependencies contain a cycle')}
		// flatten modules
		const flattened = moduleOrder.reduce((a, modName)=> {
			const modDeps = new Set(deps[modName].in);
			const origMod = origModules[modName];
			const nodes = pruneTopsortNodes(origMod.nodes, origMod.output, prune)
				.map(node => modDeps.has(node.op)?
					nodeToModule(node, a[node.op]) :
					[node])
				.reduce((x,z) => x.concat(z), []);
			return Object.assign(a, {[modName]: {
				name: 	modName,
				input: 	origMod.input,
				output: origMod.output,
				nodes: 	nodes}})
		}, {});
		return {modules: flattened}
	}

	const isShape = v => {
		try {return v.constructor === constructors.tensor_shape}
		catch(e){return false}
	};

	const isTensor$2 = v => {
		try {return v.constructor === constructors.tensor_description}
		catch(e){return false}
	};

	function quasiToTensor(inputDesc){
		return Object.entries(inputDesc).reduce((a,[k,quasi]) => {
			if(!quasi.hasOwnProperty('shape')){
				throw('input description to stage two must have `shape` key')
			}
			if(!quasi.hasOwnProperty('dtype')){
				throw('input description to stage two must have `dtype` key')
			}
			const shape = isShape(quasi.shape)? quasi.shape :
					new constructors.tensor_shape(quasi.shape),
				tensorDesc = new constructors.tensor_description(shape,
					quasi.dtype, k+':0', 'placeholder', [], {});
			return Object.assign(a, {[k+':0']: tensorDesc})
		}, {})
	}

	// inputDescriptions must be a dictionary with
	// the names of inputs as keys and value descriptions as values
	// all value descriptions must be quasi-tensor descriptions,
	// which are objects with shape and dtype

	/**
	 * Evaluates a specified module using description of its input, 
	 * producing a tensor and value trace.
	 * @param {Object<string, Object<string, any>>} stageOneOut The output 
	 * of `stage_on`, which are flattened modules
	 * @param {string} moduleName The name of the module to be compiled
	 * @param {Object<string, Object<string, any>>} inputDescriptions A 
	 * dictionary with `moduleName`'s input names as keys, 
	 * and dictionary with {shape, dtype} as values
	 * @return {Object<string, any>} A dictionary containing a tensor 
	 * and value trace, and other metadata.
	 */
	function stage_two(stageOneOut, moduleName, inputDescriptions){
		let valueTrace = {},
			tensorTrace = {},
			collections = {};
		Object.entries(quasiToTensor(inputDescriptions)).forEach(([valRef, val])=>{
			const pair = {[valRef]: val};
			Object.assign(valueTrace, pair);
			Object.assign(tensorTrace, pair);
		});
		const flatModule = stageOneOut.modules[moduleName],
			inputNames = new Set(flatModule.input);
		flatModule.nodes.forEach(node => {
			if(inputNames.has(node.name)){return} // inputs already recieved traces
			const fn = inputs => primitives[node.op].desc_function(
				tensorTrace, node, inputs, collections, stageOneOut.modules);
			try {
				const fnOut = fn(node.input.map(ref => valueTrace[ref]));
				Object.assign(valueTrace, fnOut);
			} catch(error){ throw {error, node: node.name, valueTrace}}
		});
		const outputs = flatModule.output.map(k => valueTrace[k]);
		outputs.forEach((t, i) => {if(!isTensor$2(t)){
			const message = `Output #${i} of module is not a tensor`,
				metaData = {i, arg:t, valueTrace};
			throw({message,  metaData, metaDataIdentifier: 'output_not_tensor'})
		}});
		return {val_trace: valueTrace,
			tensor_trace: tensorTrace,
			collections,
			output: outputs.map(t=>t.val_ref),
			output_names: flatModule.output,
			name: moduleName,
			input_descriptions: inputDescriptions,
			input_names: flatModule.input}
	}

	const stripIndex = s => s.slice(0,s.lastIndexOf(':'));

	/**
	 * Transforms the graph to only contain tensor and placeholder operations
	 * @param {Object<string, any>} stageTwoOut The output of `stage_two`
	 * @param {boolean} prune Whether to prune nodes that don't 
	 * contribute to a module's output
	 * @return {Object<string, any>} A dictionary containing 
	 * nodes that implement tensor or placeholder operations, 
	 * and other metadata
	 */
	function stage_three(stageTwoOut, prune=true){
		const {tensor_trace, output, output_names} = stageTwoOut,
			depGraph = Object.entries(tensor_trace)
				.reduce((a, [k, v]) => {
					if(a.hasOwnProperty(stripIndex(k))) return a
					const nodeInput = v.input.map(stripIndex);
					return Object.assign(a, {[stripIndex(k)]: {in: nodeInput}})
				}, {}),
			order = prune?
				prune_and_topsort(depGraph, output.map(stripIndex)) :
				topological_sort(depGraph),
			nodesDict = Object.entries(tensor_trace)
				.reduce((a, [k, {op, input, attr}]) => {
					if(a.hasOwnProperty(stripIndex(k))) return a
					return Object.assign(a, {[stripIndex(k)]: {
						name: stripIndex(k),
						op: op, input: input, attr: attr
					}})
				}, {});
		return {nodes: order.map(k => nodesDict[k]),
			output: output,
			output_names: output_names,
			name: stageTwoOut.name,
			stage_two: stageTwoOut}
	}

	const stringify = JSON.stringify;

	function convert_ref(name_map, ref){
		const idx = ref.lastIndexOf(':');
		return name_map[ref.slice(0,idx)] + `[${ref.slice(idx+1)}]`
	}

	function re_ref(unwrapped){
		const {nodes, output} = unwrapped,
			name_map = nodes.reduce(
				(acc,n,i) => Object.assign(acc, {[n.name]: 'n'+i}), {}),
			my_convert_ref = ref => convert_ref(name_map, ref),
			re_reffed_nodes = nodes.map(({name, op, input, attr}) => ({
				name: 	name_map[name],
				input: 	input.map(my_convert_ref),
				op: 	op, 
				attr: 	attr
			})),
			re_reffed_output = output.map(my_convert_ref);
		return {
			re_nodes: 	re_reffed_nodes,
			re_output: 	re_reffed_output,
			name_map: 	name_map,
		}
	}


	function convert_shape(shape){
		return shape.map(c => isNaN(c)? null : c)
	}

	function getInDesc(unwrapped){
		const mapInputDesc = ({dtype, shape}) =>
				({dtype: dtype, shape: convert_shape(shape)}),
			in_desc = unwrapped.stage_two.input_descriptions;
		return Object.entries(in_desc)
			.reduce((acc,[k,v]) => Object.assign(acc, {[k]: mapInputDesc(v)}),{})
	}

	function getOutDesc(unwrapped){
		const tensor_trace = unwrapped.stage_two.tensor_trace,
			simple_tdesc = ({shape, dtype}) =>
				({dtype:dtype, shape:convert_shape(shape)}),
			{output_names} = unwrapped;
		return unwrapped.output
			.reduce((acc,k,i) =>
				Object.assign(acc,
					{[output_names[i]]: simple_tdesc(tensor_trace[k])}),
			{})
	}


	function op_conversion_get_tensor(node){
		const {shape,fill,dtype} = node.attr,
			s_shape = stringify(convert_shape(shape.shape)),
			s_dtype = stringify(dtype);
		let out = '';
		if(fill.type == 'scalar') out = `tf.fill(${s_shape},${fill.val},${s_dtype})`;
		else if(fill.type == 'symbol'){
			out = ({
				'ones': 	`tf.ones(${s_shape},${s_dtype})`,
				'zeros': 	`tf.zeros(${s_shape},${s_dtype})`,
				'normal': 	`tf.randomNormal(${s_shape},0,1,${s_dtype})`,
				'truncated_normal': `tf.truncatedNormal(${s_shape},0,1,${s_dtype})`
			})[fill.symbol];
			if(out===undefined) throw('Unsupported fill symbol')
		}
		else throw('Unsupported fill')
		return `[${out}]`
	}

	function op_conversion_reduce_avg(node){
		const axis = stringify(node.attr.axis),
			denom = `${axis}.map(i => ` +
				`${node.input[0]}.shape[i]).reduce((a,b)=>a*b,1)`,
			scalar = `tf.scalar(${denom})`,
			sum = `tf.sum(${node.input[0]}, ${axis})`,
			final = `[tf.div(${sum}, ${scalar})]`;
		return final
	}

	function op_conversion_add(node){
		return '[' + node.input.slice(1).reduce((a,b) =>
			`tf.add(${a},${b})`, node.input[0]) + ']'
	}

	function op_conversion_mul(node){
		return '[' + node.input.slice(1).reduce((a,b) =>
			`tf.mul(${a},${b})`, node.input[0]) + ']'
	}

	function op_conversion_protected_pow(node){
		const [base, exp] = node.input,
			positiveBase = `${base}.mul(${base}.sign()).add(tf.scalar(1e-8))`,
			// 1 for odd, 0 for even
			expOdd = `tf.round(tf.mod(${exp}, tf.scalar(2)))`,
			// 1 for negative base, 0 otherwise
			baseNegative = `${base}.neg().step(0)`,
			// -1 for odd exp & negative base, 1 otherwise
			negTwoPlusOne = '.mul(tf.scalar(-2)).add(tf.scalar(1))',
			reSign = `${expOdd}.mul(${baseNegative})${negTwoPlusOne}`,
			result = `tf.pow(${positiveBase}, ${exp}).mul(${reSign})`;
		return `[${result}]`
	}

	function convolutionWrapper(node){
		const [x, filter] = node.input,
			{stride, padding, shape} = node.attr;
		const ND = shape.length - 2,
			availConvs = new Set([1, 2]);
		if(!availConvs.has(ND)){
			throw(`${ND}D convolution not yet supported, ` +
				`only (${[...availConvs]})D supported`)
		}
		let result = '';
		if(ND === 1){
			result = `tf.conv1d(${x},${filter},${stride[0]},${stringify(padding)})`;
		}else if(ND === 2){
			result = `tf.conv2d(${x},${filter},` +
				`${stringify(stride)},${stringify(padding)})`;
		}
		return `[${result}]`
	}

	function batchNormConversion(node){
		let [x, ...rest] = node.input;
		rest = rest.map(t => `${t}.gather(tf.zeros([${x}.shape[0]], 'int32'))`);
		return `[tf.batchNormalization(${x}, ${rest.slice(0,2)},0.0001,`+
			`${rest.slice(2)})]`
	}

	function gatherRowsConversion(node){
		const [x, inds] = node.input;
		/* // Should be used when tf.gatherND has gradient function
		const positions = `tf.stack([tf.range(0,${inds}.shape[0])` +
			`.cast(${inds}.dtype),${inds}],1)`
		return `[tf.gatherND(${x}, ${positions})]`
		*/
		const pos = `tf.range(0,${inds}.shape[0]).mul(${x}.shape[1])`+
			`.cast(${inds}.dtype).add(${inds})`;
		return `[${x}.flatten().gather(${pos})]`
	}

	function poolingConversion(op, node){
		const x = node.input[0];
		const {filterSize, stride, padding, shape} = node.attr;
		if(!(shape.length == 3 || shape.length == 4)){
			throw('Pooling only supported for inputs of rank 3 or 4.')
		}
		return `[tf.${op}(${x},${filterSize},${stride},${stringify(padding)})]`
	}

	const opConversionMap = {
		get_tensor: op_conversion_get_tensor,
		placeholder: () => {throw('placeholder shouldn\'t have been called...')},
		variable: node => '[this.variables[this.inverse_name_map[' +
			`${stringify(node.name)}]]]`,
		relu: node => `[${node.input.map(r => `tf.relu(${r})`)}]`,
		sigmoid: node => `[${node.input.map(r => `tf.sigmoid(${r})`)}]`,
		tanh: node => `[${node.input.map(r => `tf.tanh(${r})`)}]`,
		exp: node => `[tf.exp(${node.input[0]})]`,
		matmul: node => `[tf.matMul(${node.input})]`,
		add: op_conversion_add,
		multiply: op_conversion_mul,
		divide: node => `[tf.div(${node.input})]`,
		subtract: node => `[tf.sub(${node.input})]`,
		pow: op_conversion_protected_pow,
		sqrt: node => `[tf.sqrt(${node.input[0]})]`,
		softmax: node => `[tf.softmax(${node.input[0]})]`,
		log: node => `[tf.log(${node.input[0]}.add(tf.scalar(1e-8)))]`,
		reduce_sum: n => `[tf.sum(${n.input[0]}, ${stringify(n.attr.axis)})]`,
		reduce_avg: op_conversion_reduce_avg,
		negate: node => `[tf.scalar(-1).mul(${node.input[0]})]`,
		transpose: n => `[tf.transpose(${n.input[0]}, ` +
			`${stringify(n.attr.perm)})]`,
		one_hot: node => `[tf.oneHot(${node.input[0]}, ${node.attr.n_colls})]`,
		cast: n => `[tf.cast(${n.input[0]}, ${stringify(n.attr.dtype)})]`,
		abs: node => `[tf.abs(${node.input[0]})]`,
		convolution: convolutionWrapper,
		gather: n => `[tf.gather(${n.input.slice(0,2)},${n.attr.axis})]`,
		reshape: n => `[tf.reshape(${n.input[0]},[${n.attr.shapeEncoding
		.map(x => typeof(x)!=typeof('')? x : n.input[0]+'.shape['+x+']')}])]`,
		batch_norm: batchNormConversion,
		gather_rows: gatherRowsConversion,
		max_pool: n => poolingConversion('maxPool', n),
		avg_pool: n => poolingConversion('avgPool', n),
	};


	function get_variables(re_reffed_nodes, subgraphs){
		const {init_deps, init_nodes} = subgraphs,
			varConversion = node => `[tf.variable(${node.input[0]})]`,
			overriddenOps = Object.assign({}, opConversionMap,
				{variable: varConversion}),
			body = 'const tf = this.tf;' + 
				re_reffed_nodes
					.filter(n => n.op !== 'placeholder')
					.filter(n => init_deps.has(n.name))
					.map(n => `const ${n.name} = ${overriddenOps[n.op](n)};`)
					.join(''),
			map = '{'+init_nodes.map(s =>
				`[this.inverse_name_map[${stringify(s)}]]:${s}[0]`)
				.join(',')+'}',
			expression = `this.tf.tidy(()=>{${body}return ${map};})`;
		return expression
	}

	const check_inputs = function(inputs){
		if(typeof(inputs)!=='object'){throw('`inputs` must be an object')}
		const input_descs = this.input_descriptions;
		Object.entries(input_descs).forEach(([k,v]) => {
			if(!inputs.hasOwnProperty(k)){
				throw(`Inputs must have value for '${k}'.`)
			}
			if(inputs[k].dtype != v.dtype){
				throw(`Incorrect dtype for ${k}. ` +
					`Expected '${v.dtype}', but got '${inputs[k].dtype}'.`)
			}
			if(inputs[k].shape.length != v.shape.length){
				throw(`Incorrect shape for ${k}. ` +
					`Expected [${v.shape}], but got [${inputs[k].shape}].`)
			}
			if(!v.shape.every((e,i)=>e===null || inputs[k].shape[i]==e)){
				throw(`Incorrect shape for ${k}. ` +
					`Expected [${v.shape}], but got [${inputs[k].shape}].`)
			}
		});
	}.toString().replace(/\r|\n|\t|\s\s+/g, '');

	const inputObjectToInputs = 'const inputs = !Array.isArray(inputObject)? '+
		'inputObject : this.input_names.reduce('+
		'(acc,name,i)=>Object.assign(acc,{[name]:inputObject[i]}),{});';

	function get_forward(unwrapped, re_reffed_nodes,
		input_descs, name_map, subgraphs){
		const input_acquisition = 'const tf = this.tf;' + 
			Object.keys(input_descs).map(k => 
				`const ${name_map[k]} = [inputs["${k}"]];`).join(''),
			body = re_reffed_nodes
				.filter(n => n.op !== 'placeholder')
				.filter(n => subgraphs.forward.has(n.name))
				.map(n => `const ${n.name} = ${opConversionMap[n.op](n)};`)
				.join(''),
			map_innards = unwrapped.output_names
				.map((name,i) => `"${name}":` +
					`${convert_ref(name_map, unwrapped.output[i])}`)
				.join(','),
			inner_tidy = `${input_acquisition}${body}return {${map_innards}};`,
			check_statement = inputObjectToInputs +
				'if(check){this.check_inputs(inputs);}',
			return_statement = `return this.tf.tidy(()=>{${inner_tidy}})`,
			composed_fn = 'function(inputObject, check=true){' +
				`${check_statement}${return_statement}}`;
		return composed_fn
	}

	const optimize = function(inputObject,
		lossName=undefined,
		batch_size=32,
		iterations=100,
		optimizer=undefined,
		check_inputs=true){
		const inputs = !Array.isArray(inputObject)? inputObject :
			this.input_names.reduce((acc,name,i) => 
				Object.assign(acc,{[name]:inputObject[i]}),{});
		const tf = this.tf;
		const available_out = Object.entries(this.output_descriptions)
			.filter(([,{shape}]) => shape.length==0)
			.map(([k,])=>k);
		if(available_out.length==0){
			throw({message: 'there are no scalar outputs, thus no eligible loss'})
		}
		if(available_out.length>1 && lossName === undefined){
			console.log(`Warning: defaulting to "${available_out[0]}" as loss.`);
		}
		const loss = lossName? lossName : available_out[0];
		if(!this.output_descriptions.hasOwnProperty(loss)){
			throw({message: `"${loss}" isn't an output, outputs are ` +
				`${Object.keys(this.output_descriptions)}`})
		}
		if(!available_out.includes(loss)){
			throw({message: 'loss must be a scalar, but is of shape ' +
				stringify(this.output_descriptions[loss])})
		}
		const dataset_size = (Object.values(inputs)[0] || {shape: [0]}).shape[0];
		if(!Object.values(inputs).every(v => v.shape[0] == dataset_size)){
			throw({message: 'input columns are of different lengths'})
		}
		if(check_inputs){this.check_inputs(inputs);}
		const optimizer_obj = (optimizer || tf.train.adam(0.005));
		const loss_history = Array(iterations).fill().map(() => {
			const iteration_loss = +optimizer_obj.minimize(() => {
				/* Ideally we'd use tf.gather to better randomize batches,
				although this somehow messes with training,
				even when using the identity gather (ie when indices=[0,1,...,n-1]).
				For this reason, we're using tf.slice,
				until I can figure out how to resolve the tf.gather problem. */
				let positions = [0, dataset_size];
				if(batch_size < dataset_size){
					const startAvail = (dataset_size - batch_size),
						start = Math.floor(Math.random() * startAvail);
					positions = [start, batch_size];
				}
				const input = Object.entries(inputs).reduce(
					(acc,[k,v])=>Object.assign(acc,{[k]: tf.slice(v,...positions)}),
					{});
				const loss_val = this.forward(input,false)[loss];
				return loss_val;
			}, true).toString().slice(11);
			return iteration_loss;
		});
		return loss_history;
	}.toString().replace(/\r|\n|\t|\s\s+/g, '');

	const inherit_vars = function(donor, donor_path='', reciever_path=''){
		if(typeof(donor_path) != 'string'){
			throw('donor_path must be a string')
		}
		if(typeof(reciever_path) != 'string'){
			throw('reciever_path must be a string')
		}
		Object.entries(donor.variables)
			.filter(([k,]) => k.startsWith(donor_path))
			.map(([k,v]) => [reciever_path + k.slice(donor_path.length), v])
			.filter(([inheritName,]) => this.variables.hasOwnProperty(inheritName))
			.forEach(([inheritName,v]) => {this.variables[inheritName] = v;});
		return this;
	}.toString().replace(/\r|\n|\t|\s\s+/g, '');


	function unwrapped_to_constructor(unwrapped){
		const {re_nodes, re_output, name_map} = re_ref(unwrapped),
			inDesc = getInDesc(unwrapped),
			outDesc = getOutDesc(unwrapped),
			subgraphs = get_init_subgraphs(re_nodes, re_output, ['variable'],
				s => s.slice(0,s.lastIndexOf('['))),
			forwardFn = get_forward(unwrapped, re_nodes,inDesc,name_map,subgraphs),
			passObj = o => `JSON.parse(${stringify(stringify(o))})`,
			collections = Object.entries(unwrapped.stage_two.collections).reduce(
				(acc,[k,v]) => Object.assign(acc,{[k]:Array.from(Object.keys(v))}),
				{});
		const fn_string = '(function(tfLib){"use_strict";' +

			'try{this.tf = tfLib || tf;}' +
			'catch(e){throw(' +
			'"A tf library must be supplied or be available as a global")}' +

			`this.implements_module = ${stringify(unwrapped.name)};` +
			`this.collections = ${passObj(collections)};` +
			`this.inherit_vars = ${inherit_vars};` +
			`this.input_names = ${stringify(unwrapped.stage_two.input_names)};` +
			`this.name_map = ${passObj(name_map)};` +

			'this.inverse_name_map = Object.entries(this.name_map)' +
			'.reduce((acc,[k,v]) => Object.assign(acc,{[v]:k}), {});' +

			`this.input_descriptions = ${passObj(inDesc)};` +
			`this.output_descriptions = ${passObj(outDesc)};` +
			`this.variables = ${get_variables(re_nodes, subgraphs)};` +
			`this.check_inputs = ${check_inputs};` +
			`this.forward = ${forwardFn};` +
			`this.optimize = ${optimize};` +
			'})';
		return fn_string
	}

	const stringify$1 = JSON.stringify;

	function convert_ref$1(ref){
		const idx = ref.lastIndexOf(':');
		const node = ref.slice(0,idx);
		return `graph['${node}'][${ref.slice(idx+1)}]`
	}

	function convert_shape$1(shape){
		const arr = shape.map(c => isNaN(c)? 'None' : ''+c);
		return '['+arr.join(', ')+']'
	}

	function getInDesc$1(unwrapped){
		const mapInputDesc = ({dtype, shape}) =>
				({dtype: dtype, shape: convert_shape$1(shape)}),
			in_desc = unwrapped.stage_two.input_descriptions;
		return Object.entries(in_desc)
			.reduce((acc,[k,v]) => Object.assign(acc, {[k]: mapInputDesc(v)}),{})
	}

	function op_conversion_get_tensor$1(node){
		const {shape,fill,dtype} = node.attr;
		const s_shape = convert_shape$1(shape.shape);
		const s_dtype = stringify$1(dtype);
		let out = '';
		if(fill.type == 'scalar'){
			out = `tf.cast(tf.fill(${s_shape},${fill.val}), ${s_dtype})`;
		}
		else if(fill.type == 'symbol'){
			out = ({
				'ones': 	`tf.ones(${s_shape},${s_dtype})`,
				'zeros': 	`tf.zeros(${s_shape},${s_dtype})`,
				'normal': 	`tf.random_normal(${s_shape},0,1,${s_dtype})`,
				'truncated_normal': `tf.truncated_normal(${s_shape},0,1,${s_dtype})`
			})[fill.symbol];
			if(out===undefined) throw('Unsupported fill symbol')
		}
		else throw('Unsupported fill')
		return `[${out}]`
	}

	const convertTFStride = arr => stringify$1([1, ...arr, 1]);

	function convolutionWrapper$1(node){
		const [x, filter] = node.input;
		const {stride, padding, shape} = node.attr;
		const tfPad = typeof(padding)==typeof('')? padding.toUpperCase() : padding;
		const ND = shape.length - 2;
		const availConvs = new Set([1, 2, 3]);
		if(!availConvs.has(ND)){
			throw(`${ND}D convolution not yet supported, ` +
				`only (${[...availConvs]})D supported`)
		}
		let result = '';
		if(ND == 1){
			result = `tf.nn.conv1d(${x}, ${filter}, ` +
	            `${stride[0]}, ${stringify$1(tfPad)})`;
		} else {
			result = `tf.nn.conv${ND}d(${x}, ${filter}, ` +
	            `${convertTFStride(stride)}, ${stringify$1(tfPad)})`;
		}
		return `[${result}]`
	}

	function batchNormConversion$1(node){
		return `[tf.nn.batch_normalization(${node.input.slice(0,3)},`
	        + `${node.input.slice(3,5).reverse()}, tf.constant(1e-4))]`
	}

	function gatherRowsConversion$1(node){
		const [x, inds] = node.input;
		const range = `tf.cast(tf.range(0,${inds}.shape[0]), ${inds}.dtype)`;
		const positions = `tf.stack([${range},${inds}],1)`;
		return `[tf.gather_nd(${x}, ${positions})]`
	}

	function poolingConversion$1(op, node){
		// `op` is 'max_pool' or 'avg_pool'
		const x = node.input[0];
		const {filterSize, stride, padding, shape} = node.attr;
		const tfPad = typeof(padding)==typeof('')? padding.toUpperCase() : padding;
		const tfStride = convertTFStride(Array(shape.length-2).fill(stride));
		const tfFilter = convertTFStride(Array(shape.length-2).fill(filterSize));
		if(!(shape.length == 4 || shape.length == 5)){
			throw('Pooling only supported for inputs of rank 4 or 5.')
		}
		const tfOp = shape.length == 5? `${op}3d` : op;
		return `[tf.nn.${tfOp}(${x},${tfFilter},${tfStride},${stringify$1(tfPad)})]`
	}

	function convertPow(node){
		const dtype = `${node.input[0]}.dtype`; // TODO: pick higher of the dtypes
		const casted = node.input.map(s => `tf.cast(${s}, ${dtype})`);
		return `[tf.pow(${casted})]`
	}

	const unreffedOpConversionMap = {
		get_tensor: op_conversion_get_tensor$1,
		placeholder: () => {throw('placeholder shouldn\'t have been called...')},
		variable: node => `[self.variables[${stringify$1(node.name)}]]`,
		relu: node => `[${node.input.map(r => `tf.nn.relu(${r})`)}]`,
		sigmoid: node => `[${node.input.map(r => `tf.nn.sigmoid(${r})`)}]`,
		tanh: node => `[${node.input.map(r => `tf.nn.tanh(${r})`)}]`,
		exp: node => `[tf.exp(${node.input[0]})]`,
		matmul: node => `[tf.linalg.matmul(${node.input})]`,
		add: node => `[${node.input.join(' + ')}]`,
		multiply: node => `[${node.input.join(' * ')}]`,
		divide: node => `[tf.div(${node.input})]`,
		subtract: node => `[tf.subtract(${node.input})]`,
		pow: convertPow,
		sqrt: node => `[tf.sqrt(${node.input[0]})]`,
		softmax: node => `[tf.nn.softmax(${node.input[0]})]`,
		log: node => `[tf.math.log(${node.input[0]}+tf.constant(1e-8))]`,
		reduce_sum: n => `[tf.reduce_sum(${n.input[0]}, `+
	        `axis=${stringify$1(n.attr.axis)})]`,
		reduce_avg: node => `[tf.reduce_mean(${node.input[0]}, `+
	        `axis=${stringify$1(node.attr.axis)})]`,
		negate: node => `[-1 * ${node.input[0]}]`,
		transpose: n => `[tf.transpose(${n.input[0]}, ` +
			`perm=${stringify$1(n.attr.perm)})]`,
		one_hot: node => `[tf.one_hot(${node.input[0]}, ${node.attr.n_colls})]`,
		cast: n => `[tf.cast(${n.input[0]}, ${stringify$1(n.attr.dtype)})]`,
		abs: node => `[tf.abs(${node.input[0]})]`,
		convolution: convolutionWrapper$1,
		gather: n => `[tf.gather(${n.input.slice(0,2)},axis=${n.attr.axis})]`,
		reshape: n => `[tf.reshape(${n.input[0]},[${n.attr.shapeEncoding
		.map(x => typeof(x)!=typeof('')? x : n.input[0]+'.shape['+x+']')}])]`,
		batch_norm: batchNormConversion$1,
		gather_rows: gatherRowsConversion$1,
		max_pool: n => poolingConversion$1('max_pool', n),
		avg_pool: n => poolingConversion$1('avg_pool', n),
	};

	const opConversionMap$1 = Object.entries(unreffedOpConversionMap)
		.reduce((acc, [k,fn]) => Object.assign(acc, {[k]: 
			node => fn(Object.assign({}, node, 
				{input: node.input.map(convert_ref$1)}))
		}), {});

	function make_init_fn(nodes, subgraphs){
		const {init_deps, init_nodes} = subgraphs;
		const varConversion = n => `[tf.Variable(${convert_ref$1(n.input[0])})]`;
		const overriddenOps = Object.assign({}, opConversionMap$1, 
			{variable: varConversion});
		const preamble = ['self.tf = tf', 'graph = {}'];
		const main = nodes
			.filter(n => n.op !== 'placeholder')
			.filter(n => init_deps.has(n.name))
			.map(n => `graph['${n.name}'] = ${overriddenOps[n.op](n)}`);
		const assign = 'self.variables = {'+
			init_nodes
				.map(s => `"${s}": graph['${s}'][0]`)
				.join(',')
	        +'}';
		const body = [...preamble, ...main, assign].map(s => `\t${s}`);
		const lines = ['def __init__(self, tf):', ...body];
		return lines
	}

	function get_call_fn(unwrapped, nodes, inDesc, subgraphs){
		const ingest = 'ingested = self.ingest_input(inputs)';
		const inputAcquisition = Object.keys(inDesc)
			.map(k => `graph['${k}'] = [ingested["${k}"]]`);
		const preamble = ['tf = self.tf', 'graph = {}',
			ingest, ...inputAcquisition];
		const main = nodes
			.filter(n => n.op !== 'placeholder')
			.filter(n => subgraphs.forward.has(n.name))
			.map(n => `graph['${n.name}'] = ${opConversionMap$1[n.op](n)}`);
		const return_value_inner = unwrapped.output_names
			.map((name,i) => `"${name}":` +
	            `${convert_ref$1(unwrapped.output[i])}`)
			.join(',');
		const return_statement = `return {${return_value_inner}}`;
		const body = [...preamble, ...main, return_statement].map(s => `\t${s}`);
		const lines = ['def __call__(self, inputs):', ...body];
		return lines
	}

	function makePythonClass(name, init, call, ingest_input){
		const coalesce = lines => lines.map(s => `\t${s}`).join('\n');
		const classStr = `class ${name}:\n`
	        + coalesce(init) + '\n'
	        + coalesce(call) + '\n'
	        + coalesce(ingest_input) + '\n';
		return classStr
	}

	function make_ingest_input(inDesc){
		const unnamedPrefix = 'INPUT_';
		const intFromUnnamed = s => +s.slice(unnamedPrefix.length);
		const allUnnamed = arr => arr.every(s => s.startsWith(unnamedPrefix)) && 
	        arr.map(intFromUnnamed).every(n => Number.isInteger(n));
		const input_names = Object.keys(inDesc)
			.sort((a,b) => (allUnnamed([a,b])?
				intFromUnnamed(a)<intFromUnnamed(b) : a<b)? -1 : 1);
		const body = [
			'if isinstance(recieved, dict):',
			'\tingested = recieved',
			'elif isinstance(recieved, list) or isinstance(recieved, tuple):',
			`\tinput_names = ${stringify$1(input_names)}`,
			'\tingested = {k:v for k,v in zip(input_names, recieved)}',
			'else: raise ValueError("Input is not a dict, tuple, or list")',
			'return ingested'
		];
		const lines = ['def ingest_input(self, recieved, check=True):',
			...body.map(s => `\t${s}`)];
		return lines
	}

	function unwrapped_to_factory(unwrapped){
		const {nodes, output, name} = unwrapped;
		const inDesc = getInDesc$1(unwrapped);
		const subgraphs = get_init_subgraphs(nodes, output, ['variable']);
		const init = make_init_fn(nodes, subgraphs);
		const call = get_call_fn(unwrapped, nodes, inDesc, subgraphs);
		const ingest_input = make_ingest_input(inDesc);
		return makePythonClass(name, init, call, ingest_input)
	}

	const packagers = {
		'TensorFlow.js': unwrapped_to_constructor,
		'TensorFlow Python': unwrapped_to_factory
	};

	function puller(library, module_name, input_descriptions, prune=true){
		const one_out = stage_one(library, prune),
			two_out = stage_two(one_out, module_name, input_descriptions),
			three_out = stage_three(two_out, prune);
		return three_out
	}

	function JSONSet(){
		this.set = new Set();
		this.add = (...elements) => {
			elements.map(JSON.stringify)
				.forEach(s => this.set.add(s));
		};
		this.delete = (...elements) => {
			elements.map(JSON.stringify)
				.forEach(s => this.set.delete(s));
		};
		this.has = ele => this.set.has(JSON.stringify(ele));
		this.values = () => [...this.set].map(JSON.parse);
	}


	function graphStructure(){
		// dictionary of vertices, with keys as names, values as arbitrary objects (intented for html elements)
		this.V = {};
		// nested dictionary, eg this.E['node1']['node2'] is an array of edge elements from node1 to node2
		this.E = {};
		// given the name of a vertex, returns all associated edge relations (as a set)
		this.vertexToEdges = {};
		// counter for generating unique IDs
		this.vertexCreationCounter = 0;

		this.getVertexElement = vertex => this.V[vertex];
		this.getEdgeElements = (v1, v2) => this.E[v1][v2];
		this.getIncidentEdges = vertex => this.vertexToEdges[vertex].values();
		this.getIncidentEdgeElements = vertex => {
			const edgeBundles = this.getIncidentEdges(vertex)
				.map(edge => this.getEdgeElements(...edge));
			return [].concat(...edgeBundles)
		};

		// add a vertex
		this.addVertex = function(element, name=undefined){
			const givenName = name || "vertex_" + ++this.vertexCreationCounter;
			if(this.V.hasOwnProperty(givenName)){
				if(name==undefined){
					this.vertexCreationCounter += 1;
					return this.addVertex(element)
				}else{
					throw("Vertex name already taken")
				}
			}
			this.V[givenName] = element;
			this.E[givenName] = {};
			this.vertexToEdges[givenName] = new JSONSet([]);
			return givenName
		};

		// add an edge
		this.addEdge = function(element, v1, v2){
			if(!this.V.hasOwnProperty(v1)){throw(`v1, ${v1}, isn't a registered vertex`)}
			if(!this.V.hasOwnProperty(v2)){throw(`v2, ${v2}, isn't a registered vertex`)}
			// add edge to this.E
			if(!this.E.hasOwnProperty(v1)){ this.E[v1] = {}; }
			if(!this.E[v1].hasOwnProperty(v2)){ this.E[v1][v2] = []; }
			this.E[v1][v2].push(element);
			// add edge to this.vertexToEdges, for both vertices
			this.vertexToEdges[v1].add([v1, v2]);
			this.vertexToEdges[v2].add([v1, v2]);
			return [v1, v2]
		};

		// delete edges going from v1 to v2
		this.deleteEdge = function(v1, v2){
			// remove edge from vertexToEdges
			this.vertexToEdges[v1].delete([v1, v2]);
			this.vertexToEdges[v2].delete([v1, v2]);
			// remove edge from this.E
			const elements = this.E[v1][v2];
			delete(this.E[v1][v2]);
			return elements
		};

		// delete vertex
		this.deleteVertex = function(name){
			const edges = this.getIncidentEdges(name),
			edgeElements = [].concat(...edges.map(p => this.deleteEdge(...p))),
			vertexElement = this.V[name],
			elements = [vertexElement, ...edgeElements];
			// delete vertex from this.V and this.vertexToEdges
			delete(this.V[name]);
			delete(this.E[name]);
			delete(this.vertexToEdges[name]);
			edges.forEach(edge => {
				const neighbor = edge.find(v => v != name);
				this.vertexToEdges[neighbor].delete(edge);
			});
			
			return elements
		};

		this.changeVertexName = function(oldName, newName){
			const val = this.getVertexElement(oldName);
			this.addVertex(val, newName);
			this.getIncidentEdges(oldName).forEach(oldEdge => {
				const edgeVals = this.getEdgeElements(...oldEdge);
				const newEdge = oldEdge.map(n => n===oldName? newName : n);
				edgeVals.forEach(v => this.addEdge(v, ...newEdge));
			});
			this.deleteVertex(oldName);
		};
	}



	/*
	function test_graphStructure(){
		let graph = new graphStructure()

		// test assignment (addVertex, addEdge)
		const one = graph.addVertex("1st vertex"),
		two = graph.addVertex("2nd vertex"),
		three = graph.addVertex("3rd vertex")

		graph.addEdge("between 1 and 3", one, three)
		graph.addEdge("between 2 and 3", two, three)

		const isSame = (a,b) => JSON.stringify(a) == JSON.stringify(b)
		const expectedV = {vertex_1: "1st vertex", vertex_2: "2nd vertex", vertex_3: "3rd vertex"},
		verticesCorrect = isSame(graph.V, expectedV)

		const expectedE = {vertex_1: {vertex_3: ["between 1 and 3"]}, vertex_2: {vertex_3: ["between 2 and 3"]}, vertex_3: {}},
		edgesCorrect = isSame(graph.E, expectedE)

		const formattedVertToEdge = Object.entries(graph.vertexToEdges).map(([k,v]) => [k,v.values()]),
		expectedVTE = [["vertex_1", [["vertex_1","vertex_3"]]],
			["vertex_2", [["vertex_2","vertex_3"]]],
			["vertex_3", [["vertex_1","vertex_3"], ["vertex_2","vertex_3"]]]],
		vertexToEdgesCorrect = isSame(formattedVertToEdge, expectedVTE)

		const assignedCorrect = verticesCorrect && edgesCorrect && vertexToEdgesCorrect

		// test deletion (deleteEdge, deleteVertex)
		// test deleteEdge
		let edgesRemovedCorrect;
		{
			const returnVal = graph.deleteEdge("vertex_1", "vertex_3")
			const expectedV = {vertex_1: "1st vertex", vertex_2: "2nd vertex", vertex_3: "3rd vertex"},
			verticesCorrect = isSame(graph.V, expectedV)
			const expectedE = {vertex_1: {}, vertex_2: {vertex_3: ["between 2 and 3"]}, vertex_3: {}},
			edgesCorrect = isSame(graph.E, expectedE)
			const formattedVertToEdge = Object.entries(graph.vertexToEdges).map(([k,v]) => [k,v.values()]),
			expectedVTE = [["vertex_1", []],
				["vertex_2", [["vertex_2","vertex_3"]]],
				["vertex_3", [["vertex_2","vertex_3"]]]],
			vertexToEdgesCorrect = isSame(formattedVertToEdge, expectedVTE),
			returnCorrect = isSame(returnVal, ["between 1 and 3"])
			edgesRemovedCorrect = returnCorrect && verticesCorrect && edgesCorrect && vertexToEdgesCorrect
			graph.addEdge("between 1 and 3", one, three)
		}

		// test deleteVertex
		let vertexRemovedCorrect;
		{
			const returnVal = graph.deleteVertex(three)
			const expectedV = {vertex_1: "1st vertex", vertex_2: "2nd vertex"},
			verticesCorrect = isSame(graph.V, expectedV)
			const expectedE = {vertex_1: {}, vertex_2: {}},
			edgesCorrect = isSame(graph.E, expectedE)
			const formattedVertToEdge = Object.entries(graph.vertexToEdges).map(([k,v]) => [k,v.values()]),
			expectedVTE = [["vertex_1", []], ["vertex_2", []]],
			vertexToEdgesCorrect = isSame(formattedVertToEdge, expectedVTE),
			expectedReturn = ["3rd vertex", "between 2 and 3", "between 1 and 3"],
			returnCorrect = isSame(returnVal, expectedReturn)
			vertexRemovedCorrect = returnCorrect && verticesCorrect && edgesCorrect && vertexToEdgesCorrect
		}
		const deletedCorrect = edgesRemovedCorrect && vertexRemovedCorrect
		return assignedCorrect && deletedCorrect
	}
	console.log("test graphStructure successful?", test_graphStructure())
	*/

	function getNumInputsOutputs(ownerSVG, vertexName){
		const container = ownerSVG.__data__.graphStructure.V[vertexName];
		const nIn = container.querySelector('.nodeInPort').querySelectorAll('circle').length;
		const nOut = container.querySelector('.nodeOutPort').querySelectorAll('circle').length;
		return {nIn, nOut}
	}

	function makeChangePortButton(ownerSVG, vertexName, isAddition, isInput){
		const html = '<button type="button" class="btn btn-default"> <span style="color:black;" class="glyphicon glyphicon-'
		 + (isAddition? 'plus' : 'minus')
		 +'" aria-hidden="true"></span> </button>';
		const button = document.createRange().createContextualFragment(html).firstChild;
		const inc = (x) => isAddition? x+1 : Math.max(0,x-1);
		button.onclick = () => {
			const {nIn, nOut} = getNumInputsOutputs(ownerSVG, vertexName);
			ownerSVG.__data__.givePorts(vertexName,
				isInput? inc(nIn) : nIn,
				isInput? nOut : inc(nOut));
			ownerSVG.__data__.sideBarNode(vertexName);
		};
		return button
	}

	function makeDeleteButton(ownerSVG, vertexName){
		const html = '<button type="button" class="btn btn-default"> <span style="color:red;" class="glyphicon glyphicon-trash" aria-hidden="true"></span> </button>';
		const button = document.createRange().createContextualFragment(html).firstChild;
		button.onclick = () => {
			const deletes = ownerSVG.__data__.graphStructure.deleteVertex(vertexName);
			deletes.forEach(e => e.remove());
			resetSideBar(ownerSVG);
			ownerSVG.__data__.debugModule();
		};
		return button
	}

	function valid_C_identifier$1(str){
		const match = str.match(/[_a-zA-Z][_a-zA-Z0-9]*/);
		return match !== null && str === str.match(/[_a-zA-Z][_a-zA-Z0-9]*/)[0]
	}

	function _makeListFromItems(listItems){
	    let list = document.createElement('ul');
	    list.className = 'list-group';
	    listItems
	        .map(e => Array.isArray(e)? e : [e])
	        .forEach(cols => {
	            let li = document.createElement('li');
				li.className = 'list-group-item';
				let table = document.createElement('table');
				let tr = document.createElement('tr');
	            cols
	                .map(e => typeof e === 'string'? document.createTextNode(e) : e)
	                .forEach(e => {
						let td = document.createElement('td');
						td.appendChild(e);
						tr.appendChild(td);
					});
				table.appendChild(tr);
				li.appendChild(table);
	            list.appendChild(li);
	        });
	    return list
	}

	function getOpDoc(ownerSVG, opName){
		if(primitives.hasOwnProperty(opName)){
			return primitives[opName].doc
		}
		// otherwise we find the module's opDoc
		const moduleSVG = ownerSVG.closest('.studio').__data__.moduleHolders[opName].querySelector('svg');
		if(moduleSVG===undefined){throw `Operation "${opName}" is not a primitive or module`}
		else { return moduleSVG.__data__.moduleMetaData.doc }
	}


	function makeOperationDropdownGeneric(ownerSVG, selectedOp){
		let select = document.createElement('select');
		select.className = 'form-control';
		const firstOption = '<option value="" disabled selected>Select...</option>';
		select.appendChild(document.createRange().createContextualFragment(firstOption));
		const importedOps = ownerSVG.__data__.moduleMetaData.imports.map(a=>[a,a]);
		const primitiveOps = Object.entries(primitives)
			.map(([a,{name}]) => [a, name])
			.filter(([,name]) => name !== 'placeholder')
			.sort(([,a],[,b]) => a<b? -1 : 1);
		importedOps.concat(primitiveOps)
			.forEach(([identifier, name]) => {
			let option = document.createElement('option');
			option.value = identifier;
			option.innerHTML = name;
			if(identifier === selectedOp){
				option.selected = 'selected';
			}
			select.appendChild(option);
		});
		return select
	}

	function makeOperationDropdown(ownerSVG, vertexName){
		const selectedOp = ownerSVG.__data__.nodeMetaData[vertexName].op;
		let select = makeOperationDropdownGeneric(ownerSVG, selectedOp);
		select.oninput = function(){
			ownerSVG.__data__.nodeMetaData[vertexName].op = this.value;
			ownerSVG.__data__.graphStructure.V[vertexName].__data__.addText(this.value);
			const opdoc = getOpDoc(ownerSVG, this.value);
			const nInputs = opdoc.input.length;
			const nOutputs = opdoc.output.length;
			ownerSVG.__data__.givePorts(vertexName, nInputs, nOutputs);
			ownerSVG.__data__.sideBarNode(vertexName);
			ownerSVG.__data__.debugModule();
		};
		return select
	}

	function makeHigherOrderOperationDropdown(ownerSVG, vertexName){
		const selectedOp = ownerSVG.__data__.nodeMetaData[vertexName].literal[0];
		let select = makeOperationDropdownGeneric(ownerSVG, selectedOp);
		select.oninput = function(){
			ownerSVG.__data__.nodeMetaData[vertexName].literal = [this.value];
			ownerSVG.__data__.debugModule();
		};
		return select
	}

	function changeVertexName(svgData, oldName, newName){
		// update graphStructure
		svgData.graphStructure.changeVertexName(oldName, newName);
		// update container
		svgData.graphStructure.V[newName].__data__.vertexName = newName;
		// update nodeMetaData
		const meta = svgData.nodeMetaData[oldName];
		delete svgData.nodeMetaData[oldName];
		svgData.nodeMetaData[newName] = meta;
	}
	function makeNodeNameBox(ownerSVG, vertexName){
		const html = `<input class="form-control" id="vertexName" value="${vertexName}">`;
		const inp = document.createRange().createContextualFragment(html).firstChild;
		inp.oninput = function(){
			inp.setCustomValidity('');
			inp.reportValidity();
			if(this.value === vertexName){
				ownerSVG.__data__.graphStructure.V[this.value].__data__.addText(this.value);
				return
			}
			if(!valid_C_identifier$1(this.value)){
				inp.setCustomValidity(`"${this.value}" is not a valid C identifier`);
				inp.reportValidity();
				return
			}
			try {
				if(this.value.startsWith('INPUT_') || 
					["DEBUG", "LITERALS", "Inputs", "Outputs"].includes(this.value)){ throw "taken" }
				changeVertexName(ownerSVG.__data__, vertexName, this.value);
				ownerSVG.__data__.graphStructure.V[this.value].__data__.addText(this.value);
			} catch(e){
				inp.setCustomValidity(`The name "${this.value}" is already taken`);
				inp.reportValidity();
				return
			}
			ownerSVG.__data__.sideBarNode(this.value);
			const nextBox = ownerSVG.closest('.moduleHolder').querySelector('.sideBar #vertexName');
			nextBox.focus();
			nextBox.value = '';
			nextBox.value = this.value;
		};
		return inp
	}

	function makeManipulationCard(ownerSVG, vertexName, op){
		let card = document.createElement('div');
		card.className = 'card';
		let listItems = [];
		const makePB = (isAdd, isIn) => makeChangePortButton(ownerSVG, vertexName, isAdd, isIn);
		const space = () => document.createTextNode('\u00A0');
		if(op === "INPUTS"){
			listItems = [
				['Module Inputs'],
				['Number of Inputs',space(), makePB(false, false), makePB(true, false)]
			];
		} else if (op === "OUTPUTS"){
			listItems = [
				['Module Outputs'],
				['Number of Outputs',space(), makePB(false, true), makePB(true, true)]
			];
		} else {
			listItems = [
				['Name',space(), makeNodeNameBox(ownerSVG, vertexName)],
				['Operation',space(), makeOperationDropdown(ownerSVG, vertexName)],
				['Arguments',space(), makePB(false, true), makePB(true, true)],
				['Delete Node',space(), makeDeleteButton(ownerSVG, vertexName)],
			];
		}
		if(['apply', 'map', 'reduce', 'reductions'].includes(op)){
			listItems.push(['Implements',space(),makeHigherOrderOperationDropdown(ownerSVG, vertexName)]);
		}
		const list = _makeListFromItems(listItems);
		list.className += ' list-group-flush';

		card.appendChild(list);
		return card
	}



	function makeOpDocCards(ownerSVG, vertexName){
		const op = ownerSVG.__data__.nodeMetaData[vertexName].op;
		const {doc, input, output} = getOpDoc(ownerSVG, op);
		const html = `
	<div class="panel panel-default">
	<div class="panel-heading">
		<h3 class="panel-title">Documentation for <b><i>${op}</i></b></h3>
	</div>
	  <div class="panel-body">
	    <p>${doc}</p>
	  </div>
	  <ul class="list-group">
	    <li class="list-group-item">Input <br>
	    	<div id="inputListHolder"></div>
	    </li>
	    <li class="list-group-item">Output <br>
	    	<div id="outputListHolder"></div>
	    </li>
	  </ul>
	</div>`;
		const opdoc = document.createRange().createContextualFragment(html);
		const listNoClass = items => {
			const list = _makeListFromItems(items);
			list.className = '';
			Array.from(list.children).forEach(li => {li.className = '';});
			return list
		};
		opdoc.querySelector('#inputListHolder').appendChild(listNoClass(input));
		opdoc.querySelector('#outputListHolder').appendChild(listNoClass(output));
		return opdoc
	}

	function makeLiteralsCard(ownerSVG, vertexName){
		// make initial list
		const list = _makeListFromItems([]);
		const addListItem = () => {
			let li = document.createElement('li');
			li.className = 'list-group-item';
			const textbox = document.createElement('textarea');
			textbox.className = 'form-control';
			textbox.oninput = () => {
				const nLiteralsCommited = ownerSVG.__data__.nodeMetaData[vertexName].literal;
				if(list.childElementCount !== nLiteralsCommited){
					ownerSVG.__data__.givePorts(vertexName, 0, list.childElementCount, false);
				}
				textbox.setCustomValidity('');
				textbox.reportValidity();
				let newLiterals = [];
				for(const box of list.children){
					try {
						newLiterals.push(JSON.parse(box.firstChild.value));
					} catch(e) {
						textbox.setCustomValidity("Couldn't parse JSON");
						textbox.reportValidity();
						return
					}
				}
				ownerSVG.__data__.nodeMetaData[vertexName].literal = newLiterals;
				ownerSVG.__data__.debugModule();
			};
			li.appendChild(textbox);
			list.appendChild(li);
			const nLiteralsCommited = ownerSVG.__data__.nodeMetaData[vertexName].literal.length;
			ownerSVG.__data__.givePorts(vertexName, 0, nLiteralsCommited);
			return textbox
		};
		if(ownerSVG.__data__.nodeMetaData[vertexName].literal.length === 0){
			addListItem();
		} else {
			ownerSVG.__data__.nodeMetaData[vertexName].literal
				.forEach(v => { addListItem().value = JSON.stringify(v); });
		}
		// put the list in a panel
		const panelHTML = '<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Literals</h3></div> <div class="panel-body"></div> </div>';
		const panel = document.createRange().createContextualFragment(panelHTML).firstChild;
		const buttonHTML = '<button style="float:right;" type="button" class="btn btn-default"> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> New Literal</button>';
		const button = document.createRange().createContextualFragment(buttonHTML).firstChild;
		button.onclick = addListItem;
		panel.querySelector('.panel-body').appendChild(list);
		panel.querySelector('.panel-body').appendChild(button);
		return panel
	}

	function makeFunctionCard(ownerSVG, vertexName){
		if(ownerSVG.__data__.nodeMetaData[vertexName].literal.length == 0){
			ownerSVG.__data__.nodeMetaData[vertexName].literal = ['() => {}'];
		}
		const fnVal = ownerSVG.__data__.nodeMetaData[vertexName].literal[0];
		const panelHTML = `<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Function</h3></div> <div class="panel-body"><textarea rows="5" class="form-control">${fnVal}</textarea></div> </div>`;
		const panel = document.createRange().createContextualFragment(panelHTML).firstChild;
		const textbox = panel.querySelector('textarea');
		textbox.oninput = function(){
			ownerSVG.__data__.nodeMetaData[vertexName].literal = [this.value];
			ownerSVG.__data__.debugModule();
		};
		return panel
	}

	function valid_C_identifier$2(str){
		const match = str.match(/[_a-zA-Z][_a-zA-Z0-9]*/);
		return match !== null && str === str.match(/[_a-zA-Z][_a-zA-Z0-9]*/)[0]
	}
	function parseToShape(str){
	const toIdent = p => {
		if(!valid_C_identifier$2(''+p)){
			throw({message: `"${p}" is not an integer or valid C identifier`})
		}
		return ''+p
	};
	const isIntStrict = s => !isNaN(parseInt(s)) && s.length === (''+parseInt(s)).length;
	return str.replace(/\[|\]|\(|\)/g, '')
		.replace(/,/g,' ')
		.split(/\s+/).filter(s=>s !== '')
		.map(v => isIntStrict(v)? parseInt(v) : toIdent(v))
	}

	function makeInputDescRow(oninput, selectedType='tensor', shape=[], dtype='float32', JSONtext=''){
		let li = document.createElement('li');
		li.className = 'list-group-item';
		// Type selector
		const typeSelectorHTML = `<div style=" margin-bottom: 6px; ">Type: <select id="typeSelector"> <option value="tensor">Tensor</option> <option value="literal">JSON literal</option> </select></div>`;
		const typeSelector = document.createRange().createContextualFragment(typeSelectorHTML).firstChild;
		Array.from(typeSelector.querySelector('select').children).find(c => c.value == selectedType).selected = true;
		typeSelector.querySelector('select').oninput = function(debug=true){
			Array.from(this.closest('li').children).slice(1)
				.forEach(e => { e.style.display = 'none'; });
			this.closest('li').querySelector('#'+this.value).style.display = 'inherit';
			oninput(debug);
		};
		li.appendChild(typeSelector);
		// JSON literal input
		const JSONLiteralHTML = `<table id="literal" style="border: none; display: none;"><tbody><tr style="border: none;"><td style="border: none;">JSON Literal:</td><td style="border: none;"><textarea class="form-control" rows="4">${JSONtext}</textarea></td></tr></tbody></table>`;
		const JSONLiteralTable = document.createRange().createContextualFragment(JSONLiteralHTML).firstChild;
		JSONLiteralTable.querySelector('textarea').oninput = oninput;
		li.appendChild(JSONLiteralTable);
		// dtypeSelector
		let dtypeSelector = document.createElement('select');
		const options = ['float32', 'int32'];
		options.forEach(name => {
			const option = document.createElement('option');
			option.value = name;
	        option.innerText = name;
	        if(dtype===name){ option.selected = true; }
			dtypeSelector.appendChild(option);
		});
		dtypeSelector.oninput = oninput;
		// shapeTextBox
		let shapeTextBox = document.createElement('input');
		shapeTextBox.setAttribute('placeholder', '');
		shapeTextBox.className = 'form-control';
	    shapeTextBox.value = shape.join(', ');
		shapeTextBox.oninput = oninput;
		// table
		let table = document.createElement('table');
		table.style.border = 'none';
		for(let i=0; i<2; i++){
			let tr = document.createElement('tr');
			tr.style.border = 'none';
			for(let j=0; j<2; j++){
				let td = document.createElement('td');
				td.style.border = 'none';
				tr.appendChild(td);
	        }
	        table.appendChild(tr);
		}
		table.children[0].children[0].innerText = 'Shape:';
		table.children[0].children[1].appendChild(shapeTextBox);
		table.children[1].children[0].innerText = 'dtype:';
		table.children[1].children[1].appendChild(dtypeSelector);
		table.id = 'tensor';
		li.appendChild(table);
		typeSelector.querySelector('select').oninput(false);
		return li
	}

	const makeOnInput = (descList, ownerSVG) => (debug=true) => {
	    ownerSVG.__data__.moduleMetaData.inputDescriptions = {};
	    Array.from(descList.children).forEach((li, i) => {
			const inp = li.querySelector('#tensor input');
			inp.setCustomValidity('');
			inp.reportValidity();
			let shape = [];
			try{ shape = parseToShape(inp.value); }
			catch(e){
				inp.setCustomValidity(e.message);
				inp.reportValidity();
				return
			}
	        const name = `INPUT_${i}`;
	        const dtype = li.querySelector('#tensor select').value;
			const selectedType = li.querySelector('#typeSelector').value;
			const JSONtext = li.querySelector('#literal textarea').value;
			ownerSVG.__data__.moduleMetaData.inputDescriptions[name] = {selectedType, shape, dtype, JSONtext};
		});
		if(debug && descList.childElementCount){ownerSVG.__data__.debugModule();}
	};

	function makeInputDescCard(ownerSVG, vertexName){
	    let list = document.createElement('ul');
	    list.className = 'list-group';
	    const {inputDescriptions} = ownerSVG.__data__.moduleMetaData;
	    const nInputs = getNumInputsOutputs(ownerSVG, vertexName).nOut;
	    const oninput = makeOnInput(list, ownerSVG);
	    for(let i=0; i<nInputs; i++){
	        if(inputDescriptions.hasOwnProperty(`INPUT_${i}`)){
	            const {selectedType, shape, dtype, JSONtext} = inputDescriptions[`INPUT_${i}`];
	            list.appendChild(makeInputDescRow(oninput, selectedType, shape, dtype, JSONtext));
	        } else {
	            list.appendChild(makeInputDescRow(oninput));
	        }
		}
		oninput(false);
	    const panelHTML = '<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Input Descriptions</h3></div> <div class="panel-body"></div> </div>';
		const panel = document.createRange().createContextualFragment(panelHTML).firstChild;
		panel.querySelector('.panel-body').appendChild(list);
	    return panel
	}

	function makeModal(svgElement){
	    let pulled = false;
	    try {
	        Object.entries(svgElement.__data__.moduleMetaData.inputDescriptions)
		        .filter(([,{selectedType}]) => selectedType !== 'tensor')
	            .forEach(([name,]) => {throw {metaDataIdentifier: 'input_not_tensor', message: `Input #${name.slice(6)} is not a tensor`}});
	        pulled = svgElement.__data__.pullModule();
	    } catch(e){
	        if(e.metaDataIdentifier === 'input_not_tensor'){
	            alert("To compile a module, inputs and outputs must be tensors:\n"+e.message);
	            return false
	        }
	    }
	    if(pulled === false){ return false }
	    const html = `<div class="modal" style="display: block; padding-left: 0px; background-color: rgba(0, 0, 0, 0.5);">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="this.closest('.modal').remove()"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title" id="myModalLabel">Compile Module<a class="anchorjs-link" href="#myModalLabel"><span class="anchorjs-icon"></span></a></h4>
            </div>
            <div class="modal-body">
            <p>
            Select backend to compile to: 
            <select><option value="" disabled="" selected=""></option></select> 
            <a id="copy" style="display: none;" class="btn btn-primary btn-sm" href="#" role="button">copy code</a>
            <br><br>
            <textarea style="display: none;" class="form-control" rows="3"></textarea>
            </p>
            </div>
        </div><!-- /.modal-content -->
        </div>
    </div>`;
	    const modal = document.createRange().createContextualFragment(html).firstChild;
	    const textarea = modal.querySelector('textarea');
	    let selector = modal.querySelector('select');
	    let copyButton = modal.querySelector('#copy');
	    const backends = Array.from(Object.keys(packagers));
	    backends.sort().forEach(name => {
	        const option = document.createElement('option');
	        option.value = name;
	        option.innerText = name;
	        selector.appendChild(option);
	    });
	    copyButton.onclick = () => {
	        textarea.select();
	        document.execCommand('copy');
	    };
	    selector.oninput = () => {
	        const code = packagers[selector.value](pulled);
	        textarea.innerText = code;
	        textarea.style.display = 'initial';
	        copyButton.style.display = 'initial';
	    };
	    svgElement.parentElement.appendChild(modal);
	}

	function makeCompileButton(svgElement){
	    const html = '<a class="btn btn-primary btn-lg" href="#" role="button">Compile Module</a>';
	    const button = document.createRange().createContextualFragment(html).firstChild;
	    button.onclick = () => makeModal(svgElement);
	    return button
	}

	function makeTemplate(overview, inputs, outputs){
	    const makeRow = text => `<tr style="border: none;"><td style="border: none;"><textarea class="form-control">${text}</textarea></td></tr>`;
	    const templateHTML = `<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Module Documentation</h3></div> <div class="panel-body"><ul class="list-group">
    <li class="list-group-item" id="overviewDoc"><h4>Overview</h4>    
        <table><tbody><tr style="border: none;"><td style="border: none;"><textarea class="form-control">${overview}</textarea></td></tr></tbody></table>
    </li><li class="list-group-item" id="inputsDoc"><h4>Inputs</h4>    
        <table><tbody>${inputs.map(makeRow).join('')}</tbody></table>
    </li><li class="list-group-item" id="outputsDoc"><h4>Outputs</h4>    
        <table><tbody>${outputs.map(makeRow).join('')}</tbody></table>
    </li></ul></div> </div>`;
	    const node = document.createRange().createContextualFragment(templateHTML).firstChild;
	    return node
	}

	const makeOnInput$1 = (svgData, card) => () => {
	    const overview = card.querySelector('#overviewDoc textarea').value;
	    const inputs = Array.from(card.querySelectorAll('#inputsDoc textarea')).map(t=>t.value);
	    const outputs = Array.from(card.querySelectorAll('#outputsDoc textarea')).map(t=>t.value);
	    let opDoc = svgData.moduleMetaData.doc;
	    opDoc.doc = overview;
	    opDoc.input = inputs;
	    opDoc.output = outputs;
	};

	function getCurrentOpDoc(svgData){
	    const nInputs = svgData.moduleMetaData.inputNode.querySelector('.nodeOutPort').childElementCount-1;
	    const nOutputs = svgData.moduleMetaData.outputNode.querySelector('.nodeInPort').childElementCount-1;
	    const inputs = Object.assign(Array(nInputs).fill(''), svgData.moduleMetaData.doc.input);
	    const outputs = Object.assign(Array(nOutputs).fill(''), svgData.moduleMetaData.doc.output);
	    const overview = svgData.moduleMetaData.doc.doc;
	    return {overview, inputs, outputs}
	}

	function makeModuleDocCard(svgElement){
	    const svgData = svgElement.__data__;
	    const {overview, inputs, outputs} = getCurrentOpDoc(svgData);
	    const card = makeTemplate(overview, inputs, outputs);
	    const oninput = makeOnInput$1(svgData, card);
	    Array.from(card.querySelectorAll('textarea')).forEach(t => {
	        t.addEventListener('input', oninput);
	    });
	    return card
	}

	function addSideBar(svgSelection, size){
		svgSelection.nodes().forEach(svgEle => {
			const sideBar = d3.select(svgEle.closest('.moduleHolder'))
				.insert('div', 'svg').classed('sideBar', true)
				.style('float', 'left')
				.style('max-width', size[0])
				.style('min-width', size[0])
				.style('max-height', size[1])
				.style('min-height', size[1])
				.style('background-color', 'ffffff')
				.style('border', '1px solid black')
				.style('overflow', 'scroll');
			resetSideBar(svgEle);
			sideBar.node().__data__.rollbackCheckpoint = () => resetSideBar(svgEle);
		});
	}

	function resetSideBar(ownerSVG){
		const sideBar = ownerSVG.parentElement.querySelector('.sideBar');
		sideBar.innerHTML = '';
	}

	function sideBarNodeManipulation(ownerSVG, vertexName){
		resetSideBar(ownerSVG);
		const sideBar = ownerSVG.closest('.moduleHolder').querySelector('.sideBar');
		const op = ownerSVG.__data__.nodeMetaData[vertexName].op; // may be "INPUTS", "OUTPUTS", "literals", or others
		
		sideBar.appendChild(makeManipulationCard(ownerSVG, vertexName, op));

		if(op !== "INPUTS" && op !== "OUTPUTS" && op !== undefined){
			// op may be undefined if sideBar is called before INPUT or OUTPUT are populated
			sideBar.appendChild(makeOpDocCards(ownerSVG, vertexName));
		}

		if(op === 'literals'){
			sideBar.appendChild(makeLiteralsCard(ownerSVG, vertexName));
			ownerSVG.__data__.setNodeColor(vertexName, 'rgba(255,255,255,0.5)');
		}

		if(op === 'js_function'){
			sideBar.appendChild(makeFunctionCard(ownerSVG, vertexName));
		}

		if(op === 'INPUTS'){
			sideBar.appendChild(makeInputDescCard(ownerSVG, vertexName));
		}

		if(op === 'INPUTS' || op === 'OUTPUTS'){
			sideBar.append(makeModuleDocCard(ownerSVG));
			const button = makeCompileButton(ownerSVG);
			button.style = 'margin-left: auto; margin-right: auto; display: table;';
			sideBar.appendChild(button);
		}

		sideBar.__data__.rollbackCheckpoint = () => sideBarNodeManipulation(ownerSVG, vertexName);
	}

	function getGraph(){
		const getName = v => v.__data__.vertexName,
		{graphStructure: graphStructure$$1} = this,
		e = graphStructure$$1.E,
		lines = [].concat(...[].concat(...Object.values(e).map(Object.values))),
		relations = lines.map(l => l.__data__.edgeRelation),
		g = relations.reduce((acc,{from,to}) => {
			if(!acc.hasOwnProperty(getName(to.node))){acc[getName(to.node)]=[];}
			if(!acc.hasOwnProperty(getName(from.node))){acc[getName(from.node)]=[];}
			acc[getName(to.node)][to.index] = {node: getName(from.node), index: from.index};
			return acc
		}, {});
		return g
	}

	function getTaffyModule(){
		const svgData = this;
		let moduleInputs = [],
		moduleOutputs = [];
		const {node, module} = constructors,
		graphSkeleton = svgData.getGraph(),
		moduleName = svgData.moduleMetaData.name,
		moduleImport = svgData.moduleMetaData.imports,
		inputNodeName = svgData.moduleMetaData.inputNode.__data__.vertexName,
		nodes = Object.entries(graphSkeleton).reduce((acc, [name, inputsRaw]) => {
			let inputs = inputsRaw.slice();
			// remove trailing empty, replace others with undefineds
			while(inputs.length && inputs[inputs.length-1]===undefined){ inputs.pop(); }
			for(let i=0; i<inputs.length; i++){
				if(inputs[i]===undefined){
					throw({error: {message: `input #${i} is undefined`}, node: moduleName+'/'+name})
				}
			}
			const {op, literal} = svgData.nodeMetaData[name];
			inputs = inputs
				.map(({node, index}) => node===inputNodeName? ['INPUT_'+index, 0] : [node,index])
				.map(([node, index]) => node+':'+index);
			if(op === 'INPUTS'){
				const nOutputs = svgData.moduleMetaData.inputNode.querySelector('.nodeOutPort').childElementCount-1;
				const newInputNodes = Array(nOutputs).fill().map((_,i) => {
					moduleInputs.push('INPUT_'+i);
					return new node('INPUT_'+i, 'placeholder', [], [])
				});
				return acc.concat(newInputNodes)
			}
			if(op === 'OUTPUTS'){
				moduleOutputs = inputs;
				return acc
			}
			return acc.concat([new node(name, op, inputs, literal)])
		}, []),
		moduleDoc = svgData.moduleMetaData.doc;
		return new module(moduleName, moduleInputs, moduleOutputs, nodes, moduleImport, moduleDoc)
	}


	function handleFailedPull(e){
		const svgData = this;
		if(e.hasOwnProperty('node') && e.hasOwnProperty('error')){
			const {node, error} = e;
			svgData.nodeAlert(node, error.message);
			if(e.hasOwnProperty('valueTrace')){
				bindValuesToPorts(svgData, e.valueTrace, e.node);
			}
		}
		else{
			if(e.metaDataIdentifier === 'output_not_tensor'){
				alert("To compile a module, outputs must be tensors:\n"+e.message);
				return false
			}
			else if(e.metaDataIdentifier === 'cyclic_graph'){
				throw(e)
			}
			console.log(e);
			if(e.hasOwnProperty('valueTrace')){
				bindValuesToPorts(svgData, e.valueTrace);
			}
		}
		return false
	}
	const clearNodeAlerts = ({svgElement}) =>
		Array.from(svgElement.closest('.studio').querySelectorAll('.nodeAlertTooltip'))
			.forEach(p => p.parentElement.remove());

	const bindValuesToPorts = (svgData, valueTrace, failedNode=false) => {
		Array.from(svgData.svgElement.querySelectorAll('.nodeContainer'))
			.forEach(e => {e.__data__.outputVals = {};});
		const {inputNode} = svgData.moduleMetaData;
		inputNode.__data__.outputVals = {};
		const nodesToIdxsToVals = Object.entries(valueTrace)
			.reduce((acc, [k,v]) => {
				const [name, idx] = k.split(':');
				if(name==='DEBUG'){return acc}
				if(name.startsWith('INPUT_')){
					inputNode.__data__.outputVals[name.split('_')[1]] = v;
					return acc
				}
				if(!acc.hasOwnProperty(name)){ acc[name] = {}; }
				acc[name][idx] = v;
				return acc
			}, {});
		const subValTrace = {};
		Object.entries(nodesToIdxsToVals).forEach(([node, idxToVal]) => {
			if(node.includes('/')){
				if(failedNode === false){ return }
				const [child, ...grandChildren] = node.split('/');
				if(child === failedNode.split('/')[0]){
					Object.entries(idxToVal).forEach(([idx, val]) => {
						subValTrace[grandChildren.join('/')+':'+idx] = val;
					});
				}
				return
			}
			const container = svgData.graphStructure.V[node];
			container.__data__.outputVals = idxToVal;
			const displayedOut = container.querySelector('.nodeOutPort').querySelectorAll('circle').length;
			const nOut = Object.keys(idxToVal).length;
			if(nOut !== displayedOut){
				const nIn = container.querySelector('.nodeInPort').querySelectorAll('circle').length;
				svgData.givePorts(node, nIn, nOut, false);
			}
		});
		if(failedNode !== false && failedNode.includes('/')){
			const {op} = svgData.nodeMetaData[failedNode.split('/')[0]];
			const holder = svgData.svgElement.closest('.studio').__data__.moduleHolders[op];
			const subSVGData = holder.querySelector('svg').__data__;
			const failedGrandChildren = failedNode.split('/').slice(1).join('/');
			bindValuesToPorts(subSVGData, subValTrace, failedGrandChildren);
		}
	};

	function pullModule(){
		clearNodeAlerts(this);
		const {name, inputDescriptions} = this.moduleMetaData;
		const pullFn = this.svgElement.closest('.studio').__data__.pullModule;
		try {
			return pullFn(name, inputDescriptions)
		} catch(e){ return this.handleFailedPull(e) }
	}


	const _preprocessModuleForDebug = (inputDescriptions, mod) => {
		// move input descriptions that are not tensors into literal nodes
		mod.input = Object.entries(inputDescriptions)
			.filter(([,{selectedType}]) => selectedType === 'tensor')
			.map(([name,]) => name);
		mod.nodes = mod.nodes.filter(node => !inputDescriptions.hasOwnProperty(node) ||
			inputDescriptions[node].selectedType !== 'literal');
		let newInpDesc = Object.entries(inputDescriptions)
			.filter(([,{selectedType}]) => selectedType === 'tensor')
			.reduce((acc,[k,v])=>Object.assign(acc,{[k]:v}),
				{'DEBUG': {shape:[],dtype:'float32',JSONtext:'', selectedType:'tensor'}});
		// move literals to LITERALS node, which are forwarded to a parse_json op with the same name as the input
		let literals = [];
		Object.entries(inputDescriptions)
			.filter(([,{selectedType}]) => selectedType === 'literal')
			.forEach(([name, {JSONtext}]) => {
				const parseNode = new constructors.node(name, 'parse_json', [`LITERALS:${literals.length}`], []);
				mod.nodes.push(parseNode);
				literals.push(JSONtext);
			});
		const literalsNode = new constructors.node('LITERALS', 'literals', [], literals);
		mod.nodes.push(literalsNode);
		// add debug node
		const debugNode = new constructors.node('DEBUG', 'placeholder', [], []);
		mod.nodes.push(debugNode);
		mod.output = ['DEBUG:0'];
		mod.input.push('DEBUG');
		return {mod, newInpDesc}
	};
	function debugModule(){
		clearNodeAlerts(this);
		const {name, inputDescriptions} = this.moduleMetaData;
		let debugInpDesc = inputDescriptions;
		try {
			const library = this.svgElement.closest('.studio').__data__.getTaffyLibrary();
			library.modules.forEach((thisMod, i) => {
				if(thisMod.name !== name){return}
				const {mod, newInpDesc} = _preprocessModuleForDebug(inputDescriptions, thisMod);
				library.modules[i] = mod;
				debugInpDesc = newInpDesc;
			});
			const pulled = puller(library, name, debugInpDesc, false);
			Object.keys(pulled.stage_two.val_trace)
				.filter(n => n.startsWith('LITERALS'))
				.forEach(n => {delete pulled.stage_two.val_trace[n];});
			delete pulled.stage_two.val_trace['DEBUG:0'];
			bindValuesToPorts(this, pulled.stage_two.val_trace);
			return true
		} catch(e){
			if(e.hasOwnProperty('valueTrace')){
				Object.keys(e.valueTrace)
					.filter(n => n.startsWith('LITERALS'))
					.forEach(n => {delete e.valueTrace[n];});
				delete e.valueTrace['DEBUG:0'];
			}
			return this.handleFailedPull(e)
		}
	}

	function getVertexByName(svgData, name){
		const vertex = name.startsWith('INPUT_')? svgData.moduleMetaData.inputNode.__data__.vertexName : name;
		if(!svgData.graphStructure.V.hasOwnProperty(vertex)){
				throw(`Graph doesn't have vertex: "${vertex}"`)
			}
		return d3.select(svgData.graphStructure.V[vertex])
	}

	function givePorts(vertex, nIn, nOut, runDebug=true){
		return getVertexByName(this, vertex)
			.call(s => giveNodePorts(s, nIn, nOut, runDebug))
	}

	function setNodeColor(vertex, color){
		return getVertexByName(this, vertex)
			.select('.nodeBody').attr('fill', color)
	}

	const alertMalformedModule = (svgData, vertex, message) => {
		const [moduleName, ...children] = vertex.split('/');
		const studio = svgData.svgElement.closest('.studio');
		if(!studio.__data__.moduleHolders.hasOwnProperty(moduleName)){ return false }
		studio.querySelector(`nav li a#${moduleName}`).click();
		const externalData = studio.__data__.moduleHolders[moduleName].querySelector('svg').__data__;
		externalData.nodeAlert(children.join('/'), message);
		return true
	};
	const alertNestedMessage = (svgData, vertex, message) => {
		if(!vertex.includes('/')){ return false }
		const [node, ...children] = vertex.split('/');
		const moduleImp = svgData.nodeMetaData[node].op;
		const onclick = `this.closest('.studio').querySelector('nav li a#${moduleImp}').click()`;
		svgData.nodeAlert(node, `Error in <a href="#" onclick="${onclick}">${moduleImp}</a>: <br>${message}`);
		const externalData = svgData.svgElement.closest('.studio').__data__
			.moduleHolders[moduleImp].querySelector('svg').__data__;
		externalData.nodeAlert(children.join('/'), message);
		return true
	};

	function nodeAlert(vertex, message){
		if(alertMalformedModule(this, vertex, message) ||
			alertNestedMessage(this, vertex, message)){return}
		const tooltipWidth = window.innerWidth*0.2;
		const tooltipHTML = `<div><style>.nodeAlertTooltip{width:${tooltipWidth}px;font-size:12px;position:absolute;pointer-events:all;line-height:1;font-weight:700;padding:12px;background:rgb(244, 67, 54);color:#fff;border-radius:2px}.nodeAlertTooltip:after{box-sizing:border-box;display:inline;font-size:10px;width:100%;line-height:1;color:rgb(244, 67, 54);content:"\\25BC";position:absolute;text-align:center;margin:-1px 0 0 0;top:100%;left:0}.closeTooltip:before{content:'✕'}.closeTooltip{position:absolute;top:0;right:0;cursor:pointer}</style><div class=nodeAlertTooltip></div></div>`;
		getVertexByName(this, vertex)
			.select('.nodeGuts').each(function(){
	            const ele = document.createRange().createContextualFragment(tooltipHTML).firstElementChild;
				ele.style.opacity = 0;
				this.appendChild(ele);
				const tool = ele.querySelector('.nodeAlertTooltip');
	            tool.innerHTML = message;
				tool.style.bottom = this.parentElement.querySelector('.nodeBody').getAttribute('height')+'px';
				const bodyWidth = this.parentElement.querySelector('.nodeBody').getAttribute('width');
				tool.style.left = `${(bodyWidth-tooltipWidth)/2}px`;
				const close = tool.appendChild(document.createElement('span'));
				close.className = 'closeTooltip';
				d3.select(ele).transition().style('opacity', 1);
				tool.addEventListener('mousedown', function(e){e.stopPropagation();});
				close.onclick = function(){d3.select(ele).transition().style('opacity', 0).remove();};
			});
	}

	function sideBarNode(vertex){
		sideBarNodeManipulation(this.svgElement, vertex);
	}

	function makeSvgData(){
	    return {
			graphStructure: new graphStructure(),
			lastPortHovered: undefined,
			nodeMetaData: {},
			moduleMetaData: {
				name: undefined,
				inputDescriptions: {},
				imports: [],
				inputNode: undefined,
				outputNode: undefined,
				doc: new constructors.op_doc([''], [''], ''),
			},
			pullModule,
			debugModule,
			getGraph,
			givePorts,
			setNodeColor,
			getTaffyModule,
			nodeAlert,
			handleFailedPull,
			addEdge,
			addNode: addNodeNoGUI,
			sideBarNode,
		}
	}

	function createSVG(selection, size=[1000,500], make_grid=true){
		const svgData = makeSvgData();
		// create svg
		const svg = selection
			.append("svg")
			.style("border", "1px solid black")
			.style("float", "right")
			.attr("width", size[0])
			.attr("height", size[1])
			.datum(svgData);
		svg.each(function(){this.__data__.svgElement = this;});
		// create drawCanvas, to hold elements that will transform (scale and translate)
		const drawCanvas = svg.append("g")
			.classed("drawCanvas", true)
			.attr("transform", "translate(0,0)scale(1)");
		// possibly draw gridlines on drawCanvas
		if(make_grid){makeGridLines(drawCanvas, size, 100);}
		// create groups for nodes and edges
		drawCanvas.append("g").classed("nodesGroup", true);
		drawCanvas.append("g").classed("edgesGroup", true);
		// add zoom behavior to svg
		const zoom = d3.zoom().on("zoom", () => zoomSelection(drawCanvas));
		svg
			.call(zoom);
		return svg
	}

	function zoomSelection(selection) {
		const {k,x,y} = d3.event.transform,
		transform = `translate(${x},${y})scale(${k})`;
		selection.attr("transform", transform);
	}

	function makeSingleList(texts, ownerTable, update){
	    let list = document.createElement('ul');
	    list.className = 'list-group';
	    texts.forEach(t => {
	        let li = document.createElement('li');
	        li.onclick = () => {
	            const movingTo = li.closest('td').id === 'available'? '#selected' : '#available';
	            li.remove();
	            ownerTable.querySelector(movingTo).querySelector('ul').appendChild(li);
	            update(ownerTable.querySelector('#selected > ul'));
	        };
	        li.className = 'list-group-item';
	        li.innerText = t;
	        list.appendChild(li);
	    });
	    return list
	}

	function makeLists(textsAvail, textsSelected, update){
	    const tableHTML = '<table> <tr> <th>Available</th> <th>Imported</th> </tr> <tr> <td id="available" valign="top"></td> <td id="selected" valign="top"></td> </tr> </table>';
	    const table = document.createRange().createContextualFragment(tableHTML).firstChild;
	    table.querySelector('#available').appendChild(makeSingleList(textsAvail, table, update));
	    table.querySelector('#selected').appendChild(makeSingleList(textsSelected, table, update));
	    return table
	}

	function makeDropdown(textsAvail, textsSelected, update){
	    const dropdownHTML = '<div class="btn-group" style="width:100%;"> <button type="button" style="width:100%;" class="btn btn-default dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Imports <span class="glyphicon glyphicon-transfer" aria-hidden="true"></span> </button> <ul class="dropdown-menu"> <li id="tableHolder"></li> </ul> </div>';
	    const dropdown = document.createRange().createContextualFragment(dropdownHTML).firstChild;
	    const ul = dropdown.querySelector('ul');
	    ul.style.display = 'none';
	    dropdown.querySelector('button').onclick = () => {
	        ul.style.display = ul.style.display==='none'? 'inherit' : 'none';
	    };
	    document.onclick = e => {
	        if(e.target.closest(".btn-group")!==dropdown){
	            ul.style.display = 'none';
	        }
	    };
	    const table = makeLists(textsAvail, textsSelected, update);
	    table.style.marginLeft = 'auto';
	    table.style.marginRight = 'auto';
	    table.style.borderSpacing = '1em';
	    table.style.borderCollapse = 'separate';
	    table.onclick = e => e.stopPropagation();
	    dropdown.querySelector('#tableHolder').appendChild(table);
	    return dropdown
	}


	function getNotDependents(root, deps){
	    let reversedDeps = deps.map(a => a[0])
	        .reduce((acc,k) => Object.assign(acc,{[k]:[]}), {});
	    let unvisited = new Set(Object.keys(reversedDeps));
	    deps.forEach(([k, im]) => im.forEach(i => reversedDeps[i].push(k)));
	    let stack = [root];
	    while(stack.length > 0){
	        const expand = stack.pop();
	        stack.push(...reversedDeps[expand]);
	        unvisited.delete(expand);
	    }
	    return Array.from(unvisited)
	}

	function makeModuleImporter(ownerSVG){
	    const moduleName = ownerSVG.__data__.moduleMetaData.name;
	    const modImports = new Set(ownerSVG.__data__.moduleMetaData.imports);
	    const moduleDeps = Array.from(ownerSVG.closest('.studio')
	        .querySelector('.modulesHolder').querySelectorAll('svg'))
	        .map(svg => svg.__data__.moduleMetaData)
	        .map(({name, imports}) => [name, imports]);
	    const notDependents = getNotDependents(moduleName, moduleDeps);
	    const selected = ownerSVG.__data__.moduleMetaData.imports;
	    const avail = notDependents.filter(d => !modImports.has(d));
	    const update = (selectedUl) => {
	        ownerSVG.__data__.moduleMetaData.imports = Array.from(selectedUl.children)
	            .map(e => e.innerText.split(/\r?\n/)[0]);
	        ownerSVG.closest('.moduleHolder')
	            .querySelector('.sideBar').__data__.rollbackCheckpoint();
	    };
	    return makeDropdown(avail, selected, update)
	}

	const dagre = (function(f)
	{if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.dagre=f();}return g.dagre;})(function(){var define;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){
	/*
	Copyright (c) 2012-2014 Chris Pettitt

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	*/
	module.exports={graphlib:require("./lib/graphlib"),layout:require("./lib/layout"),debug:require("./lib/debug"),util:{time:require("./lib/util").time,notime:require("./lib/util").notime},version:require("./lib/version")};},{"./lib/debug":6,"./lib/graphlib":7,"./lib/layout":9,"./lib/util":29,"./lib/version":30}],2:[function(require,module,exports){var _=require("./lodash"),greedyFAS=require("./greedy-fas");module.exports={run:run,undo:undo};function run(g){var fas=g.graph().acyclicer==="greedy"?greedyFAS(g,weightFn(g)):dfsFAS(g);_.forEach(fas,function(e){var label=g.edge(e);g.removeEdge(e);label.forwardName=e.name;label.reversed=true;g.setEdge(e.w,e.v,label,_.uniqueId("rev"));});function weightFn(g){return function(e){return g.edge(e).weight}}}function dfsFAS(g){var fas=[],stack={},visited={};function dfs(v){if(_.has(visited,v)){return}visited[v]=true;stack[v]=true;_.forEach(g.outEdges(v),function(e){if(_.has(stack,e.w)){fas.push(e);}else{dfs(e.w);}});delete stack[v];}_.forEach(g.nodes(),dfs);return fas}function undo(g){_.forEach(g.edges(),function(e){var label=g.edge(e);if(label.reversed){g.removeEdge(e);var forwardName=label.forwardName;delete label.reversed;delete label.forwardName;g.setEdge(e.w,e.v,label,forwardName);}});}},{"./greedy-fas":8,"./lodash":10}],3:[function(require,module,exports){var _=require("./lodash"),util=require("./util");module.exports=addBorderSegments;function addBorderSegments(g){function dfs(v){var children=g.children(v),node=g.node(v);if(children.length){_.forEach(children,dfs);}if(_.has(node,"minRank")){node.borderLeft=[];node.borderRight=[];for(var rank=node.minRank,maxRank=node.maxRank+1;rank<maxRank;++rank){addBorderNode(g,"borderLeft","_bl",v,node,rank);addBorderNode(g,"borderRight","_br",v,node,rank);}}}_.forEach(g.children(),dfs);}function addBorderNode(g,prop,prefix,sg,sgNode,rank){var label={width:0,height:0,rank:rank,borderType:prop},prev=sgNode[prop][rank-1],curr=util.addDummyNode(g,"border",label,prefix);sgNode[prop][rank]=curr;g.setParent(curr,sg);if(prev){g.setEdge(prev,curr,{weight:1});}}},{"./lodash":10,"./util":29}],4:[function(require,module,exports){var _=require("./lodash");module.exports={adjust:adjust,undo:undo};function adjust(g){var rankDir=g.graph().rankdir.toLowerCase();if(rankDir==="lr"||rankDir==="rl"){swapWidthHeight(g);}}function undo(g){var rankDir=g.graph().rankdir.toLowerCase();if(rankDir==="bt"||rankDir==="rl"){reverseY(g);}if(rankDir==="lr"||rankDir==="rl"){swapXY(g);swapWidthHeight(g);}}function swapWidthHeight(g){_.forEach(g.nodes(),function(v){swapWidthHeightOne(g.node(v));});_.forEach(g.edges(),function(e){swapWidthHeightOne(g.edge(e));});}function swapWidthHeightOne(attrs){var w=attrs.width;attrs.width=attrs.height;attrs.height=w;}function reverseY(g){_.forEach(g.nodes(),function(v){reverseYOne(g.node(v));});_.forEach(g.edges(),function(e){var edge=g.edge(e);_.forEach(edge.points,reverseYOne);if(_.has(edge,"y")){reverseYOne(edge);}});}function reverseYOne(attrs){attrs.y=-attrs.y;}function swapXY(g){_.forEach(g.nodes(),function(v){swapXYOne(g.node(v));});_.forEach(g.edges(),function(e){var edge=g.edge(e);_.forEach(edge.points,swapXYOne);if(_.has(edge,"x")){swapXYOne(edge);}});}function swapXYOne(attrs){var x=attrs.x;attrs.x=attrs.y;attrs.y=x;}},{"./lodash":10}],5:[function(require,module,exports){
	/*
	 * Simple doubly linked list implementation derived from Cormen, et al.,
	 * "Introduction to Algorithms".
	 */
	module.exports=List;function List(){var sentinel={};sentinel._next=sentinel._prev=sentinel;this._sentinel=sentinel;}List.prototype.dequeue=function(){var sentinel=this._sentinel,entry=sentinel._prev;if(entry!==sentinel){unlink(entry);return entry}};List.prototype.enqueue=function(entry){var sentinel=this._sentinel;if(entry._prev&&entry._next){unlink(entry);}entry._next=sentinel._next;sentinel._next._prev=entry;sentinel._next=entry;entry._prev=sentinel;};List.prototype.toString=function(){var strs=[],sentinel=this._sentinel,curr=sentinel._prev;while(curr!==sentinel){strs.push(JSON.stringify(curr,filterOutLinks));curr=curr._prev;}return "["+strs.join(", ")+"]"};function unlink(entry){entry._prev._next=entry._next;entry._next._prev=entry._prev;delete entry._next;delete entry._prev;}function filterOutLinks(k,v){if(k!=="_next"&&k!=="_prev"){return v}}},{}],6:[function(require,module,exports){var _=require("./lodash"),util=require("./util"),Graph=require("./graphlib").Graph;module.exports={debugOrdering:debugOrdering};
	/* istanbul ignore next */function debugOrdering(g){var layerMatrix=util.buildLayerMatrix(g);var h=new Graph({compound:true,multigraph:true}).setGraph({});_.forEach(g.nodes(),function(v){h.setNode(v,{label:v});h.setParent(v,"layer"+g.node(v).rank);});_.forEach(g.edges(),function(e){h.setEdge(e.v,e.w,{},e.name);});_.forEach(layerMatrix,function(layer,i){var layerV="layer"+i;h.setNode(layerV,{rank:"same"});_.reduce(layer,function(u,v){h.setEdge(u,v,{style:"invis"});return v});});return h}},{"./graphlib":7,"./lodash":10,"./util":29}],7:[function(require,module,exports){
	/* global window */
	var graphlib;if(typeof require==="function"){try{graphlib=require("graphlib");}catch(e){}}if(!graphlib){graphlib=window.graphlib;}module.exports=graphlib;},{graphlib:31}],8:[function(require,module,exports){var _=require("./lodash"),Graph=require("./graphlib").Graph,List=require("./data/list");
	/*
	 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
	 * arc set is a set of edges that can be removed to make a graph acyclic.
	 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
	 * effective heuristic for the feedback arc set problem." This implementation
	 * adjusts that from the paper to allow for weighted edges.
	 */module.exports=greedyFAS;var DEFAULT_WEIGHT_FN=_.constant(1);function greedyFAS(g,weightFn){if(g.nodeCount()<=1){return []}var state=buildState(g,weightFn||DEFAULT_WEIGHT_FN);var results=doGreedyFAS(state.graph,state.buckets,state.zeroIdx);
	// Expand multi-edges
	return _.flatten(_.map(results,function(e){return g.outEdges(e.v,e.w)}),true)}function doGreedyFAS(g,buckets,zeroIdx){var results=[],sources=buckets[buckets.length-1],sinks=buckets[0];var entry;while(g.nodeCount()){while(entry=sinks.dequeue()){removeNode(g,buckets,zeroIdx,entry);}while(entry=sources.dequeue()){removeNode(g,buckets,zeroIdx,entry);}if(g.nodeCount()){for(var i=buckets.length-2;i>0;--i){entry=buckets[i].dequeue();if(entry){results=results.concat(removeNode(g,buckets,zeroIdx,entry,true));break}}}}return results}function removeNode(g,buckets,zeroIdx,entry,collectPredecessors){var results=collectPredecessors?[]:undefined;_.forEach(g.inEdges(entry.v),function(edge){var weight=g.edge(edge),uEntry=g.node(edge.v);if(collectPredecessors){results.push({v:edge.v,w:edge.w});}uEntry.out-=weight;assignBucket(buckets,zeroIdx,uEntry);});_.forEach(g.outEdges(entry.v),function(edge){var weight=g.edge(edge),w=edge.w,wEntry=g.node(w);wEntry["in"]-=weight;assignBucket(buckets,zeroIdx,wEntry);});g.removeNode(entry.v);return results}function buildState(g,weightFn){var fasGraph=new Graph,maxIn=0,maxOut=0;_.forEach(g.nodes(),function(v){fasGraph.setNode(v,{v:v,in:0,out:0});});
	// Aggregate weights on nodes, but also sum the weights across multi-edges
	// into a single edge for the fasGraph.
	_.forEach(g.edges(),function(e){var prevWeight=fasGraph.edge(e.v,e.w)||0,weight=weightFn(e),edgeWeight=prevWeight+weight;fasGraph.setEdge(e.v,e.w,edgeWeight);maxOut=Math.max(maxOut,fasGraph.node(e.v).out+=weight);maxIn=Math.max(maxIn,fasGraph.node(e.w)["in"]+=weight);});var buckets=_.range(maxOut+maxIn+3).map(function(){return new List});var zeroIdx=maxIn+1;_.forEach(fasGraph.nodes(),function(v){assignBucket(buckets,zeroIdx,fasGraph.node(v));});return {graph:fasGraph,buckets:buckets,zeroIdx:zeroIdx}}function assignBucket(buckets,zeroIdx,entry){if(!entry.out){buckets[0].enqueue(entry);}else if(!entry["in"]){buckets[buckets.length-1].enqueue(entry);}else{buckets[entry.out-entry["in"]+zeroIdx].enqueue(entry);}}},{"./data/list":5,"./graphlib":7,"./lodash":10}],9:[function(require,module,exports){var _=require("./lodash"),acyclic=require("./acyclic"),normalize=require("./normalize"),rank=require("./rank"),normalizeRanks=require("./util").normalizeRanks,parentDummyChains=require("./parent-dummy-chains"),removeEmptyRanks=require("./util").removeEmptyRanks,nestingGraph=require("./nesting-graph"),addBorderSegments=require("./add-border-segments"),coordinateSystem=require("./coordinate-system"),order=require("./order"),position=require("./position"),util=require("./util"),Graph=require("./graphlib").Graph;module.exports=layout;function layout(g,opts){var time=opts&&opts.debugTiming?util.time:util.notime;time("layout",function(){var layoutGraph=time("  buildLayoutGraph",function(){return buildLayoutGraph(g)});time("  runLayout",function(){runLayout(layoutGraph,time);});time("  updateInputGraph",function(){updateInputGraph(g,layoutGraph);});});}function runLayout(g,time){time("    makeSpaceForEdgeLabels",function(){makeSpaceForEdgeLabels(g);});time("    removeSelfEdges",function(){removeSelfEdges(g);});time("    acyclic",function(){acyclic.run(g);});time("    nestingGraph.run",function(){nestingGraph.run(g);});time("    rank",function(){rank(util.asNonCompoundGraph(g));});time("    injectEdgeLabelProxies",function(){injectEdgeLabelProxies(g);});time("    removeEmptyRanks",function(){removeEmptyRanks(g);});time("    nestingGraph.cleanup",function(){nestingGraph.cleanup(g);});time("    normalizeRanks",function(){normalizeRanks(g);});time("    assignRankMinMax",function(){assignRankMinMax(g);});time("    removeEdgeLabelProxies",function(){removeEdgeLabelProxies(g);});time("    normalize.run",function(){normalize.run(g);});time("    parentDummyChains",function(){parentDummyChains(g);});time("    addBorderSegments",function(){addBorderSegments(g);});time("    order",function(){order(g);});time("    insertSelfEdges",function(){insertSelfEdges(g);});time("    adjustCoordinateSystem",function(){coordinateSystem.adjust(g);});time("    position",function(){position(g);});time("    positionSelfEdges",function(){positionSelfEdges(g);});time("    removeBorderNodes",function(){removeBorderNodes(g);});time("    normalize.undo",function(){normalize.undo(g);});time("    fixupEdgeLabelCoords",function(){fixupEdgeLabelCoords(g);});time("    undoCoordinateSystem",function(){coordinateSystem.undo(g);});time("    translateGraph",function(){translateGraph(g);});time("    assignNodeIntersects",function(){assignNodeIntersects(g);});time("    reversePoints",function(){reversePointsForReversedEdges(g);});time("    acyclic.undo",function(){acyclic.undo(g);});}
	/*
	 * Copies final layout information from the layout graph back to the input
	 * graph. This process only copies whitelisted attributes from the layout graph
	 * to the input graph, so it serves as a good place to determine what
	 * attributes can influence layout.
	 */function updateInputGraph(inputGraph,layoutGraph){_.forEach(inputGraph.nodes(),function(v){var inputLabel=inputGraph.node(v),layoutLabel=layoutGraph.node(v);if(inputLabel){inputLabel.x=layoutLabel.x;inputLabel.y=layoutLabel.y;if(layoutGraph.children(v).length){inputLabel.width=layoutLabel.width;inputLabel.height=layoutLabel.height;}}});_.forEach(inputGraph.edges(),function(e){var inputLabel=inputGraph.edge(e),layoutLabel=layoutGraph.edge(e);inputLabel.points=layoutLabel.points;if(_.has(layoutLabel,"x")){inputLabel.x=layoutLabel.x;inputLabel.y=layoutLabel.y;}});inputGraph.graph().width=layoutGraph.graph().width;inputGraph.graph().height=layoutGraph.graph().height;}var graphNumAttrs=["nodesep","edgesep","ranksep","marginx","marginy"],graphDefaults={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},graphAttrs=["acyclicer","ranker","rankdir","align"],nodeNumAttrs=["width","height"],nodeDefaults={width:0,height:0},edgeNumAttrs=["minlen","weight","width","height","labeloffset"],edgeDefaults={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},edgeAttrs=["labelpos"];
	/*
	 * Constructs a new graph from the input graph, which can be used for layout.
	 * This process copies only whitelisted attributes from the input graph to the
	 * layout graph. Thus this function serves as a good place to determine what
	 * attributes can influence layout.
	 */function buildLayoutGraph(inputGraph){var g=new Graph({multigraph:true,compound:true}),graph=canonicalize(inputGraph.graph());g.setGraph(_.merge({},graphDefaults,selectNumberAttrs(graph,graphNumAttrs),_.pick(graph,graphAttrs)));_.forEach(inputGraph.nodes(),function(v){var node=canonicalize(inputGraph.node(v));g.setNode(v,_.defaults(selectNumberAttrs(node,nodeNumAttrs),nodeDefaults));g.setParent(v,inputGraph.parent(v));});_.forEach(inputGraph.edges(),function(e){var edge=canonicalize(inputGraph.edge(e));g.setEdge(e,_.merge({},edgeDefaults,selectNumberAttrs(edge,edgeNumAttrs),_.pick(edge,edgeAttrs)));});return g}
	/*
	 * This idea comes from the Gansner paper: to account for edge labels in our
	 * layout we split each rank in half by doubling minlen and halving ranksep.
	 * Then we can place labels at these mid-points between nodes.
	 *
	 * We also add some minimal padding to the width to push the label for the edge
	 * away from the edge itself a bit.
	 */function makeSpaceForEdgeLabels(g){var graph=g.graph();graph.ranksep/=2;_.forEach(g.edges(),function(e){var edge=g.edge(e);edge.minlen*=2;if(edge.labelpos.toLowerCase()!=="c"){if(graph.rankdir==="TB"||graph.rankdir==="BT"){edge.width+=edge.labeloffset;}else{edge.height+=edge.labeloffset;}}});}
	/*
	 * Creates temporary dummy nodes that capture the rank in which each edge's
	 * label is going to, if it has one of non-zero width and height. We do this
	 * so that we can safely remove empty ranks while preserving balance for the
	 * label's position.
	 */function injectEdgeLabelProxies(g){_.forEach(g.edges(),function(e){var edge=g.edge(e);if(edge.width&&edge.height){var v=g.node(e.v),w=g.node(e.w),label={rank:(w.rank-v.rank)/2+v.rank,e:e};util.addDummyNode(g,"edge-proxy",label,"_ep");}});}function assignRankMinMax(g){var maxRank=0;_.forEach(g.nodes(),function(v){var node=g.node(v);if(node.borderTop){node.minRank=g.node(node.borderTop).rank;node.maxRank=g.node(node.borderBottom).rank;maxRank=_.max(maxRank,node.maxRank);}});g.graph().maxRank=maxRank;}function removeEdgeLabelProxies(g){_.forEach(g.nodes(),function(v){var node=g.node(v);if(node.dummy==="edge-proxy"){g.edge(node.e).labelRank=node.rank;g.removeNode(v);}});}function translateGraph(g){var minX=Number.POSITIVE_INFINITY,maxX=0,minY=Number.POSITIVE_INFINITY,maxY=0,graphLabel=g.graph(),marginX=graphLabel.marginx||0,marginY=graphLabel.marginy||0;function getExtremes(attrs){var x=attrs.x,y=attrs.y,w=attrs.width,h=attrs.height;minX=Math.min(minX,x-w/2);maxX=Math.max(maxX,x+w/2);minY=Math.min(minY,y-h/2);maxY=Math.max(maxY,y+h/2);}_.forEach(g.nodes(),function(v){getExtremes(g.node(v));});_.forEach(g.edges(),function(e){var edge=g.edge(e);if(_.has(edge,"x")){getExtremes(edge);}});minX-=marginX;minY-=marginY;_.forEach(g.nodes(),function(v){var node=g.node(v);node.x-=minX;node.y-=minY;});_.forEach(g.edges(),function(e){var edge=g.edge(e);_.forEach(edge.points,function(p){p.x-=minX;p.y-=minY;});if(_.has(edge,"x")){edge.x-=minX;}if(_.has(edge,"y")){edge.y-=minY;}});graphLabel.width=maxX-minX+marginX;graphLabel.height=maxY-minY+marginY;}function assignNodeIntersects(g){_.forEach(g.edges(),function(e){var edge=g.edge(e),nodeV=g.node(e.v),nodeW=g.node(e.w),p1,p2;if(!edge.points){edge.points=[];p1=nodeW;p2=nodeV;}else{p1=edge.points[0];p2=edge.points[edge.points.length-1];}edge.points.unshift(util.intersectRect(nodeV,p1));edge.points.push(util.intersectRect(nodeW,p2));});}function fixupEdgeLabelCoords(g){_.forEach(g.edges(),function(e){var edge=g.edge(e);if(_.has(edge,"x")){if(edge.labelpos==="l"||edge.labelpos==="r"){edge.width-=edge.labeloffset;}switch(edge.labelpos){case"l":edge.x-=edge.width/2+edge.labeloffset;break;case"r":edge.x+=edge.width/2+edge.labeloffset;break}}});}function reversePointsForReversedEdges(g){_.forEach(g.edges(),function(e){var edge=g.edge(e);if(edge.reversed){edge.points.reverse();}});}function removeBorderNodes(g){_.forEach(g.nodes(),function(v){if(g.children(v).length){var node=g.node(v),t=g.node(node.borderTop),b=g.node(node.borderBottom),l=g.node(_.last(node.borderLeft)),r=g.node(_.last(node.borderRight));node.width=Math.abs(r.x-l.x);node.height=Math.abs(b.y-t.y);node.x=l.x+node.width/2;node.y=t.y+node.height/2;}});_.forEach(g.nodes(),function(v){if(g.node(v).dummy==="border"){g.removeNode(v);}});}function removeSelfEdges(g){_.forEach(g.edges(),function(e){if(e.v===e.w){var node=g.node(e.v);if(!node.selfEdges){node.selfEdges=[];}node.selfEdges.push({e:e,label:g.edge(e)});g.removeEdge(e);}});}function insertSelfEdges(g){var layers=util.buildLayerMatrix(g);_.forEach(layers,function(layer){var orderShift=0;_.forEach(layer,function(v,i){var node=g.node(v);node.order=i+orderShift;_.forEach(node.selfEdges,function(selfEdge){util.addDummyNode(g,"selfedge",{width:selfEdge.label.width,height:selfEdge.label.height,rank:node.rank,order:i+ ++orderShift,e:selfEdge.e,label:selfEdge.label},"_se");});delete node.selfEdges;});});}function positionSelfEdges(g){_.forEach(g.nodes(),function(v){var node=g.node(v);if(node.dummy==="selfedge"){var selfNode=g.node(node.e.v),x=selfNode.x+selfNode.width/2,y=selfNode.y,dx=node.x-x,dy=selfNode.height/2;g.setEdge(node.e,node.label);g.removeNode(v);node.label.points=[{x:x+2*dx/3,y:y-dy},{x:x+5*dx/6,y:y-dy},{x:x+dx,y:y},{x:x+5*dx/6,y:y+dy},{x:x+2*dx/3,y:y+dy}];node.label.x=node.x;node.label.y=node.y;}});}function selectNumberAttrs(obj,attrs){return _.mapValues(_.pick(obj,attrs),Number)}function canonicalize(attrs){var newAttrs={};_.forEach(attrs,function(v,k){newAttrs[k.toLowerCase()]=v;});return newAttrs}},{"./acyclic":2,"./add-border-segments":3,"./coordinate-system":4,"./graphlib":7,"./lodash":10,"./nesting-graph":11,"./normalize":12,"./order":17,"./parent-dummy-chains":22,"./position":24,"./rank":26,"./util":29}],10:[function(require,module,exports){
	/* global window */
	var lodash;if(typeof require==="function"){try{lodash=require("lodash");}catch(e){}}if(!lodash){lodash=window._;}module.exports=lodash;},{lodash:51}],11:[function(require,module,exports){var _=require("./lodash"),util=require("./util");module.exports={run:run,cleanup:cleanup};
	/*
	 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
	 * adds appropriate edges to ensure that all cluster nodes are placed between
	 * these boundries, and ensures that the graph is connected.
	 *
	 * In addition we ensure, through the use of the minlen property, that nodes
	 * and subgraph border nodes to not end up on the same rank.
	 *
	 * Preconditions:
	 *
	 *    1. Input graph is a DAG
	 *    2. Nodes in the input graph has a minlen attribute
	 *
	 * Postconditions:
	 *
	 *    1. Input graph is connected.
	 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
	 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
	 *       get placed on the same rank as subgraph border nodes.
	 *
	 * The nesting graph idea comes from Sander, "Layout of Compound Directed
	 * Graphs."
	 */function run(g){var root=util.addDummyNode(g,"root",{},"_root");var depths=treeDepths(g);var height=_.max(_.values(depths))-1;// Note: depths is an Object not an array
	var nodeSep=2*height+1;g.graph().nestingRoot=root;
	// Multiply minlen by nodeSep to align nodes on non-border ranks.
	_.forEach(g.edges(),function(e){g.edge(e).minlen*=nodeSep;});
	// Calculate a weight that is sufficient to keep subgraphs vertically compact
	var weight=sumWeights(g)+1;
	// Create border nodes and link them up
	_.forEach(g.children(),function(child){dfs(g,root,nodeSep,weight,height,depths,child);});
	// Save the multiplier for node layers for later removal of empty border
	// layers.
	g.graph().nodeRankFactor=nodeSep;}function dfs(g,root,nodeSep,weight,height,depths,v){var children=g.children(v);if(!children.length){if(v!==root){g.setEdge(root,v,{weight:0,minlen:nodeSep});}return}var top=util.addBorderNode(g,"_bt"),bottom=util.addBorderNode(g,"_bb"),label=g.node(v);g.setParent(top,v);label.borderTop=top;g.setParent(bottom,v);label.borderBottom=bottom;_.forEach(children,function(child){dfs(g,root,nodeSep,weight,height,depths,child);var childNode=g.node(child),childTop=childNode.borderTop?childNode.borderTop:child,childBottom=childNode.borderBottom?childNode.borderBottom:child,thisWeight=childNode.borderTop?weight:2*weight,minlen=childTop!==childBottom?1:height-depths[v]+1;g.setEdge(top,childTop,{weight:thisWeight,minlen:minlen,nestingEdge:true});g.setEdge(childBottom,bottom,{weight:thisWeight,minlen:minlen,nestingEdge:true});});if(!g.parent(v)){g.setEdge(root,top,{weight:0,minlen:height+depths[v]});}}function treeDepths(g){var depths={};function dfs(v,depth){var children=g.children(v);if(children&&children.length){_.forEach(children,function(child){dfs(child,depth+1);});}depths[v]=depth;}_.forEach(g.children(),function(v){dfs(v,1);});return depths}function sumWeights(g){return _.reduce(g.edges(),function(acc,e){return acc+g.edge(e).weight},0)}function cleanup(g){var graphLabel=g.graph();g.removeNode(graphLabel.nestingRoot);delete graphLabel.nestingRoot;_.forEach(g.edges(),function(e){var edge=g.edge(e);if(edge.nestingEdge){g.removeEdge(e);}});}},{"./lodash":10,"./util":29}],12:[function(require,module,exports){var _=require("./lodash"),util=require("./util");module.exports={run:run,undo:undo};
	/*
	 * Breaks any long edges in the graph into short segments that span 1 layer
	 * each. This operation is undoable with the denormalize function.
	 *
	 * Pre-conditions:
	 *
	 *    1. The input graph is a DAG.
	 *    2. Each node in the graph has a "rank" property.
	 *
	 * Post-condition:
	 *
	 *    1. All edges in the graph have a length of 1.
	 *    2. Dummy nodes are added where edges have been split into segments.
	 *    3. The graph is augmented with a "dummyChains" attribute which contains
	 *       the first dummy in each chain of dummy nodes produced.
	 */function run(g){g.graph().dummyChains=[];_.forEach(g.edges(),function(edge){normalizeEdge(g,edge);});}function normalizeEdge(g,e){var v=e.v,vRank=g.node(v).rank,w=e.w,wRank=g.node(w).rank,name=e.name,edgeLabel=g.edge(e),labelRank=edgeLabel.labelRank;if(wRank===vRank+1)return;g.removeEdge(e);var dummy,attrs,i;for(i=0,++vRank;vRank<wRank;++i,++vRank){edgeLabel.points=[];attrs={width:0,height:0,edgeLabel:edgeLabel,edgeObj:e,rank:vRank};dummy=util.addDummyNode(g,"edge",attrs,"_d");if(vRank===labelRank){attrs.width=edgeLabel.width;attrs.height=edgeLabel.height;attrs.dummy="edge-label";attrs.labelpos=edgeLabel.labelpos;}g.setEdge(v,dummy,{weight:edgeLabel.weight},name);if(i===0){g.graph().dummyChains.push(dummy);}v=dummy;}g.setEdge(v,w,{weight:edgeLabel.weight},name);}function undo(g){_.forEach(g.graph().dummyChains,function(v){var node=g.node(v),origLabel=node.edgeLabel,w;g.setEdge(node.edgeObj,origLabel);while(node.dummy){w=g.successors(v)[0];g.removeNode(v);origLabel.points.push({x:node.x,y:node.y});if(node.dummy==="edge-label"){origLabel.x=node.x;origLabel.y=node.y;origLabel.width=node.width;origLabel.height=node.height;}v=w;node=g.node(v);}});}},{"./lodash":10,"./util":29}],13:[function(require,module,exports){var _=require("../lodash");module.exports=addSubgraphConstraints;function addSubgraphConstraints(g,cg,vs){var prev={},rootPrev;_.forEach(vs,function(v){var child=g.parent(v),parent,prevChild;while(child){parent=g.parent(child);if(parent){prevChild=prev[parent];prev[parent]=child;}else{prevChild=rootPrev;rootPrev=child;}if(prevChild&&prevChild!==child){cg.setEdge(prevChild,child);return}child=parent;}});
	/*
	  function dfs(v) {
	    var children = v ? g.children(v) : g.children();
	    if (children.length) {
	      var min = Number.POSITIVE_INFINITY,
	          subgraphs = [];
	      _.each(children, function(child) {
	        var childMin = dfs(child);
	        if (g.children(child).length) {
	          subgraphs.push({ v: child, order: childMin });
	        }
	        min = Math.min(min, childMin);
	      });
	      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
	        cg.setEdge(prev.v, curr.v);
	        return curr;
	      });
	      return min;
	    }
	    return g.node(v).order;
	  }
	  dfs(undefined);
	  */}},{"../lodash":10}],14:[function(require,module,exports){var _=require("../lodash");module.exports=barycenter;function barycenter(g,movable){return _.map(movable,function(v){var inV=g.inEdges(v);if(!inV.length){return {v:v}}else{var result=_.reduce(inV,function(acc,e){var edge=g.edge(e),nodeU=g.node(e.v);return {sum:acc.sum+edge.weight*nodeU.order,weight:acc.weight+edge.weight}},{sum:0,weight:0});return {v:v,barycenter:result.sum/result.weight,weight:result.weight}}})}},{"../lodash":10}],15:[function(require,module,exports){var _=require("../lodash"),Graph=require("../graphlib").Graph;module.exports=buildLayerGraph;
	/*
	 * Constructs a graph that can be used to sort a layer of nodes. The graph will
	 * contain all base and subgraph nodes from the request layer in their original
	 * hierarchy and any edges that are incident on these nodes and are of the type
	 * requested by the "relationship" parameter.
	 *
	 * Nodes from the requested rank that do not have parents are assigned a root
	 * node in the output graph, which is set in the root graph attribute. This
	 * makes it easy to walk the hierarchy of movable nodes during ordering.
	 *
	 * Pre-conditions:
	 *
	 *    1. Input graph is a DAG
	 *    2. Base nodes in the input graph have a rank attribute
	 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
	 *    4. Edges have an assigned weight
	 *
	 * Post-conditions:
	 *
	 *    1. Output graph has all nodes in the movable rank with preserved
	 *       hierarchy.
	 *    2. Root nodes in the movable layer are made children of the node
	 *       indicated by the root attribute of the graph.
	 *    3. Non-movable nodes incident on movable nodes, selected by the
	 *       relationship parameter, are included in the graph (without hierarchy).
	 *    4. Edges incident on movable nodes, selected by the relationship
	 *       parameter, are added to the output graph.
	 *    5. The weights for copied edges are aggregated as need, since the output
	 *       graph is not a multi-graph.
	 */function buildLayerGraph(g,rank,relationship){var root=createRootNode(g),result=new Graph({compound:true}).setGraph({root:root}).setDefaultNodeLabel(function(v){return g.node(v)});_.forEach(g.nodes(),function(v){var node=g.node(v),parent=g.parent(v);if(node.rank===rank||node.minRank<=rank&&rank<=node.maxRank){result.setNode(v);result.setParent(v,parent||root);
	// This assumes we have only short edges!
	_.forEach(g[relationship](v),function(e){var u=e.v===v?e.w:e.v,edge=result.edge(u,v),weight=!_.isUndefined(edge)?edge.weight:0;result.setEdge(u,v,{weight:g.edge(e).weight+weight});});if(_.has(node,"minRank")){result.setNode(v,{borderLeft:node.borderLeft[rank],borderRight:node.borderRight[rank]});}}});return result}function createRootNode(g){var v;while(g.hasNode(v=_.uniqueId("_root")));return v}},{"../graphlib":7,"../lodash":10}],16:[function(require,module,exports){var _=require("../lodash");module.exports=crossCount;
	/*
	 * A function that takes a layering (an array of layers, each with an array of
	 * ordererd nodes) and a graph and returns a weighted crossing count.
	 *
	 * Pre-conditions:
	 *
	 *    1. Input graph must be simple (not a multigraph), directed, and include
	 *       only simple edges.
	 *    2. Edges in the input graph must have assigned weights.
	 *
	 * Post-conditions:
	 *
	 *    1. The graph and layering matrix are left unchanged.
	 *
	 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
	 */function crossCount(g,layering){var cc=0;for(var i=1;i<layering.length;++i){cc+=twoLayerCrossCount(g,layering[i-1],layering[i]);}return cc}function twoLayerCrossCount(g,northLayer,southLayer){
	// Sort all of the edges between the north and south layers by their position
	// in the north layer and then the south. Map these edges to the position of
	// their head in the south layer.
	var southPos=_.zipObject(southLayer,_.map(southLayer,function(v,i){return i}));var southEntries=_.flatten(_.map(northLayer,function(v){return _.chain(g.outEdges(v)).map(function(e){return {pos:southPos[e.w],weight:g.edge(e).weight}}).sortBy("pos").value()}),true);
	// Build the accumulator tree
	var firstIndex=1;while(firstIndex<southLayer.length)firstIndex<<=1;var treeSize=2*firstIndex-1;firstIndex-=1;var tree=_.map(new Array(treeSize),function(){return 0});
	// Calculate the weighted crossings
	var cc=0;_.forEach(southEntries.forEach(function(entry){var index=entry.pos+firstIndex;tree[index]+=entry.weight;var weightSum=0;while(index>0){if(index%2){weightSum+=tree[index+1];}index=index-1>>1;tree[index]+=entry.weight;}cc+=entry.weight*weightSum;}));return cc}},{"../lodash":10}],17:[function(require,module,exports){var _=require("../lodash"),initOrder=require("./init-order"),crossCount=require("./cross-count"),sortSubgraph=require("./sort-subgraph"),buildLayerGraph=require("./build-layer-graph"),addSubgraphConstraints=require("./add-subgraph-constraints"),Graph=require("../graphlib").Graph,util=require("../util");module.exports=order;
	/*
	 * Applies heuristics to minimize edge crossings in the graph and sets the best
	 * order solution as an order attribute on each node.
	 *
	 * Pre-conditions:
	 *
	 *    1. Graph must be DAG
	 *    2. Graph nodes must be objects with a "rank" attribute
	 *    3. Graph edges must have the "weight" attribute
	 *
	 * Post-conditions:
	 *
	 *    1. Graph nodes will have an "order" attribute based on the results of the
	 *       algorithm.
	 */function order(g){var maxRank=util.maxRank(g),downLayerGraphs=buildLayerGraphs(g,_.range(1,maxRank+1),"inEdges"),upLayerGraphs=buildLayerGraphs(g,_.range(maxRank-1,-1,-1),"outEdges");var layering=initOrder(g);assignOrder(g,layering);var bestCC=Number.POSITIVE_INFINITY,best;for(var i=0,lastBest=0;lastBest<4;++i,++lastBest){sweepLayerGraphs(i%2?downLayerGraphs:upLayerGraphs,i%4>=2);layering=util.buildLayerMatrix(g);var cc=crossCount(g,layering);if(cc<bestCC){lastBest=0;best=_.cloneDeep(layering);bestCC=cc;}}assignOrder(g,best);}function buildLayerGraphs(g,ranks,relationship){return _.map(ranks,function(rank){return buildLayerGraph(g,rank,relationship)})}function sweepLayerGraphs(layerGraphs,biasRight){var cg=new Graph;_.forEach(layerGraphs,function(lg){var root=lg.graph().root;var sorted=sortSubgraph(lg,root,cg,biasRight);_.forEach(sorted.vs,function(v,i){lg.node(v).order=i;});addSubgraphConstraints(lg,cg,sorted.vs);});}function assignOrder(g,layering){_.forEach(layering,function(layer){_.forEach(layer,function(v,i){g.node(v).order=i;});});}},{"../graphlib":7,"../lodash":10,"../util":29,"./add-subgraph-constraints":13,"./build-layer-graph":15,"./cross-count":16,"./init-order":18,"./sort-subgraph":20}],18:[function(require,module,exports){var _=require("../lodash");module.exports=initOrder;
	/*
	 * Assigns an initial order value for each node by performing a DFS search
	 * starting from nodes in the first rank. Nodes are assigned an order in their
	 * rank as they are first visited.
	 *
	 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
	 * Graphs."
	 *
	 * Returns a layering matrix with an array per layer and each layer sorted by
	 * the order of its nodes.
	 */function initOrder(g){var visited={},simpleNodes=_.filter(g.nodes(),function(v){return !g.children(v).length}),maxRank=_.max(_.map(simpleNodes,function(v){return g.node(v).rank})),layers=_.map(_.range(maxRank+1),function(){return []});function dfs(v){if(_.has(visited,v))return;visited[v]=true;var node=g.node(v);layers[node.rank].push(v);_.forEach(g.successors(v),dfs);}var orderedVs=_.sortBy(simpleNodes,function(v){return g.node(v).rank});_.forEach(orderedVs,dfs);return layers}},{"../lodash":10}],19:[function(require,module,exports){var _=require("../lodash");module.exports=resolveConflicts;
	/*
	 * Given a list of entries of the form {v, barycenter, weight} and a
	 * constraint graph this function will resolve any conflicts between the
	 * constraint graph and the barycenters for the entries. If the barycenters for
	 * an entry would violate a constraint in the constraint graph then we coalesce
	 * the nodes in the conflict into a new node that respects the contraint and
	 * aggregates barycenter and weight information.
	 *
	 * This implementation is based on the description in Forster, "A Fast and
	 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
	 * differs in some specific details.
	 *
	 * Pre-conditions:
	 *
	 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
	 *       no barycenter, then {v}.
	 *
	 * Returns:
	 *
	 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
	 *    `vs` may either be a singleton or it may be an aggregation of nodes
	 *    ordered such that they do not violate constraints from the constraint
	 *    graph. The property `i` is the lowest original index of any of the
	 *    elements in `vs`.
	 */function resolveConflicts(entries,cg){var mappedEntries={};_.forEach(entries,function(entry,i){var tmp=mappedEntries[entry.v]={indegree:0,in:[],out:[],vs:[entry.v],i:i};if(!_.isUndefined(entry.barycenter)){tmp.barycenter=entry.barycenter;tmp.weight=entry.weight;}});_.forEach(cg.edges(),function(e){var entryV=mappedEntries[e.v],entryW=mappedEntries[e.w];if(!_.isUndefined(entryV)&&!_.isUndefined(entryW)){entryW.indegree++;entryV.out.push(mappedEntries[e.w]);}});var sourceSet=_.filter(mappedEntries,function(entry){return !entry.indegree});return doResolveConflicts(sourceSet)}function doResolveConflicts(sourceSet){var entries=[];function handleIn(vEntry){return function(uEntry){if(uEntry.merged){return}if(_.isUndefined(uEntry.barycenter)||_.isUndefined(vEntry.barycenter)||uEntry.barycenter>=vEntry.barycenter){mergeEntries(vEntry,uEntry);}}}function handleOut(vEntry){return function(wEntry){wEntry["in"].push(vEntry);if(--wEntry.indegree===0){sourceSet.push(wEntry);}}}while(sourceSet.length){var entry=sourceSet.pop();entries.push(entry);_.forEach(entry["in"].reverse(),handleIn(entry));_.forEach(entry.out,handleOut(entry));}return _.chain(entries).filter(function(entry){return !entry.merged}).map(function(entry){return _.pick(entry,["vs","i","barycenter","weight"])}).value()}function mergeEntries(target,source){var sum=0,weight=0;if(target.weight){sum+=target.barycenter*target.weight;weight+=target.weight;}if(source.weight){sum+=source.barycenter*source.weight;weight+=source.weight;}target.vs=source.vs.concat(target.vs);target.barycenter=sum/weight;target.weight=weight;target.i=Math.min(source.i,target.i);source.merged=true;}},{"../lodash":10}],20:[function(require,module,exports){var _=require("../lodash"),barycenter=require("./barycenter"),resolveConflicts=require("./resolve-conflicts"),sort=require("./sort");module.exports=sortSubgraph;function sortSubgraph(g,v,cg,biasRight){var movable=g.children(v),node=g.node(v),bl=node?node.borderLeft:undefined,br=node?node.borderRight:undefined,subgraphs={};if(bl){movable=_.filter(movable,function(w){return w!==bl&&w!==br});}var barycenters=barycenter(g,movable);_.forEach(barycenters,function(entry){if(g.children(entry.v).length){var subgraphResult=sortSubgraph(g,entry.v,cg,biasRight);subgraphs[entry.v]=subgraphResult;if(_.has(subgraphResult,"barycenter")){mergeBarycenters(entry,subgraphResult);}}});var entries=resolveConflicts(barycenters,cg);expandSubgraphs(entries,subgraphs);var result=sort(entries,biasRight);if(bl){result.vs=_.flatten([bl,result.vs,br],true);if(g.predecessors(bl).length){var blPred=g.node(g.predecessors(bl)[0]),brPred=g.node(g.predecessors(br)[0]);if(!_.has(result,"barycenter")){result.barycenter=0;result.weight=0;}result.barycenter=(result.barycenter*result.weight+blPred.order+brPred.order)/(result.weight+2);result.weight+=2;}}return result}function expandSubgraphs(entries,subgraphs){_.forEach(entries,function(entry){entry.vs=_.flatten(entry.vs.map(function(v){if(subgraphs[v]){return subgraphs[v].vs}return v}),true);});}function mergeBarycenters(target,other){if(!_.isUndefined(target.barycenter)){target.barycenter=(target.barycenter*target.weight+other.barycenter*other.weight)/(target.weight+other.weight);target.weight+=other.weight;}else{target.barycenter=other.barycenter;target.weight=other.weight;}}},{"../lodash":10,"./barycenter":14,"./resolve-conflicts":19,"./sort":21}],21:[function(require,module,exports){var _=require("../lodash"),util=require("../util");module.exports=sort;function sort(entries,biasRight){var parts=util.partition(entries,function(entry){return _.has(entry,"barycenter")});var sortable=parts.lhs,unsortable=_.sortBy(parts.rhs,function(entry){return -entry.i}),vs=[],sum=0,weight=0,vsIndex=0;sortable.sort(compareWithBias(!!biasRight));vsIndex=consumeUnsortable(vs,unsortable,vsIndex);_.forEach(sortable,function(entry){vsIndex+=entry.vs.length;vs.push(entry.vs);sum+=entry.barycenter*entry.weight;weight+=entry.weight;vsIndex=consumeUnsortable(vs,unsortable,vsIndex);});var result={vs:_.flatten(vs,true)};if(weight){result.barycenter=sum/weight;result.weight=weight;}return result}function consumeUnsortable(vs,unsortable,index){var last;while(unsortable.length&&(last=_.last(unsortable)).i<=index){unsortable.pop();vs.push(last.vs);index++;}return index}function compareWithBias(bias){return function(entryV,entryW){if(entryV.barycenter<entryW.barycenter){return -1}else if(entryV.barycenter>entryW.barycenter){return 1}return !bias?entryV.i-entryW.i:entryW.i-entryV.i}}},{"../lodash":10,"../util":29}],22:[function(require,module,exports){var _=require("./lodash");module.exports=parentDummyChains;function parentDummyChains(g){var postorderNums=postorder(g);_.forEach(g.graph().dummyChains,function(v){var node=g.node(v),edgeObj=node.edgeObj,pathData=findPath(g,postorderNums,edgeObj.v,edgeObj.w),path=pathData.path,lca=pathData.lca,pathIdx=0,pathV=path[pathIdx],ascending=true;while(v!==edgeObj.w){node=g.node(v);if(ascending){while((pathV=path[pathIdx])!==lca&&g.node(pathV).maxRank<node.rank){pathIdx++;}if(pathV===lca){ascending=false;}}if(!ascending){while(pathIdx<path.length-1&&g.node(pathV=path[pathIdx+1]).minRank<=node.rank){pathIdx++;}pathV=path[pathIdx];}g.setParent(v,pathV);v=g.successors(v)[0];}});}
	// Find a path from v to w through the lowest common ancestor (LCA). Return the
	// full path and the LCA.
	function findPath(g,postorderNums,v,w){var vPath=[],wPath=[],low=Math.min(postorderNums[v].low,postorderNums[w].low),lim=Math.max(postorderNums[v].lim,postorderNums[w].lim),parent,lca;
	// Traverse up from v to find the LCA
	parent=v;do{parent=g.parent(parent);vPath.push(parent);}while(parent&&(postorderNums[parent].low>low||lim>postorderNums[parent].lim));lca=parent;
	// Traverse from w to LCA
	parent=w;while((parent=g.parent(parent))!==lca){wPath.push(parent);}return {path:vPath.concat(wPath.reverse()),lca:lca}}function postorder(g){var result={},lim=0;function dfs(v){var low=lim;_.forEach(g.children(v),dfs);result[v]={low:low,lim:lim++};}_.forEach(g.children(),dfs);return result}},{"./lodash":10}],23:[function(require,module,exports){var _=require("../lodash"),Graph=require("../graphlib").Graph,util=require("../util");
	/*
	 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
	 * and Simple Horizontal Coordinate Assignment."
	 */module.exports={positionX:positionX,findType1Conflicts:findType1Conflicts,findType2Conflicts:findType2Conflicts,addConflict:addConflict,hasConflict:hasConflict,verticalAlignment:verticalAlignment,horizontalCompaction:horizontalCompaction,alignCoordinates:alignCoordinates,findSmallestWidthAlignment:findSmallestWidthAlignment,balance:balance};
	/*
	 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
	 * property. A type-1 conflict is one where a non-inner segment crosses an
	 * inner segment. An inner segment is an edge with both incident nodes marked
	 * with the "dummy" property.
	 *
	 * This algorithm scans layer by layer, starting with the second, for type-1
	 * conflicts between the current layer and the previous layer. For each layer
	 * it scans the nodes from left to right until it reaches one that is incident
	 * on an inner segment. It then scans predecessors to determine if they have
	 * edges that cross that inner segment. At the end a final scan is done for all
	 * nodes on the current rank to see if they cross the last visited inner
	 * segment.
	 *
	 * This algorithm (safely) assumes that a dummy node will only be incident on a
	 * single node in the layers being scanned.
	 */function findType1Conflicts(g,layering){var conflicts={};function visitLayer(prevLayer,layer){var
	// last visited node in the previous layer that is incident on an inner
	// segment.
	k0=0,
	// Tracks the last node in this layer scanned for crossings with a type-1
	// segment.
	scanPos=0,prevLayerLength=prevLayer.length,lastNode=_.last(layer);_.forEach(layer,function(v,i){var w=findOtherInnerSegmentNode(g,v),k1=w?g.node(w).order:prevLayerLength;if(w||v===lastNode){_.forEach(layer.slice(scanPos,i+1),function(scanNode){_.forEach(g.predecessors(scanNode),function(u){var uLabel=g.node(u),uPos=uLabel.order;if((uPos<k0||k1<uPos)&&!(uLabel.dummy&&g.node(scanNode).dummy)){addConflict(conflicts,u,scanNode);}});});scanPos=i+1;k0=k1;}});return layer}_.reduce(layering,visitLayer);return conflicts}function findType2Conflicts(g,layering){var conflicts={};function scan(south,southPos,southEnd,prevNorthBorder,nextNorthBorder){var v;_.forEach(_.range(southPos,southEnd),function(i){v=south[i];if(g.node(v).dummy){_.forEach(g.predecessors(v),function(u){var uNode=g.node(u);if(uNode.dummy&&(uNode.order<prevNorthBorder||uNode.order>nextNorthBorder)){addConflict(conflicts,u,v);}});}});}function visitLayer(north,south){var prevNorthPos=-1,nextNorthPos,southPos=0;_.forEach(south,function(v,southLookahead){if(g.node(v).dummy==="border"){var predecessors=g.predecessors(v);if(predecessors.length){nextNorthPos=g.node(predecessors[0]).order;scan(south,southPos,southLookahead,prevNorthPos,nextNorthPos);southPos=southLookahead;prevNorthPos=nextNorthPos;}}scan(south,southPos,south.length,nextNorthPos,north.length);});return south}_.reduce(layering,visitLayer);return conflicts}function findOtherInnerSegmentNode(g,v){if(g.node(v).dummy){return _.find(g.predecessors(v),function(u){return g.node(u).dummy})}}function addConflict(conflicts,v,w){if(v>w){var tmp=v;v=w;w=tmp;}var conflictsV=conflicts[v];if(!conflictsV){conflicts[v]=conflictsV={};}conflictsV[w]=true;}function hasConflict(conflicts,v,w){if(v>w){var tmp=v;v=w;w=tmp;}return _.has(conflicts[v],w)}
	/*
	 * Try to align nodes into vertical "blocks" where possible. This algorithm
	 * attempts to align a node with one of its median neighbors. If the edge
	 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
	 * If a previous node has already formed a block with a node after the node
	 * we're trying to form a block with, we also ignore that possibility - our
	 * blocks would be split in that scenario.
	 */function verticalAlignment(g,layering,conflicts,neighborFn){var root={},align={},pos={};
	// We cache the position here based on the layering because the graph and
	// layering may be out of sync. The layering matrix is manipulated to
	// generate different extreme alignments.
	_.forEach(layering,function(layer){_.forEach(layer,function(v,order){root[v]=v;align[v]=v;pos[v]=order;});});_.forEach(layering,function(layer){var prevIdx=-1;_.forEach(layer,function(v){var ws=neighborFn(v);if(ws.length){ws=_.sortBy(ws,function(w){return pos[w]});var mp=(ws.length-1)/2;for(var i=Math.floor(mp),il=Math.ceil(mp);i<=il;++i){var w=ws[i];if(align[v]===v&&prevIdx<pos[w]&&!hasConflict(conflicts,v,w)){align[w]=v;align[v]=root[v]=root[w];prevIdx=pos[w];}}}});});return {root:root,align:align}}function horizontalCompaction(g,layering,root,align,reverseSep){
	// This portion of the algorithm differs from BK due to a number of problems.
	// Instead of their algorithm we construct a new block graph and do two
	// sweeps. The first sweep places blocks with the smallest possible
	// coordinates. The second sweep removes unused space by moving blocks to the
	// greatest coordinates without violating separation.
	var xs={},blockG=buildBlockGraph(g,layering,root,reverseSep),borderType=reverseSep?"borderLeft":"borderRight";function iterate(setXsFunc,nextNodesFunc){var stack=blockG.nodes();var elem=stack.pop();var visited={};while(elem){if(visited[elem]){setXsFunc(elem);}else{visited[elem]=true;stack.push(elem);stack=stack.concat(nextNodesFunc(elem));}elem=stack.pop();}}
	// First pass, assign smallest coordinates
	function pass1(elem){xs[elem]=blockG.inEdges(elem).reduce(function(acc,e){return Math.max(acc,xs[e.v]+blockG.edge(e))},0);}
	// Second pass, assign greatest coordinates
	function pass2(elem){var min=blockG.outEdges(elem).reduce(function(acc,e){return Math.min(acc,xs[e.w]-blockG.edge(e))},Number.POSITIVE_INFINITY);var node=g.node(elem);if(min!==Number.POSITIVE_INFINITY&&node.borderType!==borderType){xs[elem]=Math.max(xs[elem],min);}}iterate(pass1,_.bind(blockG.predecessors,blockG));iterate(pass2,_.bind(blockG.successors,blockG));
	// Assign x coordinates to all nodes
	_.forEach(align,function(v){xs[v]=xs[root[v]];});return xs}function buildBlockGraph(g,layering,root,reverseSep){var blockGraph=new Graph,graphLabel=g.graph(),sepFn=sep(graphLabel.nodesep,graphLabel.edgesep,reverseSep);_.forEach(layering,function(layer){var u;_.forEach(layer,function(v){var vRoot=root[v];blockGraph.setNode(vRoot);if(u){var uRoot=root[u],prevMax=blockGraph.edge(uRoot,vRoot);blockGraph.setEdge(uRoot,vRoot,Math.max(sepFn(g,v,u),prevMax||0));}u=v;});});return blockGraph}
	/*
	 * Returns the alignment that has the smallest width of the given alignments.
	 */function findSmallestWidthAlignment(g,xss){return _.minBy(_.values(xss),function(xs){var max=Number.NEGATIVE_INFINITY;var min=Number.POSITIVE_INFINITY;_.forIn(xs,function(x,v){var halfWidth=width(g,v)/2;max=Math.max(x+halfWidth,max);min=Math.min(x-halfWidth,min);});return max-min})}
	/*
	 * Align the coordinates of each of the layout alignments such that
	 * left-biased alignments have their minimum coordinate at the same point as
	 * the minimum coordinate of the smallest width alignment and right-biased
	 * alignments have their maximum coordinate at the same point as the maximum
	 * coordinate of the smallest width alignment.
	 */function alignCoordinates(xss,alignTo){var alignToVals=_.values(alignTo),alignToMin=_.min(alignToVals),alignToMax=_.max(alignToVals);_.forEach(["u","d"],function(vert){_.forEach(["l","r"],function(horiz){var alignment=vert+horiz,xs=xss[alignment],delta;if(xs===alignTo)return;var xsVals=_.values(xs);delta=horiz==="l"?alignToMin-_.min(xsVals):alignToMax-_.max(xsVals);if(delta){xss[alignment]=_.mapValues(xs,function(x){return x+delta});}});});}function balance(xss,align){return _.mapValues(xss.ul,function(ignore,v){if(align){return xss[align.toLowerCase()][v]}else{var xs=_.sortBy(_.map(xss,v));return (xs[1]+xs[2])/2}})}function positionX(g){var layering=util.buildLayerMatrix(g),conflicts=_.merge(findType1Conflicts(g,layering),findType2Conflicts(g,layering));var xss={},adjustedLayering;_.forEach(["u","d"],function(vert){adjustedLayering=vert==="u"?layering:_.values(layering).reverse();_.forEach(["l","r"],function(horiz){if(horiz==="r"){adjustedLayering=_.map(adjustedLayering,function(inner){return _.values(inner).reverse()});}var neighborFn=_.bind(vert==="u"?g.predecessors:g.successors,g);var align=verticalAlignment(g,adjustedLayering,conflicts,neighborFn);var xs=horizontalCompaction(g,adjustedLayering,align.root,align.align,horiz==="r");if(horiz==="r"){xs=_.mapValues(xs,function(x){return -x});}xss[vert+horiz]=xs;});});var smallestWidth=findSmallestWidthAlignment(g,xss);alignCoordinates(xss,smallestWidth);return balance(xss,g.graph().align)}function sep(nodeSep,edgeSep,reverseSep){return function(g,v,w){var vLabel=g.node(v),wLabel=g.node(w),sum=0,delta;sum+=vLabel.width/2;if(_.has(vLabel,"labelpos")){switch(vLabel.labelpos.toLowerCase()){case"l":delta=-vLabel.width/2;break;case"r":delta=vLabel.width/2;break}}if(delta){sum+=reverseSep?delta:-delta;}delta=0;sum+=(vLabel.dummy?edgeSep:nodeSep)/2;sum+=(wLabel.dummy?edgeSep:nodeSep)/2;sum+=wLabel.width/2;if(_.has(wLabel,"labelpos")){switch(wLabel.labelpos.toLowerCase()){case"l":delta=wLabel.width/2;break;case"r":delta=-wLabel.width/2;break}}if(delta){sum+=reverseSep?delta:-delta;}delta=0;return sum}}function width(g,v){return g.node(v).width}},{"../graphlib":7,"../lodash":10,"../util":29}],24:[function(require,module,exports){var _=require("../lodash"),util=require("../util"),positionX=require("./bk").positionX;module.exports=position;function position(g){g=util.asNonCompoundGraph(g);positionY(g);_.forEach(positionX(g),function(x,v){g.node(v).x=x;});}function positionY(g){var layering=util.buildLayerMatrix(g),rankSep=g.graph().ranksep,prevY=0;_.forEach(layering,function(layer){var maxHeight=_.max(_.map(layer,function(v){return g.node(v).height}));_.forEach(layer,function(v){g.node(v).y=prevY+maxHeight/2;});prevY+=maxHeight+rankSep;});}},{"../lodash":10,"../util":29,"./bk":23}],25:[function(require,module,exports){var _=require("../lodash"),Graph=require("../graphlib").Graph,slack=require("./util").slack;module.exports=feasibleTree;
	/*
	 * Constructs a spanning tree with tight edges and adjusted the input node's
	 * ranks to achieve this. A tight edge is one that is has a length that matches
	 * its "minlen" attribute.
	 *
	 * The basic structure for this function is derived from Gansner, et al., "A
	 * Technique for Drawing Directed Graphs."
	 *
	 * Pre-conditions:
	 *
	 *    1. Graph must be a DAG.
	 *    2. Graph must be connected.
	 *    3. Graph must have at least one node.
	 *    5. Graph nodes must have been previously assigned a "rank" property that
	 *       respects the "minlen" property of incident edges.
	 *    6. Graph edges must have a "minlen" property.
	 *
	 * Post-conditions:
	 *
	 *    - Graph nodes will have their rank adjusted to ensure that all edges are
	 *      tight.
	 *
	 * Returns a tree (undirected graph) that is constructed using only "tight"
	 * edges.
	 */function feasibleTree(g){var t=new Graph({directed:false});
	// Choose arbitrary node from which to start our tree
	var start=g.nodes()[0],size=g.nodeCount();t.setNode(start,{});var edge,delta;while(tightTree(t,g)<size){edge=findMinSlackEdge(t,g);delta=t.hasNode(edge.v)?slack(g,edge):-slack(g,edge);shiftRanks(t,g,delta);}return t}
	/*
	 * Finds a maximal tree of tight edges and returns the number of nodes in the
	 * tree.
	 */function tightTree(t,g){function dfs(v){_.forEach(g.nodeEdges(v),function(e){var edgeV=e.v,w=v===edgeV?e.w:edgeV;if(!t.hasNode(w)&&!slack(g,e)){t.setNode(w,{});t.setEdge(v,w,{});dfs(w);}});}_.forEach(t.nodes(),dfs);return t.nodeCount()}
	/*
	 * Finds the edge with the smallest slack that is incident on tree and returns
	 * it.
	 */function findMinSlackEdge(t,g){return _.minBy(g.edges(),function(e){if(t.hasNode(e.v)!==t.hasNode(e.w)){return slack(g,e)}})}function shiftRanks(t,g,delta){_.forEach(t.nodes(),function(v){g.node(v).rank+=delta;});}},{"../graphlib":7,"../lodash":10,"./util":28}],26:[function(require,module,exports){var rankUtil=require("./util"),longestPath=rankUtil.longestPath,feasibleTree=require("./feasible-tree"),networkSimplex=require("./network-simplex");module.exports=rank;
	/*
	 * Assigns a rank to each node in the input graph that respects the "minlen"
	 * constraint specified on edges between nodes.
	 *
	 * This basic structure is derived from Gansner, et al., "A Technique for
	 * Drawing Directed Graphs."
	 *
	 * Pre-conditions:
	 *
	 *    1. Graph must be a connected DAG
	 *    2. Graph nodes must be objects
	 *    3. Graph edges must have "weight" and "minlen" attributes
	 *
	 * Post-conditions:
	 *
	 *    1. Graph nodes will have a "rank" attribute based on the results of the
	 *       algorithm. Ranks can start at any index (including negative), we'll
	 *       fix them up later.
	 */function rank(g){switch(g.graph().ranker){case"network-simplex":networkSimplexRanker(g);break;case"tight-tree":tightTreeRanker(g);break;case"longest-path":longestPathRanker(g);break;default:networkSimplexRanker(g);}}
	// A fast and simple ranker, but results are far from optimal.
	var longestPathRanker=longestPath;function tightTreeRanker(g){longestPath(g);feasibleTree(g);}function networkSimplexRanker(g){networkSimplex(g);}},{"./feasible-tree":25,"./network-simplex":27,"./util":28}],27:[function(require,module,exports){var _=require("../lodash"),feasibleTree=require("./feasible-tree"),slack=require("./util").slack,initRank=require("./util").longestPath,preorder=require("../graphlib").alg.preorder,postorder=require("../graphlib").alg.postorder,simplify=require("../util").simplify;module.exports=networkSimplex;
	// Expose some internals for testing purposes
	networkSimplex.initLowLimValues=initLowLimValues;networkSimplex.initCutValues=initCutValues;networkSimplex.calcCutValue=calcCutValue;networkSimplex.leaveEdge=leaveEdge;networkSimplex.enterEdge=enterEdge;networkSimplex.exchangeEdges=exchangeEdges;
	/*
	 * The network simplex algorithm assigns ranks to each node in the input graph
	 * and iteratively improves the ranking to reduce the length of edges.
	 *
	 * Preconditions:
	 *
	 *    1. The input graph must be a DAG.
	 *    2. All nodes in the graph must have an object value.
	 *    3. All edges in the graph must have "minlen" and "weight" attributes.
	 *
	 * Postconditions:
	 *
	 *    1. All nodes in the graph will have an assigned "rank" attribute that has
	 *       been optimized by the network simplex algorithm. Ranks start at 0.
	 *
	 *
	 * A rough sketch of the algorithm is as follows:
	 *
	 *    1. Assign initial ranks to each node. We use the longest path algorithm,
	 *       which assigns ranks to the lowest position possible. In general this
	 *       leads to very wide bottom ranks and unnecessarily long edges.
	 *    2. Construct a feasible tight tree. A tight tree is one such that all
	 *       edges in the tree have no slack (difference between length of edge
	 *       and minlen for the edge). This by itself greatly improves the assigned
	 *       rankings by shorting edges.
	 *    3. Iteratively find edges that have negative cut values. Generally a
	 *       negative cut value indicates that the edge could be removed and a new
	 *       tree edge could be added to produce a more compact graph.
	 *
	 * Much of the algorithms here are derived from Gansner, et al., "A Technique
	 * for Drawing Directed Graphs." The structure of the file roughly follows the
	 * structure of the overall algorithm.
	 */function networkSimplex(g){g=simplify(g);initRank(g);var t=feasibleTree(g);initLowLimValues(t);initCutValues(t,g);var e,f;while(e=leaveEdge(t)){f=enterEdge(t,g,e);exchangeEdges(t,g,e,f);}}
	/*
	 * Initializes cut values for all edges in the tree.
	 */function initCutValues(t,g){var vs=postorder(t,t.nodes());vs=vs.slice(0,vs.length-1);_.forEach(vs,function(v){assignCutValue(t,g,v);});}function assignCutValue(t,g,child){var childLab=t.node(child),parent=childLab.parent;t.edge(child,parent).cutvalue=calcCutValue(t,g,child);}
	/*
	 * Given the tight tree, its graph, and a child in the graph calculate and
	 * return the cut value for the edge between the child and its parent.
	 */function calcCutValue(t,g,child){var childLab=t.node(child),parent=childLab.parent,
	// True if the child is on the tail end of the edge in the directed graph
	childIsTail=true,
	// The graph's view of the tree edge we're inspecting
	graphEdge=g.edge(child,parent),
	// The accumulated cut value for the edge between this node and its parent
	cutValue=0;if(!graphEdge){childIsTail=false;graphEdge=g.edge(parent,child);}cutValue=graphEdge.weight;_.forEach(g.nodeEdges(child),function(e){var isOutEdge=e.v===child,other=isOutEdge?e.w:e.v;if(other!==parent){var pointsToHead=isOutEdge===childIsTail,otherWeight=g.edge(e).weight;cutValue+=pointsToHead?otherWeight:-otherWeight;if(isTreeEdge(t,child,other)){var otherCutValue=t.edge(child,other).cutvalue;cutValue+=pointsToHead?-otherCutValue:otherCutValue;}}});return cutValue}function initLowLimValues(tree,root){if(arguments.length<2){root=tree.nodes()[0];}dfsAssignLowLim(tree,{},1,root);}function dfsAssignLowLim(tree,visited,nextLim,v,parent){var low=nextLim,label=tree.node(v);visited[v]=true;_.forEach(tree.neighbors(v),function(w){if(!_.has(visited,w)){nextLim=dfsAssignLowLim(tree,visited,nextLim,w,v);}});label.low=low;label.lim=nextLim++;if(parent){label.parent=parent;}else{
	// TODO should be able to remove this when we incrementally update low lim
	delete label.parent;}return nextLim}function leaveEdge(tree){return _.find(tree.edges(),function(e){return tree.edge(e).cutvalue<0})}function enterEdge(t,g,edge){var v=edge.v,w=edge.w;
	// For the rest of this function we assume that v is the tail and w is the
	// head, so if we don't have this edge in the graph we should flip it to
	// match the correct orientation.
	if(!g.hasEdge(v,w)){v=edge.w;w=edge.v;}var vLabel=t.node(v),wLabel=t.node(w),tailLabel=vLabel,flip=false;
	// If the root is in the tail of the edge then we need to flip the logic that
	// checks for the head and tail nodes in the candidates function below.
	if(vLabel.lim>wLabel.lim){tailLabel=wLabel;flip=true;}var candidates=_.filter(g.edges(),function(edge){return flip===isDescendant(t,t.node(edge.v),tailLabel)&&flip!==isDescendant(t,t.node(edge.w),tailLabel)});return _.minBy(candidates,function(edge){return slack(g,edge)})}function exchangeEdges(t,g,e,f){var v=e.v,w=e.w;t.removeEdge(v,w);t.setEdge(f.v,f.w,{});initLowLimValues(t);initCutValues(t,g);updateRanks(t,g);}function updateRanks(t,g){var root=_.find(t.nodes(),function(v){return !g.node(v).parent}),vs=preorder(t,root);vs=vs.slice(1);_.forEach(vs,function(v){var parent=t.node(v).parent,edge=g.edge(v,parent),flipped=false;if(!edge){edge=g.edge(parent,v);flipped=true;}g.node(v).rank=g.node(parent).rank+(flipped?edge.minlen:-edge.minlen);});}
	/*
	 * Returns true if the edge is in the tree.
	 */function isTreeEdge(tree,u,v){return tree.hasEdge(u,v)}
	/*
	 * Returns true if the specified node is descendant of the root node per the
	 * assigned low and lim attributes in the tree.
	 */function isDescendant(tree,vLabel,rootLabel){return rootLabel.low<=vLabel.lim&&vLabel.lim<=rootLabel.lim}},{"../graphlib":7,"../lodash":10,"../util":29,"./feasible-tree":25,"./util":28}],28:[function(require,module,exports){var _=require("../lodash");module.exports={longestPath:longestPath,slack:slack};
	/*
	 * Initializes ranks for the input graph using the longest path algorithm. This
	 * algorithm scales well and is fast in practice, it yields rather poor
	 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
	 * ranks wide and leaving edges longer than necessary. However, due to its
	 * speed, this algorithm is good for getting an initial ranking that can be fed
	 * into other algorithms.
	 *
	 * This algorithm does not normalize layers because it will be used by other
	 * algorithms in most cases. If using this algorithm directly, be sure to
	 * run normalize at the end.
	 *
	 * Pre-conditions:
	 *
	 *    1. Input graph is a DAG.
	 *    2. Input graph node labels can be assigned properties.
	 *
	 * Post-conditions:
	 *
	 *    1. Each node will be assign an (unnormalized) "rank" property.
	 */function longestPath(g){var visited={};function dfs(v){var label=g.node(v);if(_.has(visited,v)){return label.rank}visited[v]=true;var rank=_.minBy(_.map(g.outEdges(v),function(e){return dfs(e.w)-g.edge(e).minlen}));if(rank===Number.POSITIVE_INFINITY||// return value of _.map([]) for Lodash 3
	rank===undefined||// return value of _.map([]) for Lodash 4
	rank===null){// return value of _.map([null])
	rank=0;}return label.rank=rank}_.forEach(g.sources(),dfs);}
	/*
	 * Returns the amount of slack for the given edge. The slack is defined as the
	 * difference between the length of the edge and its minimum length.
	 */function slack(g,e){return g.node(e.w).rank-g.node(e.v).rank-g.edge(e).minlen}},{"../lodash":10}],29:[function(require,module,exports){var _=require("./lodash"),Graph=require("./graphlib").Graph;module.exports={addDummyNode:addDummyNode,simplify:simplify,asNonCompoundGraph:asNonCompoundGraph,successorWeights:successorWeights,predecessorWeights:predecessorWeights,intersectRect:intersectRect,buildLayerMatrix:buildLayerMatrix,normalizeRanks:normalizeRanks,removeEmptyRanks:removeEmptyRanks,addBorderNode:addBorderNode,maxRank:maxRank,partition:partition,time:time,notime:notime};
	/*
	 * Adds a dummy node to the graph and return v.
	 */function addDummyNode(g,type,attrs,name){var v;do{v=_.uniqueId(name);}while(g.hasNode(v));attrs.dummy=type;g.setNode(v,attrs);return v}
	/*
	 * Returns a new graph with only simple edges. Handles aggregation of data
	 * associated with multi-edges.
	 */function simplify(g){var simplified=(new Graph).setGraph(g.graph());_.forEach(g.nodes(),function(v){simplified.setNode(v,g.node(v));});_.forEach(g.edges(),function(e){var simpleLabel=simplified.edge(e.v,e.w)||{weight:0,minlen:1},label=g.edge(e);simplified.setEdge(e.v,e.w,{weight:simpleLabel.weight+label.weight,minlen:Math.max(simpleLabel.minlen,label.minlen)});});return simplified}function asNonCompoundGraph(g){var simplified=new Graph({multigraph:g.isMultigraph()}).setGraph(g.graph());_.forEach(g.nodes(),function(v){if(!g.children(v).length){simplified.setNode(v,g.node(v));}});_.forEach(g.edges(),function(e){simplified.setEdge(e,g.edge(e));});return simplified}function successorWeights(g){var weightMap=_.map(g.nodes(),function(v){var sucs={};_.forEach(g.outEdges(v),function(e){sucs[e.w]=(sucs[e.w]||0)+g.edge(e).weight;});return sucs});return _.zipObject(g.nodes(),weightMap)}function predecessorWeights(g){var weightMap=_.map(g.nodes(),function(v){var preds={};_.forEach(g.inEdges(v),function(e){preds[e.v]=(preds[e.v]||0)+g.edge(e).weight;});return preds});return _.zipObject(g.nodes(),weightMap)}
	/*
	 * Finds where a line starting at point ({x, y}) would intersect a rectangle
	 * ({x, y, width, height}) if it were pointing at the rectangle's center.
	 */function intersectRect(rect,point){var x=rect.x;var y=rect.y;
	// Rectangle intersection algorithm from:
	// http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
	var dx=point.x-x;var dy=point.y-y;var w=rect.width/2;var h=rect.height/2;if(!dx&&!dy){throw new Error("Not possible to find intersection inside of the rectangle")}var sx,sy;if(Math.abs(dy)*w>Math.abs(dx)*h){
	// Intersection is top or bottom of rect.
	if(dy<0){h=-h;}sx=h*dx/dy;sy=h;}else{
	// Intersection is left or right of rect.
	if(dx<0){w=-w;}sx=w;sy=w*dy/dx;}return {x:x+sx,y:y+sy}}
	/*
	 * Given a DAG with each node assigned "rank" and "order" properties, this
	 * function will produce a matrix with the ids of each node.
	 */function buildLayerMatrix(g){var layering=_.map(_.range(maxRank(g)+1),function(){return []});_.forEach(g.nodes(),function(v){var node=g.node(v),rank=node.rank;if(!_.isUndefined(rank)){layering[rank][node.order]=v;}});return layering}
	/*
	 * Adjusts the ranks for all nodes in the graph such that all nodes v have
	 * rank(v) >= 0 and at least one node w has rank(w) = 0.
	 */function normalizeRanks(g){var min=_.minBy(_.map(g.nodes(),function(v){return g.node(v).rank}));_.forEach(g.nodes(),function(v){var node=g.node(v);if(_.has(node,"rank")){node.rank-=min;}});}function removeEmptyRanks(g){
	// Ranks may not start at 0, so we need to offset them
	var offset=_.minBy(_.map(g.nodes(),function(v){return g.node(v).rank}));var layers=[];_.forEach(g.nodes(),function(v){var rank=g.node(v).rank-offset;if(!layers[rank]){layers[rank]=[];}layers[rank].push(v);});var delta=0,nodeRankFactor=g.graph().nodeRankFactor;_.forEach(layers,function(vs,i){if(_.isUndefined(vs)&&i%nodeRankFactor!==0){--delta;}else if(delta){_.forEach(vs,function(v){g.node(v).rank+=delta;});}});}function addBorderNode(g,prefix,rank,order){var node={width:0,height:0};if(arguments.length>=4){node.rank=rank;node.order=order;}return addDummyNode(g,"border",node,prefix)}function maxRank(g){return _.max(_.map(g.nodes(),function(v){var rank=g.node(v).rank;if(!_.isUndefined(rank)){return rank}}))}
	/*
	 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
	 * function returns true for an entry it goes into `lhs`. Otherwise it goes
	 * into `rhs.
	 */function partition(collection,fn){var result={lhs:[],rhs:[]};_.forEach(collection,function(value){if(fn(value)){result.lhs.push(value);}else{result.rhs.push(value);}});return result}
	/*
	 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
	 * time it takes to execute the function.
	 */function time(name,fn){var start=_.now();try{return fn()}finally{console.log(name+" time: "+(_.now()-start)+"ms");}}function notime(name,fn){return fn()}},{"./graphlib":7,"./lodash":10}],30:[function(require,module,exports){module.exports="0.8.2";},{}],31:[function(require,module,exports){
	/**
	 * Copyright (c) 2014, Chris Pettitt
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *
	 * 1. Redistributions of source code must retain the above copyright notice, this
	 * list of conditions and the following disclaimer.
	 *
	 * 2. Redistributions in binary form must reproduce the above copyright notice,
	 * this list of conditions and the following disclaimer in the documentation
	 * and/or other materials provided with the distribution.
	 *
	 * 3. Neither the name of the copyright holder nor the names of its contributors
	 * may be used to endorse or promote products derived from this software without
	 * specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
	 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
	 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
	 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
	 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
	 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
	 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
	 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	var lib=require("./lib");module.exports={Graph:lib.Graph,json:require("./lib/json"),alg:require("./lib/alg"),version:lib.version};},{"./lib":47,"./lib/alg":38,"./lib/json":48}],32:[function(require,module,exports){var _=require("../lodash");module.exports=components;function components(g){var visited={},cmpts=[],cmpt;function dfs(v){if(_.has(visited,v))return;visited[v]=true;cmpt.push(v);_.each(g.successors(v),dfs);_.each(g.predecessors(v),dfs);}_.each(g.nodes(),function(v){cmpt=[];dfs(v);if(cmpt.length){cmpts.push(cmpt);}});return cmpts}},{"../lodash":49}],33:[function(require,module,exports){var _=require("../lodash");module.exports=dfs;
	/*
	 * A helper that preforms a pre- or post-order traversal on the input graph
	 * and returns the nodes in the order they were visited. If the graph is
	 * undirected then this algorithm will navigate using neighbors. If the graph
	 * is directed then this algorithm will navigate using successors.
	 *
	 * Order must be one of "pre" or "post".
	 */function dfs(g,vs,order){if(!_.isArray(vs)){vs=[vs];}var navigation=(g.isDirected()?g.successors:g.neighbors).bind(g);var acc=[],visited={};_.each(vs,function(v){if(!g.hasNode(v)){throw new Error("Graph does not have node: "+v)}doDfs(g,v,order==="post",visited,navigation,acc);});return acc}function doDfs(g,v,postorder,visited,navigation,acc){if(!_.has(visited,v)){visited[v]=true;if(!postorder){acc.push(v);}_.each(navigation(v),function(w){doDfs(g,w,postorder,visited,navigation,acc);});if(postorder){acc.push(v);}}}},{"../lodash":49}],34:[function(require,module,exports){var dijkstra=require("./dijkstra"),_=require("../lodash");module.exports=dijkstraAll;function dijkstraAll(g,weightFunc,edgeFunc){return _.transform(g.nodes(),function(acc,v){acc[v]=dijkstra(g,v,weightFunc,edgeFunc);},{})}},{"../lodash":49,"./dijkstra":35}],35:[function(require,module,exports){var _=require("../lodash"),PriorityQueue=require("../data/priority-queue");module.exports=dijkstra;var DEFAULT_WEIGHT_FUNC=_.constant(1);function dijkstra(g,source,weightFn,edgeFn){return runDijkstra(g,String(source),weightFn||DEFAULT_WEIGHT_FUNC,edgeFn||function(v){return g.outEdges(v)})}function runDijkstra(g,source,weightFn,edgeFn){var results={},pq=new PriorityQueue,v,vEntry;var updateNeighbors=function(edge){var w=edge.v!==v?edge.v:edge.w,wEntry=results[w],weight=weightFn(edge),distance=vEntry.distance+weight;if(weight<0){throw new Error("dijkstra does not allow negative edge weights. "+"Bad edge: "+edge+" Weight: "+weight)}if(distance<wEntry.distance){wEntry.distance=distance;wEntry.predecessor=v;pq.decrease(w,distance);}};g.nodes().forEach(function(v){var distance=v===source?0:Number.POSITIVE_INFINITY;results[v]={distance:distance};pq.add(v,distance);});while(pq.size()>0){v=pq.removeMin();vEntry=results[v];if(vEntry.distance===Number.POSITIVE_INFINITY){break}edgeFn(v).forEach(updateNeighbors);}return results}},{"../data/priority-queue":45,"../lodash":49}],36:[function(require,module,exports){var _=require("../lodash"),tarjan=require("./tarjan");module.exports=findCycles;function findCycles(g){return _.filter(tarjan(g),function(cmpt){return cmpt.length>1||cmpt.length===1&&g.hasEdge(cmpt[0],cmpt[0])})}},{"../lodash":49,"./tarjan":43}],37:[function(require,module,exports){var _=require("../lodash");module.exports=floydWarshall;var DEFAULT_WEIGHT_FUNC=_.constant(1);function floydWarshall(g,weightFn,edgeFn){return runFloydWarshall(g,weightFn||DEFAULT_WEIGHT_FUNC,edgeFn||function(v){return g.outEdges(v)})}function runFloydWarshall(g,weightFn,edgeFn){var results={},nodes=g.nodes();nodes.forEach(function(v){results[v]={};results[v][v]={distance:0};nodes.forEach(function(w){if(v!==w){results[v][w]={distance:Number.POSITIVE_INFINITY};}});edgeFn(v).forEach(function(edge){var w=edge.v===v?edge.w:edge.v,d=weightFn(edge);results[v][w]={distance:d,predecessor:v};});});nodes.forEach(function(k){var rowK=results[k];nodes.forEach(function(i){var rowI=results[i];nodes.forEach(function(j){var ik=rowI[k];var kj=rowK[j];var ij=rowI[j];var altDistance=ik.distance+kj.distance;if(altDistance<ij.distance){ij.distance=altDistance;ij.predecessor=kj.predecessor;}});});});return results}},{"../lodash":49}],38:[function(require,module,exports){module.exports={components:require("./components"),dijkstra:require("./dijkstra"),dijkstraAll:require("./dijkstra-all"),findCycles:require("./find-cycles"),floydWarshall:require("./floyd-warshall"),isAcyclic:require("./is-acyclic"),postorder:require("./postorder"),preorder:require("./preorder"),prim:require("./prim"),tarjan:require("./tarjan"),topsort:require("./topsort")};},{"./components":32,"./dijkstra":35,"./dijkstra-all":34,"./find-cycles":36,"./floyd-warshall":37,"./is-acyclic":39,"./postorder":40,"./preorder":41,"./prim":42,"./tarjan":43,"./topsort":44}],39:[function(require,module,exports){var topsort=require("./topsort");module.exports=isAcyclic;function isAcyclic(g){try{topsort(g);}catch(e){if(e instanceof topsort.CycleException){return false}throw e}return true}},{"./topsort":44}],40:[function(require,module,exports){var dfs=require("./dfs");module.exports=postorder;function postorder(g,vs){return dfs(g,vs,"post")}},{"./dfs":33}],41:[function(require,module,exports){var dfs=require("./dfs");module.exports=preorder;function preorder(g,vs){return dfs(g,vs,"pre")}},{"./dfs":33}],42:[function(require,module,exports){var _=require("../lodash"),Graph=require("../graph"),PriorityQueue=require("../data/priority-queue");module.exports=prim;function prim(g,weightFunc){var result=new Graph,parents={},pq=new PriorityQueue,v;function updateNeighbors(edge){var w=edge.v===v?edge.w:edge.v,pri=pq.priority(w);if(pri!==undefined){var edgeWeight=weightFunc(edge);if(edgeWeight<pri){parents[w]=v;pq.decrease(w,edgeWeight);}}}if(g.nodeCount()===0){return result}_.each(g.nodes(),function(v){pq.add(v,Number.POSITIVE_INFINITY);result.setNode(v);});
	// Start from an arbitrary node
	pq.decrease(g.nodes()[0],0);var init=false;while(pq.size()>0){v=pq.removeMin();if(_.has(parents,v)){result.setEdge(v,parents[v]);}else if(init){throw new Error("Input graph is not connected: "+g)}else{init=true;}g.nodeEdges(v).forEach(updateNeighbors);}return result}},{"../data/priority-queue":45,"../graph":46,"../lodash":49}],43:[function(require,module,exports){var _=require("../lodash");module.exports=tarjan;function tarjan(g){var index=0,stack=[],visited={},// node id -> { onStack, lowlink, index }
	results=[];function dfs(v){var entry=visited[v]={onStack:true,lowlink:index,index:index++};stack.push(v);g.successors(v).forEach(function(w){if(!_.has(visited,w)){dfs(w);entry.lowlink=Math.min(entry.lowlink,visited[w].lowlink);}else if(visited[w].onStack){entry.lowlink=Math.min(entry.lowlink,visited[w].index);}});if(entry.lowlink===entry.index){var cmpt=[],w;do{w=stack.pop();visited[w].onStack=false;cmpt.push(w);}while(v!==w);results.push(cmpt);}}g.nodes().forEach(function(v){if(!_.has(visited,v)){dfs(v);}});return results}},{"../lodash":49}],44:[function(require,module,exports){var _=require("../lodash");module.exports=topsort;topsort.CycleException=CycleException;function topsort(g){var visited={},stack={},results=[];function visit(node){if(_.has(stack,node)){throw new CycleException}if(!_.has(visited,node)){stack[node]=true;visited[node]=true;_.each(g.predecessors(node),visit);delete stack[node];results.push(node);}}_.each(g.sinks(),visit);if(_.size(visited)!==g.nodeCount()){throw new CycleException}return results}function CycleException(){}},{"../lodash":49}],45:[function(require,module,exports){var _=require("../lodash");module.exports=PriorityQueue;
	/**
	 * A min-priority queue data structure. This algorithm is derived from Cormen,
	 * et al., "Introduction to Algorithms". The basic idea of a min-priority
	 * queue is that you can efficiently (in O(1) time) get the smallest key in
	 * the queue. Adding and removing elements takes O(log n) time. A key can
	 * have its priority decreased in O(log n) time.
	 */function PriorityQueue(){this._arr=[];this._keyIndices={};}
	/**
	 * Returns the number of elements in the queue. Takes `O(1)` time.
	 */PriorityQueue.prototype.size=function(){return this._arr.length};
	/**
	 * Returns the keys that are in the queue. Takes `O(n)` time.
	 */PriorityQueue.prototype.keys=function(){return this._arr.map(function(x){return x.key})};
	/**
	 * Returns `true` if **key** is in the queue and `false` if not.
	 */PriorityQueue.prototype.has=function(key){return _.has(this._keyIndices,key)};
	/**
	 * Returns the priority for **key**. If **key** is not present in the queue
	 * then this function returns `undefined`. Takes `O(1)` time.
	 *
	 * @param {Object} key
	 */PriorityQueue.prototype.priority=function(key){var index=this._keyIndices[key];if(index!==undefined){return this._arr[index].priority}};
	/**
	 * Returns the key for the minimum element in this queue. If the queue is
	 * empty this function throws an Error. Takes `O(1)` time.
	 */PriorityQueue.prototype.min=function(){if(this.size()===0){throw new Error("Queue underflow")}return this._arr[0].key};
	/**
	 * Inserts a new key into the priority queue. If the key already exists in
	 * the queue this function returns `false`; otherwise it will return `true`.
	 * Takes `O(n)` time.
	 *
	 * @param {Object} key the key to add
	 * @param {Number} priority the initial priority for the key
	 */PriorityQueue.prototype.add=function(key,priority){var keyIndices=this._keyIndices;key=String(key);if(!_.has(keyIndices,key)){var arr=this._arr;var index=arr.length;keyIndices[key]=index;arr.push({key:key,priority:priority});this._decrease(index);return true}return false};
	/**
	 * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
	 */PriorityQueue.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var min=this._arr.pop();delete this._keyIndices[min.key];this._heapify(0);return min.key};
	/**
	 * Decreases the priority for **key** to **priority**. If the new priority is
	 * greater than the previous priority, this function will throw an Error.
	 *
	 * @param {Object} key the key for which to raise priority
	 * @param {Number} priority the new priority for the key
	 */PriorityQueue.prototype.decrease=function(key,priority){var index=this._keyIndices[key];if(priority>this._arr[index].priority){throw new Error("New priority is greater than current priority. "+"Key: "+key+" Old: "+this._arr[index].priority+" New: "+priority)}this._arr[index].priority=priority;this._decrease(index);};PriorityQueue.prototype._heapify=function(i){var arr=this._arr;var l=2*i,r=l+1,largest=i;if(l<arr.length){largest=arr[l].priority<arr[largest].priority?l:largest;if(r<arr.length){largest=arr[r].priority<arr[largest].priority?r:largest;}if(largest!==i){this._swap(i,largest);this._heapify(largest);}}};PriorityQueue.prototype._decrease=function(index){var arr=this._arr;var priority=arr[index].priority;var parent;while(index!==0){parent=index>>1;if(arr[parent].priority<priority){break}this._swap(index,parent);index=parent;}};PriorityQueue.prototype._swap=function(i,j){var arr=this._arr;var keyIndices=this._keyIndices;var origArrI=arr[i];var origArrJ=arr[j];arr[i]=origArrJ;arr[j]=origArrI;keyIndices[origArrJ.key]=i;keyIndices[origArrI.key]=j;};},{"../lodash":49}],46:[function(require,module,exports){var _=require("./lodash");module.exports=Graph;var DEFAULT_EDGE_NAME="\0",GRAPH_NODE="\0",EDGE_KEY_DELIM="";
	// Implementation notes:
	//
	//  * Node id query functions should return string ids for the nodes
	//  * Edge id query functions should return an "edgeObj", edge object, that is
	//    composed of enough information to uniquely identify an edge: {v, w, name}.
	//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
	//    reference edges. This is because we need a performant way to look these
	//    edges up and, object properties, which have string keys, are the closest
	//    we're going to get to a performant hashtable in JavaScript.
	function Graph(opts){this._isDirected=_.has(opts,"directed")?opts.directed:true;this._isMultigraph=_.has(opts,"multigraph")?opts.multigraph:false;this._isCompound=_.has(opts,"compound")?opts.compound:false;
	// Label for the graph itself
	this._label=undefined;
	// Defaults to be set when creating a new node
	this._defaultNodeLabelFn=_.constant(undefined);
	// Defaults to be set when creating a new edge
	this._defaultEdgeLabelFn=_.constant(undefined);
	// v -> label
	this._nodes={};if(this._isCompound){
	// v -> parent
	this._parent={};
	// v -> children
	this._children={};this._children[GRAPH_NODE]={};}
	// v -> edgeObj
	this._in={};
	// u -> v -> Number
	this._preds={};
	// v -> edgeObj
	this._out={};
	// v -> w -> Number
	this._sucs={};
	// e -> edgeObj
	this._edgeObjs={};
	// e -> label
	this._edgeLabels={};}
	/* Number of nodes in the graph. Should only be changed by the implementation. */Graph.prototype._nodeCount=0;
	/* Number of edges in the graph. Should only be changed by the implementation. */Graph.prototype._edgeCount=0;
	/* === Graph functions ========= */Graph.prototype.isDirected=function(){return this._isDirected};Graph.prototype.isMultigraph=function(){return this._isMultigraph};Graph.prototype.isCompound=function(){return this._isCompound};Graph.prototype.setGraph=function(label){this._label=label;return this};Graph.prototype.graph=function(){return this._label};
	/* === Node functions ========== */Graph.prototype.setDefaultNodeLabel=function(newDefault){if(!_.isFunction(newDefault)){newDefault=_.constant(newDefault);}this._defaultNodeLabelFn=newDefault;return this};Graph.prototype.nodeCount=function(){return this._nodeCount};Graph.prototype.nodes=function(){return _.keys(this._nodes)};Graph.prototype.sources=function(){var self=this;return _.filter(this.nodes(),function(v){return _.isEmpty(self._in[v])})};Graph.prototype.sinks=function(){var self=this;return _.filter(this.nodes(),function(v){return _.isEmpty(self._out[v])})};Graph.prototype.setNodes=function(vs,value){var args=arguments;var self=this;_.each(vs,function(v){if(args.length>1){self.setNode(v,value);}else{self.setNode(v);}});return this};Graph.prototype.setNode=function(v,value){if(_.has(this._nodes,v)){if(arguments.length>1){this._nodes[v]=value;}return this}this._nodes[v]=arguments.length>1?value:this._defaultNodeLabelFn(v);if(this._isCompound){this._parent[v]=GRAPH_NODE;this._children[v]={};this._children[GRAPH_NODE][v]=true;}this._in[v]={};this._preds[v]={};this._out[v]={};this._sucs[v]={};++this._nodeCount;return this};Graph.prototype.node=function(v){return this._nodes[v]};Graph.prototype.hasNode=function(v){return _.has(this._nodes,v)};Graph.prototype.removeNode=function(v){var self=this;if(_.has(this._nodes,v)){var removeEdge=function(e){self.removeEdge(self._edgeObjs[e]);};delete this._nodes[v];if(this._isCompound){this._removeFromParentsChildList(v);delete this._parent[v];_.each(this.children(v),function(child){self.setParent(child);});delete this._children[v];}_.each(_.keys(this._in[v]),removeEdge);delete this._in[v];delete this._preds[v];_.each(_.keys(this._out[v]),removeEdge);delete this._out[v];delete this._sucs[v];--this._nodeCount;}return this};Graph.prototype.setParent=function(v,parent){if(!this._isCompound){throw new Error("Cannot set parent in a non-compound graph")}if(_.isUndefined(parent)){parent=GRAPH_NODE;}else{
	// Coerce parent to string
	parent+="";for(var ancestor=parent;!_.isUndefined(ancestor);ancestor=this.parent(ancestor)){if(ancestor===v){throw new Error("Setting "+parent+" as parent of "+v+" would create a cycle")}}this.setNode(parent);}this.setNode(v);this._removeFromParentsChildList(v);this._parent[v]=parent;this._children[parent][v]=true;return this};Graph.prototype._removeFromParentsChildList=function(v){delete this._children[this._parent[v]][v];};Graph.prototype.parent=function(v){if(this._isCompound){var parent=this._parent[v];if(parent!==GRAPH_NODE){return parent}}};Graph.prototype.children=function(v){if(_.isUndefined(v)){v=GRAPH_NODE;}if(this._isCompound){var children=this._children[v];if(children){return _.keys(children)}}else if(v===GRAPH_NODE){return this.nodes()}else if(this.hasNode(v)){return []}};Graph.prototype.predecessors=function(v){var predsV=this._preds[v];if(predsV){return _.keys(predsV)}};Graph.prototype.successors=function(v){var sucsV=this._sucs[v];if(sucsV){return _.keys(sucsV)}};Graph.prototype.neighbors=function(v){var preds=this.predecessors(v);if(preds){return _.union(preds,this.successors(v))}};Graph.prototype.isLeaf=function(v){var neighbors;if(this.isDirected()){neighbors=this.successors(v);}else{neighbors=this.neighbors(v);}return neighbors.length===0};Graph.prototype.filterNodes=function(filter){var copy=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});copy.setGraph(this.graph());var self=this;_.each(this._nodes,function(value,v){if(filter(v)){copy.setNode(v,value);}});_.each(this._edgeObjs,function(e){if(copy.hasNode(e.v)&&copy.hasNode(e.w)){copy.setEdge(e,self.edge(e));}});var parents={};function findParent(v){var parent=self.parent(v);if(parent===undefined||copy.hasNode(parent)){parents[v]=parent;return parent}else if(parent in parents){return parents[parent]}else{return findParent(parent)}}if(this._isCompound){_.each(copy.nodes(),function(v){copy.setParent(v,findParent(v));});}return copy};
	/* === Edge functions ========== */Graph.prototype.setDefaultEdgeLabel=function(newDefault){if(!_.isFunction(newDefault)){newDefault=_.constant(newDefault);}this._defaultEdgeLabelFn=newDefault;return this};Graph.prototype.edgeCount=function(){return this._edgeCount};Graph.prototype.edges=function(){return _.values(this._edgeObjs)};Graph.prototype.setPath=function(vs,value){var self=this,args=arguments;_.reduce(vs,function(v,w){if(args.length>1){self.setEdge(v,w,value);}else{self.setEdge(v,w);}return w});return this};
	/*
	 * setEdge(v, w, [value, [name]])
	 * setEdge({ v, w, [name] }, [value])
	 */Graph.prototype.setEdge=function(){var v,w,name,value,valueSpecified=false,arg0=arguments[0];if(typeof arg0==="object"&&arg0!==null&&"v"in arg0){v=arg0.v;w=arg0.w;name=arg0.name;if(arguments.length===2){value=arguments[1];valueSpecified=true;}}else{v=arg0;w=arguments[1];name=arguments[3];if(arguments.length>2){value=arguments[2];valueSpecified=true;}}v=""+v;w=""+w;if(!_.isUndefined(name)){name=""+name;}var e=edgeArgsToId(this._isDirected,v,w,name);if(_.has(this._edgeLabels,e)){if(valueSpecified){this._edgeLabels[e]=value;}return this}if(!_.isUndefined(name)&&!this._isMultigraph){throw new Error("Cannot set a named edge when isMultigraph = false")}
	// It didn't exist, so we need to create it.
	// First ensure the nodes exist.
	this.setNode(v);this.setNode(w);this._edgeLabels[e]=valueSpecified?value:this._defaultEdgeLabelFn(v,w,name);var edgeObj=edgeArgsToObj(this._isDirected,v,w,name);
	// Ensure we add undirected edges in a consistent way.
	v=edgeObj.v;w=edgeObj.w;Object.freeze(edgeObj);this._edgeObjs[e]=edgeObj;incrementOrInitEntry(this._preds[w],v);incrementOrInitEntry(this._sucs[v],w);this._in[w][e]=edgeObj;this._out[v][e]=edgeObj;this._edgeCount++;return this};Graph.prototype.edge=function(v,w,name){var e=arguments.length===1?edgeObjToId(this._isDirected,arguments[0]):edgeArgsToId(this._isDirected,v,w,name);return this._edgeLabels[e]};Graph.prototype.hasEdge=function(v,w,name){var e=arguments.length===1?edgeObjToId(this._isDirected,arguments[0]):edgeArgsToId(this._isDirected,v,w,name);return _.has(this._edgeLabels,e)};Graph.prototype.removeEdge=function(v,w,name){var e=arguments.length===1?edgeObjToId(this._isDirected,arguments[0]):edgeArgsToId(this._isDirected,v,w,name),edge=this._edgeObjs[e];if(edge){v=edge.v;w=edge.w;delete this._edgeLabels[e];delete this._edgeObjs[e];decrementOrRemoveEntry(this._preds[w],v);decrementOrRemoveEntry(this._sucs[v],w);delete this._in[w][e];delete this._out[v][e];this._edgeCount--;}return this};Graph.prototype.inEdges=function(v,u){var inV=this._in[v];if(inV){var edges=_.values(inV);if(!u){return edges}return _.filter(edges,function(edge){return edge.v===u})}};Graph.prototype.outEdges=function(v,w){var outV=this._out[v];if(outV){var edges=_.values(outV);if(!w){return edges}return _.filter(edges,function(edge){return edge.w===w})}};Graph.prototype.nodeEdges=function(v,w){var inEdges=this.inEdges(v,w);if(inEdges){return inEdges.concat(this.outEdges(v,w))}};function incrementOrInitEntry(map,k){if(map[k]){map[k]++;}else{map[k]=1;}}function decrementOrRemoveEntry(map,k){if(!--map[k]){delete map[k];}}function edgeArgsToId(isDirected,v_,w_,name){var v=""+v_;var w=""+w_;if(!isDirected&&v>w){var tmp=v;v=w;w=tmp;}return v+EDGE_KEY_DELIM+w+EDGE_KEY_DELIM+(_.isUndefined(name)?DEFAULT_EDGE_NAME:name)}function edgeArgsToObj(isDirected,v_,w_,name){var v=""+v_;var w=""+w_;if(!isDirected&&v>w){var tmp=v;v=w;w=tmp;}var edgeObj={v:v,w:w};if(name){edgeObj.name=name;}return edgeObj}function edgeObjToId(isDirected,edgeObj){return edgeArgsToId(isDirected,edgeObj.v,edgeObj.w,edgeObj.name)}},{"./lodash":49}],47:[function(require,module,exports){
	// Includes only the "core" of graphlib
	module.exports={Graph:require("./graph"),version:require("./version")};},{"./graph":46,"./version":50}],48:[function(require,module,exports){var _=require("./lodash"),Graph=require("./graph");module.exports={write:write,read:read};function write(g){var json={options:{directed:g.isDirected(),multigraph:g.isMultigraph(),compound:g.isCompound()},nodes:writeNodes(g),edges:writeEdges(g)};if(!_.isUndefined(g.graph())){json.value=_.clone(g.graph());}return json}function writeNodes(g){return _.map(g.nodes(),function(v){var nodeValue=g.node(v),parent=g.parent(v),node={v:v};if(!_.isUndefined(nodeValue)){node.value=nodeValue;}if(!_.isUndefined(parent)){node.parent=parent;}return node})}function writeEdges(g){return _.map(g.edges(),function(e){var edgeValue=g.edge(e),edge={v:e.v,w:e.w};if(!_.isUndefined(e.name)){edge.name=e.name;}if(!_.isUndefined(edgeValue)){edge.value=edgeValue;}return edge})}function read(json){var g=new Graph(json.options).setGraph(json.value);_.each(json.nodes,function(entry){g.setNode(entry.v,entry.value);if(entry.parent){g.setParent(entry.v,entry.parent);}});_.each(json.edges,function(entry){g.setEdge({v:entry.v,w:entry.w,name:entry.name},entry.value);});return g}},{"./graph":46,"./lodash":49}],49:[function(require,module,exports){arguments[4][10][0].apply(exports,arguments);},{dup:10,lodash:51}],50:[function(require,module,exports){module.exports="2.1.5";},{}],51:[function(require,module,exports){(function(global){(function(){
	/** Used as a safe reference for `undefined` in pre-ES5 environments. */
	var undefined;
	/** Used as the semantic version number. */var VERSION="4.17.4";
	/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;
	/** Error message constants. */var CORE_ERROR_TEXT="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",FUNC_ERROR_TEXT="Expected a function";
	/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED="__lodash_hash_undefined__";
	/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;
	/** Used as the internal argument placeholder. */var PLACEHOLDER="__lodash_placeholder__";
	/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;
	/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;
	/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,WRAP_FLIP_FLAG=512;
	/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION="...";
	/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;
	/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;
	/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e308,NAN=0/0;
	/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;
	/** Used to associate wrap methods with their bit flags. */var wrapFlags=[["ary",WRAP_ARY_FLAG],["bind",WRAP_BIND_FLAG],["bindKey",WRAP_BIND_KEY_FLAG],["curry",WRAP_CURRY_FLAG],["curryRight",WRAP_CURRY_RIGHT_FLAG],["flip",WRAP_FLIP_FLAG],["partial",WRAP_PARTIAL_FLAG],["partialRight",WRAP_PARTIAL_RIGHT_FLAG],["rearg",WRAP_REARG_FLAG]];
	/** `Object#toString` result references. */var argsTag="[object Arguments]",arrayTag="[object Array]",asyncTag="[object AsyncFunction]",boolTag="[object Boolean]",dateTag="[object Date]",domExcTag="[object DOMException]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",nullTag="[object Null]",objectTag="[object Object]",promiseTag="[object Promise]",proxyTag="[object Proxy]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",undefinedTag="[object Undefined]",weakMapTag="[object WeakMap]",weakSetTag="[object WeakSet]";var arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]";
	/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
	/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);
	/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;
	/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	/**
	   * Used to match `RegExp`
	   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);
	/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;
	/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;
	/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;
	/**
	   * Used to match
	   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
	   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
	/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;
	/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;
	/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;
	/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;
	/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;
	/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;
	/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
	/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;
	/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;
	/** Used to compose unicode character classes. */var rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange="\\u2700-\\u27bf",rsLowerRange="a-z\\xdf-\\xf6\\xf8-\\xff",rsMathOpRange="\\xac\\xb1\\xd7\\xf7",rsNonCharRange="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange="A-Z\\xc0-\\xd6\\xd8-\\xde",rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;
	/** Used to compose unicode capture groups. */var rsApos="['’]",rsAstral="["+rsAstralRange+"]",rsBreak="["+rsBreakRange+"]",rsCombo="["+rsComboRange+"]",rsDigits="\\d+",rsDingbat="["+rsDingbatRange+"]",rsLower="["+rsLowerRange+"]",rsMisc="[^"+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="["+rsUpperRange+"]",rsZWJ="\\u200d";
	/** Used to compose unicode regexes. */var rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",rsOptContrLower="(?:"+rsApos+"(?:d|ll|m|re|s|t|ve))?",rsOptContrUpper="(?:"+rsApos+"(?:D|LL|M|RE|S|T|VE))?",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange+"]?",rsOptJoin="(?:"+rsZWJ+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsOrdLower="\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",rsOrdUpper="\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")";
	/** Used to match apostrophes. */var reApos=RegExp(rsApos,"g");
	/**
	   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	   */var reComboMark=RegExp(rsCombo,"g");
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g");
	/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+"+rsOptContrLower+"(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+"+rsOptContrUpper+"(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+"+rsOptContrLower,rsUpper+"+"+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join("|"),"g");
	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp("["+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+"]");
	/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	/** Used to assign default `context` object properties. */var contextProps=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"];
	/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;
	/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;
	/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;
	/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={
	// Latin-1 Supplement block.
	"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss",
	// Latin Extended-A block.
	"Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"};
	/** Used to map characters to HTML entities. */var htmlEscapes={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
	/** Used to map HTML entities to characters. */var htmlUnescapes={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};
	/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};
	/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;
	/** Detect free variable `global` from Node.js. */var freeGlobal=typeof global=="object"&&global&&global.Object===Object&&global;
	/** Detect free variable `self`. */var freeSelf=typeof self=="object"&&self&&self.Object===Object&&self;
	/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function("return this")();
	/** Detect free variable `exports`. */var freeExports=typeof exports=="object"&&exports&&!exports.nodeType&&exports;
	/** Detect free variable `module`. */var freeModule=freeExports&&typeof module=="object"&&module&&!module.nodeType&&module;
	/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;
	/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;
	/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch(e){}}();
	/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;
	/*--------------------------------------------------------------------------*/
	/**
	   * Adds the key-value `pair` to `map`.
	   *
	   * @private
	   * @param {Object} map The map to modify.
	   * @param {Array} pair The key-value pair to add.
	   * @returns {Object} Returns `map`.
	   */function addMapEntry(map,pair){
	// Don't return `map.set` because it's not chainable in IE 11.
	map.set(pair[0],pair[1]);return map}
	/**
	   * Adds `value` to `set`.
	   *
	   * @private
	   * @param {Object} set The set to modify.
	   * @param {*} value The value to add.
	   * @returns {Object} Returns `set`.
	   */function addSetEntry(set,value){
	// Don't return `set.add` because it's not chainable in IE 11.
	set.add(value);return set}
	/**
	   * A faster alternative to `Function#apply`, this function invokes `func`
	   * with the `this` binding of `thisArg` and the arguments of `args`.
	   *
	   * @private
	   * @param {Function} func The function to invoke.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {Array} args The arguments to invoke `func` with.
	   * @returns {*} Returns the result of `func`.
	   */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2])}return func.apply(thisArg,args)}
	/**
	   * A specialized version of `baseAggregator` for arrays.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} setter The function to set `accumulator` values.
	   * @param {Function} iteratee The iteratee to transform keys.
	   * @param {Object} accumulator The initial aggregated object.
	   * @returns {Function} Returns `accumulator`.
	   */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator}
	/**
	   * A specialized version of `_.forEach` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break}}return array}
	/**
	   * A specialized version of `_.forEachRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */function arrayEachRight(array,iteratee){var length=array==null?0:array.length;while(length--){if(iteratee(array[length],length,array)===false){break}}return array}
	/**
	   * A specialized version of `_.every` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`.
	   */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false}}return true}
	/**
	   * A specialized version of `_.filter` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result}
	/**
	   * A specialized version of `_.includes` for arrays without support for
	   * specifying an index to search from.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */function arrayIncludes(array,value){var length=array==null?0:array.length;return !!length&&baseIndexOf(array,value,0)>-1}
	/**
	   * This function is like `arrayIncludes` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true}}return false}
	/**
	   * A specialized version of `_.map` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result}
	/**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array}
	/**
	   * A specialized version of `_.reduce` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the first element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator}
	/**
	   * A specialized version of `_.reduceRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the last element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array==null?0:array.length;if(initAccum&&length){accumulator=array[--length];}while(length--){accumulator=iteratee(accumulator,array[length],length,array);}return accumulator}
	/**
	   * A specialized version of `_.some` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true}}return false}
	/**
	   * Gets the size of an ASCII `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */var asciiSize=baseProperty("length");
	/**
	   * Converts an ASCII `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function asciiToArray(string){return string.split("")}
	/**
	   * Splits an ASCII `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */function asciiWords(string){return string.match(reAsciiWord)||[]}
	/**
	   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
	   * without support for iteratee shorthands, which iterates over `collection`
	   * using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the found element or its key, else `undefined`.
	   */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false}});return result}
	/**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index}}return -1}
	/**
	   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex)}
	/**
	   * This function is like `baseIndexOf` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index}}return -1}
	/**
	   * The base implementation of `_.isNaN` without support for number objects.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	   */function baseIsNaN(value){return value!==value}
	/**
	   * The base implementation of `_.mean` and `_.meanBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the mean.
	   */function baseMean(array,iteratee){var length=array==null?0:array.length;return length?baseSum(array,iteratee)/length:NAN}
	/**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */function baseProperty(key){return function(object){return object==null?undefined:object[key]}}
	/**
	   * The base implementation of `_.propertyOf` without support for deep paths.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Function} Returns the new accessor function.
	   */function basePropertyOf(object){return function(key){return object==null?undefined:object[key]}}
	/**
	   * The base implementation of `_.reduce` and `_.reduceRight`, without support
	   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} accumulator The initial value.
	   * @param {boolean} initAccum Specify using the first or last element of
	   *  `collection` as the initial value.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the accumulated value.
	   */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator}
	/**
	   * The base implementation of `_.sortBy` which uses `comparer` to define the
	   * sort order of `array` and replaces criteria objects with their corresponding
	   * values.
	   *
	   * @private
	   * @param {Array} array The array to sort.
	   * @param {Function} comparer The function to define sort order.
	   * @returns {Array} Returns `array`.
	   */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array}
	/**
	   * The base implementation of `_.sum` and `_.sumBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the sum.
	   */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:result+current;}}return result}
	/**
	   * The base implementation of `_.times` without support for iteratee shorthands
	   * or max array length checks.
	   *
	   * @private
	   * @param {number} n The number of times to invoke `iteratee`.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the array of results.
	   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result}
	/**
	   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	   * of key-value pairs for `object` corresponding to the property names of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the key-value pairs.
	   */function baseToPairs(object,props){return arrayMap(props,function(key){return [key,object[key]]})}
	/**
	   * The base implementation of `_.unary` without support for storing metadata.
	   *
	   * @private
	   * @param {Function} func The function to cap arguments for.
	   * @returns {Function} Returns the new capped function.
	   */function baseUnary(func){return function(value){return func(value)}}
	/**
	   * The base implementation of `_.values` and `_.valuesIn` which creates an
	   * array of `object` property values corresponding to the property names
	   * of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the array of property values.
	   */function baseValues(object,props){return arrayMap(props,function(key){return object[key]})}
	/**
	   * Checks if a `cache` value for `key` exists.
	   *
	   * @private
	   * @param {Object} cache The cache to query.
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */function cacheHas(cache,key){return cache.has(key)}
	/**
	   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the first unmatched string symbol.
	   */function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index}
	/**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the last unmatched string symbol.
	   */function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index}
	/**
	   * Gets the number of `placeholder` occurrences in `array`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} placeholder The placeholder to search for.
	   * @returns {number} Returns the placeholder count.
	   */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result;}}return result}
	/**
	   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	   * letters to basic Latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */var deburrLetter=basePropertyOf(deburredLetters);
	/**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */var escapeHtmlChar=basePropertyOf(htmlEscapes);
	/**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */function escapeStringChar(chr){return "\\"+stringEscapes[chr]}
	/**
	   * Gets the value at `key` of `object`.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {string} key The key of the property to get.
	   * @returns {*} Returns the property value.
	   */function getValue(object,key){return object==null?undefined:object[key]}
	/**
	   * Checks if `string` contains Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	   */function hasUnicode(string){return reHasUnicode.test(string)}
	/**
	   * Checks if `string` contains a word composed of Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a word is found, else `false`.
	   */function hasUnicodeWord(string){return reHasUnicodeWord.test(string)}
	/**
	   * Converts `iterator` to an array.
	   *
	   * @private
	   * @param {Object} iterator The iterator to convert.
	   * @returns {Array} Returns the converted array.
	   */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result}
	/**
	   * Converts `map` to its key-value pairs.
	   *
	   * @private
	   * @param {Object} map The map to convert.
	   * @returns {Array} Returns the key-value pairs.
	   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result}
	/**
	   * Creates a unary function that invokes `func` with its argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */function overArg(func,transform){return function(arg){return func(transform(arg))}}
	/**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result}
	/**
	   * Converts `set` to an array of its values.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the values.
	   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result}
	/**
	   * Converts `set` to its value-value pairs.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the value-value pairs.
	   */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result}
	/**
	   * A specialized version of `_.indexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index}}return -1}
	/**
	   * A specialized version of `_.lastIndexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index}}return index}
	/**
	   * Gets the number of symbols in `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the string size.
	   */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string)}
	/**
	   * Converts `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string)}
	/**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);
	/**
	   * Gets the size of a Unicode `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}return result}
	/**
	   * Converts a Unicode `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function unicodeToArray(string){return string.match(reUnicode)||[]}
	/**
	   * Splits a Unicode `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */function unicodeWords(string){return string.match(reUnicodeWord)||[]}
	/*--------------------------------------------------------------------------*/
	/**
	   * Create a new pristine `lodash` function using the `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.1.0
	   * @category Util
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // Create a suped-up `defer` in Node.js.
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */var runInContext=function runInContext(context){context=context==null?root:_.defaults(root.Object(),context,_.pick(root,contextProps));
	/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;
	/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;
	/** Used to detect overreaching core-js shims. */var coreJsData=context["__core-js_shared__"];
	/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;
	/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;
	/** Used to generate unique IDs. */var idCounter=0;
	/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return uid?"Symbol(src)_1."+uid:""}();
	/**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	     * of values.
	     */var nativeObjectToString=objectProto.toString;
	/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);
	/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;
	/** Used to detect if a method is native. */var reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");
	/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined,Symbol=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined,symIterator=Symbol?Symbol.iterator:undefined,symToStringTag=Symbol?Symbol.toStringTag:undefined;var defineProperty=function(){try{var func=getNative(Object,"defineProperty");func({},"",{});return func}catch(e){}}();
	/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;
	/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;
	/* Built-in method references that are verified to be native. */var DataView=getNative(context,"DataView"),Map=getNative(context,"Map"),Promise=getNative(context,"Promise"),Set=getNative(context,"Set"),WeakMap=getNative(context,"WeakMap"),nativeCreate=getNative(Object,"create");
	/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap;
	/** Used to lookup unminified function names. */var realNames={};
	/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);
	/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;
	/*------------------------------------------------------------------------*/
	/**
	     * Creates a `lodash` object which wraps `value` to enable implicit method
	     * chain sequences. Methods that operate on and return arrays, collections,
	     * and functions can be chained together. Methods that retrieve a single value
	     * or may return a primitive value will automatically end the chain sequence
	     * and return the unwrapped value. Otherwise, the value must be unwrapped
	     * with `_#value`.
	     *
	     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	     * enabled using `_.chain`.
	     *
	     * The execution of chained methods is lazy, that is, it's deferred until
	     * `_#value` is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion.
	     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	     * the creation of intermediate arrays and can greatly reduce the number of
	     * iteratee executions. Sections of a chain sequence qualify for shortcut
	     * fusion if the section is applied to an array and iteratees accept only
	     * one argument. The heuristic for whether a section qualifies for shortcut
	     * fusion is subject to change.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	     * `zipObject`, `zipObjectDeep`, and `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	     * `upperFirst`, `value`, and `words`
	     *
	     * @name _
	     * @constructor
	     * @category Seq
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // Returns an unwrapped value.
	     * wrapped.reduce(_.add);
	     * // => 6
	     *
	     * // Returns a wrapped value.
	     * var squares = wrapped.map(square);
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value}if(hasOwnProperty.call(value,"__wrapped__")){return wrapperClone(value)}}return new LodashWrapper(value)}
	/**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} proto The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return {}}if(objectCreate){return objectCreate(proto)}object.prototype=proto;var result=new object;object.prototype=undefined;return result}}();
	/**
	     * The function whose prototype chain sequence wrappers inherit from.
	     *
	     * @private
	     */function baseLodash(){
	// No operation performed.
	}
	/**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable explicit method chain sequences.
	     */function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined;}
	/**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
	     * following template settings to use alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type {Object}
	     */lodash.templateSettings={
	/**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	escape:reEscape,
	/**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	evaluate:reEvaluate,
	/**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	interpolate:reInterpolate,
	/**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type {string}
	       */
	variable:"",
	/**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type {Object}
	       */
	imports:{
	/**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type {Function}
	         */
	_:lodash}};
	// Ensure wrappers are instances of `baseLodash`.
	lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;
	/*------------------------------------------------------------------------*/
	/**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @constructor
	     * @param {*} value The value to wrap.
	     */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}
	/**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result}
	/**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}return result}
	/**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||!isRight&&arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__)}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer}else{break outer}}}result[resIndex++]=value;}return result}
	// Ensure `LazyWrapper` is an instance of `baseLodash`.
	LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;
	/*------------------------------------------------------------------------*/
	/**
	     * Creates a hash object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}
	/**
	     * Removes all key-value entries from the hash.
	     *
	     * @private
	     * @name clear
	     * @memberOf Hash
	     */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}
	/**
	     * Removes `key` and its value from the hash.
	     *
	     * @private
	     * @name delete
	     * @memberOf Hash
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result}
	/**
	     * Gets the hash value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Hash
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result}return hasOwnProperty.call(data,key)?data[key]:undefined}
	/**
	     * Checks if a hash value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Hash
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key)}
	/**
	     * Sets the hash `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Hash
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the hash instance.
	     */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this}
	// Add methods to `Hash`.
	Hash.prototype.clear=hashClear;Hash.prototype["delete"]=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;
	/*------------------------------------------------------------------------*/
	/**
	     * Creates an list cache object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}
	/**
	     * Removes all key-value entries from the list cache.
	     *
	     * @private
	     * @name clear
	     * @memberOf ListCache
	     */function listCacheClear(){this.__data__=[];this.size=0;}
	/**
	     * Removes `key` and its value from the list cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf ListCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true}
	/**
	     * Gets the list cache value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf ListCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1]}
	/**
	     * Checks if a list cache value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf ListCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1}
	/**
	     * Sets the list cache `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf ListCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the list cache instance.
	     */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this}
	// Add methods to `ListCache`.
	ListCache.prototype.clear=listCacheClear;ListCache.prototype["delete"]=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;
	/*------------------------------------------------------------------------*/
	/**
	     * Creates a map cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}
	/**
	     * Removes all key-value entries from the map.
	     *
	     * @private
	     * @name clear
	     * @memberOf MapCache
	     */function mapCacheClear(){this.size=0;this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash};}
	/**
	     * Removes `key` and its value from the map.
	     *
	     * @private
	     * @name delete
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function mapCacheDelete(key){var result=getMapData(this,key)["delete"](key);this.size-=result?1:0;return result}
	/**
	     * Gets the map value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf MapCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function mapCacheGet(key){return getMapData(this,key).get(key)}
	/**
	     * Checks if a map value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf MapCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function mapCacheHas(key){return getMapData(this,key).has(key)}
	/**
	     * Sets the map `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf MapCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the map cache instance.
	     */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this}
	// Add methods to `MapCache`.
	MapCache.prototype.clear=mapCacheClear;MapCache.prototype["delete"]=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;
	/*------------------------------------------------------------------------*/
	/**
	     *
	     * Creates an array cache object to store unique values.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache;while(++index<length){this.add(values[index]);}}
	/**
	     * Adds `value` to the array cache.
	     *
	     * @private
	     * @name add
	     * @memberOf SetCache
	     * @alias push
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache instance.
	     */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this}
	/**
	     * Checks if `value` is in the array cache.
	     *
	     * @private
	     * @name has
	     * @memberOf SetCache
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `true` if `value` is found, else `false`.
	     */function setCacheHas(value){return this.__data__.has(value)}
	// Add methods to `SetCache`.
	SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;
	/*------------------------------------------------------------------------*/
	/**
	     * Creates a stack cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}
	/**
	     * Removes all key-value entries from the stack.
	     *
	     * @private
	     * @name clear
	     * @memberOf Stack
	     */function stackClear(){this.__data__=new ListCache;this.size=0;}
	/**
	     * Removes `key` and its value from the stack.
	     *
	     * @private
	     * @name delete
	     * @memberOf Stack
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function stackDelete(key){var data=this.__data__,result=data["delete"](key);this.size=data.size;return result}
	/**
	     * Gets the stack value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Stack
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function stackGet(key){return this.__data__.get(key)}
	/**
	     * Checks if a stack value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Stack
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function stackHas(key){return this.__data__.has(key)}
	/**
	     * Sets the stack `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Stack
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the stack cache instance.
	     */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this}
	// Add methods to `Stack`.
	Stack.prototype.clear=stackClear;Stack.prototype["delete"]=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;
	/*------------------------------------------------------------------------*/
	/**
	     * Creates an array of the enumerable property names of the array-like `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @param {boolean} inherited Specify returning inherited property names.
	     * @returns {Array} Returns the array of property names.
	     */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(
	// Safari 9 has enumerable `arguments.length` in strict mode.
	key=="length"||
	// Node.js 0.10 has enumerable non-index properties on buffers.
	isBuff&&(key=="offset"||key=="parent")||
	// PhantomJS 2 has enumerable non-index properties on typed arrays.
	isType&&(key=="buffer"||key=="byteLength"||key=="byteOffset")||
	// Skip index properties.
	isIndex(key,length)))){result.push(key);}}return result}
	/**
	     * A specialized version of `_.sample` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @returns {*} Returns the random element.
	     */function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined}
	/**
	     * A specialized version of `_.sampleSize` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length))}
	/**
	     * A specialized version of `_.shuffle` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */function arrayShuffle(array){return shuffleSelf(copyArray(array))}
	/**
	     * This function is like `assignValue` except that it doesn't assign
	     * `undefined` values.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}
	/**
	     * Assigns `value` to `key` of `object` if the existing value is not equivalent
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}
	/**
	     * Gets the index at which the `key` is found in `array` of key-value pairs.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {*} key The key to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length}}return -1}
	/**
	     * Aggregates elements of `collection` on `accumulator` with keys transformed
	     * by `iteratee` and values set by `setter`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform keys.
	     * @param {Object} accumulator The initial aggregated object.
	     * @returns {Function} Returns `accumulator`.
	     */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator}
	/**
	     * The base implementation of `_.assign` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */function baseAssign(object,source){return object&&copyObject(source,keys(source),object)}
	/**
	     * The base implementation of `_.assignIn` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object)}
	/**
	     * The base implementation of `assignValue` and `assignMergeValue` without
	     * value checks.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function baseAssignValue(object,key,value){if(key=="__proto__"&&defineProperty){defineProperty(object,key,{configurable:true,enumerable:true,value:value,writable:true});}else{object[key]=value;}}
	/**
	     * The base implementation of `_.at` without support for individual paths.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {string[]} paths The property paths to pick.
	     * @returns {Array} Returns the picked elements.
	     */function baseAt(object,paths){var index=-1,length=paths.length,result=Array(length),skip=object==null;while(++index<length){result[index]=skip?undefined:get(object,paths[index]);}return result}
	/**
	     * The base implementation of `_.clamp` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper;}if(lower!==undefined){number=number>=lower?number:lower;}}return number}
	/**
	     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	     * traversed objects.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} bitmask The bitmask flags.
	     *  1 - Deep clone
	     *  2 - Flatten inherited properties
	     *  4 - Clone symbols
	     * @param {Function} [customizer] The function to customize cloning.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The parent object of `value`.
	     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	     * @returns {*} Returns the cloned value.
	     */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result}if(!isObject(value)){return value}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result)}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep)}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value))}}else{if(!cloneableTags[tag]){return object?value:{}}result=initCloneByTag(value,tag,baseClone,isDeep);}}
	// Check for circular references and return its corresponding clone.
	stack||(stack=new Stack);var stacked=stack.get(value);if(stacked){return stacked}stack.set(value,result);var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}
	// Recursively populate clone (susceptible to call stack limits).
	assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result}
	/**
	     * The base implementation of `_.conforms` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     */function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props)}}
	/**
	     * The base implementation of `_.conformsTo` which accepts `props` to check.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return !length}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined&&!(key in object)||!predicate(value)){return false}}return true}
	/**
	     * The base implementation of `_.delay` and `_.defer` which accepts `args`
	     * to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Array} args The arguments to provide to `func`.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */function baseDelay(func,wait,args){if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}return setTimeout(function(){func.apply(undefined,args);},wait)}
	/**
	     * The base implementation of methods like `_.difference` without support
	     * for excluding multiple arrays or iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result}
	/**
	     * The base implementation of `_.forEach` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */var baseEach=createBaseEach(baseForOwn);
	/**
	     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */var baseEachRight=createBaseEach(baseForOwnRight,true);
	/**
	     * The base implementation of `_.every` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result});return result}
	/**
	     * The base implementation of methods like `_.max` and `_.min` which accepts a
	     * `comparator` to determine the extremum value.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The iteratee invoked per iteration.
	     * @param {Function} comparator The comparator used to compare values.
	     * @returns {*} Returns the extremum value.
	     */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result}
	/**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start;}end=end===undefined||end>length?length:toInteger(end);if(end<0){end+=length;}end=start>end?0:toLength(end);while(start<end){array[start++]=value;}return array}
	/**
	     * The base implementation of `_.filter` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result}
	/**
	     * The base implementation of `_.flatten` with support for restricting flattening.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {number} depth The maximum recursion depth.
	     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){
	// Recursively flatten arrays (susceptible to call stack limits).
	baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result}
	/**
	     * The base implementation of `baseForOwn` which iterates over `object`
	     * properties returned by `keysFunc` and invokes `iteratee` for each property.
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */var baseFor=createBaseFor();
	/**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */var baseForRight=createBaseFor(true);
	/**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys)}
	/**
	     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys)}
	/**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from `props`.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the function names.
	     */function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key])})}
	/**
	     * The base implementation of `_.get` without support for default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @returns {*} Returns the resolved value.
	     */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined}
	/**
	     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @param {Function} symbolsFunc The function to get the symbols of `object`.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object))}
	/**
	     * The base implementation of `getTag` without fallbacks for buggy environments.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value)}
	/**
	     * The base implementation of `_.gt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     */function baseGt(value,other){return value>other}
	/**
	     * The base implementation of `_.has` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key)}
	/**
	     * The base implementation of `_.hasIn` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */function baseHasIn(object,key){return object!=null&&key in Object(object)}
	/**
	     * The base implementation of `_.inRange` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to check.
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     */function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end)}
	/**
	     * The base implementation of methods like `_.intersection`, without support
	     * for iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of shared values.
	     */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer}}if(seen){seen.push(computed);}result.push(value);}}return result}
	/**
	     * The base implementation of `_.invert` and `_.invertBy` which inverts
	     * `object` with values transformed by `iteratee` and set by `setter`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform values.
	     * @param {Object} accumulator The initial inverted object.
	     * @returns {Function} Returns `accumulator`.
	     */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator}
	/**
	     * The base implementation of `_.invoke` without support for individual
	     * method arguments.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */function baseInvoke(object,path,args){path=castPath(path,object);object=parent(object,path);var func=object==null?object:object[toKey(last(path))];return func==null?undefined:apply(func,object,args)}
	/**
	     * The base implementation of `_.isArguments`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag}
	/**
	     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     */function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag}
	/**
	     * The base implementation of `_.isDate` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     */function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag}
	/**
	     * The base implementation of `_.isEqual` which supports partial comparisons
	     * and tracks traversed objects.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {boolean} bitmask The bitmask flags.
	     *  1 - Unordered comparison
	     *  2 - Partial comparison
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack)}
	/**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack);return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack)}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,"__wrapped__"),othIsWrapped=othIsObj&&hasOwnProperty.call(other,"__wrapped__");if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack);return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack)}}if(!isSameTag){return false}stack||(stack=new Stack);return equalObjects(object,other,bitmask,customizer,equalFunc,stack)}
	/**
	     * The base implementation of `_.isMap` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag}
	/**
	     * The base implementation of `_.isMatch` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Array} matchData The property names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return !length}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false}}else{var stack=new Stack;if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false}}}return true}
	/**
	     * The base implementation of `_.isNative` without bad shim checks.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value))}
	/**
	     * The base implementation of `_.isRegExp` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag}
	/**
	     * The base implementation of `_.isSet` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag}
	/**
	     * The base implementation of `_.isTypedArray` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)]}
	/**
	     * The base implementation of `_.iteratee`.
	     *
	     * @private
	     * @param {*} [value=_.identity] The value to convert to an iteratee.
	     * @returns {Function} Returns the iteratee.
	     */function baseIteratee(value){
	// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	if(typeof value=="function"){return value}if(value==null){return identity}if(typeof value=="object"){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value)}return property(value)}
	/**
	     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object)}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!="constructor"){result.push(key);}}return result}
	/**
	     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object)}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=="constructor"&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result}
	/**
	     * The base implementation of `_.lt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     */function baseLt(value,other){return value<other}
	/**
	     * The base implementation of `_.map` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result}
	/**
	     * The base implementation of `_.matches` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1])}return function(object){return object===source||baseIsMatch(object,source,matchData)}}
	/**
	     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue)}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}
	/**
	     * The base implementation of `_.merge` without support for multiple sources.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return}baseFor(source,function(srcValue,key){if(isObject(srcValue)){stack||(stack=new Stack);baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(object[key],srcValue,key+"",object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn);}
	/**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return}var newValue=customizer?customizer(objValue,srcValue,key+"",object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else{newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||srcIndex&&isFunction(objValue)){newValue=initCloneObject(srcValue);}}else{isCommon=false;}}if(isCommon){
	// Recursively merge objects and arrays (susceptible to call stack limits).
	stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack["delete"](srcValue);}assignMergeValue(object,key,newValue);}
	/**
	     * The base implementation of `_.nth` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {number} n The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     */function baseNth(array,n){var length=array.length;if(!length){return}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined}
	/**
	     * The base implementation of `_.orderBy` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {string[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value)});return {criteria:criteria,index:++index,value:value}});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders)})}
	/**
	     * The base implementation of `_.pick` without support for individual
	     * property identifiers.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} paths The property paths to pick.
	     * @returns {Object} Returns the new object.
	     */function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path)})}
	/**
	     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} paths The property paths to pick.
	     * @param {Function} predicate The function invoked per property.
	     * @returns {Object} Returns the new object.
	     */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result}
	/**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     */function basePropertyDeep(path){return function(object){return baseGet(object,path)}}
	/**
	     * The base implementation of `_.pullAllBy` without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}splice.call(array,fromIndex,1);}}return array}
	/**
	     * The base implementation of `_.pullAt` without support for individual
	     * indexes or capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else{baseUnset(array,index);}}}return array}
	/**
	     * The base implementation of `_.random` without support for returning
	     * floating-point numbers.
	     *
	     * @private
	     * @param {number} lower The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the random number.
	     */function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1))}
	/**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the range of numbers.
	     */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result}
	/**
	     * The base implementation of `_.repeat` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {string} string The string to repeat.
	     * @param {number} n The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     */function baseRepeat(string,n){var result="";if(!string||n<1||n>MAX_SAFE_INTEGER){return result}
	// Leverage the exponentiation by squaring algorithm for a faster repeat.
	// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	do{if(n%2){result+=string;}n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result}
	/**
	     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     */function baseRest(func,start){return setToString(overRest(func,start,identity),func+"")}
	/**
	     * The base implementation of `_.sample`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     */function baseSample(collection){return arraySample(values(collection))}
	/**
	     * The base implementation of `_.sampleSize` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length))}
	/**
	     * The base implementation of `_.set`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */function baseSet(object,path,value,customizer){if(!isObject(object)){return object}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object}
	/**
	     * The base implementation of `setData` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func};
	/**
	     * The base implementation of `setToString` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,"toString",{configurable:true,enumerable:false,value:constant(string),writable:true})};
	/**
	     * The base implementation of `_.shuffle`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */function baseShuffle(collection){return shuffleSelf(values(collection))}
	/**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result}
	/**
	     * The base implementation of `_.some` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return !result});return !!result}
	/**
	     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
	     * performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */function baseSortedIndex(array,value,retHighest){var low=0,high=array==null?low:array.length;if(typeof value=="number"&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1;}else{high=mid;}}return high}return baseSortedIndexBy(array,value,identity,retHighest)}
	/**
	     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
	     * which invokes `iteratee` for `value` and each element of `array` to compute
	     * their sort ranking. The iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The iteratee invoked per element.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */function baseSortedIndexBy(array,value,iteratee,retHighest){value=iteratee(value);var low=0,high=array==null?0:array.length,valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?computed<=value:computed<value;}if(setLow){low=mid+1;}else{high=mid;}}return nativeMin(high,MAX_ARRAY_INDEX)}
	/**
	     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
	     * support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}return result}
	/**
	     * The base implementation of `_.toNumber` which doesn't ensure correct
	     * conversions of binary, hexadecimal, or octal string values.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     */function baseToNumber(value){if(typeof value=="number"){return value}if(isSymbol(value)){return NAN}return +value}
	/**
	     * The base implementation of `_.toString` which doesn't convert nullish
	     * values to empty strings.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     */function baseToString(value){
	// Exit early for strings to avoid a performance hit in some environments.
	if(typeof value=="string"){return value}if(isArray(value)){
	// Recursively convert values (susceptible to call stack limits).
	return arrayMap(value,baseToString)+""}if(isSymbol(value)){return symbolToString?symbolToString.call(value):""}var result=value+"";return result=="0"&&1/value==-INFINITY?"-0":result}
	/**
	     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set)}isCommon=false;includes=cacheHas;seen=new SetCache;}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result}
	/**
	     * The base implementation of `_.unset`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The property path to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     */function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))]}
	/**
	     * The base implementation of `_.update`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to update.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer)}
	/**
	     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
	     * without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index)}
	/**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to perform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args))},result)}
	/**
	     * The base implementation of methods like `_.xor`, without support for
	     * iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of values.
	     */function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2){return length?baseUniq(arrays[0]):[]}var index=-1,result=Array(length);while(++index<length){var array=arrays[index],othIndex=-1;while(++othIndex<length){if(othIndex!=index){result[index]=baseDifference(result[index]||array,arrays[othIndex],iteratee,comparator);}}}return baseUniq(baseFlatten(result,1),iteratee,comparator)}
	/**
	     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	     *
	     * @private
	     * @param {Array} props The property identifiers.
	     * @param {Array} values The property values.
	     * @param {Function} assignFunc The function to assign values.
	     * @returns {Object} Returns the new object.
	     */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value);}return result}
	/**
	     * Casts `value` to an empty array if it's not an array like object.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array|Object} Returns the cast array-like object.
	     */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[]}
	/**
	     * Casts `value` to `identity` if it's not a function.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Function} Returns cast function.
	     */function castFunction(value){return typeof value=="function"?value:identity}
	/**
	     * Casts `value` to a path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {Array} Returns the cast property path array.
	     */function castPath(value,object){if(isArray(value)){return value}return isKey(value,object)?[value]:stringToPath(toString(value))}
	/**
	     * A `baseRest` alias which can be replaced with `identity` by module
	     * replacement plugins.
	     *
	     * @private
	     * @type {Function}
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */var castRest=baseRest;
	/**
	     * Casts `array` to a slice if it's needed.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {number} start The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the cast slice.
	     */function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return !start&&end>=length?array:baseSlice(array,start,end)}
	/**
	     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
	     *
	     * @private
	     * @param {number|Object} id The timer id or timeout object of the timer to clear.
	     */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id)};
	/**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice()}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result}
	/**
	     * Creates a clone of `arrayBuffer`.
	     *
	     * @private
	     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result}
	/**
	     * Creates a clone of `dataView`.
	     *
	     * @private
	     * @param {Object} dataView The data view to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned data view.
	     */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength)}
	/**
	     * Creates a clone of `map`.
	     *
	     * @private
	     * @param {Object} map The map to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned map.
	     */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),CLONE_DEEP_FLAG):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor)}
	/**
	     * Creates a clone of `regexp`.
	     *
	     * @private
	     * @param {Object} regexp The regexp to clone.
	     * @returns {Object} Returns the cloned regexp.
	     */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result}
	/**
	     * Creates a clone of `set`.
	     *
	     * @private
	     * @param {Object} set The set to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned set.
	     */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),CLONE_DEEP_FLAG):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor)}
	/**
	     * Creates a clone of the `symbol` object.
	     *
	     * @private
	     * @param {Object} symbol The symbol object to clone.
	     * @returns {Object} Returns the cloned symbol object.
	     */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{}}
	/**
	     * Creates a clone of `typedArray`.
	     *
	     * @private
	     * @param {Object} typedArray The typed array to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned typed array.
	     */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length)}
	/**
	     * Compares values to sort them in ascending order.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {number} Returns the sort order indicator for `value`.
	     */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return -1}}return 0}
	/**
	     * Used by `_.orderBy` to compare multiple properties of a value to another
	     * and stable sort them.
	     *
	     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	     * specify an order of "desc" for descending or "asc" for ascending sort order
	     * of corresponding values.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {boolean[]|string[]} orders The order to sort by for each property.
	     * @returns {number} Returns the sort order indicator for `object`.
	     */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result}var order=orders[index];return result*(order=="desc"?-1:1)}}
	// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	// that causes it, under certain circumstances, to provide the same value for
	// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	// for more details.
	//
	// This also ensures a stable sort in V8 and other engines.
	// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	return object.index-other.index}
	/**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result}
	/**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result}
	/**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array}
	/**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @param {Function} [customizer] The function to customize copied values.
	     * @returns {Object} Returns `object`.
	     */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object}
	/**
	     * Copies own symbols of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */function copySymbols(source,object){return copyObject(source,getSymbols(source),object)}
	/**
	     * Copies own and inherited symbols of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object)}
	/**
	     * Creates a function like `_.groupBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} [initializer] The accumulator object initializer.
	     * @returns {Function} Returns the new aggregator function.
	     */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator)}}
	/**
	     * Creates a function like `_.assign`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=="function"?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object})}
	/**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection}if(!isArrayLike(collection)){return eachFunc(collection,iteratee)}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break}}return collection}}
	/**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break}}return object}}
	/**
	     * Creates a function that wraps `func` to invoke it with the optional `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createBind(func,bitmask,thisArg){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments)}return wrapper}
	/**
	     * Creates a function like `_.lowerFirst`.
	     *
	     * @private
	     * @param {string} methodName The name of the `String` case method to use.
	     * @returns {Function} Returns the new case function.
	     */function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(""):string.slice(1);return chr[methodName]()+trailing}}
	/**
	     * Creates a function like `_.camelCase`.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,"")),callback,"")}}
	/**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */function createCtor(Ctor){return function(){
	// Use a `switch` statement to work with class constructors. See
	// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	// for more details.
	var args=arguments;switch(args.length){case 0:return new Ctor;case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6])}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);
	// Mimic the constructor's `return` behavior.
	// See https://es5.github.io/#x13.2.2 for more details.
	return isObject(result)?result:thisBinding}}
	/**
	     * Creates a function that wraps `func` to enable currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {number} arity The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length)}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args)}return wrapper}
	/**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} findIndexFunc The function to find the collection index.
	     * @returns {Function} Returns the new find function.
	     */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function(key){return iteratee(iterable[key],key,iterable)};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined}}
	/**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}while(index--){var func=funcs[index];if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}if(prereq&&!wrapper&&getFuncName(func)=="wrapper"){var wrapper=new LodashWrapper([],true);}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=="wrapper"?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(WRAP_ARY_FLAG|WRAP_CURRY_FLAG|WRAP_PARTIAL_FLAG|WRAP_REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)){return wrapper.plant(value).value()}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}return result}})}
	/**
	     * Creates a function that wraps `func` to invoke it with optional `this`
	     * binding of `thisArg`, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided
	     *  to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&WRAP_ARY_FLAG,isBind=bitmask&WRAP_BIND_FLAG,isBindKey=bitmask&WRAP_BIND_KEY_FLAG,isCurried=bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG),isFlip=bitmask&WRAP_FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length)}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args)}return wrapper}
	/**
	     * Creates a function like `_.invertBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} toIteratee The function to resolve iteratees.
	     * @returns {Function} Returns the new inverter function.
	     */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{})}}
	/**
	     * Creates a function that performs a mathematical operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @param {number} [defaultValue] The value used for `undefined` arguments.
	     * @returns {Function} Returns the new mathematical operation function.
	     */function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined&&other===undefined){return defaultValue}if(value!==undefined){result=value;}if(other!==undefined){if(result===undefined){return other}if(typeof value=="string"||typeof other=="string"){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}result=operator(value,other);}return result}}
	/**
	     * Creates a function like `_.over`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over iteratees.
	     * @returns {Function} Returns the new over function.
	     */function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args)})})})}
	/**
	     * Creates the padding for `string` based on `length`. The `chars` string
	     * is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {number} length The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padding for `string`.
	     */function createPadding(length,chars){chars=chars===undefined?" ":baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars}var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(""):result.slice(0,length)}
	/**
	     * Creates a function that wraps `func` to invoke it with the `this` binding
	     * of `thisArg` and `partials` prepended to the arguments it receives.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to
	     *  the new function.
	     * @returns {Function} Returns the new wrapped function.
	     */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args)}return wrapper}
	/**
	     * Creates a `_.range` or `_.rangeRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new range function.
	     */function createRange(fromRight){return function(start,end,step){if(step&&typeof step!="number"&&isIterateeCall(start,end,step)){end=step=undefined;}
	// Ensure the sign of `-0` is preserved.
	start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}step=step===undefined?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight)}}
	/**
	     * Creates a function that performs a relational operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @returns {Function} Returns the new relational operation function.
	     */function createRelationalOperation(operator){return function(value,other){if(!(typeof value=="string"&&typeof other=="string")){value=toNumber(value);other=toNumber(other);}return operator(value,other)}}
	/**
	     * Creates a function that wraps `func` to continue currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {Function} wrapFunc The function to create the `func` wrapper.
	     * @param {*} placeholder The placeholder value.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&WRAP_CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=isCurry?WRAP_PARTIAL_FLAG:WRAP_PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?WRAP_PARTIAL_RIGHT_FLAG:WRAP_PARTIAL_FLAG);if(!(bitmask&WRAP_CURRY_BOUND_FLAG)){bitmask&=~(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG);}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData);}result.placeholder=placeholder;return setWrapToString(result,func,bitmask)}
	/**
	     * Creates a function like `_.round`.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=precision==null?0:nativeMin(toInteger(precision),292);if(precision){
	// Shift with exponential notation to avoid floating-point issues.
	// See [MDN](https://mdn.io/round#Examples) for more details.
	var pair=(toString(number)+"e").split("e"),value=func(pair[0]+"e"+(+pair[1]+precision));pair=(toString(value)+"e").split("e");return +(pair[0]+"e"+(+pair[1]-precision))}return func(number)}}
	/**
	     * Creates a set object of `values`.
	     *
	     * @private
	     * @param {Array} values The values to add to the set.
	     * @returns {Object} Returns the new set.
	     */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values)};
	/**
	     * Creates a `_.toPairs` or `_.toPairsIn` function.
	     *
	     * @private
	     * @param {Function} keysFunc The function to get the keys of a given object.
	     * @returns {Function} Returns the new pairs function.
	     */function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object)}if(tag==setTag){return setToPairs(object)}return baseToPairs(object,keysFunc(object))}}
	/**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags.
	     *    1 - `_.bind`
	     *    2 - `_.bindKey`
	     *    4 - `_.curry` or `_.curryRight` of a bound function
	     *    8 - `_.curry`
	     *   16 - `_.curryRight`
	     *   32 - `_.partial`
	     *   64 - `_.partialRight`
	     *  128 - `_.rearg`
	     *  256 - `_.ary`
	     *  512 - `_.flip`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&WRAP_BIND_KEY_FLAG;if(!isBindKey&&typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}var length=partials?partials.length:0;if(!length){bitmask&=~(WRAP_PARTIAL_FLAG|WRAP_PARTIAL_RIGHT_FLAG);partials=holders=undefined;}ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&WRAP_PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]===undefined?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)){bitmask&=~(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==WRAP_BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==WRAP_CURRY_FLAG||bitmask==WRAP_CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==WRAP_PARTIAL_FLAG||bitmask==(WRAP_BIND_FLAG|WRAP_PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined,newData);}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask)}
	/**
	     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	     * of source objects to the destination object for all destination properties
	     * that resolve to `undefined`.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to assign.
	     * @param {Object} object The parent object of `objValue`.
	     * @returns {*} Returns the value to assign.
	     */function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue}return objValue}
	/**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
	     * objects into destination objects that are passed thru.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to merge.
	     * @param {Object} object The parent object of `objValue`.
	     * @param {Object} source The parent object of `srcValue`.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     * @returns {*} Returns the value to assign.
	     */function customDefaultsMerge(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){
	// Recursively merge objects and arrays (susceptible to call stack limits).
	stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined,customDefaultsMerge,stack);stack["delete"](srcValue);}return objValue}
	/**
	     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
	     * objects.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @param {string} key The key of the property to inspect.
	     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
	     */function customOmitClone(value){return isPlainObject(value)?undefined:value}
	/**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `array` and `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false}
	// Assume cyclic values are equal.
	var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache:undefined;stack.set(array,other);stack.set(other,array);
	// Ignore non-index properties.
	while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue}result=false;break}
	// Recursively compare arrays (susceptible to call stack limits).
	if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex)}})){result=false;break}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break}}stack["delete"](array);stack["delete"](other);return result}
	/**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false}return true;case boolTag:case dateTag:case numberTag:
	// Coerce booleans to `1` or `0` and dates to milliseconds.
	// Invalid dates are coerced to `NaN`.
	return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:
	// Coerce regexes to strings and treat strings, primitives and objects,
	// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	// for more details.
	return object==other+"";case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false}
	// Assume cyclic values are equal.
	var stacked=stack.get(object);if(stacked){return stacked==other}bitmask|=COMPARE_UNORDERED_FLAG;
	// Recursively compare objects (susceptible to call stack limits).
	stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack["delete"](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other)}}return false}
	/**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false}}
	// Assume cyclic values are equal.
	var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}
	// Recursively compare objects (susceptible to call stack limits).
	if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break}skipCtor||(skipCtor=key=="constructor");}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;
	// Non `Object` object instances with different constructors are not equal.
	if(objCtor!=othCtor&&("constructor"in object&&"constructor"in other)&&!(typeof objCtor=="function"&&objCtor instanceof objCtor&&typeof othCtor=="function"&&othCtor instanceof othCtor)){result=false;}}stack["delete"](object);stack["delete"](other);return result}
	/**
	     * A specialized version of `baseRest` which flattens the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */function flatRest(func){return setToString(overRest(func,undefined,flatten),func+"")}
	/**
	     * Creates an array of own enumerable property names and symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols)}
	/**
	     * Creates an array of own and inherited enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn)}
	/**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */var getData=!metaMap?noop:function(func){return metaMap.get(func)};
	/**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */function getFuncName(func){var result=func.name+"",array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name}}return result}
	/**
	     * Gets the argument placeholder value for `func`.
	     *
	     * @private
	     * @param {Function} func The function to inspect.
	     * @returns {*} Returns the placeholder value.
	     */function getHolder(func){var object=hasOwnProperty.call(lodash,"placeholder")?lodash:func;return object.placeholder}
	/**
	     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
	     * this function returns the custom method, otherwise it returns `baseIteratee`.
	     * If arguments are provided, the chosen function is invoked with them and
	     * its result is returned.
	     *
	     * @private
	     * @param {*} [value] The value to convert to an iteratee.
	     * @param {number} [arity] The arity of the created iteratee.
	     * @returns {Function} Returns the chosen function or its result.
	     */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result}
	/**
	     * Gets the data for `map`.
	     *
	     * @private
	     * @param {Object} map The map to query.
	     * @param {string} key The reference key.
	     * @returns {*} Returns the map data.
	     */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=="string"?"string":"hash"]:data.map}
	/**
	     * Gets the property names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result}
	/**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined}
	/**
	     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the raw `toStringTag`.
	     */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;}catch(e){}var result=nativeObjectToString.call(value);{if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result}
	/**
	     * Creates an array of the own enumerable symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return []}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol)})};
	/**
	     * Creates an array of the own and inherited enumerable symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result};
	/**
	     * Gets the `toStringTag` of `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */var getTag=baseGetTag;
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag){getTag=function(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):"";if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}}return result};}
	/**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case"drop":start+=size;break;case"dropRight":end-=size;break;case"take":end=nativeMin(end,start+size);break;case"takeRight":start=nativeMax(start,end-size);break}}return {start:start,end:end}}
	/**
	     * Extracts wrapper details from the `source` body comment.
	     *
	     * @private
	     * @param {string} source The source to inspect.
	     * @returns {Array} Returns the wrapper details.
	     */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[]}
	/**
	     * Checks if `path` exists on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @param {Function} hasFunc The function to check properties.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break}object=object[key];}if(result||++index!=length){return result}length=object==null?0:object.length;return !!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object))}
	/**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */function initCloneArray(array){var length=array.length,result=array.constructor(length);
	// Add properties assigned by `RegExp#exec`.
	if(length&&typeof array[0]=="string"&&hasOwnProperty.call(array,"index")){result.index=array.index;result.input=array.input;}return result}
	/**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */function initCloneObject(object){return typeof object.constructor=="function"&&!isPrototype(object)?baseCreate(getPrototype(object)):{}}
	/**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object)}}
	/**
	     * Inserts wrapper `details` in a comment at the top of the `source` body.
	     *
	     * @private
	     * @param {string} source The source to modify.
	     * @returns {Array} details The details to insert.
	     * @returns {string} Returns the modified source.
	     */function insertWrapDetails(source,details){var length=details.length;if(!length){return source}var lastIndex=length-1;details[lastIndex]=(length>1?"& ":"")+details[lastIndex];details=details.join(length>2?", ":" ");return source.replace(reWrapComment,"{\n/* [wrapped with "+details+"] */\n")}
	/**
	     * Checks if `value` is a flattenable `arguments` object or array.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	     */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}
	/**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return !!length&&(typeof value=="number"||reIsUint.test(value))&&(value>-1&&value%1==0&&value<length)}
	/**
	     * Checks if the given arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	     *  else `false`.
	     */function isIterateeCall(value,index,object){if(!isObject(object)){return false}var type=typeof index;if(type=="number"?isArrayLike(object)&&isIndex(index,object.length):type=="string"&&index in object){return eq(object[index],value)}return false}
	/**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */function isKey(value,object){if(isArray(value)){return false}var type=typeof value;if(type=="number"||type=="symbol"||type=="boolean"||value==null||isSymbol(value)){return true}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object)}
	/**
	     * Checks if `value` is suitable for use as unique object key.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	     */function isKeyable(value){var type=typeof value;return type=="string"||type=="number"||type=="symbol"||type=="boolean"?value!=="__proto__":value===null}
	/**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	     *  else `false`.
	     */function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!="function"||!(funcName in LazyWrapper.prototype)){return false}if(func===other){return true}var data=getData(other);return !!data&&func===data[0]}
	/**
	     * Checks if `func` has its source masked.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	     */function isMasked(func){return !!maskSrcKey&&maskSrcKey in func}
	/**
	     * Checks if `func` is capable of being masked.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
	     */var isMaskable=coreJsData?isFunction:stubFalse;
	/**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=="function"&&Ctor.prototype||objectProto;return value===proto}
	/**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */function isStrictComparable(value){return value===value&&!isObject(value)}
	/**
	     * A specialized version of `matchesProperty` for source values suitable
	     * for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object))}}
	/**
	     * A specialized version of `_.memoize` which clears the memoized function's
	     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	     *
	     * @private
	     * @param {Function} func The function to have its output memoized.
	     * @returns {Function} Returns the new memoized function.
	     */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key});var cache=result.cache;return result}
	/**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers used to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and
	     * `_.rearg` modify function arguments, making the order in which they are
	     * executed important, preventing the merging of metadata. However, we make
	     * an exception for a safe combined case where curried functions have `_.ary`
	     * and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG|WRAP_ARY_FLAG);var isCombo=srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_CURRY_FLAG||srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(WRAP_ARY_FLAG|WRAP_REARG_FLAG)&&source[7].length<=source[8]&&bitmask==WRAP_CURRY_FLAG;
	// Exit early if metadata can't be merged.
	if(!(isCommon||isCombo)){return data}
	// Use source `thisArg` if available.
	if(srcBitmask&WRAP_BIND_FLAG){data[2]=source[2];
	// Set when currying a bound function.
	newBitmask|=bitmask&WRAP_BIND_FLAG?0:WRAP_CURRY_BOUND_FLAG;}
	// Compose partial arguments.
	var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}
	// Compose partial right arguments.
	value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}
	// Use source `argPos` if available.
	value=source[7];if(value){data[7]=value;}
	// Use source `ary` if it's smaller.
	if(srcBitmask&WRAP_ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}
	// Use source `arity` if one is not provided.
	if(data[9]==null){data[9]=source[9];}
	// Use source `func` and merge bitmasks.
	data[0]=source[0];data[1]=newBitmask;return data}
	/**
	     * This function is like
	     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * except that it includes inherited enumerable properties.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result}
	/**
	     * Converts `value` to a string using `Object.prototype.toString`.
	     *
	     * @private
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     */function objectToString(value){return nativeObjectToString.call(value)}
	/**
	     * A specialized version of `baseRest` which transforms the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @param {Function} transform The rest array transform.
	     * @returns {Function} Returns the new function.
	     */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs)}}
	/**
	     * Gets the parent value at `path` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path to get the parent value of.
	     * @returns {*} Returns the parent value.
	     */function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1))}
	/**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}return array}
	/**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity
	     * function to avoid garbage collection pauses in V8. See
	     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */var setData=shortOut(baseSetData);
	/**
	     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait)};
	/**
	     * Sets the `toString` method of `func` to return `string`.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */var setToString=shortOut(baseSetToString);
	/**
	     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	     * with wrapper details in a comment at the top of the source body.
	     *
	     * @private
	     * @param {Function} wrapper The function to modify.
	     * @param {Function} reference The reference function.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Function} Returns `wrapper`.
	     */function setWrapToString(wrapper,reference,bitmask){var source=reference+"";return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)))}
	/**
	     * Creates a function that'll short out and invoke `identity` instead
	     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	     * milliseconds.
	     *
	     * @private
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new shortable function.
	     */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0]}}else{count=0;}return func.apply(undefined,arguments)}}
	/**
	     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @param {number} [size=array.length] The size of `array`.
	     * @returns {Array} Returns `array`.
	     */function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value;}array.length=size;return array}
	/**
	     * Converts `string` to a property path array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the property path array.
	     */var stringToPath=memoizeCapped(function(string){var result=[];if(reLeadingDot.test(string)){result.push("");}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,"$1"):number||match);});return result});
	/**
	     * Converts `value` to a string key if it's not a string or symbol.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {string|symbol} Returns the key.
	     */function toKey(value){if(typeof value=="string"||isSymbol(value)){return value}var result=value+"";return result=="0"&&1/value==-INFINITY?"-0":result}
	/**
	     * Converts `func` to its source code.
	     *
	     * @private
	     * @param {Function} func The function to convert.
	     * @returns {string} Returns the source code.
	     */function toSource(func){if(func!=null){try{return funcToString.call(func)}catch(e){}try{return func+""}catch(e){}}return ""}
	/**
	     * Updates wrapper `details` based on `bitmask` flags.
	     *
	     * @private
	     * @returns {Array} details The details to modify.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Array} Returns `details`.
	     */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value="_."+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort()}
	/**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone()}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result}
	/*------------------------------------------------------------------------*/
	/**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `array` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the new array of chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined){size=1;}else{size=nativeMax(toInteger(size),0);}var length=array==null?0:array.length;if(!length||size<1){return []}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size);}return result}
	/**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result}
	/**
	     * Creates a new array concatenating `array` with any additional arrays
	     * and/or values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to concatenate.
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var other = _.concat(array, 2, [3], [[4]]);
	     *
	     * console.log(other);
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */function concat(){var length=arguments.length;if(!length){return []}var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1))}
	/**
	     * Creates an array of `array` values not included in the other given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order and references of result values are
	     * determined by the first array.
	     *
	     * **Note:** Unlike `_.pullAll`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.without, _.xor
	     * @example
	     *
	     * _.difference([2, 1], [2, 3]);
	     * // => [1]
	     */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[]});
	/**
	     * This method is like `_.difference` except that it accepts `iteratee` which
	     * is invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The order and references of result values are
	     * determined by the first array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[]});
	/**
	     * This method is like `_.difference` except that it accepts `comparator`
	     * which is invoked to compare elements of `array` to `values`. The order and
	     * references of result values are determined by the first array. The comparator
	     * is invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     *
	     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }]
	     */var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[]});
	/**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return []}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,n<0?0:n,length)}
	/**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return []}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n)}
	/**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.dropRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropRightWhile(users, ['active', false]);
	     * // => objects for ['barney']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropRightWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[]}
	/**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.dropWhile(users, function(o) { return !o.active; });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropWhile(users, ['active', false]);
	     * // => objects for ['pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */function dropWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true):[]}
	/**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8, 10], '*', 1, 3);
	     * // => [4, '*', '*', 10]
	     */function fill(array,value,start,end){var length=array==null?0:array.length;if(!length){return []}if(start&&typeof start!="number"&&isIterateeCall(array,value,start)){start=0;end=length;}return baseFill(array,value,start,end)}
	/**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(o) { return o.user == 'barney'; });
	     * // => 0
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findIndex(users, ['active', false]);
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findIndex(users, 'active');
	     * // => 2
	     */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return -1}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,getIteratee(predicate,3),index)}
	/**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
	     * // => 2
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastIndex(users, ['active', false]);
	     * // => 2
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */function findLastIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return -1}var index=length-1;if(fromIndex!==undefined){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1);}return baseFindIndex(array,getIteratee(predicate,3),index,true)}
	/**
	     * Flattens `array` a single level deep.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, [3, [4]], 5]
	     */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[]}
	/**
	     * Recursively flattens `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, 3, 4, 5]
	     */function flattenDeep(array){var length=array==null?0:array.length;return length?baseFlatten(array,INFINITY):[]}
	/**
	     * Recursively flatten `array` up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * var array = [1, [2, [3, [4]], 5]];
	     *
	     * _.flattenDepth(array, 1);
	     * // => [1, 2, [3, [4]], 5]
	     *
	     * _.flattenDepth(array, 2);
	     * // => [1, 2, 3, [4], 5]
	     */function flattenDepth(array,depth){var length=array==null?0:array.length;if(!length){return []}depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth)}
	/**
	     * The inverse of `_.toPairs`; this method returns an object composed
	     * from key-value `pairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} pairs The key-value pairs.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.fromPairs([['a', 1], ['b', 2]]);
	     * // => { 'a': 1, 'b': 2 }
	     */function fromPairs(pairs){var index=-1,length=pairs==null?0:pairs.length,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}return result}
	/**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias first
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.head([1, 2, 3]);
	     * // => 1
	     *
	     * _.head([]);
	     * // => undefined
	     */function head(array){return array&&array.length?array[0]:undefined}
	/**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the
	     * offset from the end of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // Search from the `fromIndex`.
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return -1}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index)}
	/**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */function initial(array){var length=array==null?0:array.length;return length?baseSlice(array,0,-1):[]}
	/**
	     * Creates an array of unique values that are included in all given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order and references of result values are
	     * determined by the first array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersection([2, 1], [2, 3]);
	     * // => [2]
	     */var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[]});
	/**
	     * This method is like `_.intersection` except that it accepts `iteratee`
	     * which is invoked for each element of each `arrays` to generate the criterion
	     * by which they're compared. The order and references of result values are
	     * determined by the first array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [2.1]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }]
	     */var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,getIteratee(iteratee,2)):[]});
	/**
	     * This method is like `_.intersection` except that it accepts `comparator`
	     * which is invoked to compare elements of `arrays`. The order and references
	     * of result values are determined by the first array. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.intersectionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }]
	     */var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);comparator=typeof comparator=="function"?comparator:undefined;if(comparator){mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined,comparator):[]});
	/**
	     * Converts all elements in `array` into a string separated by `separator`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to convert.
	     * @param {string} [separator=','] The element separator.
	     * @returns {string} Returns the joined string.
	     * @example
	     *
	     * _.join(['a', 'b', 'c'], '~');
	     * // => 'a~b~c'
	     */function join(array,separator){return array==null?"":nativeJoin.call(array,separator)}
	/**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined}
	/**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // Search from the `fromIndex`.
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     */function lastIndexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return -1}var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=index<0?nativeMax(length+index,0):nativeMin(index,length-1);}return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true)}
	/**
	     * Gets the element at index `n` of `array`. If `n` is negative, the nth
	     * element from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.11.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=0] The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     *
	     * _.nth(array, 1);
	     * // => 'b'
	     *
	     * _.nth(array, -2);
	     * // => 'c';
	     */function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined}
	/**
	     * Removes all given values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	     * to remove elements from an array by predicate.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pull(array, 'a', 'c');
	     * console.log(array);
	     * // => ['b', 'b']
	     */var pull=baseRest(pullAll);
	/**
	     * This method is like `_.pull` except that it accepts an array of values to remove.
	     *
	     * **Note:** Unlike `_.difference`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pullAll(array, ['a', 'c']);
	     * console.log(array);
	     * // => ['b', 'b']
	     */function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array}
	/**
	     * This method is like `_.pullAll` except that it accepts `iteratee` which is
	     * invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
	     *
	     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
	     * console.log(array);
	     * // => [{ 'x': 2 }]
	     */function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,getIteratee(iteratee,2)):array}
	/**
	     * This method is like `_.pullAll` except that it accepts `comparator` which
	     * is invoked to compare elements of `array` to `values`. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
	     *
	     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
	     * console.log(array);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
	     */function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined,comparator):array}
	/**
	     * Removes elements from `array` corresponding to `indexes` and returns an
	     * array of removed elements.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     * var pulled = _.pullAt(array, [1, 3]);
	     *
	     * console.log(array);
	     * // => ['a', 'c']
	     *
	     * console.log(pulled);
	     * // => ['b', 'd']
	     */var pullAt=flatRest(function(array,indexes){var length=array==null?0:array.length,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index}).sort(compareAscending));return result});
	/**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is invoked
	     * with three arguments: (value, index, array).
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	     * to pull elements from an array by value.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result}var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result}
	/**
	     * Reverses `array` so that the first element becomes the last, the second
	     * element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates `array` and is based on
	     * [`Array#reverse`](https://mdn.io/Array/reverse).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.reverse(array);
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */function reverse(array){return array==null?array:nativeReverse.call(array)}
	/**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of
	     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	     * returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */function slice(array,start,end){var length=array==null?0:array.length;if(!length){return []}if(end&&typeof end!="number"&&isIterateeCall(array,start,end)){start=0;end=length;}else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}return baseSlice(array,start,end)}
	/**
	     * Uses a binary search to determine the lowest index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     */function sortedIndex(array,value){return baseSortedIndex(array,value)}
	/**
	     * This method is like `_.sortedIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 0
	     */function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2))}
	/**
	     * This method is like `_.indexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 1
	     */function sortedIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index}}return -1}
	/**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
	     * // => 4
	     */function sortedLastIndex(array,value){return baseSortedIndex(array,value,true)}
	/**
	     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 1
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 1
	     */function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true)}
	/**
	     * This method is like `_.lastIndexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 3
	     */function sortedLastIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index}}return -1}
	/**
	     * This method is like `_.uniq` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniq([1, 1, 2]);
	     * // => [1, 2]
	     */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[]}
	/**
	     * This method is like `_.uniqBy` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
	     * // => [1.1, 2.3]
	     */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[]}
	/**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.tail([1, 2, 3]);
	     * // => [2, 3]
	     */function tail(array){var length=array==null?0:array.length;return length?baseSlice(array,1,length):[]}
	/**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */function take(array,n,guard){if(!(array&&array.length)){return []}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,0,n<0?0:n)}
	/**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */function takeRight(array,n,guard){var length=array==null?0:array.length;if(!length){return []}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length)}
	/**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.takeRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeRightWhile(users, ['active', false]);
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeRightWhile(users, 'active');
	     * // => []
	     */function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),false,true):[]}
	/**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.takeWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeWhile(users, ['active', false]);
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeWhile(users, 'active');
	     * // => []
	     */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[]}
	/**
	     * Creates an array of unique values, in order, from all given arrays using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([2], [1, 2]);
	     * // => [2, 1]
	     */var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true))});
	/**
	     * This method is like `_.union` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which uniqueness is computed. Result values are chosen from the first
	     * array in which the value occurs. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2))});
	/**
	     * This method is like `_.union` except that it accepts `comparator` which
	     * is invoked to compare elements of `arrays`. Result values are chosen from
	     * the first array in which the value occurs. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.unionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */var unionWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=="function"?comparator:undefined;return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator)});
	/**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurrence of each element
	     * is kept. The order of result values is determined by the order they occur
	     * in the array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     */function uniq(array){return array&&array.length?baseUniq(array):[]}
	/**
	     * This method is like `_.uniq` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * uniqueness is computed. The order of result values is determined by the
	     * order they occur in the array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,getIteratee(iteratee,2)):[]}
	/**
	     * This method is like `_.uniq` except that it accepts `comparator` which
	     * is invoked to compare elements of `array`. The order of result values is
	     * determined by the order they occur in the array.The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.uniqWith(objects, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
	     */function uniqWith(array,comparator){comparator=typeof comparator=="function"?comparator:undefined;return array&&array.length?baseUniq(array,undefined,comparator):[]}
	/**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.2.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['a', 'b'], [1, 2], [true, false]]
	     */function unzip(array){if(!(array&&array.length)){return []}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index))})}
	/**
	     * This method is like `_.unzip` except that it accepts `iteratee` to specify
	     * how regrouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  regrouped values.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */function unzipWith(array,iteratee){if(!(array&&array.length)){return []}var result=unzip(array);if(iteratee==null){return result}return arrayMap(result,function(group){return apply(iteratee,undefined,group)})}
	/**
	     * Creates an array excluding all given values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.pull`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.xor
	     * @example
	     *
	     * _.without([2, 1, 2, 3], 1, 2);
	     * // => [3]
	     */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[]});
	/**
	     * Creates an array of unique values that is the
	     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the given arrays. The order of result values is determined by the order
	     * they occur in the arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.without
	     * @example
	     *
	     * _.xor([2, 1], [2, 3]);
	     * // => [1, 3]
	     */var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject))});
	/**
	     * This method is like `_.xor` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which by which they're compared. The order of result values is determined
	     * by the order they occur in the arrays. The iteratee is invoked with one
	     * argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2, 3.4]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2))});
	/**
	     * This method is like `_.xor` except that it accepts `comparator` which is
	     * invoked to compare elements of `arrays`. The order of result values is
	     * determined by the order they occur in the arrays. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.xorWith(objects, others, _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */var xorWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=="function"?comparator:undefined;return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator)});
	/**
	     * Creates an array of grouped elements, the first of which contains the
	     * first elements of the given arrays, the second of which contains the
	     * second elements of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     */var zip=baseRest(unzip);
	/**
	     * This method is like `_.fromPairs` except that it accepts two arrays,
	     * one of property identifiers and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.4.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject(['a', 'b'], [1, 2]);
	     * // => { 'a': 1, 'b': 2 }
	     */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue)}
	/**
	     * This method is like `_.zipObject` except that it supports property paths.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
	     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
	     */function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet)}
	/**
	     * This method is like `_.zip` except that it accepts `iteratee` to specify
	     * how grouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  grouped values.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
	     *   return a + b + c;
	     * });
	     * // => [111, 222]
	     */var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=="function"?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee)});
	/*------------------------------------------------------------------------*/
	/**
	     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
	     * chain sequences enabled. The result of such sequences must be unwrapped
	     * with `_#value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Seq
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _
	     *   .chain(users)
	     *   .sortBy('age')
	     *   .map(function(o) {
	     *     return o.user + ' is ' + o.age;
	     *   })
	     *   .head()
	     *   .value();
	     * // => 'pebbles is 1'
	     */function chain(value){var result=lodash(value);result.__chain__=true;return result}
	/**
	     * This method invokes `interceptor` and returns `value`. The interceptor
	     * is invoked with one argument; (value). The purpose of this method is to
	     * "tap into" a method chain sequence in order to modify intermediate results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    // Mutate input array.
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */function tap(value,interceptor){interceptor(value);return value}
	/**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     * The purpose of this method is to "pass thru" values replacing intermediate
	     * results in a method chain sequence.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */function thru(value,interceptor){return interceptor(value)}
	/**
	     * This method is the wrapper version of `_.at`.
	     *
	     * @name at
	     * @memberOf _
	     * @since 1.0.0
	     * @category Seq
	     * @param {...(string|string[])} [paths] The property paths to pick.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _(object).at(['a[0].b.c', 'a[1]']).value();
	     * // => [3, 4]
	     */var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function(object){return baseAt(object,paths)};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor)}value=value.slice(start,+start+(length?1:0));value.__actions__.push({func:thru,args:[interceptor],thisArg:undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined);}return array})});
	/**
	     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
	     *
	     * @name chain
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // A sequence without explicit chaining.
	     * _(users).head();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // A sequence with explicit chaining.
	     * _(users)
	     *   .chain()
	     *   .head()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */function wrapperChain(){return chain(this)}
	/**
	     * Executes the chain sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__)}
	/**
	     * Gets the next value on a wrapped object following the
	     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
	     *
	     * @name next
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the next iterator value.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 1 }
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 2 }
	     *
	     * wrapped.next();
	     * // => { 'done': true, 'value': undefined }
	     */function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray(this.value());}var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return {done:done,value:value}}
	/**
	     * Enables the wrapper to be iterable.
	     *
	     * @name Symbol.iterator
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the wrapper object.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped[Symbol.iterator]() === wrapped;
	     * // => true
	     *
	     * Array.from(wrapped);
	     * // => [1, 2]
	     */function wrapperToIterator(){return this}
	/**
	     * Creates a clone of the chain sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @param {*} value The value to plant.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2]).map(square);
	     * var other = wrapped.plant([3, 4]);
	     *
	     * other.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone;}else{result=clone;}var previous=clone;parent=parent.__wrapped__;}previous.__wrapped__=value;return result}
	/**
	     * This method is the wrapper version of `_.reverse`.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}wrapped=wrapped.reverse();wrapped.__actions__.push({func:thru,args:[reverse],thisArg:undefined});return new LodashWrapper(wrapped,this.__chain__)}return this.thru(reverse)}
	/**
	     * Executes the chain sequence to resolve the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @since 0.1.0
	     * @alias toJSON, valueOf
	     * @category Seq
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__)}
	/*------------------------------------------------------------------------*/
	/**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the number of times the key was returned by `iteratee`. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': 1, '6': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */var countBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){++result[key];}else{baseAssignValue(result,key,1);}});
	/**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * Iteration is stopped once `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * **Note:** This method returns `true` for
	     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	     * elements of empty collections.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.every(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.every(users, 'active');
	     * // => false
	     */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3))}
	/**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * **Note:** Unlike `_.remove`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.reject
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, { 'age': 36, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.filter(users, 'active');
	     * // => objects for ['barney']
	     */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3))}
	/**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.find(users, function(o) { return o.age < 40; });
	     * // => object for 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.find(users, { 'age': 1, 'active': true });
	     * // => object for 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.find(users, ['active', false]);
	     * // => object for 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.find(users, 'active');
	     * // => object for 'barney'
	     */var find=createFind(findIndex);
	/**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=collection.length-1] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */var findLast=createFind(findLastIndex);
	/**
	     * Creates a flattened array of values by running each element in `collection`
	     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [n, n];
	     * }
	     *
	     * _.flatMap([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1)}
	/**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDeep([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY)}
	/**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDepth([1, 2], duplicate, 2);
	     * // => [[1, 1], [2, 2]]
	     */function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth)}
	/**
	     * Iterates over elements of `collection` and invokes `iteratee` for each element.
	     * The iteratee is invoked with three arguments: (value, index|key, collection).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length"
	     * property are iterated like arrays. To avoid this behavior use `_.forIn`
	     * or `_.forOwn` for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias each
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEachRight
	     * @example
	     *
	     * _.forEach([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `1` then `2`.
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3))}
	/**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEach
	     * @example
	     *
	     * _.forEachRight([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `2` then `1`.
	     */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3))}
	/**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The order of grouped values
	     * is determined by the order they occur in `collection`. The corresponding
	     * value of each key is an array of elements responsible for generating the
	     * key. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': [4.2], '6': [6.1, 6.3] }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{baseAssignValue(result,key,[value]);}});
	/**
	     * Checks if `value` is in `collection`. If `collection` is a string, it's
	     * checked for a substring of `value`, otherwise
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * is used for equality comparisons. If `fromIndex` is negative, it's used as
	     * the offset from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {boolean} Returns `true` if `value` is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'a': 1, 'b': 2 }, 1);
	     * // => true
	     *
	     * _.includes('abcd', 'bc');
	     * // => true
	     */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1}
	/**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `path` is a function, it's invoked
	     * for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke each method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invokeMap([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=="function",result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){result[++index]=isFunc?apply(path,value,args):baseInvoke(value,path,args);});return result});
	/**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the last element responsible for generating the key. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var array = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.keyBy(array, function(o) {
	     *   return String.fromCharCode(o.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.keyBy(array, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     */var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});
	/**
	     * Creates an array of values by running each element in `collection` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * _.map([4, 8], square);
	     * // => [16, 64]
	     *
	     * _.map({ 'a': 4, 'b': 8 }, square);
	     * // => [16, 64] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3))}
	/**
	     * This method is like `_.sortBy` except that it allows specifying the sort
	     * orders of the iteratees to sort by. If `orders` is unspecified, all values
	     * are sorted in ascending order. Otherwise, specify an order of "desc" for
	     * descending or "asc" for ascending sort order of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @param {string[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // Sort by `user` in ascending order and by `age` in descending order.
	     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */function orderBy(collection,iteratees,orders,guard){if(collection==null){return []}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}return baseOrderBy(collection,iteratees,orders)}
	/**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, the second of which
	     * contains elements `predicate` returns falsey for. The predicate is
	     * invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * _.partition(users, function(o) { return o.active; });
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.partition(users, { 'age': 1, 'active': false });
	     * // => objects for [['pebbles'], ['barney', 'fred']]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.partition(users, ['active', false]);
	     * // => objects for [['barney', 'pebbles'], ['fred']]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.partition(users, 'active');
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     */var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return [[],[]]});
	/**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` thru `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not given, the first element of `collection` is used as the initial
	     * value. The iteratee is invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	     * and `sortBy`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduceRight
	     * @example
	     *
	     * _.reduce([1, 2], function(sum, n) {
	     *   return sum + n;
	     * }, 0);
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     *   return result;
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	     */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach)}
	/**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduce
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight)}
	/**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.filter
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * _.reject(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.reject(users, { 'age': 40, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.reject(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.reject(users, 'active');
	     * // => objects for ['barney']
	     */function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)))}
	/**
	     * Gets a random element from `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     */function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection)}
	/**
	     * Gets `n` random elements at unique keys from `collection` up to the
	     * size of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} [n=1] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the random elements.
	     * @example
	     *
	     * _.sampleSize([1, 2, 3], 2);
	     * // => [3, 1]
	     *
	     * _.sampleSize([1, 2, 3], 4);
	     * // => [2, 3, 1]
	     */function sampleSize(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n===undefined){n=1;}else{n=toInteger(n);}var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n)}
	/**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection)}
	/**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable string keyed properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the collection size.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */function size(collection){if(collection==null){return 0}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size}return baseKeys(collection).length}
	/**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * Iteration is stopped once `predicate` returns truthy. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.some(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.some(users, 'active');
	     * // => true
	     */function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3))}
	/**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection thru each iteratee. This method
	     * performs a stable sort, that is, it preserves the original sort order of
	     * equal elements. The iteratees are invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.sortBy(users, [function(o) { return o.user; }]);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     *
	     * _.sortBy(users, ['user', 'age']);
	     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	     */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return []}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[])});
	/*------------------------------------------------------------------------*/
	/**
	     * Gets the timestamp of the number of milliseconds that have elapsed since
	     * the Unix epoch (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Date
	     * @returns {number} Returns the timestamp.
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => Logs the number of milliseconds it took for the deferred invocation.
	     */var now=ctxNow||function(){return root.Date.now()};
	/*------------------------------------------------------------------------*/
	/**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it's called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => Logs 'done saving!' after the two async saves have completed.
	     */function after(n,func){if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments)}}}
	/**
	     * Creates a function that invokes `func`, with up to `n` arguments,
	     * ignoring any additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */function ary(func,n,guard){n=guard?undefined:n;n=func&&n==null?func.length:n;return createWrap(func,WRAP_ARY_FLAG,undefined,undefined,undefined,undefined,n)}
	/**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery(element).on('click', _.before(5, addContactToList));
	     * // => Allows adding up to 4 contacts to the list.
	     */function before(n,func){var result;if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}if(n<=1){func=undefined;}return result}}
	/**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and `partials` prepended to the arguments it receives.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * function greet(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * }
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */var bind=baseRest(function(func,thisArg,partials){var bitmask=WRAP_BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(func,bitmask,thisArg,partials,holders)});
	/**
	     * Creates a function that invokes the method at `object[key]` with `partials`
	     * prepended to the arguments it receives.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist. See
	     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Function
	     * @param {Object} object The object to invoke the method on.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */var bindKey=baseRest(function(object,key,partials){var bitmask=WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(key,bitmask,object,partials,holders)});
	/**
	     * Creates a function that accepts arguments of `func` and either invokes
	     * `func` returning its result, if at least `arity` number of arguments have
	     * been provided, or returns a function that accepts the remaining `func`
	     * arguments, and so on. The arity of `func` may be specified if `func.length`
	     * is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result}
	/**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result}
	/**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed `func` invocations and a `flush` method to immediately invoke them.
	     * Provide `options` to indicate whether `func` should be invoked on the
	     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	     * with the last arguments provided to the debounced function. Subsequent
	     * calls to the debounced function return the result of the last `func`
	     * invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the debounced function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=false]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {number} [options.maxWait]
	     *  The maximum time `func` is allowed to be delayed before it's invoked.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // Avoid costly calculations while the window size is in flux.
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	     * jQuery(element).on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', debounced);
	     *
	     * // Cancel the trailing debounced invocation.
	     * jQuery(window).on('popstate', debounced.cancel);
	     */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing="maxWait"in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing="trailing"in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result}function leadingEdge(time){
	// Reset any `maxWait` timer.
	lastInvokeTime=time;
	// Start the timer for the trailing edge.
	timerId=setTimeout(timerExpired,wait);
	// Invoke the leading edge.
	return leading?invokeFunc(time):result}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;
	// Either this is the first call, activity has stopped and we're at the
	// trailing edge, the system time has gone backwards and we're treating
	// it as the trailing edge, or we've hit the `maxWait` limit.
	return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time)}
	// Restart the timer.
	timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;
	// Only invoke if we have `lastArgs` which means `func` has been
	// debounced at least once.
	if(trailing&&lastArgs){return invokeFunc(time)}lastArgs=lastThis=undefined;return result}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now())}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime)}if(maxing){
	// Handle invocations in a tight loop.
	timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime)}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result}debounced.cancel=cancel;debounced.flush=flush;return debounced}
	/**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // => Logs 'deferred' after one millisecond.
	     */var defer=baseRest(function(func,args){return baseDelay(func,1,args)});
	/**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => Logs 'later' after one second.
	     */var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args)});
	/**
	     * Creates a function that invokes `func` with arguments reversed.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to flip arguments for.
	     * @returns {Function} Returns the new flipped function.
	     * @example
	     *
	     * var flipped = _.flip(function() {
	     *   return _.toArray(arguments);
	     * });
	     *
	     * flipped('a', 'b', 'c', 'd');
	     * // => ['d', 'c', 'b', 'a']
	     */function flip(func){return createWrap(func,WRAP_FLIP_FLAG)}
	/**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided, it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is used as the map cache key. The `func`
	     * is invoked with the `this` binding of the memoized function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the
	     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoized function.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     * var other = { 'c': 3, 'd': 4 };
	     *
	     * var values = _.memoize(_.values);
	     * values(object);
	     * // => [1, 2]
	     *
	     * values(other);
	     * // => [3, 4]
	     *
	     * object.a = 2;
	     * values(object);
	     * // => [1, 2]
	     *
	     * // Modify the result cache.
	     * values.cache.set(object, ['a', 'b']);
	     * values(object);
	     * // => ['a', 'b']
	     *
	     * // Replace `_.memoize.Cache`.
	     * _.memoize.Cache = WeakMap;
	     */function memoize(func,resolver){if(typeof func!="function"||resolver!=null&&typeof resolver!="function"){throw new TypeError(FUNC_ERROR_TEXT)}var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key)}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result};memoized.cache=new(memoize.Cache||MapCache);return memoized}
	// Expose `MapCache`.
	memoize.Cache=MapCache;
	/**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new negated function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */function negate(predicate){if(typeof predicate!="function"){throw new TypeError(FUNC_ERROR_TEXT)}return function(){var args=arguments;switch(args.length){case 0:return !predicate.call(this);case 1:return !predicate.call(this,args[0]);case 2:return !predicate.call(this,args[0],args[1]);case 3:return !predicate.call(this,args[0],args[1],args[2])}return !predicate.apply(this,args)}}
	/**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first invocation. The `func` is
	     * invoked with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // => `createApplication` is invoked once
	     */function once(func){return before(2,func)}
	/**
	     * Creates a function that invokes `func` with its arguments transformed.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms=[_.identity]]
	     *  The argument transforms.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var func = _.overArgs(function(x, y) {
	     *   return [x, y];
	     * }, [square, doubled]);
	     *
	     * func(9, 3);
	     * // => [81, 6]
	     *
	     * func(10, 5);
	     * // => [100, 10]
	     */var overArgs=castRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}return apply(func,this,args)})});
	/**
	     * Creates a function that invokes `func` with `partials` prepended to the
	     * arguments it receives. This method is like `_.bind` except it does **not**
	     * alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.2.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // Partially applied with placeholders.
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG,undefined,partials,holders)});
	/**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to the arguments it receives.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // Partially applied with placeholders.
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,WRAP_PARTIAL_RIGHT_FLAG,undefined,partials,holders)});
	/**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified `indexes` where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, [2, 0, 1]);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     */var rearg=flatRest(function(func,indexes){return createWrap(func,WRAP_REARG_FLAG,undefined,undefined,undefined,indexes)});
	/**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as
	     * an array.
	     *
	     * **Note:** This method is based on the
	     * [rest parameter](https://mdn.io/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.rest(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */function rest(func,start){if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}start=start===undefined?start:toInteger(start);return baseRest(func,start)}
	/**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * create function and an array of arguments much like
	     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
	     *
	     * **Note:** This method is based on the
	     * [spread operator](https://mdn.io/spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @param {number} [start=0] The start position of the spread.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */function spread(func,start){if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}start=start==null?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}return apply(func,this,otherArgs)})}
	/**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed `func` invocations and a `flush` method to
	     * immediately invoke them. Provide `options` to indicate whether `func`
	     * should be invoked on the leading and/or trailing edge of the `wait`
	     * timeout. The `func` is invoked with the last arguments provided to the
	     * throttled function. Subsequent calls to the throttled function return the
	     * result of the last `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the throttled function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=true]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // Avoid excessively updating the position while scrolling.
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	     * jQuery(element).on('click', throttled);
	     *
	     * // Cancel the trailing throttled invocation.
	     * jQuery(window).on('popstate', throttled.cancel);
	     */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}if(isObject(options)){leading="leading"in options?!!options.leading:leading;trailing="trailing"in options?!!options.trailing:trailing;}return debounce(func,wait,{leading:leading,maxWait:wait,trailing:trailing})}
	/**
	     * Creates a function that accepts up to one argument, ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.unary(parseInt));
	     * // => [6, 8, 10]
	     */function unary(func){return ary(func,1)}
	/**
	     * Creates a function that provides `value` to `wrapper` as its first
	     * argument. Any additional arguments provided to the function are appended
	     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
	     * binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} [wrapper=identity] The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */function wrap(value,wrapper){return partial(castFunction(wrapper),value)}
	/*------------------------------------------------------------------------*/
	/**
	     * Casts `value` as an array if it's not one.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Lang
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast array.
	     * @example
	     *
	     * _.castArray(1);
	     * // => [1]
	     *
	     * _.castArray({ 'a': 1 });
	     * // => [{ 'a': 1 }]
	     *
	     * _.castArray('abc');
	     * // => ['abc']
	     *
	     * _.castArray(null);
	     * // => [null]
	     *
	     * _.castArray(undefined);
	     * // => [undefined]
	     *
	     * _.castArray();
	     * // => []
	     *
	     * var array = [1, 2, 3];
	     * console.log(_.castArray(array) === array);
	     * // => true
	     */function castArray(){if(!arguments.length){return []}var value=arguments[0];return isArray(value)?value:[value]}
	/**
	     * Creates a shallow clone of `value`.
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	     * and supports cloning arrays, array buffers, booleans, date objects, maps,
	     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	     * arrays. The own enumerable properties of `arguments` objects are cloned
	     * as plain objects. An empty object is returned for uncloneable values such
	     * as error objects, functions, DOM nodes, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeep
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var shallow = _.clone(objects);
	     * console.log(shallow[0] === objects[0]);
	     * // => true
	     */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG)}
	/**
	     * This method is like `_.clone` except that it accepts `customizer` which
	     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
	     * cloning is handled by the method instead. The `customizer` is invoked with
	     * up to four arguments; (value [, index|key, object, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeepWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * }
	     *
	     * var el = _.cloneWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 0
	     */function cloneWith(value,customizer){customizer=typeof customizer=="function"?customizer:undefined;return baseClone(value,CLONE_SYMBOLS_FLAG,customizer)}
	/**
	     * This method is like `_.clone` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.clone
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var deep = _.cloneDeep(objects);
	     * console.log(deep[0] === objects[0]);
	     * // => false
	     */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG)}
	/**
	     * This method is like `_.cloneWith` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.cloneWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * }
	     *
	     * var el = _.cloneDeepWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 20
	     */function cloneDeepWith(value,customizer){customizer=typeof customizer=="function"?customizer:undefined;return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,customizer)}
	/**
	     * Checks if `object` conforms to `source` by invoking the predicate
	     * properties of `source` with the corresponding property values of `object`.
	     *
	     * **Note:** This method is equivalent to `_.conforms` when `source` is
	     * partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
	     * // => true
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
	     * // => false
	     */function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source))}
	/**
	     * Performs a
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * comparison between two values to determine if they are equivalent.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.eq(object, object);
	     * // => true
	     *
	     * _.eq(object, other);
	     * // => false
	     *
	     * _.eq('a', 'a');
	     * // => true
	     *
	     * _.eq('a', Object('a'));
	     * // => false
	     *
	     * _.eq(NaN, NaN);
	     * // => true
	     */function eq(value,other){return value===other||value!==value&&other!==other}
	/**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     * @see _.lt
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */var gt=createRelationalOperation(baseGt);
	/**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to
	     *  `other`, else `false`.
	     * @see _.lte
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */var gte=createRelationalOperation(function(value,other){return value>=other});
	/**
	     * Checks if `value` is likely an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */var isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,"callee")&&!propertyIsEnumerable.call(value,"callee")};
	/**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(document.body.children);
	     * // => false
	     *
	     * _.isArray('abc');
	     * // => false
	     *
	     * _.isArray(_.noop);
	     * // => false
	     */var isArray=Array.isArray;
	/**
	     * Checks if `value` is classified as an `ArrayBuffer` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     * @example
	     *
	     * _.isArrayBuffer(new ArrayBuffer(2));
	     * // => true
	     *
	     * _.isArrayBuffer(new Array(2));
	     * // => false
	     */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;
	/**
	     * Checks if `value` is array-like. A value is considered array-like if it's
	     * not a function and has a `value.length` that's an integer greater than or
	     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     * @example
	     *
	     * _.isArrayLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLike(document.body.children);
	     * // => true
	     *
	     * _.isArrayLike('abc');
	     * // => true
	     *
	     * _.isArrayLike(_.noop);
	     * // => false
	     */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value)}
	/**
	     * This method is like `_.isArrayLike` except that it also checks if `value`
	     * is an object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array-like object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArrayLikeObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLikeObject(document.body.children);
	     * // => true
	     *
	     * _.isArrayLikeObject('abc');
	     * // => false
	     *
	     * _.isArrayLikeObject(_.noop);
	     * // => false
	     */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value)}
	/**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&baseGetTag(value)==boolTag}
	/**
	     * Checks if `value` is a buffer.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	     * @example
	     *
	     * _.isBuffer(new Buffer(2));
	     * // => true
	     *
	     * _.isBuffer(new Uint8Array(2));
	     * // => false
	     */var isBuffer=nativeIsBuffer||stubFalse;
	/**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;
	/**
	     * Checks if `value` is likely a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */function isElement(value){return isObjectLike(value)&&value.nodeType===1&&!isPlainObject(value)}
	/**
	     * Checks if `value` is an empty object, collection, map, or set.
	     *
	     * Objects are considered empty if they have no own enumerable string keyed
	     * properties.
	     *
	     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	     * jQuery-like collections are considered empty if they have a `length` of `0`.
	     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */function isEmpty(value){if(value==null){return true}if(isArrayLike(value)&&(isArray(value)||typeof value=="string"||typeof value.splice=="function"||isBuffer(value)||isTypedArray(value)||isArguments(value))){return !value.length}var tag=getTag(value);if(tag==mapTag||tag==setTag){return !value.size}if(isPrototype(value)){return !baseKeys(value).length}for(var key in value){if(hasOwnProperty.call(value,key)){return false}}return true}
	/**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent.
	     *
	     * **Note:** This method supports comparing arrays, array buffers, booleans,
	     * date objects, error objects, maps, numbers, `Object` objects, regexes,
	     * sets, strings, symbols, and typed arrays. `Object` objects are compared
	     * by their own, not inherited, enumerable properties. Functions and DOM
	     * nodes are compared by strict equality, i.e. `===`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * object === other;
	     * // => false
	     */function isEqual(value,other){return baseIsEqual(value,other)}
	/**
	     * This method is like `_.isEqual` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with up to
	     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, othValue) {
	     *   if (isGreeting(objValue) && isGreeting(othValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqualWith(array, other, customizer);
	     * // => true
	     */function isEqualWith(value,other,customizer){customizer=typeof customizer=="function"?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,undefined,customizer):!!result}
	/**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */function isError(value){if(!isObjectLike(value)){return false}var tag=baseGetTag(value);return tag==errorTag||tag==domExcTag||typeof value.message=="string"&&typeof value.name=="string"&&!isPlainObject(value)}
	/**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on
	     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(3);
	     * // => true
	     *
	     * _.isFinite(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     *
	     * _.isFinite('3');
	     * // => false
	     */function isFinite(value){return typeof value=="number"&&nativeIsFinite(value)}
	/**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */function isFunction(value){if(!isObject(value)){return false}
	// The use of `Object#toString` avoids issues with the `typeof` operator
	// in Safari 9 which returns 'object' for typed arrays and other constructors.
	var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag}
	/**
	     * Checks if `value` is an integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
	     * @example
	     *
	     * _.isInteger(3);
	     * // => true
	     *
	     * _.isInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isInteger(Infinity);
	     * // => false
	     *
	     * _.isInteger('3');
	     * // => false
	     */function isInteger(value){return typeof value=="number"&&value==toInteger(value)}
	/**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     * @example
	     *
	     * _.isLength(3);
	     * // => true
	     *
	     * _.isLength(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isLength(Infinity);
	     * // => false
	     *
	     * _.isLength('3');
	     * // => false
	     */function isLength(value){return typeof value=="number"&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER}
	/**
	     * Checks if `value` is the
	     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(_.noop);
	     * // => true
	     *
	     * _.isObject(null);
	     * // => false
	     */function isObject(value){var type=typeof value;return value!=null&&(type=="object"||type=="function")}
	/**
	     * Checks if `value` is object-like. A value is object-like if it's not `null`
	     * and has a `typeof` result of "object".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	     * @example
	     *
	     * _.isObjectLike({});
	     * // => true
	     *
	     * _.isObjectLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isObjectLike(_.noop);
	     * // => false
	     *
	     * _.isObjectLike(null);
	     * // => false
	     */function isObjectLike(value){return value!=null&&typeof value=="object"}
	/**
	     * Checks if `value` is classified as a `Map` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     * @example
	     *
	     * _.isMap(new Map);
	     * // => true
	     *
	     * _.isMap(new WeakMap);
	     * // => false
	     */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;
	/**
	     * Performs a partial deep comparison between `object` and `source` to
	     * determine if `object` contains equivalent property values.
	     *
	     * **Note:** This method is equivalent to `_.matches` when `source` is
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.isMatch(object, { 'b': 2 });
	     * // => true
	     *
	     * _.isMatch(object, { 'b': 1 });
	     * // => false
	     */function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source))}
	/**
	     * This method is like `_.isMatch` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with five
	     * arguments: (objValue, srcValue, index|key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatchWith(object, source, customizer);
	     * // => true
	     */function isMatchWith(object,source,customizer){customizer=typeof customizer=="function"?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer)}
	/**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is based on
	     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
	     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
	     * `undefined` and other non-number values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */function isNaN(value){
	// An `NaN` primitive is the only value that is not equal to itself.
	// Perform the `toStringTag` check first to avoid errors with some
	// ActiveX objects in IE.
	return isNumber(value)&&value!=+value}
	/**
	     * Checks if `value` is a pristine native function.
	     *
	     * **Note:** This method can't reliably detect native functions in the presence
	     * of the core-js package because core-js circumvents this kind of detection.
	     * Despite multiple requests, the core-js maintainer has made it clear: any
	     * attempt to fix the detection will be obstructed. As a result, we're left
	     * with little choice but to throw an error. Unfortunately, this also affects
	     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
	     * which rely on core-js.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT)}return baseIsNative(value)}
	/**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */function isNull(value){return value===null}
	/**
	     * Checks if `value` is `null` or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	     * @example
	     *
	     * _.isNil(null);
	     * // => true
	     *
	     * _.isNil(void 0);
	     * // => true
	     *
	     * _.isNil(NaN);
	     * // => false
	     */function isNil(value){return value==null}
	/**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	     * classified as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	     * @example
	     *
	     * _.isNumber(3);
	     * // => true
	     *
	     * _.isNumber(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isNumber(Infinity);
	     * // => true
	     *
	     * _.isNumber('3');
	     * // => false
	     */function isNumber(value){return typeof value=="number"||isObjectLike(value)&&baseGetTag(value)==numberTag}
	/**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.8.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false}var proto=getPrototype(value);if(proto===null){return true}var Ctor=hasOwnProperty.call(proto,"constructor")&&proto.constructor;return typeof Ctor=="function"&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString}
	/**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;
	/**
	     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
	     * double precision number which isn't the result of a rounded unsafe integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
	     * @example
	     *
	     * _.isSafeInteger(3);
	     * // => true
	     *
	     * _.isSafeInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isSafeInteger(Infinity);
	     * // => false
	     *
	     * _.isSafeInteger('3');
	     * // => false
	     */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER}
	/**
	     * Checks if `value` is classified as a `Set` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     * @example
	     *
	     * _.isSet(new Set);
	     * // => true
	     *
	     * _.isSet(new WeakSet);
	     * // => false
	     */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;
	/**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */function isString(value){return typeof value=="string"||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag}
	/**
	     * Checks if `value` is classified as a `Symbol` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	     * @example
	     *
	     * _.isSymbol(Symbol.iterator);
	     * // => true
	     *
	     * _.isSymbol('abc');
	     * // => false
	     */function isSymbol(value){return typeof value=="symbol"||isObjectLike(value)&&baseGetTag(value)==symbolTag}
	/**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;
	/**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */function isUndefined(value){return value===undefined}
	/**
	     * Checks if `value` is classified as a `WeakMap` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	     * @example
	     *
	     * _.isWeakMap(new WeakMap);
	     * // => true
	     *
	     * _.isWeakMap(new Map);
	     * // => false
	     */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag}
	/**
	     * Checks if `value` is classified as a `WeakSet` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
	     * @example
	     *
	     * _.isWeakSet(new WeakSet);
	     * // => true
	     *
	     * _.isWeakSet(new Set);
	     * // => false
	     */function isWeakSet(value){return isObjectLike(value)&&baseGetTag(value)==weakSetTag}
	/**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     * @see _.gt
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */var lt=createRelationalOperation(baseLt);
	/**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to
	     *  `other`, else `false`.
	     * @see _.gte
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */var lte=createRelationalOperation(function(value,other){return value<=other});
	/**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * _.toArray({ 'a': 1, 'b': 2 });
	     * // => [1, 2]
	     *
	     * _.toArray('abc');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toArray(1);
	     * // => []
	     *
	     * _.toArray(null);
	     * // => []
	     */function toArray(value){if(!value){return []}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value)}if(symIterator&&value[symIterator]){return iteratorToArray(value[symIterator]())}var tag=getTag(value),func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;return func(value)}
	/**
	     * Converts `value` to a finite number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.12.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted number.
	     * @example
	     *
	     * _.toFinite(3.2);
	     * // => 3.2
	     *
	     * _.toFinite(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toFinite(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toFinite('3.2');
	     * // => 3.2
	     */function toFinite(value){if(!value){return value===0?value:0}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER}return value===value?value:0}
	/**
	     * Converts `value` to an integer.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toInteger(3.2);
	     * // => 3
	     *
	     * _.toInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toInteger(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toInteger('3.2');
	     * // => 3
	     */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0}
	/**
	     * Converts `value` to an integer suitable for use as the length of an
	     * array-like object.
	     *
	     * **Note:** This method is based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toLength(3.2);
	     * // => 3
	     *
	     * _.toLength(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toLength(Infinity);
	     * // => 4294967295
	     *
	     * _.toLength('3.2');
	     * // => 3
	     */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0}
	/**
	     * Converts `value` to a number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     * @example
	     *
	     * _.toNumber(3.2);
	     * // => 3.2
	     *
	     * _.toNumber(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toNumber(Infinity);
	     * // => Infinity
	     *
	     * _.toNumber('3.2');
	     * // => 3.2
	     */function toNumber(value){if(typeof value=="number"){return value}if(isSymbol(value)){return NAN}if(isObject(value)){var other=typeof value.valueOf=="function"?value.valueOf():value;value=isObject(other)?other+"":other;}if(typeof value!="string"){return value===0?value:+value}value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}
	/**
	     * Converts `value` to a plain object flattening inherited enumerable string
	     * keyed properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */function toPlainObject(value){return copyObject(value,keysIn(value))}
	/**
	     * Converts `value` to a safe integer. A safe integer can be compared and
	     * represented correctly.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toSafeInteger(3.2);
	     * // => 3
	     *
	     * _.toSafeInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toSafeInteger(Infinity);
	     * // => 9007199254740991
	     *
	     * _.toSafeInteger('3.2');
	     * // => 3
	     */function toSafeInteger(value){return value?baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER):value===0?value:0}
	/**
	     * Converts `value` to a string. An empty string is returned for `null`
	     * and `undefined` values. The sign of `-0` is preserved.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.toString(null);
	     * // => ''
	     *
	     * _.toString(-0);
	     * // => '-0'
	     *
	     * _.toString([1, 2, 3]);
	     * // => '1,2,3'
	     */function toString(value){return value==null?"":baseToString(value)}
	/*------------------------------------------------------------------------*/
	/**
	     * Assigns own enumerable string keyed properties of source objects to the
	     * destination object. Source objects are applied from left to right.
	     * Subsequent sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object` and is loosely based on
	     * [`Object.assign`](https://mdn.io/Object/assign).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assignIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assign({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'c': 3 }
	     */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});
	/**
	     * This method is like `_.assign` except that it iterates over own and
	     * inherited source properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assign
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	     */var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object);});
	/**
	     * This method is like `_.assignIn` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extendWith
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignInWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});
	/**
	     * This method is like `_.assign` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignInWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});
	/**
	     * Creates an array of values corresponding to `paths` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {...(string|string[])} [paths] The property paths to pick.
	     * @returns {Array} Returns the picked values.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _.at(object, ['a[0].b.c', 'a[1]']);
	     * // => [3, 4]
	     */var at=flatRest(baseAt);
	/**
	     * Creates an object that inherits from the `prototype` object. If a
	     * `properties` object is given, its own enumerable string keyed properties
	     * are assigned to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties)}
	/**
	     * Assigns own and inherited enumerable string keyed properties of source
	     * objects to the destination object for all destination properties that
	     * resolve to `undefined`. Source objects are applied from left to right.
	     * Once a property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaultsDeep
	     * @example
	     *
	     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var defaults=baseRest(function(args){args.push(undefined,customDefaultsAssignIn);return apply(assignInWith,undefined,args)});
	/**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaults
	     * @example
	     *
	     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
	     * // => { 'a': { 'b': 2, 'c': 3 } }
	     */var defaultsDeep=baseRest(function(args){args.push(undefined,customDefaultsMerge);return apply(mergeWith,undefined,args)});
	/**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(o) { return o.age < 40; });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn)}
	/**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(o) { return o.age < 40; });
	     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight)}
	/**
	     * Iterates over own and inherited enumerable string keyed properties of an
	     * object and invokes `iteratee` for each property. The iteratee is invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forInRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
	     */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn)}
	/**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
	     */function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn)}
	/**
	     * Iterates over own enumerable string keyed properties of an object and
	     * invokes `iteratee` for each property. The iteratee is invoked with three
	     * arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwnRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3))}
	/**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
	     */function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3))}
	/**
	     * Creates an array of function property names from own enumerable properties
	     * of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functionsIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functions(new Foo);
	     * // => ['a', 'b']
	     */function functions(object){return object==null?[]:baseFunctions(object,keys(object))}
	/**
	     * Creates an array of function property names from own and inherited
	     * enumerable properties of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functions
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functionsIn(new Foo);
	     * // => ['a', 'b', 'c']
	     */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object))}
	/**
	     * Gets the value at `path` of `object`. If the resolved value is
	     * `undefined`, the `defaultValue` is returned in its place.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result}
	/**
	     * Checks if `path` is a direct property of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': 2 } };
	     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b');
	     * // => true
	     *
	     * _.has(object, ['a', 'b']);
	     * // => true
	     *
	     * _.has(other, 'a');
	     * // => false
	     */function has(object,path){return object!=null&&hasPath(object,path,baseHas)}
	/**
	     * Checks if `path` is a direct or inherited property of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.hasIn(object, 'a');
	     * // => true
	     *
	     * _.hasIn(object, 'a.b');
	     * // => true
	     *
	     * _.hasIn(object, ['a', 'b']);
	     * // => true
	     *
	     * _.hasIn(object, 'b');
	     * // => false
	     */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn)}
	/**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite
	     * property assignments of previous values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     */var invert=createInverter(function(result,value,key){result[value]=key;},constant(identity));
	/**
	     * This method is like `_.invert` except that the inverted object is generated
	     * from the results of running each element of `object` thru `iteratee`. The
	     * corresponding inverted value of each inverted key is an array of keys
	     * responsible for generating the inverted value. The iteratee is invoked
	     * with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invertBy(object);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     *
	     * _.invertBy(object, function(value) {
	     *   return 'group' + value;
	     * });
	     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
	     */var invertBy=createInverter(function(result,value,key){if(hasOwnProperty.call(result,value)){result[value].push(key);}else{result[value]=[key];}},getIteratee);
	/**
	     * Invokes the method at `path` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
	     *
	     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
	     * // => [2, 3]
	     */var invoke=baseRest(baseInvoke);
	/**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object)}
	/**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object)}
	/**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
	     * with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapValues
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value);});return result}
	/**
	     * Creates an object with the same keys as `object` and values generated
	     * by running each own enumerable string keyed property of `object` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapKeys
	     * @example
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * _.mapValues(users, function(o) { return o.age; });
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object));});return result}
	/**
	     * This method is like `_.assign` except that it recursively merges own and
	     * inherited enumerable string keyed properties of source objects into the
	     * destination object. Source properties that resolve to `undefined` are
	     * skipped if a destination value exists. Array and plain object properties
	     * are merged recursively. Other objects and value types are overridden by
	     * assignment. Source objects are applied from left to right. Subsequent
	     * sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {
	     *   'a': [{ 'b': 2 }, { 'd': 4 }]
	     * };
	     *
	     * var other = {
	     *   'a': [{ 'c': 3 }, { 'e': 5 }]
	     * };
	     *
	     * _.merge(object, other);
	     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	     */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});
	/**
	     * This method is like `_.merge` except that it accepts `customizer` which
	     * is invoked to produce the merged values of the destination and source
	     * properties. If `customizer` returns `undefined`, merging is handled by the
	     * method instead. The `customizer` is invoked with six arguments:
	     * (objValue, srcValue, key, object, source, stack).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (_.isArray(objValue)) {
	     *     return objValue.concat(srcValue);
	     *   }
	     * }
	     *
	     * var object = { 'a': [1], 'b': [2] };
	     * var other = { 'a': [3], 'b': [4] };
	     *
	     * _.mergeWith(object, other, customizer);
	     * // => { 'a': [1, 3], 'b': [2, 4] }
	     */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});
	/**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable property paths of `object` that are not omitted.
	     *
	     * **Note:** This method is considerably slower than `_.pick`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [paths] The property paths to omit.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omit(object, ['a', 'c']);
	     * // => { 'b': '2' }
	     */var omit=flatRest(function(object,paths){var result={};if(object==null){return result}var isDeep=false;paths=arrayMap(paths,function(path){path=castPath(path,object);isDeep||(isDeep=path.length>1);return path});copyObject(object,getAllKeysIn(object),result);if(isDeep){result=baseClone(result,CLONE_DEEP_FLAG|CLONE_FLAT_FLAG|CLONE_SYMBOLS_FLAG,customOmitClone);}var length=paths.length;while(length--){baseUnset(result,paths[length]);}return result});
	/**
	     * The opposite of `_.pickBy`; this method creates an object composed of
	     * the own and inherited enumerable string keyed properties of `object` that
	     * `predicate` doesn't return truthy for. The predicate is invoked with two
	     * arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omitBy(object, _.isNumber);
	     * // => { 'b': '2' }
	     */function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)))}
	/**
	     * Creates an object composed of the picked `object` properties.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [paths] The property paths to pick.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pick(object, ['a', 'c']);
	     * // => { 'a': 1, 'c': 3 }
	     */var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths)});
	/**
	     * Creates an object composed of the `object` properties `predicate` returns
	     * truthy for. The predicate is invoked with two arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pickBy(object, _.isNumber);
	     * // => { 'a': 1, 'c': 3 }
	     */function pickBy(object,predicate){if(object==null){return {}}var props=arrayMap(getAllKeysIn(object),function(prop){return [prop]});predicate=getIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0])})}
	/**
	     * This method is like `_.get` except that if the resolved value is a
	     * function it's invoked with the `this` binding of its parent object and
	     * its result is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a[0].b.c3', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a[0].b.c3', _.constant('default'));
	     * // => 'default'
	     */function result(object,path,defaultValue){path=castPath(path,object);var index=-1,length=path.length;
	// Ensure the loop is entered when path is empty.
	if(!length){length=1;object=undefined;}while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object}
	/**
	     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	     * it's created. Arrays are created for missing index properties while objects
	     * are created for all other missing properties. Use `_.setWith` to customize
	     * `path` creation.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, ['x', '0', 'y', 'z'], 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */function set(object,path,value){return object==null?object:baseSet(object,path,value)}
	/**
	     * This method is like `_.set` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.setWith(object, '[0][1]', 'a', Object);
	     * // => { '0': { '1': 'a' } }
	     */function setWith(object,path,value,customizer){customizer=typeof customizer=="function"?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer)}
	/**
	     * Creates an array of own enumerable string keyed-value pairs for `object`
	     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	     * entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entries
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairs(new Foo);
	     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	     */var toPairs=createToPairs(keys);
	/**
	     * Creates an array of own and inherited enumerable string keyed-value pairs
	     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
	     * or set, its entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entriesIn
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairsIn(new Foo);
	     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
	     */var toPairsIn=createToPairs(keysIn);
	/**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own
	     * enumerable string keyed properties thru `iteratee`, with each invocation
	     * potentially mutating the `accumulator` object. If `accumulator` is not
	     * provided, a new object with the same `[[Prototype]]` will be used. The
	     * iteratee is invoked with four arguments: (accumulator, value, key, object).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * }, []);
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor:[];}else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}else{accumulator={};}}(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object)});return accumulator}
	/**
	     * Removes the property at `path` of `object`.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
	     * _.unset(object, 'a[0].b.c');
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     *
	     * _.unset(object, ['a', '0', 'b', 'c']);
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     */function unset(object,path){return object==null?true:baseUnset(object,path)}
	/**
	     * This method is like `_.set` except that accepts `updater` to produce the
	     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
	     * is invoked with one argument: (value).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
	     * console.log(object.a[0].b.c);
	     * // => 9
	     *
	     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
	     * console.log(object.x[0].y.z);
	     * // => 0
	     */function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater))}
	/**
	     * This method is like `_.update` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
	     * // => { '0': { '1': 'a' } }
	     */function updateWith(object,path,updater,customizer){customizer=typeof customizer=="function"?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer)}
	/**
	     * Creates an array of the own enumerable string keyed property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */function values(object){return object==null?[]:baseValues(object,keys(object))}
	/**
	     * Creates an array of the own and inherited enumerable string keyed property
	     * values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object))}
	/*------------------------------------------------------------------------*/
	/**
	     * Clamps `number` within the inclusive `lower` and `upper` bounds.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Number
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     * @example
	     *
	     * _.clamp(-10, -5, 5);
	     * // => -5
	     *
	     * _.clamp(10, -5, 5);
	     * // => 5
	     */function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined;}if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0;}if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0;}return baseClamp(toNumber(number),lower,upper)}
	/**
	     * Checks if `n` is between `start` and up to, but not including, `end`. If
	     * `end` is not specified, it's set to `start` with `start` then set to `0`.
	     * If `start` is greater than `end` the params are swapped to support
	     * negative ranges.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.3.0
	     * @category Number
	     * @param {number} number The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     * @see _.range, _.rangeRight
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     *
	     * _.inRange(-3, -2, -6);
	     * // => true
	     */function inRange(number,start,end){start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}number=toNumber(number);return baseInRange(number,start,end)}
	/**
	     * Produces a random number between the inclusive `lower` and `upper` bounds.
	     * If only one argument is provided a number between `0` and the given number
	     * is returned. If `floating` is `true`, or either `lower` or `upper` are
	     * floats, a floating-point number is returned instead of an integer.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Number
	     * @param {number} [lower=0] The lower bound.
	     * @param {number} [upper=1] The upper bound.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */function random(lower,upper,floating){if(floating&&typeof floating!="boolean"&&isIterateeCall(lower,upper,floating)){upper=floating=undefined;}if(floating===undefined){if(typeof upper=="boolean"){floating=upper;upper=undefined;}else if(typeof lower=="boolean"){floating=lower;lower=undefined;}}if(lower===undefined&&upper===undefined){lower=0;upper=1;}else{lower=toFinite(lower);if(upper===undefined){upper=lower;lower=0;}else{upper=toFinite(upper);}}if(lower>upper){var temp=lower;lower=upper;upper=temp;}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+rand*(upper-lower+freeParseFloat("1e-"+((rand+"").length-1))),upper)}return baseRandom(lower,upper)}
	/*------------------------------------------------------------------------*/
	/**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar--');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__FOO_BAR__');
	     * // => 'fooBar'
	     */var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word)});
	/**
	     * Converts the first character of `string` to upper case and the remaining
	     * to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('FRED');
	     * // => 'Fred'
	     */function capitalize(string){return upperFirst(toString(string).toLowerCase())}
	/**
	     * Deburrs `string` by converting
	     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	     * letters to basic Latin letters and removing
	     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,"")}
	/**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search up to.
	     * @returns {boolean} Returns `true` if `string` ends with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target}
	/**
	     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
	     * corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional
	     * characters use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value. See
	     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * When working with HTML you should always
	     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	     * XSS vectors.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string}
	/**
	     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https://lodash\.com/\)'
	     */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,"\\$&"):string}
	/**
	     * Converts `string` to
	     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__FOO_BAR__');
	     * // => 'foo-bar'
	     */var kebabCase=createCompounder(function(result,word,index){return result+(index?"-":"")+word.toLowerCase()});
	/**
	     * Converts `string`, as space separated words, to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.lowerCase('--Foo-Bar--');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('fooBar');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('__FOO_BAR__');
	     * // => 'foo bar'
	     */var lowerCase=createCompounder(function(result,word,index){return result+(index?" ":"")+word.toLowerCase()});
	/**
	     * Converts the first character of `string` to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.lowerFirst('Fred');
	     * // => 'fred'
	     *
	     * _.lowerFirst('FRED');
	     * // => 'fRED'
	     */var lowerFirst=createCaseFirst("toLowerCase");
	/**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil(mid),chars)}
	/**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padEnd('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padEnd('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padEnd('abc', 3);
	     * // => 'abc'
	     */function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string}
	/**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padStart('abc', 6);
	     * // => '   abc'
	     *
	     * _.padStart('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padStart('abc', 3);
	     * // => 'abc'
	     */function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string}
	/**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
	     * hexadecimal, in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the
	     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix=10] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */function parseInt(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}return nativeParseInt(toString(string).replace(reTrimStart,""),radix||0)}
	/**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=1] The number of times to repeat the string.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined){n=1;}else{n=toInteger(n);}return baseRepeat(toString(string),n)}
	/**
	     * Replaces matches for `pattern` in `string` with `replacement`.
	     *
	     * **Note:** This method is based on
	     * [`String#replace`](https://mdn.io/String/replace).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to modify.
	     * @param {RegExp|string} pattern The pattern to replace.
	     * @param {Function|string} replacement The match replacement.
	     * @returns {string} Returns the modified string.
	     * @example
	     *
	     * _.replace('Hi Fred', 'Fred', 'Barney');
	     * // => 'Hi Barney'
	     */function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2])}
	/**
	     * Converts `string` to
	     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--FOO-BAR--');
	     * // => 'foo_bar'
	     */var snakeCase=createCompounder(function(result,word,index){return result+(index?"_":"")+word.toLowerCase()});
	/**
	     * Splits `string` by `separator`.
	     *
	     * **Note:** This method is based on
	     * [`String#split`](https://mdn.io/String/split).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to split.
	     * @param {RegExp|string} separator The separator pattern to split by.
	     * @param {number} [limit] The length to truncate results to.
	     * @returns {Array} Returns the string segments.
	     * @example
	     *
	     * _.split('a-b-c', '-', 2);
	     * // => ['a', 'b']
	     */function split(string,separator,limit){if(limit&&typeof limit!="number"&&isIterateeCall(string,separator,limit)){separator=limit=undefined;}limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return []}string=toString(string);if(string&&(typeof separator=="string"||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit)}}return string.split(separator,limit)}
	/**
	     * Converts `string` to
	     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.1.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar--');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__FOO_BAR__');
	     * // => 'FOO BAR'
	     */var startCase=createCompounder(function(result,word,index){return result+(index?" ":"")+upperFirst(word)});
	/**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */function startsWith(string,target,position){string=toString(string);position=position==null?0:baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target}
	/**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is given, it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options={}] The options object.
	     * @param {RegExp} [options.escape=_.templateSettings.escape]
	     *  The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
	     *  The "evaluate" delimiter.
	     * @param {Object} [options.imports=_.templateSettings.imports]
	     *  An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
	     *  The "interpolate" delimiter.
	     * @param {string} [options.sourceURL='lodash.templateSources[n]']
	     *  The sourceURL of the compiled template.
	     * @param {string} [options.variable='obj']
	     *  The data object variable name.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // Use the "interpolate" delimiter to create a compiled template.
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // Use the HTML "escape" delimiter to escape data property values.
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the internal `print` function in "evaluate" delimiters.
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // Use the ES template literal delimiter as an "interpolate" delimiter.
	     * // Disable support by replacing the "interpolate" delimiter.
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // Use backslashes to treat delimiters as plain text.
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // Use the `imports` option to import `jQuery` as `jq`.
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
	     *
	     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // Use custom template delimiters.
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // Use the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and stack traces.
	     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */function template(string,options,guard){
	// Based on John Resig's `tmpl` implementation
	// (http://ejohn.org/blog/javascript-micro-templating/)
	// and Laura Doktorova's doT.js (https://github.com/olado/doT).
	var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";
	// Compile the regexp to match each delimiter.
	var reDelimiters=RegExp((options.escape||reNoMatch).source+"|"+interpolate.source+"|"+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+"|"+(options.evaluate||reNoMatch).source+"|$","g");
	// Use a sourceURL for easier debugging.
	var sourceURL="//# sourceURL="+("sourceURL"in options?options.sourceURL:"lodash.templateSources["+ ++templateCounter+"]")+"\n";string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);
	// Escape characters that can't be included in string literals.
	source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);
	// Replace delimiters with snippets.
	if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;
	// The JS engine embedded in Adobe products needs `match` returned in
	// order to produce the correct `offset` value.
	return match});source+="';\n";
	// If `variable` is not specified wrap a with-statement around the generated
	// code to add the data object to the top of the scope chain.
	var variable=options.variable;if(!variable){source="with (obj) {\n"+source+"\n}\n";}
	// Cleanup code by stripping empty strings.
	source=(isEvaluating?source.replace(reEmptyStringLeading,""):source).replace(reEmptyStringMiddle,"$1").replace(reEmptyStringTrailing,"$1;");
	// Frame code as the function body.
	source="function("+(variable||"obj")+") {\n"+(variable?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(isEscaping?", __e = _.escape":"")+(isEvaluating?", __j = Array.prototype.join;\n"+"function print() { __p += __j.call(arguments, '') }\n":";\n")+source+"return __p\n}";var result=attempt(function(){return Function(importsKeys,sourceURL+"return "+source).apply(undefined,importsValues)});
	// Provide the compiled function's source by its `toString` method or
	// the `source` property as a convenience for inlining compiled templates.
	result.source=source;if(isError(result)){throw result}return result}
	/**
	     * Converts `string`, as a whole, to lower case just like
	     * [String#toLowerCase](https://mdn.io/toLowerCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.toLower('--Foo-Bar--');
	     * // => '--foo-bar--'
	     *
	     * _.toLower('fooBar');
	     * // => 'foobar'
	     *
	     * _.toLower('__FOO_BAR__');
	     * // => '__foo_bar__'
	     */function toLower(value){return toString(value).toLowerCase()}
	/**
	     * Converts `string`, as a whole, to upper case just like
	     * [String#toUpperCase](https://mdn.io/toUpperCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.toUpper('--foo-bar--');
	     * // => '--FOO-BAR--'
	     *
	     * _.toUpper('fooBar');
	     * // => 'FOOBAR'
	     *
	     * _.toUpper('__foo_bar__');
	     * // => '__FOO_BAR__'
	     */function toUpper(value){return toString(value).toUpperCase()}
	/**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrim,"")}if(!string||!(chars=baseToString(chars))){return string}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join("")}
	/**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimEnd('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimEnd('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimEnd,"")}if(!string||!(chars=baseToString(chars))){return string}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join("")}
	/**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimStart('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimStart('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart,"")}if(!string||!(chars=baseToString(chars))){return string}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join("")}
	/**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object} [options={}] The options object.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.truncate('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator="separator"in options?options.separator:separator;length="length"in options?toInteger(options.length):length;omission="omission"in options?baseToString(options.omission):omission;}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string}var end=length-stringSize(omission);if(end<1){return omission}var result=strSymbols?castSlice(strSymbols,0,end).join(""):string.slice(0,end);if(separator===undefined){return result+omission}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+"g");}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission}
	/**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
	     * their corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional
	     * HTML entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.6.0
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string}
	/**
	     * Converts `string`, as space separated words, to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.upperCase('--foo-bar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('fooBar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('__foo_bar__');
	     * // => 'FOO BAR'
	     */var upperCase=createCompounder(function(result,word,index){return result+(index?" ":"")+word.toUpperCase()});
	/**
	     * Converts the first character of `string` to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.upperFirst('fred');
	     * // => 'Fred'
	     *
	     * _.upperFirst('FRED');
	     * // => 'FRED'
	     */var upperFirst=createCaseFirst("toUpperCase");
	/**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string)}return string.match(pattern)||[]}
	/*------------------------------------------------------------------------*/
	/**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Function} func The function to attempt.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // Avoid throwing errors for invalid selectors.
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */var attempt=baseRest(function(func,args){try{return apply(func,undefined,args)}catch(e){return isError(e)?e:new Error(e)}});
	/**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method.
	     *
	     * **Note:** This method doesn't set the "length" property of bound functions.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} methodNames The object method names to bind.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'click': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view, ['click']);
	     * jQuery(element).on('click', view.click);
	     * // => Logs 'clicked docs' when clicked.
	     */var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object));});return object});
	/**
	     * Creates a function that iterates over `pairs` and invokes the corresponding
	     * function of the first predicate to return truthy. The predicate-function
	     * pairs are invoked with the `this` binding and arguments of the created
	     * function.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Array} pairs The predicate-function pairs.
	     * @returns {Function} Returns the new composite function.
	     * @example
	     *
	     * var func = _.cond([
	     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
	     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
	     *   [_.stubTrue,                      _.constant('no match')]
	     * ]);
	     *
	     * func({ 'a': 1, 'b': 2 });
	     * // => 'matches A'
	     *
	     * func({ 'a': 0, 'b': 1 });
	     * // => 'matches B'
	     *
	     * func({ 'a': '1', 'b': '2' });
	     * // => 'no match'
	     */function cond(pairs){var length=pairs==null?0:pairs.length,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!="function"){throw new TypeError(FUNC_ERROR_TEXT)}return [toIteratee(pair[0]),pair[1]]});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args)}}})}
	/**
	     * Creates a function that invokes the predicate properties of `source` with
	     * the corresponding property values of a given object, returning `true` if
	     * all predicates return truthy, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.conformsTo` with
	     * `source` partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 2, 'b': 1 },
	     *   { 'a': 1, 'b': 2 }
	     * ];
	     *
	     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
	     * // => [{ 'a': 1, 'b': 2 }]
	     */function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG))}
	/**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new constant function.
	     * @example
	     *
	     * var objects = _.times(2, _.constant({ 'a': 1 }));
	     *
	     * console.log(objects);
	     * // => [{ 'a': 1 }, { 'a': 1 }]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => true
	     */function constant(value){return function(){return value}}
	/**
	     * Checks `value` to determine whether a default value should be returned in
	     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	     * or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Util
	     * @param {*} value The value to check.
	     * @param {*} defaultValue The default value.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * _.defaultTo(1, 10);
	     * // => 1
	     *
	     * _.defaultTo(undefined, 10);
	     * // => 10
	     */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value}
	/**
	     * Creates a function that returns the result of invoking the given functions
	     * with the `this` binding of the created function, where each successive
	     * invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flowRight
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow([_.add, square]);
	     * addSquare(1, 2);
	     * // => 9
	     */var flow=createFlow();
	/**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the given functions from right to left.
	     *
	     * @static
	     * @since 3.0.0
	     * @memberOf _
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flow
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight([square, _.add]);
	     * addSquare(1, 2);
	     * // => 9
	     */var flowRight=createFlow(true);
	/**
	     * This method returns the first argument it receives.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     *
	     * console.log(_.identity(object) === object);
	     * // => true
	     */function identity(value){return value}
	/**
	     * Creates a function that invokes `func` with the arguments of the created
	     * function. If `func` is a property name, the created function returns the
	     * property value for a given element. If `func` is an array or object, the
	     * created function returns `true` for elements that contain the equivalent
	     * source properties, otherwise it returns `false`.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Util
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, _.iteratee(['user', 'fred']));
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, _.iteratee('user'));
	     * // => ['barney', 'fred']
	     *
	     * // Create custom iteratee shorthands.
	     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	     *     return func.test(string);
	     *   };
	     * });
	     *
	     * _.filter(['abc', 'def'], /ef/);
	     * // => ['def']
	     */function iteratee(func){return baseIteratee(typeof func=="function"?func:baseClone(func,CLONE_DEEP_FLAG))}
	/**
	     * Creates a function that performs a partial deep comparison between a given
	     * object and `source`, returning `true` if the given object has equivalent
	     * property values, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.isMatch` with `source`
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
	     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
	     */function matches(source){return baseMatches(baseClone(source,CLONE_DEEP_FLAG))}
	/**
	     * Creates a function that performs a partial deep comparison between the
	     * value at `path` of a given object to `srcValue`, returning `true` if the
	     * object value is equivalent, else `false`.
	     *
	     * **Note:** Partial comparisons will match empty array and empty object
	     * `srcValue` values against any array or object value, respectively. See
	     * `_.isEqual` for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.find(objects, _.matchesProperty('a', 4));
	     * // => { 'a': 4, 'b': 5, 'c': 6 }
	     */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG))}
	/**
	     * Creates a function that invokes the method at `path` of a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': _.constant(2) } },
	     *   { 'a': { 'b': _.constant(1) } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(objects, _.method(['a', 'b']));
	     * // => [2, 1]
	     */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args)}});
	/**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path of `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args)}});
	/**
	     * Adds all own enumerable string keyed function properties of a source
	     * object to the destination object. If `object` is a function, then methods
	     * are added to its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}var chain=!(isObject(options)&&"chain"in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({func:func,args:arguments,thisArg:object});result.__chain__=chainAll;return result}return func.apply(object,arrayPush([this.value()],arguments))};}});return object}
	/**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */function noConflict(){if(root._===this){root._=oldDash;}return this}
	/**
	     * This method returns `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Util
	     * @example
	     *
	     * _.times(2, _.noop);
	     * // => [undefined, undefined]
	     */function noop(){
	// No operation performed.
	}
	/**
	     * Creates a function that gets the argument at index `n`. If `n` is negative,
	     * the nth argument from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [n=0] The index of the argument to return.
	     * @returns {Function} Returns the new pass-thru function.
	     * @example
	     *
	     * var func = _.nthArg(1);
	     * func('a', 'b', 'c', 'd');
	     * // => 'b'
	     *
	     * var func = _.nthArg(-2);
	     * func('a', 'b', 'c', 'd');
	     * // => 'c'
	     */function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n)})}
	/**
	     * Creates a function that invokes `iteratees` with the arguments it receives
	     * and returns their results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.over([Math.max, Math.min]);
	     *
	     * func(1, 2, 3, 4);
	     * // => [4, 1]
	     */var over=createOver(arrayMap);
	/**
	     * Creates a function that checks if **all** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overEvery([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => false
	     *
	     * func(NaN);
	     * // => false
	     */var overEvery=createOver(arrayEvery);
	/**
	     * Creates a function that checks if **any** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overSome([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => true
	     *
	     * func(NaN);
	     * // => false
	     */var overSome=createOver(arraySome);
	/**
	     * Creates a function that returns the value at `path` of a given object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': 2 } },
	     *   { 'a': { 'b': 1 } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	     * // => [1, 2]
	     */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path)}
	/**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the value at a given path of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path)}}
	/**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	     * `start` is specified without an `end` or `step`. If `end` is not specified,
	     * it's set to `start` with `start` then set to `0`.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.rangeRight
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(-4);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */var range=createRange();
	/**
	     * This method is like `_.range` except that it populates values in
	     * descending order.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.range
	     * @example
	     *
	     * _.rangeRight(4);
	     * // => [3, 2, 1, 0]
	     *
	     * _.rangeRight(-4);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 5);
	     * // => [4, 3, 2, 1]
	     *
	     * _.rangeRight(0, 20, 5);
	     * // => [15, 10, 5, 0]
	     *
	     * _.rangeRight(0, -4, -1);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.rangeRight(0);
	     * // => []
	     */var rangeRight=createRange(true);
	/**
	     * This method returns a new empty array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Array} Returns the new empty array.
	     * @example
	     *
	     * var arrays = _.times(2, _.stubArray);
	     *
	     * console.log(arrays);
	     * // => [[], []]
	     *
	     * console.log(arrays[0] === arrays[1]);
	     * // => false
	     */function stubArray(){return []}
	/**
	     * This method returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `false`.
	     * @example
	     *
	     * _.times(2, _.stubFalse);
	     * // => [false, false]
	     */function stubFalse(){return false}
	/**
	     * This method returns a new empty object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Object} Returns the new empty object.
	     * @example
	     *
	     * var objects = _.times(2, _.stubObject);
	     *
	     * console.log(objects);
	     * // => [{}, {}]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => false
	     */function stubObject(){return {}}
	/**
	     * This method returns an empty string.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {string} Returns the empty string.
	     * @example
	     *
	     * _.times(2, _.stubString);
	     * // => ['', '']
	     */function stubString(){return ""}
	/**
	     * This method returns `true`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `true`.
	     * @example
	     *
	     * _.times(2, _.stubTrue);
	     * // => [true, true]
	     */function stubTrue(){return true}
	/**
	     * Invokes the iteratee `n` times, returning an array of the results of
	     * each invocation. The iteratee is invoked with one argument; (index).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.times(3, String);
	     * // => ['0', '1', '2']
	     *
	     *  _.times(4, _.constant(0));
	     * // => [0, 0, 0, 0]
	     */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return []}var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}return result}
	/**
	     * Converts `value` to a property path array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the new property path array.
	     * @example
	     *
	     * _.toPath('a.b.c');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toPath('a[0].b.c');
	     * // => ['a', '0', 'b', 'c']
	     */function toPath(value){if(isArray(value)){return arrayMap(value,toKey)}return isSymbol(value)?[value]:copyArray(stringToPath(toString(value)))}
	/**
	     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {string} [prefix=''] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}
	/*------------------------------------------------------------------------*/
	/**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {number} augend The first number in an addition.
	     * @param {number} addend The second number in an addition.
	     * @returns {number} Returns the total.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */var add=createMathOperation(function(augend,addend){return augend+addend},0);
	/**
	     * Computes `number` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */var ceil=createRound("ceil");
	/**
	     * Divide two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} dividend The first number in a division.
	     * @param {number} divisor The second number in a division.
	     * @returns {number} Returns the quotient.
	     * @example
	     *
	     * _.divide(6, 4);
	     * // => 1.5
	     */var divide=createMathOperation(function(dividend,divisor){return dividend/divisor},1);
	/**
	     * Computes `number` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */var floor=createRound("floor");
	/**
	     * Computes the maximum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => undefined
	     */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined}
	/**
	     * This method is like `_.max` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.maxBy(objects, function(o) { return o.n; });
	     * // => { 'n': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.maxBy(objects, 'n');
	     * // => { 'n': 2 }
	     */function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined}
	/**
	     * Computes the mean of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * _.mean([4, 2, 8, 6]);
	     * // => 5
	     */function mean(array){return baseMean(array,identity)}
	/**
	     * This method is like `_.mean` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be averaged.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.meanBy(objects, function(o) { return o.n; });
	     * // => 5
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.meanBy(objects, 'n');
	     * // => 5
	     */function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2))}
	/**
	     * Computes the minimum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => undefined
	     */function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined}
	/**
	     * This method is like `_.min` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.minBy(objects, function(o) { return o.n; });
	     * // => { 'n': 1 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.minBy(objects, 'n');
	     * // => { 'n': 1 }
	     */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined}
	/**
	     * Multiply two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} multiplier The first number in a multiplication.
	     * @param {number} multiplicand The second number in a multiplication.
	     * @returns {number} Returns the product.
	     * @example
	     *
	     * _.multiply(6, 4);
	     * // => 24
	     */var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand},1);
	/**
	     * Computes `number` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */var round=createRound("round");
	/**
	     * Subtract two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {number} minuend The first number in a subtraction.
	     * @param {number} subtrahend The second number in a subtraction.
	     * @returns {number} Returns the difference.
	     * @example
	     *
	     * _.subtract(6, 4);
	     * // => 2
	     */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend},0);
	/**
	     * Computes the sum of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 2, 8, 6]);
	     * // => 20
	     */function sum(array){return array&&array.length?baseSum(array,identity):0}
	/**
	     * This method is like `_.sum` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be summed.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.sumBy(objects, function(o) { return o.n; });
	     * // => 20
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sumBy(objects, 'n');
	     * // => 20
	     */function sumBy(array,iteratee){return array&&array.length?baseSum(array,getIteratee(iteratee,2)):0}
	/*------------------------------------------------------------------------*/
	// Add methods that return wrapped values in chain sequences.
	lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;
	// Add aliases.
	lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;
	// Add methods to `lodash.prototype`.
	mixin(lodash,lodash);
	/*------------------------------------------------------------------------*/
	// Add methods that return unwrapped values in chain sequences.
	lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;
	// Add aliases.
	lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source}(),{chain:false});
	/*------------------------------------------------------------------------*/
	/**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type {string}
	     */lodash.VERSION=VERSION;
	// Assign default placeholders.
	arrayEach(["bind","bindKey","curry","curryRight","partial","partialRight"],function(methodName){lodash[methodName].placeholder=lodash;});
	// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	arrayEach(["drop","take"],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){n=n===undefined?1:nativeMax(toInteger(n),0);var result=this.__filtered__&&!index?new LazyWrapper(this):this.clone();if(result.__filtered__){result.__takeCount__=nativeMin(n,result.__takeCount__);}else{result.__views__.push({size:nativeMin(n,MAX_ARRAY_LENGTH),type:methodName+(result.__dir__<0?"Right":"")});}return result};LazyWrapper.prototype[methodName+"Right"]=function(n){return this.reverse()[methodName](n).reverse()};});
	// Add `LazyWrapper` methods that accept an `iteratee` value.
	arrayEach(["filter","map","takeWhile"],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({iteratee:getIteratee(iteratee,3),type:type});result.__filtered__=result.__filtered__||isFilter;return result};});
	// Add `LazyWrapper` methods for `_.head` and `_.last`.
	arrayEach(["head","last"],function(methodName,index){var takeName="take"+(index?"Right":"");LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0]};});
	// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
	arrayEach(["initial","tail"],function(methodName,index){var dropName="drop"+(index?"":"Right");LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1)};});LazyWrapper.prototype.compact=function(){return this.filter(identity)};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head()};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate)};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=="function"){return new LazyWrapper(this)}return this.map(function(value){return baseInvoke(value,path,args)})});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)))};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result)}if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}if(end!==undefined){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}return result};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse()};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH)};
	// Add `LazyWrapper` methods to `lodash.prototype`.
	baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?"take"+(methodName=="last"?"Right":""):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result[0]:result};if(useLazy&&checkIteratee&&typeof iteratee=="function"&&iteratee.length!=1){
	// Avoid lazy use if the iteratee has a "length" value other than `1`.
	isLazy=useLazy=false;}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({func:thru,args:[interceptor],thisArg:undefined});return new LodashWrapper(result,chainAll)}if(isUnwrapped&&onlyLazy){return func.apply(this,args)}result=this.thru(interceptor);return isUnwrapped?isTaker?result.value()[0]:result.value():result};});
	// Add `Array` methods to `lodash.prototype`.
	arrayEach(["pop","push","shift","sort","splice","unshift"],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?"tap":"thru",retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args)}return this[chainName](function(value){return func.apply(isArray(value)?value:[],args)})};});
	// Map minified method names to their real names.
	baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+"",names=realNames[key]||(realNames[key]=[]);names.push({name:methodName,func:lodashFunc});}});realNames[createHybrid(undefined,WRAP_BIND_KEY_FLAG).name]=[{name:"wrapper",func:undefined}];
	// Add methods to `LazyWrapper`.
	LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;
	// Add chain sequence methods to the `lodash` wrapper.
	lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;
	// Add lazy aliases.
	lodash.prototype.first=lodash.prototype.head;if(symIterator){lodash.prototype[symIterator]=wrapperToIterator;}return lodash};
	/*--------------------------------------------------------------------------*/
	// Export lodash.
	var _=runInContext();
	// Some AMD build optimizers, like r.js, check for condition patterns like:
	if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){
	// Expose Lodash on the global object to prevent errors when Lodash is
	// loaded by a script tag in the presence of an AMD loader.
	// See http://requirejs.org/docs/errors.html#mismatch for more details.
	// Use `_.noConflict` to remove Lodash from the global object.
	root._=_;
	// Define as an anonymous module so, through path mapping, it can be
	// referenced as the "underscore" module.
	define(function(){return _});}
	// Check for `exports` after `define` in case a build optimizer adds it.
	else if(freeModule){
	// Export for Node.js.
	(freeModule.exports=_)._=_;
	// Export for CommonJS support.
	freeExports._=_;}else{
	// Export to the global object.
	root._=_;}}).call(this);}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}]},{},[1])(1)});

	function getPositions(module){
	    let g = new dagre.graphlib.Graph();
	    g.setGraph({rankdir: 'BT'});
	    g.setDefaultEdgeLabel(() => ({}));
	    g.setDefaultNodeLabel(() => ({}));
	    const inputSet = new Set(module.input);
	    module.nodes
	        .filter(({name}) => !inputSet.has(name))
	        .forEach(({name}) => g.setNode(name, {width:2,height:1}));
	    g.setNode('Inputs', {width:4,height:2});
	    g.setNode('Outputs', {width:4,height:2});
	    module.nodes.forEach(({name, input}) =>
	        input.map(s => s.split(':')[0]).forEach(from =>
	            g.setEdge(inputSet.has(from)? 'Inputs' : from, name))
	    );
	    module.output.map(s => s.split(':')[0]).forEach(from => g.setEdge(from, 'Outputs'));
	    dagre.layout(g);
	    const positions = g.nodes()
	        .filter(n => n !== 'Inputs' && n !== 'Outputs')
	        .map(n => [...(({x,y})=>[x,y])(g.node(n)), n]);
	    return positions
	}

	function transformPositions(positions, svg){
	    const width = +svg.getAttribute('width');
	    const height = +svg.getAttribute('height');
	    const xpad = 0.2 * Math.min(width, height);
	    const ypad = 0.2 * Math.min(width, height);
	    const [xmin, xmax] = (c => [Math.min(...c),Math.max(...c)])(positions.map(r=>r[0]));
	    const [ymin, ymax] = (c => [Math.min(...c),Math.max(...c)])(positions.map(r=>r[1]));
	    const protect = x => x==0? 1 : x;
	    const positionsX = positions.map(r=>r[0])
	        .map(x => (x-xmin)/protect(xmax-xmin))
	        .map(x => xpad + ((width - (2*xpad)) * x));
	    const positionsY = positions.map(r=>r[1])
	        .map(y => (y-ymin)/protect(ymax-ymin))
	        .map(y => ypad + ((height - (2*ypad)) * y));
	    return positions.reduce((acc,[,,name],i) =>
	        Object.assign(acc, {[name]: [positionsX[i], positionsY[i]]}), {})
	}

	function addBaseModule(module, invisible=true){
	    const {svg, navbarItem} = this.newTabFn(module.name);
	    // don't show in navbar, don't debug when creating
	    navbarItem.classed('defaultModule', invisible);
	    const origDebug = svg.__data__.debugModule;
	    svg.__data__.debugModule = () => {};
	    svg.__data__.moduleMetaData.imports = module.module_import;
	    svg.__data__.moduleMetaData.doc = module.doc;
	    // add nodes
	    const inputSet = new Set(module.input);
	    const positions = transformPositions(getPositions(module), svg);
	    const notInputNodes = module.nodes.filter(({name}) => !inputSet.has(name));
	    let scaleNode = 8 * Math.min(+svg.getAttribute('width'), +svg.getAttribute('height'));
	    scaleNode /= Math.max(8, notInputNodes.length);
	    notInputNodes.forEach(({name, op, literal}) => {
	        svg.__data__.addNode(positions[name], op, literal, name, {
	            width: 0.12*scaleNode, height: 0.06*scaleNode, rounding: 0.005*scaleNode
	        });
	    });
	    // add edges
	    const outputPsuedoNode = {name: 'Outputs', input: module.output};
	    module.nodes.concat([outputPsuedoNode])
	        .forEach(({name, input}) => input
	            .forEach((inp, toI) => {
	                const [f,fromI] = inp.split(':');
	                const fromRef = inputSet.has(f)? `Inputs:${module.input.indexOf(f)}` : `${f}:${fromI}`;
	                svg.__data__.addEdge(fromRef, `${name}:${toI}`);
	            }));
	    svg.__data__.debugModule = origDebug;
	}

	const crossEntropyLoss = {"name":"cross_entropy_loss","input":["INPUT_0","INPUT_1"],"output":["vertex_7:0"],"nodes":[{"name":"vertex_1","op":"softmax","input":["INPUT_0:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"vertex_2","op":"gather_rows","input":["vertex_1:0","INPUT_1:0"],"literal":[]},{"name":"vertex_4","op":"log","input":["vertex_2:0"],"literal":[]},{"name":"vertex_6","op":"reduce_avg","input":["vertex_4:0"],"literal":[]},{"name":"vertex_7","op":"negate","input":["vertex_6:0"],"literal":[]}],"module_import":[],"doc":{"input":["2D Tensor, shape of (N,D)","Indices, shape (D), dtype \"int32\""],"output":["Loss (a scalar)"],"doc":"Implements the cross-entropy loss."}};
	const getWeight = {"name":"get_weight","input":["INPUT_0","INPUT_1"],"output":["final:0"],"nodes":[{"name":"multiplier_params","op":"js_function","input":["INPUT_0:0"],"literal":["tensor => [[], Math.sqrt(2/tensor.shape.slice(1).reduce((a,b)=>a*b,1)), tensor.dtype]"]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"weight_params","op":"js_function","input":["INPUT_0:0","INPUT_1:0"],"literal":["(tensor, units) => [[...tensor.shape.slice(1), units], \"normal\"]"]},{"name":"multiplier","op":"get_tensor","input":["multiplier_params:0","multiplier_params:1","multiplier_params:2"],"literal":[]},{"name":"unscaled_weight","op":"get_tensor","input":["weight_params:0","weight_params:1","multiplier_params:2"],"literal":[]},{"name":"scaled","op":"multiply","input":["multiplier:0","unscaled_weight:0"],"literal":[]},{"name":"final","op":"variable","input":["scaled:0","collections:0"],"literal":[]},{"name":"collections","op":"literals","input":[],"literal":[["trainable","regularization"]]}],"module_import":[],"doc":{"input":["Input tensor","Number of units"],"output":["Weight tensor"],"doc":"Gets weight tensor using he initialization"}};
	const getBias = {"name":"get_bias","input":["INPUT_0"],"output":["vertex_3:0"],"nodes":[{"name":"vertex_2","op":"get_tensor","input":["get_shape:0","vertex_1:0","INPUT_0:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"get_shape","op":"js_function","input":["INPUT_0:0"],"literal":["t => [t.shape.slice(1)]"]},{"name":"vertex_3","op":"variable","input":["vertex_2:0","vertex_1:1"],"literal":[]},{"name":"vertex_1","op":"literals","input":[],"literal":["zeros",["trainable"]]}],"module_import":[],"doc":{"input":["Input 1"],"output":["Output 1"],"doc":"Implements module \"get_bias\""}};
	const dense = {"name":"denseLayer","input":["INPUT_0","INPUT_1"],"output":["XW_b:0"],"nodes":[{"name":"ingest","op":"js_function","input":["INPUT_0:0","INPUT_1:0"],"literal":["(tensor, givenUnits) => {\nif(!(tensor.shape && tensor.shape.length>=2)){\nthrow(\"First input must be tensor of rank>=2\");}\nconst units = givenUnits || tensor.shape.slice(-1)[0];\nif(!(Number.isInteger(units) && units>0)){\nthrow(\"Second input, units, must be a positive integer.\");}\nreturn [tensor, units];\n}"]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"XW","op":"matmul","input":["ingest:0","weight:0"],"literal":[]},{"name":"weight","op":"get_weight","input":["ingest:0","ingest:1"],"literal":[]},{"name":"XW_b","op":"add","input":["XW:0","bias:0"],"literal":[]},{"name":"bias","op":"get_bias","input":["XW:0"],"literal":[]}],"module_import":["get_weight","get_bias"],"doc":{"input":["Input tensor","Number of units"],"output":["Result, XW+b"],"doc":"Implements a dense layer, without an activation"}};
	const denseReLU = {"name":"denseReluLayer","input":["INPUT_0","INPUT_1"],"output":["vertex_2:0"],"nodes":[{"name":"vertex_1","op":"denseLayer","input":["INPUT_0:0","INPUT_1:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"vertex_2","op":"relu","input":["vertex_1:0"],"literal":[]}],"module_import":["denseLayer"],"doc":{"input":["Input tensor","Number of units"],"output":["Result, ReLU(XW+b)"],"doc":"Implements a dense layer with a ReLU activation"}};

	const get_conv_weight = {"name":"get_conv_weight","input":["INPUT_0","INPUT_1","INPUT_2"],"output":["weight_var:0"],"nodes":[{"name":"scale_calc","op":"js_function","input":["INPUT_0:0"],"literal":["(tensor) => [[], Math.sqrt(2/tensor.shape.slice(1).reduce((a,b)=>a*b,1)), tensor.dtype]"]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_2","op":"placeholder","input":[],"literal":[]},{"name":"shape","op":"js_function","input":["INPUT_0:0","INPUT_1:0","INPUT_2:0"],"literal":["(tensor, filter, units) => {\nconst inDepth = tensor.shape.slice(-1)[0];\nconst newShape = [...filter, inDepth, units || inDepth];\nreturn [newShape, \"normal\", tensor.dtype];\n}"]},{"name":"vertex_2","op":"get_tensor","input":["shape:0","shape:1","shape:2"],"literal":[]},{"name":"scale_tensor","op":"get_tensor","input":["scale_calc:0","scale_calc:1","scale_calc:2"],"literal":[]},{"name":"weight_var","op":"variable","input":["scaling:0","collections:0"],"literal":[]},{"name":"scaling","op":"multiply","input":["vertex_2:0","scale_tensor:0"],"literal":[]},{"name":"collections","op":"literals","input":[],"literal":[["trainable","regularization"]]}],"module_import":[],"doc":{"input":["Input tensor","Filter shape (array of positive integers)","Out Channels"],"output":["Weight tensor"],"doc":"Gets a weight tensor (ie filter) for convolution."}};
	const layer_conv = {"name":"convLayer","input":["INPUT_0","INPUT_1","INPUT_2","INPUT_3","INPUT_4"],"output":["vertex_6:0"],"nodes":[{"name":"ingest","op":"js_function","input":["INPUT_0:0","INPUT_1:0","INPUT_2:0","INPUT_3:0","INPUT_4:0"],"literal":["(...args) => {\nlet [tensor, filter, channels, strides, padding] = args;\nif(!(tensor.shape && tensor.shape.length >= 3)){throw(\"First input, tensor, must be tensor of rank>=3\");}\nfilter = Number.isInteger(filter)? Array(tensor.shape.length-2).fill(filter) : filter;\nchannels = channels || tensor.shape.slice(-1)[0];\nif(!(Array.isArray(filter) && filter.every(x=>Number.isInteger(x)))){throw(\"Second input, filter, must be an array of positive integers\");}\nif(!Number.isInteger(channels)){throw(\"Third input, channels, must be an integer.\");}\nreturn [tensor, filter, channels, strides, padding];\n}"]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_2","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_3","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_4","op":"placeholder","input":[],"literal":[]},{"name":"vertex_2","op":"get_conv_weight","input":["ingest:0","ingest:1","ingest:2"],"literal":[]},{"name":"vertex_1","op":"js_function","input":["ingest:0","ingest:2"],"literal":["(input, units) => [[units], \"zeros\", input.dtype, [\"trainable\"]]"]},{"name":"vertex_10","op":"convolution","input":["ingest:0","vertex_2:0","ingest:3","ingest:4"],"literal":[]},{"name":"vertex_3","op":"get_tensor","input":["vertex_1:0","vertex_1:1","vertex_1:2"],"literal":[]},{"name":"bias","op":"variable","input":["vertex_3:0","vertex_1:3"],"literal":[]},{"name":"vertex_6","op":"add","input":["bias:0","vertex_10:0"],"literal":[]}],"module_import":["get_conv_weight"],"doc":{"input":["Input tensor","Filter shape (array of positive integers)","Output Channels","(optional) Strides","(optional) Padding"],"output":["Convolution"],"doc":"Implements a convolution with bias, no activation"}};
	const convReluLayer = {"name":"convReluLayer","input":["INPUT_0","INPUT_1","INPUT_2","INPUT_3","INPUT_4"],"output":["ReLU:0"],"nodes":[{"name":"conv","op":"convLayer","input":["INPUT_0:0","INPUT_1:0","INPUT_2:0","INPUT_3:0","INPUT_4:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_2","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_3","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_4","op":"placeholder","input":[],"literal":[]},{"name":"ReLU","op":"relu","input":["conv:0"],"literal":[]}],"module_import":["convLayer"],"doc":{"input":["Input tensor","Filter shape (array of positive integers)","Output Channels","(optional) Strides","(optional) Padding"],"output":["Convolution with ReLU applied"],"doc":"Implements a convolution with bias, followed by a ReLU activation"}};

	const sum_squares = {"name":"sum_squares","input":["INPUT_0"],"output":["vertex_6:0"],"nodes":[{"name":"vertex_2","op":"pow","input":["INPUT_0:0","vertex_5:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"vertex_6","op":"reduce_sum","input":["vertex_2:0"],"literal":[]},{"name":"vertex_5","op":"get_tensor","input":["vertex_4:0","vertex_4:1"],"literal":[]},{"name":"vertex_4","op":"literals","input":[],"literal":[[],2]}],"module_import":[],"doc":{"input":["Input 1"],"output":["Output 1"],"doc":"Implements module \"sum_squares\""}};
	const l2 = {"name":"L2_regularization","input":["INPUT_0"],"output":["sum_l2s:0"],"nodes":[{"name":"vertex_2","op":"get_collection","input":["vertex_3:0","INPUT_0:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"sum_l2s","op":"apply","input":["vertex_1:0"],"literal":["add"]},{"name":"vertex_1","op":"map","input":["vertex_2:0"],"literal":["sum_squares"]},{"name":"vertex_3","op":"literals","input":[],"literal":[["regularization"]]}],"module_import":["sum_squares"],"doc":{"input":["Input 1"],"output":["Output 1"],"doc":"Implements module \"L2_regularization\""}};
	const loss = {"name":"CrossEntropyL2Loss","input":["INPUT_0","INPUT_1","INPUT_2"],"output":["totalLoss:0"],"nodes":[{"name":"regStrength","op":"js_function","input":["INPUT_2:0"],"literal":["strength => strength || 0.001"]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_2","op":"placeholder","input":[],"literal":[]},{"name":"regLoss","op":"L2_regularization","input":["INPUT_0:0","regStrength:0"],"literal":[]},{"name":"dataLoss","op":"cross_entropy_loss","input":["INPUT_0:0","INPUT_1:0"],"literal":[]},{"name":"totalLoss","op":"add","input":["regLoss:0","dataLoss:0"],"literal":[]}],"module_import":["L2_regularization","cross_entropy_loss"],"doc":{"input":["Logits","Labels (indices)","(optional) regularization strength, defaults to 0.001"],"output":["Total loss"],"doc":"Calculates cross entropy loss + L2 regularization loss"}};

	const baseModules = [crossEntropyLoss,sum_squares,l2,loss,
	    getWeight, getBias, dense, denseReLU,
	    get_conv_weight, layer_conv, convReluLayer];
	const defaultImports = ["denseLayer","denseReluLayer","convLayer","convReluLayer",
	    "CrossEntropyL2Loss"];

	function valid_C_identifier$3(str){
		const match = str.match(/[_a-zA-Z][_a-zA-Z0-9]*/);
		return match !== null && str === str.match(/[_a-zA-Z][_a-zA-Z0-9]*/)[0]
	}

	function validModuleName(studio, name){
		if(!valid_C_identifier$3(name)){
			return 'Must be a valid C identifier'
		}
		if(studio.__data__.moduleHolders.hasOwnProperty(name)){
			return 'Module name already exists'
		}
		if(primitives.hasOwnProperty(name) || name === 'INPUTS' || name === 'OUTPTUS'){
			return 'Cannot be named after an operation'
		}
		return true
	}

	function applyModuleNameChange(aTag, textbox){
		const studio = aTag.node().closest('.studio');
		const oldName = aTag.node().innerText;
		const proposedName = textbox.value;
		textbox.remove();
		if(validModuleName(studio, proposedName) !== true
			|| proposedName === oldName){ return }
		aTag.text(proposedName);
		aTag.attr('id', proposedName);
		const holder = studio.__data__.moduleHolders[oldName];
		delete studio.__data__.moduleHolders[oldName];
		studio.__data__.moduleHolders[proposedName] = holder;
		holder.querySelector('svg').__data__.moduleMetaData.name = proposedName;
		Array.from(Object.values(studio.__data__.moduleHolders))
			.map(h => h.querySelector('svg'))
			.filter(svg => svg.__data__.moduleMetaData.imports.includes(oldName))
			.forEach(svg => {
				const data = svg.__data__;
				data.moduleMetaData.imports = data.moduleMetaData.imports
					.map(n => n===oldName? proposedName : n);
				Array.from(Object.entries(data.nodeMetaData))
					.forEach(([node, {op}]) => {
						if(op === oldName){
							data.nodeMetaData[node].op = proposedName;
							const container = data.graphStructure.V[node];
							if(container.querySelector('foreignObject').textContent === oldName){
								container.__data__.addText(proposedName);
							}
						}
					});
				svg.parentElement.querySelector('.sideBar').__data__.rollbackCheckpoint();
			});
	}

	const makeNewTabFn = (navbarList, modulesHolder) => (name=undefined, imports=[]) => {
		const svgSize = undefined;
		const svg = newStudioModule(modulesHolder, svgSize, name).node();
		const focus = () => {
			navbarList.selectAll('li')
				.classed('active', false)
				.select('.btn-group').remove();
			navbarItem.classed('active', true);
			d3.selectAll(modulesHolder.childNodes)
				.style('display', 'none');
			svg.parentElement.style.display = 'initial';
			navbarItem.each(function(){this.appendChild(makeModuleImporter(svg));});
		};
		const navbarItem = navbarList.insert('li', function(){return this.lastElementChild});
		const itemInner = navbarItem.append('a')
			.attr('id', svg.__data__.moduleMetaData.name)
			.text(svg.__data__.moduleMetaData.name)
			.on('click', focus)
			.on('dblclick', function(){
				focus();
				itemInner.style('display', 'none');
				const commitChange =  function(){
					itemInner.style('display', 'inherit');
					applyModuleNameChange(itemInner, this);
				};
				navbarItem.insert('input', ':first-child')
					.classed('form-control', true)
					.attr('type', 'text')
					.attr('value', itemInner.node().innerText)
					.on('input', function(){
						const valid = validModuleName(this.closest('.studio'), this.value);
						this.setCustomValidity(valid===true? '' : valid);
						this.reportValidity();
					})
					.on('focusout', commitChange)
					.on('change', commitChange)
					.each(function(){this.focus();});
			});
		svg.__data__.moduleMetaData.imports = imports;
		focus();
		return {svg, navbarItem}
	};

	const makeGetTaffyLibrary = studioEle => () => {
		const modules = Array.from(studioEle.querySelector('.modulesHolder').children)
			.map(e => e.querySelector('svg').__data__.getTaffyModule());
		return new constructors.library(modules)
	};

	function newStudio(studioParent, studioSize, givenModsImports){
		d3.select(studioParent).style('display','block')
			.style('margin-left', 'auto').style('margin-right', 'auto');
		const [width, height] = studioSize || (n=>[n.clientWidth, n.clientHeight])(d3.select(studioParent).node());
		d3.select(studioParent).style('display','table');
		const defaultModsImports = givenModsImports ? givenModsImports :
			{base: baseModules, imports: defaultImports, invisible: true};
		const studio = d3.select(studioParent).append('div')
			.classed('studio', true)
			.datum(function(){return {
				moduleCounter: 0,
				moduleHolders: {},
				addBaseModule,
				getTaffyLibrary: makeGetTaffyLibrary(this),
				pullModule: (module_name, input_descriptions, prune=true) => 
					puller(this.__data__.getTaffyLibrary(), module_name, input_descriptions, prune),
			}});
		studio.append('svg').call(addMarkerDef).attr('width', 0).attr('height', 0);
		studio.append('style').html('li.defaultModule{display:none;}li.defaultModule.active{display:inherit;}');
		const navbarList = studio.append('nav')
			.classed('navbar navbar-default', true)
			.style('margin-bottom', '0px')
			.style('width', width)
			.append('div').classed('navbar-collapse collapse', true)
			.append('ul').classed('nav navbar-nav', true)
			.style('display', 'flex').style('flex-direction', 'row').style('flex-wrap', 'wrap');

		const modulesHolder = studio.append('div')
			.classed('modulesHolder', true)
			.style('width', width)
			.style('height', height)
			.node();
		
		const newTabFn = makeNewTabFn(navbarList, modulesHolder);
		{
			const {base, imports, invisible} = defaultModsImports;
			studio.each(function(){
				this.__data__.newTabFn = newTabFn;
				base.forEach(mod => this.__data__.addBaseModule(mod, invisible));
			});
			const newTabItem = navbarList.append('li').append('a')
				.on('click', () => newTabFn(undefined, imports))
				.html('<span style="color:green;" class="glyphicon glyphicon-plus" aria-hidden="true"></span>');
			newTabFn(undefined, imports);
		}
		return modulesHolder
	}

	function newStudioModule(parent, size, moduleName){
		const [width, height] = size? size : [parent.clientWidth, parent.clientHeight];
		const sideBarWidth = 0.25; // as a percentage
		const holder = d3.select(parent)
			.append('div')
			.classed('moduleHolder', true);
		const svg = createSVG(holder, [Math.floor((1-sideBarWidth)*width), height], false)
			.call(addSideBar, [Math.floor(sideBarWidth*width), height])
			.call(addNodes)
			.each(function(){
				const name = moduleName? moduleName : `module_${++parent.__data__.moduleCounter}`;
				parent.closest('.studio').__data__.moduleHolders[name] = holder.node();
				this.__data__.moduleMetaData.name = name;
			});
		return svg
	}

	exports.newStudio = newStudio;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
