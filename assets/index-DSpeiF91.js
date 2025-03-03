(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Ed={exports:{}},pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function sS(){if(oy)return pl;oy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return pl.Fragment=t,pl.jsx=n,pl.jsxs=n,pl}var ly;function aS(){return ly||(ly=1,Ed.exports=sS()),Ed.exports}var Et=aS(),Td={exports:{}},Rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function oS(){if(uy)return Rt;uy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.iterator;function P(D){return D===null||typeof D!="object"?null:(D=I&&D[I]||D["@@iterator"],typeof D=="function"?D:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function Q(D,$,ot){this.props=D,this.context=$,this.refs=J,this.updater=ot||H}Q.prototype.isReactComponent={},Q.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},Q.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ft(){}ft.prototype=Q.prototype;function at(D,$,ot){this.props=D,this.context=$,this.refs=J,this.updater=ot||H}var lt=at.prototype=new ft;lt.constructor=at,X(lt,Q.prototype),lt.isPureReactComponent=!0;var vt=Array.isArray,W={H:null,A:null,T:null,S:null},mt=Object.prototype.hasOwnProperty;function O(D,$,ot,et,nt,wt){return ot=wt.ref,{$$typeof:r,type:D,key:$,ref:ot!==void 0?ot:null,props:wt}}function b(D,$){return O(D.type,$,void 0,void 0,void 0,D.props)}function S(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function C(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ot){return $[ot]})}var V=/\/+/g;function L(D,$){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):$.toString(36)}function w(){}function ye(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(w,w):(D.status="pending",D.then(function($){D.status==="pending"&&(D.status="fulfilled",D.value=$)},function($){D.status==="pending"&&(D.status="rejected",D.reason=$)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function fe(D,$,ot,et,nt){var wt=typeof D;(wt==="undefined"||wt==="boolean")&&(D=null);var bt=!1;if(D===null)bt=!0;else switch(wt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(D.$$typeof){case r:case t:bt=!0;break;case A:return bt=D._init,fe(bt(D._payload),$,ot,et,nt)}}if(bt)return nt=nt(D),bt=et===""?"."+L(D,0):et,vt(nt)?(ot="",bt!=null&&(ot=bt.replace(V,"$&/")+"/"),fe(nt,$,ot,"",function(ne){return ne})):nt!=null&&(S(nt)&&(nt=b(nt,ot+(nt.key==null||D&&D.key===nt.key?"":(""+nt.key).replace(V,"$&/")+"/")+bt)),$.push(nt)),1;bt=0;var de=et===""?".":et+":";if(vt(D))for(var xt=0;xt<D.length;xt++)et=D[xt],wt=de+L(et,xt),bt+=fe(et,$,ot,wt,nt);else if(xt=P(D),typeof xt=="function")for(D=xt.call(D),xt=0;!(et=D.next()).done;)et=et.value,wt=de+L(et,xt++),bt+=fe(et,$,ot,wt,nt);else if(wt==="object"){if(typeof D.then=="function")return fe(ye(D),$,ot,et,nt);throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return bt}function tt(D,$,ot){if(D==null)return D;var et=[],nt=0;return fe(D,et,"","",function(wt){return $.call(ot,wt,nt++)}),et}function _t(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(ot){(D._status===0||D._status===-1)&&(D._status=1,D._result=ot)},function(ot){(D._status===0||D._status===-1)&&(D._status=2,D._result=ot)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var ct=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function qt(){}return Rt.Children={map:tt,forEach:function(D,$,ot){tt(D,function(){$.apply(this,arguments)},ot)},count:function(D){var $=0;return tt(D,function(){$++}),$},toArray:function(D){return tt(D,function($){return $})||[]},only:function(D){if(!S(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Rt.Component=Q,Rt.Fragment=n,Rt.Profiler=o,Rt.PureComponent=at,Rt.StrictMode=s,Rt.Suspense=g,Rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Rt.act=function(){throw Error("act(...) is not supported in production builds of React.")},Rt.cache=function(D){return function(){return D.apply(null,arguments)}},Rt.cloneElement=function(D,$,ot){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var et=X({},D.props),nt=D.key,wt=void 0;if($!=null)for(bt in $.ref!==void 0&&(wt=void 0),$.key!==void 0&&(nt=""+$.key),$)!mt.call($,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&$.ref===void 0||(et[bt]=$[bt]);var bt=arguments.length-2;if(bt===1)et.children=ot;else if(1<bt){for(var de=Array(bt),xt=0;xt<bt;xt++)de[xt]=arguments[xt+2];et.children=de}return O(D.type,nt,void 0,void 0,wt,et)},Rt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Rt.createElement=function(D,$,ot){var et,nt={},wt=null;if($!=null)for(et in $.key!==void 0&&(wt=""+$.key),$)mt.call($,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(nt[et]=$[et]);var bt=arguments.length-2;if(bt===1)nt.children=ot;else if(1<bt){for(var de=Array(bt),xt=0;xt<bt;xt++)de[xt]=arguments[xt+2];nt.children=de}if(D&&D.defaultProps)for(et in bt=D.defaultProps,bt)nt[et]===void 0&&(nt[et]=bt[et]);return O(D,wt,void 0,void 0,null,nt)},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(D){return{$$typeof:p,render:D}},Rt.isValidElement=S,Rt.lazy=function(D){return{$$typeof:A,_payload:{_status:-1,_result:D},_init:_t}},Rt.memo=function(D,$){return{$$typeof:_,type:D,compare:$===void 0?null:$}},Rt.startTransition=function(D){var $=W.T,ot={};W.T=ot;try{var et=D(),nt=W.S;nt!==null&&nt(ot,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(qt,ct)}catch(wt){ct(wt)}finally{W.T=$}},Rt.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Rt.use=function(D){return W.H.use(D)},Rt.useActionState=function(D,$,ot){return W.H.useActionState(D,$,ot)},Rt.useCallback=function(D,$){return W.H.useCallback(D,$)},Rt.useContext=function(D){return W.H.useContext(D)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(D,$){return W.H.useDeferredValue(D,$)},Rt.useEffect=function(D,$){return W.H.useEffect(D,$)},Rt.useId=function(){return W.H.useId()},Rt.useImperativeHandle=function(D,$,ot){return W.H.useImperativeHandle(D,$,ot)},Rt.useInsertionEffect=function(D,$){return W.H.useInsertionEffect(D,$)},Rt.useLayoutEffect=function(D,$){return W.H.useLayoutEffect(D,$)},Rt.useMemo=function(D,$){return W.H.useMemo(D,$)},Rt.useOptimistic=function(D,$){return W.H.useOptimistic(D,$)},Rt.useReducer=function(D,$,ot){return W.H.useReducer(D,$,ot)},Rt.useRef=function(D){return W.H.useRef(D)},Rt.useState=function(D){return W.H.useState(D)},Rt.useSyncExternalStore=function(D,$,ot){return W.H.useSyncExternalStore(D,$,ot)},Rt.useTransition=function(){return W.H.useTransition()},Rt.version="19.0.0",Rt}var cy;function fm(){return cy||(cy=1,Td.exports=oS()),Td.exports}var Gi=fm(),Ad={exports:{}},gl={},Sd={exports:{}},bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function lS(){return hy||(hy=1,function(r){function t(tt,_t){var ct=tt.length;tt.push(_t);t:for(;0<ct;){var qt=ct-1>>>1,D=tt[qt];if(0<o(D,_t))tt[qt]=_t,tt[ct]=D,ct=qt;else break t}}function n(tt){return tt.length===0?null:tt[0]}function s(tt){if(tt.length===0)return null;var _t=tt[0],ct=tt.pop();if(ct!==_t){tt[0]=ct;t:for(var qt=0,D=tt.length,$=D>>>1;qt<$;){var ot=2*(qt+1)-1,et=tt[ot],nt=ot+1,wt=tt[nt];if(0>o(et,ct))nt<D&&0>o(wt,et)?(tt[qt]=wt,tt[nt]=ct,qt=nt):(tt[qt]=et,tt[ot]=ct,qt=ot);else if(nt<D&&0>o(wt,ct))tt[qt]=wt,tt[nt]=ct,qt=nt;else break t}}return _t}function o(tt,_t){var ct=tt.sortIndex-_t.sortIndex;return ct!==0?ct:tt.id-_t.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],_=[],A=1,I=null,P=3,H=!1,X=!1,J=!1,Q=typeof setTimeout=="function"?setTimeout:null,ft=typeof clearTimeout=="function"?clearTimeout:null,at=typeof setImmediate<"u"?setImmediate:null;function lt(tt){for(var _t=n(_);_t!==null;){if(_t.callback===null)s(_);else if(_t.startTime<=tt)s(_),_t.sortIndex=_t.expirationTime,t(g,_t);else break;_t=n(_)}}function vt(tt){if(J=!1,lt(tt),!X)if(n(g)!==null)X=!0,ye();else{var _t=n(_);_t!==null&&fe(vt,_t.startTime-tt)}}var W=!1,mt=-1,O=5,b=-1;function S(){return!(r.unstable_now()-b<O)}function C(){if(W){var tt=r.unstable_now();b=tt;var _t=!0;try{t:{X=!1,J&&(J=!1,ft(mt),mt=-1),H=!0;var ct=P;try{e:{for(lt(tt),I=n(g);I!==null&&!(I.expirationTime>tt&&S());){var qt=I.callback;if(typeof qt=="function"){I.callback=null,P=I.priorityLevel;var D=qt(I.expirationTime<=tt);if(tt=r.unstable_now(),typeof D=="function"){I.callback=D,lt(tt),_t=!0;break e}I===n(g)&&s(g),lt(tt)}else s(g);I=n(g)}if(I!==null)_t=!0;else{var $=n(_);$!==null&&fe(vt,$.startTime-tt),_t=!1}}break t}finally{I=null,P=ct,H=!1}_t=void 0}}finally{_t?V():W=!1}}}var V;if(typeof at=="function")V=function(){at(C)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,w=L.port2;L.port1.onmessage=C,V=function(){w.postMessage(null)}}else V=function(){Q(C,0)};function ye(){W||(W=!0,V())}function fe(tt,_t){mt=Q(function(){tt(r.unstable_now())},_t)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(tt){tt.callback=null},r.unstable_continueExecution=function(){X||H||(X=!0,ye())},r.unstable_forceFrameRate=function(tt){0>tt||125<tt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<tt?Math.floor(1e3/tt):5},r.unstable_getCurrentPriorityLevel=function(){return P},r.unstable_getFirstCallbackNode=function(){return n(g)},r.unstable_next=function(tt){switch(P){case 1:case 2:case 3:var _t=3;break;default:_t=P}var ct=P;P=_t;try{return tt()}finally{P=ct}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(tt,_t){switch(tt){case 1:case 2:case 3:case 4:case 5:break;default:tt=3}var ct=P;P=tt;try{return _t()}finally{P=ct}},r.unstable_scheduleCallback=function(tt,_t,ct){var qt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?qt+ct:qt):ct=qt,tt){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ct+D,tt={id:A++,callback:_t,priorityLevel:tt,startTime:ct,expirationTime:D,sortIndex:-1},ct>qt?(tt.sortIndex=ct,t(_,tt),n(g)===null&&tt===n(_)&&(J?(ft(mt),mt=-1):J=!0,fe(vt,ct-qt))):(tt.sortIndex=D,t(g,tt),X||H||(X=!0,ye())),tt},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(tt){var _t=P;return function(){var ct=P;P=_t;try{return tt.apply(this,arguments)}finally{P=ct}}}}(bd)),bd}var fy;function uS(){return fy||(fy=1,Sd.exports=lS()),Sd.exports}var Rd={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function cS(){if(dy)return Ke;dy=1;var r=fm();function t(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)_+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,_,A){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:I==null?null:""+I,children:g,containerInfo:_,implementation:A}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(g,_){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return u(g,_,null,A)},Ke.flushSync=function(g){var _=f.T,A=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=_,s.p=A,s.d.f()}},Ke.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(g,_))},Ke.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Ke.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var A=_.as,I=p(A,_.crossOrigin),P=typeof _.integrity=="string"?_.integrity:void 0,H=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;A==="style"?s.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:I,integrity:P,fetchPriority:H}):A==="script"&&s.d.X(g,{crossOrigin:I,integrity:P,fetchPriority:H,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Ke.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var A=p(_.as,_.crossOrigin);s.d.M(g,{crossOrigin:A,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(g)},Ke.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var A=_.as,I=p(A,_.crossOrigin);s.d.L(g,A,{crossOrigin:I,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Ke.preloadModule=function(g,_){if(typeof g=="string")if(_){var A=p(_.as,_.crossOrigin);s.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:A,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(g)},Ke.requestFormReset=function(g){s.d.r(g)},Ke.unstable_batchedUpdates=function(g,_){return g(_)},Ke.useFormState=function(g,_,A){return f.H.useFormState(g,_,A)},Ke.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ke.version="19.0.0",Ke}var my;function hS(){if(my)return Rd.exports;my=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Rd.exports=cS(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function fS(){if(py)return gl;py=1;var r=uS(),t=fm(),n=hS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),H=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),lt=Symbol.for("react.offscreen"),vt=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function mt(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var O=Symbol.for("react.client.reference");function b(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===O?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case p:return"Portal";case A:return"Profiler";case _:return"StrictMode";case J:return"Suspense";case Q:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case H:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case X:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return i=e.displayName||null,i!==null?i:b(e.type)||"Memo";case at:i=e._payload,e=e._init;try{return b(e(i))}catch{}}return null}var S=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,V,L;function w(e){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||"",L=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+e+L}var ye=!1;function fe(e,i){if(!e||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(q){var z=q}Reflect.construct(e,[],K)}else{try{K.call()}catch(q){z=q}e.call(K.prototype)}}else{try{throw Error()}catch(q){z=q}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(q){if(q&&z&&typeof q.stack=="string")return[q.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var R=v.split(`
`),M=E.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<M.length&&!M[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===M.length)for(l=R.length-1,h=M.length-1;1<=l&&0<=h&&R[l]!==M[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==M[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==M[h]){var j=`
`+R[l].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=l&&0<=h);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?w(a):""}function tt(e){switch(e.tag){case 26:case 27:case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function _t(e){try{var i="";do i+=tt(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ct(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function qt(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function D(e){if(ct(e)!==e)throw Error(s(188))}function $(e){var i=e.alternate;if(!i){if(i=ct(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return D(h),e;if(d===l)return D(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function ot(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=ot(e),i!==null)return i;e=e.sibling}return null}var et=Array.isArray,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wt={pending:!1,data:null,method:null,action:null},bt=[],de=-1;function xt(e){return{current:e}}function ne(e){0>de||(e.current=bt[de],bt[de]=null,de--)}function Gt(e,i){de++,bt[de]=e.current,e.current=i}var We=xt(null),yi=xt(null),yn=xt(null),tr=xt(null);function er(e,i){switch(Gt(yn,i),Gt(yi,e),Gt(We,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?P_(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=P_(e),i=L_(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ne(We),Gt(We,i)}function vi(){ne(We),ne(yi),ne(yn)}function uo(e){e.memoizedState!==null&&Gt(tr,e);var i=We.current,a=L_(i,e.type);i!==a&&(Gt(yi,e),Gt(We,a))}function Zs(e){yi.current===e&&(ne(We),ne(yi)),tr.current===e&&(ne(tr),cl._currentValue=wt)}var Js=Object.prototype.hasOwnProperty,rs=r.unstable_scheduleCallback,ta=r.unstable_cancelCallback,Th=r.unstable_shouldYield,co=r.unstable_requestPaint,sn=r.unstable_now,Xl=r.unstable_getCurrentPriorityLevel,ve=r.unstable_ImmediatePriority,Ce=r.unstable_UserBlockingPriority,Ei=r.unstable_NormalPriority,$l=r.unstable_LowPriority,ho=r.unstable_IdlePriority,Ah=r.log,ss=r.unstable_setDisableYieldValue,nr=null,Fe=null;function fo(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(nr,e,void 0,(e.current.flags&128)===128)}catch{}}function Gn(e){if(typeof Ah=="function"&&ss(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(nr,e)}catch{}}var Ze=Math.clz32?Math.clz32:Zl,mo=Math.log,Wl=Math.LN2;function Zl(e){return e>>>=0,e===0?32:31-(mo(e)/Wl|0)|0}var Kn=128,ir=4194304;function Pn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vn(e,i){var a=e.pendingLanes;if(a===0)return 0;var l=0,h=e.suspendedLanes,d=e.pingedLanes,v=e.warmLanes;e=e.finishedLanes!==0;var E=a&134217727;return E!==0?(a=E&~h,a!==0?l=Pn(a):(d&=E,d!==0?l=Pn(d):e||(v=E&~v,v!==0&&(l=Pn(v))))):(E=a&~h,E!==0?l=Pn(E):d!==0?l=Pn(d):e||(v=a&~v,v!==0&&(l=Pn(v)))),l===0?0:i!==0&&i!==l&&(i&h)===0&&(h=l&-l,v=i&-i,h>=v||h===32&&(v&4194176)!==0)?i:l}function rr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ea(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function po(){var e=Kn;return Kn<<=1,(Kn&4194176)===0&&(Kn=128),e}function sr(){var e=ir;return ir<<=1,(ir&62914560)===0&&(ir=4194304),e}function na(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function ue(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jl(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,R=e.expirationTimes,M=e.hiddenUpdates;for(a=v&~a;0<a;){var j=31-Ze(a),K=1<<j;E[j]=0,R[j]=-1;var z=M[j];if(z!==null)for(M[j]=null,j=0;j<z.length;j++){var q=z[j];q!==null&&(q.lane&=-536870913)}a&=~K}l!==0&&ar(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function ar(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ze(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194218}function or(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ze(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function tu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function eu(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:ey(e.type))}function lr(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var Qn=Math.random().toString(36).slice(2),De="__reactFiber$"+Qn,Ee="__reactProps$"+Qn,Ti="__reactContainer$"+Qn,as="__reactEvents$"+Qn,ia="__reactListeners$"+Qn,Yn="__reactHandles$"+Qn,go="__reactResources$"+Qn,ur="__reactMarker$"+Qn;function os(e){delete e[De],delete e[Ee],delete e[as],delete e[ia],delete e[Yn]}function Ln(e){var i=e[De];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Ti]||a[De]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=B_(e);e!==null;){if(a=e[De])return a;e=B_(e)}return i}e=a,a=e.parentNode}return null}function Ai(e){if(e=e[De]||e[Ti]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function cr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function hr(e){var i=e[go];return i||(i=e[go]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Zt(e){e[ur]=!0}var _o=new Set,ra={};function un(e,i){an(e,i),an(e+"Capture",i)}function an(e,i){for(ra[e]=i,e=0;e<i.length;e++)_o.add(i[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yo={},vo={};function nu(e){return Js.call(vo,e)?!0:Js.call(yo,e)?!1:Sh.test(e)?vo[e]=!0:(yo[e]=!0,!1)}function fr(e,i,a){if(nu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function dr(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function En(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iu(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function bh(e){var i=iu(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ls(e){e._valueTracker||(e._valueTracker=bh(e))}function Eo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=iu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Si=/[\n"\\]/g;function ie(e){return e.replace(Si,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function mr(e,i,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Je(i)):e.value!==""+Je(i)&&(e.value=""+Je(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?aa(e,v,Je(i)):a!=null?aa(e,v,Je(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Je(E):e.removeAttribute("name")}function us(e,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Je(a):"",i=i!=null?""+Je(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function aa(e,i,a){i==="number"&&sa(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function zt(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Je(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function cs(e,i,a){if(i!=null&&(i=""+Je(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Je(a):""}function pr(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(et(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Je(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Tn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Rh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function To(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||Rh.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function ru(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&To(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&To(e,d,i[d])}function Ao(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ih=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(e){return Ih.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var An=null;function oa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,Ri=null;function wi(e){var i=Ai(e);if(i&&(e=i.stateNode)){var a=e[Ee]||null;t:switch(e=i.stateNode,i.type){case"input":if(mr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[Ee]||null;if(!h)throw Error(s(90));mr(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Eo(l)}break t;case"textarea":cs(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&zt(e,!!a.multiple,i,!1)}}}var So=!1;function su(e,i,a){if(So)return e(i,a);So=!0;try{var l=e(i);return l}finally{if(So=!1,(bi!==null||Ri!==null)&&($u(),bi&&(i=bi,e=Ri,Ri=bi=null,wi(i),e)))for(i=0;i<e.length;i++)wi(e[i])}}function hs(e,i){var a=e.stateNode;if(a===null)return null;var l=a[Ee]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Sn=!1;if(cn)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){Sn=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{Sn=!1}var $n=null,gr=null,Ii=null;function bo(){if(Ii)return Ii;var e,i=gr,a=i.length,l,h="value"in $n?$n.value:$n.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ii=h.slice(e,1<l?1-l:void 0)}function Wn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Zn(){return!0}function Ro(){return!1}function Oe(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Zn:Ro,this.isPropagationStopped=Ro,this}return C(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),i}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=Oe(jt),ds=C({},jt,{view:0,detail:0}),au=Oe(ds),ua,ca,Jn,ms=C({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(ua=e.screenX-Jn.screenX,ca=e.screenY-Jn.screenY):ca=ua=0,Jn=e),ua)},movementY:function(e){return"movementY"in e?e.movementY:ca}}),bn=Oe(ms),ou=C({},ms,{dataTransfer:0}),Ch=Oe(ou),ps=C({},ds,{relatedTarget:0}),ha=Oe(ps),wo=C({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),fa=Oe(wo),lu=C({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),da=Oe(lu),Dh=C({},jt,{data:0}),Io=Oe(Dh),gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Co(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=cu[e])?!!i[e]:!1}function _s(){return Co}var hu=C({},ds,{key:function(e){if(e.key){var i=gs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ma=Oe(hu),fu=C({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Do=Oe(fu),Ci=C({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),du=Oe(Ci),mu=C({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),pu=Oe(mu),gu=C({},ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pa=Oe(gu),tn=C({},jt,{newState:0,oldState:0}),_u=Oe(tn),yu=[9,13,27,32],ti=cn&&"CompositionEvent"in window,c=null;cn&&"documentMode"in document&&(c=document.documentMode);var m=cn&&"TextEvent"in window&&!c,y=cn&&(!ti||c&&8<c&&11>=c),T=" ",U=!1;function B(e,i){switch(e){case"keyup":return yu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function Te(e,i){switch(e){case"compositionend":return Z(i);case"keypress":return i.which!==32?null:(U=!0,T);case"textInput":return e=i.data,e===T&&U?null:e;default:return null}}function Ut(e,i){if(kt)return e==="compositionend"||!ti&&B(e,i)?(e=bo(),Ii=gr=$n=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y&&i.locale!=="ko"?null:i.data;default:return null}}var Ne={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ae(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ne[e.type]:i==="textarea"}function Di(e,i,a,l){bi?Ri?Ri.push(l):Ri=[l]:bi=l,i=ec(i,"onChange"),0<i.length&&(a=new la("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Le=null,ei=null;function Oo(e){N_(e,0)}function vu(e){var i=cr(e);if(Eo(i))return e}function ap(e,i){if(e==="change")return i}var op=!1;if(cn){var Oh;if(cn){var Nh="oninput"in document;if(!Nh){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),Nh=typeof lp.oninput=="function"}Oh=Nh}else Oh=!1;op=Oh&&(!document.documentMode||9<document.documentMode)}function up(){Le&&(Le.detachEvent("onpropertychange",cp),ei=Le=null)}function cp(e){if(e.propertyName==="value"&&vu(ei)){var i=[];Di(i,ei,e,oa(e)),su(Oo,i)}}function U0(e,i,a){e==="focusin"?(up(),Le=i,ei=a,Le.attachEvent("onpropertychange",cp)):e==="focusout"&&up()}function P0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vu(ei)}function L0(e,i){if(e==="click")return vu(i)}function x0(e,i){if(e==="input"||e==="change")return vu(i)}function z0(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var hn=typeof Object.is=="function"?Object.is:z0;function No(e,i){if(hn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Js.call(i,h)||!hn(e[h],i[h]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fp(e,i){var a=hp(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hp(a)}}function dp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?dp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=sa(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=sa(e.document)}return i}function Mh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function B0(e,i){var a=mp(i);i=e.focusedElem;var l=e.selectionRange;if(a!==i&&i&&i.ownerDocument&&dp(i.ownerDocument.documentElement,i)){if(l!==null&&Mh(i)){if(e=l.start,a=l.end,a===void 0&&(a=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(a,i.value.length);else if(a=(e=i.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=fp(i,d);var v=fp(i,l);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(e=e.createRange(),e.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(e),a.extend(v.node,v.offset)):(e.setEnd(v.node,v.offset),a.addRange(e)))}}for(e=[],a=i;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)a=e[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var H0=cn&&"documentMode"in document&&11>=document.documentMode,ga=null,Vh=null,Mo=null,kh=!1;function pp(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kh||ga==null||ga!==sa(l)||(l=ga,"selectionStart"in l&&Mh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Mo&&No(Mo,l)||(Mo=l,l=ec(Vh,"onSelect"),0<l.length&&(i=new la("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ga)))}function ys(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var _a={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},Uh={},gp={};cn&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function vs(e){if(Uh[e])return Uh[e];if(!_a[e])return e;var i=_a[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in gp)return Uh[e]=i[a];return e}var _p=vs("animationend"),yp=vs("animationiteration"),vp=vs("animationstart"),q0=vs("transitionrun"),j0=vs("transitionstart"),F0=vs("transitioncancel"),Ep=vs("transitionend"),Tp=new Map,Ap="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function xn(e,i){Tp.set(e,i),un(i,[e])}var Rn=[],ya=0,Ph=0;function Eu(){for(var e=ya,i=Ph=ya=0;i<e;){var a=Rn[i];Rn[i++]=null;var l=Rn[i];Rn[i++]=null;var h=Rn[i];Rn[i++]=null;var d=Rn[i];if(Rn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Sp(a,h,d)}}function Tu(e,i,a,l){Rn[ya++]=e,Rn[ya++]=i,Rn[ya++]=a,Rn[ya++]=l,Ph|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Lh(e,i,a,l){return Tu(e,i,a,l),Au(e)}function _r(e,i){return Tu(e,null,null,i),Au(e)}function Sp(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;h&&i!==null&&e.tag===3&&(d=e.stateNode,h=31-Ze(a),d=d.hiddenUpdates,e=d[h],e===null?d[h]=[i]:e.push(i),i.lane=a|536870912)}function Au(e){if(50<il)throw il=0,Ff=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var va={},bp=new WeakMap;function wn(e,i){if(typeof e=="object"&&e!==null){var a=bp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:_t(i)},bp.set(e,i),i)}return{value:e,source:i,stack:_t(i)}}var Ea=[],Ta=0,Su=null,bu=0,In=[],Cn=0,Es=null,Oi=1,Ni="";function Ts(e,i){Ea[Ta++]=bu,Ea[Ta++]=Su,Su=e,bu=i}function Rp(e,i,a){In[Cn++]=Oi,In[Cn++]=Ni,In[Cn++]=Es,Es=e;var l=Oi;e=Ni;var h=32-Ze(l)-1;l&=~(1<<h),a+=1;var d=32-Ze(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Oi=1<<32-Ze(i)+h|a<<h|l,Ni=d+e}else Oi=1<<d|a<<h|l,Ni=e}function xh(e){e.return!==null&&(Ts(e,1),Rp(e,1,0))}function zh(e){for(;e===Su;)Su=Ea[--Ta],Ea[Ta]=null,bu=Ea[--Ta],Ea[Ta]=null;for(;e===Es;)Es=In[--Cn],In[Cn]=null,Ni=In[--Cn],In[Cn]=null,Oi=In[--Cn],In[Cn]=null}var en=null,xe=null,Bt=!1,zn=null,ni=!1,Bh=Error(s(519));function As(e){var i=Error(s(418,""));throw Uo(wn(i,e)),Bh}function wp(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[De]=e,i[Ee]=l,a){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(a=0;a<sl.length;a++)Mt(sl[a],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),us(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ls(i);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),pr(i,l.value,l.defaultValue,l.children),ls(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||U_(i.textContent,a)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=nc),i=!0):i=!1,i||As(e)}function Ip(e){for(en=e.return;en;)switch(en.tag){case 3:case 27:ni=!0;return;case 5:case 13:ni=!1;return;default:en=en.return}}function Vo(e){if(e!==en)return!1;if(!Bt)return Ip(e),Bt=!0,!1;var i=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||od(e.type,e.memoizedProps)),a=!a),a&&(i=!0),i&&xe&&As(e),Ip(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){xe=Hn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}xe=null}}else xe=en?Hn(e.stateNode.nextSibling):null;return!0}function ko(){xe=en=null,Bt=!1}function Uo(e){zn===null?zn=[e]:zn.push(e)}var Po=Error(s(460)),Cp=Error(s(474)),Hh={then:function(){}};function Dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ru(){}function Op(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Ru,Ru),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===Po?Error(s(483)):e;default:if(typeof i.status=="string")i.then(Ru,Ru);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===Po?Error(s(483)):e}throw Lo=i,Po}}var Lo=null;function Np(){if(Lo===null)throw Error(s(459));var e=Lo;return Lo=null,e}var Aa=null,xo=0;function wu(e){var i=xo;return xo+=1,Aa===null&&(Aa=[]),Op(Aa,e,i)}function zo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Iu(e,i){throw i.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Mp(e){var i=e._init;return i(e._payload)}function Vp(e){function i(k,N){if(e){var x=k.deletions;x===null?(k.deletions=[N],k.flags|=16):x.push(N)}}function a(k,N){if(!e)return null;for(;N!==null;)i(k,N),N=N.sibling;return null}function l(k){for(var N=new Map;k!==null;)k.key!==null?N.set(k.key,k):N.set(k.index,k),k=k.sibling;return N}function h(k,N){return k=Dr(k,N),k.index=0,k.sibling=null,k}function d(k,N,x){return k.index=x,e?(x=k.alternate,x!==null?(x=x.index,x<N?(k.flags|=33554434,N):x):(k.flags|=33554434,N)):(k.flags|=1048576,N)}function v(k){return e&&k.alternate===null&&(k.flags|=33554434),k}function E(k,N,x,F){return N===null||N.tag!==6?(N=Pf(x,k.mode,F),N.return=k,N):(N=h(N,x),N.return=k,N)}function R(k,N,x,F){var rt=x.type;return rt===g?j(k,N,x.props.children,F,x.key):N!==null&&(N.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===at&&Mp(rt)===N.type)?(N=h(N,x.props),zo(N,x),N.return=k,N):(N=Gu(x.type,x.key,x.props,null,k.mode,F),zo(N,x),N.return=k,N)}function M(k,N,x,F){return N===null||N.tag!==4||N.stateNode.containerInfo!==x.containerInfo||N.stateNode.implementation!==x.implementation?(N=Lf(x,k.mode,F),N.return=k,N):(N=h(N,x.children||[]),N.return=k,N)}function j(k,N,x,F,rt){return N===null||N.tag!==7?(N=Ms(x,k.mode,F,rt),N.return=k,N):(N=h(N,x),N.return=k,N)}function K(k,N,x){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Pf(""+N,k.mode,x),N.return=k,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case f:return x=Gu(N.type,N.key,N.props,null,k.mode,x),zo(x,N),x.return=k,x;case p:return N=Lf(N,k.mode,x),N.return=k,N;case at:var F=N._init;return N=F(N._payload),K(k,N,x)}if(et(N)||mt(N))return N=Ms(N,k.mode,x,null),N.return=k,N;if(typeof N.then=="function")return K(k,wu(N),x);if(N.$$typeof===H)return K(k,qu(k,N),x);Iu(k,N)}return null}function z(k,N,x,F){var rt=N!==null?N.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return rt!==null?null:E(k,N,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case f:return x.key===rt?R(k,N,x,F):null;case p:return x.key===rt?M(k,N,x,F):null;case at:return rt=x._init,x=rt(x._payload),z(k,N,x,F)}if(et(x)||mt(x))return rt!==null?null:j(k,N,x,F,null);if(typeof x.then=="function")return z(k,N,wu(x),F);if(x.$$typeof===H)return z(k,N,qu(k,x),F);Iu(k,x)}return null}function q(k,N,x,F,rt){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return k=k.get(x)||null,E(N,k,""+F,rt);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case f:return k=k.get(F.key===null?x:F.key)||null,R(N,k,F,rt);case p:return k=k.get(F.key===null?x:F.key)||null,M(N,k,F,rt);case at:var Ct=F._init;return F=Ct(F._payload),q(k,N,x,F,rt)}if(et(F)||mt(F))return k=k.get(x)||null,j(N,k,F,rt,null);if(typeof F.then=="function")return q(k,N,x,wu(F),rt);if(F.$$typeof===H)return q(k,N,x,qu(N,F),rt);Iu(N,F)}return null}function st(k,N,x,F){for(var rt=null,Ct=null,ut=N,pt=N=0,ke=null;ut!==null&&pt<x.length;pt++){ut.index>pt?(ke=ut,ut=null):ke=ut.sibling;var Ht=z(k,ut,x[pt],F);if(Ht===null){ut===null&&(ut=ke);break}e&&ut&&Ht.alternate===null&&i(k,ut),N=d(Ht,N,pt),Ct===null?rt=Ht:Ct.sibling=Ht,Ct=Ht,ut=ke}if(pt===x.length)return a(k,ut),Bt&&Ts(k,pt),rt;if(ut===null){for(;pt<x.length;pt++)ut=K(k,x[pt],F),ut!==null&&(N=d(ut,N,pt),Ct===null?rt=ut:Ct.sibling=ut,Ct=ut);return Bt&&Ts(k,pt),rt}for(ut=l(ut);pt<x.length;pt++)ke=q(ut,k,pt,x[pt],F),ke!==null&&(e&&ke.alternate!==null&&ut.delete(ke.key===null?pt:ke.key),N=d(ke,N,pt),Ct===null?rt=ke:Ct.sibling=ke,Ct=ke);return e&&ut.forEach(function(Pr){return i(k,Pr)}),Bt&&Ts(k,pt),rt}function At(k,N,x,F){if(x==null)throw Error(s(151));for(var rt=null,Ct=null,ut=N,pt=N=0,ke=null,Ht=x.next();ut!==null&&!Ht.done;pt++,Ht=x.next()){ut.index>pt?(ke=ut,ut=null):ke=ut.sibling;var Pr=z(k,ut,Ht.value,F);if(Pr===null){ut===null&&(ut=ke);break}e&&ut&&Pr.alternate===null&&i(k,ut),N=d(Pr,N,pt),Ct===null?rt=Pr:Ct.sibling=Pr,Ct=Pr,ut=ke}if(Ht.done)return a(k,ut),Bt&&Ts(k,pt),rt;if(ut===null){for(;!Ht.done;pt++,Ht=x.next())Ht=K(k,Ht.value,F),Ht!==null&&(N=d(Ht,N,pt),Ct===null?rt=Ht:Ct.sibling=Ht,Ct=Ht);return Bt&&Ts(k,pt),rt}for(ut=l(ut);!Ht.done;pt++,Ht=x.next())Ht=q(ut,k,pt,Ht.value,F),Ht!==null&&(e&&Ht.alternate!==null&&ut.delete(Ht.key===null?pt:Ht.key),N=d(Ht,N,pt),Ct===null?rt=Ht:Ct.sibling=Ht,Ct=Ht);return e&&ut.forEach(function(rS){return i(k,rS)}),Bt&&Ts(k,pt),rt}function ae(k,N,x,F){if(typeof x=="object"&&x!==null&&x.type===g&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case f:t:{for(var rt=x.key;N!==null;){if(N.key===rt){if(rt=x.type,rt===g){if(N.tag===7){a(k,N.sibling),F=h(N,x.props.children),F.return=k,k=F;break t}}else if(N.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===at&&Mp(rt)===N.type){a(k,N.sibling),F=h(N,x.props),zo(F,x),F.return=k,k=F;break t}a(k,N);break}else i(k,N);N=N.sibling}x.type===g?(F=Ms(x.props.children,k.mode,F,x.key),F.return=k,k=F):(F=Gu(x.type,x.key,x.props,null,k.mode,F),zo(F,x),F.return=k,k=F)}return v(k);case p:t:{for(rt=x.key;N!==null;){if(N.key===rt)if(N.tag===4&&N.stateNode.containerInfo===x.containerInfo&&N.stateNode.implementation===x.implementation){a(k,N.sibling),F=h(N,x.children||[]),F.return=k,k=F;break t}else{a(k,N);break}else i(k,N);N=N.sibling}F=Lf(x,k.mode,F),F.return=k,k=F}return v(k);case at:return rt=x._init,x=rt(x._payload),ae(k,N,x,F)}if(et(x))return st(k,N,x,F);if(mt(x)){if(rt=mt(x),typeof rt!="function")throw Error(s(150));return x=rt.call(x),At(k,N,x,F)}if(typeof x.then=="function")return ae(k,N,wu(x),F);if(x.$$typeof===H)return ae(k,N,qu(k,x),F);Iu(k,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,N!==null&&N.tag===6?(a(k,N.sibling),F=h(N,x),F.return=k,k=F):(a(k,N),F=Pf(x,k.mode,F),F.return=k,k=F),v(k)):a(k,N)}return function(k,N,x,F){try{xo=0;var rt=ae(k,N,x,F);return Aa=null,rt}catch(ut){if(ut===Po)throw ut;var Ct=Mn(29,ut,null,k.mode);return Ct.lanes=F,Ct.return=k,Ct}finally{}}}var Ss=Vp(!0),kp=Vp(!1),Sa=xt(null),Cu=xt(0);function Up(e,i){e=qi,Gt(Cu,e),Gt(Sa,i),qi=e|i.baseLanes}function qh(){Gt(Cu,qi),Gt(Sa,Sa.current)}function jh(){qi=Cu.current,ne(Sa),ne(Cu)}var Dn=xt(null),ii=null;function yr(e){var i=e.alternate;Gt(Se,Se.current&1),Gt(Dn,e),ii===null&&(i===null||Sa.current!==null||i.memoizedState!==null)&&(ii=e)}function Pp(e){if(e.tag===22){if(Gt(Se,Se.current),Gt(Dn,e),ii===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ii=e)}}else vr()}function vr(){Gt(Se,Se.current),Gt(Dn,Dn.current)}function Mi(e){ne(Dn),ii===e&&(ii=null),ne(Se)}var Se=xt(0);function Du(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var G0=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},K0=r.unstable_scheduleCallback,Q0=r.unstable_NormalPriority,be={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fh(){return{controller:new G0,data:new Map,refCount:0}}function Bo(e){e.refCount--,e.refCount===0&&K0(Q0,function(){e.controller.abort()})}var Ho=null,Gh=0,ba=0,Ra=null;function Y0(e,i){if(Ho===null){var a=Ho=[];Gh=0,ba=Zf(),Ra={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Gh++,i.then(Lp,Lp),i}function Lp(){if(--Gh===0&&Ho!==null){Ra!==null&&(Ra.status="fulfilled");var e=Ho;Ho=null,ba=0,Ra=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function X0(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var xp=S.S;S.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Y0(e,i),xp!==null&&xp(e,i)};var bs=xt(null);function Kh(){var e=bs.current;return e!==null?e:Xt.pooledCache}function Ou(e,i){i===null?Gt(bs,bs.current):Gt(bs,i.pool)}function zp(){var e=Kh();return e===null?null:{parent:be._currentValue,pool:e}}var Er=0,It=null,Kt=null,me=null,Nu=!1,wa=!1,Rs=!1,Mu=0,qo=0,Ia=null,$0=0;function ce(){throw Error(s(321))}function Qh(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!hn(e[a],i[a]))return!1;return!0}function Yh(e,i,a,l,h,d){return Er=d,It=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,S.H=e===null||e.memoizedState===null?ws:Tr,Rs=!1,d=a(l,h),Rs=!1,wa&&(d=Hp(i,a,l,h)),Bp(e),d}function Bp(e){S.H=ri;var i=Kt!==null&&Kt.next!==null;if(Er=0,me=Kt=It=null,Nu=!1,qo=0,Ia=null,i)throw Error(s(300));e===null||Me||(e=e.dependencies,e!==null&&Hu(e)&&(Me=!0))}function Hp(e,i,a,l){It=e;var h=0;do{if(wa&&(Ia=null),qo=0,wa=!1,25<=h)throw Error(s(301));if(h+=1,me=Kt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=Is,d=i(a,l)}while(wa);return d}function W0(){var e=S.H,i=e.useState()[0];return i=typeof i.then=="function"?jo(i):i,e=e.useState()[0],(Kt!==null?Kt.memoizedState:null)!==e&&(It.flags|=1024),i}function Xh(){var e=Mu!==0;return Mu=0,e}function $h(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Wh(e){if(Nu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Nu=!1}Er=0,me=Kt=It=null,wa=!1,qo=Mu=0,Ia=null}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?It.memoizedState=me=e:me=me.next=e,me}function pe(){if(Kt===null){var e=It.alternate;e=e!==null?e.memoizedState:null}else e=Kt.next;var i=me===null?It.memoizedState:me.next;if(i!==null)me=i,Kt=e;else{if(e===null)throw It.alternate===null?Error(s(467)):Error(s(310));Kt=e,e={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},me===null?It.memoizedState=me=e:me=me.next=e}return me}var Vu;Vu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function jo(e){var i=qo;return qo+=1,Ia===null&&(Ia=[]),e=Op(Ia,e,i),i=It,(me===null?i.memoizedState:me.next)===null&&(i=i.alternate,S.H=i===null||i.memoizedState===null?ws:Tr),e}function ku(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===H)return Ge(e)}throw Error(s(438,String(e)))}function Zh(e){var i=null,a=It.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=It.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Vu(),It.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=vt;return i.index++,a}function Vi(e,i){return typeof i=="function"?i(e):i}function Uu(e){var i=pe();return Jh(i,Kt,e)}function Jh(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,R=null,M=i,j=!1;do{var K=M.lane&-536870913;if(K!==M.lane?(Pt&K)===K:(Er&K)===K){var z=M.revertLane;if(z===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),K===ba&&(j=!0);else if((Er&z)===z){M=M.next,z===ba&&(j=!0);continue}else K={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},R===null?(E=R=K,v=d):R=R.next=K,It.lanes|=z,Or|=z;K=M.action,Rs&&a(d,K),d=M.hasEagerState?M.eagerState:a(d,K)}else z={lane:K,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},R===null?(E=R=z,v=d):R=R.next=z,It.lanes|=K,Or|=K;M=M.next}while(M!==null&&M!==i);if(R===null?v=d:R.next=E,!hn(d,e.memoizedState)&&(Me=!0,j&&(a=Ra,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function tf(e){var i=pe(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);hn(d,i.memoizedState)||(Me=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function qp(e,i,a){var l=It,h=pe(),d=Bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!hn((Kt||h).memoizedState,a);if(v&&(h.memoizedState=a,Me=!0),h=h.queue,rf(Gp.bind(null,l,h,e),[e]),h.getSnapshot!==i||v||me!==null&&me.memoizedState.tag&1){if(l.flags|=2048,Ca(9,Fp.bind(null,l,h,a,i),{destroy:void 0},null),Xt===null)throw Error(s(349));d||(Er&60)!==0||jp(l,i,a)}return a}function jp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=It.updateQueue,i===null?(i=Vu(),It.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Fp(e,i,a,l){i.value=a,i.getSnapshot=l,Kp(i)&&Qp(e)}function Gp(e,i,a){return a(function(){Kp(i)&&Qp(e)})}function Kp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!hn(e,a)}catch{return!0}}function Qp(e){var i=_r(e,2);i!==null&&nn(i,e,2)}function ef(e){var i=on();if(typeof e=="function"){var a=e;if(e=a(),Rs){Gn(!0);try{a()}finally{Gn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},i}function Yp(e,i,a,l){return e.baseState=a,Jh(e,Kt,typeof l=="function"?l:Vi)}function Z0(e,i,a,l,h){if(xu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};S.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Xp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Xp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=S.T,v={};S.T=v;try{var E=a(h,l),R=S.S;R!==null&&R(v,E),$p(e,i,E)}catch(M){nf(e,i,M)}finally{S.T=d}}else try{d=a(h,l),$p(e,i,d)}catch(M){nf(e,i,M)}}function $p(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Wp(e,i,l)},function(l){return nf(e,i,l)}):Wp(e,i,a)}function Wp(e,i,a){i.status="fulfilled",i.value=a,Zp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Xp(e,a)))}function nf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Zp(i),i=i.next;while(i!==l)}e.action=null}function Zp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Jp(e,i){return i}function tg(e,i){if(Bt){var a=Xt.formState;if(a!==null){t:{var l=It;if(Bt){if(xe){e:{for(var h=xe,d=ni;h.nodeType!==8;){if(!d){h=null;break e}if(h=Hn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){xe=Hn(h.nextSibling),l=h.data==="F!";break t}}As(l)}l=!1}l&&(i=a[0])}}return a=on(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:i},a.queue=l,a=yg.bind(null,It,l),l.dispatch=a,l=ef(!1),d=uf.bind(null,It,!1,l.queue),l=on(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=Z0.bind(null,It,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function eg(e){var i=pe();return ng(i,Kt,e)}function ng(e,i,a){i=Jh(e,i,Jp)[0],e=Uu(Vi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?jo(i):i;var l=pe(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(It.flags|=2048,Ca(9,J0.bind(null,h,a),{destroy:void 0},null)),[i,d,e]}function J0(e,i){e.action=i}function ig(e){var i=pe(),a=Kt;if(a!==null)return ng(i,a,e);pe(),i=i.memoizedState,a=pe();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Ca(e,i,a,l){return e={tag:e,create:i,inst:a,deps:l,next:null},i=It.updateQueue,i===null&&(i=Vu(),It.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function rg(){return pe().memoizedState}function Pu(e,i,a,l){var h=on();It.flags|=e,h.memoizedState=Ca(1|i,a,{destroy:void 0},l===void 0?null:l)}function Lu(e,i,a,l){var h=pe();l=l===void 0?null:l;var d=h.memoizedState.inst;Kt!==null&&l!==null&&Qh(l,Kt.memoizedState.deps)?h.memoizedState=Ca(i,a,d,l):(It.flags|=e,h.memoizedState=Ca(1|i,a,d,l))}function sg(e,i){Pu(8390656,8,e,i)}function rf(e,i){Lu(2048,8,e,i)}function ag(e,i){return Lu(4,2,e,i)}function og(e,i){return Lu(4,4,e,i)}function lg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function ug(e,i,a){a=a!=null?a.concat([e]):null,Lu(4,4,lg.bind(null,i,e),a)}function sf(){}function cg(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Qh(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function hg(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Qh(i,l[1]))return l[0];if(l=e(),Rs){Gn(!0);try{e()}finally{Gn(!1)}}return a.memoizedState=[l,i],l}function af(e,i,a){return a===void 0||(Er&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=d_(),It.lanes|=e,Or|=e,a)}function fg(e,i,a,l){return hn(a,i)?a:Sa.current!==null?(e=af(e,a,l),hn(e,i)||(Me=!0),e):(Er&42)===0?(Me=!0,e.memoizedState=a):(e=d_(),It.lanes|=e,Or|=e,i)}function dg(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=S.T,E={};S.T=E,uf(e,!1,i,a);try{var R=h(),M=S.S;if(M!==null&&M(E,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var j=X0(R,l);Fo(e,i,j,pn(e))}else Fo(e,i,l,pn(e))}catch(K){Fo(e,i,{then:function(){},status:"rejected",reason:K},pn())}finally{nt.p=d,S.T=v}}function tA(){}function of(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=mg(e).queue;dg(e,h,i,wt,a===null?tA:function(){return pg(e),a(l)})}function mg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:wt,baseState:wt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:wt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function pg(e){var i=mg(e).next.queue;Fo(e,i,{},pn())}function lf(){return Ge(cl)}function gg(){return pe().memoizedState}function _g(){return pe().memoizedState}function eA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=pn();e=br(a);var l=Rr(i,e,a);l!==null&&(nn(l,i,a),Qo(l,i,a)),i={cache:Fh()},e.payload=i;return}i=i.return}}function nA(e,i,a){var l=pn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},xu(e)?vg(i,a):(a=Lh(e,i,a,l),a!==null&&(nn(a,e,l),Eg(a,i,l)))}function yg(e,i,a){var l=pn();Fo(e,i,a,l)}function Fo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(xu(e))vg(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,hn(E,v))return Tu(e,i,h,0),Xt===null&&Eu(),!1}catch{}finally{}if(a=Lh(e,i,h,l),a!==null)return nn(a,e,l),Eg(a,i,l),!0}return!1}function uf(e,i,a,l){if(l={lane:2,revertLane:Zf(),action:l,hasEagerState:!1,eagerState:null,next:null},xu(e)){if(i)throw Error(s(479))}else i=Lh(e,a,l,2),i!==null&&nn(i,e,2)}function xu(e){var i=e.alternate;return e===It||i!==null&&i===It}function vg(e,i){wa=Nu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Eg(e,i,a){if((a&4194176)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,or(e,a)}}var ri={readContext:Ge,use:ku,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce};ri.useCacheRefresh=ce,ri.useMemoCache=ce,ri.useHostTransitionStatus=ce,ri.useFormState=ce,ri.useActionState=ce,ri.useOptimistic=ce;var ws={readContext:Ge,use:ku,useCallback:function(e,i){return on().memoizedState=[e,i===void 0?null:i],e},useContext:Ge,useEffect:sg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Pu(4194308,4,lg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Pu(4194308,4,e,i)},useInsertionEffect:function(e,i){Pu(4,2,e,i)},useMemo:function(e,i){var a=on();i=i===void 0?null:i;var l=e();if(Rs){Gn(!0);try{e()}finally{Gn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=on();if(a!==void 0){var h=a(i);if(Rs){Gn(!0);try{a(i)}finally{Gn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=nA.bind(null,It,e),[l.memoizedState,e]},useRef:function(e){var i=on();return e={current:e},i.memoizedState=e},useState:function(e){e=ef(e);var i=e.queue,a=yg.bind(null,It,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(e,i){var a=on();return af(a,e,i)},useTransition:function(){var e=ef(!1);return e=dg.bind(null,It,e.queue,!0,!1),on().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=It,h=on();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Xt===null)throw Error(s(349));(Pt&60)!==0||jp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,sg(Gp.bind(null,l,d,e),[e]),l.flags|=2048,Ca(9,Fp.bind(null,l,d,a,i),{destroy:void 0},null),a},useId:function(){var e=on(),i=Xt.identifierPrefix;if(Bt){var a=Ni,l=Oi;a=(l&~(1<<32-Ze(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Mu++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=$0++,i=":"+i+"r"+a.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return on().memoizedState=eA.bind(null,It)}};ws.useMemoCache=Zh,ws.useHostTransitionStatus=lf,ws.useFormState=tg,ws.useActionState=tg,ws.useOptimistic=function(e){var i=on();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=uf.bind(null,It,!0,a),a.dispatch=i,[e,i]};var Tr={readContext:Ge,use:ku,useCallback:cg,useContext:Ge,useEffect:rf,useImperativeHandle:ug,useInsertionEffect:ag,useLayoutEffect:og,useMemo:hg,useReducer:Uu,useRef:rg,useState:function(){return Uu(Vi)},useDebugValue:sf,useDeferredValue:function(e,i){var a=pe();return fg(a,Kt.memoizedState,e,i)},useTransition:function(){var e=Uu(Vi)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:qp,useId:gg};Tr.useCacheRefresh=_g,Tr.useMemoCache=Zh,Tr.useHostTransitionStatus=lf,Tr.useFormState=eg,Tr.useActionState=eg,Tr.useOptimistic=function(e,i){var a=pe();return Yp(a,Kt,e,i)};var Is={readContext:Ge,use:ku,useCallback:cg,useContext:Ge,useEffect:rf,useImperativeHandle:ug,useInsertionEffect:ag,useLayoutEffect:og,useMemo:hg,useReducer:tf,useRef:rg,useState:function(){return tf(Vi)},useDebugValue:sf,useDeferredValue:function(e,i){var a=pe();return Kt===null?af(a,e,i):fg(a,Kt.memoizedState,e,i)},useTransition:function(){var e=tf(Vi)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:qp,useId:gg};Is.useCacheRefresh=_g,Is.useMemoCache=Zh,Is.useHostTransitionStatus=lf,Is.useFormState=ig,Is.useActionState=ig,Is.useOptimistic=function(e,i){var a=pe();return Kt!==null?Yp(a,Kt,e,i):(a.baseState=e,[e,a.queue.dispatch])};function cf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:C({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var hf={isMounted:function(e){return(e=e._reactInternals)?ct(e)===e:!1},enqueueSetState:function(e,i,a){e=e._reactInternals;var l=pn(),h=br(l);h.payload=i,a!=null&&(h.callback=a),i=Rr(e,h,l),i!==null&&(nn(i,e,l),Qo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=pn(),h=br(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Rr(e,h,l),i!==null&&(nn(i,e,l),Qo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=pn(),l=br(a);l.tag=2,i!=null&&(l.callback=i),i=Rr(e,l,a),i!==null&&(nn(i,e,a),Qo(i,e,a))}};function Tg(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!No(a,l)||!No(h,d):!0}function Ag(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&hf.enqueueReplaceState(i,i.state,null)}function Cs(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=C({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var zu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Sg(e){zu(e)}function bg(e){console.error(e)}function Rg(e){zu(e)}function Bu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function wg(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function ff(e,i,a){return a=br(a),a.tag=3,a.payload={element:null},a.callback=function(){Bu(e,i)},a}function Ig(e){return e=br(e),e.tag=3,e}function Cg(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){wg(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){wg(i,a,l),typeof h!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function iA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Ko(i,a,h,!0),a=Dn.current,a!==null){switch(a.tag){case 13:return ii===null?Qf():a.alternate===null&&se===0&&(se=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Hh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Xf(e,l,h)),!1;case 22:return a.flags|=65536,l===Hh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Xf(e,l,h)),!1}throw Error(s(435,a.tag))}return Xf(e,l,h),Qf(),!1}if(Bt)return i=Dn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Bh&&(e=Error(s(422),{cause:l}),Uo(wn(e,a)))):(l!==Bh&&(i=Error(s(423),{cause:l}),Uo(wn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=wn(l,a),h=ff(e.stateNode,l,h),If(e,h),se!==4&&(se=2)),!1;var d=Error(s(520),{cause:l});if(d=wn(d,a),el===null?el=[d]:el.push(d),se!==4&&(se=2),i===null)return!0;l=wn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=ff(a.stateNode,l,e),If(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Nr===null||!Nr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Ig(h),Cg(h,e,a,l),If(a,h),!1}a=a.return}while(a!==null);return!1}var Dg=Error(s(461)),Me=!1;function ze(e,i,a,l){i.child=e===null?kp(i,null,a,l):Ss(i,e.child,a,l)}function Og(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return Os(i),l=Yh(e,i,a,v,d,h),E=Xh(),e!==null&&!Me?($h(e,i,h),ki(e,i,h)):(Bt&&E&&xh(i),i.flags|=1,ze(e,i,l,h),i.child)}function Ng(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Uf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Mg(e,i,d,l,h)):(e=Gu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Tf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(v,l)&&e.ref===i.ref)return ki(e,i,h)}return i.flags|=1,e=Dr(d,l),e.ref=i.ref,e.return=i,i.child=e}function Mg(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(No(d,l)&&e.ref===i.ref)if(Me=!1,i.pendingProps=l=d,Tf(e,h))(e.flags&131072)!==0&&(Me=!0);else return i.lanes=e.lanes,ki(e,i,h)}return df(e,i,a,l,h)}function Vg(e,i,a){var l=i.pendingProps,h=l.children,d=(i.stateNode._pendingVisibility&2)!==0,v=e!==null?e.memoizedState:null;if(Go(e,i),l.mode==="hidden"||d){if((i.flags&128)!==0){if(l=v!==null?v.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return kg(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ou(i,v!==null?v.cachePool:null),v!==null?Up(i,v):qh(),Pp(i);else return i.lanes=i.childLanes=536870912,kg(e,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(Ou(i,v.cachePool),Up(i,v),vr(),i.memoizedState=null):(e!==null&&Ou(i,null),qh(),vr());return ze(e,i,h,a),i.child}function kg(e,i,a,l){var h=Kh();return h=h===null?null:{parent:be._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Ou(i,null),qh(),Pp(i),e!==null&&Ko(e,i,l,!0),null}function Go(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=2097664)}}function df(e,i,a,l,h){return Os(i),a=Yh(e,i,a,l,void 0,h),l=Xh(),e!==null&&!Me?($h(e,i,h),ki(e,i,h)):(Bt&&l&&xh(i),i.flags|=1,ze(e,i,a,h),i.child)}function Ug(e,i,a,l,h,d){return Os(i),i.updateQueue=null,a=Hp(i,l,a,h),Bp(e),l=Xh(),e!==null&&!Me?($h(e,i,d),ki(e,i,d)):(Bt&&l&&xh(i),i.flags|=1,ze(e,i,a,d),i.child)}function Pg(e,i,a,l,h){if(Os(i),i.stateNode===null){var d=va,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ge(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=hf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Rf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ge(v):va,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(cf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&hf.enqueueReplaceState(d,d.state,null),Xo(i,l,d,h),Yo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,R=Cs(a,E);d.props=R;var M=d.context,j=a.contextType;v=va,typeof j=="object"&&j!==null&&(v=Ge(j));var K=a.getDerivedStateFromProps;j=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,j||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||M!==v)&&Ag(i,d,l,v),Sr=!1;var z=i.memoizedState;d.state=z,Xo(i,l,d,h),Yo(),M=i.memoizedState,E||z!==M||Sr?(typeof K=="function"&&(cf(i,a,K,l),M=i.memoizedState),(R=Sr||Tg(i,a,R,l,z,M,v))?(j||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=M),d.props=l,d.state=M,d.context=v,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,wf(e,i),v=i.memoizedProps,j=Cs(a,v),d.props=j,K=i.pendingProps,z=d.context,M=a.contextType,R=va,typeof M=="object"&&M!==null&&(R=Ge(M)),E=a.getDerivedStateFromProps,(M=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==K||z!==R)&&Ag(i,d,l,R),Sr=!1,z=i.memoizedState,d.state=z,Xo(i,l,d,h),Yo();var q=i.memoizedState;v!==K||z!==q||Sr||e!==null&&e.dependencies!==null&&Hu(e.dependencies)?(typeof E=="function"&&(cf(i,a,E,l),q=i.memoizedState),(j=Sr||Tg(i,a,j,l,z,q,R)||e!==null&&e.dependencies!==null&&Hu(e.dependencies))?(M||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=R,l=j):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Go(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ss(i,e.child,null,h),i.child=Ss(i,null,a,h)):ze(e,i,a,h),i.memoizedState=d.state,e=i.child):e=ki(e,i,h),e}function Lg(e,i,a,l){return ko(),i.flags|=256,ze(e,i,a,l),i.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function pf(e){return{baseLanes:e,cachePool:zp()}}function gf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Vn),e}function xg(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(h?yr(i):vr(),Bt){var E=xe,R;if(R=E){t:{for(R=E,E=ni;R.nodeType!==8;){if(!E){E=null;break t}if(R=Hn(R.nextSibling),R===null){E=null;break t}}E=R}E!==null?(i.memoizedState={dehydrated:E,treeContext:Es!==null?{id:Oi,overflow:Ni}:null,retryLane:536870912},R=Mn(18,null,null,0),R.stateNode=E,R.return=i,i.child=R,en=i,xe=null,R=!0):R=!1}R||As(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?i.lanes=16:i.lanes=536870912,null;Mi(i)}return E=l.children,l=l.fallback,h?(vr(),h=i.mode,E=yf({mode:"hidden",children:E},h),l=Ms(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=pf(a),h.childLanes=gf(e,v,a),i.memoizedState=mf,l):(yr(i),_f(i,E))}if(R=e.memoizedState,R!==null&&(E=R.dehydrated,E!==null)){if(d)i.flags&256?(yr(i),i.flags&=-257,i=vf(e,i,a)):i.memoizedState!==null?(vr(),i.child=e.child,i.flags|=128,i=null):(vr(),h=l.fallback,E=i.mode,l=yf({mode:"visible",children:l.children},E),h=Ms(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ss(i,e.child,null,a),l=i.child,l.memoizedState=pf(a),l.childLanes=gf(e,v,a),i.memoizedState=mf,i=h);else if(yr(i),E.data==="$!"){if(v=E.nextSibling&&E.nextSibling.dataset,v)var M=v.dgst;v=M,l=Error(s(419)),l.stack="",l.digest=v,Uo({value:l,source:null,stack:null}),i=vf(e,i,a)}else if(Me||Ko(e,i,a,!1),v=(a&e.childLanes)!==0,Me||v){if(v=Xt,v!==null){if(l=a&-a,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==R.retryLane)throw R.retryLane=l,_r(e,l),nn(v,e,l),Dg}E.data==="$?"||Qf(),i=vf(e,i,a)}else E.data==="$?"?(i.flags|=128,i.child=e.child,i=yA.bind(null,e),E._reactRetry=i,i=null):(e=R.treeContext,xe=Hn(E.nextSibling),en=i,Bt=!0,zn=null,ni=!1,e!==null&&(In[Cn++]=Oi,In[Cn++]=Ni,In[Cn++]=Es,Oi=e.id,Ni=e.overflow,Es=i),i=_f(i,l.children),i.flags|=4096);return i}return h?(vr(),h=l.fallback,E=i.mode,R=e.child,M=R.sibling,l=Dr(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&31457280,M!==null?h=Dr(M,h):(h=Ms(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=e.child.memoizedState,E===null?E=pf(a):(R=E.cachePool,R!==null?(M=be._currentValue,R=R.parent!==M?{parent:M,pool:M}:R):R=zp(),E={baseLanes:E.baseLanes|a,cachePool:R}),h.memoizedState=E,h.childLanes=gf(e,v,a),i.memoizedState=mf,l):(yr(i),a=e.child,e=a.sibling,a=Dr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function _f(e,i){return i=yf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function yf(e,i){return c_(e,i,0,null)}function vf(e,i,a){return Ss(i,e.child,null,a),e=_f(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function zg(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Sf(e.return,i,a)}function Ef(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Bg(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(ze(e,i,l.children,a),l=Se.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zg(e,a,i);else if(e.tag===19)zg(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Gt(Se,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Du(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Ef(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Du(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Ef(i,!0,a,null,d);break;case"together":Ef(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ki(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Or|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Ko(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Dr(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Dr(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Tf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Hu(e)))}function rA(e,i,a){switch(i.tag){case 3:er(i,i.stateNode.containerInfo),Ar(i,be,e.memoizedState.cache),ko();break;case 27:case 5:uo(i);break;case 4:er(i,i.stateNode.containerInfo);break;case 10:Ar(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(yr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?xg(e,i,a):(yr(i),e=ki(e,i,a),e!==null?e.sibling:null);yr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Ko(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Bg(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Gt(Se,Se.current),l)break;return null;case 22:case 23:return i.lanes=0,Vg(e,i,a);case 24:Ar(i,be,e.memoizedState.cache)}return ki(e,i,a)}function Hg(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Me=!0;else{if(!Tf(e,a)&&(i.flags&128)===0)return Me=!1,rA(e,i,a);Me=(e.flags&131072)!==0}else Me=!1,Bt&&(i.flags&1048576)!==0&&Rp(i,bu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Uf(l)?(e=Cs(l,e),i.tag=1,i=Pg(null,i,l,e,a)):(i.tag=0,i=df(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===X){i.tag=11,i=Og(null,i,l,e,a);break t}else if(h===ft){i.tag=14,i=Ng(null,i,l,e,a);break t}}throw i=b(l)||l,Error(s(306,i,""))}}return i;case 0:return df(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Cs(l,i.pendingProps),Pg(e,i,l,h,a);case 3:t:{if(er(i,i.stateNode.containerInfo),e===null)throw Error(s(387));var d=i.pendingProps;h=i.memoizedState,l=h.element,wf(e,i),Xo(i,d,null,a);var v=i.memoizedState;if(d=v.cache,Ar(i,be,d),d!==h.cache&&bf(i,[be],a,!0),Yo(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Lg(e,i,d,a);break t}else if(d!==l){l=wn(Error(s(424)),i),Uo(l),i=Lg(e,i,d,a);break t}else for(xe=Hn(i.stateNode.containerInfo.firstChild),en=i,Bt=!0,zn=null,ni=!0,a=kp(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ko(),d===l){i=ki(e,i,a);break t}ze(e,i,d,a)}i=i.child}return i;case 26:return Go(e,i),e===null?(a=F_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Bt||(a=i.type,e=i.pendingProps,l=ic(yn.current).createElement(a),l[De]=i,l[Ee]=e,Be(l,a,e),Zt(l),i.stateNode=l):i.memoizedState=F_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return uo(i),e===null&&Bt&&(l=i.stateNode=H_(i.type,i.pendingProps,yn.current),en=i,ni=!0,xe=Hn(l.firstChild)),l=i.pendingProps.children,e!==null||Bt?ze(e,i,l,a):i.child=Ss(i,null,l,a),Go(e,i),i.child;case 5:return e===null&&Bt&&((h=l=xe)&&(l=kA(l,i.type,i.pendingProps,ni),l!==null?(i.stateNode=l,en=i,xe=Hn(l.firstChild),ni=!1,h=!0):h=!1),h||As(i)),uo(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,od(h,d)?l=null:v!==null&&od(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Yh(e,i,W0,null,null,a),cl._currentValue=h),Go(e,i),ze(e,i,l,a),i.child;case 6:return e===null&&Bt&&((e=a=xe)&&(a=UA(a,i.pendingProps,ni),a!==null?(i.stateNode=a,en=i,xe=null,e=!0):e=!1),e||As(i)),null;case 13:return xg(e,i,a);case 4:return er(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ss(i,null,l,a):ze(e,i,l,a),i.child;case 11:return Og(e,i,i.type,i.pendingProps,a);case 7:return ze(e,i,i.pendingProps,a),i.child;case 8:return ze(e,i,i.pendingProps.children,a),i.child;case 12:return ze(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Ar(i,i.type,l.value),ze(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Os(i),h=Ge(h),l=l(h),i.flags|=1,ze(e,i,l,a),i.child;case 14:return Ng(e,i,i.type,i.pendingProps,a);case 15:return Mg(e,i,i.type,i.pendingProps,a);case 19:return Bg(e,i,a);case 22:return Vg(e,i,a);case 24:return Os(i),l=Ge(be),e===null?(h=Kh(),h===null&&(h=Xt,d=Fh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Rf(i),Ar(i,be,h)):((e.lanes&a)!==0&&(wf(e,i),Xo(i,null,null,a),Yo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ar(i,be,l)):(l=d.cache,Ar(i,be,l),l!==h.cache&&bf(i,[be],a,!0))),ze(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}var Af=xt(null),Ds=null,Ui=null;function Ar(e,i,a){Gt(Af,i._currentValue),i._currentValue=a}function Pi(e){e._currentValue=Af.current,ne(Af)}function Sf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function bf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var R=0;R<i.length;R++)if(E.context===i[R]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),Sf(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Sf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Ko(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;hn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===tr.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}h=h.return}e!==null&&bf(i,e,a,l),i.flags|=262144}function Hu(e){for(e=e.firstContext;e!==null;){if(!hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Os(e){Ds=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return qg(Ds,e)}function qu(e,i){return Ds===null&&Os(e),qg(e,i)}function qg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Ui===null){if(e===null)throw Error(s(308));Ui=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ui=Ui.next=i;return a}var Sr=!1;function Rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function br(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(te&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Au(e),Sp(e,null,a),i}return Tu(e,l,i,a),Au(e)}function Qo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,or(e,a)}}function If(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Cf=!1;function Yo(){if(Cf){var e=Ra;if(e!==null)throw e}}function Xo(e,i,a,l){Cf=!1;var h=e.updateQueue;Sr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var R=E,M=R.next;R.next=null,v===null?d=M:v.next=M,v=R;var j=e.alternate;j!==null&&(j=j.updateQueue,E=j.lastBaseUpdate,E!==v&&(E===null?j.firstBaseUpdate=M:E.next=M,j.lastBaseUpdate=R))}if(d!==null){var K=h.baseState;v=0,j=M=R=null,E=d;do{var z=E.lane&-536870913,q=z!==E.lane;if(q?(Pt&z)===z:(l&z)===z){z!==0&&z===ba&&(Cf=!0),j!==null&&(j=j.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var st=e,At=E;z=i;var ae=a;switch(At.tag){case 1:if(st=At.payload,typeof st=="function"){K=st.call(ae,K,z);break t}K=st;break t;case 3:st.flags=st.flags&-65537|128;case 0:if(st=At.payload,z=typeof st=="function"?st.call(ae,K,z):st,z==null)break t;K=C({},K,z);break t;case 2:Sr=!0}}z=E.callback,z!==null&&(e.flags|=64,q&&(e.flags|=8192),q=h.callbacks,q===null?h.callbacks=[z]:q.push(z))}else q={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},j===null?(M=j=q,R=K):j=j.next=q,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;q=E,E=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);j===null&&(R=K),h.baseState=R,h.firstBaseUpdate=M,h.lastBaseUpdate=j,d===null&&(h.shared.lanes=0),Or|=v,e.lanes=v,e.memoizedState=K}}function jg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Fg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jg(a[e],i)}function $o(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){Yt(i,i.return,E)}}function wr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var R=a;try{E()}catch(M){Yt(h,R,M)}}}l=l.next}while(l!==d)}}catch(M){Yt(i,i.return,M)}}function Gg(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Fg(i,a)}catch(l){Yt(e,e.return,l)}}}function Kg(e,i,a){a.props=Cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Yt(e,i,l)}}function Ns(e,i){try{var a=e.ref;if(a!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?e.refCleanup=a(h):a.current=h}}catch(d){Yt(e,i,d)}}function fn(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Yt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Yt(e,i,h)}else a.current=null}function Qg(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Yt(e,e.return,h)}}function Yg(e,i,a){try{var l=e.stateNode;DA(l,e.type,a,i),l[Ee]=i}catch(h){Yt(e,e.return,h)}}function Xg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Of(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(e,i):a.insertBefore(e,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(e,a)):(i=a,i.appendChild(e)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=nc));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Of(e,i,a),e=e.sibling;e!==null;)Of(e,i,a),e=e.sibling}function ju(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(ju(e,i,a),e=e.sibling;e!==null;)ju(e,i,a),e=e.sibling}var Li=!1,re=!1,Nf=!1,$g=typeof WeakSet=="function"?WeakSet:Set,Ve=null,Wg=!1;function sA(e,i){if(e=e.containerInfo,sd=uc,e=mp(e),Mh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,R=-1,M=0,j=0,K=e,z=null;e:for(;;){for(var q;K!==a||h!==0&&K.nodeType!==3||(E=v+h),K!==d||l!==0&&K.nodeType!==3||(R=v+l),K.nodeType===3&&(v+=K.nodeValue.length),(q=K.firstChild)!==null;)z=K,K=q;for(;;){if(K===e)break e;if(z===a&&++M===h&&(E=v),z===d&&++j===l&&(R=v),(q=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=q}a=E===-1||R===-1?null:{start:E,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(ad={focusedElem:e,selectionRange:a},uc=!1,Ve=i;Ve!==null;)if(i=Ve,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Ve=e;else for(;Ve!==null;){switch(i=Ve,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var st=Cs(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(st,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(At){Yt(a,a.return,At)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)cd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ve=e;break}Ve=i.return}return st=Wg,Wg=!1,st}function Zg(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:zi(e,a),l&4&&$o(5,a);break;case 1:if(zi(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(E){Yt(a,a.return,E)}else{var h=Cs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Yt(a,a.return,E)}}l&64&&Gg(a),l&512&&Ns(a,a.return);break;case 3:if(zi(e,a),l&64&&(l=a.updateQueue,l!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Fg(l,e)}catch(E){Yt(a,a.return,E)}}break;case 26:zi(e,a),l&512&&Ns(a,a.return);break;case 27:case 5:zi(e,a),i===null&&l&4&&Qg(a),l&512&&Ns(a,a.return);break;case 12:zi(e,a);break;case 13:zi(e,a),l&4&&e_(e,a);break;case 22:if(h=a.memoizedState!==null||Li,!h){i=i!==null&&i.memoizedState!==null||re;var d=Li,v=re;Li=h,(re=i)&&!v?Ir(e,a,(a.subtreeFlags&8772)!==0):zi(e,a),Li=d,re=v}l&512&&(a.memoizedProps.mode==="manual"?Ns(a,a.return):fn(a,a.return));break;default:zi(e,a)}}function Jg(e){var i=e.alternate;i!==null&&(e.alternate=null,Jg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&os(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,dn=!1;function xi(e,i,a){for(a=a.child;a!==null;)t_(e,i,a),a=a.sibling}function t_(e,i,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(nr,a)}catch{}switch(a.tag){case 26:re||fn(a,i),xi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:re||fn(a,i);var l=ge,h=dn;for(ge=a.stateNode,xi(e,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);os(a),ge=l,dn=h;break;case 5:re||fn(a,i);case 6:h=ge;var d=dn;if(ge=null,xi(e,i,a),ge=h,dn=d,ge!==null)if(dn)try{e=ge,l=a.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(v){Yt(a,i,v)}else try{ge.removeChild(a.stateNode)}catch(v){Yt(a,i,v)}break;case 18:ge!==null&&(dn?(i=ge,a=a.stateNode,i.nodeType===8?ud(i.parentNode,a):i.nodeType===1&&ud(i,a),ml(i)):ud(ge,a.stateNode));break;case 4:l=ge,h=dn,ge=a.stateNode.containerInfo,dn=!0,xi(e,i,a),ge=l,dn=h;break;case 0:case 11:case 14:case 15:re||wr(2,a,i),re||wr(4,a,i),xi(e,i,a);break;case 1:re||(fn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Kg(a,i,l)),xi(e,i,a);break;case 21:xi(e,i,a);break;case 22:re||fn(a,i),re=(l=re)||a.memoizedState!==null,xi(e,i,a),re=l;break;default:xi(e,i,a)}}function e_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(a){Yt(i,i.return,a)}}function aA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new $g),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new $g),i;default:throw Error(s(435,e.tag))}}function Mf(e,i){var a=aA(e);i.forEach(function(l){var h=vA.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function On(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:case 5:ge=E.stateNode,dn=!1;break t;case 3:ge=E.stateNode.containerInfo,dn=!0;break t;case 4:ge=E.stateNode.containerInfo,dn=!0;break t}E=E.return}if(ge===null)throw Error(s(160));t_(d,v,h),ge=null,dn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)n_(i,e),i=i.sibling}var Bn=null;function n_(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:On(i,e),Nn(e),l&4&&(wr(3,e,e.return),$o(3,e),wr(5,e,e.return));break;case 1:On(i,e),Nn(e),l&512&&(re||a===null||fn(a,a.return)),l&64&&Li&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Bn;if(On(i,e),Nn(e),l&512&&(re||a===null||fn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ur]||d[De]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Be(d,l,a),d[De]=e,Zt(d),l=d;break t;case"link":var v=Q_("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),Be(d,l,a),h.head.appendChild(d);break;case"meta":if(v=Q_("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),Be(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[De]=e,Zt(d),l=d}e.stateNode=l}else Y_(h,e.type,e.stateNode);else e.stateNode=K_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Y_(h,e.type,e.stateNode):K_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yg(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){h=e.stateNode,d=e.memoizedProps;try{for(var R=h.firstChild;R;){var M=R.nextSibling,j=R.nodeName;R[ur]||j==="HEAD"||j==="BODY"||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&R.rel.toLowerCase()==="stylesheet"||h.removeChild(R),R=M}for(var K=e.type,z=h.attributes;z.length;)h.removeAttributeNode(z[0]);Be(h,K,d),h[De]=e,h[Ee]=d}catch(st){Yt(e,e.return,st)}}case 5:if(On(i,e),Nn(e),l&512&&(re||a===null||fn(a,a.return)),e.flags&32){h=e.stateNode;try{Tn(h,"")}catch(st){Yt(e,e.return,st)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Yg(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Nf=!0);break;case 6:if(On(i,e),Nn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(st){Yt(e,e.return,st)}}break;case 3:if(ac=null,h=Bn,Bn=rc(i.containerInfo),On(i,e),Bn=h,Nn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(i.containerInfo)}catch(st){Yt(e,e.return,st)}Nf&&(Nf=!1,i_(e));break;case 4:l=Bn,Bn=rc(e.stateNode.containerInfo),On(i,e),Nn(e),Bn=l;break;case 12:On(i,e),Nn(e);break;case 13:On(i,e),Nn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hf=sn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mf(e,l)));break;case 22:if(l&512&&(re||a===null||fn(a,a.return)),R=e.memoizedState!==null,M=a!==null&&a.memoizedState!==null,j=Li,K=re,Li=j||R,re=K||M,On(i,e),re=K,Li=j,Nn(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=R?i._visibility&-2:i._visibility|1,R&&(i=Li||re,a===null||M||i||Da(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){M=a=i;try{if(h=M.stateNode,R)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=M.stateNode,E=M.memoizedProps.style;var q=E!=null&&E.hasOwnProperty("display")?E.display:null;v.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(st){Yt(M,M.return,st)}}}else if(i.tag===6){if(a===null){M=i;try{M.stateNode.nodeValue=R?"":M.memoizedProps}catch(st){Yt(M,M.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Mf(e,a))));break;case 19:On(i,e),Nn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mf(e,l)));break;case 21:break;default:On(i,e),Nn(e)}}function Nn(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Xg(a)){var l=a;break t}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=Df(e);ju(e,d,h);break;case 5:var v=l.stateNode;l.flags&32&&(Tn(v,""),l.flags&=-33);var E=Df(e);ju(e,E,v);break;case 3:case 4:var R=l.stateNode.containerInfo,M=Df(e);Of(e,M,R);break;default:throw Error(s(161))}}}catch(j){Yt(e,e.return,j)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function i_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;i_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function zi(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Zg(e,i.alternate,i),i=i.sibling}function Da(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:wr(4,i,i.return),Da(i);break;case 1:fn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Kg(i,i.return,a),Da(i);break;case 26:case 27:case 5:fn(i,i.return),Da(i);break;case 22:fn(i,i.return),i.memoizedState===null&&Da(i);break;default:Da(i)}e=e.sibling}}function Ir(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Ir(h,d,a),$o(4,d);break;case 1:if(Ir(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(M){Yt(l,l.return,M)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)jg(R[h],E)}catch(M){Yt(l,l.return,M)}}a&&v&64&&Gg(d),Ns(d,d.return);break;case 26:case 27:case 5:Ir(h,d,a),a&&l===null&&v&4&&Qg(d),Ns(d,d.return);break;case 12:Ir(h,d,a);break;case 13:Ir(h,d,a),a&&v&4&&e_(h,d);break;case 22:d.memoizedState===null&&Ir(h,d,a),Ns(d,d.return);break;default:Ir(h,d,a)}i=i.sibling}}function Vf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bo(a))}function kf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Bo(e))}function Cr(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)r_(e,i,a,l),i=i.sibling}function r_(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Cr(e,i,a,l),h&2048&&$o(9,i);break;case 3:Cr(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Bo(e)));break;case 12:if(h&2048){Cr(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Yt(i,i.return,R)}}else Cr(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?Cr(e,i,a,l):Wo(e,i):d._visibility&4?Cr(e,i,a,l):(d._visibility|=4,Oa(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Vf(i.alternate,i);break;case 24:Cr(e,i,a,l),h&2048&&kf(i.alternate,i);break;default:Cr(e,i,a,l)}}function Oa(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,R=l,M=v.flags;switch(v.tag){case 0:case 11:case 15:Oa(d,v,E,R,h),$o(8,v);break;case 23:break;case 22:var j=v.stateNode;v.memoizedState!==null?j._visibility&4?Oa(d,v,E,R,h):Wo(d,v):(j._visibility|=4,Oa(d,v,E,R,h)),h&&M&2048&&Vf(v.alternate,v);break;case 24:Oa(d,v,E,R,h),h&&M&2048&&kf(v.alternate,v);break;default:Oa(d,v,E,R,h)}i=i.sibling}}function Wo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:Wo(a,l),h&2048&&Vf(l.alternate,l);break;case 24:Wo(a,l),h&2048&&kf(l.alternate,l);break;default:Wo(a,l)}i=i.sibling}}var Zo=8192;function Na(e){if(e.subtreeFlags&Zo)for(e=e.child;e!==null;)s_(e),e=e.sibling}function s_(e){switch(e.tag){case 26:Na(e),e.flags&Zo&&e.memoizedState!==null&&YA(Bn,e.memoizedState,e.memoizedProps);break;case 5:Na(e);break;case 3:case 4:var i=Bn;Bn=rc(e.stateNode.containerInfo),Na(e),Bn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Zo,Zo=16777216,Na(e),Zo=i):Na(e));break;default:Na(e)}}function a_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Jo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,l_(l,e)}a_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)o_(e),e=e.sibling}function o_(e){switch(e.tag){case 0:case 11:case 15:Jo(e),e.flags&2048&&wr(9,e,e.return);break;case 3:Jo(e);break;case 12:Jo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,Fu(e)):Jo(e);break;default:Jo(e)}}function Fu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,l_(l,e)}a_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:wr(8,i,i.return),Fu(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,Fu(i));break;default:Fu(i)}e=e.sibling}}function l_(e,i){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:wr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Bo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else t:for(a=e;Ve!==null;){l=Ve;var h=l.sibling,d=l.return;if(Jg(l),l===a){Ve=null;break t}if(h!==null){h.return=d,Ve=h;break t}Ve=d}}}function oA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(e,i,a,l){return new oA(e,i,a,l)}function Uf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dr(e,i){var a=e.alternate;return a===null?(a=Mn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function u_(e,i){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Gu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Uf(e)&&(v=1);else if(typeof e=="string")v=KA(e,a,We.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case g:return Ms(a.children,h,d,i);case _:v=8,h|=24;break;case A:return e=Mn(12,a,i,h|2),e.elementType=A,e.lanes=d,e;case J:return e=Mn(13,a,i,h),e.elementType=J,e.lanes=d,e;case Q:return e=Mn(19,a,i,h),e.elementType=Q,e.lanes=d,e;case lt:return c_(a,h,d,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:case H:v=10;break t;case P:v=9;break t;case X:v=11;break t;case ft:v=14;break t;case at:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=Mn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function Ms(e,i,a,l){return e=Mn(7,e,l,i),e.lanes=a,e}function c_(e,i,a,l){e=Mn(22,e,l,i),e.elementType=lt,e.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var v=_r(d,2);v!==null&&(h._pendingVisibility|=2,nn(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var v=_r(d,2);v!==null&&(h._pendingVisibility&=-3,nn(v,d,2))}}};return e.stateNode=h,e}function Pf(e,i,a){return e=Mn(6,e,null,i),e.lanes=a,e}function Lf(e,i,a){return i=Mn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function Bi(e){e.flags|=4}function h_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!X_(i)){if(i=Dn.current,i!==null&&((Pt&4194176)===Pt?ii!==null:(Pt&62914560)!==Pt&&(Pt&536870912)===0||i!==ii))throw Lo=Hh,Cp;e.flags|=8192}}function Ku(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?sr():536870912,e.lanes|=i,Va|=i)}function tl(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Jt(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function lA(e,i,a){var l=i.pendingProps;switch(zh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(i),null;case 1:return Jt(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Pi(be),vi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vo(i)?Bi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zn!==null&&(Gf(zn),zn=null))),Jt(i),null;case 26:return a=i.memoizedState,e===null?(Bi(i),a!==null?(Jt(i),h_(i,a)):(Jt(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Bi(i),Jt(i),h_(i,a)):(Jt(i),i.flags&=-16777217):(e.memoizedProps!==l&&Bi(i),Jt(i),i.flags&=-16777217),null;case 27:Zs(i),a=yn.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Bi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Jt(i),null}e=We.current,Vo(i)?wp(i):(e=H_(h,l,a),i.stateNode=e,Bi(i))}return Jt(i),null;case 5:if(Zs(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Bi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Jt(i),null}if(e=We.current,Vo(i))wp(i);else{switch(h=ic(yn.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[De]=i,e[Ee]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Be(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Bi(i)}}return Jt(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Bi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=yn.current,Vo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[De]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||U_(e.nodeValue,a)),e||As(i)}else e=ic(e).createTextNode(l),e[De]=i,i.stateNode=e}return Jt(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Vo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[De]=i}else ko(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),h=!1}else zn!==null&&(Gf(zn),zn=null),h=!0;if(!h)return i.flags&256?(Mi(i),i):(Mi(i),null)}if(Mi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Ku(i,i.updateQueue),Jt(i),null;case 4:return vi(),e===null&&nd(i.stateNode.containerInfo),Jt(i),null;case 10:return Pi(i.type),Jt(i),null;case 19:if(ne(Se),h=i.memoizedState,h===null)return Jt(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)tl(h,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Du(e),d!==null){for(i.flags|=128,tl(h,!1),e=d.updateQueue,i.updateQueue=e,Ku(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)u_(a,e),a=a.sibling;return Gt(Se,Se.current&1|2),i.child}e=e.sibling}h.tail!==null&&sn()>Qu&&(i.flags|=128,l=!0,tl(h,!1),i.lanes=4194304)}else{if(!l)if(e=Du(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Ku(i,e),tl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Bt)return Jt(i),null}else 2*sn()-h.renderingStartTime>Qu&&a!==536870912&&(i.flags|=128,l=!0,tl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=sn(),i.sibling=null,e=Se.current,Gt(Se,l?e&1|2:e&1),i):(Jt(i),null);case 22:case 23:return Mi(i),jh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(Jt(i),i.subtreeFlags&6&&(i.flags|=8192)):Jt(i),a=i.updateQueue,a!==null&&Ku(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&ne(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Pi(be),Jt(i),null;case 25:return null}throw Error(s(156,i.tag))}function uA(e,i){switch(zh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Pi(be),vi(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Zs(i),null;case 13:if(Mi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ko()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return ne(Se),null;case 4:return vi(),null;case 10:return Pi(i.type),null;case 22:case 23:return Mi(i),jh(),e!==null&&ne(bs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Pi(be),null;case 25:return null;default:return null}}function f_(e,i){switch(zh(i),i.tag){case 3:Pi(be),vi();break;case 26:case 27:case 5:Zs(i);break;case 4:vi();break;case 13:Mi(i);break;case 19:ne(Se);break;case 10:Pi(i.type);break;case 22:case 23:Mi(i),jh(),e!==null&&ne(bs);break;case 24:Pi(be)}}var cA={getCacheForType:function(e){var i=Ge(be),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},hA=typeof WeakMap=="function"?WeakMap:Map,te=0,Xt=null,Dt=null,Pt=0,$t=0,mn=null,Hi=!1,Ma=!1,xf=!1,qi=0,se=0,Or=0,Vs=0,zf=0,Vn=0,Va=0,el=null,si=null,Bf=!1,Hf=0,Qu=1/0,Yu=null,Nr=null,Xu=!1,ks=null,nl=0,qf=0,jf=null,il=0,Ff=null;function pn(){if((te&2)!==0&&Pt!==0)return Pt&-Pt;if(S.T!==null){var e=ba;return e!==0?e:Zf()}return eu()}function d_(){Vn===0&&(Vn=(Pt&536870912)===0||Bt?po():536870912);var e=Dn.current;return e!==null&&(e.flags|=32),Vn}function nn(e,i,a){(e===Xt&&$t===2||e.cancelPendingCommit!==null)&&(ka(e,0),ji(e,Pt,Vn,!1)),ue(e,a),((te&2)===0||e!==Xt)&&(e===Xt&&((te&2)===0&&(Vs|=a),se===4&&ji(e,Pt,Vn,!1)),ai(e))}function m_(e,i,a){if((te&6)!==0)throw Error(s(327));var l=!a&&(i&60)===0&&(i&e.expiredLanes)===0||rr(e,i),h=l?mA(e,i):Yf(e,i,!0),d=l;do{if(h===0){Ma&&!l&&ji(e,i,0,!1);break}else if(h===6)ji(e,i,0,!Hi);else{if(a=e.current.alternate,d&&!fA(a)){h=Yf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=el;var R=E.current.memoizedState.isDehydrated;if(R&&(ka(E,v).flags|=256),v=Yf(E,v,!1),v!==2){if(xf&&!R){E.errorRecoveryDisabledLanes|=d,Vs|=d,h=4;break t}d=si,si=h,d!==null&&Gf(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){ka(e,0),ji(e,i,0,!0);break}t:{switch(l=e,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194176)===i){ji(l,i,Vn,!Hi);break t}break;case 2:si=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=i,(i&62914560)===i&&(d=Hf+300-sn(),10<d)){if(ji(l,i,Vn,!Hi),vn(l,0)!==0)break t;l.timeoutHandle=x_(p_.bind(null,l,a,si,Yu,Bf,i,Vn,Vs,Va,Hi,2,-0,0),d);break t}p_(l,a,si,Yu,Bf,i,Vn,Vs,Va,Hi,0,-0,0)}}break}while(!0);ai(e)}function Gf(e){si===null?si=e:si.push.apply(si,e)}function p_(e,i,a,l,h,d,v,E,R,M,j,K,z){var q=i.subtreeFlags;if((q&8192||(q&16785408)===16785408)&&(ul={stylesheets:null,count:0,unsuspend:QA},s_(i),i=XA(),i!==null)){e.cancelPendingCommit=i(A_.bind(null,e,a,l,h,v,E,R,1,K,z)),ji(e,d,v,!M);return}A_(e,a,l,h,v,E,R,j,K,z)}function fA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!hn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ji(e,i,a,l){i&=~zf,i&=~Vs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ze(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&ar(e,a,i)}function $u(){return(te&6)===0?(rl(0),!1):!0}function Kf(){if(Dt!==null){if($t===0)var e=Dt.return;else e=Dt,Ui=Ds=null,Wh(e),Aa=null,xo=0,e=Dt;for(;e!==null;)f_(e.alternate,e),e=e.return;Dt=null}}function ka(e,i){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,NA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Kf(),Xt=e,Dt=a=Dr(e.current,null),Pt=i,$t=0,mn=null,Hi=!1,Ma=rr(e,i),xf=!1,Va=Vn=zf=Vs=Or=se=0,si=el=null,Bf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ze(l),d=1<<h;i|=e[h],l&=~d}return qi=i,Eu(),a}function g_(e,i){It=null,S.H=ri,i===Po?(i=Np(),$t=3):i===Cp?(i=Np(),$t=4):$t=i===Dg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,Dt===null&&(se=1,Bu(e,wn(i,e.current)))}function __(){var e=S.H;return S.H=ri,e===null?ri:e}function y_(){var e=S.A;return S.A=cA,e}function Qf(){se=4,Hi||(Pt&4194176)!==Pt&&Dn.current!==null||(Ma=!0),(Or&134217727)===0&&(Vs&134217727)===0||Xt===null||ji(Xt,Pt,Vn,!1)}function Yf(e,i,a){var l=te;te|=2;var h=__(),d=y_();(Xt!==e||Pt!==i)&&(Yu=null,ka(e,i)),i=!1;var v=se;t:do try{if($t!==0&&Dt!==null){var E=Dt,R=mn;switch($t){case 8:Kf(),v=6;break t;case 3:case 2:case 6:Dn.current===null&&(i=!0);var M=$t;if($t=0,mn=null,Ua(e,E,R,M),a&&Ma){v=0;break t}break;default:M=$t,$t=0,mn=null,Ua(e,E,R,M)}}dA(),v=se;break}catch(j){g_(e,j)}while(!0);return i&&e.shellSuspendCounter++,Ui=Ds=null,te=l,S.H=h,S.A=d,Dt===null&&(Xt=null,Pt=0,Eu()),v}function dA(){for(;Dt!==null;)v_(Dt)}function mA(e,i){var a=te;te|=2;var l=__(),h=y_();Xt!==e||Pt!==i?(Yu=null,Qu=sn()+500,ka(e,i)):Ma=rr(e,i);t:do try{if($t!==0&&Dt!==null){i=Dt;var d=mn;e:switch($t){case 1:$t=0,mn=null,Ua(e,i,d,1);break;case 2:if(Dp(d)){$t=0,mn=null,E_(i);break}i=function(){$t===2&&Xt===e&&($t=7),ai(e)},d.then(i,i);break t;case 3:$t=7;break t;case 4:$t=5;break t;case 7:Dp(d)?($t=0,mn=null,E_(i)):($t=0,mn=null,Ua(e,i,d,7));break;case 5:var v=null;switch(Dt.tag){case 26:v=Dt.memoizedState;case 5:case 27:var E=Dt;if(!v||X_(v)){$t=0,mn=null;var R=E.sibling;if(R!==null)Dt=R;else{var M=E.return;M!==null?(Dt=M,Wu(M)):Dt=null}break e}}$t=0,mn=null,Ua(e,i,d,5);break;case 6:$t=0,mn=null,Ua(e,i,d,6);break;case 8:Kf(),se=6;break t;default:throw Error(s(462))}}pA();break}catch(j){g_(e,j)}while(!0);return Ui=Ds=null,S.H=l,S.A=h,te=a,Dt!==null?0:(Xt=null,Pt=0,Eu(),se)}function pA(){for(;Dt!==null&&!Th();)v_(Dt)}function v_(e){var i=Hg(e.alternate,e,qi);e.memoizedProps=e.pendingProps,i===null?Wu(e):Dt=i}function E_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Ug(a,i,i.pendingProps,i.type,void 0,Pt);break;case 11:i=Ug(a,i,i.pendingProps,i.type.render,i.ref,Pt);break;case 5:Wh(i);default:f_(a,i),i=Dt=u_(i,qi),i=Hg(a,i,qi)}e.memoizedProps=e.pendingProps,i===null?Wu(e):Dt=i}function Ua(e,i,a,l){Ui=Ds=null,Wh(i),Aa=null,xo=0;var h=i.return;try{if(iA(e,h,i,a,Pt)){se=1,Bu(e,wn(a,e.current)),Dt=null;return}}catch(d){if(h!==null)throw Dt=h,d;se=1,Bu(e,wn(a,e.current)),Dt=null;return}i.flags&32768?(Bt||l===1?e=!0:Ma||(Pt&536870912)!==0?e=!1:(Hi=e=!0,(l===2||l===3||l===6)&&(l=Dn.current,l!==null&&l.tag===13&&(l.flags|=16384))),T_(i,e)):Wu(i)}function Wu(e){var i=e;do{if((i.flags&32768)!==0){T_(i,Hi);return}e=i.return;var a=lA(i.alternate,i,qi);if(a!==null){Dt=a;return}if(i=i.sibling,i!==null){Dt=i;return}Dt=i=e}while(i!==null);se===0&&(se=5)}function T_(e,i){do{var a=uA(e.alternate,e);if(a!==null){a.flags&=32767,Dt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Dt=e;return}Dt=e=a}while(e!==null);se=6,Dt=null}function A_(e,i,a,l,h,d,v,E,R,M){var j=S.T,K=nt.p;try{nt.p=2,S.T=null,gA(e,i,a,l,K,h,d,v,E,R,M)}finally{S.T=j,nt.p=K}}function gA(e,i,a,l,h,d,v,E){do Pa();while(ks!==null);if((te&6)!==0)throw Error(s(327));var R=e.finishedWork;if(l=e.finishedLanes,R===null)return null;if(e.finishedWork=null,e.finishedLanes=0,R===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var M=R.lanes|R.childLanes;if(M|=Ph,Jl(e,l,M,d,v,E),e===Xt&&(Dt=Xt=null,Pt=0),(R.subtreeFlags&10256)===0&&(R.flags&10256)===0||Xu||(Xu=!0,qf=M,jf=a,EA(Ei,function(){return Pa(),null})),a=(R.flags&15990)!==0,(R.subtreeFlags&15990)!==0||a?(a=S.T,S.T=null,d=nt.p,nt.p=2,v=te,te|=4,sA(e,R),n_(R,e),B0(ad,e.containerInfo),uc=!!sd,ad=sd=null,e.current=R,Zg(e,R.alternate,R),co(),te=v,nt.p=d,S.T=a):e.current=R,Xu?(Xu=!1,ks=e,nl=l):S_(e,M),M=e.pendingLanes,M===0&&(Nr=null),fo(R.stateNode),ai(e),i!==null)for(h=e.onRecoverableError,R=0;R<i.length;R++)M=i[R],h(M.value,{componentStack:M.stack});return(nl&3)!==0&&Pa(),M=e.pendingLanes,(l&4194218)!==0&&(M&42)!==0?e===Ff?il++:(il=0,Ff=e):il=0,rl(0),null}function S_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Bo(i)))}function Pa(){if(ks!==null){var e=ks,i=qf;qf=0;var a=tu(nl),l=S.T,h=nt.p;try{if(nt.p=32>a?32:a,S.T=null,ks===null)var d=!1;else{a=jf,jf=null;var v=ks,E=nl;if(ks=null,nl=0,(te&6)!==0)throw Error(s(331));var R=te;if(te|=4,o_(v.current),r_(v,v.current,E,a),te=R,rl(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(nr,v)}catch{}d=!0}return d}finally{nt.p=h,S.T=l,S_(e,i)}}return!1}function b_(e,i,a){i=wn(a,i),i=ff(e.stateNode,i,2),e=Rr(e,i,2),e!==null&&(ue(e,2),ai(e))}function Yt(e,i,a){if(e.tag===3)b_(e,e,a);else for(;i!==null;){if(i.tag===3){b_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Nr===null||!Nr.has(l))){e=wn(a,e),a=Ig(2),l=Rr(i,a,2),l!==null&&(Cg(a,l,i,e),ue(l,2),ai(l));break}}i=i.return}}function Xf(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new hA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(xf=!0,h.add(a),e=_A.bind(null,e,i,a),i.then(e,e))}function _A(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(Pt&a)===a&&(se===4||se===3&&(Pt&62914560)===Pt&&300>sn()-Hf?(te&2)===0&&ka(e,0):zf|=a,Va===Pt&&(Va=0)),ai(e)}function R_(e,i){i===0&&(i=sr()),e=_r(e,i),e!==null&&(ue(e,i),ai(e))}function yA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),R_(e,a)}function vA(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),R_(e,a)}function EA(e,i){return rs(e,i)}var Zu=null,La=null,$f=!1,Ju=!1,Wf=!1,Us=0;function ai(e){e!==La&&e.next===null&&(La===null?Zu=La=e:La=La.next=e),Ju=!0,$f||($f=!0,AA(TA))}function rl(e,i){if(!Wf&&Ju){Wf=!0;do for(var a=!1,l=Zu;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Ze(42|e)+1)-1,d&=h&~(v&~E),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,C_(l,d))}else d=Pt,d=vn(l,l===Xt?d:0),(d&3)===0||rr(l,d)||(a=!0,C_(l,d));l=l.next}while(a);Wf=!1}}function TA(){Ju=$f=!1;var e=0;Us!==0&&(OA()&&(e=Us),Us=0);for(var i=sn(),a=null,l=Zu;l!==null;){var h=l.next,d=w_(l,i);d===0?(l.next=null,a===null?Zu=h:a.next=h,h===null&&(La=a)):(a=l,(e!==0||(d&3)!==0)&&(Ju=!0)),l=h}rl(e)}function w_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ze(d),E=1<<v,R=h[v];R===-1?((E&a)===0||(E&l)!==0)&&(h[v]=ea(E,i)):R<=i&&(e.expiredLanes|=E),d&=~E}if(i=Xt,a=Pt,a=vn(e,e===i?a:0),l=e.callbackNode,a===0||e===i&&$t===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ta(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||rr(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&ta(l),tu(a)){case 2:case 8:a=Ce;break;case 32:a=Ei;break;case 268435456:a=ho;break;default:a=Ei}return l=I_.bind(null,e),a=rs(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&ta(l),e.callbackPriority=2,e.callbackNode=null,2}function I_(e,i){var a=e.callbackNode;if(Pa()&&e.callbackNode!==a)return null;var l=Pt;return l=vn(e,e===Xt?l:0),l===0?null:(m_(e,l,i),w_(e,sn()),e.callbackNode!=null&&e.callbackNode===a?I_.bind(null,e):null)}function C_(e,i){if(Pa())return null;m_(e,i,!0)}function AA(e){MA(function(){(te&6)!==0?rs(ve,e):e()})}function Zf(){return Us===0&&(Us=po()),Us}function D_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xn(""+e)}function O_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function SA(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=D_((h[Ee]||null).action),v=l.submitter;v&&(i=(i=v[Ee]||null)?D_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new la("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Us!==0){var R=v?O_(h,v):new FormData(h);of(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(E.preventDefault(),R=v?O_(h,v):new FormData(h),of(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var Jf=0;Jf<Ap.length;Jf++){var td=Ap[Jf],bA=td.toLowerCase(),RA=td[0].toUpperCase()+td.slice(1);xn(bA,"on"+RA)}xn(_p,"onAnimationEnd"),xn(yp,"onAnimationIteration"),xn(vp,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(q0,"onTransitionRun"),xn(j0,"onTransitionStart"),xn(F0,"onTransitionCancel"),xn(Ep,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function N_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],R=E.instance,M=E.currentTarget;if(E=E.listener,R!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=M;try{d(h)}catch(j){zu(j)}h.currentTarget=null,d=R}else for(v=0;v<l.length;v++){if(E=l[v],R=E.instance,M=E.currentTarget,E=E.listener,R!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=M;try{d(h)}catch(j){zu(j)}h.currentTarget=null,d=R}}}}function Mt(e,i){var a=i[as];a===void 0&&(a=i[as]=new Set);var l=e+"__bubble";a.has(l)||(M_(i,e,2,!1),a.add(l))}function ed(e,i,a){var l=0;i&&(l|=4),M_(a,e,l,i)}var tc="_reactListening"+Math.random().toString(36).slice(2);function nd(e){if(!e[tc]){e[tc]=!0,_o.forEach(function(a){a!=="selectionchange"&&(wA.has(a)||ed(a,!1,e),ed(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[tc]||(i[tc]=!0,ed("selectionchange",!1,i))}}function M_(e,i,a,l){switch(ey(i)){case 2:var h=ZA;break;case 8:h=JA;break;default:h=pd}a=h.bind(null,i,a,e),h=void 0,!Sn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function id(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(v===4)for(v=l.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===h||R.nodeType===8&&R.parentNode===h))return;v=v.return}for(;E!==null;){if(v=Ln(E),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){l=d=v;continue t}E=E.parentNode}}l=l.return}su(function(){var M=d,j=oa(a),K=[];t:{var z=Tp.get(e);if(z!==void 0){var q=la,st=e;switch(e){case"keypress":if(Wn(a)===0)break t;case"keydown":case"keyup":q=ma;break;case"focusin":st="focus",q=ha;break;case"focusout":st="blur",q=ha;break;case"beforeblur":case"afterblur":q=ha;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=du;break;case _p:case yp:case vp:q=fa;break;case Ep:q=pu;break;case"scroll":case"scrollend":q=au;break;case"wheel":q=pa;break;case"copy":case"cut":case"paste":q=da;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Do;break;case"toggle":case"beforetoggle":q=_u}var At=(i&4)!==0,ae=!At&&(e==="scroll"||e==="scrollend"),k=At?z!==null?z+"Capture":null:z;At=[];for(var N=M,x;N!==null;){var F=N;if(x=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||x===null||k===null||(F=hs(N,k),F!=null&&At.push(al(N,F,x))),ae)break;N=N.return}0<At.length&&(z=new q(z,st,null,a,j),K.push({event:z,listeners:At}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",z&&a!==An&&(st=a.relatedTarget||a.fromElement)&&(Ln(st)||st[Ti]))break t;if((q||z)&&(z=j.window===j?j:(z=j.ownerDocument)?z.defaultView||z.parentWindow:window,q?(st=a.relatedTarget||a.toElement,q=M,st=st?Ln(st):null,st!==null&&(ae=ct(st),At=st.tag,st!==ae||At!==5&&At!==27&&At!==6)&&(st=null)):(q=null,st=M),q!==st)){if(At=bn,F="onMouseLeave",k="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(At=Do,F="onPointerLeave",k="onPointerEnter",N="pointer"),ae=q==null?z:cr(q),x=st==null?z:cr(st),z=new At(F,N+"leave",q,a,j),z.target=ae,z.relatedTarget=x,F=null,Ln(j)===M&&(At=new At(k,N+"enter",st,a,j),At.target=x,At.relatedTarget=ae,F=At),ae=F,q&&st)e:{for(At=q,k=st,N=0,x=At;x;x=xa(x))N++;for(x=0,F=k;F;F=xa(F))x++;for(;0<N-x;)At=xa(At),N--;for(;0<x-N;)k=xa(k),x--;for(;N--;){if(At===k||k!==null&&At===k.alternate)break e;At=xa(At),k=xa(k)}At=null}else At=null;q!==null&&V_(K,z,q,At,!1),st!==null&&ae!==null&&V_(K,ae,st,At,!0)}}t:{if(z=M?cr(M):window,q=z.nodeName&&z.nodeName.toLowerCase(),q==="select"||q==="input"&&z.type==="file")var rt=ap;else if(Ae(z))if(op)rt=x0;else{rt=P0;var Ct=U0}else q=z.nodeName,!q||q.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?M&&Ao(M.elementType)&&(rt=ap):rt=L0;if(rt&&(rt=rt(e,M))){Di(K,rt,a,j);break t}Ct&&Ct(e,z,M),e==="focusout"&&M&&z.type==="number"&&M.memoizedProps.value!=null&&aa(z,"number",z.value)}switch(Ct=M?cr(M):window,e){case"focusin":(Ae(Ct)||Ct.contentEditable==="true")&&(ga=Ct,Vh=M,Mo=null);break;case"focusout":Mo=Vh=ga=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,pp(K,a,j);break;case"selectionchange":if(H0)break;case"keydown":case"keyup":pp(K,a,j)}var ut;if(ti)t:{switch(e){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else kt?B(e,a)&&(pt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(y&&a.locale!=="ko"&&(kt||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&kt&&(ut=bo()):($n=j,gr="value"in $n?$n.value:$n.textContent,kt=!0)),Ct=ec(M,pt),0<Ct.length&&(pt=new Io(pt,e,null,a,j),K.push({event:pt,listeners:Ct}),ut?pt.data=ut:(ut=Z(a),ut!==null&&(pt.data=ut)))),(ut=m?Te(e,a):Ut(e,a))&&(pt=ec(M,"onBeforeInput"),0<pt.length&&(Ct=new Io("onBeforeInput","beforeinput",null,a,j),K.push({event:Ct,listeners:pt}),Ct.data=ut)),SA(K,e,M,a,j)}N_(K,i)})}function al(e,i,a){return{instance:e,listener:i,currentTarget:a}}function ec(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=hs(e,a),h!=null&&l.unshift(al(e,h,d)),h=hs(e,i),h!=null&&l.push(al(e,h,d))),e=e.return}return l}function xa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function V_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,R=E.alternate,M=E.stateNode;if(E=E.tag,R!==null&&R===l)break;E!==5&&E!==26&&E!==27||M===null||(R=M,h?(M=hs(a,d),M!=null&&v.unshift(al(a,M,R))):h||(M=hs(a,d),M!=null&&v.push(al(a,M,R)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var IA=/\r\n?/g,CA=/\u0000|\uFFFD/g;function k_(e){return(typeof e=="string"?e:""+e).replace(IA,`
`).replace(CA,"")}function U_(e,i){return i=k_(i),k_(e)===i}function nc(){}function Qt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Tn(e,""+l);break;case"className":dr(e,"class",l);break;case"tabIndex":dr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":dr(e,a,l);break;case"style":ru(e,l,d);break;case"data":if(i!=="object"){dr(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Xn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Qt(e,i,"name",h.name,h,null),Qt(e,i,"formEncType",h.formEncType,h,null),Qt(e,i,"formMethod",h.formMethod,h,null),Qt(e,i,"formTarget",h.formTarget,h,null)):(Qt(e,i,"encType",h.encType,h,null),Qt(e,i,"method",h.method,h,null),Qt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Xn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=nc);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Xn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),fr(e,"popover",l);break;case"xlinkActuate":En(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":En(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":En(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":En(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":En(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":En(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":En(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":En(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":En(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wh.get(a)||a,fr(e,a,l))}}function rd(e,i,a,l,h,d){switch(a){case"style":ru(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&Tn(e,""+l);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=nc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ra.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[Ee]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):fr(e,a,l)}}}function Be(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(e,i,d,v,a,null)}}h&&Qt(e,i,"srcSet",a.srcSet,a,null),l&&Qt(e,i,"src",a.src,a,null);return;case"input":Mt("invalid",e);var E=d=v=h=null,R=null,M=null;for(l in a)if(a.hasOwnProperty(l)){var j=a[l];if(j!=null)switch(l){case"name":h=j;break;case"type":v=j;break;case"checked":R=j;break;case"defaultChecked":M=j;break;case"value":d=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:Qt(e,i,l,j,a,null)}}us(e,d,E,R,M,v,h,!1),ls(e);return;case"select":Mt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:Qt(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!l,i!=null?zt(e,!!l,i,!1):a!=null&&zt(e,!!l,a,!0);return;case"textarea":Mt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Qt(e,i,v,E,a,null)}pr(e,l,h,d),ls(e);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qt(e,i,R,l,a,null)}return;case"dialog":Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(l=0;l<sl.length;l++)Mt(sl[l],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(l=a[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(e,i,M,l,a,null)}return;default:if(Ao(i)){for(j in a)a.hasOwnProperty(j)&&(l=a[j],l!==void 0&&rd(e,i,j,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Qt(e,i,E,l,a,null))}function DA(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,R=null,M=null,j=null;for(q in a){var K=a[q];if(a.hasOwnProperty(q)&&K!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":R=K;default:l.hasOwnProperty(q)||Qt(e,i,q,null,l,K)}}for(var z in l){var q=l[z];if(K=a[z],l.hasOwnProperty(z)&&(q!=null||K!=null))switch(z){case"type":d=q;break;case"name":h=q;break;case"checked":M=q;break;case"defaultChecked":j=q;break;case"value":v=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:q!==K&&Qt(e,i,z,q,l,K)}}mr(e,v,E,R,M,j,d,h);return;case"select":q=v=E=z=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":q=R;default:l.hasOwnProperty(d)||Qt(e,i,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==R&&Qt(e,i,h,d,l,R)}i=E,a=v,l=q,z!=null?zt(e,!!a,z,!1):!!l!=!!a&&(i!=null?zt(e,!!a,i,!0):zt(e,!!a,a?[]:"",!1));return;case"textarea":q=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Qt(e,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Qt(e,i,v,h,l,d)}cs(e,z,q);return;case"option":for(var st in a)if(z=a[st],a.hasOwnProperty(st)&&z!=null&&!l.hasOwnProperty(st))switch(st){case"selected":e.selected=!1;break;default:Qt(e,i,st,null,l,z)}for(R in l)if(z=l[R],q=a[R],l.hasOwnProperty(R)&&z!==q&&(z!=null||q!=null))switch(R){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Qt(e,i,R,z,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var At in a)z=a[At],a.hasOwnProperty(At)&&z!=null&&!l.hasOwnProperty(At)&&Qt(e,i,At,null,l,z);for(M in l)if(z=l[M],q=a[M],l.hasOwnProperty(M)&&z!==q&&(z!=null||q!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Qt(e,i,M,z,l,q)}return;default:if(Ao(i)){for(var ae in a)z=a[ae],a.hasOwnProperty(ae)&&z!==void 0&&!l.hasOwnProperty(ae)&&rd(e,i,ae,void 0,l,z);for(j in l)z=l[j],q=a[j],!l.hasOwnProperty(j)||z===q||z===void 0&&q===void 0||rd(e,i,j,z,l,q);return}}for(var k in a)z=a[k],a.hasOwnProperty(k)&&z!=null&&!l.hasOwnProperty(k)&&Qt(e,i,k,null,l,z);for(K in l)z=l[K],q=a[K],!l.hasOwnProperty(K)||z===q||z==null&&q==null||Qt(e,i,K,z,l,q)}var sd=null,ad=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function P_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function od(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ld=null;function OA(){var e=window.event;return e&&e.type==="popstate"?e===ld?!1:(ld=e,!0):(ld=null,!1)}var x_=typeof setTimeout=="function"?setTimeout:void 0,NA=typeof clearTimeout=="function"?clearTimeout:void 0,z_=typeof Promise=="function"?Promise:void 0,MA=typeof queueMicrotask=="function"?queueMicrotask:typeof z_<"u"?function(e){return z_.resolve(null).then(e).catch(VA)}:x_;function VA(e){setTimeout(function(){throw e})}function ud(e,i){var a=i,l=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){e.removeChild(h),ml(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);ml(i)}function cd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":cd(a),os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function kA(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ur])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Hn(e.nextSibling),e===null)break}return null}function UA(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Hn(e.nextSibling),e===null))return null;return e}function Hn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function B_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function H_(e,i,a){switch(i=ic(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var kn=new Map,q_=new Set;function rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Fi=nt.d;nt.d={f:PA,r:LA,D:xA,C:zA,L:BA,m:HA,X:jA,S:qA,M:FA};function PA(){var e=Fi.f(),i=$u();return e||i}function LA(e){var i=Ai(e);i!==null&&i.tag===5&&i.type==="form"?pg(i):Fi.r(e)}var za=typeof document>"u"?null:document;function j_(e,i,a){var l=za;if(l&&typeof i=="string"&&i){var h=ie(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),q_.has(h)||(q_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Be(i,"link",e),Zt(i),l.head.appendChild(i)))}}function xA(e){Fi.D(e),j_("dns-prefetch",e,null)}function zA(e,i){Fi.C(e,i),j_("preconnect",e,i)}function BA(e,i,a){Fi.L(e,i,a);var l=za;if(l&&e&&i){var h='link[rel="preload"][as="'+ie(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ie(a.imageSizes)+'"]')):h+='[href="'+ie(e)+'"]';var d=h;switch(i){case"style":d=Ba(e);break;case"script":d=Ha(e)}kn.has(d)||(e=C({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),kn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(ol(d))||i==="script"&&l.querySelector(ll(d))||(i=l.createElement("link"),Be(i,"link",e),Zt(i),l.head.appendChild(i)))}}function HA(e,i){Fi.m(e,i);var a=za;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ie(l)+'"][href="'+ie(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ha(e)}if(!kn.has(d)&&(e=C({rel:"modulepreload",href:e},i),kn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(d)))return}l=a.createElement("link"),Be(l,"link",e),Zt(l),a.head.appendChild(l)}}}function qA(e,i,a){Fi.S(e,i,a);var l=za;if(l&&e){var h=hr(l).hoistableStyles,d=Ba(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(ol(d)))E.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":i},a),(a=kn.get(d))&&hd(e,a);var R=v=l.createElement("link");Zt(R),Be(R,"link",e),R._p=new Promise(function(M,j){R.onload=M,R.onerror=j}),R.addEventListener("load",function(){E.loading|=1}),R.addEventListener("error",function(){E.loading|=2}),E.loading|=4,sc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function jA(e,i){Fi.X(e,i);var a=za;if(a&&e){var l=hr(a).hoistableScripts,h=Ha(e),d=l.get(h);d||(d=a.querySelector(ll(h)),d||(e=C({src:e,async:!0},i),(i=kn.get(h))&&fd(e,i),d=a.createElement("script"),Zt(d),Be(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function FA(e,i){Fi.M(e,i);var a=za;if(a&&e){var l=hr(a).hoistableScripts,h=Ha(e),d=l.get(h);d||(d=a.querySelector(ll(h)),d||(e=C({src:e,async:!0,type:"module"},i),(i=kn.get(h))&&fd(e,i),d=a.createElement("script"),Zt(d),Be(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function F_(e,i,a,l){var h=(h=yn.current)?rc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ba(a.href),a=hr(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ba(a.href);var d=hr(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(ol(e)))&&!d._p&&(v.instance=d,v.state.loading=5),kn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kn.set(e,a),d||GA(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ha(a),a=hr(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ba(e){return'href="'+ie(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function G_(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function GA(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Be(i,"link",a),Zt(i),e.head.appendChild(i))}function Ha(e){return'[src="'+ie(e)+'"]'}function ll(e){return"script[async]"+e}function K_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ie(a.href)+'"]');if(l)return i.instance=l,Zt(l),l;var h=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Zt(l),Be(l,"style",h),sc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ba(a.href);var d=e.querySelector(ol(h));if(d)return i.state.loading|=4,i.instance=d,Zt(d),d;l=G_(a),(h=kn.get(h))&&hd(l,h),d=(e.ownerDocument||e).createElement("link"),Zt(d);var v=d;return v._p=new Promise(function(E,R){v.onload=E,v.onerror=R}),Be(d,"link",l),i.state.loading|=4,sc(d,a.precedence,e),i.instance=d;case"script":return d=Ha(a.src),(h=e.querySelector(ll(d)))?(i.instance=h,Zt(h),h):(l=a,(h=kn.get(d))&&(l=C({},a),fd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Zt(h),Be(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,sc(l,a.precedence,e));return i.instance}function sc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function hd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var ac=null;function Q_(e,i,a){if(ac===null){var l=new Map,h=ac=new Map;h.set(a,l)}else h=ac,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ur]||d[De]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function Y_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function KA(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function X_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ul=null;function QA(){}function YA(e,i,a){if(ul===null)throw Error(s(475));var l=ul;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ba(a.href),d=e.querySelector(ol(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=oc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,Zt(d);return}d=e.ownerDocument||e,a=G_(a),(h=kn.get(h))&&hd(a,h),d=d.createElement("link"),Zt(d);var v=d;v._p=new Promise(function(E,R){v.onload=E,v.onerror=R}),Be(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=oc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function XA(){if(ul===null)throw Error(s(475));var e=ul;return e.stylesheets&&e.count===0&&dd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&dd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function oc(){if(this.count--,this.count===0){if(this.stylesheets)dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function dd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,i.forEach($A,e),lc=null,oc.call(e))}function $A(e,i){if(!(i.state.loading&4)){var a=lc.get(e);if(a)var l=a.get(null);else{a=new Map,lc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=oc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var cl={$$typeof:H,Provider:null,Consumer:null,_currentValue:wt,_currentValue2:wt,_threadCount:0};function WA(e,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=na(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.hiddenUpdates=na(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function $_(e,i,a,l,h,d,v,E,R,M,j,K){return e=new WA(e,i,a,v,E,R,M,K),i=1,d===!0&&(i|=24),d=Mn(3,null,null,i),e.current=d,d.stateNode=e,i=Fh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Rf(d),e}function W_(e){return e?(e=va,e):va}function Z_(e,i,a,l,h,d){h=W_(h),l.context===null?l.context=h:l.pendingContext=h,l=br(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Rr(e,l,i),a!==null&&(nn(a,e,i),Qo(a,e,i))}function J_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function md(e,i){J_(e,i),(e=e.alternate)&&J_(e,i)}function ty(e){if(e.tag===13){var i=_r(e,67108864);i!==null&&nn(i,e,67108864),md(e,67108864)}}var uc=!0;function ZA(e,i,a,l){var h=S.T;S.T=null;var d=nt.p;try{nt.p=2,pd(e,i,a,l)}finally{nt.p=d,S.T=h}}function JA(e,i,a,l){var h=S.T;S.T=null;var d=nt.p;try{nt.p=8,pd(e,i,a,l)}finally{nt.p=d,S.T=h}}function pd(e,i,a,l){if(uc){var h=gd(l);if(h===null)id(e,i,l,cc,a),ny(e,l);else if(eS(h,e,i,a,l))l.stopPropagation();else if(ny(e,l),i&4&&-1<tS.indexOf(e)){for(;h!==null;){var d=Ai(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Pn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var R=1<<31-Ze(v);E.entanglements[1]|=R,v&=~R}ai(d),(te&6)===0&&(Qu=sn()+500,rl(0))}}break;case 13:E=_r(d,2),E!==null&&nn(E,d,2),$u(),md(d,2)}if(d=gd(l),d===null&&id(e,i,l,cc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else id(e,i,l,null,a)}}function gd(e){return e=oa(e),_d(e)}var cc=null;function _d(e){if(cc=null,e=Ln(e),e!==null){var i=ct(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=qt(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return cc=e,null}function ey(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xl()){case ve:return 2;case Ce:return 8;case Ei:case $l:return 32;case ho:return 268435456;default:return 32}default:return 32}}var yd=!1,Mr=null,Vr=null,kr=null,hl=new Map,fl=new Map,Ur=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ny(e,i){switch(e){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":hl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(i.pointerId)}}function dl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Ai(i),i!==null&&ty(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function eS(e,i,a,l,h){switch(i){case"focusin":return Mr=dl(Mr,e,i,a,l,h),!0;case"dragenter":return Vr=dl(Vr,e,i,a,l,h),!0;case"mouseover":return kr=dl(kr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return hl.set(d,dl(hl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,fl.set(d,dl(fl.get(d)||null,e,i,a,l,h)),!0}return!1}function iy(e){var i=Ln(e.target);if(i!==null){var a=ct(i);if(a!==null){if(i=a.tag,i===13){if(i=qt(a),i!==null){e.blockedOn=i,lr(e.priority,function(){if(a.tag===13){var l=pn(),h=_r(a,l);h!==null&&nn(h,a,l),md(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=gd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);An=l,a.target.dispatchEvent(l),An=null}else return i=Ai(a),i!==null&&ty(i),e.blockedOn=a,!1;i.shift()}return!0}function ry(e,i,a){hc(e)&&a.delete(i)}function nS(){yd=!1,Mr!==null&&hc(Mr)&&(Mr=null),Vr!==null&&hc(Vr)&&(Vr=null),kr!==null&&hc(kr)&&(kr=null),hl.forEach(ry),fl.forEach(ry)}function fc(e,i){e.blockedOn===i&&(e.blockedOn=null,yd||(yd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,nS)))}var dc=null;function sy(e){dc!==e&&(dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(_d(l||a)===null)continue;break}var d=Ai(a);d!==null&&(e.splice(i,3),i-=3,of(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function ml(e){function i(R){return fc(R,e)}Mr!==null&&fc(Mr,e),Vr!==null&&fc(Vr,e),kr!==null&&fc(kr,e),hl.forEach(i),fl.forEach(i);for(var a=0;a<Ur.length;a++){var l=Ur[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ur.length&&(a=Ur[0],a.blockedOn===null);)iy(a),a.blockedOn===null&&Ur.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Ee]||null;if(typeof d=="function")v||sy(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Ee]||null)E=v.formAction;else if(_d(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),sy(a)}}}function vd(e){this._internalRoot=e}mc.prototype.render=vd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=pn();Z_(a,l,e,i,null,null)},mc.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&Pa(),Z_(e.current,2,null,e,null,null),$u(),i[Ti]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var i=eu();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Ur.length&&i!==0&&i<Ur[a].priority;a++);Ur.splice(a,0,e),a===0&&iy(e)}};var ay=t.version;if(ay!=="19.0.0")throw Error(s(527,ay,"19.0.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=$(i),e=e!==null?ot(e):null,e=e===null?null:e.stateNode,e};var iS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Ln,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{nr=pc.inject(iS),Fe=pc}catch{}}return gl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Sg,d=bg,v=Rg,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=$_(e,1,!1,null,null,a,l,h,d,v,E,null),e[Ti]=i.current,nd(e.nodeType===8?e.parentNode:e),new vd(i)},gl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Sg,v=bg,E=Rg,R=null,M=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(M=a.formState)),i=$_(e,1,!0,i,a??null,l,h,d,v,E,R,M),i.context=W_(null),a=i.current,l=pn(),h=br(l),h.callback=null,Rr(a,h,l),i.current.lanes=l,ue(i,l),ai(i),e[Ti]=i.current,nd(e),new mc(i)},gl.version="19.0.0",gl}var gy;function dS(){if(gy)return Ad.exports;gy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ad.exports=fS(),Ad.exports}var mS=dS();const pS=()=>{};var _y={};/**
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
 */const Xv=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},gS=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],p=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},$v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,p=f?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,A=u>>2,I=(u&3)<<4|p>>4;let P=(p&15)<<2|_>>6,H=_&63;g||(H=64,f||(P=64)),s.push(n[A],n[I],n[P],n[H])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Xv(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):gS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],p=o<r.length?n[r.charAt(o)]:0;++o;const _=o<r.length?n[r.charAt(o)]:64;++o;const I=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||p==null||_==null||I==null)throw new _S;const P=u<<2|p>>4;if(s.push(P),_!==64){const H=p<<4&240|_>>2;if(s.push(H),I!==64){const X=_<<6&192|I;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yS=function(r){const t=Xv(r);return $v.encodeByteArray(t,!0)},Uc=function(r){return yS(r).replace(/\./g,"")},Wv=function(r){try{return $v.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ES=()=>vS().__FIREBASE_DEFAULTS__,TS=()=>{if(typeof process>"u"||typeof _y>"u")return;const r=_y.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},AS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Wv(r[1]);return t&&JSON.parse(t)},th=()=>{try{return pS()||ES()||TS()||AS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Zv=r=>{var t,n;return(n=(t=th())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},Jv=r=>{const t=Zv(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},tE=()=>{var r;return(r=th())===null||r===void 0?void 0:r.config},eE=r=>{var t;return(t=th())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class SS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function nE(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Uc(JSON.stringify(n)),Uc(JSON.stringify(f)),""].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function RS(){var r;const t=(r=th())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function IS(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function CS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DS(){const r=$e();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function OS(){return!RS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NS(){try{return typeof indexedDB=="object"}catch{return!1}}function MS(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}/**
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
 */const VS="FirebaseError";class _i extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=VS,Object.setPrototypeOf(this,_i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zl.prototype.create)}}class zl{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?kS(u,s):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new _i(o,p,s)}}function kS(r,t){return r.replace(US,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const US=/\{\$([^}]+)}/g;function PS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function zs(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(yy(u)&&yy(f)){if(!zs(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function yy(r){return r!==null&&typeof r=="object"}/**
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
 */function Bl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function yl(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function vl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function LS(r,t){const n=new xS(r,t);return n.subscribe.bind(n)}class xS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");zS(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=wd),o.error===void 0&&(o.error=wd),o.complete===void 0&&(o.complete=wd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zS(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function wd(){}/**
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
 */function Pe(r){return r&&r._delegate?r._delegate:r}class Xr{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ps="[DEFAULT]";/**
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
 */class BS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new SS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qS(t))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Ps){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ps){return this.instances.has(t)}getOptions(t=Ps){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:HS(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ps){return this.component?this.component.multipleInstances?t:Ps:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HS(r){return r===Ps?void 0:r}function qS(r){return r.instantiationMode==="EAGER"}/**
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
 */class jS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new BS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ot;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ot||(Ot={}));const FS={debug:Ot.DEBUG,verbose:Ot.VERBOSE,info:Ot.INFO,warn:Ot.WARN,error:Ot.ERROR,silent:Ot.SILENT},GS=Ot.INFO,KS={[Ot.DEBUG]:"log",[Ot.VERBOSE]:"log",[Ot.INFO]:"info",[Ot.WARN]:"warn",[Ot.ERROR]:"error"},QS=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=KS[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dm{constructor(t){this.name=t,this._logLevel=GS,this._logHandler=QS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?FS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ot.DEBUG,...t),this._logHandler(this,Ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ot.VERBOSE,...t),this._logHandler(this,Ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ot.INFO,...t),this._logHandler(this,Ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ot.WARN,...t),this._logHandler(this,Ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ot.ERROR,...t),this._logHandler(this,Ot.ERROR,...t)}}const YS=(r,t)=>t.some(n=>r instanceof n);let vy,Ey;function XS(){return vy||(vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $S(){return Ey||(Ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iE=new WeakMap,Hd=new WeakMap,rE=new WeakMap,Id=new WeakMap,mm=new WeakMap;function WS(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Fr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&iE.set(n,r)}).catch(()=>{}),mm.set(t,r),t}function ZS(r){if(Hd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Hd.set(r,t)}let qd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Hd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||rE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function JS(r){qd=r(qd)}function tb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Cd(this),t,...n);return rE.set(s,t.sort?t.sort():[t]),Fr(s)}:$S().includes(r)?function(...t){return r.apply(Cd(this),t),Fr(iE.get(this))}:function(...t){return Fr(r.apply(Cd(this),t))}}function eb(r){return typeof r=="function"?tb(r):(r instanceof IDBTransaction&&ZS(r),YS(r,XS())?new Proxy(r,qd):r)}function Fr(r){if(r instanceof IDBRequest)return WS(r);if(Id.has(r))return Id.get(r);const t=eb(r);return t!==r&&(Id.set(r,t),mm.set(t,r)),t}const Cd=r=>mm.get(r);function nb(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),p=Fr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Fr(f.result),g.oldVersion,g.newVersion,Fr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const ib=["get","getKey","getAll","getAllKeys","count"],rb=["put","add","delete","clear"],Dd=new Map;function Ty(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Dd.get(t))return Dd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=rb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||ib.includes(n)))return;const u=async function(f,...p){const g=this.transaction(f,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[n](...p),o&&g.done]))[0]};return Dd.set(t,u),u}JS(r=>({...r,get:(t,n,s)=>Ty(t,n)||r.get(t,n,s),has:(t,n)=>!!Ty(t,n)||r.has(t,n)}));/**
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
 */class sb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ab(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ab(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jd="@firebase/app",Ay="0.11.2";/**
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
 */const $i=new dm("@firebase/app"),ob="@firebase/app-compat",lb="@firebase/analytics-compat",ub="@firebase/analytics",cb="@firebase/app-check-compat",hb="@firebase/app-check",fb="@firebase/auth",db="@firebase/auth-compat",mb="@firebase/database",pb="@firebase/data-connect",gb="@firebase/database-compat",_b="@firebase/functions",yb="@firebase/functions-compat",vb="@firebase/installations",Eb="@firebase/installations-compat",Tb="@firebase/messaging",Ab="@firebase/messaging-compat",Sb="@firebase/performance",bb="@firebase/performance-compat",Rb="@firebase/remote-config",wb="@firebase/remote-config-compat",Ib="@firebase/storage",Cb="@firebase/storage-compat",Db="@firebase/firestore",Ob="@firebase/vertexai",Nb="@firebase/firestore-compat",Mb="firebase",Vb="11.4.0";/**
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
 */const Fd="[DEFAULT]",kb={[jd]:"fire-core",[ob]:"fire-core-compat",[ub]:"fire-analytics",[lb]:"fire-analytics-compat",[hb]:"fire-app-check",[cb]:"fire-app-check-compat",[fb]:"fire-auth",[db]:"fire-auth-compat",[mb]:"fire-rtdb",[pb]:"fire-data-connect",[gb]:"fire-rtdb-compat",[_b]:"fire-fn",[yb]:"fire-fn-compat",[vb]:"fire-iid",[Eb]:"fire-iid-compat",[Tb]:"fire-fcm",[Ab]:"fire-fcm-compat",[Sb]:"fire-perf",[bb]:"fire-perf-compat",[Rb]:"fire-rc",[wb]:"fire-rc-compat",[Ib]:"fire-gcs",[Cb]:"fire-gcs-compat",[Db]:"fire-fst",[Nb]:"fire-fst-compat",[Ob]:"fire-vertex","fire-js":"fire-js",[Mb]:"fire-js-all"};/**
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
 */const Pc=new Map,Ub=new Map,Gd=new Map;function Sy(r,t){try{r.container.addComponent(t)}catch(n){$i.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function Bs(r){const t=r.name;if(Gd.has(t))return $i.debug(`There were multiple attempts to register component ${t}.`),!1;Gd.set(t,r);for(const n of Pc.values())Sy(n,r);for(const n of Ub.values())Sy(n,r);return!0}function eh(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function gn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Pb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new zl("app","Firebase",Pb);/**
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
 */class Lb{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=Vb;function sE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Fd,automaticDataCollectionEnabled:!1},t),o=s.name;if(typeof o!="string"||!o)throw Gr.create("bad-app-name",{appName:String(o)});if(n||(n=tE()),!n)throw Gr.create("no-options");const u=Pc.get(o);if(u){if(zs(n,u.options)&&zs(s,u.config))return u;throw Gr.create("duplicate-app",{appName:o})}const f=new jS(o);for(const g of Gd.values())f.addComponent(g);const p=new Lb(n,s,f);return Pc.set(o,p),p}function pm(r=Fd){const t=Pc.get(r);if(!t&&r===Fd&&tE())return sE();if(!t)throw Gr.create("no-app",{appName:r});return t}function ui(r,t,n){var s;let o=(s=kb[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const p=[`Unable to register library "${o}" with version "${t}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&p.push("and"),f&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$i.warn(p.join(" "));return}Bs(new Xr(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const xb="firebase-heartbeat-database",zb=1,Dl="firebase-heartbeat-store";let Od=null;function aE(){return Od||(Od=nb(xb,zb,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Dl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Gr.create("idb-open",{originalErrorMessage:r.message})})),Od}async function Bb(r){try{const n=(await aE()).transaction(Dl),s=await n.objectStore(Dl).get(oE(r));return await n.done,s}catch(t){if(t instanceof _i)$i.warn(t.message);else{const n=Gr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$i.warn(n.message)}}}async function by(r,t){try{const s=(await aE()).transaction(Dl,"readwrite");await s.objectStore(Dl).put(t,oE(r)),await s.done}catch(n){if(n instanceof _i)$i.warn(n.message);else{const s=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$i.warn(s.message)}}}function oE(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Hb=1024,qb=30;class jb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ry();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>qb){const f=Kb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){$i.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ry(),{heartbeatsToSend:s,unsentEntries:o}=Fb(this._heartbeatsCache.heartbeats),u=Uc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return $i.warn(n),""}}}function Ry(){return new Date().toISOString().substring(0,10)}function Fb(r,t=Hb){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),wy(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),wy(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Gb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NS()?MS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return by(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return by(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function wy(r){return Uc(JSON.stringify({version:2,heartbeats:r})).length}function Kb(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function Qb(r){Bs(new Xr("platform-logger",t=>new sb(t),"PRIVATE")),Bs(new Xr("heartbeat",t=>new jb(t),"PRIVATE")),ui(jd,Ay,r),ui(jd,Ay,"esm2017"),ui("fire-js","")}Qb("");var Yb="firebase",Xb="11.4.0";/**
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
 */ui(Yb,Xb,"app");var Iy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,lE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(O,b){function S(){}S.prototype=b.prototype,O.D=b.prototype,O.prototype=new S,O.prototype.constructor=O,O.C=function(C,V,L){for(var w=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)w[ye-2]=arguments[ye];return b.prototype[V].apply(C,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,b,S){S||(S=0);var C=Array(16);if(typeof b=="string")for(var V=0;16>V;++V)C[V]=b.charCodeAt(S++)|b.charCodeAt(S++)<<8|b.charCodeAt(S++)<<16|b.charCodeAt(S++)<<24;else for(V=0;16>V;++V)C[V]=b[S++]|b[S++]<<8|b[S++]<<16|b[S++]<<24;b=O.g[0],S=O.g[1],V=O.g[2];var L=O.g[3],w=b+(L^S&(V^L))+C[0]+3614090360&4294967295;b=S+(w<<7&4294967295|w>>>25),w=L+(V^b&(S^V))+C[1]+3905402710&4294967295,L=b+(w<<12&4294967295|w>>>20),w=V+(S^L&(b^S))+C[2]+606105819&4294967295,V=L+(w<<17&4294967295|w>>>15),w=S+(b^V&(L^b))+C[3]+3250441966&4294967295,S=V+(w<<22&4294967295|w>>>10),w=b+(L^S&(V^L))+C[4]+4118548399&4294967295,b=S+(w<<7&4294967295|w>>>25),w=L+(V^b&(S^V))+C[5]+1200080426&4294967295,L=b+(w<<12&4294967295|w>>>20),w=V+(S^L&(b^S))+C[6]+2821735955&4294967295,V=L+(w<<17&4294967295|w>>>15),w=S+(b^V&(L^b))+C[7]+4249261313&4294967295,S=V+(w<<22&4294967295|w>>>10),w=b+(L^S&(V^L))+C[8]+1770035416&4294967295,b=S+(w<<7&4294967295|w>>>25),w=L+(V^b&(S^V))+C[9]+2336552879&4294967295,L=b+(w<<12&4294967295|w>>>20),w=V+(S^L&(b^S))+C[10]+4294925233&4294967295,V=L+(w<<17&4294967295|w>>>15),w=S+(b^V&(L^b))+C[11]+2304563134&4294967295,S=V+(w<<22&4294967295|w>>>10),w=b+(L^S&(V^L))+C[12]+1804603682&4294967295,b=S+(w<<7&4294967295|w>>>25),w=L+(V^b&(S^V))+C[13]+4254626195&4294967295,L=b+(w<<12&4294967295|w>>>20),w=V+(S^L&(b^S))+C[14]+2792965006&4294967295,V=L+(w<<17&4294967295|w>>>15),w=S+(b^V&(L^b))+C[15]+1236535329&4294967295,S=V+(w<<22&4294967295|w>>>10),w=b+(V^L&(S^V))+C[1]+4129170786&4294967295,b=S+(w<<5&4294967295|w>>>27),w=L+(S^V&(b^S))+C[6]+3225465664&4294967295,L=b+(w<<9&4294967295|w>>>23),w=V+(b^S&(L^b))+C[11]+643717713&4294967295,V=L+(w<<14&4294967295|w>>>18),w=S+(L^b&(V^L))+C[0]+3921069994&4294967295,S=V+(w<<20&4294967295|w>>>12),w=b+(V^L&(S^V))+C[5]+3593408605&4294967295,b=S+(w<<5&4294967295|w>>>27),w=L+(S^V&(b^S))+C[10]+38016083&4294967295,L=b+(w<<9&4294967295|w>>>23),w=V+(b^S&(L^b))+C[15]+3634488961&4294967295,V=L+(w<<14&4294967295|w>>>18),w=S+(L^b&(V^L))+C[4]+3889429448&4294967295,S=V+(w<<20&4294967295|w>>>12),w=b+(V^L&(S^V))+C[9]+568446438&4294967295,b=S+(w<<5&4294967295|w>>>27),w=L+(S^V&(b^S))+C[14]+3275163606&4294967295,L=b+(w<<9&4294967295|w>>>23),w=V+(b^S&(L^b))+C[3]+4107603335&4294967295,V=L+(w<<14&4294967295|w>>>18),w=S+(L^b&(V^L))+C[8]+1163531501&4294967295,S=V+(w<<20&4294967295|w>>>12),w=b+(V^L&(S^V))+C[13]+2850285829&4294967295,b=S+(w<<5&4294967295|w>>>27),w=L+(S^V&(b^S))+C[2]+4243563512&4294967295,L=b+(w<<9&4294967295|w>>>23),w=V+(b^S&(L^b))+C[7]+1735328473&4294967295,V=L+(w<<14&4294967295|w>>>18),w=S+(L^b&(V^L))+C[12]+2368359562&4294967295,S=V+(w<<20&4294967295|w>>>12),w=b+(S^V^L)+C[5]+4294588738&4294967295,b=S+(w<<4&4294967295|w>>>28),w=L+(b^S^V)+C[8]+2272392833&4294967295,L=b+(w<<11&4294967295|w>>>21),w=V+(L^b^S)+C[11]+1839030562&4294967295,V=L+(w<<16&4294967295|w>>>16),w=S+(V^L^b)+C[14]+4259657740&4294967295,S=V+(w<<23&4294967295|w>>>9),w=b+(S^V^L)+C[1]+2763975236&4294967295,b=S+(w<<4&4294967295|w>>>28),w=L+(b^S^V)+C[4]+1272893353&4294967295,L=b+(w<<11&4294967295|w>>>21),w=V+(L^b^S)+C[7]+4139469664&4294967295,V=L+(w<<16&4294967295|w>>>16),w=S+(V^L^b)+C[10]+3200236656&4294967295,S=V+(w<<23&4294967295|w>>>9),w=b+(S^V^L)+C[13]+681279174&4294967295,b=S+(w<<4&4294967295|w>>>28),w=L+(b^S^V)+C[0]+3936430074&4294967295,L=b+(w<<11&4294967295|w>>>21),w=V+(L^b^S)+C[3]+3572445317&4294967295,V=L+(w<<16&4294967295|w>>>16),w=S+(V^L^b)+C[6]+76029189&4294967295,S=V+(w<<23&4294967295|w>>>9),w=b+(S^V^L)+C[9]+3654602809&4294967295,b=S+(w<<4&4294967295|w>>>28),w=L+(b^S^V)+C[12]+3873151461&4294967295,L=b+(w<<11&4294967295|w>>>21),w=V+(L^b^S)+C[15]+530742520&4294967295,V=L+(w<<16&4294967295|w>>>16),w=S+(V^L^b)+C[2]+3299628645&4294967295,S=V+(w<<23&4294967295|w>>>9),w=b+(V^(S|~L))+C[0]+4096336452&4294967295,b=S+(w<<6&4294967295|w>>>26),w=L+(S^(b|~V))+C[7]+1126891415&4294967295,L=b+(w<<10&4294967295|w>>>22),w=V+(b^(L|~S))+C[14]+2878612391&4294967295,V=L+(w<<15&4294967295|w>>>17),w=S+(L^(V|~b))+C[5]+4237533241&4294967295,S=V+(w<<21&4294967295|w>>>11),w=b+(V^(S|~L))+C[12]+1700485571&4294967295,b=S+(w<<6&4294967295|w>>>26),w=L+(S^(b|~V))+C[3]+2399980690&4294967295,L=b+(w<<10&4294967295|w>>>22),w=V+(b^(L|~S))+C[10]+4293915773&4294967295,V=L+(w<<15&4294967295|w>>>17),w=S+(L^(V|~b))+C[1]+2240044497&4294967295,S=V+(w<<21&4294967295|w>>>11),w=b+(V^(S|~L))+C[8]+1873313359&4294967295,b=S+(w<<6&4294967295|w>>>26),w=L+(S^(b|~V))+C[15]+4264355552&4294967295,L=b+(w<<10&4294967295|w>>>22),w=V+(b^(L|~S))+C[6]+2734768916&4294967295,V=L+(w<<15&4294967295|w>>>17),w=S+(L^(V|~b))+C[13]+1309151649&4294967295,S=V+(w<<21&4294967295|w>>>11),w=b+(V^(S|~L))+C[4]+4149444226&4294967295,b=S+(w<<6&4294967295|w>>>26),w=L+(S^(b|~V))+C[11]+3174756917&4294967295,L=b+(w<<10&4294967295|w>>>22),w=V+(b^(L|~S))+C[2]+718787259&4294967295,V=L+(w<<15&4294967295|w>>>17),w=S+(L^(V|~b))+C[9]+3951481745&4294967295,O.g[0]=O.g[0]+b&4294967295,O.g[1]=O.g[1]+(V+(w<<21&4294967295|w>>>11))&4294967295,O.g[2]=O.g[2]+V&4294967295,O.g[3]=O.g[3]+L&4294967295}s.prototype.u=function(O,b){b===void 0&&(b=O.length);for(var S=b-this.blockSize,C=this.B,V=this.h,L=0;L<b;){if(V==0)for(;L<=S;)o(this,O,L),L+=this.blockSize;if(typeof O=="string"){for(;L<b;)if(C[V++]=O.charCodeAt(L++),V==this.blockSize){o(this,C),V=0;break}}else for(;L<b;)if(C[V++]=O[L++],V==this.blockSize){o(this,C),V=0;break}}this.h=V,this.o+=b},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var b=1;b<O.length-8;++b)O[b]=0;var S=8*this.o;for(b=O.length-8;b<O.length;++b)O[b]=S&255,S/=256;for(this.u(O),O=Array(16),b=S=0;4>b;++b)for(var C=0;32>C;C+=8)O[S++]=this.g[b]>>>C&255;return O};function u(O,b){var S=p;return Object.prototype.hasOwnProperty.call(S,O)?S[O]:S[O]=b(O)}function f(O,b){this.h=b;for(var S=[],C=!0,V=O.length-1;0<=V;V--){var L=O[V]|0;C&&L==b||(S[V]=L,C=!1)}this.g=S}var p={};function g(O){return-128<=O&&128>O?u(O,function(b){return new f([b|0],0>b?-1:0)}):new f([O|0],0>O?-1:0)}function _(O){if(isNaN(O)||!isFinite(O))return I;if(0>O)return Q(_(-O));for(var b=[],S=1,C=0;O>=S;C++)b[C]=O/S|0,S*=4294967296;return new f(b,0)}function A(O,b){if(O.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(O.charAt(0)=="-")return Q(A(O.substring(1),b));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=_(Math.pow(b,8)),C=I,V=0;V<O.length;V+=8){var L=Math.min(8,O.length-V),w=parseInt(O.substring(V,V+L),b);8>L?(L=_(Math.pow(b,L)),C=C.j(L).add(_(w))):(C=C.j(S),C=C.add(_(w)))}return C}var I=g(0),P=g(1),H=g(16777216);r=f.prototype,r.m=function(){if(J(this))return-Q(this).m();for(var O=0,b=1,S=0;S<this.g.length;S++){var C=this.i(S);O+=(0<=C?C:4294967296+C)*b,b*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(X(this))return"0";if(J(this))return"-"+Q(this).toString(O);for(var b=_(Math.pow(O,6)),S=this,C="";;){var V=vt(S,b).g;S=ft(S,V.j(b));var L=((0<S.g.length?S.g[0]:S.h)>>>0).toString(O);if(S=V,X(S))return L+C;for(;6>L.length;)L="0"+L;C=L+C}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function X(O){if(O.h!=0)return!1;for(var b=0;b<O.g.length;b++)if(O.g[b]!=0)return!1;return!0}function J(O){return O.h==-1}r.l=function(O){return O=ft(this,O),J(O)?-1:X(O)?0:1};function Q(O){for(var b=O.g.length,S=[],C=0;C<b;C++)S[C]=~O.g[C];return new f(S,~O.h).add(P)}r.abs=function(){return J(this)?Q(this):this},r.add=function(O){for(var b=Math.max(this.g.length,O.g.length),S=[],C=0,V=0;V<=b;V++){var L=C+(this.i(V)&65535)+(O.i(V)&65535),w=(L>>>16)+(this.i(V)>>>16)+(O.i(V)>>>16);C=w>>>16,L&=65535,w&=65535,S[V]=w<<16|L}return new f(S,S[S.length-1]&-2147483648?-1:0)};function ft(O,b){return O.add(Q(b))}r.j=function(O){if(X(this)||X(O))return I;if(J(this))return J(O)?Q(this).j(Q(O)):Q(Q(this).j(O));if(J(O))return Q(this.j(Q(O)));if(0>this.l(H)&&0>O.l(H))return _(this.m()*O.m());for(var b=this.g.length+O.g.length,S=[],C=0;C<2*b;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var V=0;V<O.g.length;V++){var L=this.i(C)>>>16,w=this.i(C)&65535,ye=O.i(V)>>>16,fe=O.i(V)&65535;S[2*C+2*V]+=w*fe,at(S,2*C+2*V),S[2*C+2*V+1]+=L*fe,at(S,2*C+2*V+1),S[2*C+2*V+1]+=w*ye,at(S,2*C+2*V+1),S[2*C+2*V+2]+=L*ye,at(S,2*C+2*V+2)}for(C=0;C<b;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=b;C<2*b;C++)S[C]=0;return new f(S,0)};function at(O,b){for(;(O[b]&65535)!=O[b];)O[b+1]+=O[b]>>>16,O[b]&=65535,b++}function lt(O,b){this.g=O,this.h=b}function vt(O,b){if(X(b))throw Error("division by zero");if(X(O))return new lt(I,I);if(J(O))return b=vt(Q(O),b),new lt(Q(b.g),Q(b.h));if(J(b))return b=vt(O,Q(b)),new lt(Q(b.g),b.h);if(30<O.g.length){if(J(O)||J(b))throw Error("slowDivide_ only works with positive integers.");for(var S=P,C=b;0>=C.l(O);)S=W(S),C=W(C);var V=mt(S,1),L=mt(C,1);for(C=mt(C,2),S=mt(S,2);!X(C);){var w=L.add(C);0>=w.l(O)&&(V=V.add(S),L=w),C=mt(C,1),S=mt(S,1)}return b=ft(O,V.j(b)),new lt(V,b)}for(V=I;0<=O.l(b);){for(S=Math.max(1,Math.floor(O.m()/b.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),L=_(S),w=L.j(b);J(w)||0<w.l(O);)S-=C,L=_(S),w=L.j(b);X(L)&&(L=P),V=V.add(L),O=ft(O,w)}return new lt(V,O)}r.A=function(O){return vt(this,O).h},r.and=function(O){for(var b=Math.max(this.g.length,O.g.length),S=[],C=0;C<b;C++)S[C]=this.i(C)&O.i(C);return new f(S,this.h&O.h)},r.or=function(O){for(var b=Math.max(this.g.length,O.g.length),S=[],C=0;C<b;C++)S[C]=this.i(C)|O.i(C);return new f(S,this.h|O.h)},r.xor=function(O){for(var b=Math.max(this.g.length,O.g.length),S=[],C=0;C<b;C++)S[C]=this.i(C)^O.i(C);return new f(S,this.h^O.h)};function W(O){for(var b=O.g.length+1,S=[],C=0;C<b;C++)S[C]=O.i(C)<<1|O.i(C-1)>>>31;return new f(S,O.h)}function mt(O,b){var S=b>>5;b%=32;for(var C=O.g.length-S,V=[],L=0;L<C;L++)V[L]=0<b?O.i(L+S)>>>b|O.i(L+S+1)<<32-b:O.i(L+S);return new f(V,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,lE=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=A,Kr=f}).apply(typeof Iy<"u"?Iy:typeof self<"u"?self:typeof window<"u"?window:{});var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uE,El,cE,Rc,Kd,hE,fE,dE;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof gc=="object"&&gc];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=n(this);function o(c,m){if(m)t:{var y=s;c=c.split(".");for(var T=0;T<c.length-1;T++){var U=c[T];if(!(U in y))break t;y=y[U]}c=c[c.length-1],T=y[c],m=m(T),m!=T&&m!=null&&t(y,c,{configurable:!0,writable:!0,value:m})}}function u(c,m){c instanceof String&&(c+="");var y=0,T=!1,U={next:function(){if(!T&&y<c.length){var B=y++;return{value:m(B,c[B]),done:!1}}return T=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function g(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function _(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function A(c,m,y){return c.call.apply(c.bind,arguments)}function I(c,m,y){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,T),c.apply(m,U)}}return function(){return c.apply(m,arguments)}}function P(c,m,y){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:I,P.apply(null,arguments)}function H(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function X(c,m){function y(){}y.prototype=m.prototype,c.aa=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(T,U,B){for(var Z=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)Z[kt-2]=arguments[kt];return m.prototype[U].apply(T,Z)}}function J(c){const m=c.length;if(0<m){const y=Array(m);for(let T=0;T<m;T++)y[T]=c[T];return y}return[]}function Q(c,m){for(let y=1;y<arguments.length;y++){const T=arguments[y];if(g(T)){const U=c.length||0,B=T.length||0;c.length=U+B;for(let Z=0;Z<B;Z++)c[U+Z]=T[Z]}else c.push(T)}}class ft{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function at(c){return/^[\s\xa0]*$/.test(c)}function lt(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function vt(c){return vt[" "](c),c}vt[" "]=function(){};var W=lt().indexOf("Gecko")!=-1&&!(lt().toLowerCase().indexOf("webkit")!=-1&&lt().indexOf("Edge")==-1)&&!(lt().indexOf("Trident")!=-1||lt().indexOf("MSIE")!=-1)&&lt().indexOf("Edge")==-1;function mt(c,m,y){for(const T in c)m.call(y,c[T],T,c)}function O(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function b(c){const m={};for(const y in c)m[y]=c[y];return m}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,m){let y,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(y in T)c[y]=T[y];for(let B=0;B<S.length;B++)y=S[B],Object.prototype.hasOwnProperty.call(T,y)&&(c[y]=T[y])}}function V(c){var m=1;c=c.split(":");const y=[];for(;0<m&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function L(c){p.setTimeout(()=>{throw c},0)}function w(){var c=qt;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class ye{constructor(){this.h=this.g=null}add(m,y){const T=fe.get();T.set(m,y),this.h?this.h.next=T:this.g=T,this.h=T}}var fe=new ft(()=>new tt,c=>c.reset());class tt{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,ct=!1,qt=new ye,D=()=>{const c=p.Promise.resolve(void 0);_t=()=>{c.then($)}};var $=()=>{for(var c;c=w();){try{c.h.call(c.g)}catch(y){L(y)}var m=fe;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}ct=!1};function ot(){this.s=this.s,this.C=this.C}ot.prototype.s=!1,ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function et(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var nt=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};p.addEventListener("test",y,m),p.removeEventListener("test",y,m)}catch{}return c}();function wt(c,m){if(et.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(W){t:{try{vt(m.nodeName);var U=!0;break t}catch{}U=!1}U||(m=null)}}else y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:bt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&wt.aa.h.call(this)}}X(wt,et);var bt={2:"touch",3:"pen",4:"mouse"};wt.prototype.h=function(){wt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var de="closure_listenable_"+(1e6*Math.random()|0),xt=0;function ne(c,m,y,T,U){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!T,this.ha=U,this.key=++xt,this.da=this.fa=!1}function Gt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function We(c){this.src=c,this.g={},this.h=0}We.prototype.add=function(c,m,y,T,U){var B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);var Z=yn(c,m,T,U);return-1<Z?(m=c[Z],y||(m.fa=!1)):(m=new ne(m,this.src,B,!!T,U),m.fa=y,c.push(m)),m};function yi(c,m){var y=m.type;if(y in c.g){var T=c.g[y],U=Array.prototype.indexOf.call(T,m,void 0),B;(B=0<=U)&&Array.prototype.splice.call(T,U,1),B&&(Gt(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function yn(c,m,y,T){for(var U=0;U<c.length;++U){var B=c[U];if(!B.da&&B.listener==m&&B.capture==!!y&&B.ha==T)return U}return-1}var tr="closure_lm_"+(1e6*Math.random()|0),er={};function vi(c,m,y,T,U){if(Array.isArray(m)){for(var B=0;B<m.length;B++)vi(c,m[B],y,T,U);return null}return y=Xl(y),c&&c[de]?c.K(m,y,_(T)?!!T.capture:!1,U):uo(c,m,y,!1,T,U)}function uo(c,m,y,T,U,B){if(!m)throw Error("Invalid event type");var Z=_(U)?!!U.capture:!!U,kt=co(c);if(kt||(c[tr]=kt=new We(c)),y=kt.add(m,y,T,Z,B),y.proxy)return y;if(T=Zs(),y.proxy=T,T.src=c,T.listener=y,c.addEventListener)nt||(U=Z),U===void 0&&(U=!1),c.addEventListener(m.toString(),T,U);else if(c.attachEvent)c.attachEvent(ta(m.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Zs(){function c(y){return m.call(c.src,c.listener,y)}const m=Th;return c}function Js(c,m,y,T,U){if(Array.isArray(m))for(var B=0;B<m.length;B++)Js(c,m[B],y,T,U);else T=_(T)?!!T.capture:!!T,y=Xl(y),c&&c[de]?(c=c.i,m=String(m).toString(),m in c.g&&(B=c.g[m],y=yn(B,y,T,U),-1<y&&(Gt(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete c.g[m],c.h--)))):c&&(c=co(c))&&(m=c.g[m.toString()],c=-1,m&&(c=yn(m,y,T,U)),(y=-1<c?m[c]:null)&&rs(y))}function rs(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[de])yi(m.i,c);else{var y=c.type,T=c.proxy;m.removeEventListener?m.removeEventListener(y,T,c.capture):m.detachEvent?m.detachEvent(ta(y),T):m.addListener&&m.removeListener&&m.removeListener(T),(y=co(m))?(yi(y,c),y.h==0&&(y.src=null,m[tr]=null)):Gt(c)}}}function ta(c){return c in er?er[c]:er[c]="on"+c}function Th(c,m){if(c.da)c=!0;else{m=new wt(m,this);var y=c.listener,T=c.ha||c.src;c.fa&&rs(c),c=y.call(T,m)}return c}function co(c){return c=c[tr],c instanceof We?c:null}var sn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xl(c){return typeof c=="function"?c:(c[sn]||(c[sn]=function(m){return c.handleEvent(m)}),c[sn])}function ve(){ot.call(this),this.i=new We(this),this.M=this,this.F=null}X(ve,ot),ve.prototype[de]=!0,ve.prototype.removeEventListener=function(c,m,y,T){Js(this,c,m,y,T)};function Ce(c,m){var y,T=c.F;if(T)for(y=[];T;T=T.F)y.push(T);if(c=c.M,T=m.type||m,typeof m=="string")m=new et(m,c);else if(m instanceof et)m.target=m.target||c;else{var U=m;m=new et(T,c),C(m,U)}if(U=!0,y)for(var B=y.length-1;0<=B;B--){var Z=m.g=y[B];U=Ei(Z,T,!0,m)&&U}if(Z=m.g=c,U=Ei(Z,T,!0,m)&&U,U=Ei(Z,T,!1,m)&&U,y)for(B=0;B<y.length;B++)Z=m.g=y[B],U=Ei(Z,T,!1,m)&&U}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var y=c.g[m],T=0;T<y.length;T++)Gt(y[T]);delete c.g[m],c.h--}}this.F=null},ve.prototype.K=function(c,m,y,T){return this.i.add(String(c),m,!1,y,T)},ve.prototype.L=function(c,m,y,T){return this.i.add(String(c),m,!0,y,T)};function Ei(c,m,y,T){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,B=0;B<m.length;++B){var Z=m[B];if(Z&&!Z.da&&Z.capture==y){var kt=Z.listener,Te=Z.ha||Z.src;Z.fa&&yi(c.i,Z),U=kt.call(Te,T)!==!1&&U}}return U&&!T.defaultPrevented}function $l(c,m,y){if(typeof c=="function")y&&(c=P(c,y));else if(c&&typeof c.handleEvent=="function")c=P(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(c,m||0)}function ho(c){c.g=$l(()=>{c.g=null,c.i&&(c.i=!1,ho(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Ah extends ot{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ho(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ss(c){ot.call(this),this.h=c,this.g={}}X(ss,ot);var nr=[];function Fe(c){mt(c.g,function(m,y){this.g.hasOwnProperty(y)&&rs(m)},c),c.g={}}ss.prototype.N=function(){ss.aa.N.call(this),Fe(this)},ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fo=p.JSON.stringify,Gn=p.JSON.parse,Ze=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function mo(){}mo.prototype.h=null;function Wl(c){return c.h||(c.h=c.i())}function Zl(){}var Kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ir(){et.call(this,"d")}X(ir,et);function Pn(){et.call(this,"c")}X(Pn,et);var vn={},rr=null;function ea(){return rr=rr||new ve}vn.La="serverreachability";function po(c){et.call(this,vn.La,c)}X(po,et);function sr(c){const m=ea();Ce(m,new po(m))}vn.STAT_EVENT="statevent";function na(c,m){et.call(this,vn.STAT_EVENT,c),this.stat=m}X(na,et);function ue(c){const m=ea();Ce(m,new na(m,c))}vn.Ma="timingevent";function Jl(c,m){et.call(this,vn.Ma,c),this.size=m}X(Jl,et);function ar(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},m)}function or(){this.g=!0}or.prototype.xa=function(){this.g=!1};function tu(c,m,y,T,U,B){c.info(function(){if(c.g)if(B)for(var Z="",kt=B.split("&"),Te=0;Te<kt.length;Te++){var Ut=kt[Te].split("=");if(1<Ut.length){var Ne=Ut[0];Ut=Ut[1];var Ae=Ne.split("_");Z=2<=Ae.length&&Ae[1]=="type"?Z+(Ne+"="+Ut+"&"):Z+(Ne+"=redacted&")}}else Z=null;else Z=B;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+m+`
`+y+`
`+Z})}function eu(c,m,y,T,U,B,Z){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+m+`
`+y+`
`+B+" "+Z})}function lr(c,m,y,T){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+De(c,y)+(T?" "+T:"")})}function Qn(c,m){c.info(function(){return"TIMEOUT: "+m})}or.prototype.info=function(){};function De(c,m){if(!c.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var T=y[c];if(!(2>T.length)){var U=T[1];if(Array.isArray(U)&&!(1>U.length)){var B=U[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Z=1;Z<U.length;Z++)U[Z]=""}}}}return fo(y)}catch{return m}}var Ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},as;function ia(){}X(ia,mo),ia.prototype.g=function(){return new XMLHttpRequest},ia.prototype.i=function(){return{}},as=new ia;function Yn(c,m,y,T){this.j=c,this.i=m,this.l=y,this.R=T||1,this.U=new ss(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new go}function go(){this.i=null,this.g="",this.h=!1}var ur={},os={};function Ln(c,m,y){c.L=1,c.v=cs(ie(m)),c.m=y,c.P=!0,Ai(c,null)}function Ai(c,m){c.F=Date.now(),Zt(c),c.A=ie(c.v);var y=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),Ri(y.i,"t",T),c.C=0,y=c.j.J,c.h=new go,c.g=pu(c.j,y?m:null,!c.m),0<c.O&&(c.M=new Ah(P(c.Y,c,c.g),c.O)),m=c.U,y=c.g,T=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(nr[0]=U.toString()),U=nr);for(var B=0;B<U.length;B++){var Z=vi(y,U[B],T||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),sr(),tu(c.i,c.u,c.A,c.l,c.R,c.m)}Yn.prototype.ca=function(c){c=c.target;const m=this.M;m&&bn(c)==3?m.j():this.Y(c)},Yn.prototype.Y=function(c){try{if(c==this.g)t:{const Ae=bn(this.g);var m=this.g.Ba();const Di=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||ou(this.g)))){this.J||Ae!=4||m==7||(m==8||0>=Di?sr(3):sr(2)),ra(this);var y=this.g.Z();this.X=y;e:if(cr(this)){var T=ou(this.g);c="";var U=T.length,B=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),un(this);var Z="";break e}this.h.i=new p.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,c+=this.h.i.decode(T[m],{stream:!(B&&m==U-1)});T.length=0,this.h.g+=c,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,eu(this.i,this.u,this.A,this.l,this.R,Ae,y),this.o){if(this.T&&!this.K){e:{if(this.g){var kt,Te=this.g;if((kt=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!at(kt)){var Ut=kt;break e}}Ut=null}if(y=Ut)lr(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cn(this,y);else{this.o=!1,this.s=3,ue(12),an(this),un(this);break t}}if(this.P){y=!0;let Le;for(;!this.J&&this.C<Z.length;)if(Le=hr(this,Z),Le==os){Ae==4&&(this.s=4,ue(14),y=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==ur){this.s=4,ue(15),lr(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else lr(this.i,this.l,Le,null),cn(this,Le);if(cr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||Z.length!=0||this.h.h||(this.s=1,ue(16),y=!1),this.o=this.o&&y,!y)lr(this.i,this.l,Z,"[Invalid Chunked Response]"),an(this),un(this);else if(0<Z.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),_s(Ne),Ne.M=!0,ue(11))}}else lr(this.i,this.l,Z,null),cn(this,Z);Ae==4&&an(this),this.o&&!this.J&&(Ae==4?fu(this.j,this):(this.o=!1,Zt(this)))}else Ch(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,ue(12)):(this.s=0,ue(13)),an(this),un(this)}}}catch{}finally{}};function cr(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function hr(c,m){var y=c.C,T=m.indexOf(`
`,y);return T==-1?os:(y=Number(m.substring(y,T)),isNaN(y)?ur:(T+=1,T+y>m.length?os:(m=m.slice(T,T+y),c.C=T+y,m)))}Yn.prototype.cancel=function(){this.J=!0,an(this)};function Zt(c){c.S=Date.now()+c.I,_o(c,c.I)}function _o(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ar(P(c.ba,c),m)}function ra(c){c.B&&(p.clearTimeout(c.B),c.B=null)}Yn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Qn(this.i,this.A),this.L!=2&&(sr(),ue(17)),an(this),this.s=2,un(this)):_o(this,this.S-c)};function un(c){c.j.G==0||c.J||fu(c.j,c)}function an(c){ra(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Fe(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function cn(c,m){try{var y=c.j;if(y.G!=0&&(y.g==c||fr(y.h,c))){if(!c.K&&fr(y.h,c)&&y.G==3){try{var T=y.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)ma(y),fa(y);else break t;Co(y),ue(18)}}else y.za=U[1],0<y.za-y.T&&37500>U[2]&&y.F&&y.v==0&&!y.C&&(y.C=ar(P(y.Za,y),6e3));if(1>=nu(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Ci(y,11)}else if((c.K||y.g==c)&&ma(y),!at(m))for(U=y.Da.g.parse(m),m=0;m<U.length;m++){let Ut=U[m];if(y.T=Ut[0],Ut=Ut[1],y.G==2)if(Ut[0]=="c"){y.K=Ut[1],y.ia=Ut[2];const Ne=Ut[3];Ne!=null&&(y.la=Ne,y.j.info("VER="+y.la));const Ae=Ut[4];Ae!=null&&(y.Aa=Ae,y.j.info("SVER="+y.Aa));const Di=Ut[5];Di!=null&&typeof Di=="number"&&0<Di&&(T=1.5*Di,y.L=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const Le=c.g;if(Le){const ei=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var B=T.h;B.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(dr(B,B.h),B.h=null))}if(T.D){const Oo=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(T.ya=Oo,zt(T.I,T.D,Oo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),T=y;var Z=c;if(T.qa=mu(T,T.J?T.ia:null,T.W),Z.K){En(T.h,Z);var kt=Z,Te=T.L;Te&&(kt.I=Te),kt.B&&(ra(kt),Zt(kt)),T.g=Z}else cu(T);0<y.i.length&&da(y)}else Ut[0]!="stop"&&Ut[0]!="close"||Ci(y,7);else y.G==3&&(Ut[0]=="stop"||Ut[0]=="close"?Ut[0]=="stop"?Ci(y,7):wo(y):Ut[0]!="noop"&&y.l&&y.l.ta(Ut),y.v=0)}}sr(4)}catch{}}var Sh=class{constructor(c,m){this.g=c,this.map=m}};function yo(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function nu(c){return c.h?1:c.g?c.g.size:0}function fr(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function dr(c,m){c.g?c.g.add(m):c.h=m}function En(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}yo.prototype.cancel=function(){if(this.i=Je(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Je(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.D);return m}return J(c.i)}function iu(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var m=[],y=c.length,T=0;T<y;T++)m.push(c[T]);return m}m=[],y=0;for(T in c)m[y++]=c[T];return m}function bh(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var m=[];c=c.length;for(var y=0;y<c;y++)m.push(y);return m}m=[],y=0;for(const T in c)m[y++]=T;return m}}}function ls(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var y=bh(c),T=iu(c),U=T.length,B=0;B<U;B++)m.call(void 0,T[B],y&&y[B],c)}var Eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sa(c,m){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var T=c[y].indexOf("="),U=null;if(0<=T){var B=c[y].substring(0,T);U=c[y].substring(T+1)}else B=c[y];m(B,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Si(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Si){this.h=c.h,mr(this,c.j),this.o=c.o,this.g=c.g,us(this,c.s),this.l=c.l;var m=c.i,y=new Xn;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),aa(this,y),this.m=c.m}else c&&(m=String(c).match(Eo))?(this.h=!1,mr(this,m[1]||"",!0),this.o=pr(m[2]||""),this.g=pr(m[3]||"",!0),us(this,m[4]),this.l=pr(m[5]||"",!0),aa(this,m[6]||"",!0),this.m=pr(m[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Si.prototype.toString=function(){var c=[],m=this.j;m&&c.push(Tn(m,To,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Tn(m,To,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Tn(y,y.charAt(0)=="/"?Ao:ru,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Tn(y,Ih)),c.join("")};function ie(c){return new Si(c)}function mr(c,m,y){c.j=y?pr(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function us(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function aa(c,m,y){m instanceof Xn?(c.i=m,So(c.i,c.h)):(y||(m=Tn(m,wh)),c.i=new Xn(m,c.h))}function zt(c,m,y){c.i.set(m,y)}function cs(c){return zt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function pr(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Tn(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,Rh),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Rh(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var To=/[#\/\?@]/g,ru=/[#\?:]/g,Ao=/[#\?]/g,wh=/[#\?@]/g,Ih=/#/g;function Xn(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function An(c){c.g||(c.g=new Map,c.h=0,c.i&&sa(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}r=Xn.prototype,r.add=function(c,m){An(this),this.i=null,c=wi(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function oa(c,m){An(c),m=wi(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function bi(c,m){return An(c),m=wi(c,m),c.g.has(m)}r.forEach=function(c,m){An(this),this.g.forEach(function(y,T){y.forEach(function(U){c.call(m,U,T,this)},this)},this)},r.na=function(){An(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let T=0;T<m.length;T++){const U=c[T];for(let B=0;B<U.length;B++)y.push(m[T])}return y},r.V=function(c){An(this);let m=[];if(typeof c=="string")bi(this,c)&&(m=m.concat(this.g.get(wi(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)m=m.concat(c[y])}return m},r.set=function(c,m){return An(this),this.i=null,c=wi(this,c),bi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function Ri(c,m,y){oa(c,m),0<y.length&&(c.i=null,c.g.set(wi(c,m),J(y)),c.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var T=m[y];const B=encodeURIComponent(String(T)),Z=this.V(T);for(T=0;T<Z.length;T++){var U=B;Z[T]!==""&&(U+="="+encodeURIComponent(String(Z[T]))),c.push(U)}}return this.i=c.join("&")};function wi(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function So(c,m){m&&!c.j&&(An(c),c.i=null,c.g.forEach(function(y,T){var U=T.toLowerCase();T!=U&&(oa(this,T),Ri(this,U,y))},c)),c.j=m}function su(c,m){const y=new or;if(p.Image){const T=new Image;T.onload=H(Sn,y,"TestLoadImage: loaded",!0,m,T),T.onerror=H(Sn,y,"TestLoadImage: error",!1,m,T),T.onabort=H(Sn,y,"TestLoadImage: abort",!1,m,T),T.ontimeout=H(Sn,y,"TestLoadImage: timeout",!1,m,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else m(!1)}function hs(c,m){const y=new or,T=new AbortController,U=setTimeout(()=>{T.abort(),Sn(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:T.signal}).then(B=>{clearTimeout(U),B.ok?Sn(y,"TestPingServer: ok",!0,m):Sn(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Sn(y,"TestPingServer: error",!1,m)})}function Sn(c,m,y,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(y)}catch{}}function fs(){this.g=new Ze}function $n(c,m,y){const T=y||"";try{ls(c,function(U,B){let Z=U;_(U)&&(Z=fo(U)),m.push(T+B+"="+encodeURIComponent(Z))})}catch(U){throw m.push(T+"type="+encodeURIComponent("_badmap")),U}}function gr(c){this.l=c.Ub||null,this.j=c.eb||!1}X(gr,mo),gr.prototype.g=function(){return new Ii(this.l,this.j)},gr.prototype.i=function(c){return function(){return c}}({});function Ii(c,m){ve.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Ii,ve),r=Ii.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,Zn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function bo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Wn(this):Zn(this),this.readyState==3&&bo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Wn(this))},r.Qa=function(c){this.g&&(this.response=c,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Zn(c)}r.setRequestHeader=function(c,m){this.u.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function Zn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ro(c){let m="";return mt(c,function(y,T){m+=T,m+=":",m+=y,m+=`\r
`}),m}function Oe(c,m,y){t:{for(T in y){var T=!1;break t}T=!0}T||(y=Ro(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):zt(c,m,y))}function jt(c){ve.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(jt,ve);var la=/^https?$/i,ds=["POST","PUT"];r=jt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,m,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():as.g(),this.v=this.o?Wl(this.o):Wl(as),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(B){au(this,B);return}if(c=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)y.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())y.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),U=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ds,m,void 0))||T||U||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of y)this.g.setRequestHeader(B,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ms(this),this.u=!0,this.g.send(c),this.u=!1}catch(B){au(this,B)}};function au(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,ua(c),Jn(c)}function ua(c){c.A||(c.A=!0,Ce(c,"complete"),Ce(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ce(this,"complete"),Ce(this,"abort"),Jn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},r.bb=function(){ca(this)};function ca(c){if(c.h&&typeof f<"u"&&(!c.v[1]||bn(c)!=4||c.Z()!=2)){if(c.u&&bn(c)==4)$l(c.Ea,0,c);else if(Ce(c,"readystatechange"),bn(c)==4){c.h=!1;try{const Z=c.Z();t:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var y;if(!(y=m)){var T;if(T=Z===0){var U=String(c.D).match(Eo)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),T=!la.test(U?U.toLowerCase():"")}y=T}if(y)Ce(c,"complete"),Ce(c,"success");else{c.m=6;try{var B=2<bn(c)?c.g.statusText:""}catch{B=""}c.l=B+" ["+c.Z()+"]",ua(c)}}finally{Jn(c)}}}}function Jn(c,m){if(c.g){ms(c);const y=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Ce(c,"ready");try{y.onreadystatechange=T}catch{}}}function ms(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function bn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Gn(m)}};function ou(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ch(c){const m={};c=(c.g&&2<=bn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(at(c[T]))continue;var y=V(c[T]);const U=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=m[U]||[];m[U]=B,B.push(y)}O(m,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ps(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function ha(c){this.Aa=0,this.i=[],this.j=new or,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ps("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ps("baseRetryDelayMs",5e3,c),this.cb=ps("retryDelaySeedMs",1e4,c),this.Wa=ps("forwardChannelMaxRetries",2,c),this.wa=ps("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new yo(c&&c.concurrentRequestLimit),this.Da=new fs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ha.prototype,r.la=8,r.G=1,r.connect=function(c,m,y,T){ue(0),this.W=c,this.H=m||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.I=mu(this,null,this.W),da(this)};function wo(c){if(lu(c),c.G==3){var m=c.U++,y=ie(c.I);if(zt(y,"SID",c.K),zt(y,"RID",m),zt(y,"TYPE","terminate"),gs(c,y),m=new Yn(c,c.j,m),m.L=2,m.v=cs(ie(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=m.v,y=!0),y||(m.g=pu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Zt(m)}du(c)}function fa(c){c.g&&(_s(c),c.g.cancel(),c.g=null)}function lu(c){fa(c),c.u&&(p.clearTimeout(c.u),c.u=null),ma(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function da(c){if(!vo(c.h)&&!c.s){c.s=!0;var m=c.Ga;_t||D(),ct||(_t(),ct=!0),qt.add(m,c),c.B=0}}function Dh(c,m){return nu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ar(P(c.Ga,c,m),Do(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Yn(this,this.j,c);let B=this.o;if(this.S&&(B?(B=b(B),C(B,this.S)):B=this.S),this.m!==null||this.O||(U.H=B,B=null),this.P)t:{for(var m=0,y=0;y<this.i.length;y++){e:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=y;break t}if(m===4096||y===this.i.length-1){m=y+1;break t}}m=1e3}else m=1e3;m=uu(this,U,m),y=ie(this.I),zt(y,"RID",c),zt(y,"CVER",22),this.D&&zt(y,"X-HTTP-Session-Id",this.D),gs(this,y),B&&(this.O?m="headers="+encodeURIComponent(String(Ro(B)))+"&"+m:this.m&&Oe(y,this.m,B)),dr(this.h,U),this.Ua&&zt(y,"TYPE","init"),this.P?(zt(y,"$req",m),zt(y,"SID","null"),U.T=!0,Ln(U,y,null)):Ln(U,y,m),this.G=2}}else this.G==3&&(c?Io(this,c):this.i.length==0||vo(this.h)||Io(this))};function Io(c,m){var y;m?y=m.l:y=c.U++;const T=ie(c.I);zt(T,"SID",c.K),zt(T,"RID",y),zt(T,"AID",c.T),gs(c,T),c.m&&c.o&&Oe(T,c.m,c.o),y=new Yn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),m&&(c.i=m.D.concat(c.i)),m=uu(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),dr(c.h,y),Ln(y,T,m)}function gs(c,m){c.H&&mt(c.H,function(y,T){zt(m,T,y)}),c.l&&ls({},function(y,T){zt(m,T,y)})}function uu(c,m,y){y=Math.min(c.i.length,y);var T=c.l?P(c.l.Na,c.l,c):null;t:{var U=c.i;let B=-1;for(;;){const Z=["count="+y];B==-1?0<y?(B=U[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let kt=!0;for(let Te=0;Te<y;Te++){let Ut=U[Te].g;const Ne=U[Te].map;if(Ut-=B,0>Ut)B=Math.max(0,U[Te].g-100),kt=!1;else try{$n(Ne,Z,"req"+Ut+"_")}catch{T&&T(Ne)}}if(kt){T=Z.join("&");break t}}}return c=c.i.splice(0,y),m.D=c,T}function cu(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;_t||D(),ct||(_t(),ct=!0),qt.add(m,c),c.v=0}}function Co(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ar(P(c.Fa,c),Do(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,hu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ar(P(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ue(10),fa(this),hu(this))};function _s(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function hu(c){c.g=new Yn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=ie(c.qa);zt(m,"RID","rpc"),zt(m,"SID",c.K),zt(m,"AID",c.T),zt(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&zt(m,"TO",c.ja),zt(m,"TYPE","xmlhttp"),gs(c,m),c.m&&c.o&&Oe(m,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=cs(ie(m)),y.m=null,y.P=!0,Ai(y,c)}r.Za=function(){this.C!=null&&(this.C=null,fa(this),Co(this),ue(19))};function ma(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function fu(c,m){var y=null;if(c.g==m){ma(c),_s(c),c.g=null;var T=2}else if(fr(c.h,m))y=m.D,En(c.h,m),T=1;else return;if(c.G!=0){if(m.o)if(T==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var U=c.B;T=ea(),Ce(T,new Jl(T,y)),da(c)}else cu(c);else if(U=m.s,U==3||U==0&&0<m.X||!(T==1&&Dh(c,m)||T==2&&Co(c)))switch(y&&0<y.length&&(m=c.h,m.i=m.i.concat(y)),U){case 1:Ci(c,5);break;case 4:Ci(c,10);break;case 3:Ci(c,6);break;default:Ci(c,2)}}}function Do(c,m){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*m}function Ci(c,m){if(c.j.info("Error code "+m),m==2){var y=P(c.fb,c),T=c.Xa;const U=!T;T=new Si(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||mr(T,"https"),cs(T),U?su(T.toString(),y):hs(T.toString(),y)}else ue(2);c.G=0,c.l&&c.l.sa(m),du(c),lu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ue(2)):(this.j.info("Failed to ping google.com"),ue(1))};function du(c){if(c.G=0,c.ka=[],c.l){const m=Je(c.h);(m.length!=0||c.i.length!=0)&&(Q(c.ka,m),Q(c.ka,c.i),c.h.i.length=0,J(c.i),c.i.length=0),c.l.ra()}}function mu(c,m,y){var T=y instanceof Si?ie(y):new Si(y);if(T.g!="")m&&(T.g=m+"."+T.g),us(T,T.s);else{var U=p.location;T=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var B=new Si(null);T&&mr(B,T),m&&(B.g=m),U&&us(B,U),y&&(B.l=y),T=B}return y=c.D,m=c.ya,y&&m&&zt(T,y,m),zt(T,"VER",c.la),gs(c,T),T}function pu(c,m,y){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new jt(new gr({eb:y})):new jt(c.pa),m.Ha(c.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function gu(){}r=gu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function pa(){}pa.prototype.g=function(c,m){return new tn(c,m)};function tn(c,m){ve.call(this),this.g=new ha(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!at(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!at(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new ti(this)}X(tn,ve),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){wo(this.g)},tn.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=fo(c),c=y);m.i.push(new Sh(m.Ya++,c)),m.G==3&&da(m)},tn.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,tn.aa.N.call(this)};function _u(c){ir.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const y in m){c=y;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}X(_u,ir);function yu(){Pn.call(this),this.status=1}X(yu,Pn);function ti(c){this.g=c}X(ti,gu),ti.prototype.ua=function(){Ce(this.g,"a")},ti.prototype.ta=function(c){Ce(this.g,new _u(c))},ti.prototype.sa=function(c){Ce(this.g,new yu)},ti.prototype.ra=function(){Ce(this.g,"b")},pa.prototype.createWebChannel=pa.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,dE=function(){return new pa},fE=function(){return ea()},hE=vn,Kd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ee.NO_ERROR=0,Ee.TIMEOUT=8,Ee.HTTP_ERROR=6,Rc=Ee,Ti.COMPLETE="complete",cE=Ti,Zl.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",ve.prototype.listen=ve.prototype.K,El=Zl,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,uE=jt}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});const Cy="@firebase/firestore",Dy="4.7.9";/**
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
 */class Ye{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let ro="11.4.0";/**
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
 */const Hs=new dm("@firebase/firestore");function qa(){return Hs.logLevel}function it(r,...t){if(Hs.logLevel<=Ot.DEBUG){const n=t.map(gm);Hs.debug(`Firestore (${ro}): ${r}`,...n)}}function Wi(r,...t){if(Hs.logLevel<=Ot.ERROR){const n=t.map(gm);Hs.error(`Firestore (${ro}): ${r}`,...n)}}function Wa(r,...t){if(Hs.logLevel<=Ot.WARN){const n=t.map(gm);Hs.warn(`Firestore (${ro}): ${r}`,...n)}}function gm(r){if(typeof r=="string")return r;try{/**
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
 */function yt(r="Unexpected state"){const t=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: `+r;throw Wi(t),new Error(t)}function Ft(r,t){r||yt()}function St(r,t){return r}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ht extends _i{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class mE{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $b{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class Wb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zb{constructor(t){this.t=t,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ft(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Qr,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;t.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},p=g=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Qr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ft(typeof s.accessToken=="string"),new mE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ft(t===null||typeof t=="string"),new Ye(t)}}class Jb{constructor(t,n,s){this.l=t,this.h=n,this.P=s,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class tR{constructor(t,n,s){this.l=t,this.h=n,this.P=s}getToken(){return Promise.resolve(new Jb(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oy{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eR{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,gn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){Ft(this.o===void 0);const s=u=>{u.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,it("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Oy(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ft(typeof n.token=="string"),this.R=n.token,new Oy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nR(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class pE{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=nR(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function Vt(r,t){return r<t?-1:r>t?1:0}function Za(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
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
 */const Ny=-62135596800,My=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(t){return we.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*My);return new we(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ht(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ht(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Ny)throw new ht(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ht(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/My}_compareTo(t){return this.seconds===t.seconds?Vt(this.nanoseconds,t.nanoseconds):Vt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Ny;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Tt{static fromTimestamp(t){return new Tt(t)}static min(){return new Tt(new we(0,0))}static max(){return new Tt(new we(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vy="__name__";class oi{constructor(t,n,s){n===void 0?n=0:n>t.length&&yt(),s===void 0?s=t.length-n:s>t.length-n&&yt(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return oi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof oi?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=oi.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Math.sign(t.length-n.length)}static compareSegments(t,n){const s=oi.isNumericId(t),o=oi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?oi.extractNumericId(t).compare(oi.extractNumericId(n)):t<n?-1:t>n?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kr.fromString(t.substring(4,t.length-2))}}class Wt extends oi{construct(t,n,s){return new Wt(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new ht(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new Wt(n)}static emptyPath(){return new Wt([])}}const iR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends oi{construct(t,n,s){return new qe(t,n,s)}static isValidIdentifier(t){return iR.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vy}static keyField(){return new qe([Vy])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ht(Y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new ht(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ht(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(s+=p,o++):(u(),o++)}if(u(),f)throw new ht(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class dt{constructor(t){this.path=t}static fromPath(t){return new dt(Wt.fromString(t))}static fromName(t){return new dt(Wt.fromString(t).popFirst(5))}static empty(){return new dt(Wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Wt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Wt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dt(new Wt(t.slice()))}}/**
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
 */const Ol=-1;function rR(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Tt.fromTimestamp(s===1e9?new we(n+1,0):new we(n,s));return new $r(o,dt.empty(),t)}function sR(r){return new $r(r.readTime,r.key,Ol)}class $r{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new $r(Tt.min(),dt.empty(),Ol)}static max(){return new $r(Tt.max(),dt.empty(),Ol)}}function aR(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=dt.comparator(r.documentKey,t.documentKey),n!==0?n:Vt(r.largestBatchId,t.largestBatchId))}/**
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
 */const oR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function so(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==oR)throw r;it("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&yt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new G((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):G.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):G.reject(n)}static resolve(t){return new G((n,s)=>{n(t)})}static reject(t){return new G((n,s)=>{s(t)})}static waitFor(t){return new G((n,s)=>{let o=0,u=0,f=!1;t.forEach(p=>{++o,p.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(t){let n=G.resolve(!1);for(const s of t)n=n.next(o=>o?G.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new G((s,o)=>{const u=t.length,f=new Array(u);let p=0;for(let g=0;g<u;g++){const _=g;n(t[_]).next(A=>{f[_]=A,++p,p===u&&s(f)},A=>o(A))}})}static doWhile(t,n){return new G((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function uR(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ao(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class nh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}nh.ae=-1;/**
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
 */const _m=-1;function ih(r){return r==null}function Lc(r){return r===0&&1/r==-1/0}function cR(r){return typeof r=="number"&&Number.isInteger(r)&&!Lc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const gE="";function hR(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=ky(t)),t=fR(r.get(n),t);return ky(t)}function fR(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case gE:n+="";break;default:n+=u}}return n}function ky(r){return r+gE+""}/**
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
 */function Uy(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Qs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function _E(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ee{constructor(t,n){this.comparator=t,this.root=n||He.EMPTY}insert(t,n){return new ee(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(t){return new ee(this.comparator,this.root.remove(t,this.comparator).copy(null,null,He.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new _c(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new _c(this.root,t,this.comparator,!1)}getReverseIterator(){return new _c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new _c(this.root,t,this.comparator,!0)}}class _c{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class He{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??He.RED,this.left=o??He.EMPTY,this.right=u??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new He(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return He.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw yt();const t=this.left.check();if(t!==this.right.check())throw yt();return t+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw yt()}get value(){throw yt()}get color(){throw yt()}get left(){throw yt()}get right(){throw yt()}copy(t,n,s,o,u){return this}insert(t,n,s){return new He(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ie{constructor(t){this.comparator=t,this.data=new ee(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Py(this.data.getIterator())}getIteratorFrom(t){return new Py(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ie(this.comparator);return n.data=t,n}}class Py{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qn{constructor(t){this.fields=t,t.sort(qe.comparator)}static empty(){return new qn([])}unionWith(t){let n=new Ie(qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new qn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Za(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class yE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class je{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new yE("Invalid base64 string: "+u):u}}(t);return new je(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new je(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Vt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}je.EMPTY_BYTE_STRING=new je("");const dR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wr(r){if(Ft(!!r),typeof r=="string"){let t=0;const n=dR.exec(r);if(Ft(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:he(r.seconds),nanos:he(r.nanos)}}function he(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Zr(r){return typeof r=="string"?je.fromBase64String(r):je.fromUint8Array(r)}/**
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
 */const vE="server_timestamp",EE="__type__",TE="__previous_value__",AE="__local_write_time__";function ym(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[EE])===null||n===void 0?void 0:n.stringValue)===vE}function rh(r){const t=r.mapValue.fields[TE];return ym(t)?rh(t):t}function Nl(r){const t=Wr(r.mapValue.fields[AE].timestampValue);return new we(t.seconds,t.nanos)}/**
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
 */class mR{constructor(t,n,s,o,u,f,p,g,_){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_}}const xc="(default)";class Ml{constructor(t,n){this.projectId=t,this.database=n||xc}static empty(){return new Ml("","")}get isDefaultDatabase(){return this.database===xc}isEqual(t){return t instanceof Ml&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const SE="__type__",pR="__max__",yc={mapValue:{}},bE="__vector__",zc="value";function Jr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ym(r)?4:_R(r)?9007199254740991:gR(r)?10:11:yt()}function pi(r,t){if(r===t)return!0;const n=Jr(r);if(n!==Jr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Nl(r).isEqual(Nl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Wr(o.timestampValue),p=Wr(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return Zr(o.bytesValue).isEqual(Zr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return he(o.geoPointValue.latitude)===he(u.geoPointValue.latitude)&&he(o.geoPointValue.longitude)===he(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return he(o.integerValue)===he(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=he(o.doubleValue),p=he(u.doubleValue);return f===p?Lc(f)===Lc(p):isNaN(f)&&isNaN(p)}return!1}(r,t);case 9:return Za(r.arrayValue.values||[],t.arrayValue.values||[],pi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},p=u.mapValue.fields||{};if(Uy(f)!==Uy(p))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(p[g]===void 0||!pi(f[g],p[g])))return!1;return!0}(r,t);default:return yt()}}function Vl(r,t){return(r.values||[]).find(n=>pi(n,t))!==void 0}function Ja(r,t){if(r===t)return 0;const n=Jr(r),s=Jr(t);if(n!==s)return Vt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Vt(r.booleanValue,t.booleanValue);case 2:return function(u,f){const p=he(u.integerValue||u.doubleValue),g=he(f.integerValue||f.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(r,t);case 3:return Ly(r.timestampValue,t.timestampValue);case 4:return Ly(Nl(r),Nl(t));case 5:return Vt(r.stringValue,t.stringValue);case 6:return function(u,f){const p=Zr(u),g=Zr(f);return p.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const p=u.split("/"),g=f.split("/");for(let _=0;_<p.length&&_<g.length;_++){const A=Vt(p[_],g[_]);if(A!==0)return A}return Vt(p.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const p=Vt(he(u.latitude),he(f.latitude));return p!==0?p:Vt(he(u.longitude),he(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return xy(r.arrayValue,t.arrayValue);case 10:return function(u,f){var p,g,_,A;const I=u.fields||{},P=f.fields||{},H=(p=I[zc])===null||p===void 0?void 0:p.arrayValue,X=(g=P[zc])===null||g===void 0?void 0:g.arrayValue,J=Vt(((_=H==null?void 0:H.values)===null||_===void 0?void 0:_.length)||0,((A=X==null?void 0:X.values)===null||A===void 0?void 0:A.length)||0);return J!==0?J:xy(H,X)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===yc.mapValue&&f===yc.mapValue)return 0;if(u===yc.mapValue)return 1;if(f===yc.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),_=f.fields||{},A=Object.keys(_);g.sort(),A.sort();for(let I=0;I<g.length&&I<A.length;++I){const P=Vt(g[I],A[I]);if(P!==0)return P;const H=Ja(p[g[I]],_[A[I]]);if(H!==0)return H}return Vt(g.length,A.length)}(r.mapValue,t.mapValue);default:throw yt()}}function Ly(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Vt(r,t);const n=Wr(r),s=Wr(t),o=Vt(n.seconds,s.seconds);return o!==0?o:Vt(n.nanos,s.nanos)}function xy(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Ja(n[o],s[o]);if(u)return u}return Vt(n.length,s.length)}function to(r){return Qd(r)}function Qd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Wr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Zr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return dt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Qd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Qd(n.fields[f])}`;return o+"}"}(r.mapValue):yt()}function wc(r){switch(Jr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=rh(r);return t?16+wc(t):16;case 5:return 2*r.stringValue.length;case 6:return Zr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+wc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Qs(s.fields,(u,f)=>{o+=u.length+wc(f)}),o}(r.mapValue);default:throw yt()}}function Yd(r){return!!r&&"integerValue"in r}function vm(r){return!!r&&"arrayValue"in r}function zy(r){return!!r&&"nullValue"in r}function By(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ic(r){return!!r&&"mapValue"in r}function gR(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[SE])===null||n===void 0?void 0:n.stringValue)===bE}function Sl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Qs(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Sl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Sl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function _R(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===pR}/**
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
 */class Un{constructor(t){this.value=t}static empty(){return new Un({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ic(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Sl(n)}setAll(t){let n=qe.emptyPath(),s={},o=[];t.forEach((f,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=p.popLast()}f?s[p.lastSegment()]=Sl(f):o.push(p.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Ic(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Qs(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new Un(Sl(this.value))}}function RE(r){const t=[];return Qs(r.fields,(n,s)=>{const o=new qe([n]);if(Ic(s)){const u=RE(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new qn(t)}/**
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
 */class Xe{constructor(t,n,s,o,u,f,p){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(t){return new Xe(t,0,Tt.min(),Tt.min(),Tt.min(),Un.empty(),0)}static newFoundDocument(t,n,s,o){return new Xe(t,1,n,Tt.min(),s,o,0)}static newNoDocument(t,n){return new Xe(t,2,n,Tt.min(),Tt.min(),Un.empty(),0)}static newUnknownDocument(t,n){return new Xe(t,3,n,Tt.min(),Tt.min(),Un.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Tt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Un.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Tt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Xe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bc{constructor(t,n){this.position=t,this.inclusive=n}}function Hy(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=dt.comparator(dt.fromName(f.referenceValue),n.key):s=Ja(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function qy(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!pi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Hc{constructor(t,n="asc"){this.field=t,this.dir=n}}function yR(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class wE{}class Re extends wE{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new ER(t,n,s):n==="array-contains"?new SR(t,s):n==="in"?new bR(t,s):n==="not-in"?new RR(t,s):n==="array-contains-any"?new wR(t,s):new Re(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new TR(t,s):new AR(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ja(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(Ja(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return yt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gi extends wE{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new gi(t,n)}matches(t){return IE(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function IE(r){return r.op==="and"}function CE(r){return vR(r)&&IE(r)}function vR(r){for(const t of r.filters)if(t instanceof gi)return!1;return!0}function Xd(r){if(r instanceof Re)return r.field.canonicalString()+r.op.toString()+to(r.value);if(CE(r))return r.filters.map(t=>Xd(t)).join(",");{const t=r.filters.map(n=>Xd(n)).join(",");return`${r.op}(${t})`}}function DE(r,t){return r instanceof Re?function(s,o){return o instanceof Re&&s.op===o.op&&s.field.isEqual(o.field)&&pi(s.value,o.value)}(r,t):r instanceof gi?function(s,o){return o instanceof gi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,p)=>u&&DE(f,o.filters[p]),!0):!1}(r,t):void yt()}function OE(r){return r instanceof Re?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(r):r instanceof gi?function(n){return n.op.toString()+" {"+n.getFilters().map(OE).join(" ,")+"}"}(r):"Filter"}class ER extends Re{constructor(t,n,s){super(t,n,s),this.key=dt.fromName(s.referenceValue)}matches(t){const n=dt.comparator(t.key,this.key);return this.matchesComparison(n)}}class TR extends Re{constructor(t,n){super(t,"in",n),this.keys=NE("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class AR extends Re{constructor(t,n){super(t,"not-in",n),this.keys=NE("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function NE(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>dt.fromName(s.referenceValue))}class SR extends Re{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return vm(n)&&Vl(n.arrayValue,this.value)}}class bR extends Re{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Vl(this.value.arrayValue,n)}}class RR extends Re{constructor(t,n){super(t,"not-in",n)}matches(t){if(Vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Vl(this.value.arrayValue,n)}}class wR extends Re{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!vm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vl(this.value.arrayValue,s))}}/**
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
 */class IR{constructor(t,n=null,s=[],o=[],u=null,f=null,p=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=p,this.le=null}}function jy(r,t=null,n=[],s=[],o=null,u=null,f=null){return new IR(r,t,n,s,o,u,f)}function Em(r){const t=St(r);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Xd(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ih(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>to(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>to(s)).join(",")),t.le=n}return t.le}function Tm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!yR(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!DE(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!qy(r.startAt,t.startAt)&&qy(r.endAt,t.endAt)}function $d(r){return dt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class sh{constructor(t,n=null,s=[],o=[],u=null,f="F",p=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function CR(r,t,n,s,o,u,f,p){return new sh(r,t,n,s,o,u,f,p)}function ME(r){return new sh(r)}function Fy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function DR(r){return r.collectionGroup!==null}function bl(r){const t=St(r);if(t.he===null){t.he=[];const n=new Set;for(const u of t.explicitOrderBy)t.he.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Ie(qe.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(p=p.add(_.field))})}),p})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.he.push(new Hc(u,s))}),n.has(qe.keyField().canonicalString())||t.he.push(new Hc(qe.keyField(),s))}return t.he}function ci(r){const t=St(r);return t.Pe||(t.Pe=OR(t,bl(r))),t.Pe}function OR(r,t){if(r.limitType==="F")return jy(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Hc(o.field,u)});const n=r.endAt?new Bc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Bc(r.startAt.position,r.startAt.inclusive):null;return jy(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function Wd(r,t,n){return new sh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function ah(r,t){return Tm(ci(r),ci(t))&&r.limitType===t.limitType}function VE(r){return`${Em(ci(r))}|lt:${r.limitType}`}function ja(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>OE(o)).join(", ")}]`),ih(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>to(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>to(o)).join(",")),`Target(${s})`}(ci(r))}; limitType=${r.limitType})`}function oh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):dt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of bl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,p,g){const _=Hy(f,p,g);return f.inclusive?_<=0:_<0}(s.startAt,bl(s),o)||s.endAt&&!function(f,p,g){const _=Hy(f,p,g);return f.inclusive?_>=0:_>0}(s.endAt,bl(s),o))}(r,t)}function NR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function kE(r){return(t,n)=>{let s=!1;for(const o of bl(r)){const u=MR(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function MR(r,t,n){const s=r.field.isKeyField()?dt.comparator(t.key,n.key):function(u,f,p){const g=f.data.field(u),_=p.data.field(u);return g!==null&&_!==null?Ja(g,_):yt()}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return yt()}}/**
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
 */class Ys{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Qs(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return _E(this.inner)}size(){return this.innerSize}}/**
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
 */const VR=new ee(dt.comparator);function Zi(){return VR}const UE=new ee(dt.comparator);function Tl(...r){let t=UE;for(const n of r)t=t.insert(n.key,n);return t}function PE(r){let t=UE;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ls(){return Rl()}function LE(){return Rl()}function Rl(){return new Ys(r=>r.toString(),(r,t)=>r.isEqual(t))}const kR=new ee(dt.comparator),UR=new Ie(dt.comparator);function Nt(...r){let t=UR;for(const n of r)t=t.add(n);return t}const PR=new Ie(Vt);function LR(){return PR}/**
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
 */function Am(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lc(t)?"-0":t}}function xE(r){return{integerValue:""+r}}function xR(r,t){return cR(t)?xE(t):Am(r,t)}/**
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
 */class lh{constructor(){this._=void 0}}function zR(r,t,n){return r instanceof qc?function(o,u){const f={fields:{[EE]:{stringValue:vE},[AE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&ym(u)&&(u=rh(u)),u&&(f.fields[TE]=u),{mapValue:f}}(n,t):r instanceof kl?BE(r,t):r instanceof Ul?HE(r,t):function(o,u){const f=zE(o,u),p=Gy(f)+Gy(o.Ie);return Yd(f)&&Yd(o.Ie)?xE(p):Am(o.serializer,p)}(r,t)}function BR(r,t,n){return r instanceof kl?BE(r,t):r instanceof Ul?HE(r,t):n}function zE(r,t){return r instanceof jc?function(s){return Yd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class qc extends lh{}class kl extends lh{constructor(t){super(),this.elements=t}}function BE(r,t){const n=qE(t);for(const s of r.elements)n.some(o=>pi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Ul extends lh{constructor(t){super(),this.elements=t}}function HE(r,t){let n=qE(t);for(const s of r.elements)n=n.filter(o=>!pi(o,s));return{arrayValue:{values:n}}}class jc extends lh{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Gy(r){return he(r.integerValue||r.doubleValue)}function qE(r){return vm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function HR(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof kl&&o instanceof kl||s instanceof Ul&&o instanceof Ul?Za(s.elements,o.elements,pi):s instanceof jc&&o instanceof jc?pi(s.Ie,o.Ie):s instanceof qc&&o instanceof qc}(r.transform,t.transform)}class qR{constructor(t,n){this.version=t,this.transformResults=n}}class hi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new hi}static exists(t){return new hi(void 0,t)}static updateTime(t){return new hi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class uh{}function jE(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Sm(r.key,hi.none()):new Hl(r.key,r.data,hi.none());{const n=r.data,s=Un.empty();let o=new Ie(qe.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Xs(r.key,s,new qn(o.toArray()),hi.none())}}function jR(r,t,n){r instanceof Hl?function(o,u,f){const p=o.value.clone(),g=Qy(o.fieldTransforms,u,f.transformResults);p.setAll(g),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):r instanceof Xs?function(o,u,f){if(!Cc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const p=Qy(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(FE(o)),g.setAll(p),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function wl(r,t,n,s){return r instanceof Hl?function(u,f,p,g){if(!Cc(u.precondition,f))return p;const _=u.value.clone(),A=Yy(u.fieldTransforms,g,f);return _.setAll(A),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),null}(r,t,n,s):r instanceof Xs?function(u,f,p,g){if(!Cc(u.precondition,f))return p;const _=Yy(u.fieldTransforms,g,f),A=f.data;return A.setAll(FE(u)),A.setAll(_),f.convertToFoundDocument(f.version,A).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(I=>I.field))}(r,t,n,s):function(u,f,p){return Cc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p}(r,t,n)}function FR(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=zE(s.transform,o||null);u!=null&&(n===null&&(n=Un.empty()),n.set(s.field,u))}return n||null}function Ky(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Za(s,o,(u,f)=>HR(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Hl extends uh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Xs extends uh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function FE(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Qy(r,t,n){const s=new Map;Ft(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,p=t.data.field(u.field);s.set(u.field,BR(f,p,n[o]))}return s}function Yy(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,zR(u,f,t))}return s}class Sm extends uh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GR extends uh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KR{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&jR(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=wl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=wl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=LE();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=n.has(o.key)?null:p;const g=jE(f,p);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(Tt.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Nt())}isEqual(t){return this.batchId===t.batchId&&Za(this.mutations,t.mutations,(n,s)=>Ky(n,s))&&Za(this.baseMutations,t.baseMutations,(n,s)=>Ky(n,s))}}class bm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ft(t.mutations.length===s.length);let o=function(){return kR}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new bm(t,n,s,o)}}/**
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
 */class QR{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class YR{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var _e,Lt;function XR(r){switch(r){case Y.OK:return yt();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return yt()}}function GE(r){if(r===void 0)return Wi("GRPC error has no .code"),Y.UNKNOWN;switch(r){case _e.OK:return Y.OK;case _e.CANCELLED:return Y.CANCELLED;case _e.UNKNOWN:return Y.UNKNOWN;case _e.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case _e.INTERNAL:return Y.INTERNAL;case _e.UNAVAILABLE:return Y.UNAVAILABLE;case _e.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case _e.NOT_FOUND:return Y.NOT_FOUND;case _e.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case _e.ABORTED:return Y.ABORTED;case _e.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case _e.DATA_LOSS:return Y.DATA_LOSS;default:return yt()}}(Lt=_e||(_e={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $R(){return new TextEncoder}/**
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
 */const WR=new Kr([4294967295,4294967295],0);function Xy(r){const t=$R().encode(r),n=new lE;return n.update(t),new Uint8Array(n.digest())}function $y(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Kr([n,s],0),new Kr([o,u],0)]}class Rm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Al(`Invalid padding: ${n}`);if(s<0)throw new Al(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Al(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Al(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=Kr.fromNumber(this.Ee)}Ae(t,n,s){let o=t.add(n.multiply(Kr.fromNumber(s)));return o.compare(WR)===1&&(o=new Kr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=Xy(t),[s,o]=$y(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);if(!this.Re(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Rm(u,o,n);return s.forEach(p=>f.insert(p)),f}insert(t){if(this.Ee===0)return;const n=Xy(t),[s,o]=$y(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);this.Ve(f)}}Ve(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Al extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ch{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,ql.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new ch(Tt.min(),o,new ee(Vt),Zi(),Nt())}}class ql{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new ql(s,n,Nt(),Nt(),Nt())}}/**
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
 */class Dc{constructor(t,n,s,o){this.me=t,this.removedTargetIds=n,this.key=s,this.fe=o}}class KE{constructor(t,n){this.targetId=t,this.ge=n}}class QE{constructor(t,n,s=je.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Wy{constructor(){this.pe=0,this.ye=Zy(),this.we=je.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=Nt(),n=Nt(),s=Nt();return this.ye.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:yt()}}),new ql(this.we,this.be,t,n,s)}Me(){this.Se=!1,this.ye=Zy()}xe(t,n){this.Se=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Ft(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class ZR{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Zi(),this.$e=vc(),this.Ke=vc(),this.Ue=new ee(Vt)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const s=this.He(n);switch(t.state){case 0:this.Je(n)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(t.resumeToken));break;default:yt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((s,o)=>{this.Je(o)&&n(o)})}Ze(t){const n=t.targetId,s=t.ge.count,o=this.Xe(n);if(o){const u=o.target;if($d(u))if(s===0){const f=new dt(u.path);this.ze(n,f,Xe.newNoDocument(f,Tt.min()))}else Ft(s===1);else{const f=this.et(n);if(f!==s){const p=this.tt(t),g=p?this.nt(p,t,f):1;if(g!==0){this.Ye(n);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,_)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,p;try{f=Zr(s).toUint8Array()}catch(g){if(g instanceof yE)return Wa("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Rm(f,o,u)}catch(g){return Wa(g instanceof Al?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.Ee===0?null:p}nt(t,n,s){return n.ge.count===s-this.st(t,n.targetId)?0:2}st(t,n){const s=this.ke.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ke.it(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.ze(n,u,null),o++)}),o}ot(t){const n=new Map;this.qe.forEach((u,f)=>{const p=this.Xe(f);if(p){if(u.current&&$d(p.target)){const g=new dt(p.target.path);this._t(g).has(f)||this.ut(f,g)||this.ze(f,g,Xe.newNoDocument(g,t))}u.ve&&(n.set(f,u.Fe()),u.Me())}});let s=Nt();this.Ke.forEach((u,f)=>{let p=!0;f.forEachWhile(g=>{const _=this.Xe(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.Qe.forEach((u,f)=>f.setReadTime(t));const o=new ch(t,n,this.Ue,this.Qe,s);return this.Qe=Zi(),this.$e=vc(),this.Ke=vc(),this.Ue=new ee(Vt),o}Ge(t,n){if(!this.Je(t))return;const s=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(t))}ze(t,n,s){if(!this.Je(t))return;const o=this.He(t);this.ut(t,n)?o.xe(n,1):o.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(t)),this.Ke=this.Ke.insert(n,this.ct(n).add(t)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new Wy,this.qe.set(t,n)),n}ct(t){let n=this.Ke.get(t);return n||(n=new Ie(Vt),this.Ke=this.Ke.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Ie(Vt),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||it("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Wy),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function vc(){return new ee(dt.comparator)}function Zy(){return new ee(dt.comparator)}const JR={asc:"ASCENDING",desc:"DESCENDING"},tw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ew={and:"AND",or:"OR"};class nw{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Zd(r,t){return r.useProto3Json||ih(t)?t:{value:t}}function Fc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function YE(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function iw(r,t){return Fc(r,t.toTimestamp())}function fi(r){return Ft(!!r),Tt.fromTimestamp(function(n){const s=Wr(n);return new we(s.seconds,s.nanos)}(r))}function wm(r,t){return Jd(r,t).canonicalString()}function Jd(r,t){const n=function(o){return new Wt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function XE(r){const t=Wt.fromString(r);return Ft(tT(t)),t}function tm(r,t){return wm(r.databaseId,t.path)}function Nd(r,t){const n=XE(t);if(n.get(1)!==r.databaseId.projectId)throw new ht(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ht(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new dt(WE(n))}function $E(r,t){return wm(r.databaseId,t)}function rw(r){const t=XE(r);return t.length===4?Wt.emptyPath():WE(t)}function em(r){return new Wt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function WE(r){return Ft(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Jy(r,t,n){return{name:tm(r,t),fields:n.value.mapValue.fields}}function sw(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:yt()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(_,A){return _.useProto3Json?(Ft(A===void 0||typeof A=="string"),je.fromBase64String(A||"")):(Ft(A===void 0||A instanceof Buffer||A instanceof Uint8Array),je.fromUint8Array(A||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,p=f&&function(_){const A=_.code===void 0?Y.UNKNOWN:GE(_.code);return new ht(A,_.message||"")}(f);n=new QE(s,o,u,p||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Nd(r,s.document.name),u=fi(s.document.updateTime),f=s.document.createTime?fi(s.document.createTime):Tt.min(),p=new Un({mapValue:{fields:s.document.fields}}),g=Xe.newFoundDocument(o,u,f,p),_=s.targetIds||[],A=s.removedTargetIds||[];n=new Dc(_,A,g.key,g)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Nd(r,s.document),u=s.readTime?fi(s.readTime):Tt.min(),f=Xe.newNoDocument(o,u),p=s.removedTargetIds||[];n=new Dc([],p,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Nd(r,s.document),u=s.removedTargetIds||[];n=new Dc([],u,o,null)}else{if(!("filter"in t))return yt();{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new YR(o,u),p=s.targetId;n=new KE(p,f)}}return n}function aw(r,t){let n;if(t instanceof Hl)n={update:Jy(r,t.key,t.value)};else if(t instanceof Sm)n={delete:tm(r,t.key)};else if(t instanceof Xs)n={update:Jy(r,t.key,t.data),updateMask:pw(t.fieldMask)};else{if(!(t instanceof GR))return yt();n={verify:tm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const p=f.transform;if(p instanceof qc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof kl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Ul)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof jc)return{fieldPath:f.field.canonicalString(),increment:p.Ie};throw yt()}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:iw(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:yt()}(r,t.precondition)),n}function ow(r,t){return r&&r.length>0?(Ft(t!==void 0),r.map(n=>function(o,u){let f=o.updateTime?fi(o.updateTime):fi(u);return f.isEqual(Tt.min())&&(f=fi(u)),new qR(f,o.transformResults||[])}(n,t))):[]}function lw(r,t){return{documents:[$E(r,t.path)]}}function uw(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=$E(r,o);const u=function(_){if(_.length!==0)return JE(gi.create(_,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(_){if(_.length!==0)return _.map(A=>function(P){return{field:Fa(P.field),direction:fw(P.dir)}}(A))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const p=Zd(r,t.limit);return p!==null&&(n.structuredQuery.limit=p),t.startAt&&(n.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(t.endAt)),{ht:n,parent:o}}function cw(r){let t=rw(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ft(s===1);const A=n.from[0];A.allDescendants?o=A.collectionId:t=t.child(A.collectionId)}let u=[];n.where&&(u=function(I){const P=ZE(I);return P instanceof gi&&CE(P)?P.getFilters():[P]}(n.where));let f=[];n.orderBy&&(f=function(I){return I.map(P=>function(X){return new Hc(Ga(X.field),function(Q){switch(Q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(P))}(n.orderBy));let p=null;n.limit&&(p=function(I){let P;return P=typeof I=="object"?I.value:I,ih(P)?null:P}(n.limit));let g=null;n.startAt&&(g=function(I){const P=!!I.before,H=I.values||[];return new Bc(H,P)}(n.startAt));let _=null;return n.endAt&&(_=function(I){const P=!I.before,H=I.values||[];return new Bc(H,P)}(n.endAt)),CR(t,o,f,u,p,"F",g,_)}function hw(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return yt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ZE(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ga(n.unaryFilter.field);return Re.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ga(n.unaryFilter.field);return Re.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ga(n.unaryFilter.field);return Re.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ga(n.unaryFilter.field);return Re.create(f,"!=",{nullValue:"NULL_VALUE"});default:return yt()}}(r):r.fieldFilter!==void 0?function(n){return Re.create(Ga(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return yt()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return gi.create(n.compositeFilter.filters.map(s=>ZE(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return yt()}}(n.compositeFilter.op))}(r):yt()}function fw(r){return JR[r]}function dw(r){return tw[r]}function mw(r){return ew[r]}function Fa(r){return{fieldPath:r.canonicalString()}}function Ga(r){return qe.fromServerFormat(r.fieldPath)}function JE(r){return r instanceof Re?function(n){if(n.op==="=="){if(By(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NAN"}};if(zy(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(By(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NOT_NAN"}};if(zy(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fa(n.field),op:dw(n.op),value:n.value}}}(r):r instanceof gi?function(n){const s=n.getFilters().map(o=>JE(o));return s.length===1?s[0]:{compositeFilter:{op:mw(n.op),filters:s}}}(r):yt()}function pw(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function tT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class jr{constructor(t,n,s,o,u=Tt.min(),f=Tt.min(),p=je.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(t){return new jr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class gw{constructor(t){this.Tt=t}}function _w(r){const t=cw({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Wd(t,t.limit,"L"):t}/**
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
 */class yw{constructor(){this.Tn=new vw}addToCollectionParentIndex(t,n){return this.Tn.add(n),G.resolve()}getCollectionParents(t,n){return G.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return G.resolve()}deleteFieldIndex(t,n){return G.resolve()}deleteAllFieldIndexes(t){return G.resolve()}createTargetIndexes(t,n){return G.resolve()}getDocumentsMatchingTarget(t,n){return G.resolve(null)}getIndexType(t,n){return G.resolve(0)}getFieldIndexes(t,n){return G.resolve([])}getNextCollectionGroupToUpdate(t){return G.resolve(null)}getMinOffset(t,n){return G.resolve($r.min())}getMinOffsetFromCollectionGroup(t,n){return G.resolve($r.min())}updateCollectionGroup(t,n,s){return G.resolve()}updateIndexEntries(t,n){return G.resolve()}}class vw{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ie(Wt.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ie(Wt.comparator)).toArray()}}/**
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
 */const tv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eT=41943040;class ln{static withCacheSize(t){return new ln(t,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(eT,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
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
 */class eo{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new eo(0)}static Un(){return new eo(-1)}}/**
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
 */const ev="LruGarbageCollector",Ew=1048576;function nv([r,t],[n,s]){const o=Vt(r,n);return o===0?Vt(t,s):o}class Tw{constructor(t){this.Hn=t,this.buffer=new Ie(nv),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();nv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Aw{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){it(ev,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ao(n)?it(ev,"Ignoring IndexedDB error during garbage collection: ",n):await so(n)}await this.er(3e5)})}}class Sw{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return G.resolve(nh.ae);const s=new Tw(n);return this.tr.forEachTarget(t,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(t,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.tr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(it("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(tv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(it("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tv):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let s,o,u,f,p,g,_;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(it("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,f=Date.now(),this.nthSequenceNumber(t,o))).next(I=>(s=I,p=Date.now(),this.removeTargets(t,s,n))).next(I=>(u=I,g=Date.now(),this.removeOrphanedDocuments(t,s))).next(I=>(_=Date.now(),qa()<=Ot.DEBUG&&it("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-A}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${I} documents in `+(_-g)+`ms
Total Duration: ${_-A}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:I})))}}function bw(r,t){return new Sw(r,t)}/**
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
 */class Rw{constructor(){this.changes=new Ys(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Xe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?G.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ww{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Iw{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&wl(s.mutation,o,qn.empty(),we.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Nt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Nt()){const o=Ls();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=Tl();return u.forEach((p,g)=>{f=f.insert(p,g.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Ls();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Nt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,p)=>{n.set(f,p)})})}computeViews(t,n,s,o){let u=Zi();const f=Rl(),p=function(){return Rl()}();return n.forEach((g,_)=>{const A=s.get(_.key);o.has(_.key)&&(A===void 0||A.mutation instanceof Xs)?u=u.insert(_.key,_):A!==void 0?(f.set(_.key,A.mutation.getFieldMask()),wl(A.mutation,_,A.mutation.getFieldMask(),we.now())):f.set(_.key,qn.empty())}),this.recalculateAndSaveOverlays(t,u).next(g=>(g.forEach((_,A)=>f.set(_,A)),n.forEach((_,A)=>{var I;return p.set(_,new ww(A,(I=f.get(_))!==null&&I!==void 0?I:null))}),p))}recalculateAndSaveOverlays(t,n){const s=Rl();let o=new ee((f,p)=>f-p),u=Nt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const p of f)p.keys().forEach(g=>{const _=n.get(g);if(_===null)return;let A=s.get(g)||qn.empty();A=p.applyToLocalView(_,A),s.set(g,A);const I=(o.get(p.batchId)||Nt()).add(g);o=o.insert(p.batchId,I)})}).next(()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,A=g.value,I=LE();A.forEach(P=>{if(!u.has(P)){const H=jE(n.get(P),s.get(P));H!==null&&I.set(P,H),u=u.add(P)}}),f.push(this.documentOverlayCache.saveOverlays(t,_,I))}return G.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return dt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):DR(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):G.resolve(Ls());let p=Ol,g=u;return f.next(_=>G.forEach(_,(A,I)=>(p<I.largestBatchId&&(p=I.largestBatchId),u.get(A)?G.resolve():this.remoteDocumentCache.getEntry(t,A).next(P=>{g=g.insert(A,P)}))).next(()=>this.populateOverlays(t,_,u)).next(()=>this.computeViews(t,g,_,Nt())).next(A=>({batchId:p,changes:PE(A)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new dt(n)).next(s=>{let o=Tl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=Tl();return this.indexManager.getCollectionParents(t,u).next(p=>G.forEach(p,g=>{const _=function(I,P){return new sh(P,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,_,s,o).next(A=>{A.forEach((I,P)=>{f=f.insert(I,P)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((g,_)=>{const A=_.getKey();f.get(A)===null&&(f=f.insert(A,Xe.newInvalidDocument(A)))});let p=Tl();return f.forEach((g,_)=>{const A=u.get(g);A!==void 0&&wl(A.mutation,_,qn.empty(),we.now()),oh(n,_)&&(p=p.insert(g,_))}),p})}}/**
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
 */class Cw{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return G.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:fi(o.createTime)}}(n)),G.resolve()}getNamedQuery(t,n){return G.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:_w(o.bundledQuery),readTime:fi(o.readTime)}}(n)),G.resolve()}}/**
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
 */class Dw{constructor(){this.overlays=new ee(dt.comparator),this.Rr=new Map}getOverlay(t,n){return G.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ls();return G.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.Et(t,n,u)}),G.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),G.resolve()}getOverlaysForCollection(t,n,s){const o=Ls(),u=n.length+1,f=new dt(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return G.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new ee((_,A)=>_-A);const f=this.overlays.getIterator();for(;f.hasNext();){const _=f.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>s){let A=u.get(_.largestBatchId);A===null&&(A=Ls(),u=u.insert(_.largestBatchId,A)),A.set(_.getKey(),_)}}const p=Ls(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,A)=>p.set(_,A)),!(p.size()>=o)););return G.resolve(p)}Et(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new QR(n,s));let u=this.Rr.get(n);u===void 0&&(u=Nt(),this.Rr.set(n,u)),this.Rr.set(n,u.add(s.key))}}/**
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
 */class Ow{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(t){return G.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,G.resolve()}}/**
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
 */class Im{constructor(){this.Vr=new Ie(Ue.mr),this.gr=new Ie(Ue.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const s=new Ue(t,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.wr(new Ue(t,n))}br(t,n){t.forEach(s=>this.removeReference(s,n))}Sr(t){const n=new dt(new Wt([])),s=new Ue(n,t),o=new Ue(n,t+1),u=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new dt(new Wt([])),s=new Ue(n,t),o=new Ue(n,t+1);let u=Nt();return this.gr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new Ue(t,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Ue{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return dt.comparator(t.key,n.key)||Vt(t.Cr,n.Cr)}static pr(t,n){return Vt(t.Cr,n.Cr)||dt.comparator(t.key,n.key)}}/**
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
 */class Nw{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ie(Ue.mr)}checkEmpty(t){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new KR(u,n,s,o);this.mutationQueue.push(f);for(const p of o)this.Mr=this.Mr.add(new Ue(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return G.resolve(f)}lookupMutationBatch(t,n){return G.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Nr(s),u=o<0?0:o;return G.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?_m:this.Fr-1)}getAllMutationBatches(t){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Ue(n,0),o=new Ue(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],f=>{const p=this.Or(f.Cr);u.push(p)}),G.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ie(Vt);return n.forEach(o=>{const u=new Ue(o,0),f=new Ue(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],p=>{s=s.add(p.Cr)})}),G.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;dt.isDocumentKey(u)||(u=u.child(""));const f=new Ue(new dt(u),0);let p=new Ie(Vt);return this.Mr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.Cr)),!0)},f),G.resolve(this.Br(p))}Br(t){const n=[];return t.forEach(s=>{const o=this.Or(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Ft(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return G.forEach(n.mutations,o=>{const u=new Ue(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,n){const s=new Ue(n,0),o=this.Mr.firstAfterOrEqual(s);return G.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,G.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Mw{constructor(t){this.kr=t,this.docs=function(){return new ee(dt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return G.resolve(s?s.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(t,n){let s=Zi();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Xe.newInvalidDocument(o))}),G.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Zi();const f=n.path,p=new dt(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:A}}=g.getNext();if(!f.isPrefixOf(_.path))break;_.path.length>f.length+1||aR(sR(A),s)<=0||(o.has(A.key)||oh(n,A))&&(u=u.insert(A.key,A.mutableCopy()))}return G.resolve(u)}getAllFromCollectionGroup(t,n,s,o){yt()}qr(t,n){return G.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Vw(this)}getSize(t){return G.resolve(this.size)}}class Vw extends Rw{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(t,o)):this.Ir.removeEntry(s)}),G.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
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
 */class kw{constructor(t){this.persistence=t,this.Qr=new Ys(n=>Em(n),Tm),this.lastRemoteSnapshotVersion=Tt.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Im,this.targetCount=0,this.Ur=eo.Kn()}forEachTarget(t,n){return this.Qr.forEach((s,o)=>n(o)),G.resolve()}getLastRemoteSnapshotVersion(t){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return G.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),G.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ur=new eo(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,G.resolve()}updateTargetData(t,n){return this.zn(n),G.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.Qr.forEach((f,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)}),G.waitFor(u).next(()=>o)}getTargetCount(t){return G.resolve(this.targetCount)}getTargetData(t,n){const s=this.Qr.get(n)||null;return G.resolve(s)}addMatchingKeys(t,n,s){return this.Kr.yr(n,s),G.resolve()}removeMatchingKeys(t,n,s){this.Kr.br(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),G.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.Kr.Sr(n),G.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Kr.vr(n);return G.resolve(s)}containsKey(t,n){return G.resolve(this.Kr.containsKey(n))}}/**
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
 */class nT{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new nh(0),this.zr=!1,this.zr=!0,this.jr=new Ow,this.referenceDelegate=t(this),this.Hr=new kw(this),this.indexManager=new yw,this.remoteDocumentCache=function(o){return new Mw(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new gw(n),this.Yr=new Cw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Dw,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Wr[t.toKey()];return s||(s=new Nw(n,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,s){it("MemoryPersistence","Starting transaction:",t);const o=new Uw(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(t,n){return G.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,n)))}}class Uw extends lR{constructor(t){super(),this.currentSequenceNumber=t}}class Cm{constructor(t){this.persistence=t,this.ti=new Im,this.ni=null}static ri(t){return new Cm(t)}get ii(){if(this.ni)return this.ni;throw yt()}addReference(t,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),G.resolve()}removeReference(t,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),G.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),G.resolve()}removeTarget(t,n){this.ti.Sr(n.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ii,s=>{const o=dt.fromPath(s);return this.si(t,o).next(u=>{u||n.removeEntry(o,Tt.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return G.or([()=>G.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class Gc{constructor(t,n){this.persistence=t,this.oi=new Ys(s=>hR(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=bw(this,n)}static ri(t,n){return new Gc(t,n)}Zr(){}Xr(t){return G.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}sr(t){let n=0;return this.rr(t,s=>{n++}).next(()=>n)}rr(t,n){return G.forEach(this.oi,(s,o)=>this.ar(t,s,o).next(u=>u?G.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(t,f=>this.ar(t,f,n).next(p=>{p||(s++,u.removeEntry(f,Tt.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),G.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),G.resolve()}removeReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),G.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),G.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=wc(t.data.value)),n}ar(t,n,s){return G.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.oi.get(n);return G.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Dm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Hi=s,this.Ji=o}static Yi(t,n){let s=Nt(),o=Nt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Dm(t,n.fromCache,s,o)}}/**
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
 */class Pw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Lw{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return OS()?8:uR($e())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.rs(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new Pw;return this._s(t,n,f).next(p=>{if(u.result=p,this.Xi)return this.us(t,n,f,p.size)})}).next(()=>u.result)}us(t,n,s,o){return s.documentReadCount<this.es?(qa()<=Ot.DEBUG&&it("QueryEngine","SDK will not create cache indexes for query:",ja(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),G.resolve()):(qa()<=Ot.DEBUG&&it("QueryEngine","Query:",ja(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(qa()<=Ot.DEBUG&&it("QueryEngine","The SDK decides to create cache indexes for query:",ja(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ci(n))):G.resolve())}rs(t,n){if(Fy(n))return G.resolve(null);let s=ci(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Wd(n,null,"F"),s=ci(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Nt(...u);return this.ns.getDocuments(t,f).next(p=>this.indexManager.getMinOffset(t,s).next(g=>{const _=this.cs(n,p);return this.ls(n,_,f,g.readTime)?this.rs(t,Wd(n,null,"F")):this.hs(t,_,n,g)}))})))}ss(t,n,s,o){return Fy(n)||o.isEqual(Tt.min())?G.resolve(null):this.ns.getDocuments(t,s).next(u=>{const f=this.cs(n,u);return this.ls(n,f,s,o)?G.resolve(null):(qa()<=Ot.DEBUG&&it("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ja(n)),this.hs(t,f,n,rR(o,Ol)).next(p=>p))})}cs(t,n){let s=new Ie(kE(t));return n.forEach((o,u)=>{oh(t,u)&&(s=s.add(u))}),s}ls(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(t,n,s){return qa()<=Ot.DEBUG&&it("QueryEngine","Using full collection scan to execute query:",ja(n)),this.ns.getDocumentsMatchingQuery(t,n,$r.min(),s)}hs(t,n,s,o){return this.ns.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const Om="LocalStore",xw=3e8;class zw{constructor(t,n,s,o){this.persistence=t,this.Ps=n,this.serializer=o,this.Ts=new ee(Vt),this.Is=new Ys(u=>Em(u),Tm),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Iw(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function Bw(r,t,n,s){return new zw(r,t,n,s)}async function iT(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.As(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],p=[];let g=Nt();for(const _ of o){f.push(_.batchId);for(const A of _.mutations)g=g.add(A.key)}for(const _ of u){p.push(_.batchId);for(const A of _.mutations)g=g.add(A.key)}return n.localDocuments.getDocuments(s,g).next(_=>({Rs:_,removedBatchIds:f,addedBatchIds:p}))})})}function Hw(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(p,g,_,A){const I=_.batch,P=I.keys();let H=G.resolve();return P.forEach(X=>{H=H.next(()=>A.getEntry(g,X)).next(J=>{const Q=_.docVersions.get(X);Ft(Q!==null),J.version.compareTo(Q)<0&&(I.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),A.addEntry(J)))})}),H.next(()=>p.mutationQueue.removeMutationBatch(g,I))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=Nt();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function rT(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function qw(r,t){const n=St(r),s=t.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const p=[];t.targetChanges.forEach((A,I)=>{const P=o.get(I);if(!P)return;p.push(n.Hr.removeMatchingKeys(u,A.removedDocuments,I).next(()=>n.Hr.addMatchingKeys(u,A.addedDocuments,I)));let H=P.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(I)!==null?H=H.withResumeToken(je.EMPTY_BYTE_STRING,Tt.min()).withLastLimboFreeSnapshotVersion(Tt.min()):A.resumeToken.approximateByteSize()>0&&(H=H.withResumeToken(A.resumeToken,s)),o=o.insert(I,H),function(J,Q,ft){return J.resumeToken.approximateByteSize()===0||Q.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=xw?!0:ft.addedDocuments.size+ft.modifiedDocuments.size+ft.removedDocuments.size>0}(P,H,A)&&p.push(n.Hr.updateTargetData(u,H))});let g=Zi(),_=Nt();if(t.documentUpdates.forEach(A=>{t.resolvedLimboDocuments.has(A)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,A))}),p.push(jw(u,f,t.documentUpdates).next(A=>{g=A.Vs,_=A.fs})),!s.isEqual(Tt.min())){const A=n.Hr.getLastRemoteSnapshotVersion(u).next(I=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(A)}return G.waitFor(p).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(n.Ts=o,u))}function jw(r,t,n){let s=Nt(),o=Nt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Zi();return n.forEach((p,g)=>{const _=u.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(Tt.min())?(t.removeEntry(p,g.readTime),f=f.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(g),f=f.insert(p,g)):it(Om,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)}),{Vs:f,fs:o}})}function Fw(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=_m),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Gw(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Hr.getTargetData(s,t).next(u=>u?(o=u,G.resolve(o)):n.Hr.allocateTargetId(s).next(f=>(o=new jr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(t,s.targetId)),s})}async function nm(r,t,n){const s=St(r),o=s.Ts.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!ao(f))throw f;it(Om,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(o.target)}function iv(r,t,n){const s=St(r);let o=Tt.min(),u=Nt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,_,A){const I=St(g),P=I.Is.get(A);return P!==void 0?G.resolve(I.Ts.get(P)):I.Hr.getTargetData(_,A)}(s,f,ci(t)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,p.targetId).next(g=>{u=g})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,n?o:Tt.min(),n?u:Nt())).next(p=>(Kw(s,NR(t),p),{documents:p,gs:u})))}function Kw(r,t,n){let s=r.Es.get(t)||Tt.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(t,s)}class rv{constructor(){this.activeTargetIds=LR()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qw{constructor(){this.ho=new rv,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,s){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new rv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Yw{To(t){}shutdown(){}}/**
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
 */const sv="ConnectivityMonitor";class av{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){it(sv,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){it(sv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ec=null;function im(){return Ec===null?Ec=function(){return 268435456+Math.round(2147483648*Math.random())}():Ec++,"0x"+Ec.toString(16)}/**
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
 */const Md="RestConnection",Xw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $w{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===xc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}bo(t,n,s,o,u){const f=im(),p=this.So(t,n.toUriEncodedString());it(Md,`Sending RPC '${t}' ${f}:`,p,s);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,u),this.vo(t,p,g,s).then(_=>(it(Md,`Received RPC '${t}' ${f}: `,_),_),_=>{throw Wa(Md,`RPC '${t}' ${f} failed with error: `,_,"url: ",p,"request:",s),_})}Co(t,n,s,o,u,f){return this.bo(t,n,s,o,u)}Do(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ro}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}So(t,n){const s=Xw[t];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
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
 */class Ww{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const Qe="WebChannelConnection";class Zw extends $w{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,s,o){const u=im();return new Promise((f,p)=>{const g=new uE;g.setWithCredentials(!0),g.listenOnce(cE.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Rc.NO_ERROR:const A=g.getResponseJson();it(Qe,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(A)),f(A);break;case Rc.TIMEOUT:it(Qe,`RPC '${t}' ${u} timed out`),p(new ht(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const I=g.getStatus();if(it(Qe,`RPC '${t}' ${u} failed with status:`,I,"response text:",g.getResponseText()),I>0){let P=g.getResponseJson();Array.isArray(P)&&(P=P[0]);const H=P==null?void 0:P.error;if(H&&H.status&&H.message){const X=function(Q){const ft=Q.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(ft)>=0?ft:Y.UNKNOWN}(H.status);p(new ht(X,H.message))}else p(new ht(Y.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ht(Y.UNAVAILABLE,"Connection failed."));break;default:yt()}}finally{it(Qe,`RPC '${t}' ${u} completed.`)}});const _=JSON.stringify(o);it(Qe,`RPC '${t}' ${u} sending request:`,o),g.send(n,"POST",_,s,15)})}Wo(t,n,s){const o=im(),u=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=dE(),p=fE(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const A=u.join("");it(Qe,`Creating RPC '${t}' stream ${o}: ${A}`,g);const I=f.createWebChannel(A,g);let P=!1,H=!1;const X=new Ww({Fo:Q=>{H?it(Qe,`Not sending because RPC '${t}' stream ${o} is closed:`,Q):(P||(it(Qe,`Opening RPC '${t}' stream ${o} transport.`),I.open(),P=!0),it(Qe,`RPC '${t}' stream ${o} sending:`,Q),I.send(Q))},Mo:()=>I.close()}),J=(Q,ft,at)=>{Q.listen(ft,lt=>{try{at(lt)}catch(vt){setTimeout(()=>{throw vt},0)}})};return J(I,El.EventType.OPEN,()=>{H||(it(Qe,`RPC '${t}' stream ${o} transport opened.`),X.Qo())}),J(I,El.EventType.CLOSE,()=>{H||(H=!0,it(Qe,`RPC '${t}' stream ${o} transport closed`),X.Ko())}),J(I,El.EventType.ERROR,Q=>{H||(H=!0,Wa(Qe,`RPC '${t}' stream ${o} transport errored:`,Q),X.Ko(new ht(Y.UNAVAILABLE,"The operation could not be completed")))}),J(I,El.EventType.MESSAGE,Q=>{var ft;if(!H){const at=Q.data[0];Ft(!!at);const lt=at,vt=(lt==null?void 0:lt.error)||((ft=lt[0])===null||ft===void 0?void 0:ft.error);if(vt){it(Qe,`RPC '${t}' stream ${o} received error:`,vt);const W=vt.status;let mt=function(S){const C=_e[S];if(C!==void 0)return GE(C)}(W),O=vt.message;mt===void 0&&(mt=Y.INTERNAL,O="Unknown error status: "+W+" with message "+vt.message),H=!0,X.Ko(new ht(mt,O)),I.close()}else it(Qe,`RPC '${t}' stream ${o} received:`,at),X.Uo(at)}}),J(p,hE.STAT_EVENT,Q=>{Q.stat===Kd.PROXY?it(Qe,`RPC '${t}' stream ${o} detected buffering proxy`):Q.stat===Kd.NOPROXY&&it(Qe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{X.$o()},0),X}}function Vd(){return typeof document<"u"?document:null}/**
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
 */function hh(r){return new nw(r,!0)}/**
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
 */class sT{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Ti=t,this.timerId=n,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-s);o>0&&it("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const ov="PersistentStream";class aT{constructor(t,n,s,o,u,f,p,g){this.Ti=t,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new sT(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(Wi(n.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===n&&this.V_(s,o)},s=>{t(()=>{const o=new ht(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(t,n){const s=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return it(ov,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(it(ov,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jw extends aT{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=sw(this.serializer,t),s=function(u){if(!("targetChange"in u))return Tt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Tt.min():f.readTime?fi(f.readTime):Tt.min()}(t);return this.listener.p_(n,s)}y_(t){const n={};n.database=em(this.serializer),n.addTarget=function(u,f){let p;const g=f.target;if(p=$d(g)?{documents:lw(u,g)}:{query:uw(u,g).ht},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=YE(u,f.resumeToken);const _=Zd(u,f.expectedCount);_!==null&&(p.expectedCount=_)}else if(f.snapshotVersion.compareTo(Tt.min())>0){p.readTime=Fc(u,f.snapshotVersion.toTimestamp());const _=Zd(u,f.expectedCount);_!==null&&(p.expectedCount=_)}return p}(this.serializer,t);const s=hw(this.serializer,t);s&&(n.labels=s),this.I_(n)}w_(t){const n={};n.database=em(this.serializer),n.removeTarget=t,this.I_(n)}}class tI extends aT{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return Ft(!!t.streamToken),this.lastStreamToken=t.streamToken,Ft(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Ft(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=ow(t.writeResults,t.commitTime),s=fi(t.commitTime);return this.listener.v_(s,n)}C_(){const t={};t.database=em(this.serializer),this.I_(t)}S_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>aw(this.serializer,s))};this.I_(n)}}/**
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
 */class eI{}class nI extends eI{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new ht(Y.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.bo(t,Jd(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ht(Y.UNKNOWN,u.toString())})}Co(t,n,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,p])=>this.connection.Co(t,Jd(n,s),o,f,p,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ht(Y.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class iI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Wi(n),this.N_=!1):it("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const qs="RemoteStore";class rI{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{s.enqueueAndForget(async()=>{$s(this)&&(it(qs,"Restarting streams for network reachability change."),await async function(g){const _=St(g);_.W_.add(4),await jl(_),_.j_.set("Unknown"),_.W_.delete(4),await fh(_)}(this))})}),this.j_=new iI(s,o)}}async function fh(r){if($s(r))for(const t of r.G_)await t(!0)}async function jl(r){for(const t of r.G_)await t(!1)}function oT(r,t){const n=St(r);n.U_.has(t.targetId)||(n.U_.set(t.targetId,t),km(n)?Vm(n):oo(n).c_()&&Mm(n,t))}function Nm(r,t){const n=St(r),s=oo(n);n.U_.delete(t),s.c_()&&lT(n,t),n.U_.size===0&&(s.c_()?s.P_():$s(n)&&n.j_.set("Unknown"))}function Mm(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Tt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}oo(r).y_(t)}function lT(r,t){r.H_.Ne(t),oo(r).w_(t)}function Vm(r){r.H_=new ZR({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),oo(r).start(),r.j_.B_()}function km(r){return $s(r)&&!oo(r).u_()&&r.U_.size>0}function $s(r){return St(r).W_.size===0}function uT(r){r.H_=void 0}async function sI(r){r.j_.set("Online")}async function aI(r){r.U_.forEach((t,n)=>{Mm(r,t)})}async function oI(r,t){uT(r),km(r)?(r.j_.q_(t),Vm(r)):r.j_.set("Unknown")}async function lI(r,t,n){if(r.j_.set("Online"),t instanceof QE&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const p of u.targetIds)o.U_.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.U_.delete(p),o.H_.removeTarget(p))}(r,t)}catch(s){it(qs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Kc(r,s)}else if(t instanceof Dc?r.H_.We(t):t instanceof KE?r.H_.Ze(t):r.H_.je(t),!n.isEqual(Tt.min()))try{const s=await rT(r.localStore);n.compareTo(s)>=0&&await function(u,f){const p=u.H_.ot(f);return p.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const A=u.U_.get(_);A&&u.U_.set(_,A.withResumeToken(g.resumeToken,f))}}),p.targetMismatches.forEach((g,_)=>{const A=u.U_.get(g);if(!A)return;u.U_.set(g,A.withResumeToken(je.EMPTY_BYTE_STRING,A.snapshotVersion)),lT(u,g);const I=new jr(A.target,g,_,A.sequenceNumber);Mm(u,I)}),u.remoteSyncer.applyRemoteEvent(p)}(r,n)}catch(s){it(qs,"Failed to raise snapshot:",s),await Kc(r,s)}}async function Kc(r,t,n){if(!ao(t))throw t;r.W_.add(1),await jl(r),r.j_.set("Offline"),n||(n=()=>rT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{it(qs,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await fh(r)})}function cT(r,t){return t().catch(n=>Kc(r,n,t))}async function dh(r){const t=St(r),n=ts(t);let s=t.K_.length>0?t.K_[t.K_.length-1].batchId:_m;for(;uI(t);)try{const o=await Fw(t.localStore,s);if(o===null){t.K_.length===0&&n.P_();break}s=o.batchId,cI(t,o)}catch(o){await Kc(t,o)}hT(t)&&fT(t)}function uI(r){return $s(r)&&r.K_.length<10}function cI(r,t){r.K_.push(t);const n=ts(r);n.c_()&&n.b_&&n.S_(t.mutations)}function hT(r){return $s(r)&&!ts(r).u_()&&r.K_.length>0}function fT(r){ts(r).start()}async function hI(r){ts(r).C_()}async function fI(r){const t=ts(r);for(const n of r.K_)t.S_(n.mutations)}async function dI(r,t,n){const s=r.K_.shift(),o=bm.from(s,t,n);await cT(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await dh(r)}async function mI(r,t){t&&ts(r).b_&&await async function(s,o){if(function(f){return XR(f)&&f!==Y.ABORTED}(o.code)){const u=s.K_.shift();ts(s).h_(),await cT(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await dh(s)}}(r,t),hT(r)&&fT(r)}async function lv(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),it(qs,"RemoteStore received new credentials");const s=$s(n);n.W_.add(3),await jl(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await fh(n)}async function pI(r,t){const n=St(r);t?(n.W_.delete(2),await fh(n)):t||(n.W_.add(2),await jl(n),n.j_.set("Unknown"))}function oo(r){return r.J_||(r.J_=function(n,s,o){const u=St(n);return u.M_(),new Jw(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:sI.bind(null,r),No:aI.bind(null,r),Lo:oI.bind(null,r),p_:lI.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),km(r)?Vm(r):r.j_.set("Unknown")):(await r.J_.stop(),uT(r))})),r.J_}function ts(r){return r.Y_||(r.Y_=function(n,s,o){const u=St(n);return u.M_(),new tI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:hI.bind(null,r),Lo:mI.bind(null,r),D_:fI.bind(null,r),v_:dI.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await dh(r)):(await r.Y_.stop(),r.K_.length>0&&(it(qs,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
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
 */class Um{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,p=new Um(t,n,f,o,u);return p.start(s),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ht(Y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pm(r,t){if(Wi("AsyncQueue",`${t}: ${r}`),ao(r))return new ht(Y.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Qa{static emptySet(t){return new Qa(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||dt.comparator(n.key,s.key):(n,s)=>dt.comparator(n.key,s.key),this.keyedMap=Tl(),this.sortedSet=new ee(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Qa)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Qa;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class uv{constructor(){this.Z_=new ee(dt.comparator)}track(t){const n=t.doc.key,s=this.Z_.get(n);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(n):t.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):yt():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,s)=>{t.push(s)}),t}}class no{constructor(t,n,s,o,u,f,p,g,_){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(p=>{f.push({type:0,doc:p})}),new no(t,n,Qa.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ah(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class gI{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class _I{constructor(){this.queries=cv(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const o=St(n),u=o.queries;o.queries=cv(),u.forEach((f,p)=>{for(const g of p.ta)g.onError(s)})})(this,new ht(Y.ABORTED,"Firestore shutting down"))}}function cv(){return new Ys(r=>VE(r),ah)}async function yI(r,t){const n=St(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.na()&&t.ra()&&(s=2):(u=new gI,s=t.ra()?0:1);try{switch(s){case 0:u.ea=await n.onListen(o,!0);break;case 1:u.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const p=Pm(f,`Initialization of query '${ja(t.query)}' failed`);return void t.onError(p)}n.queries.set(o,u),u.ta.push(t),t.sa(n.onlineState),u.ea&&t.oa(u.ea)&&Lm(n)}async function vI(r,t){const n=St(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ta.indexOf(t);f>=0&&(u.ta.splice(f,1),u.ta.length===0?o=t.ra()?0:1:!u.na()&&t.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function EI(r,t){const n=St(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const p of f.ta)p.oa(o)&&(s=!0);f.ea=o}}s&&Lm(n)}function TI(r,t,n){const s=St(r),o=s.queries.get(t);if(o)for(const u of o.ta)u.onError(n);s.queries.delete(t)}function Lm(r){r.ia.forEach(t=>{t.next()})}var rm,hv;(hv=rm||(rm={}))._a="default",hv.Cache="cache";class AI{constructor(t,n,s){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new no(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=no.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==rm.Cache}}/**
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
 */class dT{constructor(t){this.key=t}}class mT{constructor(t){this.key=t}}class SI{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Nt(),this.mutatedKeys=Nt(),this.ya=kE(t),this.wa=new Qa(this.ya)}get ba(){return this.fa}Sa(t,n){const s=n?n.Da:new uv,o=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((A,I)=>{const P=o.get(A),H=oh(this.query,I)?I:null,X=!!P&&this.mutatedKeys.has(P.key),J=!!H&&(H.hasLocalMutations||this.mutatedKeys.has(H.key)&&H.hasCommittedMutations);let Q=!1;P&&H?P.data.isEqual(H.data)?X!==J&&(s.track({type:3,doc:H}),Q=!0):this.va(P,H)||(s.track({type:2,doc:H}),Q=!0,(g&&this.ya(H,g)>0||_&&this.ya(H,_)<0)&&(p=!0)):!P&&H?(s.track({type:0,doc:H}),Q=!0):P&&!H&&(s.track({type:1,doc:P}),Q=!0,(g||_)&&(p=!0)),Q&&(H?(f=f.add(H),u=J?u.add(A):u.delete(A)):(f=f.delete(A),u=u.delete(A)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const A=this.query.limitType==="F"?f.last():f.first();f=f.delete(A.key),u=u.delete(A.key),s.track({type:1,doc:A})}return{wa:f,Da:s,ls:p,mutatedKeys:u}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((A,I)=>function(H,X){const J=Q=>{switch(Q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return yt()}};return J(H)-J(X)}(A.type,I.type)||this.ya(A.doc,I.doc)),this.Ca(s),o=o!=null&&o;const p=n&&!o?this.Fa():[],g=this.pa.size===0&&this.current&&!o?1:0,_=g!==this.ga;return this.ga=g,f.length!==0||_?{snapshot:new no(this.query,t.wa,u,f,t.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:p}:{Ma:p}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new uv,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Nt(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return t.forEach(s=>{this.pa.has(s)||n.push(new mT(s))}),this.pa.forEach(s=>{t.has(s)||n.push(new dT(s))}),n}Oa(t){this.fa=t.gs,this.pa=Nt();const n=this.Sa(t.documents);return this.applyChanges(n,!0)}Na(){return no.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const xm="SyncEngine";class bI{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class RI{constructor(t){this.key=t,this.Ba=!1}}class wI{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Ys(p=>VE(p),ah),this.qa=new Map,this.Qa=new Set,this.$a=new ee(dt.comparator),this.Ka=new Map,this.Ua=new Im,this.Wa={},this.Ga=new Map,this.za=eo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function II(r,t,n=!0){const s=ET(r);let o;const u=s.ka.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await pT(s,t,n,!0),o}async function CI(r,t){const n=ET(r);await pT(n,t,!0,!1)}async function pT(r,t,n,s){const o=await Gw(r.localStore,ci(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let p;return s&&(p=await DI(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&oT(r.remoteStore,o),p}async function DI(r,t,n,s,o){r.Ha=(I,P,H)=>async function(J,Q,ft,at){let lt=Q.view.Sa(ft);lt.ls&&(lt=await iv(J.localStore,Q.query,!1).then(({documents:O})=>Q.view.Sa(O,lt)));const vt=at&&at.targetChanges.get(Q.targetId),W=at&&at.targetMismatches.get(Q.targetId)!=null,mt=Q.view.applyChanges(lt,J.isPrimaryClient,vt,W);return dv(J,Q.targetId,mt.Ma),mt.snapshot}(r,I,P,H);const u=await iv(r.localStore,t,!0),f=new SI(t,u.gs),p=f.Sa(u.documents),g=ql.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),_=f.applyChanges(p,r.isPrimaryClient,g);dv(r,n,_.Ma);const A=new bI(t,n,f);return r.ka.set(t,A),r.qa.has(n)?r.qa.get(n).push(t):r.qa.set(n,[t]),_.snapshot}async function OI(r,t,n){const s=St(r),o=s.ka.get(t),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(f=>!ah(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await nm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Nm(s.remoteStore,o.targetId),sm(s,o.targetId)}).catch(so)):(sm(s,o.targetId),await nm(s.localStore,o.targetId,!0))}async function NI(r,t){const n=St(r),s=n.ka.get(t),o=n.qa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Nm(n.remoteStore,s.targetId))}async function MI(r,t,n){const s=zI(r);try{const o=await function(f,p){const g=St(f),_=we.now(),A=p.reduce((H,X)=>H.add(X.key),Nt());let I,P;return g.persistence.runTransaction("Locally write mutations","readwrite",H=>{let X=Zi(),J=Nt();return g.ds.getEntries(H,A).next(Q=>{X=Q,X.forEach((ft,at)=>{at.isValidDocument()||(J=J.add(ft))})}).next(()=>g.localDocuments.getOverlayedDocuments(H,X)).next(Q=>{I=Q;const ft=[];for(const at of p){const lt=FR(at,I.get(at.key).overlayedDocument);lt!=null&&ft.push(new Xs(at.key,lt,RE(lt.value.mapValue),hi.exists(!0)))}return g.mutationQueue.addMutationBatch(H,_,ft,p)}).next(Q=>{P=Q;const ft=Q.applyToLocalDocumentSet(I,J);return g.documentOverlayCache.saveOverlays(H,Q.batchId,ft)})}).then(()=>({batchId:P.batchId,changes:PE(I)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,p,g){let _=f.Wa[f.currentUser.toKey()];_||(_=new ee(Vt)),_=_.insert(p,g),f.Wa[f.currentUser.toKey()]=_}(s,o.batchId,n),await Fl(s,o.changes),await dh(s.remoteStore)}catch(o){const u=Pm(o,"Failed to persist write");n.reject(u)}}async function gT(r,t){const n=St(r);try{const s=await qw(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Ka.get(u);f&&(Ft(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?Ft(f.Ba):o.removedDocuments.size>0&&(Ft(f.Ba),f.Ba=!1))}),await Fl(n,s,t)}catch(s){await so(s)}}function fv(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ka.forEach((u,f)=>{const p=f.view.sa(t);p.snapshot&&o.push(p.snapshot)}),function(f,p){const g=St(f);g.onlineState=p;let _=!1;g.queries.forEach((A,I)=>{for(const P of I.ta)P.sa(p)&&(_=!0)}),_&&Lm(g)}(s.eventManager,t),o.length&&s.La.p_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function VI(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Ka.get(t),u=o&&o.key;if(u){let f=new ee(dt.comparator);f=f.insert(u,Xe.newNoDocument(u,Tt.min()));const p=Nt().add(u),g=new ch(Tt.min(),new Map,new ee(Vt),f,p);await gT(s,g),s.$a=s.$a.remove(u),s.Ka.delete(t),zm(s)}else await nm(s.localStore,t,!1).then(()=>sm(s,t,n)).catch(so)}async function kI(r,t){const n=St(r),s=t.batch.batchId;try{const o=await Hw(n.localStore,t);yT(n,s,null),_T(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fl(n,o)}catch(o){await so(o)}}async function UI(r,t,n){const s=St(r);try{const o=await function(f,p){const g=St(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let A;return g.mutationQueue.lookupMutationBatch(_,p).next(I=>(Ft(I!==null),A=I.keys(),g.mutationQueue.removeMutationBatch(_,I))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,A,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,A)).next(()=>g.localDocuments.getDocuments(_,A))})}(s.localStore,t);yT(s,t,n),_T(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Fl(s,o)}catch(o){await so(o)}}function _T(r,t){(r.Ga.get(t)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(t)}function yT(r,t,n){const s=St(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Wa[s.currentUser.toKey()]=o}}function sm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(t),r.isPrimaryClient&&r.Ua.Sr(t).forEach(s=>{r.Ua.containsKey(s)||vT(r,s)})}function vT(r,t){r.Qa.delete(t.path.canonicalString());const n=r.$a.get(t);n!==null&&(Nm(r.remoteStore,n),r.$a=r.$a.remove(t),r.Ka.delete(n),zm(r))}function dv(r,t,n){for(const s of n)s instanceof dT?(r.Ua.addReference(s.key,t),PI(r,s)):s instanceof mT?(it(xm,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,t),r.Ua.containsKey(s.key)||vT(r,s.key)):yt()}function PI(r,t){const n=t.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(it(xm,"New document in limbo: "+n),r.Qa.add(s),zm(r))}function zm(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const n=new dt(Wt.fromString(t)),s=r.za.next();r.Ka.set(s,new RI(n)),r.$a=r.$a.insert(n,s),oT(r.remoteStore,new jr(ci(ME(n.path)),s,"TargetPurposeLimboResolution",nh.ae))}}async function Fl(r,t,n){const s=St(r),o=[],u=[],f=[];s.ka.isEmpty()||(s.ka.forEach((p,g)=>{f.push(s.Ha(g,t,n).then(_=>{var A;if((_||n)&&s.isPrimaryClient){const I=_?!_.fromCache:(A=n==null?void 0:n.targetChanges.get(g.targetId))===null||A===void 0?void 0:A.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(_){o.push(_);const I=Dm.Yi(g.targetId,_);u.push(I)}}))}),await Promise.all(f),s.La.p_(o),await async function(g,_){const A=St(g);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>G.forEach(_,P=>G.forEach(P.Hi,H=>A.persistence.referenceDelegate.addReference(I,P.targetId,H)).next(()=>G.forEach(P.Ji,H=>A.persistence.referenceDelegate.removeReference(I,P.targetId,H)))))}catch(I){if(!ao(I))throw I;it(Om,"Failed to update sequence numbers: "+I)}for(const I of _){const P=I.targetId;if(!I.fromCache){const H=A.Ts.get(P),X=H.snapshotVersion,J=H.withLastLimboFreeSnapshotVersion(X);A.Ts=A.Ts.insert(P,J)}}}(s.localStore,u))}async function LI(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){it(xm,"User change. New user:",t.toKey());const s=await iT(n.localStore,t);n.currentUser=t,function(u,f){u.Ga.forEach(p=>{p.forEach(g=>{g.reject(new ht(Y.CANCELLED,f))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Fl(n,s.Rs)}}function xI(r,t){const n=St(r),s=n.Ka.get(t);if(s&&s.Ba)return Nt().add(s.key);{let o=Nt();const u=n.qa.get(t);if(!u)return o;for(const f of u){const p=n.ka.get(f);o=o.unionWith(p.view.ba)}return o}}function ET(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=gT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=VI.bind(null,t),t.La.p_=EI.bind(null,t.eventManager),t.La.Ja=TI.bind(null,t.eventManager),t}function zI(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=UI.bind(null,t),t}class Qc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=hh(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return Bw(this.persistence,new Lw,t.initialUser,this.serializer)}Xa(t){return new nT(Cm.ri,this.serializer)}Za(t){return new Qw}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qc.provider={build:()=>new Qc};class BI extends Qc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){Ft(this.persistence.referenceDelegate instanceof Gc);const s=this.persistence.referenceDelegate.garbageCollector;return new Aw(s,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new nT(s=>Gc.ri(s,n),this.serializer)}}class am{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>fv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=LI.bind(null,this.syncEngine),await pI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _I}()}createDatastore(t){const n=hh(t.databaseInfo.databaseId),s=function(u){return new Zw(u)}(t.databaseInfo);return function(u,f,p,g){return new nI(u,f,p,g)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,p){return new rI(s,o,u,f,p)}(this.localStore,this.datastore,t.asyncQueue,n=>fv(this.syncEngine,n,0),function(){return av.D()?new av:new Yw}())}createSyncEngine(t,n){return function(o,u,f,p,g,_,A){const I=new wI(o,u,f,p,g,_);return A&&(I.ja=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=St(o);it(qs,"RemoteStore shutting down."),u.W_.add(5),await jl(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}am.provider={build:()=>new am};/**
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
 */class HI{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Wi("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const es="FirestoreClient";class qI{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ye.UNAUTHENTICATED,this.clientId=pE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{it(es,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(it(es,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Pm(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function kd(r,t){r.asyncQueue.verifyOperationInProgress(),it(es,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await iT(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function mv(r,t){r.asyncQueue.verifyOperationInProgress();const n=await jI(r);it(es,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>lv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>lv(t.remoteStore,o)),r._onlineComponents=t}async function jI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){it(es,"Using user provided OfflineComponentProvider");try{await kd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Wa("Error using user provided cache. Falling back to memory cache: "+n),await kd(r,new Qc)}}else it(es,"Using default OfflineComponentProvider"),await kd(r,new BI(void 0));return r._offlineComponents}async function TT(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(it(es,"Using user provided OnlineComponentProvider"),await mv(r,r._uninitializedComponentsProvider._online)):(it(es,"Using default OnlineComponentProvider"),await mv(r,new am))),r._onlineComponents}function FI(r){return TT(r).then(t=>t.syncEngine)}async function GI(r){const t=await TT(r),n=t.eventManager;return n.onListen=II.bind(null,t.syncEngine),n.onUnlisten=OI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=CI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=NI.bind(null,t.syncEngine),n}function KI(r,t,n={}){const s=new Qr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,p,g,_){const A=new HI({next:P=>{A.su(),f.enqueueAndForget(()=>vI(u,I)),P.fromCache&&g.source==="server"?_.reject(new ht(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(P)},error:P=>_.reject(P)}),I=new AI(p,A,{includeMetadataChanges:!0,Ta:!0});return yI(u,I)}(await GI(r),r.asyncQueue,t,n,s)),s.promise}/**
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
 */function AT(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const pv=new Map;/**
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
 */function ST(r,t,n){if(!n)throw new ht(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function QI(r,t,n,s){if(t===!0&&s===!0)throw new ht(Y.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function gv(r){if(!dt.isDocumentKey(r))throw new ht(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function _v(r){if(dt.isDocumentKey(r))throw new ht(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Bm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":yt()}function Pl(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ht(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bm(r);throw new ht(Y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */const bT="firestore.googleapis.com",yv=!0;class vv{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new ht(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bT,this.ssl=yv}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:yv;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=eT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ew)throw new ht(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}QI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AT((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ht(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ht(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ht(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class mh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ht(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ht(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new $b;switch(s.type){case"firstParty":return new tR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ht(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=pv.get(n);s&&(it("ComponentProvider","Removing Datastore"),pv.delete(n),s.terminate())}(this),Promise.resolve()}}function YI(r,t,n,s={}){var o;const u=(r=Pl(r,mh))._getSettings(),f=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${n}`;u.host!==bT&&u.host!==p&&Wa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},u),{host:p,ssl:!1,emulatorOptions:s});if(!zs(g,f)&&(r._setSettings(g),s.mockUserToken)){let _,A;if(typeof s.mockUserToken=="string")_=s.mockUserToken,A=Ye.MOCK_USER;else{_=nE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new ht(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Ye(I)}r._authCredentials=new Wb(new mE(_,A))}}/**
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
 */class ph{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ph(this.firestore,t,this._query)}}class jn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new jn(this.firestore,t,this._key)}}class Yr extends ph{constructor(t,n,s){super(t,n,ME(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new jn(this.firestore,null,new dt(t))}withConverter(t){return new Yr(this.firestore,t,this._path)}}function Ev(r,t,...n){if(r=Pe(r),ST("collection","path",t),r instanceof mh){const s=Wt.fromString(t,...n);return _v(s),new Yr(r,null,s)}{if(!(r instanceof jn||r instanceof Yr))throw new ht(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Wt.fromString(t,...n));return _v(s),new Yr(r.firestore,null,s)}}function RT(r,t,...n){if(r=Pe(r),arguments.length===1&&(t=pE.newId()),ST("doc","path",t),r instanceof mh){const s=Wt.fromString(t,...n);return gv(s),new jn(r,null,new dt(s))}{if(!(r instanceof jn||r instanceof Yr))throw new ht(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Wt.fromString(t,...n));return gv(s),new jn(r.firestore,r instanceof Yr?r.converter:null,new dt(s))}}/**
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
 */const Tv="AsyncQueue";class Av{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new sT(this,"async_queue_retry"),this.bu=()=>{const s=Vd();s&&it(Tv,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=t;const n=Vd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=Vd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Qr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!ao(t))throw t;it(Tv,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.Su.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let p=f.message||"";return f.stack&&(p=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),p}(s);throw Wi("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.Su=n,n}enqueueAfterDelay(t,n,s){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const o=Um.createAndSchedule(this,t,n,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&yt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class gh extends mh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new Av,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Av(t),this._firestoreClient=void 0,await t}}}function XI(r,t){const n=typeof r=="object"?r:pm(),s=typeof r=="string"?r:xc,o=eh(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Jv("firestore");u&&YI(o,...u)}return o}function wT(r){if(r._terminated)throw new ht(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||$I(r),r._firestoreClient}function $I(r){var t,n,s;const o=r._freezeSettings(),u=function(p,g,_,A){return new mR(p,g,_,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,AT(A.experimentalLongPollingOptions),A.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new qI(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class io{constructor(t){this._byteString=t}static fromBase64String(t){try{return new io(je.fromBase64String(t))}catch(n){throw new ht(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new io(je.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Hm{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ht(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class IT{constructor(t){this._methodName=t}}/**
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
 */class qm{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ht(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ht(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Vt(this._lat,t._lat)||Vt(this._long,t._long)}}/**
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
 */class jm{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
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
 */const WI=/^__.*__$/;class ZI{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Xs(t,this.data,this.fieldMask,n,this.fieldTransforms):new Hl(t,this.data,n,this.fieldTransforms)}}function CT(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yt()}}class Fm{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Fm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:s,Qu:!1});return o.$u(t),o}Ku(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Yc(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(CT(this.Lu)&&WI.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class JI{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||hh(t)}ju(t,n,s,o=!1){return new Fm({Lu:t,methodName:n,zu:s,path:qe.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function t1(r){const t=r._freezeSettings(),n=hh(r._databaseId);return new JI(r._databaseId,!!t.ignoreUndefinedProperties,n)}function e1(r,t,n,s,o,u={}){const f=r.ju(u.merge||u.mergeFields?2:0,t,n,o);MT("Data must be an object, but it was:",f,s);const p=OT(s,f);let g,_;if(u.merge)g=new qn(f.fieldMask),_=f.fieldTransforms;else if(u.mergeFields){const A=[];for(const I of u.mergeFields){const P=n1(t,I,n);if(!f.contains(P))throw new ht(Y.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);r1(A,P)||A.push(P)}g=new qn(A),_=f.fieldTransforms.filter(I=>g.covers(I.field))}else g=null,_=f.fieldTransforms;return new ZI(new Un(p),g,_)}function DT(r,t){if(NT(r=Pe(r)))return MT("Unsupported field value:",t,r),OT(r,t);if(r instanceof IT)return function(s,o){if(!CT(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const p of s){let g=DT(p,o.Uu(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=Pe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return xR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=we.fromDate(s);return{timestampValue:Fc(o.serializer,u)}}if(s instanceof we){const u=new we(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Fc(o.serializer,u)}}if(s instanceof qm)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof io)return{bytesValue:YE(o.serializer,s._byteString)};if(s instanceof jn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:wm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof jm)return function(f,p){return{mapValue:{fields:{[SE]:{stringValue:bE},[zc]:{arrayValue:{values:f.toArray().map(_=>{if(typeof _!="number")throw p.Wu("VectorValues must only contain numeric values.");return Am(p.serializer,_)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${Bm(s)}`)}(r,t)}function OT(r,t){const n={};return _E(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qs(r,(s,o)=>{const u=DT(o,t.qu(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function NT(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof we||r instanceof qm||r instanceof io||r instanceof jn||r instanceof IT||r instanceof jm)}function MT(r,t,n){if(!NT(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=Bm(n);throw s==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+s)}}function n1(r,t,n){if((t=Pe(t))instanceof Hm)return t._internalPath;if(typeof t=="string")return VT(r,t);throw Yc("Field path arguments must be of type string or ",r,!1,void 0,n)}const i1=new RegExp("[~\\*/\\[\\]]");function VT(r,t,n){if(t.search(i1)>=0)throw Yc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Hm(...t.split("."))._internalPath}catch{throw Yc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Yc(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let p=`Function ${t}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new ht(Y.INVALID_ARGUMENT,p+r+g)}function r1(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */class kT{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new jn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new s1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(UT("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s1 extends kT{data(){return super.data()}}function UT(r,t){return typeof t=="string"?VT(r,t):t instanceof Hm?t._internalPath:t._delegate._internalPath}/**
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
 */function a1(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ht(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class o1{convertValue(t,n="none"){switch(Jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return he(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Zr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw yt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Qs(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[zc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>he(f.doubleValue));return new jm(u)}convertGeoPoint(t){return new qm(he(t.latitude),he(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=rh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Nl(t));default:return null}}convertTimestamp(t){const n=Wr(t);return new we(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=Wt.fromString(t);Ft(tT(s));const o=new Ml(s.get(1),s.get(3)),u=new dt(s.popFirst(5));return o.isEqual(n)||Wi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function l1(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
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
 */class Tc{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class u1 extends kT{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(UT("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Oc extends u1{data(t={}){return super.data(t)}}class c1{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Tc(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Oc(this._firestore,this._userDataWriter,s.key,s,new Tc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ht(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(p=>{const g=new Oc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Tc(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const g=new Oc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Tc(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,A=-1;return p.type!==0&&(_=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),A=f.indexOf(p.doc.key)),{type:h1(p.type),doc:g,oldIndex:_,newIndex:A}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function h1(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return yt()}}class f1 extends o1{constructor(t){super(),this.firestore=t}convertBytes(t){return new io(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new jn(this.firestore,null,n)}}function d1(r){r=Pl(r,ph);const t=Pl(r.firestore,gh),n=wT(t),s=new f1(t);return a1(r._query),KI(n,r._query).then(o=>new c1(t,s,r,o))}function m1(r){return PT(Pl(r.firestore,gh),[new Sm(r._key,hi.none())])}function p1(r,t){const n=Pl(r.firestore,gh),s=RT(r),o=l1(r.converter,t);return PT(n,[e1(t1(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,hi.exists(!1))]).then(()=>s)}function PT(r,t){return function(s,o){const u=new Qr;return s.asyncQueue.enqueueAndForget(async()=>MI(await FI(s),o,u)),u.promise}(wT(r),t)}(function(t,n=!0){(function(o){ro=o})(Ks),Bs(new Xr("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),p=new gh(new Zb(s.getProvider("auth-internal")),new eR(f,s.getProvider("app-check-internal")),function(_,A){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ht(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ml(_.options.projectId,A)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),ui(Cy,Dy,t),ui(Cy,Dy,"esm2017")})();function Gm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function LT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g1=LT,xT=new zl("auth","Firebase",LT());/**
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
 */const Xc=new dm("@firebase/auth");function _1(r,...t){Xc.logLevel<=Ot.WARN&&Xc.warn(`Auth (${Ks}): ${r}`,...t)}function Nc(r,...t){Xc.logLevel<=Ot.ERROR&&Xc.error(`Auth (${Ks}): ${r}`,...t)}/**
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
 */function Fn(r,...t){throw Km(r,...t)}function di(r,...t){return Km(r,...t)}function zT(r,t,n){const s=Object.assign(Object.assign({},g1()),{[t]:n});return new zl("auth","Firebase",s).create(t,{appName:r.name})}function Xi(r){return zT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Km(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return xT.create(r,...t)}function gt(r,t,...n){if(!r)throw Km(t,...n)}function Ki(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Nc(t),new Error(t)}function Ji(r,t){r||Ki(t)}/**
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
 */function om(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function y1(){return Sv()==="http:"||Sv()==="https:"}function Sv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function v1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(y1()||IS()||"connection"in navigator)?navigator.onLine:!0}function E1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Gl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ji(n>t,"Short delay should be less than long delay!"),this.isMobile=bS()||CS()}get(){return v1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qm(r,t){Ji(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class BT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const A1=new Gl(3e4,6e4);function ns(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function is(r,t,n,s,o={}){return HT(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const p=Bl(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:t,headers:g},u);return wS()||(_.referrerPolicy="no-referrer"),BT.fetch()(qT(r,r.config.apiHost,n,p),_)})}async function HT(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},T1),t);try{const o=new b1(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Ac(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ac(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw Ac(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw Ac(r,"user-disabled",f);const A=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw zT(r,A,_);Fn(r,A)}}catch(o){if(o instanceof _i)throw o;Fn(r,"network-request-failed",{message:String(o)})}}async function Kl(r,t,n,s,o={}){const u=await is(r,t,n,s,o);return"mfaPendingCredential"in u&&Fn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function qT(r,t,n,s){const o=`${t}${n}?${s}`;return r.config.emulator?Qm(r.config,o):`${r.config.apiScheme}://${o}`}function S1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class b1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(di(this.auth,"network-request-failed")),A1.get())})}}function Ac(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=di(r,t,s);return o.customData._tokenResponse=n,o}function bv(r){return r!==void 0&&r.enterprise!==void 0}class R1{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return S1(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function w1(r,t){return is(r,"GET","/v2/recaptchaConfig",ns(r,t))}/**
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
 */async function I1(r,t){return is(r,"POST","/v1/accounts:delete",t)}async function jT(r,t){return is(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Il(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function C1(r,t=!1){const n=Pe(r),s=await n.getIdToken(t),o=Ym(s);gt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Il(Ud(o.auth_time)),issuedAtTime:Il(Ud(o.iat)),expirationTime:Il(Ud(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Ud(r){return Number(r)*1e3}function Ym(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Nc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Wv(n);return o?JSON.parse(o):(Nc("Failed to decode base64 JWT payload"),null)}catch(o){return Nc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Rv(r){const t=Ym(r);return gt(t,"internal-error"),gt(typeof t.exp<"u","internal-error"),gt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ll(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof _i&&D1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function D1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class O1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Il(this.lastLoginAt),this.creationTime=Il(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $c(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Ll(r,jT(n,{idToken:s}));gt(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?FT(u.providerUserInfo):[],p=M1(r.providerData,f),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(p!=null&&p.length),A=g?_:!1,I={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new lm(u.createdAt,u.lastLoginAt),isAnonymous:A};Object.assign(r,I)}async function N1(r){const t=Pe(r);await $c(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function M1(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function FT(r){return r.map(t=>{var{providerId:n}=t,s=Gm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function V1(r,t){const n=await HT(r,{},async()=>{const s=Bl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=qT(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",BT.fetch()(f,{method:"POST",headers:p,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function k1(r,t){return is(r,"POST","/v2/accounts:revokeToken",ns(r,t))}/**
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
 */class Ya{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){gt(t.idToken,"internal-error"),gt(typeof t.idToken<"u","internal-error"),gt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Rv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){gt(t.length!==0,"internal-error");const n=Rv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(gt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await V1(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Ya;return s&&(gt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(gt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(gt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ya,this.toJSON())}_performRefresh(){return Ki("not implemented")}}/**
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
 */function Lr(r,t){gt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Qi{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Gm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new O1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new lm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Ll(this,this.stsTokenManager.getToken(this.auth,t));return gt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return C1(this,t)}reload(){return N1(this)}_assign(t){this!==t&&(gt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Qi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){gt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await $c(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Xi(this.auth));const t=await this.getIdToken();return await Ll(this,I1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,p,g,_,A;const I=(s=n.displayName)!==null&&s!==void 0?s:void 0,P=(o=n.email)!==null&&o!==void 0?o:void 0,H=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,X=(f=n.photoURL)!==null&&f!==void 0?f:void 0,J=(p=n.tenantId)!==null&&p!==void 0?p:void 0,Q=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,ft=(_=n.createdAt)!==null&&_!==void 0?_:void 0,at=(A=n.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:lt,emailVerified:vt,isAnonymous:W,providerData:mt,stsTokenManager:O}=n;gt(lt&&O,t,"internal-error");const b=Ya.fromJSON(this.name,O);gt(typeof lt=="string",t,"internal-error"),Lr(I,t.name),Lr(P,t.name),gt(typeof vt=="boolean",t,"internal-error"),gt(typeof W=="boolean",t,"internal-error"),Lr(H,t.name),Lr(X,t.name),Lr(J,t.name),Lr(Q,t.name),Lr(ft,t.name),Lr(at,t.name);const S=new Qi({uid:lt,auth:t,email:P,emailVerified:vt,displayName:I,isAnonymous:W,photoURL:X,phoneNumber:H,tenantId:J,stsTokenManager:b,createdAt:ft,lastLoginAt:at});return mt&&Array.isArray(mt)&&(S.providerData=mt.map(C=>Object.assign({},C))),Q&&(S._redirectEventId=Q),S}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ya;o.updateFromServerResponse(n);const u=new Qi({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await $c(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];gt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?FT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Ya;p.updateFromIdToken(s);const g=new Qi({uid:o.localId,auth:t,stsTokenManager:p,isAnonymous:f}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new lm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const wv=new Map;function Yi(r){Ji(r instanceof Function,"Expected a class definition");let t=wv.get(r);return t?(Ji(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,wv.set(r,t),t)}/**
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
 */class GT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}GT.type="NONE";const Iv=GT;/**
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
 */function Mc(r,t,n){return`firebase:${r}:${t}:${n}`}class Xa{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Mc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Mc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Qi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Xa(Yi(Iv),t,s);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Yi(Iv);const f=Mc(s,t.config.apiKey,t.name);let p=null;for(const _ of n)try{const A=await _._get(f);if(A){const I=Qi._fromJSON(t,A);_!==u&&(p=I),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Xa(u,t,s):(u=g[0],p&&await u._set(f,p.toJSON()),await Promise.all(n.map(async _=>{if(_!==u)try{await _._remove(f)}catch{}})),new Xa(u,t,s))}}/**
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
 */function Cv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(XT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(KT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(WT(t))return"Blackberry";if(ZT(t))return"Webos";if(QT(t))return"Safari";if((t.includes("chrome/")||YT(t))&&!t.includes("edge/"))return"Chrome";if($T(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function KT(r=$e()){return/firefox\//i.test(r)}function QT(r=$e()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function YT(r=$e()){return/crios\//i.test(r)}function XT(r=$e()){return/iemobile/i.test(r)}function $T(r=$e()){return/android/i.test(r)}function WT(r=$e()){return/blackberry/i.test(r)}function ZT(r=$e()){return/webos/i.test(r)}function Xm(r=$e()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function U1(r=$e()){var t;return Xm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function P1(){return DS()&&document.documentMode===10}function JT(r=$e()){return Xm(r)||$T(r)||ZT(r)||WT(r)||/windows phone/i.test(r)||XT(r)}/**
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
 */function t0(r,t=[]){let n;switch(r){case"Browser":n=Cv($e());break;case"Worker":n=`${Cv($e())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${s}`}/**
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
 */class L1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,p)=>{try{const g=t(u);f(g)}catch(g){p(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function x1(r,t={}){return is(r,"GET","/v2/passwordPolicy",ns(r,t))}/**
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
 */const z1=6;class B1{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:z1,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,g),this.validatePasswordCharacterOptions(t,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class H1{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dv(this),this.idTokenSubscription=new Dv(this),this.beforeStateQueue=new L1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Yi(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Xa.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await jT(this,{idToken:t}),s=await Qi._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(gn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(t);(!f||f===p)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return gt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await $c(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=E1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(gn(this.app))return Promise.reject(Xi(this));const n=t?Pe(t):null;return n&&gt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&gt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return gn(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await x1(this),n=new B1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new zl("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await k1(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Yi(t)||this._popupRedirectResolver;gt(n,this,"argument-error"),this.redirectPersistenceManager=await Xa.create(this,[Yi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(gt(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=t.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return gt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=t0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&_1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ws(r){return Pe(r)}class Dv{constructor(t){this.auth=t,this.observer=null,this.addObserver=LS(n=>this.observer=n)}get next(){return gt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _h={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function q1(r){_h=r}function e0(r){return _h.loadJS(r)}function j1(){return _h.recaptchaEnterpriseScript}function F1(){return _h.gapiScript}function G1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class K1{constructor(){this.enterprise=new Q1}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Q1{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const Y1="recaptcha-enterprise",n0="NO_RECAPTCHA";class X1{constructor(t){this.type=Y1,this.auth=Ws(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{w1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const _=new R1(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,f(_.siteKey)}}).catch(g=>{p(g)})})}function o(u,f,p){const g=window.grecaptcha;bv(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(_=>{f(_)}).catch(()=>{f(n0)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new K1().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(p=>{if(!n&&bv(window.grecaptcha))o(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=j1();g.length!==0&&(g+=p),e0(g).then(()=>{o(p,u,f)}).catch(_=>{f(_)})}}).catch(p=>{f(p)})})}}async function Ov(r,t,n,s=!1,o=!1){const u=new X1(r);let f;if(o)f=n0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const p=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,_=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function um(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Ov(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Ov(r,t,n,n==="getOobCode");return s(r,p)}else return Promise.reject(f)})}/**
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
 */function $1(r,t){const n=eh(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(zs(u,t??{}))return o;Fn(o,"already-initialized")}return n.initialize({options:t})}function W1(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Yi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function Z1(r,t,n){const s=Ws(r);gt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=i0(t),{host:f,port:p}=J1(t),g=p===null?"":`:${p}`,_={url:`${u}//${f}${g}/`},A=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){gt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),gt(zs(_,s.config.emulator)&&zs(A,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=A,s.settings.appVerificationDisabledForTesting=!0,tC()}function i0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function J1(r){const t=i0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Nv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Nv(f)}}}function Nv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function tC(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class $m{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ki("not implemented")}_getIdTokenResponse(t){return Ki("not implemented")}_linkToIdToken(t,n){return Ki("not implemented")}_getReauthenticationResolver(t){return Ki("not implemented")}}async function eC(r,t){return is(r,"POST","/v1/accounts:signUp",t)}/**
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
 */async function nC(r,t){return Kl(r,"POST","/v1/accounts:signInWithPassword",ns(r,t))}/**
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
 */async function iC(r,t){return Kl(r,"POST","/v1/accounts:signInWithEmailLink",ns(r,t))}async function rC(r,t){return Kl(r,"POST","/v1/accounts:signInWithEmailLink",ns(r,t))}/**
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
 */class xl extends $m{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new xl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new xl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return um(t,n,"signInWithPassword",nC);case"emailLink":return iC(t,{email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return um(t,s,"signUpPassword",eC);case"emailLink":return rC(t,{idToken:n,email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function $a(r,t){return Kl(r,"POST","/v1/accounts:signInWithIdp",ns(r,t))}/**
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
 */const sC="http://localhost";class js extends $m{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new js(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Gm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new js(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return $a(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,$a(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$a(t,n)}buildRequest(){const t={requestUri:sC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Bl(n)}return t}}/**
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
 */function aC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oC(r){const t=yl(vl(r)).link,n=t?yl(vl(t)).deep_link_id:null,s=yl(vl(r)).deep_link_id;return(s?yl(vl(s)).link:null)||s||n||t||r}class Wm{constructor(t){var n,s,o,u,f,p;const g=yl(vl(t)),_=(n=g.apiKey)!==null&&n!==void 0?n:null,A=(s=g.oobCode)!==null&&s!==void 0?s:null,I=aC((o=g.mode)!==null&&o!==void 0?o:null);gt(_&&A&&I,"argument-error"),this.apiKey=_,this.operation=I,this.code=A,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=g.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(p=g.tenantId)!==null&&p!==void 0?p:null}static parseLink(t){const n=oC(t);try{return new Wm(n)}catch{return null}}}/**
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
 */class lo{constructor(){this.providerId=lo.PROVIDER_ID}static credential(t,n){return xl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=Wm.parseLink(n);return gt(s,"argument-error"),xl._fromEmailAndCode(t,s.code,s.tenantId)}}lo.PROVIDER_ID="password";lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class r0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ql extends r0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class xr extends Ql{constructor(){super("facebook.com")}static credential(t){return js._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xr.credentialFromTaggedObject(t)}static credentialFromError(t){return xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xr.credential(t.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
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
 */class zr extends Ql{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return js._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return zr.credentialFromTaggedObject(t)}static credentialFromError(t){return zr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return zr.credential(n,s)}catch{return null}}}zr.GOOGLE_SIGN_IN_METHOD="google.com";zr.PROVIDER_ID="google.com";/**
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
 */class Br extends Ql{constructor(){super("github.com")}static credential(t){return js._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Br.credentialFromTaggedObject(t)}static credentialFromError(t){return Br.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Br.credential(t.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
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
 */class Hr extends Ql{constructor(){super("twitter.com")}static credential(t,n){return js._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Hr.credentialFromTaggedObject(t)}static credentialFromError(t){return Hr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Hr.credential(n,s)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
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
 */async function lC(r,t){return Kl(r,"POST","/v1/accounts:signUp",ns(r,t))}/**
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
 */class Fs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Qi._fromIdTokenResponse(t,s,o),f=Mv(s);return new Fs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=Mv(s);return new Fs({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function Mv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Wc extends _i{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Wc(t,n,s,o)}}function s0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(r,u,t,s):u})}async function uC(r,t,n=!1){const s=await Ll(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Fs._forOperation(r,"link",s)}/**
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
 */async function cC(r,t,n=!1){const{auth:s}=r;if(gn(s.app))return Promise.reject(Xi(s));const o="reauthenticate";try{const u=await Ll(r,s0(s,o,t,r),n);gt(u.idToken,s,"internal-error");const f=Ym(u.idToken);gt(f,s,"internal-error");const{sub:p}=f;return gt(r.uid===p,s,"user-mismatch"),Fs._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Fn(s,"user-mismatch"),u}}/**
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
 */async function a0(r,t,n=!1){if(gn(r.app))return Promise.reject(Xi(r));const s="signIn",o=await s0(r,s,t),u=await Fs._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function hC(r,t){return a0(Ws(r),t)}/**
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
 */async function o0(r){const t=Ws(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function fC(r,t,n){if(gn(r.app))return Promise.reject(Xi(r));const s=Ws(r),f=await um(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lC).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&o0(r),g}),p=await Fs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function dC(r,t,n){return gn(r.app)?Promise.reject(Xi(r)):hC(Pe(r),lo.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&o0(r),s})}function mC(r,t,n,s){return Pe(r).onIdTokenChanged(t,n,s)}function pC(r,t,n){return Pe(r).beforeAuthStateChanged(t,n)}function gC(r){return Pe(r).signOut()}const Zc="__sak";/**
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
 */class l0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zc,"1"),this.storage.removeItem(Zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _C=1e3,yC=10;class u0 extends l0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=JT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,p,g)=>{this.notifyListeners(f,g)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);P1()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,yC):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}u0.type="LOCAL";const vC=u0;/**
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
 */class c0 extends l0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}c0.type="SESSION";const h0=c0;/**
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
 */function EC(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new yh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(f).map(async _=>_(n.origin,u)),g=await EC(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
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
 */function Zm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class TC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((p,g)=>{const _=Zm("",20);o.port1.start();const A=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(I){const P=I;if(P.data.eventId===_)switch(P.data.status){case"ack":clearTimeout(A),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(P.data.response);break;default:clearTimeout(A),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:_,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function mi(){return window}function AC(r){mi().location.href=r}/**
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
 */function f0(){return typeof mi().WorkerGlobalScope<"u"&&typeof mi().importScripts=="function"}async function SC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bC(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function RC(){return f0()?self:null}/**
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
 */const d0="firebaseLocalStorageDb",wC=1,Jc="firebaseLocalStorage",m0="fbase_key";class Yl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vh(r,t){return r.transaction([Jc],t?"readwrite":"readonly").objectStore(Jc)}function IC(){const r=indexedDB.deleteDatabase(d0);return new Yl(r).toPromise()}function cm(){const r=indexedDB.open(d0,wC);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Jc,{keyPath:m0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Jc)?t(s):(s.close(),await IC(),t(await cm()))})})}async function Vv(r,t,n){const s=vh(r,!0).put({[m0]:t,value:n});return new Yl(s).toPromise()}async function CC(r,t){const n=vh(r,!1).get(t),s=await new Yl(n).toPromise();return s===void 0?null:s.value}function kv(r,t){const n=vh(r,!0).delete(t);return new Yl(n).toPromise()}const DC=800,OC=3;class p0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>OC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(RC()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await SC(),!this.activeServiceWorker)return;this.sender=new TC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||bC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await cm();return await Vv(t,Zc,"1"),await kv(t,Zc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>CC(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>kv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=vh(o,!1).getAll();return new Yl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p0.type="LOCAL";const NC=p0;new Gl(3e4,6e4);/**
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
 */function MC(r,t){return t?Yi(t):(gt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Jm extends $m{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $a(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $a(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $a(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function VC(r){return a0(r.auth,new Jm(r),r.bypassAuthState)}function kC(r){const{auth:t,user:n}=r;return gt(n,t,"internal-error"),cC(n,new Jm(r),r.bypassAuthState)}async function UC(r){const{auth:t,user:n}=r;return gt(n,t,"internal-error"),uC(n,new Jm(r),r.bypassAuthState)}/**
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
 */class g0{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:p}=t;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return VC;case"linkViaPopup":case"linkViaRedirect":return UC;case"reauthViaPopup":case"reauthViaRedirect":return kC;default:Fn(this.auth,"internal-error")}}resolve(t){Ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PC=new Gl(2e3,1e4);class Ka extends g0{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ka.currentPopupAction&&Ka.currentPopupAction.cancel(),Ka.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return gt(t,this.auth,"internal-error"),t}async onExecution(){Ji(this.filter.length===1,"Popup operations only handle one event");const t=Zm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(di(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(di(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ka.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(di(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,PC.get())};t()}}Ka.currentPopupAction=null;/**
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
 */const LC="pendingRedirect",Vc=new Map;class xC extends g0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Vc.get(this.auth._key());if(!t){try{const s=await zC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Vc.set(this.auth._key(),t)}return this.bypassAuthState||Vc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zC(r,t){const n=qC(t),s=HC(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function BC(r,t){Vc.set(r._key(),t)}function HC(r){return Yi(r._redirectPersistence)}function qC(r){return Mc(LC,r.config.apiKey,r.name)}async function jC(r,t,n=!1){if(gn(r.app))return Promise.reject(Xi(r));const s=Ws(r),o=MC(s,t),f=await new xC(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const FC=10*60*1e3;class GC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!KC(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!_0(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(di(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=FC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uv(t))}saveEventToCache(t){this.cachedEventUids.add(Uv(t)),this.lastProcessedEventTime=Date.now()}}function Uv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function _0({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function KC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _0(r);default:return!1}}/**
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
 */async function QC(r,t={}){return is(r,"GET","/v1/projects",t)}/**
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
 */const YC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XC=/^https?/;async function $C(r){if(r.config.emulator)return;const{authorizedDomains:t}=await QC(r);for(const n of t)try{if(WC(n))return}catch{}Fn(r,"unauthorized-domain")}function WC(r){const t=om(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!XC.test(n))return!1;if(YC.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const ZC=new Gl(3e4,6e4);function Pv(){const r=mi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function JC(r){return new Promise((t,n)=>{var s,o,u;function f(){Pv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pv(),n(di(r,"network-request-failed"))},timeout:ZC.get()})}if(!((o=(s=mi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=mi().gapi)===null||u===void 0)&&u.load)f();else{const p=G1("iframefcb");return mi()[p]=()=>{gapi.load?f():n(di(r,"network-request-failed"))},e0(`${F1()}?onload=${p}`).catch(g=>n(g))}}).catch(t=>{throw kc=null,t})}let kc=null;function tD(r){return kc=kc||JC(r),kc}/**
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
 */const eD=new Gl(5e3,15e3),nD="__/auth/iframe",iD="emulator/auth/iframe",rD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aD(r){const t=r.config;gt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Qm(t,iD):`https://${r.config.authDomain}/${nD}`,s={apiKey:t.apiKey,appName:r.name,v:Ks},o=sD.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Bl(s).slice(1)}`}async function oD(r){const t=await tD(r),n=mi().gapi;return gt(n,r,"internal-error"),t.open({where:document.body,url:aD(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rD,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=di(r,"network-request-failed"),p=mi().setTimeout(()=>{u(f)},eD.get());function g(){mi().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
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
 */const lD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uD=500,cD=600,hD="_blank",fD="http://localhost";class Lv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dD(r,t,n,s=uD,o=cD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},lD),{width:s.toString(),height:o.toString(),top:u,left:f}),_=$e().toLowerCase();n&&(p=YT(_)?hD:n),KT(_)&&(t=t||fD,g.scrollbars="yes");const A=Object.entries(g).reduce((P,[H,X])=>`${P}${H}=${X},`,"");if(U1(_)&&p!=="_self")return mD(t||"",p),new Lv(null);const I=window.open(t||"",p,A);gt(I,r,"popup-blocked");try{I.focus()}catch{}return new Lv(I)}function mD(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const pD="__/auth/handler",gD="emulator/auth/handler",_D=encodeURIComponent("fac");async function xv(r,t,n,s,o,u){gt(r.config.authDomain,r,"auth-domain-config-required"),gt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ks,eventId:o};if(t instanceof r0){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",PS(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,I]of Object.entries({}))f[A]=I}if(t instanceof Ql){const A=t.getScopes().filter(I=>I!=="");A.length>0&&(f.scopes=A.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const A of Object.keys(p))p[A]===void 0&&delete p[A];const g=await r._getAppCheckToken(),_=g?`#${_D}=${encodeURIComponent(g)}`:"";return`${yD(r)}?${Bl(p).slice(1)}${_}`}function yD({config:r}){return r.emulator?Qm(r,gD):`https://${r.authDomain}/${pD}`}/**
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
 */const Pd="webStorageSupport";class vD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h0,this._completeRedirectFn=jC,this._overrideRedirectResult=BC}async _openPopup(t,n,s,o){var u;Ji((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await xv(t,n,s,om(),o);return dD(t,f,Zm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await xv(t,n,s,om(),o);return AC(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Ji(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await oD(t),s=new GC(t);return n.register("authEvent",o=>(gt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Pd,{type:Pd},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Pd];f!==void 0&&n(!!f),Fn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$C(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return JT()||QT()||Xm()}}const ED=vD;var zv="@firebase/auth",Bv="1.9.1";/**
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
 */class TD{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){gt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AD(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SD(r){Bs(new Xr("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;gt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t0(r)},_=new H1(s,o,u,g);return W1(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Bs(new Xr("auth-internal",t=>{const n=Ws(t.getProvider("auth").getImmediate());return(s=>new TD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ui(zv,Bv,AD(r)),ui(zv,Bv,"esm2017")}/**
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
 */const bD=5*60,RD=eE("authIdTokenMaxAge")||bD;let Hv=null;const wD=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>RD)return;const o=n==null?void 0:n.token;Hv!==o&&(Hv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ID(r=pm()){const t=eh(r,"auth");if(t.isInitialized())return t.getImmediate();const n=$1(r,{popupRedirectResolver:ED,persistence:[NC,vC,h0]}),s=eE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=wD(u.toString());pC(n,f,()=>f(n.currentUser)),mC(n,p=>f(p))}}const o=Zv("auth");return o&&Z1(n,`http://${o}`),n}function CD(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}q1({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=di("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",CD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SD("Browser");/**
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
 */const y0="firebasestorage.googleapis.com",v0="storageBucket",DD=2*60*1e3,OD=10*60*1e3;/**
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
 */class le extends _i{constructor(t,n,s=0){super(Ld(t),`Firebase Storage: ${n} (${Ld(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,le.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ld(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var oe;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(oe||(oe={}));function Ld(r){return"storage/"+r}function tp(){const r="An unknown error occurred, please check the error payload for server response.";return new le(oe.UNKNOWN,r)}function ND(r){return new le(oe.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function MD(r){return new le(oe.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function VD(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new le(oe.UNAUTHENTICATED,r)}function kD(){return new le(oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function UD(r){return new le(oe.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function PD(){return new le(oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function LD(){return new le(oe.CANCELED,"User canceled the upload/download.")}function xD(r){return new le(oe.INVALID_URL,"Invalid URL '"+r+"'.")}function zD(r){return new le(oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function BD(){return new le(oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+v0+"' property when initializing the app?")}function HD(){return new le(oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qD(){return new le(oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jD(r){return new le(oe.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hm(r){return new le(oe.INVALID_ARGUMENT,r)}function E0(){return new le(oe.APP_DELETED,"The Firebase app was deleted.")}function FD(r){return new le(oe.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cl(r,t){return new le(oe.INVALID_FORMAT,"String does not match format '"+r+"': "+t)}function _l(r){throw new le(oe.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class _n{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=_n.makeFromUrl(t,n)}catch{return new _n(t,"")}if(s.path==="")return s;throw zD(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(vt){vt.path.charAt(vt.path.length-1)==="/"&&(vt.path_=vt.path_.slice(0,-1))}const f="(/(.*))?$",p=new RegExp("^gs://"+o+f,"i"),g={bucket:1,path:3};function _(vt){vt.path_=decodeURIComponent(vt.path)}const A="v[A-Za-z0-9_]+",I=n.replace(/[.]/g,"\\."),P="(/([^?#]*).*)?$",H=new RegExp(`^https?://${I}/${A}/b/${o}/o${P}`,"i"),X={bucket:1,path:3},J=n===y0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,Q="([^?#]*)",ft=new RegExp(`^https?://${J}/${o}/${Q}`,"i"),lt=[{regex:p,indices:g,postModify:u},{regex:H,indices:X,postModify:_},{regex:ft,indices:{bucket:1,path:2},postModify:_}];for(let vt=0;vt<lt.length;vt++){const W=lt[vt],mt=W.regex.exec(t);if(mt){const O=mt[W.indices.bucket];let b=mt[W.indices.path];b||(b=""),s=new _n(O,b),W.postModify(s);break}}if(s==null)throw xD(t);return s}}class GD{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function KD(r,t,n){let s=1,o=null,u=null,f=!1,p=0;function g(){return p===2}let _=!1;function A(...Q){_||(_=!0,t.apply(null,Q))}function I(Q){o=setTimeout(()=>{o=null,r(H,g())},Q)}function P(){u&&clearTimeout(u)}function H(Q,...ft){if(_){P();return}if(Q){P(),A.call(null,Q,...ft);return}if(g()||f){P(),A.call(null,Q,...ft);return}s<64&&(s*=2);let lt;p===1?(p=2,lt=0):lt=(s+Math.random())*1e3,I(lt)}let X=!1;function J(Q){X||(X=!0,P(),!_&&(o!==null?(Q||(p=2),clearTimeout(o),I(0)):Q||(p=1)))}return I(0),u=setTimeout(()=>{f=!0,J(!0)},n),J}function QD(r){r(!1)}/**
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
 */function YD(r){return r!==void 0}function XD(r){return typeof r=="object"&&!Array.isArray(r)}function ep(r){return typeof r=="string"||r instanceof String}function qv(r){return np()&&r instanceof Blob}function np(){return typeof Blob<"u"}function jv(r,t,n,s){if(s<t)throw hm(`Invalid value for '${r}'. Expected ${t} or greater.`);if(s>n)throw hm(`Invalid value for '${r}'. Expected ${n} or less.`)}/**
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
 */function Eh(r,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${r}`}function T0(r){const t=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=t(s)+"="+t(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var xs;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(xs||(xs={}));/**
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
 */function $D(r,t){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=t.indexOf(r)!==-1;return n||o||u}/**
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
 */class WD{constructor(t,n,s,o,u,f,p,g,_,A,I,P=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=p,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=A,this.connectionFactory_=I,this.retry=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((H,X)=>{this.resolve_=H,this.reject_=X,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new Sc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=p=>{const g=p.loaded,_=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const p=u.getErrorCode()===xs.NO_ERROR,g=u.getStatus();if(!p||$D(g,this.additionalRetryCodes_)&&this.retry){const A=u.getErrorCode()===xs.ABORT;s(!1,new Sc(!1,null,A));return}const _=this.successCodes_.indexOf(g)!==-1;s(!0,new Sc(_,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(p,p.getResponse());YD(g)?u(g):u()}catch(g){f(g)}else if(p!==null){const g=tp();g.serverResponse=p.getErrorText(),this.errorCallback_?f(this.errorCallback_(p,g)):f(g)}else if(o.canceled){const g=this.appDelete_?E0():LD();f(g)}else{const g=PD();f(g)}};this.canceled_?n(!1,new Sc(!1,null,!0)):this.backoffId_=KD(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&QD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sc{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function ZD(r,t){t!==null&&t.length>0&&(r.Authorization="Firebase "+t)}function JD(r,t){r["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function tO(r,t){t&&(r["X-Firebase-GMPID"]=t)}function eO(r,t){t!==null&&(r["X-Firebase-AppCheck"]=t)}function nO(r,t,n,s,o,u,f=!0){const p=T0(r.urlParams),g=r.url+p,_=Object.assign({},r.headers);return tO(_,t),ZD(_,n),JD(_,u),eO(_,s),new WD(g,r.method,_,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f)}/**
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
 */function iO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rO(...r){const t=iO();if(t!==void 0){const n=new t;for(let s=0;s<r.length;s++)n.append(r[s]);return n.getBlob()}else{if(np())return new Blob(r);throw new le(oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sO(r,t,n){return r.webkitSlice?r.webkitSlice(t,n):r.mozSlice?r.mozSlice(t,n):r.slice?r.slice(t,n):null}/**
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
 */function aO(r){if(typeof atob>"u")throw jD("base-64");return atob(r)}/**
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
 */const li={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class xd{constructor(t,n){this.data=t,this.contentType=n||null}}function oO(r,t){switch(r){case li.RAW:return new xd(A0(t));case li.BASE64:case li.BASE64URL:return new xd(S0(r,t));case li.DATA_URL:return new xd(uO(t),cO(t))}throw tp()}function A0(r){const t=[];for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<r.length-1&&(r.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const u=s,f=r.charCodeAt(++n);s=65536|(u&1023)<<10|f&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function lO(r){let t;try{t=decodeURIComponent(r)}catch{throw Cl(li.DATA_URL,"Malformed data URL.")}return A0(t)}function S0(r,t){switch(r){case li.BASE64:{const o=t.indexOf("-")!==-1,u=t.indexOf("_")!==-1;if(o||u)throw Cl(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case li.BASE64URL:{const o=t.indexOf("+")!==-1,u=t.indexOf("/")!==-1;if(o||u)throw Cl(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aO(t)}catch(o){throw o.message.includes("polyfill")?o:Cl(r,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class b0{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Cl(li.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=hO(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function uO(r){const t=new b0(r);return t.base64?S0(li.BASE64,t.rest):lO(t.rest)}function cO(r){return new b0(r).contentType}function hO(r,t){return r.length>=t.length?r.substring(r.length-t.length)===t:!1}/**
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
 */class qr{constructor(t,n){let s=0,o="";qv(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(qv(this.data_)){const s=this.data_,o=sO(s,t,n);return o===null?null:new qr(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new qr(s,!0)}}static getBlob(...t){if(np()){const n=t.map(s=>s instanceof qr?s.data_:s);return new qr(rO.apply(null,n))}else{const n=t.map(f=>ep(f)?oO(li.RAW,f).data:f.data_);let s=0;n.forEach(f=>{s+=f.byteLength});const o=new Uint8Array(s);let u=0;return n.forEach(f=>{for(let p=0;p<f.length;p++)o[u++]=f[p]}),new qr(o,!0)}}uploadData(){return this.data_}}/**
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
 */function R0(r){let t;try{t=JSON.parse(r)}catch{return null}return XD(t)?t:null}/**
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
 */function fO(r){if(r.length===0)return null;const t=r.lastIndexOf("/");return t===-1?"":r.slice(0,t)}function dO(r,t){const n=t.split("/").filter(s=>s.length>0).join("/");return r.length===0?n:r+"/"+n}function w0(r){const t=r.lastIndexOf("/",r.length-2);return t===-1?r:r.slice(t+1)}/**
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
 */function mO(r,t){return t}class rn{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||mO}}let bc=null;function pO(r){return!ep(r)||r.length<2?r:w0(r)}function I0(){if(bc)return bc;const r=[];r.push(new rn("bucket")),r.push(new rn("generation")),r.push(new rn("metageneration")),r.push(new rn("name","fullPath",!0));function t(u,f){return pO(f)}const n=new rn("name");n.xform=t,r.push(n);function s(u,f){return f!==void 0?Number(f):f}const o=new rn("size");return o.xform=s,r.push(o),r.push(new rn("timeCreated")),r.push(new rn("updated")),r.push(new rn("md5Hash",null,!0)),r.push(new rn("cacheControl",null,!0)),r.push(new rn("contentDisposition",null,!0)),r.push(new rn("contentEncoding",null,!0)),r.push(new rn("contentLanguage",null,!0)),r.push(new rn("contentType",null,!0)),r.push(new rn("metadata","customMetadata",!0)),bc=r,bc}function gO(r,t){function n(){const s=r.bucket,o=r.fullPath,u=new _n(s,o);return t._makeStorageReference(u)}Object.defineProperty(r,"ref",{get:n})}function _O(r,t,n){const s={};s.type="file";const o=n.length;for(let u=0;u<o;u++){const f=n[u];s[f.local]=f.xform(s,t[f.server])}return gO(s,r),s}function C0(r,t,n){const s=R0(t);return s===null?null:_O(r,s,n)}function yO(r,t,n,s){const o=R0(t);if(o===null||!ep(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const f=encodeURIComponent;return u.split(",").map(_=>{const A=r.bucket,I=r.fullPath,P="/b/"+f(A)+"/o/"+f(I),H=Eh(P,n,s),X=T0({alt:"media",token:_});return H+X})[0]}function vO(r,t){const n={},s=t.length;for(let o=0;o<s;o++){const u=t[o];u.writable&&(n[u.server]=r[u.local])}return JSON.stringify(n)}class ip{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function D0(r){if(!r)throw tp()}function EO(r,t){function n(s,o){const u=C0(r,o,t);return D0(u!==null),u}return n}function TO(r,t){function n(s,o){const u=C0(r,o,t);return D0(u!==null),yO(u,o,r.host,r._protocol)}return n}function O0(r){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=kD():o=VD():n.getStatus()===402?o=MD(r.bucket):n.getStatus()===403?o=UD(r.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function N0(r){const t=O0(r);function n(s,o){let u=t(s,o);return s.getStatus()===404&&(u=ND(r.path)),u.serverResponse=o.serverResponse,u}return n}function AO(r,t,n){const s=t.fullServerUrl(),o=Eh(s,r.host,r._protocol),u="GET",f=r.maxOperationRetryTime,p=new ip(o,u,TO(r,n),f);return p.errorHandler=N0(t),p}function SO(r,t){const n=t.fullServerUrl(),s=Eh(n,r.host,r._protocol),o="DELETE",u=r.maxOperationRetryTime;function f(g,_){}const p=new ip(s,o,f,u);return p.successCodes=[200,204],p.errorHandler=N0(t),p}function bO(r,t){return r&&r.contentType||t&&t.type()||"application/octet-stream"}function RO(r,t,n){const s=Object.assign({},n);return s.fullPath=r.path,s.size=t.size(),s.contentType||(s.contentType=bO(null,t)),s}function wO(r,t,n,s,o){const u=t.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function p(){let lt="";for(let vt=0;vt<2;vt++)lt=lt+Math.random().toString().slice(2);return lt}const g=p();f["Content-Type"]="multipart/related; boundary="+g;const _=RO(t,s,o),A=vO(_,n),I="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+A+`\r
--`+g+`\r
Content-Type: `+_.contentType+`\r
\r
`,P=`\r
--`+g+"--",H=qr.getBlob(I,s,P);if(H===null)throw HD();const X={name:_.fullPath},J=Eh(u,r.host,r._protocol),Q="POST",ft=r.maxUploadRetryTime,at=new ip(J,Q,EO(r,n),ft);return at.urlParams=X,at.headers=f,at.body=H.uploadData(),at.errorHandler=O0(t),at}class IO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xs.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xs.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xs.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o){if(this.sent_)throw _l("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const u in o)o.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,o[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _l("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _l("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _l("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _l("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class CO extends IO{initXhr(){this.xhr_.responseType="text"}}function rp(){return new CO}/**
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
 */class Gs{constructor(t,n){this._service=t,n instanceof _n?this._location=n:this._location=_n.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Gs(t,n)}get root(){const t=new _n(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return w0(this._location.path)}get storage(){return this._service}get parent(){const t=fO(this._location.path);if(t===null)return null;const n=new _n(this._location.bucket,t);return new Gs(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw FD(t)}}function DO(r,t,n){r._throwIfRoot("uploadBytes");const s=wO(r.storage,r._location,I0(),new qr(t,!0),n);return r.storage.makeRequestWithTokens(s,rp).then(o=>({metadata:o,ref:r}))}function OO(r){r._throwIfRoot("getDownloadURL");const t=AO(r.storage,r._location,I0());return r.storage.makeRequestWithTokens(t,rp).then(n=>{if(n===null)throw qD();return n})}function NO(r){r._throwIfRoot("deleteObject");const t=SO(r.storage,r._location);return r.storage.makeRequestWithTokens(t,rp)}function MO(r,t){const n=dO(r._location.path,t),s=new _n(r._location.bucket,n);return new Gs(r.storage,s)}/**
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
 */function VO(r){return/^[A-Za-z]+:\/\//.test(r)}function kO(r,t){return new Gs(r,t)}function M0(r,t){if(r instanceof sp){const n=r;if(n._bucket==null)throw BD();const s=new Gs(n,n._bucket);return t!=null?M0(s,t):s}else return t!==void 0?MO(r,t):r}function UO(r,t){if(t&&VO(t)){if(r instanceof sp)return kO(r,t);throw hm("To use ref(service, url), the first argument must be a Storage instance.")}else return M0(r,t)}function Fv(r,t){const n=t==null?void 0:t[v0];return n==null?null:_n.makeFromBucketSpec(n,r)}function PO(r,t,n,s={}){r.host=`${t}:${n}`,r._protocol="http";const{mockUserToken:o}=s;o&&(r._overrideAuthToken=typeof o=="string"?o:nE(o,r.app.options.projectId))}class sp{constructor(t,n,s,o,u){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._bucket=null,this._host=y0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DD,this._maxUploadRetryTime=OD,this._requests=new Set,o!=null?this._bucket=_n.makeFromBucketSpec(o,this._host):this._bucket=Fv(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,t):this._bucket=Fv(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){jv("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){jv("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Gs(this,t)}_makeRequest(t,n,s,o,u=!0){if(this._deleted)return new GD(E0());{const f=nO(t,this._appId,s,o,n,this._firebaseVersion,u);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const Gv="@firebase/storage",Kv="0.13.7";/**
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
 */const V0="storage";function LO(r,t,n){return r=Pe(r),DO(r,t,n)}function xO(r){return r=Pe(r),OO(r)}function zO(r){return r=Pe(r),NO(r)}function Qv(r,t){return r=Pe(r),UO(r,t)}function BO(r=pm(),t){r=Pe(r);const s=eh(r,V0).getImmediate({identifier:t}),o=Jv("storage");return o&&HO(s,...o),s}function HO(r,t,n,s={}){PO(r,t,n,s)}function qO(r,{instanceIdentifier:t}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new sp(n,s,o,t,Ks)}function jO(){Bs(new Xr(V0,qO,"PUBLIC").setMultipleInstances(!0)),ui(Gv,Kv,""),ui(Gv,Kv,"esm2017")}jO();const FO={apiKey:"AIzaSyAQgWe34nInChUl8ZbOF9YiVJCjBzvo2cY",authDomain:"chronoapp-53363.firebaseapp.com",projectId:"chronoapp-53363",storageBucket:"chronoapp-53363.firebasestorage.app",messagingSenderId:"902735662769",appId:"1:902735662769:web:1aac26ba94a78b6c455c90"},k0=sE(FO),zd=XI(k0),Bd=ID(k0),Yv=BO();function GO(){const r=Gi.useRef(null),[t,n]=Gi.useState(null),[s,o]=Gi.useState(""),[u,f]=Gi.useState(""),[p,g]=Gi.useState(null),[_,A]=Gi.useState([]),[I,P]=Gi.useState({name:"",brand:"",year:"",image:"",movement:""});Gi.useEffect(()=>{t&&ft()},[t]);const H=async()=>{try{const W=await fC(Bd,s,u);n(W.user),g("Registrazione avvenuta con successo!")}catch(W){g(W.message)}},X=async()=>{try{const W=await dC(Bd,s,u);n(W.user),g("Accesso effettuato con successo!")}catch(W){g(W.message)}},J=async()=>{await gC(Bd),n(null),A([]),g("Disconnessione effettuata.")},Q=async()=>{if(I.name.trim()!==""&&I.brand.trim()!==""&&I.year>0&&I.movement.trim()!==""&&I.image.trim()!=="")try{console.log("Sto salvando:",I),await p1(Ev(zd,"watches"),{...I,userId:t.uid}),ft(),P({name:"",brand:"",year:"",image:"",movement:""}),g("Orologio aggiunto con successo!")}catch(W){g(W.message)}else g("Compila tutti i campi!")},ft=async()=>{try{const mt=(await d1(Ev(zd,"watches"))).docs.map(O=>(console.log("Dati recuperati:",O.data()),{id:O.id,...O.data()})).filter(O=>O.userId===(t==null?void 0:t.uid));A(mt)}catch(W){g(W.message)}},at=async(W,mt)=>{try{if(mt){const O=Qv(Yv,mt);await zO(O)}await m1(RT(zd,"watches",W)),ft(),g("Orologio eliminato con successo!")}catch(O){g("Errore durante l'eliminazione: "+O.message)}},lt=()=>{P({name:"",brand:"",year:"",image:"",movement:""}),g(null),r.current&&(r.current.value="")},vt=async W=>{const mt=W.target.files[0];if(!mt)return;const O=Qv(Yv,`watches/${t.uid}/${mt.name}`);try{await LO(O,mt);const b=await xO(O);console.log("URL immagine:",b),P(S=>({...S,image:b})),g("Immagine caricata con successo!")}catch(b){g("Errore nel caricamento dell'immagine: "+b.message)}};return Et.jsxs("div",{className:"container",children:[Et.jsx("h1",{children:"La mia collezione di orologi"}),p&&Et.jsx("p",{className:"message",children:p}),t?Et.jsxs(Et.Fragment,{children:[Et.jsx("div",{className:"buttonForm",children:Et.jsx("button",{className:"logout-btn",onClick:J,children:"Logout"})}),Et.jsx("h2",{children:"Aggiungi un nuovo orologio"}),Et.jsxs("div",{className:"form",children:[Et.jsx("input",{type:"text",placeholder:"Nome",value:I.name,onChange:W=>P({...I,name:W.target.value})}),Et.jsx("input",{type:"text",placeholder:"Marca",value:I.brand,onChange:W=>P({...I,brand:W.target.value})}),Et.jsx("input",{type:"number",placeholder:"Anno",value:I.year,onChange:W=>P({...I,year:W.target.value})}),Et.jsx("div",{style:{marginBottom:"10px"}})," ",Et.jsx("label",{children:Et.jsx("strong",{children:"Movimento: "})}),Et.jsxs("select",{value:I.movement,onChange:W=>P({...I,movement:W.target.value}),children:[Et.jsx("option",{value:"",children:"Seleziona il movimento"}),Et.jsx("option",{value:"Automatico",children:"Automatico"}),Et.jsx("option",{value:"Carica Manuale",children:"Carica Manuale"}),Et.jsx("option",{value:"Quarzo",children:"Quarzo"})]}),Et.jsx("div",{style:{marginBottom:"10px"}})," ",Et.jsx("input",{type:"file",accept:"image/*",onChange:vt,ref:r}),I.image&&Et.jsx("img",{src:I.image,alt:"Anteprima",className:"preview-image"}),Et.jsx("div",{style:{marginBottom:"10px"}})," ",Et.jsxs("div",{className:"buttonForm",children:[Et.jsx("button",{onClick:Q,children:"Salva"}),Et.jsx("button",{onClick:lt,children:"Annulla"})]})]}),Et.jsx("div",{style:{marginBottom:"50px"}})," ",Et.jsx("h2",{children:"Lista Orologi"}),Et.jsx("div",{className:"watch-list",children:_.map(W=>Et.jsxs("div",{className:"watch-card",children:[W.image?Et.jsx("img",{src:W.image,alt:W.name,className:"watch-image",onError:mt=>mt.target.style.display="none"}):Et.jsx("p",{children:"Nessuna immagine disponibile"}),Et.jsx("h3",{children:W.name}),Et.jsxs("p",{children:[W.brand," - ",W.year," - ",W.movement]}),Et.jsx("div",{className:"delete-button",children:Et.jsx("button",{className:"delete-btn",onClick:()=>at(W.id,W.image),children:"Elimina"})})]},W.id))})]}):Et.jsxs("div",{className:"form",children:[Et.jsx("h2",{children:"Registrati o Accedi"}),Et.jsx("input",{type:"email",placeholder:"Email",value:s,onChange:W=>o(W.target.value)}),Et.jsx("input",{type:"password",placeholder:"Password",value:u,onChange:W=>f(W.target.value)}),Et.jsx("div",{className:"button-group",children:Et.jsxs("div",{className:"buttonForm",children:[Et.jsx("button",{onClick:H,children:"Registrati"}),Et.jsx("button",{onClick:X,children:"Accedi"})]})})]})]})}mS.createRoot(document.getElementById("root")).render(Et.jsx(Gi.StrictMode,{children:Et.jsx(GO,{})}));
