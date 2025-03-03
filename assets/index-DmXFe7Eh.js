(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var dd={exports:{}},cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function DA(){if(K_)return cl;K_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var g in l)g!=="key"&&(c[g]=l[g])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return cl.Fragment=t,cl.jsx=n,cl.jsxs=n,cl}var Q_;function OA(){return Q_||(Q_=1,dd.exports=DA()),dd.exports}var vt=OA(),md={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function NA(){if(Y_)return bt;Y_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=C&&D[C]||D["@@iterator"],typeof D=="function"?D:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,J={};function Q(D,X,at){this.props=D,this.context=X,this.refs=J,this.updater=at||q}Q.prototype.isReactComponent={},Q.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},Q.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function pt(){}pt.prototype=Q.prototype;function ht(D,X,at){this.props=D,this.context=X,this.refs=J,this.updater=at||q}var W=ht.prototype=new pt;W.constructor=ht,$(W,Q.prototype),W.isPureReactComponent=!0;var dt=Array.isArray,ot={H:null,A:null,T:null,S:null},Tt=Object.prototype.hasOwnProperty;function V(D,X,at,et,nt,wt){return at=wt.ref,{$$typeof:r,type:D,key:X,ref:at!==void 0?at:null,props:wt}}function b(D,X){return V(D.type,X,void 0,void 0,void 0,D.props)}function S(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function I(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(at){return X[at]})}var M=/\/+/g;function U(D,X){return typeof D=="object"&&D!==null&&D.key!=null?I(""+D.key):X.toString(36)}function w(){}function pe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(w,w):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ce(D,X,at,et,nt){var wt=typeof D;(wt==="undefined"||wt==="boolean")&&(D=null);var Rt=!1;if(D===null)Rt=!0;else switch(wt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(D.$$typeof){case r:case t:Rt=!0;break;case A:return Rt=D._init,ce(Rt(D._payload),X,at,et,nt)}}if(Rt)return nt=nt(D),Rt=et===""?"."+U(D,0):et,dt(nt)?(at="",Rt!=null&&(at=Rt.replace(M,"$&/")+"/"),ce(nt,X,at,"",function(ne){return ne})):nt!=null&&(S(nt)&&(nt=b(nt,at+(nt.key==null||D&&D.key===nt.key?"":(""+nt.key).replace(M,"$&/")+"/")+Rt)),X.push(nt)),1;Rt=0;var he=et===""?".":et+":";if(dt(D))for(var xt=0;xt<D.length;xt++)et=D[xt],wt=he+U(et,xt),Rt+=ce(et,X,at,wt,nt);else if(xt=x(D),typeof xt=="function")for(D=xt.call(D),xt=0;!(et=D.next()).done;)et=et.value,wt=he+U(et,xt++),Rt+=ce(et,X,at,wt,nt);else if(wt==="object"){if(typeof D.then=="function")return ce(pe(D),X,at,et,nt);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function tt(D,X,at){if(D==null)return D;var et=[],nt=0;return ce(D,et,"","",function(wt){return X.call(at,wt,nt++)}),et}function _t(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(at){(D._status===0||D._status===-1)&&(D._status=1,D._result=at)},function(at){(D._status===0||D._status===-1)&&(D._status=2,D._result=at)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var ut=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function qt(){}return bt.Children={map:tt,forEach:function(D,X,at){tt(D,function(){X.apply(this,arguments)},at)},count:function(D){var X=0;return tt(D,function(){X++}),X},toArray:function(D){return tt(D,function(X){return X})||[]},only:function(D){if(!S(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},bt.Component=Q,bt.Fragment=n,bt.Profiler=l,bt.PureComponent=ht,bt.StrictMode=s,bt.Suspense=p,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ot,bt.act=function(){throw Error("act(...) is not supported in production builds of React.")},bt.cache=function(D){return function(){return D.apply(null,arguments)}},bt.cloneElement=function(D,X,at){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var et=$({},D.props),nt=D.key,wt=void 0;if(X!=null)for(Rt in X.ref!==void 0&&(wt=void 0),X.key!==void 0&&(nt=""+X.key),X)!Tt.call(X,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&X.ref===void 0||(et[Rt]=X[Rt]);var Rt=arguments.length-2;if(Rt===1)et.children=at;else if(1<Rt){for(var he=Array(Rt),xt=0;xt<Rt;xt++)he[xt]=arguments[xt+2];et.children=he}return V(D.type,nt,void 0,void 0,wt,et)},bt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},bt.createElement=function(D,X,at){var et,nt={},wt=null;if(X!=null)for(et in X.key!==void 0&&(wt=""+X.key),X)Tt.call(X,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(nt[et]=X[et]);var Rt=arguments.length-2;if(Rt===1)nt.children=at;else if(1<Rt){for(var he=Array(Rt),xt=0;xt<Rt;xt++)he[xt]=arguments[xt+2];nt.children=he}if(D&&D.defaultProps)for(et in Rt=D.defaultProps,Rt)nt[et]===void 0&&(nt[et]=Rt[et]);return V(D,wt,void 0,void 0,null,nt)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(D){return{$$typeof:g,render:D}},bt.isValidElement=S,bt.lazy=function(D){return{$$typeof:A,_payload:{_status:-1,_result:D},_init:_t}},bt.memo=function(D,X){return{$$typeof:y,type:D,compare:X===void 0?null:X}},bt.startTransition=function(D){var X=ot.T,at={};ot.T=at;try{var et=D(),nt=ot.S;nt!==null&&nt(at,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(qt,ut)}catch(wt){ut(wt)}finally{ot.T=X}},bt.unstable_useCacheRefresh=function(){return ot.H.useCacheRefresh()},bt.use=function(D){return ot.H.use(D)},bt.useActionState=function(D,X,at){return ot.H.useActionState(D,X,at)},bt.useCallback=function(D,X){return ot.H.useCallback(D,X)},bt.useContext=function(D){return ot.H.useContext(D)},bt.useDebugValue=function(){},bt.useDeferredValue=function(D,X){return ot.H.useDeferredValue(D,X)},bt.useEffect=function(D,X){return ot.H.useEffect(D,X)},bt.useId=function(){return ot.H.useId()},bt.useImperativeHandle=function(D,X,at){return ot.H.useImperativeHandle(D,X,at)},bt.useInsertionEffect=function(D,X){return ot.H.useInsertionEffect(D,X)},bt.useLayoutEffect=function(D,X){return ot.H.useLayoutEffect(D,X)},bt.useMemo=function(D,X){return ot.H.useMemo(D,X)},bt.useOptimistic=function(D,X){return ot.H.useOptimistic(D,X)},bt.useReducer=function(D,X,at){return ot.H.useReducer(D,X,at)},bt.useRef=function(D){return ot.H.useRef(D)},bt.useState=function(D){return ot.H.useState(D)},bt.useSyncExternalStore=function(D,X,at){return ot.H.useSyncExternalStore(D,X,at)},bt.useTransition=function(){return ot.H.useTransition()},bt.version="19.0.0",bt}var X_;function im(){return X_||(X_=1,md.exports=NA()),md.exports}var Pr=im(),gd={exports:{}},hl={},pd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function VA(){return $_||($_=1,function(r){function t(tt,_t){var ut=tt.length;tt.push(_t);t:for(;0<ut;){var qt=ut-1>>>1,D=tt[qt];if(0<l(D,_t))tt[qt]=_t,tt[ut]=D,ut=qt;else break t}}function n(tt){return tt.length===0?null:tt[0]}function s(tt){if(tt.length===0)return null;var _t=tt[0],ut=tt.pop();if(ut!==_t){tt[0]=ut;t:for(var qt=0,D=tt.length,X=D>>>1;qt<X;){var at=2*(qt+1)-1,et=tt[at],nt=at+1,wt=tt[nt];if(0>l(et,ut))nt<D&&0>l(wt,et)?(tt[qt]=wt,tt[nt]=ut,qt=nt):(tt[qt]=et,tt[at]=ut,qt=at);else if(nt<D&&0>l(wt,ut))tt[qt]=wt,tt[nt]=ut,qt=nt;else break t}}return _t}function l(tt,_t){var ut=tt.sortIndex-_t.sortIndex;return ut!==0?ut:tt.id-_t.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var p=[],y=[],A=1,C=null,x=3,q=!1,$=!1,J=!1,Q=typeof setTimeout=="function"?setTimeout:null,pt=typeof clearTimeout=="function"?clearTimeout:null,ht=typeof setImmediate<"u"?setImmediate:null;function W(tt){for(var _t=n(y);_t!==null;){if(_t.callback===null)s(y);else if(_t.startTime<=tt)s(y),_t.sortIndex=_t.expirationTime,t(p,_t);else break;_t=n(y)}}function dt(tt){if(J=!1,W(tt),!$)if(n(p)!==null)$=!0,pe();else{var _t=n(y);_t!==null&&ce(dt,_t.startTime-tt)}}var ot=!1,Tt=-1,V=5,b=-1;function S(){return!(r.unstable_now()-b<V)}function I(){if(ot){var tt=r.unstable_now();b=tt;var _t=!0;try{t:{$=!1,J&&(J=!1,pt(Tt),Tt=-1),q=!0;var ut=x;try{e:{for(W(tt),C=n(p);C!==null&&!(C.expirationTime>tt&&S());){var qt=C.callback;if(typeof qt=="function"){C.callback=null,x=C.priorityLevel;var D=qt(C.expirationTime<=tt);if(tt=r.unstable_now(),typeof D=="function"){C.callback=D,W(tt),_t=!0;break e}C===n(p)&&s(p),W(tt)}else s(p);C=n(p)}if(C!==null)_t=!0;else{var X=n(y);X!==null&&ce(dt,X.startTime-tt),_t=!1}}break t}finally{C=null,x=ut,q=!1}_t=void 0}}finally{_t?M():ot=!1}}}var M;if(typeof ht=="function")M=function(){ht(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,w=U.port2;U.port1.onmessage=I,M=function(){w.postMessage(null)}}else M=function(){Q(I,0)};function pe(){ot||(ot=!0,M())}function ce(tt,_t){Tt=Q(function(){tt(r.unstable_now())},_t)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(tt){tt.callback=null},r.unstable_continueExecution=function(){$||q||($=!0,pe())},r.unstable_forceFrameRate=function(tt){0>tt||125<tt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<tt?Math.floor(1e3/tt):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(tt){switch(x){case 1:case 2:case 3:var _t=3;break;default:_t=x}var ut=x;x=_t;try{return tt()}finally{x=ut}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(tt,_t){switch(tt){case 1:case 2:case 3:case 4:case 5:break;default:tt=3}var ut=x;x=tt;try{return _t()}finally{x=ut}},r.unstable_scheduleCallback=function(tt,_t,ut){var qt=r.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?qt+ut:qt):ut=qt,tt){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ut+D,tt={id:A++,callback:_t,priorityLevel:tt,startTime:ut,expirationTime:D,sortIndex:-1},ut>qt?(tt.sortIndex=ut,t(y,tt),n(p)===null&&tt===n(y)&&(J?(pt(Tt),Tt=-1):J=!0,ce(dt,ut-qt))):(tt.sortIndex=D,t(p,tt),$||q||($=!0,pe())),tt},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(tt){var _t=x;return function(){var ut=x;x=_t;try{return tt.apply(this,arguments)}finally{x=ut}}}}(_d)),_d}var W_;function MA(){return W_||(W_=1,pd.exports=VA()),pd.exports}var yd={exports:{}},je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function kA(){if(Z_)return je;Z_=1;var r=im();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)y+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,y,A){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:C==null?null:""+C,children:p,containerInfo:y,implementation:A}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,je.createPortal=function(p,y){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(p,y,null,A)},je.flushSync=function(p){var y=f.T,A=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=A,s.d.f()}},je.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},je.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},je.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var A=y.as,C=g(A,y.crossOrigin),x=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;A==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:C,integrity:x,fetchPriority:q}):A==="script"&&s.d.X(p,{crossOrigin:C,integrity:x,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},je.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var A=g(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},je.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var A=y.as,C=g(A,y.crossOrigin);s.d.L(p,A,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},je.preloadModule=function(p,y){if(typeof p=="string")if(y){var A=g(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},je.requestFormReset=function(p){s.d.r(p)},je.unstable_batchedUpdates=function(p,y){return p(y)},je.useFormState=function(p,y,A){return f.H.useFormState(p,y,A)},je.useFormStatus=function(){return f.H.useHostTransitionStatus()},je.version="19.0.0",je}var J_;function PA(){if(J_)return yd.exports;J_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yd.exports=kA(),yd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function UA(){if(ty)return hl;ty=1;var r=MA(),t=im(),n=PA();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),q=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),pt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),dt=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function Tt(e){return e===null||typeof e!="object"?null:(e=ot&&e[ot]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function b(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case g:return"Portal";case A:return"Profiler";case y:return"StrictMode";case J:return"Suspense";case Q:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case q:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case $:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pt:return i=e.displayName||null,i!==null?i:b(e.type)||"Memo";case ht:i=e._payload,e=e._init;try{return b(e(i))}catch{}}return null}var S=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign,M,U;function w(e){if(M===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);M=i&&i[1]||"",U=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+e+U}var pe=!1;function ce(e,i){if(!e||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(H){var z=H}Reflect.construct(e,[],K)}else{try{K.call()}catch(H){z=H}e.call(K.prototype)}}else{try{throw Error()}catch(H){z=H}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(H){if(H&&z&&typeof H.stack=="string")return[H.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var R=v.split(`
`),N=E.split(`
`);for(h=o=0;o<R.length&&!R[o].includes("DetermineComponentFrameRoot");)o++;for(;h<N.length&&!N[h].includes("DetermineComponentFrameRoot");)h++;if(o===R.length||h===N.length)for(o=R.length-1,h=N.length-1;1<=o&&0<=h&&R[o]!==N[h];)h--;for(;1<=o&&0<=h;o--,h--)if(R[o]!==N[h]){if(o!==1||h!==1)do if(o--,h--,0>h||R[o]!==N[h]){var j=`
`+R[o].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=o&&0<=h);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?w(a):""}function tt(e){switch(e.tag){case 26:case 27:case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function _t(e){try{var i="";do i+=tt(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ut(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function qt(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function D(e){if(ut(e)!==e)throw Error(s(188))}function X(e){var i=e.alternate;if(!i){if(i=ut(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return D(h),e;if(d===o)return D(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,o=d;break}if(E===o){v=!0,o=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,o=h;break}if(E===o){v=!0,o=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function at(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=at(e),i!==null)return i;e=e.sibling}return null}var et=Array.isArray,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wt={pending:!1,data:null,method:null,action:null},Rt=[],he=-1;function xt(e){return{current:e}}function ne(e){0>he||(e.current=Rt[he],Rt[he]=null,he--)}function Gt(e,i){he++,Rt[he]=e.current,e.current=i}var Ye=xt(null),pi=xt(null),mn=xt(null),Wi=xt(null);function Zi(e,i){switch(Gt(mn,i),Gt(pi,e),Gt(Ye,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?T_(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=T_(e),i=A_(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ne(Ye),Gt(Ye,i)}function _i(){ne(Ye),ne(pi),ne(mn)}function ro(e){e.memoizedState!==null&&Gt(Wi,e);var i=Ye.current,a=A_(i,e.type);i!==a&&(Gt(pi,e),Gt(Ye,a))}function Qs(e){pi.current===e&&(ne(Ye),ne(pi)),Wi.current===e&&(ne(Wi),sl._currentValue=wt)}var Ys=Object.prototype.hasOwnProperty,es=r.unstable_scheduleCallback,Xs=r.unstable_cancelCallback,mh=r.unstable_shouldYield,so=r.unstable_requestPaint,tn=r.unstable_now,ql=r.unstable_getCurrentPriorityLevel,_e=r.unstable_ImmediatePriority,we=r.unstable_UserBlockingPriority,yi=r.unstable_NormalPriority,jl=r.unstable_LowPriority,ao=r.unstable_IdlePriority,gh=r.log,ns=r.unstable_setDisableYieldValue,Ji=null,He=null;function oo(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}function qn(e){if(typeof gh=="function"&&ns(e),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(Ji,e)}catch{}}var Xe=Math.clz32?Math.clz32:Gl,lo=Math.log,Fl=Math.LN2;function Gl(e){return e>>>=0,e===0?32:31-(lo(e)/Fl|0)|0}var jn=128,tr=4194304;function Vn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gn(e,i){var a=e.pendingLanes;if(a===0)return 0;var o=0,h=e.suspendedLanes,d=e.pingedLanes,v=e.warmLanes;e=e.finishedLanes!==0;var E=a&134217727;return E!==0?(a=E&~h,a!==0?o=Vn(a):(d&=E,d!==0?o=Vn(d):e||(v=E&~v,v!==0&&(o=Vn(v))))):(E=a&~h,E!==0?o=Vn(E):d!==0?o=Vn(d):e||(v=a&~v,v!==0&&(o=Vn(v)))),o===0?0:i!==0&&i!==o&&(i&h)===0&&(h=o&-o,v=i&-i,h>=v||h===32&&(v&4194176)!==0)?i:o}function er(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function $s(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uo(){var e=jn;return jn<<=1,(jn&4194176)===0&&(jn=128),e}function nr(){var e=tr;return tr<<=1,(tr&62914560)===0&&(tr=4194304),e}function Ws(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function oe(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kl(e,i,a,o,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,R=e.expirationTimes,N=e.hiddenUpdates;for(a=v&~a;0<a;){var j=31-Xe(a),K=1<<j;E[j]=0,R[j]=-1;var z=N[j];if(z!==null)for(N[j]=null,j=0;j<z.length;j++){var H=z[j];H!==null&&(H.lane&=-536870913)}a&=~K}o!==0&&ir(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function ir(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Xe(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function rr(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Xe(a),h=1<<o;h&i|e[o]&i&&(e[o]|=i),a&=~h}}function Ql(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yl(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:B_(e.type))}function sr(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var Fn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+Fn,ye="__reactProps$"+Fn,vi="__reactContainer$"+Fn,is="__reactEvents$"+Fn,Zs="__reactListeners$"+Fn,Gn="__reactHandles$"+Fn,co="__reactResources$"+Fn,ar="__reactMarker$"+Fn;function rs(e){delete e[Ie],delete e[ye],delete e[is],delete e[Zs],delete e[Gn]}function Mn(e){var i=e[Ie];if(i)return i;for(var a=e.parentNode;a;){if(i=a[vi]||a[Ie]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=b_(e);e!==null;){if(a=e[Ie])return a;e=b_(e)}return i}e=a,a=e.parentNode}return null}function Ei(e){if(e=e[Ie]||e[vi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function or(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function lr(e){var i=e[co];return i||(i=e[co]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Zt(e){e[ar]=!0}var ho=new Set,Js={};function an(e,i){en(e,i),en(e+"Capture",i)}function en(e,i){for(Js[e]=i,e=0;e<i.length;e++)ho.add(i[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ph=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fo={},mo={};function Xl(e){return Ys.call(mo,e)?!0:Ys.call(fo,e)?!1:ph.test(e)?mo[e]=!0:(fo[e]=!0,!1)}function ur(e,i,a){if(Xl(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function cr(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function pn(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $l(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _h(e){var i=$l(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){o=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ss(e){e._valueTracker||(e._valueTracker=_h(e))}function go(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=$l(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ti=/[\n"\\]/g;function ie(e){return e.replace(Ti,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hr(e,i,a,o,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+$e(i)):e.value!==""+$e(i)&&(e.value=""+$e(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?ea(e,v,$e(i)):a!=null?ea(e,v,$e(a)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+$e(E):e.removeAttribute("name")}function as(e,i,a,o,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+$e(a):"",i=i!=null?""+$e(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function ea(e,i,a){i==="number"&&ta(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function zt(e,i,a,o){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function os(e,i,a){if(i!=null&&(i=""+$e(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+$e(a):""}function fr(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(et(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=$e(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function _n(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var yh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function po(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||yh.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Wl(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&a[h]!==o&&po(e,h,o)}else for(var d in i)i.hasOwnProperty(d)&&po(e,d,i[d])}function _o(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Eh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Eh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yn=null;function na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,Si=null;function Ri(e){var i=Ei(e);if(i&&(e=i.stateNode)){var a=e[ye]||null;t:switch(e=i.stateNode,i.type){case"input":if(hr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var h=o[ye]||null;if(!h)throw Error(s(90));hr(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&go(o)}break t;case"textarea":os(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&zt(e,!!a.multiple,i,!1)}}}var yo=!1;function Zl(e,i,a){if(yo)return e(i,a);yo=!0;try{var o=e(i);return o}finally{if(yo=!1,(Ai!==null||Si!==null)&&(ju(),Ai&&(i=Ai,e=Si,Si=Ai=null,Ri(i),e)))for(i=0;i<e.length;i++)Ri(e[i])}}function ls(e,i){var a=e.stateNode;if(a===null)return null;var o=a[ye]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var vn=!1;if(on)try{var us={};Object.defineProperty(us,"passive",{get:function(){vn=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{vn=!1}var Qn=null,dr=null,bi=null;function vo(){if(bi)return bi;var e,i=dr,a=i.length,o,h="value"in Qn?Qn.value:Qn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(o=1;o<=v&&i[a-o]===h[d-o];o++);return bi=h.slice(e,1<o?1-o:void 0)}function Yn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Xn(){return!0}function Eo(){return!1}function Ce(e){function i(a,o,h,d,v){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Xn:Eo,this.isPropagationStopped=Eo,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),i}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=Ce(jt),cs=I({},jt,{view:0,detail:0}),Jl=Ce(cs),ra,sa,$n,hs=I({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(ra=e.screenX-$n.screenX,sa=e.screenY-$n.screenY):sa=ra=0,$n=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),En=Ce(hs),tu=I({},hs,{dataTransfer:0}),Th=Ce(tu),fs=I({},cs,{relatedTarget:0}),aa=Ce(fs),To=I({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),oa=Ce(To),eu=I({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),la=Ce(eu),Ah=I({},jt,{data:0}),Ao=Ce(Ah),ds={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function So(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=iu[e])?!!i[e]:!1}function ms(){return So}var ru=I({},cs,{key:function(e){if(e.key){var i=ds[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Yn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?Yn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ua=Ce(ru),su=I({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ro=Ce(su),wi=I({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),au=Ce(wi),ou=I({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),lu=Ce(ou),uu=I({},hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ca=Ce(uu),We=I({},jt,{newState:0,oldState:0}),cu=Ce(We),hu=[9,13,27,32],Wn=on&&"CompositionEvent"in window,u=null;on&&"documentMode"in document&&(u=document.documentMode);var m=on&&"TextEvent"in window&&!u,_=on&&(!Wn||u&&8<u&&11>=u),T=" ",P=!1;function B(e,i){switch(e){case"keyup":return hu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function ve(e,i){switch(e){case"compositionend":return Z(i);case"keypress":return i.which!==32?null:(P=!0,T);case"textInput":return e=i.data,e===T&&P?null:e;default:return null}}function Pt(e,i){if(kt)return e==="compositionend"||!Wn&&B(e,i)?(e=vo(),bi=dr=Qn=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var De={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ee(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!De[e.type]:i==="textarea"}function Ii(e,i,a,o){Ai?Si?Si.push(o):Si=[o]:Ai=o,i=Yu(i,"onChange"),0<i.length&&(a=new ia("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var ke=null,Zn=null;function bo(e){p_(e,0)}function fu(e){var i=or(e);if(go(i))return e}function Gm(e,i){if(e==="change")return i}var Km=!1;if(on){var Sh;if(on){var Rh="oninput"in document;if(!Rh){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),Rh=typeof Qm.oninput=="function"}Sh=Rh}else Sh=!1;Km=Sh&&(!document.documentMode||9<document.documentMode)}function Ym(){ke&&(ke.detachEvent("onpropertychange",Xm),Zn=ke=null)}function Xm(e){if(e.propertyName==="value"&&fu(Zn)){var i=[];Ii(i,Zn,e,na(e)),Zl(bo,i)}}function s0(e,i,a){e==="focusin"?(Ym(),ke=i,Zn=a,ke.attachEvent("onpropertychange",Xm)):e==="focusout"&&Ym()}function a0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fu(Zn)}function o0(e,i){if(e==="click")return fu(i)}function l0(e,i){if(e==="input"||e==="change")return fu(i)}function u0(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ln=typeof Object.is=="function"?Object.is:u0;function wo(e,i){if(ln(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!Ys.call(i,h)||!ln(e[h],i[h]))return!1}return!0}function $m(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wm(e,i){var a=$m(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$m(a)}}function Zm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Zm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Jm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ta(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ta(e.document)}return i}function bh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function c0(e,i){var a=Jm(i);i=e.focusedElem;var o=e.selectionRange;if(a!==i&&i&&i.ownerDocument&&Zm(i.ownerDocument.documentElement,i)){if(o!==null&&bh(i)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(a,i.value.length);else if(a=(e=i.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(o.start,h);o=o.end===void 0?d:Math.min(o.end,h),!a.extend&&d>o&&(h=o,o=d,d=h),h=Wm(i,d);var v=Wm(i,o);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(e=e.createRange(),e.setStart(h.node,h.offset),a.removeAllRanges(),d>o?(a.addRange(e),a.extend(v.node,v.offset)):(e.setEnd(v.node,v.offset),a.addRange(e)))}}for(e=[],a=i;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)a=e[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var h0=on&&"documentMode"in document&&11>=document.documentMode,ha=null,wh=null,Io=null,Ih=!1;function tg(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ih||ha==null||ha!==ta(o)||(o=ha,"selectionStart"in o&&bh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Io&&wo(Io,o)||(Io=o,o=Yu(wh,"onSelect"),0<o.length&&(i=new ia("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=ha)))}function gs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var fa={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},Ch={},eg={};on&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function ps(e){if(Ch[e])return Ch[e];if(!fa[e])return e;var i=fa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in eg)return Ch[e]=i[a];return e}var ng=ps("animationend"),ig=ps("animationiteration"),rg=ps("animationstart"),f0=ps("transitionrun"),d0=ps("transitionstart"),m0=ps("transitioncancel"),sg=ps("transitionend"),ag=new Map,og="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function kn(e,i){ag.set(e,i),an(i,[e])}var Tn=[],da=0,Dh=0;function du(){for(var e=da,i=Dh=da=0;i<e;){var a=Tn[i];Tn[i++]=null;var o=Tn[i];Tn[i++]=null;var h=Tn[i];Tn[i++]=null;var d=Tn[i];if(Tn[i++]=null,o!==null&&h!==null){var v=o.pending;v===null?h.next=h:(h.next=v.next,v.next=h),o.pending=h}d!==0&&lg(a,h,d)}}function mu(e,i,a,o){Tn[da++]=e,Tn[da++]=i,Tn[da++]=a,Tn[da++]=o,Dh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Oh(e,i,a,o){return mu(e,i,a,o),gu(e)}function mr(e,i){return mu(e,null,null,i),gu(e)}function lg(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;h&&i!==null&&e.tag===3&&(d=e.stateNode,h=31-Xe(a),d=d.hiddenUpdates,e=d[h],e===null?d[h]=[i]:e.push(i),i.lane=a|536870912)}function gu(e){if(50<Zo)throw Zo=0,Lf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ma={},ug=new WeakMap;function An(e,i){if(typeof e=="object"&&e!==null){var a=ug.get(e);return a!==void 0?a:(i={value:e,source:i,stack:_t(i)},ug.set(e,i),i)}return{value:e,source:i,stack:_t(i)}}var ga=[],pa=0,pu=null,_u=0,Sn=[],Rn=0,_s=null,Ci=1,Di="";function ys(e,i){ga[pa++]=_u,ga[pa++]=pu,pu=e,_u=i}function cg(e,i,a){Sn[Rn++]=Ci,Sn[Rn++]=Di,Sn[Rn++]=_s,_s=e;var o=Ci;e=Di;var h=32-Xe(o)-1;o&=~(1<<h),a+=1;var d=32-Xe(i)+h;if(30<d){var v=h-h%5;d=(o&(1<<v)-1).toString(32),o>>=v,h-=v,Ci=1<<32-Xe(i)+h|a<<h|o,Di=d+e}else Ci=1<<d|a<<h|o,Di=e}function Nh(e){e.return!==null&&(ys(e,1),cg(e,1,0))}function Vh(e){for(;e===pu;)pu=ga[--pa],ga[pa]=null,_u=ga[--pa],ga[pa]=null;for(;e===_s;)_s=Sn[--Rn],Sn[Rn]=null,Di=Sn[--Rn],Sn[Rn]=null,Ci=Sn[--Rn],Sn[Rn]=null}var Ze=null,Pe=null,Bt=!1,Pn=null,Jn=!1,Mh=Error(s(519));function vs(e){var i=Error(s(418,""));throw Oo(An(i,e)),Mh}function hg(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[Ie]=e,i[ye]=o,a){case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":case"embed":Vt("load",i);break;case"video":case"audio":for(a=0;a<tl.length;a++)Vt(tl[a],i);break;case"source":Vt("error",i);break;case"img":case"image":case"link":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"input":Vt("invalid",i),as(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ss(i);break;case"select":Vt("invalid",i);break;case"textarea":Vt("invalid",i),fr(i,o.value,o.defaultValue,o.children),ss(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||E_(i.textContent,a)?(o.popover!=null&&(Vt("beforetoggle",i),Vt("toggle",i)),o.onScroll!=null&&Vt("scroll",i),o.onScrollEnd!=null&&Vt("scrollend",i),o.onClick!=null&&(i.onclick=Xu),i=!0):i=!1,i||vs(e)}function fg(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 3:case 27:Jn=!0;return;case 5:case 13:Jn=!1;return;default:Ze=Ze.return}}function Co(e){if(e!==Ze)return!1;if(!Bt)return fg(e),Bt=!0,!1;var i=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||td(e.type,e.memoizedProps)),a=!a),a&&(i=!0),i&&Pe&&vs(e),fg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){Pe=Ln(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}Pe=null}}else Pe=Ze?Ln(e.stateNode.nextSibling):null;return!0}function Do(){Pe=Ze=null,Bt=!1}function Oo(e){Pn===null?Pn=[e]:Pn.push(e)}var No=Error(s(460)),dg=Error(s(474)),kh={then:function(){}};function mg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yu(){}function gg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(yu,yu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===No?Error(s(483)):e;default:if(typeof i.status=="string")i.then(yu,yu);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===No?Error(s(483)):e}throw Vo=i,No}}var Vo=null;function pg(){if(Vo===null)throw Error(s(459));var e=Vo;return Vo=null,e}var _a=null,Mo=0;function vu(e){var i=Mo;return Mo+=1,_a===null&&(_a=[]),gg(_a,e,i)}function ko(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Eu(e,i){throw i.$$typeof===c?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function _g(e){var i=e._init;return i(e._payload)}function yg(e){function i(k,O){if(e){var L=k.deletions;L===null?(k.deletions=[O],k.flags|=16):L.push(O)}}function a(k,O){if(!e)return null;for(;O!==null;)i(k,O),O=O.sibling;return null}function o(k){for(var O=new Map;k!==null;)k.key!==null?O.set(k.key,k):O.set(k.index,k),k=k.sibling;return O}function h(k,O){return k=wr(k,O),k.index=0,k.sibling=null,k}function d(k,O,L){return k.index=L,e?(L=k.alternate,L!==null?(L=L.index,L<O?(k.flags|=33554434,O):L):(k.flags|=33554434,O)):(k.flags|=1048576,O)}function v(k){return e&&k.alternate===null&&(k.flags|=33554434),k}function E(k,O,L,F){return O===null||O.tag!==6?(O=Df(L,k.mode,F),O.return=k,O):(O=h(O,L),O.return=k,O)}function R(k,O,L,F){var rt=L.type;return rt===p?j(k,O,L.props.children,F,L.key):O!==null&&(O.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===ht&&_g(rt)===O.type)?(O=h(O,L.props),ko(O,L),O.return=k,O):(O=xu(L.type,L.key,L.props,null,k.mode,F),ko(O,L),O.return=k,O)}function N(k,O,L,F){return O===null||O.tag!==4||O.stateNode.containerInfo!==L.containerInfo||O.stateNode.implementation!==L.implementation?(O=Of(L,k.mode,F),O.return=k,O):(O=h(O,L.children||[]),O.return=k,O)}function j(k,O,L,F,rt){return O===null||O.tag!==7?(O=Ds(L,k.mode,F,rt),O.return=k,O):(O=h(O,L),O.return=k,O)}function K(k,O,L){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Df(""+O,k.mode,L),O.return=k,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case f:return L=xu(O.type,O.key,O.props,null,k.mode,L),ko(L,O),L.return=k,L;case g:return O=Of(O,k.mode,L),O.return=k,O;case ht:var F=O._init;return O=F(O._payload),K(k,O,L)}if(et(O)||Tt(O))return O=Ds(O,k.mode,L,null),O.return=k,O;if(typeof O.then=="function")return K(k,vu(O),L);if(O.$$typeof===q)return K(k,Pu(k,O),L);Eu(k,O)}return null}function z(k,O,L,F){var rt=O!==null?O.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return rt!==null?null:E(k,O,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case f:return L.key===rt?R(k,O,L,F):null;case g:return L.key===rt?N(k,O,L,F):null;case ht:return rt=L._init,L=rt(L._payload),z(k,O,L,F)}if(et(L)||Tt(L))return rt!==null?null:j(k,O,L,F,null);if(typeof L.then=="function")return z(k,O,vu(L),F);if(L.$$typeof===q)return z(k,O,Pu(k,L),F);Eu(k,L)}return null}function H(k,O,L,F,rt){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return k=k.get(L)||null,E(O,k,""+F,rt);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case f:return k=k.get(F.key===null?L:F.key)||null,R(O,k,F,rt);case g:return k=k.get(F.key===null?L:F.key)||null,N(O,k,F,rt);case ht:var Ct=F._init;return F=Ct(F._payload),H(k,O,L,F,rt)}if(et(F)||Tt(F))return k=k.get(L)||null,j(O,k,F,rt,null);if(typeof F.then=="function")return H(k,O,L,vu(F),rt);if(F.$$typeof===q)return H(k,O,L,Pu(O,F),rt);Eu(O,F)}return null}function st(k,O,L,F){for(var rt=null,Ct=null,lt=O,mt=O=0,Ve=null;lt!==null&&mt<L.length;mt++){lt.index>mt?(Ve=lt,lt=null):Ve=lt.sibling;var Ht=z(k,lt,L[mt],F);if(Ht===null){lt===null&&(lt=Ve);break}e&&lt&&Ht.alternate===null&&i(k,lt),O=d(Ht,O,mt),Ct===null?rt=Ht:Ct.sibling=Ht,Ct=Ht,lt=Ve}if(mt===L.length)return a(k,lt),Bt&&ys(k,mt),rt;if(lt===null){for(;mt<L.length;mt++)lt=K(k,L[mt],F),lt!==null&&(O=d(lt,O,mt),Ct===null?rt=lt:Ct.sibling=lt,Ct=lt);return Bt&&ys(k,mt),rt}for(lt=o(lt);mt<L.length;mt++)Ve=H(lt,k,mt,L[mt],F),Ve!==null&&(e&&Ve.alternate!==null&&lt.delete(Ve.key===null?mt:Ve.key),O=d(Ve,O,mt),Ct===null?rt=Ve:Ct.sibling=Ve,Ct=Ve);return e&&lt.forEach(function(Mr){return i(k,Mr)}),Bt&&ys(k,mt),rt}function At(k,O,L,F){if(L==null)throw Error(s(151));for(var rt=null,Ct=null,lt=O,mt=O=0,Ve=null,Ht=L.next();lt!==null&&!Ht.done;mt++,Ht=L.next()){lt.index>mt?(Ve=lt,lt=null):Ve=lt.sibling;var Mr=z(k,lt,Ht.value,F);if(Mr===null){lt===null&&(lt=Ve);break}e&&lt&&Mr.alternate===null&&i(k,lt),O=d(Mr,O,mt),Ct===null?rt=Mr:Ct.sibling=Mr,Ct=Mr,lt=Ve}if(Ht.done)return a(k,lt),Bt&&ys(k,mt),rt;if(lt===null){for(;!Ht.done;mt++,Ht=L.next())Ht=K(k,Ht.value,F),Ht!==null&&(O=d(Ht,O,mt),Ct===null?rt=Ht:Ct.sibling=Ht,Ct=Ht);return Bt&&ys(k,mt),rt}for(lt=o(lt);!Ht.done;mt++,Ht=L.next())Ht=H(lt,k,mt,Ht.value,F),Ht!==null&&(e&&Ht.alternate!==null&&lt.delete(Ht.key===null?mt:Ht.key),O=d(Ht,O,mt),Ct===null?rt=Ht:Ct.sibling=Ht,Ct=Ht);return e&&lt.forEach(function(CA){return i(k,CA)}),Bt&&ys(k,mt),rt}function ae(k,O,L,F){if(typeof L=="object"&&L!==null&&L.type===p&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case f:t:{for(var rt=L.key;O!==null;){if(O.key===rt){if(rt=L.type,rt===p){if(O.tag===7){a(k,O.sibling),F=h(O,L.props.children),F.return=k,k=F;break t}}else if(O.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===ht&&_g(rt)===O.type){a(k,O.sibling),F=h(O,L.props),ko(F,L),F.return=k,k=F;break t}a(k,O);break}else i(k,O);O=O.sibling}L.type===p?(F=Ds(L.props.children,k.mode,F,L.key),F.return=k,k=F):(F=xu(L.type,L.key,L.props,null,k.mode,F),ko(F,L),F.return=k,k=F)}return v(k);case g:t:{for(rt=L.key;O!==null;){if(O.key===rt)if(O.tag===4&&O.stateNode.containerInfo===L.containerInfo&&O.stateNode.implementation===L.implementation){a(k,O.sibling),F=h(O,L.children||[]),F.return=k,k=F;break t}else{a(k,O);break}else i(k,O);O=O.sibling}F=Of(L,k.mode,F),F.return=k,k=F}return v(k);case ht:return rt=L._init,L=rt(L._payload),ae(k,O,L,F)}if(et(L))return st(k,O,L,F);if(Tt(L)){if(rt=Tt(L),typeof rt!="function")throw Error(s(150));return L=rt.call(L),At(k,O,L,F)}if(typeof L.then=="function")return ae(k,O,vu(L),F);if(L.$$typeof===q)return ae(k,O,Pu(k,L),F);Eu(k,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,O!==null&&O.tag===6?(a(k,O.sibling),F=h(O,L),F.return=k,k=F):(a(k,O),F=Df(L,k.mode,F),F.return=k,k=F),v(k)):a(k,O)}return function(k,O,L,F){try{Mo=0;var rt=ae(k,O,L,F);return _a=null,rt}catch(lt){if(lt===No)throw lt;var Ct=Cn(29,lt,null,k.mode);return Ct.lanes=F,Ct.return=k,Ct}finally{}}}var Es=yg(!0),vg=yg(!1),ya=xt(null),Tu=xt(0);function Eg(e,i){e=Bi,Gt(Tu,e),Gt(ya,i),Bi=e|i.baseLanes}function Ph(){Gt(Tu,Bi),Gt(ya,ya.current)}function Uh(){Bi=Tu.current,ne(ya),ne(Tu)}var bn=xt(null),ti=null;function gr(e){var i=e.alternate;Gt(Te,Te.current&1),Gt(bn,e),ti===null&&(i===null||ya.current!==null||i.memoizedState!==null)&&(ti=e)}function Tg(e){if(e.tag===22){if(Gt(Te,Te.current),Gt(bn,e),ti===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ti=e)}}else pr()}function pr(){Gt(Te,Te.current),Gt(bn,bn.current)}function Oi(e){ne(bn),ti===e&&(ti=null),ne(Te)}var Te=xt(0);function Au(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var g0=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},p0=r.unstable_scheduleCallback,_0=r.unstable_NormalPriority,Ae={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lh(){return{controller:new g0,data:new Map,refCount:0}}function Po(e){e.refCount--,e.refCount===0&&p0(_0,function(){e.controller.abort()})}var Uo=null,xh=0,va=0,Ea=null;function y0(e,i){if(Uo===null){var a=Uo=[];xh=0,va=Gf(),Ea={status:"pending",value:void 0,then:function(o){a.push(o)}}}return xh++,i.then(Ag,Ag),i}function Ag(){if(--xh===0&&Uo!==null){Ea!==null&&(Ea.status="fulfilled");var e=Uo;Uo=null,va=0,Ea=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function v0(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var Sg=S.S;S.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&y0(e,i),Sg!==null&&Sg(e,i)};var Ts=xt(null);function zh(){var e=Ts.current;return e!==null?e:Xt.pooledCache}function Su(e,i){i===null?Gt(Ts,Ts.current):Gt(Ts,i.pool)}function Rg(){var e=zh();return e===null?null:{parent:Ae._currentValue,pool:e}}var _r=0,It=null,Kt=null,fe=null,Ru=!1,Ta=!1,As=!1,bu=0,Lo=0,Aa=null,E0=0;function le(){throw Error(s(321))}function Bh(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!ln(e[a],i[a]))return!1;return!0}function Hh(e,i,a,o,h,d){return _r=d,It=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,S.H=e===null||e.memoizedState===null?Ss:yr,As=!1,d=a(o,h),As=!1,Ta&&(d=wg(i,a,o,h)),bg(e),d}function bg(e){S.H=ei;var i=Kt!==null&&Kt.next!==null;if(_r=0,fe=Kt=It=null,Ru=!1,Lo=0,Aa=null,i)throw Error(s(300));e===null||Oe||(e=e.dependencies,e!==null&&ku(e)&&(Oe=!0))}function wg(e,i,a,o){It=e;var h=0;do{if(Ta&&(Aa=null),Lo=0,Ta=!1,25<=h)throw Error(s(301));if(h+=1,fe=Kt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=Rs,d=i(a,o)}while(Ta);return d}function T0(){var e=S.H,i=e.useState()[0];return i=typeof i.then=="function"?xo(i):i,e=e.useState()[0],(Kt!==null?Kt.memoizedState:null)!==e&&(It.flags|=1024),i}function qh(){var e=bu!==0;return bu=0,e}function jh(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Fh(e){if(Ru){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ru=!1}_r=0,fe=Kt=It=null,Ta=!1,Lo=bu=0,Aa=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?It.memoizedState=fe=e:fe=fe.next=e,fe}function de(){if(Kt===null){var e=It.alternate;e=e!==null?e.memoizedState:null}else e=Kt.next;var i=fe===null?It.memoizedState:fe.next;if(i!==null)fe=i,Kt=e;else{if(e===null)throw It.alternate===null?Error(s(467)):Error(s(310));Kt=e,e={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},fe===null?It.memoizedState=fe=e:fe=fe.next=e}return fe}var wu;wu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function xo(e){var i=Lo;return Lo+=1,Aa===null&&(Aa=[]),e=gg(Aa,e,i),i=It,(fe===null?i.memoizedState:fe.next)===null&&(i=i.alternate,S.H=i===null||i.memoizedState===null?Ss:yr),e}function Iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===q)return qe(e)}throw Error(s(438,String(e)))}function Gh(e){var i=null,a=It.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=It.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=wu(),It.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=dt;return i.index++,a}function Ni(e,i){return typeof i=="function"?i(e):i}function Cu(e){var i=de();return Kh(i,Kt,e)}function Kh(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,R=null,N=i,j=!1;do{var K=N.lane&-536870913;if(K!==N.lane?(Ut&K)===K:(_r&K)===K){var z=N.revertLane;if(z===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),K===va&&(j=!0);else if((_r&z)===z){N=N.next,z===va&&(j=!0);continue}else K={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},R===null?(E=R=K,v=d):R=R.next=K,It.lanes|=z,Ir|=z;K=N.action,As&&a(d,K),d=N.hasEagerState?N.eagerState:a(d,K)}else z={lane:K,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},R===null?(E=R=z,v=d):R=R.next=z,It.lanes|=K,Ir|=K;N=N.next}while(N!==null&&N!==i);if(R===null?v=d:R.next=E,!ln(d,e.memoizedState)&&(Oe=!0,j&&(a=Ea,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=R,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Qh(e){var i=de(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);ln(d,i.memoizedState)||(Oe=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function Ig(e,i,a){var o=It,h=de(),d=Bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!ln((Kt||h).memoizedState,a);if(v&&(h.memoizedState=a,Oe=!0),h=h.queue,$h(Og.bind(null,o,h,e),[e]),h.getSnapshot!==i||v||fe!==null&&fe.memoizedState.tag&1){if(o.flags|=2048,Sa(9,Dg.bind(null,o,h,a,i),{destroy:void 0},null),Xt===null)throw Error(s(349));d||(_r&60)!==0||Cg(o,i,a)}return a}function Cg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=It.updateQueue,i===null?(i=wu(),It.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Dg(e,i,a,o){i.value=a,i.getSnapshot=o,Ng(i)&&Vg(e)}function Og(e,i,a){return a(function(){Ng(i)&&Vg(e)})}function Ng(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!ln(e,a)}catch{return!0}}function Vg(e){var i=mr(e,2);i!==null&&Je(i,e,2)}function Yh(e){var i=nn();if(typeof e=="function"){var a=e;if(e=a(),As){qn(!0);try{a()}finally{qn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},i}function Mg(e,i,a,o){return e.baseState=a,Kh(e,Kt,typeof o=="function"?o:Ni)}function A0(e,i,a,o,h){if(Nu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};S.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,kg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function kg(e,i){var a=i.action,o=i.payload,h=e.state;if(i.isTransition){var d=S.T,v={};S.T=v;try{var E=a(h,o),R=S.S;R!==null&&R(v,E),Pg(e,i,E)}catch(N){Xh(e,i,N)}finally{S.T=d}}else try{d=a(h,o),Pg(e,i,d)}catch(N){Xh(e,i,N)}}function Pg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ug(e,i,o)},function(o){return Xh(e,i,o)}):Ug(e,i,a)}function Ug(e,i,a){i.status="fulfilled",i.value=a,Lg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,kg(e,a)))}function Xh(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Lg(i),i=i.next;while(i!==o)}e.action=null}function Lg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function xg(e,i){return i}function zg(e,i){if(Bt){var a=Xt.formState;if(a!==null){t:{var o=It;if(Bt){if(Pe){e:{for(var h=Pe,d=Jn;h.nodeType!==8;){if(!d){h=null;break e}if(h=Ln(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Pe=Ln(h.nextSibling),o=h.data==="F!";break t}}vs(o)}o=!1}o&&(i=a[0])}}return a=nn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:i},a.queue=o,a=ip.bind(null,It,o),o.dispatch=a,o=Yh(!1),d=ef.bind(null,It,!1,o.queue),o=nn(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,a=A0.bind(null,It,h,d,a),h.dispatch=a,o.memoizedState=e,[i,a,!1]}function Bg(e){var i=de();return Hg(i,Kt,e)}function Hg(e,i,a){i=Kh(e,i,xg)[0],e=Cu(Ni)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?xo(i):i;var o=de(),h=o.queue,d=h.dispatch;return a!==o.memoizedState&&(It.flags|=2048,Sa(9,S0.bind(null,h,a),{destroy:void 0},null)),[i,d,e]}function S0(e,i){e.action=i}function qg(e){var i=de(),a=Kt;if(a!==null)return Hg(i,a,e);de(),i=i.memoizedState,a=de();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function Sa(e,i,a,o){return e={tag:e,create:i,inst:a,deps:o,next:null},i=It.updateQueue,i===null&&(i=wu(),It.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function jg(){return de().memoizedState}function Du(e,i,a,o){var h=nn();It.flags|=e,h.memoizedState=Sa(1|i,a,{destroy:void 0},o===void 0?null:o)}function Ou(e,i,a,o){var h=de();o=o===void 0?null:o;var d=h.memoizedState.inst;Kt!==null&&o!==null&&Bh(o,Kt.memoizedState.deps)?h.memoizedState=Sa(i,a,d,o):(It.flags|=e,h.memoizedState=Sa(1|i,a,d,o))}function Fg(e,i){Du(8390656,8,e,i)}function $h(e,i){Ou(2048,8,e,i)}function Gg(e,i){return Ou(4,2,e,i)}function Kg(e,i){return Ou(4,4,e,i)}function Qg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Yg(e,i,a){a=a!=null?a.concat([e]):null,Ou(4,4,Qg.bind(null,i,e),a)}function Wh(){}function Xg(e,i){var a=de();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Bh(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function $g(e,i){var a=de();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Bh(i,o[1]))return o[0];if(o=e(),As){qn(!0);try{e()}finally{qn(!1)}}return a.memoizedState=[o,i],o}function Zh(e,i,a){return a===void 0||(_r&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Zp(),It.lanes|=e,Ir|=e,a)}function Wg(e,i,a,o){return ln(a,i)?a:ya.current!==null?(e=Zh(e,a,o),ln(e,i)||(Oe=!0),e):(_r&42)===0?(Oe=!0,e.memoizedState=a):(e=Zp(),It.lanes|=e,Ir|=e,i)}function Zg(e,i,a,o,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=S.T,E={};S.T=E,ef(e,!1,i,a);try{var R=h(),N=S.S;if(N!==null&&N(E,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var j=v0(R,o);zo(e,i,j,fn(e))}else zo(e,i,o,fn(e))}catch(K){zo(e,i,{then:function(){},status:"rejected",reason:K},fn())}finally{nt.p=d,S.T=v}}function R0(){}function Jh(e,i,a,o){if(e.tag!==5)throw Error(s(476));var h=Jg(e).queue;Zg(e,h,i,wt,a===null?R0:function(){return tp(e),a(o)})}function Jg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:wt,baseState:wt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:wt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function tp(e){var i=Jg(e).next.queue;zo(e,i,{},fn())}function tf(){return qe(sl)}function ep(){return de().memoizedState}function np(){return de().memoizedState}function b0(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=fn();e=Tr(a);var o=Ar(i,e,a);o!==null&&(Je(o,i,a),qo(o,i,a)),i={cache:Lh()},e.payload=i;return}i=i.return}}function w0(e,i,a){var o=fn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Nu(e)?rp(i,a):(a=Oh(e,i,a,o),a!==null&&(Je(a,e,o),sp(a,i,o)))}function ip(e,i,a){var o=fn();zo(e,i,a,o)}function zo(e,i,a,o){var h={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))rp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,ln(E,v))return mu(e,i,h,0),Xt===null&&du(),!1}catch{}finally{}if(a=Oh(e,i,h,o),a!==null)return Je(a,e,o),sp(a,i,o),!0}return!1}function ef(e,i,a,o){if(o={lane:2,revertLane:Gf(),action:o,hasEagerState:!1,eagerState:null,next:null},Nu(e)){if(i)throw Error(s(479))}else i=Oh(e,a,o,2),i!==null&&Je(i,e,2)}function Nu(e){var i=e.alternate;return e===It||i!==null&&i===It}function rp(e,i){Ta=Ru=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function sp(e,i,a){if((a&4194176)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,rr(e,a)}}var ei={readContext:qe,use:Iu,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useInsertionEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useSyncExternalStore:le,useId:le};ei.useCacheRefresh=le,ei.useMemoCache=le,ei.useHostTransitionStatus=le,ei.useFormState=le,ei.useActionState=le,ei.useOptimistic=le;var Ss={readContext:qe,use:Iu,useCallback:function(e,i){return nn().memoizedState=[e,i===void 0?null:i],e},useContext:qe,useEffect:Fg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Du(4194308,4,Qg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Du(4194308,4,e,i)},useInsertionEffect:function(e,i){Du(4,2,e,i)},useMemo:function(e,i){var a=nn();i=i===void 0?null:i;var o=e();if(As){qn(!0);try{e()}finally{qn(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=nn();if(a!==void 0){var h=a(i);if(As){qn(!0);try{a(i)}finally{qn(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=w0.bind(null,It,e),[o.memoizedState,e]},useRef:function(e){var i=nn();return e={current:e},i.memoizedState=e},useState:function(e){e=Yh(e);var i=e.queue,a=ip.bind(null,It,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Wh,useDeferredValue:function(e,i){var a=nn();return Zh(a,e,i)},useTransition:function(){var e=Yh(!1);return e=Zg.bind(null,It,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=It,h=nn();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Xt===null)throw Error(s(349));(Ut&60)!==0||Cg(o,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Fg(Og.bind(null,o,d,e),[e]),o.flags|=2048,Sa(9,Dg.bind(null,o,d,a,i),{destroy:void 0},null),a},useId:function(){var e=nn(),i=Xt.identifierPrefix;if(Bt){var a=Di,o=Ci;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,i=":"+i+"R"+a,a=bu++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=E0++,i=":"+i+"r"+a.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return nn().memoizedState=b0.bind(null,It)}};Ss.useMemoCache=Gh,Ss.useHostTransitionStatus=tf,Ss.useFormState=zg,Ss.useActionState=zg,Ss.useOptimistic=function(e){var i=nn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=ef.bind(null,It,!0,a),a.dispatch=i,[e,i]};var yr={readContext:qe,use:Iu,useCallback:Xg,useContext:qe,useEffect:$h,useImperativeHandle:Yg,useInsertionEffect:Gg,useLayoutEffect:Kg,useMemo:$g,useReducer:Cu,useRef:jg,useState:function(){return Cu(Ni)},useDebugValue:Wh,useDeferredValue:function(e,i){var a=de();return Wg(a,Kt.memoizedState,e,i)},useTransition:function(){var e=Cu(Ni)[0],i=de().memoizedState;return[typeof e=="boolean"?e:xo(e),i]},useSyncExternalStore:Ig,useId:ep};yr.useCacheRefresh=np,yr.useMemoCache=Gh,yr.useHostTransitionStatus=tf,yr.useFormState=Bg,yr.useActionState=Bg,yr.useOptimistic=function(e,i){var a=de();return Mg(a,Kt,e,i)};var Rs={readContext:qe,use:Iu,useCallback:Xg,useContext:qe,useEffect:$h,useImperativeHandle:Yg,useInsertionEffect:Gg,useLayoutEffect:Kg,useMemo:$g,useReducer:Qh,useRef:jg,useState:function(){return Qh(Ni)},useDebugValue:Wh,useDeferredValue:function(e,i){var a=de();return Kt===null?Zh(a,e,i):Wg(a,Kt.memoizedState,e,i)},useTransition:function(){var e=Qh(Ni)[0],i=de().memoizedState;return[typeof e=="boolean"?e:xo(e),i]},useSyncExternalStore:Ig,useId:ep};Rs.useCacheRefresh=np,Rs.useMemoCache=Gh,Rs.useHostTransitionStatus=tf,Rs.useFormState=qg,Rs.useActionState=qg,Rs.useOptimistic=function(e,i){var a=de();return Kt!==null?Mg(a,Kt,e,i):(a.baseState=e,[e,a.queue.dispatch])};function nf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:I({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rf={isMounted:function(e){return(e=e._reactInternals)?ut(e)===e:!1},enqueueSetState:function(e,i,a){e=e._reactInternals;var o=fn(),h=Tr(o);h.payload=i,a!=null&&(h.callback=a),i=Ar(e,h,o),i!==null&&(Je(i,e,o),qo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=fn(),h=Tr(o);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Ar(e,h,o),i!==null&&(Je(i,e,o),qo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=fn(),o=Tr(a);o.tag=2,i!=null&&(o.callback=i),i=Ar(e,o,a),i!==null&&(Je(i,e,a),qo(i,e,a))}};function ap(e,i,a,o,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,v):i.prototype&&i.prototype.isPureReactComponent?!wo(a,o)||!wo(h,d):!0}function op(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&rf.enqueueReplaceState(i,i.state,null)}function bs(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=I({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function lp(e){Vu(e)}function up(e){console.error(e)}function cp(e){Vu(e)}function Mu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function hp(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function sf(e,i,a){return a=Tr(a),a.tag=3,a.payload={element:null},a.callback=function(){Mu(e,i)},a}function fp(e){return e=Tr(e),e.tag=3,e}function dp(e,i,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){hp(i,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){hp(i,a,o),typeof h!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function I0(e,i,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Ho(i,a,h,!0),a=bn.current,a!==null){switch(a.tag){case 13:return ti===null?Bf():a.alternate===null&&se===0&&(se=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===kh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),qf(e,o,h)),!1;case 22:return a.flags|=65536,o===kh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),qf(e,o,h)),!1}throw Error(s(435,a.tag))}return qf(e,o,h),Bf(),!1}if(Bt)return i=bn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==Mh&&(e=Error(s(422),{cause:o}),Oo(An(e,a)))):(o!==Mh&&(i=Error(s(423),{cause:o}),Oo(An(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=An(o,a),h=sf(e.stateNode,o,h),Ef(e,h),se!==4&&(se=2)),!1;var d=Error(s(520),{cause:o});if(d=An(d,a),$o===null?$o=[d]:$o.push(d),se!==4&&(se=2),i===null)return!0;o=An(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=sf(a.stateNode,o,e),Ef(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Cr===null||!Cr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=fp(h),dp(h,e,a,o),Ef(a,h),!1}a=a.return}while(a!==null);return!1}var mp=Error(s(461)),Oe=!1;function Ue(e,i,a,o){i.child=e===null?vg(i,null,a,o):Es(i,e.child,a,o)}function gp(e,i,a,o,h){a=a.render;var d=i.ref;if("ref"in o){var v={};for(var E in o)E!=="ref"&&(v[E]=o[E])}else v=o;return Is(i),o=Hh(e,i,a,v,d,h),E=qh(),e!==null&&!Oe?(jh(e,i,h),Vi(e,i,h)):(Bt&&E&&Nh(i),i.flags|=1,Ue(e,i,o,h),i.child)}function pp(e,i,a,o,h){if(e===null){var d=a.type;return typeof d=="function"&&!Cf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,_p(e,i,d,o,h)):(e=xu(a.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!mf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:wo,a(v,o)&&e.ref===i.ref)return Vi(e,i,h)}return i.flags|=1,e=wr(d,o),e.ref=i.ref,e.return=i,i.child=e}function _p(e,i,a,o,h){if(e!==null){var d=e.memoizedProps;if(wo(d,o)&&e.ref===i.ref)if(Oe=!1,i.pendingProps=o=d,mf(e,h))(e.flags&131072)!==0&&(Oe=!0);else return i.lanes=e.lanes,Vi(e,i,h)}return af(e,i,a,o,h)}function yp(e,i,a){var o=i.pendingProps,h=o.children,d=(i.stateNode._pendingVisibility&2)!==0,v=e!==null?e.memoizedState:null;if(Bo(e,i),o.mode==="hidden"||d){if((i.flags&128)!==0){if(o=v!==null?v.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return vp(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Su(i,v!==null?v.cachePool:null),v!==null?Eg(i,v):Ph(),Tg(i);else return i.lanes=i.childLanes=536870912,vp(e,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(Su(i,v.cachePool),Eg(i,v),pr(),i.memoizedState=null):(e!==null&&Su(i,null),Ph(),pr());return Ue(e,i,h,a),i.child}function vp(e,i,a,o){var h=zh();return h=h===null?null:{parent:Ae._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Su(i,null),Ph(),Tg(i),e!==null&&Ho(e,i,o,!0),null}function Bo(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=2097664)}}function af(e,i,a,o,h){return Is(i),a=Hh(e,i,a,o,void 0,h),o=qh(),e!==null&&!Oe?(jh(e,i,h),Vi(e,i,h)):(Bt&&o&&Nh(i),i.flags|=1,Ue(e,i,a,h),i.child)}function Ep(e,i,a,o,h,d){return Is(i),i.updateQueue=null,a=wg(i,o,a,h),bg(e),o=qh(),e!==null&&!Oe?(jh(e,i,d),Vi(e,i,d)):(Bt&&o&&Nh(i),i.flags|=1,Ue(e,i,a,d),i.child)}function Tp(e,i,a,o,h){if(Is(i),i.stateNode===null){var d=ma,v=a.contextType;typeof v=="object"&&v!==null&&(d=qe(v)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=rf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},yf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?qe(v):ma,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(nf(i,a,v,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&rf.enqueueReplaceState(d,d.state,null),Fo(i,o,d,h),jo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,R=bs(a,E);d.props=R;var N=d.context,j=a.contextType;v=ma,typeof j=="object"&&j!==null&&(v=qe(j));var K=a.getDerivedStateFromProps;j=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,j||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||N!==v)&&op(i,d,o,v),Er=!1;var z=i.memoizedState;d.state=z,Fo(i,o,d,h),jo(),N=i.memoizedState,E||z!==N||Er?(typeof K=="function"&&(nf(i,a,K,o),N=i.memoizedState),(R=Er||ap(i,a,R,o,z,N,v))?(j||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=N),d.props=o,d.state=N,d.context=v,o=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,vf(e,i),v=i.memoizedProps,j=bs(a,v),d.props=j,K=i.pendingProps,z=d.context,N=a.contextType,R=ma,typeof N=="object"&&N!==null&&(R=qe(N)),E=a.getDerivedStateFromProps,(N=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==K||z!==R)&&op(i,d,o,R),Er=!1,z=i.memoizedState,d.state=z,Fo(i,o,d,h),jo();var H=i.memoizedState;v!==K||z!==H||Er||e!==null&&e.dependencies!==null&&ku(e.dependencies)?(typeof E=="function"&&(nf(i,a,E,o),H=i.memoizedState),(j=Er||ap(i,a,j,o,z,H,R)||e!==null&&e.dependencies!==null&&ku(e.dependencies))?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,H,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,H,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=H),d.props=o,d.state=H,d.context=R,o=j):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Bo(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=Es(i,e.child,null,h),i.child=Es(i,null,a,h)):Ue(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Vi(e,i,h),e}function Ap(e,i,a,o){return Do(),i.flags|=256,Ue(e,i,a,o),i.child}var of={dehydrated:null,treeContext:null,retryLane:0};function lf(e){return{baseLanes:e,cachePool:Rg()}}function uf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Dn),e}function Sp(e,i,a){var o=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Te.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(h?gr(i):pr(),Bt){var E=Pe,R;if(R=E){t:{for(R=E,E=Jn;R.nodeType!==8;){if(!E){E=null;break t}if(R=Ln(R.nextSibling),R===null){E=null;break t}}E=R}E!==null?(i.memoizedState={dehydrated:E,treeContext:_s!==null?{id:Ci,overflow:Di}:null,retryLane:536870912},R=Cn(18,null,null,0),R.stateNode=E,R.return=i,i.child=R,Ze=i,Pe=null,R=!0):R=!1}R||vs(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?i.lanes=16:i.lanes=536870912,null;Oi(i)}return E=o.children,o=o.fallback,h?(pr(),h=i.mode,E=hf({mode:"hidden",children:E},h),o=Ds(o,h,a,null),E.return=i,o.return=i,E.sibling=o,i.child=E,h=i.child,h.memoizedState=lf(a),h.childLanes=uf(e,v,a),i.memoizedState=of,o):(gr(i),cf(i,E))}if(R=e.memoizedState,R!==null&&(E=R.dehydrated,E!==null)){if(d)i.flags&256?(gr(i),i.flags&=-257,i=ff(e,i,a)):i.memoizedState!==null?(pr(),i.child=e.child,i.flags|=128,i=null):(pr(),h=o.fallback,E=i.mode,o=hf({mode:"visible",children:o.children},E),h=Ds(h,E,a,null),h.flags|=2,o.return=i,h.return=i,o.sibling=h,i.child=o,Es(i,e.child,null,a),o=i.child,o.memoizedState=lf(a),o.childLanes=uf(e,v,a),i.memoizedState=of,i=h);else if(gr(i),E.data==="$!"){if(v=E.nextSibling&&E.nextSibling.dataset,v)var N=v.dgst;v=N,o=Error(s(419)),o.stack="",o.digest=v,Oo({value:o,source:null,stack:null}),i=ff(e,i,a)}else if(Oe||Ho(e,i,a,!1),v=(a&e.childLanes)!==0,Oe||v){if(v=Xt,v!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(v.suspendedLanes|a))!==0?0:o,o!==0&&o!==R.retryLane)throw R.retryLane=o,mr(e,o),Je(v,e,o),mp}E.data==="$?"||Bf(),i=ff(e,i,a)}else E.data==="$?"?(i.flags|=128,i.child=e.child,i=q0.bind(null,e),E._reactRetry=i,i=null):(e=R.treeContext,Pe=Ln(E.nextSibling),Ze=i,Bt=!0,Pn=null,Jn=!1,e!==null&&(Sn[Rn++]=Ci,Sn[Rn++]=Di,Sn[Rn++]=_s,Ci=e.id,Di=e.overflow,_s=i),i=cf(i,o.children),i.flags|=4096);return i}return h?(pr(),h=o.fallback,E=i.mode,R=e.child,N=R.sibling,o=wr(R,{mode:"hidden",children:o.children}),o.subtreeFlags=R.subtreeFlags&31457280,N!==null?h=wr(N,h):(h=Ds(h,E,a,null),h.flags|=2),h.return=i,o.return=i,o.sibling=h,i.child=o,o=h,h=i.child,E=e.child.memoizedState,E===null?E=lf(a):(R=E.cachePool,R!==null?(N=Ae._currentValue,R=R.parent!==N?{parent:N,pool:N}:R):R=Rg(),E={baseLanes:E.baseLanes|a,cachePool:R}),h.memoizedState=E,h.childLanes=uf(e,v,a),i.memoizedState=of,o):(gr(i),a=e.child,e=a.sibling,a=wr(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function cf(e,i){return i=hf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function hf(e,i){return Xp(e,i,0,null)}function ff(e,i,a){return Es(i,e.child,null,a),e=cf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Rp(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),pf(e.return,i,a)}function df(e,i,a,o,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=h)}function bp(e,i,a){var o=i.pendingProps,h=o.revealOrder,d=o.tail;if(Ue(e,i,o.children,a),o=Te.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rp(e,a,i);else if(e.tag===19)Rp(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Gt(Te,o),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Au(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),df(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Au(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}df(i,!0,a,null,d);break;case"together":df(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Vi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Ir|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Ho(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=wr(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=wr(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function mf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&ku(e)))}function C0(e,i,a){switch(i.tag){case 3:Zi(i,i.stateNode.containerInfo),vr(i,Ae,e.memoizedState.cache),Do();break;case 27:case 5:ro(i);break;case 4:Zi(i,i.stateNode.containerInfo);break;case 10:vr(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(gr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Sp(e,i,a):(gr(i),e=Vi(e,i,a),e!==null?e.sibling:null);gr(i);break;case 19:var h=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Ho(e,i,a,!1),o=(a&i.childLanes)!==0),h){if(o)return bp(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Gt(Te,Te.current),o)break;return null;case 22:case 23:return i.lanes=0,yp(e,i,a);case 24:vr(i,Ae,e.memoizedState.cache)}return Vi(e,i,a)}function wp(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Oe=!0;else{if(!mf(e,a)&&(i.flags&128)===0)return Oe=!1,C0(e,i,a);Oe=(e.flags&131072)!==0}else Oe=!1,Bt&&(i.flags&1048576)!==0&&cg(i,_u,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,h=o._init;if(o=h(o._payload),i.type=o,typeof o=="function")Cf(o)?(e=bs(o,e),i.tag=1,i=Tp(null,i,o,e,a)):(i.tag=0,i=af(null,i,o,e,a));else{if(o!=null){if(h=o.$$typeof,h===$){i.tag=11,i=gp(null,i,o,e,a);break t}else if(h===pt){i.tag=14,i=pp(null,i,o,e,a);break t}}throw i=b(o)||o,Error(s(306,i,""))}}return i;case 0:return af(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,h=bs(o,i.pendingProps),Tp(e,i,o,h,a);case 3:t:{if(Zi(i,i.stateNode.containerInfo),e===null)throw Error(s(387));var d=i.pendingProps;h=i.memoizedState,o=h.element,vf(e,i),Fo(i,d,null,a);var v=i.memoizedState;if(d=v.cache,vr(i,Ae,d),d!==h.cache&&_f(i,[Ae],a,!0),jo(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Ap(e,i,d,a);break t}else if(d!==o){o=An(Error(s(424)),i),Oo(o),i=Ap(e,i,d,a);break t}else for(Pe=Ln(i.stateNode.containerInfo.firstChild),Ze=i,Bt=!0,Pn=null,Jn=!0,a=vg(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Do(),d===o){i=Vi(e,i,a);break t}Ue(e,i,d,a)}i=i.child}return i;case 26:return Bo(e,i),e===null?(a=D_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Bt||(a=i.type,e=i.pendingProps,o=$u(mn.current).createElement(a),o[Ie]=i,o[ye]=e,Le(o,a,e),Zt(o),i.stateNode=o):i.memoizedState=D_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ro(i),e===null&&Bt&&(o=i.stateNode=w_(i.type,i.pendingProps,mn.current),Ze=i,Jn=!0,Pe=Ln(o.firstChild)),o=i.pendingProps.children,e!==null||Bt?Ue(e,i,o,a):i.child=Es(i,null,o,a),Bo(e,i),i.child;case 5:return e===null&&Bt&&((h=o=Pe)&&(o=rA(o,i.type,i.pendingProps,Jn),o!==null?(i.stateNode=o,Ze=i,Pe=Ln(o.firstChild),Jn=!1,h=!0):h=!1),h||vs(i)),ro(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,o=d.children,td(h,d)?o=null:v!==null&&td(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Hh(e,i,T0,null,null,a),sl._currentValue=h),Bo(e,i),Ue(e,i,o,a),i.child;case 6:return e===null&&Bt&&((e=a=Pe)&&(a=sA(a,i.pendingProps,Jn),a!==null?(i.stateNode=a,Ze=i,Pe=null,e=!0):e=!1),e||vs(i)),null;case 13:return Sp(e,i,a);case 4:return Zi(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Es(i,null,o,a):Ue(e,i,o,a),i.child;case 11:return gp(e,i,i.type,i.pendingProps,a);case 7:return Ue(e,i,i.pendingProps,a),i.child;case 8:return Ue(e,i,i.pendingProps.children,a),i.child;case 12:return Ue(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,vr(i,i.type,o.value),Ue(e,i,o.children,a),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,Is(i),h=qe(h),o=o(h),i.flags|=1,Ue(e,i,o,a),i.child;case 14:return pp(e,i,i.type,i.pendingProps,a);case 15:return _p(e,i,i.type,i.pendingProps,a);case 19:return bp(e,i,a);case 22:return yp(e,i,a);case 24:return Is(i),o=qe(Ae),e===null?(h=zh(),h===null&&(h=Xt,d=Lh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:o,cache:h},yf(i),vr(i,Ae,h)):((e.lanes&a)!==0&&(vf(e,i),Fo(i,null,null,a),jo()),h=e.memoizedState,d=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),vr(i,Ae,o)):(o=d.cache,vr(i,Ae,o),o!==h.cache&&_f(i,[Ae],a,!0))),Ue(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}var gf=xt(null),ws=null,Mi=null;function vr(e,i,a){Gt(gf,i._currentValue),i._currentValue=a}function ki(e){e._currentValue=gf.current,ne(gf)}function pf(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function _f(e,i,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var R=0;R<i.length;R++)if(E.context===i[R]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),pf(d.return,a,e),o||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),pf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Ho(e,i,a,o){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;ln(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===Wi.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(sl):e=[sl])}h=h.return}e!==null&&_f(i,e,a,o),i.flags|=262144}function ku(e){for(e=e.firstContext;e!==null;){if(!ln(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Is(e){ws=e,Mi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qe(e){return Ip(ws,e)}function Pu(e,i){return ws===null&&Is(e),Ip(e,i)}function Ip(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Mi===null){if(e===null)throw Error(s(308));Mi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Mi=Mi.next=i;return a}var Er=!1;function yf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Tr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(te&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=gu(e),lg(e,null,a),i}return mu(e,o,i,a),gu(e)}function qo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,rr(e,a)}}function Ef(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Tf=!1;function jo(){if(Tf){var e=Ea;if(e!==null)throw e}}function Fo(e,i,a,o){Tf=!1;var h=e.updateQueue;Er=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var R=E,N=R.next;R.next=null,v===null?d=N:v.next=N,v=R;var j=e.alternate;j!==null&&(j=j.updateQueue,E=j.lastBaseUpdate,E!==v&&(E===null?j.firstBaseUpdate=N:E.next=N,j.lastBaseUpdate=R))}if(d!==null){var K=h.baseState;v=0,j=N=R=null,E=d;do{var z=E.lane&-536870913,H=z!==E.lane;if(H?(Ut&z)===z:(o&z)===z){z!==0&&z===va&&(Tf=!0),j!==null&&(j=j.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var st=e,At=E;z=i;var ae=a;switch(At.tag){case 1:if(st=At.payload,typeof st=="function"){K=st.call(ae,K,z);break t}K=st;break t;case 3:st.flags=st.flags&-65537|128;case 0:if(st=At.payload,z=typeof st=="function"?st.call(ae,K,z):st,z==null)break t;K=I({},K,z);break t;case 2:Er=!0}}z=E.callback,z!==null&&(e.flags|=64,H&&(e.flags|=8192),H=h.callbacks,H===null?h.callbacks=[z]:H.push(z))}else H={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},j===null?(N=j=H,R=K):j=j.next=H,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;H=E,E=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);j===null&&(R=K),h.baseState=R,h.firstBaseUpdate=N,h.lastBaseUpdate=j,d===null&&(h.shared.lanes=0),Ir|=v,e.lanes=v,e.memoizedState=K}}function Cp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Dp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cp(a[e],i)}function Go(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var d=a.create,v=a.inst;o=d(),v.destroy=o}a=a.next}while(a!==h)}}catch(E){Yt(i,i.return,E)}}function Sr(e,i,a){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var v=o.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var R=a;try{E()}catch(N){Yt(h,R,N)}}}o=o.next}while(o!==d)}}catch(N){Yt(i,i.return,N)}}function Op(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Dp(i,a)}catch(o){Yt(e,e.return,o)}}}function Np(e,i,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Yt(e,i,o)}}function Cs(e,i){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var h=o;break;default:h=o}typeof a=="function"?e.refCleanup=a(h):a.current=h}}catch(d){Yt(e,i,d)}}function un(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){Yt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Yt(e,i,h)}else a.current=null}function Vp(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){Yt(e,e.return,h)}}function Mp(e,i,a){try{var o=e.stateNode;J0(o,e.type,a,i),o[ye]=i}catch(h){Yt(e,e.return,h)}}function kp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Af(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(e,i):a.insertBefore(e,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(e,a)):(i=a,i.appendChild(e)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Xu));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Sf(e,i,a),e=e.sibling;e!==null;)Sf(e,i,a),e=e.sibling}function Uu(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Uu(e,i,a),e=e.sibling;e!==null;)Uu(e,i,a),e=e.sibling}var Pi=!1,re=!1,Rf=!1,Pp=typeof WeakSet=="function"?WeakSet:Set,Ne=null,Up=!1;function D0(e,i){if(e=e.containerInfo,Zf=nc,e=Jm(e),bh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,R=-1,N=0,j=0,K=e,z=null;e:for(;;){for(var H;K!==a||h!==0&&K.nodeType!==3||(E=v+h),K!==d||o!==0&&K.nodeType!==3||(R=v+o),K.nodeType===3&&(v+=K.nodeValue.length),(H=K.firstChild)!==null;)z=K,K=H;for(;;){if(K===e)break e;if(z===a&&++N===h&&(E=v),z===d&&++j===o&&(R=v),(H=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=H}a=E===-1||R===-1?null:{start:E,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:e,selectionRange:a},nc=!1,Ne=i;Ne!==null;)if(i=Ne,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Ne=e;else for(;Ne!==null;){switch(i=Ne,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var st=bs(a.type,h,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(st,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(At){Yt(a,a.return,At)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)id(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":id(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ne=e;break}Ne=i.return}return st=Up,Up=!1,st}function Lp(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Li(e,a),o&4&&Go(5,a);break;case 1:if(Li(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(E){Yt(a,a.return,E)}else{var h=bs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Yt(a,a.return,E)}}o&64&&Op(a),o&512&&Cs(a,a.return);break;case 3:if(Li(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Dp(o,e)}catch(E){Yt(a,a.return,E)}}break;case 26:Li(e,a),o&512&&Cs(a,a.return);break;case 27:case 5:Li(e,a),i===null&&o&4&&Vp(a),o&512&&Cs(a,a.return);break;case 12:Li(e,a);break;case 13:Li(e,a),o&4&&Bp(e,a);break;case 22:if(h=a.memoizedState!==null||Pi,!h){i=i!==null&&i.memoizedState!==null||re;var d=Pi,v=re;Pi=h,(re=i)&&!v?Rr(e,a,(a.subtreeFlags&8772)!==0):Li(e,a),Pi=d,re=v}o&512&&(a.memoizedProps.mode==="manual"?Cs(a,a.return):un(a,a.return));break;default:Li(e,a)}}function xp(e){var i=e.alternate;i!==null&&(e.alternate=null,xp(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&rs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var me=null,cn=!1;function Ui(e,i,a){for(a=a.child;a!==null;)zp(e,i,a),a=a.sibling}function zp(e,i,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Ji,a)}catch{}switch(a.tag){case 26:re||un(a,i),Ui(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:re||un(a,i);var o=me,h=cn;for(me=a.stateNode,Ui(e,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);rs(a),me=o,cn=h;break;case 5:re||un(a,i);case 6:h=me;var d=cn;if(me=null,Ui(e,i,a),me=h,cn=d,me!==null)if(cn)try{e=me,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(v){Yt(a,i,v)}else try{me.removeChild(a.stateNode)}catch(v){Yt(a,i,v)}break;case 18:me!==null&&(cn?(i=me,a=a.stateNode,i.nodeType===8?nd(i.parentNode,a):i.nodeType===1&&nd(i,a),ul(i)):nd(me,a.stateNode));break;case 4:o=me,h=cn,me=a.stateNode.containerInfo,cn=!0,Ui(e,i,a),me=o,cn=h;break;case 0:case 11:case 14:case 15:re||Sr(2,a,i),re||Sr(4,a,i),Ui(e,i,a);break;case 1:re||(un(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Np(a,i,o)),Ui(e,i,a);break;case 21:Ui(e,i,a);break;case 22:re||un(a,i),re=(o=re)||a.memoizedState!==null,Ui(e,i,a),re=o;break;default:Ui(e,i,a)}}function Bp(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ul(e)}catch(a){Yt(i,i.return,a)}}function O0(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Pp),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Pp),i;default:throw Error(s(435,e.tag))}}function bf(e,i){var a=O0(e);i.forEach(function(o){var h=j0.bind(null,e,o);a.has(o)||(a.add(o),o.then(h,h))})}function wn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:case 5:me=E.stateNode,cn=!1;break t;case 3:me=E.stateNode.containerInfo,cn=!0;break t;case 4:me=E.stateNode.containerInfo,cn=!0;break t}E=E.return}if(me===null)throw Error(s(160));zp(d,v,h),me=null,cn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Hp(i,e),i=i.sibling}var Un=null;function Hp(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wn(i,e),In(e),o&4&&(Sr(3,e,e.return),Go(3,e),Sr(5,e,e.return));break;case 1:wn(i,e),In(e),o&512&&(re||a===null||un(a,a.return)),o&64&&Pi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=Un;if(wn(i,e),In(e),o&512&&(re||a===null||un(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ar]||d[Ie]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),Le(d,o,a),d[Ie]=e,Zt(d),o=d;break t;case"link":var v=V_("link","href",h).get(o+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(o),Le(d,o,a),h.head.appendChild(d);break;case"meta":if(v=V_("meta","content",h).get(o+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(o),Le(d,o,a),h.head.appendChild(d);break;default:throw Error(s(468,o))}d[Ie]=e,Zt(d),o=d}e.stateNode=o}else M_(h,e.type,e.stateNode);else e.stateNode=N_(h,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?M_(h,e.type,e.stateNode):N_(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Mp(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){h=e.stateNode,d=e.memoizedProps;try{for(var R=h.firstChild;R;){var N=R.nextSibling,j=R.nodeName;R[ar]||j==="HEAD"||j==="BODY"||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&R.rel.toLowerCase()==="stylesheet"||h.removeChild(R),R=N}for(var K=e.type,z=h.attributes;z.length;)h.removeAttributeNode(z[0]);Le(h,K,d),h[Ie]=e,h[ye]=d}catch(st){Yt(e,e.return,st)}}case 5:if(wn(i,e),In(e),o&512&&(re||a===null||un(a,a.return)),e.flags&32){h=e.stateNode;try{_n(h,"")}catch(st){Yt(e,e.return,st)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,Mp(e,h,a!==null?a.memoizedProps:h)),o&1024&&(Rf=!0);break;case 6:if(wn(i,e),In(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(st){Yt(e,e.return,st)}}break;case 3:if(Ju=null,h=Un,Un=Wu(i.containerInfo),wn(i,e),Un=h,In(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ul(i.containerInfo)}catch(st){Yt(e,e.return,st)}Rf&&(Rf=!1,qp(e));break;case 4:o=Un,Un=Wu(e.stateNode.containerInfo),wn(i,e),In(e),Un=o;break;case 12:wn(i,e),In(e);break;case 13:wn(i,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kf=tn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,bf(e,o)));break;case 22:if(o&512&&(re||a===null||un(a,a.return)),R=e.memoizedState!==null,N=a!==null&&a.memoizedState!==null,j=Pi,K=re,Pi=j||R,re=K||N,wn(i,e),re=K,Pi=j,In(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,o&8192&&(i._visibility=R?i._visibility&-2:i._visibility|1,R&&(i=Pi||re,a===null||N||i||Ra(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){N=a=i;try{if(h=N.stateNode,R)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=N.stateNode,E=N.memoizedProps.style;var H=E!=null&&E.hasOwnProperty("display")?E.display:null;v.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(st){Yt(N,N.return,st)}}}else if(i.tag===6){if(a===null){N=i;try{N.stateNode.nodeValue=R?"":N.memoizedProps}catch(st){Yt(N,N.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,bf(e,a))));break;case 19:wn(i,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,bf(e,o)));break;case 21:break;default:wn(i,e),In(e)}}function In(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(kp(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var h=o.stateNode,d=Af(e);Uu(e,d,h);break;case 5:var v=o.stateNode;o.flags&32&&(_n(v,""),o.flags&=-33);var E=Af(e);Uu(e,E,v);break;case 3:case 4:var R=o.stateNode.containerInfo,N=Af(e);Sf(e,N,R);break;default:throw Error(s(161))}}}catch(j){Yt(e,e.return,j)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function qp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;qp(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Li(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Lp(e,i.alternate,i),i=i.sibling}function Ra(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Sr(4,i,i.return),Ra(i);break;case 1:un(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Np(i,i.return,a),Ra(i);break;case 26:case 27:case 5:un(i,i.return),Ra(i);break;case 22:un(i,i.return),i.memoizedState===null&&Ra(i);break;default:Ra(i)}e=e.sibling}}function Rr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Rr(h,d,a),Go(4,d);break;case 1:if(Rr(h,d,a),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(N){Yt(o,o.return,N)}if(o=d,h=o.updateQueue,h!==null){var E=o.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)Cp(R[h],E)}catch(N){Yt(o,o.return,N)}}a&&v&64&&Op(d),Cs(d,d.return);break;case 26:case 27:case 5:Rr(h,d,a),a&&o===null&&v&4&&Vp(d),Cs(d,d.return);break;case 12:Rr(h,d,a);break;case 13:Rr(h,d,a),a&&v&4&&Bp(h,d);break;case 22:d.memoizedState===null&&Rr(h,d,a),Cs(d,d.return);break;default:Rr(h,d,a)}i=i.sibling}}function wf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Po(a))}function If(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e))}function br(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)jp(e,i,a,o),i=i.sibling}function jp(e,i,a,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:br(e,i,a,o),h&2048&&Go(9,i);break;case 3:br(e,i,a,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e)));break;case 12:if(h&2048){br(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Yt(i,i.return,R)}}else br(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?br(e,i,a,o):Ko(e,i):d._visibility&4?br(e,i,a,o):(d._visibility|=4,ba(e,i,a,o,(i.subtreeFlags&10256)!==0)),h&2048&&wf(i.alternate,i);break;case 24:br(e,i,a,o),h&2048&&If(i.alternate,i);break;default:br(e,i,a,o)}}function ba(e,i,a,o,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,R=o,N=v.flags;switch(v.tag){case 0:case 11:case 15:ba(d,v,E,R,h),Go(8,v);break;case 23:break;case 22:var j=v.stateNode;v.memoizedState!==null?j._visibility&4?ba(d,v,E,R,h):Ko(d,v):(j._visibility|=4,ba(d,v,E,R,h)),h&&N&2048&&wf(v.alternate,v);break;case 24:ba(d,v,E,R,h),h&&N&2048&&If(v.alternate,v);break;default:ba(d,v,E,R,h)}i=i.sibling}}function Ko(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,h=o.flags;switch(o.tag){case 22:Ko(a,o),h&2048&&wf(o.alternate,o);break;case 24:Ko(a,o),h&2048&&If(o.alternate,o);break;default:Ko(a,o)}i=i.sibling}}var Qo=8192;function wa(e){if(e.subtreeFlags&Qo)for(e=e.child;e!==null;)Fp(e),e=e.sibling}function Fp(e){switch(e.tag){case 26:wa(e),e.flags&Qo&&e.memoizedState!==null&&yA(Un,e.memoizedState,e.memoizedProps);break;case 5:wa(e);break;case 3:case 4:var i=Un;Un=Wu(e.stateNode.containerInfo),wa(e),Un=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Qo,Qo=16777216,wa(e),Qo=i):wa(e));break;default:wa(e)}}function Gp(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Yo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Ne=o,Qp(o,e)}Gp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kp(e),e=e.sibling}function Kp(e){switch(e.tag){case 0:case 11:case 15:Yo(e),e.flags&2048&&Sr(9,e,e.return);break;case 3:Yo(e);break;case 12:Yo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,Lu(e)):Yo(e);break;default:Yo(e)}}function Lu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Ne=o,Qp(o,e)}Gp(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Sr(8,i,i.return),Lu(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,Lu(i));break;default:Lu(i)}e=e.sibling}}function Qp(e,i){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:Sr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ne=o;else t:for(a=e;Ne!==null;){o=Ne;var h=o.sibling,d=o.return;if(xp(o),o===a){Ne=null;break t}if(h!==null){h.return=d,Ne=h;break t}Ne=d}}}function N0(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,i,a,o){return new N0(e,i,a,o)}function Cf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wr(e,i){var a=e.alternate;return a===null?(a=Cn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yp(e,i){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function xu(e,i,a,o,h,d){var v=0;if(o=e,typeof e=="function")Cf(e)&&(v=1);else if(typeof e=="string")v=pA(e,a,Ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return Ds(a.children,h,d,i);case y:v=8,h|=24;break;case A:return e=Cn(12,a,i,h|2),e.elementType=A,e.lanes=d,e;case J:return e=Cn(13,a,i,h),e.elementType=J,e.lanes=d,e;case Q:return e=Cn(19,a,i,h),e.elementType=Q,e.lanes=d,e;case W:return Xp(a,h,d,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:case q:v=10;break t;case x:v=9;break t;case $:v=11;break t;case pt:v=14;break t;case ht:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=Cn(v,a,i,h),i.elementType=e,i.type=o,i.lanes=d,i}function Ds(e,i,a,o){return e=Cn(7,e,o,i),e.lanes=a,e}function Xp(e,i,a,o){e=Cn(22,e,o,i),e.elementType=W,e.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var v=mr(d,2);v!==null&&(h._pendingVisibility|=2,Je(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var v=mr(d,2);v!==null&&(h._pendingVisibility&=-3,Je(v,d,2))}}};return e.stateNode=h,e}function Df(e,i,a){return e=Cn(6,e,null,i),e.lanes=a,e}function Of(e,i,a){return i=Cn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function xi(e){e.flags|=4}function $p(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k_(i)){if(i=bn.current,i!==null&&((Ut&4194176)===Ut?ti!==null:(Ut&62914560)!==Ut&&(Ut&536870912)===0||i!==ti))throw Vo=kh,dg;e.flags|=8192}}function zu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?nr():536870912,e.lanes|=i,Ca|=i)}function Xo(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Jt(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&31457280,o|=h.flags&31457280,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function V0(e,i,a){var o=i.pendingProps;switch(Vh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(i),null;case 1:return Jt(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ki(Ae),_i(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Co(i)?xi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pn!==null&&(xf(Pn),Pn=null))),Jt(i),null;case 26:return a=i.memoizedState,e===null?(xi(i),a!==null?(Jt(i),$p(i,a)):(Jt(i),i.flags&=-16777217)):a?a!==e.memoizedState?(xi(i),Jt(i),$p(i,a)):(Jt(i),i.flags&=-16777217):(e.memoizedProps!==o&&xi(i),Jt(i),i.flags&=-16777217),null;case 27:Qs(i),a=mn.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&xi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Jt(i),null}e=Ye.current,Co(i)?hg(i):(e=w_(h,o,a),i.stateNode=e,xi(i))}return Jt(i),null;case 5:if(Qs(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&xi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Jt(i),null}if(e=Ye.current,Co(i))hg(i);else{switch(h=$u(mn.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(a,{is:o.is}):h.createElement(a)}}e[Ie]=i,e[ye]=o;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Le(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&xi(i)}}return Jt(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&xi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=mn.current,Co(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,h=Ze,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Ie]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||E_(e.nodeValue,a)),e||vs(i)}else e=$u(e).createTextNode(o),e[Ie]=i,i.stateNode=e}return Jt(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Co(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ie]=i}else Do(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),h=!1}else Pn!==null&&(xf(Pn),Pn=null),h=!0;if(!h)return i.flags&256?(Oi(i),i):(Oi(i),null)}if(Oi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),zu(i,i.updateQueue),Jt(i),null;case 4:return _i(),e===null&&Xf(i.stateNode.containerInfo),Jt(i),null;case 10:return ki(i.type),Jt(i),null;case 19:if(ne(Te),h=i.memoizedState,h===null)return Jt(i),null;if(o=(i.flags&128)!==0,d=h.rendering,d===null)if(o)Xo(h,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Au(e),d!==null){for(i.flags|=128,Xo(h,!1),e=d.updateQueue,i.updateQueue=e,zu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Yp(a,e),a=a.sibling;return Gt(Te,Te.current&1|2),i.child}e=e.sibling}h.tail!==null&&tn()>Bu&&(i.flags|=128,o=!0,Xo(h,!1),i.lanes=4194304)}else{if(!o)if(e=Au(d),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,zu(i,e),Xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Bt)return Jt(i),null}else 2*tn()-h.renderingStartTime>Bu&&a!==536870912&&(i.flags|=128,o=!0,Xo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=tn(),i.sibling=null,e=Te.current,Gt(Te,o?e&1|2:e&1),i):(Jt(i),null);case 22:case 23:return Oi(i),Uh(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Jt(i),i.subtreeFlags&6&&(i.flags|=8192)):Jt(i),a=i.updateQueue,a!==null&&zu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&ne(Ts),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ki(Ae),Jt(i),null;case 25:return null}throw Error(s(156,i.tag))}function M0(e,i){switch(Vh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ki(Ae),_i(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Qs(i),null;case 13:if(Oi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Do()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return ne(Te),null;case 4:return _i(),null;case 10:return ki(i.type),null;case 22:case 23:return Oi(i),Uh(),e!==null&&ne(Ts),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ki(Ae),null;case 25:return null;default:return null}}function Wp(e,i){switch(Vh(i),i.tag){case 3:ki(Ae),_i();break;case 26:case 27:case 5:Qs(i);break;case 4:_i();break;case 13:Oi(i);break;case 19:ne(Te);break;case 10:ki(i.type);break;case 22:case 23:Oi(i),Uh(),e!==null&&ne(Ts);break;case 24:ki(Ae)}}var k0={getCacheForType:function(e){var i=qe(Ae),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},P0=typeof WeakMap=="function"?WeakMap:Map,te=0,Xt=null,Dt=null,Ut=0,$t=0,hn=null,zi=!1,Ia=!1,Nf=!1,Bi=0,se=0,Ir=0,Os=0,Vf=0,Dn=0,Ca=0,$o=null,ni=null,Mf=!1,kf=0,Bu=1/0,Hu=null,Cr=null,qu=!1,Ns=null,Wo=0,Pf=0,Uf=null,Zo=0,Lf=null;function fn(){if((te&2)!==0&&Ut!==0)return Ut&-Ut;if(S.T!==null){var e=va;return e!==0?e:Gf()}return Yl()}function Zp(){Dn===0&&(Dn=(Ut&536870912)===0||Bt?uo():536870912);var e=bn.current;return e!==null&&(e.flags|=32),Dn}function Je(e,i,a){(e===Xt&&$t===2||e.cancelPendingCommit!==null)&&(Da(e,0),Hi(e,Ut,Dn,!1)),oe(e,a),((te&2)===0||e!==Xt)&&(e===Xt&&((te&2)===0&&(Os|=a),se===4&&Hi(e,Ut,Dn,!1)),ii(e))}function Jp(e,i,a){if((te&6)!==0)throw Error(s(327));var o=!a&&(i&60)===0&&(i&e.expiredLanes)===0||er(e,i),h=o?x0(e,i):Hf(e,i,!0),d=o;do{if(h===0){Ia&&!o&&Hi(e,i,0,!1);break}else if(h===6)Hi(e,i,0,!zi);else{if(a=e.current.alternate,d&&!U0(a)){h=Hf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=$o;var R=E.current.memoizedState.isDehydrated;if(R&&(Da(E,v).flags|=256),v=Hf(E,v,!1),v!==2){if(Nf&&!R){E.errorRecoveryDisabledLanes|=d,Os|=d,h=4;break t}d=ni,ni=h,d!==null&&xf(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){Da(e,0),Hi(e,i,0,!0);break}t:{switch(o=e,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194176)===i){Hi(o,i,Dn,!zi);break t}break;case 2:ni=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=i,(i&62914560)===i&&(d=kf+300-tn(),10<d)){if(Hi(o,i,Dn,!zi),gn(o,0)!==0)break t;o.timeoutHandle=S_(t_.bind(null,o,a,ni,Hu,Mf,i,Dn,Os,Ca,zi,2,-0,0),d);break t}t_(o,a,ni,Hu,Mf,i,Dn,Os,Ca,zi,0,-0,0)}}break}while(!0);ii(e)}function xf(e){ni===null?ni=e:ni.push.apply(ni,e)}function t_(e,i,a,o,h,d,v,E,R,N,j,K,z){var H=i.subtreeFlags;if((H&8192||(H&16785408)===16785408)&&(rl={stylesheets:null,count:0,unsuspend:_A},Fp(i),i=vA(),i!==null)){e.cancelPendingCommit=i(o_.bind(null,e,a,o,h,v,E,R,1,K,z)),Hi(e,d,v,!N);return}o_(e,a,o,h,v,E,R,j,K,z)}function U0(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],d=h.getSnapshot;h=h.value;try{if(!ln(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hi(e,i,a,o){i&=~Vf,i&=~Os,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var d=31-Xe(h),v=1<<d;o[d]=-1,h&=~v}a!==0&&ir(e,a,i)}function ju(){return(te&6)===0?(Jo(0),!1):!0}function zf(){if(Dt!==null){if($t===0)var e=Dt.return;else e=Dt,Mi=ws=null,Fh(e),_a=null,Mo=0,e=Dt;for(;e!==null;)Wp(e.alternate,e),e=e.return;Dt=null}}function Da(e,i){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,eA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),zf(),Xt=e,Dt=a=wr(e.current,null),Ut=i,$t=0,hn=null,zi=!1,Ia=er(e,i),Nf=!1,Ca=Dn=Vf=Os=Ir=se=0,ni=$o=null,Mf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-Xe(o),d=1<<h;i|=e[h],o&=~d}return Bi=i,du(),a}function e_(e,i){It=null,S.H=ei,i===No?(i=pg(),$t=3):i===dg?(i=pg(),$t=4):$t=i===mp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,hn=i,Dt===null&&(se=1,Mu(e,An(i,e.current)))}function n_(){var e=S.H;return S.H=ei,e===null?ei:e}function i_(){var e=S.A;return S.A=k0,e}function Bf(){se=4,zi||(Ut&4194176)!==Ut&&bn.current!==null||(Ia=!0),(Ir&134217727)===0&&(Os&134217727)===0||Xt===null||Hi(Xt,Ut,Dn,!1)}function Hf(e,i,a){var o=te;te|=2;var h=n_(),d=i_();(Xt!==e||Ut!==i)&&(Hu=null,Da(e,i)),i=!1;var v=se;t:do try{if($t!==0&&Dt!==null){var E=Dt,R=hn;switch($t){case 8:zf(),v=6;break t;case 3:case 2:case 6:bn.current===null&&(i=!0);var N=$t;if($t=0,hn=null,Oa(e,E,R,N),a&&Ia){v=0;break t}break;default:N=$t,$t=0,hn=null,Oa(e,E,R,N)}}L0(),v=se;break}catch(j){e_(e,j)}while(!0);return i&&e.shellSuspendCounter++,Mi=ws=null,te=o,S.H=h,S.A=d,Dt===null&&(Xt=null,Ut=0,du()),v}function L0(){for(;Dt!==null;)r_(Dt)}function x0(e,i){var a=te;te|=2;var o=n_(),h=i_();Xt!==e||Ut!==i?(Hu=null,Bu=tn()+500,Da(e,i)):Ia=er(e,i);t:do try{if($t!==0&&Dt!==null){i=Dt;var d=hn;e:switch($t){case 1:$t=0,hn=null,Oa(e,i,d,1);break;case 2:if(mg(d)){$t=0,hn=null,s_(i);break}i=function(){$t===2&&Xt===e&&($t=7),ii(e)},d.then(i,i);break t;case 3:$t=7;break t;case 4:$t=5;break t;case 7:mg(d)?($t=0,hn=null,s_(i)):($t=0,hn=null,Oa(e,i,d,7));break;case 5:var v=null;switch(Dt.tag){case 26:v=Dt.memoizedState;case 5:case 27:var E=Dt;if(!v||k_(v)){$t=0,hn=null;var R=E.sibling;if(R!==null)Dt=R;else{var N=E.return;N!==null?(Dt=N,Fu(N)):Dt=null}break e}}$t=0,hn=null,Oa(e,i,d,5);break;case 6:$t=0,hn=null,Oa(e,i,d,6);break;case 8:zf(),se=6;break t;default:throw Error(s(462))}}z0();break}catch(j){e_(e,j)}while(!0);return Mi=ws=null,S.H=o,S.A=h,te=a,Dt!==null?0:(Xt=null,Ut=0,du(),se)}function z0(){for(;Dt!==null&&!mh();)r_(Dt)}function r_(e){var i=wp(e.alternate,e,Bi);e.memoizedProps=e.pendingProps,i===null?Fu(e):Dt=i}function s_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Ep(a,i,i.pendingProps,i.type,void 0,Ut);break;case 11:i=Ep(a,i,i.pendingProps,i.type.render,i.ref,Ut);break;case 5:Fh(i);default:Wp(a,i),i=Dt=Yp(i,Bi),i=wp(a,i,Bi)}e.memoizedProps=e.pendingProps,i===null?Fu(e):Dt=i}function Oa(e,i,a,o){Mi=ws=null,Fh(i),_a=null,Mo=0;var h=i.return;try{if(I0(e,h,i,a,Ut)){se=1,Mu(e,An(a,e.current)),Dt=null;return}}catch(d){if(h!==null)throw Dt=h,d;se=1,Mu(e,An(a,e.current)),Dt=null;return}i.flags&32768?(Bt||o===1?e=!0:Ia||(Ut&536870912)!==0?e=!1:(zi=e=!0,(o===2||o===3||o===6)&&(o=bn.current,o!==null&&o.tag===13&&(o.flags|=16384))),a_(i,e)):Fu(i)}function Fu(e){var i=e;do{if((i.flags&32768)!==0){a_(i,zi);return}e=i.return;var a=V0(i.alternate,i,Bi);if(a!==null){Dt=a;return}if(i=i.sibling,i!==null){Dt=i;return}Dt=i=e}while(i!==null);se===0&&(se=5)}function a_(e,i){do{var a=M0(e.alternate,e);if(a!==null){a.flags&=32767,Dt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Dt=e;return}Dt=e=a}while(e!==null);se=6,Dt=null}function o_(e,i,a,o,h,d,v,E,R,N){var j=S.T,K=nt.p;try{nt.p=2,S.T=null,B0(e,i,a,o,K,h,d,v,E,R,N)}finally{S.T=j,nt.p=K}}function B0(e,i,a,o,h,d,v,E){do Na();while(Ns!==null);if((te&6)!==0)throw Error(s(327));var R=e.finishedWork;if(o=e.finishedLanes,R===null)return null;if(e.finishedWork=null,e.finishedLanes=0,R===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var N=R.lanes|R.childLanes;if(N|=Dh,Kl(e,o,N,d,v,E),e===Xt&&(Dt=Xt=null,Ut=0),(R.subtreeFlags&10256)===0&&(R.flags&10256)===0||qu||(qu=!0,Pf=N,Uf=a,F0(yi,function(){return Na(),null})),a=(R.flags&15990)!==0,(R.subtreeFlags&15990)!==0||a?(a=S.T,S.T=null,d=nt.p,nt.p=2,v=te,te|=4,D0(e,R),Hp(R,e),c0(Jf,e.containerInfo),nc=!!Zf,Jf=Zf=null,e.current=R,Lp(e,R.alternate,R),so(),te=v,nt.p=d,S.T=a):e.current=R,qu?(qu=!1,Ns=e,Wo=o):l_(e,N),N=e.pendingLanes,N===0&&(Cr=null),oo(R.stateNode),ii(e),i!==null)for(h=e.onRecoverableError,R=0;R<i.length;R++)N=i[R],h(N.value,{componentStack:N.stack});return(Wo&3)!==0&&Na(),N=e.pendingLanes,(o&4194218)!==0&&(N&42)!==0?e===Lf?Zo++:(Zo=0,Lf=e):Zo=0,Jo(0),null}function l_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Po(i)))}function Na(){if(Ns!==null){var e=Ns,i=Pf;Pf=0;var a=Ql(Wo),o=S.T,h=nt.p;try{if(nt.p=32>a?32:a,S.T=null,Ns===null)var d=!1;else{a=Uf,Uf=null;var v=Ns,E=Wo;if(Ns=null,Wo=0,(te&6)!==0)throw Error(s(331));var R=te;if(te|=4,Kp(v.current),jp(v,v.current,E,a),te=R,Jo(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Ji,v)}catch{}d=!0}return d}finally{nt.p=h,S.T=o,l_(e,i)}}return!1}function u_(e,i,a){i=An(a,i),i=sf(e.stateNode,i,2),e=Ar(e,i,2),e!==null&&(oe(e,2),ii(e))}function Yt(e,i,a){if(e.tag===3)u_(e,e,a);else for(;i!==null;){if(i.tag===3){u_(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Cr===null||!Cr.has(o))){e=An(a,e),a=fp(2),o=Ar(i,a,2),o!==null&&(dp(a,o,i,e),oe(o,2),ii(o));break}}i=i.return}}function qf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new P0;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(a)||(Nf=!0,h.add(a),e=H0.bind(null,e,i,a),i.then(e,e))}function H0(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(Ut&a)===a&&(se===4||se===3&&(Ut&62914560)===Ut&&300>tn()-kf?(te&2)===0&&Da(e,0):Vf|=a,Ca===Ut&&(Ca=0)),ii(e)}function c_(e,i){i===0&&(i=nr()),e=mr(e,i),e!==null&&(oe(e,i),ii(e))}function q0(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),c_(e,a)}function j0(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),c_(e,a)}function F0(e,i){return es(e,i)}var Gu=null,Va=null,jf=!1,Ku=!1,Ff=!1,Vs=0;function ii(e){e!==Va&&e.next===null&&(Va===null?Gu=Va=e:Va=Va.next=e),Ku=!0,jf||(jf=!0,K0(G0))}function Jo(e,i){if(!Ff&&Ku){Ff=!0;do for(var a=!1,o=Gu;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var v=o.suspendedLanes,E=o.pingedLanes;d=(1<<31-Xe(42|e)+1)-1,d&=h&~(v&~E),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,d_(o,d))}else d=Ut,d=gn(o,o===Xt?d:0),(d&3)===0||er(o,d)||(a=!0,d_(o,d));o=o.next}while(a);Ff=!1}}function G0(){Ku=jf=!1;var e=0;Vs!==0&&(tA()&&(e=Vs),Vs=0);for(var i=tn(),a=null,o=Gu;o!==null;){var h=o.next,d=h_(o,i);d===0?(o.next=null,a===null?Gu=h:a.next=h,h===null&&(Va=a)):(a=o,(e!==0||(d&3)!==0)&&(Ku=!0)),o=h}Jo(e)}function h_(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Xe(d),E=1<<v,R=h[v];R===-1?((E&a)===0||(E&o)!==0)&&(h[v]=$s(E,i)):R<=i&&(e.expiredLanes|=E),d&=~E}if(i=Xt,a=Ut,a=gn(e,e===i?a:0),o=e.callbackNode,a===0||e===i&&$t===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Xs(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||er(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&Xs(o),Ql(a)){case 2:case 8:a=we;break;case 32:a=yi;break;case 268435456:a=ao;break;default:a=yi}return o=f_.bind(null,e),a=es(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&Xs(o),e.callbackPriority=2,e.callbackNode=null,2}function f_(e,i){var a=e.callbackNode;if(Na()&&e.callbackNode!==a)return null;var o=Ut;return o=gn(e,e===Xt?o:0),o===0?null:(Jp(e,o,i),h_(e,tn()),e.callbackNode!=null&&e.callbackNode===a?f_.bind(null,e):null)}function d_(e,i){if(Na())return null;Jp(e,i,!0)}function K0(e){nA(function(){(te&6)!==0?es(_e,e):e()})}function Gf(){return Vs===0&&(Vs=uo()),Vs}function m_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function g_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function Q0(e,i,a,o,h){if(i==="submit"&&a&&a.stateNode===h){var d=m_((h[ye]||null).action),v=o.submitter;v&&(i=(i=v[ye]||null)?m_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new ia("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Vs!==0){var R=v?g_(h,v):new FormData(h);Jh(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(E.preventDefault(),R=v?g_(h,v):new FormData(h),Jh(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var Kf=0;Kf<og.length;Kf++){var Qf=og[Kf],Y0=Qf.toLowerCase(),X0=Qf[0].toUpperCase()+Qf.slice(1);kn(Y0,"on"+X0)}kn(ng,"onAnimationEnd"),kn(ig,"onAnimationIteration"),kn(rg,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(f0,"onTransitionRun"),kn(d0,"onTransitionStart"),kn(m0,"onTransitionCancel"),kn(sg,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),an("onBeforeInput",["compositionend","keypress","textInput","paste"]),an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function p_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var v=o.length-1;0<=v;v--){var E=o[v],R=E.instance,N=E.currentTarget;if(E=E.listener,R!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=N;try{d(h)}catch(j){Vu(j)}h.currentTarget=null,d=R}else for(v=0;v<o.length;v++){if(E=o[v],R=E.instance,N=E.currentTarget,E=E.listener,R!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=N;try{d(h)}catch(j){Vu(j)}h.currentTarget=null,d=R}}}}function Vt(e,i){var a=i[is];a===void 0&&(a=i[is]=new Set);var o=e+"__bubble";a.has(o)||(__(i,e,2,!1),a.add(o))}function Yf(e,i,a){var o=0;i&&(o|=4),__(a,e,o,i)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function Xf(e){if(!e[Qu]){e[Qu]=!0,ho.forEach(function(a){a!=="selectionchange"&&($0.has(a)||Yf(a,!1,e),Yf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Qu]||(i[Qu]=!0,Yf("selectionchange",!1,i))}}function __(e,i,a,o){switch(B_(i)){case 2:var h=AA;break;case 8:h=SA;break;default:h=ld}a=h.bind(null,i,a,e),h=void 0,!vn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function $f(e,i,a,o,h){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var E=o.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(v===4)for(v=o.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===h||R.nodeType===8&&R.parentNode===h))return;v=v.return}for(;E!==null;){if(v=Mn(E),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){o=d=v;continue t}E=E.parentNode}}o=o.return}Zl(function(){var N=d,j=na(a),K=[];t:{var z=ag.get(e);if(z!==void 0){var H=ia,st=e;switch(e){case"keypress":if(Yn(a)===0)break t;case"keydown":case"keyup":H=ua;break;case"focusin":st="focus",H=aa;break;case"focusout":st="blur",H=aa;break;case"beforeblur":case"afterblur":H=aa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=En;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=au;break;case ng:case ig:case rg:H=oa;break;case sg:H=lu;break;case"scroll":case"scrollend":H=Jl;break;case"wheel":H=ca;break;case"copy":case"cut":case"paste":H=la;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Ro;break;case"toggle":case"beforetoggle":H=cu}var At=(i&4)!==0,ae=!At&&(e==="scroll"||e==="scrollend"),k=At?z!==null?z+"Capture":null:z;At=[];for(var O=N,L;O!==null;){var F=O;if(L=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||L===null||k===null||(F=ls(O,k),F!=null&&At.push(el(O,F,L))),ae)break;O=O.return}0<At.length&&(z=new H(z,st,null,a,j),K.push({event:z,listeners:At}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",z&&a!==yn&&(st=a.relatedTarget||a.fromElement)&&(Mn(st)||st[vi]))break t;if((H||z)&&(z=j.window===j?j:(z=j.ownerDocument)?z.defaultView||z.parentWindow:window,H?(st=a.relatedTarget||a.toElement,H=N,st=st?Mn(st):null,st!==null&&(ae=ut(st),At=st.tag,st!==ae||At!==5&&At!==27&&At!==6)&&(st=null)):(H=null,st=N),H!==st)){if(At=En,F="onMouseLeave",k="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(At=Ro,F="onPointerLeave",k="onPointerEnter",O="pointer"),ae=H==null?z:or(H),L=st==null?z:or(st),z=new At(F,O+"leave",H,a,j),z.target=ae,z.relatedTarget=L,F=null,Mn(j)===N&&(At=new At(k,O+"enter",st,a,j),At.target=L,At.relatedTarget=ae,F=At),ae=F,H&&st)e:{for(At=H,k=st,O=0,L=At;L;L=Ma(L))O++;for(L=0,F=k;F;F=Ma(F))L++;for(;0<O-L;)At=Ma(At),O--;for(;0<L-O;)k=Ma(k),L--;for(;O--;){if(At===k||k!==null&&At===k.alternate)break e;At=Ma(At),k=Ma(k)}At=null}else At=null;H!==null&&y_(K,z,H,At,!1),st!==null&&ae!==null&&y_(K,ae,st,At,!0)}}t:{if(z=N?or(N):window,H=z.nodeName&&z.nodeName.toLowerCase(),H==="select"||H==="input"&&z.type==="file")var rt=Gm;else if(Ee(z))if(Km)rt=l0;else{rt=a0;var Ct=s0}else H=z.nodeName,!H||H.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?N&&_o(N.elementType)&&(rt=Gm):rt=o0;if(rt&&(rt=rt(e,N))){Ii(K,rt,a,j);break t}Ct&&Ct(e,z,N),e==="focusout"&&N&&z.type==="number"&&N.memoizedProps.value!=null&&ea(z,"number",z.value)}switch(Ct=N?or(N):window,e){case"focusin":(Ee(Ct)||Ct.contentEditable==="true")&&(ha=Ct,wh=N,Io=null);break;case"focusout":Io=wh=ha=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,tg(K,a,j);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":tg(K,a,j)}var lt;if(Wn)t:{switch(e){case"compositionstart":var mt="onCompositionStart";break t;case"compositionend":mt="onCompositionEnd";break t;case"compositionupdate":mt="onCompositionUpdate";break t}mt=void 0}else kt?B(e,a)&&(mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(_&&a.locale!=="ko"&&(kt||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&kt&&(lt=vo()):(Qn=j,dr="value"in Qn?Qn.value:Qn.textContent,kt=!0)),Ct=Yu(N,mt),0<Ct.length&&(mt=new Ao(mt,e,null,a,j),K.push({event:mt,listeners:Ct}),lt?mt.data=lt:(lt=Z(a),lt!==null&&(mt.data=lt)))),(lt=m?ve(e,a):Pt(e,a))&&(mt=Yu(N,"onBeforeInput"),0<mt.length&&(Ct=new Ao("onBeforeInput","beforeinput",null,a,j),K.push({event:Ct,listeners:mt}),Ct.data=lt)),Q0(K,e,N,a,j)}p_(K,i)})}function el(e,i,a){return{instance:e,listener:i,currentTarget:a}}function Yu(e,i){for(var a=i+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ls(e,a),h!=null&&o.unshift(el(e,h,d)),h=ls(e,i),h!=null&&o.push(el(e,h,d))),e=e.return}return o}function Ma(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y_(e,i,a,o,h){for(var d=i._reactName,v=[];a!==null&&a!==o;){var E=a,R=E.alternate,N=E.stateNode;if(E=E.tag,R!==null&&R===o)break;E!==5&&E!==26&&E!==27||N===null||(R=N,h?(N=ls(a,d),N!=null&&v.unshift(el(a,N,R))):h||(N=ls(a,d),N!=null&&v.push(el(a,N,R)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var W0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function v_(e){return(typeof e=="string"?e:""+e).replace(W0,`
`).replace(Z0,"")}function E_(e,i){return i=v_(i),v_(e)===i}function Xu(){}function Qt(e,i,a,o,h,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||_n(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&_n(e,""+o);break;case"className":cr(e,"class",o);break;case"tabIndex":cr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":cr(e,a,o);break;case"style":Wl(e,o,d);break;case"data":if(i!=="object"){cr(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Kn(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Qt(e,i,"name",h.name,h,null),Qt(e,i,"formEncType",h.formEncType,h,null),Qt(e,i,"formMethod",h.formMethod,h,null),Qt(e,i,"formTarget",h.formTarget,h,null)):(Qt(e,i,"encType",h.encType,h,null),Qt(e,i,"method",h.method,h,null),Qt(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Kn(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xu);break;case"onScroll":o!=null&&Vt("scroll",e);break;case"onScrollEnd":o!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),ur(e,"popover",o);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ur(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vh.get(a)||a,ur(e,a,o))}}function Wf(e,i,a,o,h,d){switch(a){case"style":Wl(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?_n(e,o):(typeof o=="number"||typeof o=="bigint")&&_n(e,""+o);break;case"onScroll":o!=null&&Vt("scroll",e);break;case"onScrollEnd":o!=null&&Vt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Js.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[ye]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ur(e,a,o)}}}function Le(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var o=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(e,i,d,v,a,null)}}h&&Qt(e,i,"srcSet",a.srcSet,a,null),o&&Qt(e,i,"src",a.src,a,null);return;case"input":Vt("invalid",e);var E=d=v=h=null,R=null,N=null;for(o in a)if(a.hasOwnProperty(o)){var j=a[o];if(j!=null)switch(o){case"name":h=j;break;case"type":v=j;break;case"checked":R=j;break;case"defaultChecked":N=j;break;case"value":d=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:Qt(e,i,o,j,a,null)}}as(e,d,E,R,N,v,h,!1),ss(e);return;case"select":Vt("invalid",e),o=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":o=E;default:Qt(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!o,i!=null?zt(e,!!o,i,!1):a!=null&&zt(e,!!o,a,!0);return;case"textarea":Vt("invalid",e),d=h=o=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":o=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Qt(e,i,v,E,a,null)}fr(e,o,h,d),ss(e);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(o=a[R],o!=null))switch(R){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qt(e,i,R,o,a,null)}return;case"dialog":Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(o=0;o<tl.length;o++)Vt(tl[o],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(o=a[N],o!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(e,i,N,o,a,null)}return;default:if(_o(i)){for(j in a)a.hasOwnProperty(j)&&(o=a[j],o!==void 0&&Wf(e,i,j,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Qt(e,i,E,o,a,null))}function J0(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,R=null,N=null,j=null;for(H in a){var K=a[H];if(a.hasOwnProperty(H)&&K!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":R=K;default:o.hasOwnProperty(H)||Qt(e,i,H,null,o,K)}}for(var z in o){var H=o[z];if(K=a[z],o.hasOwnProperty(z)&&(H!=null||K!=null))switch(z){case"type":d=H;break;case"name":h=H;break;case"checked":N=H;break;case"defaultChecked":j=H;break;case"value":v=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==K&&Qt(e,i,z,H,o,K)}}hr(e,v,E,R,N,j,d,h);return;case"select":H=v=E=z=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":H=R;default:o.hasOwnProperty(d)||Qt(e,i,d,null,o,R)}for(h in o)if(d=o[h],R=a[h],o.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==R&&Qt(e,i,h,d,o,R)}i=E,a=v,o=H,z!=null?zt(e,!!a,z,!1):!!o!=!!a&&(i!=null?zt(e,!!a,i,!0):zt(e,!!a,a?[]:"",!1));return;case"textarea":H=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Qt(e,i,E,null,o,h)}for(v in o)if(h=o[v],d=a[v],o.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Qt(e,i,v,h,o,d)}os(e,z,H);return;case"option":for(var st in a)if(z=a[st],a.hasOwnProperty(st)&&z!=null&&!o.hasOwnProperty(st))switch(st){case"selected":e.selected=!1;break;default:Qt(e,i,st,null,o,z)}for(R in o)if(z=o[R],H=a[R],o.hasOwnProperty(R)&&z!==H&&(z!=null||H!=null))switch(R){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Qt(e,i,R,z,o,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var At in a)z=a[At],a.hasOwnProperty(At)&&z!=null&&!o.hasOwnProperty(At)&&Qt(e,i,At,null,o,z);for(N in o)if(z=o[N],H=a[N],o.hasOwnProperty(N)&&z!==H&&(z!=null||H!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Qt(e,i,N,z,o,H)}return;default:if(_o(i)){for(var ae in a)z=a[ae],a.hasOwnProperty(ae)&&z!==void 0&&!o.hasOwnProperty(ae)&&Wf(e,i,ae,void 0,o,z);for(j in o)z=o[j],H=a[j],!o.hasOwnProperty(j)||z===H||z===void 0&&H===void 0||Wf(e,i,j,z,o,H);return}}for(var k in a)z=a[k],a.hasOwnProperty(k)&&z!=null&&!o.hasOwnProperty(k)&&Qt(e,i,k,null,o,z);for(K in o)z=o[K],H=a[K],!o.hasOwnProperty(K)||z===H||z==null&&H==null||Qt(e,i,K,z,o,H)}var Zf=null,Jf=null;function $u(e){return e.nodeType===9?e:e.ownerDocument}function T_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function td(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ed=null;function tA(){var e=window.event;return e&&e.type==="popstate"?e===ed?!1:(ed=e,!0):(ed=null,!1)}var S_=typeof setTimeout=="function"?setTimeout:void 0,eA=typeof clearTimeout=="function"?clearTimeout:void 0,R_=typeof Promise=="function"?Promise:void 0,nA=typeof queueMicrotask=="function"?queueMicrotask:typeof R_<"u"?function(e){return R_.resolve(null).then(e).catch(iA)}:S_;function iA(e){setTimeout(function(){throw e})}function nd(e,i){var a=i,o=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(o===0){e.removeChild(h),ul(i);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=h}while(a);ul(i)}function id(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":id(a),rs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function rA(e,i,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ar])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ln(e.nextSibling),e===null)break}return null}function sA(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ln(e.nextSibling),e===null))return null;return e}function Ln(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function b_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function w_(e,i,a){switch(i=$u(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var On=new Map,I_=new Set;function Wu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var qi=nt.d;nt.d={f:aA,r:oA,D:lA,C:uA,L:cA,m:hA,X:dA,S:fA,M:mA};function aA(){var e=qi.f(),i=ju();return e||i}function oA(e){var i=Ei(e);i!==null&&i.tag===5&&i.type==="form"?tp(i):qi.r(e)}var ka=typeof document>"u"?null:document;function C_(e,i,a){var o=ka;if(o&&typeof i=="string"&&i){var h=ie(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),I_.has(h)||(I_.add(h),e={rel:e,crossOrigin:a,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),Le(i,"link",e),Zt(i),o.head.appendChild(i)))}}function lA(e){qi.D(e),C_("dns-prefetch",e,null)}function uA(e,i){qi.C(e,i),C_("preconnect",e,i)}function cA(e,i,a){qi.L(e,i,a);var o=ka;if(o&&e&&i){var h='link[rel="preload"][as="'+ie(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ie(a.imageSizes)+'"]')):h+='[href="'+ie(e)+'"]';var d=h;switch(i){case"style":d=Pa(e);break;case"script":d=Ua(e)}On.has(d)||(e=I({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),On.set(d,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(nl(d))||i==="script"&&o.querySelector(il(d))||(i=o.createElement("link"),Le(i,"link",e),Zt(i),o.head.appendChild(i)))}}function hA(e,i){qi.m(e,i);var a=ka;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ie(o)+'"][href="'+ie(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ua(e)}if(!On.has(d)&&(e=I({rel:"modulepreload",href:e},i),On.set(d,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(il(d)))return}o=a.createElement("link"),Le(o,"link",e),Zt(o),a.head.appendChild(o)}}}function fA(e,i,a){qi.S(e,i,a);var o=ka;if(o&&e){var h=lr(o).hoistableStyles,d=Pa(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=o.querySelector(nl(d)))E.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":i},a),(a=On.get(d))&&rd(e,a);var R=v=o.createElement("link");Zt(R),Le(R,"link",e),R._p=new Promise(function(N,j){R.onload=N,R.onerror=j}),R.addEventListener("load",function(){E.loading|=1}),R.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Zu(v,i,o)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function dA(e,i){qi.X(e,i);var a=ka;if(a&&e){var o=lr(a).hoistableScripts,h=Ua(e),d=o.get(h);d||(d=a.querySelector(il(h)),d||(e=I({src:e,async:!0},i),(i=On.get(h))&&sd(e,i),d=a.createElement("script"),Zt(d),Le(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function mA(e,i){qi.M(e,i);var a=ka;if(a&&e){var o=lr(a).hoistableScripts,h=Ua(e),d=o.get(h);d||(d=a.querySelector(il(h)),d||(e=I({src:e,async:!0,type:"module"},i),(i=On.get(h))&&sd(e,i),d=a.createElement("script"),Zt(d),Le(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function D_(e,i,a,o){var h=(h=mn.current)?Wu(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Pa(a.href),a=lr(h).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Pa(a.href);var d=lr(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(nl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),On.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},On.set(e,a),d||gA(h,e,a,v.state))),i&&o===null)throw Error(s(528,""));return v}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ua(a),a=lr(h).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Pa(e){return'href="'+ie(e)+'"'}function nl(e){return'link[rel="stylesheet"]['+e+"]"}function O_(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function gA(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Le(i,"link",a),Zt(i),e.head.appendChild(i))}function Ua(e){return'[src="'+ie(e)+'"]'}function il(e){return"script[async]"+e}function N_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+ie(a.href)+'"]');if(o)return i.instance=o,Zt(o),o;var h=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Zt(o),Le(o,"style",h),Zu(o,a.precedence,e),i.instance=o;case"stylesheet":h=Pa(a.href);var d=e.querySelector(nl(h));if(d)return i.state.loading|=4,i.instance=d,Zt(d),d;o=O_(a),(h=On.get(h))&&rd(o,h),d=(e.ownerDocument||e).createElement("link"),Zt(d);var v=d;return v._p=new Promise(function(E,R){v.onload=E,v.onerror=R}),Le(d,"link",o),i.state.loading|=4,Zu(d,a.precedence,e),i.instance=d;case"script":return d=Ua(a.src),(h=e.querySelector(il(d)))?(i.instance=h,Zt(h),h):(o=a,(h=On.get(d))&&(o=I({},a),sd(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),Zt(h),Le(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Zu(o,a.precedence,e));return i.instance}function Zu(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,v=0;v<o.length;v++){var E=o[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function rd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function sd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Ju=null;function V_(e,i,a){if(Ju===null){var o=new Map,h=Ju=new Map;h.set(a,o)}else h=Ju,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ar]||d[Ie]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=o.get(v);E?E.push(d):o.set(v,[d])}}return o}function M_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function pA(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function k_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var rl=null;function _A(){}function yA(e,i,a){if(rl===null)throw Error(s(475));var o=rl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Pa(a.href),d=e.querySelector(nl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=tc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=d,Zt(d);return}d=e.ownerDocument||e,a=O_(a),(h=On.get(h))&&rd(a,h),d=d.createElement("link"),Zt(d);var v=d;v._p=new Promise(function(E,R){v.onload=E,v.onerror=R}),Le(d,"link",a),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=tc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function vA(){if(rl===null)throw Error(s(475));var e=rl;return e.stylesheets&&e.count===0&&ad(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&ad(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)ad(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function ad(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,i.forEach(EA,e),ec=null,tc.call(e))}function EA(e,i){if(!(i.state.loading&4)){var a=ec.get(e);if(a)var o=a.get(null);else{a=new Map,ec.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||o,d===o&&a.set(null,h),a.set(v,h),this.count++,o=tc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var sl={$$typeof:q,Provider:null,Consumer:null,_currentValue:wt,_currentValue2:wt,_threadCount:0};function TA(e,i,a,o,h,d,v,E){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ws(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ws(0),this.hiddenUpdates=Ws(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function P_(e,i,a,o,h,d,v,E,R,N,j,K){return e=new TA(e,i,a,v,E,R,N,K),i=1,d===!0&&(i|=24),d=Cn(3,null,null,i),e.current=d,d.stateNode=e,i=Lh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},yf(d),e}function U_(e){return e?(e=ma,e):ma}function L_(e,i,a,o,h,d){h=U_(h),o.context===null?o.context=h:o.pendingContext=h,o=Tr(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ar(e,o,i),a!==null&&(Je(a,e,i),qo(a,e,i))}function x_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function od(e,i){x_(e,i),(e=e.alternate)&&x_(e,i)}function z_(e){if(e.tag===13){var i=mr(e,67108864);i!==null&&Je(i,e,67108864),od(e,67108864)}}var nc=!0;function AA(e,i,a,o){var h=S.T;S.T=null;var d=nt.p;try{nt.p=2,ld(e,i,a,o)}finally{nt.p=d,S.T=h}}function SA(e,i,a,o){var h=S.T;S.T=null;var d=nt.p;try{nt.p=8,ld(e,i,a,o)}finally{nt.p=d,S.T=h}}function ld(e,i,a,o){if(nc){var h=ud(o);if(h===null)$f(e,i,o,ic,a),H_(e,o);else if(bA(h,e,i,a,o))o.stopPropagation();else if(H_(e,o),i&4&&-1<RA.indexOf(e)){for(;h!==null;){var d=Ei(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Vn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var R=1<<31-Xe(v);E.entanglements[1]|=R,v&=~R}ii(d),(te&6)===0&&(Bu=tn()+500,Jo(0))}}break;case 13:E=mr(d,2),E!==null&&Je(E,d,2),ju(),od(d,2)}if(d=ud(o),d===null&&$f(e,i,o,ic,a),d===h)break;h=d}h!==null&&o.stopPropagation()}else $f(e,i,o,null,a)}}function ud(e){return e=na(e),cd(e)}var ic=null;function cd(e){if(ic=null,e=Mn(e),e!==null){var i=ut(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=qt(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ic=e,null}function B_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ql()){case _e:return 2;case we:return 8;case yi:case jl:return 32;case ao:return 268435456;default:return 32}default:return 32}}var hd=!1,Dr=null,Or=null,Nr=null,al=new Map,ol=new Map,Vr=[],RA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H_(e,i){switch(e){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(i.pointerId)}}function ll(e,i,a,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Ei(i),i!==null&&z_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function bA(e,i,a,o,h){switch(i){case"focusin":return Dr=ll(Dr,e,i,a,o,h),!0;case"dragenter":return Or=ll(Or,e,i,a,o,h),!0;case"mouseover":return Nr=ll(Nr,e,i,a,o,h),!0;case"pointerover":var d=h.pointerId;return al.set(d,ll(al.get(d)||null,e,i,a,o,h)),!0;case"gotpointercapture":return d=h.pointerId,ol.set(d,ll(ol.get(d)||null,e,i,a,o,h)),!0}return!1}function q_(e){var i=Mn(e.target);if(i!==null){var a=ut(i);if(a!==null){if(i=a.tag,i===13){if(i=qt(a),i!==null){e.blockedOn=i,sr(e.priority,function(){if(a.tag===13){var o=fn(),h=mr(a,o);h!==null&&Je(h,a,o),od(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=ud(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);yn=o,a.target.dispatchEvent(o),yn=null}else return i=Ei(a),i!==null&&z_(i),e.blockedOn=a,!1;i.shift()}return!0}function j_(e,i,a){rc(e)&&a.delete(i)}function wA(){hd=!1,Dr!==null&&rc(Dr)&&(Dr=null),Or!==null&&rc(Or)&&(Or=null),Nr!==null&&rc(Nr)&&(Nr=null),al.forEach(j_),ol.forEach(j_)}function sc(e,i){e.blockedOn===i&&(e.blockedOn=null,hd||(hd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wA)))}var ac=null;function F_(e){ac!==e&&(ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(cd(o||a)===null)continue;break}var d=Ei(a);d!==null&&(e.splice(i,3),i-=3,Jh(d,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function ul(e){function i(R){return sc(R,e)}Dr!==null&&sc(Dr,e),Or!==null&&sc(Or,e),Nr!==null&&sc(Nr,e),al.forEach(i),ol.forEach(i);for(var a=0;a<Vr.length;a++){var o=Vr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Vr.length&&(a=Vr[0],a.blockedOn===null);)q_(a),a.blockedOn===null&&Vr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],d=a[o+1],v=h[ye]||null;if(typeof d=="function")v||F_(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[ye]||null)E=v.formAction;else if(cd(h)!==null)continue}else E=v.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),F_(a)}}}function fd(e){this._internalRoot=e}oc.prototype.render=fd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=fn();L_(a,o,e,i,null,null)},oc.prototype.unmount=fd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&Na(),L_(e.current,2,null,e,null,null),ju(),i[vi]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Yl();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Vr.length&&i!==0&&i<Vr[a].priority;a++);Vr.splice(a,0,e),a===0&&q_(e)}};var G_=t.version;if(G_!=="19.0.0")throw Error(s(527,G_,"19.0.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=X(i),e=e!==null?at(e):null,e=e===null?null:e.stateNode,e};var IA={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Mn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Ji=lc.inject(IA),He=lc}catch{}}return hl.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",h=lp,d=up,v=cp,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=P_(e,1,!1,null,null,a,o,h,d,v,E,null),e[vi]=i.current,Xf(e.nodeType===8?e.parentNode:e),new fd(i)},hl.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,h="",d=lp,v=up,E=cp,R=null,N=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(N=a.formState)),i=P_(e,1,!0,i,a??null,o,h,d,v,E,R,N),i.context=U_(null),a=i.current,o=fn(),h=Tr(o),h.callback=null,Ar(a,h,o),i.current.lanes=o,oe(i,o),ii(i),e[vi]=i.current,Xf(e),new oc(i)},hl.version="19.0.0",hl}var ey;function LA(){if(ey)return gd.exports;ey=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),gd.exports=UA(),gd.exports}var xA=LA();const zA=()=>{};var ny={};/**
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
 */const Vv=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[n++]=l:l<2048?(t[n++]=l>>6|192,t[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=l>>18|240,t[n++]=l>>12&63|128,t[n++]=l>>6&63|128,t[n++]=l&63|128):(t[n++]=l>>12|224,t[n++]=l>>6&63|128,t[n++]=l&63|128)}return t},BA=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],f=r[n++],g=r[n++],p=((l&7)<<18|(c&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],f=r[n++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},Mv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],f=l+1<r.length,g=f?r[l+1]:0,p=l+2<r.length,y=p?r[l+2]:0,A=c>>2,C=(c&3)<<4|g>>4;let x=(g&15)<<2|y>>6,q=y&63;p||(q=64,f||(x=64)),s.push(n[A],n[C],n[x],n[q])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Vv(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):BA(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],g=l<r.length?n[r.charAt(l)]:0;++l;const y=l<r.length?n[r.charAt(l)]:64;++l;const C=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||g==null||y==null||C==null)throw new HA;const x=c<<2|g>>4;if(s.push(x),y!==64){const q=g<<4&240|y>>2;if(s.push(q),C!==64){const $=y<<6&192|C;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class HA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qA=function(r){const t=Vv(r);return Mv.encodeByteArray(t,!0)},Ic=function(r){return qA(r).replace(/\./g,"")},kv=function(r){try{return Mv.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function jA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FA=()=>jA().__FIREBASE_DEFAULTS__,GA=()=>{if(typeof process>"u"||typeof ny>"u")return;const r=ny.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},KA=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&kv(r[1]);return t&&JSON.parse(t)},Yc=()=>{try{return zA()||FA()||GA()||KA()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Pv=r=>{var t,n;return(n=(t=Yc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},Uv=r=>{const t=Pv(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Lv=()=>{var r;return(r=Yc())===null||r===void 0?void 0:r.config},xv=r=>{var t;return(t=Yc())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class QA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function zv(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ic(JSON.stringify(n)),Ic(JSON.stringify(f)),""].join(".")}/**
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
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function XA(){var r;const t=(r=Yc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $A(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WA(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ZA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JA(){const r=Qe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function tS(){return!XA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eS(){try{return typeof indexedDB=="object"}catch{return!1}}function nS(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var c;t(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){t(n)}})}/**
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
 */const iS="FirebaseError";class mi extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=iS,Object.setPrototypeOf(this,mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vl.prototype.create)}}class Vl{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?rS(c,s):"Error",g=`${this.serviceName}: ${f} (${l}).`;return new mi(l,g,s)}}function rS(r,t){return r.replace(sS,(n,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const sS=/\{\$([^}]+)}/g;function aS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Ps(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const l of n){if(!s.includes(l))return!1;const c=r[l],f=t[l];if(iy(c)&&iy(f)){if(!Ps(c,f))return!1}else if(c!==f)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function iy(r){return r!==null&&typeof r=="object"}/**
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
 */function Ml(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function fl(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,c]=s.split("=");t[decodeURIComponent(l)]=decodeURIComponent(c)}}),t}function dl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function oS(r,t){const n=new lS(r,t);return n.subscribe.bind(n)}class lS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let l;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");uS(t,["next","error","complete"])?l=t:l={next:t,error:n,complete:s},l.next===void 0&&(l.next=vd),l.error===void 0&&(l.error=vd),l.complete===void 0&&(l.complete=vd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uS(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function vd(){}/**
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
 */function sn(r){return r&&r._delegate?r._delegate:r}class Kr{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ms="[DEFAULT]";/**
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
 */class cS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new QA;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fS(t))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=Ms){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ms){return this.instances.has(t)}getOptions(t=Ms){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&f.resolve(l)}return l}onInit(t,n){var s;const l=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(l,c);const f=this.instances.get(l);return f&&t(f,l),()=>{c.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hS(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ms){return this.component?this.component.multipleInstances?t:Ms:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hS(r){return r===Ms?void 0:r}function fS(r){return r.instantiationMode==="EAGER"}/**
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
 */class dS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new cS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ot;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ot||(Ot={}));const mS={debug:Ot.DEBUG,verbose:Ot.VERBOSE,info:Ot.INFO,warn:Ot.WARN,error:Ot.ERROR,silent:Ot.SILENT},gS=Ot.INFO,pS={[Ot.DEBUG]:"log",[Ot.VERBOSE]:"log",[Ot.INFO]:"info",[Ot.WARN]:"warn",[Ot.ERROR]:"error"},_S=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=pS[t];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class rm{constructor(t){this.name=t,this._logLevel=gS,this._logHandler=_S,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ot.DEBUG,...t),this._logHandler(this,Ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ot.VERBOSE,...t),this._logHandler(this,Ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ot.INFO,...t),this._logHandler(this,Ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ot.WARN,...t),this._logHandler(this,Ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ot.ERROR,...t),this._logHandler(this,Ot.ERROR,...t)}}const yS=(r,t)=>t.some(n=>r instanceof n);let ry,sy;function vS(){return ry||(ry=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ES(){return sy||(sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bv=new WeakMap,Md=new WeakMap,Hv=new WeakMap,Ed=new WeakMap,sm=new WeakMap;function TS(r){const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(Hr(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&Bv.set(n,r)}).catch(()=>{}),sm.set(t,r),t}function AS(r){if(Md.has(r))return;const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});Md.set(r,t)}let kd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Md.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Hv.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function SS(r){kd=r(kd)}function RS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Td(this),t,...n);return Hv.set(s,t.sort?t.sort():[t]),Hr(s)}:ES().includes(r)?function(...t){return r.apply(Td(this),t),Hr(Bv.get(this))}:function(...t){return Hr(r.apply(Td(this),t))}}function bS(r){return typeof r=="function"?RS(r):(r instanceof IDBTransaction&&AS(r),yS(r,vS())?new Proxy(r,kd):r)}function Hr(r){if(r instanceof IDBRequest)return TS(r);if(Ed.has(r))return Ed.get(r);const t=bS(r);return t!==r&&(Ed.set(r,t),sm.set(t,r)),t}const Td=r=>sm.get(r);function wS(r,t,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const f=indexedDB.open(r,t),g=Hr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Hr(f.result),p.oldVersion,p.newVersion,Hr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const IS=["get","getKey","getAll","getAllKeys","count"],CS=["put","add","delete","clear"],Ad=new Map;function ay(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Ad.get(t))return Ad.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,l=CS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||IS.includes(n)))return;const c=async function(f,...g){const p=this.transaction(f,l?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(g.shift())),(await Promise.all([y[n](...g),l&&p.done]))[0]};return Ad.set(t,c),c}SS(r=>({...r,get:(t,n,s)=>ay(t,n)||r.get(t,n,s),has:(t,n)=>!!ay(t,n)||r.has(t,n)}));/**
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
 */class DS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function OS(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Pd="@firebase/app",oy="0.11.2";/**
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
 */const Qi=new rm("@firebase/app"),NS="@firebase/app-compat",VS="@firebase/analytics-compat",MS="@firebase/analytics",kS="@firebase/app-check-compat",PS="@firebase/app-check",US="@firebase/auth",LS="@firebase/auth-compat",xS="@firebase/database",zS="@firebase/data-connect",BS="@firebase/database-compat",HS="@firebase/functions",qS="@firebase/functions-compat",jS="@firebase/installations",FS="@firebase/installations-compat",GS="@firebase/messaging",KS="@firebase/messaging-compat",QS="@firebase/performance",YS="@firebase/performance-compat",XS="@firebase/remote-config",$S="@firebase/remote-config-compat",WS="@firebase/storage",ZS="@firebase/storage-compat",JS="@firebase/firestore",tR="@firebase/vertexai",eR="@firebase/firestore-compat",nR="firebase",iR="11.4.0";/**
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
 */const Ud="[DEFAULT]",rR={[Pd]:"fire-core",[NS]:"fire-core-compat",[MS]:"fire-analytics",[VS]:"fire-analytics-compat",[PS]:"fire-app-check",[kS]:"fire-app-check-compat",[US]:"fire-auth",[LS]:"fire-auth-compat",[xS]:"fire-rtdb",[zS]:"fire-data-connect",[BS]:"fire-rtdb-compat",[HS]:"fire-fn",[qS]:"fire-fn-compat",[jS]:"fire-iid",[FS]:"fire-iid-compat",[GS]:"fire-fcm",[KS]:"fire-fcm-compat",[QS]:"fire-perf",[YS]:"fire-perf-compat",[XS]:"fire-rc",[$S]:"fire-rc-compat",[WS]:"fire-gcs",[ZS]:"fire-gcs-compat",[JS]:"fire-fst",[eR]:"fire-fst-compat",[tR]:"fire-vertex","fire-js":"fire-js",[nR]:"fire-js-all"};/**
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
 */const Cc=new Map,sR=new Map,Ld=new Map;function ly(r,t){try{r.container.addComponent(t)}catch(n){Qi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function Us(r){const t=r.name;if(Ld.has(t))return Qi.debug(`There were multiple attempts to register component ${t}.`),!1;Ld.set(t,r);for(const n of Cc.values())ly(n,r);for(const n of sR.values())ly(n,r);return!0}function Xc(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function dn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const aR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new Vl("app","Firebase",aR);/**
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
 */class oR{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Hs=iR;function qv(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Ud,automaticDataCollectionEnabled:!1},t),l=s.name;if(typeof l!="string"||!l)throw qr.create("bad-app-name",{appName:String(l)});if(n||(n=Lv()),!n)throw qr.create("no-options");const c=Cc.get(l);if(c){if(Ps(n,c.options)&&Ps(s,c.config))return c;throw qr.create("duplicate-app",{appName:l})}const f=new dS(l);for(const p of Ld.values())f.addComponent(p);const g=new oR(n,s,f);return Cc.set(l,g),g}function am(r=Ud){const t=Cc.get(r);if(!t&&r===Ud&&Lv())return qv();if(!t)throw qr.create("no-app",{appName:r});return t}function si(r,t,n){var s;let l=(s=rR[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const c=l.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const g=[`Unable to register library "${l}" with version "${t}":`];c&&g.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&f&&g.push("and"),f&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qi.warn(g.join(" "));return}Us(new Kr(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
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
 */const lR="firebase-heartbeat-database",uR=1,Al="firebase-heartbeat-store";let Sd=null;function jv(){return Sd||(Sd=wS(lR,uR,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Al)}catch(n){console.warn(n)}}}}).catch(r=>{throw qr.create("idb-open",{originalErrorMessage:r.message})})),Sd}async function cR(r){try{const n=(await jv()).transaction(Al),s=await n.objectStore(Al).get(Fv(r));return await n.done,s}catch(t){if(t instanceof mi)Qi.warn(t.message);else{const n=qr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qi.warn(n.message)}}}async function uy(r,t){try{const s=(await jv()).transaction(Al,"readwrite");await s.objectStore(Al).put(t,Fv(r)),await s.done}catch(n){if(n instanceof mi)Qi.warn(n.message);else{const s=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qi.warn(s.message)}}}function Fv(r){return`${r.name}!${r.options.appId}`}/**
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
 */const hR=1024,fR=30;class dR{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=cy();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>fR){const f=pR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cy(),{heartbeatsToSend:s,unsentEntries:l}=mR(this._heartbeatsCache.heartbeats),c=Ic(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Qi.warn(n),""}}}function cy(){return new Date().toISOString().substring(0,10)}function mR(r,t=hR){const n=[];let s=r.slice();for(const l of r){const c=n.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),hy(n)>t){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),hy(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class gR{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eS()?nS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return uy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return uy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function hy(r){return Ic(JSON.stringify({version:2,heartbeats:r})).length}function pR(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function _R(r){Us(new Kr("platform-logger",t=>new DS(t),"PRIVATE")),Us(new Kr("heartbeat",t=>new dR(t),"PRIVATE")),si(Pd,oy,r),si(Pd,oy,"esm2017"),si("fire-js","")}_R("");var yR="firebase",vR="11.4.0";/**
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
 */si(yR,vR,"app");var fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,Gv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,b){function S(){}S.prototype=b.prototype,V.D=b.prototype,V.prototype=new S,V.prototype.constructor=V,V.C=function(I,M,U){for(var w=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)w[pe-2]=arguments[pe];return b.prototype[M].apply(I,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(V,b,S){S||(S=0);var I=Array(16);if(typeof b=="string")for(var M=0;16>M;++M)I[M]=b.charCodeAt(S++)|b.charCodeAt(S++)<<8|b.charCodeAt(S++)<<16|b.charCodeAt(S++)<<24;else for(M=0;16>M;++M)I[M]=b[S++]|b[S++]<<8|b[S++]<<16|b[S++]<<24;b=V.g[0],S=V.g[1],M=V.g[2];var U=V.g[3],w=b+(U^S&(M^U))+I[0]+3614090360&4294967295;b=S+(w<<7&4294967295|w>>>25),w=U+(M^b&(S^M))+I[1]+3905402710&4294967295,U=b+(w<<12&4294967295|w>>>20),w=M+(S^U&(b^S))+I[2]+606105819&4294967295,M=U+(w<<17&4294967295|w>>>15),w=S+(b^M&(U^b))+I[3]+3250441966&4294967295,S=M+(w<<22&4294967295|w>>>10),w=b+(U^S&(M^U))+I[4]+4118548399&4294967295,b=S+(w<<7&4294967295|w>>>25),w=U+(M^b&(S^M))+I[5]+1200080426&4294967295,U=b+(w<<12&4294967295|w>>>20),w=M+(S^U&(b^S))+I[6]+2821735955&4294967295,M=U+(w<<17&4294967295|w>>>15),w=S+(b^M&(U^b))+I[7]+4249261313&4294967295,S=M+(w<<22&4294967295|w>>>10),w=b+(U^S&(M^U))+I[8]+1770035416&4294967295,b=S+(w<<7&4294967295|w>>>25),w=U+(M^b&(S^M))+I[9]+2336552879&4294967295,U=b+(w<<12&4294967295|w>>>20),w=M+(S^U&(b^S))+I[10]+4294925233&4294967295,M=U+(w<<17&4294967295|w>>>15),w=S+(b^M&(U^b))+I[11]+2304563134&4294967295,S=M+(w<<22&4294967295|w>>>10),w=b+(U^S&(M^U))+I[12]+1804603682&4294967295,b=S+(w<<7&4294967295|w>>>25),w=U+(M^b&(S^M))+I[13]+4254626195&4294967295,U=b+(w<<12&4294967295|w>>>20),w=M+(S^U&(b^S))+I[14]+2792965006&4294967295,M=U+(w<<17&4294967295|w>>>15),w=S+(b^M&(U^b))+I[15]+1236535329&4294967295,S=M+(w<<22&4294967295|w>>>10),w=b+(M^U&(S^M))+I[1]+4129170786&4294967295,b=S+(w<<5&4294967295|w>>>27),w=U+(S^M&(b^S))+I[6]+3225465664&4294967295,U=b+(w<<9&4294967295|w>>>23),w=M+(b^S&(U^b))+I[11]+643717713&4294967295,M=U+(w<<14&4294967295|w>>>18),w=S+(U^b&(M^U))+I[0]+3921069994&4294967295,S=M+(w<<20&4294967295|w>>>12),w=b+(M^U&(S^M))+I[5]+3593408605&4294967295,b=S+(w<<5&4294967295|w>>>27),w=U+(S^M&(b^S))+I[10]+38016083&4294967295,U=b+(w<<9&4294967295|w>>>23),w=M+(b^S&(U^b))+I[15]+3634488961&4294967295,M=U+(w<<14&4294967295|w>>>18),w=S+(U^b&(M^U))+I[4]+3889429448&4294967295,S=M+(w<<20&4294967295|w>>>12),w=b+(M^U&(S^M))+I[9]+568446438&4294967295,b=S+(w<<5&4294967295|w>>>27),w=U+(S^M&(b^S))+I[14]+3275163606&4294967295,U=b+(w<<9&4294967295|w>>>23),w=M+(b^S&(U^b))+I[3]+4107603335&4294967295,M=U+(w<<14&4294967295|w>>>18),w=S+(U^b&(M^U))+I[8]+1163531501&4294967295,S=M+(w<<20&4294967295|w>>>12),w=b+(M^U&(S^M))+I[13]+2850285829&4294967295,b=S+(w<<5&4294967295|w>>>27),w=U+(S^M&(b^S))+I[2]+4243563512&4294967295,U=b+(w<<9&4294967295|w>>>23),w=M+(b^S&(U^b))+I[7]+1735328473&4294967295,M=U+(w<<14&4294967295|w>>>18),w=S+(U^b&(M^U))+I[12]+2368359562&4294967295,S=M+(w<<20&4294967295|w>>>12),w=b+(S^M^U)+I[5]+4294588738&4294967295,b=S+(w<<4&4294967295|w>>>28),w=U+(b^S^M)+I[8]+2272392833&4294967295,U=b+(w<<11&4294967295|w>>>21),w=M+(U^b^S)+I[11]+1839030562&4294967295,M=U+(w<<16&4294967295|w>>>16),w=S+(M^U^b)+I[14]+4259657740&4294967295,S=M+(w<<23&4294967295|w>>>9),w=b+(S^M^U)+I[1]+2763975236&4294967295,b=S+(w<<4&4294967295|w>>>28),w=U+(b^S^M)+I[4]+1272893353&4294967295,U=b+(w<<11&4294967295|w>>>21),w=M+(U^b^S)+I[7]+4139469664&4294967295,M=U+(w<<16&4294967295|w>>>16),w=S+(M^U^b)+I[10]+3200236656&4294967295,S=M+(w<<23&4294967295|w>>>9),w=b+(S^M^U)+I[13]+681279174&4294967295,b=S+(w<<4&4294967295|w>>>28),w=U+(b^S^M)+I[0]+3936430074&4294967295,U=b+(w<<11&4294967295|w>>>21),w=M+(U^b^S)+I[3]+3572445317&4294967295,M=U+(w<<16&4294967295|w>>>16),w=S+(M^U^b)+I[6]+76029189&4294967295,S=M+(w<<23&4294967295|w>>>9),w=b+(S^M^U)+I[9]+3654602809&4294967295,b=S+(w<<4&4294967295|w>>>28),w=U+(b^S^M)+I[12]+3873151461&4294967295,U=b+(w<<11&4294967295|w>>>21),w=M+(U^b^S)+I[15]+530742520&4294967295,M=U+(w<<16&4294967295|w>>>16),w=S+(M^U^b)+I[2]+3299628645&4294967295,S=M+(w<<23&4294967295|w>>>9),w=b+(M^(S|~U))+I[0]+4096336452&4294967295,b=S+(w<<6&4294967295|w>>>26),w=U+(S^(b|~M))+I[7]+1126891415&4294967295,U=b+(w<<10&4294967295|w>>>22),w=M+(b^(U|~S))+I[14]+2878612391&4294967295,M=U+(w<<15&4294967295|w>>>17),w=S+(U^(M|~b))+I[5]+4237533241&4294967295,S=M+(w<<21&4294967295|w>>>11),w=b+(M^(S|~U))+I[12]+1700485571&4294967295,b=S+(w<<6&4294967295|w>>>26),w=U+(S^(b|~M))+I[3]+2399980690&4294967295,U=b+(w<<10&4294967295|w>>>22),w=M+(b^(U|~S))+I[10]+4293915773&4294967295,M=U+(w<<15&4294967295|w>>>17),w=S+(U^(M|~b))+I[1]+2240044497&4294967295,S=M+(w<<21&4294967295|w>>>11),w=b+(M^(S|~U))+I[8]+1873313359&4294967295,b=S+(w<<6&4294967295|w>>>26),w=U+(S^(b|~M))+I[15]+4264355552&4294967295,U=b+(w<<10&4294967295|w>>>22),w=M+(b^(U|~S))+I[6]+2734768916&4294967295,M=U+(w<<15&4294967295|w>>>17),w=S+(U^(M|~b))+I[13]+1309151649&4294967295,S=M+(w<<21&4294967295|w>>>11),w=b+(M^(S|~U))+I[4]+4149444226&4294967295,b=S+(w<<6&4294967295|w>>>26),w=U+(S^(b|~M))+I[11]+3174756917&4294967295,U=b+(w<<10&4294967295|w>>>22),w=M+(b^(U|~S))+I[2]+718787259&4294967295,M=U+(w<<15&4294967295|w>>>17),w=S+(U^(M|~b))+I[9]+3951481745&4294967295,V.g[0]=V.g[0]+b&4294967295,V.g[1]=V.g[1]+(M+(w<<21&4294967295|w>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+U&4294967295}s.prototype.u=function(V,b){b===void 0&&(b=V.length);for(var S=b-this.blockSize,I=this.B,M=this.h,U=0;U<b;){if(M==0)for(;U<=S;)l(this,V,U),U+=this.blockSize;if(typeof V=="string"){for(;U<b;)if(I[M++]=V.charCodeAt(U++),M==this.blockSize){l(this,I),M=0;break}}else for(;U<b;)if(I[M++]=V[U++],M==this.blockSize){l(this,I),M=0;break}}this.h=M,this.o+=b},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var b=1;b<V.length-8;++b)V[b]=0;var S=8*this.o;for(b=V.length-8;b<V.length;++b)V[b]=S&255,S/=256;for(this.u(V),V=Array(16),b=S=0;4>b;++b)for(var I=0;32>I;I+=8)V[S++]=this.g[b]>>>I&255;return V};function c(V,b){var S=g;return Object.prototype.hasOwnProperty.call(S,V)?S[V]:S[V]=b(V)}function f(V,b){this.h=b;for(var S=[],I=!0,M=V.length-1;0<=M;M--){var U=V[M]|0;I&&U==b||(S[M]=U,I=!1)}this.g=S}var g={};function p(V){return-128<=V&&128>V?c(V,function(b){return new f([b|0],0>b?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return C;if(0>V)return Q(y(-V));for(var b=[],S=1,I=0;V>=S;I++)b[I]=V/S|0,S*=4294967296;return new f(b,0)}function A(V,b){if(V.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(V.charAt(0)=="-")return Q(A(V.substring(1),b));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=y(Math.pow(b,8)),I=C,M=0;M<V.length;M+=8){var U=Math.min(8,V.length-M),w=parseInt(V.substring(M,M+U),b);8>U?(U=y(Math.pow(b,U)),I=I.j(U).add(y(w))):(I=I.j(S),I=I.add(y(w)))}return I}var C=p(0),x=p(1),q=p(16777216);r=f.prototype,r.m=function(){if(J(this))return-Q(this).m();for(var V=0,b=1,S=0;S<this.g.length;S++){var I=this.i(S);V+=(0<=I?I:4294967296+I)*b,b*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if($(this))return"0";if(J(this))return"-"+Q(this).toString(V);for(var b=y(Math.pow(V,6)),S=this,I="";;){var M=dt(S,b).g;S=pt(S,M.j(b));var U=((0<S.g.length?S.g[0]:S.h)>>>0).toString(V);if(S=M,$(S))return U+I;for(;6>U.length;)U="0"+U;I=U+I}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function $(V){if(V.h!=0)return!1;for(var b=0;b<V.g.length;b++)if(V.g[b]!=0)return!1;return!0}function J(V){return V.h==-1}r.l=function(V){return V=pt(this,V),J(V)?-1:$(V)?0:1};function Q(V){for(var b=V.g.length,S=[],I=0;I<b;I++)S[I]=~V.g[I];return new f(S,~V.h).add(x)}r.abs=function(){return J(this)?Q(this):this},r.add=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0,M=0;M<=b;M++){var U=I+(this.i(M)&65535)+(V.i(M)&65535),w=(U>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);I=w>>>16,U&=65535,w&=65535,S[M]=w<<16|U}return new f(S,S[S.length-1]&-2147483648?-1:0)};function pt(V,b){return V.add(Q(b))}r.j=function(V){if($(this)||$(V))return C;if(J(this))return J(V)?Q(this).j(Q(V)):Q(Q(this).j(V));if(J(V))return Q(this.j(Q(V)));if(0>this.l(q)&&0>V.l(q))return y(this.m()*V.m());for(var b=this.g.length+V.g.length,S=[],I=0;I<2*b;I++)S[I]=0;for(I=0;I<this.g.length;I++)for(var M=0;M<V.g.length;M++){var U=this.i(I)>>>16,w=this.i(I)&65535,pe=V.i(M)>>>16,ce=V.i(M)&65535;S[2*I+2*M]+=w*ce,ht(S,2*I+2*M),S[2*I+2*M+1]+=U*ce,ht(S,2*I+2*M+1),S[2*I+2*M+1]+=w*pe,ht(S,2*I+2*M+1),S[2*I+2*M+2]+=U*pe,ht(S,2*I+2*M+2)}for(I=0;I<b;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=b;I<2*b;I++)S[I]=0;return new f(S,0)};function ht(V,b){for(;(V[b]&65535)!=V[b];)V[b+1]+=V[b]>>>16,V[b]&=65535,b++}function W(V,b){this.g=V,this.h=b}function dt(V,b){if($(b))throw Error("division by zero");if($(V))return new W(C,C);if(J(V))return b=dt(Q(V),b),new W(Q(b.g),Q(b.h));if(J(b))return b=dt(V,Q(b)),new W(Q(b.g),b.h);if(30<V.g.length){if(J(V)||J(b))throw Error("slowDivide_ only works with positive integers.");for(var S=x,I=b;0>=I.l(V);)S=ot(S),I=ot(I);var M=Tt(S,1),U=Tt(I,1);for(I=Tt(I,2),S=Tt(S,2);!$(I);){var w=U.add(I);0>=w.l(V)&&(M=M.add(S),U=w),I=Tt(I,1),S=Tt(S,1)}return b=pt(V,M.j(b)),new W(M,b)}for(M=C;0<=V.l(b);){for(S=Math.max(1,Math.floor(V.m()/b.m())),I=Math.ceil(Math.log(S)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),U=y(S),w=U.j(b);J(w)||0<w.l(V);)S-=I,U=y(S),w=U.j(b);$(U)&&(U=x),M=M.add(U),V=pt(V,w)}return new W(M,V)}r.A=function(V){return dt(this,V).h},r.and=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)&V.i(I);return new f(S,this.h&V.h)},r.or=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)|V.i(I);return new f(S,this.h|V.h)},r.xor=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)^V.i(I);return new f(S,this.h^V.h)};function ot(V){for(var b=V.g.length+1,S=[],I=0;I<b;I++)S[I]=V.i(I)<<1|V.i(I-1)>>>31;return new f(S,V.h)}function Tt(V,b){var S=b>>5;b%=32;for(var I=V.g.length-S,M=[],U=0;U<I;U++)M[U]=0<b?V.i(U+S)>>>b|V.i(U+S+1)<<32-b:V.i(U+S);return new f(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Gv=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=A,jr=f}).apply(typeof fy<"u"?fy:typeof self<"u"?self:typeof window<"u"?window:{});var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kv,ml,Qv,_c,xd,Yv,Xv,$v;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof uc=="object"&&uc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function l(u,m){if(m)t:{var _=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var P=u[T];if(!(P in _))break t;_=_[P]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&t(_,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var _=0,T=!1,P={next:function(){if(!T&&_<u.length){var B=_++;return{value:m(B,u[B]),done:!1}}return T=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}l("Array.prototype.values",function(u){return u||function(){return c(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function A(u,m,_){return u.call.apply(u.bind,arguments)}function C(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,T),u.apply(m,P)}}return function(){return u.apply(m,arguments)}}function x(u,m,_){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:C,x.apply(null,arguments)}function q(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function $(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,P,B){for(var Z=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)Z[kt-2]=arguments[kt];return m.prototype[P].apply(T,Z)}}function J(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function Q(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(p(T)){const P=u.length||0,B=T.length||0;u.length=P+B;for(let Z=0;Z<B;Z++)u[P+Z]=T[Z]}else u.push(T)}}class pt{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ht(u){return/^[\s\xa0]*$/.test(u)}function W(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function dt(u){return dt[" "](u),u}dt[" "]=function(){};var ot=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function Tt(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function V(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function b(u){const m={};for(const _ in u)m[_]=u[_];return m}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(u,m){let _,T;for(let P=1;P<arguments.length;P++){T=arguments[P];for(_ in T)u[_]=T[_];for(let B=0;B<S.length;B++)_=S[B],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function M(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function U(u){g.setTimeout(()=>{throw u},0)}function w(){var u=qt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class pe{constructor(){this.h=this.g=null}add(m,_){const T=ce.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var ce=new pt(()=>new tt,u=>u.reset());class tt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,ut=!1,qt=new pe,D=()=>{const u=g.Promise.resolve(void 0);_t=()=>{u.then(X)}};var X=()=>{for(var u;u=w();){try{u.h.call(u.g)}catch(_){U(_)}var m=ce;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ut=!1};function at(){this.s=this.s,this.C=this.C}at.prototype.s=!1,at.prototype.ma=function(){this.s||(this.s=!0,this.N())},at.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function et(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var nt=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};g.addEventListener("test",_,m),g.removeEventListener("test",_,m)}catch{}return u}();function wt(u,m){if(et.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(ot){t:{try{dt(m.nodeName);var P=!0;break t}catch{}P=!1}P||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Rt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&wt.aa.h.call(this)}}$(wt,et);var Rt={2:"touch",3:"pen",4:"mouse"};wt.prototype.h=function(){wt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),xt=0;function ne(u,m,_,T,P){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=P,this.key=++xt,this.da=this.fa=!1}function Gt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ye(u){this.src=u,this.g={},this.h=0}Ye.prototype.add=function(u,m,_,T,P){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var Z=mn(u,m,T,P);return-1<Z?(m=u[Z],_||(m.fa=!1)):(m=new ne(m,this.src,B,!!T,P),m.fa=_,u.push(m)),m};function pi(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],P=Array.prototype.indexOf.call(T,m,void 0),B;(B=0<=P)&&Array.prototype.splice.call(T,P,1),B&&(Gt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function mn(u,m,_,T){for(var P=0;P<u.length;++P){var B=u[P];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==T)return P}return-1}var Wi="closure_lm_"+(1e6*Math.random()|0),Zi={};function _i(u,m,_,T,P){if(Array.isArray(m)){for(var B=0;B<m.length;B++)_i(u,m[B],_,T,P);return null}return _=ql(_),u&&u[he]?u.K(m,_,y(T)?!!T.capture:!1,P):ro(u,m,_,!1,T,P)}function ro(u,m,_,T,P,B){if(!m)throw Error("Invalid event type");var Z=y(P)?!!P.capture:!!P,kt=so(u);if(kt||(u[Wi]=kt=new Ye(u)),_=kt.add(m,_,T,Z,B),_.proxy)return _;if(T=Qs(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)nt||(P=Z),P===void 0&&(P=!1),u.addEventListener(m.toString(),T,P);else if(u.attachEvent)u.attachEvent(Xs(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Qs(){function u(_){return m.call(u.src,u.listener,_)}const m=mh;return u}function Ys(u,m,_,T,P){if(Array.isArray(m))for(var B=0;B<m.length;B++)Ys(u,m[B],_,T,P);else T=y(T)?!!T.capture:!!T,_=ql(_),u&&u[he]?(u=u.i,m=String(m).toString(),m in u.g&&(B=u.g[m],_=mn(B,_,T,P),-1<_&&(Gt(B[_]),Array.prototype.splice.call(B,_,1),B.length==0&&(delete u.g[m],u.h--)))):u&&(u=so(u))&&(m=u.g[m.toString()],u=-1,m&&(u=mn(m,_,T,P)),(_=-1<u?m[u]:null)&&es(_))}function es(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[he])pi(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(Xs(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=so(m))?(pi(_,u),_.h==0&&(_.src=null,m[Wi]=null)):Gt(u)}}}function Xs(u){return u in Zi?Zi[u]:Zi[u]="on"+u}function mh(u,m){if(u.da)u=!0;else{m=new wt(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&es(u),u=_.call(T,m)}return u}function so(u){return u=u[Wi],u instanceof Ye?u:null}var tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ql(u){return typeof u=="function"?u:(u[tn]||(u[tn]=function(m){return u.handleEvent(m)}),u[tn])}function _e(){at.call(this),this.i=new Ye(this),this.M=this,this.F=null}$(_e,at),_e.prototype[he]=!0,_e.prototype.removeEventListener=function(u,m,_,T){Ys(this,u,m,_,T)};function we(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new et(m,u);else if(m instanceof et)m.target=m.target||u;else{var P=m;m=new et(T,u),I(m,P)}if(P=!0,_)for(var B=_.length-1;0<=B;B--){var Z=m.g=_[B];P=yi(Z,T,!0,m)&&P}if(Z=m.g=u,P=yi(Z,T,!0,m)&&P,P=yi(Z,T,!1,m)&&P,_)for(B=0;B<_.length;B++)Z=m.g=_[B],P=yi(Z,T,!1,m)&&P}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)Gt(_[T]);delete u.g[m],u.h--}}this.F=null},_e.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},_e.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function yi(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var P=!0,B=0;B<m.length;++B){var Z=m[B];if(Z&&!Z.da&&Z.capture==_){var kt=Z.listener,ve=Z.ha||Z.src;Z.fa&&pi(u.i,Z),P=kt.call(ve,T)!==!1&&P}}return P&&!T.defaultPrevented}function jl(u,m,_){if(typeof u=="function")_&&(u=x(u,_));else if(u&&typeof u.handleEvent=="function")u=x(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(u,m||0)}function ao(u){u.g=jl(()=>{u.g=null,u.i&&(u.i=!1,ao(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class gh extends at{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ao(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(u){at.call(this),this.h=u,this.g={}}$(ns,at);var Ji=[];function He(u){Tt(u.g,function(m,_){this.g.hasOwnProperty(_)&&es(m)},u),u.g={}}ns.prototype.N=function(){ns.aa.N.call(this),He(this)},ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oo=g.JSON.stringify,qn=g.JSON.parse,Xe=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function lo(){}lo.prototype.h=null;function Fl(u){return u.h||(u.h=u.i())}function Gl(){}var jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tr(){et.call(this,"d")}$(tr,et);function Vn(){et.call(this,"c")}$(Vn,et);var gn={},er=null;function $s(){return er=er||new _e}gn.La="serverreachability";function uo(u){et.call(this,gn.La,u)}$(uo,et);function nr(u){const m=$s();we(m,new uo(m))}gn.STAT_EVENT="statevent";function Ws(u,m){et.call(this,gn.STAT_EVENT,u),this.stat=m}$(Ws,et);function oe(u){const m=$s();we(m,new Ws(m,u))}gn.Ma="timingevent";function Kl(u,m){et.call(this,gn.Ma,u),this.size=m}$(Kl,et);function ir(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},m)}function rr(){this.g=!0}rr.prototype.xa=function(){this.g=!1};function Ql(u,m,_,T,P,B){u.info(function(){if(u.g)if(B)for(var Z="",kt=B.split("&"),ve=0;ve<kt.length;ve++){var Pt=kt[ve].split("=");if(1<Pt.length){var De=Pt[0];Pt=Pt[1];var Ee=De.split("_");Z=2<=Ee.length&&Ee[1]=="type"?Z+(De+"="+Pt+"&"):Z+(De+"=redacted&")}}else Z=null;else Z=B;return"XMLHTTP REQ ("+T+") [attempt "+P+"]: "+m+`
`+_+`
`+Z})}function Yl(u,m,_,T,P,B,Z){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+P+"]: "+m+`
`+_+`
`+B+" "+Z})}function sr(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ie(u,_)+(T?" "+T:"")})}function Fn(u,m){u.info(function(){return"TIMEOUT: "+m})}rr.prototype.info=function(){};function Ie(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var P=T[1];if(Array.isArray(P)&&!(1>P.length)){var B=P[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Z=1;Z<P.length;Z++)P[Z]=""}}}}return oo(_)}catch{return m}}var ye={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},is;function Zs(){}$(Zs,lo),Zs.prototype.g=function(){return new XMLHttpRequest},Zs.prototype.i=function(){return{}},is=new Zs;function Gn(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new ns(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new co}function co(){this.i=null,this.g="",this.h=!1}var ar={},rs={};function Mn(u,m,_){u.L=1,u.v=os(ie(m)),u.m=_,u.P=!0,Ei(u,null)}function Ei(u,m){u.F=Date.now(),Zt(u),u.A=ie(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Si(_.i,"t",T),u.C=0,_=u.j.J,u.h=new co,u.g=lu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new gh(x(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var P="readystatechange";Array.isArray(P)||(P&&(Ji[0]=P.toString()),P=Ji);for(var B=0;B<P.length;B++){var Z=_i(_,P[B],T||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),nr(),Ql(u.i,u.u,u.A,u.l,u.R,u.m)}Gn.prototype.ca=function(u){u=u.target;const m=this.M;m&&En(u)==3?m.j():this.Y(u)},Gn.prototype.Y=function(u){try{if(u==this.g)t:{const Ee=En(this.g);var m=this.g.Ba();const Ii=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||tu(this.g)))){this.J||Ee!=4||m==7||(m==8||0>=Ii?nr(3):nr(2)),Js(this);var _=this.g.Z();this.X=_;e:if(or(this)){var T=tu(this.g);u="";var P=T.length,B=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),an(this);var Z="";break e}this.h.i=new g.TextDecoder}for(m=0;m<P;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(B&&m==P-1)});T.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=_==200,Yl(this.i,this.u,this.A,this.l,this.R,Ee,_),this.o){if(this.T&&!this.K){e:{if(this.g){var kt,ve=this.g;if((kt=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ht(kt)){var Pt=kt;break e}}Pt=null}if(_=Pt)sr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,on(this,_);else{this.o=!1,this.s=3,oe(12),en(this),an(this);break t}}if(this.P){_=!0;let ke;for(;!this.J&&this.C<Z.length;)if(ke=lr(this,Z),ke==rs){Ee==4&&(this.s=4,oe(14),_=!1),sr(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==ar){this.s=4,oe(15),sr(this.i,this.l,Z,"[Invalid Chunk]"),_=!1;break}else sr(this.i,this.l,ke,null),on(this,ke);if(or(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||Z.length!=0||this.h.h||(this.s=1,oe(16),_=!1),this.o=this.o&&_,!_)sr(this.i,this.l,Z,"[Invalid Chunked Response]"),en(this),an(this);else if(0<Z.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ms(De),De.M=!0,oe(11))}}else sr(this.i,this.l,Z,null),on(this,Z);Ee==4&&en(this),this.o&&!this.J&&(Ee==4?su(this.j,this):(this.o=!1,Zt(this)))}else Th(this.g),_==400&&0<Z.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),en(this),an(this)}}}catch{}finally{}};function or(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function lr(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?rs:(_=Number(m.substring(_,T)),isNaN(_)?ar:(T+=1,T+_>m.length?rs:(m=m.slice(T,T+_),u.C=T+_,m)))}Gn.prototype.cancel=function(){this.J=!0,en(this)};function Zt(u){u.S=Date.now()+u.I,ho(u,u.I)}function ho(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ir(x(u.ba,u),m)}function Js(u){u.B&&(g.clearTimeout(u.B),u.B=null)}Gn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Fn(this.i,this.A),this.L!=2&&(nr(),oe(17)),en(this),this.s=2,an(this)):ho(this,this.S-u)};function an(u){u.j.G==0||u.J||su(u.j,u)}function en(u){Js(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,He(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function on(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||ur(_.h,u))){if(!u.K&&ur(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var P=T;if(P[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ua(_),oa(_);else break t;So(_),oe(18)}}else _.za=P[1],0<_.za-_.T&&37500>P[2]&&_.F&&_.v==0&&!_.C&&(_.C=ir(x(_.Za,_),6e3));if(1>=Xl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else wi(_,11)}else if((u.K||_.g==u)&&ua(_),!ht(m))for(P=_.Da.g.parse(m),m=0;m<P.length;m++){let Pt=P[m];if(_.T=Pt[0],Pt=Pt[1],_.G==2)if(Pt[0]=="c"){_.K=Pt[1],_.ia=Pt[2];const De=Pt[3];De!=null&&(_.la=De,_.j.info("VER="+_.la));const Ee=Pt[4];Ee!=null&&(_.Aa=Ee,_.j.info("SVER="+_.Aa));const Ii=Pt[5];Ii!=null&&typeof Ii=="number"&&0<Ii&&(T=1.5*Ii,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const ke=u.g;if(ke){const Zn=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zn){var B=T.h;B.g||Zn.indexOf("spdy")==-1&&Zn.indexOf("quic")==-1&&Zn.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(cr(B,B.h),B.h=null))}if(T.D){const bo=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;bo&&(T.ya=bo,zt(T.I,T.D,bo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var Z=u;if(T.qa=ou(T,T.J?T.ia:null,T.W),Z.K){pn(T.h,Z);var kt=Z,ve=T.L;ve&&(kt.I=ve),kt.B&&(Js(kt),Zt(kt)),T.g=Z}else iu(T);0<_.i.length&&la(_)}else Pt[0]!="stop"&&Pt[0]!="close"||wi(_,7);else _.G==3&&(Pt[0]=="stop"||Pt[0]=="close"?Pt[0]=="stop"?wi(_,7):To(_):Pt[0]!="noop"&&_.l&&_.l.ta(Pt),_.v=0)}}nr(4)}catch{}}var ph=class{constructor(u,m){this.g=u,this.map=m}};function fo(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Xl(u){return u.h?1:u.g?u.g.size:0}function ur(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function cr(u,m){u.g?u.g.add(m):u.h=m}function pn(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}fo.prototype.cancel=function(){if(this.i=$e(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function $e(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return J(u.i)}function $l(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function _h(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function ss(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=_h(u),T=$l(u),P=T.length,B=0;B<P;B++)m.call(void 0,T[B],_&&_[B],u)}var go=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ta(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),P=null;if(0<=T){var B=u[_].substring(0,T);P=u[_].substring(T+1)}else B=u[_];m(B,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Ti(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ti){this.h=u.h,hr(this,u.j),this.o=u.o,this.g=u.g,as(this,u.s),this.l=u.l;var m=u.i,_=new Kn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ea(this,_),this.m=u.m}else u&&(m=String(u).match(go))?(this.h=!1,hr(this,m[1]||"",!0),this.o=fr(m[2]||""),this.g=fr(m[3]||"",!0),as(this,m[4]),this.l=fr(m[5]||"",!0),ea(this,m[6]||"",!0),this.m=fr(m[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}Ti.prototype.toString=function(){var u=[],m=this.j;m&&u.push(_n(m,po,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(_n(m,po,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(_n(_,_.charAt(0)=="/"?_o:Wl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",_n(_,Eh)),u.join("")};function ie(u){return new Ti(u)}function hr(u,m,_){u.j=_?fr(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function as(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ea(u,m,_){m instanceof Kn?(u.i=m,yo(u.i,u.h)):(_||(m=_n(m,vh)),u.i=new Kn(m,u.h))}function zt(u,m,_){u.i.set(m,_)}function os(u){return zt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function fr(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function _n(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,yh),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function yh(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var po=/[#\/\?@]/g,Wl=/[#\?:]/g,_o=/[#\?]/g,vh=/[#\?@]/g,Eh=/#/g;function Kn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function yn(u){u.g||(u.g=new Map,u.h=0,u.i&&ta(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Kn.prototype,r.add=function(u,m){yn(this),this.i=null,u=Ri(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function na(u,m){yn(u),m=Ri(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ai(u,m){return yn(u),m=Ri(u,m),u.g.has(m)}r.forEach=function(u,m){yn(this),this.g.forEach(function(_,T){_.forEach(function(P){u.call(m,P,T,this)},this)},this)},r.na=function(){yn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const P=u[T];for(let B=0;B<P.length;B++)_.push(m[T])}return _},r.V=function(u){yn(this);let m=[];if(typeof u=="string")Ai(this,u)&&(m=m.concat(this.g.get(Ri(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return yn(this),this.i=null,u=Ri(this,u),Ai(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Si(u,m,_){na(u,m),0<_.length&&(u.i=null,u.g.set(Ri(u,m),J(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const B=encodeURIComponent(String(T)),Z=this.V(T);for(T=0;T<Z.length;T++){var P=B;Z[T]!==""&&(P+="="+encodeURIComponent(String(Z[T]))),u.push(P)}}return this.i=u.join("&")};function Ri(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function yo(u,m){m&&!u.j&&(yn(u),u.i=null,u.g.forEach(function(_,T){var P=T.toLowerCase();T!=P&&(na(this,T),Si(this,P,_))},u)),u.j=m}function Zl(u,m){const _=new rr;if(g.Image){const T=new Image;T.onload=q(vn,_,"TestLoadImage: loaded",!0,m,T),T.onerror=q(vn,_,"TestLoadImage: error",!1,m,T),T.onabort=q(vn,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=q(vn,_,"TestLoadImage: timeout",!1,m,T),g.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function ls(u,m){const _=new rr,T=new AbortController,P=setTimeout(()=>{T.abort(),vn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(B=>{clearTimeout(P),B.ok?vn(_,"TestPingServer: ok",!0,m):vn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),vn(_,"TestPingServer: error",!1,m)})}function vn(u,m,_,T,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),T(_)}catch{}}function us(){this.g=new Xe}function Qn(u,m,_){const T=_||"";try{ss(u,function(P,B){let Z=P;y(P)&&(Z=oo(P)),m.push(T+B+"="+encodeURIComponent(Z))})}catch(P){throw m.push(T+"type="+encodeURIComponent("_badmap")),P}}function dr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(dr,lo),dr.prototype.g=function(){return new bi(this.l,this.j)},dr.prototype.i=function(u){return function(){return u}}({});function bi(u,m){_e.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(bi,_e),r=bi.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Xn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function vo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Yn(this):Xn(this),this.readyState==3&&vo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Yn(this))},r.Qa=function(u){this.g&&(this.response=u,Yn(this))},r.ga=function(){this.g&&Yn(this)};function Yn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Xn(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Xn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Eo(u){let m="";return Tt(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function Ce(u,m,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=Eo(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):zt(u,m,_))}function jt(u){_e.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(jt,_e);var ia=/^https?$/i,cs=["POST","PUT"];r=jt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():is.g(),this.v=this.o?Fl(this.o):Fl(is),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){Jl(this,B);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var P in T)_.set(P,T[P]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())_.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),P=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(cs,m,void 0))||T||P||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of _)this.g.setRequestHeader(B,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Jl(this,B)}};function Jl(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ra(u),$n(u)}function ra(u){u.A||(u.A=!0,we(u,"complete"),we(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,we(this,"complete"),we(this,"abort"),$n(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$n(this,!0)),jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?sa(this):this.bb())},r.bb=function(){sa(this)};function sa(u){if(u.h&&typeof f<"u"&&(!u.v[1]||En(u)!=4||u.Z()!=2)){if(u.u&&En(u)==4)jl(u.Ea,0,u);else if(we(u,"readystatechange"),En(u)==4){u.h=!1;try{const Z=u.Z();t:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var T;if(T=Z===0){var P=String(u.D).match(go)[1]||null;!P&&g.self&&g.self.location&&(P=g.self.location.protocol.slice(0,-1)),T=!ia.test(P?P.toLowerCase():"")}_=T}if(_)we(u,"complete"),we(u,"success");else{u.m=6;try{var B=2<En(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",ra(u)}}finally{$n(u)}}}}function $n(u,m){if(u.g){hs(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||we(u,"ready");try{_.onreadystatechange=T}catch{}}}function hs(u){u.I&&(g.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function En(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),qn(m)}};function tu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Th(u){const m={};u=(u.g&&2<=En(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(ht(u[T]))continue;var _=M(u[T]);const P=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[P]||[];m[P]=B,B.push(_)}V(m,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fs(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function aa(u){this.Aa=0,this.i=[],this.j=new rr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fs("baseRetryDelayMs",5e3,u),this.cb=fs("retryDelaySeedMs",1e4,u),this.Wa=fs("forwardChannelMaxRetries",2,u),this.wa=fs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new fo(u&&u.concurrentRequestLimit),this.Da=new us,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=aa.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,T){oe(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=ou(this,null,this.W),la(this)};function To(u){if(eu(u),u.G==3){var m=u.U++,_=ie(u.I);if(zt(_,"SID",u.K),zt(_,"RID",m),zt(_,"TYPE","terminate"),ds(u,_),m=new Gn(u,u.j,m),m.L=2,m.v=os(ie(_)),_=!1,g.navigator&&g.navigator.sendBeacon)try{_=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&g.Image&&(new Image().src=m.v,_=!0),_||(m.g=lu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Zt(m)}au(u)}function oa(u){u.g&&(ms(u),u.g.cancel(),u.g=null)}function eu(u){oa(u),u.u&&(g.clearTimeout(u.u),u.u=null),ua(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function la(u){if(!mo(u.h)&&!u.s){u.s=!0;var m=u.Ga;_t||D(),ut||(_t(),ut=!0),qt.add(m,u),u.B=0}}function Ah(u,m){return Xl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ir(x(u.Ga,u,m),Ro(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const P=new Gn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=b(B),I(B,this.S)):B=this.S),this.m!==null||this.O||(P.H=B,B=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=nu(this,P,m),_=ie(this.I),zt(_,"RID",u),zt(_,"CVER",22),this.D&&zt(_,"X-HTTP-Session-Id",this.D),ds(this,_),B&&(this.O?m="headers="+encodeURIComponent(String(Eo(B)))+"&"+m:this.m&&Ce(_,this.m,B)),cr(this.h,P),this.Ua&&zt(_,"TYPE","init"),this.P?(zt(_,"$req",m),zt(_,"SID","null"),P.T=!0,Mn(P,_,null)):Mn(P,_,m),this.G=2}}else this.G==3&&(u?Ao(this,u):this.i.length==0||mo(this.h)||Ao(this))};function Ao(u,m){var _;m?_=m.l:_=u.U++;const T=ie(u.I);zt(T,"SID",u.K),zt(T,"RID",_),zt(T,"AID",u.T),ds(u,T),u.m&&u.o&&Ce(T,u.m,u.o),_=new Gn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=nu(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),cr(u.h,_),Mn(_,T,m)}function ds(u,m){u.H&&Tt(u.H,function(_,T){zt(m,T,_)}),u.l&&ss({},function(_,T){zt(m,T,_)})}function nu(u,m,_){_=Math.min(u.i.length,_);var T=u.l?x(u.l.Na,u.l,u):null;t:{var P=u.i;let B=-1;for(;;){const Z=["count="+_];B==-1?0<_?(B=P[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let kt=!0;for(let ve=0;ve<_;ve++){let Pt=P[ve].g;const De=P[ve].map;if(Pt-=B,0>Pt)B=Math.max(0,P[ve].g-100),kt=!1;else try{Qn(De,Z,"req"+Pt+"_")}catch{T&&T(De)}}if(kt){T=Z.join("&");break t}}}return u=u.i.splice(0,_),m.D=u,T}function iu(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;_t||D(),ut||(_t(),ut=!0),qt.add(m,u),u.v=0}}function So(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ir(x(u.Fa,u),Ro(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,ru(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ir(x(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oe(10),oa(this),ru(this))};function ms(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function ru(u){u.g=new Gn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=ie(u.qa);zt(m,"RID","rpc"),zt(m,"SID",u.K),zt(m,"AID",u.T),zt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&zt(m,"TO",u.ja),zt(m,"TYPE","xmlhttp"),ds(u,m),u.m&&u.o&&Ce(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=os(ie(m)),_.m=null,_.P=!0,Ei(_,u)}r.Za=function(){this.C!=null&&(this.C=null,oa(this),So(this),oe(19))};function ua(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function su(u,m){var _=null;if(u.g==m){ua(u),ms(u),u.g=null;var T=2}else if(ur(u.h,m))_=m.D,pn(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var P=u.B;T=$s(),we(T,new Kl(T,_)),la(u)}else iu(u);else if(P=m.s,P==3||P==0&&0<m.X||!(T==1&&Ah(u,m)||T==2&&So(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),P){case 1:wi(u,5);break;case 4:wi(u,10);break;case 3:wi(u,6);break;default:wi(u,2)}}}function Ro(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function wi(u,m){if(u.j.info("Error code "+m),m==2){var _=x(u.fb,u),T=u.Xa;const P=!T;T=new Ti(T||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||hr(T,"https"),os(T),P?Zl(T.toString(),_):ls(T.toString(),_)}else oe(2);u.G=0,u.l&&u.l.sa(m),au(u),eu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function au(u){if(u.G=0,u.ka=[],u.l){const m=$e(u.h);(m.length!=0||u.i.length!=0)&&(Q(u.ka,m),Q(u.ka,u.i),u.h.i.length=0,J(u.i),u.i.length=0),u.l.ra()}}function ou(u,m,_){var T=_ instanceof Ti?ie(_):new Ti(_);if(T.g!="")m&&(T.g=m+"."+T.g),as(T,T.s);else{var P=g.location;T=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;var B=new Ti(null);T&&hr(B,T),m&&(B.g=m),P&&as(B,P),_&&(B.l=_),T=B}return _=u.D,m=u.ya,_&&m&&zt(T,_,m),zt(T,"VER",u.la),ds(u,T),T}function lu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new jt(new dr({eb:_})):new jt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function uu(){}r=uu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ca(){}ca.prototype.g=function(u,m){return new We(u,m)};function We(u,m){_e.call(this),this.g=new aa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ht(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ht(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Wn(this)}$(We,_e),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){To(this.g)},We.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=oo(u),u=_);m.i.push(new ph(m.Ya++,u)),m.G==3&&la(m)},We.prototype.N=function(){this.g.l=null,delete this.j,To(this.g),delete this.g,We.aa.N.call(this)};function cu(u){tr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const _ in m){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(cu,tr);function hu(){Vn.call(this),this.status=1}$(hu,Vn);function Wn(u){this.g=u}$(Wn,uu),Wn.prototype.ua=function(){we(this.g,"a")},Wn.prototype.ta=function(u){we(this.g,new cu(u))},Wn.prototype.sa=function(u){we(this.g,new hu)},Wn.prototype.ra=function(){we(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,$v=function(){return new ca},Xv=function(){return $s()},Yv=gn,xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ye.NO_ERROR=0,ye.TIMEOUT=8,ye.HTTP_ERROR=6,_c=ye,vi.COMPLETE="complete",Qv=vi,Gl.EventType=jn,jn.OPEN="a",jn.CLOSE="b",jn.ERROR="c",jn.MESSAGE="d",_e.prototype.listen=_e.prototype.K,ml=Gl,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,Kv=jt}).apply(typeof uc<"u"?uc:typeof self<"u"?self:typeof window<"u"?window:{});const dy="@firebase/firestore",my="4.7.9";/**
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
 */class Ge{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let Ja="11.4.0";/**
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
 */const Ls=new rm("@firebase/firestore");function La(){return Ls.logLevel}function it(r,...t){if(Ls.logLevel<=Ot.DEBUG){const n=t.map(om);Ls.debug(`Firestore (${Ja}): ${r}`,...n)}}function Yi(r,...t){if(Ls.logLevel<=Ot.ERROR){const n=t.map(om);Ls.error(`Firestore (${Ja}): ${r}`,...n)}}function Ka(r,...t){if(Ls.logLevel<=Ot.WARN){const n=t.map(om);Ls.warn(`Firestore (${Ja}): ${r}`,...n)}}function om(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function yt(r="Unexpected state"){const t=`FIRESTORE (${Ja}) INTERNAL ASSERTION FAILED: `+r;throw Yi(t),new Error(t)}function Ft(r,t){r||yt()}function St(r,t){return r}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ct extends mi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Wv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ER{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class TR{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AR{constructor(t){this.t=t,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ft(this.o===void 0);let s=this.i;const l=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let c=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Fr,t.enqueueRetryable(()=>l(this.currentUser))};const f=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await l(this.currentUser)})},g=p=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>g(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Fr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ft(typeof s.accessToken=="string"),new Wv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ft(t===null||typeof t=="string"),new Ge(t)}}class SR{constructor(t,n,s){this.l=t,this.h=n,this.P=s,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class RR{constructor(t,n,s){this.l=t,this.h=n,this.P=s}getToken(){return Promise.resolve(new SR(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gy{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bR{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,dn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){Ft(this.o===void 0);const s=c=>{c.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.R;return this.R=c.token,it("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const l=c=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?l(c):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new gy(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ft(typeof n.token=="string"),this.R=n.token,new gy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wR(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Zv{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=wR(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<n&&(s+=t.charAt(l[c]%62))}return s}}function Mt(r,t){return r<t?-1:r>t?1:0}function Qa(r,t,n){return r.length===t.length&&r.every((s,l)=>n(s,t[l]))}/**
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
 */const py=-62135596800,_y=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(t){return Re.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*_y);return new Re(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ct(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ct(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<py)throw new ct(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ct(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_y}_compareTo(t){return this.seconds===t.seconds?Mt(this.nanoseconds,t.nanoseconds):Mt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-py;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Et{static fromTimestamp(t){return new Et(t)}static min(){return new Et(new Re(0,0))}static max(){return new Et(new Re(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const yy="__name__";class ri{constructor(t,n,s){n===void 0?n=0:n>t.length&&yt(),s===void 0?s=t.length-n:s>t.length-n&&yt(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ri.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ri?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let l=0;l<s;l++){const c=ri.compareSegments(t.get(l),n.get(l));if(c!==0)return c}return Math.sign(t.length-n.length)}static compareSegments(t,n){const s=ri.isNumericId(t),l=ri.isNumericId(n);return s&&!l?-1:!s&&l?1:s&&l?ri.extractNumericId(t).compare(ri.extractNumericId(n)):t<n?-1:t>n?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return jr.fromString(t.substring(4,t.length-2))}}class Wt extends ri{construct(t,n,s){return new Wt(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new ct(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(l=>l.length>0))}return new Wt(n)}static emptyPath(){return new Wt([])}}const IR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends ri{construct(t,n,s){return new ze(t,n,s)}static isValidIdentifier(t){return IR.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yy}static keyField(){return new ze([yy])}static fromServerFormat(t){const n=[];let s="",l=0;const c=()=>{if(s.length===0)throw new ct(Y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;l<t.length;){const g=t[l];if(g==="\\"){if(l+1===t.length)throw new ct(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[l+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ct(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,l+=2}else g==="`"?(f=!f,l++):g!=="."||f?(s+=g,l++):(c(),l++)}if(c(),f)throw new ct(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class ft{constructor(t){this.path=t}static fromPath(t){return new ft(Wt.fromString(t))}static fromName(t){return new ft(Wt.fromString(t).popFirst(5))}static empty(){return new ft(Wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Wt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Wt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ft(new Wt(t.slice()))}}/**
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
 */const Sl=-1;function CR(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=Et.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new Qr(l,ft.empty(),t)}function DR(r){return new Qr(r.readTime,r.key,Sl)}class Qr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Qr(Et.min(),ft.empty(),Sl)}static max(){return new Qr(Et.max(),ft.empty(),Sl)}}function OR(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ft.comparator(r.documentKey,t.documentKey),n!==0?n:Mt(r.largestBatchId,t.largestBatchId))}/**
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
 */const NR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function to(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==NR)throw r;it("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&yt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new G((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,l)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):G.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):G.reject(n)}static resolve(t){return new G((n,s)=>{n(t)})}static reject(t){return new G((n,s)=>{s(t)})}static waitFor(t){return new G((n,s)=>{let l=0,c=0,f=!1;t.forEach(g=>{++l,g.next(()=>{++c,f&&c===l&&n()},p=>s(p))}),f=!0,c===l&&n()})}static or(t){let n=G.resolve(!1);for(const s of t)n=n.next(l=>l?G.resolve(l):s());return n}static forEach(t,n){const s=[];return t.forEach((l,c)=>{s.push(n.call(this,l,c))}),this.waitFor(s)}static mapArray(t,n){return new G((s,l)=>{const c=t.length,f=new Array(c);let g=0;for(let p=0;p<c;p++){const y=p;n(t[y]).next(A=>{f[y]=A,++g,g===c&&s(f)},A=>l(A))}})}static doWhile(t,n){return new G((s,l)=>{const c=()=>{t()===!0?n().next(()=>{c()},l):s()};c()})}}function MR(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function eo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class $c{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}$c.ae=-1;/**
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
 */const lm=-1;function Wc(r){return r==null}function Dc(r){return r===0&&1/r==-1/0}function kR(r){return typeof r=="number"&&Number.isInteger(r)&&!Dc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Jv="";function PR(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=vy(t)),t=UR(r.get(n),t);return vy(t)}function UR(r,t){let n=t;const s=r.length;for(let l=0;l<s;l++){const c=r.charAt(l);switch(c){case"\0":n+="";break;case Jv:n+="";break;default:n+=c}}return n}function vy(r){return r+Jv+""}/**
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
 */function Ey(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function qs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function tE(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ee{constructor(t,n){this.comparator=t,this.root=n||xe.EMPTY}insert(t,n){return new ee(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(t){return new ee(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return n+s.left.size;l<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cc(this.root,t,this.comparator,!1)}getReverseIterator(){return new cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cc(this.root,t,this.comparator,!0)}}class cc{constructor(t,n,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?s(t.key,n):1,n&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xe{constructor(t,n,s,l,c){this.key=t,this.value=n,this.color=s??xe.RED,this.left=l??xe.EMPTY,this.right=c??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,l,c){return new xe(t??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let l=this;const c=s(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,n,s),null):c===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(t,n,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,l=this;if(n(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(t,l.key)===0){if(l.right.isEmpty())return xe.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw yt();const t=this.left.check();if(t!==this.right.check())throw yt();return t+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw yt()}get value(){throw yt()}get color(){throw yt()}get left(){throw yt()}get right(){throw yt()}copy(t,n,s,l,c){return this}insert(t,n,s){return new xe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class be{constructor(t){this.comparator=t,this.data=new ee(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;n(l.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ty(this.data.getIterator())}getIteratorFrom(t){return new Ty(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new be(this.comparator);return n.data=t,n}}class Ty{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xn{constructor(t){this.fields=t,t.sort(ze.comparator)}static empty(){return new xn([])}unionWith(t){let n=new be(ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new xn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Qa(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class eE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Be{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new eE("Invalid base64 string: "+c):c}}(t);return new Be(n)}static fromUint8Array(t){const n=function(l){let c="";for(let f=0;f<l.length;++f)c+=String.fromCharCode(l[f]);return c}(t);return new Be(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Mt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const LR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(r){if(Ft(!!r),typeof r=="string"){let t=0;const n=LR.exec(r);if(Ft(!!n),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:ue(r.seconds),nanos:ue(r.nanos)}}function ue(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Xr(r){return typeof r=="string"?Be.fromBase64String(r):Be.fromUint8Array(r)}/**
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
 */const nE="server_timestamp",iE="__type__",rE="__previous_value__",sE="__local_write_time__";function um(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[iE])===null||n===void 0?void 0:n.stringValue)===nE}function Zc(r){const t=r.mapValue.fields[rE];return um(t)?Zc(t):t}function Rl(r){const t=Yr(r.mapValue.fields[sE].timestampValue);return new Re(t.seconds,t.nanos)}/**
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
 */class xR{constructor(t,n,s,l,c,f,g,p,y){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=y}}const Oc="(default)";class bl{constructor(t,n){this.projectId=t,this.database=n||Oc}static empty(){return new bl("","")}get isDefaultDatabase(){return this.database===Oc}isEqual(t){return t instanceof bl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const aE="__type__",zR="__max__",hc={mapValue:{}},oE="__vector__",Nc="value";function $r(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?um(r)?4:HR(r)?9007199254740991:BR(r)?10:11:yt()}function hi(r,t){if(r===t)return!0;const n=$r(r);if(n!==$r(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Rl(r).isEqual(Rl(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const f=Yr(l.timestampValue),g=Yr(c.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,c){return Xr(l.bytesValue).isEqual(Xr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,c){return ue(l.geoPointValue.latitude)===ue(c.geoPointValue.latitude)&&ue(l.geoPointValue.longitude)===ue(c.geoPointValue.longitude)}(r,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return ue(l.integerValue)===ue(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const f=ue(l.doubleValue),g=ue(c.doubleValue);return f===g?Dc(f)===Dc(g):isNaN(f)&&isNaN(g)}return!1}(r,t);case 9:return Qa(r.arrayValue.values||[],t.arrayValue.values||[],hi);case 10:case 11:return function(l,c){const f=l.mapValue.fields||{},g=c.mapValue.fields||{};if(Ey(f)!==Ey(g))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(g[p]===void 0||!hi(f[p],g[p])))return!1;return!0}(r,t);default:return yt()}}function wl(r,t){return(r.values||[]).find(n=>hi(n,t))!==void 0}function Ya(r,t){if(r===t)return 0;const n=$r(r),s=$r(t);if(n!==s)return Mt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Mt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const g=ue(c.integerValue||c.doubleValue),p=ue(f.integerValue||f.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1}(r,t);case 3:return Ay(r.timestampValue,t.timestampValue);case 4:return Ay(Rl(r),Rl(t));case 5:return Mt(r.stringValue,t.stringValue);case 6:return function(c,f){const g=Xr(c),p=Xr(f);return g.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const g=c.split("/"),p=f.split("/");for(let y=0;y<g.length&&y<p.length;y++){const A=Mt(g[y],p[y]);if(A!==0)return A}return Mt(g.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const g=Mt(ue(c.latitude),ue(f.latitude));return g!==0?g:Mt(ue(c.longitude),ue(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Sy(r.arrayValue,t.arrayValue);case 10:return function(c,f){var g,p,y,A;const C=c.fields||{},x=f.fields||{},q=(g=C[Nc])===null||g===void 0?void 0:g.arrayValue,$=(p=x[Nc])===null||p===void 0?void 0:p.arrayValue,J=Mt(((y=q==null?void 0:q.values)===null||y===void 0?void 0:y.length)||0,((A=$==null?void 0:$.values)===null||A===void 0?void 0:A.length)||0);return J!==0?J:Sy(q,$)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===hc.mapValue&&f===hc.mapValue)return 0;if(c===hc.mapValue)return 1;if(f===hc.mapValue)return-1;const g=c.fields||{},p=Object.keys(g),y=f.fields||{},A=Object.keys(y);p.sort(),A.sort();for(let C=0;C<p.length&&C<A.length;++C){const x=Mt(p[C],A[C]);if(x!==0)return x;const q=Ya(g[p[C]],y[A[C]]);if(q!==0)return q}return Mt(p.length,A.length)}(r.mapValue,t.mapValue);default:throw yt()}}function Ay(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Mt(r,t);const n=Yr(r),s=Yr(t),l=Mt(n.seconds,s.seconds);return l!==0?l:Mt(n.nanos,s.nanos)}function Sy(r,t){const n=r.values||[],s=t.values||[];for(let l=0;l<n.length&&l<s.length;++l){const c=Ya(n[l],s[l]);if(c)return c}return Mt(n.length,s.length)}function Xa(r){return zd(r)}function zd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Yr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Xr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ft.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",l=!0;for(const c of n.values||[])l?l=!1:s+=",",s+=zd(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let l="{",c=!0;for(const f of s)c?c=!1:l+=",",l+=`${f}:${zd(n.fields[f])}`;return l+"}"}(r.mapValue):yt()}function yc(r){switch($r(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Zc(r);return t?16+yc(t):16;case 5:return 2*r.stringValue.length;case 6:return Xr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((l,c)=>l+yc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let l=0;return qs(s.fields,(c,f)=>{l+=c.length+yc(f)}),l}(r.mapValue);default:throw yt()}}function Bd(r){return!!r&&"integerValue"in r}function cm(r){return!!r&&"arrayValue"in r}function Ry(r){return!!r&&"nullValue"in r}function by(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function vc(r){return!!r&&"mapValue"in r}function BR(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[aE])===null||n===void 0?void 0:n.stringValue)===oE}function _l(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return qs(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=_l(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_l(r.arrayValue.values[n]);return t}return Object.assign({},r)}function HR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===zR}/**
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
 */class Nn{constructor(t){this.value=t}static empty(){return new Nn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!vc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=_l(n)}setAll(t){let n=ze.emptyPath(),s={},l=[];t.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,s,l),s={},l=[],n=g.popLast()}f?s[g.lastSegment()]=_l(f):l.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,l)}delete(t){const n=this.field(t.popLast());vc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return hi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=n.mapValue.fields[t.get(s)];vc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=l),n=l}return n.mapValue.fields}applyChanges(t,n,s){qs(n,(l,c)=>t[l]=c);for(const l of s)delete t[l]}clone(){return new Nn(_l(this.value))}}function lE(r){const t=[];return qs(r.fields,(n,s)=>{const l=new ze([n]);if(vc(s)){const c=lE(s.mapValue).fields;if(c.length===0)t.push(l);else for(const f of c)t.push(l.child(f))}else t.push(l)}),new xn(t)}/**
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
 */class Ke{constructor(t,n,s,l,c,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=l,this.createTime=c,this.data=f,this.documentState=g}static newInvalidDocument(t){return new Ke(t,0,Et.min(),Et.min(),Et.min(),Nn.empty(),0)}static newFoundDocument(t,n,s,l){return new Ke(t,1,n,Et.min(),s,l,0)}static newNoDocument(t,n){return new Ke(t,2,n,Et.min(),Et.min(),Nn.empty(),0)}static newUnknownDocument(t,n){return new Ke(t,3,n,Et.min(),Et.min(),Nn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Et.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Et.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ke&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vc{constructor(t,n){this.position=t,this.inclusive=n}}function wy(r,t,n){let s=0;for(let l=0;l<r.position.length;l++){const c=t[l],f=r.position[l];if(c.field.isKeyField()?s=ft.comparator(ft.fromName(f.referenceValue),n.key):s=Ya(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Iy(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!hi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Mc{constructor(t,n="asc"){this.field=t,this.dir=n}}function qR(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class uE{}class Se extends uE{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new FR(t,n,s):n==="array-contains"?new QR(t,s):n==="in"?new YR(t,s):n==="not-in"?new XR(t,s):n==="array-contains-any"?new $R(t,s):new Se(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new GR(t,s):new KR(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ya(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison(Ya(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return yt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fi extends uE{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new fi(t,n)}matches(t){return cE(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function cE(r){return r.op==="and"}function hE(r){return jR(r)&&cE(r)}function jR(r){for(const t of r.filters)if(t instanceof fi)return!1;return!0}function Hd(r){if(r instanceof Se)return r.field.canonicalString()+r.op.toString()+Xa(r.value);if(hE(r))return r.filters.map(t=>Hd(t)).join(",");{const t=r.filters.map(n=>Hd(n)).join(",");return`${r.op}(${t})`}}function fE(r,t){return r instanceof Se?function(s,l){return l instanceof Se&&s.op===l.op&&s.field.isEqual(l.field)&&hi(s.value,l.value)}(r,t):r instanceof fi?function(s,l){return l instanceof fi&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce((c,f,g)=>c&&fE(f,l.filters[g]),!0):!1}(r,t):void yt()}function dE(r){return r instanceof Se?function(n){return`${n.field.canonicalString()} ${n.op} ${Xa(n.value)}`}(r):r instanceof fi?function(n){return n.op.toString()+" {"+n.getFilters().map(dE).join(" ,")+"}"}(r):"Filter"}class FR extends Se{constructor(t,n,s){super(t,n,s),this.key=ft.fromName(s.referenceValue)}matches(t){const n=ft.comparator(t.key,this.key);return this.matchesComparison(n)}}class GR extends Se{constructor(t,n){super(t,"in",n),this.keys=mE("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class KR extends Se{constructor(t,n){super(t,"not-in",n),this.keys=mE("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function mE(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ft.fromName(s.referenceValue))}class QR extends Se{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return cm(n)&&wl(n.arrayValue,this.value)}}class YR extends Se{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&wl(this.value.arrayValue,n)}}class XR extends Se{constructor(t,n){super(t,"not-in",n)}matches(t){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!wl(this.value.arrayValue,n)}}class $R extends Se{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!cm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>wl(this.value.arrayValue,s))}}/**
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
 */class WR{constructor(t,n=null,s=[],l=[],c=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=f,this.endAt=g,this.le=null}}function Cy(r,t=null,n=[],s=[],l=null,c=null,f=null){return new WR(r,t,n,s,l,c,f)}function hm(r){const t=St(r);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Hd(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),Wc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Xa(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Xa(s)).join(",")),t.le=n}return t.le}function fm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!qR(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!fE(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Iy(r.startAt,t.startAt)&&Iy(r.endAt,t.endAt)}function qd(r){return ft.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Jc{constructor(t,n=null,s=[],l=[],c=null,f="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=f,this.startAt=g,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function ZR(r,t,n,s,l,c,f,g){return new Jc(r,t,n,s,l,c,f,g)}function gE(r){return new Jc(r)}function Dy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function JR(r){return r.collectionGroup!==null}function yl(r){const t=St(r);if(t.he===null){t.he=[];const n=new Set;for(const c of t.explicitOrderBy)t.he.push(c),n.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new be(ze.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(g=g.add(y.field))})}),g})(t).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||t.he.push(new Mc(c,s))}),n.has(ze.keyField().canonicalString())||t.he.push(new Mc(ze.keyField(),s))}return t.he}function ai(r){const t=St(r);return t.Pe||(t.Pe=tb(t,yl(r))),t.Pe}function tb(r,t){if(r.limitType==="F")return Cy(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new Mc(l.field,c)});const n=r.endAt?new Vc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Vc(r.startAt.position,r.startAt.inclusive):null;return Cy(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function jd(r,t,n){return new Jc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function th(r,t){return fm(ai(r),ai(t))&&r.limitType===t.limitType}function pE(r){return`${hm(ai(r))}|lt:${r.limitType}`}function xa(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(l=>dE(l)).join(", ")}]`),Wc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(l=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(l)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(l=>Xa(l)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(l=>Xa(l)).join(",")),`Target(${s})`}(ai(r))}; limitType=${r.limitType})`}function eh(r,t){return t.isFoundDocument()&&function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ft.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,l){for(const c of yl(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0}(r,t)&&function(s,l){return!(s.startAt&&!function(f,g,p){const y=wy(f,g,p);return f.inclusive?y<=0:y<0}(s.startAt,yl(s),l)||s.endAt&&!function(f,g,p){const y=wy(f,g,p);return f.inclusive?y>=0:y>0}(s.endAt,yl(s),l))}(r,t)}function eb(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function _E(r){return(t,n)=>{let s=!1;for(const l of yl(r)){const c=nb(l,t,n);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function nb(r,t,n){const s=r.field.isKeyField()?ft.comparator(t.key,n.key):function(c,f,g){const p=f.data.field(c),y=g.data.field(c);return p!==null&&y!==null?Ya(p,y):yt()}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return yt()}}/**
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
 */class js{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,n]);l.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[n]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){qs(this.inner,(n,s)=>{for(const[l,c]of s)t(l,c)})}isEmpty(){return tE(this.inner)}size(){return this.innerSize}}/**
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
 */const ib=new ee(ft.comparator);function Xi(){return ib}const yE=new ee(ft.comparator);function gl(...r){let t=yE;for(const n of r)t=t.insert(n.key,n);return t}function vE(r){let t=yE;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function ks(){return vl()}function EE(){return vl()}function vl(){return new js(r=>r.toString(),(r,t)=>r.isEqual(t))}const rb=new ee(ft.comparator),sb=new be(ft.comparator);function Nt(...r){let t=sb;for(const n of r)t=t.add(n);return t}const ab=new be(Mt);function ob(){return ab}/**
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
 */function dm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dc(t)?"-0":t}}function TE(r){return{integerValue:""+r}}function lb(r,t){return kR(t)?TE(t):dm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class nh{constructor(){this._=void 0}}function ub(r,t,n){return r instanceof kc?function(l,c){const f={fields:{[iE]:{stringValue:nE},[sE]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&um(c)&&(c=Zc(c)),c&&(f.fields[rE]=c),{mapValue:f}}(n,t):r instanceof Il?SE(r,t):r instanceof Cl?RE(r,t):function(l,c){const f=AE(l,c),g=Oy(f)+Oy(l.Ie);return Bd(f)&&Bd(l.Ie)?TE(g):dm(l.serializer,g)}(r,t)}function cb(r,t,n){return r instanceof Il?SE(r,t):r instanceof Cl?RE(r,t):n}function AE(r,t){return r instanceof Pc?function(s){return Bd(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class kc extends nh{}class Il extends nh{constructor(t){super(),this.elements=t}}function SE(r,t){const n=bE(t);for(const s of r.elements)n.some(l=>hi(l,s))||n.push(s);return{arrayValue:{values:n}}}class Cl extends nh{constructor(t){super(),this.elements=t}}function RE(r,t){let n=bE(t);for(const s of r.elements)n=n.filter(l=>!hi(l,s));return{arrayValue:{values:n}}}class Pc extends nh{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Oy(r){return ue(r.integerValue||r.doubleValue)}function bE(r){return cm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function hb(r,t){return r.field.isEqual(t.field)&&function(s,l){return s instanceof Il&&l instanceof Il||s instanceof Cl&&l instanceof Cl?Qa(s.elements,l.elements,hi):s instanceof Pc&&l instanceof Pc?hi(s.Ie,l.Ie):s instanceof kc&&l instanceof kc}(r.transform,t.transform)}class fb{constructor(t,n){this.version=t,this.transformResults=n}}class oi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new oi}static exists(t){return new oi(void 0,t)}static updateTime(t){return new oi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ec(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ih{}function wE(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new mm(r.key,oi.none()):new kl(r.key,r.data,oi.none());{const n=r.data,s=Nn.empty();let l=new be(ze.comparator);for(let c of t.fields)if(!l.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),l=l.add(c)}return new Fs(r.key,s,new xn(l.toArray()),oi.none())}}function db(r,t,n){r instanceof kl?function(l,c,f){const g=l.value.clone(),p=Vy(l.fieldTransforms,c,f.transformResults);g.setAll(p),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):r instanceof Fs?function(l,c,f){if(!Ec(l.precondition,c))return void c.convertToUnknownDocument(f.version);const g=Vy(l.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(IE(l)),p.setAll(g),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(l,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function El(r,t,n,s){return r instanceof kl?function(c,f,g,p){if(!Ec(c.precondition,f))return g;const y=c.value.clone(),A=My(c.fieldTransforms,p,f);return y.setAll(A),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Fs?function(c,f,g,p){if(!Ec(c.precondition,f))return g;const y=My(c.fieldTransforms,p,f),A=f.data;return A.setAll(IE(c)),A.setAll(y),f.convertToFoundDocument(f.version,A).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(C=>C.field))}(r,t,n,s):function(c,f,g){return Ec(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g}(r,t,n)}function mb(r,t){let n=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),c=AE(s.transform,l||null);c!=null&&(n===null&&(n=Nn.empty()),n.set(s.field,c))}return n||null}function Ny(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&Qa(s,l,(c,f)=>hb(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class kl extends ih{constructor(t,n,s,l=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Fs extends ih{constructor(t,n,s,l,c=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function IE(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Vy(r,t,n){const s=new Map;Ft(r.length===n.length);for(let l=0;l<n.length;l++){const c=r[l],f=c.transform,g=t.data.field(c.field);s.set(c.field,cb(f,g,n[l]))}return s}function My(r,t,n){const s=new Map;for(const l of r){const c=l.transform,f=n.data.field(l.field);s.set(l.field,ub(c,f,t))}return s}class mm extends ih{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gb extends ih{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pb{constructor(t,n,s,l){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&db(c,t,s[l])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=El(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=El(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=EE();return this.mutations.forEach(l=>{const c=t.get(l.key),f=c.overlayedDocument;let g=this.applyToLocalView(f,c.mutatedFields);g=n.has(l.key)?null:g;const p=wE(f,g);p!==null&&s.set(l.key,p),f.isValidDocument()||f.convertToNoDocument(Et.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Nt())}isEqual(t){return this.batchId===t.batchId&&Qa(this.mutations,t.mutations,(n,s)=>Ny(n,s))&&Qa(this.baseMutations,t.baseMutations,(n,s)=>Ny(n,s))}}class gm{constructor(t,n,s,l){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=l}static from(t,n,s){Ft(t.mutations.length===s.length);let l=function(){return rb}();const c=t.mutations;for(let f=0;f<c.length;f++)l=l.insert(c[f].key,s[f].version);return new gm(t,n,s,l)}}/**
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
 */class _b{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class yb{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var ge,Lt;function vb(r){switch(r){case Y.OK:return yt();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return yt()}}function CE(r){if(r===void 0)return Yi("GRPC error has no .code"),Y.UNKNOWN;switch(r){case ge.OK:return Y.OK;case ge.CANCELLED:return Y.CANCELLED;case ge.UNKNOWN:return Y.UNKNOWN;case ge.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ge.INTERNAL:return Y.INTERNAL;case ge.UNAVAILABLE:return Y.UNAVAILABLE;case ge.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ge.NOT_FOUND:return Y.NOT_FOUND;case ge.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ge.ABORTED:return Y.ABORTED;case ge.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ge.DATA_LOSS:return Y.DATA_LOSS;default:return yt()}}(Lt=ge||(ge={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Eb(){return new TextEncoder}/**
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
 */const Tb=new jr([4294967295,4294967295],0);function ky(r){const t=Eb().encode(r),n=new Gv;return n.update(t),new Uint8Array(n.digest())}function Py(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new jr([n,s],0),new jr([l,c],0)]}class pm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new pl(`Invalid padding: ${n}`);if(s<0)throw new pl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new pl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new pl(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=jr.fromNumber(this.Ee)}Ae(t,n,s){let l=t.add(n.multiply(jr.fromNumber(s)));return l.compare(Tb)===1&&(l=new jr([l.getBits(0),l.getBits(1)],0)),l.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=ky(t),[s,l]=Py(n);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,l,c);if(!this.Re(f))return!1}return!0}static create(t,n,s){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new pm(c,l,n);return s.forEach(g=>f.insert(g)),f}insert(t){if(this.Ee===0)return;const n=ky(t),[s,l]=Py(n);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,l,c);this.Ve(f)}}Ve(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rh{constructor(t,n,s,l,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const l=new Map;return l.set(t,Pl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new rh(Et.min(),l,new ee(Mt),Xi(),Nt())}}class Pl{constructor(t,n,s,l,c){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Pl(s,n,Nt(),Nt(),Nt())}}/**
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
 */class Tc{constructor(t,n,s,l){this.me=t,this.removedTargetIds=n,this.key=s,this.fe=l}}class DE{constructor(t,n){this.targetId=t,this.ge=n}}class OE{constructor(t,n,s=Be.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=l}}class Uy{constructor(){this.pe=0,this.ye=Ly(),this.we=Be.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=Nt(),n=Nt(),s=Nt();return this.ye.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:n=n.add(l);break;case 1:s=s.add(l);break;default:yt()}}),new Pl(this.we,this.be,t,n,s)}Me(){this.Se=!1,this.ye=Ly()}xe(t,n){this.Se=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Ft(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class Ab{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Xi(),this.$e=fc(),this.Ke=fc(),this.Ue=new ee(Mt)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const s=this.He(n);switch(t.state){case 0:this.Je(n)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(t.resumeToken));break;default:yt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((s,l)=>{this.Je(l)&&n(l)})}Ze(t){const n=t.targetId,s=t.ge.count,l=this.Xe(n);if(l){const c=l.target;if(qd(c))if(s===0){const f=new ft(c.path);this.ze(n,f,Ke.newNoDocument(f,Et.min()))}else Ft(s===1);else{const f=this.et(n);if(f!==s){const g=this.tt(t),p=g?this.nt(g,t,f):1;if(p!==0){this.Ye(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,y)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=n;let f,g;try{f=Xr(s).toUint8Array()}catch(p){if(p instanceof eE)return Ka("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new pm(f,l,c)}catch(p){return Ka(p instanceof pl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.Ee===0?null:g}nt(t,n,s){return n.ge.count===s-this.st(t,n.targetId)?0:2}st(t,n){const s=this.ke.getRemoteKeysForTarget(n);let l=0;return s.forEach(c=>{const f=this.ke.it(),g=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.ze(n,c,null),l++)}),l}ot(t){const n=new Map;this.qe.forEach((c,f)=>{const g=this.Xe(f);if(g){if(c.current&&qd(g.target)){const p=new ft(g.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,Ke.newNoDocument(p,t))}c.ve&&(n.set(f,c.Fe()),c.Me())}});let s=Nt();this.Ke.forEach((c,f)=>{let g=!0;f.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(s=s.add(c))}),this.Qe.forEach((c,f)=>f.setReadTime(t));const l=new rh(t,n,this.Ue,this.Qe,s);return this.Qe=Xi(),this.$e=fc(),this.Ke=fc(),this.Ue=new ee(Mt),l}Ge(t,n){if(!this.Je(t))return;const s=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(t))}ze(t,n,s){if(!this.Je(t))return;const l=this.He(t);this.ut(t,n)?l.xe(n,1):l.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(t)),this.Ke=this.Ke.insert(n,this.ct(n).add(t)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new Uy,this.qe.set(t,n)),n}ct(t){let n=this.Ke.get(t);return n||(n=new be(Mt),this.Ke=this.Ke.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new be(Mt),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||it("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Uy),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function fc(){return new ee(ft.comparator)}function Ly(){return new ee(ft.comparator)}const Sb={asc:"ASCENDING",desc:"DESCENDING"},Rb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bb={and:"AND",or:"OR"};class wb{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Fd(r,t){return r.useProto3Json||Wc(t)?t:{value:t}}function Uc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function NE(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Ib(r,t){return Uc(r,t.toTimestamp())}function li(r){return Ft(!!r),Et.fromTimestamp(function(n){const s=Yr(n);return new Re(s.seconds,s.nanos)}(r))}function _m(r,t){return Gd(r,t).canonicalString()}function Gd(r,t){const n=function(l){return new Wt(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?n:n.child(t)}function VE(r){const t=Wt.fromString(r);return Ft(LE(t)),t}function Kd(r,t){return _m(r.databaseId,t.path)}function Rd(r,t){const n=VE(t);if(n.get(1)!==r.databaseId.projectId)throw new ct(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ct(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ft(kE(n))}function ME(r,t){return _m(r.databaseId,t)}function Cb(r){const t=VE(r);return t.length===4?Wt.emptyPath():kE(t)}function Qd(r){return new Wt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function kE(r){return Ft(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function xy(r,t,n){return{name:Kd(r,t),fields:n.value.mapValue.fields}}function Db(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:yt()}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(y,A){return y.useProto3Json?(Ft(A===void 0||typeof A=="string"),Be.fromBase64String(A||"")):(Ft(A===void 0||A instanceof Buffer||A instanceof Uint8Array),Be.fromUint8Array(A||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&function(y){const A=y.code===void 0?Y.UNKNOWN:CE(y.code);return new ct(A,y.message||"")}(f);n=new OE(s,l,c,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=Rd(r,s.document.name),c=li(s.document.updateTime),f=s.document.createTime?li(s.document.createTime):Et.min(),g=new Nn({mapValue:{fields:s.document.fields}}),p=Ke.newFoundDocument(l,c,f,g),y=s.targetIds||[],A=s.removedTargetIds||[];n=new Tc(y,A,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=Rd(r,s.document),c=s.readTime?li(s.readTime):Et.min(),f=Ke.newNoDocument(l,c),g=s.removedTargetIds||[];n=new Tc([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=Rd(r,s.document),c=s.removedTargetIds||[];n=new Tc([],c,l,null)}else{if(!("filter"in t))return yt();{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,f=new yb(l,c),g=s.targetId;n=new DE(g,f)}}return n}function Ob(r,t){let n;if(t instanceof kl)n={update:xy(r,t.key,t.value)};else if(t instanceof mm)n={delete:Kd(r,t.key)};else if(t instanceof Fs)n={update:xy(r,t.key,t.data),updateMask:zb(t.fieldMask)};else{if(!(t instanceof gb))return yt();n={verify:Kd(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const g=f.transform;if(g instanceof kc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Il)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Cl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof Pc)return{fieldPath:f.field.canonicalString(),increment:g.Ie};throw yt()}(0,s))),t.precondition.isNone||(n.currentDocument=function(l,c){return c.updateTime!==void 0?{updateTime:Ib(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:yt()}(r,t.precondition)),n}function Nb(r,t){return r&&r.length>0?(Ft(t!==void 0),r.map(n=>function(l,c){let f=l.updateTime?li(l.updateTime):li(c);return f.isEqual(Et.min())&&(f=li(c)),new fb(f,l.transformResults||[])}(n,t))):[]}function Vb(r,t){return{documents:[ME(r,t.path)]}}function Mb(r,t){const n={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=ME(r,l);const c=function(y){if(y.length!==0)return UE(fi.create(y,"and"))}(t.filters);c&&(n.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(A=>function(x){return{field:za(x.field),direction:Ub(x.dir)}}(A))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=Fd(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ht:n,parent:l}}function kb(r){let t=Cb(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let l=null;if(s>0){Ft(s===1);const A=n.from[0];A.allDescendants?l=A.collectionId:t=t.child(A.collectionId)}let c=[];n.where&&(c=function(C){const x=PE(C);return x instanceof fi&&hE(x)?x.getFilters():[x]}(n.where));let f=[];n.orderBy&&(f=function(C){return C.map(x=>function($){return new Mc(Ba($.field),function(Q){switch(Q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(x))}(n.orderBy));let g=null;n.limit&&(g=function(C){let x;return x=typeof C=="object"?C.value:C,Wc(x)?null:x}(n.limit));let p=null;n.startAt&&(p=function(C){const x=!!C.before,q=C.values||[];return new Vc(q,x)}(n.startAt));let y=null;return n.endAt&&(y=function(C){const x=!C.before,q=C.values||[];return new Vc(q,x)}(n.endAt)),ZR(t,l,f,c,g,"F",p,y)}function Pb(r,t){const n=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return yt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function PE(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ba(n.unaryFilter.field);return Se.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=Ba(n.unaryFilter.field);return Se.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Ba(n.unaryFilter.field);return Se.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ba(n.unaryFilter.field);return Se.create(f,"!=",{nullValue:"NULL_VALUE"});default:return yt()}}(r):r.fieldFilter!==void 0?function(n){return Se.create(Ba(n.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return yt()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return fi.create(n.compositeFilter.filters.map(s=>PE(s)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return yt()}}(n.compositeFilter.op))}(r):yt()}function Ub(r){return Sb[r]}function Lb(r){return Rb[r]}function xb(r){return bb[r]}function za(r){return{fieldPath:r.canonicalString()}}function Ba(r){return ze.fromServerFormat(r.fieldPath)}function UE(r){return r instanceof Se?function(n){if(n.op==="=="){if(by(n.value))return{unaryFilter:{field:za(n.field),op:"IS_NAN"}};if(Ry(n.value))return{unaryFilter:{field:za(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(by(n.value))return{unaryFilter:{field:za(n.field),op:"IS_NOT_NAN"}};if(Ry(n.value))return{unaryFilter:{field:za(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:za(n.field),op:Lb(n.op),value:n.value}}}(r):r instanceof fi?function(n){const s=n.getFilters().map(l=>UE(l));return s.length===1?s[0]:{compositeFilter:{op:xb(n.op),filters:s}}}(r):yt()}function zb(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function LE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Br{constructor(t,n,s,l,c=Et.min(),f=Et.min(),g=Be.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new Br(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Bb{constructor(t){this.Tt=t}}function Hb(r){const t=kb({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?jd(t,t.limit,"L"):t}/**
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
 */class qb{constructor(){this.Tn=new jb}addToCollectionParentIndex(t,n){return this.Tn.add(n),G.resolve()}getCollectionParents(t,n){return G.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return G.resolve()}deleteFieldIndex(t,n){return G.resolve()}deleteAllFieldIndexes(t){return G.resolve()}createTargetIndexes(t,n){return G.resolve()}getDocumentsMatchingTarget(t,n){return G.resolve(null)}getIndexType(t,n){return G.resolve(0)}getFieldIndexes(t,n){return G.resolve([])}getNextCollectionGroupToUpdate(t){return G.resolve(null)}getMinOffset(t,n){return G.resolve(Qr.min())}getMinOffsetFromCollectionGroup(t,n){return G.resolve(Qr.min())}updateCollectionGroup(t,n,s){return G.resolve()}updateIndexEntries(t,n){return G.resolve()}}class jb{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n]||new be(Wt.comparator),c=!l.has(s);return this.index[n]=l.add(s),c}has(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n];return l&&l.has(s)}getEntries(t){return(this.index[t]||new be(Wt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const zy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xE=41943040;class rn{static withCacheSize(t){return new rn(t,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(xE,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
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
 */class $a{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new $a(0)}static Un(){return new $a(-1)}}/**
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
 */const By="LruGarbageCollector",Fb=1048576;function Hy([r,t],[n,s]){const l=Mt(r,n);return l===0?Mt(t,s):l}class Gb{constructor(t){this.Hn=t,this.buffer=new be(Hy),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Hy(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Kb{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){it(By,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){eo(n)?it(By,"Ignoring IndexedDB error during garbage collection: ",n):await to(n)}await this.er(3e5)})}}class Qb{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return G.resolve($c.ae);const s=new Gb(n);return this.tr.forEachTarget(t,l=>s.Zn(l.sequenceNumber)).next(()=>this.tr.rr(t,l=>s.Zn(l))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.tr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(it("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(zy)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(it("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zy):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let s,l,c,f,g,p,y;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(it("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),l=this.params.maximumSequenceNumbersToCollect):l=C,f=Date.now(),this.nthSequenceNumber(t,l))).next(C=>(s=C,g=Date.now(),this.removeTargets(t,s,n))).next(C=>(c=C,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(C=>(y=Date.now(),La()<=Ot.DEBUG&&it("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-A}ms
	Determined least recently used ${l} in `+(g-f)+`ms
	Removed ${c} targets in `+(p-g)+`ms
	Removed ${C} documents in `+(y-p)+`ms
Total Duration: ${y-A}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:C})))}}function Yb(r,t){return new Qb(r,t)}/**
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
 */class Xb{constructor(){this.changes=new js(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ke.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?G.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class $b{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Wb{constructor(t,n,s,l){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(l=>(s=l,this.remoteDocumentCache.getEntry(t,n))).next(l=>(s!==null&&El(s.mutation,l,xn.empty(),Re.now()),l))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Nt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Nt()){const l=ks();return this.populateOverlays(t,l,n).next(()=>this.computeViews(t,n,l,s).next(c=>{let f=gl();return c.forEach((g,p)=>{f=f.insert(g,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=ks();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Nt()))}populateOverlays(t,n,s){const l=[];return s.forEach(c=>{n.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((f,g)=>{n.set(f,g)})})}computeViews(t,n,s,l){let c=Xi();const f=vl(),g=function(){return vl()}();return n.forEach((p,y)=>{const A=s.get(y.key);l.has(y.key)&&(A===void 0||A.mutation instanceof Fs)?c=c.insert(y.key,y):A!==void 0?(f.set(y.key,A.mutation.getFieldMask()),El(A.mutation,y,A.mutation.getFieldMask(),Re.now())):f.set(y.key,xn.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((y,A)=>f.set(y,A)),n.forEach((y,A)=>{var C;return g.set(y,new $b(A,(C=f.get(y))!==null&&C!==void 0?C:null))}),g))}recalculateAndSaveOverlays(t,n){const s=vl();let l=new ee((f,g)=>f-g),c=Nt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const g of f)g.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let A=s.get(p)||xn.empty();A=g.applyToLocalView(y,A),s.set(p,A);const C=(l.get(g.batchId)||Nt()).add(p);l=l.insert(g.batchId,C)})}).next(()=>{const f=[],g=l.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),y=p.key,A=p.value,C=EE();A.forEach(x=>{if(!c.has(x)){const q=wE(n.get(x),s.get(x));q!==null&&C.set(x,q),c=c.add(x)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,C))}return G.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,l){return function(f){return ft.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):JR(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,l):this.getDocumentsMatchingCollectionQuery(t,n,s,l)}getNextDocuments(t,n,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,l).next(c=>{const f=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,l-c.size):G.resolve(ks());let g=Sl,p=c;return f.next(y=>G.forEach(y,(A,C)=>(g<C.largestBatchId&&(g=C.largestBatchId),c.get(A)?G.resolve():this.remoteDocumentCache.getEntry(t,A).next(x=>{p=p.insert(A,x)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,p,y,Nt())).next(A=>({batchId:g,changes:vE(A)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ft(n)).next(s=>{let l=gl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l})}getDocumentsMatchingCollectionGroupQuery(t,n,s,l){const c=n.collectionGroup;let f=gl();return this.indexManager.getCollectionParents(t,c).next(g=>G.forEach(g,p=>{const y=function(C,x){return new Jc(x,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(n,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,l).next(A=>{A.forEach((C,x)=>{f=f.insert(C,x)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,c,l))).next(f=>{c.forEach((p,y)=>{const A=y.getKey();f.get(A)===null&&(f=f.insert(A,Ke.newInvalidDocument(A)))});let g=gl();return f.forEach((p,y)=>{const A=c.get(p);A!==void 0&&El(A.mutation,y,xn.empty(),Re.now()),eh(n,y)&&(g=g.insert(p,y))}),g})}}/**
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
 */class Zb{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return G.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(l){return{id:l.id,version:l.version,createTime:li(l.createTime)}}(n)),G.resolve()}getNamedQuery(t,n){return G.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(l){return{name:l.name,query:Hb(l.bundledQuery),readTime:li(l.readTime)}}(n)),G.resolve()}}/**
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
 */class Jb{constructor(){this.overlays=new ee(ft.comparator),this.Rr=new Map}getOverlay(t,n){return G.resolve(this.overlays.get(n))}getOverlays(t,n){const s=ks();return G.forEach(n,l=>this.getOverlay(t,l).next(c=>{c!==null&&s.set(l,c)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((l,c)=>{this.Et(t,n,c)}),G.resolve()}removeOverlaysForBatchId(t,n,s){const l=this.Rr.get(s);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(s)),G.resolve()}getOverlaysForCollection(t,n,s){const l=ks(),c=n.length+1,f=new ft(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const p=g.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&l.set(p.getKey(),p)}return G.resolve(l)}getOverlaysForCollectionGroup(t,n,s,l){let c=new ee((y,A)=>y-A);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let A=c.get(y.largestBatchId);A===null&&(A=ks(),c=c.insert(y.largestBatchId,A)),A.set(y.getKey(),y)}}const g=ks(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,A)=>g.set(y,A)),!(g.size()>=l)););return G.resolve(g)}Et(t,n,s){const l=this.overlays.get(s.key);if(l!==null){const f=this.Rr.get(l.largestBatchId).delete(s.key);this.Rr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new _b(n,s));let c=this.Rr.get(n);c===void 0&&(c=Nt(),this.Rr.set(n,c)),this.Rr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class tw{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(t){return G.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,G.resolve()}}/**
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
 */class ym{constructor(){this.Vr=new be(Me.mr),this.gr=new be(Me.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const s=new Me(t,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.wr(new Me(t,n))}br(t,n){t.forEach(s=>this.removeReference(s,n))}Sr(t){const n=new ft(new Wt([])),s=new Me(n,t),l=new Me(n,t+1),c=[];return this.gr.forEachInRange([s,l],f=>{this.wr(f),c.push(f.key)}),c}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new ft(new Wt([])),s=new Me(n,t),l=new Me(n,t+1);let c=Nt();return this.gr.forEachInRange([s,l],f=>{c=c.add(f.key)}),c}containsKey(t){const n=new Me(t,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Me{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return ft.comparator(t.key,n.key)||Mt(t.Cr,n.Cr)}static pr(t,n){return Mt(t.Cr,n.Cr)||ft.comparator(t.key,n.key)}}/**
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
 */class ew{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new be(Me.mr)}checkEmpty(t){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,l){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new pb(c,n,s,l);this.mutationQueue.push(f);for(const g of l)this.Mr=this.Mr.add(new Me(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return G.resolve(f)}lookupMutationBatch(t,n){return G.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,l=this.Nr(s),c=l<0?0:l;return G.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?lm:this.Fr-1)}getAllMutationBatches(t){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Me(n,0),l=new Me(n,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([s,l],f=>{const g=this.Or(f.Cr);c.push(g)}),G.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new be(Mt);return n.forEach(l=>{const c=new Me(l,0),f=new Me(l,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,f],g=>{s=s.add(g.Cr)})}),G.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,l=s.length+1;let c=s;ft.isDocumentKey(c)||(c=c.child(""));const f=new Me(new ft(c),0);let g=new be(Mt);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(g=g.add(p.Cr)),!0)},f),G.resolve(this.Br(g))}Br(t){const n=[];return t.forEach(s=>{const l=this.Or(s);l!==null&&n.push(l)}),n}removeMutationBatch(t,n){Ft(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return G.forEach(n.mutations,l=>{const c=new Me(l.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,n){const s=new Me(n,0),l=this.Mr.firstAfterOrEqual(s);return G.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,G.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nw{constructor(t){this.kr=t,this.docs=function(){return new ee(ft.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,l=this.docs.get(s),c=l?l.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return G.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(t,n){let s=Xi();return n.forEach(l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():Ke.newInvalidDocument(l))}),G.resolve(s)}getDocumentsMatchingQuery(t,n,s,l){let c=Xi();const f=n.path,g=new ft(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:y,value:{document:A}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||OR(DR(A),s)<=0||(l.has(A.key)||eh(n,A))&&(c=c.insert(A.key,A.mutableCopy()))}return G.resolve(c)}getAllFromCollectionGroup(t,n,s,l){yt()}qr(t,n){return G.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new iw(this)}getSize(t){return G.resolve(this.size)}}class iw extends Xb{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((s,l)=>{l.isValidDocument()?n.push(this.Ir.addEntry(t,l)):this.Ir.removeEntry(s)}),G.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
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
 */class rw{constructor(t){this.persistence=t,this.Qr=new js(n=>hm(n),fm),this.lastRemoteSnapshotVersion=Et.min(),this.highestTargetId=0,this.$r=0,this.Kr=new ym,this.targetCount=0,this.Ur=$a.Kn()}forEachTarget(t,n){return this.Qr.forEach((s,l)=>n(l)),G.resolve()}getLastRemoteSnapshotVersion(t){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return G.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),G.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ur=new $a(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,G.resolve()}updateTargetData(t,n){return this.zn(n),G.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(t,n,s){let l=0;const c=[];return this.Qr.forEach((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.Qr.delete(f),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),l++)}),G.waitFor(c).next(()=>l)}getTargetCount(t){return G.resolve(this.targetCount)}getTargetData(t,n){const s=this.Qr.get(n)||null;return G.resolve(s)}addMatchingKeys(t,n,s){return this.Kr.yr(n,s),G.resolve()}removeMatchingKeys(t,n,s){this.Kr.br(n,s);const l=this.persistence.referenceDelegate,c=[];return l&&n.forEach(f=>{c.push(l.markPotentiallyOrphaned(t,f))}),G.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this.Kr.Sr(n),G.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Kr.vr(n);return G.resolve(s)}containsKey(t,n){return G.resolve(this.Kr.containsKey(n))}}/**
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
 */class zE{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new $c(0),this.zr=!1,this.zr=!0,this.jr=new tw,this.referenceDelegate=t(this),this.Hr=new rw(this),this.indexManager=new qb,this.remoteDocumentCache=function(l){return new nw(l)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new Bb(n),this.Yr=new Zb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Jb,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Wr[t.toKey()];return s||(s=new ew(n,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,s){it("MemoryPersistence","Starting transaction:",t);const l=new sw(this.Gr.next());return this.referenceDelegate.Zr(),s(l).next(c=>this.referenceDelegate.Xr(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}ei(t,n){return G.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,n)))}}class sw extends VR{constructor(t){super(),this.currentSequenceNumber=t}}class vm{constructor(t){this.persistence=t,this.ti=new ym,this.ni=null}static ri(t){return new vm(t)}get ii(){if(this.ni)return this.ni;throw yt()}addReference(t,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),G.resolve()}removeReference(t,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),G.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),G.resolve()}removeTarget(t,n){this.ti.Sr(n.targetId).forEach(l=>this.ii.add(l.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(l=>{l.forEach(c=>this.ii.add(c.toString()))}).next(()=>s.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ii,s=>{const l=ft.fromPath(s);return this.si(t,l).next(c=>{c||n.removeEntry(l,Et.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return G.or([()=>G.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class Lc{constructor(t,n){this.persistence=t,this.oi=new js(s=>PR(s.path),(s,l)=>s.isEqual(l)),this.garbageCollector=Yb(this,n)}static ri(t,n){return new Lc(t,n)}Zr(){}Xr(t){return G.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(l=>s+l))}sr(t){let n=0;return this.rr(t,s=>{n++}).next(()=>n)}rr(t,n){return G.forEach(this.oi,(s,l)=>this.ar(t,s,l).next(c=>c?G.resolve():n(l)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.qr(t,f=>this.ar(t,f,n).next(g=>{g||(s++,c.removeEntry(f,Et.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),G.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),G.resolve()}removeReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),G.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),G.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=yc(t.data.value)),n}ar(t,n,s){return G.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const l=this.oi.get(n);return G.resolve(l!==void 0&&l>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Em{constructor(t,n,s,l){this.targetId=t,this.fromCache=n,this.Hi=s,this.Ji=l}static Yi(t,n){let s=Nt(),l=Nt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new Em(t,n.fromCache,s,l)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class aw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ow{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return tS()?8:MR(Qe())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,s,l){const c={result:null};return this.rs(t,n).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ss(t,n,l,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new aw;return this._s(t,n,f).next(g=>{if(c.result=g,this.Xi)return this.us(t,n,f,g.size)})}).next(()=>c.result)}us(t,n,s,l){return s.documentReadCount<this.es?(La()<=Ot.DEBUG&&it("QueryEngine","SDK will not create cache indexes for query:",xa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),G.resolve()):(La()<=Ot.DEBUG&&it("QueryEngine","Query:",xa(n),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.ts*l?(La()<=Ot.DEBUG&&it("QueryEngine","The SDK decides to create cache indexes for query:",xa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ai(n))):G.resolve())}rs(t,n){if(Dy(n))return G.resolve(null);let s=ai(n);return this.indexManager.getIndexType(t,s).next(l=>l===0?null:(n.limit!==null&&l===1&&(n=jd(n,null,"F"),s=ai(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Nt(...c);return this.ns.getDocuments(t,f).next(g=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.cs(n,g);return this.ls(n,y,f,p.readTime)?this.rs(t,jd(n,null,"F")):this.hs(t,y,n,p)}))})))}ss(t,n,s,l){return Dy(n)||l.isEqual(Et.min())?G.resolve(null):this.ns.getDocuments(t,s).next(c=>{const f=this.cs(n,c);return this.ls(n,f,s,l)?G.resolve(null):(La()<=Ot.DEBUG&&it("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),xa(n)),this.hs(t,f,n,CR(l,Sl)).next(g=>g))})}cs(t,n){let s=new be(_E(t));return n.forEach((l,c)=>{eh(t,c)&&(s=s.add(c))}),s}ls(t,n,s,l){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}_s(t,n,s){return La()<=Ot.DEBUG&&it("QueryEngine","Using full collection scan to execute query:",xa(n)),this.ns.getDocumentsMatchingQuery(t,n,Qr.min(),s)}hs(t,n,s,l){return this.ns.getDocumentsMatchingQuery(t,s,l).next(c=>(n.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
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
 */const Tm="LocalStore",lw=3e8;class uw{constructor(t,n,s,l){this.persistence=t,this.Ps=n,this.serializer=l,this.Ts=new ee(Mt),this.Is=new js(c=>hm(c),fm),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Wb(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function cw(r,t,n,s){return new uw(r,t,n,s)}async function BE(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let l;return n.mutationQueue.getAllMutationBatches(s).next(c=>(l=c,n.As(t),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],g=[];let p=Nt();for(const y of l){f.push(y.batchId);for(const A of y.mutations)p=p.add(A.key)}for(const y of c){g.push(y.batchId);for(const A of y.mutations)p=p.add(A.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:g}))})})}function hw(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const l=t.batch.keys(),c=n.ds.newChangeBuffer({trackRemovals:!0});return function(g,p,y,A){const C=y.batch,x=C.keys();let q=G.resolve();return x.forEach($=>{q=q.next(()=>A.getEntry(p,$)).next(J=>{const Q=y.docVersions.get($);Ft(Q!==null),J.version.compareTo(Q)<0&&(C.applyToRemoteDocument(J,y),J.isValidDocument()&&(J.setReadTime(y.commitVersion),A.addEntry(J)))})}),q.next(()=>g.mutationQueue.removeMutationBatch(p,C))}(n,s,t,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let p=Nt();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(p=p.add(g.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,l))})}function HE(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function fw(r,t){const n=St(r),s=t.snapshotVersion;let l=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});l=n.Ts;const g=[];t.targetChanges.forEach((A,C)=>{const x=l.get(C);if(!x)return;g.push(n.Hr.removeMatchingKeys(c,A.removedDocuments,C).next(()=>n.Hr.addMatchingKeys(c,A.addedDocuments,C)));let q=x.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(C)!==null?q=q.withResumeToken(Be.EMPTY_BYTE_STRING,Et.min()).withLastLimboFreeSnapshotVersion(Et.min()):A.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(A.resumeToken,s)),l=l.insert(C,q),function(J,Q,pt){return J.resumeToken.approximateByteSize()===0||Q.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=lw?!0:pt.addedDocuments.size+pt.modifiedDocuments.size+pt.removedDocuments.size>0}(x,q,A)&&g.push(n.Hr.updateTargetData(c,q))});let p=Xi(),y=Nt();if(t.documentUpdates.forEach(A=>{t.resolvedLimboDocuments.has(A)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(c,A))}),g.push(dw(c,f,t.documentUpdates).next(A=>{p=A.Vs,y=A.fs})),!s.isEqual(Et.min())){const A=n.Hr.getLastRemoteSnapshotVersion(c).next(C=>n.Hr.setTargetsMetadata(c,c.currentSequenceNumber,s));g.push(A)}return G.waitFor(g).next(()=>f.apply(c)).next(()=>n.localDocuments.getLocalViewOfDocuments(c,p,y)).next(()=>p)}).then(c=>(n.Ts=l,c))}function dw(r,t,n){let s=Nt(),l=Nt();return n.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=Xi();return n.forEach((g,p)=>{const y=c.get(g);p.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(g)),p.isNoDocument()&&p.version.isEqual(Et.min())?(t.removeEntry(g,p.readTime),f=f.insert(g,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(g,p)):it(Tm,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",p.version)}),{Vs:f,fs:l}})}function mw(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=lm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function gw(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let l;return n.Hr.getTargetData(s,t).next(c=>c?(l=c,G.resolve(l)):n.Hr.allocateTargetId(s).next(f=>(l=new Br(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,l).next(()=>l))))}).then(s=>{const l=n.Ts.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(t,s.targetId)),s})}async function Yd(r,t,n){const s=St(r),l=s.Ts.get(t),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,l))}catch(f){if(!eo(f))throw f;it(Tm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(l.target)}function qy(r,t,n){const s=St(r);let l=Et.min(),c=Nt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,A){const C=St(p),x=C.Is.get(A);return x!==void 0?G.resolve(C.Ts.get(x)):C.Hr.getTargetData(y,A)}(s,f,ai(t)).next(g=>{if(g)return l=g.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,g.targetId).next(p=>{c=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,n?l:Et.min(),n?c:Nt())).next(g=>(pw(s,eb(t),g),{documents:g,gs:c})))}function pw(r,t,n){let s=r.Es.get(t)||Et.min();n.forEach((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Es.set(t,s)}class jy{constructor(){this.activeTargetIds=ob()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _w{constructor(){this.ho=new jy,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,s){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new jy,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class yw{To(t){}shutdown(){}}/**
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
 */const Fy="ConnectivityMonitor";class Gy{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){it(Fy,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){it(Fy,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let dc=null;function Xd(){return dc===null?dc=function(){return 268435456+Math.round(2147483648*Math.random())}():dc++,"0x"+dc.toString(16)}/**
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
 */const bd="RestConnection",vw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ew{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${s}/databases/${l}`,this.wo=this.databaseId.database===Oc?`project_id=${s}`:`project_id=${s}&database_id=${l}`}bo(t,n,s,l,c){const f=Xd(),g=this.So(t,n.toUriEncodedString());it(bd,`Sending RPC '${t}' ${f}:`,g,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,l,c),this.vo(t,g,p,s).then(y=>(it(bd,`Received RPC '${t}' ${f}: `,y),y),y=>{throw Ka(bd,`RPC '${t}' ${f} failed with error: `,y,"url: ",g,"request:",s),y})}Co(t,n,s,l,c,f){return this.bo(t,n,s,l,c)}Do(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ja}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((l,c)=>t[c]=l),s&&s.headers.forEach((l,c)=>t[c]=l)}So(t,n){const s=vw[t];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
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
 */class Tw{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const Fe="WebChannelConnection";class Aw extends Ew{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,s,l){const c=Xd();return new Promise((f,g)=>{const p=new Kv;p.setWithCredentials(!0),p.listenOnce(Qv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case _c.NO_ERROR:const A=p.getResponseJson();it(Fe,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(A)),f(A);break;case _c.TIMEOUT:it(Fe,`RPC '${t}' ${c} timed out`),g(new ct(Y.DEADLINE_EXCEEDED,"Request time out"));break;case _c.HTTP_ERROR:const C=p.getStatus();if(it(Fe,`RPC '${t}' ${c} failed with status:`,C,"response text:",p.getResponseText()),C>0){let x=p.getResponseJson();Array.isArray(x)&&(x=x[0]);const q=x==null?void 0:x.error;if(q&&q.status&&q.message){const $=function(Q){const pt=Q.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(pt)>=0?pt:Y.UNKNOWN}(q.status);g(new ct($,q.message))}else g(new ct(Y.UNKNOWN,"Server responded with status "+p.getStatus()))}else g(new ct(Y.UNAVAILABLE,"Connection failed."));break;default:yt()}}finally{it(Fe,`RPC '${t}' ${c} completed.`)}});const y=JSON.stringify(l);it(Fe,`RPC '${t}' ${c} sending request:`,l),p.send(n,"POST",y,s,15)})}Wo(t,n,s){const l=Xd(),c=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=$v(),g=Xv(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const A=c.join("");it(Fe,`Creating RPC '${t}' stream ${l}: ${A}`,p);const C=f.createWebChannel(A,p);let x=!1,q=!1;const $=new Tw({Fo:Q=>{q?it(Fe,`Not sending because RPC '${t}' stream ${l} is closed:`,Q):(x||(it(Fe,`Opening RPC '${t}' stream ${l} transport.`),C.open(),x=!0),it(Fe,`RPC '${t}' stream ${l} sending:`,Q),C.send(Q))},Mo:()=>C.close()}),J=(Q,pt,ht)=>{Q.listen(pt,W=>{try{ht(W)}catch(dt){setTimeout(()=>{throw dt},0)}})};return J(C,ml.EventType.OPEN,()=>{q||(it(Fe,`RPC '${t}' stream ${l} transport opened.`),$.Qo())}),J(C,ml.EventType.CLOSE,()=>{q||(q=!0,it(Fe,`RPC '${t}' stream ${l} transport closed`),$.Ko())}),J(C,ml.EventType.ERROR,Q=>{q||(q=!0,Ka(Fe,`RPC '${t}' stream ${l} transport errored:`,Q),$.Ko(new ct(Y.UNAVAILABLE,"The operation could not be completed")))}),J(C,ml.EventType.MESSAGE,Q=>{var pt;if(!q){const ht=Q.data[0];Ft(!!ht);const W=ht,dt=(W==null?void 0:W.error)||((pt=W[0])===null||pt===void 0?void 0:pt.error);if(dt){it(Fe,`RPC '${t}' stream ${l} received error:`,dt);const ot=dt.status;let Tt=function(S){const I=ge[S];if(I!==void 0)return CE(I)}(ot),V=dt.message;Tt===void 0&&(Tt=Y.INTERNAL,V="Unknown error status: "+ot+" with message "+dt.message),q=!0,$.Ko(new ct(Tt,V)),C.close()}else it(Fe,`RPC '${t}' stream ${l} received:`,ht),$.Uo(ht)}}),J(g,Yv.STAT_EVENT,Q=>{Q.stat===xd.PROXY?it(Fe,`RPC '${t}' stream ${l} detected buffering proxy`):Q.stat===xd.NOPROXY&&it(Fe,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{$.$o()},0),$}}function wd(){return typeof document<"u"?document:null}/**
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
 */function sh(r){return new wb(r,!0)}/**
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
 */class qE{constructor(t,n,s=1e3,l=1.5,c=6e4){this.Ti=t,this.timerId=n,this.Go=s,this.zo=l,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),l=Math.max(0,n-s);l>0&&it("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Ky="PersistentStream";class jE{constructor(t,n,s,l,c,f,g,p){this.Ti=t,this.n_=s,this.r_=l,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new qE(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(Yi(n.toString()),Yi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,l])=>{this.i_===n&&this.V_(s,l)},s=>{t(()=>{const l=new ct(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(l)})})}V_(t,n){const s=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(l=>{s(()=>this.m_(l))}),this.stream.onMessage(l=>{s(()=>++this.__==1?this.g_(l):this.onNext(l))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return it(Ky,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(it(Ky,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sw extends jE{constructor(t,n,s,l,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,l,f),this.serializer=c}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=Db(this.serializer,t),s=function(c){if(!("targetChange"in c))return Et.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Et.min():f.readTime?li(f.readTime):Et.min()}(t);return this.listener.p_(n,s)}y_(t){const n={};n.database=Qd(this.serializer),n.addTarget=function(c,f){let g;const p=f.target;if(g=qd(p)?{documents:Vb(c,p)}:{query:Mb(c,p).ht},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=NE(c,f.resumeToken);const y=Fd(c,f.expectedCount);y!==null&&(g.expectedCount=y)}else if(f.snapshotVersion.compareTo(Et.min())>0){g.readTime=Uc(c,f.snapshotVersion.toTimestamp());const y=Fd(c,f.expectedCount);y!==null&&(g.expectedCount=y)}return g}(this.serializer,t);const s=Pb(this.serializer,t);s&&(n.labels=s),this.I_(n)}w_(t){const n={};n.database=Qd(this.serializer),n.removeTarget=t,this.I_(n)}}class Rw extends jE{constructor(t,n,s,l,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,l,f),this.serializer=c}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return Ft(!!t.streamToken),this.lastStreamToken=t.streamToken,Ft(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Ft(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=Nb(t.writeResults,t.commitTime),s=li(t.commitTime);return this.listener.v_(s,n)}C_(){const t={};t.database=Qd(this.serializer),this.I_(t)}S_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Ob(this.serializer,s))};this.I_(n)}}/**
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
 */class bw{}class ww extends bw{constructor(t,n,s,l){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=l,this.F_=!1}M_(){if(this.F_)throw new ct(Y.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,n,s,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.bo(t,Gd(n,s),l,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ct(Y.UNKNOWN,c.toString())})}Co(t,n,s,l,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Co(t,Gd(n,s),l,f,g,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ct(Y.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Iw{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Yi(n),this.N_=!1):it("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const xs="RemoteStore";class Cw{constructor(t,n,s,l,c){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(f=>{s.enqueueAndForget(async()=>{Gs(this)&&(it(xs,"Restarting streams for network reachability change."),await async function(p){const y=St(p);y.W_.add(4),await Ul(y),y.j_.set("Unknown"),y.W_.delete(4),await ah(y)}(this))})}),this.j_=new Iw(s,l)}}async function ah(r){if(Gs(r))for(const t of r.G_)await t(!0)}async function Ul(r){for(const t of r.G_)await t(!1)}function FE(r,t){const n=St(r);n.U_.has(t.targetId)||(n.U_.set(t.targetId,t),bm(n)?Rm(n):no(n).c_()&&Sm(n,t))}function Am(r,t){const n=St(r),s=no(n);n.U_.delete(t),s.c_()&&GE(n,t),n.U_.size===0&&(s.c_()?s.P_():Gs(n)&&n.j_.set("Unknown"))}function Sm(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Et.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}no(r).y_(t)}function GE(r,t){r.H_.Ne(t),no(r).w_(t)}function Rm(r){r.H_=new Ab({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),no(r).start(),r.j_.B_()}function bm(r){return Gs(r)&&!no(r).u_()&&r.U_.size>0}function Gs(r){return St(r).W_.size===0}function KE(r){r.H_=void 0}async function Dw(r){r.j_.set("Online")}async function Ow(r){r.U_.forEach((t,n)=>{Sm(r,t)})}async function Nw(r,t){KE(r),bm(r)?(r.j_.q_(t),Rm(r)):r.j_.set("Unknown")}async function Vw(r,t,n){if(r.j_.set("Online"),t instanceof OE&&t.state===2&&t.cause)try{await async function(l,c){const f=c.cause;for(const g of c.targetIds)l.U_.has(g)&&(await l.remoteSyncer.rejectListen(g,f),l.U_.delete(g),l.H_.removeTarget(g))}(r,t)}catch(s){it(xs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await xc(r,s)}else if(t instanceof Tc?r.H_.We(t):t instanceof DE?r.H_.Ze(t):r.H_.je(t),!n.isEqual(Et.min()))try{const s=await HE(r.localStore);n.compareTo(s)>=0&&await function(c,f){const g=c.H_.ot(f);return g.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const A=c.U_.get(y);A&&c.U_.set(y,A.withResumeToken(p.resumeToken,f))}}),g.targetMismatches.forEach((p,y)=>{const A=c.U_.get(p);if(!A)return;c.U_.set(p,A.withResumeToken(Be.EMPTY_BYTE_STRING,A.snapshotVersion)),GE(c,p);const C=new Br(A.target,p,y,A.sequenceNumber);Sm(c,C)}),c.remoteSyncer.applyRemoteEvent(g)}(r,n)}catch(s){it(xs,"Failed to raise snapshot:",s),await xc(r,s)}}async function xc(r,t,n){if(!eo(t))throw t;r.W_.add(1),await Ul(r),r.j_.set("Offline"),n||(n=()=>HE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{it(xs,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await ah(r)})}function QE(r,t){return t().catch(n=>xc(r,n,t))}async function oh(r){const t=St(r),n=Wr(t);let s=t.K_.length>0?t.K_[t.K_.length-1].batchId:lm;for(;Mw(t);)try{const l=await mw(t.localStore,s);if(l===null){t.K_.length===0&&n.P_();break}s=l.batchId,kw(t,l)}catch(l){await xc(t,l)}YE(t)&&XE(t)}function Mw(r){return Gs(r)&&r.K_.length<10}function kw(r,t){r.K_.push(t);const n=Wr(r);n.c_()&&n.b_&&n.S_(t.mutations)}function YE(r){return Gs(r)&&!Wr(r).u_()&&r.K_.length>0}function XE(r){Wr(r).start()}async function Pw(r){Wr(r).C_()}async function Uw(r){const t=Wr(r);for(const n of r.K_)t.S_(n.mutations)}async function Lw(r,t,n){const s=r.K_.shift(),l=gm.from(s,t,n);await QE(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await oh(r)}async function xw(r,t){t&&Wr(r).b_&&await async function(s,l){if(function(f){return vb(f)&&f!==Y.ABORTED}(l.code)){const c=s.K_.shift();Wr(s).h_(),await QE(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l)),await oh(s)}}(r,t),YE(r)&&XE(r)}async function Qy(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),it(xs,"RemoteStore received new credentials");const s=Gs(n);n.W_.add(3),await Ul(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await ah(n)}async function zw(r,t){const n=St(r);t?(n.W_.delete(2),await ah(n)):t||(n.W_.add(2),await Ul(n),n.j_.set("Unknown"))}function no(r){return r.J_||(r.J_=function(n,s,l){const c=St(n);return c.M_(),new Sw(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{xo:Dw.bind(null,r),No:Ow.bind(null,r),Lo:Nw.bind(null,r),p_:Vw.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),bm(r)?Rm(r):r.j_.set("Unknown")):(await r.J_.stop(),KE(r))})),r.J_}function Wr(r){return r.Y_||(r.Y_=function(n,s,l){const c=St(n);return c.M_(),new Rw(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:Pw.bind(null,r),Lo:xw.bind(null,r),D_:Uw.bind(null,r),v_:Lw.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await oh(r)):(await r.Y_.stop(),r.K_.length>0&&(it(xs,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
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
 */class wm{constructor(t,n,s,l,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,l,c){const f=Date.now()+s,g=new wm(t,n,f,l,c);return g.start(s),g}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ct(Y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Im(r,t){if(Yi("AsyncQueue",`${t}: ${r}`),eo(r))return new ct(Y.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class qa{static emptySet(t){return new qa(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ft.comparator(n.key,s.key):(n,s)=>ft.comparator(n.key,s.key),this.keyedMap=gl(),this.sortedSet=new ee(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof qa)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new qa;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Yy{constructor(){this.Z_=new ee(ft.comparator)}track(t){const n=t.doc.key,s=this.Z_.get(n);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(n):t.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):yt():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,s)=>{t.push(s)}),t}}class Wa{constructor(t,n,s,l,c,f,g,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,l,c){const f=[];return n.forEach(g=>{f.push({type:0,doc:g})}),new Wa(t,n,qa.emptySet(n),f,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&th(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==s[l].type||!n[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
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
 */class Bw{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Hw{constructor(){this.queries=Xy(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const l=St(n),c=l.queries;l.queries=Xy(),c.forEach((f,g)=>{for(const p of g.ta)p.onError(s)})})(this,new ct(Y.ABORTED,"Firestore shutting down"))}}function Xy(){return new js(r=>pE(r),th)}async function qw(r,t){const n=St(r);let s=3;const l=t.query;let c=n.queries.get(l);c?!c.na()&&t.ra()&&(s=2):(c=new Bw,s=t.ra()?0:1);try{switch(s){case 0:c.ea=await n.onListen(l,!0);break;case 1:c.ea=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(f){const g=Im(f,`Initialization of query '${xa(t.query)}' failed`);return void t.onError(g)}n.queries.set(l,c),c.ta.push(t),t.sa(n.onlineState),c.ea&&t.oa(c.ea)&&Cm(n)}async function jw(r,t){const n=St(r),s=t.query;let l=3;const c=n.queries.get(s);if(c){const f=c.ta.indexOf(t);f>=0&&(c.ta.splice(f,1),c.ta.length===0?l=t.ra()?0:1:!c.na()&&t.ra()&&(l=2))}switch(l){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function Fw(r,t){const n=St(r);let s=!1;for(const l of t){const c=l.query,f=n.queries.get(c);if(f){for(const g of f.ta)g.oa(l)&&(s=!0);f.ea=l}}s&&Cm(n)}function Gw(r,t,n){const s=St(r),l=s.queries.get(t);if(l)for(const c of l.ta)c.onError(n);s.queries.delete(t)}function Cm(r){r.ia.forEach(t=>{t.next()})}var $d,$y;($y=$d||($d={}))._a="default",$y.Cache="cache";class Kw{constructor(t,n,s){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new Wa(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=Wa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==$d.Cache}}/**
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
 */class $E{constructor(t){this.key=t}}class WE{constructor(t){this.key=t}}class Qw{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Nt(),this.mutatedKeys=Nt(),this.ya=_E(t),this.wa=new qa(this.ya)}get ba(){return this.fa}Sa(t,n){const s=n?n.Da:new Yy,l=n?n.wa:this.wa;let c=n?n.mutatedKeys:this.mutatedKeys,f=l,g=!1;const p=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((A,C)=>{const x=l.get(A),q=eh(this.query,C)?C:null,$=!!x&&this.mutatedKeys.has(x.key),J=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let Q=!1;x&&q?x.data.isEqual(q.data)?$!==J&&(s.track({type:3,doc:q}),Q=!0):this.va(x,q)||(s.track({type:2,doc:q}),Q=!0,(p&&this.ya(q,p)>0||y&&this.ya(q,y)<0)&&(g=!0)):!x&&q?(s.track({type:0,doc:q}),Q=!0):x&&!q&&(s.track({type:1,doc:x}),Q=!0,(p||y)&&(g=!0)),Q&&(q?(f=f.add(q),c=J?c.add(A):c.delete(A)):(f=f.delete(A),c=c.delete(A)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const A=this.query.limitType==="F"?f.last():f.first();f=f.delete(A.key),c=c.delete(A.key),s.track({type:1,doc:A})}return{wa:f,Da:s,ls:g,mutatedKeys:c}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,l){const c=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((A,C)=>function(q,$){const J=Q=>{switch(Q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return yt()}};return J(q)-J($)}(A.type,C.type)||this.ya(A.doc,C.doc)),this.Ca(s),l=l!=null&&l;const g=n&&!l?this.Fa():[],p=this.pa.size===0&&this.current&&!l?1:0,y=p!==this.ga;return this.ga=p,f.length!==0||y?{snapshot:new Wa(this.query,t.wa,c,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:g}:{Ma:g}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Yy,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Nt(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return t.forEach(s=>{this.pa.has(s)||n.push(new WE(s))}),this.pa.forEach(s=>{t.has(s)||n.push(new $E(s))}),n}Oa(t){this.fa=t.gs,this.pa=Nt();const n=this.Sa(t.documents);return this.applyChanges(n,!0)}Na(){return Wa.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Dm="SyncEngine";class Yw{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Xw{constructor(t){this.key=t,this.Ba=!1}}class $w{constructor(t,n,s,l,c,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new js(g=>pE(g),th),this.qa=new Map,this.Qa=new Set,this.$a=new ee(ft.comparator),this.Ka=new Map,this.Ua=new ym,this.Wa={},this.Ga=new Map,this.za=$a.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Ww(r,t,n=!0){const s=iT(r);let l;const c=s.ka.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.Na()):l=await ZE(s,t,n,!0),l}async function Zw(r,t){const n=iT(r);await ZE(n,t,!0,!1)}async function ZE(r,t,n,s){const l=await gw(r.localStore,ai(t)),c=l.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let g;return s&&(g=await Jw(r,t,c,f==="current",l.resumeToken)),r.isPrimaryClient&&n&&FE(r.remoteStore,l),g}async function Jw(r,t,n,s,l){r.Ha=(C,x,q)=>async function(J,Q,pt,ht){let W=Q.view.Sa(pt);W.ls&&(W=await qy(J.localStore,Q.query,!1).then(({documents:V})=>Q.view.Sa(V,W)));const dt=ht&&ht.targetChanges.get(Q.targetId),ot=ht&&ht.targetMismatches.get(Q.targetId)!=null,Tt=Q.view.applyChanges(W,J.isPrimaryClient,dt,ot);return Zy(J,Q.targetId,Tt.Ma),Tt.snapshot}(r,C,x,q);const c=await qy(r.localStore,t,!0),f=new Qw(t,c.gs),g=f.Sa(c.documents),p=Pl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",l),y=f.applyChanges(g,r.isPrimaryClient,p);Zy(r,n,y.Ma);const A=new Yw(t,n,f);return r.ka.set(t,A),r.qa.has(n)?r.qa.get(n).push(t):r.qa.set(n,[t]),y.snapshot}async function tI(r,t,n){const s=St(r),l=s.ka.get(t),c=s.qa.get(l.targetId);if(c.length>1)return s.qa.set(l.targetId,c.filter(f=>!th(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await Yd(s.localStore,l.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(l.targetId),n&&Am(s.remoteStore,l.targetId),Wd(s,l.targetId)}).catch(to)):(Wd(s,l.targetId),await Yd(s.localStore,l.targetId,!0))}async function eI(r,t){const n=St(r),s=n.ka.get(t),l=n.qa.get(s.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Am(n.remoteStore,s.targetId))}async function nI(r,t,n){const s=uI(r);try{const l=await function(f,g){const p=St(f),y=Re.now(),A=g.reduce((q,$)=>q.add($.key),Nt());let C,x;return p.persistence.runTransaction("Locally write mutations","readwrite",q=>{let $=Xi(),J=Nt();return p.ds.getEntries(q,A).next(Q=>{$=Q,$.forEach((pt,ht)=>{ht.isValidDocument()||(J=J.add(pt))})}).next(()=>p.localDocuments.getOverlayedDocuments(q,$)).next(Q=>{C=Q;const pt=[];for(const ht of g){const W=mb(ht,C.get(ht.key).overlayedDocument);W!=null&&pt.push(new Fs(ht.key,W,lE(W.value.mapValue),oi.exists(!0)))}return p.mutationQueue.addMutationBatch(q,y,pt,g)}).next(Q=>{x=Q;const pt=Q.applyToLocalDocumentSet(C,J);return p.documentOverlayCache.saveOverlays(q,Q.batchId,pt)})}).then(()=>({batchId:x.batchId,changes:vE(C)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),function(f,g,p){let y=f.Wa[f.currentUser.toKey()];y||(y=new ee(Mt)),y=y.insert(g,p),f.Wa[f.currentUser.toKey()]=y}(s,l.batchId,n),await Ll(s,l.changes),await oh(s.remoteStore)}catch(l){const c=Im(l,"Failed to persist write");n.reject(c)}}async function JE(r,t){const n=St(r);try{const s=await fw(n.localStore,t);t.targetChanges.forEach((l,c)=>{const f=n.Ka.get(c);f&&(Ft(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1),l.addedDocuments.size>0?f.Ba=!0:l.modifiedDocuments.size>0?Ft(f.Ba):l.removedDocuments.size>0&&(Ft(f.Ba),f.Ba=!1))}),await Ll(n,s,t)}catch(s){await to(s)}}function Wy(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const l=[];s.ka.forEach((c,f)=>{const g=f.view.sa(t);g.snapshot&&l.push(g.snapshot)}),function(f,g){const p=St(f);p.onlineState=g;let y=!1;p.queries.forEach((A,C)=>{for(const x of C.ta)x.sa(g)&&(y=!0)}),y&&Cm(p)}(s.eventManager,t),l.length&&s.La.p_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function iI(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const l=s.Ka.get(t),c=l&&l.key;if(c){let f=new ee(ft.comparator);f=f.insert(c,Ke.newNoDocument(c,Et.min()));const g=Nt().add(c),p=new rh(Et.min(),new Map,new ee(Mt),f,g);await JE(s,p),s.$a=s.$a.remove(c),s.Ka.delete(t),Om(s)}else await Yd(s.localStore,t,!1).then(()=>Wd(s,t,n)).catch(to)}async function rI(r,t){const n=St(r),s=t.batch.batchId;try{const l=await hw(n.localStore,t);eT(n,s,null),tT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ll(n,l)}catch(l){await to(l)}}async function sI(r,t,n){const s=St(r);try{const l=await function(f,g){const p=St(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let A;return p.mutationQueue.lookupMutationBatch(y,g).next(C=>(Ft(C!==null),A=C.keys(),p.mutationQueue.removeMutationBatch(y,C))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,A,g)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,A)).next(()=>p.localDocuments.getDocuments(y,A))})}(s.localStore,t);eT(s,t,n),tT(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ll(s,l)}catch(l){await to(l)}}function tT(r,t){(r.Ga.get(t)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(t)}function eT(r,t,n){const s=St(r);let l=s.Wa[s.currentUser.toKey()];if(l){const c=l.get(t);c&&(n?c.reject(n):c.resolve(),l=l.remove(t)),s.Wa[s.currentUser.toKey()]=l}}function Wd(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(t),r.isPrimaryClient&&r.Ua.Sr(t).forEach(s=>{r.Ua.containsKey(s)||nT(r,s)})}function nT(r,t){r.Qa.delete(t.path.canonicalString());const n=r.$a.get(t);n!==null&&(Am(r.remoteStore,n),r.$a=r.$a.remove(t),r.Ka.delete(n),Om(r))}function Zy(r,t,n){for(const s of n)s instanceof $E?(r.Ua.addReference(s.key,t),aI(r,s)):s instanceof WE?(it(Dm,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,t),r.Ua.containsKey(s.key)||nT(r,s.key)):yt()}function aI(r,t){const n=t.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(it(Dm,"New document in limbo: "+n),r.Qa.add(s),Om(r))}function Om(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const n=new ft(Wt.fromString(t)),s=r.za.next();r.Ka.set(s,new Xw(n)),r.$a=r.$a.insert(n,s),FE(r.remoteStore,new Br(ai(gE(n.path)),s,"TargetPurposeLimboResolution",$c.ae))}}async function Ll(r,t,n){const s=St(r),l=[],c=[],f=[];s.ka.isEmpty()||(s.ka.forEach((g,p)=>{f.push(s.Ha(p,t,n).then(y=>{var A;if((y||n)&&s.isPrimaryClient){const C=y?!y.fromCache:(A=n==null?void 0:n.targetChanges.get(p.targetId))===null||A===void 0?void 0:A.current;s.sharedClientState.updateQueryState(p.targetId,C?"current":"not-current")}if(y){l.push(y);const C=Em.Yi(p.targetId,y);c.push(C)}}))}),await Promise.all(f),s.La.p_(l),await async function(p,y){const A=St(p);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>G.forEach(y,x=>G.forEach(x.Hi,q=>A.persistence.referenceDelegate.addReference(C,x.targetId,q)).next(()=>G.forEach(x.Ji,q=>A.persistence.referenceDelegate.removeReference(C,x.targetId,q)))))}catch(C){if(!eo(C))throw C;it(Tm,"Failed to update sequence numbers: "+C)}for(const C of y){const x=C.targetId;if(!C.fromCache){const q=A.Ts.get(x),$=q.snapshotVersion,J=q.withLastLimboFreeSnapshotVersion($);A.Ts=A.Ts.insert(x,J)}}}(s.localStore,c))}async function oI(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){it(Dm,"User change. New user:",t.toKey());const s=await BE(n.localStore,t);n.currentUser=t,function(c,f){c.Ga.forEach(g=>{g.forEach(p=>{p.reject(new ct(Y.CANCELLED,f))})}),c.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ll(n,s.Rs)}}function lI(r,t){const n=St(r),s=n.Ka.get(t);if(s&&s.Ba)return Nt().add(s.key);{let l=Nt();const c=n.qa.get(t);if(!c)return l;for(const f of c){const g=n.ka.get(f);l=l.unionWith(g.view.ba)}return l}}function iT(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=JE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=iI.bind(null,t),t.La.p_=Fw.bind(null,t.eventManager),t.La.Ja=Gw.bind(null,t.eventManager),t}function uI(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sI.bind(null,t),t}class zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=sh(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return cw(this.persistence,new ow,t.initialUser,this.serializer)}Xa(t){return new zE(vm.ri,this.serializer)}Za(t){return new _w}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zc.provider={build:()=>new zc};class cI extends zc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){Ft(this.persistence.referenceDelegate instanceof Lc);const s=this.persistence.referenceDelegate.garbageCollector;return new Kb(s,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new zE(s=>Lc.ri(s,n),this.serializer)}}class Zd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oI.bind(null,this.syncEngine),await zw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Hw}()}createDatastore(t){const n=sh(t.databaseInfo.databaseId),s=function(c){return new Aw(c)}(t.databaseInfo);return function(c,f,g,p){return new ww(c,f,g,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,l,c,f,g){return new Cw(s,l,c,f,g)}(this.localStore,this.datastore,t.asyncQueue,n=>Wy(this.syncEngine,n,0),function(){return Gy.D()?new Gy:new yw}())}createSyncEngine(t,n){return function(l,c,f,g,p,y,A){const C=new $w(l,c,f,g,p,y);return A&&(C.ja=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(l){const c=St(l);it(xs,"RemoteStore shutting down."),c.W_.add(5),await Ul(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zd.provider={build:()=>new Zd};/**
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
 *//**
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
 */class hI{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Yi("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Zr="FirestoreClient";class fI{constructor(t,n,s,l,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=l,this.user=Ge.UNAUTHENTICATED,this.clientId=Zv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{it(Zr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(it(Zr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Im(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Id(r,t){r.asyncQueue.verifyOperationInProgress(),it(Zr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async l=>{s.isEqual(l)||(await BE(t.localStore,l),s=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Jy(r,t){r.asyncQueue.verifyOperationInProgress();const n=await dI(r);it(Zr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>Qy(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,l)=>Qy(t.remoteStore,l)),r._onlineComponents=t}async function dI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){it(Zr,"Using user provided OfflineComponentProvider");try{await Id(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(l){return l.name==="FirebaseError"?l.code===Y.FAILED_PRECONDITION||l.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(n))throw n;Ka("Error using user provided cache. Falling back to memory cache: "+n),await Id(r,new zc)}}else it(Zr,"Using default OfflineComponentProvider"),await Id(r,new cI(void 0));return r._offlineComponents}async function rT(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(it(Zr,"Using user provided OnlineComponentProvider"),await Jy(r,r._uninitializedComponentsProvider._online)):(it(Zr,"Using default OnlineComponentProvider"),await Jy(r,new Zd))),r._onlineComponents}function mI(r){return rT(r).then(t=>t.syncEngine)}async function gI(r){const t=await rT(r),n=t.eventManager;return n.onListen=Ww.bind(null,t.syncEngine),n.onUnlisten=tI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Zw.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=eI.bind(null,t.syncEngine),n}function pI(r,t,n={}){const s=new Fr;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,g,p,y){const A=new hI({next:x=>{A.su(),f.enqueueAndForget(()=>jw(c,C)),x.fromCache&&p.source==="server"?y.reject(new ct(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(x)},error:x=>y.reject(x)}),C=new Kw(g,A,{includeMetadataChanges:!0,Ta:!0});return qw(c,C)}(await gI(r),r.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function sT(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const tv=new Map;/**
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
 */function aT(r,t,n){if(!n)throw new ct(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function _I(r,t,n,s){if(t===!0&&s===!0)throw new ct(Y.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function ev(r){if(!ft.isDocumentKey(r))throw new ct(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function nv(r){if(ft.isDocumentKey(r))throw new ct(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Nm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":yt()}function Dl(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ct(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nm(r);throw new ct(Y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */const oT="firestore.googleapis.com",iv=!0;class rv{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new ct(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=oT,this.ssl=iv}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:iv;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=xE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Fb)throw new ct(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_I("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sT((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new ct(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new ct(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new ct(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lh{constructor(t,n,s,l){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ct(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ct(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ER;switch(s.type){case"firstParty":return new RR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ct(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=tv.get(n);s&&(it("ComponentProvider","Removing Datastore"),tv.delete(n),s.terminate())}(this),Promise.resolve()}}function yI(r,t,n,s={}){var l;const c=(r=Dl(r,lh))._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:r._getEmulatorOptions()}),g=`${t}:${n}`;c.host!==oT&&c.host!==g&&Ka("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},c),{host:g,ssl:!1,emulatorOptions:s});if(!Ps(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,A;if(typeof s.mockUserToken=="string")y=s.mockUserToken,A=Ge.MOCK_USER;else{y=zv(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ct(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Ge(C)}r._authCredentials=new TR(new Wv(y,A))}}/**
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
 */class uh{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new uh(this.firestore,t,this._query)}}class Bn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bn(this.firestore,t,this._key)}}class Gr extends uh{constructor(t,n,s){super(t,n,gE(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bn(this.firestore,null,new ft(t))}withConverter(t){return new Gr(this.firestore,t,this._path)}}function sv(r,t,...n){if(r=sn(r),aT("collection","path",t),r instanceof lh){const s=Wt.fromString(t,...n);return nv(s),new Gr(r,null,s)}{if(!(r instanceof Bn||r instanceof Gr))throw new ct(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Wt.fromString(t,...n));return nv(s),new Gr(r.firestore,null,s)}}function lT(r,t,...n){if(r=sn(r),arguments.length===1&&(t=Zv.newId()),aT("doc","path",t),r instanceof lh){const s=Wt.fromString(t,...n);return ev(s),new Bn(r,null,new ft(s))}{if(!(r instanceof Bn||r instanceof Gr))throw new ct(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Wt.fromString(t,...n));return ev(s),new Bn(r.firestore,r instanceof Gr?r.converter:null,new ft(s))}}/**
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
 */const av="AsyncQueue";class ov{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new qE(this,"async_queue_retry"),this.bu=()=>{const s=wd();s&&it(av,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=t;const n=wd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=wd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Fr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!eo(t))throw t;it(av,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.Su.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const l=function(f){let g=f.message||"";return f.stack&&(g=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),g}(s);throw Yi("INTERNAL UNHANDLED ERROR: ",l),s}).then(s=>(this.pu=!1,s))));return this.Su=n,n}enqueueAfterDelay(t,n,s){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const l=wm.createAndSchedule(this,t,n,s,c=>this.Fu(c));return this.fu.push(l),l}Du(){this.gu&&yt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class ch extends lh{constructor(t,n,s,l){super(t,n,s,l),this.type="firestore",this._queue=new ov,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ov(t),this._firestoreClient=void 0,await t}}}function vI(r,t){const n=typeof r=="object"?r:am(),s=typeof r=="string"?r:Oc,l=Xc(n,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=Uv("firestore");c&&yI(l,...c)}return l}function uT(r){if(r._terminated)throw new ct(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||EI(r),r._firestoreClient}function EI(r){var t,n,s;const l=r._freezeSettings(),c=function(g,p,y,A){return new xR(g,p,y,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,sT(A.experimentalLongPollingOptions),A.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((n=l.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=l.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new fI(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(g){const p=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class Za{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Za(Be.fromBase64String(t))}catch(n){throw new ct(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Za(Be.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Vm{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ct(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class cT{constructor(t){this._methodName=t}}/**
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
 */class Mm{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ct(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ct(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Mt(this._lat,t._lat)||Mt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class km{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0}(this._values,t._values)}}/**
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
 */const TI=/^__.*__$/;class AI{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Fs(t,this.data,this.fieldMask,n,this.fieldTransforms):new kl(t,this.data,n,this.fieldTransforms)}}function hT(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yt()}}class Pm{constructor(t,n,s,l,c,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Pm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),l=this.ku({path:s,Qu:!1});return l.$u(t),l}Ku(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),l=this.ku({path:s,Qu:!1});return l.Bu(),l}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Bc(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(hT(this.Lu)&&TI.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class SI{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||sh(t)}ju(t,n,s,l=!1){return new Pm({Lu:t,methodName:n,zu:s,path:ze.emptyPath(),Qu:!1,Gu:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RI(r){const t=r._freezeSettings(),n=sh(r._databaseId);return new SI(r._databaseId,!!t.ignoreUndefinedProperties,n)}function bI(r,t,n,s,l,c={}){const f=r.ju(c.merge||c.mergeFields?2:0,t,n,l);gT("Data must be an object, but it was:",f,s);const g=dT(s,f);let p,y;if(c.merge)p=new xn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const A=[];for(const C of c.mergeFields){const x=wI(t,C,n);if(!f.contains(x))throw new ct(Y.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);CI(A,x)||A.push(x)}p=new xn(A),y=f.fieldTransforms.filter(C=>p.covers(C.field))}else p=null,y=f.fieldTransforms;return new AI(new Nn(g),p,y)}function fT(r,t){if(mT(r=sn(r)))return gT("Unsupported field value:",t,r),dT(r,t);if(r instanceof cT)return function(s,l){if(!hT(l.Lu))throw l.Wu(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Wu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(s,l){const c=[];let f=0;for(const g of s){let p=fT(g,l.Uu(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,l){if((s=sn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return lb(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Re.fromDate(s);return{timestampValue:Uc(l.serializer,c)}}if(s instanceof Re){const c=new Re(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Uc(l.serializer,c)}}if(s instanceof Mm)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Za)return{bytesValue:NE(l.serializer,s._byteString)};if(s instanceof Bn){const c=l.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw l.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:_m(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof km)return function(f,g){return{mapValue:{fields:{[aE]:{stringValue:oE},[Nc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw g.Wu("VectorValues must only contain numeric values.");return dm(g.serializer,y)})}}}}}}(s,l);throw l.Wu(`Unsupported field value: ${Nm(s)}`)}(r,t)}function dT(r,t){const n={};return tE(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qs(r,(s,l)=>{const c=fT(l,t.qu(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function mT(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Re||r instanceof Mm||r instanceof Za||r instanceof Bn||r instanceof cT||r instanceof km)}function gT(r,t,n){if(!mT(n)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(n)){const s=Nm(n);throw s==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+s)}}function wI(r,t,n){if((t=sn(t))instanceof Vm)return t._internalPath;if(typeof t=="string")return pT(r,t);throw Bc("Field path arguments must be of type string or ",r,!1,void 0,n)}const II=new RegExp("[~\\*/\\[\\]]");function pT(r,t,n){if(t.search(II)>=0)throw Bc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Vm(...t.split("."))._internalPath}catch{throw Bc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Bc(r,t,n,s,l){const c=s&&!s.isEmpty(),f=l!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${l}`),p+=")"),new ct(Y.INVALID_ARGUMENT,g+r+p)}function CI(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */class _T{constructor(t,n,s,l,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Bn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new DI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(yT("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DI extends _T{data(){return super.data()}}function yT(r,t){return typeof t=="string"?pT(r,t):t instanceof Vm?t._internalPath:t._delegate._internalPath}/**
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
 */function OI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ct(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class NI{convertValue(t,n="none"){switch($r(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ue(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Xr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw yt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return qs(t,(l,c)=>{s[l]=this.convertValue(c,n)}),s}convertVectorValue(t){var n,s,l;const c=(l=(s=(n=t.fields)===null||n===void 0?void 0:n[Nc].arrayValue)===null||s===void 0?void 0:s.values)===null||l===void 0?void 0:l.map(f=>ue(f.doubleValue));return new km(c)}convertGeoPoint(t){return new Mm(ue(t.latitude),ue(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Zc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Rl(t));default:return null}}convertTimestamp(t){const n=Yr(t);return new Re(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=Wt.fromString(t);Ft(LE(s));const l=new bl(s.get(1),s.get(3)),c=new ft(s.popFirst(5));return l.isEqual(n)||Yi(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
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
 */function VI(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
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
 */class mc{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class MI extends _T{constructor(t,n,s,l,c,f){super(t,n,s,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(yT("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ac extends MI{data(t={}){return super.data(t)}}class kI{constructor(t,n,s,l){this._firestore=t,this._userDataWriter=n,this._snapshot=l,this.metadata=new mc(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ac(this._firestore,this._userDataWriter,s.key,s,new mc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ct(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map(g=>{const p=new Ac(l._firestore,l._userDataWriter,g.doc.key,g.doc,new mc(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(g=>c||g.type!==3).map(g=>{const p=new Ac(l._firestore,l._userDataWriter,g.doc.key,g.doc,new mc(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,A=-1;return g.type!==0&&(y=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),A=f.indexOf(g.doc.key)),{type:PI(g.type),doc:p,oldIndex:y,newIndex:A}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return yt()}}class UI extends NI{constructor(t){super(),this.firestore=t}convertBytes(t){return new Za(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Bn(this.firestore,null,n)}}function LI(r){r=Dl(r,uh);const t=Dl(r.firestore,ch),n=uT(t),s=new UI(t);return OI(r._query),pI(n,r._query).then(l=>new kI(t,s,r,l))}function xI(r){return vT(Dl(r.firestore,ch),[new mm(r._key,oi.none())])}function zI(r,t){const n=Dl(r.firestore,ch),s=lT(r),l=VI(r.converter,t);return vT(n,[bI(RI(r.firestore),"addDoc",s._key,l,r.converter!==null,{}).toMutation(s._key,oi.exists(!1))]).then(()=>s)}function vT(r,t){return function(s,l){const c=new Fr;return s.asyncQueue.enqueueAndForget(async()=>nI(await mI(s),l,c)),c.promise}(uT(r),t)}(function(t,n=!0){(function(l){Ja=l})(Hs),Us(new Kr("firestore",(s,{instanceIdentifier:l,options:c})=>{const f=s.getProvider("app").getImmediate(),g=new ch(new AR(s.getProvider("auth-internal")),new bR(f,s.getProvider("app-check-internal")),function(y,A){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ct(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bl(y.options.projectId,A)}(f,l),f);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),si(dy,my,t),si(dy,my,"esm2017")})();function Um(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)t.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function ET(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BI=ET,TT=new Vl("auth","Firebase",ET());/**
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
 */const Hc=new rm("@firebase/auth");function HI(r,...t){Hc.logLevel<=Ot.WARN&&Hc.warn(`Auth (${Hs}): ${r}`,...t)}function Sc(r,...t){Hc.logLevel<=Ot.ERROR&&Hc.error(`Auth (${Hs}): ${r}`,...t)}/**
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
 */function Hn(r,...t){throw Lm(r,...t)}function ui(r,...t){return Lm(r,...t)}function AT(r,t,n){const s=Object.assign(Object.assign({},BI()),{[t]:n});return new Vl("auth","Firebase",s).create(t,{appName:r.name})}function Ki(r){return AT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return TT.create(r,...t)}function gt(r,t,...n){if(!r)throw Lm(t,...n)}function ji(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Sc(t),new Error(t)}function $i(r,t){r||ji(t)}/**
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
 */function Jd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function qI(){return lv()==="http:"||lv()==="https:"}function lv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function jI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qI()||WA()||"connection"in navigator)?navigator.onLine:!0}function FI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class xl{constructor(t,n){this.shortDelay=t,this.longDelay=n,$i(n>t,"Short delay should be less than long delay!"),this.isMobile=YA()||ZA()}get(){return jI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xm(r,t){$i(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class ST{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ji("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ji("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ji("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KI=new xl(3e4,6e4);function Jr(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function ts(r,t,n,s,l={}){return RT(r,l,async()=>{let c={},f={};s&&(t==="GET"?f=s:c={body:JSON.stringify(s)});const g=Ml(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},c);return $A()||(y.referrerPolicy="no-referrer"),ST.fetch()(bT(r,r.config.apiHost,n,g),y)})}async function RT(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},GI),t);try{const l=new YI(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw gc(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const g=c.ok?f.errorMessage:f.error.message,[p,y]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw gc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw gc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw gc(r,"user-disabled",f);const A=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw AT(r,A,y);Hn(r,A)}}catch(l){if(l instanceof mi)throw l;Hn(r,"network-request-failed",{message:String(l)})}}async function zl(r,t,n,s,l={}){const c=await ts(r,t,n,s,l);return"mfaPendingCredential"in c&&Hn(r,"multi-factor-auth-required",{_serverResponse:c}),c}function bT(r,t,n,s){const l=`${t}${n}?${s}`;return r.config.emulator?xm(r.config,l):`${r.config.apiScheme}://${l}`}function QI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ui(this.auth,"network-request-failed")),KI.get())})}}function gc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=ui(r,t,s);return l.customData._tokenResponse=n,l}function uv(r){return r!==void 0&&r.enterprise!==void 0}class XI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return QI(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $I(r,t){return ts(r,"GET","/v2/recaptchaConfig",Jr(r,t))}/**
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
 */async function WI(r,t){return ts(r,"POST","/v1/accounts:delete",t)}async function wT(r,t){return ts(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Tl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ZI(r,t=!1){const n=sn(r),s=await n.getIdToken(t),l=zm(s);gt(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,f=c==null?void 0:c.sign_in_provider;return{claims:l,token:s,authTime:Tl(Cd(l.auth_time)),issuedAtTime:Tl(Cd(l.iat)),expirationTime:Tl(Cd(l.exp)),signInProvider:f||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Cd(r){return Number(r)*1e3}function zm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Sc("JWT malformed, contained fewer than 3 sections"),null;try{const l=kv(n);return l?JSON.parse(l):(Sc("Failed to decode base64 JWT payload"),null)}catch(l){return Sc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function cv(r){const t=zm(r);return gt(t,"internal-error"),gt(typeof t.exp<"u","internal-error"),gt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ol(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof mi&&JI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function JI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class t1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tl(this.lastLoginAt),this.creationTime=Tl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qc(r){var t;const n=r.auth,s=await r.getIdToken(),l=await Ol(r,wT(n,{idToken:s}));gt(l==null?void 0:l.users.length,n,"internal-error");const c=l.users[0];r._notifyReloadListener(c);const f=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?IT(c.providerUserInfo):[],g=n1(r.providerData,f),p=r.isAnonymous,y=!(r.email&&c.passwordHash)&&!(g!=null&&g.length),A=p?y:!1,C={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new tm(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(r,C)}async function e1(r){const t=sn(r);await qc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function n1(r,t){return[...r.filter(s=>!t.some(l=>l.providerId===s.providerId)),...t]}function IT(r){return r.map(t=>{var{providerId:n}=t,s=Um(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function i1(r,t){const n=await RT(r,{},async()=>{const s=Ml({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,f=bT(r,l,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",ST.fetch()(f,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function r1(r,t){return ts(r,"POST","/v2/accounts:revokeToken",Jr(r,t))}/**
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
 */class ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){gt(t.idToken,"internal-error"),gt(typeof t.idToken<"u","internal-error"),gt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):cv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){gt(t.length!==0,"internal-error");const n=cv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(gt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await i1(t,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,f=new ja;return s&&(gt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),l&&(gt(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),c&&(gt(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ja,this.toJSON())}_performRefresh(){return ji("not implemented")}}/**
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
 */function kr(r,t){gt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Fi{constructor(t){var{uid:n,auth:s,stsTokenManager:l}=t,c=Um(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new t1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new tm(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const n=await Ol(this,this.stsTokenManager.getToken(this.auth,t));return gt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ZI(this,t)}reload(){return e1(this)}_assign(t){this!==t&&(gt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Fi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){gt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await qc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Ki(this.auth));const t=await this.getIdToken();return await Ol(this,WI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,l,c,f,g,p,y,A;const C=(s=n.displayName)!==null&&s!==void 0?s:void 0,x=(l=n.email)!==null&&l!==void 0?l:void 0,q=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,$=(f=n.photoURL)!==null&&f!==void 0?f:void 0,J=(g=n.tenantId)!==null&&g!==void 0?g:void 0,Q=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,pt=(y=n.createdAt)!==null&&y!==void 0?y:void 0,ht=(A=n.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:W,emailVerified:dt,isAnonymous:ot,providerData:Tt,stsTokenManager:V}=n;gt(W&&V,t,"internal-error");const b=ja.fromJSON(this.name,V);gt(typeof W=="string",t,"internal-error"),kr(C,t.name),kr(x,t.name),gt(typeof dt=="boolean",t,"internal-error"),gt(typeof ot=="boolean",t,"internal-error"),kr(q,t.name),kr($,t.name),kr(J,t.name),kr(Q,t.name),kr(pt,t.name),kr(ht,t.name);const S=new Fi({uid:W,auth:t,email:x,emailVerified:dt,displayName:C,isAnonymous:ot,photoURL:$,phoneNumber:q,tenantId:J,stsTokenManager:b,createdAt:pt,lastLoginAt:ht});return Tt&&Array.isArray(Tt)&&(S.providerData=Tt.map(I=>Object.assign({},I))),Q&&(S._redirectEventId=Q),S}static async _fromIdTokenResponse(t,n,s=!1){const l=new ja;l.updateFromServerResponse(n);const c=new Fi({uid:n.localId,auth:t,stsTokenManager:l,isAnonymous:s});return await qc(c),c}static async _fromGetAccountInfoResponse(t,n,s){const l=n.users[0];gt(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?IT(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!(c!=null&&c.length),g=new ja;g.updateFromIdToken(s);const p=new Fi({uid:l.localId,auth:t,stsTokenManager:g,isAnonymous:f}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new tm(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,y),p}}/**
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
 */const hv=new Map;function Gi(r){$i(r instanceof Function,"Expected a class definition");let t=hv.get(r);return t?($i(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,hv.set(r,t),t)}/**
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
 */class CT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}CT.type="NONE";const fv=CT;/**
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
 */function Rc(r,t,n){return`firebase:${r}:${t}:${n}`}class Fa{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Rc(this.userKey,l.apiKey,c),this.fullPersistenceKey=Rc("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Fi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Fa(Gi(fv),t,s);const l=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=l[0]||Gi(fv);const f=Rc(s,t.config.apiKey,t.name);let g=null;for(const y of n)try{const A=await y._get(f);if(A){const C=Fi._fromJSON(t,A);y!==c&&(g=C),c=y;break}}catch{}const p=l.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new Fa(c,t,s):(c=p[0],g&&await c._set(f,g.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new Fa(c,t,s))}}/**
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
 */function dv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(VT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(DT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(kT(t))return"Blackberry";if(PT(t))return"Webos";if(OT(t))return"Safari";if((t.includes("chrome/")||NT(t))&&!t.includes("edge/"))return"Chrome";if(MT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function DT(r=Qe()){return/firefox\//i.test(r)}function OT(r=Qe()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function NT(r=Qe()){return/crios\//i.test(r)}function VT(r=Qe()){return/iemobile/i.test(r)}function MT(r=Qe()){return/android/i.test(r)}function kT(r=Qe()){return/blackberry/i.test(r)}function PT(r=Qe()){return/webos/i.test(r)}function Bm(r=Qe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function s1(r=Qe()){var t;return Bm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function a1(){return JA()&&document.documentMode===10}function UT(r=Qe()){return Bm(r)||MT(r)||PT(r)||kT(r)||/windows phone/i.test(r)||VT(r)}/**
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
 */function LT(r,t=[]){let n;switch(r){case"Browser":n=dv(Qe());break;case"Worker":n=`${dv(Qe())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${s}`}/**
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
 */class o1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((f,g)=>{try{const p=t(c);f(p)}catch(p){g(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function l1(r,t={}){return ts(r,"GET","/v2/passwordPolicy",Jr(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const u1=6;class c1{constructor(t){var n,s,l,c;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:u1,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,l,c,f,g;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsUppercaseLetter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(g=p.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),l&&(n.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<t.length;l++)s=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class h1{constructor(t,n,s,l){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mv(this),this.idTokenSubscription=new mv(this),this.beforeStateQueue=new o1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Gi(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await Fa.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await wT(this,{idToken:t}),s=await Fi._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(dn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===g)&&(p!=null&&p.user)&&(l=p.user,c=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(l)}catch(f){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return gt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await qc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=FI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(dn(this.app))return Promise.reject(Ki(this));const n=t?sn(t):null;return n&&gt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&gt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Ki(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return dn(this.app)?Promise.reject(Ki(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await l1(this),n=new c1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Vl("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await r1(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Gi(t)||this._popupRedirectResolver;gt(n,this,"argument-error"),this.redirectPersistenceManager=await Fa.create(this,[Gi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(gt(g,this,"internal-error"),g.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,l);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return gt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=LT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var t;if(dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&HI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ks(r){return sn(r)}class mv{constructor(t){this.auth=t,this.observer=null,this.addObserver=oS(n=>this.observer=n)}get next(){return gt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function f1(r){hh=r}function xT(r){return hh.loadJS(r)}function d1(){return hh.recaptchaEnterpriseScript}function m1(){return hh.gapiScript}function g1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class p1{constructor(){this.enterprise=new _1}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class _1{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const y1="recaptcha-enterprise",zT="NO_RECAPTCHA";class v1{constructor(t){this.type=y1,this.auth=Ks(t)}async verify(t="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,g)=>{$I(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const y=new XI(p);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,f(y.siteKey)}}).catch(p=>{g(p)})})}function l(c,f,g){const p=window.grecaptcha;uv(p)?p.enterprise.ready(()=>{p.enterprise.execute(c,{action:t}).then(y=>{f(y)}).catch(()=>{f(zT)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new p1().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{s(this.auth).then(g=>{if(!n&&uv(window.grecaptcha))l(g,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=d1();p.length!==0&&(p+=g),xT(p).then(()=>{l(g,c,f)}).catch(y=>{f(y)})}}).catch(g=>{f(g)})})}}async function gv(r,t,n,s=!1,l=!1){const c=new v1(r);let f;if(l)f=zT;else try{f=await c.verify(n)}catch{f=await c.verify(n,!0)}const g=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const p=g.phoneEnrollmentInfo.phoneNumber,y=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const p=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return s?Object.assign(g,{captchaResp:f}):Object.assign(g,{captchaResponse:f}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function em(r,t,n,s,l){var c;if(!((c=r._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await gv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const g=await gv(r,t,n,n==="getOobCode");return s(r,g)}else return Promise.reject(f)})}/**
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
 */function E1(r,t){const n=Xc(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(Ps(c,t??{}))return l;Hn(l,"already-initialized")}return n.initialize({options:t})}function T1(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function A1(r,t,n){const s=Ks(r);gt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const l=!1,c=BT(t),{host:f,port:g}=S1(t),p=g===null?"":`:${g}`,y={url:`${c}//${f}${p}/`},A=Object.freeze({host:f,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){gt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),gt(Ps(y,s.config.emulator)&&Ps(A,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=A,s.settings.appVerificationDisabledForTesting=!0,R1()}function BT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function S1(r){const t=BT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:pv(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:pv(f)}}}function pv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function R1(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Hm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ji("not implemented")}_getIdTokenResponse(t){return ji("not implemented")}_linkToIdToken(t,n){return ji("not implemented")}_getReauthenticationResolver(t){return ji("not implemented")}}async function b1(r,t){return ts(r,"POST","/v1/accounts:signUp",t)}/**
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
 */async function w1(r,t){return zl(r,"POST","/v1/accounts:signInWithPassword",Jr(r,t))}/**
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
 */async function I1(r,t){return zl(r,"POST","/v1/accounts:signInWithEmailLink",Jr(r,t))}async function C1(r,t){return zl(r,"POST","/v1/accounts:signInWithEmailLink",Jr(r,t))}/**
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
 */class Nl extends Hm{constructor(t,n,s,l=null){super("password",s),this._email=t,this._password=n,this._tenantId=l}static _fromEmailAndPassword(t,n){return new Nl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Nl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return em(t,n,"signInWithPassword",w1);case"emailLink":return I1(t,{email:this._email,oobCode:this._password});default:Hn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return em(t,s,"signUpPassword",b1);case"emailLink":return C1(t,{idToken:n,email:this._email,oobCode:this._password});default:Hn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Ga(r,t){return zl(r,"POST","/v1/accounts:signInWithIdp",Jr(r,t))}/**
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
 */const D1="http://localhost";class zs extends Hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new zs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:l}=n,c=Um(n,["providerId","signInMethod"]);if(!s||!l)return null;const f=new zs(s,l);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Ga(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Ga(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ga(t,n)}buildRequest(){const t={requestUri:D1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ml(n)}return t}}/**
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
 */function O1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function N1(r){const t=fl(dl(r)).link,n=t?fl(dl(t)).deep_link_id:null,s=fl(dl(r)).deep_link_id;return(s?fl(dl(s)).link:null)||s||n||t||r}class qm{constructor(t){var n,s,l,c,f,g;const p=fl(dl(t)),y=(n=p.apiKey)!==null&&n!==void 0?n:null,A=(s=p.oobCode)!==null&&s!==void 0?s:null,C=O1((l=p.mode)!==null&&l!==void 0?l:null);gt(y&&A&&C,"argument-error"),this.apiKey=y,this.operation=C,this.code=A,this.continueUrl=(c=p.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(f=p.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(g=p.tenantId)!==null&&g!==void 0?g:null}static parseLink(t){const n=N1(t);try{return new qm(n)}catch{return null}}}/**
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
 */class io{constructor(){this.providerId=io.PROVIDER_ID}static credential(t,n){return Nl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=qm.parseLink(n);return gt(s,"argument-error"),Nl._fromEmailAndCode(t,s.code,s.tenantId)}}io.PROVIDER_ID="password";io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class HT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bl extends HT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ur extends Bl{constructor(){super("facebook.com")}static credential(t){return zs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ur.credential(t.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
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
 */class Lr extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Lr.credentialFromTaggedObject(t)}static credentialFromError(t){return Lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Lr.credential(n,s)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
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
 */class xr extends Bl{constructor(){super("github.com")}static credential(t){return zs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xr.credentialFromTaggedObject(t)}static credentialFromError(t){return xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xr.credential(t.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
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
 */class zr extends Bl{constructor(){super("twitter.com")}static credential(t,n){return zs._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return zr.credentialFromTaggedObject(t)}static credentialFromError(t){return zr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return zr.credential(n,s)}catch{return null}}}zr.TWITTER_SIGN_IN_METHOD="twitter.com";zr.PROVIDER_ID="twitter.com";/**
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
 */async function V1(r,t){return zl(r,"POST","/v1/accounts:signUp",Jr(r,t))}/**
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
 */class Bs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,l=!1){const c=await Fi._fromIdTokenResponse(t,s,l),f=_v(s);return new Bs({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const l=_v(s);return new Bs({user:t,providerId:l,_tokenResponse:s,operationType:n})}}function _v(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class jc extends mi{constructor(t,n,s,l){var c;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,jc.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,l){return new jc(t,n,s,l)}}function qT(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?jc._fromErrorAndOperation(r,c,t,s):c})}async function M1(r,t,n=!1){const s=await Ol(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Bs._forOperation(r,"link",s)}/**
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
 */async function k1(r,t,n=!1){const{auth:s}=r;if(dn(s.app))return Promise.reject(Ki(s));const l="reauthenticate";try{const c=await Ol(r,qT(s,l,t,r),n);gt(c.idToken,s,"internal-error");const f=zm(c.idToken);gt(f,s,"internal-error");const{sub:g}=f;return gt(r.uid===g,s,"user-mismatch"),Bs._forOperation(r,l,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Hn(s,"user-mismatch"),c}}/**
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
 */async function jT(r,t,n=!1){if(dn(r.app))return Promise.reject(Ki(r));const s="signIn",l=await qT(r,s,t),c=await Bs._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}async function P1(r,t){return jT(Ks(r),t)}/**
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
 */async function FT(r){const t=Ks(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function U1(r,t,n){if(dn(r.app))return Promise.reject(Ki(r));const s=Ks(r),f=await em(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",V1).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&FT(r),p}),g=await Bs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(g.user),g}function L1(r,t,n){return dn(r.app)?Promise.reject(Ki(r)):P1(sn(r),io.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&FT(r),s})}function x1(r,t,n,s){return sn(r).onIdTokenChanged(t,n,s)}function z1(r,t,n){return sn(r).beforeAuthStateChanged(t,n)}function B1(r){return sn(r).signOut()}const Fc="__sak";/**
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
 */class GT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fc,"1"),this.storage.removeItem(Fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const H1=1e3,q1=10;class KT extends GT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=UT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&t(n,l,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);a1()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,q1):l()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}KT.type="LOCAL";const j1=KT;/**
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
 */class QT extends GT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}QT.type="SESSION";const YT=QT;/**
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
 */function F1(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(l=>l.isListeningto(t));if(n)return n;const s=new fh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:l,data:c}=n.data,f=this.handlersMap[l];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const g=Array.from(f).map(async y=>y(n.origin,c)),p=await F1(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fh.receivers=[];/**
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
 */function jm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class G1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,f;return new Promise((g,p)=>{const y=jm("",20);l.port1.start();const A=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:l,onMessage(C){const x=C;if(x.data.eventId===y)switch(x.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(x.data.response);break;default:clearTimeout(A),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function ci(){return window}function K1(r){ci().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function XT(){return typeof ci().WorkerGlobalScope<"u"&&typeof ci().importScripts=="function"}async function Q1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Y1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function X1(){return XT()?self:null}/**
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
 */const $T="firebaseLocalStorageDb",$1=1,Gc="firebaseLocalStorage",WT="fbase_key";class Hl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dh(r,t){return r.transaction([Gc],t?"readwrite":"readonly").objectStore(Gc)}function W1(){const r=indexedDB.deleteDatabase($T);return new Hl(r).toPromise()}function nm(){const r=indexedDB.open($T,$1);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Gc,{keyPath:WT})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Gc)?t(s):(s.close(),await W1(),t(await nm()))})})}async function yv(r,t,n){const s=dh(r,!0).put({[WT]:t,value:n});return new Hl(s).toPromise()}async function Z1(r,t){const n=dh(r,!1).get(t),s=await new Hl(n).toPromise();return s===void 0?null:s.value}function vv(r,t){const n=dh(r,!0).delete(t);return new Hl(n).toPromise()}const J1=800,tC=3;class ZT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>tC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fh._getInstance(X1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Q1(),!this.activeServiceWorker)return;this.sender=new G1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Y1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await nm();return await yv(t,Fc,"1"),await vv(t,Fc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>yv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>Z1(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>vv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=dh(l,!1).getAll();return new Hl(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZT.type="LOCAL";const eC=ZT;new xl(3e4,6e4);/**
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
 */function nC(r,t){return t?Gi(t):(gt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Fm extends Hm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ga(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ga(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ga(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function iC(r){return jT(r.auth,new Fm(r),r.bypassAuthState)}function rC(r){const{auth:t,user:n}=r;return gt(n,t,"internal-error"),k1(n,new Fm(r),r.bypassAuthState)}async function sC(r){const{auth:t,user:n}=r;return gt(n,t,"internal-error"),M1(n,new Fm(r),r.bypassAuthState)}/**
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
 */class JT{constructor(t,n,s,l,c=!1){this.auth=t,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:f,type:g}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return iC;case"linkViaPopup":case"linkViaRedirect":return sC;case"reauthViaPopup":case"reauthViaRedirect":return rC;default:Hn(this.auth,"internal-error")}}resolve(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aC=new xl(2e3,1e4);class Ha extends JT{constructor(t,n,s,l,c){super(t,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,Ha.currentPopupAction&&Ha.currentPopupAction.cancel(),Ha.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return gt(t,this.auth,"internal-error"),t}async onExecution(){$i(this.filter.length===1,"Popup operations only handle one event");const t=jm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ha.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,aC.get())};t()}}Ha.currentPopupAction=null;/**
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
 */const oC="pendingRedirect",bc=new Map;class lC extends JT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=bc.get(this.auth._key());if(!t){try{const s=await uC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}bc.set(this.auth._key(),t)}return this.bypassAuthState||bc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uC(r,t){const n=fC(t),s=hC(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function cC(r,t){bc.set(r._key(),t)}function hC(r){return Gi(r._redirectPersistence)}function fC(r){return Rc(oC,r.config.apiKey,r.name)}async function dC(r,t,n=!1){if(dn(r.app))return Promise.reject(Ki(r));const s=Ks(r),l=nC(s,t),f=await new lC(s,l,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const mC=10*60*1e3;class gC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!pC(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!t0(t)){const l=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ui(this.auth,l))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ev(t))}saveEventToCache(t){this.cachedEventUids.add(Ev(t)),this.lastProcessedEventTime=Date.now()}}function Ev(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function t0({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function pC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return t0(r);default:return!1}}/**
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
 */async function _C(r,t={}){return ts(r,"GET","/v1/projects",t)}/**
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
 */const yC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vC=/^https?/;async function EC(r){if(r.config.emulator)return;const{authorizedDomains:t}=await _C(r);for(const n of t)try{if(TC(n))return}catch{}Hn(r,"unauthorized-domain")}function TC(r){const t=Jd(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!vC.test(n))return!1;if(yC.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const AC=new xl(3e4,6e4);function Tv(){const r=ci().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function SC(r){return new Promise((t,n)=>{var s,l,c;function f(){Tv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Tv(),n(ui(r,"network-request-failed"))},timeout:AC.get()})}if(!((l=(s=ci().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)t(gapi.iframes.getContext());else if(!((c=ci().gapi)===null||c===void 0)&&c.load)f();else{const g=g1("iframefcb");return ci()[g]=()=>{gapi.load?f():n(ui(r,"network-request-failed"))},xT(`${m1()}?onload=${g}`).catch(p=>n(p))}}).catch(t=>{throw wc=null,t})}let wc=null;function RC(r){return wc=wc||SC(r),wc}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const bC=new xl(5e3,15e3),wC="__/auth/iframe",IC="emulator/auth/iframe",CC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OC(r){const t=r.config;gt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?xm(t,IC):`https://${r.config.authDomain}/${wC}`,s={apiKey:t.apiKey,appName:r.name,v:Hs},l=DC.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Ml(s).slice(1)}`}async function NC(r){const t=await RC(r),n=ci().gapi;return gt(n,r,"internal-error"),t.open({where:document.body,url:OC(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CC,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const f=ui(r,"network-request-failed"),g=ci().setTimeout(()=>{c(f)},bC.get());function p(){ci().clearTimeout(g),l(s)}s.ping(p).then(p,()=>{c(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const VC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MC=500,kC=600,PC="_blank",UC="http://localhost";class Av{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LC(r,t,n,s=MC,l=kC){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const p=Object.assign(Object.assign({},VC),{width:s.toString(),height:l.toString(),top:c,left:f}),y=Qe().toLowerCase();n&&(g=NT(y)?PC:n),DT(y)&&(t=t||UC,p.scrollbars="yes");const A=Object.entries(p).reduce((x,[q,$])=>`${x}${q}=${$},`,"");if(s1(y)&&g!=="_self")return xC(t||"",g),new Av(null);const C=window.open(t||"",g,A);gt(C,r,"popup-blocked");try{C.focus()}catch{}return new Av(C)}function xC(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const zC="__/auth/handler",BC="emulator/auth/handler",HC=encodeURIComponent("fac");async function Sv(r,t,n,s,l,c){gt(r.config.authDomain,r,"auth-domain-config-required"),gt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Hs,eventId:l};if(t instanceof HT){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",aS(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,C]of Object.entries({}))f[A]=C}if(t instanceof Bl){const A=t.getScopes().filter(C=>C!=="");A.length>0&&(f.scopes=A.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const p=await r._getAppCheckToken(),y=p?`#${HC}=${encodeURIComponent(p)}`:"";return`${qC(r)}?${Ml(g).slice(1)}${y}`}function qC({config:r}){return r.emulator?xm(r,BC):`https://${r.authDomain}/${zC}`}/**
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
 */const Dd="webStorageSupport";class jC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YT,this._completeRedirectFn=dC,this._overrideRedirectResult=cC}async _openPopup(t,n,s,l){var c;$i((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const f=await Sv(t,n,s,Jd(),l);return LC(t,f,jm())}async _openRedirect(t,n,s,l){await this._originValidation(t);const c=await Sv(t,n,s,Jd(),l);return K1(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):($i(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await NC(t),s=new gC(t);return n.register("authEvent",l=>(gt(l==null?void 0:l.authEvent,t,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Dd,{type:Dd},l=>{var c;const f=(c=l==null?void 0:l[0])===null||c===void 0?void 0:c[Dd];f!==void 0&&n(!!f),Hn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EC(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return UT()||OT()||Bm()}}const FC=jC;var Rv="@firebase/auth",bv="1.9.1";/**
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
 */class GC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){gt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QC(r){Us(new Kr("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;gt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LT(r)},y=new h1(s,l,c,p);return T1(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Us(new Kr("auth-internal",t=>{const n=Ks(t.getProvider("auth").getImmediate());return(s=>new GC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(Rv,bv,KC(r)),si(Rv,bv,"esm2017")}/**
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
 */const YC=5*60,XC=xv("authIdTokenMaxAge")||YC;let wv=null;const $C=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>XC)return;const l=n==null?void 0:n.token;wv!==l&&(wv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function WC(r=am()){const t=Xc(r,"auth");if(t.isInitialized())return t.getImmediate();const n=E1(r,{popupRedirectResolver:FC,persistence:[eC,j1,YT]}),s=xv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=$C(c.toString());z1(n,f,()=>f(n.currentUser)),x1(n,g=>f(g))}}const l=Pv("auth");return l&&A1(n,`http://${l}`),n}function ZC(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}f1({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=l=>{const c=ui("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",ZC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QC("Browser");/**
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
 */const e0="firebasestorage.googleapis.com",JC="storageBucket",tD=2*60*1e3,eD=10*60*1e3;/**
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
 */class gi extends mi{constructor(t,n,s=0){super(Od(t),`Firebase Storage: ${n} (${Od(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gi.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Od(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var di;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(di||(di={}));function Od(r){return"storage/"+r}function nD(){const r="An unknown error occurred, please check the error payload for server response.";return new gi(di.UNKNOWN,r)}function iD(){return new gi(di.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rD(){return new gi(di.CANCELED,"User canceled the upload/download.")}function sD(r){return new gi(di.INVALID_URL,"Invalid URL '"+r+"'.")}function aD(r){return new gi(di.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Iv(r){return new gi(di.INVALID_ARGUMENT,r)}function n0(){return new gi(di.APP_DELETED,"The Firebase app was deleted.")}function oD(r){return new gi(di.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class zn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=zn.makeFromUrl(t,n)}catch{return new zn(t,"")}if(s.path==="")return s;throw aD(t)}static makeFromUrl(t,n){let s=null;const l="([A-Za-z0-9.\\-_]+)";function c(dt){dt.path.charAt(dt.path.length-1)==="/"&&(dt.path_=dt.path_.slice(0,-1))}const f="(/(.*))?$",g=new RegExp("^gs://"+l+f,"i"),p={bucket:1,path:3};function y(dt){dt.path_=decodeURIComponent(dt.path)}const A="v[A-Za-z0-9_]+",C=n.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",q=new RegExp(`^https?://${C}/${A}/b/${l}/o${x}`,"i"),$={bucket:1,path:3},J=n===e0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,Q="([^?#]*)",pt=new RegExp(`^https?://${J}/${l}/${Q}`,"i"),W=[{regex:g,indices:p,postModify:c},{regex:q,indices:$,postModify:y},{regex:pt,indices:{bucket:1,path:2},postModify:y}];for(let dt=0;dt<W.length;dt++){const ot=W[dt],Tt=ot.regex.exec(t);if(Tt){const V=Tt[ot.indices.bucket];let b=Tt[ot.indices.path];b||(b=""),s=new zn(V,b),ot.postModify(s);break}}if(s==null)throw sD(t);return s}}class lD{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function uD(r,t,n){let s=1,l=null,c=null,f=!1,g=0;function p(){return g===2}let y=!1;function A(...Q){y||(y=!0,t.apply(null,Q))}function C(Q){l=setTimeout(()=>{l=null,r(q,p())},Q)}function x(){c&&clearTimeout(c)}function q(Q,...pt){if(y){x();return}if(Q){x(),A.call(null,Q,...pt);return}if(p()||f){x(),A.call(null,Q,...pt);return}s<64&&(s*=2);let W;g===1?(g=2,W=0):W=(s+Math.random())*1e3,C(W)}let $=!1;function J(Q){$||($=!0,x(),!y&&(l!==null?(Q||(g=2),clearTimeout(l),C(0)):Q||(g=1)))}return C(0),c=setTimeout(()=>{f=!0,J(!0)},n),J}function cD(r){r(!1)}/**
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
 */function hD(r){return r!==void 0}function Cv(r,t,n,s){if(s<t)throw Iv(`Invalid value for '${r}'. Expected ${t} or greater.`);if(s>n)throw Iv(`Invalid value for '${r}'. Expected ${n} or less.`)}function fD(r){const t=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const l=t(s)+"="+t(r[s]);n=n+l+"&"}return n=n.slice(0,-1),n}var Kc;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Kc||(Kc={}));/**
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
 */function dD(r,t){const n=r>=500&&r<600,l=[408,429].indexOf(r)!==-1,c=t.indexOf(r)!==-1;return n||l||c}/**
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
 */class mD{constructor(t,n,s,l,c,f,g,p,y,A,C,x=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=l,this.successCodes_=c,this.additionalRetryCodes_=f,this.callback_=g,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=A,this.connectionFactory_=C,this.retry=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((q,$)=>{this.resolve_=q,this.reject_=$,this.start_()})}start_(){const t=(s,l)=>{if(l){s(!1,new pc(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const f=g=>{const p=g.loaded,y=g.lengthComputable?g.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&c.addUploadProgressListener(f),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(f),this.pendingConnection_=null;const g=c.getErrorCode()===Kc.NO_ERROR,p=c.getStatus();if(!g||dD(p,this.additionalRetryCodes_)&&this.retry){const A=c.getErrorCode()===Kc.ABORT;s(!1,new pc(!1,null,A));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new pc(y,c))})},n=(s,l)=>{const c=this.resolve_,f=this.reject_,g=l.connection;if(l.wasSuccessCode)try{const p=this.callback_(g,g.getResponse());hD(p)?c(p):c()}catch(p){f(p)}else if(g!==null){const p=nD();p.serverResponse=g.getErrorText(),this.errorCallback_?f(this.errorCallback_(g,p)):f(p)}else if(l.canceled){const p=this.appDelete_?n0():rD();f(p)}else{const p=iD();f(p)}};this.canceled_?n(!1,new pc(!1,null,!0)):this.backoffId_=uD(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&cD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pc{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function gD(r,t){t!==null&&t.length>0&&(r.Authorization="Firebase "+t)}function pD(r,t){r["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function _D(r,t){t&&(r["X-Firebase-GMPID"]=t)}function yD(r,t){t!==null&&(r["X-Firebase-AppCheck"]=t)}function vD(r,t,n,s,l,c,f=!0){const g=fD(r.urlParams),p=r.url+g,y=Object.assign({},r.headers);return _D(y,t),gD(y,n),pD(y,c),yD(y,s),new mD(p,r.method,y,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,l,f)}/**
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
 */function ED(r){if(r.length===0)return null;const t=r.lastIndexOf("/");return t===-1?"":r.slice(0,t)}function TD(r){const t=r.lastIndexOf("/",r.length-2);return t===-1?r:r.slice(t+1)}/**
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
 */class Qc{constructor(t,n){this._service=t,n instanceof zn?this._location=n:this._location=zn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Qc(t,n)}get root(){const t=new zn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return TD(this._location.path)}get storage(){return this._service}get parent(){const t=ED(this._location.path);if(t===null)return null;const n=new zn(this._location.bucket,t);return new Qc(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw oD(t)}}function Dv(r,t){const n=t==null?void 0:t[JC];return n==null?null:zn.makeFromBucketSpec(n,r)}function AD(r,t,n,s={}){r.host=`${t}:${n}`,r._protocol="http";const{mockUserToken:l}=s;l&&(r._overrideAuthToken=typeof l=="string"?l:zv(l,r.app.options.projectId))}class SD{constructor(t,n,s,l,c){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=l,this._firebaseVersion=c,this._bucket=null,this._host=e0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tD,this._maxUploadRetryTime=eD,this._requests=new Set,l!=null?this._bucket=zn.makeFromBucketSpec(l,this._host):this._bucket=Dv(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=zn.makeFromBucketSpec(this._url,t):this._bucket=Dv(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Cv("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Cv("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Qc(this,t)}_makeRequest(t,n,s,l,c=!0){if(this._deleted)return new lD(n0());{const f=vD(t,this._appId,s,l,n,this._firebaseVersion,c);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,n){const[s,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,l).getPromise()}}const Ov="@firebase/storage",Nv="0.13.7";/**
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
 */const i0="storage";function RD(r=am(),t){r=sn(r);const s=Xc(r,i0).getImmediate({identifier:t}),l=Uv("storage");return l&&bD(s,...l),s}function bD(r,t,n,s={}){AD(r,t,n,s)}function wD(r,{instanceIdentifier:t}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),l=r.getProvider("app-check-internal");return new SD(n,s,l,t,Hs)}function ID(){Us(new Kr(i0,wD,"PUBLIC").setMultipleInstances(!0)),si(Ov,Nv,""),si(Ov,Nv,"esm2017")}ID();RD();const CD={apiKey:"AIzaSyAQgWe34nInChUl8ZbOF9YiVJCjBzvo2cY",authDomain:"chronoapp-53363.firebaseapp.com",projectId:"chronoapp-53363",storageBucket:"chronoapp-53363.firebasestorage.app",messagingSenderId:"902735662769",appId:"1:902735662769:web:1aac26ba94a78b6c455c90"},r0=qv(CD),Nd=vI(r0),Vd=WC(r0);function DD(){const[r,t]=Pr.useState(null),[n,s]=Pr.useState(""),[l,c]=Pr.useState(""),[f,g]=Pr.useState(null),[p,y]=Pr.useState([]),[A,C]=Pr.useState({name:"",brand:"",year:"",image:"",movement:""});Pr.useEffect(()=>{r&&Q()},[r]);const x=async()=>{try{const W=await U1(Vd,n,l);t(W.user),g("Registrazione avvenuta con successo!")}catch(W){g(W.message)}},q=async()=>{try{const W=await L1(Vd,n,l);t(W.user),g("Accesso effettuato con successo!")}catch(W){g(W.message)}},$=async()=>{await B1(Vd),t(null),y([]),g("Disconnessione effettuata.")},J=async()=>{if(A.name&&A.brand&&A.year&&A.movement)try{await zI(sv(Nd,"watches"),{...A,userId:r.uid}),Q(),C({name:"",brand:"",year:"",image:"",movement:""}),g("Orologio aggiunto con successo!")}catch(W){g(W.message)}else g("Compila tutti i campi!")},Q=async()=>{try{const dt=(await LI(sv(Nd,"watches"))).docs.map(ot=>({id:ot.id,...ot.data()})).filter(ot=>ot.userId===(r==null?void 0:r.uid));y(dt)}catch(W){g(W.message)}},pt=async W=>{try{await xI(lT(Nd,"watches",W)),Q(),g("Orologio eliminato con successo!")}catch(dt){g(dt.message)}},ht=async W=>{const dt=W.target.files[0];if(!dt)return;const ot=ref(storage,`watches/${r.uid}/${dt.name}`);try{await uploadBytes(ot,dt);const Tt=await getDownloadURL(ot);C(V=>({...V,image:Tt})),g("Immagine caricata con successo!")}catch(Tt){g("Errore nel caricamento dell'immagine: "+Tt.message)}};return vt.jsxs("div",{className:"container",children:[vt.jsx("h1",{children:"La mia collezione di orologi"}),f&&vt.jsx("p",{className:"message",children:f}),r?vt.jsxs(vt.Fragment,{children:[vt.jsx("div",{className:"buttonForm",children:vt.jsx("button",{className:"logout-btn",onClick:$,children:"Logout"})}),vt.jsx("h2",{children:"Aggiungi un nuovo orologio"}),vt.jsxs("div",{className:"form",children:[vt.jsx("input",{type:"text",placeholder:"Nome",value:A.name,onChange:W=>C({...A,name:W.target.value})}),vt.jsx("input",{type:"text",placeholder:"Marca",value:A.brand,onChange:W=>C({...A,brand:W.target.value})}),vt.jsx("input",{type:"number",placeholder:"Anno",value:A.year,onChange:W=>C({...A,year:W.target.value})}),vt.jsx("div",{style:{marginBottom:"10px"}})," ",vt.jsx("label",{children:vt.jsx("strong",{children:"Movimento: "})}),vt.jsxs("select",{value:A.movement,onChange:W=>C({...A,movement:W.target.value}),children:[vt.jsx("option",{value:"",children:"Seleziona il movimento"}),vt.jsx("option",{value:"Automatico",children:"Automatico"}),vt.jsx("option",{value:"Carica Manuale",children:"Carica Manuale"}),vt.jsx("option",{value:"Quarzo",children:"Quarzo"})]}),vt.jsx("div",{style:{marginBottom:"10px"}})," ",vt.jsx("input",{type:"file",accept:"image/*",onChange:ht}),A.image&&vt.jsx("img",{src:A.image,alt:"Anteprima",className:"preview-image"}),vt.jsx("div",{style:{marginBottom:"10px"}})," ",vt.jsxs("div",{className:"buttonForm",children:[vt.jsx("button",{onClick:J,children:"Salva"}),vt.jsx("button",{onClick:()=>setShowBanner(!1),children:"Annulla"})]})]}),vt.jsx("div",{style:{marginBottom:"50px"}})," ",vt.jsx("h2",{children:"Lista Orologi"}),vt.jsx("div",{className:"watch-list",children:p.map(W=>vt.jsxs("div",{className:"watch-card",children:[vt.jsx("h3",{children:W.name}),vt.jsxs("p",{children:[W.brand," - ",W.year," - ",W.movement]}),vt.jsx("div",{className:"delete-button",children:vt.jsx("button",{className:"delete-btn",onClick:()=>pt(W.id),children:"Elimina"})})]},W.id))})]}):vt.jsxs("div",{className:"form",children:[vt.jsx("h2",{children:"Registrati o Accedi"}),vt.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:W=>s(W.target.value)}),vt.jsx("input",{type:"password",placeholder:"Password",value:l,onChange:W=>c(W.target.value)}),vt.jsx("div",{className:"button-group",children:vt.jsxs("div",{className:"buttonForm",children:[vt.jsx("button",{onClick:x,children:"Registrati"}),vt.jsx("button",{onClick:q,children:"Accedi"})]})})]})]})}xA.createRoot(document.getElementById("root")).render(vt.jsx(Pr.StrictMode,{children:vt.jsx(DD,{})}));
