(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",d="year",u="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:a,d:o,D:u,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",g={};g[y]=m;var $=function(t){return t instanceof S},b=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;g[a]=e,s=a}return!i&&s&&(y=s),s||!i&&y},C=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},w=_;w.l=b,w.i=$,w.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return C(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<C(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!w.u(e)||e,p=w.p(t),h=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},f=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case d:return c?h(1,0):h(31,11);case l:return c?h(1,v):h(0,v+1);case a:var g=this.$locale().weekStart||0,$=(m<g?m+7:m)-g;return h(c?_-$:_+(6-$),v);case o:case u:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=w.p(t),p="set"+(this.$u?"UTC":""),h=(a={},a[o]=p+"Date",a[u]=p+"Date",a[l]=p+"Month",a[d]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[c],f=c===o?this.$D+(e-this.$W):e;if(c===l||c===d){var m=this.clone().set(u,1);m.$d[h](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,c){var u,p=this;n=Number(n);var h=w.p(c),f=function(t){var e=C(p);return w.w(e.date(e.date()+Math.round(t*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===d)return this.set(d,this.$y+n);if(h===o)return f(1);if(h===a)return f(7);var m=(u={},u[s]=t,u[r]=e,u[i]=1e3,u)[h]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,d=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},u=function(t){return w.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:d(n.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:u(1),hh:u(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,u,p){var h,f=w.p(u),m=C(n),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,y=w.m(this,m);return y=(h={},h[d]=y/12,h[l]=y,h[c]=y/3,h[a]=(_-v)/6048e5,h[o]=(_-v)/864e5,h[r]=_/e,h[s]=_/t,h[i]=_/1e3,h)[f]||_,p?y:w.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return g[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),M=S.prototype;return C.prototype=M,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",d],["$D",u]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,S,C),t.$i=!0),C},C.locale=b,C.isDayjs=$,C.unix=function(t){return C(1e3*t)},C.en=g[y],C.Ls=g,C.p={},C}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},u=function(t){return t instanceof y},p=function(t,e,n){return new y(t,n,e.$l)},h=function(t){return e.p(t)+"s"},f=function(t){return t<0},m=function(t){return f(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?f(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function f(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return p(t*d[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*d[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,c=s.format||r.format||a.format?"T":"",d=(l?"-":"")+"P"+t.format+e.format+i.format+c+s.format+r.format+a.format;return"P"===d||"-P"===d?"P0D":d},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/d[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/d[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*d[h(e)]:u(t)?t.$ms:p(t,this).$ms,p(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return p(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return p(t,{$l:n},e)},s.isDuration=u;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return u(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return u(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=s(h,i);i.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var d=n(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";const t="afterbegin";function e(t,e,n="beforeend"){if(!(t instanceof $))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function i(t,e){if(!(t instanceof $&&e instanceof $))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function s(t){if(null!==t){if(!(t instanceof $))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var r=n(379),o=n.n(r),a=n(795),l=n.n(a),c=n(569),d=n.n(c),u=n(565),p=n.n(u),h=n(216),f=n.n(h),m=n(589),v=n.n(m),_=n(10),y={};y.styleTagTransform=v(),y.setAttributes=p(),y.insert=d().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=f(),o()(_.Z,y),_.Z&&_.Z.locals&&_.Z.locals;const g="shake";class ${#t=null;constructor(){if(new.target===$)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(g),setTimeout((()=>{this.element.classList.remove(g),t?.()}),600)}}var b=n(484),C=n.n(b),w=n(646),S=n.n(w);const M=(t,e)=>Math.round((e-t)*Math.random()+t);let k=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");const D=["Amsterdam","Chamonix","Geneva","Paris","Saint Petersburg","Vienna","Zurich"],E=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus.","In rutrum ac purus sit amet tempus."],T=["Nestled between rolling hills and a bustling waterfront","Known for its cutting-edge technology hubs, sleek design","A city of contrasts, where tradition meets modernity","With its colorful markets, lively street performers, and a rich tapestry of diverse neighborhoods","Surrounded by lush greenery and framed by majestic mountains"],A=()=>({src:`https://loremflickr.com/248/152?random=${M(1,10)}`,description:T[M(0,T.length-1)]}),H=t=>{const e=M(0,3);return{id:k(),description:E[M(0,E.length-1)],name:t,pictures:new Array(e).fill().map(A)}},P="day",x="time",O="price",L={TAXI:"taxi",BUS:"bus",TRAIN:"train",SHIP:"ship",TRANSPORT:"transport",DRIVE:"drive",FLIGHT:"flight",CHECKIN:"check-in",SIGHTSEEING:"sightseeing",RESTARAUNT:"restaurant"},Y=(()=>{const t=[];for(const e of D){const n=H(e);t.push(n)}return t})(),I=(()=>{const t={};return Object.values(L).forEach((e=>{t[e]=(t=>{let e=[];switch(t){case L.TAXI:e=[{id:k(),title:"Upgrade to a business class",price:120,isSelected:!0},{id:k(),title:"Choose the radio station",price:60,isSelected:!0}];break;case L.BUS:e=[{id:k(),title:"Choose seats",price:120,isSelected:!0}];break;case L.TRAIN:e=[{id:k(),title:"Add meal",price:120,isSelected:!0},{id:k(),title:"Switch to comfort",price:120,isSelected:!0},{id:k(),title:"Add luggage",price:60,isSelected:!0}];break;case L.SHIP:e=[{id:k(),title:"Upgrade to a business class",price:120,isSelected:!0},{id:k(),title:"Switch to comfort",price:60,isSelected:!0}];break;case L.DRIVE:e=[{id:k(),title:"Upgrade to a business class",price:120,isSelected:!0},{id:k(),title:"Choose the radio station",price:60,isSelected:!0}];break;case L.FLIGHT:e=[{id:k(),title:"Upgrade to a business class",price:120,isSelected:!0},{id:k(),title:"Switch to comfort",price:120,isSelected:!0},{id:k(),title:"Choose seats",price:120,isSelected:!0},{id:k(),title:"Add luggage",price:120,isSelected:!0},{id:k(),title:"Travel by train",price:60,isSelected:!0}];break;case L.CHECKIN:e=[{id:k(),title:"Upgrade to a business class",price:120,isSelected:!0}];break;default:e=[]}return e})(e)})),t})();C().extend(S());const F={everything:t=>t,future:t=>t.filter((t=>C()(t.dateFrom).isAfter(C()()))),past:t=>t.filter((t=>C()(t.dateTo).isBefore(C()()))),present:t=>t.filter((t=>C()(t.dateFrom).isBefore(C()())&&C()(t.dateTo).isAfter(C()())))},V=t=>t?C()(t).format("HH:mm"):"",N=(t,e)=>t.map((t=>t.id===e.id?e:t)),B=(t,e)=>e.basePrice-t.basePrice,j=(t,e)=>{const n=C()(t.dateTo).diff(t.dateFrom);return C()(e.dateTo).diff(e.dateFrom)-n};class U extends ${#e=null;#n=null;#i=null;constructor({point:t,onOpenClick:e,onFavoriteClick:n}){super(),this.#e=t,this.#n=e,this.#i=n,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#s),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#r)}get template(){return(t=>{const{dateFrom:e,dateTo:n,destination:i}=t,s=null!==t.offers,r=(o=e)?C()(o).format("MMM DD"):"";var o;const a=V(e),l=V(n),c=((t,e)=>C()(e).diff(t,"minute"))(e,n);return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${C()(e).format("YYYY-MM-DD")}">${r}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${t.type}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${t.type} ${i.name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${C()(e).format("YYYY-MM-DDTHH:mm")}">${a}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${C()(n).format("YYYY-MM-DDTHH:mm")}">${l}</time>\n          </p>\n          <p class="event__duration">${c}M</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${t.basePrice}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${s?((t={})=>(I[t.type]||[]).map((t=>`<li class="event__offer">\n      <span class="event__offer-title">${t.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t.price}</span>\n    </li>`)).join(""))(t):""}\n        </ul>\n        ${((t=!1)=>`<button class="event__favorite-btn ${!0===t?"event__favorite-btn--active":""}" type="button">\n    <span class="visually-hidden">Add to favorite</span>\n    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n    </svg>\n  </button>`)(t.isFavorite)}\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`})(this.#e)}#s=t=>{t.preventDefault(),this.#n()};#r=t=>{t.preventDefault(),this.#i()}}class q extends ${_state={};updateElement(t){t&&(this._setState(t),this.#o())}_restoreHandlers(){throw new Error("Abstract method not implemented: restoreHandlers")}_setState(t){this._state=structuredClone({...this._state,...t})}#o(){const t=this.element,e=t.parentElement;this.removeElement();const n=this.element;e.replaceChild(n,t),this._restoreHandlers()}}const R={type:"",dateFrom:C()().toDate(),dateTo:C()().toDate(),basePrice:0,offers:[],destination:{name:"",description:"",pictures:[]}},W=(t={})=>{let e="";switch(t.title){case"Add luggage":e="luggage";break;case"Switch to comfort":e="comfort";break;case"Add meal":e="meal";break;case"Choose seats":e="seats";break;case"Travel by train":e="train";break;default:e=""}return e},Z=(t={})=>{const e=null!==t.offers,n=null!==t.destination;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${t.type}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${i=L,Object.values(i).map((t=>`<div class="event__type-item">\n      <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n        <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${t[0].toUpperCase()+t.substring(1)}</label>\n    </div>`)).join("")}\n              </fieldset>\n            </div>\n          </div>\n\n          ${n?(t=>{const e=Y.reduce(((t,e)=>Array.isArray(e.pictures)?t+e.pictures.map((t=>`<option value="${t.name}" data-id="${t.id}">${t.name}</option>`)).join(""):t),"");return`\n    <div class="event__field-group  event__field-group--destination">\n      <label class="event__label  event__type-output" for="event-destination-1">\n        ${t.type}\n      </label>\n\n      <input\n        class="event__input  event__input--destination"\n        id="event-destination-1"\n        type="text"\n        name="event-destination"\n        value="${t.destination.name}"\n        list="destination-list-1">\n\n      <datalist id="destination-list-1">\n        ${e}\n      </datalist>\n    </div>\n  `})(t):""}\n          ${(t=>{const{dateFrom:e,dateTo:n}=t;return`\n    <div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-1">From</label>\n      <input\n        class="event__input  event__input--time"\n        id="event-start-time-1"\n        type="text"\n        name="event-start-time"\n        value="${C()(e).format("DD/MM/YY HH:mm")}">\n      —\n      <label class="visually-hidden" for="event-end-time-1">To</label>\n      <input\n        class="event__input  event__input--time"\n        id="event-end-time-1"\n        type="text"\n        name="event-end-time"\n        value="${C()(n).format("DD/MM/YY HH:mm")}">\n    </div>\n  `})(t)}\n          ${(t=>{const{basePrice:e}=t;return`\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-1">\n        <span class="visually-hidden">Price</span>\n        €\n      </label>\n      <input\n        class="event__input  event__input--price"\n        id="event-price-1"\n        type="number"\n        min="0"\n        name="event-price"\n        value="${e}">\n    </div>\n  `})(t)}\n          <button\n      class="event__save-btn  btn  btn--blue"\n      type="submit">\n        Save\n    </button>\n\n          <button\n      class="event__reset-btn"\n      type="reset">\n        Cancel\n    </button>\n\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n            ${e?(t=>`<section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n    <div class="event__available-offers">\n      ${((t={})=>(I[t.type]||[]).map((t=>`<div class="event__offer-selector">\n      <input class="event__offer-checkbox visually-hidden" id="event-offer-${W(t)}-1" type="checkbox" name="event-offer-${W(t)}" ${t.isSelected?"checked ":""}>\n      <label class="event__offer-label" for="event-offer-${W(t)}-1">\n        <span class="event__offer-title">${t.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </label>\n    </div>`)).join(""))(t)}\n    </div>\n  </section>`)(t):""}\n            ${n?(t=>`<section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">${t.destination.description}</p>\n  </section>`)(t):""}\n          </section>\n        </section>\n      </form>\n    </li>`;var i};class K extends q{#a=null;constructor({point:t=R,onCloseClick:e}){super(),this._state=K.parsePointToState(t),this.#a=e,this._restoreHandlers()}get template(){return Z(this._state)}_restoreHandlers(){this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#l),this.element.querySelector(".event__save-btn").addEventListener("click",this.#c),this.element.querySelectorAll(".event__type-group").forEach((t=>t.addEventListener("change",this.#d))),this.element.querySelector(".event__input--destination").addEventListener("change",this.#u),this.element.querySelector(".event__input--price").addEventListener("input",this.#p)}reset(t){this.updateElement(K.parsePointToState(t))}#l=t=>{t.preventDefault(),this.#a(K.parseStateToPoint(this._state))};static parsePointToState(t){return{...t,type:t.type,hasOffers:null!==t.offers,offers:t.offers,hasDestination:null!==t.destination&&t.destination.description.length>0,destination:t.destination}}static parseStateToPoint(t){return delete t.type,delete t.hasOffers,delete t.offers,delete t.hasDestination,delete t.destination,t}#d=t=>{t.preventDefault(),t.target.value!==this._state.type&&this.updateElement({type:t.target.value,offers:I[t.target.value]})};#u=t=>{const e=t.target.value;let n=null;for(const t in Y)if(Y[t].name===e){n=Y[t];break}n&&this.updateElement({destination:{id:n.id,name:n.name,description:n.description,pictures:n.pictures}})};#p=t=>{t.preventDefault(),this._setState({basePrice:t.target.value})};#c=t=>{t.preventDefault(),this.#a(K.parseStateToPoint(this._state))}}const X="DEFAULT",z="EDITING";class G{#h=null;#f=null;#m=null;#v=null;#_=null;#e=null;#y=X;constructor({pointListContainer:t,onDataChange:e,onModeChange:n}){this.#h=t,this.#f=e,this.#m=n}init(t){this.#e=t;const n=this.#v,r=this.#_;this.#v=new U({point:this.#e,onOpenClick:this.#n,onFavoriteClick:this.#i}),this.#_=new K({point:this.#e,onCloseClick:this.#a}),null!==n&&null!==r?(this.#y===X&&i(this.#v,n),this.#y===z&&i(this.#_,r),s(n),s(r)):e(this.#v,this.#h)}destroy(){s(this.#v),s(this.#_)}resetView(){this.#y!==X&&(this.#_.reset(this.#e),this.#g())}#$=()=>{i(this.#_,this.#v),document.addEventListener("keydown",this.#b),this.#m(),this.#y=z};#g=()=>{i(this.#v,this.#_),document.removeEventListener("keydown",this.#b),this.#y=X};#b=t=>{(t=>"Escape"===t.key)(t)&&(t.preventDefault(),this.#g(),document.removeEventListener("keydown",this.#b))};#n=()=>{this.#$()};#a=()=>{this.#g()};#i=()=>{this.#f({...this.#e,isFavorite:!this.#e.isFavorite})}}class J extends ${get template(){return'<p class="trip-events__msg">\n    Click New Event to create your first point\n  </p>'}}class Q extends ${get template(){return'<ul class="trip-events__list"></ul>'}}class tt extends ${#C=null;constructor({onSortTypeChange:t}){super(),this.#C=t,this.element.addEventListener("click",this.#w)}get template(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${P}" checked>\n        <label class="trip-sort__btn" for="sort-day" data-sort-type="${P}">Day</label>\n      </div>\n        <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${x}">\n        <label class="trip-sort__btn" for="sort-time" data-sort-type="${x}">Time</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${O}">\n        <label class="trip-sort__btn" for="sort-price" data-sort-type="${O}">Price</label>\n      </div>\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n  </form>`}#w=t=>{"LABEL"===t.target.tagName&&(t.preventDefault(),this.#C(t.target.dataset.sortType))}}class et extends ${get template(){return'\n      <div class="page-body__container">\n        <section class="trip-events">\n          <h2 class="visually-hidden">Trip events</h2>\n        </section>\n      </div>'}}const nt=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],it=()=>{const{dateFrom:t,dateTo:e}=(()=>{const t=M(0,1440),e=M(-t,t),n=C()().add(e,"minute"),i=n.add(M(20,60),"minute");return{dateFrom:n.toDate(),dateTo:i.toDate()}})(),n=nt[M(0,nt.length-1)],i=I[n];return{basePrice:10*M(1,50),dateFrom:t,dateTo:e,destination:Y[M(0,Y.length-1)],id:k(),type:n.toLowerCase(),offers:i,isFavorite:Boolean(M(0,1))}},st=M(0,5),rt=document.querySelector(".trip-main"),ot=document.querySelector(".trip-controls__filters"),at=document.querySelector(".trip-events"),lt=new class{#S=Array.from({length:st},it);get points(){return this.#S}},ct=new class{#M=null;#k=null;#D=new et;#E=new Q;#T=null;#A=new J;#S=[];#H=new Map;#P=P;#x=[];constructor({tripContainer:t,pointsModel:e}){this.#M=t,this.#k=e}init(){this.#S=[...this.#k.points],this.#x=[...this.#k.points],this.#O()}#C=t=>{this.#P!==t&&(this.#L(t),this.#Y(),this.#I())};#F(){this.#T=new tt({onSortTypeChange:this.#C}),e(this.#T,this.#M,t)}#m=()=>{this.#H.forEach((t=>t.resetView()))};#V=t=>{this.#S=N(this.#S,t),this.#x=N(this.#x,t),this.#H.get(t.id).init(t)};#L(t){switch(t){case x:this.#S.sort(j);break;case O:this.#S.sort(B);break;default:this.#S=[...this.#x]}this.#P=t}#N(){e(this.#A,this.#M,t)}#B(){e(this.#E,this.#M)}#j(){e(this.#D,this.#M)}#U(t){const e=new G({pointListContainer:this.#E.element,onDataChange:this.#V,onModeChange:this.#m});e.init(t),this.#H.set(t.id,e)}#I(){for(const t of this.#S)this.#U(t)}#Y(){this.#H.forEach((t=>t.destroy())),this.#H.clear()}#O(){0===this.#S.length?this.#N():(this.#j(),this.#F(),this.#B(),this.#I())}}({tripContainer:at,pointsModel:lt}),dt=(ut=lt.points,Object.entries(F).map((([t,e])=>({type:t,count:e(ut).length}))));var ut;e(new class extends ${get template(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n  </div>\n\n  <p class="trip-info__cost">\n  Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}},rt,t),e(new class extends ${#q=null;constructor({filters:t}){super(),this.#q=t}get template(){return(t=>{const e=this.#q.map(((t,e)=>((t,e)=>{const{type:n,count:i}=t;return`\n    <div class="trip-filters__filter">\n      <input\n        id="filter-${n}"\n        class="trip-filters__filter-input visually-hidden"\n        type="radio"\n        name="trip-filter"\n        value="everything"\n        ${e?"checked":""}\n        ${0===i?"disabled":""}\n      >\n      <label class="trip-filters__filter-label" for="filter-${n}">\n        ${n}\n      </label>\n    </div>`})(t,0===e))).join("");return`\n      <form class="trip-filters" action="#" method="get">\n        ${e}\n      </form>`})()}}({filters:dt}),ot),ct.init()})()})();
//# sourceMappingURL=bundle.889c685066f9340090ad.js.map