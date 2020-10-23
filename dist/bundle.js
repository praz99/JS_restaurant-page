(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.navbar {\n  height: 50px;\n  width: 100%;\n  border-bottom: 1px solid red;\n  background-color: lightblue;\n\n  display: flex;\n  align-items: center;\n\n}\n\n.nav-left,\n.nav-right {\n  width: 50%;\n}\n\n.nav-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.nav-right .nav-list {\n  display: flex;\n  list-style-type: none;\n}\n\n.nav-list .list-item {\n  padding: 0 0.5em;\n}",""]);const a=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function o(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],d=n.base?c[0]+n.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=o(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:h(f,n),references:1}),r.push(l)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,i);else{var a=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,i=t.media,a=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,p=0;function h(e,n){var t,r,i;if(n.singleton){var a=p++;t=m||(m=d(n)),r=u.bind(null,t,a,!1),i=u.bind(null,t,a,!0)}else t=d(n),r=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=o(t[r]);a[i].references--}for(var d=c(e,n),s=0;s<t.length;s++){var l=o(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=d}}}}},n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const i=document.getElementById("content"),a=document.createElement("nav"),o=document.createElement("ul"),c=document.createElement("li"),d=document.createElement("li"),s=document.createElement("li"),l=document.getElementById("content"),u=document.getElementById("content"),f=document.getElementById("content"),m=document.getElementById("content"),p=()=>{m.innerHTML=""};(()=>{a.classList.add("navbar");const e=document.createElement("div");e.classList.add("nav-left"),e.innerText="RestYourAnt";const n=document.createElement("div");n.classList.add("nav-right"),n.appendChild((o.classList.add("nav-list"),c.classList.add("list-item"),c.innerText="menu",o.appendChild(c),d.classList.add("list-item"),d.innerText="contact",o.appendChild(d),s.classList.add("list-item"),s.innerText="about",o.appendChild(s),o)),a.appendChild(e),a.appendChild(n),document.body.insertBefore(a,i)})(),c.addEventListener("click",(()=>{p(),(()=>{const e=document.createElement("h1");e.innerText="Menu goes here!",l.appendChild(e)})()})),d.addEventListener("click",(()=>{p(),(()=>{const e=document.createElement("h1");e.innerText="Contact goes here!",u.appendChild(e)})()})),s.addEventListener("click",(()=>{p(),(()=>{const e=document.createElement("h1");e.innerText="About goes here!",f.appendChild(e)})()}))})()})();