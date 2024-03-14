(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ui(e,t){const n=new Set(e.split(","));return t?i=>n.has(i.toLowerCase()):i=>n.has(i)}const Z={},zt=[],we=()=>{},Ha=()=>!1,xn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),qi=e=>e.startsWith("onUpdate:"),re=Object.assign,Vi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ua=Object.prototype.hasOwnProperty,H=(e,t)=>Ua.call(e,t),M=Array.isArray,Pt=e=>Nn(e)==="[object Map]",qr=e=>Nn(e)==="[object Set]",B=e=>typeof e=="function",oe=e=>typeof e=="string",jt=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Vr=e=>(ee(e)||B(e))&&B(e.then)&&B(e.catch),Kr=Object.prototype.toString,Nn=e=>Kr.call(e),qa=e=>Nn(e).slice(8,-1),Wr=e=>Nn(e)==="[object Object]",Ki=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kt=Ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Va=/-(\w)/g,Nt=kn(e=>e.replace(Va,(t,n)=>n?n.toUpperCase():"")),Ka=/\B([A-Z])/g,Bt=kn(e=>e.replace(Ka,"-$1").toLowerCase()),Gr=kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=kn(e=>e?`on${Gr(e)}`:""),it=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Cn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Wa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let zo;const Qr=()=>zo||(zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wi(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=oe(i)?Ya(i):Wi(i);if(o)for(const r in o)t[r]=o[r]}return t}else if(oe(e)||ee(e))return e}const Ga=/;(?![^(]*\))/g,Qa=/:([^]+)/,Ja=/\/\*[^]*?\*\//g;function Ya(e){const t={};return e.replace(Ja,"").split(Ga).forEach(n=>{if(n){const i=n.split(Qa);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Gi(e){let t="";if(oe(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const i=Gi(e[n]);i&&(t+=i+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Xa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Za=Ui(Xa);function Jr(e){return!!e||e===""}const fn=e=>oe(e)?e:e==null?"":M(e)||ee(e)&&(e.toString===Kr||!B(e.toString))?JSON.stringify(e,Yr,2):String(e),Yr=(e,t)=>t&&t.__v_isRef?Yr(e,t.value):Pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,o],r)=>(n[Zn(i,r)+" =>"]=o,n),{})}:qr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Zn(n))}:jt(t)?Zn(t):ee(t)&&!M(t)&&!Wr(t)?String(t):t,Zn=(e,t="")=>{var n;return jt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class Xr{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function ec(e){return new Xr(e)}function tc(e,t=Se){t&&t.active&&t.effects.push(e)}function nc(){return Se}let dt;class Qi{constructor(t,n,i,o){this.fn=t,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,tc(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,_t();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(ic(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),yt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=et,n=dt;try{return et=!0,dt=this,this._runnings++,Po(this),this.fn()}finally{Oo(this),this._runnings--,dt=n,et=t}}stop(){var t;this.active&&(Po(this),Oo(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function ic(e){return e.value}function Po(e){e._trackId++,e._depsLength=0}function Oo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Zr(e.deps[t],e);e.deps.length=e._depsLength}}function Zr(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let et=!0,_i=0;const es=[];function _t(){es.push(et),et=!1}function yt(){const e=es.pop();et=e===void 0?!0:e}function Ji(){_i++}function Yi(){for(_i--;!_i&&yi.length;)yi.shift()()}function ts(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const i=e.deps[e._depsLength];i!==t?(i&&Zr(i,e),e.deps[e._depsLength++]=t):e._depsLength++}}const yi=[];function ns(e,t,n){Ji();for(const i of e.keys()){let o;i._dirtyLevel<t&&(o??(o=e.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(o??(o=e.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&yi.push(i.scheduler)))}Yi()}const is=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},wi=new WeakMap,ht=Symbol(""),Ei=Symbol("");function ge(e,t,n){if(et&&dt){let i=wi.get(e);i||wi.set(e,i=new Map);let o=i.get(n);o||i.set(n,o=is(()=>i.delete(n))),ts(dt,o)}}function Fe(e,t,n,i,o,r){const s=wi.get(e);if(!s)return;let c=[];if(t==="clear")c=[...s.values()];else if(n==="length"&&M(e)){const a=Number(i);s.forEach((f,u)=>{(u==="length"||!jt(u)&&u>=a)&&c.push(f)})}else switch(n!==void 0&&c.push(s.get(n)),t){case"add":M(e)?Ki(n)&&c.push(s.get("length")):(c.push(s.get(ht)),Pt(e)&&c.push(s.get(Ei)));break;case"delete":M(e)||(c.push(s.get(ht)),Pt(e)&&c.push(s.get(Ei)));break;case"set":Pt(e)&&c.push(s.get(ht));break}Ji();for(const a of c)a&&ns(a,4);Yi()}const oc=Ui("__proto__,__v_isRef,__isVue"),os=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jt)),Ro=rc();function rc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=U(this);for(let r=0,s=this.length;r<s;r++)ge(i,"get",r+"");const o=i[t](...n);return o===-1||o===!1?i[t](...n.map(U)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_t(),Ji();const i=U(this)[t].apply(this,n);return Yi(),yt(),i}}),e}function sc(e){const t=U(this);return ge(t,"has",e),t.hasOwnProperty(e)}class rs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(o?r?_c:ls:r?cs:as).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const s=M(t);if(!o){if(s&&H(Ro,n))return Reflect.get(Ro,n,i);if(n==="hasOwnProperty")return sc}const c=Reflect.get(t,n,i);return(jt(n)?os.has(n):oc(n))||(o||ge(t,"get",n),r)?c:me(c)?s&&Ki(n)?c:c.value:ee(c)?o?fs(c):Ln(c):c}}class ss extends rs{constructor(t=!1){super(!1,t)}set(t,n,i,o){let r=t[n];if(!this._isShallow){const a=kt(r);if(!An(i)&&!kt(i)&&(r=U(r),i=U(i)),!M(t)&&me(r)&&!me(i))return a?!1:(r.value=i,!0)}const s=M(t)&&Ki(n)?Number(n)<t.length:H(t,n),c=Reflect.set(t,n,i,o);return t===U(o)&&(s?it(i,r)&&Fe(t,"set",n,i):Fe(t,"add",n,i)),c}deleteProperty(t,n){const i=H(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&i&&Fe(t,"delete",n,void 0),o}has(t,n){const i=Reflect.has(t,n);return(!jt(n)||!os.has(n))&&ge(t,"has",n),i}ownKeys(t){return ge(t,"iterate",M(t)?"length":ht),Reflect.ownKeys(t)}}class ac extends rs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const cc=new ss,lc=new ac,uc=new ss(!0),Xi=e=>e,Mn=e=>Reflect.getPrototypeOf(e);function dn(e,t,n=!1,i=!1){e=e.__v_raw;const o=U(e),r=U(t);n||(it(t,r)&&ge(o,"get",t),ge(o,"get",r));const{has:s}=Mn(o),c=i?Xi:n?no:Xt;if(s.call(o,t))return c(e.get(t));if(s.call(o,r))return c(e.get(r));e!==o&&e.get(t)}function hn(e,t=!1){const n=this.__v_raw,i=U(n),o=U(e);return t||(it(e,o)&&ge(i,"has",e),ge(i,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function pn(e,t=!1){return e=e.__v_raw,!t&&ge(U(e),"iterate",ht),Reflect.get(e,"size",e)}function Do(e){e=U(e);const t=U(this);return Mn(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function xo(e,t){t=U(t);const n=U(this),{has:i,get:o}=Mn(n);let r=i.call(n,e);r||(e=U(e),r=i.call(n,e));const s=o.call(n,e);return n.set(e,t),r?it(t,s)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function No(e){const t=U(this),{has:n,get:i}=Mn(t);let o=n.call(t,e);o||(e=U(e),o=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return o&&Fe(t,"delete",e,void 0),r}function ko(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function gn(e,t){return function(i,o){const r=this,s=r.__v_raw,c=U(s),a=t?Xi:e?no:Xt;return!e&&ge(c,"iterate",ht),s.forEach((f,u)=>i.call(o,a(f),a(u),r))}}function mn(e,t,n){return function(...i){const o=this.__v_raw,r=U(o),s=Pt(r),c=e==="entries"||e===Symbol.iterator&&s,a=e==="keys"&&s,f=o[e](...i),u=n?Xi:t?no:Xt;return!t&&ge(r,"iterate",a?Ei:ht),{next(){const{value:h,done:p}=f.next();return p?{value:h,done:p}:{value:c?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Ge(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function fc(){const e={get(r){return dn(this,r)},get size(){return pn(this)},has:hn,add:Do,set:xo,delete:No,clear:ko,forEach:gn(!1,!1)},t={get(r){return dn(this,r,!1,!0)},get size(){return pn(this)},has:hn,add:Do,set:xo,delete:No,clear:ko,forEach:gn(!1,!0)},n={get(r){return dn(this,r,!0)},get size(){return pn(this,!0)},has(r){return hn.call(this,r,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:gn(!0,!1)},i={get(r){return dn(this,r,!0,!0)},get size(){return pn(this,!0)},has(r){return hn.call(this,r,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=mn(r,!1,!1),n[r]=mn(r,!0,!1),t[r]=mn(r,!1,!0),i[r]=mn(r,!0,!0)}),[e,n,t,i]}const[dc,hc,pc,gc]=fc();function Zi(e,t){const n=t?e?gc:pc:e?hc:dc;return(i,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(H(n,o)&&o in i?n:i,o,r)}const mc={get:Zi(!1,!1)},bc={get:Zi(!1,!0)},vc={get:Zi(!0,!1)},as=new WeakMap,cs=new WeakMap,ls=new WeakMap,_c=new WeakMap;function yc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wc(e){return e.__v_skip||!Object.isExtensible(e)?0:yc(qa(e))}function Ln(e){return kt(e)?e:eo(e,!1,cc,mc,as)}function us(e){return eo(e,!1,uc,bc,cs)}function fs(e){return eo(e,!0,lc,vc,ls)}function eo(e,t,n,i,o){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const s=wc(e);if(s===0)return e;const c=new Proxy(e,s===2?i:n);return o.set(e,c),c}function Ot(e){return kt(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function kt(e){return!!(e&&e.__v_isReadonly)}function An(e){return!!(e&&e.__v_isShallow)}function ds(e){return Ot(e)||kt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function to(e){return Object.isExtensible(e)&&Cn(e,"__v_skip",!0),e}const Xt=e=>ee(e)?Ln(e):e,no=e=>ee(e)?fs(e):e;class hs{constructor(t,n,i,o){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Qi(()=>t(this._value),()=>vn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=i}get value(){const t=U(this);return(!t._cacheable||t.effect.dirty)&&it(t._value,t._value=t.effect.run())&&vn(t,4),ps(t),t.effect._dirtyLevel>=2&&vn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ec(e,t,n=!1){let i,o;const r=B(e);return r?(i=e,o=we):(i=e.get,o=e.set),new hs(i,o,r||!o,n)}function ps(e){var t;et&&dt&&(e=U(e),ts(dt,(t=e.dep)!=null?t:e.dep=is(()=>e.dep=void 0,e instanceof hs?e:void 0)))}function vn(e,t=4,n){e=U(e);const i=e.dep;i&&ns(i,t)}function me(e){return!!(e&&e.__v_isRef===!0)}function gs(e){return ms(e,!1)}function Sc(e){return ms(e,!0)}function ms(e,t){return me(e)?e:new Ic(e,t)}class Ic{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Xt(t)}get value(){return ps(this),this._value}set value(t){const n=this.__v_isShallow||An(t)||kt(t);t=n?t:U(t),it(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Xt(t),vn(this,4))}}function ye(e){return me(e)?e.value:e}const Cc={get:(e,t,n)=>ye(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return me(o)&&!me(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function bs(e){return Ot(e)?e:new Proxy(e,Cc)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tt(e,t,n,i){try{return i?e(...i):e()}catch(o){$n(o,t,n)}}function Ae(e,t,n,i){if(B(e)){const r=tt(e,t,n,i);return r&&Vr(r)&&r.catch(s=>{$n(s,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(Ae(e[r],t,n,i));return o}function $n(e,t,n,i=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const s=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const f=r.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,s,c)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){tt(a,null,10,[e,s,c]);return}}Ac(e,n,o,i)}function Ac(e,t,n,i=!0){console.error(e)}let Zt=!1,Si=!1;const ae=[];let Ne=0;const Rt=[];let Je=null,ut=0;const vs=Promise.resolve();let io=null;function _s(e){const t=io||vs;return e?t.then(this?e.bind(this):e):t}function Tc(e){let t=Ne+1,n=ae.length;for(;t<n;){const i=t+n>>>1,o=ae[i],r=en(o);r<e||r===e&&o.pre?t=i+1:n=i}return t}function oo(e){(!ae.length||!ae.includes(e,Zt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?ae.push(e):ae.splice(Tc(e.id),0,e),ys())}function ys(){!Zt&&!Si&&(Si=!0,io=vs.then(Es))}function zc(e){const t=ae.indexOf(e);t>Ne&&ae.splice(t,1)}function Pc(e){M(e)?Rt.push(...e):(!Je||!Je.includes(e,e.allowRecurse?ut+1:ut))&&Rt.push(e),ys()}function Mo(e,t,n=Zt?Ne+1:0){for(;n<ae.length;n++){const i=ae[n];if(i&&i.pre){if(e&&i.id!==e.uid)continue;ae.splice(n,1),n--,i()}}}function ws(e){if(Rt.length){const t=[...new Set(Rt)].sort((n,i)=>en(n)-en(i));if(Rt.length=0,Je){Je.push(...t);return}for(Je=t,ut=0;ut<Je.length;ut++)Je[ut]();Je=null,ut=0}}const en=e=>e.id==null?1/0:e.id,Oc=(e,t)=>{const n=en(e)-en(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Es(e){Si=!1,Zt=!0,ae.sort(Oc);try{for(Ne=0;Ne<ae.length;Ne++){const t=ae[Ne];t&&t.active!==!1&&tt(t,null,14)}}finally{Ne=0,ae.length=0,ws(),Zt=!1,io=null,(ae.length||Rt.length)&&Es()}}function Rc(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||Z;let o=n;const r=t.startsWith("update:"),s=r&&t.slice(7);if(s&&s in i){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:h,trim:p}=i[u]||Z;p&&(o=n.map(_=>oe(_)?_.trim():_)),h&&(o=n.map(Wa))}let c,a=i[c=Yn(t)]||i[c=Yn(Nt(t))];!a&&r&&(a=i[c=Yn(Bt(t))]),a&&Ae(a,e,6,o);const f=i[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ae(f,e,6,o)}}function Ss(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(o!==void 0)return o;const r=e.emits;let s={},c=!1;if(!B(e)){const a=f=>{const u=Ss(f,t,!0);u&&(c=!0,re(s,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!c?(ee(e)&&i.set(e,null),null):(M(r)?r.forEach(a=>s[a]=null):re(s,r),ee(e)&&i.set(e,s),s)}function jn(e,t){return!e||!xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Bt(t))||H(e,t))}let ke=null,Bn=null;function Tn(e){const t=ke;return ke=e,Bn=e&&e.type.__scopeId||null,t}function Dc(e){Bn=e}function xc(){Bn=null}function Nc(e,t=ke,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&Ko(-1);const r=Tn(t);let s;try{s=e(...o)}finally{Tn(r),i._d&&Ko(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function ei(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:r,propsOptions:[s],slots:c,attrs:a,emit:f,render:u,renderCache:h,data:p,setupState:_,ctx:z,inheritAttrs:x}=e;let L,O;const N=Tn(e);try{if(n.shapeFlag&4){const q=o||i,te=q;L=xe(u.call(te,q,h,r,_,p,z)),O=a}else{const q=t;L=xe(q.length>1?q(r,{attrs:a,slots:c,emit:f}):q(r,null)),O=t.props?a:kc(a)}}catch(q){Qt.length=0,$n(q,e,1),L=pe(pt)}let $=L;if(O&&x!==!1){const q=Object.keys(O),{shapeFlag:te}=$;q.length&&te&7&&(s&&q.some(qi)&&(O=Mc(O,s)),$=Mt($,O))}return n.dirs&&($=Mt($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),L=$,Tn(N),L}const kc=e=>{let t;for(const n in e)(n==="class"||n==="style"||xn(n))&&((t||(t={}))[n]=e[n]);return t},Mc=(e,t)=>{const n={};for(const i in e)(!qi(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Lc(e,t,n){const{props:i,children:o,component:r}=e,{props:s,children:c,patchFlag:a}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?Lo(i,s,f):!!s;if(a&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(s[p]!==i[p]&&!jn(f,p))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:i===s?!1:i?s?Lo(i,s,f):!0:!!s;return!1}function Lo(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const r=i[o];if(t[r]!==e[r]&&!jn(n,r))return!0}return!1}function $c({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const jc=Symbol.for("v-ndc"),Bc=e=>e.__isSuspense;function Fc(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Pc(e)}const Hc=Symbol.for("v-scx"),Uc=()=>He(Hc),bn={};function _n(e,t,n){return Is(e,t,n)}function Is(e,t,{immediate:n,deep:i,flush:o,once:r,onTrack:s,onTrigger:c}=Z){if(t&&r){const j=t;t=(...ce)=>{j(...ce),te()}}const a=ue,f=j=>i===!0?j:Tt(j,i===!1?1:void 0);let u,h=!1,p=!1;if(me(e)?(u=()=>e.value,h=An(e)):Ot(e)?(u=()=>f(e),h=!0):M(e)?(p=!0,h=e.some(j=>Ot(j)||An(j)),u=()=>e.map(j=>{if(me(j))return j.value;if(Ot(j))return f(j);if(B(j))return tt(j,a,2)})):B(e)?t?u=()=>tt(e,a,2):u=()=>(_&&_(),Ae(e,a,3,[z])):u=we,t&&i){const j=u;u=()=>Tt(j())}let _,z=j=>{_=$.onStop=()=>{tt(j,a,4),_=$.onStop=void 0}},x;if(qn)if(z=we,t?n&&Ae(t,a,3,[u(),p?[]:void 0,z]):u(),o==="sync"){const j=Uc();x=j.__watcherHandles||(j.__watcherHandles=[])}else return we;let L=p?new Array(e.length).fill(bn):bn;const O=()=>{if(!(!$.active||!$.dirty))if(t){const j=$.run();(i||h||(p?j.some((ce,ve)=>it(ce,L[ve])):it(j,L)))&&(_&&_(),Ae(t,a,3,[j,L===bn?void 0:p&&L[0]===bn?[]:L,z]),L=j)}else $.run()};O.allowRecurse=!!t;let N;o==="sync"?N=O:o==="post"?N=()=>he(O,a&&a.suspense):(O.pre=!0,a&&(O.id=a.uid),N=()=>oo(O));const $=new Qi(u,we,N),q=nc(),te=()=>{$.stop(),q&&Vi(q.effects,$)};return t?n?O():L=$.run():o==="post"?he($.run.bind($),a&&a.suspense):$.run(),x&&x.push(te),te}function qc(e,t,n){const i=this.proxy,o=oe(e)?e.includes(".")?Cs(i,e):()=>i[e]:e.bind(i,i);let r;B(t)?r=t:(r=t.handler,n=t);const s=cn(this),c=Is(o,r.bind(i),n);return s(),c}function Cs(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}function Tt(e,t,n=0,i){if(!ee(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(i=i||new Set,i.has(e))return e;if(i.add(e),me(e))Tt(e.value,t,n,i);else if(M(e))for(let o=0;o<e.length;o++)Tt(e[o],t,n,i);else if(qr(e)||Pt(e))e.forEach(o=>{Tt(o,t,n,i)});else if(Wr(e))for(const o in e)Tt(e[o],t,n,i);return e}function at(e,t,n,i){const o=e.dirs,r=t&&t.dirs;for(let s=0;s<o.length;s++){const c=o[s];r&&(c.oldValue=r[s].value);let a=c.dir[i];a&&(_t(),Ae(a,n,8,[e.el,c,e,t]),yt())}}/*! #__NO_SIDE_EFFECTS__ */function an(e,t){return B(e)?re({name:e.name},t,{setup:e}):e}const yn=e=>!!e.type.__asyncLoader,As=e=>e.type.__isKeepAlive;function Vc(e,t){Ts(e,"a",t)}function Kc(e,t){Ts(e,"da",t)}function Ts(e,t,n=ue){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Fn(t,i,n),n){let o=n.parent;for(;o&&o.parent;)As(o.parent.vnode)&&Wc(i,t,n,o),o=o.parent}}function Wc(e,t,n,i){const o=Fn(t,e,i,!0);zs(()=>{Vi(i[t],o)},n)}function Fn(e,t,n=ue,i=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;_t();const c=cn(n),a=Ae(t,n,e,s);return c(),yt(),a});return i?o.unshift(r):o.push(r),r}}const Ve=e=>(t,n=ue)=>(!qn||e==="sp")&&Fn(e,(...i)=>t(...i),n),Gc=Ve("bm"),Qc=Ve("m"),Jc=Ve("bu"),Yc=Ve("u"),Xc=Ve("bum"),zs=Ve("um"),Zc=Ve("sp"),el=Ve("rtg"),tl=Ve("rtc");function nl(e,t=ue){Fn("ec",e,t)}const Ii=e=>e?Fs(e)?co(e)||e.proxy:Ii(e.parent):null,Wt=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ii(e.parent),$root:e=>Ii(e.root),$emit:e=>e.emit,$options:e=>ro(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,oo(e.update)}),$nextTick:e=>e.n||(e.n=_s.bind(e.proxy)),$watch:e=>qc.bind(e)}),ti=(e,t)=>e!==Z&&!e.__isScriptSetup&&H(e,t),il={get({_:e},t){const{ctx:n,setupState:i,data:o,props:r,accessCache:s,type:c,appContext:a}=e;let f;if(t[0]!=="$"){const _=s[t];if(_!==void 0)switch(_){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(ti(i,t))return s[t]=1,i[t];if(o!==Z&&H(o,t))return s[t]=2,o[t];if((f=e.propsOptions[0])&&H(f,t))return s[t]=3,r[t];if(n!==Z&&H(n,t))return s[t]=4,n[t];Ci&&(s[t]=0)}}const u=Wt[t];let h,p;if(u)return t==="$attrs"&&ge(e,"get",t),u(e);if((h=c.__cssModules)&&(h=h[t]))return h;if(n!==Z&&H(n,t))return s[t]=4,n[t];if(p=a.config.globalProperties,H(p,t))return p[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:r}=e;return ti(o,t)?(o[t]=n,!0):i!==Z&&H(i,t)?(i[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:r}},s){let c;return!!n[s]||e!==Z&&H(e,s)||ti(t,s)||(c=r[0])&&H(c,s)||H(i,s)||H(Wt,s)||H(o.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $o(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ci=!0;function ol(e){const t=ro(e),n=e.proxy,i=e.ctx;Ci=!1,t.beforeCreate&&jo(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:s,watch:c,provide:a,inject:f,created:u,beforeMount:h,mounted:p,beforeUpdate:_,updated:z,activated:x,deactivated:L,beforeDestroy:O,beforeUnmount:N,destroyed:$,unmounted:q,render:te,renderTracked:j,renderTriggered:ce,errorCaptured:ve,serverPrefetch:rt,expose:ze,inheritAttrs:Ke,components:st,directives:Pe,filters:Ft}=t;if(f&&rl(f,i,null),s)for(const G in s){const V=s[G];B(V)&&(i[G]=V.bind(n))}if(o){const G=o.call(n,n);ee(G)&&(e.data=Ln(G))}if(Ci=!0,r)for(const G in r){const V=r[G],Le=B(V)?V.bind(n,n):B(V.get)?V.get.bind(n,n):we,We=!B(V)&&B(V.set)?V.set.bind(n):we,Oe=Ie({get:Le,set:We});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:de=>Oe.value=de})}if(c)for(const G in c)Ps(c[G],i,n,G);if(a){const G=B(a)?a.call(n):a;Reflect.ownKeys(G).forEach(V=>{wn(V,G[V])})}u&&jo(u,e,"c");function ne(G,V){M(V)?V.forEach(Le=>G(Le.bind(n))):V&&G(V.bind(n))}if(ne(Gc,h),ne(Qc,p),ne(Jc,_),ne(Yc,z),ne(Vc,x),ne(Kc,L),ne(nl,ve),ne(tl,j),ne(el,ce),ne(Xc,N),ne(zs,q),ne(Zc,rt),M(ze))if(ze.length){const G=e.exposed||(e.exposed={});ze.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:Le=>n[V]=Le})})}else e.exposed||(e.exposed={});te&&e.render===we&&(e.render=te),Ke!=null&&(e.inheritAttrs=Ke),st&&(e.components=st),Pe&&(e.directives=Pe)}function rl(e,t,n=we){M(e)&&(e=Ai(e));for(const i in e){const o=e[i];let r;ee(o)?"default"in o?r=He(o.from||i,o.default,!0):r=He(o.from||i):r=He(o),me(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):t[i]=r}}function jo(e,t,n){Ae(M(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ps(e,t,n,i){const o=i.includes(".")?Cs(n,i):()=>n[i];if(oe(e)){const r=t[e];B(r)&&_n(o,r)}else if(B(e))_n(o,e.bind(n));else if(ee(e))if(M(e))e.forEach(r=>Ps(r,t,n,i));else{const r=B(e.handler)?e.handler.bind(n):t[e.handler];B(r)&&_n(o,r,e)}}function ro(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:s}}=e.appContext,c=r.get(t);let a;return c?a=c:!o.length&&!n&&!i?a=t:(a={},o.length&&o.forEach(f=>zn(a,f,s,!0)),zn(a,t,s)),ee(t)&&r.set(t,a),a}function zn(e,t,n,i=!1){const{mixins:o,extends:r}=t;r&&zn(e,r,n,!0),o&&o.forEach(s=>zn(e,s,n,!0));for(const s in t)if(!(i&&s==="expose")){const c=sl[s]||n&&n[s];e[s]=c?c(e[s],t[s]):t[s]}return e}const sl={data:Bo,props:Fo,emits:Fo,methods:Vt,computed:Vt,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:Vt,directives:Vt,watch:cl,provide:Bo,inject:al};function Bo(e,t){return t?e?function(){return re(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function al(e,t){return Vt(Ai(e),Ai(t))}function Ai(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function Vt(e,t){return e?re(Object.create(null),e,t):t}function Fo(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:re(Object.create(null),$o(e),$o(t??{})):t}function cl(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const i in t)n[i]=le(e[i],t[i]);return n}function Os(){return{app:null,config:{isNativeTag:Ha,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ll=0;function ul(e,t){return function(i,o=null){B(i)||(i=re({},i)),o!=null&&!ee(o)&&(o=null);const r=Os(),s=new WeakSet;let c=!1;const a=r.app={_uid:ll++,_component:i,_props:o,_container:null,_context:r,_instance:null,version:Nl,get config(){return r.config},set config(f){},use(f,...u){return s.has(f)||(f&&B(f.install)?(s.add(f),f.install(a,...u)):B(f)&&(s.add(f),f(a,...u))),a},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),a},component(f,u){return u?(r.components[f]=u,a):r.components[f]},directive(f,u){return u?(r.directives[f]=u,a):r.directives[f]},mount(f,u,h){if(!c){const p=pe(i,o);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(p,f):e(p,f,h),c=!0,a._container=f,f.__vue_app__=a,co(p.component)||p.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(f,u){return r.provides[f]=u,a},runWithContext(f){const u=Gt;Gt=a;try{return f()}finally{Gt=u}}};return a}}let Gt=null;function wn(e,t){if(ue){let n=ue.provides;const i=ue.parent&&ue.parent.provides;i===n&&(n=ue.provides=Object.create(i)),n[e]=t}}function He(e,t,n=!1){const i=ue||ke;if(i||Gt){const o=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Gt._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&B(t)?t.call(i&&i.proxy):t}}function fl(e,t,n,i=!1){const o={},r={};Cn(r,Un,1),e.propsDefaults=Object.create(null),Rs(e,t,o,r);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);n?e.props=i?o:us(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function dl(e,t,n,i){const{props:o,attrs:r,vnode:{patchFlag:s}}=e,c=U(o),[a]=e.propsOptions;let f=!1;if((i||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(jn(e.emitsOptions,p))continue;const _=t[p];if(a)if(H(r,p))_!==r[p]&&(r[p]=_,f=!0);else{const z=Nt(p);o[z]=Ti(a,c,z,_,e,!1)}else _!==r[p]&&(r[p]=_,f=!0)}}}else{Rs(e,t,o,r)&&(f=!0);let u;for(const h in c)(!t||!H(t,h)&&((u=Bt(h))===h||!H(t,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(o[h]=Ti(a,c,h,void 0,e,!0)):delete o[h]);if(r!==c)for(const h in r)(!t||!H(t,h))&&(delete r[h],f=!0)}f&&Fe(e,"set","$attrs")}function Rs(e,t,n,i){const[o,r]=e.propsOptions;let s=!1,c;if(t)for(let a in t){if(Kt(a))continue;const f=t[a];let u;o&&H(o,u=Nt(a))?!r||!r.includes(u)?n[u]=f:(c||(c={}))[u]=f:jn(e.emitsOptions,a)||(!(a in i)||f!==i[a])&&(i[a]=f,s=!0)}if(r){const a=U(n),f=c||Z;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ti(o,a,h,f[h],e,!H(f,h))}}return s}function Ti(e,t,n,i,o,r){const s=e[n];if(s!=null){const c=H(s,"default");if(c&&i===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&B(a)){const{propsDefaults:f}=o;if(n in f)i=f[n];else{const u=cn(o);i=f[n]=a.call(null,t),u()}}else i=a}s[0]&&(r&&!c?i=!1:s[1]&&(i===""||i===Bt(n))&&(i=!0))}return i}function Ds(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const r=e.props,s={},c=[];let a=!1;if(!B(e)){const u=h=>{a=!0;const[p,_]=Ds(h,t,!0);re(s,p),_&&c.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!a)return ee(e)&&i.set(e,zt),zt;if(M(r))for(let u=0;u<r.length;u++){const h=Nt(r[u]);Ho(h)&&(s[h]=Z)}else if(r)for(const u in r){const h=Nt(u);if(Ho(h)){const p=r[u],_=s[h]=M(p)||B(p)?{type:p}:re({},p);if(_){const z=Vo(Boolean,_.type),x=Vo(String,_.type);_[0]=z>-1,_[1]=x<0||z<x,(z>-1||H(_,"default"))&&c.push(h)}}}const f=[s,c];return ee(e)&&i.set(e,f),f}function Ho(e){return e[0]!=="$"&&!Kt(e)}function Uo(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function qo(e,t){return Uo(e)===Uo(t)}function Vo(e,t){return M(t)?t.findIndex(n=>qo(n,e)):B(t)&&qo(t,e)?0:-1}const xs=e=>e[0]==="_"||e==="$stable",so=e=>M(e)?e.map(xe):[xe(e)],hl=(e,t,n)=>{if(t._n)return t;const i=Nc((...o)=>so(t(...o)),n);return i._c=!1,i},Ns=(e,t,n)=>{const i=e._ctx;for(const o in e){if(xs(o))continue;const r=e[o];if(B(r))t[o]=hl(o,r,i);else if(r!=null){const s=so(r);t[o]=()=>s}}},ks=(e,t)=>{const n=so(t);e.slots.default=()=>n},pl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Cn(t,"_",n)):Ns(t,e.slots={})}else e.slots={},t&&ks(e,t);Cn(e.slots,Un,1)},gl=(e,t,n)=>{const{vnode:i,slots:o}=e;let r=!0,s=Z;if(i.shapeFlag&32){const c=t._;c?n&&c===1?r=!1:(re(o,t),!n&&c===1&&delete o._):(r=!t.$stable,Ns(t,o)),s=t}else t&&(ks(e,t),s={default:1});if(r)for(const c in o)!xs(c)&&s[c]==null&&delete o[c]};function zi(e,t,n,i,o=!1){if(M(e)){e.forEach((p,_)=>zi(p,t&&(M(t)?t[_]:t),n,i,o));return}if(yn(i)&&!o)return;const r=i.shapeFlag&4?co(i.component)||i.component.proxy:i.el,s=o?null:r,{i:c,r:a}=e,f=t&&t.r,u=c.refs===Z?c.refs={}:c.refs,h=c.setupState;if(f!=null&&f!==a&&(oe(f)?(u[f]=null,H(h,f)&&(h[f]=null)):me(f)&&(f.value=null)),B(a))tt(a,c,12,[s,u]);else{const p=oe(a),_=me(a);if(p||_){const z=()=>{if(e.f){const x=p?H(h,a)?h[a]:u[a]:a.value;o?M(x)&&Vi(x,r):M(x)?x.includes(r)||x.push(r):p?(u[a]=[r],H(h,a)&&(h[a]=u[a])):(a.value=[r],e.k&&(u[e.k]=a.value))}else p?(u[a]=s,H(h,a)&&(h[a]=s)):_&&(a.value=s,e.k&&(u[e.k]=s))};s?(z.id=-1,he(z,n)):z()}}}const he=Fc;function ml(e){return bl(e)}function bl(e,t){const n=Qr();n.__VUE__=!0;const{insert:i,remove:o,patchProp:r,createElement:s,createText:c,createComment:a,setText:f,setElementText:u,parentNode:h,nextSibling:p,setScopeId:_=we,insertStaticContent:z}=e,x=(l,d,g,v=null,m=null,E=null,C=void 0,w=null,S=!!d.dynamicChildren)=>{if(l===d)return;l&&!Ut(l,d)&&(v=b(l),de(l,m,E,!0),l=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:y,ref:T,shapeFlag:D}=d;switch(y){case Hn:L(l,d,g,v);break;case pt:O(l,d,g,v);break;case ii:l==null&&N(d,g,v,C);break;case Be:st(l,d,g,v,m,E,C,w,S);break;default:D&1?te(l,d,g,v,m,E,C,w,S):D&6?Pe(l,d,g,v,m,E,C,w,S):(D&64||D&128)&&y.process(l,d,g,v,m,E,C,w,S,P)}T!=null&&m&&zi(T,l&&l.ref,E,d||l,!d)},L=(l,d,g,v)=>{if(l==null)i(d.el=c(d.children),g,v);else{const m=d.el=l.el;d.children!==l.children&&f(m,d.children)}},O=(l,d,g,v)=>{l==null?i(d.el=a(d.children||""),g,v):d.el=l.el},N=(l,d,g,v)=>{[l.el,l.anchor]=z(l.children,d,g,v,l.el,l.anchor)},$=({el:l,anchor:d},g,v)=>{let m;for(;l&&l!==d;)m=p(l),i(l,g,v),l=m;i(d,g,v)},q=({el:l,anchor:d})=>{let g;for(;l&&l!==d;)g=p(l),o(l),l=g;o(d)},te=(l,d,g,v,m,E,C,w,S)=>{d.type==="svg"?C="svg":d.type==="math"&&(C="mathml"),l==null?j(d,g,v,m,E,C,w,S):rt(l,d,m,E,C,w,S)},j=(l,d,g,v,m,E,C,w)=>{let S,y;const{props:T,shapeFlag:D,transition:R,dirs:k}=l;if(S=l.el=s(l.type,E,T&&T.is,T),D&8?u(S,l.children):D&16&&ve(l.children,S,null,v,m,ni(l,E),C,w),k&&at(l,null,v,"created"),ce(S,l,l.scopeId,C,v),T){for(const Q in T)Q!=="value"&&!Kt(Q)&&r(S,Q,null,T[Q],E,l.children,v,m,se);"value"in T&&r(S,"value",null,T.value,E),(y=T.onVnodeBeforeMount)&&De(y,v,l)}k&&at(l,null,v,"beforeMount");const F=vl(m,R);F&&R.beforeEnter(S),i(S,d,g),((y=T&&T.onVnodeMounted)||F||k)&&he(()=>{y&&De(y,v,l),F&&R.enter(S),k&&at(l,null,v,"mounted")},m)},ce=(l,d,g,v,m)=>{if(g&&_(l,g),v)for(let E=0;E<v.length;E++)_(l,v[E]);if(m){let E=m.subTree;if(d===E){const C=m.vnode;ce(l,C,C.scopeId,C.slotScopeIds,m.parent)}}},ve=(l,d,g,v,m,E,C,w,S=0)=>{for(let y=S;y<l.length;y++){const T=l[y]=w?Ye(l[y]):xe(l[y]);x(null,T,d,g,v,m,E,C,w)}},rt=(l,d,g,v,m,E,C)=>{const w=d.el=l.el;let{patchFlag:S,dynamicChildren:y,dirs:T}=d;S|=l.patchFlag&16;const D=l.props||Z,R=d.props||Z;let k;if(g&&ct(g,!1),(k=R.onVnodeBeforeUpdate)&&De(k,g,d,l),T&&at(d,l,g,"beforeUpdate"),g&&ct(g,!0),y?ze(l.dynamicChildren,y,w,g,v,ni(d,m),E):C||V(l,d,w,null,g,v,ni(d,m),E,!1),S>0){if(S&16)Ke(w,d,D,R,g,v,m);else if(S&2&&D.class!==R.class&&r(w,"class",null,R.class,m),S&4&&r(w,"style",D.style,R.style,m),S&8){const F=d.dynamicProps;for(let Q=0;Q<F.length;Q++){const X=F[Q],ie=D[X],Ee=R[X];(Ee!==ie||X==="value")&&r(w,X,ie,Ee,m,l.children,g,v,se)}}S&1&&l.children!==d.children&&u(w,d.children)}else!C&&y==null&&Ke(w,d,D,R,g,v,m);((k=R.onVnodeUpdated)||T)&&he(()=>{k&&De(k,g,d,l),T&&at(d,l,g,"updated")},v)},ze=(l,d,g,v,m,E,C)=>{for(let w=0;w<d.length;w++){const S=l[w],y=d[w],T=S.el&&(S.type===Be||!Ut(S,y)||S.shapeFlag&70)?h(S.el):g;x(S,y,T,null,v,m,E,C,!0)}},Ke=(l,d,g,v,m,E,C)=>{if(g!==v){if(g!==Z)for(const w in g)!Kt(w)&&!(w in v)&&r(l,w,g[w],null,C,d.children,m,E,se);for(const w in v){if(Kt(w))continue;const S=v[w],y=g[w];S!==y&&w!=="value"&&r(l,w,y,S,C,d.children,m,E,se)}"value"in v&&r(l,"value",g.value,v.value,C)}},st=(l,d,g,v,m,E,C,w,S)=>{const y=d.el=l?l.el:c(""),T=d.anchor=l?l.anchor:c("");let{patchFlag:D,dynamicChildren:R,slotScopeIds:k}=d;k&&(w=w?w.concat(k):k),l==null?(i(y,g,v),i(T,g,v),ve(d.children||[],g,T,m,E,C,w,S)):D>0&&D&64&&R&&l.dynamicChildren?(ze(l.dynamicChildren,R,g,m,E,C,w),(d.key!=null||m&&d===m.subTree)&&Ms(l,d,!0)):V(l,d,g,T,m,E,C,w,S)},Pe=(l,d,g,v,m,E,C,w,S)=>{d.slotScopeIds=w,l==null?d.shapeFlag&512?m.ctx.activate(d,g,v,C,S):Ft(d,g,v,m,E,C,S):Et(l,d,S)},Ft=(l,d,g,v,m,E,C)=>{const w=l.component=zl(l,v,m);if(As(l)&&(w.ctx.renderer=P),Pl(w),w.asyncDep){if(m&&m.registerDep(w,ne),!l.el){const S=w.subTree=pe(pt);O(null,S,d,g)}}else ne(w,l,d,g,m,E,C)},Et=(l,d,g)=>{const v=d.component=l.component;if(Lc(l,d,g))if(v.asyncDep&&!v.asyncResolved){G(v,d,g);return}else v.next=d,zc(v.update),v.effect.dirty=!0,v.update();else d.el=l.el,v.vnode=d},ne=(l,d,g,v,m,E,C)=>{const w=()=>{if(l.isMounted){let{next:T,bu:D,u:R,parent:k,vnode:F}=l;{const Ct=Ls(l);if(Ct){T&&(T.el=F.el,G(l,T,C)),Ct.asyncDep.then(()=>{l.isUnmounted||w()});return}}let Q=T,X;ct(l,!1),T?(T.el=F.el,G(l,T,C)):T=F,D&&Xn(D),(X=T.props&&T.props.onVnodeBeforeUpdate)&&De(X,k,T,F),ct(l,!0);const ie=ei(l),Ee=l.subTree;l.subTree=ie,x(Ee,ie,h(Ee.el),b(Ee),l,m,E),T.el=ie.el,Q===null&&$c(l,ie.el),R&&he(R,m),(X=T.props&&T.props.onVnodeUpdated)&&he(()=>De(X,k,T,F),m)}else{let T;const{el:D,props:R}=d,{bm:k,m:F,parent:Q}=l,X=yn(d);if(ct(l,!1),k&&Xn(k),!X&&(T=R&&R.onVnodeBeforeMount)&&De(T,Q,d),ct(l,!0),D&&Y){const ie=()=>{l.subTree=ei(l),Y(D,l.subTree,l,m,null)};X?d.type.__asyncLoader().then(()=>!l.isUnmounted&&ie()):ie()}else{const ie=l.subTree=ei(l);x(null,ie,g,v,l,m,E),d.el=ie.el}if(F&&he(F,m),!X&&(T=R&&R.onVnodeMounted)){const ie=d;he(()=>De(T,Q,ie),m)}(d.shapeFlag&256||Q&&yn(Q.vnode)&&Q.vnode.shapeFlag&256)&&l.a&&he(l.a,m),l.isMounted=!0,d=g=v=null}},S=l.effect=new Qi(w,we,()=>oo(y),l.scope),y=l.update=()=>{S.dirty&&S.run()};y.id=l.uid,ct(l,!0),y()},G=(l,d,g)=>{d.component=l;const v=l.vnode.props;l.vnode=d,l.next=null,dl(l,d.props,v,g),gl(l,d.children,g),_t(),Mo(l),yt()},V=(l,d,g,v,m,E,C,w,S=!1)=>{const y=l&&l.children,T=l?l.shapeFlag:0,D=d.children,{patchFlag:R,shapeFlag:k}=d;if(R>0){if(R&128){We(y,D,g,v,m,E,C,w,S);return}else if(R&256){Le(y,D,g,v,m,E,C,w,S);return}}k&8?(T&16&&se(y,m,E),D!==y&&u(g,D)):T&16?k&16?We(y,D,g,v,m,E,C,w,S):se(y,m,E,!0):(T&8&&u(g,""),k&16&&ve(D,g,v,m,E,C,w,S))},Le=(l,d,g,v,m,E,C,w,S)=>{l=l||zt,d=d||zt;const y=l.length,T=d.length,D=Math.min(y,T);let R;for(R=0;R<D;R++){const k=d[R]=S?Ye(d[R]):xe(d[R]);x(l[R],k,g,null,m,E,C,w,S)}y>T?se(l,m,E,!0,!1,D):ve(d,g,v,m,E,C,w,S,D)},We=(l,d,g,v,m,E,C,w,S)=>{let y=0;const T=d.length;let D=l.length-1,R=T-1;for(;y<=D&&y<=R;){const k=l[y],F=d[y]=S?Ye(d[y]):xe(d[y]);if(Ut(k,F))x(k,F,g,null,m,E,C,w,S);else break;y++}for(;y<=D&&y<=R;){const k=l[D],F=d[R]=S?Ye(d[R]):xe(d[R]);if(Ut(k,F))x(k,F,g,null,m,E,C,w,S);else break;D--,R--}if(y>D){if(y<=R){const k=R+1,F=k<T?d[k].el:v;for(;y<=R;)x(null,d[y]=S?Ye(d[y]):xe(d[y]),g,F,m,E,C,w,S),y++}}else if(y>R)for(;y<=D;)de(l[y],m,E,!0),y++;else{const k=y,F=y,Q=new Map;for(y=F;y<=R;y++){const be=d[y]=S?Ye(d[y]):xe(d[y]);be.key!=null&&Q.set(be.key,y)}let X,ie=0;const Ee=R-F+1;let Ct=!1,Co=0;const Ht=new Array(Ee);for(y=0;y<Ee;y++)Ht[y]=0;for(y=k;y<=D;y++){const be=l[y];if(ie>=Ee){de(be,m,E,!0);continue}let Re;if(be.key!=null)Re=Q.get(be.key);else for(X=F;X<=R;X++)if(Ht[X-F]===0&&Ut(be,d[X])){Re=X;break}Re===void 0?de(be,m,E,!0):(Ht[Re-F]=y+1,Re>=Co?Co=Re:Ct=!0,x(be,d[Re],g,null,m,E,C,w,S),ie++)}const Ao=Ct?_l(Ht):zt;for(X=Ao.length-1,y=Ee-1;y>=0;y--){const be=F+y,Re=d[be],To=be+1<T?d[be+1].el:v;Ht[y]===0?x(null,Re,g,To,m,E,C,w,S):Ct&&(X<0||y!==Ao[X]?Oe(Re,g,To,2):X--)}}},Oe=(l,d,g,v,m=null)=>{const{el:E,type:C,transition:w,children:S,shapeFlag:y}=l;if(y&6){Oe(l.component.subTree,d,g,v);return}if(y&128){l.suspense.move(d,g,v);return}if(y&64){C.move(l,d,g,P);return}if(C===Be){i(E,d,g);for(let D=0;D<S.length;D++)Oe(S[D],d,g,v);i(l.anchor,d,g);return}if(C===ii){$(l,d,g);return}if(v!==2&&y&1&&w)if(v===0)w.beforeEnter(E),i(E,d,g),he(()=>w.enter(E),m);else{const{leave:D,delayLeave:R,afterLeave:k}=w,F=()=>i(E,d,g),Q=()=>{D(E,()=>{F(),k&&k()})};R?R(E,F,Q):Q()}else i(E,d,g)},de=(l,d,g,v=!1,m=!1)=>{const{type:E,props:C,ref:w,children:S,dynamicChildren:y,shapeFlag:T,patchFlag:D,dirs:R}=l;if(w!=null&&zi(w,null,g,l,!0),T&256){d.ctx.deactivate(l);return}const k=T&1&&R,F=!yn(l);let Q;if(F&&(Q=C&&C.onVnodeBeforeUnmount)&&De(Q,d,l),T&6)un(l.component,g,v);else{if(T&128){l.suspense.unmount(g,v);return}k&&at(l,null,d,"beforeUnmount"),T&64?l.type.remove(l,d,g,m,P,v):y&&(E!==Be||D>0&&D&64)?se(y,d,g,!1,!0):(E===Be&&D&384||!m&&T&16)&&se(S,d,g),v&&St(l)}(F&&(Q=C&&C.onVnodeUnmounted)||k)&&he(()=>{Q&&De(Q,d,l),k&&at(l,null,d,"unmounted")},g)},St=l=>{const{type:d,el:g,anchor:v,transition:m}=l;if(d===Be){It(g,v);return}if(d===ii){q(l);return}const E=()=>{o(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:C,delayLeave:w}=m,S=()=>C(g,E);w?w(l.el,E,S):S()}else E()},It=(l,d)=>{let g;for(;l!==d;)g=p(l),o(l),l=g;o(d)},un=(l,d,g)=>{const{bum:v,scope:m,update:E,subTree:C,um:w}=l;v&&Xn(v),m.stop(),E&&(E.active=!1,de(C,l,d,g)),w&&he(w,d),he(()=>{l.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},se=(l,d,g,v=!1,m=!1,E=0)=>{for(let C=E;C<l.length;C++)de(l[C],d,g,v,m)},b=l=>l.shapeFlag&6?b(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el);let A=!1;const I=(l,d,g)=>{l==null?d._vnode&&de(d._vnode,null,null,!0):x(d._vnode||null,l,d,null,null,null,g),A||(A=!0,Mo(),ws(),A=!1),d._vnode=l},P={p:x,um:de,m:Oe,r:St,mt:Ft,mc:ve,pc:V,pbc:ze,n:b,o:e};let K,Y;return t&&([K,Y]=t(P)),{render:I,hydrate:K,createApp:ul(I,K)}}function ni({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function vl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ms(e,t,n=!1){const i=e.children,o=t.children;if(M(i)&&M(o))for(let r=0;r<i.length;r++){const s=i[r];let c=o[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[r]=Ye(o[r]),c.el=s.el),n||Ms(s,c)),c.type===Hn&&(c.el=s.el)}}function _l(e){const t=e.slice(),n=[0];let i,o,r,s,c;const a=e.length;for(i=0;i<a;i++){const f=e[i];if(f!==0){if(o=n[n.length-1],e[o]<f){t[i]=o,n.push(i);continue}for(r=0,s=n.length-1;r<s;)c=r+s>>1,e[n[c]]<f?r=c+1:s=c;f<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,s=n[r-1];r-- >0;)n[r]=s,s=t[s];return n}function Ls(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ls(t)}const yl=e=>e.__isTeleport,Be=Symbol.for("v-fgt"),Hn=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),ii=Symbol.for("v-stc"),Qt=[];let Ce=null;function Dt(e=!1){Qt.push(Ce=e?null:[])}function wl(){Qt.pop(),Ce=Qt[Qt.length-1]||null}let tn=1;function Ko(e){tn+=e}function $s(e){return e.dynamicChildren=tn>0?Ce||zt:null,wl(),tn>0&&Ce&&Ce.push(e),e}function En(e,t,n,i,o,r){return $s(_e(e,t,n,i,o,r,!0))}function js(e,t,n,i,o){return $s(pe(e,t,n,i,o,!0))}function Pi(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const Un="__vInternal",Bs=({key:e})=>e??null,Sn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||me(e)||B(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function _e(e,t=null,n=null,i=0,o=null,r=e===Be?0:1,s=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bs(t),ref:t&&Sn(t),scopeId:Bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ke};return c?(ao(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),tn>0&&!s&&Ce&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ce.push(a),a}const pe=El;function El(e,t=null,n=null,i=0,o=null,r=!1){if((!e||e===jc)&&(e=pt),Pi(e)){const c=Mt(e,t,!0);return n&&ao(c,n),tn>0&&!r&&Ce&&(c.shapeFlag&6?Ce[Ce.indexOf(e)]=c:Ce.push(c)),c.patchFlag|=-2,c}if(xl(e)&&(e=e.__vccOpts),t){t=Sl(t);let{class:c,style:a}=t;c&&!oe(c)&&(t.class=Gi(c)),ee(a)&&(ds(a)&&!M(a)&&(a=re({},a)),t.style=Wi(a))}const s=oe(e)?1:Bc(e)?128:yl(e)?64:ee(e)?4:B(e)?2:0;return _e(e,t,n,i,o,s,r,!0)}function Sl(e){return e?ds(e)||Un in e?re({},e):e:null}function Mt(e,t,n=!1){const{props:i,ref:o,patchFlag:r,children:s}=e,c=t?Cl(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Bs(c),ref:t&&t.ref?n&&o?M(o)?o.concat(Sn(t)):[o,Sn(t)]:Sn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Il(e=" ",t=0){return pe(Hn,null,e,t)}function Wo(e="",t=!1){return t?(Dt(),js(pt,null,e)):pe(pt,null,e)}function xe(e){return e==null||typeof e=="boolean"?pe(pt):M(e)?pe(Be,null,e.slice()):typeof e=="object"?Ye(e):pe(Hn,null,String(e))}function Ye(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function ao(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),ao(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Un in t)?t._ctx=ke:o===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),i&64?(n=16,t=[Il(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cl(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=Gi([t.class,i.class]));else if(o==="style")t.style=Wi([t.style,i.style]);else if(xn(o)){const r=t[o],s=i[o];s&&r!==s&&!(M(r)&&r.includes(s))&&(t[o]=r?[].concat(r,s):s)}else o!==""&&(t[o]=i[o])}return t}function De(e,t,n,i=null){Ae(e,t,7,[n,i])}const Al=Os();let Tl=0;function zl(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||Al,r={uid:Tl++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ds(i,o),emitsOptions:Ss(i,o),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:i.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Rc.bind(null,r),e.ce&&e.ce(r),r}let ue=null,Pn,Oi;{const e=Qr(),t=(n,i)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(i),r=>{o.length>1?o.forEach(s=>s(r)):o[0](r)}};Pn=t("__VUE_INSTANCE_SETTERS__",n=>ue=n),Oi=t("__VUE_SSR_SETTERS__",n=>qn=n)}const cn=e=>{const t=ue;return Pn(e),e.scope.on(),()=>{e.scope.off(),Pn(t)}},Go=()=>{ue&&ue.scope.off(),Pn(null)};function Fs(e){return e.vnode.shapeFlag&4}let qn=!1;function Pl(e,t=!1){t&&Oi(t);const{props:n,children:i}=e.vnode,o=Fs(e);fl(e,n,o,t),pl(e,i);const r=o?Ol(e,t):void 0;return t&&Oi(!1),r}function Ol(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=to(new Proxy(e.ctx,il));const{setup:i}=n;if(i){const o=e.setupContext=i.length>1?Dl(e):null,r=cn(e);_t();const s=tt(i,e,0,[e.props,o]);if(yt(),r(),Vr(s)){if(s.then(Go,Go),t)return s.then(c=>{Qo(e,c,t)}).catch(c=>{$n(c,e,0)});e.asyncDep=s}else Qo(e,s,t)}else Hs(e,t)}function Qo(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=bs(t)),Hs(e,n)}let Jo;function Hs(e,t,n){const i=e.type;if(!e.render){if(!t&&Jo&&!i.render){const o=i.template||ro(e).template;if(o){const{isCustomElement:r,compilerOptions:s}=e.appContext.config,{delimiters:c,compilerOptions:a}=i,f=re(re({isCustomElement:r,delimiters:c},s),a);i.render=Jo(o,f)}}e.render=i.render||we}{const o=cn(e);_t();try{ol(e)}finally{yt(),o()}}}function Rl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}}))}function Dl(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Rl(e)},slots:e.slots,emit:e.emit,expose:t}}function co(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(bs(to(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wt)return Wt[n](e)},has(t,n){return n in t||n in Wt}}))}function xl(e){return B(e)&&"__vccOpts"in e}const Ie=(e,t)=>Ec(e,t,qn);function Us(e,t,n){const i=arguments.length;return i===2?ee(t)&&!M(t)?Pi(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Pi(n)&&(n=[n]),pe(e,t,n))}const Nl="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kl="http://www.w3.org/2000/svg",Ml="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,Yo=Xe&&Xe.createElement("template"),Ll={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t==="svg"?Xe.createElementNS(kl,e):t==="mathml"?Xe.createElementNS(Ml,e):Xe.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>Xe.createTextNode(e),createComment:e=>Xe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,r){const s=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Yo.innerHTML=i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e;const c=Yo.content;if(i==="svg"||i==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$l=Symbol("_vtc");function jl(e,t,n){const i=e[$l];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xo=Symbol("_vod"),Bl=Symbol("_vsh"),Fl=Symbol(""),Hl=/(^|;)\s*display\s*:/;function Ul(e,t,n){const i=e.style,o=oe(n);let r=!1;if(n&&!o){if(t)if(oe(t))for(const s of t.split(";")){const c=s.slice(0,s.indexOf(":")).trim();n[c]==null&&In(i,c,"")}else for(const s in t)n[s]==null&&In(i,s,"");for(const s in n)s==="display"&&(r=!0),In(i,s,n[s])}else if(o){if(t!==n){const s=i[Fl];s&&(n+=";"+s),i.cssText=n,r=Hl.test(n)}}else t&&e.removeAttribute("style");Xo in e&&(e[Xo]=r?i.display:"",e[Bl]&&(i.display="none"))}const Zo=/\s*!important$/;function In(e,t,n){if(M(n))n.forEach(i=>In(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=ql(e,t);Zo.test(n)?e.setProperty(Bt(i),n.replace(Zo,""),"important"):e[i]=n}}const er=["Webkit","Moz","ms"],oi={};function ql(e,t){const n=oi[t];if(n)return n;let i=Nt(t);if(i!=="filter"&&i in e)return oi[t]=i;i=Gr(i);for(let o=0;o<er.length;o++){const r=er[o]+i;if(r in e)return oi[t]=r}return t}const tr="http://www.w3.org/1999/xlink";function Vl(e,t,n,i,o){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(tr,t.slice(6,t.length)):e.setAttributeNS(tr,t,n);else{const r=Za(t);n==null||r&&!Jr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Kl(e,t,n,i,o,r,s){if(t==="innerHTML"||t==="textContent"){i&&s(i,o,r),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){const f=c==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(f!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Jr(n):n==null&&f==="string"?(n="",a=!0):f==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Wl(e,t,n,i){e.addEventListener(t,n,i)}function Gl(e,t,n,i){e.removeEventListener(t,n,i)}const nr=Symbol("_vei");function Ql(e,t,n,i,o=null){const r=e[nr]||(e[nr]={}),s=r[t];if(i&&s)s.value=i;else{const[c,a]=Jl(t);if(i){const f=r[t]=Zl(i,o);Wl(e,c,f,a)}else s&&(Gl(e,c,s,a),r[t]=void 0)}}const ir=/(?:Once|Passive|Capture)$/;function Jl(e){let t;if(ir.test(e)){t={};let i;for(;i=e.match(ir);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Bt(e.slice(2)),t]}let ri=0;const Yl=Promise.resolve(),Xl=()=>ri||(Yl.then(()=>ri=0),ri=Date.now());function Zl(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ae(eu(i,n.value),t,5,[i])};return n.value=e,n.attached=Xl(),n}function eu(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>o=>!o._stopped&&i&&i(o))}else return t}const or=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,tu=(e,t,n,i,o,r,s,c,a)=>{const f=o==="svg";t==="class"?jl(e,i,f):t==="style"?Ul(e,n,i):xn(t)?qi(t)||Ql(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nu(e,t,i,f))?Kl(e,t,i,r,s,c,a):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Vl(e,t,i,f))};function nu(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&or(t)&&B(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return or(t)&&oe(n)?!1:t in e}const iu=re({patchProp:tu},Ll);let rr;function ou(){return rr||(rr=ml(iu))}const ru=(...e)=>{const t=ou().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=au(i);if(!o)return;const r=t._component;!B(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,su(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function su(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function au(e){return oe(e)?document.querySelector(e):e}var cu=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const lu=Symbol();var sr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(sr||(sr={}));function uu(){const e=ec(!0),t=e.run(()=>gs({}));let n=[],i=[];const o=to({install(r){o._a=r,r.provide(lu,o),r.config.globalProperties.$pinia=o,i.forEach(s=>n.push(s)),i=[]},use(r){return!this._a&&!cu?i.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const At=typeof document<"u";function fu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const W=Object.assign;function si(e,t){const n={};for(const i in t){const o=t[i];n[i]=Te(o)?o.map(e):e(o)}return n}const Jt=()=>{},Te=Array.isArray,qs=/#/g,du=/&/g,hu=/\//g,pu=/=/g,gu=/\?/g,Vs=/\+/g,mu=/%5B/g,bu=/%5D/g,Ks=/%5E/g,vu=/%60/g,Ws=/%7B/g,_u=/%7C/g,Gs=/%7D/g,yu=/%20/g;function lo(e){return encodeURI(""+e).replace(_u,"|").replace(mu,"[").replace(bu,"]")}function wu(e){return lo(e).replace(Ws,"{").replace(Gs,"}").replace(Ks,"^")}function Ri(e){return lo(e).replace(Vs,"%2B").replace(yu,"+").replace(qs,"%23").replace(du,"%26").replace(vu,"`").replace(Ws,"{").replace(Gs,"}").replace(Ks,"^")}function Eu(e){return Ri(e).replace(pu,"%3D")}function Su(e){return lo(e).replace(qs,"%23").replace(gu,"%3F")}function Iu(e){return e==null?"":Su(e).replace(hu,"%2F")}function nn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Cu=/\/$/,Au=e=>e.replace(Cu,"");function ai(e,t,n="/"){let i,o={},r="",s="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(i=t.slice(0,a),r=t.slice(a+1,c>-1?c:t.length),o=e(r)),c>-1&&(i=i||t.slice(0,c),s=t.slice(c,t.length)),i=Ou(i??t,n),{fullPath:i+(r&&"?")+r+s,path:i,query:o,hash:nn(s)}}function Tu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ar(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function zu(e,t,n){const i=t.matched.length-1,o=n.matched.length-1;return i>-1&&i===o&&Lt(t.matched[i],n.matched[o])&&Qs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Lt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Pu(e[n],t[n]))return!1;return!0}function Pu(e,t){return Te(e)?cr(e,t):Te(t)?cr(t,e):e===t}function cr(e,t){return Te(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Ou(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),o=i[i.length-1];(o===".."||o===".")&&i.push("");let r=n.length-1,s,c;for(s=0;s<i.length;s++)if(c=i[s],c!==".")if(c==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s).join("/")}var on;(function(e){e.pop="pop",e.push="push"})(on||(on={}));var Yt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yt||(Yt={}));function Ru(e){if(!e)if(At){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Au(e)}const Du=/^[^#]+#/;function xu(e,t){return e.replace(Du,"#")+t}function Nu(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Vn=()=>({left:window.scrollX,top:window.scrollY});function ku(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Nu(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function lr(e,t){return(history.state?history.state.position-t:-1)+e}const Di=new Map;function Mu(e,t){Di.set(e,t)}function Lu(e){const t=Di.get(e);return Di.delete(e),t}let $u=()=>location.protocol+"//"+location.host;function Js(e,t){const{pathname:n,search:i,hash:o}=t,r=e.indexOf("#");if(r>-1){let c=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(c);return a[0]!=="/"&&(a="/"+a),ar(a,"")}return ar(n,e)+i+o}function ju(e,t,n,i){let o=[],r=[],s=null;const c=({state:p})=>{const _=Js(e,location),z=n.value,x=t.value;let L=0;if(p){if(n.value=_,t.value=p,s&&s===z){s=null;return}L=x?p.position-x.position:0}else i(_);o.forEach(O=>{O(n.value,z,{delta:L,type:on.pop,direction:L?L>0?Yt.forward:Yt.back:Yt.unknown})})};function a(){s=n.value}function f(p){o.push(p);const _=()=>{const z=o.indexOf(p);z>-1&&o.splice(z,1)};return r.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(W({},p.state,{scroll:Vn()}),"")}function h(){for(const p of r)p();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:f,destroy:h}}function ur(e,t,n,i=!1,o=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:o?Vn():null}}function Bu(e){const{history:t,location:n}=window,i={value:Js(e,n)},o={value:t.state};o.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,f,u){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+a:$u()+e+a;try{t[u?"replaceState":"pushState"](f,"",p),o.value=f}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function s(a,f){const u=W({},t.state,ur(o.value.back,a,o.value.forward,!0),f,{position:o.value.position});r(a,u,!0),i.value=a}function c(a,f){const u=W({},o.value,t.state,{forward:a,scroll:Vn()});r(u.current,u,!0);const h=W({},ur(i.value,a,null),{position:u.position+1},f);r(a,h,!1),i.value=a}return{location:i,state:o,push:c,replace:s}}function Fu(e){e=Ru(e);const t=Bu(e),n=ju(e,t.state,t.location,t.replace);function i(r,s=!0){s||n.pauseListeners(),history.go(r)}const o=W({location:"",base:e,go:i,createHref:xu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Hu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Fu(e)}function Uu(e){return typeof e=="string"||e&&typeof e=="object"}function Ys(e){return typeof e=="string"||typeof e=="symbol"}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xs=Symbol("");var fr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(fr||(fr={}));function $t(e,t){return W(new Error,{type:e,[Xs]:!0},t)}function $e(e,t){return e instanceof Error&&Xs in e&&(t==null||!!(e.type&t))}const dr="[^/]+?",qu={sensitive:!1,strict:!1,start:!0,end:!0},Vu=/[.+*?^${}()[\]/\\]/g;function Ku(e,t){const n=W({},qu,t),i=[];let o=n.start?"^":"";const r=[];for(const f of e){const u=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let h=0;h<f.length;h++){const p=f[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(o+="/"),o+=p.value.replace(Vu,"\\$&"),_+=40;else if(p.type===1){const{value:z,repeatable:x,optional:L,regexp:O}=p;r.push({name:z,repeatable:x,optional:L});const N=O||dr;if(N!==dr){_+=10;try{new RegExp(`(${N})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${z}" (${N}): `+q.message)}}let $=x?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||($=L&&f.length<2?`(?:/${$})`:"/"+$),L&&($+="?"),o+=$,_+=20,L&&(_+=-8),x&&(_+=-20),N===".*"&&(_+=-50)}u.push(_)}i.push(u)}if(n.strict&&n.end){const f=i.length-1;i[f][i[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function c(f){const u=f.match(s),h={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",z=r[p-1];h[z.name]=_&&z.repeatable?_.split("/"):_}return h}function a(f){let u="",h=!1;for(const p of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:z,repeatable:x,optional:L}=_,O=z in f?f[z]:"";if(Te(O)&&!x)throw new Error(`Provided param "${z}" is an array but it is not repeatable (* or + modifiers)`);const N=Te(O)?O.join("/"):O;if(!N)if(L)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${z}"`);u+=N}}return u||"/"}return{re:s,score:i,keys:r,parse:c,stringify:a}}function Wu(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Gu(e,t){let n=0;const i=e.score,o=t.score;for(;n<i.length&&n<o.length;){const r=Wu(i[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-i.length)===1){if(hr(i))return 1;if(hr(o))return-1}return o.length-i.length}function hr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Qu={type:0,value:""},Ju=/[a-zA-Z0-9_]/;function Yu(e){if(!e)return[[]];if(e==="/")return[[Qu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(_){throw new Error(`ERR (${n})/"${f}": ${_}`)}let n=0,i=n;const o=[];let r;function s(){r&&o.push(r),r=[]}let c=0,a,f="",u="";function h(){f&&(n===0?r.push({type:0,value:f}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:f,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(f&&h(),s()):a===":"?(h(),n=1):p();break;case 4:p(),n=i;break;case 1:a==="("?n=2:Ju.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),h(),s(),o}function Xu(e,t,n){const i=Ku(Yu(e.path),n),o=W(i,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Zu(e,t){const n=[],i=new Map;t=mr({strict:!1,end:!0,sensitive:!1},t);function o(u){return i.get(u)}function r(u,h,p){const _=!p,z=ef(u);z.aliasOf=p&&p.record;const x=mr(t,u),L=[z];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const q of $)L.push(W({},z,{components:p?p.record.components:z.components,path:q,aliasOf:p?p.record:z}))}let O,N;for(const $ of L){const{path:q}=$;if(h&&q[0]!=="/"){const te=h.record.path,j=te[te.length-1]==="/"?"":"/";$.path=h.record.path+(q&&j+q)}if(O=Xu($,h,x),p?p.alias.push(O):(N=N||O,N!==O&&N.alias.push(O),_&&u.name&&!gr(O)&&s(u.name)),z.children){const te=z.children;for(let j=0;j<te.length;j++)r(te[j],O,p&&p.children[j])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&a(O)}return N?()=>{s(N)}:Jt}function s(u){if(Ys(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(s),h.alias.forEach(s))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&Gu(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Zs(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gr(u)&&i.set(u.record.name,u)}function f(u,h){let p,_={},z,x;if("name"in u&&u.name){if(p=i.get(u.name),!p)throw $t(1,{location:u});x=p.record.name,_=W(pr(h.params,p.keys.filter(N=>!N.optional).concat(p.parent?p.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),u.params&&pr(u.params,p.keys.map(N=>N.name))),z=p.stringify(_)}else if(u.path!=null)z=u.path,p=n.find(N=>N.re.test(z)),p&&(_=p.parse(z),x=p.record.name);else{if(p=h.name?i.get(h.name):n.find(N=>N.re.test(h.path)),!p)throw $t(1,{location:u,currentLocation:h});x=p.record.name,_=W({},h.params,u.params),z=p.stringify(_)}const L=[];let O=p;for(;O;)L.unshift(O.record),O=O.parent;return{name:x,path:z,params:_,matched:L,meta:nf(L)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:f,removeRoute:s,getRoutes:c,getRecordMatcher:o}}function pr(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function ef(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:tf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function tf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function gr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function nf(e){return e.reduce((t,n)=>W(t,n.meta),{})}function mr(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Zs(e,t){return t.children.some(n=>n===e||Zs(e,n))}function of(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<i.length;++o){const r=i[o].replace(Vs," "),s=r.indexOf("="),c=nn(s<0?r:r.slice(0,s)),a=s<0?null:nn(r.slice(s+1));if(c in t){let f=t[c];Te(f)||(f=t[c]=[f]),f.push(a)}else t[c]=a}return t}function br(e){let t="";for(let n in e){const i=e[n];if(n=Eu(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Te(i)?i.map(r=>r&&Ri(r)):[i&&Ri(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function rf(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Te(i)?i.map(o=>o==null?null:""+o):i==null?i:""+i)}return t}const sf=Symbol(""),vr=Symbol(""),uo=Symbol(""),ea=Symbol(""),xi=Symbol("");function qt(){let e=[];function t(i){return e.push(i),()=>{const o=e.indexOf(i);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ze(e,t,n,i,o,r=s=>s()){const s=i&&(i.enterCallbacks[o]=i.enterCallbacks[o]||[]);return()=>new Promise((c,a)=>{const f=p=>{p===!1?a($t(4,{from:n,to:t})):p instanceof Error?a(p):Uu(p)?a($t(2,{from:t,to:p})):(s&&i.enterCallbacks[o]===s&&typeof p=="function"&&s.push(p),c())},u=r(()=>e.call(i&&i.instances[o],t,n,f));let h=Promise.resolve(u);e.length<3&&(h=h.then(f)),h.catch(p=>a(p))})}function ci(e,t,n,i,o=r=>r()){const r=[];for(const s of e)for(const c in s.components){let a=s.components[c];if(!(t!=="beforeRouteEnter"&&!s.instances[c]))if(af(a)){const u=(a.__vccOpts||a)[t];u&&r.push(Ze(u,n,i,s,c,o))}else{let f=a();r.push(()=>f.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${s.path}"`));const h=fu(u)?u.default:u;s.components[c]=h;const _=(h.__vccOpts||h)[t];return _&&Ze(_,n,i,s,c,o)()}))}}return r}function af(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _r(e){const t=He(uo),n=He(ea),i=Ie(()=>t.resolve(ye(e.to))),o=Ie(()=>{const{matched:a}=i.value,{length:f}=a,u=a[f-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(Lt.bind(null,u));if(p>-1)return p;const _=yr(a[f-2]);return f>1&&yr(u)===_&&h[h.length-1].path!==_?h.findIndex(Lt.bind(null,a[f-2])):p}),r=Ie(()=>o.value>-1&&ff(n.params,i.value.params)),s=Ie(()=>o.value>-1&&o.value===n.matched.length-1&&Qs(n.params,i.value.params));function c(a={}){return uf(a)?t[ye(e.replace)?"replace":"push"](ye(e.to)).catch(Jt):Promise.resolve()}return{route:i,href:Ie(()=>i.value.href),isActive:r,isExactActive:s,navigate:c}}const cf=an({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_r,setup(e,{slots:t}){const n=Ln(_r(e)),{options:i}=He(uo),o=Ie(()=>({[wr(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[wr(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Us("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),lf=cf;function uf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ff(e,t){for(const n in t){const i=t[n],o=e[n];if(typeof i=="string"){if(i!==o)return!1}else if(!Te(o)||o.length!==i.length||i.some((r,s)=>r!==o[s]))return!1}return!0}function yr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wr=(e,t,n)=>e??t??n,df=an({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=He(xi),o=Ie(()=>e.route||i.value),r=He(vr,0),s=Ie(()=>{let f=ye(r);const{matched:u}=o.value;let h;for(;(h=u[f])&&!h.components;)f++;return f}),c=Ie(()=>o.value.matched[s.value]);wn(vr,Ie(()=>s.value+1)),wn(sf,c),wn(xi,o);const a=gs();return _n(()=>[a.value,c.value,e.name],([f,u,h],[p,_,z])=>{u&&(u.instances[h]=f,_&&_!==u&&f&&f===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),f&&u&&(!_||!Lt(u,_)||!p)&&(u.enterCallbacks[h]||[]).forEach(x=>x(f))},{flush:"post"}),()=>{const f=o.value,u=e.name,h=c.value,p=h&&h.components[u];if(!p)return Er(n.default,{Component:p,route:f});const _=h.props[u],z=_?_===!0?f.params:typeof _=="function"?_(f):_:null,L=Us(p,W({},z,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Er(n.default,{Component:L,route:f})||L}}});function Er(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ta=df;function hf(e){const t=Zu(e.routes,e),n=e.parseQuery||of,i=e.stringifyQuery||br,o=e.history,r=qt(),s=qt(),c=qt(),a=Sc(Qe);let f=Qe;At&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=si.bind(null,b=>""+b),h=si.bind(null,Iu),p=si.bind(null,nn);function _(b,A){let I,P;return Ys(b)?(I=t.getRecordMatcher(b),P=A):P=b,t.addRoute(P,I)}function z(b){const A=t.getRecordMatcher(b);A&&t.removeRoute(A)}function x(){return t.getRoutes().map(b=>b.record)}function L(b){return!!t.getRecordMatcher(b)}function O(b,A){if(A=W({},A||a.value),typeof b=="string"){const d=ai(n,b,A.path),g=t.resolve({path:d.path},A),v=o.createHref(d.fullPath);return W(d,g,{params:p(g.params),hash:nn(d.hash),redirectedFrom:void 0,href:v})}let I;if(b.path!=null)I=W({},b,{path:ai(n,b.path,A.path).path});else{const d=W({},b.params);for(const g in d)d[g]==null&&delete d[g];I=W({},b,{params:h(d)}),A.params=h(A.params)}const P=t.resolve(I,A),K=b.hash||"";P.params=u(p(P.params));const Y=Tu(i,W({},b,{hash:wu(K),path:P.path})),l=o.createHref(Y);return W({fullPath:Y,hash:K,query:i===br?rf(b.query):b.query||{}},P,{redirectedFrom:void 0,href:l})}function N(b){return typeof b=="string"?ai(n,b,a.value.path):W({},b)}function $(b,A){if(f!==b)return $t(8,{from:A,to:b})}function q(b){return ce(b)}function te(b){return q(W(N(b),{replace:!0}))}function j(b){const A=b.matched[b.matched.length-1];if(A&&A.redirect){const{redirect:I}=A;let P=typeof I=="function"?I(b):I;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=N(P):{path:P},P.params={}),W({query:b.query,hash:b.hash,params:P.path!=null?{}:b.params},P)}}function ce(b,A){const I=f=O(b),P=a.value,K=b.state,Y=b.force,l=b.replace===!0,d=j(I);if(d)return ce(W(N(d),{state:typeof d=="object"?W({},K,d.state):K,force:Y,replace:l}),A||I);const g=I;g.redirectedFrom=A;let v;return!Y&&zu(i,P,I)&&(v=$t(16,{to:g,from:P}),Oe(P,P,!0,!1)),(v?Promise.resolve(v):ze(g,P)).catch(m=>$e(m)?$e(m,2)?m:We(m):V(m,g,P)).then(m=>{if(m){if($e(m,2))return ce(W({replace:l},N(m.to),{state:typeof m.to=="object"?W({},K,m.to.state):K,force:Y}),A||g)}else m=st(g,P,!0,l,K);return Ke(g,P,m),m})}function ve(b,A){const I=$(b,A);return I?Promise.reject(I):Promise.resolve()}function rt(b){const A=It.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(b):b()}function ze(b,A){let I;const[P,K,Y]=pf(b,A);I=ci(P.reverse(),"beforeRouteLeave",b,A);for(const d of P)d.leaveGuards.forEach(g=>{I.push(Ze(g,b,A))});const l=ve.bind(null,b,A);return I.push(l),se(I).then(()=>{I=[];for(const d of r.list())I.push(Ze(d,b,A));return I.push(l),se(I)}).then(()=>{I=ci(K,"beforeRouteUpdate",b,A);for(const d of K)d.updateGuards.forEach(g=>{I.push(Ze(g,b,A))});return I.push(l),se(I)}).then(()=>{I=[];for(const d of Y)if(d.beforeEnter)if(Te(d.beforeEnter))for(const g of d.beforeEnter)I.push(Ze(g,b,A));else I.push(Ze(d.beforeEnter,b,A));return I.push(l),se(I)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),I=ci(Y,"beforeRouteEnter",b,A,rt),I.push(l),se(I))).then(()=>{I=[];for(const d of s.list())I.push(Ze(d,b,A));return I.push(l),se(I)}).catch(d=>$e(d,8)?d:Promise.reject(d))}function Ke(b,A,I){c.list().forEach(P=>rt(()=>P(b,A,I)))}function st(b,A,I,P,K){const Y=$(b,A);if(Y)return Y;const l=A===Qe,d=At?history.state:{};I&&(P||l?o.replace(b.fullPath,W({scroll:l&&d&&d.scroll},K)):o.push(b.fullPath,K)),a.value=b,Oe(b,A,I,l),We()}let Pe;function Ft(){Pe||(Pe=o.listen((b,A,I)=>{if(!un.listening)return;const P=O(b),K=j(P);if(K){ce(W(K,{replace:!0}),P).catch(Jt);return}f=P;const Y=a.value;At&&Mu(lr(Y.fullPath,I.delta),Vn()),ze(P,Y).catch(l=>$e(l,12)?l:$e(l,2)?(ce(l.to,P).then(d=>{$e(d,20)&&!I.delta&&I.type===on.pop&&o.go(-1,!1)}).catch(Jt),Promise.reject()):(I.delta&&o.go(-I.delta,!1),V(l,P,Y))).then(l=>{l=l||st(P,Y,!1),l&&(I.delta&&!$e(l,8)?o.go(-I.delta,!1):I.type===on.pop&&$e(l,20)&&o.go(-1,!1)),Ke(P,Y,l)}).catch(Jt)}))}let Et=qt(),ne=qt(),G;function V(b,A,I){We(b);const P=ne.list();return P.length?P.forEach(K=>K(b,A,I)):console.error(b),Promise.reject(b)}function Le(){return G&&a.value!==Qe?Promise.resolve():new Promise((b,A)=>{Et.add([b,A])})}function We(b){return G||(G=!b,Ft(),Et.list().forEach(([A,I])=>b?I(b):A()),Et.reset()),b}function Oe(b,A,I,P){const{scrollBehavior:K}=e;if(!At||!K)return Promise.resolve();const Y=!I&&Lu(lr(b.fullPath,0))||(P||!I)&&history.state&&history.state.scroll||null;return _s().then(()=>K(b,A,Y)).then(l=>l&&ku(l)).catch(l=>V(l,b,A))}const de=b=>o.go(b);let St;const It=new Set,un={currentRoute:a,listening:!0,addRoute:_,removeRoute:z,hasRoute:L,getRoutes:x,resolve:O,options:e,push:q,replace:te,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:r.add,beforeResolve:s.add,afterEach:c.add,onError:ne.add,isReady:Le,install(b){const A=this;b.component("RouterLink",lf),b.component("RouterView",ta),b.config.globalProperties.$router=A,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(a)}),At&&!St&&a.value===Qe&&(St=!0,q(o.location).catch(K=>{}));const I={};for(const K in Qe)Object.defineProperty(I,K,{get:()=>a.value[K],enumerable:!0});b.provide(uo,A),b.provide(ea,us(I)),b.provide(xi,a);const P=b.unmount;It.add(b),b.unmount=function(){It.delete(b),It.size<1&&(f=Qe,Pe&&Pe(),Pe=null,a.value=Qe,St=!1,G=!1),P()}}};function se(b){return b.reduce((A,I)=>A.then(()=>rt(I)),Promise.resolve())}return un}function pf(e,t){const n=[],i=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let s=0;s<r;s++){const c=t.matched[s];c&&(e.matched.find(f=>Lt(f,c))?i.push(c):n.push(c));const a=e.matched[s];a&&(t.matched.find(f=>Lt(f,a))||o.push(a))}return[n,i,o]}var Sr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},gf=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const r=e[n++];t[i++]=String.fromCharCode((o&31)<<6|r&63)}else if(o>239&&o<365){const r=e[n++],s=e[n++],c=e[n++],a=((o&7)<<18|(r&63)<<12|(s&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(a>>10)),t[i++]=String.fromCharCode(56320+(a&1023))}else{const r=e[n++],s=e[n++];t[i++]=String.fromCharCode((o&15)<<12|(r&63)<<6|s&63)}}return t.join("")},ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<e.length;o+=3){const r=e[o],s=o+1<e.length,c=s?e[o+1]:0,a=o+2<e.length,f=a?e[o+2]:0,u=r>>2,h=(r&3)<<4|c>>4;let p=(c&15)<<2|f>>6,_=f&63;a||(_=64,s||(p=64)),i.push(n[u],n[h],n[p],n[_])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(na(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gf(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<e.length;){const r=n[e.charAt(o++)],c=o<e.length?n[e.charAt(o)]:0;++o;const f=o<e.length?n[e.charAt(o)]:64;++o;const h=o<e.length?n[e.charAt(o)]:64;if(++o,r==null||c==null||f==null||h==null)throw new mf;const p=r<<2|c>>4;if(i.push(p),f!==64){const _=c<<4&240|f>>2;if(i.push(_),h!==64){const z=f<<6&192|h;i.push(z)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class mf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bf=function(e){const t=na(e);return ia.encodeByteArray(t,!0)},oa=function(e){return bf(e).replace(/\./g,"")},vf=function(e){try{return ia.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=()=>_f().__FIREBASE_DEFAULTS__,wf=()=>{if(typeof process>"u"||typeof Sr>"u")return;const e=Sr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ef=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&vf(e[1]);return t&&JSON.parse(t)},ra=()=>{try{return yf()||wf()||Ef()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Sf=e=>{var t,n;return(n=(t=ra())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},If=e=>{const t=Sf(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},sa=()=>{var e;return(e=ra())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}function aa(){try{return typeof indexedDB=="object"}catch{return!1}}function ca(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var r;t(((r=o.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function Af(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="FirebaseError";class wt extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=Tf,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kn.prototype.create)}}class Kn{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},o=`${this.service}/${t}`,r=this.errors[t],s=r?zf(r,i):"Error",c=`${this.serviceName}: ${s} (${o}).`;return new wt(o,c,i)}}function zf(e,t){return e.replace(Pf,(n,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const Pf=/\{\$([^}]+)}/g;function Ni(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const r=e[o],s=t[o];if(Ir(r)&&Ir(s)){if(!Ni(r,s))return!1}else if(r!==s)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function Ir(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e){return e&&e._delegate?e._delegate:e}class qe{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Cf;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(o)return null;throw r}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Df(t))try{this.getOrInitializeService({instanceIdentifier:lt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:o});i.resolve(r)}catch{}}}}clearInstance(t=lt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=lt){return this.instances.has(t)}getOptions(t=lt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,s]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&s.resolve(o)}return o}onInit(t,n){var i;const o=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(o,r);const s=this.instances.get(o);return s&&t(s,o),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Rf(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=lt){return this.component?this.component.multipleInstances?t:lt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rf(e){return e===lt?void 0:e}function Df(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Of(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const Nf={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},kf=J.INFO,Mf={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Lf=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),o=Mf[t];if(o)console[o](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $f{constructor(t){this.name=t,this._logLevel=kf,this._logHandler=Lf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const jf=(e,t)=>t.some(n=>e instanceof n);let Cr,Ar;function Bf(){return Cr||(Cr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ff(){return Ar||(Ar=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const la=new WeakMap,ki=new WeakMap,ua=new WeakMap,li=new WeakMap,fo=new WeakMap;function Hf(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{n(Ue(e.result)),o()},s=()=>{i(e.error),o()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&la.set(n,e)}).catch(()=>{}),fo.set(t,e),t}function Uf(e){if(ki.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{n(),o()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});ki.set(e,t)}let Mi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ki.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ua.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ue(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function qf(e){Mi=e(Mi)}function Vf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(ui(this),t,...n);return ua.set(i,t.sort?t.sort():[t]),Ue(i)}:Ff().includes(e)?function(...t){return e.apply(ui(this),t),Ue(la.get(this))}:function(...t){return Ue(e.apply(ui(this),t))}}function Kf(e){return typeof e=="function"?Vf(e):(e instanceof IDBTransaction&&Uf(e),jf(e,Bf())?new Proxy(e,Mi):e)}function Ue(e){if(e instanceof IDBRequest)return Hf(e);if(li.has(e))return li.get(e);const t=Kf(e);return t!==e&&(li.set(e,t),fo.set(t,e)),t}const ui=e=>fo.get(e);function Wn(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const s=indexedDB.open(e,t),c=Ue(s);return i&&s.addEventListener("upgradeneeded",a=>{i(Ue(s.result),a.oldVersion,a.newVersion,Ue(s.transaction),a)}),n&&s.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{r&&a.addEventListener("close",()=>r()),o&&a.addEventListener("versionchange",f=>o(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}function fi(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),Ue(n).then(()=>{})}const Wf=["get","getKey","getAll","getAllKeys","count"],Gf=["put","add","delete","clear"],di=new Map;function Tr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(di.get(t))return di.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=Gf.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Wf.includes(n)))return;const r=async function(s,...c){const a=this.transaction(s,o?"readwrite":"readonly");let f=a.store;return i&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),o&&a.done]))[0]};return di.set(t,r),r}qf(e=>({...e,get:(t,n,i)=>Tr(t,n)||e.get(t,n,i),has:(t,n)=>!!Tr(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jf(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Jf(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Li="@firebase/app",zr="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new $f("@firebase/app"),Yf="@firebase/app-compat",Xf="@firebase/analytics-compat",Zf="@firebase/analytics",ed="@firebase/app-check-compat",td="@firebase/app-check",nd="@firebase/auth",id="@firebase/auth-compat",od="@firebase/database",rd="@firebase/database-compat",sd="@firebase/functions",ad="@firebase/functions-compat",cd="@firebase/installations",ld="@firebase/installations-compat",ud="@firebase/messaging",fd="@firebase/messaging-compat",dd="@firebase/performance",hd="@firebase/performance-compat",pd="@firebase/remote-config",gd="@firebase/remote-config-compat",md="@firebase/storage",bd="@firebase/storage-compat",vd="@firebase/firestore",_d="@firebase/firestore-compat",yd="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="[DEFAULT]",wd={[Li]:"fire-core",[Yf]:"fire-core-compat",[Zf]:"fire-analytics",[Xf]:"fire-analytics-compat",[td]:"fire-app-check",[ed]:"fire-app-check-compat",[nd]:"fire-auth",[id]:"fire-auth-compat",[od]:"fire-rtdb",[rd]:"fire-rtdb-compat",[sd]:"fire-fn",[ad]:"fire-fn-compat",[cd]:"fire-iid",[ld]:"fire-iid-compat",[ud]:"fire-fcm",[fd]:"fire-fcm-compat",[dd]:"fire-perf",[hd]:"fire-perf-compat",[pd]:"fire-rc",[gd]:"fire-rc-compat",[md]:"fire-gcs",[bd]:"fire-gcs-compat",[vd]:"fire-fst",[_d]:"fire-fst-compat","fire-js":"fire-js",[yd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new Map,ji=new Map;function Ed(e,t){try{e.container.addComponent(t)}catch(n){gt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ot(e){const t=e.name;if(ji.has(t))return gt.debug(`There were multiple attempts to register component ${t}.`),!1;ji.set(t,e);for(const n of On.values())Ed(n,e);return!0}function Gn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nt=new Kn("app","Firebase",Sd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}}function fa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:$i,automaticDataCollectionEnabled:!1},t),o=i.name;if(typeof o!="string"||!o)throw nt.create("bad-app-name",{appName:String(o)});if(n||(n=sa()),!n)throw nt.create("no-options");const r=On.get(o);if(r){if(Ni(n,r.options)&&Ni(i,r.config))return r;throw nt.create("duplicate-app",{appName:o})}const s=new xf(o);for(const a of ji.values())s.addComponent(a);const c=new Id(n,i,s);return On.set(o,c),c}function da(e=$i){const t=On.get(e);if(!t&&e===$i&&sa())return fa();if(!t)throw nt.create("no-app",{appName:e});return t}function Me(e,t,n){var i;let o=(i=wd[e])!==null&&i!==void 0?i:e;n&&(o+=`-${n}`);const r=o.match(/\s|\//),s=t.match(/\s|\//);if(r||s){const c=[`Unable to register library "${o}" with version "${t}":`];r&&c.push(`library name "${o}" contains illegal characters (whitespace or "/")`),r&&s&&c.push("and"),s&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gt.warn(c.join(" "));return}ot(new qe(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="firebase-heartbeat-database",Ad=1,rn="firebase-heartbeat-store";let hi=null;function ha(){return hi||(hi=Wn(Cd,Ad,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(rn)}catch(n){console.warn(n)}}}}).catch(e=>{throw nt.create("idb-open",{originalErrorMessage:e.message})})),hi}async function Td(e){try{const n=(await ha()).transaction(rn),i=await n.objectStore(rn).get(pa(e));return await n.done,i}catch(t){if(t instanceof wt)gt.warn(t.message);else{const n=nt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});gt.warn(n.message)}}}async function Pr(e,t){try{const i=(await ha()).transaction(rn,"readwrite");await i.objectStore(rn).put(t,pa(e)),await i.done}catch(n){if(n instanceof wt)gt.warn(n.message);else{const i=nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(i.message)}}}function pa(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=1024,Pd=30*24*60*60*1e3;class Od{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dd(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Or();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const c=new Date(s.date).valueOf();return Date.now()-c<=Pd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Or(),{heartbeatsToSend:i,unsentEntries:o}=Rd(this._heartbeatsCache.heartbeats),r=oa(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Or(){return new Date().toISOString().substring(0,10)}function Rd(e,t=zd){const n=[];let i=e.slice();for(const o of e){const r=n.find(s=>s.agent===o.agent);if(r){if(r.dates.push(o.date),Rr(n)>t){r.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Rr(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Dd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aa()?ca().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Td(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Pr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Pr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Rr(e){return oa(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(e){ot(new qe("platform-logger",t=>new Qf(t),"PRIVATE")),ot(new qe("heartbeat",t=>new Od(t),"PRIVATE")),Me(Li,zr,e),Me(Li,zr,"esm2017"),Me("fire-js","")}xd("");const ga="@firebase/installations",ho="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=1e4,ba=`w:${ho}`,va="FIS_v2",Nd="https://firebaseinstallations.googleapis.com/v1",kd=60*60*1e3,Md="installations",Ld="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},mt=new Kn(Md,Ld,$d);function _a(e){return e instanceof wt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya({projectId:e}){return`${Nd}/projects/${e}/installations`}function wa(e){return{token:e.token,requestStatus:2,expiresIn:Bd(e.expiresIn),creationTime:Date.now()}}async function Ea(e,t){const i=(await t.json()).error;return mt.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Sa({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function jd(e,{refreshToken:t}){const n=Sa(e);return n.append("Authorization",Fd(t)),n}async function Ia(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Bd(e){return Number(e.replace("s","000"))}function Fd(e){return`${va} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=ya(e),o=Sa(e),r=t.getImmediate({optional:!0});if(r){const f=await r.getHeartbeatsHeader();f&&o.append("x-firebase-client",f)}const s={fid:n,authVersion:va,appId:e.appId,sdkVersion:ba},c={method:"POST",headers:o,body:JSON.stringify(s)},a=await Ia(()=>fetch(i,c));if(a.ok){const f=await a.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:wa(f.authToken)}}else throw await Ea("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=/^[cdef][\w-]{21}$/,Bi="";function Vd(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Kd(e);return qd.test(n)?n:Bi}catch{return Bi}}function Kd(e){return Ud(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new Map;function Ta(e,t){const n=Qn(e);za(n,t),Wd(n,t)}function za(e,t){const n=Aa.get(e);if(n)for(const i of n)i(t)}function Wd(e,t){const n=Gd();n&&n.postMessage({key:e,fid:t}),Qd()}let ft=null;function Gd(){return!ft&&"BroadcastChannel"in self&&(ft=new BroadcastChannel("[Firebase] FID Change"),ft.onmessage=e=>{za(e.data.key,e.data.fid)}),ft}function Qd(){Aa.size===0&&ft&&(ft.close(),ft=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="firebase-installations-database",Yd=1,bt="firebase-installations-store";let pi=null;function po(){return pi||(pi=Wn(Jd,Yd,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(bt)}}})),pi}async function Rn(e,t){const n=Qn(e),o=(await po()).transaction(bt,"readwrite"),r=o.objectStore(bt),s=await r.get(n);return await r.put(t,n),await o.done,(!s||s.fid!==t.fid)&&Ta(e,t.fid),t}async function Pa(e){const t=Qn(e),i=(await po()).transaction(bt,"readwrite");await i.objectStore(bt).delete(t),await i.done}async function Jn(e,t){const n=Qn(e),o=(await po()).transaction(bt,"readwrite"),r=o.objectStore(bt),s=await r.get(n),c=t(s);return c===void 0?await r.delete(n):await r.put(c,n),await o.done,c&&(!s||s.fid!==c.fid)&&Ta(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(e){let t;const n=await Jn(e.appConfig,i=>{const o=Xd(i),r=Zd(e,o);return t=r.registrationPromise,r.installationEntry});return n.fid===Bi?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Xd(e){const t=e||{fid:Vd(),registrationStatus:0};return Oa(t)}function Zd(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(mt.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=eh(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:th(e)}:{installationEntry:t}}async function eh(e,t){try{const n=await Hd(e,t);return Rn(e.appConfig,n)}catch(n){throw _a(n)&&n.customData.serverCode===409?await Pa(e.appConfig):await Rn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function th(e){let t=await Dr(e.appConfig);for(;t.registrationStatus===1;)await Ca(100),t=await Dr(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await go(e);return i||n}return t}function Dr(e){return Jn(e,t=>{if(!t)throw mt.create("installation-not-found");return Oa(t)})}function Oa(e){return nh(e)?{fid:e.fid,registrationStatus:0}:e}function nh(e){return e.registrationStatus===1&&e.registrationTime+ma<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih({appConfig:e,heartbeatServiceProvider:t},n){const i=oh(e,n),o=jd(e,n),r=t.getImmediate({optional:!0});if(r){const f=await r.getHeartbeatsHeader();f&&o.append("x-firebase-client",f)}const s={installation:{sdkVersion:ba,appId:e.appId}},c={method:"POST",headers:o,body:JSON.stringify(s)},a=await Ia(()=>fetch(i,c));if(a.ok){const f=await a.json();return wa(f)}else throw await Ea("Generate Auth Token",a)}function oh(e,{fid:t}){return`${ya(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(e,t=!1){let n;const i=await Jn(e.appConfig,r=>{if(!Ra(r))throw mt.create("not-registered");const s=r.authToken;if(!t&&ah(s))return r;if(s.requestStatus===1)return n=rh(e,t),r;{if(!navigator.onLine)throw mt.create("app-offline");const c=lh(r);return n=sh(e,c),c}});return n?await n:i.authToken}async function rh(e,t){let n=await xr(e.appConfig);for(;n.authToken.requestStatus===1;)await Ca(100),n=await xr(e.appConfig);const i=n.authToken;return i.requestStatus===0?mo(e,t):i}function xr(e){return Jn(e,t=>{if(!Ra(t))throw mt.create("not-registered");const n=t.authToken;return uh(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function sh(e,t){try{const n=await ih(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Rn(e.appConfig,i),n}catch(n){if(_a(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Pa(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Rn(e.appConfig,i)}throw n}}function Ra(e){return e!==void 0&&e.registrationStatus===2}function ah(e){return e.requestStatus===2&&!ch(e)}function ch(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+kd}function lh(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function uh(e){return e.requestStatus===1&&e.requestTime+ma<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh(e){const t=e,{installationEntry:n,registrationPromise:i}=await go(t);return i?i.catch(console.error):mo(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dh(e,t=!1){const n=e;return await hh(n),(await mo(n,t)).token}async function hh(e){const{registrationPromise:t}=await go(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(e){if(!e||!e.options)throw gi("App Configuration");if(!e.name)throw gi("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw gi(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function gi(e){return mt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="installations",gh="installations-internal",mh=e=>{const t=e.getProvider("app").getImmediate(),n=ph(t),i=Gn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},bh=e=>{const t=e.getProvider("app").getImmediate(),n=Gn(t,Da).getImmediate();return{getId:()=>fh(n),getToken:o=>dh(n,o)}};function vh(){ot(new qe(Da,mh,"PUBLIC")),ot(new qe(gh,bh,"PRIVATE"))}vh();Me(ga,ho);Me(ga,ho,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="/firebase-messaging-sw.js",yh="/firebase-cloud-messaging-push-scope",xa="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",wh="https://fcmregistrations.googleapis.com/v1",Na="google.c.a.c_id",Eh="google.c.a.c_l",Sh="google.c.a.ts",Ih="google.c.a.e";var Nr;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Nr||(Nr={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var sn;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(sn||(sn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ch(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let r=0;r<i.length;++r)o[r]=i.charCodeAt(r);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="fcm_token_details_db",Ah=5,kr="fcm_token_object_Store";async function Th(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(r=>r.name).includes(mi))return null;let t=null;return(await Wn(mi,Ah,{upgrade:async(i,o,r,s)=>{var c;if(o<2||!i.objectStoreNames.contains(kr))return;const a=s.objectStore(kr),f=await a.index("fcmSenderId").get(e);if(await a.clear(),!!f){if(o===2){const u=f;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(c=u.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:je(u.vapidKey)}}}else if(o===3){const u=f;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:je(u.auth),p256dh:je(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:je(u.vapidKey)}}}else if(o===4){const u=f;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:je(u.auth),p256dh:je(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:je(u.vapidKey)}}}}}})).close(),await fi(mi),await fi("fcm_vapid_details_db"),await fi("undefined"),zh(t)?t:null}function zh(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="firebase-messaging-database",Oh=1,vt="firebase-messaging-store";let bi=null;function bo(){return bi||(bi=Wn(Ph,Oh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(vt)}}})),bi}async function ka(e){const t=_o(e),i=await(await bo()).transaction(vt).objectStore(vt).get(t);if(i)return i;{const o=await Th(e.appConfig.senderId);if(o)return await vo(e,o),o}}async function vo(e,t){const n=_o(e),o=(await bo()).transaction(vt,"readwrite");return await o.objectStore(vt).put(t,n),await o.done,t}async function Rh(e){const t=_o(e),i=(await bo()).transaction(vt,"readwrite");await i.objectStore(vt).delete(t),await i.done}function _o({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},fe=new Kn("messaging","Messaging",Dh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(e,t){const n=await wo(e),i=La(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let r;try{r=await(await fetch(yo(e.appConfig),o)).json()}catch(s){throw fe.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(r.error){const s=r.error.message;throw fe.create("token-subscribe-failed",{errorInfo:s})}if(!r.token)throw fe.create("token-subscribe-no-token");return r.token}async function Nh(e,t){const n=await wo(e),i=La(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let r;try{r=await(await fetch(`${yo(e.appConfig)}/${t.token}`,o)).json()}catch(s){throw fe.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(r.error){const s=r.error.message;throw fe.create("token-update-failed",{errorInfo:s})}if(!r.token)throw fe.create("token-update-no-token");return r.token}async function Ma(e,t){const i={method:"DELETE",headers:await wo(e)};try{const r=await(await fetch(`${yo(e.appConfig)}/${t}`,i)).json();if(r.error){const s=r.error.message;throw fe.create("token-unsubscribe-failed",{errorInfo:s})}}catch(o){throw fe.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function yo({projectId:e}){return`${wh}/projects/${e}/registrations`}async function wo({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function La({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==xa&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=7*24*60*60*1e3;async function Mh(e){const t=await jh(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:je(t.getKey("auth")),p256dh:je(t.getKey("p256dh"))},i=await ka(e.firebaseDependencies);if(i){if(Bh(i.subscriptionOptions,n))return Date.now()>=i.createTime+kh?$h(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await Ma(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return Mr(e.firebaseDependencies,n)}else return Mr(e.firebaseDependencies,n)}async function Lh(e){const t=await ka(e.firebaseDependencies);t&&(await Ma(e.firebaseDependencies,t.token),await Rh(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function $h(e,t){try{const n=await Nh(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await vo(e.firebaseDependencies,i),n}catch(n){throw await Lh(e),n}}async function Mr(e,t){const i={token:await xh(e,t),createTime:Date.now(),subscriptionOptions:t};return await vo(e,i),i.token}async function jh(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ch(t)})}function Bh(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&i&&o&&r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Fh(t,e),Hh(t,e),Uh(t,e),t}function Fh(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const r=t.notification.icon;r&&(e.notification.icon=r)}function Hh(e,t){t.data&&(e.data=t.data)}function Uh(e,t){var n,i,o,r,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(o=(i=t.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(r=t.notification)===null||r===void 0?void 0:r.click_action;c&&(e.fcmOptions.link=c);const a=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;a&&(e.fcmOptions.analyticsLabel=a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(e){return typeof e=="object"&&!!e&&Na in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$a("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");$a("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function $a(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(e){if(!e||!e.options)throw vi("App Configuration Object");if(!e.name)throw vi("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw vi(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function vi(e){return fe.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Vh(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(e){try{e.swRegistration=await navigator.serviceWorker.register(_h,{scope:yh}),e.swRegistration.update().catch(()=>{})}catch(t){throw fe.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gh(e,t){if(!t&&!e.swRegistration&&await Wh(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw fe.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=xa)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(e,t){if(!navigator)throw fe.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw fe.create("permission-blocked");return await Qh(e,t==null?void 0:t.vapidKey),await Gh(e,t==null?void 0:t.serviceWorkerRegistration),Mh(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(e,t,n){const i=Yh(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[Na],message_name:n[Eh],message_time:n[Sh],message_device_time:Math.floor(Date.now()/1e3)})}function Yh(e){switch(e){case sn.NOTIFICATION_CLICKED:return"notification_open";case sn.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===sn.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Lr(n)):e.onMessageHandler.next(Lr(n)));const i=n.data;qh(i)&&i[Ih]==="1"&&await Jh(e,n.messageType,i)}const $r="@firebase/messaging",jr="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=e=>{const t=new Kh(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Xh(t,n)),t},ep=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>ja(t,i)}};function tp(){ot(new qe("messaging",Zh,"PUBLIC")),ot(new qe("messaging-internal",ep,"PRIVATE")),Me($r,jr),Me($r,jr,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(){try{await ca()}catch{return!1}return typeof window<"u"&&aa()&&Af()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(e=da()){return np().then(t=>{if(!t)throw fe.create("unsupported-browser")},t=>{throw fe.create("indexed-db-unsupported")}),Gn(ln(e),"messaging").getImmediate()}async function op(e,t){return e=ln(e),ja(e,t)}tp();var rp="firebase",sp="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me(rp,sp,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="type.googleapis.com/google.protobuf.Int64Value",cp="type.googleapis.com/google.protobuf.UInt64Value";function Ba(e,t){const n={};for(const i in e)e.hasOwnProperty(i)&&(n[i]=t(e[i]));return n}function Fi(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>Fi(t));if(typeof e=="function"||typeof e=="object")return Ba(e,t=>Fi(t));throw new Error("Data cannot be encoded in JSON: "+e)}function Dn(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case ap:case cp:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>Dn(t)):typeof e=="function"||typeof e=="object"?Ba(e,t=>Dn(t)):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xt extends wt{constructor(t,n,i){super(`${Eo}/${t}`,n||""),this.details=i}}function lp(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function up(e,t){let n=lp(e),i=n,o;try{const r=t&&t.error;if(r){const s=r.status;if(typeof s=="string"){if(!Br[s])return new xt("internal","internal");n=Br[s],i=s}const c=r.message;typeof c=="string"&&(i=c),o=r.details,o!==void 0&&(o=Dn(o))}}catch{}return n==="ok"?null:new xt(n,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(o=>this.auth=o,()=>{}),this.messaging||n.get().then(o=>this.messaging=o,()=>{}),this.appCheck||i.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.appCheck){const n=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(t){const n=await this.getAuthToken(),i=await this.getMessagingToken(),o=await this.getAppCheckToken(t);return{authToken:n,messagingToken:i,appCheckToken:o}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="us-central1";function dp(e){let t=null;return{promise:new Promise((n,i)=>{t=setTimeout(()=>{i(new xt("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class hp{constructor(t,n,i,o,r=Hi,s){this.app=t,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new fp(n,i,o),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(r);this.customDomain=c.origin,this.region=Hi}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function pp(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}function gp(e,t,n){return i=>bp(e,t,i,n||{})}async function mp(e,t,n,i){n["Content-Type"]="application/json";let o;try{o=await i(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch{return{status:0,json:null}}let r=null;try{r=await o.json()}catch{}return{status:o.status,json:r}}function bp(e,t,n,i){const o=e._url(t);return vp(e,o,n,i)}async function vp(e,t,n,i){n=Fi(n);const o={data:n},r={},s=await e.contextProvider.getContext(i.limitedUseAppCheckTokens);s.authToken&&(r.Authorization="Bearer "+s.authToken),s.messagingToken&&(r["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=s.appCheckToken);const c=i.timeout||7e4,a=dp(c),f=await Promise.race([mp(t,o,r,e.fetchImpl),a.promise,e.cancelAllRequests]);if(a.cancel(),!f)throw new xt("cancelled","Firebase Functions instance was deleted.");const u=up(f.status,f.json);if(u)throw u;if(!f.json)throw new xt("internal","Response is not valid JSON object.");let h=f.json.data;if(typeof h>"u"&&(h=f.json.result),typeof h>"u")throw new xt("internal","Response is missing data field.");return{data:Dn(h)}}const Fr="@firebase/functions",Hr="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="auth-internal",yp="app-check-internal",wp="messaging-internal";function Ep(e,t){const n=(i,{instanceIdentifier:o})=>{const r=i.getProvider("app").getImmediate(),s=i.getProvider(_p),c=i.getProvider(wp),a=i.getProvider(yp);return new hp(r,s,c,a,o,e)};ot(new qe(Eo,n,"PUBLIC").setMultipleInstances(!0)),Me(Fr,Hr,t),Me(Fr,Hr,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(e=da(),t=Hi){const i=Gn(ln(e),Eo).getImmediate({identifier:t}),o=If("functions");return o&&Ip(i,...o),i}function Ip(e,t,n){pp(ln(e),t,n)}function Cp(e,t,n){return gp(ln(e),t,n)}Ep(fetch.bind(self));const Ap={apiKey:"AIzaSyArxk42aqueMXlrzx163cskyu_HqXbJ7nw",authDomain:"detti-tricaricesi.firebaseapp.com",projectId:"detti-tricaricesi",storageBucket:"detti-tricaricesi.appspot.com",messagingSenderId:"122148054857",appId:"1:122148054857:web:cf7dfe33c2926c1bb7dc98",measurementId:"G-6BXMDTYNSC"},Fa=fa(Ap),Tp=ip(Fa),zp=Sp(Fa),Pp=async()=>{try{const e=await op(Tp,{vapidKey:"BI4esiUrs7uyhL0vc9hDsmKmq-VwHMsxvkkLchdV8ZCgRjMU8WQPyvG6upD12Jw9k7oWdfNYSzYH6ISNfwkNxNU"});if(e)return e;throw new Error("No token")}catch(e){throw e}},Op=an({__name:"App",setup(e){t();function t(){Notification.requestPermission().then(async n=>{const i=localStorage.getItem("notificationTokenStored")==="true";if(n==="granted"){if(!i)try{const o=await Pp(),r=await Cp(zp,"registerToNotifications")({registrationToken:o});console.log(r),localStorage.setItem("notificationTokenStored","true")}catch(o){console.error(o)}}else i&&localStorage.setItem("notificationTokenStored","false")})}return(n,i)=>(Dt(),js(ye(ta),{key:n.$route.fullPath}))}}),Ur=[{detto:"Cas r sunator n,nz son",traduzione:"Casa di suonatori non si suona.",significato:"",id:0},{detto:"Megghj nu vind r tott ca l carvott",traduzione:"Meglio una corrente che gli spifferi",significato:"",id:1},{detto:"Vai acchiann erva vind",traduzione:"Và cercando l'erba vento (parietaria)",significato:"chi cerca donne.",id:2},{detto:"Accas u fegghj quonn vu e la fegghj quonn pui",traduzione:"Sposa il figlio quando vuoi e la figlia quando puoi",significato:"",id:3},{detto:"A ogn ucidd u neir soi iè bell",traduzione:"Ad ogni uccello il suo nido è bello",significato:"",id:4},{detto:"S'è fatt a stosc'n",traduzione:"S'è fatto come una tartaruga",significato:"Riferito a chi è così ubriaco da non riuscire ad alzarsi (come le tartarughe cadute di spalle)",id:5},{detto:"C ten a cap r cer n scess allu sol",traduzione:"Chi ha la testa di cera non deve andare al sole",significato:"",id:6},{detto:"Mal n,nfà e paeur n,navè",traduzione:"Chi non fa male non ha paura",significato:"",id:7},{detto:"s nu cacacart",traduzione:"Essere uno che usa la carta igienica",significato:"persone che si possono permettere l'uso della carta igienica (inquadrata sempre nel contesto di una cinquantina di anni fa).",id:8},{detto:"U cuon ca s'è ars s'appaeur r l'acqua fredd",traduzione:"Il cane che si è scottato ha paura dell'acqua fredda",significato:"",id:9},{detto:"Preta moss n'n fac u lepp",traduzione:"La pietra smossa non fa il muschio",significato:"",id:10},{detto:"Alla porta chieus u riovl vot l spadd",traduzione:"Alla porta chiusa il diavolo volge le spalle",significato:"",id:11},{detto:"U mel s fac allcchà pcchè iè rouc",traduzione:"Il miele si fa leccare perché è dolce",significato:"",id:12},{detto:"Ogn cas ten nu remc rott",traduzione:"Ogni casa ha una tegola rotta",significato:"",id:13},{detto:"L cumbitt mocc all purc",traduzione:"I confetti in bocca ai maiali",significato:"Dare a chi non apprezza.",id:14},{detto:"Preim ca taggia ave' ros e fior taggia tne', ropp ca taggj aveut ngul a mamt ca t'ha crsceut",traduzione:"Prima che ti devo avere ti devo mantenere a rose e fiori, dopo che ti ho avuta in culo a tua madre che ti ha cresciuta.",significato:"",id:15},{detto:"Pttor e pttasand vann chiò dret ka nnand",traduzione:"Pittori e pittasanti vanno più indietro che avanti.",significato:"",id:16},{detto:"S r salviett",traduzione:"Essere di salvietta",significato:"andare a pranzi sontuosi o ufficiali.",id:17},{detto:"t mangh,n diciannov sold ch fà na lir",traduzione:"Mancare diciannove soldi per fare una lira",significato:"essere povero.",id:18},{detto:"Quonn aut nn hai c mgghiert t colc",traduzione:"Quando non hai altro vai a dormire (giaci) con tua moglie",significato:"",id:19},{detto:"Tagg turt l'acqua all mleun?",traduzione:"Ti ho deviato l'acqua ai meloni?",significato:"Quando uno non ti saluta più. Deviare l'acqua alle angurie era uno sgarro.",id:20},{detto:"U vogghij vre', u vogghij assaggia', quonn ie' a Pasqu t vogghij spuso'",traduzione:"Lo voglio vedere, lo voglio assaggiare, quando è Pasqua ti voglio sposare.",significato:"Ovvio il riferimento ;-)",id:21},{detto:"Cum vaia vaj e cum vena ven",traduzione:"Come và và e come viene viene",significato:"",id:22},{detto:"Stai cum na mlogn",traduzione:"Sei come un tasso",significato:"",id:23},{detto:"C stai assaj ndà cas r laut rvend frstir ndà casa soi",traduzione:"Chi sta troppo nella casa altrui diventa forestiero nella propria",significato:"",id:24},{detto:"Tin l'ucchij quond u spurt e nn vir u cambanar<?>",traduzione:"Hai gli occhi quanto <?> e non vedi il campanile",significato:"",id:25},{detto:"Adda scè a bacià u per a g,s,crest",traduzione:"Deve baciare il piede a Gesù. (venerdì santo si fa il giro delle chiese)",significato:"",id:26},{detto:"Scinr e npeut, quond fai sò tutt prdeut",traduzione:"Generi e nipoti, quello che fai per loro è tutto sprecato",significato:"",id:27},{detto:"U pccot cunfssot iè minz p,rdunot",traduzione:"Il peccato confessato è perdonato a metà",significato:"",id:28},{detto:"U ciocc bllamor a c ver s nnammor",traduzione:"L'asino di Bellamore chi vede si innamora",significato:"",id:29},{detto:"all fess risponn a orarij",traduzione:"Ai 'fessi' rispondo ad orario",significato:"far cadere la conversazione con una persona manifestamente sgradita.",id:30},{detto:"U ciocc r cind patreun",traduzione:"l'asino di cento padroni",significato:"Si potrebbe interpretare come chi è voltafaccia, opportunista, ecc.",id:31},{detto:"Attind attind angapp u cul sforr a vind",traduzione:"Facendo molta attenzione affinchè il culo non perda aria.",significato:"",id:32},{detto:"Mang ca t mang a robba toj t mang",traduzione:"Mangia che mangi, la roba tua mangi.",significato:"",id:33},{detto:"Eccè è sc,cattat u leup allu vosch",traduzione:"Eccè è morto il lupo al bosco.",significato:"Cosa eccezionale.",id:34},{detto:"cas r'affett, pan accattat",traduzione:"Casa in fitto, pane acquistato",significato:"l'economia di una casa in fitto permette di mangiare; oppure meglio mangiare che avere una casa propria (quando ci sono pochi soldi).",id:35},{detto:"Quala ballat tala sunat",traduzione:"Quale ballata, tale suonata",significato:"",id:36},{detto:"A mazz a mazz sò tutt na razz",traduzione:"A mazzi a mazzi sono tutti uguali.",significato:"",id:37},{detto:"N riesc a mmett nzemml quott ov ndà nu piott",traduzione:"Non riuscire a mettere insieme quattro uova in un piatto",significato:"quando uno è manifestamente incapace.",id:38},{detto:"Eccè, hai pers u pan allu forn?",traduzione:"Cosa è successo? Hai perso il pane al forno?",significato:"Quando uno è triste.",id:39},{detto:"C,caccià a zokkl ardett u pagghiar",traduzione:"Per cacciare la zoccola bruciò il pagliaio",significato:"Quando si usano metodi eccessivi.",id:40},{detto:"Nda vocca chieus n trasn l mosch",traduzione:"Nella bocca chiusa non entrano le mosche",significato:"",id:41},{detto:"U riovl quonn t'accarezz vol l'anm",traduzione:"Il diavolo quando ti fa una carezza vuole l'anima",significato:"",id:42},{detto:"a femn iè cum a cauror: fac a stezz",traduzione:"La donna è come il paiolo: gocciola",significato:"",id:43},{detto:"Pass ca cap ru leup",traduzione:"Passare con la testa del lupo",significato:"Anticamente coloro che uccidevano i lupi (ritenuti nocivi) passavano da i vari contadini a riscuotere la taglia.",id:44},{detto:"Batt u firr quonn iè caur",traduzione:"Batti il ferro quando è caldo",significato:"",id:45},{detto:"Amm allitt, vrazz mbitt",traduzione:"Gambe sul letto, braccia sul petto",significato:"L'arte del riposo sul letto.",id:46},{detto:"Passat u sond, passat a fest",traduzione:"Passato il santo, passata la festa",significato:"",id:47},{detto:"Va ch chidd meggh r te e fall l spes",traduzione:"Vai con quelli migliori di te e fagli le spese",significato:"",id:48},{detto:"Bllez e paccej s fann cunbagnej",traduzione:"Bellezza e pazzia si fanno compagnia",significato:"",id:49},{detto:"Sajett tadda mnuzzò",traduzione:"La saetta ti deve colpire",significato:"(E' una sentenza, nel senso dialettale)",id:50},{detto:"Quonn a bborz a bborz e quonn a lleun a lleun",traduzione:"Quando a borse a borse e quando a legna a legna",significato:"Quando uno è impegnato a fare una cosa non bada alle altre e rischia di prenderlo nel .......",id:51},{detto:"Na stezz r fel fac amar u mel",traduzione:"Una goccia di fiele rende amaro il miele",significato:"",id:52,related:[195]},{detto:"Spost cauror ca s no m teng",traduzione:"Spostati paiolo altrimenti mi tingo",significato:"",id:53},{detto:"Sold sparagnat doi vot uaragnat",traduzione:"Soldi risparmiati due volte guadagnati",significato:"",id:54},{detto:"C zapp veiv aq, c pot veiv mir",traduzione:"Chi zappa beve acqua, chi pota beve vino",significato:"deve essere inquadrato nell'ottica degli antichi contadini. Ribadisce la differenza di classe tra il potatore (che lavora di fino) ed il misero zappatore.",id:55},{detto:"Ropp arrubot mttett l firr alla fnestr",traduzione:"Dopo il furto mise i ferri alla finestra",significato:"Prendere tardi dei provvedimenti.",id:56},{detto:"Acqua currend n port vlen",traduzione:"Acqua corrente non porta veleno",significato:"",id:57},{detto:"C scupptresc all'arij ngap torn",traduzione:"Chi spunta in aria gli torna in testa",significato:"",id:58},{detto:"Lev a castagn ru fuch ca amm ra att",traduzione:"Toglie le castagne dal fuoco con la zampa del gatto",significato:"",id:59},{detto:"Scè a bacià u cueul allu partaall",traduzione:"Baciare il culo all'arancia.",significato:"",id:60},{detto:"Iè megghj a scè ndu paraveis strazzat ca ndù mbirn r,camat",traduzione:"E' meglio andare nel paradiso strappato che nell'inferno ricamato",significato:"",id:61},{detto:"Cioccia vecch, pddetra par",traduzione:"Asina vecchia, sembra una puledra",significato:"",id:62},{detto:"S ndà casa mej n vness u cul mej n vress",traduzione:"Se non venisse in casa mia non vedrebbe il mio culo",significato:"Le serpi che vengono in casa e spifferano i fatti propri.",id:63},{detto:"Per tonn, per spaccat, stann bbun quonn sò attaccat",traduzione:"Piede tondo, piede spaccato stanno bene se legati",significato:"Proverbio di origine pastorale. Il piede tondo sono gli equini, i piedi spaccati sono bovini, ovini e caprini.",id:64},{detto:"Cap rott e carc,rat",traduzione:"Testa rotta e carcerato",significato:"Perdere capra e cavoli.",id:65},{detto:"S ggeu addà a sseis allu pesc",traduzione:"Andare ad aspettare (comprare) il pesce al porto",significato:"quando uno si alza presto.",id:66},{detto:"C soffr c'amor n send dlor",traduzione:"Chi soffre per amore non prova dolore",significato:"",id:67},{detto:"L vuoi r Tolv ca s'appzzcai Sand Chierc",traduzione:"I guai di Tolve che s'incendiò San Chirico",significato:"",id:68},{detto:"Vecchia addein ngrass a cucein",traduzione:"Vecchia gallina ingrassa la cucina.",significato:"",id:69},{detto:"Na vot all'ann pass u cuos a tavl",traduzione:"Una volta l'anno c'è il formaggio a tavola",significato:"",id:70},{detto:"Vegn ndà vegn, cas assul",traduzione:"Vigne in comunità, casa isolata",significato:"Affari in comune, abitazione per proprio conto.",id:71},{detto:"C vol u mol r l'aut codd soi iè allu cust",traduzione:"Chi vuole il male degli altri, il suo è vicino",significato:"",id:72},{detto:"Porta chieus ves,ta fatt",traduzione:"Porta chiusa visita fatta",significato:"Quando uno trova la porta chiusa è come se avesse fatta la visita.",id:73},{detto:"Privt purc e can, semb c'a mazza mman",traduzione:"Preti, porci e cani sempre con il bastone tra le mani",significato:"",id:74},{detto:"Tutt quonn n,mbonn avè a vegn ndà chiazz",traduzione:"Non tutti possono avere la vigna in piazza",significato:"Nessuno può avere il lavoro nel paese, qualcuno deve pure emigrare.",id:75},{detto:"U mol ven accavadd e s n vai all'appir",traduzione:"Il male viene a cavallo e va via a piedi",significato:"",id:76},{detto:"L'art r Brangalass: mang, veiv e stai alla spass",traduzione:"l'arte di Brancalasso: mangiare, dormire e non fare niente.",significato:"",id:77},{detto:"Min a pret e asconn a man",traduzione:"Butta la pietra e nascondi il braccio",significato:"",id:78},{detto:"Eccè vin ru teit",traduzione:"Ecchè vieni da Tito",significato:"Per dire quando uno viene da lontano.",id:79},{detto:"Marz men u fior e masc s pegghj l'onor",traduzione:"Marzo fa il fiore e maggio si prende il frutto.",significato:"",id:80},{detto:"A ppitt fac rspitt",traduzione:"La salita fa dispetto.",significato:"",id:81},{detto:"S ggeut a vvolp",traduzione:"Andare a volpi",significato:"per la caccia alla volpe si andava all'alba per cui si dice così ad uno che è assonnato.",id:82},{detto:"Stai kum na cochl",traduzione:'Si dice di una ragazza quando è bella "tonda".',significato:"",id:83},{detto:"Quonn a volp pr,d,chesc attind attind",traduzione:"Quando la volpe predica prestate attenzione",significato:"",id:84},{detto:"Ess parapatt e pac",traduzione:"Quando si sistema una cosa.",significato:"",id:85},{detto:"Sa fatej era bon a facevn l can",traduzione:"Se il lavoro era una cosa buona lavoravano i cani.",significato:"",id:86},{detto:"U sciorg chiò s mov e chiò s'azzecch",traduzione:"Il sorcio più si muove e più si incolla",significato:"Riferito alla usanza di farli incollare sui cartoni per catturarli",id:87},{detto:"C ten cuscenz n tten vr,gogn",traduzione:"Chi ha coscienza non ha vergogna",significato:"",id:88},{detto:"Chidd r for s'a vern lor",traduzione:"Quelli di fuori fanno da se",significato:"",id:89},{detto:"Quonn crest raj a farein u riovl lev a codd",traduzione:"Quando Dio da la farina il diavolo toglie il sacco",significato:"",id:90},{detto:"Cundrott fatt ndà cas pegghjl e vasl",traduzione:"Contratto fatto in casa prendilo e bacialo.",significato:"",id:91},{detto:"Appezzch nu c,rog,n a g,s,crest e naut allu riovl",traduzione:"Accendi un cero a Gesù ed uno al diavolo",significato:"",id:92},{detto:"Crap, crapitt e zemmr sò tutt na razz",traduzione:"Capre, capretti e caproni sono tutti una razza",significato:"Tutta l'erba un fascio.",id:93},{detto:"Quonn a pecur fac bee perd u vccon",traduzione:"quando la pecore bela perde il boccone",significato:"",id:94},{detto:"Vnneut, frneut",traduzione:"Venduto, finito.",significato:"",id:95},{detto:"C'adda fa u tradimend? O n'amic o nu parend",traduzione:"Chi può tradire? O un amico o un parente",significato:"",id:96},{detto:"Piacer scett all'Amerch ch n fà l favor",traduzione:"Il signor Piacere andò in America per non fare i favori.",significato:"",id:97},{detto:"Nda cas ru scarpar l scarp rott",traduzione:"In casa del calzolaio le scarpe rotte.",significato:"",id:98},{detto:"Attakk u ciocc add vvol u patreun",traduzione:"Lega l'asino dove vuole il padrone",significato:"il cliente ha sempre ragione (paga lui, quindi...)",id:99},{detto:"vai arranghiè u rreit",traduzione:"Andare a mangiare",significato:"ovvio.",id:100},{detto:"C s'asconn dret u resct par a tutto quond",traduzione:"Chi si nasconde dietro al dito compare a tutti",significato:"",id:101},{detto:"T chiam a copp e rsponn a dnar",traduzione:"Ti chiamo a coppe e rispondi a denari",significato:"Quando ti chiedono una cosa e capisci un'altra.",id:102},{detto:"Zocchr e acq r ros n'ha uastat mai nsceuna cos",traduzione:"Zucchero ed acqua di rosa non guastano mai niente.",significato:"",id:103},{detto:"S tin a casa gross enghjl r spein",traduzione:"Se hai la casa grossa riempila di spine",significato:"Casa grande molti ospiti, allora devi provvedere a tenerli lontani.",id:104},{detto:"A grass cucein a mserj iè vcein",traduzione:"La grassa cucina la miseria è vicina",significato:"",id:105},{detto:"Panza chien n crer u rsceun",traduzione:"Chi ha la pancia piena non crede chi è digiuno",significato:"",id:106},{detto:"Ha dett mammarann liv u zich e mett u grann",traduzione:"Ha detto nonna togli il bambino e metti l'adulto",significato:"il rispetto per gli anziani.",id:107},{detto:"Torct vgntidd fin a quonn s' tnridd",traduzione:"Piegati fuscello fin quando sei tenero",significato:"Proverbio pedagogico, i bambini vanno educati da piccoli.",id:108},{detto:"N'ucchj alla att e n'ucchj a fresc u pesc",traduzione:"Un'occhio al gatto ed un occhio a friggere il pesce",significato:"",id:109},{detto:"Quonn u panar vaj e ven l'amcezij s manden",traduzione:"Quando il paniere va e viene l'amicizia si mantiene",significato:"",id:110},{detto:"A ra dd,n vin a rà mber u potr",traduzione:"Da dove arrivi, da Piè del Prato?",significato:"Quando uno arriva stanco e trafelato.",id:111},{detto:"U vsteit iè neur, l'anm iè trest, frekn u popl a nom r crest",traduzione:"Il vestito è nero, l'anima è triste, fregano il popolo a nome di Cristo",significato:"E' riferito a preti e monache.",id:112},{detto:"a carn s scett e l can mor,n r fam",traduzione:"La carne si spreca ed i cani muoiono di fame",significato:"chi troppo e chi niente.",id:113},{detto:"Tadda vnè a occia sren",traduzione:"Ti deve venire un colpo",significato:"",id:114},{detto:"Add cachn l vacch n,nd pegghj nind; add ddorm s pegghj u malvind",traduzione:"Dove cacano le mucche non si prende niente, dove dormono si prende il Malvento (generica realzione cutanea allergica).",significato:"",id:115},{detto:"Gend senza fegghj nè parer nè cunzegghj",traduzione:"Gente che non ha figli nè pareri nè consigli",significato:"diffidare da chi non ha figli.",id:116},{detto:"Crest mann u fredd mbas all pann",traduzione:"Dio manda il freddo in base ai panni",significato:"",id:117},{detto:"U ciocc arrach a pagghj e lu ciocc sa mang",traduzione:"L'asino trasporta la paglia e l'asino la mangia",significato:"",id:118},{detto:"C veiv fateji",traduzione:"Chi beve, lavora",significato:"",id:119},{detto:"Sadda mett a ppar a par a sciammerch cu scarpar",traduzione:"Si deve mettere a confronto una donnaccia con il calzolaio",significato:"Confronto tra una cosa che non vale ed uno che vale.",id:120},{detto:"L pecur arrocchj e l fess a coppj",traduzione:"Le pecore in gruppo ed i fessi a coppia",significato:"",id:121},{detto:"C vol abbà u vcein prest a ser e prest u matein",traduzione:"Chi vuole gabbare il vicino presto la sera e presto il mattino.",significato:"",id:122},{detto:"C s'assumeggj s pegghj",traduzione:"Chi si somiglia si piglia",significato:"",id:123},{detto:"S so purc tornn",traduzione:"Se sono maiali torneranno",significato:"",id:124},{detto:"Quonn squoggh a nev l stronz enzn arà for",traduzione:"Quando si scioglie la neve gli stronzi escono fuori",significato:"tutti i nodi vengono al pettine; la vera natura delle persone viene sempre fuori.",id:125},{detto:"S ggeut affagliand",traduzione:"",significato:"non avere niente.",id:126},{detto:"Và a ppscià a pagghh annatavann",traduzione:"Vai a pisciare la paglia da qualche altra parte",significato:"vai a rompere le scatole da qualche altra parte.",id:127},{detto:"S cum nu ciocc vzieus",traduzione:"Essere come un asino vizioso",significato:"Quando uno non vuole far niente.",id:128},{detto:"Quonn chiov n secca nind",traduzione:"Quando piove non secca niente",significato:"",id:129},{detto:"S ggeut fiacc",traduzione:"",significato:"quando uno non ottiene niente.",id:130},{detto:"Adda rreiv chiand u zaccon",traduzione:"Dove arrivo pianto il paletto",significato:"",id:131},{detto:"U zeit e la zeit Angolozz e Margareit",traduzione:"Il fidanzato e la fidanzata, Angelo e Margarita",significato:"Per sfottere due romanticoni che vanno mano nella mano.",id:132},{detto:"A dd faj l leun rumon l sc,kherd",traduzione:"Dove si tagliano gli alberi restano i trucioli",significato:"",id:133},{detto:"Attind alla att ca nnand t'allesc e dret t gratt",traduzione:"Attendo al gatto che davanti ti liscia e dietro ti gratta",significato:"",id:134},{detto:"Aost cap r virn",traduzione:"Agosto inizio dell'inverno",significato:"",id:135},{detto:"Su ciocc n mmen a col a tre ann nà men chiò",traduzione:"Se l'asino non ha la coda a tre anni non gli cresce più",significato:"Le cose se non si hanno dopo un certo tempo non si hanno più.",id:136},{detto:"Cett, cett sett purc ndà l faf",traduzione:"zitto zitto, sette maiali nelle fave",significato:"",id:137},{detto:"Sparagn sparagn u cul s'arrafagn",traduzione:"risparmiando risparmiando il culo si stringe",significato:"non sempre conviene fare un'eccessiva economia.",id:138},{detto:"T canosc c,ras",traduzione:"Ti conosco ciliegia",significato:"Ti conosco bene.",id:139},{detto:"Sogra c,cat nora furtunot",traduzione:"Suocera cieca, nuora fortunata",significato:"",id:140},{detto:"Alla cas r l plttorn iè semb fest",traduzione:"A casa dei poltroni è sempre festa",significato:"",id:141},{detto:"So mnenn, uoj mnenn, so grann uoj grann",traduzione:"Sono piccoli guai piccoli, sono grandi guai grandi.",significato:"",id:142},{detto:"a bband r curlet, invec r scè nnand vai ndret",traduzione:"La banda di Coleto invece di andare avanti và indietro",significato:"invece di progredire si peggiora.",id:143},{detto:"Quonn chiov e men vind u cacciator n,nz abboscch nind",traduzione:"Quando piove e tira vento il cacciatore non becca niente.",significato:"",id:144,related:[196]},{detto:"U cuon ru vccir iè lord r sangu e ca panza vacand",traduzione:"Il cane del macellaio è sporco di sangue ma digiuno",significato:"le apparenze ingannano.",id:145},{detto:"A nott parl chian u iurn uordt attorn",traduzione:"La notte parla piano ed il giorno guardati intorno",significato:"",id:146},{detto:"U litt s chiam ros.... n,nz dorm s ripos",traduzione:"Il letto si chiama Rosa, non si dorme ma si riposa",significato:"",id:147},{detto:"L'omn si ver mbacc a men,l",traduzione:"L'uomo si vede a confronto con l'albero del mandorlo",significato:"il legno del mandorlo è notoriamente duro. L'uomo che lo riusciva ad abbattere con l'ascia era 'buono'.",id:148},{detto:"Apr l'ucchij e serr u cueul",traduzione:"Apri gli occhi e chiudi il culo: attento alle fregature.",significato:"",id:149},{detto:"Frosc r scopa nov u rriovl s' nnammor",traduzione:"Fruscio di scopa nuova il diavolo si innamora.",significato:"",id:150},{detto:"C ten a cap r vetr n mnass l pret",traduzione:"Chi ha la testa di vetro non deve lanciare le pietre",significato:"",id:151},{detto:"Fuk r pagghj a ciocc t'arragghj",traduzione:"Fuoco di paglia l'asino raglia.",significato:"",id:152},{detto:"Rspett u cuon ca mor ru patreun",traduzione:"Rispetta il cane per il padrone",significato:"",id:153},{detto:"Kokk mia kokk, pozz care' add n cand, pozz care' e pozz sckatta' demm quand'ann aggia' camba'",traduzione:"Gufo mio gufo, possa tu cadere dove non canti, possa tu cadere e possa tu morire ma dimmi quanti anni devo vivere.",significato:"",id:154},{detto:"S'arrcord a vegn nda chiazz",traduzione:"Si ricorda la vigna in piazza",significato:"Una cosa indietro negli anni.",id:155},{detto:"Iè brott cum u rebbt",traduzione:"E' brutto come il debito",significato:"",id:156},{detto:"L ciocc s screrrn e l varreil s rombn",traduzione:"Gli asini litigano e le botti si rompono",significato:"",id:157},{detto:"Passa osc e vena craj",traduzione:"Passa oggi e viene domani.",significato:"",id:158},{detto:"C zapp e c vrnegn",traduzione:"Chi zappa e chi vendemmia.",significato:"",id:159},{detto:"C mor ch l fong fess ciu chiong",traduzione:"E' scemo chi si addolora per la morte di uno avvelenato dai funghi",significato:"",id:160},{detto:"Tanda vot vai u secch all'acq fin a quonn s romb",traduzione:"Tante volte va il secchio all'acqua fin quando si rompe",significato:"",id:161},{detto:"Ah! Rcett Ronna Lell quonn acchiàtt u cuon a att e la fegghia ngend",traduzione:"Ah! disse Donna Lella quando trovò il cane, il gatto e la figlia in stato interessante.",significato:"",id:162},{detto:"L'art r l pacc",traduzione:"Fare l'arte dei pazzi.",significato:"",id:163},{detto:"Cum g,s,crest ta mann ta pegghj",traduzione:"Come Dio la manda la prendi",significato:"Non si può fare niente contro il fato.",id:164},{detto:"E' chiuveut e nvcat tutt l rott sò apparat",traduzione:"Piove e nevica ma tutto si aggiusta",significato:"Quando ci sono dissidi tra persone che rapidamente si sanano.",id:165},{detto:"Aveut a grazzj abbat u sond",traduzione:"Ricevuta la grazia gabbato il santo",significato:"",id:166},{detto:"Raccomonn a pecur allu leup",traduzione:"Raccomandare la pecora al lupo",significato:"",id:167},{detto:"S ggeut a t,rà a sc,rpnat",traduzione:"",significato:"quando uno è stanco.",id:168},{detto:"Scapl ss voj e damm ssa rat",traduzione:"Togli questi buoi e dammi l'aratro.",significato:"Quando a uno serve qualcosa.",id:169},{detto:"A capa bell iè senza crvidd",traduzione:"La testa bella è senza cervello",significato:"",id:170},{detto:"Iè ciut cum na gnagn r cirr",traduzione:"E' scemo come una ghianda di cerro.",significato:"",id:171},{detto:"Fest, maltimb e frstir alla cas",traduzione:"Festa, maltempo e forestieri a casa",significato:"Il massimo della sfiga.",id:172},{detto:"Scè olm",traduzione:"Andare olmo",significato:"Non avere niente, non bere. È da ricollegarsi al gioco della birra.",id:173},{detto:"Can e cafeun lassn a porta apert",traduzione:"Cani e cafoni lasciano la porta aperta",significato:"Per dare del cafone a qualcuno che non ha chiuso la porta dietro di se, facendogli notare che oltre a loro solo chi non è in grado di chiudere la porta (come i cani) non lo fa ",id:174},{detto:"C t vol ben chiò ra mamm u cor t ngann",traduzione:"Chi ti vuol bene più della mamma inganna il tuo cuore",significato:"",id:175},{detto:"Scè a mnà a sarach mmocc a san bangrazij",traduzione:"Mettere la sardina in bocca a San Pancrazio",significato:"Quando non piove bisogna far venire sete a San Pancrazio.",id:176},{detto:"U cuon affamt n,nz appaeur ru baston",traduzione:"Il cane che ha fame non ha paura del bastone",significato:"",id:177},{detto:"U mir bbun s venn senza frasch",traduzione:"Il vino buono si vende senza frasche.",significato:"",id:178},{detto:"Curreit fiumicidd addà a scoss allu mar",traduzione:"Correte ruscelli a dare la scossa al mare",significato:"",id:179},{detto:"Hai ll,ndat a vregghj",traduzione:"Lasciare le briglie",significato:"Sbizzarrirsi.",id:180},{detto:"Parind e cuggein s fann ch preim",traduzione:"parenti e cugini si fanno per primi",significato:"Il fare ha un ovvio significato.",id:181},{detto:"Crest rai a croc a c ten l spadd chiò gross",traduzione:"Dio dà la croce a chi ha le spalle più grosse",significato:"",id:182},{detto:"Pegghj u bun quonn l'hai ca u mal n mmanca mai",traduzione:"Prendi il buono quando c'è perchè il male non scarseggia",significato:"Versione tricaricese del carpe diem.",id:183},{detto:"C battezz, patrezz",traduzione:"",significato:"Chi fa da padrino fa anche da padre",id:184},{detto:"Quonn a panz iè vacand n,nz son e n,nz cand, quonn a panz iè chien bbon tann s cand e s son",traduzione:"Quando la pancia è vuota non si suona e non si canta, quando la pancia è piena a sufficienza si canta e si suona",significato:"",id:185},{detto:"Ciocc vicchj e meul vicchj vann a murè alla cas r l fess",traduzione:"Asini e muli vecchi muoiono alla case degli scemi",significato:"chi non è attento fa cattivi affari (come comprare un mulo che poi ti muore)",id:186},{detto:"O t mang sta mnestr o t min ra fnestr",traduzione:"O ti mangi questa minestra o ti butti dalla finestra",significato:"",id:187},{detto:"Prumett cert e n vin men s,cheur",traduzione:"Prometti con certezza e non potrai mantenerlo",significato:"",id:188},{detto:"Rcett u poppl alla faf, timb ng vol ma u prteus t'aggia fà",traduzione:"Disse il verme della fava, dammi tempo ma il buco te lo faccio",significato:"Con la pazienza si ottiene tutto. Altro significato sessuale (spiegazione intuibile).",id:189},{detto:"K mangiart u pon r stu cummend aia fa tand ndu cul ftend",traduzione:"Per magiare il pane di questo convento devi farti un mazzo così.",significato:"",id:190},{detto:"U supirchj romb l cupirchj",traduzione:"Il di più rompe i coperchi",significato:"",id:191},{detto:"fà a mort ru picur",traduzione:"Fare la morte della pecora",significato:"fare una brutta morte.",id:192},{detto:"Nn vu e nn lass",traduzione:"Non ne vuoi e non ne lasci",significato:"",id:193},{detto:"Quott r foggh e cengh r mnestr",traduzione:"Quattro di verdure e cinque di minestra",significato:"L'arte di arrangiarsi come si può",id:194},{detto:"C n'acn r sal prdett a mnestr",traduzione:"Per un pizzico di sale perse l'intera minestra",significato:"",id:195,related:[52]},{detto:"Quonn chiov e men vind u cacciator stai all'abbind",traduzione:"Quando piove e tira vento il cacciatore sta a riposo",significato:"",id:196,related:[144]}],So=e=>(Dc("data-v-8886ac97"),e=e(),xc(),e),Rp={class:"detto-of-today"},Dp={class:"title"},xp=So(()=>_e("div",{class:"display-medium"}," Detto di oggi ",-1)),Np={class:"date body-medium"},kp={class:"detto-container"},Mp={class:"detto-card"},Lp={class:"detto body-large"},$p={key:0,class:"traduzione field"},jp=So(()=>_e("div",{class:"title-medium"}," Traduzione ",-1)),Bp={class:"body-large"},Fp={key:1,class:"significato field"},Hp=So(()=>_e("div",{class:"title-medium"}," Significato ",-1)),Up={class:"body-large"},qp=an({__name:"DettoOfToday",setup(e){const t=i(new Date)%Ur.length,n=Ur.filter(o=>o.id===t)[0];function i(o){const r=new Date(o.getFullYear(),0,1),s=o.getTime()-r.getTime(),c=24*60*60*1e3;return Math.floor(s/c)}return(o,r)=>(Dt(),En("div",Rp,[_e("div",Dp,[xp,_e("div",Np,fn(new Date().toLocaleDateString()),1)]),_e("div",kp,[_e("div",Mp,[_e("div",Lp,fn(ye(n).detto),1),ye(n).traduzione.length>0?(Dt(),En("div",$p,[jp,_e("div",Bp,fn(ye(n).traduzione),1)])):Wo("",!0),ye(n).significato.length>0?(Dt(),En("div",Fp,[Hp,_e("div",Up,fn(ye(n).significato),1)])):Wo("",!0)])])]))}}),Vp=(e,t)=>{const n=e.__vccOpts||e;for(const[i,o]of t)n[i]=o;return n},Kp=Vp(qp,[["__scopeId","data-v-8886ac97"]]),Wp=an({__name:"HomeView",setup(e){return(t,n)=>(Dt(),En("main",null,[pe(Kp)]))}}),Gp=hf({history:Hu("/"),routes:[{path:"/",name:"home",component:Wp}]}),Io=ru(Op);Io.use(uu());Io.use(Gp);Io.mount("#app");
