(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);i&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),t.push(u))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",g={};g[y]=v;var b=function(e){return e instanceof M},C=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;g[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},w=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},$=_;$.l=C,$.i=b,$.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function v(e){this.$L=C(e.locale,null,!0),this.parse(e)}var m=v.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return $},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,n){return $.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!$.u(t)||t,p=$.p(e),h=function(e,t){var i=$.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},f=function(e,t){return $.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?h(1,0):h(31,11);case l:return c?h(1,m):h(0,m+1);case o:var g=this.$locale().weekStart||0,b=(v<g?v+7:v)-g;return h(c?_-b:_+(6-b),m);case a:case d:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,c=$.p(e),p="set"+(this.$u?"UTC":""),h=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],f=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var v=this.clone().set(d,1);v.$d[h](f),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[$.p(e)]()},m.add=function(n,c){var d,p=this;n=Number(n);var h=$.p(c),f=function(e){var t=w(p);return $.w(t.date(t.date()+Math.round(e*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===a)return f(1);if(h===o)return f(7);var v=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[h]||1,m=this.$d.getTime()+n*v;return $.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=$.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return $.s(r%12||12,e,"0")},h=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:$.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:$.s(a,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(e,t){return t||v[e]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,p){var h,f=$.p(d),v=w(n),m=(v.utcOffset()-this.utcOffset())*e,_=this-v,y=$.m(this,v);return y=(h={},h[u]=y/12,h[l]=y,h[c]=y/3,h[o]=(_-m)/6048e5,h[a]=(_-m)/864e5,h[r]=_/t,h[s]=_/e,h[i]=_/1e3,h)[f]||_,p?y:$.a(y)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return g[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=C(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return $.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),A=M.prototype;return w.prototype=A,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){A[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,M,w),e.$i=!0),w},w.locale=C,w.isDayjs=b,w.unix=function(e){return w(1e3*e)},w.en=g[y],w.Ls=g,w.p={},w}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=s(h,i);i.byIndex=o,t.splice(o,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=i(e,s),c=0;c<r.length;c++){var u=n(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e="afterbegin";function t(e,t,n="beforeend"){if(!(e instanceof b))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function i(e,t){if(!(e instanceof b&&t instanceof b))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function s(e){if(null!==e){if(!(e instanceof b))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}}var r=n(379),a=n.n(r),o=n(795),l=n.n(o),c=n(569),u=n.n(c),d=n(565),p=n.n(d),h=n(216),f=n.n(h),v=n(589),m=n.n(v),_=n(10),y={};y.styleTagTransform=m(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=f(),a()(_.Z,y),_.Z&&_.Z.locals&&_.Z.locals;const g="shake";class b{#e=null;constructor(){if(new.target===b)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(g),setTimeout((()=>{this.element.classList.remove(g),e?.()}),600)}}var C=n(484),w=n.n(C);const $=e=>e?w()(e).format("HH:mm"):"";class M extends b{#t=null;#n=null;#i=null;constructor({point:e,onOpenClick:t,onFavoriteClick:n}){super(),this.#t=e,this.#n=t,this.#i=n,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#s),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#r)}get template(){return(e=>{const{dateFrom:t,dateTo:n,destination:i}=e,s=(r=t)?w()(r).format("MMM DD"):"";var r;const a=$(t),o=$(n),l=((e,t)=>w()(t).diff(e,"minute"))(t,n);return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${w()(t).format("YYYY-MM-DD")}">${s}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${e.type}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${e.type} ${i.name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${w()(t).format("YYYY-MM-DDTHH:mm")}">${a}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${w()(n).format("YYYY-MM-DDTHH:mm")}">${o}</time>\n          </p>\n          <p class="event__duration">${l}M</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${e.basePrice}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${((e={})=>e.offers.map((e=>`<li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </li>`)).join(""))(e)}\n        </ul>\n        ${((e=!1)=>`<button class="event__favorite-btn ${!0===e?"event__favorite-btn--active":""}" type="button">\n    <span class="visually-hidden">Add to favorite</span>\n    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n    </svg>\n  </button>`)(e.isFavorite)}\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`})(this.#t)}#s=e=>{e.preventDefault(),this.#n()};#r=e=>{e.preventDefault(),this.#i()}}const A={type:"",dateFrom:w()().toDate(),dateTo:w()().toDate(),basePrice:0,offers:[],destination:{name:"",description:"",pictures:[]}},D={TAXI:"taxi",BUS:"bus",TRAIN:"train",SHIP:"ship",TRANSPORT:"transport",DRIVE:"drive",FLIGHT:"flight",CHECKIN:"check-in",SIGHTSEEING:"sightseeing",RESTARAUNT:"restaurant"},k=(e={})=>{let t="";switch(e.title){case"Add luggage":t="luggage";break;case"Switch to comfort":t="comfort";break;case"Add meal":t="meal";break;case"Choose seats":t="seats";break;case"Travel by train":t="train";break;default:t=""}return t},E=(e={})=>{const{type:t,dateFrom:n,dateTo:i,basePrice:s,destination:r,offers:a}=e;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${t}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${o=D,Object.values(o).map((e=>`<div class="event__type-item">\n      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n        <label class="event__type-label  event__type-label--${e}" for="event-type-taxi-1">${e[0].toUpperCase()+e.substring(1)}</label>\n    </div>`)).join("")}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${t}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${r.name}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="Amsterdam"></option>\n              <option value="Geneva"></option>\n              <option value="Chamonix"></option>\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${w()(n).format("DD/MM/YY HH:mm")}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${w()(i).format("DD/MM/YY HH:mm")}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${s}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n            ${a.length>0?(e=>`<section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n    <div class="event__available-offers">\n      ${((e={})=>{const{offers:t}=e;return t.map((e=>`<div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${k(e)}-1" type="checkbox" name="event-offer-${k(e)}" checked>\n      <label class="event__offer-label" for="event-offer-${k(e)}-1">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </label>\n    </div>`)).join("")})(e)}\n    </div>\n  </section>`)(e):""}\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${r.description}</p>\n          </section>\n        </section>\n      </form>\n    </li>`;var o};class S extends b{#t=null;#a=null;constructor({point:e=A,onCloseClick:t}){super(),this.#t=e,this.#a=t,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#o)}get template(){return E(this.#t)}#o=e=>{e.preventDefault(),this.#a(this.#t)}}const T="DEFAULT",x="EDITING";class P{#l=null;#c=null;#u=null;#d=null;#p=null;#t=null;#h=T;constructor({pointListContainer:e,onDataChange:t,onModeChange:n}){this.#l=e,this.#c=t,this.#u=n}init(e){this.#t=e;const n=this.#d,r=this.#p;this.#d=new M({point:this.#t,onOpenClick:this.#n,onFavoriteClick:this.#i}),this.#p=new S({point:this.#t,onCloseClick:this.#a}),null!==n&&null!==r?(this.#h===T&&i(this.#d,n),this.#h===x&&i(this.#p,r),s(n),s(r)):t(this.#d,this.#l)}destroy(){s(this.#d),s(this.#p)}resetView(){this.#h!==T&&this.#f()}#v=()=>{i(this.#p,this.#d),document.addEventListener("keydown",this.#m),this.#u(),this.#h=x};#f=()=>{i(this.#d,this.#p),document.removeEventListener("keydown",this.#m),this.#h=T};#m=e=>{(e=>"Escape"===e.key)(e)&&(e.preventDefault(),this.#f(),document.removeEventListener("keydown",this.#m))};#n=()=>{this.#v()};#a=()=>{this.#f()};#i=()=>{this.#c({...this.#t,isFavorite:!this.#t.isFavorite})}}class O extends b{get template(){return'<p class="trip-events__msg">\n    Click New Event to create your first point\n  </p>'}}class H extends b{get template(){return'<ul class="trip-events__list"></ul>'}}class L extends b{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}}class V extends b{get template(){return'\n      <div class="page-body__container">\n        <section class="trip-events">\n          <h2 class="visually-hidden">Trip events</h2>\n        </section>\n      </div>'}}let F=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")),"");const Y=(e,t)=>Math.round((t-e)*Math.random()+e),I=["Add luggage","Switch to comfort class","Add meal","Choose seats","Travel by train"],N=()=>{const e=[5,15,30,40,50,80,100];return{title:I[Y(0,I.length-1)],price:e[Y(0,e.length-1)]}},B=["Amsterdam","Chamonix","Geneva","Paris","Saint Petersburg","Vienna"],R=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus.","In rutrum ac purus sit amet tempus."],j=["Nestled between rolling hills and a bustling waterfront","Known for its cutting-edge technology hubs, sleek design","A city of contrasts, where tradition meets modernity","With its colorful markets, lively street performers, and a rich tapestry of diverse neighborhoods","Surrounded by lush greenery and framed by majestic mountains"],q=()=>({src:`https://loremflickr.com/248/152?random=${Y(1,10)}`,description:j[Y(0,j.length-1)]}),U=()=>{const e=Y(0,3);return{description:R[Y(0,R.length-1)],name:B[Y(0,B.length-1)],pictures:new Array(e).fill().map(q)}},W=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],Z=()=>{const{dateFrom:e,dateTo:t}=(()=>{const e=Y(0,1440),t=Y(-e,e),n=w()().add(t,"minute"),i=n.add(Y(20,60),"minute");return{dateFrom:n.toDate(),dateTo:i.toDate()}})(),n=W[Y(0,W.length-1)];return{basePrice:10*Y(1,50),dateFrom:e,dateTo:t,destination:U(),id:F(),type:n,offers:Array.from({length:Y(0,5)},N),isFavorite:Boolean(Y(0,1))}},G=Y(0,5),K=document.querySelector(".trip-main"),X=document.querySelector(".trip-controls__filters"),z=document.querySelector(".trip-events"),J=new class{#_=null;#y=null;#g=new V;#b=new H;#C=new L;#w=new O;#$=[];#M=new Map;constructor({tripContainer:e,pointsModel:t}){this.#_=e,this.#y=t}init(){this.#$=[...this.#y.points],this.#A()}#D(){t(this.#C,this.#_,e)}#u=()=>{this.#M.forEach((e=>e.resetView()))};#k=e=>{var t,n;this.#$=(t=this.#$,n=e,t.map((e=>e.id===n.id?n:e))),this.#M.get(e.id).init(e)};#E(){t(this.#w,this.#_,e)}#S(){t(this.#b,this.#_)}#T(){t(this.#g,this.#_)}#x(e){const t=new P({pointListContainer:this.#b.element,onDataChange:this.#k,onModeChange:this.#u});t.init(e),this.#M.set(e.id,t)}#P(){for(const e of this.#$)this.#x(e)}#O(){this.#M.forEach((e=>e.destroy())),this.#M.clear()}#A(){0===this.#$.length?this.#E():(this.#T(),this.#D(),this.#S(),this.#P())}}({tripContainer:z,pointsModel:new class{#$=Array.from({length:G},Z);get points(){return this.#$}}});t(new class extends b{get template(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n  </div>\n\n  <p class="trip-info__cost">\n  Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}},K,e),t(new class extends b{get template(){return'\n  <form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked disabled>\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future" disabled>\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present" disabled>\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" disabled>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}},X),J.init()})()})();
//# sourceMappingURL=bundle.905dd61f9932c9ae3e50.js.map