(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19da166c"],{1298:function(e,t){e.exports=function(e){var t=[].forEach,n=[].some,o=document.body,l=!0,i=" ";function r(e,t){var n=t.appendChild(c(e));if(e.children.length){var o=a(e.isCollapsed);e.children.forEach((function(e){r(e,o)})),n.appendChild(o)}}function s(e,t){var n=!1,o=a(n);t.forEach((function(e){r(e,o)}));var l=document.querySelector(e);if(null!==l)return l.firstChild&&l.removeChild(l.firstChild),0===t.length?l:l.appendChild(o)}function c(n){var o=document.createElement("li"),l=document.createElement("a");return e.listItemClass&&o.setAttribute("class",e.listItemClass),e.onClick&&(l.onclick=e.onClick),e.includeHtml&&n.childNodes.length?t.call(n.childNodes,(function(e){l.appendChild(e.cloneNode(!0))})):l.textContent=n.textContent,l.setAttribute("href",e.basePath+"#"+n.id),l.setAttribute("class",e.linkClass+i+"node-name--"+n.nodeName+i+e.extraLinkClasses),o.appendChild(l),o}function a(t){var n=e.orderedList?"ol":"ul",o=document.createElement(n),l=e.listClass+i+e.extraListClasses;return t&&(l+=i+e.collapsibleClass,l+=i+e.isCollapsedClass),o.setAttribute("class",l),o}function u(){var t;e.scrollContainer&&document.querySelector(e.scrollContainer)?t=document.querySelector(e.scrollContainer).scrollTop:t=document.documentElement.scrollTop||o.scrollTop;var n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=i+e.positionFixedClass):n.className=n.className.split(i+e.positionFixedClass).join("")}function d(t){var n=0;return t!==document.querySelector(e.contentSelector&&null!=t)&&(n=t.offsetTop,e.hasInnerContainers&&(n+=d(t.offsetParent))),n}function f(r){var s;e.scrollContainer&&document.querySelector(e.scrollContainer)?s=document.querySelector(e.scrollContainer).scrollTop:s=document.documentElement.scrollTop||o.scrollTop;e.positionFixedSelector&&u();var c,a=r;if(l&&null!==document.querySelector(e.tocSelector)&&a.length>0){n.call(a,(function(t,n){if(d(t)>s+e.headingsOffset+10){var o=0===n?n:n-1;return c=a[o],!0}if(n===a.length-1)return c=a[a.length-1],!0}));var f=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);t.call(f,(function(t){t.className=t.className.split(i+e.activeLinkClass).join("")}));var h=document.querySelector(e.tocSelector).querySelectorAll("."+e.listItemClass);t.call(h,(function(t){t.className=t.className.split(i+e.activeListItemClass).join("")}));var p=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+c.nodeName+'[href="'+e.basePath+"#"+c.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g,"\\$1")+'"]');-1===p.className.indexOf(e.activeLinkClass)&&(p.className+=i+e.activeLinkClass);var C=p.parentNode;C&&-1===C.className.indexOf(e.activeListItemClass)&&(C.className+=i+e.activeListItemClass);var g=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);t.call(g,(function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=i+e.isCollapsedClass)})),p.nextSibling&&-1!==p.nextSibling.className.indexOf(e.isCollapsedClass)&&(p.nextSibling.className=p.nextSibling.className.split(i+e.isCollapsedClass).join("")),m(p.parentNode.parentNode)}}function m(t){return-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(t.className=t.className.split(i+e.isCollapsedClass).join(""),m(t.parentNode.parentNode)):t}function h(t){var n=t.target||t.srcElement;"string"===typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(l=!1)}function p(){l=!0}return{enableTocAnimation:p,disableTocAnimation:h,render:s,updateToc:f}}},"8a4e":function(e,t){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:""}},b8b5:function(e,t,n){(function(o){var l,i,r;(function(n,o){i=[],l=o(n),r="function"===typeof l?l.apply(t,i):l,void 0===r||(e.exports=r)})("undefined"!==typeof o?o:this.window||this.global,(function(e){"use strict";var t,o,l=n("8a4e"),i={},r={},s=n("1298"),c=n("fccc"),a=!!e&&!!e.document&&!!e.document.querySelector&&!!e.addEventListener;if("undefined"!==typeof window||a){var u,d=Object.prototype.hasOwnProperty;return r.destroy=function(){if(!i.skipRendering)try{document.querySelector(i.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+i.tocSelector)}i.scrollContainer&&document.querySelector(i.scrollContainer)?(document.querySelector(i.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(i.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(i.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1))},r.init=function(e){if(a&&(i=f(l,e||{}),this.options=i,this.state={},i.scrollSmooth&&(i.duration=i.scrollSmoothDuration,i.offset=i.scrollSmoothOffset,r.scrollSmooth=n("d98e").initSmoothScrolling(i)),t=s(i),o=c(i),this._buildHtml=t,this._parseContent=o,r.destroy(),u=o.selectHeadings(i.contentSelector,i.headingSelector),null!==u)){var d=o.nestHeadingsArray(u),h=d.nest;i.skipRendering||t.render(i.tocSelector,h),this._scrollListener=m((function(e){t.updateToc(u);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(u),i.scrollEndCallback&&i.scrollEndCallback(e))}),i.throttleTimeout),this._scrollListener(),i.scrollContainer&&document.querySelector(i.scrollContainer)?(document.querySelector(i.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(i.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var p=null;return this._clickListener=m((function(e){i.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(u),p&&clearTimeout(p),p=setTimeout((function(){t.enableTocAnimation()}),i.scrollSmoothDuration)}),i.throttleTimeout),i.scrollContainer&&document.querySelector(i.scrollContainer)?document.querySelector(i.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},r.refresh=function(e){r.destroy(),r.init(e||this.options)},e.tocbot=r,r}function f(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)d.call(n,o)&&(e[o]=n[o])}return e}function m(e,t,n){var o,l;return t||(t=250),function(){var i=n||this,r=+new Date,s=arguments;o&&r<o+t?(clearTimeout(l),l=setTimeout((function(){o=r,e.apply(i,s)}),t)):(o=r,e.apply(i,s))}}}))}).call(this,n("2440"))},d98e:function(e,t){function n(e){c();var t=e.duration,n=e.offset,l=location.hash?s(location.href):location.href;function i(){function l(l){!r(l.target)||l.target.className.indexOf("no-smooth-scroll")>-1||"#"===l.target.href.charAt(l.target.href.length-2)&&"!"===l.target.href.charAt(l.target.href.length-1)||-1===l.target.className.indexOf(e.linkClass)||o(l.target.hash,{duration:t,offset:n,callback:function(){a(l.target.hash)}})}document.body.addEventListener("click",l,!1)}function r(e){return"a"===e.tagName.toLowerCase()&&(e.hash.length>0||"#"===e.href.charAt(e.href.length-1))&&(s(e.href)===l||s(e.href)+"#"===l)}function s(e){return e.slice(0,e.lastIndexOf("#"))}function c(){return"scrollBehavior"in document.documentElement.style}function a(e){var t=document.getElementById(e.substring(1));t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}i()}function o(e,t){var n,o,l=window.pageYOffset,i={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||d},r=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]'),s="string"===typeof e?i.offset+(e?r&&r.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,c="function"===typeof i.duration?i.duration(s):i.duration;function a(e){o=e-n,window.scrollTo(0,i.easing(o,l,s,c)),o<c?requestAnimationFrame(a):u()}function u(){window.scrollTo(0,l+s),"function"===typeof i.callback&&i.callback()}function d(e,t,n,o){return e/=o/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)}requestAnimationFrame((function(e){n=e,a(e)}))}t.initSmoothScrolling=n},fccc:function(e,t){e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function o(e){return+e.nodeName.split("H").join("")}function l(t){if(!(t instanceof window.HTMLElement))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;var n={id:t.id,children:[],nodeName:t.nodeName,headingLevel:o(t),textContent:e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim()};return e.includeHtml&&(n.childNodes=t.childNodes),e.headingObjectCallback?e.headingObjectCallback(n,t):n}function i(t,o){var i=l(t),r=i.headingLevel,s=o,c=n(s),a=c?c.headingLevel:0,u=r-a;while(u>0)c=n(s),c&&void 0!==c.children&&(s=c.children),u--;return r>=e.collapseDepth&&(i.isCollapsed=!0),s.push(i),s}function r(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map((function(t){return t.trim()+":not("+e.ignoreSelector+")"})));try{return document.querySelector(t).querySelectorAll(o)}catch(l){return console.warn("Element not found: "+t),null}}function s(e){return t.call(e,(function(e,t){var n=l(t);return n&&i(n,e.nest),e}),{nest:[]})}return{nestHeadingsArray:s,selectHeadings:r}}}}]);
//# sourceMappingURL=chunk-19da166c.bfffad04.js.map