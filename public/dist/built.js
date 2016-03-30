/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,d,B){'use strict';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=f[h]);return q}var w=d.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(q,h){function t(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function v(x,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){u(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!C.test("."+e))throw w("badmember",e);for(var e=e.split("."),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||
{},this)}var G=new t(x,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,y,m,x){var n={},f,l,z;switch(arguments.length){case 4:z=x,l=m;case 3:case 2:if(u(y)){if(u(a)){l=a;z=y;break}l=y;z=m}else{n=a;f=y;l=m;break}case 1:u(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw w("badargs",arguments.length);}var t=this instanceof e,p=t?f:b.isArray?[]:new e(f),
A={},v=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){"params"!=a&&"isArray"!=a&&"interceptor"!=a&&(A[a]=H(b))});g&&(A.data=f);G.setUrlParams(A,s({},c(f,b.params||{}),n),b.url);n=q(A).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w("badcfg",k,b.isArray?"array":"object",d.isArray(c)?"array":"object");b.isArray?(p.length=0,r(c,function(a){"object"===typeof a?p.push(new e(a)):p.push(a)})):(D(c,p),p.$promise=
g)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(z||E)(a);return h.reject(a)});n=n.then(function(a){var b=v(a);(l||E)(b,a.headers);return b},C);return t?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+k]=function(a,b,c){u(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return v(x,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,u=d.isFunction;t.prototype={setUrlParams:function(f,g,l){var m=this,c=l||m.template,h,
e,q=m.urlParams={};r(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw w("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+b+"(\\W|$)")).test(c)&&(q[b]=!0)});c=c.replace(/\\:/g,":");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+
k+"(\\W|$)","g"),function(b,a){return e+a})):c=c.replace(new RegExp("(/?):"+k+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");f.url=c.replace(/\/\\\./,"/.");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return v}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,r,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?r.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){r.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,r){var g=r[0].body;return function(r){return f(function(){r(g.offsetWidth)})}}]).config(["$provide","$animateProvider",function(X,r){function g(f){for(var n=0;n<f.length;n++){var g=
f[n];if(1==g.nodeType)return g}}function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,ca=r.$$selectors,aa=f.isArray,da=f.isString,ga=f.isObject,w={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,I,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}
function D(a){var c,b=N.defer();b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function J(a){if(ga(a))return a.tempClasses&&da(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],k=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===
e?(b||"addClass"==c.event)&&k.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+k.length&&[f.join(" "),k.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(ca[""]));for(var d=0;d<a.length;d++){var f=a[d],l=ca[f];l&&!b[f]&&(c.push(M.get(l)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,
fn:b}),fa.push({event:a,fn:c}),!0}function l(c,k,x){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(k){(k[f]||t)();if(++m<E.length)break a;k=null}x()}};switch(c.event){case "setClass":k.push(c.fn(a,e,A,p,d));break;case "animate":k.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":k.push(c.fn(a,e||b,p,d));break;case "removeClass":k.push(c.fn(a,A||b,p,d));break;default:k.push(c.fn(a,p,d))}});k&&0===k.length&&x()}var k=a[0];if(k){d&&(d.to=d.to||{},d.from=
d.from||{});var e,A;aa(b)&&(e=b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var x="setClass"==c,E=x||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(B(p)){var G=t,m=[],fa=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&x&&(h(a,"addClass"),h(a,"removeClass"))});return{node:k,event:c,className:b,isClassBased:E,isSetClassOperation:x,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){G=a;l(fa,m,function(){G=
t;a()})},after:function(a){g=a;l(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),G(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function H(a,c,b,d,h,l,k,e){function A(e){var k="$animate:"+e;g&&g[k]&&0<g[k].length&&I(function(){b.triggerHandler(k,{event:a,className:c})})}function x(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,l())}function G(){if(!G.hasBeenRun){m&&m.applyStyles();G.hasBeenRun=!0;k&&k.tempClasses&&n(k.tempClasses,
function(a){u.removeClass(b,a)});var x=b.data("$$ngAnimateState");x&&(m&&m.isClassBased?C(b,c):(I(function(){var e=b.data("$$ngAnimateState")||{};ea==e.index&&C(b,c,a)}),b.data("$$ngAnimateState",x)));A("close");e()}}var m=U(b,a,c,k);if(!m)return p(),x(),E(),G(),t;a=m.event;c=m.className;var g=f.element._data(m.node),g=g&&g.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),x(),E(),G(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==
q.event?(s.push(q),C(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),C(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};C(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),x(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),
C(a,"ng-leave"))});u.addClass(b,"ng-animate");k&&k.tempClasses&&n(k.tempClasses,function(a){u.addClass(b,a)});var ea=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:ea,totalActive:s});x();m.before(function(e){var k=b.data("$$ngAnimateState");e=e||!k||!k.active[c]||m.isClassBased&&k.active[c].event!=a;p();!0===e?G():(E(),m.after(G))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),
n(a,function(a){a=f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function C(a,c){if(ba(a,y))w.disabled||(w.running=!1,w.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(w.disabled)return!0;if(ba(a,y))return w.running;var b,d,g;do{if(0===c.length)break;var l=ba(c,y),
k=l?w:c.data("$$ngAnimateState")||{};if(k.disabled)return!0;l&&(g=!0);!1!==b&&(l=c.data("$$ngAnimateChildren"),f.isDefined(l)&&(b=l));d=d||k.running||k.last&&!k.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",w);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){w.running=!1})}))}),K=0,V=r.classNameFilter(),B=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,
c,b,d,h){d=d||"ng-inline-animate";h=J(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return H("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=J(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return H("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=J(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return H("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,
c,b,d){d=J(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return H("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=J(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,l=a.data("$$animateClasses"),k=!!l;l||(l={classes:{}});h=l.classes;c=aa(c)?c:c.split(" ");n(c,
function(a){a&&a.length&&(h[a]=!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(k)return d&&l.options&&(l.options=f.extend(l.options||{},d)),l.promise;a.data("$$animateClasses",l={classes:h,options:d});return l.promise=D(function(e){var k,b,c,d=g(a);d&&(k=a.data("$$animateClasses"),a.removeData("$$animateClasses"),c=a.parent(),b=d.parentNode);if(!b||b.$$NG_REMOVED||d.$$NG_REMOVED)e();else{b=a.data("$$ngAnimateState")||{};var f=S(a,k,b.active);return f?H("setClass",f,a,c,null,
function(){f[0]&&O.$$addClassImmediately(a,f[0]);f[1]&&O.$$removeClassImmediately(a,f[1])},k.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)C(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:w.disabled=!a;break;default:a=!w.disabled}return!!a}}}]);r.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,w,M,Y){function y(){b||(b=Y(function(){c=[];b=null;B={}}))}
function I(a,e){b&&b();c.push(e);b=Y(function(){n(c,function(a){a()});c=[];b=null;B={}})}function P(a,e){var b=g(a);a=f.element(b);l.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(l);l=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?B[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),
d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(B[e]=b)}return b}function Q(a){var e=0;a=da(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+
"-"+g(e).getAttribute("class");var p=f+" "+c,h=B[p]?++B[p].total:0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!B[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},l=Z(e,p);f=l.transitionDuration;l=l.animationDuration;if(b&&0===f&&0===l)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<l&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||
[]});p=g(e);c&&(J(p,!0),d&&e.css(d));b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,l);u.removeClass(e,t);z&&M.cancel(z);H(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-I,0)>=B&&b>=y&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&
a){var l="",t="";n(b.split(" "),function(a,b){var e=(0<b?" ":"")+a;l+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var w=0;0<v.animationDelay&&0===v.animationDuration&&(w=v.animationDelay*q,s.push(C+"animation-play-state"));r=Math.round(100*Math.max(r,w))/100}r||(u.addClass(e,l),a.blockTransition&&J(m,!1));var F=Z(e,a.cacheKey+" "+l),y=Math.max(F.transitionDuration,F.animationDuration);if(0===
y)u.removeClass(e,l),H(e,b),c();else{!r&&d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),B=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var I=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+y)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&J(m,!1);0<F.animationDuration&&(m.style[K+
"PlayState"]="");u.addClass(e,l);u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function J(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&H(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);H(b,c);d()}function U(a,b,c,d,f){var g=
S(a,b,c,f.from);if(g){var h=g;I(b,function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function H(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var C="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(C="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):
(z="transition",$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(C="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var B={},a=0,c=[],b,d=null,h=0,l=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",
b,c)},beforeSetClass:function(a,b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return I(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return I(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return I(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",
a,q(b,"-add"),c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(r,f,s){'use strict';f.module("ngMessages",[]).directive("ngMessages",["$compile","$animate","$templateRequest",function(q,k,l){return{restrict:"AE",controller:function(){this.$renderNgMessageClasses=f.noop;var b=[];this.registerMessage=function(d,a){for(var c=0;c<b.length;c++)if(b[c].type==a.type){if(d!=c){var g=b[d];b[d]=b[c];d<b.length?b[c]=g:b.splice(0,c)}return}b.splice(d,0,a)};this.renderMessages=function(d,a){d=d||{};var c;f.forEach(b,function(b){var e;if(e=!c||a)e=d[b.type],e=null!==
e&&!1!==e&&e;e?(b.attach(),c=!0):b.detach()});this.renderElementClasses(c)}},require:"ngMessages",link:function(b,d,a,c){c.renderElementClasses=function(b){b?k.setClass(d,"ng-active","ng-inactive"):k.setClass(d,"ng-inactive","ng-active")};var g=f.isString(a.ngMessagesMultiple)||f.isString(a.multiple),e;b.$watchCollection(a.ngMessages||a["for"],function(b){e=b;c.renderMessages(b,g)});(a=a.ngMessagesInclude||a.include)&&l(a).then(function(a){var h;a=f.element("<div/>").html(a);f.forEach(a.children(),
function(a){a=f.element(a);h?h.after(a):d.prepend(a);h=a;q(a)(b)});c.renderMessages(e,g)})}}}]).directive("ngMessage",["$animate",function(f){return{require:"^ngMessages",transclude:"element",terminal:!0,restrict:"AE",link:function(k,l,b,d,a){for(var c,g,e=l[0],n=e.parentNode,h=0,p=0;h<n.childNodes.length;h++){var m=n.childNodes[h];if(8==m.nodeType&&0<=m.nodeValue.indexOf("ngMessage")){if(m===e){c=p;break}p++}}d.registerMessage(c,{type:b.ngMessage||b.when,attach:function(){g||a(k,function(a){f.enter(a,
null,l);g=a})},detach:function(a){g&&(f.leave(g),g=null)}})}}}])})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return N(new(N(function(){},{prototype:a})),b)}function e(a){return M(arguments,function(b){b!==a&&M(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return M(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return N({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return M(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return M(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=L(a),d=c?[]:{};return M(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=L(a)?[]:{};return M(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=N(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,J(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);M(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return K(a)&&a.then&&a.$$promises}if(!K(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return M(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!H(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;M(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!K(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=N({},d),u=1+q.length/3,v=!1;if(H(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),N(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return H(a.template)?this.fromString(a.template,b):H(a.templateUrl)?this.fromUrl(a.templateUrl,b):H(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return I(a)?a(b):a},this.fromUrl=function(c,d){return I(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new P.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:e=["?(",")?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),j=P.type(h||"string")||d(P.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=N({params:{}},K(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new P.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){N(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return I(a)||L(a)&&I(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){N(this,a||{})}P=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!H(a)||"string"==typeof a},pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return H(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return H(a)&&(m=a),m},this.strictMode=function(a){return H(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!H(a))return q;if(a!==!0&&a!==!1&&!J(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,N(f(),b))},this.isMatcher=function(a){if(!K(a))return!1;var b=!0;return M(r.prototype,function(c,d){I(c)&&(b=b&&H(a[d])&&I(a[d]))}),b},this.type=function(a,b,c){if(!H(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(N({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},M(x,function(a,b){u[b]=new s(N({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),M(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=K(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function j(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof s?b.type:new s(b.type):"config"===d?u.any:u.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return N(b,c,d).array}function m(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!H(c)||null==c)return q;if(c===!0||J(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=L(a.replace)?a.replace:[],J(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function r(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(d.$$fn);if(null!==a&&a!==c&&!w.type.is(a))throw new Error("Default value ("+a+") for parameter '"+w.id+"' is not an instance of Type ("+w.type.name+")");return a}function t(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),H(a)?w.type.$normalize(a):r()}function v(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=j(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=m(d,y),A=p(d,x,y,z);N(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:t,dynamic:c,config:d,toString:v})},k.prototype={$$new:function(){return d(this,N(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),M(b,function(b){M(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return M(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return M(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return H(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(J(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){o&&d.url()===o;o=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!I(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(J(a)){var b=a;a=function(){return b}}else if(!I(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=J(b);if(J(a)&&(a=d.compile(a)),!h&&!I(b)&&!L(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),N(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:J(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),N(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=J(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!J(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):J(b.parent)?b.parent:K(b.parent)&&J(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)I(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return J(a)&&!H(b)?C[a]:I(b)&&J(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return K(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return M(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(I(d.controllerProvider)||L(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,N({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=N({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!H(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!H(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,I=[];if(f.reload){if(J(f.reload)||K(f.reload)){if(K(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var L=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!L)throw new Error("No such reload state '"+(J(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==L;)G=I[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=I[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,O(y.params,n),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),p.update(),C;for(var M=e.when(G),P=D;P<z.length;P++,F=z[P])G=I[P]=d(G),M=v(F,c,F===b,M,G,f);var Q=y.transition=M.then(function(){var d,e,g;if(y.transition!==Q)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c["#"]=r),y.transition!==Q?A:(y.$current=b,y.current=b.self,y.params=c,O(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==Q?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return Q},y.is=function(a,b,d){d=N({relative:y.$current},d||{});var e=m(a,d.relative);return H(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=N({relative:y.$current},d||{}),J(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return H(e)?H(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=N({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!H(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new P.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(H(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=N({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(J(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new P.ParamSet;return M(a.params||{},function(a,c){b[c]||(b[c]=new P.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?N(a.parent.params.$$new(),a.ownParams):new P.ParamSet},views:function(a){var b={};return M(H(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?N({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=N(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a,c){var d=["location","inherit","reload","absolute"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=B(g.uiSref,a.current.name),j=null,k=C(f)||a.$current,l="[object SVGAnimatedString]"===Object.prototype.toString.call(f.prop("href"))?"xlink:href":"href",m=null,n="A"===f.prop("tagName").toUpperCase(),o="FORM"===f[0].nodeName,p=o?"action":l,q=!0,r={relative:k,inherit:!0},s=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in s&&(r[a]=s[a])});var t=function(c){if(c&&(j=b.copy(c)),q){m=a.href(i.state,j,r);var d=h[1]||h[0];return d&&d.$$addStateInfo(i.state,j),null===m?(q=!1,!1):void g.$set(p,m)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&t(a)},!0),j=b.copy(e.$eval(i.paramExpr))),t(),o||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,r)});b.preventDefault();var g=n&&!m?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function E(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(i):d.removeClass(i)}function g(){for(var a=0;a<j.length;a++)if(h(j[a].state,j[a].params))return!0;return!1}function h(b,c){return"undefined"!=typeof e.uiSrefActiveEq?a.is(b.name,c):a.includes(b.name,c)}var i,j=[];i=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,C(d));j.push({state:e||{name:b},params:c}),f()},b.$on("$stateChangeSuccess",f)}]}}function F(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function G(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var H=b.isDefined,I=b.isFunction,J=b.isString,K=b.isObject,L=b.isArray,M=b.forEach,N=b.extend,O=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var P;r.prototype.concat=function(a,b){var c={caseInsensitive:P.caseInsensitive(),strict:P.strictMode(),squash:P.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,N(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},r.prototype.parameters=function(a){return H(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=L(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else J(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;L(r)||(r=[r]),r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return L(a)?a:H(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),D.$inject=["$state","$timeout"],E.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",D).directive("uiSrefActive",E).directive("uiSrefActiveEq",E),F.$inject=["$state"],G.$inject=["$state"],b.module("ui.router.state").filter("isState",F).filter("includedByState",G)}(window,window.angular);
/**
 * angular-ui-utils - Swiss-Army-Knife of AngularJS tools (with no external dependencies!)
 * @version v0.2.3 - 2015-06-30
 * @link http://angular-ui.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
function uiUploader(a){"use strict";function b(a){for(var b=0;b<a.length;b++)i.files.push(a[b])}function c(){return i.files}function d(a){i.options=a;for(var b=0;b<i.files.length&&i.activeUploads!=i.options.concurrency;b++)i.files[b].active||h(i.files[b],i.options.url,i.options.data)}function e(a){i.files.splice(i.files.indexOf(a),1)}function f(){i.files.splice(0,i.files.length)}function g(a){var b=["n/a","bytes","KiB","MiB","GiB","TB","PB","EiB","ZiB","YiB"],c=+Math.floor(Math.log(a)/Math.log(1024));return(a/Math.pow(1024,c)).toFixed(c?1:0)+" "+b[isNaN(a)?0:c+1]}function h(a,b,c){var e,f,h,j="file";if(c=c||{},i.activeUploads+=1,a.active=!0,e=new window.XMLHttpRequest,f=new window.FormData,e.open("POST",b),e.upload.onloadstart=function(){},e.upload.onprogress=function(b){b.lengthComputable&&(a.loaded=b.loaded,a.humanSize=g(b.loaded),i.options.onProgress(a))},e.onload=function(){i.activeUploads-=1,i.uploadedFiles+=1,d(i.options),i.options.onCompleted(a,e.responseText),i.uploadedFiles===i.files.length&&(i.uploadedFiles=0,i.options.onCompletedAll(i.files))},e.onerror=function(){},c)for(h in c)c.hasOwnProperty(h)&&f.append(h,c[h]);return f.append(j,a,a.name),e.send(f),e}var i=this;return i.files=[],i.options={},i.activeUploads=0,i.uploadedFiles=0,a.info("uiUploader loaded"),{addFiles:b,getFiles:c,files:i.files,startUpload:d,removeFile:e,removeAll:f}}angular.module("ui.alias",[]).config(["$compileProvider","uiAliasConfig",function(a,b){"use strict";b=b||{},angular.forEach(b,function(b,c){angular.isString(b)&&(b={replace:!0,template:b}),a.directive(c,function(){return b})})}]),angular.module("ui.event",[]).directive("uiEvent",["$parse",function(a){"use strict";return function(b,c,d){var e=b.$eval(d.uiEvent);angular.forEach(e,function(d,e){var f=a(d);c.bind(e,function(a){var c=Array.prototype.slice.call(arguments);c=c.splice(1),f(b,{$event:a,$params:c}),b.$$phase||b.$apply()})})}}]),angular.module("ui.format",[]).filter("format",function(){"use strict";return function(a,b){var c=a;if(angular.isString(c)&&void 0!==b)if(angular.isArray(b)||angular.isObject(b)||(b=[b]),angular.isArray(b)){var d=b.length,e=function(a,c){return c=parseInt(c,10),c>=0&&d>c?b[c]:a};c=c.replace(/\$([0-9]+)/g,e)}else angular.forEach(b,function(a,b){c=c.split(":"+b).join(a)});return c}}),angular.module("ui.highlight",[]).filter("highlight",function(){"use strict";return function(a,b,c){return a&&(b||angular.isNumber(b))?(a=a.toString(),b=b.toString(),c?a.split(b).join('<span class="ui-match">'+b+"</span>"):a.replace(new RegExp(b,"gi"),'<span class="ui-match">$&</span>')):a}}),angular.module("ui.include",[]).directive("uiInclude",["$http","$templateCache","$anchorScroll","$compile",function(a,b,c,d){"use strict";return{restrict:"ECA",terminal:!0,compile:function(e,f){var g=f.uiInclude||f.src,h=f.fragment||"",i=f.onload||"",j=f.autoscroll;return function(e,f){function k(){var k=++m,o=e.$eval(g),p=e.$eval(h);o?a.get(o,{cache:b}).success(function(a){if(k===m){l&&l.$destroy(),l=e.$new();var b;b=p?angular.element("<div/>").html(a).find(p):angular.element("<div/>").html(a).contents(),f.html(b),d(b)(l),!angular.isDefined(j)||j&&!e.$eval(j)||c(),l.$emit("$includeContentLoaded"),e.$eval(i)}}).error(function(){k===m&&n()}):n()}var l,m=0,n=function(){l&&(l.$destroy(),l=null),f.html("")};e.$watch(h,k),e.$watch(g,k)}}}}]),angular.module("ui.indeterminate",[]).directive("uiIndeterminate",[function(){"use strict";return{compile:function(a,b){return b.type&&"checkbox"===b.type.toLowerCase()?function(a,b,c){a.$watch(c.uiIndeterminate,function(a){b[0].indeterminate=!!a})}:angular.noop}}}]),angular.module("ui.inflector",[]).filter("inflector",function(){"use strict";function a(a){return a=a.replace(/([A-Z])|([\-|\_])/g,function(a,b){return" "+(b||"")}),a.replace(/\s\s+/g," ").trim().toLowerCase().split(" ")}function b(a){var b=[];return angular.forEach(a,function(a){b.push(a.charAt(0).toUpperCase()+a.substr(1))}),b}var c={humanize:function(c){return b(a(c)).join(" ")},underscore:function(b){return a(b).join("_")},variable:function(c){return c=a(c),c=c[0]+b(c.slice(1)).join("")}};return function(a,b){return b!==!1&&angular.isString(a)?(b=b||"humanize",c[b](a)):a}}),angular.module("ui.jq",[]).value("uiJqConfig",{}).directive("uiJq",["uiJqConfig","$timeout",function(a,b){"use strict";return{restrict:"A",compile:function(c,d){if(!angular.isFunction(c[d.uiJq]))throw new Error('ui-jq: The "'+d.uiJq+'" function does not exist');var e=a&&a[d.uiJq];return function(a,c,d){function f(){var b=[];return d.uiOptions?(b=a.$eval("["+d.uiOptions+"]"),angular.isObject(e)&&angular.isObject(b[0])&&(b[0]=angular.extend({},e,b[0]))):e&&(b=[e]),b}function g(){b(function(){c[d.uiJq].apply(c,f())},0,!1)}d.ngModel&&c.is("select,input,textarea")&&c.bind("change",function(){c.trigger("input")}),d.uiRefresh&&a.$watch(d.uiRefresh,function(){g()}),g()}}}}]),angular.module("ui.keypress",[]).factory("keypressHelper",["$parse",function(a){"use strict";var b={8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete"},c=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};return function(d,e,f,g){var h,i=[];h=e.$eval(g["ui"+c(d)]),angular.forEach(h,function(b,c){var d,e;e=a(b),angular.forEach(c.split(" "),function(a){d={expression:e,keys:{}},angular.forEach(a.split("-"),function(a){d.keys[a]=!0}),i.push(d)})}),f.bind(d,function(a){var c=!(!a.metaKey||a.ctrlKey),f=!!a.altKey,g=!!a.ctrlKey,h=!!a.shiftKey,j=a.keyCode;"keypress"===d&&!h&&j>=97&&122>=j&&(j-=32),angular.forEach(i,function(d){var i=d.keys[b[j]]||d.keys[j.toString()],k=!!d.keys.meta,l=!!d.keys.alt,m=!!d.keys.ctrl,n=!!d.keys.shift;i&&k===c&&l===f&&m===g&&n===h&&e.$apply(function(){d.expression(e,{$event:a})})})})}}]),angular.module("ui.keypress").directive("uiKeydown",["keypressHelper",function(a){"use strict";return{link:function(b,c,d){a("keydown",b,c,d)}}}]),angular.module("ui.keypress").directive("uiKeypress",["keypressHelper",function(a){"use strict";return{link:function(b,c,d){a("keypress",b,c,d)}}}]),angular.module("ui.keypress").directive("uiKeyup",["keypressHelper",function(a){"use strict";return{link:function(b,c,d){a("keyup",b,c,d)}}}]),angular.module("ui.mask",[]).value("uiMaskConfig",{maskDefinitions:{9:/\d/,A:/[a-zA-Z]/,"*":/[a-zA-Z0-9]/},clearOnBlur:!0}).directive("uiMask",["uiMaskConfig","$parse",function(a,b){"use strict";return{priority:100,require:"ngModel",restrict:"A",compile:function(){var c=a;return function(a,d,e,f){function g(a){return angular.isDefined(a)?(t(a),O?(l(),m(),!0):k()):k()}function h(a){angular.isDefined(a)&&(E=a,O&&x())}function i(a){return O?(H=p(a||""),J=o(H),f.$setValidity("mask",J),J&&H.length?q(H):void 0):a}function j(a){return O?(H=p(a||""),J=o(H),f.$viewValue=H.length?q(H):"",f.$setValidity("mask",J),""===H&&e.required&&f.$setValidity("required",!f.$error.required),J?H:void 0):a}function k(){return O=!1,n(),angular.isDefined(Q)?d.attr("placeholder",Q):d.removeAttr("placeholder"),angular.isDefined(R)?d.attr("maxlength",R):d.removeAttr("maxlength"),d.val(f.$modelValue),f.$viewValue=f.$modelValue,!1}function l(){H=L=p(f.$viewValue||""),I=K=q(H),J=o(H);var a=J&&H.length?I:"";e.maxlength&&d.attr("maxlength",2*C[C.length-1]),d.attr("placeholder",E),d.val(a),f.$viewValue=a}function m(){P||(d.bind("blur",u),d.bind("mousedown mouseup",v),d.bind("input keyup click focus",x),P=!0)}function n(){P&&(d.unbind("blur",u),d.unbind("mousedown",v),d.unbind("mouseup",v),d.unbind("input",x),d.unbind("keyup",x),d.unbind("click",x),d.unbind("focus",x),P=!1)}function o(a){return a.length?a.length>=G:!0}function p(a){var b="",c=D.slice();return a=a.toString(),angular.forEach(F,function(b){a=a.replace(b,"")}),angular.forEach(a.split(""),function(a){c.length&&c[0].test(a)&&(b+=a,c.shift())}),b}function q(a){var b="",c=C.slice();return angular.forEach(E.split(""),function(d,e){a.length&&e===c[0]?(b+=a.charAt(0)||"_",a=a.substr(1),c.shift()):b+=d}),b}function r(a){var b=e.placeholder;return"undefined"!=typeof b&&b[a]?b[a]:"_"}function s(){return E.replace(/[_]+/g,"_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g,"$1$2_$3").split("_")}function t(a){var b=0;if(C=[],D=[],E="","string"==typeof a){G=0;var c=!1,d=0,e=a.split("");angular.forEach(e,function(a,e){S.maskDefinitions[a]?(C.push(b),E+=r(e-d),D.push(S.maskDefinitions[a]),b++,c||G++):"?"===a?(c=!0,d++):(E+=a,b++)})}C.push(C.slice().pop()+1),F=s(),O=C.length>1?!0:!1}function u(){S.clearOnBlur&&(M=0,N=0,J&&0!==H.length||(I="",d.val(""),a.$apply(function(){f.$setViewValue("")})))}function v(a){"mousedown"===a.type?d.bind("mouseout",w):d.unbind("mouseout",w)}function w(){N=B(this),d.unbind("mouseout",w)}function x(b){b=b||{};var c=b.which,e=b.type;if(16!==c&&91!==c){var g,h=d.val(),i=K,j=p(h),k=L,l=!1,m=z(this)||0,n=M||0,o=m-n,r=C[0],s=C[j.length]||C.slice().shift(),t=N||0,u=B(this)>0,v=t>0,w=h.length>i.length||t&&h.length>i.length-t,x=h.length<i.length||t&&h.length===i.length-t,D=c>=37&&40>=c&&b.shiftKey,E=37===c,F=8===c||"keyup"!==e&&x&&-1===o,G=46===c||"keyup"!==e&&x&&0===o&&!v,H=(E||F||"click"===e)&&m>r;if(N=B(this),!D&&(!u||"click"!==e&&"keyup"!==e)){if("input"===e&&x&&!v&&j===k){for(;F&&m>r&&!y(m);)m--;for(;G&&s>m&&-1===C.indexOf(m);)m++;var I=C.indexOf(m);j=j.substring(0,I)+j.substring(I+1),l=!0}for(g=q(j),K=g,L=j,d.val(g),l&&a.$apply(function(){f.$setViewValue(j)}),w&&r>=m&&(m=r+1),H&&m--,m=m>s?s:r>m?r:m;!y(m)&&m>r&&s>m;)m+=H?-1:1;(H&&s>m||w&&!y(n))&&m++,M=m,A(this,m)}}}function y(a){return C.indexOf(a)>-1}function z(a){if(!a)return 0;if(void 0!==a.selectionStart)return a.selectionStart;if(document.selection&&d.is(":focus")){a.focus();var b=document.selection.createRange();return b.moveStart("character",a.value?-a.value.length:0),b.text.length}return 0}function A(a,b){if(!a)return 0;if(0!==a.offsetWidth&&0!==a.offsetHeight)if(a.setSelectionRange)d.is(":focus")&&(a.focus(),a.setSelectionRange(b,b));else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",b),c.select()}}function B(a){return a?void 0!==a.selectionStart?a.selectionEnd-a.selectionStart:document.selection?document.selection.createRange().text.length:0:0}var C,D,E,F,G,H,I,J,K,L,M,N,O=!1,P=!1,Q=e.placeholder,R=e.maxlength,S={};e.uiOptions?(S=a.$eval("["+e.uiOptions+"]"),angular.isObject(S[0])&&(S=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(void 0===b[c]?b[c]=angular.copy(a[c]):angular.extend(b[c],a[c]));return b}(c,S[0]))):S=c,e.$observe("uiMask",g),e.$observe("placeholder",h);var T=!1;e.$observe("modelViewValue",function(a){"true"===a&&(T=!0)}),a.$watch(e.ngModel,function(c){if(T&&c){var d=b(e.ngModel);d.assign(a,f.$viewValue)}}),f.$formatters.push(i),f.$parsers.push(j),d.bind("mousedown mouseup",v),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!==d?d=0:0!==d&&d!==1/0&&d!==-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1})}}}}]),angular.module("ui.reset",[]).value("uiResetConfig",null).directive("uiReset",["uiResetConfig",function(a){"use strict";var b=null;return void 0!==a&&(b=a),{require:"ngModel",link:function(a,c,d,e){var f;f=angular.element('<a class="ui-reset" />'),c.wrap('<span class="ui-resetwrap" />').after(f),f.bind("click",function(c){c.preventDefault(),a.$apply(function(){d.uiReset?e.$setViewValue(a.$eval(d.uiReset)):e.$setViewValue(b),e.$render()})})}}}]),angular.module("ui.route",[]).directive("uiRoute",["$location","$parse",function(a,b){"use strict";return{restrict:"AC",scope:!0,compile:function(c,d){var e;if(d.uiRoute)e="uiRoute";else if(d.ngHref)e="ngHref";else{if(!d.href)throw new Error("uiRoute missing a route or href property on "+c[0]);e="href"}return function(c,d,f){function g(b){var d=b.indexOf("#");d>-1&&(b=b.substr(d+1)),(j=function(){i(c,a.path().indexOf(b)>-1)})()}function h(b){var d=b.indexOf("#");d>-1&&(b=b.substr(d+1)),(j=function(){var d=new RegExp("^"+b+"$",["i"]);i(c,d.test(a.path()))})()}var i=b(f.ngModel||f.routeModel||"$uiRoute").assign,j=angular.noop;switch(e){case"uiRoute":f.uiRoute?h(f.uiRoute):f.$observe("uiRoute",h);break;case"ngHref":f.ngHref?g(f.ngHref):f.$observe("ngHref",g);break;case"href":g(f.href)}c.$on("$routeChangeSuccess",function(){j()}),c.$on("$stateChangeSuccess",function(){j()})}}}}]),angular.module("ui.scroll.jqlite",["ui.scroll"]).service("jqLiteExtras",["$log","$window",function(a,b){"use strict";return{registerFor:function(a){var c,d,e,f,g,h,i;return d=angular.element.prototype.css,a.prototype.css=function(a,b){var c,e;return e=this,c=e[0],c&&3!==c.nodeType&&8!==c.nodeType&&c.style?d.call(e,a,b):void 0},h=function(a){return a&&a.document&&a.location&&a.alert&&a.setInterval},i=function(a,b,c){var d,e,f,g,i;return d=a[0],i={top:["scrollTop","pageYOffset","scrollLeft"],left:["scrollLeft","pageXOffset","scrollTop"]}[b],e=i[0],g=i[1],f=i[2],h(d)?angular.isDefined(c)?d.scrollTo(a[f].call(a),c):g in d?d[g]:d.document.documentElement[e]:angular.isDefined(c)?d[e]=c:d[e]},b.getComputedStyle?(f=function(a){return b.getComputedStyle(a,null)},c=function(a,b){return parseFloat(b)}):(f=function(a){return a.currentStyle},c=function(a,b){var c,d,e,f,g,h,i;return c=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,f=new RegExp("^("+c+")(?!px)[a-z%]+$","i"),f.test(b)?(i=a.style,d=i.left,g=a.runtimeStyle,h=g&&g.left,g&&(g.left=i.left),i.left=b,e=i.pixelLeft,i.left=d,h&&(g.left=h),e):parseFloat(b)}),e=function(a,b){var d,e,g,i,j,k,l,m,n,o,p,q,r;return h(a)?(d=document.documentElement[{height:"clientHeight",width:"clientWidth"}[b]],{base:d,padding:0,border:0,margin:0}):(r={width:[a.offsetWidth,"Left","Right"],height:[a.offsetHeight,"Top","Bottom"]}[b],d=r[0],l=r[1],m=r[2],k=f(a),p=c(a,k["padding"+l])||0,q=c(a,k["padding"+m])||0,e=c(a,k["border"+l+"Width"])||0,g=c(a,k["border"+m+"Width"])||0,i=k["margin"+l],j=k["margin"+m],n=c(a,i)||0,o=c(a,j)||0,{base:d,padding:p+q,border:e+g,margin:n+o})},g=function(a,b,c){var d,g,h;return g=e(a,b),g.base>0?{base:g.base-g.padding-g.border,outer:g.base,outerfull:g.base+g.margin}[c]:(d=f(a),h=d[b],(0>h||null===h)&&(h=a.style[b]||0),h=parseFloat(h)||0,{base:h-g.padding-g.border,outer:h,outerfull:h+g.padding+g.border+g.margin}[c])},angular.forEach({before:function(a){var b,c,d,e,f,g,h;if(f=this,c=f[0],e=f.parent(),b=e.contents(),b[0]===c)return e.prepend(a);for(d=g=1,h=b.length-1;h>=1?h>=g:g>=h;d=h>=1?++g:--g)if(b[d]===c)return void angular.element(b[d-1]).after(a);throw new Error("invalid DOM structure "+c.outerHTML)},height:function(a){var b;return b=this,angular.isDefined(a)?(angular.isNumber(a)&&(a+="px"),d.call(b,"height",a)):g(this[0],"height","base")},outerHeight:function(a){return g(this[0],"height",a?"outerfull":"outer")},offset:function(a){var b,c,d,e,f,g;if(f=this,arguments.length){if(void 0===a)return f;throw new Error("offset setter method is not implemented")}return b={top:0,left:0},e=f[0],(c=e&&e.ownerDocument)?(d=c.documentElement,null!=e.getBoundingClientRect&&(b=e.getBoundingClientRect()),g=c.defaultView||c.parentWindow,{top:b.top+(g.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+(g.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}):void 0},scrollTop:function(a){return i(this,"top",a)},scrollLeft:function(a){return i(this,"left",a)}},function(b,c){return a.prototype[c]?void 0:a.prototype[c]=b})}}}]).run(["$log","$window","jqLiteExtras",function(a,b,c){"use strict";return b.jQuery?void 0:c.registerFor(angular.element)}]),angular.module("ui.scroll",[]).directive("uiScrollViewport",["$log",function(){"use strict";return{controller:["$scope","$element",function(a,b){return this.viewport=b,this}]}}]).directive("uiScroll",["$log","$injector","$rootScope","$timeout",function(a,b,c,d){"use strict";return{require:["?^uiScrollViewport"],transclude:"element",priority:1e3,terminal:!0,compile:function(e,f,g){return function(e,f,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da;if(O=a.debug||a.log,P=h.uiScroll.match(/^\s*(\w+)\s+in\s+([\w\.]+)\s*$/),!P)throw new Error("Expected uiScroll in form of '_item_ in _datasource_' but got '"+h.uiScroll+"'");if(M=P[1],x=P[2],I=function(a,b){var c;if(a)return c=b.match(/^([\w]+)\.(.+)$/),c&&3===c.length?I(a[c[1]],c[2]):a[b]},X=function(a,b,c,d){var e;if(a&&b&&((e=b.match(/^([\w]+)\.(.+)$/))||-1===b.indexOf(".")))return e&&3===e.length?(angular.isObject(a[e[1]])||d||(a[e[1]]={}),X(a[e[1]],e[2],c,d)):angular.isObject(a[b])||d?a[b]=c:a[b]=c},w=I(e,x),L=function(){return angular.isObject(w)&&"function"==typeof w.get},!L()&&(w=b.get(x),!L()))throw new Error(x+" is not a valid datasource");return s=Math.max(3,+h.bufferSize||10),r=function(){return ba.outerHeight()*Math.max(.1,+h.padding||.1)},W=function(a){var b;return null!=(b=a[0].scrollHeight)?b:a[0].document.documentElement.scrollHeight},t=null,g(e.$new(),function(a){var b,c,d,g,h,j;if(g=a[0].localName,"dl"===g)throw new Error("ui-scroll directive does not support <"+a[0].localName+"> as a repeating tag: "+a[0].outerHTML);return"li"!==g&&"tr"!==g&&(g="div"),j=i[0]&&i[0].viewport?i[0].viewport:angular.element(window),j.css({"overflow-y":"auto",display:"block"}),d=function(a){var b,c,d;switch(a){case"tr":return d=angular.element("<table><tr><td><div></div></td></tr></table>"),b=d.find("div"),c=d.find("tr"),c.paddingHeight=function(){return b.height.apply(b,arguments)},c;default:return c=angular.element("<"+a+"></"+a+">"),c.paddingHeight=c.height,c}},c=function(a,b,c){return b[{top:"before",bottom:"after"}[c]](a),{paddingHeight:function(){return a.paddingHeight.apply(a,arguments)},insert:function(b){return a[{top:"after",bottom:"before"}[c]](b)}}},h=c(d(g),f,"top"),b=c(d(g),f,"bottom"),e.$on("$destroy",function(){return a.remove()}),t={viewport:j,topPadding:h.paddingHeight,bottomPadding:b.paddingHeight,append:b.insert,prepend:h.insert,bottomDataPos:function(){return W(j)-b.paddingHeight()},topDataPos:function(){return h.paddingHeight()}}}),ba=t.viewport,ca=ba.scope()||c,_=function(a){return j.topVisible=a.scope[M],j.topVisibleElement=a.element,j.topVisibleScope=a.scope,h.topVisible&&X(ca,h.topVisible,j.topVisible),h.topVisibleElement&&X(ca,h.topVisibleElement,j.topVisibleElement),h.topVisibleScope&&X(ca,h.topVisibleScope,j.topVisibleScope),"function"==typeof w.topVisible?w.topVisible(a):void 0},N=function(a){return j.isLoading=a,h.isLoading&&X(e,h.isLoading,a),"function"==typeof w.loading?w.loading(a):void 0},V=0,H=1,Q=1,q=[],R=[],D=!1,o=!1,T=function(a,b){var c,d,e,f;for(c=d=e=a,f=b;f>=e?f>d:d>f;c=f>=e?++d:--d)q[c].scope.$destroy(),q[c].element.remove();return q.splice(a,b-a)},S=function(){return V++,H=1,Q=1,T(0,q.length),t.topPadding(0),t.bottomPadding(0),R=[],D=!1,o=!1,l(V)},p=function(){return ba.scrollTop()+ba.outerHeight()},aa=function(){return ba.scrollTop()},Y=function(){return!D&&t.bottomDataPos()<p()+r()},u=function(){var a,b,c,d,e,f,g,h,i,j;for(a=0,h=0,b=f=i=q.length-1;0>=i?0>=f:f>=0;b=0>=i?++f:--f)if(c=q[b],e=c.element.offset().top,g=j!==e,j=e,g&&(d=c.element.outerHeight(!0)),t.bottomDataPos()-a-d>p()+r())g&&(a+=d),h++,D=!1;else{if(g)break;h++}return h>0?(t.bottomPadding(t.bottomPadding()+a),T(q.length-h,q.length),Q-=h):void 0},Z=function(){return!o&&t.topDataPos()>aa()-r()},v=function(){var a,b,c,d,e,f,g,h,i;for(i=0,g=0,d=0,e=q.length;e>d;d++)if(a=q[d],c=a.element.offset().top,f=h!==c,h=c,f&&(b=a.element.outerHeight(!0)),t.topDataPos()+i+b<aa()-r())f&&(i+=b),g++,o=!1;else{if(f)break;g++}return g>0?(t.topPadding(t.topPadding()+i),T(0,g),H+=g):void 0},C=function(a,b){return j.isLoading||N(!0),1===R.push(b)?F(a):void 0},J=function(a){return a.displayTemp=a.css("display"),a.css("display","none")},$=function(a){return a.hasOwnProperty("displayTemp")?a.css("display",a.displayTemp):void 0},K=function(a,b){var c,d,f;return c=e.$new(),c[M]=b,d=a>H,c.$index=a,d&&c.$index--,f={scope:c},g(c,function(b){return f.element=b,d?a===Q?(J(b),t.append(b),q.push(f)):(q[a-H].element.after(b),q.splice(a-H+1,0,f)):(J(b),t.prepend(b),q.unshift(f))}),{appended:d,wrapper:f}},m=function(a,b){var c;return a?t.bottomPadding(Math.max(0,t.bottomPadding()-b.element.outerHeight(!0))):(c=t.topPadding()-b.element.outerHeight(!0),c>=0?t.topPadding(c):ba.scrollTop(ba.scrollTop()+b.element.outerHeight(!0)))},y=function(a,b){var c,d,e,f,g,h,i,j,k;if(Y()?C(a,!0):Z()&&C(a,!1),b&&b(a),0===R.length){for(k=0,i=[],f=0,g=q.length;g>f;f++){if(c=q[f],e=c.element.offset().top,h=j!==e,j=e,h&&(d=c.element.outerHeight(!0)),!(h&&t.topDataPos()+k+d<aa())){h&&_(c);break}i.push(k+=d)}return i}},l=function(a,b,c){return b&&b.length?d(function(){var d,e,f,g,h,i,j,k,l;for(l=[],f=0,h=b.length;h>f;f++)j=b[f],d=j.wrapper.element,$(d),e=d.offset().top,k!==e&&(l.push(j),k=e);for(g=0,i=l.length;i>g;g++)j=l[g],m(j.appended,j.wrapper);return y(a,c)}):y(a,c)},G=function(a,b){return l(a,b,function(){return R.shift(),0===R.length?N(!1):F(a)})},F=function(a){var b;return b=R[0],b?q.length&&!Y()?G(a):w.get(Q,s,function(b){var c,d,f,g;if(!(a&&a!==V||e.$$destroyed)){if(g=[],b.length<s&&(D=!0,t.bottomPadding(0)),b.length>0)for(v(),d=0,f=b.length;f>d;d++)c=b[d],g.push(K(++Q,c));return G(a,g)}}):q.length&&!Z()?G(a):w.get(H-s,s,function(b){var c,d,f,g;if(!(a&&a!==V||e.$$destroyed)){if(f=[],b.length<s&&(o=!0,t.topPadding(0)),b.length>0)for(q.length&&u(),c=d=g=b.length-1;0>=g?0>=d:d>=0;c=0>=g?++d:--d)f.unshift(K(--H,b[c]));return G(a,f)}})},U=function(){return c.$$phase||j.isLoading?void 0:(l(),e.$apply())},da=function(a){var b,c;return b=ba[0].scrollTop,c=ba[0].scrollHeight-ba[0].clientHeight,0===b&&!o||b===c&&!D?a.preventDefault():void 0},ba.bind("resize",U),ba.bind("scroll",U),ba.bind("mousewheel",da),e.$watch(w.revision,S),E=w.scope?w.scope.$new():e.$new(),e.$on("$destroy",function(){var a,b,c;for(b=0,c=q.length;c>b;b++)a=q[b],a.scope.$destroy(),a.element.remove();return ba.unbind("resize",U),ba.unbind("scroll",U),ba.unbind("mousewheel",da)}),j={},j.isLoading=!1,n=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(d=[],angular.isArray(b))if(b.length){if(1===b.length&&b[0]===a.scope[M])return d;for(l=a.scope.$index,n=l>H?l-H:1,c=f=0,i=b.length;i>f;c=++f)m=b[c],d.push(K(l+c,m));for(T(n,n+1),c=g=0,j=q.length;j>g;c=++g)e=q[c],e.scope.$index=H+c}else for(T(a.scope.$index-H,a.scope.$index-H+1),Q--,c=h=0,k=q.length;k>h;c=++h)e=q[c],e.scope.$index=H+c;return d},j.applyUpdates=function(a,b){var c,d,e,f,g,h;if(c=[],V++,angular.isFunction(a))for(f=q.slice(0),d=0,e=f.length;e>d;d++)h=f[d],c=c.concat(c,n(h,a(h.scope[M],h.scope,h.element)));else{if(a%1!==0)throw new Error("applyUpdates - "+a+" is not a valid index or outside of range");0<=(g=a-H)&&g<q.length&&(c=n(q[a-H],b))}return l(V,c)},h.adapter&&(k=I(e,h.adapter),k||(X(e,h.adapter,{}),k=I(e,h.adapter)),angular.extend(k,j),j=k),B=function(a,b){var c,d,e,f,g;if(angular.isFunction(a))for(c=function(b){return a(b.scope)},d=0,e=q.length;e>d;d++)g=q[d],c(g);else 0<=(f=a-H-1)&&f<q.length&&(q[a-H-1].scope[M]=b);return null},z=function(a){var b,c,d,e,f,g,h,i,j,k,m,n;if(angular.isFunction(a)){for(m=[],e=0,h=q.length;h>e;e++)d=q[e],m.unshift(d);for(b=function(b){return a(b.scope)?(T(m.length-1-c,m.length-c),Q--):void 0},c=f=0,i=m.length;i>f;c=++f)n=m[c],b(n)}else 0<=(k=a-H-1)&&k<q.length&&(T(a-H-1,a-H),Q--);for(c=g=0,j=q.length;j>g;c=++g)d=q[c],d.scope.$index=H+c;return l()},A=function(a,b){var c,d,e,f,g;if(d=[],angular.isFunction(a))throw new Error("not implemented - Insert with locator function");for(0<=(g=a-H-1)&&g<q.length&&(d.push(K(a,b)),Q++),c=e=0,f=q.length;f>e;c=++e)b=q[c],b.scope.$index=H+c;return l(null,d)},E.$on("insert.item",function(a,b,c){return A(b,c)}),E.$on("update.items",function(a,b,c){return B(b,c)}),E.$on("delete.items",function(a,b){return z(b)})}}}}]),angular.module("ui.scrollfix",[]).directive("uiScrollfix",["$window",function(a){"use strict";function b(){if(angular.isDefined(a.pageYOffset))return a.pageYOffset;var b=document.compatMode&&"BackCompat"!==document.compatMode?document.documentElement:document.body;return b.scrollTop}return{require:"^?uiScrollfixTarget",link:function(c,d,e,f){function g(){var a=i?e.uiScrollfix:d[0].offsetTop+j,c=f?k[0].scrollTop:b();!d.hasClass("ui-scrollfix")&&c>a?(d.addClass("ui-scrollfix"),h=a):d.hasClass("ui-scrollfix")&&h>c&&d.removeClass("ui-scrollfix")}var h,i=!0,j=0,k=f&&f.$element||angular.element(a);e.uiScrollfix?"string"==typeof e.uiScrollfix&&("-"===e.uiScrollfix.charAt(0)?(i=!1,j=-parseFloat(e.uiScrollfix.substr(1))):"+"===e.uiScrollfix.charAt(0)&&(i=!1,j=parseFloat(e.uiScrollfix.substr(1)))):i=!1,h=i?e.uiScrollfix:d[0].offsetTop+j,k.on("scroll",g),c.$on("$destroy",function(){k.off("scroll",g)})}}}]).directive("uiScrollfixTarget",[function(){"use strict";return{controller:["$element",function(a){this.$element=a}]}}]),angular.module("ui.showhide",[]).directive("uiShow",[function(){"use strict";return function(a,b,c){a.$watch(c.uiShow,function(a){a?b.addClass("ui-show"):b.removeClass("ui-show")})}}]).directive("uiHide",[function(){"use strict";return function(a,b,c){a.$watch(c.uiHide,function(a){a?b.addClass("ui-hide"):b.removeClass("ui-hide")})}}]).directive("uiToggle",[function(){"use strict";return function(a,b,c){a.$watch(c.uiToggle,function(a){a?b.removeClass("ui-hide").addClass("ui-show"):b.removeClass("ui-show").addClass("ui-hide")})}}]),angular.module("ui.unique",[]).filter("unique",["$parse",function(a){"use strict";return function(b,c){if(c===!1)return b;if((c||angular.isUndefined(c))&&angular.isArray(b)){var d=[],e=angular.isString(c)?a(c):function(a){return a},f=function(a){return angular.isObject(a)?e(a):a};angular.forEach(b,function(a){for(var b=!1,c=0;c<d.length;c++)if(angular.equals(f(d[c]),f(a))){b=!0;break}b||d.push(a)}),b=d}return b}}]),angular.module("ui.uploader",[]).service("uiUploader",uiUploader),uiUploader.$inject=["$log"],angular.module("ui.validate",[]).directive("uiValidate",function(){"use strict";return{restrict:"A",require:"ngModel",link:function(a,b,c,d){function e(b){return angular.isString(b)?void a.$watch(b,function(){angular.forEach(g,function(a){a(d.$modelValue)})}):angular.isArray(b)?void angular.forEach(b,function(b){a.$watch(b,function(){angular.forEach(g,function(a){a(d.$modelValue)})})}):void(angular.isObject(b)&&angular.forEach(b,function(b,c){angular.isString(b)&&a.$watch(b,function(){g[c](d.$modelValue)}),angular.isArray(b)&&angular.forEach(b,function(b){a.$watch(b,function(){g[c](d.$modelValue)})})}))}var f,g={},h=a.$eval(c.uiValidate);h&&(angular.isString(h)&&(h={validator:h}),angular.forEach(h,function(b,c){f=function(e){var f=a.$eval(b,{$value:e});return angular.isObject(f)&&angular.isFunction(f.then)?(angular.isUndefined(d.$pending)&&(d.$pending={}),d.$pending[c]=!0,f.then(function(){d.$setValidity(c,!0)},function(){d.$setValidity(c,!1)}),e):f?(d.$setValidity(c,!0),e):(d.$setValidity(c,!1),e)},g[c]=f,d.$formatters.push(f),d.$parsers.push(f)}),c.uiValidateWatch&&e(a.$eval(c.uiValidateWatch)))}}}),angular.module("ui.utils",["ui.event","ui.format","ui.highlight","ui.include","ui.indeterminate","ui.inflector","ui.jq","ui.keypress","ui.mask","ui.reset","ui.route","ui.scrollfix","ui.scroll","ui.scroll.jqlite","ui.showhide","ui.unique","ui.validate"]);
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.14.3 - 2015-10-23
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$injector",function(a,b){var c=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,d,e){function f(){d.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),c?c(d,{addClass:"in",easing:"ease",to:{height:d[0].scrollHeight+"px"}}).start()["finally"](g):a.addClass(d,"in",{to:{height:d[0].scrollHeight+"px"}}).then(g)}function g(){d.removeClass("collapsing").addClass("collapse").css({height:"auto"})}function h(){return d.hasClass("collapse")||d.hasClass("in")?(d.css({height:d[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(c?c(d,{removeClass:"in",to:{height:"0"}}).start()["finally"](i):a.removeClass(d,"in",{to:{height:"0"}}).then(i))):i()}function i(){d.css({height:"0"}),d.removeClass("collapsing").addClass("collapse")}b.$watch(e.uibCollapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.collapse").value("$collapseSuppressWarning",!1).directive("collapse",["$animate","$injector","$log","$collapseSuppressWarning",function(a,b,c,d){var e=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,f,g){function h(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start().done(i):a.animate(f,{},{height:f[0].scrollHeight+"px"}).then(i)}function i(){f.removeClass("collapsing").addClass("collapse in").css({height:"auto"})}function j(){return f.hasClass("collapse")||f.hasClass("in")?(f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse in").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(e?e(f,{to:{height:"0"}}).start().done(k):a.animate(f,{},{height:"0"}).then(k))):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse")}d||c.warn("collapse is now deprecated. Use uib-collapse instead."),b.$watch(g.collapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass,a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)}}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){return{require:["?^uibAccordionGroup","?^accordionGroup"],link:function(a,b,c,d){d=d[0]?d[0]:d[1],a.$watch(function(){return d[c.uibAccordionTransclude]},function(a){a&&(b.find("span").html(""),b.find("span").append(a))})}}}),angular.module("ui.bootstrap.accordion").value("$accordionSuppressWarning",!1).controller("AccordionController",["$scope","$attrs","$controller","$log","$accordionSuppressWarning",function(a,b,c,d,e){e||d.warn("AccordionController is now deprecated. Use UibAccordionController instead."),angular.extend(this,c("UibAccordionController",{$scope:a,$attrs:b}))}]).directive("accordion",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",controller:"AccordionController",controllerAs:"accordion",transclude:!0,replace:!1,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"},link:function(){b||a.warn("accordion is now deprecated. Use uib-accordion instead.")}}}]).directive("accordionGroup",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(c,d,e,f){b||a.warn("accordion-group is now deprecated. Use uib-accordion-group instead."),f.addGroup(c),c.openClass=e.openClass||"panel-open",c.panelClass=e.panelClass,c.$watch("isOpen",function(a){d.toggleClass(c.openClass,!!a),a&&f.closeOthers(c)}),c.toggleOpen=function(a){c.isDisabled||a&&32!==a.which||(c.isOpen=!c.isOpen)}}}}]).directive("accordionHeading",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(c,d,e,f,g){b||a.warn("accordion-heading is now deprecated. Use uib-accordion-heading instead."),f.setHeading(g(c,angular.noop))}}}]).directive("accordionTransclude",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordionGroup",link:function(c,d,e,f){b||a.warn("accordion-transclude is now deprecated. Use uib-accordion-transclude instead."),c.$watch(function(){return f[e.accordionTransclude]},function(a){a&&(d.find("span").html(""),d.find("span").append(a))})}}}]),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$interpolate","$timeout",function(a,b,c,d){a.closeable=!!b.close;var e=angular.isDefined(b.dismissOnTimeout)?c(b.dismissOnTimeout)(a.$parent):null;e&&d(function(){a.close()},parseInt(e,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.alert").value("$alertSuppressWarning",!1).controller("AlertController",["$scope","$attrs","$controller","$log","$alertSuppressWarning",function(a,b,c,d,e){e||d.warn("AlertController is now deprecated. Use UibAlertController instead."),angular.extend(this,c("UibAlertController",{$scope:a,$attrs:b}))}]).directive("alert",["$log","$alertSuppressWarning",function(a,b){return{controller:"AlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"},link:function(){b||a.warn("alert is now deprecated. Use uib-alert instead.")}}}]),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",function(){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(a,b,c,d){var e=d[0],f=d[1];b.find("input").css({display:"none"}),f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.uibBtnRadio)))},b.on(e.toggleEvent,function(){if(!c.disabled){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.uibBtnRadio)),f.$render()})}})}}}).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.buttons").value("$buttonsSuppressWarning",!1).controller("ButtonsController",["$controller","$log","$buttonsSuppressWarning",function(a,b,c){c||b.warn("ButtonsController is now deprecated. Use UibButtonsController instead."),angular.extend(this,a("UibButtonsController"))}]).directive("btnRadio",["$log","$buttonsSuppressWarning",function(a,b){return{require:["btnRadio","ngModel"],controller:"ButtonsController",controllerAs:"buttons",link:function(c,d,e,f){b||a.warn("btn-radio is now deprecated. Use uib-btn-radio instead.");var g=f[0],h=f[1];d.find("input").css({display:"none"}),h.$render=function(){d.toggleClass(g.activeClass,angular.equals(h.$modelValue,c.$eval(e.btnRadio)))},d.bind(g.toggleEvent,function(){if(!e.disabled){var a=d.hasClass(g.activeClass);(!a||angular.isDefined(e.uncheckable))&&c.$apply(function(){h.$setViewValue(a?null:c.$eval(e.btnRadio)),h.$render()})}})}}}]).directive("btnCheckbox",["$document","$log","$buttonsSuppressWarning",function(a,b,c){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",controllerAs:"button",link:function(d,e,f,g){function h(){return j(f.btnCheckboxTrue,!0)}function i(){return j(f.btnCheckboxFalse,!1)}function j(a,b){var c=d.$eval(a);return angular.isDefined(c)?c:b}c||b.warn("btn-checkbox is now deprecated. Use uib-btn-checkbox instead.");var k=g[0],l=g[1];e.find("input").css({display:"none"}),l.$render=function(){e.toggleClass(k.activeClass,angular.equals(l.$modelValue,h()))},e.bind(k.toggleEvent,function(){f.disabled||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})}),e.on("keypress",function(b){f.disabled||32!==b.which||a[0].activeElement!==e[0]||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})})}}}]),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$animate",function(a,b,c,d){function e(b,c,e){s||(angular.extend(b,{direction:e,active:!0}),angular.extend(m.currentSlide||{},{direction:e,active:!1}),d.enabled()&&!a.noTransition&&!a.$currentTransition&&b.$element&&m.slides.length>1&&(b.$element.data(q,b.direction),m.currentSlide&&m.currentSlide.$element&&m.currentSlide.$element.data(q,b.direction),a.$currentTransition=!0,o?d.on("addClass",b.$element,function(b,c){"close"===c&&(a.$currentTransition=null,d.off("addClass",b))}):b.$element.one("$animate:close",function(){a.$currentTransition=null})),m.currentSlide=b,r=c,g())}function f(a){if(angular.isUndefined(n[a].index))return n[a];var b;n.length;for(b=0;b<n.length;++b)if(n[b].index==a)return n[b]}function g(){h();var b=+a.interval;!isNaN(b)&&b>0&&(k=c(i,b))}function h(){k&&(c.cancel(k),k=null)}function i(){var b=+a.interval;l&&!isNaN(b)&&b>0&&n.length?a.next():a.pause()}function j(b){b.length||(a.$currentTransition=null)}var k,l,m=this,n=m.slides=a.slides=[],o=angular.version.minor>=4,p="uib-noTransition",q="uib-slideDirection",r=-1;m.currentSlide=null;var s=!1;m.select=a.select=function(b,c){var d=a.indexOfSlide(b);void 0===c&&(c=d>m.getCurrentIndex()?"next":"prev"),b&&b!==m.currentSlide&&!a.$currentTransition&&e(b,d,c)},a.$on("$destroy",function(){s=!0}),m.getCurrentIndex=function(){return m.currentSlide&&angular.isDefined(m.currentSlide.index)?+m.currentSlide.index:r},a.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:n.indexOf(a)},a.next=function(){var b=(m.getCurrentIndex()+1)%n.length;return 0===b&&a.noWrap()?void a.pause():m.select(f(b),"next")},a.prev=function(){var b=m.getCurrentIndex()-1<0?n.length-1:m.getCurrentIndex()-1;return a.noWrap()&&b===n.length-1?void a.pause():m.select(f(b),"prev")},a.isActive=function(a){return m.currentSlide===a},a.$watch("interval",g),a.$watchCollection("slides",j),a.$on("$destroy",h),a.play=function(){l||(l=!0,g())},a.pause=function(){a.noPause||(l=!1,h())},m.addSlide=function(b,c){b.$element=c,n.push(b),1===n.length||b.active?(m.select(n[n.length-1]),1===n.length&&a.play()):b.active=!1},m.removeSlide=function(a){angular.isDefined(a.index)&&n.sort(function(a,b){return+a.index>+b.index});var b=n.indexOf(a);n.splice(b,1),n.length>0&&a.active?b>=n.length?m.select(n[b-1]):m.select(n[b]):r>b&&r--,0===n.length&&(m.currentSlide=null)},a.$watch("noTransition",function(a){b.data(p,a)})}]).directive("uibCarousel",[function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}]).directive("uibSlide",function(){return{require:"^uibCarousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}).animation(".item",["$injector","$animate",function(a,b){function c(a,b,c){a.removeClass(b),c&&c()}var d="uib-noTransition",e="uib-slideDirection",f=null;return a.has("$animateCss")&&(f=a.get("$animateCss")),{beforeAddClass:function(a,g,h){if("active"==g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k+" "+j,h);return a.addClass(j),f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()},beforeRemoveClass:function(a,g,h){if("active"===g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k,h);return f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()}}}]),angular.module("ui.bootstrap.carousel").value("$carouselSuppressWarning",!1).controller("CarouselController",["$scope","$element","$controller","$log","$carouselSuppressWarning",function(a,b,c,d,e){e||d.warn("CarouselController is now deprecated. Use UibCarouselController instead."),angular.extend(this,c("UibCarouselController",{$scope:a,$element:b}))}]).directive("carousel",["$log","$carouselSuppressWarning",function(a,b){return{transclude:!0,replace:!0,controller:"CarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"},link:function(){b||a.warn("carousel is now deprecated. Use uib-carousel instead.")}}}]).directive("slide",["$log","$carouselSuppressWarning",function(a,b){return{require:"^carousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(c,d,e,f){b||a.warn("slide is now deprecated. Use uib-slide instead."),f.addSlide(c,d),c.$on("$destroy",function(){f.removeSlide(c)}),c.$watch("active",function(a){a&&f.select(c)})}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","orderByFilter",function(a,b,c){function d(a){var b=[],d=a.split("");return angular.forEach(g,function(c,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+c.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),b.push({index:f,apply:c.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:c(b,"index")}}function e(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var f,g,h=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){f=b.id,this.parsers={},g={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)}},MMM:{regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:b.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:b.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a}},hh:{regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a}},H:{regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a}},h:{regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a}},mm:{regex:"[0-5][0-9]",apply:function(a){this.minutes=+a}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a}},sss:{regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a}},ss:{regex:"[0-5][0-9]",apply:function(a){this.seconds=+a}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a}},a:{regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)}}}},this.init(),this.parse=function(c,g,i){if(!angular.isString(c)||!g)return c;g=b.DATETIME_FORMATS[g]||g,g=g.replace(h,"\\$&"),b.id!==f&&this.init(),this.parsers[g]||(this.parsers[g]=d(g));var j=this.parsers[g],k=j.regex,l=j.map,m=c.match(k);if(m&&m.length){var n,o;angular.isDate(i)&&!isNaN(i.getTime())?n={year:i.getFullYear(),month:i.getMonth(),date:i.getDate(),hours:i.getHours(),minutes:i.getMinutes(),seconds:i.getSeconds(),milliseconds:i.getMilliseconds()}:(i&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var p=1,q=m.length;q>p;p++){var r=l[p-1];r.apply&&r.apply.call(n,m[p])}return e(n.year,n.month,n.date)&&(angular.isDate(i)&&!isNaN(i.getTime())?(o=new Date(i),o.setFullYear(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)):o=new Date(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)),o}}}]),angular.module("ui.bootstrap.dateparser").value("$dateParserSuppressWarning",!1).service("dateParser",["$log","$dateParserSuppressWarning","uibDateParser",function(a,b,c){b||a.warn("dateParser is now deprecated. Use uibDateParser instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.position").value("$positionSuppressWarning",!1).service("$position",["$log","$positionSuppressWarning","$uibPosition",function(a,b,c){b||a.warn("$position is now deprecated. Use $uibPosition instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).value("$datepickerSuppressError",!1).constant("uibDatepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){i[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){i[d]=angular.isDefined(c)?c:b[d],a[d]=i[d],("minMode"==d&&i.modes.indexOf(a.datepickerMode)<i.modes.indexOf(i[d])||"maxMode"==d&&i.modes.indexOf(a.datepickerMode)>i.modes.indexOf(i[d]))&&(a.datepickerMode=i[d])}):(i[d]=g[d]||null,a[d]=i[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){i.element[0].focus()};a.$on("uib:datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):a.toggleMode("up"===c?1:-1)}}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/e,10)*e+1}var e;this.element=b,this.yearpickerInit=function(){e=this.yearRange,this.step={years:e}},this._refreshView=function(){for(var b,c=new Array(e),f=0,g=d(this.activeDate.getFullYear());e>f;f++)b=new Date(this.activeDate),b.setFullYear(g+f,0,1),c[f]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+f});a.title=[c[0].label,c[e-1].label].join(" - "),a.rows=this.split(c,5)},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=5:"right"===a?c+=1:"down"===a?c+=5:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*this.step.years:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+e-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/day.html"},require:["^?uibDatepicker","uibDaypicker","^?datepicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/month.html"},require:["^?uibDatepicker","uibMonthpicker","^?datepicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/year.html"},require:["^?uibDatepicker","uibYearpicker","^?datepicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0]||d[2];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}).constant("uibDatepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"template/datepicker/popup.html",datepickerTemplateUrl:"template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0,onOpenFocus:!0}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$parse","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout",function(a,b,c,d,e,f,g,h,i,j,k,l){
function m(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function n(b){if(angular.isNumber(b)&&(b=new Date(b)),b){if(angular.isDate(b)&&!isNaN(b))return b;if(angular.isString(b)){var c=j.parse(b,r,a.date);return isNaN(c)?void 0:c}return void 0}return null}function o(a,b){var d=a||b;if(!c.ngRequired&&!d)return!0;if(angular.isNumber(d)&&(d=new Date(d)),d){if(angular.isDate(d)&&!isNaN(d))return!0;if(angular.isString(d)){var e=j.parse(d,r);return!isNaN(e)}return!1}return!0}function p(c){var d=A[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}function q(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}var r,s,t,u,v,w,x,y,z,A,B={},C=!1;a.watchData={},this.init=function(h){if(z=h,s=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):k.closeOnDateSelection,t=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):k.appendToBody,u=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):k.onOpenFocus,v=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:k.datepickerPopupTemplateUrl,w=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:k.datepickerTemplateUrl,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):k.showButtonBar,k.html5Types[c.type]?(r=k.html5Types[c.type],C=!0):(r=c.datepickerPopup||c.uibDatepickerPopup||k.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||k.datepickerPopup;if(c!==r&&(r=c,z.$modelValue=null,!r))throw new Error("uibDatepickerPopup must have a date format specified.")})),!r)throw new Error("uibDatepickerPopup must have a date format specified.");if(C&&c.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");if(x=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),x.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":v}),y=angular.element(x.children()[0]),y.attr("template-url",w),C&&"month"===c.type&&(y.attr("datepicker-mode",'"month"'),y.attr("min-mode","month")),c.datepickerOptions){var l=a.$parent.$eval(c.datepickerOptions);l&&l.initDate&&(a.initDate=l.initDate,y.attr("init-date","initDate"),delete l.initDate),angular.forEach(l,function(a,b){y.attr(m(b),a)})}angular.forEach(["minMode","maxMode","minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(b){if(c[b]){var d=e(c[b]);if(a.$parent.$watch(d,function(c){a.watchData[b]=c,("minDate"===b||"maxDate"===b)&&(B[b]=new Date(c))}),y.attr(m(b),"watchData."+b),"datepickerMode"===b){var f=d.assign;a.$watch("watchData."+b,function(b,c){angular.isFunction(f)&&b!==c&&f(a.$parent,b)})}}}),c.dateDisabled&&y.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),c.showWeeks&&y.attr("show-weeks",c.showWeeks),c.customClass&&y.attr("custom-class","customClass({ date: date, mode: mode })"),C?z.$formatters.push(function(b){return a.date=b,b}):(z.$$parserName="date",z.$validators.date=o,z.$parsers.unshift(n),z.$formatters.push(function(b){return a.date=b,z.$isEmpty(b)?b:i(b,r)})),z.$viewChangeListeners.push(function(){a.date=j.parse(z.$viewValue,r,a.date)}),b.bind("keydown",q),A=d(x)(a),x.remove(),t?f.find("body").append(A):b.after(A),a.$on("$destroy",function(){a.isOpen===!0&&(g.$$phase||a.$apply(function(){a.isOpen=!1})),A.remove(),b.unbind("keydown",q),f.unbind("click",p)})},a.getText=function(b){return a[b+"Text"]||k[b+"Text"]},a.isDisabled=function(b){return"today"===b&&(b=new Date),a.watchData.minDate&&a.compare(b,B.minDate)<0||a.watchData.maxDate&&a.compare(b,B.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?i(a.date,r):null;b.val(d),z.$setViewValue(d),s&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(a.isOpen=!1,b[0].focus())},a.select=function(b){if("today"===b){var c=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(c.getFullYear(),c.getMonth(),c.getDate())):b=new Date(c.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(){a.isOpen=!1,b[0].focus()},a.$watch("isOpen",function(c){c?(a.position=t?h.offset(b):h.position(b),a.position.top=a.position.top+b.prop("offsetHeight"),l(function(){u&&a.$broadcast("uib:datepicker.focus"),f.bind("click",p)},0,!1)):f.unbind("click",p)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"}}}),angular.module("ui.bootstrap.datepicker").value("$datepickerSuppressWarning",!1).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError","$datepickerSuppressWarning",function(a,b,c,d,e,f,g,h,i){i||e.warn("DatepickerController is now deprecated. Use UibDatepickerController instead.");var j=this,k={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){j[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){j[d]=a?new Date(a):null,j.refreshView()}):j[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){j[d]=angular.isDefined(c)?c:b[d],a[d]=j[d],("minMode"==d&&j.modes.indexOf(a.datepickerMode)<j.modes.indexOf(j[d])||"maxMode"==d&&j.modes.indexOf(a.datepickerMode)>j.modes.indexOf(j[d]))&&(a.datepickerMode=j[d])}):(j[d]=g[d]||null,a[d]=j[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(k.$isEmpty(k.$modelValue)||k.$invalid)&&(j.activeDate=a,j.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===j.compare(b.date,j.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){k=a,k.$render=function(){j.render()}},this.render=function(){if(k.$viewValue){var a=new Date(k.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=k.$viewValue?new Date(k.$viewValue):null;k.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=k.$viewValue?new Date(k.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===j.minMode){var c=k.$viewValue?new Date(k.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),k.$setViewValue(c),k.$render()}else j.activeDate=b,a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=j.activeDate.getFullYear()+a*(j.step.years||0),c=j.activeDate.getMonth()+a*(j.step.months||0);j.activeDate.setFullYear(b,c,1),j.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===j.maxMode&&1===b||a.datepickerMode===j.minMode&&-1===b||(a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var l=function(){j.element[0].focus()};a.$on("uib:datepicker.focus",l),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),j.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(j.isDisabled(j.activeDate))return;a.select(j.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(j.handleKeyDown(c,b),j.refreshView()):a.toggleMode("up"===c?1:-1)}}]).directive("datepicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","^ngModel"],controller:"DatepickerController",controllerAs:"datepicker",link:function(c,d,e,f){b||a.warn("datepicker is now deprecated. Use uib-datepicker instead.");var g=f[0],h=f[1];g.init(h)}}}]).directive("daypicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^datepicker","daypicker"],controller:"UibDaypickerController",link:function(c,d,e,f){b||a.warn("daypicker is now deprecated. Use uib-daypicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("monthpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^datepicker","monthpicker"],controller:"UibMonthpickerController",link:function(c,d,e,f){b||a.warn("monthpicker is now deprecated. Use uib-monthpicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("yearpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^datepicker","yearpicker"],controller:"UibYearpickerController",link:function(c,d,e,f){b||a.warn("yearpicker is now deprecated. Use uib-yearpicker instead.");var g=f[0];angular.extend(g,f[1]),g.yearpickerInit(),g.refreshView()}}}]).directive("datepickerPopup",["$log","$datepickerSuppressWarning",function(a,b){return{require:["ngModel","datepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(c,d,e,f){b||a.warn("datepicker-popup is now deprecated. Use uib-datepicker-popup instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("datepickerPopupWrap",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"},link:function(){b||a.warn("datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.")}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b){c||(a.bind("click",d),a.bind("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind("click",d),a.unbind("keydown",e))};var d=function(a){if(c&&(!a||"disabled"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(c.focusToggleElement(),d()):c.isKeynavEnabled()&&/(38|40)/.test(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.openClass,q=angular.noop,r=c.onToggle?d(c.onToggle):angular.noop,s=!1,t=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(m=d(c.isOpen),q=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),s=angular.isDefined(c.dropdownAppendToBody),t=angular.isDefined(c.uibKeyboardNav),s&&n.dropdownMenu&&(i.find("body").append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return t},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(s&&n.dropdownMenu){var e=h.positionElements(b,n.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},m=n.dropdownMenu.hasClass("dropdown-menu-right");m?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),n.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,p).then(function(){angular.isDefined(c)&&c!==d&&r(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var t=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(t),n.dropdownMenu=t}f.close(o),n.selectedOption=null}angular.isFunction(q)&&q(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==o.getAutoClose()&&(o.isOpen=!1)});var u=a.$on("$destroy",function(){o.$destroy()});o.$on("$destroy",u)}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"AC",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibKeyboardNav",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){b.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=d.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(d.selectedOption)?d.selectedOption=d.selectedOption===b.length-1?d.selectedOption:d.selectedOption+1:d.selectedOption=0;break;case 38:angular.isNumber(d.selectedOption)?d.selectedOption=0===d.selectedOption?0:d.selectedOption-1:d.selectedOption=b.length-1}b[d.selectedOption].focus()}})}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.dropdown").value("$dropdownSuppressWarning",!1).service("dropdownService",["$log","$dropdownSuppressWarning","uibDropdownService",function(a,b,c){b||a.warn("dropdownService is now deprecated. Use uibDropdownService instead."),angular.extend(this,c)}]).controller("DropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest","$log","$dropdownSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m){m||l.warn("DropdownController is now deprecated. Use UibDropdownController instead.");var n,o,p=this,q=a.$new(),r=e.openClass,s=angular.noop,t=c.onToggle?d(c.onToggle):angular.noop,u=!1,v=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(o=d(c.isOpen),s=o.assign,a.$watch(o,function(a){q.isOpen=!!a})),u=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.uibKeyboardNav),u&&p.dropdownMenu&&(i.find("body").append(p.dropdownMenu),b.on("$destroy",function(){p.dropdownMenu.remove()}))},this.toggle=function(a){return q.isOpen=arguments.length?!!a:!q.isOpen},this.isOpen=function(){return q.isOpen},q.getToggleElement=function(){return p.toggleElement},q.getAutoClose=function(){return c.autoClose||"always"},q.getElement=function(){return b},q.isKeynavEnabled=function(){return v},q.focusDropdownEntry=function(a){var c=p.dropdownMenu?angular.element(p.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(p.selectedOption)?p.selectedOption=p.selectedOption===c.length-1?p.selectedOption:p.selectedOption+1:p.selectedOption=0;break;case 38:angular.isNumber(p.selectedOption)?p.selectedOption=0===p.selectedOption?0:p.selectedOption-1:p.selectedOption=c.length-1}c[p.selectedOption].focus()},q.getDropdownElement=function(){return p.dropdownMenu},q.focusToggleElement=function(){p.toggleElement&&p.toggleElement[0].focus()},q.$watch("isOpen",function(c,d){if(u&&p.dropdownMenu){var e=h.positionElements(b,p.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},l=p.dropdownMenu.hasClass("dropdown-menu-right");l?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),p.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,r).then(function(){angular.isDefined(c)&&c!==d&&t(a,{open:!!c})}),c)p.dropdownMenuTemplateUrl&&k(p.dropdownMenuTemplateUrl).then(function(a){n=q.$new(),j(a.trim())(n,function(a){var b=a;p.dropdownMenu.replaceWith(b),p.dropdownMenu=b})}),q.focusToggleElement(),f.open(q);else{if(p.dropdownMenuTemplateUrl){n&&n.$destroy();var m=angular.element('<ul class="dropdown-menu"></ul>');p.dropdownMenu.replaceWith(m),p.dropdownMenu=m}f.close(q),p.selectedOption=null}angular.isFunction(s)&&s(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==q.getAutoClose()&&(q.isOpen=!1)});var w=a.$on("$destroy",function(){q.$destroy()});q.$on("$destroy",w)}]).directive("dropdown",["$log","$dropdownSuppressWarning",function(a,b){return{controller:"DropdownController",link:function(c,d,e,f){b||a.warn("dropdown is now deprecated. Use uib-dropdown instead."),f.init()}}}]).directive("dropdownMenu",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"AC",require:"?^dropdown",link:function(c,d,e,f){if(f&&!angular.isDefined(e.dropdownNested)){b||a.warn("dropdown-menu is now deprecated. Use uib-dropdown-menu instead."),d.addClass("dropdown-menu");var g=e.templateUrl;g&&(f.dropdownMenuTemplateUrl=g),f.dropdownMenu||(f.dropdownMenu=d)}}}}]).directive("keyboardNav",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"A",require:"?^dropdown",link:function(c,d,e,f){b||a.warn("keyboard-nav is now deprecated. Use uib-keyboard-nav instead."),d.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=f.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(f.selectedOption)?f.selectedOption=f.selectedOption===b.length-1?f.selectedOption:f.selectedOption+1:f.selectedOption=0;break;case 38:angular.isNumber(f.selectedOption)?f.selectedOption=0===f.selectedOption?0:f.selectedOption-1:f.selectedOption=b.length-1}b[f.selectedOption].focus()}})}}}]).directive("dropdownToggle",["$log","$dropdownSuppressWarning",function(a,b){return{require:"?^dropdown",link:function(c,d,e,f){if(b||a.warn("dropdown-toggle is now deprecated. Use uib-dropdown-toggle instead."),f){d.addClass("dropdown-toggle"),f.toggleElement=d;var g=function(a){a.preventDefault(),d.hasClass("disabled")||e.disabled||c.$apply(function(){f.toggle()})};d.bind("click",g),d.attr({"aria-haspopup":!0,"aria-expanded":!1}),c.$watch(f.isOpen,function(a){d.attr("aria-expanded",!!a)}),c.$on("$destroy",function(){d.unbind("click",g)})}}}}]),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,f){d.addClass("modal-backdrop"),f.modalInClass&&(e?e(d,{addClass:f.modalInClass}).start():a.addClass(d,f.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var g=c();e?e(d,{removeClass:f.modalInClass}).start().then(g):a.removeClass(d,f.modalInClass).then(g)}))}var e=null;return b.has("$animateCss")&&(e=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animate","$injector",function(a,b,c,d){var e=null;return d.has("$animateCss")&&(e=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),d.size=g.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",d.close),d.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"==a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=e?e(f,{addClass:g.modalInClass}).start():c.addClass(f,g.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();e?e(f,{removeClass:g.modalInClass}).start().then(d):c.removeClass(f,g.modalInClass).then(d)})),b.when(h).then(function(){var a=f[0].querySelector("[autofocus]");a?a.focus():f[0].focus()});var i=a.getTop();i&&a.modalRendered(i.key)})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap",function(a,b,c,d,e,f,g,h,i){function j(){for(var a=-1,b=u.keys(),c=0;c<b.length;c++)u.get(b[c]).value.backdrop&&(a=c);return a}function k(a,b){var d=c.find("body").eq(0),e=u.get(a).value;u.remove(a),n(e.modalDomEl,e.modalScope,function(){var b=e.openedClass||t;v.remove(b,a),d.toggleClass(b,v.hasKey(b)),l(!0)}),m(),b&&b.focus?b.focus():d.focus()}function l(a){var b;u.length()>0&&(b=u.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function m(){if(q&&-1==j()){var a=r;n(q,r,function(){a=null}),q=void 0,r=void 0}}function n(b,c,d){function e(){e.done||(e.done=!0,p?p(b,{event:"leave"}).start().then(function(){b.remove()}):a.leave(b),c.$destroy(),d&&d())}var g,h=null,i=function(){return g||(g=f.defer(),h=g.promise),function(){g.resolve()}};return c.$broadcast(w.NOW_CLOSING_EVENT,i),f.when(h).then(e)}function o(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var p=null;g.has("$animateCss")&&(p=g.get("$animateCss"));var q,r,s,t="modal-open",u=i.createNew(),v=h.createNew(),w={NOW_CLOSING_EVENT:"modal.stack.now-closing"},x=0,y="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(j,function(a){r&&(r.index=a)}),c.bind("keydown",function(a){if(a.isDefaultPrevented())return a;var b=u.top();if(b&&b.value.keyboard)switch(a.which){case 27:a.preventDefault(),e.$apply(function(){w.dismiss(b.key,"escape key press")});break;case 9:w.loadFocusElementList(b);var c=!1;a.shiftKey?w.isFocusInFirstItem(a)&&(c=w.focusLastFocusableElement()):w.isFocusInLastItem(a)&&(c=w.focusFirstFocusableElement()),c&&(a.preventDefault(),a.stopPropagation())}}),w.open=function(a,b){var f=c[0].activeElement,g=b.openedClass||t;l(!1),u.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard,openedClass:b.openedClass,windowTopClass:b.windowTopClass}),v.put(g,a);var h=c.find("body").eq(0),i=j();if(i>=0&&!q){r=e.$new(!0),r.index=i;var k=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');k.attr("backdrop-class",b.backdropClass),b.animation&&k.attr("modal-animation","true"),q=d(k)(r),h.append(q)}var m=angular.element('<div uib-modal-window="modal-window"></div>');m.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,"window-top-class":b.windowTopClass,size:b.size,index:u.length()-1,animate:"animate"}).html(b.content),b.animation&&m.attr("modal-animation","true");var n=d(m)(b.scope);u.top().value.modalDomEl=n,u.top().value.modalOpener=f,h.append(n),h.addClass(g),w.clearFocusListCache()},w.close=function(a,b){var c=u.get(a);return c&&o(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),k(a,c.value.modalOpener),!0):!c},w.dismiss=function(a,b){var c=u.get(a);return c&&o(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),k(a,c.value.modalOpener),!0):!c},w.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},w.getTop=function(){return u.top()},w.modalRendered=function(a){var b=u.get(a);b&&b.value.renderDeferred.resolve()},w.focusFirstFocusableElement=function(){return s.length>0?(s[0].focus(),!0):!1},w.focusLastFocusableElement=function(){return s.length>0?(s[s.length-1].focus(),!0):!1},w.isFocusInFirstItem=function(a){return s.length>0?(a.target||a.srcElement)==s[0]:!1},w.isFocusInLastItem=function(a){return s.length>0?(a.target||a.srcElement)==s[s.length-1]:!1},w.clearFocusListCache=function(){s=[],x=0},w.loadFocusElementList=function(a){if((void 0===s||!s.length)&&a){var b=a.value.modalDomEl;b&&b.length&&(s=b[0].querySelectorAll(y))}},w}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$uibModalStack","$modalSuppressWarning","$log",function(b,c,d,e,f,g,h,i){function j(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function k(a){var c=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?c.push(d.when(b.invoke(a))):angular.isString(a)?c.push(d.when(b.get(a))):c.push(d.when(a))}),c}var l={},m=null;return l.getPromiseChain=function(){return m},l.open=function(b){function e(){return r}var l=d.defer(),n=d.defer(),o=d.defer(),p={result:l.promise,opened:n.promise,rendered:o.promise,close:function(a){return g.close(p,a)},dismiss:function(a){return g.dismiss(p,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var q,r=d.all([j(b)].concat(k(b.resolve)));return q=m=d.all([m]).then(e,e).then(function(a){var d=(b.scope||c).$new();d.$close=p.close,d.$dismiss=p.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var e,j={},k=1;b.controller&&(j.$scope=d,j.$uibModalInstance=p,Object.defineProperty(j,"$modalInstance",{get:function(){return h||i.warn("$modalInstance is now deprecated. Use $uibModalInstance instead."),p}}),angular.forEach(b.resolve,function(b,c){j[c]=a[k++]}),e=f(b.controller,j),b.controllerAs&&(b.bindToController&&angular.extend(e,d),d[b.controllerAs]=e)),g.open(p,{scope:d,deferred:l,renderDeferred:o,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowTopClass:b.windowTopClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size,openedClass:b.openedClass}),n.resolve(!0)},function(a){n.reject(a),l.reject(a)})["finally"](function(){m===q&&(m=null)}),p},l}]};return a}),angular.module("ui.bootstrap.modal").value("$modalSuppressWarning",!1).directive("modalBackdrop",["$animate","$injector","$modalStack","$log","$modalSuppressWarning",function(a,b,c,d,e){function f(b,f,h){e||d.warn("modal-backdrop is now deprecated. Use uib-modal-backdrop instead."),f.addClass("modal-backdrop"),h.modalInClass&&(g?g(f,{addClass:h.modalInClass}).start():a.addClass(f,h.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var d=c();g?g(f,{removeClass:h.modalInClass}).start().then(d):a.removeClass(f,h.modalInClass).then(d)}))}var g=null;return b.has("$animateCss")&&(g=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),f}}}]).directive("modalWindow",["$modalStack","$q","$animate","$injector","$log","$modalSuppressWarning",function(a,b,c,d,e,f){var g=null;return d.has("$animateCss")&&(g=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,h,i){f||e.warn("modal-window is now deprecated. Use uib-modal-window instead."),h.addClass(i.windowClass||""),h.addClass(i.windowTopClass||""),d.size=i.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},h.on("click",d.close),d.$isRendered=!0;var j=b.defer();i.$observe("modalRender",function(a){"true"==a&&j.resolve()}),j.promise.then(function(){var e=null;i.modalInClass&&(e=g?g(h,{addClass:i.modalInClass}).start():c.addClass(h,i.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();g?g(h,{removeClass:i.modalInClass}).start().then(d):c.removeClass(h,i.modalInClass).then(d)})),b.when(e).then(function(){var a=h[0].querySelector("[autofocus]");a?a.focus():h[0].focus()});var f=a.getTop();f&&a.modalRendered(f.key)})}}}]).directive("modalAnimationClass",["$log","$modalSuppressWarning",function(a,b){return{compile:function(c,d){b||a.warn("modal-animation-class is now deprecated. Use uib-modal-animation-class instead."),d.modalAnimation&&c.addClass(d.modalAnimationClass)}}}]).directive("modalTransclude",["$log","$modalSuppressWarning",function(a,b){return{link:function(c,d,e,f,g){
b||a.warn("modal-transclude is now deprecated. Use uib-modal-transclude instead."),g(c.$parent,function(a){d.empty(),d.append(a)})}}}]).service("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap","$uibModalStack","$log","$modalSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l){l||k.warn("$modalStack is now deprecated. Use $uibModalStack instead."),angular.extend(this,j)}]).provider("$modal",["$uibModalProvider",function(a){angular.extend(this,a),this.$get=["$injector","$log","$modalSuppressWarning",function(b,c,d){return d||c.warn("$modal is now deprecated. Use $uibModal instead."),b.invoke(a.$get)}]}]),angular.module("ui.bootstrap.pagination",[]).controller("UibPaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.pagination").value("$paginationSuppressWarning",!1).controller("PaginationController",["$scope","$attrs","$parse","$log","$paginationSuppressWarning",function(a,b,c,d,e){e||d.warn("PaginationController is now deprecated. Use UibPaginationController instead.");var f=this,g={$setViewValue:angular.noop},h=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(d,e){g=d,this.config=e,g.$render=function(){f.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){f.itemsPerPage=parseInt(b,10),a.totalPages=f.calculateTotalPages()}):this.itemsPerPage=e.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=f.calculateTotalPages()}),a.$watch("totalPages",function(b){h(a.$parent,b),a.page>b?a.selectPage(b):g.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(g.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),g.$setViewValue(b),g.$render())},a.getText=function(b){return a[b+"Text"]||f.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).directive("pagination",["$parse","uibPaginationConfig","$log","$paginationSuppressWarning",function(a,b,c,d){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["pagination","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(e,f,g,h){function i(a,b,c){return{number:a,text:b,active:c}}function j(a,b){var c=[],d=1,e=b,f=angular.isDefined(m)&&b>m;f&&(n?(d=Math.max(a-Math.floor(m/2),1),e=d+m-1,e>b&&(e=b,d=e-m+1)):(d=(Math.ceil(a/m)-1)*m+1,e=Math.min(d+m-1,b)));for(var g=d;e>=g;g++){var h=i(g,g,g===a);c.push(h)}if(f&&!n){if(d>1){var j=i(d-1,"...",!1);c.unshift(j)}if(b>e){var k=i(e+1,"...",!1);c.push(k)}}return c}d||c.warn("pagination is now deprecated. Use uib-pagination instead.");var k=h[0],l=h[1];if(l){var m=angular.isDefined(g.maxSize)?e.$parent.$eval(g.maxSize):b.maxSize,n=angular.isDefined(g.rotate)?e.$parent.$eval(g.rotate):b.rotate;e.boundaryLinks=angular.isDefined(g.boundaryLinks)?e.$parent.$eval(g.boundaryLinks):b.boundaryLinks,e.directionLinks=angular.isDefined(g.directionLinks)?e.$parent.$eval(g.directionLinks):b.directionLinks,k.init(l,b),g.maxSize&&e.$parent.$watch(a(g.maxSize),function(a){m=parseInt(a,10),k.render()});var o=k.render;k.render=function(){o(),e.page>0&&e.page<=e.totalPages&&(e.pages=j(e.page,e.totalPages))}}}}}]).directive("pager",["uibPagerConfig","$log","$paginationSuppressWarning",function(a,b,c){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["pager","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(d,e,f,g){c||b.warn("pager is now deprecated. Use uib-pager instead.");var h=g[0],i=g[1];i&&(d.align=angular.isDefined(f.align)?d.$parent.$eval(f.align):a.align,h.init(i,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){var n=m.createNew();return h.on("keypress",function(a){if(27===a.which){var b=n.top();b&&(b.value.close(),n.removeTop(),b=null)}}),function(e,k,m,o){function p(a){var b=(a||o.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}o=angular.extend({},b,d,o);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup title="'+r+"title"+s+'" '+(o.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block; top: -9999px; left: -9999px;"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){L.isOpen?q():m()}function m(){(!K||a.$eval(d[k+"Enable"]))&&(u(),x(),L.popupDelay?F||(F=g(r,L.popupDelay,!1)):r())}function q(){s(),L.popupCloseDelay?G||(G=g(t,L.popupCloseDelay,!1)):t()}function r(){return s(),u(),L.content?(v(),void L.$evalAsync(function(){L.isOpen=!0,y(!0),Q()})):angular.noop}function s(){F&&(g.cancel(F),F=null),H&&(g.cancel(H),H=null)}function t(){s(),u(),L&&L.$evalAsync(function(){L.isOpen=!1,y(!1),L.animation?E||(E=g(w,150,!1)):w()})}function u(){G&&(g.cancel(G),G=null),E&&(g.cancel(E),E=null)}function v(){C||(D=L.$new(),C=c(D,function(a){I?h.find("body").append(a):b.after(a)}),z())}function w(){A(),E=null,C&&(C.remove(),C=null),D&&(D.$destroy(),D=null)}function x(){L.title=d[k+"Title"],O?L.content=O(a):L.content=d[e],L.popupClass=d[k+"Class"],L.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:o.placement;var b=parseInt(d[k+"PopupDelay"],10),c=parseInt(d[k+"PopupCloseDelay"],10);L.popupDelay=isNaN(b)?o.popupDelay:b,L.popupCloseDelay=isNaN(c)?o.popupCloseDelay:c}function y(b){N&&angular.isFunction(N.assign)&&N.assign(a,b)}function z(){P.length=0,O?(P.push(a.$watch(O,function(a){L.content=a,!a&&L.isOpen&&t()})),P.push(D.$watch(function(){M||(M=!0,D.$$postDigest(function(){M=!1,L&&L.isOpen&&Q()}))}))):P.push(d.$observe(e,function(a){L.content=a,!a&&L.isOpen?t():Q()})),P.push(d.$observe(k+"Title",function(a){L.title=a,L.isOpen&&Q()})),P.push(d.$observe(k+"Placement",function(a){L.placement=a?a:o.placement,L.isOpen&&Q()}))}function A(){P.length&&(angular.forEach(P,function(a){a()}),P.length=0)}function B(){var a=d[k+"Trigger"];R(),J=p(a),"none"!==J.show&&J.show.forEach(function(a,c){a===J.hide[c]?b[0].addEventListener(a,j):a&&(b[0].addEventListener(a,m),J.hide[c].split(" ").forEach(function(a){b[0].addEventListener(a,q)})),b.on("keypress",function(a){27===a.which&&q()})})}var C,D,E,F,G,H,I=angular.isDefined(o.appendToBody)?o.appendToBody:!1,J=p(void 0),K=angular.isDefined(d[k+"Enable"]),L=a.$new(!0),M=!1,N=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,O=o.useContentExp?l(d[e]):!1,P=[],Q=function(){C&&C.html()&&(H||(H=g(function(){C.css({top:0,left:0});var a=i.positionElements(b,C,L.placement,I);a.top+="px",a.left+="px",a.visibility="visible",C.css(a),H=null},0,!1)))};L.origScope=a,L.isOpen=!1,n.add(L,{close:t}),L.contentExp=function(){return L.content},d.$observe("disabled",function(a){a&&s(),a&&L.isOpen&&t()}),N&&a.$watch(N,function(a){L&&!a===L.isOpen&&j()});var R=function(){J.show.forEach(function(a){b.unbind(a,m)}),J.hide.forEach(function(a){a.split(" ").forEach(function(a){b[0].removeEventListener(a,q)})})};B();var S=a.$eval(d[k+"Animation"]);L.animation=angular.isDefined(S)?!!S:o.animation;var T=a.$eval(d[k+"AppendToBody"]);I=angular.isDefined(T)?T:I,I&&a.$on("$locationChangeSuccess",function(){L.isOpen&&t()}),a.$on("$destroy",function(){s(),u(),R(),w(),n.remove(L),L=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",function(){return{restrict:"A",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.tooltip").value("$tooltipSuppressWarning",!1).provider("$tooltip",["$uibTooltipProvider",function(a){angular.extend(this,a),this.$get=["$log","$tooltipSuppressWarning","$injector",function(b,c,d){return c||b.warn("$tooltip is now deprecated. Use $uibTooltip instead."),d.invoke(a.$get)}]}]).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest","$log","$tooltipSuppressWarning",function(a,b,c,d,e,f){return{link:function(g,h,i){f||e.warn("tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.");var j,k,l,m=g.$eval(i.tooltipTemplateTranscludeScope),n=0,o=function(){k&&(k.remove(),k=null),j&&(j.$destroy(),j=null),l&&(a.leave(l).then(function(){k=null}),k=l,l=null)};g.$watch(b.parseAsResourceUrl(i.tooltipTemplateTransclude),function(b){var e=++n;b?(d(b,!0).then(function(d){if(e===n){var f=m.$new(),g=d,i=c(g)(f,function(b){o(),a.enter(b,h)});j=f,l=i,j.$emit("$includeContentLoaded",b)}},function(){e===n&&(o(),g.$emit("$includeContentError",b))}),g.$emit("$includeContentRequested",b)):o()}),g.$on("$destroy",o)}}}]).directive("tooltipClasses",["$log","$tooltipSuppressWarning",function(a,b){return{restrict:"A",link:function(c,d,e){b||a.warn("tooltip-classes is now deprecated. Use uib-tooltip-classes instead."),c.placement&&d.addClass(c.placement),c.popupClass&&d.addClass(c.popupClass),c.animation()&&d.addClass(e.tooltipAnimationClass)}}}]).directive("tooltipPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(c,d){b||a.warn("tooltip-popup is now deprecated. Use uib-tooltip-popup instead."),d.addClass("tooltip")}}}]).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(c,d){b||a.warn("tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipTemplate",["$tooltip",function(a){return a("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(c,d){b||a.warn("tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipHtml",["$tooltip",function(a){return a("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.popover").value("$popoverSuppressWarning",!1).directive("popoverTemplatePopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(c,d){b||a.warn("popover-template-popup is now deprecated. Use uib-popover-template-popup instead."),d.addClass("popover")}}}]).directive("popoverTemplate",["$tooltip",function(a){return a("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(c,d){b||a.warn("popover-html-popup is now deprecated. Use uib-popover-html-popup instead."),d.addClass("popover")}}}]).directive("popoverHtml",["$tooltip",function(a){return a("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(c,d){b||a.warn("popover-popup is now deprecated. Use uib-popover-popup instead."),d.addClass("popover")}}}]).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,f){e||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=f&&angular.isDefined(f.title)?f.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){var a=d.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("max",function(b){d.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{max:"=?"},templateUrl:"template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.progressbar").value("$progressSuppressWarning",!1).controller("ProgressController",["$scope","$attrs","uibProgressConfig","$log","$progressSuppressWarning",function(a,b,c,d,e){e||d.warn("ProgressController is now deprecated. Use UibProgressController instead.");var f=this,g=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,d){g||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=d&&angular.isDefined(d.title)?d.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){b.percent=+(100*b.value/b.max).toFixed(2);var a=f.bars.reduce(function(a,b){return a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,f.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)},a.$watch("max",function(b){f.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("progress",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{max:"=?",title:"@?"},templateUrl:"template/progressbar/progress.html",link:function(){b||a.warn("progress is now deprecated. Use uib-progress instead.")}}}]).directive("bar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(c,d,e,f){b||a.warn("bar is now deprecated. Use uib-bar instead."),f.addBar(c,d)}}}]).directive("progressbar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(c,d,e,f){b||a.warn("progressbar is now deprecated. Use uib-progressbar instead."),f.addBar(c,angular.element(d.children()[0]),{title:e.title})}}}]),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(d.$viewValue===b?0:b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.rating").value("$ratingSuppressWarning",!1).controller("RatingController",["$scope","$attrs","$controller","$log","$ratingSuppressWarning",function(a,b,c,d,e){e||d.warn("RatingController is now deprecated. Use UibRatingController instead."),angular.extend(this,c("UibRatingController",{$scope:a,$attrs:b}))}]).directive("rating",["$log","$ratingSuppressWarning",function(a,b){return{require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(c,d,e,f){b||a.warn("rating is now deprecated. Use uib-rating instead.");var g=f[0],h=f[1];g.init(h)}}}]),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect(),a.selectCalled=!1)}),a.active=!0,a.selectCalled||(a.onSelect(),a.selectCalled=!0)},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("uibTabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"UibTabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(b,c,d,e,f){b.$watch("active",function(a){a&&e.select(b)}),b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:["?^uibTab","?^tab"],link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase()||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:["?^uibTabset","?^tabset"],link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.tabs").value("$tabsSuppressWarning",!1).controller("TabsetController",["$scope","$controller","$log","$tabsSuppressWarning",function(a,b,c,d){d||c.warn("TabsetController is now deprecated. Use UibTabsetController instead."),angular.extend(this,b("UibTabsetController",{$scope:a}))}]).directive("tabset",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(c,d,e){b||a.warn("tabset is now deprecated. Use uib-tabset instead."),c.vertical=angular.isDefined(e.vertical)?c.$parent.$eval(e.vertical):!1,c.justified=angular.isDefined(e.justified)?c.$parent.$eval(e.justified):!1}}}]).directive("tab",["$parse","$log","$tabsSuppressWarning",function(a,b,c){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(d,e,f,g,h){c||b.warn("tab is now deprecated. Use uib-tab instead."),d.$watch("active",function(a){a&&g.select(d)}),d.disabled=!1,f.disable&&d.$parent.$watch(a(f.disable),function(a){d.disabled=!!a}),d.select=function(){d.disabled||(d.active=!0)},g.addTab(d),d.$on("$destroy",function(){g.removeTab(d)}),d.$transcludeFn=h}}}]).directive("tabHeadingTransclude",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"A",require:"^tab",link:function(c,d){b||a.warn("tab-heading-transclude is now deprecated. Use uib-tab-heading-transclude instead."),c.$watch("headingElement",function(a){a&&(d.html(""),d.append(a))})}}}]).directive("tabContentTransclude",["$log","$tabsSuppressWarning",function(a,b){function c(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(d,e,f){b||a.warn("tab-content-transclude is now deprecated. Use uib-tab-content-transclude instead.");var g=d.$eval(f.tabContentTransclude);g.$transcludeFn(g.$parent,function(a){angular.forEach(a,function(a){c(a)?g.headingElement=a:e.append(a)})})}}}]),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===r[1]&&(b+=12)),b):void 0}function i(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function j(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a.toString()}function k(a){l(),q.$setViewValue(new Date(p)),m(a)}function l(){q.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function m(b){var c=p.getHours(),d=p.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:j(c),"m"!==b&&(a.minutes=j(d)),a.meridian=p.getHours()<12?r[0]:r[1]}function n(a,b){var c=new Date(a.getTime()+6e4*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes()),d}function o(a){p=n(p,a),k()}var p=new Date,q={$setViewValue:angular.noop},r=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){q=b,q.$render=this.render,q.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;h&&this.setupMousewheelEvents(e,f);var i=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;i&&this.setupArrowkeyEvents(e,f),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f)};var s=g.hourStep;c.hourStep&&a.$parent.$watch(d(c.hourStep),function(a){s=parseInt(a,10)});var t=g.minuteStep;c.minuteStep&&a.$parent.$watch(d(c.minuteStep),function(a){t=parseInt(a,10)});var u;a.$parent.$watch(d(c.min),function(a){var b=new Date(a);u=isNaN(b)?void 0:b});var v;a.$parent.$watch(d(c.max),function(a){var b=new Date(a);v=isNaN(b)?void 0:b}),a.noIncrementHours=function(){var a=n(p,60*s);
return a>v||p>a&&u>a},a.noDecrementHours=function(){var a=n(p,60*-s);return u>a||a>p&&a>v},a.noIncrementMinutes=function(){var a=n(p,t);return a>v||p>a&&u>a},a.noDecrementMinutes=function(){var a=n(p,-t);return u>a||a>p&&a>v},a.noToggleMeridian=function(){return p.getHours()<13?n(p,720)>v:n(p,-720)<u},a.showMeridian=g.showMeridian,c.showMeridian&&a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,q.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(p.setHours(c),k())}else m()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){q.$setViewValue(null),q.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=h(),b=i();angular.isDefined(a)&&angular.isDefined(b)?(p.setHours(a),u>p||p>v?d(!0):k("h")):d(!0)},b.bind("blur",function(b){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=j(a.hours)})}),a.updateMinutes=function(){var a=i(),b=h();angular.isDefined(a)&&angular.isDefined(b)?(p.setMinutes(a),u>p||p>v?d(void 0,!0):k("m")):d(void 0,!0)},c.bind("blur",function(b){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=j(a.minutes)})})},this.render=function(){var b=q.$viewValue;isNaN(b)?(q.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(p=b),u>p||p>v?(q.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):l(),m())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*s)},a.decrementHours=function(){a.noDecrementHours()||o(60*-s)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(t)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(-t)},a.toggleMeridian=function(){a.noToggleMeridian()||o(720*(p.getHours()<12?1:-1))}}]).directive("uibTimepicker",function(){return{restrict:"EA",require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.timepicker").value("$timepickerSuppressWarning",!1).controller("TimepickerController",["$scope","$element","$attrs","$controller","$log","$timepickerSuppressWarning",function(a,b,c,d,e,f){f||e.warn("TimepickerController is now deprecated. Use UibTimepickerController instead."),angular.extend(this,d("UibTimepickerController",{$scope:a,$element:b,$attrs:c}))}]).directive("timepicker",["$log","$timepickerSuppressWarning",function(a,b){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(c,d,e,f){b||a.warn("timepicker is now deprecated. Use uib-timepicker instead.");var g=f[0],h=f[1];h&&g.init(h,d.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(){K.moveInProgress||(K.moveInProgress=!0,K.$digest()),S&&g.cancel(S),S=g(function(){K.matches.length&&n(),K.moveInProgress=!1},r)}function n(){K.position=C?k.offset(b):k.position(b),K.position.top+=b.prop("offsetHeight")}var o,p,q=[9,13,27,38,40],r=200,s=a.$eval(c.typeaheadMinLength);s||0===s||(s=1);var t,u,v=a.$eval(c.typeaheadWaitMs)||0,w=a.$eval(c.typeaheadEditable)!==!1,x=e(c.typeaheadLoading).assign||angular.noop,y=e(c.typeaheadOnSelect),z=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,A=e(c.typeaheadNoResults).assign||angular.noop,B=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,C=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,D=c.typeaheadAppendToElementId||!1,E=a.$eval(c.typeaheadFocusFirst)!==!1,F=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,G=e(c.ngModel),H=e(c.ngModel+"($$$p)"),I=function(b,c){return angular.isFunction(G(a))&&p&&p.$options&&p.$options.getterSetter?H(b,{$$$p:c}):G.assign(b,c)},J=l.parse(c.uibTypeahead),K=a.$new(),L=a.$on("$destroy",function(){K.$destroy()});K.$on("$destroy",L);var M="typeahead-"+K.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":M});var N=angular.element("<div uib-typeahead-popup></div>");N.attr({id:M,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(c.typeaheadTemplateUrl)&&N.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&N.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var O=function(){K.matches=[],K.activeIdx=-1,b.attr("aria-expanded",!1)},P=function(a){return M+"-option-"+a};K.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",P(a))});var Q=function(a,b){return K.matches.length>b&&a?a.toUpperCase()===K.matches[b].label.toUpperCase():!1},R=function(c){var d={$viewValue:c};x(a,!0),A(a,!1),f.when(J.source(a,d)).then(function(e){var f=c===o.$viewValue;if(f&&t)if(e&&e.length>0){K.activeIdx=E?0:-1,A(a,!1),K.matches.length=0;for(var g=0;g<e.length;g++)d[J.itemName]=e[g],K.matches.push({id:P(g),label:J.viewMapper(K,d),model:e[g]});K.query=c,n(),b.attr("aria-expanded",!0),F&&1===K.matches.length&&Q(c,0)&&K.select(0)}else O(),A(a,!0);f&&x(a,!1)},function(){O(),x(a,!1),A(a,!0)})};C&&(angular.element(i).bind("resize",m),h.find("body").bind("scroll",m));var S;K.moveInProgress=!1,K.query=void 0;var T,U=function(a){T=g(function(){R(a)},v)},V=function(){T&&g.cancel(T)};O(),K.select=function(d){var e,f,h={};u=!0,h[J.itemName]=f=K.matches[d].model,e=J.modelMapper(a,h),I(a,e),o.$setValidity("editable",!0),o.$setValidity("parse",!0),y(a,{$item:f,$model:e,$label:J.viewMapper(a,h)}),O(),K.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.bind("keydown",function(a){if(0!==K.matches.length&&-1!==q.indexOf(a.which)){if(-1===K.activeIdx&&(9===a.which||13===a.which))return O(),void K.$digest();a.preventDefault(),40===a.which?(K.activeIdx=(K.activeIdx+1)%K.matches.length,K.$digest()):38===a.which?(K.activeIdx=(K.activeIdx>0?K.activeIdx:K.matches.length)-1,K.$digest()):13===a.which||9===a.which?K.$apply(function(){K.select(K.activeIdx)}):27===a.which&&(a.stopPropagation(),O(),K.$digest())}}),b.bind("blur",function(){z&&K.matches.length&&-1!==K.activeIdx&&!u&&(u=!0,K.$apply(function(){K.select(K.activeIdx)})),t=!1,u=!1});var W=function(a){b[0]!==a.target&&3!==a.which&&0!==K.matches.length&&(O(),j.$$phase||K.$digest())};h.bind("click",W),a.$on("$destroy",function(){h.unbind("click",W),(C||D)&&X.remove(),C&&(angular.element(i).unbind("resize",m),h.find("body").unbind("scroll",m)),N.remove()});var X=d(N)(K);C?h.find("body").append(X):D!==!1?angular.element(h[0].getElementById(D)).append(X):b.after(X),this.init=function(b,c){o=b,p=c,o.$parsers.unshift(function(b){return t=!0,0===s||b&&b.length>=s?v>0?(V(),U(b)):R(b):(x(a,!1),V(),O()),w?b:b?void o.$setValidity("editable",!1):(o.$setValidity("editable",!0),null)}),o.$formatters.push(function(b){var c,d,e={};return w||o.$setValidity("editable",!0),B?(e.$model=b,B(a,e)):(e[J.itemName]=b,c=J.viewMapper(a,e),e[J.itemName]=void 0,d=J.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",function(){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"template/typeahead/typeahead-match.html";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("ui.bootstrap.typeahead").value("$typeaheadSuppressWarning",!1).service("typeaheadParser",["$parse","uibTypeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d){return d||c.warn("typeaheadParser is now deprecated. Use uibTypeaheadParser instead."),b}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","typeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k){var l=[9,13,27,38,40],m=200;return{require:["ngModel","^?ngModelOptions"],link:function(n,o,p,q){function r(){N.moveInProgress||(N.moveInProgress=!0,N.$digest()),V&&d.cancel(V),V=d(function(){N.matches.length&&s(),N.moveInProgress=!1},m)}function s(){N.position=F?h.offset(o):h.position(o),N.position.top+=o.prop("offsetHeight")}k||j.warn("typeahead is now deprecated. Use uib-typeahead instead.");var t=q[0],u=q[1],v=n.$eval(p.typeaheadMinLength);v||0===v||(v=1);var w,x,y=n.$eval(p.typeaheadWaitMs)||0,z=n.$eval(p.typeaheadEditable)!==!1,A=b(p.typeaheadLoading).assign||angular.noop,B=b(p.typeaheadOnSelect),C=angular.isDefined(p.typeaheadSelectOnBlur)?n.$eval(p.typeaheadSelectOnBlur):!1,D=b(p.typeaheadNoResults).assign||angular.noop,E=p.typeaheadInputFormatter?b(p.typeaheadInputFormatter):void 0,F=p.typeaheadAppendToBody?n.$eval(p.typeaheadAppendToBody):!1,G=p.typeaheadAppendToElementId||!1,H=n.$eval(p.typeaheadFocusFirst)!==!1,I=p.typeaheadSelectOnExact?n.$eval(p.typeaheadSelectOnExact):!1,J=b(p.ngModel),K=b(p.ngModel+"($$$p)"),L=function(a,b){return angular.isFunction(J(n))&&u&&u.$options&&u.$options.getterSetter?K(a,{$$$p:b}):J.assign(a,b)},M=i.parse(p.typeahead),N=n.$new(),O=n.$on("$destroy",function(){N.$destroy()});N.$on("$destroy",O);var P="typeahead-"+N.$id+"-"+Math.floor(1e4*Math.random());o.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":P});var Q=angular.element("<div typeahead-popup></div>");Q.attr({id:P,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(p.typeaheadTemplateUrl)&&Q.attr("template-url",p.typeaheadTemplateUrl),angular.isDefined(p.typeaheadPopupTemplateUrl)&&Q.attr("popup-template-url",p.typeaheadPopupTemplateUrl);var R=function(){N.matches=[],N.activeIdx=-1,o.attr("aria-expanded",!1)},S=function(a){return P+"-option-"+a};N.$watch("activeIdx",function(a){0>a?o.removeAttr("aria-activedescendant"):o.attr("aria-activedescendant",S(a))});var T=function(a,b){return N.matches.length>b&&a?a.toUpperCase()===N.matches[b].label.toUpperCase():!1},U=function(a){var b={$viewValue:a};A(n,!0),D(n,!1),c.when(M.source(n,b)).then(function(c){var d=a===t.$viewValue;if(d&&w)if(c&&c.length>0){N.activeIdx=H?0:-1,D(n,!1),N.matches.length=0;for(var e=0;e<c.length;e++)b[M.itemName]=c[e],N.matches.push({id:S(e),label:M.viewMapper(N,b),model:c[e]});N.query=a,s(),o.attr("aria-expanded",!0),I&&1===N.matches.length&&T(a,0)&&N.select(0)}else R(),D(n,!0);d&&A(n,!1)},function(){R(),A(n,!1),D(n,!0)})};F&&(angular.element(f).bind("resize",r),e.find("body").bind("scroll",r));var V;N.moveInProgress=!1,R(),N.query=void 0;var W,X=function(a){W=d(function(){U(a)},y)},Y=function(){W&&d.cancel(W)};t.$parsers.unshift(function(a){return w=!0,0===v||a&&a.length>=v?y>0?(Y(),X(a)):U(a):(A(n,!1),Y(),R()),z?a:a?void t.$setValidity("editable",!1):(t.$setValidity("editable",!0),null)}),t.$formatters.push(function(a){var b,c,d={};return z||t.$setValidity("editable",!0),E?(d.$model=a,E(n,d)):(d[M.itemName]=a,b=M.viewMapper(n,d),d[M.itemName]=void 0,c=M.viewMapper(n,d),b!==c?b:a)}),N.select=function(a){var b,c,e={};x=!0,e[M.itemName]=c=N.matches[a].model,b=M.modelMapper(n,e),L(n,b),t.$setValidity("editable",!0),t.$setValidity("parse",!0),B(n,{$item:c,$model:b,$label:M.viewMapper(n,e)}),R(),N.$eval(p.typeaheadFocusOnSelect)!==!1&&d(function(){o[0].focus()},0,!1)},o.bind("keydown",function(a){if(0!==N.matches.length&&-1!==l.indexOf(a.which)){if(-1===N.activeIdx&&(9===a.which||13===a.which))return R(),void N.$digest();a.preventDefault(),40===a.which?(N.activeIdx=(N.activeIdx+1)%N.matches.length,N.$digest()):38===a.which?(N.activeIdx=(N.activeIdx>0?N.activeIdx:N.matches.length)-1,N.$digest()):13===a.which||9===a.which?N.$apply(function(){N.select(N.activeIdx)}):27===a.which&&(a.stopPropagation(),R(),N.$digest())}}),o.bind("blur",function(){C&&N.matches.length&&-1!==N.activeIdx&&!x&&(x=!0,N.$apply(function(){N.select(N.activeIdx)})),w=!1,x=!1});var Z=function(a){o[0]!==a.target&&3!==a.which&&0!==N.matches.length&&(R(),g.$$phase||N.$digest())};e.bind("click",Z),n.$on("$destroy",function(){e.unbind("click",Z),(F||G)&&$.remove(),F&&(angular.element(f).unbind("resize",r),e.find("body").unbind("scroll",r)),Q.remove()});var $=a(Q)(N);F?e.find("body").append($):G!==!1?angular.element(e[0].getElementById(G)).append($):o.after($)}}}]).directive("typeaheadPopup",["$typeaheadSuppressWarning","$log",function(a,b){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(c,d,e){a||b.warn("typeahead-popup is now deprecated. Use uib-typeahead-popup instead."),c.templateUrl=e.templateUrl,c.isOpen=function(){return c.matches.length>0},c.isActive=function(a){return c.active==a},c.selectActive=function(a){c.active=a},c.selectMatch=function(a){c.select({activeIdx:a})}}}}]).directive("typeaheadMatch",["$templateRequest","$compile","$parse","$typeaheadSuppressWarning","$log",function(a,b,c,d,e){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(f,g,h){d||e.warn("typeahead-match is now deprecated. Use uib-typeahead-match instead.");var i=c(h.templateUrl)(f.$parent)||"template/typeahead/typeahead-match.html";a(i).then(function(a){b(a.trim())(f,function(a){g.replaceWith(a)})})}}}]).filter("typeaheadHighlight",["$sce","$injector","$log","$typeaheadSuppressWarning",function(a,b,c,d){function e(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function f(a){return/<.*>/g.test(a)}var g;return g=b.has("$sanitize"),function(b,h){return d||c.warn("typeaheadHighlight is now deprecated. Use uibTypeaheadHighlight instead."),!g&&f(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=h?(""+b).replace(new RegExp(e(h),"gi"),"<strong>$&</strong>"):b,g||(b=a.trustAsHtml(b)),b}}]),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" uib-collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" dropdown-nested ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-template-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-html.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-template.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n</div>\n')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" aria-valuetext="{{r.title}}"></i>\n</span>\n');
}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a href tabindex="-1" ng-bind-html="match.label | uibTypeaheadHighlight:query"></a>\n')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
/*
 angular-file-upload v1.1.5
 https://github.com/nervgh/angular-file-upload
*/
!function(a,b){return"function"==typeof define&&define.amd?(define("angular-file-upload",["angular"],function(a){return b(a)}),void 0):b(a)}("undefined"==typeof angular?null:angular,function(a){var b=a.module("angularFileUpload",[]);return b.value("fileUploaderOptions",{url:"/",alias:"file",headers:{},queue:[],progress:0,autoUpload:!1,removeAfterUpload:!1,method:"POST",filters:[],formData:[],queueLimit:Number.MAX_VALUE,withCredentials:!1}).factory("FileUploader",["fileUploaderOptions","$rootScope","$http","$window","$compile",function(b,c,d,e,f){function g(c){var d=a.copy(b);a.extend(this,d,c,{isUploading:!1,_nextIndex:0,_failFilterIndex:-1,_directives:{select:[],drop:[],over:[]}}),this.filters.unshift({name:"queueLimit",fn:this._queueLimitFilter}),this.filters.unshift({name:"folder",fn:this._folderFilter})}function h(b){var c=a.isElement(b),d=c?b.value:b,e=a.isString(d)?"FakePath":"Object",f="_createFrom"+e;this[f](d)}function i(b,c,d){var e=a.isElement(c),f=e?a.element(c):null,h=e?null:c;a.extend(this,{url:b.url,alias:b.alias,headers:a.copy(b.headers),formData:a.copy(b.formData),removeAfterUpload:b.removeAfterUpload,withCredentials:b.withCredentials,method:b.method},d,{uploader:b,file:new g.FileLikeObject(c),isReady:!1,isUploading:!1,isUploaded:!1,isSuccess:!1,isCancel:!1,isError:!1,progress:0,index:null,_file:h,_input:f}),f&&this._replaceNode(f)}function j(b){a.extend(this,b),this.uploader._directives[this.prop].push(this),this._saveLinks(),this.bind()}function k(){k.super_.apply(this,arguments),this.uploader.isHTML5||this.element.removeAttr("multiple"),this.element.prop("value",null)}function l(){l.super_.apply(this,arguments)}function m(){m.super_.apply(this,arguments)}return g.prototype.isHTML5=!(!e.File||!e.FormData),g.prototype.addToQueue=function(b,c,d){var e=this.isArrayLikeObject(b)?b:[b],f=this._getFilters(d),h=this.queue.length,i=[];a.forEach(e,function(a){var b=new g.FileLikeObject(a);if(this._isValidFile(b,f,c)){var d=new g.FileItem(this,a,c);i.push(d),this.queue.push(d),this._onAfterAddingFile(d)}else{var e=this.filters[this._failFilterIndex];this._onWhenAddingFileFailed(b,e,c)}},this),this.queue.length!==h&&(this._onAfterAddingAll(i),this.progress=this._getTotalProgress()),this._render(),this.autoUpload&&this.uploadAll()},g.prototype.removeFromQueue=function(a){var b=this.getIndexOfItem(a),c=this.queue[b];c.isUploading&&c.cancel(),this.queue.splice(b,1),c._destroy(),this.progress=this._getTotalProgress()},g.prototype.clearQueue=function(){for(;this.queue.length;)this.queue[0].remove();this.progress=0},g.prototype.uploadItem=function(a){var b=this.getIndexOfItem(a),c=this.queue[b],d=this.isHTML5?"_xhrTransport":"_iframeTransport";c._prepareToUploading(),this.isUploading||(this.isUploading=!0,this[d](c))},g.prototype.cancelItem=function(a){var b=this.getIndexOfItem(a),c=this.queue[b],d=this.isHTML5?"_xhr":"_form";c&&c.isUploading&&c[d].abort()},g.prototype.uploadAll=function(){var b=this.getNotUploadedItems().filter(function(a){return!a.isUploading});b.length&&(a.forEach(b,function(a){a._prepareToUploading()}),b[0].upload())},g.prototype.cancelAll=function(){var b=this.getNotUploadedItems();a.forEach(b,function(a){a.cancel()})},g.prototype.isFile=function(a){var b=e.File;return b&&a instanceof b},g.prototype.isFileLikeObject=function(a){return a instanceof g.FileLikeObject},g.prototype.isArrayLikeObject=function(b){return a.isObject(b)&&"length"in b},g.prototype.getIndexOfItem=function(b){return a.isNumber(b)?b:this.queue.indexOf(b)},g.prototype.getNotUploadedItems=function(){return this.queue.filter(function(a){return!a.isUploaded})},g.prototype.getReadyItems=function(){return this.queue.filter(function(a){return a.isReady&&!a.isUploading}).sort(function(a,b){return a.index-b.index})},g.prototype.destroy=function(){a.forEach(this._directives,function(b){a.forEach(this._directives[b],function(a){a.destroy()},this)},this)},g.prototype.onAfterAddingAll=function(){},g.prototype.onAfterAddingFile=function(){},g.prototype.onWhenAddingFileFailed=function(){},g.prototype.onBeforeUploadItem=function(){},g.prototype.onProgressItem=function(){},g.prototype.onProgressAll=function(){},g.prototype.onSuccessItem=function(){},g.prototype.onErrorItem=function(){},g.prototype.onCancelItem=function(){},g.prototype.onCompleteItem=function(){},g.prototype.onCompleteAll=function(){},g.prototype._getTotalProgress=function(a){if(this.removeAfterUpload)return a||0;var b=this.getNotUploadedItems().length,c=b?this.queue.length-b:this.queue.length,d=100/this.queue.length,e=(a||0)*d/100;return Math.round(c*d+e)},g.prototype._getFilters=function(b){if(a.isUndefined(b))return this.filters;if(a.isArray(b))return b;var c=b.match(/[^\s,]+/g);return this.filters.filter(function(a){return-1!==c.indexOf(a.name)},this)},g.prototype._render=function(){c.$$phase||c.$apply()},g.prototype._folderFilter=function(a){return!(!a.size&&!a.type)},g.prototype._queueLimitFilter=function(){return this.queue.length<this.queueLimit},g.prototype._isValidFile=function(a,b,c){return this._failFilterIndex=-1,b.length?b.every(function(b){return this._failFilterIndex++,b.fn.call(this,a,c)},this):!0},g.prototype._isSuccessCode=function(a){return a>=200&&300>a||304===a},g.prototype._transformResponse=function(b,c){var e=this._headersGetter(c);return a.forEach(d.defaults.transformResponse,function(a){b=a(b,e)}),b},g.prototype._parseHeaders=function(b){var c,d,e,f={};return b?(a.forEach(b.split("\n"),function(a){e=a.indexOf(":"),c=a.slice(0,e).trim().toLowerCase(),d=a.slice(e+1).trim(),c&&(f[c]=f[c]?f[c]+", "+d:d)}),f):f},g.prototype._headersGetter=function(a){return function(b){return b?a[b.toLowerCase()]||null:a}},g.prototype._xhrTransport=function(b){var c=b._xhr=new XMLHttpRequest,d=new FormData,e=this;e._onBeforeUploadItem(b),a.forEach(b.formData,function(b){a.forEach(b,function(a,b){d.append(b,a)})}),d.append(b.alias,b._file,b.file.name),c.upload.onprogress=function(a){var c=Math.round(a.lengthComputable?100*a.loaded/a.total:0);e._onProgressItem(b,c)},c.onload=function(){var a=e._parseHeaders(c.getAllResponseHeaders()),d=e._transformResponse(c.response,a),f=e._isSuccessCode(c.status)?"Success":"Error",g="_on"+f+"Item";e[g](b,d,c.status,a),e._onCompleteItem(b,d,c.status,a)},c.onerror=function(){var a=e._parseHeaders(c.getAllResponseHeaders()),d=e._transformResponse(c.response,a);e._onErrorItem(b,d,c.status,a),e._onCompleteItem(b,d,c.status,a)},c.onabort=function(){var a=e._parseHeaders(c.getAllResponseHeaders()),d=e._transformResponse(c.response,a);e._onCancelItem(b,d,c.status,a),e._onCompleteItem(b,d,c.status,a)},c.open(b.method,b.url,!0),c.withCredentials=b.withCredentials,a.forEach(b.headers,function(a,b){c.setRequestHeader(b,a)}),c.send(d),this._render()},g.prototype._iframeTransport=function(b){var c=a.element('<form style="display: none;" />'),d=a.element('<iframe name="iframeTransport'+Date.now()+'">'),e=b._input,f=this;b._form&&b._form.replaceWith(e),b._form=c,f._onBeforeUploadItem(b),e.prop("name",b.alias),a.forEach(b.formData,function(b){a.forEach(b,function(b,d){var e=a.element('<input type="hidden" name="'+d+'" />');e.val(b),c.append(e)})}),c.prop({action:b.url,method:"POST",target:d.prop("name"),enctype:"multipart/form-data",encoding:"multipart/form-data"}),d.bind("load",function(){try{var a=d[0].contentDocument.body.innerHTML}catch(c){}var e={response:a,status:200,dummy:!0},g={},h=f._transformResponse(e.response,g);f._onSuccessItem(b,h,e.status,g),f._onCompleteItem(b,h,e.status,g)}),c.abort=function(){var a,g={status:0,dummy:!0},h={};d.unbind("load").prop("src","javascript:false;"),c.replaceWith(e),f._onCancelItem(b,a,g.status,h),f._onCompleteItem(b,a,g.status,h)},e.after(c),c.append(e).append(d),c[0].submit(),this._render()},g.prototype._onWhenAddingFileFailed=function(a,b,c){this.onWhenAddingFileFailed(a,b,c)},g.prototype._onAfterAddingFile=function(a){this.onAfterAddingFile(a)},g.prototype._onAfterAddingAll=function(a){this.onAfterAddingAll(a)},g.prototype._onBeforeUploadItem=function(a){a._onBeforeUpload(),this.onBeforeUploadItem(a)},g.prototype._onProgressItem=function(a,b){var c=this._getTotalProgress(b);this.progress=c,a._onProgress(b),this.onProgressItem(a,b),this.onProgressAll(c),this._render()},g.prototype._onSuccessItem=function(a,b,c,d){a._onSuccess(b,c,d),this.onSuccessItem(a,b,c,d)},g.prototype._onErrorItem=function(a,b,c,d){a._onError(b,c,d),this.onErrorItem(a,b,c,d)},g.prototype._onCancelItem=function(a,b,c,d){a._onCancel(b,c,d),this.onCancelItem(a,b,c,d)},g.prototype._onCompleteItem=function(b,c,d,e){b._onComplete(c,d,e),this.onCompleteItem(b,c,d,e);var f=this.getReadyItems()[0];return this.isUploading=!1,a.isDefined(f)?(f.upload(),void 0):(this.onCompleteAll(),this.progress=this._getTotalProgress(),this._render(),void 0)},g.isFile=g.prototype.isFile,g.isFileLikeObject=g.prototype.isFileLikeObject,g.isArrayLikeObject=g.prototype.isArrayLikeObject,g.isHTML5=g.prototype.isHTML5,g.inherit=function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.super_=b},g.FileLikeObject=h,g.FileItem=i,g.FileDirective=j,g.FileSelect=k,g.FileDrop=l,g.FileOver=m,h.prototype._createFromFakePath=function(a){this.lastModifiedDate=null,this.size=null,this.type="like/"+a.slice(a.lastIndexOf(".")+1).toLowerCase(),this.name=a.slice(a.lastIndexOf("/")+a.lastIndexOf("\\")+2)},h.prototype._createFromObject=function(b){this.lastModifiedDate=a.copy(b.lastModifiedDate),this.size=b.size,this.type=b.type,this.name=b.name},i.prototype.upload=function(){this.uploader.uploadItem(this)},i.prototype.cancel=function(){this.uploader.cancelItem(this)},i.prototype.remove=function(){this.uploader.removeFromQueue(this)},i.prototype.onBeforeUpload=function(){},i.prototype.onProgress=function(){},i.prototype.onSuccess=function(){},i.prototype.onError=function(){},i.prototype.onCancel=function(){},i.prototype.onComplete=function(){},i.prototype._onBeforeUpload=function(){this.isReady=!0,this.isUploading=!0,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.onBeforeUpload()},i.prototype._onProgress=function(a){this.progress=a,this.onProgress(a)},i.prototype._onSuccess=function(a,b,c){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!0,this.isCancel=!1,this.isError=!1,this.progress=100,this.index=null,this.onSuccess(a,b,c)},i.prototype._onError=function(a,b,c){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!1,this.isCancel=!1,this.isError=!0,this.progress=0,this.index=null,this.onError(a,b,c)},i.prototype._onCancel=function(a,b,c){this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!0,this.isError=!1,this.progress=0,this.index=null,this.onCancel(a,b,c)},i.prototype._onComplete=function(a,b,c){this.onComplete(a,b,c),this.removeAfterUpload&&this.remove()},i.prototype._destroy=function(){this._input&&this._input.remove(),this._form&&this._form.remove(),delete this._form,delete this._input},i.prototype._prepareToUploading=function(){this.index=this.index||++this.uploader._nextIndex,this.isReady=!0},i.prototype._replaceNode=function(a){var b=f(a.clone())(a.scope());b.prop("value",null),a.css("display","none"),a.after(b)},j.prototype.events={},j.prototype.bind=function(){for(var a in this.events){var b=this.events[a];this.element.bind(a,this[b])}},j.prototype.unbind=function(){for(var a in this.events)this.element.unbind(a,this.events[a])},j.prototype.destroy=function(){var a=this.uploader._directives[this.prop].indexOf(this);this.uploader._directives[this.prop].splice(a,1),this.unbind()},j.prototype._saveLinks=function(){for(var a in this.events){var b=this.events[a];this[b]=this[b].bind(this)}},g.inherit(k,j),k.prototype.events={$destroy:"destroy",change:"onChange"},k.prototype.prop="select",k.prototype.getOptions=function(){},k.prototype.getFilters=function(){},k.prototype.isEmptyAfterSelection=function(){return!!this.element.attr("multiple")},k.prototype.onChange=function(){var a=this.uploader.isHTML5?this.element[0].files:this.element[0],b=this.getOptions(),c=this.getFilters();this.uploader.isHTML5||this.destroy(),this.uploader.addToQueue(a,b,c),this.isEmptyAfterSelection()&&this.element.prop("value",null)},g.inherit(l,j),l.prototype.events={$destroy:"destroy",drop:"onDrop",dragover:"onDragOver",dragleave:"onDragLeave"},l.prototype.prop="drop",l.prototype.getOptions=function(){},l.prototype.getFilters=function(){},l.prototype.onDrop=function(b){var c=this._getTransfer(b);if(c){var d=this.getOptions(),e=this.getFilters();this._preventAndStop(b),a.forEach(this.uploader._directives.over,this._removeOverClass,this),this.uploader.addToQueue(c.files,d,e)}},l.prototype.onDragOver=function(b){var c=this._getTransfer(b);this._haveFiles(c.types)&&(c.dropEffect="copy",this._preventAndStop(b),a.forEach(this.uploader._directives.over,this._addOverClass,this))},l.prototype.onDragLeave=function(b){b.currentTarget===this.element[0]&&(this._preventAndStop(b),a.forEach(this.uploader._directives.over,this._removeOverClass,this))},l.prototype._getTransfer=function(a){return a.dataTransfer?a.dataTransfer:a.originalEvent.dataTransfer},l.prototype._preventAndStop=function(a){a.preventDefault(),a.stopPropagation()},l.prototype._haveFiles=function(a){return a?a.indexOf?-1!==a.indexOf("Files"):a.contains?a.contains("Files"):!1:!1},l.prototype._addOverClass=function(a){a.addOverClass()},l.prototype._removeOverClass=function(a){a.removeOverClass()},g.inherit(m,j),m.prototype.events={$destroy:"destroy"},m.prototype.prop="over",m.prototype.overClass="nv-file-over",m.prototype.addOverClass=function(){this.element.addClass(this.getOverClass())},m.prototype.removeOverClass=function(){this.element.removeClass(this.getOverClass())},m.prototype.getOverClass=function(){return this.overClass},g}]).directive("nvFileSelect",["$parse","FileUploader",function(a,b){return{link:function(c,d,e){var f=c.$eval(e.uploader);if(!(f instanceof b))throw new TypeError('"Uploader" must be an instance of FileUploader');var g=new b.FileSelect({uploader:f,element:d});g.getOptions=a(e.options).bind(g,c),g.getFilters=function(){return e.filters}}}}]).directive("nvFileDrop",["$parse","FileUploader",function(a,b){return{link:function(c,d,e){var f=c.$eval(e.uploader);if(!(f instanceof b))throw new TypeError('"Uploader" must be an instance of FileUploader');if(f.isHTML5){var g=new b.FileDrop({uploader:f,element:d});g.getOptions=a(e.options).bind(g,c),g.getFilters=function(){return e.filters}}}}}]).directive("nvFileOver",["FileUploader",function(a){return{link:function(b,c,d){var e=b.$eval(d.uploader);if(!(e instanceof a))throw new TypeError('"Uploader" must be an instance of FileUploader');var f=new a.FileOver({uploader:e,element:c});f.getOverClass=function(){return d.overClass||this.overClass}}}}]),b});
//# sourceMappingURL=angular-file-upload.min.map
/* globals define */
(function (root, factory) {
  
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.owaspPasswordStrengthTest = factory();
  }

  }(this, function () {

    var owasp = {};

    // These are configuration settings that will be used when testing password
    // strength
    owasp.configs = {
      allowPassphrases       : true,
      maxLength              : 128,
      minLength              : 10,
      minPhraseLength        : 20,
      minOptionalTestsToPass : 4,
    };

    // This method makes it more convenient to set config parameters
    owasp.config = function(params) {
      for (var prop in params) {
        if (params.hasOwnProperty(prop) && this.configs.hasOwnProperty(prop)) {
          this.configs[prop] = params[prop];
        }
      }
    };

    // This is an object containing the tests to run against all passwords.
    owasp.tests = {

      // An array of required tests. A password *must* pass these tests in order
      // to be considered strong.
      required: [

        // enforce a minimum length
        function(password) {
          if (password.length < owasp.configs.minLength) {
            return 'Пароль должен быть минимум ' + owasp.configs.minLength + ' символов.';
          }
        },

        // enforce a maximum length
        function(password) {
          if (password.length > owasp.configs.maxLength) {
            return 'Пароль не должен быть длиннее ' + owasp.configs.maxLength + ' символов.';
          }
        },

        // forbid repeating characters
        function(password) {
          if (/(.)\1{2,}/.test(password)) {
            return 'Пароль не должен содержать 3 повторяющихся символа.';
          }
        },

      ],

      // An array of optional tests. These tests are "optional" in two senses:
      //
      // 1. Passphrases (passwords whose length exceeds
      //    this.configs.minPhraseLength) are not obligated to pass these tests
      //    provided that this.configs.allowPassphrases is set to Boolean true
      //    (which it is by default).
      //
      // 2. A password need only to pass this.configs.minOptionalTestsToPass
      //    number of these optional tests in order to be considered strong.
      optional: [

        // require at least one lowercase letter
        function(password) {
          if (!/[a-z]/.test(password)) {
            return 'Пароль должен содержать хотя бы один символ нижнего регистра.';
          }
        },

        //// require at least one uppercase letter
        //function(password) {
        //  if (!/[A-Z]/.test(password)) {
        //    return 'The password must contain at least one uppercase letter.';
        //  }
        //},

        // require at least one number
        function(password) {
          if (!/[0-9]/.test(password)) {
            return 'Пароль должен содержать хотя бы одну цифру';
          }
        },

        //// require at least one special character
        //function(password) {
        //  if (!/[^A-Za-z0-9]/.test(password)) {
        //    return 'The password must contain at least one special character.';
        //  }
        //},

      ],
    };

    // This method tests password strength
    owasp.test = function(password) {

      // create an object to store the test results
      var result = {
        errors              : [],
        failedTests         : [],
        passedTests         : [],
        requiredTestErrors  : [],
        optionalTestErrors  : [],
        isPassphrase        : false,
        strong              : true,
        optionalTestsPassed : 0,
      };

      // Always submit the password/passphrase to the required tests
      var i = 0;
      this.tests.required.forEach(function(test) {
        var err = test(password);
        if (typeof err === 'string') {
          result.strong = false;
          result.errors.push(err);
          result.requiredTestErrors.push(err);
          result.failedTests.push(i);
        } else {
          result.passedTests.push(i);
        }
        i++;
      });

      // If configured to allow passphrases, and if the password is of a
      // sufficient length to consider it a passphrase, exempt it from the
      // optional tests.
      if (
        this.configs.allowPassphrases === true &&
        password.length >= this.configs.minPhraseLength
      ) {
        result.isPassphrase = true;
      }

      if (!result.isPassphrase) {
        var j = this.tests.required.length;
        this.tests.optional.forEach(function(test) {
          var err = test(password);
          if (typeof err === 'string') {
            result.errors.push(err);
            result.optionalTestErrors.push(err);
            result.failedTests.push(j);
          } else {
            result.optionalTestsPassed++;
            result.passedTests.push(j);
          }
          j++;
        });
      }

      // If the password is not a passphrase, assert that it has passed a
      // sufficient number of the optional tests, per the configuration
      if (
        !result.isPassphrase &&
        result.optionalTestsPassed < this.configs.minOptionalTestsToPass
      ) {
        result.strong = false;
      }

      // return the result
      return result;
    };

    return owasp;
  }
));

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.14.3 - 2015-10-23
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$injector",function(a,b){var c=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,d,e){function f(){d.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),c?c(d,{addClass:"in",easing:"ease",to:{height:d[0].scrollHeight+"px"}}).start()["finally"](g):a.addClass(d,"in",{to:{height:d[0].scrollHeight+"px"}}).then(g)}function g(){d.removeClass("collapsing").addClass("collapse").css({height:"auto"})}function h(){return d.hasClass("collapse")||d.hasClass("in")?(d.css({height:d[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(c?c(d,{removeClass:"in",to:{height:"0"}}).start()["finally"](i):a.removeClass(d,"in",{to:{height:"0"}}).then(i))):i()}function i(){d.css({height:"0"}),d.removeClass("collapsing").addClass("collapse")}b.$watch(e.uibCollapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.collapse").value("$collapseSuppressWarning",!1).directive("collapse",["$animate","$injector","$log","$collapseSuppressWarning",function(a,b,c,d){var e=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,f,g){function h(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start().done(i):a.animate(f,{},{height:f[0].scrollHeight+"px"}).then(i)}function i(){f.removeClass("collapsing").addClass("collapse in").css({height:"auto"})}function j(){return f.hasClass("collapse")||f.hasClass("in")?(f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse in").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(e?e(f,{to:{height:"0"}}).start().done(k):a.animate(f,{},{height:"0"}).then(k))):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse")}d||c.warn("collapse is now deprecated. Use uib-collapse instead."),b.$watch(g.collapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass,a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)}}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){return{require:["?^uibAccordionGroup","?^accordionGroup"],link:function(a,b,c,d){d=d[0]?d[0]:d[1],a.$watch(function(){return d[c.uibAccordionTransclude]},function(a){a&&(b.find("span").html(""),b.find("span").append(a))})}}}),angular.module("ui.bootstrap.accordion").value("$accordionSuppressWarning",!1).controller("AccordionController",["$scope","$attrs","$controller","$log","$accordionSuppressWarning",function(a,b,c,d,e){e||d.warn("AccordionController is now deprecated. Use UibAccordionController instead."),angular.extend(this,c("UibAccordionController",{$scope:a,$attrs:b}))}]).directive("accordion",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",controller:"AccordionController",controllerAs:"accordion",transclude:!0,replace:!1,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"},link:function(){b||a.warn("accordion is now deprecated. Use uib-accordion instead.")}}}]).directive("accordionGroup",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(c,d,e,f){b||a.warn("accordion-group is now deprecated. Use uib-accordion-group instead."),f.addGroup(c),c.openClass=e.openClass||"panel-open",c.panelClass=e.panelClass,c.$watch("isOpen",function(a){d.toggleClass(c.openClass,!!a),a&&f.closeOthers(c)}),c.toggleOpen=function(a){c.isDisabled||a&&32!==a.which||(c.isOpen=!c.isOpen)}}}}]).directive("accordionHeading",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(c,d,e,f,g){b||a.warn("accordion-heading is now deprecated. Use uib-accordion-heading instead."),f.setHeading(g(c,angular.noop))}}}]).directive("accordionTransclude",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordionGroup",link:function(c,d,e,f){b||a.warn("accordion-transclude is now deprecated. Use uib-accordion-transclude instead."),c.$watch(function(){return f[e.accordionTransclude]},function(a){a&&(d.find("span").html(""),d.find("span").append(a))})}}}]),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$interpolate","$timeout",function(a,b,c,d){a.closeable=!!b.close;var e=angular.isDefined(b.dismissOnTimeout)?c(b.dismissOnTimeout)(a.$parent):null;e&&d(function(){a.close()},parseInt(e,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.alert").value("$alertSuppressWarning",!1).controller("AlertController",["$scope","$attrs","$controller","$log","$alertSuppressWarning",function(a,b,c,d,e){e||d.warn("AlertController is now deprecated. Use UibAlertController instead."),angular.extend(this,c("UibAlertController",{$scope:a,$attrs:b}))}]).directive("alert",["$log","$alertSuppressWarning",function(a,b){return{controller:"AlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"},link:function(){b||a.warn("alert is now deprecated. Use uib-alert instead.")}}}]),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",function(){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(a,b,c,d){var e=d[0],f=d[1];b.find("input").css({display:"none"}),f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.uibBtnRadio)))},b.on(e.toggleEvent,function(){if(!c.disabled){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.uibBtnRadio)),f.$render()})}})}}}).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.buttons").value("$buttonsSuppressWarning",!1).controller("ButtonsController",["$controller","$log","$buttonsSuppressWarning",function(a,b,c){c||b.warn("ButtonsController is now deprecated. Use UibButtonsController instead."),angular.extend(this,a("UibButtonsController"))}]).directive("btnRadio",["$log","$buttonsSuppressWarning",function(a,b){return{require:["btnRadio","ngModel"],controller:"ButtonsController",controllerAs:"buttons",link:function(c,d,e,f){b||a.warn("btn-radio is now deprecated. Use uib-btn-radio instead.");var g=f[0],h=f[1];d.find("input").css({display:"none"}),h.$render=function(){d.toggleClass(g.activeClass,angular.equals(h.$modelValue,c.$eval(e.btnRadio)))},d.bind(g.toggleEvent,function(){if(!e.disabled){var a=d.hasClass(g.activeClass);(!a||angular.isDefined(e.uncheckable))&&c.$apply(function(){h.$setViewValue(a?null:c.$eval(e.btnRadio)),h.$render()})}})}}}]).directive("btnCheckbox",["$document","$log","$buttonsSuppressWarning",function(a,b,c){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",controllerAs:"button",link:function(d,e,f,g){function h(){return j(f.btnCheckboxTrue,!0)}function i(){return j(f.btnCheckboxFalse,!1)}function j(a,b){var c=d.$eval(a);return angular.isDefined(c)?c:b}c||b.warn("btn-checkbox is now deprecated. Use uib-btn-checkbox instead.");var k=g[0],l=g[1];e.find("input").css({display:"none"}),l.$render=function(){e.toggleClass(k.activeClass,angular.equals(l.$modelValue,h()))},e.bind(k.toggleEvent,function(){f.disabled||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})}),e.on("keypress",function(b){f.disabled||32!==b.which||a[0].activeElement!==e[0]||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})})}}}]),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$animate",function(a,b,c,d){function e(b,c,e){s||(angular.extend(b,{direction:e,active:!0}),angular.extend(m.currentSlide||{},{direction:e,active:!1}),d.enabled()&&!a.noTransition&&!a.$currentTransition&&b.$element&&m.slides.length>1&&(b.$element.data(q,b.direction),m.currentSlide&&m.currentSlide.$element&&m.currentSlide.$element.data(q,b.direction),a.$currentTransition=!0,o?d.on("addClass",b.$element,function(b,c){"close"===c&&(a.$currentTransition=null,d.off("addClass",b))}):b.$element.one("$animate:close",function(){a.$currentTransition=null})),m.currentSlide=b,r=c,g())}function f(a){if(angular.isUndefined(n[a].index))return n[a];var b;n.length;for(b=0;b<n.length;++b)if(n[b].index==a)return n[b]}function g(){h();var b=+a.interval;!isNaN(b)&&b>0&&(k=c(i,b))}function h(){k&&(c.cancel(k),k=null)}function i(){var b=+a.interval;l&&!isNaN(b)&&b>0&&n.length?a.next():a.pause()}function j(b){b.length||(a.$currentTransition=null)}var k,l,m=this,n=m.slides=a.slides=[],o=angular.version.minor>=4,p="uib-noTransition",q="uib-slideDirection",r=-1;m.currentSlide=null;var s=!1;m.select=a.select=function(b,c){var d=a.indexOfSlide(b);void 0===c&&(c=d>m.getCurrentIndex()?"next":"prev"),b&&b!==m.currentSlide&&!a.$currentTransition&&e(b,d,c)},a.$on("$destroy",function(){s=!0}),m.getCurrentIndex=function(){return m.currentSlide&&angular.isDefined(m.currentSlide.index)?+m.currentSlide.index:r},a.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:n.indexOf(a)},a.next=function(){var b=(m.getCurrentIndex()+1)%n.length;return 0===b&&a.noWrap()?void a.pause():m.select(f(b),"next")},a.prev=function(){var b=m.getCurrentIndex()-1<0?n.length-1:m.getCurrentIndex()-1;return a.noWrap()&&b===n.length-1?void a.pause():m.select(f(b),"prev")},a.isActive=function(a){return m.currentSlide===a},a.$watch("interval",g),a.$watchCollection("slides",j),a.$on("$destroy",h),a.play=function(){l||(l=!0,g())},a.pause=function(){a.noPause||(l=!1,h())},m.addSlide=function(b,c){b.$element=c,n.push(b),1===n.length||b.active?(m.select(n[n.length-1]),1===n.length&&a.play()):b.active=!1},m.removeSlide=function(a){angular.isDefined(a.index)&&n.sort(function(a,b){return+a.index>+b.index});var b=n.indexOf(a);n.splice(b,1),n.length>0&&a.active?b>=n.length?m.select(n[b-1]):m.select(n[b]):r>b&&r--,0===n.length&&(m.currentSlide=null)},a.$watch("noTransition",function(a){b.data(p,a)})}]).directive("uibCarousel",[function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}]).directive("uibSlide",function(){return{require:"^uibCarousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}).animation(".item",["$injector","$animate",function(a,b){function c(a,b,c){a.removeClass(b),c&&c()}var d="uib-noTransition",e="uib-slideDirection",f=null;return a.has("$animateCss")&&(f=a.get("$animateCss")),{beforeAddClass:function(a,g,h){if("active"==g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k+" "+j,h);return a.addClass(j),f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()},beforeRemoveClass:function(a,g,h){if("active"===g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k,h);return f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()}}}]),angular.module("ui.bootstrap.carousel").value("$carouselSuppressWarning",!1).controller("CarouselController",["$scope","$element","$controller","$log","$carouselSuppressWarning",function(a,b,c,d,e){e||d.warn("CarouselController is now deprecated. Use UibCarouselController instead."),angular.extend(this,c("UibCarouselController",{$scope:a,$element:b}))}]).directive("carousel",["$log","$carouselSuppressWarning",function(a,b){return{transclude:!0,replace:!0,controller:"CarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"},link:function(){b||a.warn("carousel is now deprecated. Use uib-carousel instead.")}}}]).directive("slide",["$log","$carouselSuppressWarning",function(a,b){return{require:"^carousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(c,d,e,f){b||a.warn("slide is now deprecated. Use uib-slide instead."),f.addSlide(c,d),c.$on("$destroy",function(){f.removeSlide(c)}),c.$watch("active",function(a){a&&f.select(c)})}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","orderByFilter",function(a,b,c){function d(a){var b=[],d=a.split("");return angular.forEach(g,function(c,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+c.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),b.push({index:f,apply:c.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:c(b,"index")}}function e(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var f,g,h=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){f=b.id,this.parsers={},g={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)}},MMM:{regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:b.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:b.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a}},hh:{regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a}},H:{regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a}},h:{regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a}},mm:{regex:"[0-5][0-9]",apply:function(a){this.minutes=+a}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a}},sss:{regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a}},ss:{regex:"[0-5][0-9]",apply:function(a){this.seconds=+a}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a}},a:{regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)}}}},this.init(),this.parse=function(c,g,i){if(!angular.isString(c)||!g)return c;g=b.DATETIME_FORMATS[g]||g,g=g.replace(h,"\\$&"),b.id!==f&&this.init(),this.parsers[g]||(this.parsers[g]=d(g));var j=this.parsers[g],k=j.regex,l=j.map,m=c.match(k);if(m&&m.length){var n,o;angular.isDate(i)&&!isNaN(i.getTime())?n={year:i.getFullYear(),month:i.getMonth(),date:i.getDate(),hours:i.getHours(),minutes:i.getMinutes(),seconds:i.getSeconds(),milliseconds:i.getMilliseconds()}:(i&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var p=1,q=m.length;q>p;p++){var r=l[p-1];r.apply&&r.apply.call(n,m[p])}return e(n.year,n.month,n.date)&&(angular.isDate(i)&&!isNaN(i.getTime())?(o=new Date(i),o.setFullYear(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)):o=new Date(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)),o}}}]),angular.module("ui.bootstrap.dateparser").value("$dateParserSuppressWarning",!1).service("dateParser",["$log","$dateParserSuppressWarning","uibDateParser",function(a,b,c){b||a.warn("dateParser is now deprecated. Use uibDateParser instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.position").value("$positionSuppressWarning",!1).service("$position",["$log","$positionSuppressWarning","$uibPosition",function(a,b,c){b||a.warn("$position is now deprecated. Use $uibPosition instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).value("$datepickerSuppressError",!1).constant("uibDatepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){i[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){i[d]=angular.isDefined(c)?c:b[d],a[d]=i[d],("minMode"==d&&i.modes.indexOf(a.datepickerMode)<i.modes.indexOf(i[d])||"maxMode"==d&&i.modes.indexOf(a.datepickerMode)>i.modes.indexOf(i[d]))&&(a.datepickerMode=i[d])}):(i[d]=g[d]||null,a[d]=i[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){i.element[0].focus()};a.$on("uib:datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):a.toggleMode("up"===c?1:-1)}}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/e,10)*e+1}var e;this.element=b,this.yearpickerInit=function(){e=this.yearRange,this.step={years:e}},this._refreshView=function(){for(var b,c=new Array(e),f=0,g=d(this.activeDate.getFullYear());e>f;f++)b=new Date(this.activeDate),b.setFullYear(g+f,0,1),c[f]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+f});a.title=[c[0].label,c[e-1].label].join(" - "),a.rows=this.split(c,5)},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=5:"right"===a?c+=1:"down"===a?c+=5:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*this.step.years:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+e-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/day.html"},require:["^?uibDatepicker","uibDaypicker","^?datepicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/month.html"},require:["^?uibDatepicker","uibMonthpicker","^?datepicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/year.html"},require:["^?uibDatepicker","uibYearpicker","^?datepicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0]||d[2];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}).constant("uibDatepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"template/datepicker/popup.html",datepickerTemplateUrl:"template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0,onOpenFocus:!0}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$parse","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function n(b){if(angular.isNumber(b)&&(b=new Date(b)),b){if(angular.isDate(b)&&!isNaN(b))return b;if(angular.isString(b)){var c=j.parse(b,r,a.date);return isNaN(c)?void 0:c}return void 0}return null}function o(a,b){var d=a||b;if(!c.ngRequired&&!d)return!0;if(angular.isNumber(d)&&(d=new Date(d)),d){if(angular.isDate(d)&&!isNaN(d))return!0;if(angular.isString(d)){var e=j.parse(d,r);return!isNaN(e)}return!1}return!0}function p(c){var d=A[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}function q(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}var r,s,t,u,v,w,x,y,z,A,B={},C=!1;a.watchData={},this.init=function(h){if(z=h,s=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):k.closeOnDateSelection,
t=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):k.appendToBody,u=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):k.onOpenFocus,v=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:k.datepickerPopupTemplateUrl,w=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:k.datepickerTemplateUrl,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):k.showButtonBar,k.html5Types[c.type]?(r=k.html5Types[c.type],C=!0):(r=c.datepickerPopup||c.uibDatepickerPopup||k.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||k.datepickerPopup;if(c!==r&&(r=c,z.$modelValue=null,!r))throw new Error("uibDatepickerPopup must have a date format specified.")})),!r)throw new Error("uibDatepickerPopup must have a date format specified.");if(C&&c.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");if(x=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),x.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":v}),y=angular.element(x.children()[0]),y.attr("template-url",w),C&&"month"===c.type&&(y.attr("datepicker-mode",'"month"'),y.attr("min-mode","month")),c.datepickerOptions){var l=a.$parent.$eval(c.datepickerOptions);l&&l.initDate&&(a.initDate=l.initDate,y.attr("init-date","initDate"),delete l.initDate),angular.forEach(l,function(a,b){y.attr(m(b),a)})}angular.forEach(["minMode","maxMode","minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(b){if(c[b]){var d=e(c[b]);if(a.$parent.$watch(d,function(c){a.watchData[b]=c,("minDate"===b||"maxDate"===b)&&(B[b]=new Date(c))}),y.attr(m(b),"watchData."+b),"datepickerMode"===b){var f=d.assign;a.$watch("watchData."+b,function(b,c){angular.isFunction(f)&&b!==c&&f(a.$parent,b)})}}}),c.dateDisabled&&y.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),c.showWeeks&&y.attr("show-weeks",c.showWeeks),c.customClass&&y.attr("custom-class","customClass({ date: date, mode: mode })"),C?z.$formatters.push(function(b){return a.date=b,b}):(z.$$parserName="date",z.$validators.date=o,z.$parsers.unshift(n),z.$formatters.push(function(b){return a.date=b,z.$isEmpty(b)?b:i(b,r)})),z.$viewChangeListeners.push(function(){a.date=j.parse(z.$viewValue,r,a.date)}),b.bind("keydown",q),A=d(x)(a),x.remove(),t?f.find("body").append(A):b.after(A),a.$on("$destroy",function(){a.isOpen===!0&&(g.$$phase||a.$apply(function(){a.isOpen=!1})),A.remove(),b.unbind("keydown",q),f.unbind("click",p)})},a.getText=function(b){return a[b+"Text"]||k[b+"Text"]},a.isDisabled=function(b){return"today"===b&&(b=new Date),a.watchData.minDate&&a.compare(b,B.minDate)<0||a.watchData.maxDate&&a.compare(b,B.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?i(a.date,r):null;b.val(d),z.$setViewValue(d),s&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(a.isOpen=!1,b[0].focus())},a.select=function(b){if("today"===b){var c=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(c.getFullYear(),c.getMonth(),c.getDate())):b=new Date(c.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(){a.isOpen=!1,b[0].focus()},a.$watch("isOpen",function(c){c?(a.position=t?h.offset(b):h.position(b),a.position.top=a.position.top+b.prop("offsetHeight"),l(function(){u&&a.$broadcast("uib:datepicker.focus"),f.bind("click",p)},0,!1)):f.unbind("click",p)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"}}}),angular.module("ui.bootstrap.datepicker").value("$datepickerSuppressWarning",!1).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError","$datepickerSuppressWarning",function(a,b,c,d,e,f,g,h,i){i||e.warn("DatepickerController is now deprecated. Use UibDatepickerController instead.");var j=this,k={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){j[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){j[d]=a?new Date(a):null,j.refreshView()}):j[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){j[d]=angular.isDefined(c)?c:b[d],a[d]=j[d],("minMode"==d&&j.modes.indexOf(a.datepickerMode)<j.modes.indexOf(j[d])||"maxMode"==d&&j.modes.indexOf(a.datepickerMode)>j.modes.indexOf(j[d]))&&(a.datepickerMode=j[d])}):(j[d]=g[d]||null,a[d]=j[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(k.$isEmpty(k.$modelValue)||k.$invalid)&&(j.activeDate=a,j.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===j.compare(b.date,j.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){k=a,k.$render=function(){j.render()}},this.render=function(){if(k.$viewValue){var a=new Date(k.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=k.$viewValue?new Date(k.$viewValue):null;k.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=k.$viewValue?new Date(k.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===j.minMode){var c=k.$viewValue?new Date(k.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),k.$setViewValue(c),k.$render()}else j.activeDate=b,a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=j.activeDate.getFullYear()+a*(j.step.years||0),c=j.activeDate.getMonth()+a*(j.step.months||0);j.activeDate.setFullYear(b,c,1),j.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===j.maxMode&&1===b||a.datepickerMode===j.minMode&&-1===b||(a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var l=function(){j.element[0].focus()};a.$on("uib:datepicker.focus",l),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),j.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(j.isDisabled(j.activeDate))return;a.select(j.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(j.handleKeyDown(c,b),j.refreshView()):a.toggleMode("up"===c?1:-1)}}]).directive("datepicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","^ngModel"],controller:"DatepickerController",controllerAs:"datepicker",link:function(c,d,e,f){b||a.warn("datepicker is now deprecated. Use uib-datepicker instead.");var g=f[0],h=f[1];g.init(h)}}}]).directive("daypicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^datepicker","daypicker"],controller:"UibDaypickerController",link:function(c,d,e,f){b||a.warn("daypicker is now deprecated. Use uib-daypicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("monthpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^datepicker","monthpicker"],controller:"UibMonthpickerController",link:function(c,d,e,f){b||a.warn("monthpicker is now deprecated. Use uib-monthpicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("yearpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^datepicker","yearpicker"],controller:"UibYearpickerController",link:function(c,d,e,f){b||a.warn("yearpicker is now deprecated. Use uib-yearpicker instead.");var g=f[0];angular.extend(g,f[1]),g.yearpickerInit(),g.refreshView()}}}]).directive("datepickerPopup",["$log","$datepickerSuppressWarning",function(a,b){return{require:["ngModel","datepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(c,d,e,f){b||a.warn("datepicker-popup is now deprecated. Use uib-datepicker-popup instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("datepickerPopupWrap",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"},link:function(){b||a.warn("datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.")}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b){c||(a.bind("click",d),a.bind("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind("click",d),a.unbind("keydown",e))};var d=function(a){if(c&&(!a||"disabled"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(c.focusToggleElement(),d()):c.isKeynavEnabled()&&/(38|40)/.test(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.openClass,q=angular.noop,r=c.onToggle?d(c.onToggle):angular.noop,s=!1,t=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(m=d(c.isOpen),q=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),s=angular.isDefined(c.dropdownAppendToBody),t=angular.isDefined(c.uibKeyboardNav),s&&n.dropdownMenu&&(i.find("body").append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return t},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(s&&n.dropdownMenu){var e=h.positionElements(b,n.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},m=n.dropdownMenu.hasClass("dropdown-menu-right");m?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),n.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,p).then(function(){angular.isDefined(c)&&c!==d&&r(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var t=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(t),n.dropdownMenu=t}f.close(o),n.selectedOption=null}angular.isFunction(q)&&q(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==o.getAutoClose()&&(o.isOpen=!1)});var u=a.$on("$destroy",function(){o.$destroy()});o.$on("$destroy",u)}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"AC",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibKeyboardNav",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){b.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=d.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(d.selectedOption)?d.selectedOption=d.selectedOption===b.length-1?d.selectedOption:d.selectedOption+1:d.selectedOption=0;break;case 38:angular.isNumber(d.selectedOption)?d.selectedOption=0===d.selectedOption?0:d.selectedOption-1:d.selectedOption=b.length-1}b[d.selectedOption].focus()}})}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.dropdown").value("$dropdownSuppressWarning",!1).service("dropdownService",["$log","$dropdownSuppressWarning","uibDropdownService",function(a,b,c){b||a.warn("dropdownService is now deprecated. Use uibDropdownService instead."),angular.extend(this,c)}]).controller("DropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest","$log","$dropdownSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m){m||l.warn("DropdownController is now deprecated. Use UibDropdownController instead.");var n,o,p=this,q=a.$new(),r=e.openClass,s=angular.noop,t=c.onToggle?d(c.onToggle):angular.noop,u=!1,v=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(o=d(c.isOpen),s=o.assign,a.$watch(o,function(a){q.isOpen=!!a})),u=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.uibKeyboardNav),u&&p.dropdownMenu&&(i.find("body").append(p.dropdownMenu),b.on("$destroy",function(){p.dropdownMenu.remove()}))},this.toggle=function(a){return q.isOpen=arguments.length?!!a:!q.isOpen},this.isOpen=function(){return q.isOpen},q.getToggleElement=function(){return p.toggleElement},q.getAutoClose=function(){return c.autoClose||"always"},q.getElement=function(){return b},q.isKeynavEnabled=function(){return v},q.focusDropdownEntry=function(a){var c=p.dropdownMenu?angular.element(p.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(p.selectedOption)?p.selectedOption=p.selectedOption===c.length-1?p.selectedOption:p.selectedOption+1:p.selectedOption=0;break;case 38:angular.isNumber(p.selectedOption)?p.selectedOption=0===p.selectedOption?0:p.selectedOption-1:p.selectedOption=c.length-1}c[p.selectedOption].focus()},q.getDropdownElement=function(){return p.dropdownMenu},q.focusToggleElement=function(){p.toggleElement&&p.toggleElement[0].focus()},q.$watch("isOpen",function(c,d){if(u&&p.dropdownMenu){var e=h.positionElements(b,p.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},l=p.dropdownMenu.hasClass("dropdown-menu-right");l?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),p.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,r).then(function(){angular.isDefined(c)&&c!==d&&t(a,{open:!!c})}),c)p.dropdownMenuTemplateUrl&&k(p.dropdownMenuTemplateUrl).then(function(a){n=q.$new(),j(a.trim())(n,function(a){var b=a;p.dropdownMenu.replaceWith(b),p.dropdownMenu=b})}),q.focusToggleElement(),f.open(q);else{if(p.dropdownMenuTemplateUrl){n&&n.$destroy();var m=angular.element('<ul class="dropdown-menu"></ul>');p.dropdownMenu.replaceWith(m),p.dropdownMenu=m}f.close(q),p.selectedOption=null}angular.isFunction(s)&&s(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==q.getAutoClose()&&(q.isOpen=!1)});var w=a.$on("$destroy",function(){q.$destroy()});q.$on("$destroy",w)}]).directive("dropdown",["$log","$dropdownSuppressWarning",function(a,b){return{controller:"DropdownController",link:function(c,d,e,f){b||a.warn("dropdown is now deprecated. Use uib-dropdown instead."),f.init()}}}]).directive("dropdownMenu",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"AC",require:"?^dropdown",link:function(c,d,e,f){if(f&&!angular.isDefined(e.dropdownNested)){b||a.warn("dropdown-menu is now deprecated. Use uib-dropdown-menu instead."),d.addClass("dropdown-menu");var g=e.templateUrl;g&&(f.dropdownMenuTemplateUrl=g),f.dropdownMenu||(f.dropdownMenu=d)}}}}]).directive("keyboardNav",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"A",require:"?^dropdown",link:function(c,d,e,f){b||a.warn("keyboard-nav is now deprecated. Use uib-keyboard-nav instead."),d.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=f.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(f.selectedOption)?f.selectedOption=f.selectedOption===b.length-1?f.selectedOption:f.selectedOption+1:f.selectedOption=0;break;case 38:angular.isNumber(f.selectedOption)?f.selectedOption=0===f.selectedOption?0:f.selectedOption-1:f.selectedOption=b.length-1}b[f.selectedOption].focus()}})}}}]).directive("dropdownToggle",["$log","$dropdownSuppressWarning",function(a,b){return{require:"?^dropdown",link:function(c,d,e,f){if(b||a.warn("dropdown-toggle is now deprecated. Use uib-dropdown-toggle instead."),f){d.addClass("dropdown-toggle"),f.toggleElement=d;var g=function(a){a.preventDefault(),d.hasClass("disabled")||e.disabled||c.$apply(function(){f.toggle()})};d.bind("click",g),d.attr({"aria-haspopup":!0,"aria-expanded":!1}),c.$watch(f.isOpen,function(a){d.attr("aria-expanded",!!a)}),c.$on("$destroy",function(){d.unbind("click",g)})}}}}]),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,f){d.addClass("modal-backdrop"),f.modalInClass&&(e?e(d,{addClass:f.modalInClass}).start():a.addClass(d,f.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var g=c();e?e(d,{removeClass:f.modalInClass}).start().then(g):a.removeClass(d,f.modalInClass).then(g)}))}var e=null;return b.has("$animateCss")&&(e=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animate","$injector",function(a,b,c,d){var e=null;return d.has("$animateCss")&&(e=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),d.size=g.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",d.close),d.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"==a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=e?e(f,{addClass:g.modalInClass}).start():c.addClass(f,g.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();e?e(f,{removeClass:g.modalInClass}).start().then(d):c.removeClass(f,g.modalInClass).then(d)})),b.when(h).then(function(){var a=f[0].querySelector("[autofocus]");a?a.focus():f[0].focus()});var i=a.getTop();i&&a.modalRendered(i.key)})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap",function(a,b,c,d,e,f,g,h,i){function j(){for(var a=-1,b=u.keys(),c=0;c<b.length;c++)u.get(b[c]).value.backdrop&&(a=c);return a}function k(a,b){var d=c.find("body").eq(0),e=u.get(a).value;u.remove(a),n(e.modalDomEl,e.modalScope,function(){var b=e.openedClass||t;v.remove(b,a),d.toggleClass(b,v.hasKey(b)),l(!0)}),m(),b&&b.focus?b.focus():d.focus()}function l(a){var b;u.length()>0&&(b=u.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function m(){if(q&&-1==j()){var a=r;n(q,r,function(){a=null}),q=void 0,r=void 0}}function n(b,c,d){function e(){e.done||(e.done=!0,p?p(b,{event:"leave"}).start().then(function(){b.remove()}):a.leave(b),c.$destroy(),d&&d())}var g,h=null,i=function(){return g||(g=f.defer(),h=g.promise),function(){g.resolve()}};return c.$broadcast(w.NOW_CLOSING_EVENT,i),f.when(h).then(e)}function o(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var p=null;g.has("$animateCss")&&(p=g.get("$animateCss"));var q,r,s,t="modal-open",u=i.createNew(),v=h.createNew(),w={NOW_CLOSING_EVENT:"modal.stack.now-closing"},x=0,y="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(j,function(a){r&&(r.index=a)}),c.bind("keydown",function(a){if(a.isDefaultPrevented())return a;var b=u.top();if(b&&b.value.keyboard)switch(a.which){case 27:a.preventDefault(),e.$apply(function(){w.dismiss(b.key,"escape key press")});break;case 9:w.loadFocusElementList(b);var c=!1;a.shiftKey?w.isFocusInFirstItem(a)&&(c=w.focusLastFocusableElement()):w.isFocusInLastItem(a)&&(c=w.focusFirstFocusableElement()),c&&(a.preventDefault(),a.stopPropagation())}}),w.open=function(a,b){var f=c[0].activeElement,g=b.openedClass||t;l(!1),u.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard,openedClass:b.openedClass,windowTopClass:b.windowTopClass}),v.put(g,a);var h=c.find("body").eq(0),i=j();if(i>=0&&!q){r=e.$new(!0),r.index=i;var k=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');k.attr("backdrop-class",b.backdropClass),b.animation&&k.attr("modal-animation","true"),q=d(k)(r),h.append(q)}var m=angular.element('<div uib-modal-window="modal-window"></div>');m.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,"window-top-class":b.windowTopClass,size:b.size,index:u.length()-1,animate:"animate"}).html(b.content),b.animation&&m.attr("modal-animation","true");var n=d(m)(b.scope);u.top().value.modalDomEl=n,u.top().value.modalOpener=f,h.append(n),h.addClass(g),w.clearFocusListCache()},w.close=function(a,b){var c=u.get(a);return c&&o(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),k(a,c.value.modalOpener),!0):!c},w.dismiss=function(a,b){var c=u.get(a);return c&&o(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),k(a,c.value.modalOpener),!0):!c},w.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},w.getTop=function(){return u.top()},w.modalRendered=function(a){var b=u.get(a);b&&b.value.renderDeferred.resolve()},w.focusFirstFocusableElement=function(){return s.length>0?(s[0].focus(),!0):!1},w.focusLastFocusableElement=function(){return s.length>0?(s[s.length-1].focus(),!0):!1},w.isFocusInFirstItem=function(a){return s.length>0?(a.target||a.srcElement)==s[0]:!1},w.isFocusInLastItem=function(a){return s.length>0?(a.target||a.srcElement)==s[s.length-1]:!1},w.clearFocusListCache=function(){s=[],x=0},w.loadFocusElementList=function(a){if((void 0===s||!s.length)&&a){var b=a.value.modalDomEl;b&&b.length&&(s=b[0].querySelectorAll(y))}},w}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$uibModalStack","$modalSuppressWarning","$log",function(b,c,d,e,f,g,h,i){function j(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function k(a){var c=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?c.push(d.when(b.invoke(a))):angular.isString(a)?c.push(d.when(b.get(a))):c.push(d.when(a))}),c}var l={},m=null;return l.getPromiseChain=function(){return m},l.open=function(b){function e(){return r}var l=d.defer(),n=d.defer(),o=d.defer(),p={result:l.promise,opened:n.promise,rendered:o.promise,close:function(a){return g.close(p,a)},dismiss:function(a){return g.dismiss(p,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var q,r=d.all([j(b)].concat(k(b.resolve)));return q=m=d.all([m]).then(e,e).then(function(a){var d=(b.scope||c).$new();d.$close=p.close,d.$dismiss=p.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var e,j={},k=1;b.controller&&(j.$scope=d,j.$uibModalInstance=p,Object.defineProperty(j,"$modalInstance",{get:function(){return h||i.warn("$modalInstance is now deprecated. Use $uibModalInstance instead."),p}}),angular.forEach(b.resolve,function(b,c){j[c]=a[k++]}),e=f(b.controller,j),b.controllerAs&&(b.bindToController&&angular.extend(e,d),d[b.controllerAs]=e)),g.open(p,{scope:d,deferred:l,renderDeferred:o,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowTopClass:b.windowTopClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size,openedClass:b.openedClass}),n.resolve(!0)},function(a){n.reject(a),l.reject(a)})["finally"](function(){m===q&&(m=null)}),p},l}]};return a}),angular.module("ui.bootstrap.modal").value("$modalSuppressWarning",!1).directive("modalBackdrop",["$animate","$injector","$modalStack","$log","$modalSuppressWarning",function(a,b,c,d,e){function f(b,f,h){e||d.warn("modal-backdrop is now deprecated. Use uib-modal-backdrop instead."),f.addClass("modal-backdrop"),h.modalInClass&&(g?g(f,{addClass:h.modalInClass}).start():a.addClass(f,h.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var d=c();g?g(f,{removeClass:h.modalInClass}).start().then(d):a.removeClass(f,h.modalInClass).then(d)}))}var g=null;return b.has("$animateCss")&&(g=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),f}}}]).directive("modalWindow",["$modalStack","$q","$animate","$injector","$log","$modalSuppressWarning",function(a,b,c,d,e,f){var g=null;return d.has("$animateCss")&&(g=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,h,i){f||e.warn("modal-window is now deprecated. Use uib-modal-window instead."),h.addClass(i.windowClass||""),h.addClass(i.windowTopClass||""),d.size=i.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},h.on("click",d.close),d.$isRendered=!0;var j=b.defer();i.$observe("modalRender",function(a){"true"==a&&j.resolve()}),j.promise.then(function(){var e=null;i.modalInClass&&(e=g?g(h,{addClass:i.modalInClass}).start():c.addClass(h,i.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();g?g(h,{removeClass:i.modalInClass}).start().then(d):c.removeClass(h,i.modalInClass).then(d)})),b.when(e).then(function(){var a=h[0].querySelector("[autofocus]");a?a.focus():h[0].focus()});var f=a.getTop();f&&a.modalRendered(f.key)})}}}]).directive("modalAnimationClass",["$log","$modalSuppressWarning",function(a,b){return{compile:function(c,d){b||a.warn("modal-animation-class is now deprecated. Use uib-modal-animation-class instead."),d.modalAnimation&&c.addClass(d.modalAnimationClass)}}}]).directive("modalTransclude",["$log","$modalSuppressWarning",function(a,b){return{link:function(c,d,e,f,g){b||a.warn("modal-transclude is now deprecated. Use uib-modal-transclude instead."),g(c.$parent,function(a){d.empty(),d.append(a)})}}}]).service("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap","$uibModalStack","$log","$modalSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l){l||k.warn("$modalStack is now deprecated. Use $uibModalStack instead."),angular.extend(this,j)}]).provider("$modal",["$uibModalProvider",function(a){angular.extend(this,a),this.$get=["$injector","$log","$modalSuppressWarning",function(b,c,d){return d||c.warn("$modal is now deprecated. Use $uibModal instead."),b.invoke(a.$get)}]}]),angular.module("ui.bootstrap.pagination",[]).controller("UibPaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),
a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.pagination").value("$paginationSuppressWarning",!1).controller("PaginationController",["$scope","$attrs","$parse","$log","$paginationSuppressWarning",function(a,b,c,d,e){e||d.warn("PaginationController is now deprecated. Use UibPaginationController instead.");var f=this,g={$setViewValue:angular.noop},h=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(d,e){g=d,this.config=e,g.$render=function(){f.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){f.itemsPerPage=parseInt(b,10),a.totalPages=f.calculateTotalPages()}):this.itemsPerPage=e.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=f.calculateTotalPages()}),a.$watch("totalPages",function(b){h(a.$parent,b),a.page>b?a.selectPage(b):g.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(g.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),g.$setViewValue(b),g.$render())},a.getText=function(b){return a[b+"Text"]||f.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).directive("pagination",["$parse","uibPaginationConfig","$log","$paginationSuppressWarning",function(a,b,c,d){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["pagination","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(e,f,g,h){function i(a,b,c){return{number:a,text:b,active:c}}function j(a,b){var c=[],d=1,e=b,f=angular.isDefined(m)&&b>m;f&&(n?(d=Math.max(a-Math.floor(m/2),1),e=d+m-1,e>b&&(e=b,d=e-m+1)):(d=(Math.ceil(a/m)-1)*m+1,e=Math.min(d+m-1,b)));for(var g=d;e>=g;g++){var h=i(g,g,g===a);c.push(h)}if(f&&!n){if(d>1){var j=i(d-1,"...",!1);c.unshift(j)}if(b>e){var k=i(e+1,"...",!1);c.push(k)}}return c}d||c.warn("pagination is now deprecated. Use uib-pagination instead.");var k=h[0],l=h[1];if(l){var m=angular.isDefined(g.maxSize)?e.$parent.$eval(g.maxSize):b.maxSize,n=angular.isDefined(g.rotate)?e.$parent.$eval(g.rotate):b.rotate;e.boundaryLinks=angular.isDefined(g.boundaryLinks)?e.$parent.$eval(g.boundaryLinks):b.boundaryLinks,e.directionLinks=angular.isDefined(g.directionLinks)?e.$parent.$eval(g.directionLinks):b.directionLinks,k.init(l,b),g.maxSize&&e.$parent.$watch(a(g.maxSize),function(a){m=parseInt(a,10),k.render()});var o=k.render;k.render=function(){o(),e.page>0&&e.page<=e.totalPages&&(e.pages=j(e.page,e.totalPages))}}}}}]).directive("pager",["uibPagerConfig","$log","$paginationSuppressWarning",function(a,b,c){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["pager","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(d,e,f,g){c||b.warn("pager is now deprecated. Use uib-pager instead.");var h=g[0],i=g[1];i&&(d.align=angular.isDefined(f.align)?d.$parent.$eval(f.align):a.align,h.init(i,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){var n=m.createNew();return h.on("keypress",function(a){if(27===a.which){var b=n.top();b&&(b.value.close(),n.removeTop(),b=null)}}),function(e,k,m,o){function p(a){var b=(a||o.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}o=angular.extend({},b,d,o);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup title="'+r+"title"+s+'" '+(o.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block; top: -9999px; left: -9999px;"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){L.isOpen?q():m()}function m(){(!K||a.$eval(d[k+"Enable"]))&&(u(),x(),L.popupDelay?F||(F=g(r,L.popupDelay,!1)):r())}function q(){s(),L.popupCloseDelay?G||(G=g(t,L.popupCloseDelay,!1)):t()}function r(){return s(),u(),L.content?(v(),void L.$evalAsync(function(){L.isOpen=!0,y(!0),Q()})):angular.noop}function s(){F&&(g.cancel(F),F=null),H&&(g.cancel(H),H=null)}function t(){s(),u(),L&&L.$evalAsync(function(){L.isOpen=!1,y(!1),L.animation?E||(E=g(w,150,!1)):w()})}function u(){G&&(g.cancel(G),G=null),E&&(g.cancel(E),E=null)}function v(){C||(D=L.$new(),C=c(D,function(a){I?h.find("body").append(a):b.after(a)}),z())}function w(){A(),E=null,C&&(C.remove(),C=null),D&&(D.$destroy(),D=null)}function x(){L.title=d[k+"Title"],O?L.content=O(a):L.content=d[e],L.popupClass=d[k+"Class"],L.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:o.placement;var b=parseInt(d[k+"PopupDelay"],10),c=parseInt(d[k+"PopupCloseDelay"],10);L.popupDelay=isNaN(b)?o.popupDelay:b,L.popupCloseDelay=isNaN(c)?o.popupCloseDelay:c}function y(b){N&&angular.isFunction(N.assign)&&N.assign(a,b)}function z(){P.length=0,O?(P.push(a.$watch(O,function(a){L.content=a,!a&&L.isOpen&&t()})),P.push(D.$watch(function(){M||(M=!0,D.$$postDigest(function(){M=!1,L&&L.isOpen&&Q()}))}))):P.push(d.$observe(e,function(a){L.content=a,!a&&L.isOpen?t():Q()})),P.push(d.$observe(k+"Title",function(a){L.title=a,L.isOpen&&Q()})),P.push(d.$observe(k+"Placement",function(a){L.placement=a?a:o.placement,L.isOpen&&Q()}))}function A(){P.length&&(angular.forEach(P,function(a){a()}),P.length=0)}function B(){var a=d[k+"Trigger"];R(),J=p(a),"none"!==J.show&&J.show.forEach(function(a,c){a===J.hide[c]?b[0].addEventListener(a,j):a&&(b[0].addEventListener(a,m),J.hide[c].split(" ").forEach(function(a){b[0].addEventListener(a,q)})),b.on("keypress",function(a){27===a.which&&q()})})}var C,D,E,F,G,H,I=angular.isDefined(o.appendToBody)?o.appendToBody:!1,J=p(void 0),K=angular.isDefined(d[k+"Enable"]),L=a.$new(!0),M=!1,N=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,O=o.useContentExp?l(d[e]):!1,P=[],Q=function(){C&&C.html()&&(H||(H=g(function(){C.css({top:0,left:0});var a=i.positionElements(b,C,L.placement,I);a.top+="px",a.left+="px",a.visibility="visible",C.css(a),H=null},0,!1)))};L.origScope=a,L.isOpen=!1,n.add(L,{close:t}),L.contentExp=function(){return L.content},d.$observe("disabled",function(a){a&&s(),a&&L.isOpen&&t()}),N&&a.$watch(N,function(a){L&&!a===L.isOpen&&j()});var R=function(){J.show.forEach(function(a){b.unbind(a,m)}),J.hide.forEach(function(a){a.split(" ").forEach(function(a){b[0].removeEventListener(a,q)})})};B();var S=a.$eval(d[k+"Animation"]);L.animation=angular.isDefined(S)?!!S:o.animation;var T=a.$eval(d[k+"AppendToBody"]);I=angular.isDefined(T)?T:I,I&&a.$on("$locationChangeSuccess",function(){L.isOpen&&t()}),a.$on("$destroy",function(){s(),u(),R(),w(),n.remove(L),L=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",function(){return{restrict:"A",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.tooltip").value("$tooltipSuppressWarning",!1).provider("$tooltip",["$uibTooltipProvider",function(a){angular.extend(this,a),this.$get=["$log","$tooltipSuppressWarning","$injector",function(b,c,d){return c||b.warn("$tooltip is now deprecated. Use $uibTooltip instead."),d.invoke(a.$get)}]}]).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest","$log","$tooltipSuppressWarning",function(a,b,c,d,e,f){return{link:function(g,h,i){f||e.warn("tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.");var j,k,l,m=g.$eval(i.tooltipTemplateTranscludeScope),n=0,o=function(){k&&(k.remove(),k=null),j&&(j.$destroy(),j=null),l&&(a.leave(l).then(function(){k=null}),k=l,l=null)};g.$watch(b.parseAsResourceUrl(i.tooltipTemplateTransclude),function(b){var e=++n;b?(d(b,!0).then(function(d){if(e===n){var f=m.$new(),g=d,i=c(g)(f,function(b){o(),a.enter(b,h)});j=f,l=i,j.$emit("$includeContentLoaded",b)}},function(){e===n&&(o(),g.$emit("$includeContentError",b))}),g.$emit("$includeContentRequested",b)):o()}),g.$on("$destroy",o)}}}]).directive("tooltipClasses",["$log","$tooltipSuppressWarning",function(a,b){return{restrict:"A",link:function(c,d,e){b||a.warn("tooltip-classes is now deprecated. Use uib-tooltip-classes instead."),c.placement&&d.addClass(c.placement),c.popupClass&&d.addClass(c.popupClass),c.animation()&&d.addClass(e.tooltipAnimationClass)}}}]).directive("tooltipPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(c,d){b||a.warn("tooltip-popup is now deprecated. Use uib-tooltip-popup instead."),d.addClass("tooltip")}}}]).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(c,d){b||a.warn("tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipTemplate",["$tooltip",function(a){return a("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(c,d){b||a.warn("tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipHtml",["$tooltip",function(a){return a("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.popover").value("$popoverSuppressWarning",!1).directive("popoverTemplatePopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(c,d){b||a.warn("popover-template-popup is now deprecated. Use uib-popover-template-popup instead."),d.addClass("popover")}}}]).directive("popoverTemplate",["$tooltip",function(a){return a("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(c,d){b||a.warn("popover-html-popup is now deprecated. Use uib-popover-html-popup instead."),d.addClass("popover")}}}]).directive("popoverHtml",["$tooltip",function(a){return a("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(c,d){b||a.warn("popover-popup is now deprecated. Use uib-popover-popup instead."),d.addClass("popover")}}}]).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,f){e||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=f&&angular.isDefined(f.title)?f.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){var a=d.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("max",function(b){d.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{max:"=?"},templateUrl:"template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.progressbar").value("$progressSuppressWarning",!1).controller("ProgressController",["$scope","$attrs","uibProgressConfig","$log","$progressSuppressWarning",function(a,b,c,d,e){e||d.warn("ProgressController is now deprecated. Use UibProgressController instead.");var f=this,g=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,d){g||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=d&&angular.isDefined(d.title)?d.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){b.percent=+(100*b.value/b.max).toFixed(2);var a=f.bars.reduce(function(a,b){return a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,f.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)},a.$watch("max",function(b){f.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("progress",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{max:"=?",title:"@?"},templateUrl:"template/progressbar/progress.html",link:function(){b||a.warn("progress is now deprecated. Use uib-progress instead.")}}}]).directive("bar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(c,d,e,f){b||a.warn("bar is now deprecated. Use uib-bar instead."),f.addBar(c,d)}}}]).directive("progressbar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(c,d,e,f){b||a.warn("progressbar is now deprecated. Use uib-progressbar instead."),f.addBar(c,angular.element(d.children()[0]),{title:e.title})}}}]),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(d.$viewValue===b?0:b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.rating").value("$ratingSuppressWarning",!1).controller("RatingController",["$scope","$attrs","$controller","$log","$ratingSuppressWarning",function(a,b,c,d,e){e||d.warn("RatingController is now deprecated. Use UibRatingController instead."),angular.extend(this,c("UibRatingController",{$scope:a,$attrs:b}))}]).directive("rating",["$log","$ratingSuppressWarning",function(a,b){return{require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(c,d,e,f){b||a.warn("rating is now deprecated. Use uib-rating instead.");var g=f[0],h=f[1];g.init(h)}}}]),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect(),a.selectCalled=!1)}),a.active=!0,a.selectCalled||(a.onSelect(),a.selectCalled=!0)},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("uibTabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"UibTabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(b,c,d,e,f){b.$watch("active",function(a){a&&e.select(b)}),b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:["?^uibTab","?^tab"],link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase()||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:["?^uibTabset","?^tabset"],link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.tabs").value("$tabsSuppressWarning",!1).controller("TabsetController",["$scope","$controller","$log","$tabsSuppressWarning",function(a,b,c,d){d||c.warn("TabsetController is now deprecated. Use UibTabsetController instead."),angular.extend(this,b("UibTabsetController",{$scope:a}))}]).directive("tabset",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(c,d,e){b||a.warn("tabset is now deprecated. Use uib-tabset instead."),c.vertical=angular.isDefined(e.vertical)?c.$parent.$eval(e.vertical):!1,c.justified=angular.isDefined(e.justified)?c.$parent.$eval(e.justified):!1}}}]).directive("tab",["$parse","$log","$tabsSuppressWarning",function(a,b,c){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(d,e,f,g,h){c||b.warn("tab is now deprecated. Use uib-tab instead."),d.$watch("active",function(a){a&&g.select(d)}),d.disabled=!1,f.disable&&d.$parent.$watch(a(f.disable),function(a){d.disabled=!!a}),d.select=function(){d.disabled||(d.active=!0)},g.addTab(d),d.$on("$destroy",function(){g.removeTab(d)}),d.$transcludeFn=h}}}]).directive("tabHeadingTransclude",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"A",require:"^tab",link:function(c,d){b||a.warn("tab-heading-transclude is now deprecated. Use uib-tab-heading-transclude instead."),c.$watch("headingElement",function(a){a&&(d.html(""),d.append(a))})}}}]).directive("tabContentTransclude",["$log","$tabsSuppressWarning",function(a,b){function c(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(d,e,f){b||a.warn("tab-content-transclude is now deprecated. Use uib-tab-content-transclude instead.");var g=d.$eval(f.tabContentTransclude);g.$transcludeFn(g.$parent,function(a){angular.forEach(a,function(a){c(a)?g.headingElement=a:e.append(a)})})}}}]),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===r[1]&&(b+=12)),b):void 0}function i(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function j(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a.toString()}function k(a){l(),q.$setViewValue(new Date(p)),m(a)}function l(){q.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function m(b){var c=p.getHours(),d=p.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:j(c),"m"!==b&&(a.minutes=j(d)),a.meridian=p.getHours()<12?r[0]:r[1]}function n(a,b){var c=new Date(a.getTime()+6e4*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes()),d}function o(a){p=n(p,a),k()}var p=new Date,q={$setViewValue:angular.noop},r=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){q=b,q.$render=this.render,q.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;h&&this.setupMousewheelEvents(e,f);var i=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;i&&this.setupArrowkeyEvents(e,f),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f)};var s=g.hourStep;c.hourStep&&a.$parent.$watch(d(c.hourStep),function(a){s=parseInt(a,10)});var t=g.minuteStep;c.minuteStep&&a.$parent.$watch(d(c.minuteStep),function(a){t=parseInt(a,10)});var u;a.$parent.$watch(d(c.min),function(a){var b=new Date(a);u=isNaN(b)?void 0:b});var v;a.$parent.$watch(d(c.max),function(a){var b=new Date(a);v=isNaN(b)?void 0:b}),a.noIncrementHours=function(){var a=n(p,60*s);return a>v||p>a&&u>a},a.noDecrementHours=function(){var a=n(p,60*-s);return u>a||a>p&&a>v},a.noIncrementMinutes=function(){var a=n(p,t);return a>v||p>a&&u>a},a.noDecrementMinutes=function(){var a=n(p,-t);return u>a||a>p&&a>v},a.noToggleMeridian=function(){return p.getHours()<13?n(p,720)>v:n(p,-720)<u},a.showMeridian=g.showMeridian,c.showMeridian&&a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,q.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(p.setHours(c),k())}else m()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),
a.decrementHours(),a.$apply())}),c.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){q.$setViewValue(null),q.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=h(),b=i();angular.isDefined(a)&&angular.isDefined(b)?(p.setHours(a),u>p||p>v?d(!0):k("h")):d(!0)},b.bind("blur",function(b){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=j(a.hours)})}),a.updateMinutes=function(){var a=i(),b=h();angular.isDefined(a)&&angular.isDefined(b)?(p.setMinutes(a),u>p||p>v?d(void 0,!0):k("m")):d(void 0,!0)},c.bind("blur",function(b){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=j(a.minutes)})})},this.render=function(){var b=q.$viewValue;isNaN(b)?(q.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(p=b),u>p||p>v?(q.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):l(),m())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*s)},a.decrementHours=function(){a.noDecrementHours()||o(60*-s)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(t)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(-t)},a.toggleMeridian=function(){a.noToggleMeridian()||o(720*(p.getHours()<12?1:-1))}}]).directive("uibTimepicker",function(){return{restrict:"EA",require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.timepicker").value("$timepickerSuppressWarning",!1).controller("TimepickerController",["$scope","$element","$attrs","$controller","$log","$timepickerSuppressWarning",function(a,b,c,d,e,f){f||e.warn("TimepickerController is now deprecated. Use UibTimepickerController instead."),angular.extend(this,d("UibTimepickerController",{$scope:a,$element:b,$attrs:c}))}]).directive("timepicker",["$log","$timepickerSuppressWarning",function(a,b){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(c,d,e,f){b||a.warn("timepicker is now deprecated. Use uib-timepicker instead.");var g=f[0],h=f[1];h&&g.init(h,d.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(){K.moveInProgress||(K.moveInProgress=!0,K.$digest()),S&&g.cancel(S),S=g(function(){K.matches.length&&n(),K.moveInProgress=!1},r)}function n(){K.position=C?k.offset(b):k.position(b),K.position.top+=b.prop("offsetHeight")}var o,p,q=[9,13,27,38,40],r=200,s=a.$eval(c.typeaheadMinLength);s||0===s||(s=1);var t,u,v=a.$eval(c.typeaheadWaitMs)||0,w=a.$eval(c.typeaheadEditable)!==!1,x=e(c.typeaheadLoading).assign||angular.noop,y=e(c.typeaheadOnSelect),z=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,A=e(c.typeaheadNoResults).assign||angular.noop,B=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,C=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,D=c.typeaheadAppendToElementId||!1,E=a.$eval(c.typeaheadFocusFirst)!==!1,F=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,G=e(c.ngModel),H=e(c.ngModel+"($$$p)"),I=function(b,c){return angular.isFunction(G(a))&&p&&p.$options&&p.$options.getterSetter?H(b,{$$$p:c}):G.assign(b,c)},J=l.parse(c.uibTypeahead),K=a.$new(),L=a.$on("$destroy",function(){K.$destroy()});K.$on("$destroy",L);var M="typeahead-"+K.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":M});var N=angular.element("<div uib-typeahead-popup></div>");N.attr({id:M,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(c.typeaheadTemplateUrl)&&N.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&N.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var O=function(){K.matches=[],K.activeIdx=-1,b.attr("aria-expanded",!1)},P=function(a){return M+"-option-"+a};K.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",P(a))});var Q=function(a,b){return K.matches.length>b&&a?a.toUpperCase()===K.matches[b].label.toUpperCase():!1},R=function(c){var d={$viewValue:c};x(a,!0),A(a,!1),f.when(J.source(a,d)).then(function(e){var f=c===o.$viewValue;if(f&&t)if(e&&e.length>0){K.activeIdx=E?0:-1,A(a,!1),K.matches.length=0;for(var g=0;g<e.length;g++)d[J.itemName]=e[g],K.matches.push({id:P(g),label:J.viewMapper(K,d),model:e[g]});K.query=c,n(),b.attr("aria-expanded",!0),F&&1===K.matches.length&&Q(c,0)&&K.select(0)}else O(),A(a,!0);f&&x(a,!1)},function(){O(),x(a,!1),A(a,!0)})};C&&(angular.element(i).bind("resize",m),h.find("body").bind("scroll",m));var S;K.moveInProgress=!1,K.query=void 0;var T,U=function(a){T=g(function(){R(a)},v)},V=function(){T&&g.cancel(T)};O(),K.select=function(d){var e,f,h={};u=!0,h[J.itemName]=f=K.matches[d].model,e=J.modelMapper(a,h),I(a,e),o.$setValidity("editable",!0),o.$setValidity("parse",!0),y(a,{$item:f,$model:e,$label:J.viewMapper(a,h)}),O(),K.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.bind("keydown",function(a){if(0!==K.matches.length&&-1!==q.indexOf(a.which)){if(-1===K.activeIdx&&(9===a.which||13===a.which))return O(),void K.$digest();a.preventDefault(),40===a.which?(K.activeIdx=(K.activeIdx+1)%K.matches.length,K.$digest()):38===a.which?(K.activeIdx=(K.activeIdx>0?K.activeIdx:K.matches.length)-1,K.$digest()):13===a.which||9===a.which?K.$apply(function(){K.select(K.activeIdx)}):27===a.which&&(a.stopPropagation(),O(),K.$digest())}}),b.bind("blur",function(){z&&K.matches.length&&-1!==K.activeIdx&&!u&&(u=!0,K.$apply(function(){K.select(K.activeIdx)})),t=!1,u=!1});var W=function(a){b[0]!==a.target&&3!==a.which&&0!==K.matches.length&&(O(),j.$$phase||K.$digest())};h.bind("click",W),a.$on("$destroy",function(){h.unbind("click",W),(C||D)&&X.remove(),C&&(angular.element(i).unbind("resize",m),h.find("body").unbind("scroll",m)),N.remove()});var X=d(N)(K);C?h.find("body").append(X):D!==!1?angular.element(h[0].getElementById(D)).append(X):b.after(X),this.init=function(b,c){o=b,p=c,o.$parsers.unshift(function(b){return t=!0,0===s||b&&b.length>=s?v>0?(V(),U(b)):R(b):(x(a,!1),V(),O()),w?b:b?void o.$setValidity("editable",!1):(o.$setValidity("editable",!0),null)}),o.$formatters.push(function(b){var c,d,e={};return w||o.$setValidity("editable",!0),B?(e.$model=b,B(a,e)):(e[J.itemName]=b,c=J.viewMapper(a,e),e[J.itemName]=void 0,d=J.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",function(){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"template/typeahead/typeahead-match.html";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("ui.bootstrap.typeahead").value("$typeaheadSuppressWarning",!1).service("typeaheadParser",["$parse","uibTypeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d){return d||c.warn("typeaheadParser is now deprecated. Use uibTypeaheadParser instead."),b}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","typeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k){var l=[9,13,27,38,40],m=200;return{require:["ngModel","^?ngModelOptions"],link:function(n,o,p,q){function r(){N.moveInProgress||(N.moveInProgress=!0,N.$digest()),V&&d.cancel(V),V=d(function(){N.matches.length&&s(),N.moveInProgress=!1},m)}function s(){N.position=F?h.offset(o):h.position(o),N.position.top+=o.prop("offsetHeight")}k||j.warn("typeahead is now deprecated. Use uib-typeahead instead.");var t=q[0],u=q[1],v=n.$eval(p.typeaheadMinLength);v||0===v||(v=1);var w,x,y=n.$eval(p.typeaheadWaitMs)||0,z=n.$eval(p.typeaheadEditable)!==!1,A=b(p.typeaheadLoading).assign||angular.noop,B=b(p.typeaheadOnSelect),C=angular.isDefined(p.typeaheadSelectOnBlur)?n.$eval(p.typeaheadSelectOnBlur):!1,D=b(p.typeaheadNoResults).assign||angular.noop,E=p.typeaheadInputFormatter?b(p.typeaheadInputFormatter):void 0,F=p.typeaheadAppendToBody?n.$eval(p.typeaheadAppendToBody):!1,G=p.typeaheadAppendToElementId||!1,H=n.$eval(p.typeaheadFocusFirst)!==!1,I=p.typeaheadSelectOnExact?n.$eval(p.typeaheadSelectOnExact):!1,J=b(p.ngModel),K=b(p.ngModel+"($$$p)"),L=function(a,b){return angular.isFunction(J(n))&&u&&u.$options&&u.$options.getterSetter?K(a,{$$$p:b}):J.assign(a,b)},M=i.parse(p.typeahead),N=n.$new(),O=n.$on("$destroy",function(){N.$destroy()});N.$on("$destroy",O);var P="typeahead-"+N.$id+"-"+Math.floor(1e4*Math.random());o.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":P});var Q=angular.element("<div typeahead-popup></div>");Q.attr({id:P,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(p.typeaheadTemplateUrl)&&Q.attr("template-url",p.typeaheadTemplateUrl),angular.isDefined(p.typeaheadPopupTemplateUrl)&&Q.attr("popup-template-url",p.typeaheadPopupTemplateUrl);var R=function(){N.matches=[],N.activeIdx=-1,o.attr("aria-expanded",!1)},S=function(a){return P+"-option-"+a};N.$watch("activeIdx",function(a){0>a?o.removeAttr("aria-activedescendant"):o.attr("aria-activedescendant",S(a))});var T=function(a,b){return N.matches.length>b&&a?a.toUpperCase()===N.matches[b].label.toUpperCase():!1},U=function(a){var b={$viewValue:a};A(n,!0),D(n,!1),c.when(M.source(n,b)).then(function(c){var d=a===t.$viewValue;if(d&&w)if(c&&c.length>0){N.activeIdx=H?0:-1,D(n,!1),N.matches.length=0;for(var e=0;e<c.length;e++)b[M.itemName]=c[e],N.matches.push({id:S(e),label:M.viewMapper(N,b),model:c[e]});N.query=a,s(),o.attr("aria-expanded",!0),I&&1===N.matches.length&&T(a,0)&&N.select(0)}else R(),D(n,!0);d&&A(n,!1)},function(){R(),A(n,!1),D(n,!0)})};F&&(angular.element(f).bind("resize",r),e.find("body").bind("scroll",r));var V;N.moveInProgress=!1,R(),N.query=void 0;var W,X=function(a){W=d(function(){U(a)},y)},Y=function(){W&&d.cancel(W)};t.$parsers.unshift(function(a){return w=!0,0===v||a&&a.length>=v?y>0?(Y(),X(a)):U(a):(A(n,!1),Y(),R()),z?a:a?void t.$setValidity("editable",!1):(t.$setValidity("editable",!0),null)}),t.$formatters.push(function(a){var b,c,d={};return z||t.$setValidity("editable",!0),E?(d.$model=a,E(n,d)):(d[M.itemName]=a,b=M.viewMapper(n,d),d[M.itemName]=void 0,c=M.viewMapper(n,d),b!==c?b:a)}),N.select=function(a){var b,c,e={};x=!0,e[M.itemName]=c=N.matches[a].model,b=M.modelMapper(n,e),L(n,b),t.$setValidity("editable",!0),t.$setValidity("parse",!0),B(n,{$item:c,$model:b,$label:M.viewMapper(n,e)}),R(),N.$eval(p.typeaheadFocusOnSelect)!==!1&&d(function(){o[0].focus()},0,!1)},o.bind("keydown",function(a){if(0!==N.matches.length&&-1!==l.indexOf(a.which)){if(-1===N.activeIdx&&(9===a.which||13===a.which))return R(),void N.$digest();a.preventDefault(),40===a.which?(N.activeIdx=(N.activeIdx+1)%N.matches.length,N.$digest()):38===a.which?(N.activeIdx=(N.activeIdx>0?N.activeIdx:N.matches.length)-1,N.$digest()):13===a.which||9===a.which?N.$apply(function(){N.select(N.activeIdx)}):27===a.which&&(a.stopPropagation(),R(),N.$digest())}}),o.bind("blur",function(){C&&N.matches.length&&-1!==N.activeIdx&&!x&&(x=!0,N.$apply(function(){N.select(N.activeIdx)})),w=!1,x=!1});var Z=function(a){o[0]!==a.target&&3!==a.which&&0!==N.matches.length&&(R(),g.$$phase||N.$digest())};e.bind("click",Z),n.$on("$destroy",function(){e.unbind("click",Z),(F||G)&&$.remove(),F&&(angular.element(f).unbind("resize",r),e.find("body").unbind("scroll",r)),Q.remove()});var $=a(Q)(N);F?e.find("body").append($):G!==!1?angular.element(e[0].getElementById(G)).append($):o.after($)}}}]).directive("typeaheadPopup",["$typeaheadSuppressWarning","$log",function(a,b){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(c,d,e){a||b.warn("typeahead-popup is now deprecated. Use uib-typeahead-popup instead."),c.templateUrl=e.templateUrl,c.isOpen=function(){return c.matches.length>0},c.isActive=function(a){return c.active==a},c.selectActive=function(a){c.active=a},c.selectMatch=function(a){c.select({activeIdx:a})}}}}]).directive("typeaheadMatch",["$templateRequest","$compile","$parse","$typeaheadSuppressWarning","$log",function(a,b,c,d,e){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(f,g,h){d||e.warn("typeahead-match is now deprecated. Use uib-typeahead-match instead.");var i=c(h.templateUrl)(f.$parent)||"template/typeahead/typeahead-match.html";a(i).then(function(a){b(a.trim())(f,function(a){g.replaceWith(a)})})}}}]).filter("typeaheadHighlight",["$sce","$injector","$log","$typeaheadSuppressWarning",function(a,b,c,d){function e(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function f(a){return/<.*>/g.test(a)}var g;return g=b.has("$sanitize"),function(b,h){return d||c.warn("typeaheadHighlight is now deprecated. Use uibTypeaheadHighlight instead."),!g&&f(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=h?(""+b).replace(new RegExp(e(h),"gi"),"<strong>$&</strong>"):b,g||(b=a.trustAsHtml(b)),b}}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.13.2 - 2015-10-09T15:34:24.040Z
 * License: MIT
 */
!function(){"use strict";var e={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,COMMAND:91,MAP:{91:"COMMAND",8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",17:"CTRL",18:"ALT",19:"PAUSEBREAK",20:"CAPSLOCK",27:"ESC",32:"SPACE",33:"PAGE_UP",34:"PAGE_DOWN",35:"END",36:"HOME",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",43:"+",44:"PRINTSCREEN",45:"INSERT",46:"DELETE",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NUMLOCK",145:"SCROLLLOCK",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},isControl:function(t){var i=t.which;switch(i){case e.COMMAND:case e.SHIFT:case e.CTRL:case e.ALT:return!0}return t.metaKey?!0:!1},isFunctionKey:function(e){return e=e.which?e.which:e,e>=112&&123>=e},isVerticalMovement:function(t){return~[e.UP,e.DOWN].indexOf(t)},isHorizontalMovement:function(t){return~[e.LEFT,e.RIGHT,e.BACKSPACE,e.DELETE].indexOf(t)}};void 0===angular.element.prototype.querySelectorAll&&(angular.element.prototype.querySelectorAll=function(e){return angular.element(this[0].querySelectorAll(e))}),void 0===angular.element.prototype.closest&&(angular.element.prototype.closest=function(e){for(var t=this[0],i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t;){if(i.bind(t)(e))return t;t=t.parentElement}return!1});var t=0,i=angular.module("ui.select",[]).constant("uiSelectConfig",{theme:"bootstrap",searchEnabled:!0,sortable:!1,placeholder:"",refreshDelay:1e3,closeOnSelect:!0,dropdownPosition:"auto",generateId:function(){return t++},appendToBody:!1}).service("uiSelectMinErr",function(){var e=angular.$$minErr("ui.select");return function(){var t=e.apply(this,arguments),i=t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"),"");return new Error(i)}}).directive("uisTranscludeAppend",function(){return{link:function(e,t,i,s,c){c(e,function(e){t.append(e)})}}}).filter("highlight",function(){function e(e){return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,i){return i&&t?t.replace(new RegExp(e(i),"gi"),'<span class="ui-select-highlight">$&</span>'):t}}).factory("uisOffset",["$document","$window",function(e,t){return function(i){var s=i[0].getBoundingClientRect();return{width:s.width||i.prop("offsetWidth"),height:s.height||i.prop("offsetHeight"),top:s.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:s.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}}}]);i.directive("uiSelectChoices",["uiSelectConfig","uisRepeatParser","uiSelectMinErr","$compile",function(e,t,i,s){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){var i=t.parent().attr("theme")||e.theme;return i+"/choices.tpl.html"},compile:function(c,l){if(!l.repeat)throw i("repeat","Expected 'repeat' expression.");return function(c,l,n,a,r){var o=n.groupBy,u=n.groupFilter;if(a.parseRepeatAttr(n.repeat,o,u),a.disableChoiceExpression=n.uiDisableChoice,a.onHighlightCallback=n.onHighlight,a.dropdownPosition=n.position?n.position.toLowerCase():e.dropdownPosition,o){var d=l.querySelectorAll(".ui-select-choices-group");if(1!==d.length)throw i("rows","Expected 1 .ui-select-choices-group but got '{0}'.",d.length);d.attr("ng-repeat",t.getGroupNgRepeatExpression())}var p=l.querySelectorAll(".ui-select-choices-row");if(1!==p.length)throw i("rows","Expected 1 .ui-select-choices-row but got '{0}'.",p.length);p.attr("ng-repeat",a.parserResult.repeatExpression(o)).attr("ng-if","$select.open").attr("ng-click","$select.select("+a.parserResult.itemName+",false,$event)");var h=l.querySelectorAll(".ui-select-choices-row-inner");if(1!==h.length)throw i("rows","Expected 1 .ui-select-choices-row-inner but got '{0}'.",h.length);h.attr("uis-transclude-append",""),s(l,r)(c),c.$watch("$select.search",function(e){e&&!a.open&&a.multiple&&a.activate(!1,!0),a.activeIndex=a.tagging.isActivated?-1:0,a.refresh(n.refresh)}),n.$observe("refreshDelay",function(){var t=c.$eval(n.refreshDelay);a.refreshDelay=void 0!==t?t:e.refreshDelay})}}}}]),i.controller("uiSelectCtrl",["$scope","$element","$timeout","$filter","uisRepeatParser","uiSelectMinErr","uiSelectConfig","$parse",function(t,i,s,c,l,n,a,r){function o(){(h.resetSearchInput||void 0===h.resetSearchInput&&a.resetSearchInput)&&(h.search=g,h.selected&&h.items.length&&!h.multiple&&(h.activeIndex=h.items.indexOf(h.selected)))}function u(e,t){var i,s,c=[];for(i=0;i<t.length;i++)for(s=0;s<e.length;s++)e[s].name==[t[i]]&&c.push(e[s]);return c}function d(t){var i=!0;switch(t){case e.DOWN:!h.open&&h.multiple?h.activate(!1,!0):h.activeIndex<h.items.length-1&&h.activeIndex++;break;case e.UP:!h.open&&h.multiple?h.activate(!1,!0):(h.activeIndex>0||0===h.search.length&&h.tagging.isActivated&&h.activeIndex>-1)&&h.activeIndex--;break;case e.TAB:(!h.multiple||h.open)&&h.select(h.items[h.activeIndex],!0);break;case e.ENTER:h.open&&(h.tagging.isActivated||h.activeIndex>=0)?h.select(h.items[h.activeIndex]):h.activate(!1,!0);break;case e.ESC:h.close();break;default:i=!1}return i}function p(){var e=i.querySelectorAll(".ui-select-choices-content"),t=e.querySelectorAll(".ui-select-choices-row");if(t.length<1)throw n("choices","Expected multiple .ui-select-choices-row but got '{0}'.",t.length);if(!(h.activeIndex<0)){var s=t[h.activeIndex],c=s.offsetTop+s.clientHeight-e[0].scrollTop,l=e[0].offsetHeight;c>l?e[0].scrollTop+=c-l:c<s.clientHeight&&(h.isGrouped&&0===h.activeIndex?e[0].scrollTop=0:e[0].scrollTop-=s.clientHeight-c)}}var h=this,g="";if(h.placeholder=a.placeholder,h.searchEnabled=a.searchEnabled,h.sortable=a.sortable,h.refreshDelay=a.refreshDelay,h.removeSelected=!1,h.closeOnSelect=!0,h.search=g,h.activeIndex=0,h.items=[],h.open=!1,h.focus=!1,h.disabled=!1,h.selected=void 0,h.dropdownPosition="auto",h.focusser=void 0,h.resetSearchInput=!0,h.multiple=void 0,h.disableChoiceExpression=void 0,h.tagging={isActivated:!1,fct:void 0},h.taggingTokens={isActivated:!1,tokens:void 0},h.lockChoiceExpression=void 0,h.clickTriggeredSelect=!1,h.$filter=c,h.searchInput=i.querySelectorAll("input.ui-select-search"),1!==h.searchInput.length)throw n("searchInput","Expected 1 input.ui-select-search but got '{0}'.",h.searchInput.length);h.isEmpty=function(){return angular.isUndefined(h.selected)||null===h.selected||""===h.selected},h.activate=function(e,i){h.disabled||h.open||(i||o(),t.$broadcast("uis:activate"),h.open=!0,h.activeIndex=h.activeIndex>=h.items.length?0:h.activeIndex,-1===h.activeIndex&&h.taggingLabel!==!1&&(h.activeIndex=0),s(function(){h.search=e||h.search,h.searchInput[0].focus(),!h.tagging.isActivated&&h.items.length>1&&p()}))},h.findGroupByName=function(e){return h.groups&&h.groups.filter(function(t){return t.name===e})[0]},h.parseRepeatAttr=function(e,i,s){function c(e){var c=t.$eval(i);if(h.groups=[],angular.forEach(e,function(e){var t=angular.isFunction(c)?c(e):e[c],i=h.findGroupByName(t);i?i.items.push(e):h.groups.push({name:t,items:[e]})}),s){var l=t.$eval(s);angular.isFunction(l)?h.groups=l(h.groups):angular.isArray(l)&&(h.groups=u(h.groups,l))}h.items=[],h.groups.forEach(function(e){h.items=h.items.concat(e.items)})}function a(e){h.items=e}h.setItemsFn=i?c:a,h.parserResult=l.parse(e),h.isGrouped=!!i,h.itemProperty=h.parserResult.itemName;var o=h.parserResult.source,d=function(){var e=o(t);t.$uisSource=Object.keys(e).map(function(t){var i={};return i[h.parserResult.keyName]=t,i.value=e[t],i})};h.parserResult.keyName&&(d(),h.parserResult.source=r("$uisSource"+h.parserResult.filters),t.$watch(o,function(e,t){e!==t&&d()},!0)),h.refreshItems=function(e){e=e||h.parserResult.source(t);var i=h.selected;if(h.isEmpty()||angular.isArray(i)&&!i.length||!h.removeSelected)h.setItemsFn(e);else if(void 0!==e){var s=e.filter(function(e){return i&&i.indexOf(e)<0});h.setItemsFn(s)}("auto"===h.dropdownPosition||"up"===h.dropdownPosition)&&t.calculateDropdownPos()},t.$watchCollection(h.parserResult.source,function(e){if(void 0===e||null===e)h.items=[];else{if(!angular.isArray(e))throw n("items","Expected an array but got '{0}'.",e);h.refreshItems(e),h.ngModel.$modelValue=null}})};var f;h.refresh=function(e){void 0!==e&&(f&&s.cancel(f),f=s(function(){t.$eval(e)},h.refreshDelay))},h.isActive=function(e){if(!h.open)return!1;var t=h.items.indexOf(e[h.itemProperty]),i=t===h.activeIndex;return!i||0>t&&h.taggingLabel!==!1||0>t&&h.taggingLabel===!1?!1:(i&&!angular.isUndefined(h.onHighlightCallback)&&e.$eval(h.onHighlightCallback),i)},h.isDisabled=function(e){if(h.open){var t,i=h.items.indexOf(e[h.itemProperty]),s=!1;return i>=0&&!angular.isUndefined(h.disableChoiceExpression)&&(t=h.items[i],s=!!e.$eval(h.disableChoiceExpression),t._uiSelectChoiceDisabled=s),s}},h.select=function(e,i,c){if(void 0===e||!e._uiSelectChoiceDisabled){if(!h.items&&!h.search)return;if(!e||!e._uiSelectChoiceDisabled){if(h.tagging.isActivated){if(h.taggingLabel===!1)if(h.activeIndex<0){if(e=void 0!==h.tagging.fct?h.tagging.fct(h.search):h.search,!e||angular.equals(h.items[0],e))return}else e=h.items[h.activeIndex];else if(0===h.activeIndex){if(void 0===e)return;if(void 0!==h.tagging.fct&&"string"==typeof e){if(e=h.tagging.fct(h.search),!e)return}else"string"==typeof e&&(e=e.replace(h.taggingLabel,"").trim())}if(h.selected&&angular.isArray(h.selected)&&h.selected.filter(function(t){return angular.equals(t,e)}).length>0)return h.close(i),void 0}t.$broadcast("uis:select",e);var l={};l[h.parserResult.itemName]=e,s(function(){h.onSelectCallback(t,{$item:e,$model:h.parserResult.modelMapper(t,l)})}),h.closeOnSelect&&h.close(i),c&&"click"===c.type&&(h.clickTriggeredSelect=!0)}}},h.close=function(e){h.open&&(h.ngModel&&h.ngModel.$setTouched&&h.ngModel.$setTouched(),o(),h.open=!1,t.$broadcast("uis:close",e))},h.setFocus=function(){h.focus||h.focusInput[0].focus()},h.clear=function(e){h.select(void 0),e.stopPropagation(),s(function(){h.focusser[0].focus()},0,!1)},h.toggle=function(e){h.open?(h.close(),e.preventDefault(),e.stopPropagation()):h.activate()},h.isLocked=function(e,t){var i,s=h.selected[t];return s&&!angular.isUndefined(h.lockChoiceExpression)&&(i=!!e.$eval(h.lockChoiceExpression),s._uiSelectChoiceLocked=i),i};var v=null;h.sizeSearchInput=function(){var e=h.searchInput[0],i=h.searchInput.parent().parent()[0],c=function(){return i.clientWidth*!!e.offsetParent},l=function(t){if(0===t)return!1;var i=t-e.offsetLeft-10;return 50>i&&(i=t),h.searchInput.css("width",i+"px"),!0};h.searchInput.css("width","10px"),s(function(){null!==v||l(c())||(v=t.$watch(c,function(e){l(e)&&(v(),v=null)}))})},h.searchInput.on("keydown",function(i){var c=i.which;t.$apply(function(){var t=!1;if((h.items.length>0||h.tagging.isActivated)&&(d(c),h.taggingTokens.isActivated)){for(var l=0;l<h.taggingTokens.tokens.length;l++)h.taggingTokens.tokens[l]===e.MAP[i.keyCode]&&h.search.length>0&&(t=!0);t&&s(function(){h.searchInput.triggerHandler("tagged");var t=h.search.replace(e.MAP[i.keyCode],"").trim();h.tagging.fct&&(t=h.tagging.fct(t)),t&&h.select(t,!0)})}}),e.isVerticalMovement(c)&&h.items.length>0&&p(),(c===e.ENTER||c===e.ESC)&&(i.preventDefault(),i.stopPropagation())}),h.searchInput.on("paste",function(e){var t=e.originalEvent.clipboardData.getData("text/plain");if(t&&t.length>0&&h.taggingTokens.isActivated&&h.tagging.fct){var i=t.split(h.taggingTokens.tokens[0]);i&&i.length>0&&(angular.forEach(i,function(e){var t=h.tagging.fct(e);t&&h.select(t,!0)}),e.preventDefault(),e.stopPropagation())}}),h.searchInput.on("tagged",function(){s(function(){o()})}),t.$on("$destroy",function(){h.searchInput.off("keyup keydown tagged blur paste")})}]),i.directive("uiSelect",["$document","uiSelectConfig","uiSelectMinErr","uisOffset","$compile","$parse","$timeout",function(e,t,i,s,c,l,n){return{restrict:"EA",templateUrl:function(e,i){var s=i.theme||t.theme;return s+(angular.isDefined(i.multiple)?"/select-multiple.tpl.html":"/select.tpl.html")},replace:!0,transclude:!0,require:["uiSelect","^ngModel"],scope:!0,controller:"uiSelectCtrl",controllerAs:"$select",compile:function(c,a){return angular.isDefined(a.multiple)?c.append("<ui-select-multiple/>").removeAttr("multiple"):c.append("<ui-select-single/>"),a.inputId&&(c.querySelectorAll("input.ui-select-search")[0].id=a.inputId),function(c,a,r,o,u){function d(e){if(g.open){var t=!1;if(t=window.jQuery?window.jQuery.contains(a[0],e.target):a[0].contains(e.target),!t&&!g.clickTriggeredSelect){var i=["input","button","textarea"],s=angular.element(e.target).controller("uiSelect"),l=s&&s!==g;l||(l=~i.indexOf(e.target.tagName.toLowerCase())),g.close(l),c.$digest()}g.clickTriggeredSelect=!1}}function p(){var t=s(a);m=angular.element('<div class="ui-select-placeholder"></div>'),m[0].style.width=t.width+"px",m[0].style.height=t.height+"px",a.after(m),$=a[0].style.width,e.find("body").append(a),a[0].style.position="absolute",a[0].style.left=t.left+"px",a[0].style.top=t.top+"px",a[0].style.width=t.width+"px"}function h(){null!==m&&(m.replaceWith(a),m=null,a[0].style.position="",a[0].style.left="",a[0].style.top="",a[0].style.width=$)}var g=o[0],f=o[1];g.generatedId=t.generateId(),g.baseTitle=r.title||"Select box",g.focusserTitle=g.baseTitle+" focus",g.focusserId="focusser-"+g.generatedId,g.closeOnSelect=function(){return angular.isDefined(r.closeOnSelect)?l(r.closeOnSelect)():t.closeOnSelect}(),g.onSelectCallback=l(r.onSelect),g.onRemoveCallback=l(r.onRemove),g.limit=angular.isDefined(r.limit)?parseInt(r.limit,10):void 0,g.ngModel=f,g.choiceGrouped=function(e){return g.isGrouped&&e&&e.name},r.tabindex&&r.$observe("tabindex",function(e){g.focusInput.attr("tabindex",e),a.removeAttr("tabindex")}),c.$watch("searchEnabled",function(){var e=c.$eval(r.searchEnabled);g.searchEnabled=void 0!==e?e:t.searchEnabled}),c.$watch("sortable",function(){var e=c.$eval(r.sortable);g.sortable=void 0!==e?e:t.sortable}),r.$observe("disabled",function(){g.disabled=void 0!==r.disabled?r.disabled:!1}),r.$observe("resetSearchInput",function(){var e=c.$eval(r.resetSearchInput);g.resetSearchInput=void 0!==e?e:!0}),r.$observe("tagging",function(){if(void 0!==r.tagging){var e=c.$eval(r.tagging);g.tagging={isActivated:!0,fct:e!==!0?e:void 0}}else g.tagging={isActivated:!1,fct:void 0}}),r.$observe("taggingLabel",function(){void 0!==r.tagging&&(g.taggingLabel="false"===r.taggingLabel?!1:void 0!==r.taggingLabel?r.taggingLabel:"(new)")}),r.$observe("taggingTokens",function(){if(void 0!==r.tagging){var e=void 0!==r.taggingTokens?r.taggingTokens.split("|"):[",","ENTER"];g.taggingTokens={isActivated:!0,tokens:e}}}),angular.isDefined(r.autofocus)&&n(function(){g.setFocus()}),angular.isDefined(r.focusOn)&&c.$on(r.focusOn,function(){n(function(){g.setFocus()})}),e.on("click",d),c.$on("$destroy",function(){e.off("click",d)}),u(c,function(e){var t=angular.element("<div>").append(e),s=t.querySelectorAll(".ui-select-match");if(s.removeAttr("ui-select-match"),s.removeAttr("data-ui-select-match"),1!==s.length)throw i("transcluded","Expected 1 .ui-select-match but got '{0}'.",s.length);a.querySelectorAll(".ui-select-match").replaceWith(s);var c=t.querySelectorAll(".ui-select-choices");if(c.removeAttr("ui-select-choices"),c.removeAttr("data-ui-select-choices"),1!==c.length)throw i("transcluded","Expected 1 .ui-select-choices but got '{0}'.",c.length);a.querySelectorAll(".ui-select-choices").replaceWith(c)});var v=c.$eval(r.appendToBody);(void 0!==v?v:t.appendToBody)&&(c.$watch("$select.open",function(e){e?p():h()}),c.$on("$destroy",function(){h()}));var m=null,$="",b=null,w="direction-up";c.$watch("$select.open",function(){("auto"===g.dropdownPosition||"up"===g.dropdownPosition)&&c.calculateDropdownPos()});var x=function(e,t){e=e||s(a),t=t||s(b),b[0].style.position="absolute",b[0].style.top=-1*t.height+"px",a.addClass(w)},y=function(e,t){a.removeClass(w),e=e||s(a),t=t||s(b),b[0].style.position="",b[0].style.top=""};c.calculateDropdownPos=function(){if(g.open){if(b=angular.element(a).querySelectorAll(".ui-select-dropdown"),0===b.length)return;b[0].style.opacity=0,n(function(){if("up"===g.dropdownPosition)x(t,i);else{a.removeClass(w);var t=s(a),i=s(b),c=e[0].documentElement.scrollTop||e[0].body.scrollTop;t.top+t.height+i.height>c+e[0].documentElement.clientHeight?x(t,i):y(t,i)}b[0].style.opacity=1})}else{if(null===b||0===b.length)return;b[0].style.position="",b[0].style.top="",a.removeClass(w)}}}}}}]),i.directive("uiSelectMatch",["uiSelectConfig",function(e){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){var i=t.parent().attr("theme")||e.theme,s=t.parent().attr("multiple");return i+(s?"/match-multiple.tpl.html":"/match.tpl.html")},link:function(t,i,s,c){function l(e){c.allowClear=angular.isDefined(e)?""===e?!0:"true"===e.toLowerCase():!1}c.lockChoiceExpression=s.uiLockChoice,s.$observe("placeholder",function(t){c.placeholder=void 0!==t?t:e.placeholder}),s.$observe("allowClear",l),l(s.allowClear),c.multiple&&c.sizeSearchInput()}}}]),i.directive("uiSelectMultiple",["uiSelectMinErr","$timeout",function(t,i){return{restrict:"EA",require:["^uiSelect","^ngModel"],controller:["$scope","$timeout",function(e,t){var i,s=this,c=e.$select;e.$evalAsync(function(){i=e.ngModel}),s.activeMatchIndex=-1,s.updateModel=function(){i.$setViewValue(Date.now()),s.refreshComponent()},s.refreshComponent=function(){c.refreshItems(),c.sizeSearchInput()},s.removeChoice=function(i){var l=c.selected[i];if(!l._uiSelectChoiceLocked){var n={};n[c.parserResult.itemName]=l,c.selected.splice(i,1),s.activeMatchIndex=-1,c.sizeSearchInput(),t(function(){c.onRemoveCallback(e,{$item:l,$model:c.parserResult.modelMapper(e,n)})}),s.updateModel()}},s.getPlaceholder=function(){return c.selected&&c.selected.length?void 0:c.placeholder}}],controllerAs:"$selectMultiple",link:function(s,c,l,n){function a(e){return angular.isNumber(e.selectionStart)?e.selectionStart:e.value.length}function r(t){function i(){switch(t){case e.LEFT:return~h.activeMatchIndex?u:n;case e.RIGHT:return~h.activeMatchIndex&&r!==n?o:(d.activate(),!1);case e.BACKSPACE:return~h.activeMatchIndex?(h.removeChoice(r),u):n;case e.DELETE:return~h.activeMatchIndex?(h.removeChoice(h.activeMatchIndex),r):!1}}var s=a(d.searchInput[0]),c=d.selected.length,l=0,n=c-1,r=h.activeMatchIndex,o=h.activeMatchIndex+1,u=h.activeMatchIndex-1,p=r;return s>0||d.search.length&&t==e.RIGHT?!1:(d.close(),p=i(),h.activeMatchIndex=d.selected.length&&p!==!1?Math.min(n,Math.max(l,p)):-1,!0)}function o(e){if(void 0===e||void 0===d.search)return!1;var t=e.filter(function(e){return void 0===d.search.toUpperCase()||void 0===e?!1:e.toUpperCase()===d.search.toUpperCase()}).length>0;return t}function u(e,t){var i=-1;if(angular.isArray(e))for(var s=angular.copy(e),c=0;c<s.length;c++)if(void 0===d.tagging.fct)s[c]+" "+d.taggingLabel===t&&(i=c);else{var l=s[c];l.isTag=!0,angular.equals(l,t)&&(i=c)}return i}var d=n[0],p=s.ngModel=n[1],h=s.$selectMultiple;d.multiple=!0,d.removeSelected=!0,d.focusInput=d.searchInput,p.$parsers.unshift(function(){for(var e,t={},i=[],c=d.selected.length-1;c>=0;c--)t={},t[d.parserResult.itemName]=d.selected[c],e=d.parserResult.modelMapper(s,t),i.unshift(e);return i}),p.$formatters.unshift(function(e){var t,i=d.parserResult.source(s,{$select:{search:""}}),c={};if(!i)return e;var l=[],n=function(e,i){if(e&&e.length){for(var n=e.length-1;n>=0;n--){if(c[d.parserResult.itemName]=e[n],t=d.parserResult.modelMapper(s,c),d.parserResult.trackByExp){var a=/\.(.+)/.exec(d.parserResult.trackByExp);if(a.length>0&&t[a[1]]==i[a[1]])return l.unshift(e[n]),!0}if(angular.equals(t,i))return l.unshift(e[n]),!0}return!1}};if(!e)return l;for(var a=e.length-1;a>=0;a--)n(d.selected,e[a])||n(i,e[a])||l.unshift(e[a]);return l}),s.$watchCollection(function(){return p.$modelValue},function(e,t){t!=e&&(p.$modelValue=null,h.refreshComponent())}),p.$render=function(){if(!angular.isArray(p.$viewValue)){if(!angular.isUndefined(p.$viewValue)&&null!==p.$viewValue)throw t("multiarr","Expected model value to be array but got '{0}'",p.$viewValue);d.selected=[]}d.selected=p.$viewValue,s.$evalAsync()},s.$on("uis:select",function(e,t){d.selected.length>=d.limit||(d.selected.push(t),h.updateModel())}),s.$on("uis:activate",function(){h.activeMatchIndex=-1}),s.$watch("$select.disabled",function(e,t){t&&!e&&d.sizeSearchInput()}),d.searchInput.on("keydown",function(t){var i=t.which;s.$apply(function(){var s=!1;e.isHorizontalMovement(i)&&(s=r(i)),s&&i!=e.TAB&&(t.preventDefault(),t.stopPropagation())})}),d.searchInput.on("keyup",function(t){if(e.isVerticalMovement(t.which)||s.$evalAsync(function(){d.activeIndex=d.taggingLabel===!1?-1:0}),d.tagging.isActivated&&d.search.length>0){if(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||e.isVerticalMovement(t.which))return;if(d.activeIndex=d.taggingLabel===!1?-1:0,d.taggingLabel===!1)return;var i,c,l,n,a=angular.copy(d.items),r=angular.copy(d.items),p=!1,h=-1;if(void 0!==d.tagging.fct){if(l=d.$filter("filter")(a,{isTag:!0}),l.length>0&&(n=l[0]),a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),i=d.tagging.fct(d.search),i.isTag=!0,r.filter(function(e){return angular.equals(e,d.tagging.fct(d.search))}).length>0)return;i.isTag=!0}else{if(l=d.$filter("filter")(a,function(e){return e.match(d.taggingLabel)}),l.length>0&&(n=l[0]),c=a[0],void 0!==c&&a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),i=d.search+" "+d.taggingLabel,u(d.selected,d.search)>-1)return;if(o(r.concat(d.selected)))return p&&(a=r,s.$evalAsync(function(){d.activeIndex=0,d.items=a})),void 0;if(o(r))return p&&(d.items=r.slice(1,r.length)),void 0}p&&(h=u(d.selected,i)),h>-1?a=a.slice(h+1,a.length-1):(a=[],a.push(i),a=a.concat(r)),s.$evalAsync(function(){d.activeIndex=0,d.items=a})}}),d.searchInput.on("blur",function(){i(function(){h.activeMatchIndex=-1})})}}}]),i.directive("uiSelectSingle",["$timeout","$compile",function(t,i){return{restrict:"EA",require:["^uiSelect","^ngModel"],link:function(s,c,l,n){var a=n[0],r=n[1];r.$parsers.unshift(function(e){var t,i={};return i[a.parserResult.itemName]=e,t=a.parserResult.modelMapper(s,i)}),r.$formatters.unshift(function(e){var t,i=a.parserResult.source(s,{$select:{search:""}}),c={};if(i){var l=function(i){return c[a.parserResult.itemName]=i,t=a.parserResult.modelMapper(s,c),t==e};if(a.selected&&l(a.selected))return a.selected;for(var n=i.length-1;n>=0;n--)if(l(i[n]))return i[n]}return e}),s.$watch("$select.selected",function(e){r.$viewValue!==e&&r.$setViewValue(e)}),r.$render=function(){a.selected=r.$viewValue},s.$on("uis:select",function(e,t){a.selected=t}),s.$on("uis:close",function(e,i){t(function(){a.focusser.prop("disabled",!1),i||a.focusser[0].focus()},0,!1)}),s.$on("uis:activate",function(){o.prop("disabled",!0)});var o=angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");i(o)(s),a.focusser=o,a.focusInput=o,c.parent().append(o),o.bind("focus",function(){s.$evalAsync(function(){a.focus=!0})}),o.bind("blur",function(){s.$evalAsync(function(){a.focus=!1})}),o.bind("keydown",function(t){return t.which===e.BACKSPACE?(t.preventDefault(),t.stopPropagation(),a.select(void 0),s.$apply(),void 0):(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||((t.which==e.DOWN||t.which==e.UP||t.which==e.ENTER||t.which==e.SPACE)&&(t.preventDefault(),t.stopPropagation(),a.activate()),s.$digest()),void 0)}),o.bind("keyup input",function(t){t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||t.which==e.ENTER||t.which===e.BACKSPACE||(a.activate(o.val()),o.val(""),s.$digest())})}}}]),i.directive("uiSelectSort",["$timeout","uiSelectConfig","uiSelectMinErr",function(e,t,i){return{require:"^uiSelect",link:function(t,s,c,l){if(null===t[c.uiSelectSort])throw i("sort","Expected a list to sort");var n=angular.extend({axis:"horizontal"},t.$eval(c.uiSelectSortOptions)),a=n.axis,r="dragging",o="dropping",u="dropping-before",d="dropping-after";t.$watch(function(){return l.sortable},function(e){e?s.attr("draggable",!0):s.removeAttr("draggable")}),s.on("dragstart",function(e){s.addClass(r),(e.dataTransfer||e.originalEvent.dataTransfer).setData("text/plain",t.$index)}),s.on("dragend",function(){s.removeClass(r)});var p,h=function(e,t){this.splice(t,0,this.splice(e,1)[0])},g=function(e){e.preventDefault();var t="vertical"===a?e.offsetY||e.layerY||(e.originalEvent?e.originalEvent.offsetY:0):e.offsetX||e.layerX||(e.originalEvent?e.originalEvent.offsetX:0);t<this["vertical"===a?"offsetHeight":"offsetWidth"]/2?(s.removeClass(d),s.addClass(u)):(s.removeClass(u),s.addClass(d))},f=function(t){t.preventDefault();var i=parseInt((t.dataTransfer||t.originalEvent.dataTransfer).getData("text/plain"),10);e.cancel(p),p=e(function(){v(i)},20)},v=function(e){var i=t.$eval(c.uiSelectSort),l=i[e],n=null;n=s.hasClass(u)?e<t.$index?t.$index-1:t.$index:e<t.$index?t.$index:t.$index+1,h.apply(i,[e,n]),t.$apply(function(){t.$emit("uiSelectSort:change",{array:i,item:l,from:e,to:n})}),s.removeClass(o),s.removeClass(u),s.removeClass(d),s.off("drop",f)};s.on("dragenter",function(){s.hasClass(r)||(s.addClass(o),s.on("dragover",g),s.on("drop",f))}),s.on("dragleave",function(e){e.target==s&&(s.removeClass(o),s.removeClass(u),s.removeClass(d),s.off("dragover",g),s.off("drop",f))})}}}]),i.service("uisRepeatParser",["uiSelectMinErr","$parse",function(e,t){var i=this;i.parse=function(i){var s,c=/\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)/.test(i);if(s=i.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(([\w\.]+)?\s*(|\s*[\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),!s)throw e("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",i);if(!s[6]&&c)throw e("iexp","Expected expression in form of '_item_ as (_key_, _item_) in _ObjCollection_ [ track by _id_]' but got '{0}'.",i);return{itemName:s[4]||s[2],keyName:s[3],source:t(s[3]?s[6]:s[5]),sourceName:s[6],filters:s[7],trackByExp:s[8],modelMapper:t(s[1]||s[4]||s[2]),repeatExpression:function(e){var t=this.itemName+" in "+(e?"$group.items":"$select.items");return this.trackByExp&&(t+=" track by "+this.trackByExp),t}}},i.getGroupNgRepeatExpression=function(){return"$group in $select.groups"}}])}(),angular.module("ui.select").run(["$templateCache",function(e){e.put("bootstrap/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" role="listbox" ng-show="$select.items.length > 0"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><a href="javascript:void(0)" class="ui-select-choices-row-inner"></a></div></li></ul>'),e.put("bootstrap/match-multiple.tpl.html",'<span class="ui-select-match"><span ng-repeat="$item in $select.selected"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'),e.put("bootstrap/match.tpl.html",'<div class="ui-select-match" ng-hide="$select.open" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty()" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>'),e.put("bootstrap/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="text" autocomplete="false" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div></div>'),e.put("bootstrap/select.tpl.html",'<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><input type="text" autocomplete="false" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="form-control ui-select-search" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.searchEnabled && $select.open"><div class="ui-select-choices"></div></div>'),e.put("selectize/choices.tpl.html",'<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown single"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup" role="listbox"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'),e.put("selectize/match.tpl.html",'<div ng-hide="($select.open || $select.isEmpty())" class="ui-select-match" ng-transclude=""></div>'),e.put("selectize/select.tpl.html",'<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.activate()"><div class="ui-select-match"></div><input type="text" autocomplete="false" tabindex="-1" class="ui-select-search ui-select-toggle" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.searchEnabled || ($select.selected && !$select.open)" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div></div>'),e.put("select2/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul role="listbox" id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'),e.put("select2/match-multiple.tpl.html",'<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>'),e.put("select2/match.tpl.html",'<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>'),e.put("select2/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="text" autocomplete="false" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="ui-select-choices"></div></div></div>'),e.put("select2/select.tpl.html",'<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="select2-search" ng-show="$select.searchEnabled"><input type="text" autocomplete="false" autocorrect="false" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div></div></div>')
}]);
"use strict";angular.module("google.places",[]).factory("googlePlacesApi",["$window",function(a){if(!a.google)throw"Global `google` var missing. Did you forget to include the places API script?";return a.google}]).directive("gPlacesAutocomplete",["$parse","$compile","$timeout","$document","googlePlacesApi",function(a,b,c,d,e){return{restrict:"A",require:"^ngModel",scope:{model:"=ngModel",options:"=?",forceSelection:"=?",customPlaces:"=?"},controller:["$scope",function(a){}],link:function(a,f,g,h){function i(){f.bind("keydown",l),f.bind("blur",m),f.bind("submit",m),a.$watch("selected",n)}function j(){var c,e=angular.element("<div g-places-autocomplete-drawer></div>"),f=angular.element(d[0].body);e.attr({input:"input",query:"query",predictions:"predictions",active:"active",selected:"selected"}),c=b(e)(a),f.append(c)}function k(){h.$parsers.push(o),h.$formatters.push(p),h.$render=q}function l(b){0!==a.predictions.length&&-1!==w(A,b.which)&&(b.preventDefault(),b.which===z.down?(a.active=(a.active+1)%a.predictions.length,a.$digest()):b.which===z.up?(a.active=(a.active?a.active:a.predictions.length)-1,a.$digest()):13===b.which||9===b.which?(a.forceSelection&&(a.active=-1===a.active?0:a.active),a.$apply(function(){a.selected=a.active,-1===a.selected&&r()})):27===b.which&&a.$apply(function(){b.stopPropagation(),r()}))}function m(b){0!==a.predictions.length&&(a.forceSelection&&(a.selected=-1===a.selected?0:a.selected),a.$digest(),a.$apply(function(){-1===a.selected&&r()}))}function n(){var b;b=a.predictions[a.selected],b&&(b.is_custom?a.$apply(function(){a.model=b.place,a.$emit("g-places-autocomplete:select",b.place),c(function(){h.$viewChangeListeners.forEach(function(a){a()})})}):C.getDetails({placeId:b.place_id},function(b,d){d==e.maps.places.PlacesServiceStatus.OK&&a.$apply(function(){a.model=b,a.$emit("g-places-autocomplete:select",b),c(function(){h.$viewChangeListeners.forEach(function(a){a()})})})}),r())}function o(b){var c;return b&&u(b)?(a.query=b,c=angular.extend({input:b},a.options),B.getPlacePredictions(c,function(b,c){a.$apply(function(){var d;r(),a.customPlaces&&(d=s(a.query),a.predictions.push.apply(a.predictions,d)),c==e.maps.places.PlacesServiceStatus.OK&&a.predictions.push.apply(a.predictions,b),a.predictions.length>5&&(a.predictions.length=5)})}),a.forceSelection?h.$modelValue:b):b}function p(a){var b="";return u(a)?b=a:v(a)&&(b=a.formatted_address),b}function q(){return f.val(h.$viewValue)}function r(){a.active=-1,a.selected=-1,a.predictions=[]}function s(b){var c,d,e,f=[];for(e=0;e<a.customPlaces.length;e++)c=a.customPlaces[e],d=t(b,c),d.matched_substrings.length>0&&f.push({is_custom:!0,custom_prediction_label:c.custom_prediction_label||"(Custom Non-Google Result)",description:c.formatted_address,place:c,matched_substrings:d.matched_substrings,terms:d.terms});return f}function t(a,b){var c,d,e,f=a+"",g=[],h=[];for(d=b.formatted_address.split(","),e=0;e<d.length;e++)c=d[e].trim(),f.length>0&&(c.length>=f.length?(x(c,f)&&h.push({length:f.length,offset:e}),f=""):x(f,c)?(h.push({length:c.length,offset:e}),f=f.replace(c,"").trim()):f=""),g.push({value:c,offset:b.formatted_address.indexOf(c)});return{matched_substrings:h,terms:g}}function u(a){return"[object String]"==Object.prototype.toString.call(a)}function v(a){return"[object Object]"==Object.prototype.toString.call(a)}function w(a,b){var c,d;if(null==a)return-1;for(d=a.length,c=0;d>c;c++)if(a[c]===b)return c;return-1}function x(a,b){return 0===y(a).lastIndexOf(y(b),0)}function y(a){return null==a?"":a.toLowerCase()}var z={tab:9,enter:13,esc:27,up:38,down:40},A=[z.tab,z.enter,z.esc,z.up,z.down],B=new e.maps.places.AutocompleteService,C=new e.maps.places.PlacesService(f[0]);!function(){a.query="",a.predictions=[],a.input=f,a.options=a.options||{},j(),i(),k()}()}}}]).directive("gPlacesAutocompleteDrawer",["$window","$document",function(a,b){var c=['<div class="pac-container" ng-if="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\', width: position.width+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">','  <div class="pac-item" g-places-autocomplete-prediction index="$index" prediction="prediction" query="query"','       ng-repeat="prediction in predictions track by $index" ng-class="{\'pac-item-selected\': isActive($index) }"','       ng-mouseenter="selectActive($index)" ng-click="selectPrediction($index)" role="option" id="{{prediction.id}}">',"  </div>","</div>"];return{restrict:"A",scope:{input:"=",query:"=",predictions:"=",active:"=",selected:"="},template:c.join(""),link:function(c,d){function e(c){var d=c[0],e=d.getBoundingClientRect(),f=b[0].documentElement,g=b[0].body,h=a.pageYOffset||f.scrollTop||g.scrollTop,i=a.pageXOffset||f.scrollLeft||g.scrollLeft;return{width:e.width,height:e.height,top:e.top+e.height+h,left:e.left+i}}d.bind("mousedown",function(a){a.preventDefault()}),a.onresize=function(){c.$apply(function(){c.position=e(c.input)})},c.isOpen=function(){return c.predictions.length>0},c.isActive=function(a){return c.active===a},c.selectActive=function(a){c.active=a},c.selectPrediction=function(a){c.selected=a},c.$watch("predictions",function(){c.position=e(c.input)},!0)}}}]).directive("gPlacesAutocompletePrediction",[function(){var a=['<span class="pac-icon pac-icon-marker"></span>','<span class="pac-item-query" ng-bind-html="prediction | highlightMatched"></span>','<span ng-repeat="term in prediction.terms | unmatchedTermsOnly:prediction">{{term.value | trailingComma:!$last}}&nbsp;</span>','<span class="custom-prediction-label" ng-if="prediction.is_custom">&nbsp;{{prediction.custom_prediction_label}}</span>'];return{restrict:"A",scope:{index:"=",prediction:"=",query:"="},template:a.join("")}}]).filter("highlightMatched",["$sce",function(a){return function(b){var c,d="",e="";return b.matched_substrings.length>0&&b.terms.length>0&&(c=b.matched_substrings[0],d=b.terms[0].value.substr(c.offset,c.length),e=b.terms[0].value.substr(c.offset+c.length)),a.trustAsHtml('<span class="pac-matched">'+d+"</span>"+e)}}]).filter("unmatchedTermsOnly",[function(){return function(a,b){var c,d,e=[];for(c=0;c<a.length;c++)d=a[c],b.matched_substrings.length>0&&d.offset>b.matched_substrings[0].length&&e.push(d);return e}}]).filter("trailingComma",[function(){return function(a,b){return b?a+",":a}}]);
/* jquery.nicescroll 3.6.6 InuYaksa*2015 MIT http://nicescroll.areaaperta.com */(function(e){"function"===typeof define&&define.amd?define(["jquery"],e):"object"===typeof exports?module.exports=e(require("jquery")):e(jQuery)})(function(e){var A=!1,E=!1,O=0,P=2E3,z=0,I=["webkit","ms","moz","o"],u=window.requestAnimationFrame||!1,v=window.cancelAnimationFrame||!1;if(!u)for(var Q in I){var F=I[Q];u||(u=window[F+"RequestAnimationFrame"]);v||(v=window[F+"CancelAnimationFrame"]||window[F+"CancelRequestAnimationFrame"])}var x=window.MutationObserver||window.WebKitMutationObserver||
!1,J={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,railhoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},
disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:function(){var e=document.getElementsByTagName("script"),e=e.length?e[e.length-
1].src.split("?")[0]:"";return 0<e.split("/").length?e.split("/").slice(0,-1).join("/")+"/":""}(),preventmultitouchscrolling:!0},G=!1,R=function(){if(G)return G;var e=document.createElement("DIV"),c=e.style,h=navigator.userAgent,n=navigator.platform,d={haspointerlock:"pointerLockElement"in document||"webkitPointerLockElement"in document||"mozPointerLockElement"in document};d.isopera="opera"in window;d.isopera12=d.isopera&&"getUserMedia"in navigator;d.isoperamini="[object OperaMini]"===Object.prototype.toString.call(window.operamini);
d.isie="all"in document&&"attachEvent"in e&&!d.isopera;d.isieold=d.isie&&!("msInterpolationMode"in c);d.isie7=d.isie&&!d.isieold&&(!("documentMode"in document)||7==document.documentMode);d.isie8=d.isie&&"documentMode"in document&&8==document.documentMode;d.isie9=d.isie&&"performance"in window&&9<=document.documentMode;d.isie10=d.isie&&"performance"in window&&10==document.documentMode;d.isie11="msRequestFullscreen"in e&&11<=document.documentMode;d.isieedge=navigator.userAgent.match(/Edge\/12\./);d.isie9mobile=
/iemobile.9/i.test(h);d.isie9mobile&&(d.isie9=!1);d.isie7mobile=!d.isie9mobile&&d.isie7&&/iemobile/i.test(h);d.ismozilla="MozAppearance"in c;d.iswebkit="WebkitAppearance"in c;d.ischrome="chrome"in window;d.ischrome22=d.ischrome&&d.haspointerlock;d.ischrome26=d.ischrome&&"transition"in c;d.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;d.hasmstouch=window.MSPointerEvent||!1;d.hasw3ctouch=(window.PointerEvent||!1)&&(0<navigator.MaxTouchPoints||0<navigator.msMaxTouchPoints);
d.ismac=/^mac$/i.test(n);d.isios=d.cantouch&&/iphone|ipad|ipod/i.test(n);d.isios4=d.isios&&!("seal"in Object);d.isios7=d.isios&&"webkitHidden"in document;d.isandroid=/android/i.test(h);d.haseventlistener="addEventListener"in e;d.trstyle=!1;d.hastransform=!1;d.hastranslate3d=!1;d.transitionstyle=!1;d.hastransition=!1;d.transitionend=!1;n=["transform","msTransform","webkitTransform","MozTransform","OTransform"];for(h=0;h<n.length;h++)if("undefined"!=typeof c[n[h]]){d.trstyle=n[h];break}d.hastransform=
!!d.trstyle;d.hastransform&&(c[d.trstyle]="translate3d(1px,2px,3px)",d.hastranslate3d=/translate3d/.test(c[d.trstyle]));d.transitionstyle=!1;d.prefixstyle="";d.transitionend=!1;for(var n="transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "),p=" -webkit- -ms- -moz- -o- -o -khtml-".split(" "),q="transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "),h=0;h<n.length;h++)if(n[h]in
c){d.transitionstyle=n[h];d.prefixstyle=p[h];d.transitionend=q[h];break}d.ischrome26&&(d.prefixstyle=p[1]);d.hastransition=d.transitionstyle;a:{h=["-webkit-grab","-moz-grab","grab"];if(d.ischrome&&!d.ischrome22||d.isie)h=[];for(n=0;n<h.length;n++)if(p=h[n],c.cursor=p,c.cursor==p){c=p;break a}c="url(//mail.google.com/mail/images/2/openhand.cur),n-resize"}d.cursorgrabvalue=c;d.hasmousecapture="setCapture"in e;d.hasMutationObserver=!1!==x;return G=d},S=function(k,c){function h(){var b=a.doc.css(f.trstyle);
return b&&"matrix"==b.substr(0,6)?b.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1}function n(){var b=a.win;if("zIndex"in b)return b.zIndex();for(;0<b.length&&9!=b[0].nodeType;){var g=b.css("zIndex");if(!isNaN(g)&&0!=g)return parseInt(g);b=b.parent()}return!1}function d(b,g,l){g=b.css(g);b=parseFloat(g);return isNaN(b)?(b=y[g]||0,l=3==b?l?a.win.outerHeight()-a.win.innerHeight():a.win.outerWidth()-a.win.innerWidth():1,a.isie8&&b&&(b+=1),l?b:0):b}function p(b,g,l,c){a._bind(b,g,function(a){a=
a?a:window.event;var c={original:a,target:a.target||a.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==a.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){a.preventDefault?a.preventDefault():a.returnValue=!1;return!1},stopImmediatePropagation:function(){a.stopImmediatePropagation?a.stopImmediatePropagation():a.cancelBubble=!0}};"mousewheel"==g?(c.deltaY=-.025*a.wheelDelta,a.wheelDeltaX&&(c.deltaX=-.025*a.wheelDeltaX)):c.deltaY=a.detail;return l.call(b,c)},c)}function q(b,g,c){var d,f;0==
b.deltaMode?(d=-Math.floor(a.opt.mousescrollstep/54*b.deltaX),f=-Math.floor(a.opt.mousescrollstep/54*b.deltaY)):1==b.deltaMode&&(d=-Math.floor(b.deltaX*a.opt.mousescrollstep),f=-Math.floor(b.deltaY*a.opt.mousescrollstep));g&&a.opt.oneaxismousemode&&0==d&&f&&(d=f,f=0,c&&(0>d?a.getScrollLeft()>=a.page.maxw:0>=a.getScrollLeft())&&(f=d,d=0));d&&(a.scrollmom&&a.scrollmom.stop(),a.lastdeltax+=d,a.debounced("mousewheelx",function(){var b=a.lastdeltax;a.lastdeltax=0;a.rail.drag||a.doScrollLeftBy(b)},15));
if(f){if(a.opt.nativeparentscrolling&&c&&!a.ispage&&!a.zoomactive)if(0>f){if(a.getScrollTop()>=a.page.maxh)return!0}else if(0>=a.getScrollTop())return!0;a.scrollmom&&a.scrollmom.stop();a.lastdeltay+=f;a.debounced("mousewheely",function(){var b=a.lastdeltay;a.lastdeltay=0;a.rail.drag||a.doScrollBy(b)},15)}b.stopImmediatePropagation();return b.preventDefault()}var a=this;this.version="3.6.6";this.name="nicescroll";this.me=c;this.opt={doc:e("body"),win:!1};e.extend(this.opt,J);this.opt.snapbackspeed=
80;if(k)for(var H in a.opt)"undefined"!=typeof k[H]&&(a.opt[H]=k[H]);this.iddoc=(this.doc=a.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/^BODY|HTML/.test(a.opt.win?a.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=!1!==a.opt.win;this.win=a.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;
this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=a.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.isrtlmode="auto"==this.opt.rtlmode?"rtl"==(this.win[0]==window?
this.body:this.win).css("direction"):!0===this.opt.rtlmode;this.observerbody=this.observerremover=this.observer=this.scrollmom=this.scrollrunning=!1;do this.id="ascrail"+P++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=this.rail=!1;this.visibility=!0;this.hidden=this.locked=this.railslocked=!1;this.cursoractive=!0;this.wheelprevented=!1;this.overflowx=a.opt.overflowx;this.overflowy=a.opt.overflowy;
this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;this.detected=R();var f=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=f.hastransform&&a.opt.hwacceleration)&&a.haswrapper;this.hasreversehr=this.isrtlmode&&!f.iswebkit;this.istouchcapable=!1;!f.cantouch||f.isios||f.isandroid||!f.iswebkit&&!f.ismozilla||(this.istouchcapable=!0,f.cantouch=!1);a.opt.enablemouselockapi||(f.hasmousecapture=!1,f.haspointerlock=
!1);this.debounced=function(b,g,c){var d=a.delaylist[b];a.delaylist[b]=g;d||(a.debouncedelayed=setTimeout(function(){if(a){var g=a.delaylist[b];a.delaylist[b]=!1;g.call(a)}},c))};var t=!1;this.synched=function(b,g){a.synclist[b]=g;(function(){t||(u(function(){t=!1;for(var b in a.synclist){var g=a.synclist[b];g&&g.call(a);a.synclist[b]=!1}}),t=!0)})();return b};this.unsynched=function(b){a.synclist[b]&&(a.synclist[b]=!1)};this.css=function(b,g){for(var c in g)a.saved.css.push([b,c,b.css(c)]),b.css(c,
g[c])};this.scrollTop=function(b){return"undefined"==typeof b?a.getScrollTop():a.setScrollTop(b)};this.scrollLeft=function(b){return"undefined"==typeof b?a.getScrollLeft():a.setScrollLeft(b)};var B=function(a,g,c,d,f,e,h){this.st=a;this.ed=g;this.spd=c;this.p1=d||0;this.p2=f||1;this.p3=e||0;this.p4=h||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};B.prototype={B2:function(a){return 3*a*a*(1-a)},B3:function(a){return 3*a*(1-a)*(1-a)},B4:function(a){return(1-a)*(1-a)*(1-a)},getNow:function(){var a=
1-((new Date).getTime()-this.ts)/this.spd,g=this.B2(a)+this.B3(a)+this.B4(a);return 0>a?this.ed:this.st+Math.round(this.df*g)},update:function(a,g){this.st=this.getNow();this.ed=a;this.spd=g;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};f.hastranslate3d&&f.isios&&this.doc.css("-webkit-backface-visibility","hidden");this.getScrollTop=function(b){if(!b){if(b=h())return 16==b.length?-b[13]:-b[5];if(a.timerscroll&&
a.timerscroll.bz)return a.timerscroll.bz.getNow()}return a.doc.translate.y};this.getScrollLeft=function(b){if(!b){if(b=h())return 16==b.length?-b[12]:-b[4];if(a.timerscroll&&a.timerscroll.bh)return a.timerscroll.bh.getNow()}return a.doc.translate.x};this.notifyScrollEvent=function(a){var g=document.createEvent("UIEvents");g.initUIEvent("scroll",!1,!0,window,1);g.niceevent=!0;a.dispatchEvent(g)};var L=this.isrtlmode?1:-1;f.hastranslate3d&&a.opt.enabletranslate3d?(this.setScrollTop=function(b,g){a.doc.translate.y=
b;a.doc.translate.ty=-1*b+"px";a.doc.css(f.trstyle,"translate3d("+a.doc.translate.tx+","+a.doc.translate.ty+",0px)");g||a.notifyScrollEvent(a.win[0])},this.setScrollLeft=function(b,g){a.doc.translate.x=b;a.doc.translate.tx=b*L+"px";a.doc.css(f.trstyle,"translate3d("+a.doc.translate.tx+","+a.doc.translate.ty+",0px)");g||a.notifyScrollEvent(a.win[0])}):(this.setScrollTop=function(b,g){a.doc.translate.y=b;a.doc.translate.ty=-1*b+"px";a.doc.css(f.trstyle,"translate("+a.doc.translate.tx+","+a.doc.translate.ty+
")");g||a.notifyScrollEvent(a.win[0])},this.setScrollLeft=function(b,g){a.doc.translate.x=b;a.doc.translate.tx=b*L+"px";a.doc.css(f.trstyle,"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");g||a.notifyScrollEvent(a.win[0])})}else this.getScrollTop=function(){return a.docscroll.scrollTop()},this.setScrollTop=function(b){return setTimeout(function(){a.docscroll.scrollTop(b)},1)},this.getScrollLeft=function(){return a.detected.ismozilla&&a.isrtlmode?Math.abs(a.docscroll.scrollLeft()):a.docscroll.scrollLeft()},
this.setScrollLeft=function(b){return setTimeout(function(){a.docscroll.scrollLeft(a.detected.ismozilla&&a.isrtlmode?-b:b)},1)};this.getTarget=function(a){return a?a.target?a.target:a.srcElement?a.srcElement:!1:!1};this.hasParent=function(a,g){if(!a)return!1;for(var c=a.target||a.srcElement||a||!1;c&&c.id!=g;)c=c.parentNode||!1;return!1!==c};var y={thin:1,medium:3,thick:5};this.getDocumentScrollOffset=function(){return{top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||
document.documentElement.scrollLeft}};this.getOffset=function(){if(a.isfixed){var b=a.win.offset(),g=a.getDocumentScrollOffset();b.top-=g.top;b.left-=g.left;return b}b=a.win.offset();if(!a.viewport)return b;g=a.viewport.offset();return{top:b.top-g.top,left:b.left-g.left}};this.updateScrollBar=function(b){if(a.ishwscroll)a.rail.css({height:a.win.innerHeight()-(a.opt.railpadding.top+a.opt.railpadding.bottom)}),a.railh&&a.railh.css({width:a.win.innerWidth()-(a.opt.railpadding.left+a.opt.railpadding.right)});
else{var g=a.getOffset(),c=g.top,f=g.left-(a.opt.railpadding.left+a.opt.railpadding.right),c=c+d(a.win,"border-top-width",!0),f=f+(a.rail.align?a.win.outerWidth()-d(a.win,"border-right-width")-a.rail.width:d(a.win,"border-left-width")),e=a.opt.railoffset;e&&(e.top&&(c+=e.top),e.left&&(f+=e.left));a.railslocked||a.rail.css({top:c,left:f,height:(b?b.h:a.win.innerHeight())-(a.opt.railpadding.top+a.opt.railpadding.bottom)});a.zoom&&a.zoom.css({top:c+1,left:1==a.rail.align?f-20:f+a.rail.width+4});if(a.railh&&
!a.railslocked){c=g.top;f=g.left;if(e=a.opt.railhoffset)e.top&&(c+=e.top),e.left&&(f+=e.left);b=a.railh.align?c+d(a.win,"border-top-width",!0)+a.win.innerHeight()-a.railh.height:c+d(a.win,"border-top-width",!0);f+=d(a.win,"border-left-width");a.railh.css({top:b-(a.opt.railpadding.top+a.opt.railpadding.bottom),left:f,width:a.railh.width})}}};this.doRailClick=function(b,g,c){var f;a.railslocked||(a.cancelEvent(b),g?(g=c?a.doScrollLeft:a.doScrollTop,f=c?(b.pageX-a.railh.offset().left-a.cursorwidth/2)*
a.scrollratio.x:(b.pageY-a.rail.offset().top-a.cursorheight/2)*a.scrollratio.y,g(f)):(g=c?a.doScrollLeftBy:a.doScrollBy,f=c?a.scroll.x:a.scroll.y,b=c?b.pageX-a.railh.offset().left:b.pageY-a.rail.offset().top,c=c?a.view.w:a.view.h,g(f>=b?c:-c)))};a.hasanimationframe=u;a.hascancelanimationframe=v;a.hasanimationframe?a.hascancelanimationframe||(v=function(){a.cancelAnimationFrame=!0}):(u=function(a){return setTimeout(a,15-Math.floor(+new Date/1E3)%16)},v=clearInterval);this.init=function(){a.saved.css=
[];if(f.isie7mobile||f.isoperamini)return!0;f.hasmstouch&&a.css(a.ispage?e("html"):a.win,{"-ms-touch-action":"none"});a.zindex="auto";a.zindex=a.ispage||"auto"!=a.opt.zindex?a.opt.zindex:n()||"auto";!a.ispage&&"auto"!=a.zindex&&a.zindex>z&&(z=a.zindex);a.isie&&0==a.zindex&&"auto"==a.opt.zindex&&(a.zindex="auto");if(!a.ispage||!f.cantouch&&!f.isieold&&!f.isie9mobile){var b=a.docscroll;a.ispage&&(b=a.haswrapper?a.win:a.doc);f.isie9mobile||a.css(b,{"overflow-y":"hidden"});a.ispage&&f.isie7&&("BODY"==
a.doc[0].nodeName?a.css(e("html"),{"overflow-y":"hidden"}):"HTML"==a.doc[0].nodeName&&a.css(e("body"),{"overflow-y":"hidden"}));!f.isios||a.ispage||a.haswrapper||a.css(e("body"),{"-webkit-overflow-scrolling":"touch"});var c=e(document.createElement("div"));c.css({position:"relative",top:0,"float":"right",width:a.opt.cursorwidth,height:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,
"border-radius":a.opt.cursorborderradius});c.hborder=parseFloat(c.outerHeight()-c.innerHeight());c.addClass("nicescroll-cursors");a.cursor=c;var l=e(document.createElement("div"));l.attr("id",a.id);l.addClass("nicescroll-rails nicescroll-rails-vr");var d,h,k=["left","right","top","bottom"],K;for(K in k)h=k[K],(d=a.opt.railpadding[h])?l.css("padding-"+h,d+"px"):a.opt.railpadding[h]=0;l.append(c);l.width=Math.max(parseFloat(a.opt.cursorwidth),c.outerWidth());l.css({width:l.width+"px",zIndex:a.zindex,
background:a.opt.background,cursor:"default"});l.visibility=!0;l.scrollable=!0;l.align="left"==a.opt.railalign?0:1;a.rail=l;c=a.rail.drag=!1;!a.opt.boxzoom||a.ispage||f.isieold||(c=document.createElement("div"),a.bind(c,"click",a.doZoom),a.bind(c,"mouseenter",function(){a.zoom.css("opacity",a.opt.cursoropacitymax)}),a.bind(c,"mouseleave",function(){a.zoom.css("opacity",a.opt.cursoropacitymin)}),a.zoom=e(c),a.zoom.css({cursor:"pointer","z-index":a.zindex,backgroundImage:"url("+a.opt.scriptpath+"zoomico.png)",
height:18,width:18,backgroundPosition:"0px 0px"}),a.opt.dblclickzoom&&a.bind(a.win,"dblclick",a.doZoom),f.cantouch&&a.opt.gesturezoom&&(a.ongesturezoom=function(b){1.5<b.scale&&a.doZoomIn(b);.8>b.scale&&a.doZoomOut(b);return a.cancelEvent(b)},a.bind(a.win,"gestureend",a.ongesturezoom)));a.railh=!1;var m;a.opt.horizrailenabled&&(a.css(b,{"overflow-x":"hidden"}),c=e(document.createElement("div")),c.css({position:"absolute",top:0,height:a.opt.cursorwidth,width:"0px","background-color":a.opt.cursorcolor,
border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius}),f.isieold&&c.css({overflow:"hidden"}),c.wborder=parseFloat(c.outerWidth()-c.innerWidth()),c.addClass("nicescroll-cursors"),a.cursorh=c,m=e(document.createElement("div")),m.attr("id",a.id+"-hr"),m.addClass("nicescroll-rails nicescroll-rails-hr"),m.height=Math.max(parseFloat(a.opt.cursorwidth),c.outerHeight()),
m.css({height:m.height+"px",zIndex:a.zindex,background:a.opt.background}),m.append(c),m.visibility=!0,m.scrollable=!0,m.align="top"==a.opt.railvalign?0:1,a.railh=m,a.railh.drag=!1);a.ispage?(l.css({position:"fixed",top:"0px",height:"100%"}),l.align?l.css({right:"0px"}):l.css({left:"0px"}),a.body.append(l),a.railh&&(m.css({position:"fixed",left:"0px",width:"100%"}),m.align?m.css({bottom:"0px"}):m.css({top:"0px"}),a.body.append(m))):(a.ishwscroll?("static"==a.win.css("position")&&a.css(a.win,{position:"relative"}),
b="HTML"==a.win[0].nodeName?a.body:a.win,e(b).scrollTop(0).scrollLeft(0),a.zoom&&(a.zoom.css({position:"absolute",top:1,right:0,"margin-right":l.width+4}),b.append(a.zoom)),l.css({position:"absolute",top:0}),l.align?l.css({right:0}):l.css({left:0}),b.append(l),m&&(m.css({position:"absolute",left:0,bottom:0}),m.align?m.css({bottom:0}):m.css({top:0}),b.append(m))):(a.isfixed="fixed"==a.win.css("position"),b=a.isfixed?"fixed":"absolute",a.isfixed||(a.viewport=a.getViewport(a.win[0])),a.viewport&&(a.body=
a.viewport,0==/fixed|absolute/.test(a.viewport.css("position"))&&a.css(a.viewport,{position:"relative"})),l.css({position:b}),a.zoom&&a.zoom.css({position:b}),a.updateScrollBar(),a.body.append(l),a.zoom&&a.body.append(a.zoom),a.railh&&(m.css({position:b}),a.body.append(m))),f.isios&&a.css(a.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),f.isie&&a.opt.disableoutline&&a.win.attr("hideFocus","true"),f.iswebkit&&a.opt.disableoutline&&a.win.css({outline:"none"}));!1===
a.opt.autohidemode?(a.autohidedom=!1,a.rail.css({opacity:a.opt.cursoropacitymax}),a.railh&&a.railh.css({opacity:a.opt.cursoropacitymax})):!0===a.opt.autohidemode||"leave"===a.opt.autohidemode?(a.autohidedom=e().add(a.rail),f.isie8&&(a.autohidedom=a.autohidedom.add(a.cursor)),a.railh&&(a.autohidedom=a.autohidedom.add(a.railh)),a.railh&&f.isie8&&(a.autohidedom=a.autohidedom.add(a.cursorh))):"scroll"==a.opt.autohidemode?(a.autohidedom=e().add(a.rail),a.railh&&(a.autohidedom=a.autohidedom.add(a.railh))):
"cursor"==a.opt.autohidemode?(a.autohidedom=e().add(a.cursor),a.railh&&(a.autohidedom=a.autohidedom.add(a.cursorh))):"hidden"==a.opt.autohidemode&&(a.autohidedom=!1,a.hide(),a.railslocked=!1);if(f.isie9mobile)a.scrollmom=new M(a),a.onmangotouch=function(){var b=a.getScrollTop(),c=a.getScrollLeft();if(b==a.scrollmom.lastscrolly&&c==a.scrollmom.lastscrollx)return!0;var g=b-a.mangotouch.sy,f=c-a.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(f,2)+Math.pow(g,2)))){var d=0>g?-1:1,l=0>f?-1:1,e=+new Date;
a.mangotouch.lazy&&clearTimeout(a.mangotouch.lazy);80<e-a.mangotouch.tm||a.mangotouch.dry!=d||a.mangotouch.drx!=l?(a.scrollmom.stop(),a.scrollmom.reset(c,b),a.mangotouch.sy=b,a.mangotouch.ly=b,a.mangotouch.sx=c,a.mangotouch.lx=c,a.mangotouch.dry=d,a.mangotouch.drx=l,a.mangotouch.tm=e):(a.scrollmom.stop(),a.scrollmom.update(a.mangotouch.sx-f,a.mangotouch.sy-g),a.mangotouch.tm=e,g=Math.max(Math.abs(a.mangotouch.ly-b),Math.abs(a.mangotouch.lx-c)),a.mangotouch.ly=b,a.mangotouch.lx=c,2<g&&(a.mangotouch.lazy=
setTimeout(function(){a.mangotouch.lazy=!1;a.mangotouch.dry=0;a.mangotouch.drx=0;a.mangotouch.tm=0;a.scrollmom.doMomentum(30)},100)))}},l=a.getScrollTop(),m=a.getScrollLeft(),a.mangotouch={sy:l,ly:l,dry:0,sx:m,lx:m,drx:0,lazy:!1,tm:0},a.bind(a.docscroll,"scroll",a.onmangotouch);else{if(f.cantouch||a.istouchcapable||a.opt.touchbehavior||f.hasmstouch){a.scrollmom=new M(a);a.ontouchstart=function(b){if(b.pointerType&&2!=b.pointerType&&"touch"!=b.pointerType)return!1;a.hasmoving=!1;if(!a.railslocked){var c;
if(f.hasmstouch)for(c=b.target?b.target:!1;c;){var g=e(c).getNiceScroll();if(0<g.length&&g[0].me==a.me)break;if(0<g.length)return!1;if("DIV"==c.nodeName&&c.id==a.id)break;c=c.parentNode?c.parentNode:!1}a.cancelScroll();if((c=a.getTarget(b))&&/INPUT/i.test(c.nodeName)&&/range/i.test(c.type))return a.stopPropagation(b);!("clientX"in b)&&"changedTouches"in b&&(b.clientX=b.changedTouches[0].clientX,b.clientY=b.changedTouches[0].clientY);a.forcescreen&&(g=b,b={original:b.original?b.original:b},b.clientX=
g.screenX,b.clientY=g.screenY);a.rail.drag={x:b.clientX,y:b.clientY,sx:a.scroll.x,sy:a.scroll.y,st:a.getScrollTop(),sl:a.getScrollLeft(),pt:2,dl:!1};if(a.ispage||!a.opt.directionlockdeadzone)a.rail.drag.dl="f";else{var g=e(window).width(),d=e(window).height(),d=Math.max(0,Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)-d),g=Math.max(0,Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)-g);a.rail.drag.ck=!a.rail.scrollable&&a.railh.scrollable?0<d?"v":
!1:a.rail.scrollable&&!a.railh.scrollable?0<g?"h":!1:!1;a.rail.drag.ck||(a.rail.drag.dl="f")}a.opt.touchbehavior&&a.isiframe&&f.isie&&(g=a.win.position(),a.rail.drag.x+=g.left,a.rail.drag.y+=g.top);a.hasmoving=!1;a.lastmouseup=!1;a.scrollmom.reset(b.clientX,b.clientY);if(!f.cantouch&&!this.istouchcapable&&!b.pointerType){if(!c||!/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))return!a.ispage&&f.hasmousecapture&&c.setCapture(),a.opt.touchbehavior?(c.onclick&&!c._onclick&&(c._onclick=c.onclick,c.onclick=
function(b){if(a.hasmoving)return!1;c._onclick.call(this,b)}),a.cancelEvent(b)):a.stopPropagation(b);/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type"))&&(pc={tg:c,click:!1},a.preventclick=pc)}}};a.ontouchend=function(b){if(!a.rail.drag)return!0;if(2==a.rail.drag.pt){if(b.pointerType&&2!=b.pointerType&&"touch"!=b.pointerType)return!1;a.scrollmom.doMomentum();a.rail.drag=!1;if(a.hasmoving&&(a.lastmouseup=!0,a.hideCursor(),f.hasmousecapture&&document.releaseCapture(),!f.cantouch))return a.cancelEvent(b)}else if(1==
a.rail.drag.pt)return a.onmouseup(b)};var p=a.opt.touchbehavior&&a.isiframe&&!f.hasmousecapture;a.ontouchmove=function(b,c){if(!a.rail.drag||b.targetTouches&&a.opt.preventmultitouchscrolling&&1<b.targetTouches.length||b.pointerType&&2!=b.pointerType&&"touch"!=b.pointerType)return!1;if(2==a.rail.drag.pt){if(f.cantouch&&f.isios&&"undefined"==typeof b.original)return!0;a.hasmoving=!0;a.preventclick&&!a.preventclick.click&&(a.preventclick.click=a.preventclick.tg.onclick||!1,a.preventclick.tg.onclick=
a.onpreventclick);b=e.extend({original:b},b);"changedTouches"in b&&(b.clientX=b.changedTouches[0].clientX,b.clientY=b.changedTouches[0].clientY);if(a.forcescreen){var g=b;b={original:b.original?b.original:b};b.clientX=g.screenX;b.clientY=g.screenY}var d,g=d=0;p&&!c&&(d=a.win.position(),g=-d.left,d=-d.top);var l=b.clientY+d;d=l-a.rail.drag.y;var h=b.clientX+g,w=h-a.rail.drag.x,k=a.rail.drag.st-d;a.ishwscroll&&a.opt.bouncescroll?0>k?k=Math.round(k/2):k>a.page.maxh&&(k=a.page.maxh+Math.round((k-a.page.maxh)/
2)):(0>k&&(l=k=0),k>a.page.maxh&&(k=a.page.maxh,l=0));var r;a.railh&&a.railh.scrollable&&(r=a.isrtlmode?w-a.rail.drag.sl:a.rail.drag.sl-w,a.ishwscroll&&a.opt.bouncescroll?0>r?r=Math.round(r/2):r>a.page.maxw&&(r=a.page.maxw+Math.round((r-a.page.maxw)/2)):(0>r&&(h=r=0),r>a.page.maxw&&(r=a.page.maxw,h=0)));g=!1;if(a.rail.drag.dl)g=!0,"v"==a.rail.drag.dl?r=a.rail.drag.sl:"h"==a.rail.drag.dl&&(k=a.rail.drag.st);else{d=Math.abs(d);var w=Math.abs(w),m=a.opt.directionlockdeadzone;if("v"==a.rail.drag.ck){if(d>
m&&w<=.3*d)return a.rail.drag=!1,!0;w>m&&(a.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==a.rail.drag.ck){if(w>m&&d<=.3*w)return a.rail.drag=!1,!0;d>m&&(a.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}a.synched("touchmove",function(){a.rail.drag&&2==a.rail.drag.pt&&(a.prepareTransition&&a.prepareTransition(0),a.rail.scrollable&&a.setScrollTop(k),a.scrollmom.update(h,l),a.railh&&a.railh.scrollable?(a.setScrollLeft(r),a.showCursor(k,r)):a.showCursor(k),
f.isie10&&document.selection.clear())});f.ischrome&&a.istouchcapable&&(g=!1);if(g)return a.cancelEvent(b)}else if(1==a.rail.drag.pt)return a.onmousemove(b)}}a.onmousedown=function(b,c){if(!a.rail.drag||1==a.rail.drag.pt){if(a.railslocked)return a.cancelEvent(b);a.cancelScroll();a.rail.drag={x:b.clientX,y:b.clientY,sx:a.scroll.x,sy:a.scroll.y,pt:1,hr:!!c};var g=a.getTarget(b);!a.ispage&&f.hasmousecapture&&g.setCapture();a.isiframe&&!f.hasmousecapture&&(a.saved.csspointerevents=a.doc.css("pointer-events"),
a.css(a.doc,{"pointer-events":"none"}));a.hasmoving=!1;return a.cancelEvent(b)}};a.onmouseup=function(b){if(a.rail.drag){if(1!=a.rail.drag.pt)return!0;f.hasmousecapture&&document.releaseCapture();a.isiframe&&!f.hasmousecapture&&a.doc.css("pointer-events",a.saved.csspointerevents);a.rail.drag=!1;a.hasmoving&&a.triggerScrollEnd();return a.cancelEvent(b)}};a.onmousemove=function(b){if(a.rail.drag){if(1==a.rail.drag.pt){if(f.ischrome&&0==b.which)return a.onmouseup(b);a.cursorfreezed=!0;a.hasmoving=!0;
if(a.rail.drag.hr){a.scroll.x=a.rail.drag.sx+(b.clientX-a.rail.drag.x);0>a.scroll.x&&(a.scroll.x=0);var c=a.scrollvaluemaxw;a.scroll.x>c&&(a.scroll.x=c)}else a.scroll.y=a.rail.drag.sy+(b.clientY-a.rail.drag.y),0>a.scroll.y&&(a.scroll.y=0),c=a.scrollvaluemax,a.scroll.y>c&&(a.scroll.y=c);a.synched("mousemove",function(){a.rail.drag&&1==a.rail.drag.pt&&(a.showCursor(),a.rail.drag.hr?a.hasreversehr?a.doScrollLeft(a.scrollvaluemaxw-Math.round(a.scroll.x*a.scrollratio.x),a.opt.cursordragspeed):a.doScrollLeft(Math.round(a.scroll.x*
a.scrollratio.x),a.opt.cursordragspeed):a.doScrollTop(Math.round(a.scroll.y*a.scrollratio.y),a.opt.cursordragspeed))});return a.cancelEvent(b)}}else a.checkarea=0};if(f.cantouch||a.opt.touchbehavior)a.onpreventclick=function(b){if(a.preventclick)return a.preventclick.tg.onclick=a.preventclick.click,a.preventclick=!1,a.cancelEvent(b)},a.bind(a.win,"mousedown",a.ontouchstart),a.onclick=f.isios?!1:function(b){return a.lastmouseup?(a.lastmouseup=!1,a.cancelEvent(b)):!0},a.opt.grabcursorenabled&&f.cursorgrabvalue&&
(a.css(a.ispage?a.doc:a.win,{cursor:f.cursorgrabvalue}),a.css(a.rail,{cursor:f.cursorgrabvalue}));else{var q=function(b){if(a.selectiondrag){if(b){var c=a.win.outerHeight();b=b.pageY-a.selectiondrag.top;0<b&&b<c&&(b=0);b>=c&&(b-=c);a.selectiondrag.df=b}0!=a.selectiondrag.df&&(a.doScrollBy(2*-Math.floor(a.selectiondrag.df/6)),a.debounced("doselectionscroll",function(){q()},50))}};a.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?
function(){return"None"!=document.selection.type}:function(){return!1};a.onselectionstart=function(b){a.ispage||(a.selectiondrag=a.win.offset())};a.onselectionend=function(b){a.selectiondrag=!1};a.onselectiondrag=function(b){a.selectiondrag&&a.hasTextSelected()&&a.debounced("selectionscroll",function(){q(b)},250)}}f.hasw3ctouch?(a.css(a.rail,{"touch-action":"none"}),a.css(a.cursor,{"touch-action":"none"}),a.bind(a.win,"pointerdown",a.ontouchstart),a.bind(document,"pointerup",a.ontouchend),a.bind(document,
"pointermove",a.ontouchmove)):f.hasmstouch?(a.css(a.rail,{"-ms-touch-action":"none"}),a.css(a.cursor,{"-ms-touch-action":"none"}),a.bind(a.win,"MSPointerDown",a.ontouchstart),a.bind(document,"MSPointerUp",a.ontouchend),a.bind(document,"MSPointerMove",a.ontouchmove),a.bind(a.cursor,"MSGestureHold",function(a){a.preventDefault()}),a.bind(a.cursor,"contextmenu",function(a){a.preventDefault()})):this.istouchcapable&&(a.bind(a.win,"touchstart",a.ontouchstart),a.bind(document,"touchend",a.ontouchend),a.bind(document,
"touchcancel",a.ontouchend),a.bind(document,"touchmove",a.ontouchmove));if(a.opt.cursordragontouch||!f.cantouch&&!a.opt.touchbehavior)a.rail.css({cursor:"default"}),a.railh&&a.railh.css({cursor:"default"}),a.jqbind(a.rail,"mouseenter",function(){if(!a.ispage&&!a.win.is(":visible"))return!1;a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.rail,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}),a.opt.sensitiverail&&(a.bind(a.rail,"click",function(b){a.doRailClick(b,
!1,!1)}),a.bind(a.rail,"dblclick",function(b){a.doRailClick(b,!0,!1)}),a.bind(a.cursor,"click",function(b){a.cancelEvent(b)}),a.bind(a.cursor,"dblclick",function(b){a.cancelEvent(b)})),a.railh&&(a.jqbind(a.railh,"mouseenter",function(){if(!a.ispage&&!a.win.is(":visible"))return!1;a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.railh,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}),a.opt.sensitiverail&&(a.bind(a.railh,"click",function(b){a.doRailClick(b,!1,
!0)}),a.bind(a.railh,"dblclick",function(b){a.doRailClick(b,!0,!0)}),a.bind(a.cursorh,"click",function(b){a.cancelEvent(b)}),a.bind(a.cursorh,"dblclick",function(b){a.cancelEvent(b)})));f.cantouch||a.opt.touchbehavior?(a.bind(f.hasmousecapture?a.win:document,"mouseup",a.ontouchend),a.bind(document,"mousemove",a.ontouchmove),a.onclick&&a.bind(document,"click",a.onclick),a.opt.cursordragontouch&&(a.bind(a.cursor,"mousedown",a.onmousedown),a.bind(a.cursor,"mouseup",a.onmouseup),a.cursorh&&a.bind(a.cursorh,
"mousedown",function(b){a.onmousedown(b,!0)}),a.cursorh&&a.bind(a.cursorh,"mouseup",a.onmouseup))):(a.bind(f.hasmousecapture?a.win:document,"mouseup",a.onmouseup),a.bind(document,"mousemove",a.onmousemove),a.onclick&&a.bind(document,"click",a.onclick),a.bind(a.cursor,"mousedown",a.onmousedown),a.bind(a.cursor,"mouseup",a.onmouseup),a.railh&&(a.bind(a.cursorh,"mousedown",function(b){a.onmousedown(b,!0)}),a.bind(a.cursorh,"mouseup",a.onmouseup)),!a.ispage&&a.opt.enablescrollonselection&&(a.bind(a.win[0],
"mousedown",a.onselectionstart),a.bind(document,"mouseup",a.onselectionend),a.bind(a.cursor,"mouseup",a.onselectionend),a.cursorh&&a.bind(a.cursorh,"mouseup",a.onselectionend),a.bind(document,"mousemove",a.onselectiondrag)),a.zoom&&(a.jqbind(a.zoom,"mouseenter",function(){a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.zoom,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()})));a.opt.enablemousewheel&&(a.isiframe||a.bind(f.isie&&a.ispage?document:a.win,"mousewheel",
a.onmousewheel),a.bind(a.rail,"mousewheel",a.onmousewheel),a.railh&&a.bind(a.railh,"mousewheel",a.onmousewheelhr));a.ispage||f.cantouch||/HTML|^BODY/.test(a.win[0].nodeName)||(a.win.attr("tabindex")||a.win.attr({tabindex:O++}),a.jqbind(a.win,"focus",function(b){A=a.getTarget(b).id||!0;a.hasfocus=!0;a.canshowonmouseevent&&a.noticeCursor()}),a.jqbind(a.win,"blur",function(b){A=!1;a.hasfocus=!1}),a.jqbind(a.win,"mouseenter",function(b){E=a.getTarget(b).id||!0;a.hasmousefocus=!0;a.canshowonmouseevent&&
a.noticeCursor()}),a.jqbind(a.win,"mouseleave",function(){E=!1;a.hasmousefocus=!1;a.rail.drag||a.hideCursor()}))}a.onkeypress=function(b){if(a.railslocked&&0==a.page.maxh)return!0;b=b?b:window.e;var c=a.getTarget(b);if(c&&/INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName)&&(!c.getAttribute("type")&&!c.type||!/submit|button|cancel/i.tp)||e(c).attr("contenteditable"))return!0;if(a.hasfocus||a.hasmousefocus&&!A||a.ispage&&!A&&!E){c=b.keyCode;if(a.railslocked&&27!=c)return a.cancelEvent(b);var g=b.ctrlKey||
!1,d=b.shiftKey||!1,f=!1;switch(c){case 38:case 63233:a.doScrollBy(72);f=!0;break;case 40:case 63235:a.doScrollBy(-72);f=!0;break;case 37:case 63232:a.railh&&(g?a.doScrollLeft(0):a.doScrollLeftBy(72),f=!0);break;case 39:case 63234:a.railh&&(g?a.doScrollLeft(a.page.maxw):a.doScrollLeftBy(-72),f=!0);break;case 33:case 63276:a.doScrollBy(a.view.h);f=!0;break;case 34:case 63277:a.doScrollBy(-a.view.h);f=!0;break;case 36:case 63273:a.railh&&g?a.doScrollPos(0,0):a.doScrollTo(0);f=!0;break;case 35:case 63275:a.railh&&
g?a.doScrollPos(a.page.maxw,a.page.maxh):a.doScrollTo(a.page.maxh);f=!0;break;case 32:a.opt.spacebarenabled&&(d?a.doScrollBy(a.view.h):a.doScrollBy(-a.view.h),f=!0);break;case 27:a.zoomactive&&(a.doZoom(),f=!0)}if(f)return a.cancelEvent(b)}};a.opt.enablekeyboard&&a.bind(document,f.isopera&&!f.isopera12?"keypress":"keydown",a.onkeypress);a.bind(document,"keydown",function(b){b.ctrlKey&&(a.wheelprevented=!0)});a.bind(document,"keyup",function(b){b.ctrlKey||(a.wheelprevented=!1)});a.bind(window,"blur",
function(b){a.wheelprevented=!1});a.bind(window,"resize",a.lazyResize);a.bind(window,"orientationchange",a.lazyResize);a.bind(window,"load",a.lazyResize);if(f.ischrome&&!a.ispage&&!a.haswrapper){var t=a.win.attr("style"),l=parseFloat(a.win.css("width"))+1;a.win.css("width",l);a.synched("chromefix",function(){a.win.attr("style",t)})}a.onAttributeChange=function(b){a.lazyResize(a.isieold?250:30)};!1!==x&&(a.observerbody=new x(function(b){b.forEach(function(b){if("attributes"==b.type)return e("body").hasClass("modal-open")&&
!e.contains(e(".modal-dialog")[0],a.doc[0])?a.hide():a.show()});if(document.body.scrollHeight!=a.page.maxh)return a.lazyResize(30)}),a.observerbody.observe(document.body,{childList:!0,subtree:!0,characterData:!1,attributes:!0,attributeFilter:["class"]}));a.ispage||a.haswrapper||(!1!==x?(a.observer=new x(function(b){b.forEach(a.onAttributeChange)}),a.observer.observe(a.win[0],{childList:!0,characterData:!1,attributes:!0,subtree:!1}),a.observerremover=new x(function(b){b.forEach(function(b){if(0<b.removedNodes.length)for(var c in b.removedNodes)if(a&&
b.removedNodes[c]==a.win[0])return a.remove()})}),a.observerremover.observe(a.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(a.bind(a.win,f.isie&&!f.isie9?"propertychange":"DOMAttrModified",a.onAttributeChange),f.isie9&&a.win[0].attachEvent("onpropertychange",a.onAttributeChange),a.bind(a.win,"DOMNodeRemoved",function(b){b.target==a.win[0]&&a.remove()})));!a.ispage&&a.opt.boxzoom&&a.bind(window,"resize",a.resizeZoom);a.istextarea&&(a.bind(a.win,"keydown",a.lazyResize),
a.bind(a.win,"mouseup",a.lazyResize));a.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var N=function(){a.iframexd=!1;var b;try{b="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(c){a.iframexd=!0,b=!1}if(a.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;a.forcescreen=!0;a.isiframe&&(a.iframe={doc:e(b),html:a.doc.contents().find("html")[0],body:a.doc.contents().find("body")[0]},a.getContentSize=function(){return{w:Math.max(a.iframe.html.scrollWidth,
a.iframe.body.scrollWidth),h:Math.max(a.iframe.html.scrollHeight,a.iframe.body.scrollHeight)}},a.docscroll=e(a.iframe.body));if(!f.isios&&a.opt.iframeautoresize&&!a.isiframe){a.win.scrollTop(0);a.doc.height("");var g=Math.max(b.getElementsByTagName("html")[0].scrollHeight,b.body.scrollHeight);a.doc.height(g)}a.lazyResize(30);f.isie7&&a.css(e(a.iframe.html),{"overflow-y":"hidden"});a.css(e(a.iframe.body),{"overflow-y":"hidden"});f.isios&&a.haswrapper&&a.css(e(b.body),{"-webkit-transform":"translate3d(0,0,0)"});
"contentWindow"in this?a.bind(this.contentWindow,"scroll",a.onscroll):a.bind(b,"scroll",a.onscroll);a.opt.enablemousewheel&&a.bind(b,"mousewheel",a.onmousewheel);a.opt.enablekeyboard&&a.bind(b,f.isopera?"keypress":"keydown",a.onkeypress);if(f.cantouch||a.opt.touchbehavior)a.bind(b,"mousedown",a.ontouchstart),a.bind(b,"mousemove",function(b){return a.ontouchmove(b,!0)}),a.opt.grabcursorenabled&&f.cursorgrabvalue&&a.css(e(b.body),{cursor:f.cursorgrabvalue});a.bind(b,"mouseup",a.ontouchend);a.zoom&&
(a.opt.dblclickzoom&&a.bind(b,"dblclick",a.doZoom),a.ongesturezoom&&a.bind(b,"gestureend",a.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){N.call(a.doc[0],!1)},500);a.bind(this.doc,"load",N)}};this.showCursor=function(b,c){a.cursortimeout&&(clearTimeout(a.cursortimeout),a.cursortimeout=0);if(a.rail){a.autohidedom&&(a.autohidedom.stop().css({opacity:a.opt.cursoropacitymax}),a.cursoractive=!0);a.rail.drag&&1==a.rail.drag.pt||("undefined"!=typeof b&&
!1!==b&&(a.scroll.y=Math.round(1*b/a.scrollratio.y)),"undefined"!=typeof c&&(a.scroll.x=Math.round(1*c/a.scrollratio.x)));a.cursor.css({height:a.cursorheight,top:a.scroll.y});if(a.cursorh){var d=a.hasreversehr?a.scrollvaluemaxw-a.scroll.x:a.scroll.x;!a.rail.align&&a.rail.visibility?a.cursorh.css({width:a.cursorwidth,left:d+a.rail.width}):a.cursorh.css({width:a.cursorwidth,left:d});a.cursoractive=!0}a.zoom&&a.zoom.stop().css({opacity:a.opt.cursoropacitymax})}};this.hideCursor=function(b){a.cursortimeout||
!a.rail||!a.autohidedom||a.hasmousefocus&&"leave"==a.opt.autohidemode||(a.cursortimeout=setTimeout(function(){a.rail.active&&a.showonmouseevent||(a.autohidedom.stop().animate({opacity:a.opt.cursoropacitymin}),a.zoom&&a.zoom.stop().animate({opacity:a.opt.cursoropacitymin}),a.cursoractive=!1);a.cursortimeout=0},b||a.opt.hidecursordelay))};this.noticeCursor=function(b,c,d){a.showCursor(c,d);a.rail.active||a.hideCursor(b)};this.getContentSize=a.ispage?function(){return{w:Math.max(document.body.scrollWidth,
document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:a.haswrapper?function(){return{w:a.doc.outerWidth()+parseInt(a.win.css("paddingLeft"))+parseInt(a.win.css("paddingRight")),h:a.doc.outerHeight()+parseInt(a.win.css("paddingTop"))+parseInt(a.win.css("paddingBottom"))}}:function(){return{w:a.docscroll[0].scrollWidth,h:a.docscroll[0].scrollHeight}};this.onResize=function(b,c){if(!a||!a.win)return!1;if(!a.haswrapper&&!a.ispage){if("none"==
a.win.css("display"))return a.visibility&&a.hideRail().hideRailHr(),!1;a.hidden||a.visibility||a.showRail().showRailHr()}var d=a.page.maxh,f=a.page.maxw,e=a.view.h,h=a.view.w;a.view={w:a.ispage?a.win.width():parseInt(a.win[0].clientWidth),h:a.ispage?a.win.height():parseInt(a.win[0].clientHeight)};a.page=c?c:a.getContentSize();a.page.maxh=Math.max(0,a.page.h-a.view.h);a.page.maxw=Math.max(0,a.page.w-a.view.w);if(a.page.maxh==d&&a.page.maxw==f&&a.view.w==h&&a.view.h==e){if(a.ispage)return a;d=a.win.offset();
if(a.lastposition&&(f=a.lastposition,f.top==d.top&&f.left==d.left))return a;a.lastposition=d}0==a.page.maxh?(a.hideRail(),a.scrollvaluemax=0,a.scroll.y=0,a.scrollratio.y=0,a.cursorheight=0,a.setScrollTop(0),a.rail&&(a.rail.scrollable=!1)):(a.page.maxh-=a.opt.railpadding.top+a.opt.railpadding.bottom,a.rail.scrollable=!0);0==a.page.maxw?(a.hideRailHr(),a.scrollvaluemaxw=0,a.scroll.x=0,a.scrollratio.x=0,a.cursorwidth=0,a.setScrollLeft(0),a.railh&&(a.railh.scrollable=!1)):(a.page.maxw-=a.opt.railpadding.left+
a.opt.railpadding.right,a.railh&&(a.railh.scrollable=a.opt.horizrailenabled));a.railslocked=a.locked||0==a.page.maxh&&0==a.page.maxw;if(a.railslocked)return a.ispage||a.updateScrollBar(a.view),!1;a.hidden||a.visibility?!a.railh||a.hidden||a.railh.visibility||a.showRailHr():a.showRail().showRailHr();a.istextarea&&a.win.css("resize")&&"none"!=a.win.css("resize")&&(a.view.h-=20);a.cursorheight=Math.min(a.view.h,Math.round(a.view.h/a.page.h*a.view.h));a.cursorheight=a.opt.cursorfixedheight?a.opt.cursorfixedheight:
Math.max(a.opt.cursorminheight,a.cursorheight);a.cursorwidth=Math.min(a.view.w,Math.round(a.view.w/a.page.w*a.view.w));a.cursorwidth=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorwidth);a.scrollvaluemax=a.view.h-a.cursorheight-a.cursor.hborder-(a.opt.railpadding.top+a.opt.railpadding.bottom);a.railh&&(a.railh.width=0<a.page.maxh?a.view.w-a.rail.width:a.view.w,a.scrollvaluemaxw=a.railh.width-a.cursorwidth-a.cursorh.wborder-(a.opt.railpadding.left+a.opt.railpadding.right));
a.ispage||a.updateScrollBar(a.view);a.scrollratio={x:a.page.maxw/a.scrollvaluemaxw,y:a.page.maxh/a.scrollvaluemax};a.getScrollTop()>a.page.maxh?a.doScrollTop(a.page.maxh):(a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y)),a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x)),a.cursoractive&&a.noticeCursor());a.scroll.y&&0==a.getScrollTop()&&a.doScrollTo(Math.floor(a.scroll.y*a.scrollratio.y));return a};this.resize=a.onResize;this.lazyResize=function(b){b=isNaN(b)?30:b;a.debounced("resize",
a.resize,b);return a};this.jqbind=function(b,c,d){a.events.push({e:b,n:c,f:d,q:!0});e(b).bind(c,d)};this.bind=function(b,c,d,e){var h="jquery"in b?b[0]:b;"mousewheel"==c?"onwheel"in a.win?a._bind(h,"wheel",d,e||!1):(b="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",p(h,b,d,e||!1),"DOMMouseScroll"==b&&p(h,"MozMousePixelScroll",d,e||!1)):h.addEventListener?(f.cantouch&&/mouseup|mousedown|mousemove/.test(c)&&a._bind(h,"mousedown"==c?"touchstart":"mouseup"==c?"touchend":"touchmove",
function(a){if(a.touches){if(2>a.touches.length){var b=a.touches.length?a.touches[0]:a;b.original=a;d.call(this,b)}}else a.changedTouches&&(b=a.changedTouches[0],b.original=a,d.call(this,b))},e||!1),a._bind(h,c,d,e||!1),f.cantouch&&"mouseup"==c&&a._bind(h,"touchcancel",d,e||!1)):a._bind(h,c,function(b){(b=b||window.event||!1)&&b.srcElement&&(b.target=b.srcElement);"pageY"in b||(b.pageX=b.clientX+document.documentElement.scrollLeft,b.pageY=b.clientY+document.documentElement.scrollTop);return!1===d.call(h,
b)||!1===e?a.cancelEvent(b):!0})};f.haseventlistener?(this._bind=function(b,c,d,f){a.events.push({e:b,n:c,f:d,b:f,q:!1});b.addEventListener(c,d,f||!1)},this.cancelEvent=function(a){if(!a)return!1;a=a.original?a.original:a;a.preventDefault();a.stopPropagation();a.preventManipulation&&a.preventManipulation();return!1},this.stopPropagation=function(a){if(!a)return!1;a=a.original?a.original:a;a.stopPropagation();return!1},this._unbind=function(a,c,d,f){a.removeEventListener(c,d,f)}):(this._bind=function(b,
c,d,f){a.events.push({e:b,n:c,f:d,b:f,q:!1});b.attachEvent?b.attachEvent("on"+c,d):b["on"+c]=d},this.cancelEvent=function(a){a=window.event||!1;if(!a)return!1;a.cancelBubble=!0;a.cancel=!0;return a.returnValue=!1},this.stopPropagation=function(a){a=window.event||!1;if(!a)return!1;a.cancelBubble=!0;return!1},this._unbind=function(a,c,d,f){a.detachEvent?a.detachEvent("on"+c,d):a["on"+c]=!1});this.unbindAll=function(){for(var b=0;b<a.events.length;b++){var c=a.events[b];c.q?c.e.unbind(c.n,c.f):a._unbind(c.e,
c.n,c.f,c.b)}};this.showRail=function(){0==a.page.maxh||!a.ispage&&"none"==a.win.css("display")||(a.visibility=!0,a.rail.visibility=!0,a.rail.css("display","block"));return a};this.showRailHr=function(){if(!a.railh)return a;0==a.page.maxw||!a.ispage&&"none"==a.win.css("display")||(a.railh.visibility=!0,a.railh.css("display","block"));return a};this.hideRail=function(){a.visibility=!1;a.rail.visibility=!1;a.rail.css("display","none");return a};this.hideRailHr=function(){if(!a.railh)return a;a.railh.visibility=
!1;a.railh.css("display","none");return a};this.show=function(){a.hidden=!1;a.railslocked=!1;return a.showRail().showRailHr()};this.hide=function(){a.hidden=!0;a.railslocked=!0;return a.hideRail().hideRailHr()};this.toggle=function(){return a.hidden?a.show():a.hide()};this.remove=function(){a.stop();a.cursortimeout&&clearTimeout(a.cursortimeout);a.debouncedelayed&&clearTimeout(a.debouncedelayed);a.doZoomOut();a.unbindAll();f.isie9&&a.win[0].detachEvent("onpropertychange",a.onAttributeChange);!1!==
a.observer&&a.observer.disconnect();!1!==a.observerremover&&a.observerremover.disconnect();!1!==a.observerbody&&a.observerbody.disconnect();a.events=null;a.cursor&&a.cursor.remove();a.cursorh&&a.cursorh.remove();a.rail&&a.rail.remove();a.railh&&a.railh.remove();a.zoom&&a.zoom.remove();for(var b=0;b<a.saved.css.length;b++){var c=a.saved.css[b];c[0].css(c[1],"undefined"==typeof c[2]?"":c[2])}a.saved=!1;a.me.data("__nicescroll","");var d=e.nicescroll;d.each(function(b){if(this&&this.id===a.id){delete d[b];
for(var c=++b;c<d.length;c++,b++)d[b]=d[c];d.length--;d.length&&delete d[d.length]}});for(var h in a)a[h]=null,delete a[h];a=null};this.scrollstart=function(b){this.onscrollstart=b;return a};this.scrollend=function(b){this.onscrollend=b;return a};this.scrollcancel=function(b){this.onscrollcancel=b;return a};this.zoomin=function(b){this.onzoomin=b;return a};this.zoomout=function(b){this.onzoomout=b;return a};this.isScrollable=function(a){a=a.target?a.target:a;if("OPTION"==a.nodeName)return!0;for(;a&&
1==a.nodeType&&!/^BODY|HTML/.test(a.nodeName);){var c=e(a),c=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(c))return a.clientHeight!=a.scrollHeight;a=a.parentNode?a.parentNode:!1}return!1};this.getViewport=function(a){for(a=a&&a.parentNode?a.parentNode:!1;a&&1==a.nodeType&&!/^BODY|HTML/.test(a.nodeName);){var c=e(a);if(/fixed|absolute/.test(c.css("position")))return c;var d=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(d)&&
a.clientHeight!=a.scrollHeight||0<c.getNiceScroll().length)return c;a=a.parentNode?a.parentNode:!1}return!1};this.triggerScrollEnd=function(){if(a.onscrollend){var b=a.getScrollLeft(),c=a.getScrollTop();a.onscrollend.call(a,{type:"scrollend",current:{x:b,y:c},end:{x:b,y:c}})}};this.onmousewheel=function(b){if(!a.wheelprevented){if(a.railslocked)return a.debounced("checkunlock",a.resize,250),!0;if(a.rail.drag)return a.cancelEvent(b);"auto"==a.opt.oneaxismousemode&&0!=b.deltaX&&(a.opt.oneaxismousemode=
!1);if(a.opt.oneaxismousemode&&0==b.deltaX&&!a.rail.scrollable)return a.railh&&a.railh.scrollable?a.onmousewheelhr(b):!0;var c=+new Date,d=!1;a.opt.preservenativescrolling&&a.checkarea+600<c&&(a.nativescrollingarea=a.isScrollable(b),d=!0);a.checkarea=c;if(a.nativescrollingarea)return!0;if(b=q(b,!1,d))a.checkarea=0;return b}};this.onmousewheelhr=function(b){if(!a.wheelprevented){if(a.railslocked||!a.railh.scrollable)return!0;if(a.rail.drag)return a.cancelEvent(b);var c=+new Date,d=!1;a.opt.preservenativescrolling&&
a.checkarea+600<c&&(a.nativescrollingarea=a.isScrollable(b),d=!0);a.checkarea=c;return a.nativescrollingarea?!0:a.railslocked?a.cancelEvent(b):q(b,!0,d)}};this.stop=function(){a.cancelScroll();a.scrollmon&&a.scrollmon.stop();a.cursorfreezed=!1;a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.noticeCursor();return a};this.getTransitionSpeed=function(b){b=Math.min(Math.round(10*a.opt.scrollspeed),Math.round(b/20*a.opt.scrollspeed));return 20<b?b:0};a.opt.smoothscroll?a.ishwscroll&&f.hastransition&&
a.opt.usetransition&&a.opt.smoothscroll?(this.prepareTransition=function(b,c){var d=c?20<b?b:0:a.getTransitionSpeed(b),e=d?f.prefixstyle+"transform "+d+"ms ease-out":"";a.lasttransitionstyle&&a.lasttransitionstyle==e||(a.lasttransitionstyle=e,a.doc.css(f.transitionstyle,e));return d},this.doScrollLeft=function(b,c){var d=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(b,d,c)},this.doScrollTop=function(b,c){var d=a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(d,b,c)},this.doScrollPos=
function(b,c,d){var e=a.getScrollTop(),h=a.getScrollLeft();(0>(a.newscrolly-e)*(c-e)||0>(a.newscrollx-h)*(b-h))&&a.cancelScroll();0==a.opt.bouncescroll&&(0>c?c=0:c>a.page.maxh&&(c=a.page.maxh),0>b?b=0:b>a.page.maxw&&(b=a.page.maxw));if(a.scrollrunning&&b==a.newscrollx&&c==a.newscrolly)return!1;a.newscrolly=c;a.newscrollx=b;a.newscrollspeed=d||!1;if(a.timer)return!1;a.timer=setTimeout(function(){var d=a.getScrollTop(),e=a.getScrollLeft(),h=Math.round(Math.sqrt(Math.pow(b-e,2)+Math.pow(c-d,2))),h=a.newscrollspeed&&
1<a.newscrollspeed?a.newscrollspeed:a.getTransitionSpeed(h);a.newscrollspeed&&1>=a.newscrollspeed&&(h*=a.newscrollspeed);a.prepareTransition(h,!0);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);0<h&&(!a.scrollrunning&&a.onscrollstart&&a.onscrollstart.call(a,{type:"scrollstart",current:{x:e,y:d},request:{x:b,y:c},end:{x:a.newscrollx,y:a.newscrolly},speed:h}),f.transitionend?a.scrollendtrapped||(a.scrollendtrapped=!0,a.bind(a.doc,f.transitionend,a.onScrollTransitionEnd,!1)):(a.scrollendtrapped&&
clearTimeout(a.scrollendtrapped),a.scrollendtrapped=setTimeout(a.onScrollTransitionEnd,h)),a.timerscroll={bz:new B(d,a.newscrolly,h,0,0,.58,1),bh:new B(e,a.newscrollx,h,0,0,.58,1)},a.cursorfreezed||(a.timerscroll.tm=setInterval(function(){a.showCursor(a.getScrollTop(),a.getScrollLeft())},60)));a.synched("doScroll-set",function(){a.timer=0;a.scrollendtrapped&&(a.scrollrunning=!0);a.setScrollTop(a.newscrolly);a.setScrollLeft(a.newscrollx);if(!a.scrollendtrapped)a.onScrollTransitionEnd()})},50)},this.cancelScroll=
function(){if(!a.scrollendtrapped)return!0;var b=a.getScrollTop(),c=a.getScrollLeft();a.scrollrunning=!1;f.transitionend||clearTimeout(f.transitionend);a.scrollendtrapped=!1;a._unbind(a.doc[0],f.transitionend,a.onScrollTransitionEnd);a.prepareTransition(0);a.setScrollTop(b);a.railh&&a.setScrollLeft(c);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);a.timerscroll=!1;a.cursorfreezed=!1;a.showCursor(b,c);return a},this.onScrollTransitionEnd=function(){a.scrollendtrapped&&a._unbind(a.doc[0],
f.transitionend,a.onScrollTransitionEnd);a.scrollendtrapped=!1;a.prepareTransition(0);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);a.timerscroll=!1;var b=a.getScrollTop(),c=a.getScrollLeft();a.setScrollTop(b);a.railh&&a.setScrollLeft(c);a.noticeCursor(!1,b,c);a.cursorfreezed=!1;0>b?b=0:b>a.page.maxh&&(b=a.page.maxh);0>c?c=0:c>a.page.maxw&&(c=a.page.maxw);if(b!=a.newscrolly||c!=a.newscrollx)return a.doScrollPos(c,b,a.opt.snapbackspeed);a.onscrollend&&a.scrollrunning&&a.triggerScrollEnd();
a.scrollrunning=!1}):(this.doScrollLeft=function(b,c){var d=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(b,d,c)},this.doScrollTop=function(b,c){var d=a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(d,b,c)},this.doScrollPos=function(b,c,d){function f(){if(a.cancelAnimationFrame)return!0;a.scrollrunning=!0;if(q=1-q)return a.timer=u(f)||1;var b=0,c,d,e=d=a.getScrollTop();if(a.dst.ay){e=a.bzscroll?a.dst.py+a.bzscroll.getNow()*a.dst.ay:a.newscrolly;c=e-d;if(0>c&&e<a.newscrolly||
0<c&&e>a.newscrolly)e=a.newscrolly;a.setScrollTop(e);e==a.newscrolly&&(b=1)}else b=1;d=c=a.getScrollLeft();if(a.dst.ax){d=a.bzscroll?a.dst.px+a.bzscroll.getNow()*a.dst.ax:a.newscrollx;c=d-c;if(0>c&&d<a.newscrollx||0<c&&d>a.newscrollx)d=a.newscrollx;a.setScrollLeft(d);d==a.newscrollx&&(b+=1)}else b+=1;2==b?(a.timer=0,a.cursorfreezed=!1,a.bzscroll=!1,a.scrollrunning=!1,0>e?e=0:e>a.page.maxh&&(e=a.page.maxh),0>d?d=0:d>a.page.maxw&&(d=a.page.maxw),d!=a.newscrollx||e!=a.newscrolly?a.doScrollPos(d,e):a.onscrollend&&
a.triggerScrollEnd()):a.timer=u(f)||1}c="undefined"==typeof c||!1===c?a.getScrollTop(!0):c;if(a.timer&&a.newscrolly==c&&a.newscrollx==b)return!0;a.timer&&v(a.timer);a.timer=0;var e=a.getScrollTop(),h=a.getScrollLeft();(0>(a.newscrolly-e)*(c-e)||0>(a.newscrollx-h)*(b-h))&&a.cancelScroll();a.newscrolly=c;a.newscrollx=b;a.bouncescroll&&a.rail.visibility||(0>a.newscrolly?a.newscrolly=0:a.newscrolly>a.page.maxh&&(a.newscrolly=a.page.maxh));a.bouncescroll&&a.railh.visibility||(0>a.newscrollx?a.newscrollx=
0:a.newscrollx>a.page.maxw&&(a.newscrollx=a.page.maxw));a.dst={};a.dst.x=b-h;a.dst.y=c-e;a.dst.px=h;a.dst.py=e;var k=Math.round(Math.sqrt(Math.pow(a.dst.x,2)+Math.pow(a.dst.y,2)));a.dst.ax=a.dst.x/k;a.dst.ay=a.dst.y/k;var n=0,p=k;0==a.dst.x?(n=e,p=c,a.dst.ay=1,a.dst.py=0):0==a.dst.y&&(n=h,p=b,a.dst.ax=1,a.dst.px=0);k=a.getTransitionSpeed(k);d&&1>=d&&(k*=d);a.bzscroll=0<k?a.bzscroll?a.bzscroll.update(p,k):new B(n,p,k,0,1,0,1):!1;if(!a.timer){(e==a.page.maxh&&c>=a.page.maxh||h==a.page.maxw&&b>=a.page.maxw)&&
a.checkContentSize();var q=1;a.cancelAnimationFrame=!1;a.timer=1;a.onscrollstart&&!a.scrollrunning&&a.onscrollstart.call(a,{type:"scrollstart",current:{x:h,y:e},request:{x:b,y:c},end:{x:a.newscrollx,y:a.newscrolly},speed:k});f();(e==a.page.maxh&&c>=e||h==a.page.maxw&&b>=h)&&a.checkContentSize();a.noticeCursor()}},this.cancelScroll=function(){a.timer&&v(a.timer);a.timer=0;a.bzscroll=!1;a.scrollrunning=!1;return a}):(this.doScrollLeft=function(b,c){var d=a.getScrollTop();a.doScrollPos(b,d,c)},this.doScrollTop=
function(b,c){var d=a.getScrollLeft();a.doScrollPos(d,b,c)},this.doScrollPos=function(b,c,d){var f=b>a.page.maxw?a.page.maxw:b;0>f&&(f=0);var e=c>a.page.maxh?a.page.maxh:c;0>e&&(e=0);a.synched("scroll",function(){a.setScrollTop(e);a.setScrollLeft(f)})},this.cancelScroll=function(){});this.doScrollBy=function(b,c){var d=0,d=c?Math.floor((a.scroll.y-b)*a.scrollratio.y):(a.timer?a.newscrolly:a.getScrollTop(!0))-b;if(a.bouncescroll){var f=Math.round(a.view.h/2);d<-f?d=-f:d>a.page.maxh+f&&(d=a.page.maxh+
f)}a.cursorfreezed=!1;f=a.getScrollTop(!0);if(0>d&&0>=f)return a.noticeCursor();if(d>a.page.maxh&&f>=a.page.maxh)return a.checkContentSize(),a.noticeCursor();a.doScrollTop(d)};this.doScrollLeftBy=function(b,c){var d=0,d=c?Math.floor((a.scroll.x-b)*a.scrollratio.x):(a.timer?a.newscrollx:a.getScrollLeft(!0))-b;if(a.bouncescroll){var f=Math.round(a.view.w/2);d<-f?d=-f:d>a.page.maxw+f&&(d=a.page.maxw+f)}a.cursorfreezed=!1;f=a.getScrollLeft(!0);if(0>d&&0>=f||d>a.page.maxw&&f>=a.page.maxw)return a.noticeCursor();
a.doScrollLeft(d)};this.doScrollTo=function(b,c){a.cursorfreezed=!1;a.doScrollTop(b)};this.checkContentSize=function(){var b=a.getContentSize();b.h==a.page.h&&b.w==a.page.w||a.resize(!1,b)};a.onscroll=function(b){a.rail.drag||a.cursorfreezed||a.synched("scroll",function(){a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.railh&&(a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x)));a.noticeCursor()})};a.bind(a.docscroll,"scroll",a.onscroll);this.doZoomIn=function(b){if(!a.zoomactive){a.zoomactive=
!0;a.zoomrestore={style:{}};var c="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),d=a.win[0].style,h;for(h in c){var k=c[h];a.zoomrestore.style[k]="undefined"!=typeof d[k]?d[k]:""}a.zoomrestore.style.width=a.win.css("width");a.zoomrestore.style.height=a.win.css("height");a.zoomrestore.padding={w:a.win.outerWidth()-a.win.width(),h:a.win.outerHeight()-a.win.height()};f.isios4&&(a.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));
a.win.css({position:f.isios4?"absolute":"fixed",top:0,left:0,"z-index":z+100,margin:"0px"});c=a.win.css("backgroundColor");(""==c||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c))&&a.win.css("backgroundColor","#fff");a.rail.css({"z-index":z+101});a.zoom.css({"z-index":z+102});a.zoom.css("backgroundPosition","0px -18px");a.resizeZoom();a.onzoomin&&a.onzoomin.call(a);return a.cancelEvent(b)}};this.doZoomOut=function(b){if(a.zoomactive)return a.zoomactive=!1,a.win.css("margin",""),a.win.css(a.zoomrestore.style),
f.isios4&&e(window).scrollTop(a.zoomrestore.scrollTop),a.rail.css({"z-index":a.zindex}),a.zoom.css({"z-index":a.zindex}),a.zoomrestore=!1,a.zoom.css("backgroundPosition","0px 0px"),a.onResize(),a.onzoomout&&a.onzoomout.call(a),a.cancelEvent(b)};this.doZoom=function(b){return a.zoomactive?a.doZoomOut(b):a.doZoomIn(b)};this.resizeZoom=function(){if(a.zoomactive){var b=a.getScrollTop();a.win.css({width:e(window).width()-a.zoomrestore.padding.w+"px",height:e(window).height()-a.zoomrestore.padding.h+"px"});
a.onResize();a.setScrollTop(Math.min(a.page.maxh,b))}};this.init();e.nicescroll.push(this)},M=function(e){var c=this;this.nc=e;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,k){c.stop();var d=c.time();c.steptime=0;c.lasttime=d;c.speedx=0;c.speedy=0;c.lastx=e;c.lasty=k;c.lastscrollx=-1;c.lastscrolly=
-1};this.update=function(e,k){var d=c.time();c.steptime=d-c.lasttime;c.lasttime=d;var d=k-c.lasty,p=e-c.lastx,q=c.nc.getScrollTop(),a=c.nc.getScrollLeft(),q=q+d,a=a+p;c.snapx=0>a||a>c.nc.page.maxw;c.snapy=0>q||q>c.nc.page.maxh;c.speedx=p;c.speedy=d;c.lastx=e;c.lasty=k};this.stop=function(){c.nc.unsynched("domomentum2d");c.timer&&clearTimeout(c.timer);c.timer=0;c.lastscrollx=-1;c.lastscrolly=-1};this.doSnapy=function(e,k){var d=!1;0>k?(k=0,d=!0):k>c.nc.page.maxh&&(k=c.nc.page.maxh,d=!0);0>e?(e=0,d=
!0):e>c.nc.page.maxw&&(e=c.nc.page.maxw,d=!0);d?c.nc.doScrollPos(e,k,c.nc.opt.snapbackspeed):c.nc.triggerScrollEnd()};this.doMomentum=function(e){var k=c.time(),d=e?k+e:c.lasttime;e=c.nc.getScrollLeft();var p=c.nc.getScrollTop(),q=c.nc.page.maxh,a=c.nc.page.maxw;c.speedx=0<a?Math.min(60,c.speedx):0;c.speedy=0<q?Math.min(60,c.speedy):0;d=d&&60>=k-d;if(0>p||p>q||0>e||e>a)d=!1;e=c.speedx&&d?c.speedx:!1;if(c.speedy&&d&&c.speedy||e){var u=Math.max(16,c.steptime);50<u&&(e=u/50,c.speedx*=e,c.speedy*=e,u=
50);c.demulxy=0;c.lastscrollx=c.nc.getScrollLeft();c.chkx=c.lastscrollx;c.lastscrolly=c.nc.getScrollTop();c.chky=c.lastscrolly;var f=c.lastscrollx,t=c.lastscrolly,v=function(){var d=600<c.time()-k?.04:.02;c.speedx&&(f=Math.floor(c.lastscrollx-c.speedx*(1-c.demulxy)),c.lastscrollx=f,0>f||f>a)&&(d=.1);c.speedy&&(t=Math.floor(c.lastscrolly-c.speedy*(1-c.demulxy)),c.lastscrolly=t,0>t||t>q)&&(d=.1);c.demulxy=Math.min(1,c.demulxy+d);c.nc.synched("domomentum2d",function(){c.speedx&&(c.nc.getScrollLeft()!=
c.chkx&&c.stop(),c.chkx=f,c.nc.setScrollLeft(f));c.speedy&&(c.nc.getScrollTop()!=c.chky&&c.stop(),c.chky=t,c.nc.setScrollTop(t));c.timer||(c.nc.hideCursor(),c.doSnapy(f,t))});1>c.demulxy?c.timer=setTimeout(v,u):(c.stop(),c.nc.hideCursor(),c.doSnapy(f,t))};v()}else c.doSnapy(c.nc.getScrollLeft(),c.nc.getScrollTop())}},y=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(k,c,h){return(c=e.data(k,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollTop():y.call(k)},set:function(k,c){var h=e.data(k,"__nicescroll")||
!1;h&&h.ishwscroll?h.setScrollTop(parseInt(c)):y.call(k,c);return this}};e.fn.scrollTop=function(k){if("undefined"==typeof k){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollTop():y.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollTop(parseInt(k)):y.call(e(this),k)})};var C=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(k,c,h){return(c=e.data(k,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollLeft():C.call(k)},
set:function(k,c){var h=e.data(k,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollLeft(parseInt(c)):C.call(k,c);return this}};e.fn.scrollLeft=function(k){if("undefined"==typeof k){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollLeft():C.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollLeft(parseInt(k)):C.call(e(this),k)})};var D=function(k){var c=this;this.length=0;this.name="nicescrollarray";this.each=function(d){for(var e=
0,h=0;e<c.length;e++)d.call(c[e],h++);return c};this.push=function(d){c[c.length]=d;c.length++};this.eq=function(d){return c[d]};if(k)for(var h=0;h<k.length;h++){var n=e.data(k[h],"__nicescroll")||!1;n&&(this[this.length]=n,this.length++)}return this};(function(e,c,h){for(var n=0;n<c.length;n++)h(e,c[n])})(D.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(e,c){e[c]=function(){var e=arguments;return this.each(function(){this[c].apply(this,e)})}});e.fn.getNiceScroll=
function(k){return"undefined"==typeof k?new D(this):this[k]&&e.data(this[k],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(k){return e.data(k,"__nicescroll")?!0:!1}});e.fn.niceScroll=function(k,c){"undefined"!=typeof c||"object"!=typeof k||"jquery"in k||(c=k,k=!1);c=e.extend({},c);var h=new D;"undefined"==typeof c&&(c={});k&&(c.doc=e(k),c.win=e(this));var n=!("doc"in c);n||"win"in c||(c.win=e(this));this.each(function(){var d=e(this).data("__nicescroll")||!1;d||(c.doc=n?e(this):c.doc,
d=new S(c,e(this)),e(this).data("__nicescroll",d));h.push(d)});return 1==h.length?h[0]:h};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new D,e.nicescroll.options=J)});
(function () {
    'use strict';

    angular
        .module('angular-nicescroll', [])
        .directive('ngNicescroll', ngNicescroll);

    ngNicescroll.$inject = ['$rootScope','$parse'];

    /* @ngInject */
    function ngNicescroll($rootScope,$parse) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attrs, controller) {

            var niceOption = scope.$eval(attrs.niceOption)

            var niceScroll = $(element).niceScroll(niceOption);
            var nice = $(element).getNiceScroll();
          
            if (attrs.niceScrollObject)  $parse(attrs.niceScrollObject).assign(scope, nice);
       
            // on scroll end
            niceScroll.onscrollend = function (data) {
                if (this.newscrolly >= this.page.maxh) {
                    if (attrs.niceScrollEnd) scope.$evalAsync(attrs.niceScrollEnd);

                }
                if (data.end.y <= 0) {
                    // at top
                    if (attrs.niceScrollTopEnd) scope.$evalAsync(attrs.niceScrollTopEnd);
                }
            };


            scope.$on('$destroy', function () {
                if (angular.isDefined(niceScroll.version)) {
                    niceScroll.remove();
                }
            })


        }
    }


})();

//! api-check version 7.5.5 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (http://kent.doddsfamily.us) (ó ì_í)=óò=(ì_í ò)
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):"object"==typeof exports?exports.apiCheck=r():e.apiCheck=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3),i=n(o);r["default"]=i["default"],e.exports=r["default"]},function(e,r){function t(e,r){var t=[],o=[];return r=r||function(e,r){return"[Circular "+n(r,t,o)+"]"},function(n,i){var a=i;return"object"==typeof i&&i&&(-1!==t.indexOf(i)?a=r(n,i):(t.push(i),o.push(n))),e&&(a=e(n,a)),a}}function n(e,r,t){var n=r.indexOf(e),o=[t[n]];for(n--;n>=0;n--)r[n][o[0]]===e&&(e=r[n],o.unshift(t[n]));return"~"+o.join(".")}function o(e,r,n,o){return JSON.stringify(e,t(r,o),n)}e.exports=o,o.getSerialize=t},function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e){var r=i(e),t=void 0;if("array"===r)t=[];else{if("object"!==r)return e;t={}}return f(e,function(e,r){t[r]=e}),t}function i(e){return Array.isArray(e)?"array":e instanceof RegExp?"object":typeof e}function a(e,r){var t=void 0,n=r&&r["short"];return t=n&&e.shortType?e.shortType:!n&&"object"==typeof e.type||"function"===e.type?u(e,r):u(e,r)||e.displayName||e.name}function u(e,r){var t=e.type;if("function"==typeof t){var o=t.__apiCheckData,i=t(r);t=n({__apiCheckData:o},o.type,i)}return t}function p(e){return e?Array.isArray(e)?e:[e]:[]}function f(e,r,t){return Array.isArray(e)?s(e,r,t):c(e,r,t)}function c(e,r,t){var n=void 0,o=Object.prototype.hasOwnProperty;for(var i in e)if(o.call(e,i)&&(n=r.call(t,e[i],i,e),n===!1))return n;return!0}function s(e,r,t){for(var n=void 0,o=e.length,i=0;o>i;i++)if(n=r.call(t,e[i],i,e),n===!1)return n;return!0}function l(e){return e instanceof Error}function y(e,r,t){e=p(e);var n=e.slice(),o=n.pop();return 1===n.length&&(r=" "),n.join(r)+(""+(n.length?r+t:"")+o)}function h(e,r,t){"function"==typeof t&&(t=t({"short":!0}));var n="object"!=typeof t?t:A(t);return new Error(d(e,r)+" must be "+v(n))}function d(e,r){var t=v(e||"value"),n=r?" at "+v(r):"";return""+t+n}function v(e){return"`"+e+"`"}function g(e){return"undefined"==typeof e}function b(e,r,t){return t&&(e=_(),e.isNoop=!0),"string"==typeof e.type&&(e.shortType=e.type),f(r,function(r,t){return e[t]=r}),e.displayName||(e.displayName="apiCheck "+v(e.shortType||e.type||e.name)+" type checker"),e.notRequired||(e=m(e,t)),e.notNullable||k(e,t),e.notOptional||O(e,t),e}function m(e,r){var t=r?_():function(r,t,n,o){if(g(r)&&!e.isOptional){var i=n?" in "+v(n):"",u=a(e,{"short":!0}),p="object"!=typeof u?u:A(u);return new Error("Required "+v(t)+" not specified"+i+". Must be "+v(p))}return e(r,t,n,o)};return j(e,t),t.originalChecker=e,t}function O(e,r){var t=r?_():function(r,t,n,o){return g(r)?void 0:e(r,t,n,o)};j(e,t),t.isOptional=!0,t.displayName=e.displayName+" (optional)",t.originalChecker=e,e.optional=t,C(e,e.optional)}function k(e,r){var t=r?_():function(r,t,n,o){return null!==r?e(r,t,n,o):void 0};j(e,t),t.isNullable=!0,t.displayName=e.displayName+" (nullable)",t.originalChecker=e,e.nullable=t,C(e,e.nullable),e.notOptional||O(e.nullable,r)}function C(e,r){if("object"==typeof r.type)r.type=o(r.type);else{if("function"!=typeof r.type)return void(r.type+=" (optional)");r.type=function(){return e.type.apply(e,arguments)}}r.type.__apiCheckData=o(e.type.__apiCheckData)||{},r.type.__apiCheckData.optional=!0}function j(e,r){f(Object.keys(e),function(t){return r[t]=e[t]})}function x(){}function _(){return function(){}}var A=t(1),T={addOptional:O,getRequiredVersion:m,setupChecker:b,addNullable:k};e.exports={each:f,copy:o,typeOf:i,arrayify:p,getCheckerDisplay:a,isError:l,list:y,getError:h,nAtL:d,t:v,undef:g,checkerHelpers:T,noop:x}},function(e,r,t){"use strict";function n(){function r(n,i,a){if(r.config.disabled||e.exports.globalConfig.disabled)return{apiTypes:{},argTypes:{},passed:!0,message:"",failed:!1};t(arguments),Array.isArray(n)?i=Array.prototype.slice.call(i):(n=[n],i=[i]);var u=p(n,i);u.length||(u=o(n,i));var f=c(n,i);return f.args=i,u.length?(f.message=r.getErrorMessage(n,i,u,a),f.failed=!0,f.passed=!1):(f.message="",f.failed=!1,f.passed=!0),f}function t(e){var t=e[0],n=e[1],i=Array.isArray(n)||n&&"object"==typeof n&&"number"==typeof n.length;if(Array.isArray(t)&&!i)throw new Error(a(t,[n],["If an array is provided for the api, an array must be provided for the args as well."],{prefix:"apiCheck"}));var u=o(C.checkApiCheckApi,e);if(u.length){var p=r.getErrorMessage(C.checkApiCheckApi,e,u,{prefix:"apiCheck"});r.handleErrorMessage(p,!0)}}function n(e){return function(t,n,o){var i=r(t,n,o);return r.handleErrorMessage(i.message,e),i}}function i(e,r){if(r&&e)throw new Error(e);e&&console.warn(e)}function a(e,t){function n(){var e=p.onlyPrefix;return e||(e=((f.prefix||"")+" "+(p.prefix||"")).trim()),e}function o(){var e=p.onlySuffix;return e||(e=((p.suffix||"")+" "+(f.suffix||"")).trim()),e}function i(){var e=p.url;return e||(e=f.docsBaseUrl&&p.urlSuffix&&(""+f.docsBaseUrl+p.urlSuffix).trim()),e}var a=arguments.length<=2||void 0===arguments[2]?[]:arguments[2],p=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],f=r.config.output||{},c=n(),s=o(),l=i(),y="apiCheck failed! "+a.join(", "),h="\n\n"+u(e,t);return(c+" "+y+" "+s+" "+(l||"")+h).trim()}function u(e,r){function t(e){h(e,function(r,n){-1===f.indexOf(r)&&(f.push(r),"object"==typeof r?t(e):"function"==typeof r&&(e[n]=r.displayName||r.name||"anonymous function"))})}function n(e){return e&&e.length?(e&&1===e.length&&(e=e[0]),l(e,null,2)):"nothing"}function o(){var e="\n",t=!0;r&&1===r.length&&(t="object"==typeof r[0]&&null!==r[0]?!!Object.keys(r[0]).length:!1);var n="type"+(t?"s":""),o=e+e;return"You passed:"+e+s+o+("With the "+n+":"+e+u+o)+("The API calls for:"+e+a)}var i=c(e,r),a=i.apiTypes,u=i.argTypes,p=Array.prototype.slice.call(r||[]),f=[];t(p);var s=n(p);return u=n(u),a=n(a),o()}function c(t,n){t=g(t),n=g(n);var o=t.map(function(t,o){var i=e.exports.globalConfig.hasOwnProperty("verbose");return b(t,{terse:i?!e.exports.globalConfig.verbose:!r.config.verbose,obj:n[o],addHelpers:!0})}),i=n.map(function(e){return f(e,[])});return{argTypes:i,apiTypes:o}}var s=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],d=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];j&&arguments.length&&j["throw"](C.getApiCheckInstanceCheckers,arguments,{prefix:"creating an apiCheck instance"});var v={"throw":n(!0),warn:n(!1),getErrorMessage:a,handleErrorMessage:i,config:{output:s.output||{prefix:"",suffix:"",docsBaseUrl:""},verbose:s.verbose||!1,disabled:s.disabled||!1},utils:y};h(v,function(e,t){return r[t]=e});var m=r.disabled||e.exports.globalConfig.disabled;return h(k.getCheckers(m),function(e,t){return r[t]=e}),h(d,function(e,t){return r[t]=e}),r}function o(e,r){for(var t=[],n=!1,o=0,i=0,u=void 0,p=void 0,f=void 0,c=void 0,s=void 0,l=void 0,y=void 0;(p=e[o++])&&i<r.length;)u=r[i++],s="Argument "+i+(p.isOptional?" (optional)":""),f=p(u,"value",s),l=d(f),c=o>=e.length,y=o>1&&e[o-1].isOptional,l&&c||l&&!c&&!p.isOptional&&!y?(n=!0,t.push(a(f,p,u))):l&&p.isOptional?i--:t.push(v(s)+" passed");return n?t:[]}function i(e,r,t){var n=k.shape({type:k.string,optional:k.bool}),o=k.func.withProperties({__apiCheckData:n}),a=k.shape({__apiCheckData:n}),u=k.oneOfType([o,a])(e,r,t);return d(u)?u:"function"==typeof e||e.hasOwnProperty(e.__apiCheckData.type)?void 0:O(r,t,i.type)}function a(e,r,t){var n=u(r,t);return n=n?" - "+n:"",e.message+n}function u(e,r){var t=e.help;return t?("function"==typeof t&&(t=t(r)),t):""}function p(e,r){var t=e.filter(function(e){return!e.isOptional});return r.length<t.length?["Not enough arguments specified. Requires `"+t.length+"`, you passed `"+r.length+"`"]:[]}function f(e,r){function t(){return e&&Object.keys(e).length}function n(){return-1!==r.indexOf(e)?"[Circular]":(r.push(e),c(e,r))}var o=e&&e.constructor&&e.constructor.name,i=m(e);if("function"===i){if(t()){var a=l(n());return o+" (with properties: "+a+")"}return o}return null===e?"null":"array"!==i&&"object"!==i?i:t()?n():o}function c(e,r){var t={};return h(e,function(e,n){return t[n]=f(e,r)}),t}function s(){var e=k.string.optional,r=k.func.withProperties({type:k.oneOfType([k.string,i]).optional,displayName:k.string.optional,shortType:k.string.optional,notOptional:k.bool.optional,notRequired:k.bool.optional}),t=[k.shape({output:k.shape({prefix:k.string.optional,suffix:k.string.optional,docsBaseUrl:k.string.optional}).strict.optional,verbose:k.bool.optional,disabled:k.bool.optional}).strict.optional,k.objectOf(r).optional],n=[k.typeOrArrayOf(r),k.any.optional,k.shape({prefix:e,suffix:e,urlSuffix:e,onlyPrefix:e,onlySuffix:e,url:e}).strict.optional];return{checkerFnChecker:r,getApiCheckInstanceCheckers:t,checkApiCheckApi:n}}var l=t(1),y=t(2),h=y.each,d=y.isError,v=y.t,g=y.arrayify,b=y.getCheckerDisplay,m=y.typeOf,O=y.getError,k=t(4),C=s();e.exports=n,e.exports.VERSION="7.5.5",e.exports.utils=y,e.exports.globalConfig={verbose:!1,disabled:!1};var j=n({output:{prefix:"apiCheck"}});e.exports.internalChecker=j,h(k,function(r,t){return e.exports[t]=r}),i.type="function with __apiCheckData property and `${function.type}` property"},function(e,r,t){"use strict";function n(e){function r(r){var t=r.toLowerCase();return b(function(e,n,o){return a(e)!==t?y(n,o,r):void 0},{type:r},e)}function t(){var r="Function",t=b(function(e,t,n){return"function"!==a(e)?y(t,n,r):void 0},{type:r},e);return t.withProperties=function(r){var t=m.objectOf(m.func)(r,"properties","apiCheck.func.withProperties");if(c(t))throw t;var n=m.shape(r,!0);return n.type.__apiCheckData.type="func.withProperties",b(function(e,r,t){var o=m.func(e,r,t);return c(o)?o:n(e,r,t)},{type:n.type,shortType:"func.withProperties"},e)},t}function n(){var r="Object",t="Object (null ok)",n=b(function(e,r,n){return"object"!==a(e)?y(r,n,t):void 0},{type:t},e),o=b(function(e,r,t){return null===e||c(n(e,r,t))?y(r,t,o.type):void 0},{type:r,nullOk:n},e);return o}function i(r){return b(function(e,t,n){return e instanceof r?void 0:y(t,n,r.name)},{type:r.name},e)}function v(r){var t={__apiCheckData:{optional:!1,type:"enum"},"enum":r},n="oneOf["+r.map(function(e){return o(e)}).join(", ")+"]";return b(function(e,t,o){return r.some(function(r){return r===e})?void 0:y(t,o,n)},{type:t,shortType:n},e)}function O(r){function t(e){return e&&e["short"]?o:r.map(function(r){return f(r,e)})}var n=r.map(function(e){return f(e,{"short":!0})}),o="oneOfType["+n.join(", ")+"]";return t.__apiCheckData={optional:!1,type:"oneOfType"},b(function(e,t,n){return r.some(function(r){return!c(r(e,t,n))})?void 0:y(t,n,o)},{type:t,shortType:o},e)}function k(r){function t(e){return e&&e["short"]?o:f(r,e)}var n=f(r,{"short":!0}),o="arrayOf["+n+"]";return t.__apiCheckData={optional:!1,type:"arrayOf"},b(function(e,t,n){return c(m.array(e))||!e.every(function(e){return!c(r(e))})?y(t,n,o):void 0},{type:t,shortType:o},e)}function C(r){function t(e){return e&&e["short"]?o:f(r,e)}var n=f(r,{"short":!0}),o="objectOf["+n+"]";return t.__apiCheckData={optional:!1,type:"objectOf"},b(function(e,t,n){var i=m.object(e,t,n);if(c(i))return i;var a=u(e,function(e,n){return c(r(e,n,t))?!1:void 0});return a?void 0:y(t,n,o)},{type:t,shortType:o},e)}function j(r){function t(e){return e&&e["short"]?o:f(r,e)}var n=f(r,{"short":!0}),o="typeOrArrayOf["+n+"]";return t.__apiCheckData={optional:!1,type:"typeOrArrayOf"},b(function(e,t,n,i){return c(m.oneOfType([r,m.arrayOf(r)])(e,t,n,i))?y(t,n,o):void 0},{type:t,shortType:o},e)}function x(){function r(r,t){function n(){function e(e,r,t,n,o){function a(t,n,o){"string"==typeof e[r]?e[r]+=o:e[r].__apiCheckData[t]=n}if(t||!o||n.isOptional){if(t){var u=n(i[r],r,null,i);c(u)&&a("error","THIS IS THE PROBLEM: "+u.message," <-- THIS IS THE PROBLEM: "+u.message)}}else{var p="ITEM";n.type&&n.type.__apiCheckData&&(p=n.type.__apiCheckData.type.toUpperCase()),a("missing","MISSING THIS "+p," <-- YOU ARE MISSING THIS")}}var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={},o=t.terse,i=t.obj,a=t.addHelpers,p=t.required;return u(r,function(r,t){var u=i&&i.hasOwnProperty(t),c=g(p)?!r.isOptional:p;o&&!u&&r.isOptional||(n[t]=f(r,{terse:o,obj:i&&i[t],required:c,addHelpers:a})),a&&e(n,t,u,r,c)}),n}function o(){return n.apply(void 0,arguments)}var i={};u(r,function(e,r){i[r]=f(e)}),n.__apiCheckData={strict:!1,optional:!1,type:"shape"};var a=b(function(e,n,o){var i=!t&&m.object(e,n,o);if(c(i))return i;var a=void 0;return o=o?o+(n?"/":""):"",n=n||"",u(r,function(r,t){return e.hasOwnProperty(t)||!r.isOptional?(a=r(e[t],t,""+o+n,e),!c(a)):void 0}),c(a)?a:void 0},{type:n,shortType:"shape"},e);return o.__apiCheckData=p(a.type.__apiCheckData),o.__apiCheckData.strict=!0,a.strict=b(function(e,t,n){var o=a(e,t,n);if(c(o))return o;var i=Object.keys(r),u=Object.keys(e).filter(function(e){return-1===i.indexOf(e)});return u.length?new Error(h(t,n)+" cannot have extra properties: "+d(u.join("`, `"))+".It is limited to "+d(i.join("`, `"))):void 0},{type:o,shortType:"strict shape"},e),a}function t(r,t,o){var i=d(t.join(", ")),a="if "+(r?"all of":"at least one of"),u="specified "+a+" these are not specified: "+i+" (otherwise it's optional)",p="requiredIfNot"+(r?".all":"")+"["+t.join(", ")+"}]",f=n(o,u,p);return b(function(e,n,i,a){var u=a&&a.hasOwnProperty(n),p=r?"every":"some",c=t[p](function(e){return a&&a.hasOwnProperty(e)});return c||u?u?o(e,n,i,a):void 0:y(n,i,f)},{type:f,notRequired:!0},e)}function n(e,r,t){function n(r){return r&&r["short"]?t:f(e)}return n.__apiCheckData={optional:!1,type:"ifNot",description:r},n}return r.ifNot=function(r,t){Array.isArray(r)||(r=[r]);var o=void 0;o=1===r.length?"specified only if "+r[0]+" is not specified":"specified only if none of the following are specified: ["+l(r,", ","and ")+"]";var i="ifNot["+r.join(", ")+"]",a=n(t,o,i);return b(function(e,n,o,i){var u=i&&i.hasOwnProperty(n),p=r.some(function(e){return i&&i.hasOwnProperty(e)});return u===p?y(n,o,a):u?t(e,n,o,i):void 0},{notRequired:!0,type:a,shortType:i},e)},r.onlyIf=function(r,t){r=s(r);var o=void 0;o=1===r.length?"specified only if "+r[0]+" is also specified":"specified only if all of the following are specified: ["+l(r,", ","and ")+"]";var i="onlyIf["+r.join(", ")+"]",a=n(t,o,i);return b(function(e,n,o,i){var u=r.every(function(e){return i.hasOwnProperty(e)});return u?t(e,n,o,i):y(n,o,a)},{type:a,shortType:i},e)},r.requiredIfNot=function(e,r){return Array.isArray(e)||(e=[e]),t(!1,e,r)},r.requiredIfNot.all=function(e,r){if(!Array.isArray(e))throw new Error("requiredIfNot.all must be passed an array");return t(!0,e,r)},r}function _(){var r="function arguments";return b(function(e,t,n){return Array.isArray(e)||c(m.object(e))||c(m.number(e.length))?y(t,n,r):void 0},{type:r},e)}function A(){return b(function(){},{type:"any"},e)}function T(){var r="null";return b(function(e,t,n){return null!==e?y(t,n,r):void 0},{type:r},e)}function w(r,t){var n="Range ("+r+" - "+t+")";return b(function(e,o,i){return"number"!=typeof e||r>e||e>t?y(o,i,n):void 0},{type:n},e)}function E(r){var t="lessThan["+r+"]";return b(function(e,n,o){return"number"!=typeof e||e>r?y(n,o,t):void 0},{type:t},e)}function D(r){var t="greaterThan["+r+"]";return b(function(e,n,o){return"number"!=typeof e||r>e?y(n,o,t):void 0},{type:t},e)}function N(){var r="empty object";return b(function(e,t,n){return"object"!==a(e)||null===e||Object.keys(e).length?y(t,n,r):void 0},{type:r},e)}return{array:r("Array"),bool:r("Boolean"),number:r("Number"),string:r("String"),func:t(),object:n(),emptyObject:N(),instanceOf:i,oneOf:v,oneOfType:O,arrayOf:k,objectOf:C,typeOrArrayOf:j,range:w,lessThan:E,greaterThan:D,shape:x(),args:_(),any:A(),"null":T()}}var o=t(1),i=t(2),a=i.typeOf,u=i.each,p=i.copy,f=i.getCheckerDisplay,c=i.isError,s=i.arrayify,l=i.list,y=i.getError,h=i.nAtL,d=i.t,v=i.checkerHelpers,g=i.undef,b=v.setupChecker,m=e.exports=n();e.exports.getCheckers=n}])});
//# sourceMappingURL=api-check.min.js.map
/*! angular-formly v7.3.7 | MIT | built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò) */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("api-check"), require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["api-check", "angular"], factory);
	else if(typeof exports === 'object')
		exports["ngFormly"] = factory(require("api-check"), require("angular"));
	else
		root["ngFormly"] = factory(root["apiCheck"], root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _indexCommon = __webpack_require__(9);
	
	var _indexCommon2 = _interopRequireDefault(_indexCommon);
	
	exports['default'] = _indexCommon2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var angular = __webpack_require__(18);
	
	/* istanbul ignore next */
	if (!angular.version) {
	  angular = window.angular;
	}
	exports['default'] = angular;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angularFix = __webpack_require__(1);
	
	var _angularFix2 = _interopRequireDefault(_angularFix);
	
	exports['default'] = {
	  containsSelector: containsSelector, containsSpecialChar: containsSpecialChar, formlyEval: formlyEval, getFieldId: getFieldId, reverseDeepMerge: reverseDeepMerge, findByNodeName: findByNodeName,
	  arrayify: arrayify, extendFunction: extendFunction, extendArray: extendArray, startsWith: startsWith, contains: contains
	};
	
	function containsSelector(string) {
	  return containsSpecialChar(string, '.') || containsSpecialChar(string, '[') && containsSpecialChar(string, ']');
	}
	
	function containsSpecialChar(a, b) {
	  if (!a || !a.indexOf) {
	    return false;
	  }
	  return a.indexOf(b) !== -1;
	}
	
	function formlyEval(scope, expression, $modelValue, $viewValue, extraLocals) {
	  if (_angularFix2['default'].isFunction(expression)) {
	    return expression($viewValue, $modelValue, scope, extraLocals);
	  } else {
	    return scope.$eval(expression, _angularFix2['default'].extend({ $viewValue: $viewValue, $modelValue: $modelValue }, extraLocals));
	  }
	}
	
	function getFieldId(formId, options, index) {
	  if (options.id) {
	    return options.id;
	  }
	  var type = options.type;
	  if (!type && options.template) {
	    type = 'template';
	  } else if (!type && options.templateUrl) {
	    type = 'templateUrl';
	  }
	
	  return [formId, type, options.key, index].join('_');
	}
	
	function reverseDeepMerge(dest) {
	  _angularFix2['default'].forEach(arguments, function (src, index) {
	    if (!index) {
	      return;
	    }
	    _angularFix2['default'].forEach(src, function (val, prop) {
	      if (!_angularFix2['default'].isDefined(dest[prop])) {
	        dest[prop] = _angularFix2['default'].copy(val);
	      } else if (objAndSameType(dest[prop], val)) {
	        reverseDeepMerge(dest[prop], val);
	      }
	    });
	  });
	  return dest;
	}
	
	function objAndSameType(obj1, obj2) {
	  return _angularFix2['default'].isObject(obj1) && _angularFix2['default'].isObject(obj2) && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2);
	}
	
	// recurse down a node tree to find a node with matching nodeName, for custom tags jQuery.find doesn't work in IE8
	function findByNodeName(el, nodeName) {
	  if (!el.prop) {
	    // not a jQuery or jqLite object -> wrap it
	    el = _angularFix2['default'].element(el);
	  }
	
	  if (el.prop('nodeName') === nodeName.toUpperCase()) {
	    return el;
	  }
	
	  var c = el.children();
	  for (var i = 0; c && i < c.length; i++) {
	    var node = findByNodeName(c[i], nodeName);
	    if (node) {
	      return node;
	    }
	  }
	}
	
	function arrayify(obj) {
	  if (obj && !_angularFix2['default'].isArray(obj)) {
	    obj = [obj];
	  } else if (!obj) {
	    obj = [];
	  }
	  return obj;
	}
	
	function extendFunction() {
	  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
	    fns[_key] = arguments[_key];
	  }
	
	  return function extendedFunction() {
	    var args = arguments;
	    fns.forEach(function (fn) {
	      return fn.apply(null, args);
	    });
	  };
	}
	
	function extendArray(primary, secondary, property) {
	  if (property) {
	    primary = primary[property];
	    secondary = secondary[property];
	  }
	  if (secondary && primary) {
	    _angularFix2['default'].forEach(secondary, function (item) {
	      if (primary.indexOf(item) === -1) {
	        primary.push(item);
	      }
	    });
	    return primary;
	  } else if (secondary) {
	    return secondary;
	  } else {
	    return primary;
	  }
	}
	
	function startsWith(str, search) {
	  if (_angularFix2['default'].isString(str) && _angularFix2['default'].isString(search)) {
	    return str.length >= search.length && str.substring(0, search.length) === search;
	  } else {
	    return false;
	  }
	}
	
	function contains(str, search) {
	  if (_angularFix2['default'].isString(str) && _angularFix2['default'].isString(search)) {
	    return str.length >= search.length && str.indexOf(search) !== -1;
	  } else {
	    return false;
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = "https://github.com/formly-js/angular-formly/blob/" + ("7.3.7") + "/other/ERRORS_AND_WARNINGS.md#";
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angularFix = __webpack_require__(1);
	
	var _angularFix2 = _interopRequireDefault(_angularFix);
	
	exports['default'] = formlyCustomValidation;
	
	// @ngInject
	function formlyCustomValidation(formlyUtil) {
	  return {
	    restrict: 'A',
	    require: 'ngModel',
	    link: function formlyCustomValidationLink(scope, el, attrs, ctrl) {
	      var opts = scope.options;
	      opts.validation.messages = opts.validation.messages || {};
	      _angularFix2['default'].forEach(opts.validation.messages, function (message, key) {
	        opts.validation.messages[key] = function () {
	          return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
	        };
	      });
	
	      var useNewValidatorsApi = ctrl.hasOwnProperty('$validators') && !attrs.hasOwnProperty('useParsers');
	      _angularFix2['default'].forEach(opts.validators, _angularFix2['default'].bind(null, addValidatorToPipeline, false));
	      _angularFix2['default'].forEach(opts.asyncValidators, _angularFix2['default'].bind(null, addValidatorToPipeline, true));
	
	      function addValidatorToPipeline(isAsync, validator, name) {
	        setupMessage(validator, name);
	        validator = _angularFix2['default'].isObject(validator) ? validator.expression : validator;
	        if (useNewValidatorsApi) {
	          setupWithValidators(validator, name, isAsync);
	        } else {
	          setupWithParsers(validator, name, isAsync);
	        }
	      }
	
	      function setupMessage(validator, name) {
	        var message = validator.message;
	        if (message) {
	          opts.validation.messages[name] = function () {
	            return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
	          };
	        }
	      }
	
	      function setupWithValidators(validator, name, isAsync) {
	        var validatorCollection = isAsync ? '$asyncValidators' : '$validators';
	
	        ctrl[validatorCollection][name] = function evalValidity(modelValue, viewValue) {
	          return formlyUtil.formlyEval(scope, validator, modelValue, viewValue);
	        };
	      }
	
	      function setupWithParsers(validator, name, isAsync) {
	        var inFlightValidator = undefined;
	        ctrl.$parsers.unshift(function evalValidityOfParser(viewValue) {
	          var isValid = formlyUtil.formlyEval(scope, validator, ctrl.$modelValue, viewValue);
	          if (isAsync) {
	            ctrl.$pending = ctrl.$pending || {};
	            ctrl.$pending[name] = true;
	            inFlightValidator = isValid;
	            isValid.then(function () {
	              if (inFlightValidator === isValid) {
	                ctrl.$setValidity(name, true);
	              }
	            })['catch'](function () {
	              if (inFlightValidator === isValid) {
	                ctrl.$setValidity(name, false);
	              }
	            })['finally'](function () {
	              var $pending = ctrl.$pending || {};
	              if (Object.keys($pending).length === 1) {
	                delete ctrl.$pending;
	              } else {
	                delete ctrl.$pending[name];
	              }
	            });
	          } else {
	            ctrl.$setValidity(name, isValid);
	          }
	          return viewValue;
	        });
	      }
	    }
	  };
	}
	formlyCustomValidation.$inject = ["formlyUtil"];
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _angularFix = __webpack_require__(1);
	
	var _angularFix2 = _interopRequireDefault(_angularFix);
	
	var _apiCheck = __webpack_require__(4);
	
	var _apiCheck2 = _interopRequireDefault(_apiCheck);
	
	exports['default'] = formlyField;
	
	/**
	 * @ngdoc directive
	 * @name formlyField
	 * @restrict AE
	 */
	// @ngInject
	function formlyField($http, $q, $compile, $templateCache, $interpolate, formlyConfig, formlyApiCheck, formlyUtil, formlyUsability, formlyWarn) {
	  var arrayify = formlyUtil.arrayify;
	
	  FormlyFieldController.$inject = ["$scope", "$timeout", "$parse", "$controller", "formlyValidationMessages"];
	  return {
	    restrict: 'AE',
	    transclude: true,
	    require: '?^formlyForm',
	    scope: {
	      options: '=',
	      model: '=',
	      originalModel: '=?',
	      formId: '@', // TODO remove formId in a breaking release
	      index: '=?',
	      fields: '=?',
	      formState: '=?',
	      formOptions: '=?',
	      form: '=?' },
	    // TODO require form in a breaking release
	    controller: FormlyFieldController,
	    link: fieldLink
	  };
	
	  // @ngInject
	  function FormlyFieldController($scope, $timeout, $parse, $controller, formlyValidationMessages) {
	    /* eslint max-statements:[2, 32] */
	    if ($scope.options.fieldGroup) {
	      setupFieldGroup();
	      return;
	    }
	
	    var fieldType = getFieldType($scope.options);
	    simplifyLife($scope.options);
	    mergeFieldOptionsWithTypeDefaults($scope.options, fieldType);
	    extendOptionsWithDefaults($scope.options, $scope.index);
	    checkApi($scope.options);
	    // set field id to link labels and fields
	
	    // initalization
	    setFieldIdAndName();
	    setDefaultValue();
	    setInitialValue();
	    runExpressions();
	    addValidationMessages($scope.options);
	    invokeControllers($scope, $scope.options, fieldType);
	
	    // function definitions
	    function runExpressions() {
	      // must run on next tick to make sure that the current value is correct.
	      return $timeout(function runExpressionsOnNextTick() {
	        var field = $scope.options;
	        var currentValue = valueGetterSetter();
	        _angularFix2['default'].forEach(field.expressionProperties, function runExpression(expression, prop) {
	          var setter = $parse(prop).assign;
	          var promise = $q.when(formlyUtil.formlyEval($scope, expression, currentValue, currentValue));
	          promise.then(function setFieldValue(value) {
	            setter(field, value);
	          });
	        });
	      }, 0, false);
	    }
	
	    function valueGetterSetter(newVal) {
	      if (!$scope.model || !$scope.options.key) {
	        return undefined;
	      }
	      if (_angularFix2['default'].isDefined(newVal)) {
	        parseSet($scope.options.key, $scope.model, newVal);
	      }
	      return parseGet($scope.options.key, $scope.model);
	    }
	
	    function shouldNotUseParseKey(key) {
	      return _angularFix2['default'].isNumber(key) || !formlyUtil.containsSelector(key);
	    }
	
	    function parseSet(key, model, newVal) {
	      // If either of these are null/undefined then just return undefined
	      if (!key || !model) {
	        return;
	      }
	      // If we are working with a number then $parse wont work, default back to the old way for now
	      if (shouldNotUseParseKey(key)) {
	        // TODO: Fix this so we can get several levels instead of just one with properties that are numeric
	        model[key] = newVal;
	      } else {
	        var setter = $parse($scope.options.key).assign;
	        if (setter) {
	          setter($scope.model, newVal);
	        }
	      }
	    }
	
	    function parseGet(key, model) {
	      // If either of these are null/undefined then just return undefined
	      if (!key || !model) {
	        return undefined;
	      }
	
	      // If we are working with a number then $parse wont work, default back to the old way for now
	      if (shouldNotUseParseKey(key)) {
	        // TODO: Fix this so we can get several levels instead of just one with properties that are numeric
	        return model[key];
	      } else {
	        return $parse(key)(model);
	      }
	    }
	
	    function simplifyLife(options) {
	      // add a few empty objects (if they don't already exist) so you don't have to undefined check everywhere
	      formlyUtil.reverseDeepMerge(options, {
	        originalModel: options.model,
	        extras: {},
	        data: {},
	        templateOptions: {},
	        validation: {}
	      });
	      // create $scope.to so template authors can reference to instead of $scope.options.templateOptions
	      $scope.to = $scope.options.templateOptions;
	      $scope.formOptions = $scope.formOptions || {};
	    }
	
	    function setFieldIdAndName() {
	      if (_angularFix2['default'].isFunction(formlyConfig.extras.getFieldId)) {
	        $scope.id = formlyConfig.extras.getFieldId($scope.options, $scope.model, $scope);
	      } else {
	        var formName = $scope.form && $scope.form.$name || $scope.formId;
	        $scope.id = formlyUtil.getFieldId(formName, $scope.options, $scope.index);
	      }
	      $scope.options.id = $scope.id;
	      $scope.name = $scope.options.name || $scope.options.id;
	      $scope.options.name = $scope.name;
	    }
	
	    function setDefaultValue() {
	      if (_angularFix2['default'].isDefined($scope.options.defaultValue) && !_angularFix2['default'].isDefined(parseGet($scope.options.key, $scope.model))) {
	        parseSet($scope.options.key, $scope.model, $scope.options.defaultValue);
	      }
	    }
	
	    function setInitialValue() {
	      $scope.options.initialValue = $scope.model && parseGet($scope.options.key, $scope.model);
	    }
	
	    function mergeFieldOptionsWithTypeDefaults(options, type) {
	      if (type) {
	        mergeOptions(options, type.defaultOptions);
	      }
	      var properOrder = arrayify(options.optionsTypes).reverse(); // so the right things are overridden
	      _angularFix2['default'].forEach(properOrder, function (typeName) {
	        mergeOptions(options, formlyConfig.getType(typeName, true, options).defaultOptions);
	      });
	    }
	
	    function mergeOptions(options, extraOptions) {
	      if (extraOptions) {
	        if (_angularFix2['default'].isFunction(extraOptions)) {
	          extraOptions = extraOptions(options, $scope);
	        }
	        formlyUtil.reverseDeepMerge(options, extraOptions);
	      }
	    }
	
	    function extendOptionsWithDefaults(options, index) {
	      var key = options.key || index || 0;
	      _angularFix2['default'].extend(options, {
	        // attach the key in case the formly-field directive is used directly
	        key: key,
	        value: options.value || valueGetterSetter,
	        runExpressions: runExpressions,
	        resetModel: resetModel,
	        updateInitialValue: updateInitialValue
	      });
	    }
	
	    function resetModel() {
	      parseSet($scope.options.key, $scope.model, $scope.options.initialValue);
	      if ($scope.options.formControl) {
	        if (_angularFix2['default'].isArray($scope.options.formControl)) {
	          _angularFix2['default'].forEach($scope.options.formControl, function (formControl) {
	            resetFormControl(formControl, true);
	          });
	        } else {
	          resetFormControl($scope.options.formControl);
	        }
	      }
	    }
	
	    function resetFormControl(formControl, isMultiNgModel) {
	      if (!isMultiNgModel) {
	        formControl.$setViewValue(parseGet($scope.options.key, $scope.model));
	      }
	
	      formControl.$render();
	      formControl.$setUntouched && formControl.$setUntouched();
	      formControl.$setPristine();
	
	      // To prevent breaking change requiring a digest to reset $viewModel
	      if (!$scope.$root.$$phase) {
	        $scope.$digest();
	      }
	    }
	
	    function updateInitialValue() {
	      $scope.options.initialValue = parseGet($scope.options.key, $scope.model);
	    }
	
	    function addValidationMessages(options) {
	      options.validation.messages = options.validation.messages || {};
	      _angularFix2['default'].forEach(formlyValidationMessages.messages, function createFunctionForMessage(expression, name) {
	        if (!options.validation.messages[name]) {
	          options.validation.messages[name] = function evaluateMessage(viewValue, modelValue, scope) {
	            return formlyUtil.formlyEval(scope, expression, modelValue, viewValue);
	          };
	        }
	      });
	    }
	
	    function invokeControllers(scope) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var type = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      _angularFix2['default'].forEach([type.controller, options.controller], function (controller) {
	        if (controller) {
	          $controller(controller, { $scope: scope });
	        }
	      });
	    }
	
	    function setupFieldGroup() {
	      $scope.options.options = $scope.options.options || {};
	      $scope.options.options.formState = $scope.formState;
	      $scope.to = $scope.options.templateOptions;
	    }
	  }
	
	  // link function
	  function fieldLink(scope, el, attrs, formlyFormCtrl) {
	    if (scope.options.fieldGroup) {
	      setFieldGroupTemplate();
	      return;
	    }
	
	    // watch the field model (if exists) if there is no parent formly-form directive (that would watch it instead)
	    if (!formlyFormCtrl && scope.options.model) {
	      scope.$watch('options.model', function () {
	        return scope.options.runExpressions();
	      }, true);
	    }
	
	    addAttributes();
	    addClasses();
	
	    var type = getFieldType(scope.options);
	    var args = arguments;
	    var thusly = this;
	    var fieldCount = 0;
	    var fieldManipulators = getManipulators(scope.options, scope.formOptions);
	    getFieldTemplate(scope.options).then(runManipulators(fieldManipulators.preWrapper)).then(transcludeInWrappers(scope.options, scope.formOptions)).then(runManipulators(fieldManipulators.postWrapper)).then(setElementTemplate).then(watchFormControl).then(callLinkFunctions)['catch'](function (error) {
	      formlyWarn('there-was-a-problem-setting-the-template-for-this-field', 'There was a problem setting the template for this field ', scope.options, error);
	    });
	
	    function setFieldGroupTemplate() {
	      checkFieldGroupApi(scope.options);
	      el.addClass('formly-field-group');
	      var extraAttributes = '';
	      if (scope.options.elementAttributes) {
	        extraAttributes = Object.keys(scope.options.elementAttributes).map(function (key) {
	          return key + '="' + scope.options.elementAttributes[key] + '"';
	        }).join(' ');
	      }
	      var modelValue = 'model';
	      scope.options.form = scope.form;
	      if (scope.options.key) {
	        modelValue = 'model[\'' + scope.options.key + '\']';
	      }
	      getTemplate('\n          <formly-form model="' + modelValue + '"\n                       fields="options.fieldGroup"\n                       options="options.options"\n                       form="options.form"\n                       class="' + scope.options.className + '"\n                       ' + extraAttributes + '\n                       is-field-group>\n          </formly-form>\n        ').then(transcludeInWrappers(scope.options, scope.formOptions)).then(setElementTemplate);
	    }
	
	    function addAttributes() {
	      if (scope.options.elementAttributes) {
	        el.attr(scope.options.elementAttributes);
	      }
	    }
	
	    function addClasses() {
	      if (scope.options.className) {
	        el.addClass(scope.options.className);
	      }
	      if (scope.options.type) {
	        el.addClass('formly-field-' + scope.options.type);
	      }
	    }
	
	    function setElementTemplate(templateString) {
	      el.html(asHtml(templateString));
	      $compile(el.contents())(scope);
	      return templateString;
	    }
	
	    function watchFormControl(templateString) {
	      var stopWatchingShowError = _angularFix2['default'].noop;
	      if (scope.options.noFormControl) {
	        return;
	      }
	      var templateEl = _angularFix2['default'].element('<div>' + templateString + '</div>');
	      var ngModelNodes = templateEl[0].querySelectorAll('[ng-model],[data-ng-model]');
	
	      if (ngModelNodes.length) {
	        _angularFix2['default'].forEach(ngModelNodes, function (ngModelNode) {
	          fieldCount++;
	          watchFieldNameOrExistence(ngModelNode.getAttribute('name'));
	        });
	      }
	
	      function watchFieldNameOrExistence(name) {
	        var nameExpressionRegex = /\{\{(.*?)}}/;
	        var nameExpression = nameExpressionRegex.exec(name);
	        if (nameExpression) {
	          name = $interpolate(name)(scope);
	        }
	        watchFieldExistence(name);
	      }
	
	      function watchFieldExistence(name) {
	        scope.$watch('form["' + name + '"]', function formControlChange(formControl) {
	          if (formControl) {
	            if (fieldCount > 1) {
	              if (!scope.options.formControl) {
	                scope.options.formControl = [];
	              }
	              scope.options.formControl.push(formControl);
	            } else {
	              scope.options.formControl = formControl;
	            }
	            scope.fc = scope.options.formControl; // shortcut for template authors
	            stopWatchingShowError();
	            addShowMessagesWatcher();
	            addParsers();
	            addFormatters();
	          }
	        });
	      }
	
	      function addShowMessagesWatcher() {
	        stopWatchingShowError = scope.$watch(function watchShowValidationChange() {
	          var customExpression = formlyConfig.extras.errorExistsAndShouldBeVisibleExpression;
	          var options = scope.options;
	          var formControls = arrayify(scope.fc);
	          if (!formControls.some(function (fc) {
	            return fc.$invalid;
	          })) {
	            return false;
	          } else if (typeof options.validation.show === 'boolean') {
	            return options.validation.show;
	          } else if (customExpression) {
	            return formControls.some(function (fc) {
	              return formlyUtil.formlyEval(scope, customExpression, fc.$modelValue, fc.$viewValue);
	            });
	          } else {
	            return formControls.some(function (fc) {
	              var noTouchedButDirty = _angularFix2['default'].isUndefined(fc.$touched) && fc.$dirty;
	              return fc.$touched || noTouchedButDirty;
	            });
	          }
	        }, function onShowValidationChange(show) {
	          scope.options.validation.errorExistsAndShouldBeVisible = show;
	          scope.showError = show; // shortcut for template authors
	        });
	      }
	
	      function addParsers() {
	        setParsersOrFormatters('parsers');
	      }
	
	      function addFormatters() {
	        setParsersOrFormatters('formatters');
	        var ctrl = scope.fc;
	        var formWasPristine = scope.form.$pristine;
	        if (scope.options.formatters) {
	          (function () {
	            var value = ctrl.$modelValue;
	            ctrl.$formatters.forEach(function (formatter) {
	              value = formatter(value);
	            });
	
	            ctrl.$setViewValue(value);
	            ctrl.$render();
	            ctrl.$setPristine();
	            if (formWasPristine) {
	              scope.form.$setPristine();
	            }
	          })();
	        }
	      }
	
	      function setParsersOrFormatters(which) {
	        var originalThingProp = 'originalParser';
	        if (which === 'formatters') {
	          originalThingProp = 'originalFormatter';
	        }
	
	        // init with type's parsers
	        var things = getThingsFromType(type);
	
	        // get optionsTypes things
	        things = formlyUtil.extendArray(things, getThingsFromOptionsTypes(scope.options.optionsTypes));
	
	        // get field's things
	        things = formlyUtil.extendArray(things, scope.options[which]);
	
	        // convert things into formlyExpression things
	        _angularFix2['default'].forEach(things, function (thing, index) {
	          things[index] = getFormlyExpressionThing(thing);
	        });
	
	        var ngModelCtrls = scope.fc;
	        if (!_angularFix2['default'].isArray(ngModelCtrls)) {
	          ngModelCtrls = [ngModelCtrls];
	        }
	
	        _angularFix2['default'].forEach(ngModelCtrls, function (ngModelCtrl) {
	          var _ngModelCtrl;
	
	          ngModelCtrl['$' + which] = (_ngModelCtrl = ngModelCtrl['$' + which]).concat.apply(_ngModelCtrl, _toConsumableArray(things));
	        });
	
	        function getThingsFromType(theType) {
	          if (!theType) {
	            return [];
	          }
	          if (_angularFix2['default'].isString(theType)) {
	            theType = formlyConfig.getType(theType, true, scope.options);
	          }
	          var typeThings = [];
	
	          // get things from parent
	          if (theType['extends']) {
	            typeThings = formlyUtil.extendArray(typeThings, getThingsFromType(theType['extends']));
	          }
	
	          // get own type's things
	          typeThings = formlyUtil.extendArray(typeThings, getDefaultOptionsProperty(theType, which, []));
	
	          // get things from optionsTypes
	          typeThings = formlyUtil.extendArray(typeThings, getThingsFromOptionsTypes(getDefaultOptionsOptionsTypes(theType)));
	
	          return typeThings;
	        }
	
	        function getThingsFromOptionsTypes() {
	          var optionsTypes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
	          var optionsTypesThings = [];
	          _angularFix2['default'].forEach(_angularFix2['default'].copy(arrayify(optionsTypes)).reverse(), function (optionsTypeName) {
	            optionsTypesThings = formlyUtil.extendArray(optionsTypesThings, getThingsFromType(optionsTypeName));
	          });
	          return optionsTypesThings;
	        }
	
	        function getFormlyExpressionThing(thing) {
	          formlyExpressionParserOrFormatterFunction[originalThingProp] = thing;
	          return formlyExpressionParserOrFormatterFunction;
	
	          function formlyExpressionParserOrFormatterFunction($viewValue) {
	            var $modelValue = scope.options.value();
	            return formlyUtil.formlyEval(scope, thing, $modelValue, $viewValue);
	          }
	        }
	      }
	    }
	
	    function callLinkFunctions() {
	      if (type && type.link) {
	        type.link.apply(thusly, args);
	      }
	      if (scope.options.link) {
	        scope.options.link.apply(thusly, args);
	      }
	    }
	
	    function runManipulators(manipulators) {
	      return function runManipulatorsOnTemplate(templateToManipulate) {
	        var chain = $q.when(templateToManipulate);
	        _angularFix2['default'].forEach(manipulators, function (manipulator) {
	          chain = chain.then(function (template) {
	            return $q.when(manipulator(template, scope.options, scope)).then(function (newTemplate) {
	              return _angularFix2['default'].isString(newTemplate) ? newTemplate : asHtml(newTemplate);
	            });
	          });
	        });
	        return chain;
	      };
	    }
	  }
	
	  // sort-of stateless util functions
	  function asHtml(el) {
	    var wrapper = _angularFix2['default'].element('<a></a>');
	    return wrapper.append(el).html();
	  }
	
	  function getFieldType(options) {
	    return options.type && formlyConfig.getType(options.type);
	  }
	
	  function getManipulators(options, formOptions) {
	    var preWrapper = [];
	    var postWrapper = [];
	    addManipulators(options.templateManipulators);
	    addManipulators(formOptions.templateManipulators);
	    addManipulators(formlyConfig.templateManipulators);
	    return { preWrapper: preWrapper, postWrapper: postWrapper };
	
	    function addManipulators(manipulators) {
	      /* eslint-disable */ // it doesn't understand this :-(
	
	      var _ref = manipulators || {};
	
	      var _ref$preWrapper = _ref.preWrapper;
	      var pre = _ref$preWrapper === undefined ? [] : _ref$preWrapper;
	      var _ref$postWrapper = _ref.postWrapper;
	      var post = _ref$postWrapper === undefined ? [] : _ref$postWrapper;
	
	      preWrapper = preWrapper.concat(pre);
	      postWrapper = postWrapper.concat(post);
	      /* eslint-enable */
	    }
	  }
	
	  function getFieldTemplate(options) {
	    function fromOptionsOrType(key, fieldType) {
	      if (_angularFix2['default'].isDefined(options[key])) {
	        return options[key];
	      } else if (fieldType && _angularFix2['default'].isDefined(fieldType[key])) {
	        return fieldType[key];
	      }
	    }
	
	    var type = formlyConfig.getType(options.type, true, options);
	    var template = fromOptionsOrType('template', type);
	    var templateUrl = fromOptionsOrType('templateUrl', type);
	    if (_angularFix2['default'].isUndefined(template) && !templateUrl) {
	      throw formlyUsability.getFieldError('type-type-has-no-template', 'Type \'' + options.type + '\' has no template. On element:', options);
	    }
	
	    return getTemplate(templateUrl || template, _angularFix2['default'].isUndefined(template), options);
	  }
	
	  function getTemplate(template, isUrl, options) {
	    var templatePromise = undefined;
	    if (_angularFix2['default'].isFunction(template)) {
	      templatePromise = $q.when(template(options));
	    } else {
	      templatePromise = $q.when(template);
	    }
	
	    if (!isUrl) {
	      return templatePromise;
	    } else {
	      var _ret2 = (function () {
	        var httpOptions = { cache: $templateCache };
	        return {
	          v: templatePromise.then(function (url) {
	            return $http.get(url, httpOptions);
	          }).then(function (response) {
	            return response.data;
	          })['catch'](function handleErrorGettingATemplate(error) {
	            formlyWarn('problem-loading-template-for-templateurl', 'Problem loading template for ' + template, error);
	          })
	        };
	      })();
	
	      if (typeof _ret2 === 'object') return _ret2.v;
	    }
	  }
	
	  function transcludeInWrappers(options, formOptions) {
	    var wrapper = getWrapperOption(options, formOptions);
	
	    return function transcludeTemplate(template) {
	      if (!wrapper.length) {
	        return $q.when(template);
	      }
	
	      wrapper.forEach(function (aWrapper) {
	        formlyUsability.checkWrapper(aWrapper, options);
	        runApiCheck(aWrapper, options);
	      });
	      var promises = wrapper.map(function (w) {
	        return getTemplate(w.template || w.templateUrl, !w.template);
	      });
	      return $q.all(promises).then(function (wrappersTemplates) {
	        wrappersTemplates.forEach(function (wrapperTemplate, index) {
	          formlyUsability.checkWrapperTemplate(wrapperTemplate, wrapper[index]);
	        });
	        wrappersTemplates.reverse(); // wrapper 0 is wrapped in wrapper 1 and so on...
	        var totalWrapper = wrappersTemplates.shift();
	        wrappersTemplates.forEach(function (wrapperTemplate) {
	          totalWrapper = doTransclusion(totalWrapper, wrapperTemplate);
	        });
	        return doTransclusion(totalWrapper, template);
	      });
	    };
	  }
	
	  function doTransclusion(wrapper, template) {
	    var superWrapper = _angularFix2['default'].element('<a></a>'); // this allows people not have to have a single root in wrappers
	    superWrapper.append(wrapper);
	    var transcludeEl = superWrapper.find('formly-transclude');
	    if (!transcludeEl.length) {
	      // try it using our custom find function
	      transcludeEl = formlyUtil.findByNodeName(superWrapper, 'formly-transclude');
	    }
	    transcludeEl.replaceWith(template);
	    return superWrapper.html();
	  }
	
	  function getWrapperOption(options, formOptions) {
	    /* eslint complexity:[2, 6] */
	    var wrapper = options.wrapper;
	    // explicit null means no wrapper
	    if (wrapper === null) {
	      return [];
	    }
	
	    // nothing specified means use the default wrapper for the type
	    if (!wrapper) {
	      // get all wrappers that specify they apply to this type
	      wrapper = arrayify(formlyConfig.getWrapperByType(options.type));
	    } else {
	      wrapper = arrayify(wrapper).map(formlyConfig.getWrapper);
	    }
	
	    // get all wrappers for that the type specified that it uses.
	    var type = formlyConfig.getType(options.type, true, options);
	    if (type && type.wrapper) {
	      var typeWrappers = arrayify(type.wrapper).map(formlyConfig.getWrapper);
	      wrapper = wrapper.concat(typeWrappers);
	    }
	
	    // add form wrappers
	    if (formOptions.wrapper) {
	      var formWrappers = arrayify(formOptions.wrapper).map(formlyConfig.getWrapper);
	      wrapper = wrapper.concat(formWrappers);
	    }
	
	    // add the default wrapper last
	    var defaultWrapper = formlyConfig.getWrapper();
	    if (defaultWrapper) {
	      wrapper.push(defaultWrapper);
	    }
	    return wrapper;
	  }
	
	  function checkApi(options) {
	    formlyApiCheck['throw'](formlyApiCheck.formlyFieldOptions, options, {
	      prefix: 'formly-field directive',
	      url: 'formly-field-directive-validation-failed'
	    });
	    // validate with the type
	    var type = options.type && formlyConfig.getType(options.type);
	    if (type) {
	      runApiCheck(type, options, true);
	    }
	    if (options.expressionProperties && options.expressionProperties.hide) {
	      formlyWarn('dont-use-expressionproperties.hide-use-hideexpression-instead', 'You have specified `hide` in `expressionProperties`. Use `hideExpression` instead', options);
	    }
	  }
	
	  function checkFieldGroupApi(options) {
	    formlyApiCheck['throw'](formlyApiCheck.fieldGroup, options, {
	      prefix: 'formly-field directive',
	      url: 'formly-field-directive-validation-failed'
	    });
	  }
	
	  function runApiCheck(_ref2, options, forType) {
	    var apiCheck = _ref2.apiCheck;
	    var apiCheckInstance = _ref2.apiCheckInstance;
	    var apiCheckFunction = _ref2.apiCheckFunction;
	    var apiCheckOptions = _ref2.apiCheckOptions;
	
	    runApiCheckForType(apiCheck, apiCheckInstance, apiCheckFunction, apiCheckOptions, options);
	    if (forType && options.type) {
	      _angularFix2['default'].forEach(formlyConfig.getTypeHeritage(options.type), function (type) {
	        runApiCheckForType(type.apiCheck, type.apiCheckInstance, type.apiCheckFunction, type.apiCheckOptions, options);
	      });
	    }
	  }
	
	  function runApiCheckForType(apiCheck, apiCheckInstance, apiCheckFunction, apiCheckOptions, options) {
	    /* eslint complexity:[2, 9] */
	    if (!apiCheck) {
	      return;
	    }
	    var instance = apiCheckInstance || formlyConfig.extras.apiCheckInstance || formlyApiCheck;
	    if (instance.config.disabled || _apiCheck2['default'].globalConfig.disabled) {
	      return;
	    }
	    var fn = apiCheckFunction || 'warn';
	    // this is the new API
	    var checkerObjects = apiCheck(instance);
	    _angularFix2['default'].forEach(checkerObjects, function (shape, name) {
	      var checker = instance.shape(shape);
	      var checkOptions = _angularFix2['default'].extend({
	        prefix: 'formly-field type ' + options.type + ' for property ' + name,
	        url: formlyApiCheck.config.output.docsBaseUrl + 'formly-field-type-apicheck-failed'
	      }, apiCheckOptions);
	      instance[fn](checker, options[name], checkOptions);
	    });
	  }
	}
	formlyField.$inject = ["$http", "$q", "$compile", "$templateCache", "$interpolate", "formlyConfig", "formlyApiCheck", "formlyUtil", "formlyUsability", "formlyWarn"];
	
	// Stateless util functions
	function getDefaultOptionsOptionsTypes(type) {
	  return getDefaultOptionsProperty(type, 'optionsTypes', []);
	}
	
	function getDefaultOptionsProperty(type, prop, defaultValue) {
	  return type.defaultOptions && type.defaultOptions[prop] || defaultValue;
	}
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = formlyFocus;
	
	// @ngInject
	function formlyFocus($timeout, $document) {
	  return {
	    restrict: 'A',
	    link: function formlyFocusLink(scope, element, attrs) {
	      var previousEl = null;
	      var el = element[0];
	      var doc = $document[0];
	      attrs.$observe('formlyFocus', function respondToFocusExpressionChange(value) {
	        /* eslint no-bitwise:0 */ // I know what I'm doing. I promise...
	        if (value === 'true') {
	          $timeout(function setElementFocus() {
	            previousEl = doc.activeElement;
	            el.focus();
	          }, ~ ~attrs.focusWait);
	        } else if (value === 'false') {
	          if (doc.activeElement === el) {
	            el.blur();
	            if (attrs.hasOwnProperty('refocus') && previousEl) {
	              previousEl.focus();
	            }
	          }
	        }
	      });
	    }
	  };
	}
	formlyFocus.$inject = ["$timeout", "$document"];
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _slice = Array.prototype.slice;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _angularFix = __webpack_require__(1);
	
	var _angularFix2 = _interopRequireDefault(_angularFix);
	
	exports['default'] = formlyForm;
	
	/**
	 * @ngdoc directive
	 * @name formlyForm
	 * @restrict AE
	 */
	// @ngInject
	function formlyForm(formlyUsability, formlyWarn, $parse, formlyConfig, $interpolate) {
	  var currentFormId = 1;
	  FormlyFormController.$inject = ["$scope", "formlyApiCheck", "formlyUtil"];
	  return {
	    restrict: 'AE',
	    template: formlyFormGetTemplate,
	    replace: true,
	    transclude: true,
	    scope: {
	      fields: '=',
	      model: '=',
	      form: '=?',
	      options: '=?'
	    },
	    controller: FormlyFormController,
	    link: formlyFormLink
	  };
	
	  function formlyFormGetTemplate(el, attrs) {
	    var rootEl = getRootEl();
	    var fieldRootEl = getFieldRootEl();
	    var formId = 'formly_' + currentFormId++;
	    var parentFormAttributes = '';
	    if (attrs.hasOwnProperty('isFieldGroup') && el.parent().parent().hasClass('formly')) {
	      parentFormAttributes = copyAttributes(el.parent().parent()[0].attributes);
	    }
	    return '\n        <' + rootEl + ' class="formly"\n                 name="' + getFormName() + '"\n                 role="form" ' + parentFormAttributes + '>\n          <' + fieldRootEl + ' formly-field\n               ng-repeat="field in fields ' + getTrackBy() + '"\n               ' + getHideDirective() + '="!field.hide"\n               class="formly-field"\n               options="field"\n               model="field.model || model"\n               original-model="model"\n               fields="fields"\n               form="theFormlyForm"\n               form-id="' + getFormName() + '"\n               form-state="options.formState"\n               form-options="options"\n               index="$index">\n          </' + fieldRootEl + '>\n          <div ng-transclude class="' + getTranscludeClass() + '"></div>\n        </' + rootEl + '>\n      ';
	
	    function getRootEl() {
	      return attrs.rootEl || 'ng-form';
	    }
	
	    function getFieldRootEl() {
	      return attrs.fieldRootEl || 'div';
	    }
	
	    function getHideDirective() {
	      return attrs.hideDirective || formlyConfig.extras.defaultHideDirective || 'ng-if';
	    }
	
	    function getTrackBy() {
	      if (!attrs.trackBy) {
	        return '';
	      } else {
	        return 'track by ' + attrs.trackBy;
	      }
	    }
	
	    function getFormName() {
	      var formName = formId;
	      var bindName = attrs.bindName;
	      if (bindName) {
	        if (_angularFix2['default'].version.minor < 3) {
	          throw formlyUsability.getFormlyError('bind-name attribute on formly-form not allowed in < angular 1.3');
	        }
	        // we can do a one-time binding here because we know we're in 1.3.x territory
	        formName = $interpolate.startSymbol() + '::\'formly_\' + ' + bindName + $interpolate.endSymbol();
	      }
	      return formName;
	    }
	
	    function getTranscludeClass() {
	      return attrs.transcludeClass || '';
	    }
	
	    function copyAttributes(attributes) {
	      var excluded = ['model', 'form', 'fields', 'options', 'name', 'role', 'class', 'data-model', 'data-form', 'data-fields', 'data-options', 'data-name'];
	      var arrayAttrs = [];
	      _angularFix2['default'].forEach(attributes, function (_ref) {
	        var nodeName = _ref.nodeName;
	        var value = _ref.value;
	
	        if (nodeName !== 'undefined' && excluded.indexOf(nodeName) === -1) {
	          arrayAttrs.push(toKebabCase(nodeName) + '="' + value + '"');
	        }
	      });
	      return arrayAttrs.join(' ');
	    }
	  }
	
	  // @ngInject
	  function FormlyFormController($scope, formlyApiCheck, formlyUtil) {
	    setupOptions();
	    $scope.model = $scope.model || {};
	    setupFields();
	
	    // watch the model and evaluate watch expressions that depend on it.
	    $scope.$watch('model', onModelOrFormStateChange, true);
	    if ($scope.options.formState) {
	      $scope.$watch('options.formState', onModelOrFormStateChange, true);
	    }
	
	    function onModelOrFormStateChange() {
	      _angularFix2['default'].forEach($scope.fields, function runFieldExpressionProperties(field, index) {
	        var model = field.model || $scope.model;
	        var promise = field.runExpressions && field.runExpressions();
	        if (field.hideExpression) {
	          // can't use hide with expressionProperties reliably
	          var val = model[field.key];
	          field.hide = evalCloseToFormlyExpression(field.hideExpression, val, field, index);
	        }
	        if (field.extras && field.extras.validateOnModelChange && field.formControl) {
	          var validate = field.formControl.$validate;
	          if (promise) {
	            promise.then(validate);
	          } else {
	            validate();
	          }
	        }
	      });
	    }
	
	    function setupFields() {
	      $scope.fields = $scope.fields || [];
	
	      checkDeprecatedOptions($scope.options);
	
	      var fieldTransforms = $scope.options.fieldTransform || formlyConfig.extras.fieldTransform;
	
	      if (!_angularFix2['default'].isArray(fieldTransforms)) {
	        fieldTransforms = [fieldTransforms];
	      }
	
	      _angularFix2['default'].forEach(fieldTransforms, function transformFields(fieldTransform) {
	        if (fieldTransform) {
	          $scope.fields = fieldTransform($scope.fields, $scope.model, $scope.options, $scope.form);
	          if (!$scope.fields) {
	            throw formlyUsability.getFormlyError('fieldTransform must return an array of fields');
	          }
	        }
	      });
	
	      setupModels();
	
	      _angularFix2['default'].forEach($scope.fields, attachKey); // attaches a key based on the index if a key isn't specified
	      _angularFix2['default'].forEach($scope.fields, setupWatchers); // setup watchers for all fields
	    }
	
	    function checkDeprecatedOptions(options) {
	      if (formlyConfig.extras.fieldTransform && _angularFix2['default'].isFunction(formlyConfig.extras.fieldTransform)) {
	        formlyWarn('fieldtransform-as-a-function-deprecated', 'fieldTransform as a function has been deprecated.', 'Attempted for formlyConfig.extras: ' + formlyConfig.extras.fieldTransform.name, formlyConfig.extras);
	      } else if (options.fieldTransform && _angularFix2['default'].isFunction(options.fieldTransform)) {
	        formlyWarn('fieldtransform-as-a-function-deprecated', 'fieldTransform as a function has been deprecated.', 'Attempted for form', options);
	      }
	    }
	
	    function setupOptions() {
	      formlyApiCheck['throw']([formlyApiCheck.formOptionsApi.optional], [$scope.options], { prefix: 'formly-form options check' });
	      $scope.options = $scope.options || {};
	      $scope.options.formState = $scope.options.formState || {};
	
	      _angularFix2['default'].extend($scope.options, {
	        updateInitialValue: updateInitialValue,
	        resetModel: resetModel
	      });
	    }
	
	    function updateInitialValue() {
	      _angularFix2['default'].forEach($scope.fields, function (field) {
	        if (isFieldGroup(field) && field.options) {
	          field.options.updateInitialValue();
	        } else {
	          field.updateInitialValue();
	        }
	      });
	    }
	
	    function resetModel() {
	      _angularFix2['default'].forEach($scope.fields, function (field) {
	        if (isFieldGroup(field) && field.options) {
	          field.options.resetModel();
	        } else if (field.resetModel) {
	          field.resetModel();
	        }
	      });
	    }
	
	    function setupModels() {
	      // a set of field models that are already watched (the $scope.model will have its own watcher)
	      var watchedModels = [$scope.model];
	
	      if ($scope.options.formState) {
	        // $scope.options.formState will have its own watcher
	        watchedModels.push($scope.options.formState);
	      }
	
	      _angularFix2['default'].forEach($scope.fields, function (field) {
	        var isNewModel = initModel(field);
	
	        if (field.model && isNewModel && watchedModels.indexOf(field.model) === -1) {
	          $scope.$watch(function () {
	            return field.model;
	          }, onModelOrFormStateChange, true);
	          watchedModels.push(field.model);
	        }
	      });
	    }
	
	    function initModel(field) {
	      var isNewModel = true;
	
	      if (_angularFix2['default'].isString(field.model)) {
	        var expression = field.model;
	        var index = $scope.fields.indexOf(field);
	
	        isNewModel = !refrencesCurrentlyWatchedModel(expression);
	
	        field.model = evalCloseToFormlyExpression(expression, undefined, field, index);
	        if (!field.model) {
	          throw formlyUsability.getFieldError('field-model-must-be-initialized', 'Field model must be initialized. When specifying a model as a string for a field, the result of the' + ' expression must have been initialized ahead of time.', field);
	        }
	      }
	      return isNewModel;
	    }
	
	    function refrencesCurrentlyWatchedModel(expression) {
	      return ['model', 'formState'].some(function (item) {
	        return formlyUtil.startsWith(expression, item + '.') || formlyUtil.startsWith(expression, item + '[');
	      });
	    }
	
	    function attachKey(field, index) {
	      if (!isFieldGroup(field)) {
	        field.key = field.key || index || 0;
	      }
	    }
	
	    function setupWatchers(field, index) {
	      if (isFieldGroup(field) || !_angularFix2['default'].isDefined(field.watcher)) {
	        return;
	      }
	      var watchers = field.watcher;
	      if (!_angularFix2['default'].isArray(watchers)) {
	        watchers = [watchers];
	      }
	      _angularFix2['default'].forEach(watchers, function setupWatcher(watcher) {
	        if (!_angularFix2['default'].isDefined(watcher.listener)) {
	          throw formlyUsability.getFieldError('all-field-watchers-must-have-a-listener', 'All field watchers must have a listener', field);
	        }
	        var watchExpression = getWatchExpression(watcher, field, index);
	        var watchListener = getWatchListener(watcher, field, index);
	
	        var type = watcher.type || '$watch';
	        watcher.stopWatching = $scope[type](watchExpression, watchListener, watcher.watchDeep);
	      });
	    }
	
	    function getWatchExpression(watcher, field, index) {
	      var watchExpression = watcher.expression || 'model[\'' + field.key.toString().split('.').join('\'][\'') + '\']';
	      if (_angularFix2['default'].isFunction(watchExpression)) {
	        (function () {
	          // wrap the field's watch expression so we can call it with the field as the first arg
	          // and the stop function as the last arg as a helper
	          var originalExpression = watchExpression;
	          watchExpression = function formlyWatchExpression() {
	            var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
	            return originalExpression.apply(undefined, _toConsumableArray(args));
	          };
	          watchExpression.displayName = 'Formly Watch Expression for field for ' + field.key;
	        })();
	      }
	      return watchExpression;
	    }
	
	    function getWatchListener(watcher, field, index) {
	      var watchListener = watcher.listener;
	      if (_angularFix2['default'].isFunction(watchListener)) {
	        (function () {
	          // wrap the field's watch listener so we can call it with the field as the first arg
	          // and the stop function as the last arg as a helper
	          var originalListener = watchListener;
	          watchListener = function formlyWatchListener() {
	            var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
	            return originalListener.apply(undefined, _toConsumableArray(args));
	          };
	          watchListener.displayName = 'Formly Watch Listener for field for ' + field.key;
	        })();
	      }
	      return watchListener;
	    }
	
	    function modifyArgs(watcher, index) {
	      for (var _len = arguments.length, originalArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        originalArgs[_key - 2] = arguments[_key];
	      }
	
	      return [$scope.fields[index]].concat(originalArgs, [watcher.stopWatching]);
	    }
	
	    function evalCloseToFormlyExpression(expression, val, field, index) {
	      var extraLocals = getFormlyFieldLikeLocals(field, index);
	      return formlyUtil.formlyEval($scope, expression, val, val, extraLocals);
	    }
	
	    function getFormlyFieldLikeLocals(field, index) {
	      // this makes it closer to what a regular formlyExpression would be
	      return {
	        options: field,
	        index: index,
	        formState: $scope.options.formState,
	        formId: $scope.formId
	      };
	    }
	  }
	
	  function formlyFormLink(scope, el, attrs) {
	    setFormController();
	    fixChromeAutocomplete();
	
	    function setFormController() {
	      var formId = attrs.name;
	      scope.formId = formId;
	      scope.theFormlyForm = scope[formId];
	      if (attrs.form) {
	        var getter = $parse(attrs.form);
	        var setter = getter.assign;
	        var parentForm = getter(scope.$parent);
	        if (parentForm) {
	          scope.theFormlyForm = parentForm;
	          if (scope[formId]) {
	            scope.theFormlyForm.$removeControl(scope[formId]);
	          }
	
	          // this next line is probably one of the more dangerous things that angular-formly does to improve the
	          // API for angular-formly forms. It ensures that the NgModelControllers inside of formly-form will be
	          // attached to the form that is passed to formly-form rather than the one that formly-form creates
	          // this is necessary because it's confusing to have a step between the form you pass in
	          // and the fields in that form. It also is because angular doesn't propagate properties like $submitted down
	          // to children forms :-( This line was added to solve this issue:
	          // https://github.com/formly-js/angular-formly/issues/287
	          // luckily, this is how the formController has been accessed by the NgModelController since angular 1.0.0
	          // so I expect it will remain this way for the life of angular 1.x
	          el.removeData('$formController');
	        } else {
	          setter(scope.$parent, scope[formId]);
	        }
	      }
	      if (!scope.theFormlyForm && !formlyConfig.disableWarnings) {
	        /* eslint no-console:0 */
	        formlyWarn('formly-form-has-no-formcontroller', 'Your formly-form does not have a `form` property. Many functions of the form (like validation) may not work', el, scope);
	      }
	    }
	
	    /*
	     * chrome autocomplete lameness
	     * see https://code.google.com/p/chromium/issues/detail?id=468153#c14
	     * ლ(ಠ益ಠლ)   (╯°□°)╯︵ ┻━┻    (◞‸◟；)
	     */
	    function fixChromeAutocomplete() {
	      var global = formlyConfig.extras.removeChromeAutoComplete === true;
	      var offInstance = scope.options && scope.options.removeChromeAutoComplete === false;
	      var onInstance = scope.options && scope.options.removeChromeAutoComplete === true;
	      if (global && !offInstance || onInstance) {
	        var input = document.createElement('input');
	        input.setAttribute('autocomplete', 'address-level4');
	        input.setAttribute('hidden', 'true');
	        el[0].appendChild(input);
	      }
	    }
	  }
	
	  // stateless util functions
	  function toKebabCase(string) {
	    if (string) {
	      return string.replace(/([A-Z])/g, function ($1) {
	        return '-' + $1.toLowerCase();
	      });
	    } else {
	      return '';
	    }
	  }
	
	  function isFieldGroup(field) {
	    return field && !!field.fieldGroup;
	  }
	}
	formlyForm.$inject = ["formlyUsability", "formlyWarn", "$parse", "formlyConfig", "$interpolate"];
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angularFix = __webpack_require__(1);
	
	var _angularFix2 = _interopRequireDefault(_angularFix);
	
	var _providersFormlyApiCheck = __webpack_require__(10);
	
	var _providersFormlyApiCheck2 = _interopRequireDefault(_providersFormlyApiCheck);
	
	var _otherDocsBaseUrl = __webpack_require__(3);
	
	var _otherDocsBaseUrl2 = _interopRequireDefault(_otherDocsBaseUrl);
	
	var _providersFormlyUsability = __webpack_require__(12);
	
	var _providersFormlyUsability2 = _interopRequireDefault(_providersFormlyUsability);
	
	var _providersFormlyConfig = __webpack_require__(11);
	
	var _providersFormlyConfig2 = _interopRequireDefault(_providersFormlyConfig);
	
	var _providersFormlyValidationMessages = __webpack_require__(13);
	
	var _providersFormlyValidationMessages2 = _interopRequireDefault(_providersFormlyValidationMessages);
	
	var _servicesFormlyUtil = __webpack_require__(16);
	
	var _servicesFormlyUtil2 = _interopRequireDefault(_servicesFormlyUtil);
	
	var _servicesFormlyWarn = __webpack_require__(17);
	
	var _servicesFormlyWarn2 = _interopRequireDefault(_servicesFormlyWarn);
	
	var _directivesFormlyCustomValidation = __webpack_require__(5);
	
	var _directivesFormlyCustomValidation2 = _interopRequireDefault(_directivesFormlyCustomValidation);
	
	var _directivesFormlyField = __webpack_require__(6);
	
	var _directivesFormlyField2 = _interopRequireDefault(_directivesFormlyField);
	
	var _directivesFormlyFocus = __webpack_require__(7);
	
	var _directivesFormlyFocus2 = _interopRequireDefault(_directivesFormlyFocus);
	
	var _directivesFormlyForm = __webpack_require__(8);
	
	var _directivesFormlyForm2 = _interopRequireDefault(_directivesFormlyForm);
	
	var _runFormlyNgModelAttrsManipulator = __webpack_require__(15);
	
	var _runFormlyNgModelAttrsManipulator2 = _interopRequireDefault(_runFormlyNgModelAttrsManipulator);
	
	var _runFormlyCustomTags = __webpack_require__(14);
	
	var _runFormlyCustomTags2 = _interopRequireDefault(_runFormlyCustomTags);
	
	var ngModuleName = 'formly';
	
	exports['default'] = ngModuleName;
	
	var ngModule = _angularFix2['default'].module(ngModuleName, []);
	
	ngModule.constant('formlyApiCheck', _providersFormlyApiCheck2['default']);
	ngModule.constant('formlyErrorAndWarningsUrlPrefix', _otherDocsBaseUrl2['default']);
	ngModule.constant('formlyVersion', ("7.3.7")); // <-- webpack variable
	
	ngModule.provider('formlyUsability', _providersFormlyUsability2['default']);
	ngModule.provider('formlyConfig', _providersFormlyConfig2['default']);
	
	ngModule.factory('formlyValidationMessages', _providersFormlyValidationMessages2['default']);
	ngModule.factory('formlyUtil', _servicesFormlyUtil2['default']);
	ngModule.factory('formlyWarn', _servicesFormlyWarn2['default']);
	
	ngModule.directive('formlyCustomValidation', _directivesFormlyCustomValidation2['default']);
	ngModule.directive('formlyField', _directivesFormlyField2['default']);
	ngModule.directive('formlyFocus', _directivesFormlyFocus2['default']);
	ngModule.directive('formlyForm', _directivesFormlyForm2['default']);
	
	ngModule.run(_runFormlyNgModelAttrsManipulator2['default']);
	ngModule.run(_runFormlyCustomTags2['default']);
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angularFix = __webpack_require__(1);
	
	var _angularFix2 = _interopRequireDefault(_angularFix);
	
	var _apiCheck = __webpack_require__(4);
	
	var _apiCheck2 = _interopRequireDefault(_apiCheck);
	
	var apiCheck = (0, _apiCheck2['default'])({
	  output: {
	    prefix: 'angular-formly:',
	    docsBaseUrl: __webpack_require__(3)
	  }
	});
	
	function shapeRequiredIfNot(otherProps, propChecker) {
	  if (!_angularFix2['default'].isArray(otherProps)) {
	    otherProps = [otherProps];
	  }
	  var type = 'specified if these are not specified: `' + otherProps.join(', ') + '` (otherwise it\'s optional)';
	
	  function shapeRequiredIfNotDefinition(prop, propName, location, obj) {
	    var propExists = obj && obj.hasOwnProperty(propName);
	    var otherPropsExist = otherProps.some(function (otherProp) {
	      return obj && obj.hasOwnProperty(otherProp);
	    });
	    if (!otherPropsExist && !propExists) {
	      return apiCheck.utils.getError(propName, location, type);
	    } else if (propExists) {
	      return propChecker(prop, propName, location, obj);
	    }
	  }
	
	  shapeRequiredIfNotDefinition.type = type;
	  return apiCheck.utils.checkerHelpers.setupChecker(shapeRequiredIfNotDefinition);
	}
	
	var formlyExpression = apiCheck.oneOfType([apiCheck.string, apiCheck.func]);
	var specifyWrapperType = apiCheck.typeOrArrayOf(apiCheck.string).nullable;
	
	var apiCheckProperty = apiCheck.func;
	
	var apiCheckInstanceProperty = apiCheck.shape.onlyIf('apiCheck', apiCheck.func.withProperties({
	  warn: apiCheck.func,
	  'throw': apiCheck.func,
	  shape: apiCheck.func
	}));
	
	var apiCheckFunctionProperty = apiCheck.shape.onlyIf('apiCheck', apiCheck.oneOf(['throw', 'warn']));
	
	var formlyWrapperType = apiCheck.shape({
	  name: shapeRequiredIfNot('types', apiCheck.string).optional,
	  template: apiCheck.shape.ifNot('templateUrl', apiCheck.string).optional,
	  templateUrl: apiCheck.shape.ifNot('template', apiCheck.string).optional,
	  types: apiCheck.typeOrArrayOf(apiCheck.string).optional,
	  overwriteOk: apiCheck.bool.optional,
	  apiCheck: apiCheckProperty.optional,
	  apiCheckInstance: apiCheckInstanceProperty.optional,
	  apiCheckFunction: apiCheckFunctionProperty.optional,
	  apiCheckOptions: apiCheck.object.optional
	}).strict;
	
	var expressionProperties = apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
	  expression: formlyExpression,
	  message: formlyExpression.optional
	}).strict]));
	
	var modelChecker = apiCheck.oneOfType([apiCheck.string, apiCheck.object]);
	
	var templateManipulators = apiCheck.shape({
	  preWrapper: apiCheck.arrayOf(apiCheck.func).nullable.optional,
	  postWrapper: apiCheck.arrayOf(apiCheck.func).nullable.optional
	}).strict.nullable;
	
	var validatorChecker = apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
	  expression: formlyExpression,
	  message: formlyExpression.optional
	}).strict]));
	
	var fieldOptionsApiShape = {
	  $$hashKey: apiCheck.any.optional,
	  type: apiCheck.shape.ifNot(['template', 'templateUrl'], apiCheck.string).optional,
	  template: apiCheck.shape.ifNot(['type', 'templateUrl'], apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
	  templateUrl: apiCheck.shape.ifNot(['type', 'template'], apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
	  key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]).optional,
	  model: modelChecker.optional,
	  originalModel: modelChecker.optional,
	  className: apiCheck.string.optional,
	  id: apiCheck.string.optional,
	  name: apiCheck.string.optional,
	  expressionProperties: expressionProperties.optional,
	  extras: apiCheck.shape({
	    validateOnModelChange: apiCheck.bool.optional,
	    skipNgModelAttrsManipulator: apiCheck.oneOfType([apiCheck.string, apiCheck.bool]).optional
	  }).strict.optional,
	  data: apiCheck.object.optional,
	  templateOptions: apiCheck.object.optional,
	  wrapper: specifyWrapperType.optional,
	  modelOptions: apiCheck.shape({
	    updateOn: apiCheck.string.optional,
	    debounce: apiCheck.oneOfType([apiCheck.objectOf(apiCheck.number), apiCheck.number]).optional,
	    allowInvalid: apiCheck.bool.optional,
	    getterSetter: apiCheck.bool.optional,
	    timezone: apiCheck.string.optional
	  }).optional,
	  watcher: apiCheck.typeOrArrayOf(apiCheck.shape({
	    expression: formlyExpression.optional,
	    listener: formlyExpression
	  })).optional,
	  validators: validatorChecker.optional,
	  asyncValidators: validatorChecker.optional,
	  parsers: apiCheck.arrayOf(formlyExpression).optional,
	  formatters: apiCheck.arrayOf(formlyExpression).optional,
	  noFormControl: apiCheck.bool.optional,
	  hide: apiCheck.bool.optional,
	  hideExpression: formlyExpression.optional,
	  ngModelElAttrs: apiCheck.objectOf(apiCheck.string).optional,
	  ngModelAttrs: apiCheck.objectOf(apiCheck.shape({
	    statement: apiCheck.shape.ifNot(['value', 'attribute', 'bound', 'boolean'], apiCheck.any).optional,
	    value: apiCheck.shape.ifNot('statement', apiCheck.any).optional,
	    attribute: apiCheck.shape.ifNot('statement', apiCheck.any).optional,
	    bound: apiCheck.shape.ifNot('statement', apiCheck.any).optional,
	    boolean: apiCheck.shape.ifNot('statement', apiCheck.any).optional
	  }).strict).optional,
	  elementAttributes: apiCheck.objectOf(apiCheck.string).optional,
	  optionsTypes: apiCheck.typeOrArrayOf(apiCheck.string).optional,
	  link: apiCheck.func.optional,
	  controller: apiCheck.oneOfType([apiCheck.string, apiCheck.func, apiCheck.array]).optional,
	  validation: apiCheck.shape({
	    show: apiCheck.bool.nullable.optional,
	    messages: apiCheck.objectOf(formlyExpression).optional,
	    errorExistsAndShouldBeVisible: apiCheck.bool.optional
	  }).optional,
	  formControl: apiCheck.typeOrArrayOf(apiCheck.object).optional,
	  value: apiCheck.func.optional,
	  runExpressions: apiCheck.func.optional,
	  templateManipulators: templateManipulators.optional,
	  resetModel: apiCheck.func.optional,
	  updateInitialValue: apiCheck.func.optional,
	  initialValue: apiCheck.any.optional,
	  defaultValue: apiCheck.any.optional
	};
	
	var formlyFieldOptions = apiCheck.shape(fieldOptionsApiShape).strict;
	
	var formOptionsApi = apiCheck.shape({
	  formState: apiCheck.object.optional,
	  resetModel: apiCheck.func.optional,
	  updateInitialValue: apiCheck.func.optional,
	  removeChromeAutoComplete: apiCheck.bool.optional,
	  templateManipulators: templateManipulators.optional,
	  wrapper: specifyWrapperType.optional,
	  fieldTransform: apiCheck.oneOfType([apiCheck.func, apiCheck.array]).optional,
	  data: apiCheck.object.optional
	}).strict;
	
	var fieldGroup = apiCheck.shape({
	  $$hashKey: apiCheck.any.optional,
	  key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]).optional,
	  // danger. Nested field groups wont get api-checked...
	  fieldGroup: apiCheck.arrayOf(apiCheck.oneOfType([formlyFieldOptions, apiCheck.object])),
	  className: apiCheck.string.optional,
	  options: formOptionsApi.optional,
	  templateOptions: apiCheck.object.optional,
	  wrapper: specifyWrapperType.optional,
	  hide: apiCheck.bool.optional,
	  hideExpression: formlyExpression.optional,
	  data: apiCheck.object.optional,
	  model: modelChecker.optional,
	  form: apiCheck.object.optional,
	  elementAttributes: apiCheck.objectOf(apiCheck.string).optional
	}).strict;
	
	var typeOptionsDefaultOptions = _angularFix2['default'].copy(fieldOptionsApiShape);
	typeOptionsDefaultOptions.key = apiCheck.string.optional;
	
	var formlyTypeOptions = apiCheck.shape({
	  name: apiCheck.string,
	  template: apiCheck.shape.ifNot('templateUrl', apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
	  templateUrl: apiCheck.shape.ifNot('template', apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
	  controller: apiCheck.oneOfType([apiCheck.func, apiCheck.string, apiCheck.array]).optional,
	  link: apiCheck.func.optional,
	  defaultOptions: apiCheck.oneOfType([apiCheck.func, apiCheck.shape(typeOptionsDefaultOptions)]).optional,
	  'extends': apiCheck.string.optional,
	  wrapper: specifyWrapperType.optional,
	  data: apiCheck.object.optional,
	  apiCheck: apiCheckProperty.optional,
	  apiCheckInstance: apiCheckInstanceProperty.optional,
	  apiCheckFunction: apiCheckFunctionProperty.optional,
	  apiCheckOptions: apiCheck.object.optional,
	  overwriteOk: apiCheck.bool.optional
	}).strict;
	
	_angularFix2['default'].extend(apiCheck, {
	  formlyTypeOptions: formlyTypeOptions, formlyFieldOptions: formlyFieldOptions, formlyExpression: formlyExpression, formlyWrapperType: formlyWrapperType, fieldGroup: fieldGroup, formOptionsApi: formOptionsApi
	});
	
	exports['default'] = apiCheck;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _angularFix = __webpack_require__(1);
	
	var _angularFix2 = _interopRequireDefault(_angularFix);
	
	var _otherUtils = __webpack_require__(2);
	
	var _otherUtils2 = _interopRequireDefault(_otherUtils);
	
	exports['default'] = formlyConfig;
	
	// @ngInject
	function formlyConfig(formlyUsabilityProvider, formlyErrorAndWarningsUrlPrefix, formlyApiCheck) {
	  var _this2 = this;
	
	  var typeMap = {};
	  var templateWrappersMap = {};
	  var defaultWrapperName = 'default';
	  var _this = this;
	  var getError = formlyUsabilityProvider.getFormlyError;
	
	  _angularFix2['default'].extend(this, {
	    setType: setType,
	    getType: getType,
	    getTypeHeritage: getTypeHeritage,
	    setWrapper: setWrapper,
	    getWrapper: getWrapper,
	    getWrapperByType: getWrapperByType,
	    removeWrapperByName: removeWrapperByName,
	    removeWrappersForType: removeWrappersForType,
	    disableWarnings: false,
	    extras: {
	      disableNgModelAttrsManipulator: false,
	      fieldTransform: [],
	      ngModelAttrsManipulatorPreferUnbound: false,
	      removeChromeAutoComplete: false,
	      defaultHideDirective: 'ng-if',
	      getFieldId: null
	    },
	    templateManipulators: {
	      preWrapper: [],
	      postWrapper: []
	    },
	    $get: function $get() {
	      return _this2;
	    }
	  });
	
	  function setType(options) {
	    if (_angularFix2['default'].isArray(options)) {
	      var _ret = (function () {
	        var allTypes = [];
	        _angularFix2['default'].forEach(options, function (item) {
	          allTypes.push(setType(item));
	        });
	        return {
	          v: allTypes
	        };
	      })();
	
	      if (typeof _ret === 'object') return _ret.v;
	    } else if (_angularFix2['default'].isObject(options)) {
	      checkType(options);
	      if (options['extends']) {
	        extendTypeOptions(options);
	      }
	      typeMap[options.name] = options;
	      return typeMap[options.name];
	    } else {
	      throw getError('You must provide an object or array for setType. You provided: ' + JSON.stringify(arguments));
	    }
	  }
	
	  function checkType(options) {
	    formlyApiCheck['throw'](formlyApiCheck.formlyTypeOptions, options, {
	      prefix: 'formlyConfig.setType',
	      url: 'settype-validation-failed'
	    });
	    if (!options.overwriteOk) {
	      checkOverwrite(options.name, typeMap, options, 'types');
	    } else {
	      options.overwriteOk = undefined;
	    }
	  }
	
	  function extendTypeOptions(options) {
	    var extendsType = getType(options['extends'], true, options);
	    extendTypeControllerFunction(options, extendsType);
	    extendTypeLinkFunction(options, extendsType);
	    extendTypeDefaultOptions(options, extendsType);
	    _otherUtils2['default'].reverseDeepMerge(options, extendsType);
	    extendTemplate(options, extendsType);
	  }
	
	  function extendTemplate(options, extendsType) {
	    if (options.template && extendsType.templateUrl) {
	      delete options.templateUrl;
	    } else if (options.templateUrl && extendsType.template) {
	      delete options.template;
	    }
	  }
	
	  function extendTypeControllerFunction(options, extendsType) {
	    var extendsCtrl = extendsType.controller;
	    if (!_angularFix2['default'].isDefined(extendsCtrl)) {
	      return;
	    }
	    var optionsCtrl = options.controller;
	    if (_angularFix2['default'].isDefined(optionsCtrl)) {
	      options.controller = function ($scope, $controller) {
	        $controller(extendsCtrl, { $scope: $scope });
	        $controller(optionsCtrl, { $scope: $scope });
	      };
	      options.controller.$inject = ['$scope', '$controller'];
	    } else {
	      options.controller = extendsCtrl;
	    }
	  }
	
	  function extendTypeLinkFunction(options, extendsType) {
	    var extendsFn = extendsType.link;
	    if (!_angularFix2['default'].isDefined(extendsFn)) {
	      return;
	    }
	    var optionsFn = options.link;
	    if (_angularFix2['default'].isDefined(optionsFn)) {
	      options.link = function () {
	        extendsFn.apply(undefined, arguments);
	        optionsFn.apply(undefined, arguments);
	      };
	    } else {
	      options.link = extendsFn;
	    }
	  }
	
	  function extendTypeDefaultOptions(options, extendsType) {
	    var extendsDO = extendsType.defaultOptions;
	    if (!_angularFix2['default'].isDefined(extendsDO)) {
	      return;
	    }
	    var optionsDO = options.defaultOptions;
	    var optionsDOIsFn = _angularFix2['default'].isFunction(optionsDO);
	    var extendsDOIsFn = _angularFix2['default'].isFunction(extendsDO);
	    if (extendsDOIsFn) {
	      options.defaultOptions = function defaultOptions(opts, scope) {
	        var extendsDefaultOptions = extendsDO(opts, scope);
	        var mergedDefaultOptions = {};
	        _otherUtils2['default'].reverseDeepMerge(mergedDefaultOptions, opts, extendsDefaultOptions);
	        var extenderOptionsDefaultOptions = optionsDO;
	        if (optionsDOIsFn) {
	          extenderOptionsDefaultOptions = extenderOptionsDefaultOptions(mergedDefaultOptions, scope);
	        }
	        _otherUtils2['default'].reverseDeepMerge(extendsDefaultOptions, extenderOptionsDefaultOptions);
	        return extendsDefaultOptions;
	      };
	    } else if (optionsDOIsFn) {
	      options.defaultOptions = function defaultOptions(opts, scope) {
	        var newDefaultOptions = {};
	        _otherUtils2['default'].reverseDeepMerge(newDefaultOptions, opts, extendsDO);
	        return optionsDO(newDefaultOptions, scope);
	      };
	    }
	  }
	
	  function getType(name, throwError, errorContext) {
	    if (!name) {
	      return undefined;
	    }
	    var type = typeMap[name];
	    if (!type && throwError === true) {
	      throw getError('There is no type by the name of "' + name + '": ' + JSON.stringify(errorContext));
	    } else {
	      return type;
	    }
	  }
	
	  function getTypeHeritage(parent) {
	    var heritage = [];
	    var type = parent;
	    if (_angularFix2['default'].isString(type)) {
	      type = getType(parent);
	    }
	    parent = type['extends'];
	    while (parent) {
	      type = getType(parent);
	      heritage.push(type);
	      parent = type['extends'];
	    }
	    return heritage;
	  }
	
	  function setWrapper(_x, _x2) {
	    var _again = true;
	
	    _function: while (_again) {
	      var options = _x,
	          name = _x2;
	      _again = false;
	
	      if (_angularFix2['default'].isArray(options)) {
	        return options.map(function (wrapperOptions) {
	          return setWrapper(wrapperOptions);
	        });
	      } else if (_angularFix2['default'].isObject(options)) {
	        options.types = getOptionsTypes(options);
	        options.name = getOptionsName(options, name);
	        checkWrapperAPI(options);
	        templateWrappersMap[options.name] = options;
	        return options;
	      } else if (_angularFix2['default'].isString(options)) {
	        _x = {
	          template: options,
	          name: name
	        };
	        _x2 = undefined;
	        _again = true;
	        continue _function;
	      }
	    }
	  }
	
	  function getOptionsTypes(options) {
	    if (_angularFix2['default'].isString(options.types)) {
	      return [options.types];
	    }
	    if (!_angularFix2['default'].isDefined(options.types)) {
	      return [];
	    } else {
	      return options.types;
	    }
	  }
	
	  function getOptionsName(options, name) {
	    return options.name || name || options.types.join(' ') || defaultWrapperName;
	  }
	
	  function checkWrapperAPI(options) {
	    formlyUsabilityProvider.checkWrapper(options);
	    if (options.template) {
	      formlyUsabilityProvider.checkWrapperTemplate(options.template, options);
	    }
	    if (!options.overwriteOk) {
	      checkOverwrite(options.name, templateWrappersMap, options, 'templateWrappers');
	    } else {
	      delete options.overwriteOk;
	    }
	    checkWrapperTypes(options);
	  }
	
	  function checkWrapperTypes(options) {
	    var shouldThrow = !_angularFix2['default'].isArray(options.types) || !options.types.every(_angularFix2['default'].isString);
	    if (shouldThrow) {
	      throw getError('Attempted to create a template wrapper with types that is not a string or an array of strings');
	    }
	  }
	
	  function checkOverwrite(property, object, newValue, objectName) {
	    if (object.hasOwnProperty(property)) {
	      warn('overwriting-types-or-wrappers', ['Attempting to overwrite ' + property + ' on ' + objectName + ' which is currently', JSON.stringify(object[property]) + ' with ' + JSON.stringify(newValue), 'To supress this warning, specify the property "overwriteOk: true"'].join(' '));
	    }
	  }
	
	  function getWrapper(name) {
	    return templateWrappersMap[name || defaultWrapperName];
	  }
	
	  function getWrapperByType(type) {
	    /* eslint prefer-const:0 */
	    var wrappers = [];
	    for (var _name in templateWrappersMap) {
	      if (templateWrappersMap.hasOwnProperty(_name)) {
	        if (templateWrappersMap[_name].types && templateWrappersMap[_name].types.indexOf(type) !== -1) {
	          wrappers.push(templateWrappersMap[_name]);
	        }
	      }
	    }
	    return wrappers;
	  }
	
	  function removeWrapperByName(name) {
	    var wrapper = templateWrappersMap[name];
	    delete templateWrappersMap[name];
	    return wrapper;
	  }
	
	  function removeWrappersForType(type) {
	    var wrappers = getWrapperByType(type);
	    if (!wrappers) {
	      return undefined;
	    }
	    if (!_angularFix2['default'].isArray(wrappers)) {
	      return removeWrapperByName(wrappers.name);
	    } else {
	      wrappers.forEach(function (wrapper) {
	        return removeWrapperByName(wrapper.name);
	      });
	      return wrappers;
	    }
	  }
	
	  function warn() {
	    if (!_this.disableWarnings && console.warn) {
	      /* eslint no-console:0 */
	      var args = Array.prototype.slice.call(arguments);
	      var warnInfoSlug = args.shift();
	      args.unshift('Formly Warning:');
	      args.push('' + formlyErrorAndWarningsUrlPrefix + warnInfoSlug);
	      console.warn.apply(console, _toConsumableArray(args));
	    }
	  }
	}
	formlyConfig.$inject = ["formlyUsabilityProvider", "formlyErrorAndWarningsUrlPrefix", "formlyApiCheck"];
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angularFix = __webpack_require__(1);
	
	var _angularFix2 = _interopRequireDefault(_angularFix);
	
	exports['default'] = formlyUsability;
	
	// @ngInject
	function formlyUsability(formlyApiCheck, formlyErrorAndWarningsUrlPrefix) {
	  var _this = this;
	
	  _angularFix2['default'].extend(this, {
	    getFormlyError: getFormlyError,
	    getFieldError: getFieldError,
	    checkWrapper: checkWrapper,
	    checkWrapperTemplate: checkWrapperTemplate,
	    getErrorMessage: getErrorMessage,
	    $get: function $get() {
	      return _this;
	    }
	  });
	
	  function getFieldError(errorInfoSlug, message, field) {
	    if (arguments.length < 3) {
	      field = message;
	      message = errorInfoSlug;
	      errorInfoSlug = null;
	    }
	    return new Error(getErrorMessage(errorInfoSlug, message) + (' Field definition: ' + _angularFix2['default'].toJson(field)));
	  }
	
	  function getFormlyError(errorInfoSlug, message) {
	    if (!message) {
	      message = errorInfoSlug;
	      errorInfoSlug = null;
	    }
	    return new Error(getErrorMessage(errorInfoSlug, message));
	  }
	
	  function getErrorMessage(errorInfoSlug, message) {
	    var url = '';
	    if (errorInfoSlug !== null) {
	      url = '' + formlyErrorAndWarningsUrlPrefix + errorInfoSlug;
	    }
	    return 'Formly Error: ' + message + '. ' + url;
	  }
	
	  function checkWrapper(wrapper) {
	    formlyApiCheck['throw'](formlyApiCheck.formlyWrapperType, wrapper, {
	      prefix: 'formlyConfig.setWrapper',
	      urlSuffix: 'setwrapper-validation-failed'
	    });
	  }
	
	  function checkWrapperTemplate(template, additionalInfo) {
	    var formlyTransclude = '<formly-transclude></formly-transclude>';
	    if (template.indexOf(formlyTransclude) === -1) {
	      throw getFormlyError('Template wrapper templates must use "' + formlyTransclude + '" somewhere in them. ' + ('This one does not have "<formly-transclude></formly-transclude>" in it: ' + template) + '\n' + ('Additional information: ' + JSON.stringify(additionalInfo)));
	    }
	  }
	}
	formlyUsability.$inject = ["formlyApiCheck", "formlyErrorAndWarningsUrlPrefix"];
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = formlyValidationMessages;
	
	// @ngInject
	function formlyValidationMessages() {
	
	  var validationMessages = {
	    addTemplateOptionValueMessage: addTemplateOptionValueMessage,
	    addStringMessage: addStringMessage,
	    messages: {}
	  };
	
	  return validationMessages;
	
	  function addTemplateOptionValueMessage(name, prop, prefix, suffix, alternate) {
	    validationMessages.messages[name] = templateOptionValue(prop, prefix, suffix, alternate);
	  }
	
	  function addStringMessage(name, string) {
	    validationMessages.messages[name] = function () {
	      return string;
	    };
	  }
	
	  function templateOptionValue(prop, prefix, suffix, alternate) {
	    return function getValidationMessage(viewValue, modelValue, scope) {
	      if (typeof scope.options.templateOptions[prop] !== 'undefined') {
	        return prefix + ' ' + scope.options.templateOptions[prop] + ' ' + suffix;
	      } else {
	        return alternate;
	      }
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angularFix = __webpack_require__(1);
	
	var _angularFix2 = _interopRequireDefault(_angularFix);
	
	exports['default'] = addCustomTags;
	
	// @ngInject
	function addCustomTags($document) {
	  // IE8 check ->
	  // https://msdn.microsoft.com/en-us/library/cc196988(v=vs.85).aspx
	  if ($document && $document.documentMode < 9) {
	    (function () {
	      var document = $document.get(0);
	      // add the custom elements that we need for formly
	      var customElements = ['formly-field', 'formly-form'];
	      _angularFix2['default'].forEach(customElements, function (el) {
	        document.createElement(el);
	      });
	    })();
	  }
	}
	addCustomTags.$inject = ["$document"];
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angularFix = __webpack_require__(1);
	
	var _angularFix2 = _interopRequireDefault(_angularFix);
	
	var _otherUtils = __webpack_require__(2);
	
	exports['default'] = addFormlyNgModelAttrsManipulator;
	
	// @ngInject
	function addFormlyNgModelAttrsManipulator(formlyConfig, $interpolate) {
	  if (formlyConfig.extras.disableNgModelAttrsManipulator) {
	    return;
	  }
	  formlyConfig.templateManipulators.preWrapper.push(ngModelAttrsManipulator);
	
	  function ngModelAttrsManipulator(template, options, scope) {
	    var node = document.createElement('div');
	    var skip = options.extras && options.extras.skipNgModelAttrsManipulator;
	    if (skip === true) {
	      return template;
	    }
	    node.innerHTML = template;
	
	    var modelNodes = getNgModelNodes(node, skip);
	    if (!modelNodes || !modelNodes.length) {
	      return template;
	    }
	
	    addIfNotPresent(modelNodes, 'id', scope.id);
	    addIfNotPresent(modelNodes, 'name', scope.name || scope.id);
	
	    addValidation();
	    alterNgModelAttr();
	    addModelOptions();
	    addTemplateOptionsAttrs();
	    addNgModelElAttrs();
	
	    return node.innerHTML;
	
	    function addValidation() {
	      if (_angularFix2['default'].isDefined(options.validators) || _angularFix2['default'].isDefined(options.validation.messages)) {
	        addIfNotPresent(modelNodes, 'formly-custom-validation', '');
	      }
	    }
	
	    function alterNgModelAttr() {
	      if (isPropertyAccessor(options.key)) {
	        addRegardlessOfPresence(modelNodes, 'ng-model', 'model.' + options.key);
	      }
	    }
	
	    function addModelOptions() {
	      if (_angularFix2['default'].isDefined(options.modelOptions)) {
	        addIfNotPresent(modelNodes, 'ng-model-options', 'options.modelOptions');
	        if (options.modelOptions.getterSetter) {
	          addRegardlessOfPresence(modelNodes, 'ng-model', 'options.value');
	        }
	      }
	    }
	
	    function addTemplateOptionsAttrs() {
	      if (!options.templateOptions && !options.expressionProperties) {
	        // no need to run these if there are no templateOptions or expressionProperties
	        return;
	      }
	      var to = options.templateOptions || {};
	      var ep = options.expressionProperties || {};
	
	      var ngModelAttributes = getBuiltInAttributes();
	
	      // extend with the user's specifications winning
	      _angularFix2['default'].extend(ngModelAttributes, options.ngModelAttrs);
	
	      // Feel free to make this more simple :-)
	      _angularFix2['default'].forEach(ngModelAttributes, function (val, name) {
	        /* eslint complexity:[2, 14] */
	        var attrVal = undefined,
	            attrName = undefined;
	        var ref = 'options.templateOptions[\'' + name + '\']';
	        var toVal = to[name];
	        var epVal = getEpValue(ep, name);
	
	        var inTo = _angularFix2['default'].isDefined(toVal);
	        var inEp = _angularFix2['default'].isDefined(epVal);
	        if (val.value) {
	          // I realize this looks backwards, but it's right, trust me...
	          attrName = val.value;
	          attrVal = name;
	        } else if (val.statement && inTo) {
	          attrName = val.statement;
	          if (_angularFix2['default'].isString(to[name])) {
	            attrVal = '$eval(' + ref + ')';
	          } else if (_angularFix2['default'].isFunction(to[name])) {
	            attrVal = ref + '(model[options.key], options, this, $event)';
	          } else {
	            throw new Error('options.templateOptions.' + name + ' must be a string or function: ' + JSON.stringify(options));
	          }
	        } else if (val.bound && inEp) {
	          attrName = val.bound;
	          attrVal = ref;
	        } else if ((val.attribute || val.boolean) && inEp) {
	          attrName = val.attribute || val.boolean;
	          attrVal = '' + $interpolate.startSymbol() + ref + $interpolate.endSymbol();
	        } else if (val.attribute && inTo) {
	          attrName = val.attribute;
	          attrVal = toVal;
	        } else if (val.boolean) {
	          if (inTo && !inEp && toVal) {
	            attrName = val.boolean;
	            attrVal = true;
	          } else {
	            /* eslint no-empty:0 */
	            // empty to illustrate that a boolean will not be added via val.bound
	            // if you want it added via val.bound, then put it in expressionProperties
	          }
	        } else if (val.bound && inTo) {
	            attrName = val.bound;
	            attrVal = ref;
	          }
	
	        if (_angularFix2['default'].isDefined(attrName) && _angularFix2['default'].isDefined(attrVal)) {
	          addIfNotPresent(modelNodes, attrName, attrVal);
	        }
	      });
	    }
	
	    function addNgModelElAttrs() {
	      _angularFix2['default'].forEach(options.ngModelElAttrs, function (val, name) {
	        addRegardlessOfPresence(modelNodes, name, val);
	      });
	    }
	  }
	
	  // Utility functions
	  function getNgModelNodes(node, skip) {
	    var selectorNot = _angularFix2['default'].isString(skip) ? ':not(' + skip + ')' : '';
	    var skipNot = ':not([formly-skip-ng-model-attrs-manipulator])';
	    var query = '[ng-model]' + selectorNot + skipNot + ', [data-ng-model]' + selectorNot + skipNot;
	    try {
	      return node.querySelectorAll(query);
	    } catch (e) {
	      //this code is needed for IE8, as it does not support the CSS3 ':not' selector
	      //it should be removed when IE8 support is dropped
	      return getNgModelNodesFallback(node, skip);
	    }
	  }
	
	  function getNgModelNodesFallback(node, skip) {
	    var allNgModelNodes = node.querySelectorAll('[ng-model], [data-ng-model]');
	    var matchingNgModelNodes = [];
	
	    //make sure this array is compatible with NodeList type by adding an 'item' function
	    matchingNgModelNodes.item = function (i) {
	      return this[i];
	    };
	
	    for (var i = 0; i < allNgModelNodes.length; i++) {
	      var ngModelNode = allNgModelNodes[i];
	      if (!ngModelNode.hasAttribute('formly-skip-ng-model-attrs-manipulator') && !(_angularFix2['default'].isString(skip) && nodeMatches(ngModelNode, skip))) {
	        matchingNgModelNodes.push(ngModelNode);
	      }
	    }
	
	    return matchingNgModelNodes;
	  }
	
	  function nodeMatches(node, selector) {
	    var div = document.createElement('div');
	    div.innerHTML = node.outerHTML;
	    return div.querySelector(selector);
	  }
	
	  function getBuiltInAttributes() {
	    var ngModelAttributes = {
	      focus: {
	        attribute: 'formly-focus'
	      }
	    };
	    var boundOnly = [];
	    var bothBooleanAndBound = ['required', 'disabled'];
	    var bothAttributeAndBound = ['pattern', 'minlength'];
	    var statementOnly = ['change', 'keydown', 'keyup', 'keypress', 'click', 'focus', 'blur'];
	    var attributeOnly = ['placeholder', 'min', 'max', 'tabindex', 'type'];
	    if (formlyConfig.extras.ngModelAttrsManipulatorPreferUnbound) {
	      bothAttributeAndBound.push('maxlength');
	    } else {
	      boundOnly.push('maxlength');
	    }
	
	    _angularFix2['default'].forEach(boundOnly, function (item) {
	      ngModelAttributes[item] = { bound: 'ng-' + item };
	    });
	
	    _angularFix2['default'].forEach(bothBooleanAndBound, function (item) {
	      ngModelAttributes[item] = { boolean: item, bound: 'ng-' + item };
	    });
	
	    _angularFix2['default'].forEach(bothAttributeAndBound, function (item) {
	      ngModelAttributes[item] = { attribute: item, bound: 'ng-' + item };
	    });
	
	    _angularFix2['default'].forEach(statementOnly, function (item) {
	      var propName = 'on' + item.substr(0, 1).toUpperCase() + item.substr(1);
	      ngModelAttributes[propName] = { statement: 'ng-' + item };
	    });
	
	    _angularFix2['default'].forEach(attributeOnly, function (item) {
	      ngModelAttributes[item] = { attribute: item };
	    });
	    return ngModelAttributes;
	  }
	
	  function getEpValue(ep, name) {
	    return ep['templateOptions.' + name] || ep['templateOptions[\'' + name + '\']'] || ep['templateOptions["' + name + '"]'];
	  }
	
	  function addIfNotPresent(nodes, attr, val) {
	    _angularFix2['default'].forEach(nodes, function (node) {
	      if (!node.getAttribute(attr)) {
	        node.setAttribute(attr, val);
	      }
	    });
	  }
	
	  function addRegardlessOfPresence(nodes, attr, val) {
	    _angularFix2['default'].forEach(nodes, function (node) {
	      node.setAttribute(attr, val);
	    });
	  }
	
	  function isPropertyAccessor(key) {
	    return (0, _otherUtils.contains)(key, '.') || (0, _otherUtils.contains)(key, '[') && (0, _otherUtils.contains)(key, ']');
	  }
	}
	addFormlyNgModelAttrsManipulator.$inject = ["formlyConfig", "$interpolate"];
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _otherUtils = __webpack_require__(2);
	
	var _otherUtils2 = _interopRequireDefault(_otherUtils);
	
	exports['default'] = formlyUtil;
	
	// @ngInject
	function formlyUtil() {
	  return _otherUtils2['default'];
	}
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	exports['default'] = formlyWarn;
	
	// @ngInject
	function formlyWarn(formlyConfig, formlyErrorAndWarningsUrlPrefix, $log) {
	  return function warn() {
	    if (!formlyConfig.disableWarnings) {
	      var args = Array.prototype.slice.call(arguments);
	      var warnInfoSlug = args.shift();
	      args.unshift('Formly Warning:');
	      args.push('' + formlyErrorAndWarningsUrlPrefix + warnInfoSlug);
	      $log.warn.apply($log, _toConsumableArray(args));
	    }
	  };
	}
	formlyWarn.$inject = ["formlyConfig", "formlyErrorAndWarningsUrlPrefix", "$log"];
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=formly.min.js.map
/*!
 * angular-ui-mask
 * https://github.com/angular-ui/ui-mask
 * Version: 1.6.3 - 2015-11-28T04:10:02.031Z
 * License: MIT
 */
!function(){"use strict";angular.module("ui.mask",[]).value("uiMaskConfig",{maskDefinitions:{9:/\d/,A:/[a-zA-Z]/,"*":/[a-zA-Z0-9]/},clearOnBlur:!0,eventsToHandle:["input","keyup","click","focus"]}).directive("uiMask",["uiMaskConfig",function(e){function n(e){return e===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(e.type||e.href||~e.tabIndex)}return{priority:100,require:"ngModel",restrict:"A",compile:function(){var t=e;return function(e,r,i,a){function u(e){return angular.isDefined(e)?(k(e),L?(h(),d(),!0):f()):f()}function o(e){e&&(C=e,L&&r.val(m(p(r.val()))))}function l(){return u(i.uiMask)}function c(e){return L?(T=p(e||""),H=v(T),a.$setValidity("mask",H),H&&T.length?m(T):void 0):e}function s(e){return L?(T=p(e||""),H=v(T),a.$viewValue=T.length?m(T):"",a.$setValidity("mask",H),H?W?a.$viewValue:T:void 0):e}function f(){return L=!1,g(),angular.isDefined(I)?r.attr("placeholder",I):r.removeAttr("placeholder"),angular.isDefined(K)?r.attr("maxlength",K):r.removeAttr("maxlength"),r.val(a.$modelValue),a.$viewValue=a.$modelValue,!1}function h(){T=F=p(a.$modelValue||""),j=z=m(T),H=v(T),i.maxlength&&r.attr("maxlength",2*P[P.length-1]),I||r.attr("placeholder",C);for(var e=a.$modelValue,n=a.$formatters.length;n--;)e=a.$formatters[n](e);a.$viewValue=e||"",a.$render()}function d(){q||(r.bind("blur",y),r.bind("mousedown mouseup",E),r.bind(G.eventsToHandle.join(" "),x),q=!0)}function g(){q&&(r.unbind("blur",y),r.unbind("mousedown",E),r.unbind("mouseup",E),r.unbind("input",x),r.unbind("keyup",x),r.unbind("click",x),r.unbind("focus",x),q=!1)}function v(e){return e.length?e.length>=R:!0}function p(e){var n="",t=S.slice();return e=e.toString(),angular.forEach(_,function(n){e=e.replace(n,"")}),angular.forEach(e.split(""),function(e){t.length&&t[0].test(e)&&(n+=e,t.shift())}),n}function m(e){var n="",t=P.slice();return angular.forEach(C.split(""),function(r,i){e.length&&i===t[0]?(n+=e.charAt(0)||"_",e=e.substr(1),t.shift()):n+=r}),n}function b(e){var n,t=angular.isDefined(i.uiMaskPlaceholder)?i.uiMaskPlaceholder:i.placeholder;return angular.isDefined(t)&&t[e]?t[e]:(n=angular.isDefined(i.uiMaskPlaceholderChar)&&i.uiMaskPlaceholderChar?i.uiMaskPlaceholderChar:"_","space"===n.toLowerCase()?" ":n[0])}function $(){return C.replace(/[_]+/g,"_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g,"$1$2_$3").split("_")}function k(e){var n=0;if(P=[],S=[],C="",angular.isString(e)){R=0;var t=!1,r=0,i=e.split("");angular.forEach(i,function(e,i){G.maskDefinitions[e]?(P.push(n),C+=b(i-r),S.push(G.maskDefinitions[e]),n++,t||R++,t=!1):"?"===e?(t=!0,r++):(C+=e,n++)})}P.push(P.slice().pop()+1),_=$(),L=P.length>1?!0:!1}function y(){G.clearOnBlur&&(Z=0,B=0,H&&0!==T.length||(j="",r.val(""),e.$apply(function(){a.$viewValue=""}))),T!==J&&w(r[0]),J=T}function w(e){var n;angular.isFunction(window.Event)&&!e.fireEvent?(n=new Event("change",{view:window,bubbles:!0,cancelable:!1}),e.dispatchEvent(n)):"createEvent"in document?(n=document.createEvent("HTMLEvents"),n.initEvent("change",!1,!0),e.dispatchEvent(n)):e.fireEvent&&e.fireEvent("onchange")}function E(e){"mousedown"===e.type?r.bind("mouseout",M):r.unbind("mouseout",M)}function M(){B=D(this),r.unbind("mouseout",M)}function x(n){n=n||{};var t=n.which,i=n.type;if(16!==t&&91!==t){var u,o=r.val(),l=z,c=!1,s=p(o),f=F,h=O(this)||0,d=Z||0,g=h-d,v=P[0],b=P[s.length]||P.slice().shift(),$=B||0,k=D(this)>0,y=$>0,w=o.length>l.length||$&&o.length>l.length-$,E=o.length<l.length||$&&o.length===l.length-$,M=t>=37&&40>=t&&n.shiftKey,x=37===t,S=8===t||"keyup"!==i&&E&&-1===g,C=46===t||"keyup"!==i&&E&&0===g&&!y,_=(x||S||"click"===i)&&h>v;if(B=D(this),!M&&(!k||"click"!==i&&"keyup"!==i)){if("input"===i&&E&&!y&&s===f){for(;S&&h>v&&!V(h);)h--;for(;C&&b>h&&-1===P.indexOf(h);)h++;var R=P.indexOf(h);s=s.substring(0,R)+s.substring(R+1),c=!0}for(u=m(s),z=u,F=s,!c&&o.length>u.length&&(c=!0),r.val(u),c&&e.$apply(function(){a.$setViewValue(s)}),w&&v>=h&&(h=v+1),_&&h--,h=h>b?b:v>h?v:h;!V(h)&&h>v&&b>h;)h+=_?-1:1;(_&&b>h||w&&!V(d))&&h++,Z=h,A(this,h)}}}function V(e){return P.indexOf(e)>-1}function O(e){if(!e)return 0;if(void 0!==e.selectionStart)return e.selectionStart;if(document.selection&&n(r[0])){e.focus();var t=document.selection.createRange();return t.moveStart("character",e.value?-e.value.length:0),t.text.length}return 0}function A(e,t){if(!e)return 0;if(0!==e.offsetWidth&&0!==e.offsetHeight)if(e.setSelectionRange)n(r[0])&&(e.focus(),e.setSelectionRange(t,t));else if(e.createTextRange){var i=e.createTextRange();i.collapse(!0),i.moveEnd("character",t),i.moveStart("character",t),i.select()}}function D(e){return e?void 0!==e.selectionStart?e.selectionEnd-e.selectionStart:document.selection?document.selection.createRange().text.length:0:0}var P,S,C,_,R,T,j,H,z,F,Z,B,L=!1,q=!1,I=i.placeholder,K=i.maxlength,N=a.$isEmpty;a.$isEmpty=function(e){return N(S?p(e||""):e)};var W=!1;i.$observe("modelViewValue",function(e){"true"===e&&(W=!0)});var G={};i.uiOptions?(G=e.$eval("["+i.uiOptions+"]"),G=angular.isObject(G[0])?function(e,n){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0===n[t]?n[t]=angular.copy(e[t]):angular.isObject(n[t])&&!angular.isArray(n[t])&&(n[t]=angular.extend({},e[t],n[t])));return n}(t,G[0]):t):G=t,i.$observe("uiMask",u),angular.isDefined(i.uiMaskPlaceholder)?i.$observe("uiMaskPlaceholder",o):i.$observe("placeholder",o),angular.isDefined(i.uiMaskPlaceholderChar)&&i.$observe("uiMaskPlaceholderChar",l),a.$formatters.push(c),a.$parsers.push(s);var J=r.val();r.bind("mousedown mouseup",E),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null===this)throw new TypeError;var n=Object(this),t=n.length>>>0;if(0===t)return-1;var r=0;if(arguments.length>1&&(r=Number(arguments[1]),r!==r?r=0:0!==r&&r!==1/0&&r!==-(1/0)&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=t)return-1;for(var i=r>=0?r:Math.max(t-Math.abs(r),0);t>i;i++)if(i in n&&n[i]===e)return i;return-1})}}}}])}();
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Blob.js
 * A Blob implementation.
 * 2014-07-24
 *
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/dsamarin
 * License: X11/MIT
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
 */

/*global self, unescape */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */

(function (view) {
	"use strict";

	view.URL = view.URL || view.webkitURL;

	if (view.Blob && view.URL) {
		try {
			new Blob;
			return;
		} catch (e) {}
	}

	// Internally we use a BlobBuilder implementation to base Blob off of
	// in order to support older browsers that only have BlobBuilder
	var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || (function(view) {
		var
			  get_class = function(object) {
				return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
			}
			, FakeBlobBuilder = function BlobBuilder() {
				this.data = [];
			}
			, FakeBlob = function Blob(data, type, encoding) {
				this.data = data;
				this.size = data.length;
				this.type = type;
				this.encoding = encoding;
			}
			, FBB_proto = FakeBlobBuilder.prototype
			, FB_proto = FakeBlob.prototype
			, FileReaderSync = view.FileReaderSync
			, FileException = function(type) {
				this.code = this[this.name = type];
			}
			, file_ex_codes = (
				  "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "
				+ "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"
			).split(" ")
			, file_ex_code = file_ex_codes.length
			, real_URL = view.URL || view.webkitURL || view
			, real_create_object_URL = real_URL.createObjectURL
			, real_revoke_object_URL = real_URL.revokeObjectURL
			, URL = real_URL
			, btoa = view.btoa
			, atob = view.atob

			, ArrayBuffer = view.ArrayBuffer
			, Uint8Array = view.Uint8Array

			, origin = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/
		;
		FakeBlob.fake = FB_proto.fake = true;
		while (file_ex_code--) {
			FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
		}
		// Polyfill URL
		if (!real_URL.createObjectURL) {
			URL = view.URL = function(uri) {
				var
					  uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
					, uri_origin
				;
				uri_info.href = uri;
				if (!("origin" in uri_info)) {
					if (uri_info.protocol.toLowerCase() === "data:") {
						uri_info.origin = null;
					} else {
						uri_origin = uri.match(origin);
						uri_info.origin = uri_origin && uri_origin[1];
					}
				}
				return uri_info;
			};
		}
		URL.createObjectURL = function(blob) {
			var
				  type = blob.type
				, data_URI_header
			;
			if (type === null) {
				type = "application/octet-stream";
			}
			if (blob instanceof FakeBlob) {
				data_URI_header = "data:" + type;
				if (blob.encoding === "base64") {
					return data_URI_header + ";base64," + blob.data;
				} else if (blob.encoding === "URI") {
					return data_URI_header + "," + decodeURIComponent(blob.data);
				} if (btoa) {
					return data_URI_header + ";base64," + btoa(blob.data);
				} else {
					return data_URI_header + "," + encodeURIComponent(blob.data);
				}
			} else if (real_create_object_URL) {
				return real_create_object_URL.call(real_URL, blob);
			}
		};
		URL.revokeObjectURL = function(object_URL) {
			if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
				real_revoke_object_URL.call(real_URL, object_URL);
			}
		};
		FBB_proto.append = function(data/*, endings*/) {
			var bb = this.data;
			// decode data to a binary string
			if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {
				var
					  str = ""
					, buf = new Uint8Array(data)
					, i = 0
					, buf_len = buf.length
				;
				for (; i < buf_len; i++) {
					str += String.fromCharCode(buf[i]);
				}
				bb.push(str);
			} else if (get_class(data) === "Blob" || get_class(data) === "File") {
				if (FileReaderSync) {
					var fr = new FileReaderSync;
					bb.push(fr.readAsBinaryString(data));
				} else {
					// async FileReader won't work as BlobBuilder is sync
					throw new FileException("NOT_READABLE_ERR");
				}
			} else if (data instanceof FakeBlob) {
				if (data.encoding === "base64" && atob) {
					bb.push(atob(data.data));
				} else if (data.encoding === "URI") {
					bb.push(decodeURIComponent(data.data));
				} else if (data.encoding === "raw") {
					bb.push(data.data);
				}
			} else {
				if (typeof data !== "string") {
					data += ""; // convert unsupported types to strings
				}
				// decode UTF-16 to binary string
				bb.push(unescape(encodeURIComponent(data)));
			}
		};
		FBB_proto.getBlob = function(type) {
			if (!arguments.length) {
				type = null;
			}
			return new FakeBlob(this.data.join(""), type, "raw");
		};
		FBB_proto.toString = function() {
			return "[object BlobBuilder]";
		};
		FB_proto.slice = function(start, end, type) {
			var args = arguments.length;
			if (args < 3) {
				type = null;
			}
			return new FakeBlob(
				  this.data.slice(start, args > 1 ? end : this.data.length)
				, type
				, this.encoding
			);
		};
		FB_proto.toString = function() {
			return "[object Blob]";
		};
		FB_proto.close = function() {
			this.size = 0;
			delete this.data;
		};
		return FakeBlobBuilder;
	}(view));

	view.Blob = function(blobParts, options) {
		var type = options ? (options.type || "") : "";
		var builder = new BlobBuilder();
		if (blobParts) {
			for (var i = 0, len = blobParts.length; i < len; i++) {
				if (Uint8Array && blobParts[i] instanceof Uint8Array) {
					builder.append(blobParts[i].buffer);
				}
				else {
					builder.append(blobParts[i]);
				}
			}
		}
		var blob = builder.getBlob(type);
		if (!blob.slice && blob.webkitSlice) {
			blob.slice = blob.webkitSlice;
		}
		return blob;
	};

	var getPrototypeOf = Object.getPrototypeOf || function(object) {
		return object.__proto__;
	};
	view.Blob.prototype = getPrototypeOf(new view.Blob());
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));

},{}],2:[function(require,module,exports){
/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.1.20151003
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent)
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		// See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
		// https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
		// for the reasoning behind the timeout and revocation flow
		, arbitrary_revoke_timeout = 500 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			if (view.chrome) {
				revoker();
			} else {
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob(["\ufeff", blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if (target_view && is_safari && typeof FileReader !== "undefined") {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var base64Data = reader.result;
							target_view.location.href = "data:attachment/file" + base64Data.slice(base64Data.search(/[,;]/));
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
						var new_tab = view.open(object_url, "_blank");
						if (new_tab == undefined && is_safari) {
							//Apple do not allow window.open, see http://bit.ly/1kZffRI
							view.location.href = object_url
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice
			;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			// Update: Google errantly closed 91158, I submitted it again:
			// https://code.google.com/p/chromium/issues/detail?id=389642
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
									revoke(file);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name, no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name || "download");
		};
	}

	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
  define([], function() {
    return saveAs;
  });
}

},{}],3:[function(require,module,exports){
'use strict';

/*
*
* A AngularJS module that implements the HTML5 W3C saveAs() in browsers that
* do not natively support it
*
* (c) 2015 Philipp Alferov
* License: MIT
*
*/

angular.module('ngFileSaver', [])
  .factory('FileSaver', ['Blob', 'SaveAs', 'FileSaverUtils', require('./angular-file-saver.service')])
  .factory('FileSaverUtils', [require('./utils/utils.service.js')])
  .factory('Blob', ['$window', require('./dependencies/blob-bundle.service.js')])
  .factory('SaveAs', [require('./dependencies/file-saver-bundle.service.js')]);

},{"./angular-file-saver.service":4,"./dependencies/blob-bundle.service.js":5,"./dependencies/file-saver-bundle.service.js":6,"./utils/utils.service.js":7}],4:[function(require,module,exports){
'use strict';

module.exports = function FileSaver(Blob, SaveAs, FileSaverUtils) {

  function save(blob, filename, disableAutoBOM) {
    try {
      SaveAs(blob, filename, disableAutoBOM);
    } catch(err) {
      FileSaverUtils.handleErrors(err.message);
    }
  }

  return {

    /**
    * saveAs
    * Immediately starts saving a file, returns undefined.
    *
    * @name saveAs
    * @function
    * @param {Blob} data A Blob instance
    * @param {Object} filename Custom filename (extension is optional)
    * @param {Boolean} disableAutoBOM Disable automatically provided Unicode
    * text encoding hints
    *
    * @return {Undefined}
    */

    saveAs: function(data, filename, disableAutoBOM) {

      if (!FileSaverUtils.isBlobInstance(data)) {
        FileSaverUtils.handleErrors('Data argument should be a blob instance');
      }

      if (!FileSaverUtils.isString(filename)) {
        FileSaverUtils.handleErrors('Filename argument should be a string');
      }

      return save(data, filename, disableAutoBOM);
    }
  };
};

},{}],5:[function(require,module,exports){
'use strict';

require('Blob.js');

module.exports = function Blob($window) {
  return $window.Blob;
};

},{"Blob.js":1}],6:[function(require,module,exports){
'use strict';

module.exports = function SaveAs() {
  return require('FileSaver.js').saveAs || function() {};
};

},{"FileSaver.js":2}],7:[function(require,module,exports){
'use strict';

module.exports = function FileSaverUtils() {
  return {
    handleErrors: function(msg) {
      throw new Error(msg);
    },
    isString: function(obj) {
      return typeof obj === 'string' || obj instanceof String;
    },
    isUndefined: function(obj) {
      return typeof obj === 'undefined';
    },
    isBlobInstance: function(obj) {
      return obj instanceof Blob;
    }
  };
};

},{}]},{},[3]);
