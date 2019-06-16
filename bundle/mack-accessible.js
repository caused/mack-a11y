!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("deque",[],t):"object"==typeof exports?exports.deque=t():e.deque=t()}(this,function(){return function(r){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={exports:{},id:e,loaded:!1};return r[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}return i.m=r,i.c=n,i.p="",i(0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createHierarchicalMenu=t.createMultirange=t.tables=t.configureFormValidation=t.createProgressBar=t.createTabpanel=t.createSlider=t.createMenu=t.createTree=t.createRadioGroup=t.checkbox=t.button=t.initializeLink=t.createDialogTooltip=t.createTooltip=t.createExpander=t.createDialog=t.createPredictiveText=t.createAlert=void 0;var n=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}}(r(33));r(96);t.createAlert=n.createAlert,t.createPredictiveText=n.createPredictiveText,t.createDialog=n.createDialog,t.createExpander=n.createExpander,t.createTooltip=n.createTooltip,t.createDialogTooltip=n.createDialogTooltip,t.initializeLink=n.initializeLink,t.button=n.button,t.checkbox=n.checkbox,t.createRadioGroup=n.createRadioGroup,t.createTree=n.createTree,t.createMenu=n.createMenu,t.createSlider=n.createSlider,t.createTabpanel=n.createTabpanel,t.createProgressBar=n.createProgressBar,t.configureFormValidation=n.configureFormValidation,t.tables=n.tables,t.createMultirange=n.createMultirange,t.createHierarchicalMenu=n.createHierarchicalMenu},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tables=t.createHierarchicalMenu=t.createSlider=t.configureFormValidation=t.createProgressBar=t.createTabpanel=t.createMultirange=t.createMenu=t.createTree=t.createRadioGroup=t.checkbox=t.button=t.initializeLink=t.createDialogTooltip=t.createTooltip=t.createExpander=t.createDialog=t.createPredictiveText=t.createAlert=void 0;var n=x(r(34)),i=x(r(35)),a=x(r(42)),o=x(r(46)),u=x(r(47)),l=S(r(48)),c=S(r(49)),d=x(r(50)),s=x(r(51)),f=x(r(56)),p=x(r(68)),v=x(r(70)),b=x(r(74)),g=x(r(77)),h=x(r(78)),m=x(r(81)),y=x(r(90)),E=S(r(91)),A=x(r(92)),q=x(r(93));function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function x(e){return e&&e.__esModule?e:{default:e}}"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var L={createSortableTable:y.default,makeTableResponsive:E.makeTableResponsive};t.createAlert=n.default,t.createPredictiveText=v.default,t.createDialog=i.default,t.createExpander=h.default,t.createTooltip=a.default,t.createDialogTooltip=o.default,t.initializeLink=u.default,t.button=l,t.checkbox=c,t.createRadioGroup=d.default,t.createTree=s.default,t.createMenu=f.default,t.createMultirange=p.default,t.createTabpanel=b.default,t.createProgressBar=g.default,t.configureFormValidation=m.default,t.createSlider=A.default,t.createHierarchicalMenu=q.default,t.tables=L},function(e,t){"use strict";function a(e,t,r){var n=t.querySelector("#"+e);n.classList.add("deque-show-block"),r&&setTimeout(function(){n.classList.add("deque-hidden"),n.classList.remove("deque-show-block")},r)}function l(e,t,r){var n;if(n=!!t&&("checkbox"!=t.getAttribute("type")||t.checked),function(e){for(var t=e.querySelectorAll("div"),r=0;r<t.length;r++)t[r].classList.remove("deque-show-block"),t[r].classList.add("deque-hidden")}(r),n){var i=t.getAttribute("value");a(e,r,i||5e3)}else a(e,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=arguments[2],n=document.createElement("div");t.forEach(function(e){return n.classList.add(e)}),n.innerHTML=e,r&&setTimeout(function(){n.parentElement&&n.remove()},r);return n},function(){for(var e=document.querySelectorAll(".deque-alert-group"),t=0;t<e.length;t++){for(var r=e[t].querySelector("#useTimeoutInput"),n=e[t].querySelectorAll(".deque-button"),i=e[t].querySelector(".deque-alert"),a=i.querySelectorAll("div"),o=0;o<a.length;o++)a[o].classList.add("deque-hidden");for(var u=0;u<n.length;u++)n[u].addEventListener("click",l.bind(null,n[u].id,r,i))}}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=x;var g=r(36),h=r(39),m=r(40),y=r(41);function x(e,r){for(var t=(0,y.createScreen)(),n=document.getElementById(e),i=n.querySelector(".deque-dialog-buttons").querySelectorAll("button"),a=0;a<i.length;a++)i[a].addEventListener("click",v);var o=document.createElement("span");function u(){!function(){for(var e=[],t=0;t<n.classList.length;t++)e.push(n.classList[t]);e.forEach(function(e){n.classList.remove(e)}),l(r)}(),t.clear()}function l(e){e.isArray?e.forEach(function(e){return n.classList.add(e)}):n.classList.add(e)}function c(e){n.setAttribute("role",e)}var d,s=(0,h.createContentArea)(n);o.addEventListener("click",b);var f=n.querySelector(".deque-dialog-buttons");function p(e){e.classes&&l(e.classes),e.describedby&&n.setAttribute("aria-describedby",e.describedby),e.labelledby&&n.setAttribute("aria-labelledby",e.labelledby),e.hideCloseButton?o.classList.add("deque-hidden"):o.classList.remove("deque-hidden"),e.wrapperID&&document.getElementById(e.wrapperID).setAttribute("aria-hidden","true"),e.isAlert?c("alertdialog"):c("dialog"),t.show(),document.body.appendChild(n),n.setAttribute("aria-hidden","false"),n.classList.remove("deque-hidden"),n.classList.add("deque-show-block"),function(e){if(!e.isAlert){var t=(0,g.getFirstFocusableChild)(n);if(t.classList.contains("deque-dialog-button-close")&&(t=(0,g.getNextFocusableChild)(n,t)),t)return t.focus()}e.isAlert&&e.isDetail?s.focus():f.getFirstButton()?f.getFirstButton().focus():n.focus()}(e)}function v(){n.hasAttribute("aria-describedby")&&n.removeAttribute("aria-describedby"),u(),n.setAttribute("aria-hidden","true"),n.classList.add("deque-hidden"),d.focus()}function b(){v()}return f=(0,m.createButtonBar)(f),n.addEventListener("keyup",function(e){27===e.which&&(b(),e.stopPropagation())}),(0,g.initTabTrap)(n),function(e,t){d=e,t.isAlert||(t.isDetail=!0),p(t)}}var L=!1,P=null;!function(){for(var e=document.querySelectorAll(".deque-dialog"),t=0;t<e.length;t++){var r,n;e[t].classList.add("deque-hidden"),e[t].querySelector(".deque-dialog-description")&&(r=e[t].querySelector(".deque-dialog-description").id),e[t].querySelector(".deque-dialog-heading")&&(n=e[t].querySelector(".deque-dialog-heading").id);var i={describedby:r,labelledby:n,isAlert:!1},a=document.getElementsByClassName("deque-dialog-trigger deque-button");a[t].addEventListener("click",function(e){e.preventDefault(),P=a[t],x(this.getAttribute("aria-controls"),"deque-dialog")(this,i)})}for(var o=document.querySelectorAll(".deque-dialog-alert"),u=0;u<o.length;u++){var l,c;o[u].classList.add("deque-hidden"),o[u].querySelector(".deque-dialog-description")&&(l=o[u].querySelector(".deque-dialog-description").id),o[u].querySelector(".deque-dialog-heading")&&(c=o[u].querySelector(".deque-dialog-heading").id);var d={describedby:l,labelledby:c,isAlert:!0},s=document.getElementsByClassName("deque-dialog-alert-trigger deque-button");s[u].addEventListener("click",function(e){e.preventDefault(),P=s[t],x(this.getAttribute("aria-controls"),"deque-dialog-alert")(this,d)})}for(var f=document.querySelectorAll(".deque-dialog-message"),p=0;p<f.length;p++){var v,b;f[p].classList.add("deque-hidden"),f[p].querySelector(".deque-dialog-description")&&(v=f[p].querySelector(".deque-dialog-description").id),f[p].querySelector(".deque-dialog-heading")&&(b=f[p].querySelector(".deque-dialog-heading").id);var g={describedby:v,labelledby:b,isAlert:!1},h=document.getElementsByClassName("deque-dialog-message-trigger deque-button");h[p].addEventListener("click",function(e){e.preventDefault(),P=h[t],x(this.getAttribute("aria-controls"),"deque-dialog-message")(this,g)})}for(var m=document.querySelectorAll(".deque-dialog-message-alert"),y=0;y<m.length;y++){var E,A;m[y].classList.add("deque-hidden"),m[y].querySelector(".deque-dialog-description")&&(E=m[y].querySelector(".deque-dialog-description").id),m[y].querySelector(".deque-dialog-heading")&&(A=m[y].querySelector(".deque-dialog-heading").id);var q={describedby:E,labelledby:A,isAlert:!0},S=document.getElementsByClassName("deque-dialog-message-alert-trigger deque-button");S[y].addEventListener("click",function(e){e.preventDefault(),P=S[t],x(this.getAttribute("aria-controls"),"deque-dialog-message-alert")(this,q)})}L||(function(){var r=document.body.children,n=document.querySelector(".deque-dialog-message-alert")||null,i=document.querySelector(".deque-dialog-message")||null,a=document.querySelector(".deque-dialog-alert")||null,o=document.querySelector(".deque-dialog")||null,e=document.querySelectorAll(".deque-dialog-screen-wrapper")||null,t=document.querySelectorAll(".deque-dialog-button-cancel")||null,u=null,l=null,c=null,d=null,s="deque-js-aria",f="deque-js-aria-true",p="deque-js-aria-false";(document.querySelector("#deque-dialog-message-alert-trigger")||document.querySelector("#deque-dialog-message-trigger")||document.querySelector("#deque-dialog-alert-trigger")||document.querySelector("#deque-dialog-trigger"))&&([].slice.call(document.querySelectorAll("#deque-dialog-message-alert-trigger, #deque-dialog-message-trigger, #deque-dialog-alert-trigger, #deque-dialog-trigger")).forEach(function(e){e.addEventListener("click",function(e){d=e.currentTarget,[].slice.call(r).forEach(function(e){if(e!=n&&e!=i&&e!=a&&e!=o&&"link"!=e.nodeName.toLowerCase()&&"script"!=e.nodeName.toLowerCase()){var t=e.getAttribute("aria-hidden");e.classList.contains(s)||e.classList.contains(f)||e.classList.contains(p)||(t?"true"==t?e.classList.add(f):"false"==t&&e.classList.add(p):e.classList.add(s))}});var t=document.querySelectorAll("."+s+", ."+f+", ."+p);[].slice.call(t).forEach(function(e){e.setAttribute("aria-hidden","true")}),u=document.querySelectorAll("."+s),l=document.querySelectorAll("."+p),c=document.querySelectorAll("."+f)})}),document.querySelector(".deque-dialog-screen").setAttribute("tabindex","0"),document.querySelector(".deque-dialog-screen").focus());var v=document.querySelectorAll(".deque-dialog-button-close");0<v.length&&[].slice.call(v).forEach(function(e){e.addEventListener("click",function(){u&&[].slice.call(u).forEach(function(e){e.removeAttribute("aria-hidden"),e.classList.remove(s)}),l&&[].slice.call(l).forEach(function(e){e.setAttribute("aria-hidden","false"),e.classList.remove(p)}),c&&[].slice.call(c).forEach(function(e){e.setAttribute("aria-hidden","true"),e.classList.remove(f)})})});var b=document.querySelectorAll(".deque-dialog-button-submit");0<b.length&&[].slice.call(b).forEach(function(e){e.addEventListener("click",function(){u&&[].slice.call(u).forEach(function(e){e.removeAttribute("aria-hidden"),e.classList.remove(s)}),l&&[].slice.call(l).forEach(function(e){e.setAttribute("aria-hidden","false"),e.classList.remove(p)}),c&&[].slice.call(c).forEach(function(e){e.setAttribute("aria-hidden","true"),e.classList.remove(f)}),P&&P.focus()})});var g={27:"ESC",16:"SHIFT"};document.body.addEventListener("keydown",function(e){for(var t in g)t==e.keyCode&&h()});var h=function(e){e?e.parentNode.querySelector(".deque-dialog-button-close").click():[].slice.call(document.querySelectorAll(".deque-dialog-button-close")).forEach(function(e){e.click()}),[].slice.call(v).forEach(function(e){e.click()}),d&&d.focus()};e&&[].slice.call(e).forEach(function(e){e.addEventListener("click",function(){h(e)})}),t&&[].slice.call(t).forEach(function(e){e.addEventListener("click",function(){h(e)})})}(),L=!0)}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFirstFocusableChild=u,t.getNextFocusableChild=function(e,t){var r=(0,i.queryAll)(a),n=r.indexOf(t)+1;if(n<=r.length-1)return r[n];return null},t.getLastFocusableChild=l,t.initTabTrap=function(e){function t(){var e=document.createElement("div");return e.classList.add("tabtrap"),e.setAttribute("tabindex","0"),e}var r=t(),n=t();i=e,a=r,o=n,a.addEventListener("focus",function(){l(i).focus()}),o.addEventListener("focus",function(){u(i).focus()}),i.insertBefore(a,i.firstChild),i.appendChild(o);var i,a,o};var i=r(37),a='input:not([tabindex^="-"]), select:not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), object:not([tabindex^="-"]), [href]:not([tabindex^="-"]), [tabindex]:not([tabindex^="-"]):not(.tabtrap)';function u(e){return e.querySelector(a)}function l(e){var t=e.querySelectorAll(a);return t[t.length-1]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.queryAll=function(e,t){return t=t||document,(0,n.toArray)(t.querySelectorAll(e))};var n=r(38)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toArray=function(e){return Array.prototype.slice.call(e)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createContentArea=function(e){var t=e.querySelector(".deque-dialog-content");return t.setAttribute("role","document"),t.setAttribute("tabindex","-1"),t.render=function(e,t){if(t.substr){var r=document.getElementById("deque-dialog-description");r.innerText=t,e.appendChild(r)}else e.appendChild(t)}.bind(null,t),t.clear=function(e){e.innerText=""}.bind(null,t),t}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createButtonBar=function(e){return e.getFirstButton=function(e){return e.children[0]||null}.bind(null,e),e.getLastButton=function(e){var t=e.children;return t[t.length-1]||null}.bind(null,e),e.initialize=function(i,e,t){var r,a;(r=e,a=t,r.map(function(e){var t;if(e.markup){var r=document.createElement("div");r.innerHTML=e.markup,t=r.querySelector("button"),r=null}else(t=document.createElement("button")).innerText=e.label;e.classes&&e.classes.forEach(function(e){return t.classList.add(e)});var n=function(){e.preClose&&e.preClose(),a(),e.postClose&&e.postClose()};return t.addEventListener("click",n),{button:t,handler:n}})).forEach(function(e,t,r){if(i.appendChild(e.button),t<r.length-1){var n=document.createElement("span");n.innerHTML="",i.appendChild(n)}})}.bind(null,e),e}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createScreen=function(){var e=document.createElement("div");return e.show=function(e){document.body.appendChild(e)}.bind(null,e),e.clear=function(e){e.remove()}.bind(null,e),e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var b=r(43),g=r(44),h=r(45);function n(o){var e=o.getAttribute("data-deque-tooltip"),t=(0,b.generateGuid)(),r=document.createElement("span");r.classList.add("deque-tooltip-wrapper"),o.parentNode.insertBefore(r,o),r.appendChild(o);var u=document.createElement("span");u.setAttribute("role","tooltip"),u.id=t,u.classList.add("deque-tooltip"),u.innerHTML=e,r.appendChild(u);function n(e){var t=o.getAttribute("data-deque-tooltip-position"),r=window.getComputedStyle(u),n=[];if(n.width=r.getPropertyValue("width"),n.width=n.width.replace("px",""),n.width=Number(n.width),n.height=r.getPropertyValue("height"),n.height=n.height.replace("px",""),n.height=Number(n.height),"right"==t&&(u.style.left="5px"),"top"==t);else{var i=e.width-10,a=n.height+5;u.style.left=i+"px",u.style.top="-"+a+"px"}}window.getComputedStyle(o).getPropertyValue("display"),(0,h.noClobber)(o,"aria-describedby",t);var i={INITIAL:"initial",FOCUS:"focus",MOUSE:"mouse",ESCAPE:"escape"},a=i.INITIAL;function l(e){if(a!==i.FOCUS){u.classList.remove("deque-hidden"),u.setAttribute("aria-hidden","false"),a=e;var t,r=((t=[]).width=o.offsetWidth,t.height=o.offsetHeight,t);n(r),n(r)}}function c(e){e!==i.ESCAPE&&a!==e||(u.classList.add("deque-hidden"),u.setAttribute("aria-hidden","true"),a="")}var d=(0,g.onElementEscape)(document.body,function(){c(i.ESCAPE)}),s=l.bind(null,i.FOCUS),f=c.bind(null,i.FOCUS),p=l.bind(null,i.MOUSE),v=c.bind(null,i.MOUSE);return o.addEventListener("focus",s),o.addEventListener("blur",f),o.addEventListener("mouseover",p),o.addEventListener("mouseout",v),c(i.INITIAL),function(){c(i.ESCAPE),d();try{u.remove()}catch(e){}o.removeEventListener("focus",s),o.removeEventListener("blur",f),o.removeEventListener("mouseover",p),o.removeEventListener("mouseout",v),o.removeAttribute("aria-describedby")}}!function(){for(var e=document.querySelectorAll("[data-deque-tooltip]"),t=0;t<e.length;t++)n(e[t])}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateGuid=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return"g"+(e()+e())+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.onElementEnter=o,t.onElementEscape=function(e,t){return a(e,r.ESCAPE,t)},t.onElementSpace=function(e,t){return i(e,r.SPACE,t)},t.onElementLeft=function(e,t){return a(e,r.LEFT,t)},t.onElementRight=function(e,t){return a(e,r.RIGHT,t)},t.onElementUp=function(e,t){return a(e,r.UP,t)},t.onElementDown=function(e,t){return a(e,r.DOWN,t)},t.onElementHome=function(e,t){return a(e,r.HOME,t)},t.onElementEnd=function(e,t){return a(e,r.END,t)},t.onElementPageUp=function(e,t){return a(e,r.PAGE_UP,t)},t.onElementPageDown=function(e,t){return a(e,r.PAGE_DOWN,t)},t.onElementF10=function(e,t){return a(e,r.F10,t)},t.isAlphaNumeric=u,t.onElementCharacter=function(e,r){function t(e){var t=e.which;u(t)&&r(e)}return e.addEventListener("keypress",t),function(){e.removeEventListener("keypress",t)}},t.trapEnter=function(e){o(e,function(e){e.stopPropagation(),e.preventDefault()})};var r=t.KEYS={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESCAPE:27,SPACE:32,LEFT:37,RIGHT:39,UP:38,DOWN:40,F10:121,HOME:36,END:35,PAGE_UP:33,PAGE_DOWN:34};function n(e,t,r,n){function i(e){e.which===r&&n(e)}return e.addEventListener(t,i),function(){e.removeEventListener(t,i)}}function i(e,t,r){return n(e,"keypress",t,r)}function a(e,t,r){return n(e,"keydown",t,r)}function o(e,t){return i(e,r.ENTER,t)}function u(e){return 48<=e&&e<=90||97<=e&&e<=122}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noClobber=function(e,t){for(var r=e.getAttribute(t),n=arguments.length,i=Array(2<n?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!r)return e.setAttribute(t,i.join(" "));var o=r.trim().split(u);return i.map(function(e){~o.indexOf(e)||o.push(e)}),e.setAttribute(t,o.join(" "))};var u=/\s+/},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,e){var r=e.contentID,n=e.submitID,i=e.cancelID,a=e.onCancel,o=e.onSubmit,u=e.onOpen,l=e.label,c=e.position,d=document.getElementById(r),s=(0,E.generateGuid)(),f=document.createElement("div");c||(c=function(e,t){var r=e.getClientRects()[0],n=t.getClientRects()[0];return{left:r.left+r.width+10,top:r.top+r.height/2-n.height/2}});f.setAttribute("aria-label",l),f.setAttribute("role","dialog"),f.id=s,f.classList.add("deque"),f.classList.add("tooltip"),f.appendChild(d),d.classList.remove("hidden"),t.parentElement.insertBefore(f,t),t.parentElement.insertBefore(t,f);var p=n?document.getElementById(n):null,v=i?document.getElementById(i):null;function b(e){a&&a(),h(),e&&t.focus()}function g(){document.addEventListener("mousedown",b),u&&u(),t.setAttribute("aria-describedby",f.id),f.classList.remove("hidden"),f.setAttribute("aria-hidden","false"),(0,y.getFirstFocusableChild)(f).focus()}function h(){document.removeEventListener("mousedown",b),f.classList.add("hidden"),f.setAttribute("aria-hidden","true"),t.removeAttribute("aria-describedby")}t.addEventListener("click",function(){f.classList.contains("hidden")?g():h()}),f.addEventListener("mousedown",function(e){e.stopPropagation()});var m=(0,A.onElementEscape)(document.body,b.bind({},!0));p&&p.addEventListener("click",function(){o&&o(),h()});v&&v.addEventListener("click",b);return h(),(0,y.initTabTrap)(f),function(){t.removeEventListener("focus",g),m(),h(),f.parentNode&&f.parentNode.removeChild(f)}};var y=r(36),E=r(43),A=r(44)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var i=r(44);function n(r){if("a"!==r.tagName.toLowerCase()){var n;if(r.classList.add("deque"),r.getAttribute("href"))n=r.getAttribute("href");else{if(!r.getAttribute("data-href"))return;n=r.getAttribute("data-href")}r.setAttribute("tabindex",0),r.setAttribute("role","link"),r.addEventListener("click",e),(0,i.onElementEnter)(r,e),(0,i.onElementF10)(r,function(e){if(e.shiftKey)if(window.CustomEvent)try{r.dispatchEvent(new CustomEvent("contextmenu"))}catch(e){return}else if(document.createEvent){var t=document.createEvent("HTMLEvents");t.initEvent("contextmenu",!0,!1),r.dispatchEvent(t)}else r.fireEvent("oncontextmenu")})}function e(e){e.preventDefault(),e.stopPropagation();var t=r.getAttribute("data-target");t?window.open(n,t):window.location.href=n}}!function(){for(var e=document.querySelectorAll(".deque-link-aria"),t=0;t<e.length;t++)n(e[t])}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initializeButton=function(e,t){o(e),a(e,t)},t.initializeToggleButton=function(r,n){var e=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(o(r),r.setAttribute("aria-pressed",e),t=r,i=document.createElement("span"),i.setAttribute("aria-hidden",!0),i.classList.add("pressed-on-icon"),t.insertBefore(i,t.firstChild),!n)throw new Error("You must provide a toggle function to a toggle button. It should return 'true' when the button should have a 'pressed' state, and 'false' otherwise.");var t,i;a(r,function(e){var t=n(e);r.setAttribute("aria-pressed",t?"true":"false")})};var n=r(44);function a(e,t){"BUTTON"!==e.tagName.toUpperCase()&&((0,n.onElementSpace)(e,function(e){e.preventDefault(),e.stopPropagation(),t(e)}),(0,n.onElementEnter)(e,function(e){e.preventDefault(),e.stopPropagation(),t(e)})),e.addEventListener("click",t)}function o(e){"button"!==e.tagName.toLowerCase()&&(e.setAttribute("role","button"),e.setAttribute("tabindex","0"))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toggle=d,t.isToggledOn=s,t.setCheckboxData=n,t.toggleOn=f,t.toggleOff=p,t.toggleMixed=o,t.createSingleCheckbox=l,t.createSingleCheckboxForRadio=function(t,e,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:function(){};t.setAttribute("tabindex","0"),t.setAttribute("role","checkbox");var i=document.createElement("span");i.classList.add("deque-checkbox-indicator"),t.appendChild(i);var a=t.getAttribute("aria-labelledby"),o=document.getElementById(a);o.setAttribute("aria-hidden","true"),o.classList.add("deque-checkbox-label");var u=document.createElement("input");u.type="hidden",u.name="checkboxTristateData["+a+"]",u.id="checkboxTristateData["+a+"]",u.classList.add("deque-checkbox-radio-data"),t.appendChild(u),t.appendChild(o),r?f(t):p(t);function l(e){e.stopPropagation(),e.preventDefault(),d(t),n({element:t,isToggledOn:s(o)})}return t.addEventListener("click",l),t.addEventListener("keydown",l),e.addEventListener("click",l),(0,c.onElementSpace)(t,l),t.addEventListener("focus",function(){t.classList.add("deque-radio-focused")}),t.addEventListener("blur",function(){t.classList.remove("deque-radio-focused")}),t},t.createCheckboxGroup=v;var c=r(44);function d(e){s(e)?p(e):f(e)}function s(e){return"true"===(t=e,(r=document.getElementById("checkboxTristateData["+t.getAttribute("aria-labelledby")+"]"))?r.value:null);var t,r}function n(e,t){e.setAttribute("aria-checked",t);var r=document.getElementById("checkboxTristateData["+e.getAttribute("aria-labelledby")+"]");r&&(r.value=t)}function f(e){n(e,"true")}function p(e){n(e,"false")}function o(e){n(e,"mixed")}function l(t,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};t.setAttribute("tabindex","0"),t.setAttribute("role","checkbox");var n=document.createElement("span");n.classList.add("deque-checkbox-indicator"),t.appendChild(n);var i=t.getAttribute("aria-labelledby"),a=document.getElementById(i);a.setAttribute("aria-hidden","true"),a.classList.add("deque-checkbox-label");var o=document.createElement("input");function u(e){e.stopPropagation(),e.preventDefault(),d(t),r({element:t,isToggledOn:s(a)})}return o.type="hidden",o.name="checkboxTristateData["+i+"]",o.id="checkboxTristateData["+i+"]",o.classList.add("deque-checkbox-data"),t.appendChild(o),t.addEventListener("focus",function(){var e=document.querySelectorAll(".deque-checkbox-tristate-parent");[].slice.call(e).forEach(function(e){e.setAttribute("aria-hidden","true")})}),e?f(t):p(t),t.parentNode.addEventListener("click",u),(0,c.onElementSpace)(t,u),(0,c.onElementEnter)(t,u),t.parentNode.addEventListener("focus",function(){t.classList.add("deque-checkbox-focused")}),t.parentNode.addEventListener("blur",function(){t.classList.remove("deque-checkbox-focused")}),t}function v(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};e=l(e,!1,function(e){var t;r(e),t=i(),n[t]()}),t=(t=Array.prototype.slice.call(t)).map(function(e){return l(e,!1,function(){r&&r(e),a[i()]()})});var n={true:function(){t.forEach(p),p(e)},false:function(){t.forEach(f),f(e)},mixed:function(){t.forEach(f),f(e)}};function i(){return t.every(s)?"true":t.every(function(e){return!s(e)})?"false":"mixed"}var a={true:function(){return f(e)},false:function(){return p(e)},mixed:function(){return o(e)}}}!function(){for(var e=document.querySelectorAll(".deque-checkbox-aria"),t=0;t<e.length;t++){var r=e[t].querySelector(".deque-checkbox-data");e[t].contains(r)||l(e[t],!1)}for(var n=document.querySelectorAll(".deque-checkbox-tristate-group"),i=0;i<n.length;i++){var a=n[i].querySelector(".deque-checkbox-tristate-parent").querySelector(".deque-checkbox-tristate"),o=n[i].querySelector(".deque-checkbox-tristate-children"),u=o.querySelectorAll(".deque-checkbox-tristate");r=o.querySelector(".deque-checkbox-data"),o.contains(r)||v(a,u)}}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var c=r(44),d=r(49);function n(e,t,o,n){e.querySelector("#radioGroup").setAttribute("role","radiogroup");var u=0;function i(e){var t=e.currentTarget.parentNode.parentNode,r=window.navigator.userAgent,n=r.indexOf("Trident/"),i=r.indexOf("Edge");(0<n||0<i)&&t.nodeName.toLowerCase()=="FIELDSET".toLowerCase()&&(t.querySelector("legend").getAttribute("id")||t.querySelector("legend").setAttribute("id","deque-fieldset-radio-group"),e.currentTarget.getAttribute("aria-describedby")||e.currentTarget.setAttribute("aria-describedby",t.querySelector("legend").getAttribute("id")));var a=e.target.id.split("_")[1];u=parseInt(a),o[u].click()}function a(e){var t=e.which;if(t===c.KEYS.RIGHT||t===c.KEYS.DOWN?function(e){o[u+1]&&o[++u].focus();o[u].click(),e.preventDefault()}(e):t!==c.KEYS.LEFT&&t!==c.KEYS.UP||function(e){o[u-1]&&o[--u].focus();o[u].click(),e.preventDefault()}(e),t==c.KEYS.TAB){var r=null;if(r=o[u].parentNode.parentNode,e.shiftKey)try{r.previousSibling.previousSibling.querySelectorAll(".deque-radio")[0]?r.previousSibling.previousSibling.querySelector('.deque-radio[aria-checked="true"]')?(r.previousSibling.previousSibling.querySelector('.deque-radio[aria-checked="true"]').setAttribute("tabindex","0"),r.previousSibling.previousSibling.querySelector('.deque-radio[aria-checked="true"]').focus()):(r.previousSibling.previousSibling.querySelectorAll(".deque-radio")[0].setAttribute("tabindex","0"),r.previousSibling.previousSibling.querySelectorAll(".deque-radio")[0].focus()):(r.previousSibling.previousSibling.setAttribute("tabindex","0"),r.previousSibling.previousSibling.focus())}catch(e){}else try{r.nextSibling.nextSibling.querySelectorAll(".deque-radio")[0]?(e.currentTarget.setAttribute("tabindex","0"),r.nextSibling.nextSibling.querySelector('.deque-radio[aria-checked="true"]')?(r.nextSibling.nextSibling.querySelector('.deque-radio[aria-checked="true"]').setAttribute("tabindex","0"),r.nextSibling.nextSibling.querySelector('.deque-radio[aria-checked="true"]').focus()):(r.nextSibling.nextSibling.querySelectorAll(".deque-radio")[0].setAttribute("tabindex","0"),r.nextSibling.nextSibling.querySelectorAll(".deque-radio")[0].focus())):(r.nextSibling.nextSibling.setAttribute("tabindex","0"),r.nextSibling.nextSibling.focus())}catch(e){}}}function l(t){o.forEach(function(e){e===t?(0,d.toggleOn)(e):(0,d.toggleOff)(e),e.setAttribute("tabindex",e===t?"0":"-1")})}(o=(o=Array.prototype.slice.call(o)).map(function(t){var e=t.getAttribute("aria-labelledby"),r=document.getElementById(e);return l(t),(0,d.createSingleCheckboxForRadio)(t,r,!1,function(e){l(e.element),n&&n(t)})})).forEach(function(e){e.addEventListener("focus",i),e.addEventListener("keydown",a),e.setAttribute("role","radio");var t=e.querySelector(".deque-checkbox-indicator");t.classList.remove("deque-checkbox-indicator"),t.classList.add("deque-radio-indicator");var r=e.getAttribute("aria-labelledby"),n=document.getElementById(r);n.classList.remove("deque-checkbox-label"),n.classList.add("deque-radio-label")}),o[0].setAttribute("tabindex","0")}!function(){for(var e=document.querySelectorAll(".deque-radio-group"),t=0;t<e.length;t++){e[t].querySelector(".deque-radio-group-label");var r=e[t].querySelectorAll(".deque-radio");e[t].querySelector("#radioGroup").hasAttribute("role")||n(e[t],0,r)}}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.querySelector('[role="tree"]');"multi"===e.selectStyle&&r.setAttribute("aria-multiselectable","true");for(var n=t.querySelectorAll('[role="treeitem"]'),i=0;i<n.length;i++){n[i].setAttribute("tabindex","-1");var a=l[e.selectStyle]||l.default;a(n[i]),0===i&&((0,o.focusOnNode)(n[i]),e.selectStyle&&(0,o.selectNode)(n[i])),n[i].children&&n[i].setAttribute("aria-expanded","false")}};var o=r(52),n=u(r(53)),i=u(r(54)),a=u(r(55));function u(e){return e&&e.__esModule?e:{default:e}}var l={default:n.default,single:i.default,multi:a.default}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasChildren=function(e){return e.hasAttribute("aria-expanded")},t.isOpen=function(e){return"true"===e.getAttribute("aria-expanded")},t.getRootNode=function(e){return document.querySelector("#"+e+" > ul > [role='treeitem']")},t.getVisibleNodes=o,t.getPreviousVisibleNode=function(e){var t=o(e.getAttribute("data-tree-root"));return i(e,t.reverse())||e},t.getNextVisibleNode=function(e){var t=o(e.getAttribute("data-tree-root"));return i(e,t)||e},t.focusOnNode=function(e){return a(e.getAttribute("data-tree-root")).forEach(function(e){e.setAttribute("tabindex","-1")}),e.setAttribute("tabindex","0"),e.focus(),e},t.closeNode=function(e){return e.setAttribute("aria-expanded","false"),e},t.openNode=function(e){return e.setAttribute("aria-expanded","true"),e},t.getFirstChild=function(e){return e.querySelector('[role="treeitem"]')||e},t.getParent=function(e){if("treeitem"===e.parentNode.parentNode.getAttribute("role"))return e.parentNode.parentNode;return e},t.getNextSibling=function(e){return e.nextElementSibling||e},t.getPreviousSibling=function(e){return e.previousSibling||e},t.selectNode=function(t,r){return a(t.getAttribute("data-tree-root")).forEach(function(e){t===e?e.setAttribute("aria-selected","true"):r?e.setAttribute("aria-selected","false"):e.removeAttribute("aria-selected")}),t.setAttribute("aria-selected","true"),t},t.addNodeToSelection=function(e){e.setAttribute("aria-selected","true")},t.isSelected=function(e){return"true"===e.getAttribute("aria-selected")},t.toggleNodeSelection=function(e,t){"true"===e.getAttribute("aria-selected")?t?e.setAttribute("aria-selected","false"):e.removeAttribute("aria-selected"):e.setAttribute("aria-selected","true")};var n=r(37);function i(r,e){var n=!1;return e.reduce(function(e,t){return e||(n?t:void(r===t&&(n=!0)))},null)||r}function a(e){return(0,n.queryAll)("#"+e+' [role="treeitem"]')}function o(e){return(0,n.queryAll)("#"+e+" > ul > [role='treeitem'], #"+e+" [aria-expanded='true'] > ul > [role='treeitem']")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){a.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),o.focusOnNode(a),o.isOpen(a)?o.closeNode(a):o.hasChildren(a)&&o.openNode(a)}),n.onElementEnter(a,function(e){e.preventDefault(),e.stopPropagation();for(var t=void 0,r=0;r<a.children.length;r++){var n=a.children[r];if("A"===n.tagName||"BUTTON"===n.tagName){t=n;break}}if(t){var i=new MouseEvent("click");t.dispatchEvent(i)}}),n.onElementCharacter(a,function(e){e.preventDefault(),e.stopPropagation();var r=String.fromCharCode(e.which).toUpperCase(),t=o.getVisibleNodes(a.getAttribute("data-tree-root")),n=!1,i=t.filter(function(e){return!!n||(e===a&&(n=!0),!1)}).reduce(function(e,t){return e||(t.innerText.charAt(0).toUpperCase()===r?t:void 0)},null);i&&o.focusOnNode(i)}),n.onElementHome(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getRootNode(a.getAttribute("data-tree-root"));o.focusOnNode(t)}),n.onElementEnd(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getVisibleNodes(a.getAttribute("data-tree-root")),r=t.reverse()[0];o.focusOnNode(r)}),n.onElementDown(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getNextVisibleNode(a);o.focusOnNode(t)}),n.onElementUp(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getPreviousVisibleNode(a);o.focusOnNode(t)}),n.onElementRight(a,function(e){if(e.preventDefault(),e.stopPropagation(),o.hasChildren(a)&&!o.isOpen(a))o.openNode(a);else{var t=o.getFirstChild(a);o.focusOnNode(t)}}),n.onElementLeft(a,function(e){if(e.preventDefault(),e.stopPropagation(),!o.hasChildren(a)||!o.isOpen(a)){var t=o.getParent(a);return o.focusOnNode(t),t}return o.closeNode(a)})};var n=i(r(44)),o=i(r(52));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){a.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),o.focusOnNode(a),o.selectNode(a),o.isOpen(a)?o.closeNode(a):o.hasChildren(a)&&o.openNode(a)}),n.onElementEnter(a,function(e){e.preventDefault(),e.stopPropagation();for(var t=void 0,r=0;r<a.children.length;r++){var n=a.children[r];if("A"===n.tagName||"BUTTON"===n.tagName){t=n;break}}if(t){var i=new MouseEvent("click");t.dispatchEvent(i)}}),n.onElementSpace(a,function(e){e.preventDefault(),e.stopPropagation(),e.ctrlKey&&o.toggleNodeSelection(a)}),n.onElementCharacter(a,function(e){e.preventDefault(),e.stopPropagation();var r=String.fromCharCode(e.which).toUpperCase(),t=o.getVisibleNodes(a.getAttribute("data-tree-root")),n=!1,i=t.filter(function(e){return!!n||(e===a&&(n=!0),!1)}).reduce(function(e,t){return e||(t.innerText.charAt(0).toUpperCase()===r?t:void 0)},null);i&&(o.focusOnNode(i),o.selectNode(i))}),n.onElementHome(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getRootNode(a.getAttribute("data-tree-root"));o.focusOnNode(t),o.selectNode(t)}),n.onElementEnd(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getVisibleNodes(a.getAttribute("data-tree-root")),r=t.reverse()[0];o.focusOnNode(r),o.selectNode(r)}),n.onElementDown(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getNextVisibleNode(a);o.focusOnNode(t),e.ctrlKey||o.selectNode(t)}),n.onElementUp(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getPreviousVisibleNode(a);o.focusOnNode(t),e.ctrlKey||o.selectNode(t)}),n.onElementRight(a,function(e){if(e.preventDefault(),e.stopPropagation(),o.hasChildren(a)&&!o.isOpen(a))o.openNode(a);else{var t=o.getFirstChild(a);o.focusOnNode(t),e.ctrlKey||o.selectNode(t)}}),n.onElementLeft(a,function(e){if(e.preventDefault(),e.stopPropagation(),!o.hasChildren(a)||!o.isOpen(a)){var t=o.getParent(a);return o.focusOnNode(t),e.ctrlKey||o.selectNode(t),t}return o.closeNode(a)})};var n=i(r(44)),o=i(r(52));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){a.setAttribute("aria-selected","false"),document.removeEventListener("keydown",l),document.removeEventListener("keyup",l),document.addEventListener("keydown",l),document.addEventListener("keyup",l),a.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();var t=u?"addNodeToSelection":"selectNode";o.isOpen(a)?o.closeNode(a):o.hasChildren(a)&&o.openNode(a),o.focusOnNode(a),o[t](a,!0)}),n.onElementEnter(a,function(e){e.preventDefault(),e.stopPropagation();for(var t=void 0,r=0;r<a.children.length;r++){var n=a.children[r];if("A"===n.tagName||"BUTTON"===n.tagName){t=n;break}}t&&t.click()}),n.onElementSpace(a,function(e){e.preventDefault(),e.stopPropagation(),e.ctrlKey&&o.toggleNodeSelection(a,!0)}),n.onElementCharacter(a,function(e){e.preventDefault(),e.stopPropagation();var r=String.fromCharCode(e.which).toUpperCase(),t=o.getVisibleNodes(a.getAttribute("data-tree-root")),n=!1,i=t.filter(function(e){return!!n||(e===a&&(n=!0),!1)}).reduce(function(e,t){return e||(t.innerText.charAt(0).toUpperCase()===r?t:void 0)},null);i&&(o.focusOnNode(i),o.selectNode(i,!0))}),n.onElementHome(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getRootNode(a.getAttribute("data-tree-root"));if(o.focusOnNode(t),e.shiftKey){var r=o.getPreviousVisibleNode(a);for(r.getAttribute("aria-selected")===a.getAttribute("aria-selected")&&o.toggleNodeSelection(a,!0);r!==t;)o.toggleNodeSelection(r,!0),r=o.getPreviousVisibleNode(r);o.toggleNodeSelection(t,!0)}else o.selectNode(t,!0)}),n.onElementEnd(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getVisibleNodes(a.getAttribute("data-tree-root")),r=t.reverse()[0];if(o.focusOnNode(r),e.shiftKey){var n=o.getNextVisibleNode(a);for(n.getAttribute("aria-selected")===a.getAttribute("aria-selected")&&o.toggleNodeSelection(a,!0);n!==r;)o.toggleNodeSelection(n,!0),n=o.getNextVisibleNode(n);o.toggleNodeSelection(r,!0)}else o.selectNode(r,!0)}),n.onElementDown(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getNextVisibleNode(a);if(o.focusOnNode(t),!e.ctrlKey)return e.shiftKey?t.getAttribute("aria-selected")===a.getAttribute("aria-selected")?o.toggleNodeSelection(a,!0):o.toggleNodeSelection(t,!0):void o.selectNode(t,!0)}),n.onElementUp(a,function(e){e.preventDefault(),e.stopPropagation();var t=o.getPreviousVisibleNode(a);if(o.focusOnNode(t),!e.ctrlKey)return e.shiftKey?t.getAttribute("aria-selected")===a.getAttribute("aria-selected")?o.toggleNodeSelection(a,!0):o.toggleNodeSelection(t,!0):void o.selectNode(t,!0)}),n.onElementRight(a,function(e){if(e.preventDefault(),e.stopPropagation(),o.hasChildren(a)&&!o.isOpen(a))o.openNode(a);else{var t=o.getFirstChild(a);if(o.focusOnNode(t),e.ctrlKey)return;if(e.shiftKey)return o.addNodeToSelection(t);o.selectNode(t,!0)}}),n.onElementLeft(a,function(e){if(e.preventDefault(),e.stopPropagation(),!o.hasChildren(a)||!o.isOpen(a)){var t=o.getParent(a);if(o.focusOnNode(t),e.ctrlKey)return;return e.shiftKey?o.addNodeToSelection(t):o.selectNode(t,!0)}return o.closeNode(a)})};var n=i(r(44)),o=i(r(52));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var u=!1;function l(e){u=e.shiftKey}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a=document.createElement("ul");a.classList.add("deque"),function(e,t){var r=t.trigger;if(r)return r.setAttribute("aria-haspopup","true"),e.setAttribute("role","menu"),e.classList.add("hidden"),r.addEventListener("click",function(){e.classList.remove("hidden")});e.setAttribute("role","menubar")}(a,r),function(e,t){var r=t.orientation,n=void 0===r?"horizontal":r;"horizontal"===n&&(e.classList.add("horizontal"),e.setAttribute("aria-orientation","horizontal"));"vertical"===n&&(e.classList.add("vertical"),e.setAttribute("aria-orientation","vertical"))}(a,r),e.appendChild(a);var o=null,u=null;t.map(function(e){return(0,i.default)(e,r)}).forEach(function(e){var t=e.getAttribute("role"),r=e.getAttribute("data-group");if("menuitemcheckbox"===t&&r){var n=r;return u&&u.getAttribute("group-name")===n||((u=(0,l.createFieldset)(n)).setAttribute("group-name",n),a.appendChild(u)),u.appendChild(e)}if(u=null,"menuitemradio"===t){var i=e.getAttribute("data-group");return o&&o.getAttribute("group-name")===i||((o=(0,l.createFieldset)(i)).setAttribute("group-name",i),a.appendChild(o)),o.appendChild(e)}o=null,a.appendChild(e)}),(0,n.default)(a,r),a.querySelector("li").setAttribute("tabindex","0")};var n=a(r(57)),i=a(r(61)),l=r(64);function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.orientation,n=void 0===r?"vertical":r,i=t.wrap,a=void 0!==i&&i;if("vertical"!==n&&"horizontal"!==n)throw new Error("orientation must be either `vertical` or `horizontal`");e.addEventListener("click",function(e){var t=c(e.target);t&&u.setFocus(t)}),o.onElementUp(e,function(e){e.preventDefault(),e.stopPropagation();var t=c(e.target);t&&l[n].up(t,a)}),o.onElementDown(e,function(e){e.preventDefault(),e.stopPropagation();var t=c(e.target);t&&l[n].down(t,a)}),o.onElementLeft(e,function(e){e.preventDefault(),e.stopPropagation();var t=c(e.target);t&&l[n].left(t,a)}),o.onElementRight(e,function(e){e.preventDefault(),e.stopPropagation();var t=c(e.target);t&&l[n].right(t,a)}),o.onElementHome(e,function(e){e.preventDefault(),e.stopPropagation();var t=c(e.target);t&&l[n].home(t,a)}),o.onElementEnd(e,function(e){e.preventDefault(),e.stopPropagation();var t=c(e.target);t&&l[n].end(t,a)}),o.onElementCharacter(e,function(e){e.preventDefault(),e.stopPropagation();var t=c(e.target);if(t){var r=String.fromCharCode(e.which);l[n].char(t,r)}})};var o=n(r(44)),u=n(r(58));function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var l={vertical:n(r(59)),horizontal:n(r(60))};function c(e){if(0===(e.getAttribute("role")||"").indexOf("menuitem"))return e;var t=e.parentElement;return t?e===t?null:c(t):null}},function(e,t){"use strict";function n(e){for(var t=l(e);;){var r=l(t);if(t===r)break;t=r}var n=t.parentElement,i=n.getAttribute("role");return"menu"===i||"menubar"===i?n:null}function i(e){for(var t=[],r=e.querySelectorAll('[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]'),n=0;n<r.length;n++)t.push(r[n]);return t}function r(e){return!!e.querySelector("ul")}function a(e){return r(e)&&e.classList.contains("menu-open")}function o(e){r(e)&&a(e)&&(e.classList.remove("menu-open"),e.setAttribute("aria-expanded","false"),u(e))}function u(t){i(n(t)).forEach(function(e){e===t?(e.setAttribute("tabindex","0"),e.focus()):e.setAttribute("tabindex","-1"),!e.contains(t)&&r(e)&&e.classList.remove("menu-open")})}function l(e){var t=e.parentElement.parentElement;return"FIELDSET"===e.parentElement.tagName.toUpperCase()&&(t=e.parentElement.parentElement.parentElement),"menuitem"===t.getAttribute("role")?t:e}function c(e){return e.querySelector('ul li:not([role="separator"])')||e}function d(e){for(var t=e.previousElementSibling;t&&"separator"===t.getAttribute("role");)t=t.previousElementSibling;return t||e}function s(e){for(var t=e.nextElementSibling;t&&"separator"===t.getAttribute("role");)t=t.nextElementSibling;return t||e}Object.defineProperty(t,"__esModule",{value:!0}),t.finishInteraction=function(e){var t=n(e);if(t){var r=t.getAttribute("role");i(t).forEach(o),"menu"===r&&t.classList.add("hidden")}},t.getMenuFromItem=n,t.getAllItemsInMenu=i,t.hasChildren=r,t.isOpen=a,t.openSubmenu=function(e){if(!r(e))return;e.classList.add("menu-open"),e.setAttribute("aria-expanded","true"),u(c(e))},t.closeSubmenu=o,t.setFocus=u,t.getParent=l,t.getFirstChild=c,t.getFirstSibling=function(e){return e.parentElement.children[0]},t.getPreviousSibling=d,t.getNextSibling=s,t.getLastSibling=function(e){var t=e.parentElement.children;return t[t.length-1]},t.getFirstMenuItem=function(e){return n(e).children[0]},t.getLastMenuItem=function(e){var t=n(e).children;return t[t.length-1]},t.getPreviousSiblingWhere=function e(t,r){var n=d(t);if(n===t)return r(n)?n:null;return r(n)?n:e(n,r)},t.getNextSiblingWhere=function e(t,r){var n=s(t);if(n===t)return r(n)?n:null;return r(n)?n:e(n,r)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.up=function(e,t){var r=n.getPreviousSibling(e);e===r&&t&&(r=n.getLastSibling(e));n.setFocus(r)},t.down=function(e,t){var r=n.getNextSibling(e);r===e&&t&&(r=n.getFirstSibling(e));n.setFocus(r)},t.right=function(e){if(n.hasChildren(e)&&!n.isOpen(e))return n.openSubmenu(e);var t=n.getParent(e);if(e===t)return;var r=n.getNextSiblingWhere(t,function(e){return n.hasChildren(e)});r&&r!==t&&(n.closeSubmenu(t),n.openSubmenu(r))},t.left=function(e){var t=n.getParent(e);if(e===t)return;n.closeSubmenu(t);var r=n.getPreviousSiblingWhere(t,function(e){return n.hasChildren(e)});r&&r!==t&&n.openSubmenu(r)},t.home=function(e,t){if(t)return;var r=n.getFirstMenuItem(e);n.setFocus(r)},t.end=function(e,t){if(t)return;n.setFocus(n.getLastMenuItem(e))},t.char=function(e,t){var r=n.getNextSiblingWhere(e,function(e){return e.textContent.charAt(0).toUpperCase()===t.toUpperCase()});r&&n.setFocus(r)};var n=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}}(r(58))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.up=function(e){var t=n.getParent(e);if(e===t)return;n.closeSubmenu(t);var r=n.getPreviousSiblingWhere(t,function(e){return n.hasChildren(e)});r&&r!==t&&n.openSubmenu(r)},t.down=function(e){if(n.hasChildren(e)&&!n.isOpen(e))return n.openSubmenu(e);var t=n.getParent(e);if(e===t)return;var r=n.getNextSiblingWhere(t,function(e){return n.hasChildren(e)});r&&r!==t&&(n.closeSubmenu(t),n.openSubmenu(r))},t.left=function(e,t){var r=n.getPreviousSibling(e);e===r&&t&&(r=n.getLastSibling(e));n.setFocus(r)},t.right=function(e,t){var r=n.getNextSibling(e);r===e&&t&&(r=n.getFirstSibling(e));n.setFocus(r)},t.home=function(e,t){if(t)return;var r=n.getFirstMenuItem(e);n.setFocus(r)},t.end=function(e,t){if(t)return;n.setFocus(n.getLastMenuItem(e))},t.char=function(e,t){var r=n.getNextSiblingWhere(e,function(e){return e.textContent.charAt(0).toUpperCase()===t.toUpperCase()});r&&n.setFocus(r)};var n=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}}(r(58))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=c[e.type](e,t);e.classes&&e.classes.forEach(function(e){r.classList.add(e)});e.disabled&&r.setAttribute("aria-disabled","true");return r};var n=l(r(62)),i=l(r(63)),a=l(r(65)),o=l(r(66)),u=l(r(67));function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var c={item:n.build,separator:u.build,checkbox:o.build,radio:a.build,submenu:i.build}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activate=o,t.build=function(e){var t=document.createElement("li");t.setAttribute("role","menuitem"),e.label?t.innerText=e.label:e.markup&&(t.innerHTML=e.markup);var r=o.bind(null,t,e.handler);return t.addEventListener("click",r),i.onElementEnter(t,r),t};var n=a(r(58)),i=a(r(44));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e,t,r){"true"!==e.getAttribute("aria-disabled")&&(n.finishInteraction(e),t&&t(r))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activate=f,t.build=function(e,t){var r=document.createElement("li");r.setAttribute("role","menuitem"),r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded","false"),e.label?r.innerText=e.label:e.markup&&(r.innerHTML=e.markup);var a=null,o=null,u=document.createElement("ul");e.children.map(function(e){return(0,d.default)(e,t)}).forEach(function(e){var t=e.getAttribute("role"),r=e.getAttribute("data-group");if("menuitemcheckbox"===t&&r){var n=r;return o&&o.getAttribute("group-name")===n||((o=(0,s.createFieldset)(n)).setAttribute("group-name",n),u.appendChild(o)),o.appendChild(e)}if(o=null,"menuitemradio"===t){var i=e.getAttribute("data-group");return a&&a.getAttribute("group-name")===i||((a=(0,s.createFieldset)(i)).setAttribute("group-name",i),u.appendChild(a)),a.appendChild(e)}a=null,u.appendChild(e)});var n=f.bind(null,r);r.addEventListener("click",n),c.onElementEnter(r,n),c.onElementEscape(u,function(){l.closeSubmenu(r)});var i=document.createElement("div");return i.classList.add("indicator"),r.appendChild(i),r.appendChild(u),r};var n,l=a(r(58)),c=a(r(44)),i=r(61),d=(n=i)&&n.__esModule?n:{default:n},s=r(64);function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function f(e){"true"!==e.getAttribute("aria-disabled")&&(l.isOpen(e)?l.closeSubmenu(e):l.openSubmenu(e))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.elementIsChildOfElement=function(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1},t.createFieldset=function(e){var t=document.createElement("fieldset"),r=document.createElement("legend");return r.classList.add("legend"),r.id=(0,n.generateGuid)(),r.innerText=e,t.appendChild(r),t},t.createLiveRegion=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"polite",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=document.createElement("span");return t.forEach(function(e){return r.classList.add(e)}),r.id=(0,n.generateGuid)(),r.setAttribute("aria-live",e),r.classList.add("deque-visuallyhidden"),r.innerText="",r.notify=function(e){for(;r.firstChild;)r.removeChild(r.firstChild);var t=document.createElement("div");t.innerHTML=e,r.appendChild(t)},r};var n=r(43)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activate=u,t.build=function(e){var t=document.createElement("li");t.setAttribute("role","menuitemradio");var r=document.createElement("label"),n=document.createElement("input");n.setAttribute("type","radio"),n.name=e.radioGroup,r.innerText=e.label,r.appendChild(n),t.appendChild(r),t.setAttribute("data-group",e.radioGroup),n.setAttribute("tabindex","-1"),n.setAttribute("style","pointer-events: none;"),n.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation()}),n.addEventListener("keypress",function(e){e.preventDefault()});var i=u.bind(null,t);return t.setAttribute("aria-checked","false"),t.addEventListener("click",i),a.onElementEnter(t,i),a.onElementSpace(t,i),t};var o=n(r(58)),a=n(r(44));function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function u(e,t){if(t.stopPropagation(),t.preventDefault(),"true"!==e.getAttribute("aria-disabled")){for(var r='[data-group="'+e.getAttribute("data-group")+'"]',n=document.querySelectorAll(r),i=0;i<n.length;i++){var a=n[i];a!==e?(a.setAttribute("aria-checked","false"),a.querySelector("input").checked=!1):(a.setAttribute("aria-checked","true"),a.querySelector("input").checked=!0)}o.finishInteraction(e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activate=o,t.build=function(e){var t=document.createElement("li"),r=document.createElement("label"),n=document.createElement("input");n.setAttribute("type","checkbox"),r.innerText=e.label,r.appendChild(n),t.appendChild(r),t.setAttribute("role","menuitemcheckbox"),e.groupName&&t.setAttribute("data-group",e.groupName);var i=o.bind(null,t);n.setAttribute("tabindex","-1"),n.setAttribute("style","pointer-events: none;"),n.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation()}),n.addEventListener("keypress",function(e){e.preventDefault()}),t.addEventListener("click",i),a.onElementEnter(t,i),a.onElementSpace(t,i),e.checked?(n.checked=!0,t.setAttribute("aria-checked","true")):t.setAttribute("aria-checked","false");return t};var n=i(r(58)),a=i(r(44));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e,t){if(t.stopPropagation(),t.preventDefault(),"true"!==e.getAttribute("aria-disabled")){var r="true"===e.getAttribute("aria-checked");e.querySelector('[type="checkbox"]').checked=!r,e.setAttribute("aria-checked",!r),n.finishInteraction(e)}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.build=function(e,t){var r=document.createElement("li");return r.setAttribute("role","separator"),r.setAttribute("aria-orientation",t.orientation),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,i){0;null===i&&(i="horizontal");if(isNaN(r)||isNaN(n))throw new Error("min, max, initial values must all be numbers. StepSize must be a number.");if("horizontal"!==i&&"vertical"!==i)throw new Error('orientation must be either "horizontal" or "vertical", or blank (defaults to horizontal)');if("vertical"===i){!0===(a=!!document.documentMode,o=!a&&!!window.StyleMedia,u="undefined"!=typeof InstallTrigger,a||o||u)&&e.setAttribute("orient","vertical")}var a,o,u;var l=e.querySelectorAll("input"),c=l[0],d=l[1],s=e.querySelectorAll("button");s=Array.prototype.slice.call(s);for(var f=0;f<t.length;f++)(0,p.createThumbControl)(s[f],t[f],r,n,200,i);s.forEach(function(e,t){0===t?v(c,e,r,n):1===t&&v(d,e,r,n)})};var p=r(69),o=r(44);function v(t,r,n,i){function a(){var e=t.value;r.textParser&&(e=r.textParser(e)),e=parseFloat(e),!isNaN(e)&&e<=i&&n<=e&&e!=r.getAttribute("aria-valuenow")&&r.setValue(e)}function e(){r.textParser?t.value=r.getAttribute("aria-valuetext"):t.value=r.getAttribute("aria-valuenow")}t.addEventListener("blur",a),(0,o.onElementEnter)(t,function(e){e.preventDefault(),e.stopPropagation(),a()}),r.addEventListener("change",e),e()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createThumbControl=function(f,i,p,v,b,g){if("horizontal"!==g&&"vertical"!==g)throw new Error("Orientation must be either 'horizontal' or 'vertical'");if(isNaN(i.stepSize))throw new Error("Step size must be a number.");if(isNaN(i.initialValue))throw new Error("initial value must be a number.");if(i.initialValue<p||i.initialValue>v)throw new Error("initial value must be between min and max, inclusive.");n(i.initialValue);var e=i.labelFromValue(i.initialValue);e!==i.initialValue&&f.setAttribute("aria-valuetext",e);function h(e){var t,r=i.labelFromValue(e);f.setAttribute("aria-valuenow",e),r!==e?f.setAttribute("aria-valuetext",r):f.removeAttribute("aria-valuetext");try{t=new CustomEvent("change",{bubbles:!0,cancelable:!0})}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("change",!0,!0,{})}f.dispatchEvent(t)}function m(e){var t={low:Math.floor(e/i.stepSize)*i.stepSize,high:Math.ceil(e/i.stepSize)*i.stepSize},r=t.low-e,n=t.high-e;return Math.abs(r)<=Math.abs(n)?t.low:t.high}function n(e){var t=b*((e-p)/(v-p));"horizontal"===g?f.style.left=t+"px":f.style.bottom=t-7+"px"}function t(e){for(var t=f.getAttribute("aria-valuenow"),r=parseFloat(t)+parseFloat(e);r<p;)r++;for(;v<r;)r--;r!==t&&(h(r),n(r))}function r(e){for(var t,r,n,i,a,o,u,l=(r=(t=e).clientX-f.parentElement.getBoundingClientRect().left,n=t.clientY-f.parentElement.getBoundingClientRect().top,{x:r,y:n}),c=l.x,d=l.y,s="horizontal"===g?c-10:b-d;s<0;)s++;for(;b<s;)s--;"horizontal"===g?f.style.left=s+"px":f.style.bottom=s-7+"px",i=v-p,a=s/b,o=parseFloat(f.getAttribute("aria-valuenow")),(u=m(u=p+i*a))!==o&&h(u)}function a(){f.classList.remove("dragging"),document.body.removeEventListener("mousemove",r),document.body.removeEventListener("mouseup",a);var e=f.getAttribute("aria-valuenow");n(parseFloat(e))}o.onElementRight(f,function(e){e.preventDefault(),e.stopPropagation(),t(i.stepSize)}),o.onElementUp(f,function(e){e.preventDefault(),e.stopPropagation(),t(i.stepSize)}),o.onElementLeft(f,function(e){e.preventDefault(),e.stopPropagation(),t(-i.stepSize)}),o.onElementDown(f,function(e){e.preventDefault(),e.stopPropagation(),t(-i.stepSize)}),o.onElementPageUp(f,function(e){e.preventDefault(),e.stopPropagation(),t(10*i.stepSize)}),o.onElementPageDown(f,function(e){e.preventDefault(),e.stopPropagation(),t(-10*i.stepSize)}),f.addEventListener("mousedown",function(){f.classList.add("dragging"),document.body.addEventListener("mousemove",r),document.body.addEventListener("mouseup",a)}),n(i.initialValue),f.setValue=function(e){var t=m(e);h(t),n(t)}};var o=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}}(r(44))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){if(!t)throw new Error("data must be provided");if(!(0,s.validateData)(t))throw new Error('data format invalid. Must either be an array of strings or an array of objects with a "label" field.');var r=document.createElement("div");r.classList.add("deque-predictive-text-combobox");var u=document.createElement("input"),e=(0,p.generateGuid)(),n=null,a=null;u.setAttribute("autocomplete","off"),u.setAttribute("type","text"),u.setAttribute("role","combobox"),u.setAttribute("aria-expanded","false"),u.setAttribute("aria-autocomplete","list"),u.setAttribute("aria-owns",e);var l=document.createElement("ul");l.id=e,l.classList.add("deque-predictive-text-hints"),l.setAttribute("role","listbox");var c=document.createElement("p");c.classList.add("visuallyhidden");var i=void 0;function o(){var e=l.querySelector(".deque-predictive-text-hint.highlight");if(e){for(var t=null,r=l.querySelectorAll("li"),n=r.length,i=0;i<n;i++)r[i].innerText==e.innerText&&(a=t="Option "+(i+1));h(c,t+" "+e.innerText)}}function d(){var e=0<u.value.length?function(e,t){if(0===t.length)return[];return e.filter(function(e){return 0===e.toLowerCase().indexOf(t.toLowerCase())})}(t,u.value):t;!function(t,e){if(t.innerHTML="",e.map(function(e){return(0,f.createHint)(t,e)}).forEach(function(e){return t.appendChild(e)}),t.querySelector("li"))return!0}(l,e)?l.className="deque-predictive-text-hints collapsed":(u.setAttribute("aria-expanded","true"),l.className="deque-predictive-text-hints expanded",function(){i&&(clearTimeout(i),i=null);var o=l.children;if(0===o.length)return;i=setTimeout(function(){if(0!=o.length){var e=1===o.length?"is":"are",t=1===o.length?"option":"options",r="There "+e+" currently "+o.length+" "+t+" starting with "+u.value.split("").join("")+". Press down arrow to select an option",n=window.navigator.userAgent,i=n.indexOf("Trident/");0<i&&(r="There "+e+" currently "+o.length+" "+t+" starting with "+u.value.split("").join("")+". Press up arrow and press down arrow two times to select an option");var a=l.querySelector(".deque-predictive-text-highlight");a&&(r+=" Press down arrow for options, or Press enter to select "+a.innerText),h(c,r)}},1200)}())}return u.addEventListener("input",function(e){0<u.value.length&&""!=e.currentTarget.value?d():(u.setAttribute("aria-expanded","false"),l.className+=" collapsed",b.clearList(l),u.blur(),u.focus(),u.select())}),v.onElementSpace(u,function(e){e.ctrlKey&&e.altKey&&(e.preventDefault(),e.stopPropagation(),d())}),v.onElementUp(u,function(e){if(e.preventDefault(),e.stopPropagation(),0===l.children.length)return d();b.highlightPrev(l);var t=l.querySelector('[aria-selected="true"]');t&&(n=t.innerHTML,u.setAttribute("aria-activedescendant",t.id)),o()}),v.onElementDown(u,function(e){if(e.preventDefault(),e.stopPropagation(),0===l.children.length)return d();b.highlightNext(l);var t=l.querySelector('[aria-selected="true"]');t&&(n=t.innerHTML,u.setAttribute("aria-activedescendant",t.id)),o()}),v.onElementEnter(u,function(e){e.preventDefault(),e.stopPropagation(),b.confirmValue(u,l),u.value==n&&h(c,a+" "+u.value+" selected"),u.setAttribute("aria-expanded","false"),l.className+=" collapsed",b.clearList(l),clearTimeout(i),u.focus(),u.select(),setTimeout(function(){u.selectionStart=u.selectionEnd=1e4},0)}),document.body.addEventListener("click",function(e){var t=e.target;(0,g.elementIsChildOfElement)(t,r)||(b.clearList(l),u.setAttribute("aria-expanded","false"),l.className="deque-predictive-text-hints collapsed")}),v.onElementEscape(u,function(e){e.preventDefault(),e.stopPropagation(),0<l.children.length?(b.clearList(l),u.setAttribute("aria-expanded","false"),l.className="deque-predictive-text-hints collapsed",clearTimeout(i)):(u.value="",n=null)}),l.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),b.confirmValue(u,l),b.clearList(l),u.setAttribute("aria-expanded","false"),l.className="deque-predictive-text-hints collapsed",u.focus(),n==u.value&&h(c,a+" "+u.value+" selected"),clearTimeout(i)}),c.classList.add("live-update-region"),c.setAttribute("aria-live","polite"),r.appendChild(u),r.appendChild(l),document.body.appendChild(c),r.getInputElement=function(){return u},r};var s=r(71),f=r(72),p=r(43),v=n(r(44)),b=n(r(73)),g=r(64);function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var i=void 0;function h(e,t){i&&(clearTimeout(i),i=null),e.innerText=t,i=setTimeout(function(){e.innerText=""},6e3)}},function(e,t){"use strict";function r(e){return e&&"string"==typeof e}function n(e){return e&&"string"==typeof e.label}Object.defineProperty(t,"__esModule",{value:!0}),t.validateData=function(e){if(!Array.isArray(e))return!1;if(0===e.length)return!1;return e.every(r)||e.every(n)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createHint=function(e,t){if(t.label)return(n=a(e,(r=t).label)).classList.add("complex_item"),n.$item=r,n;var r,n;return a(e,t)};var n=r(73),i=r(43);function a(e,t){var r=document.createElement("li");return r.id=(0,i.generateGuid)(),r.innerText=t,r.classList.add("deque-predictive-text-hint"),r.setAttribute("role","option"),r.addEventListener("mouseover",function(){(0,n.setHighlight)(e,r)}),r}},function(e,t){"use strict";function i(e,t){for(var r=e.querySelectorAll("li"),n=0;n<r.length;n++)t===r[n]?(r[n].classList.add("highlight"),r[n].setAttribute("aria-selected","true")):(r[n].classList.remove("highlight"),r[n].setAttribute("aria-selected","false"))}Object.defineProperty(t,"__esModule",{value:!0}),t.setHighlight=i,t.highlightNext=function(e){if(0===e.children.length)return;var t=void 0,r=e.querySelector(".highlight");if(!r)return t=e.querySelector("li"),i(e,t);(t=r.nextElementSibling)||(t=e.querySelector("li"));i(e,t)},t.highlightPrev=function(e){if(0===e.children.length)return;var t=void 0,r=e.querySelector(".highlight");if(!r)return t=e.querySelector("li"),i(e,t);if(!(t=r.previousElementSibling)){var n=e.querySelectorAll("li");t=n[n.length-1]}i(e,t)},t.clearList=function(e){e&&(e.innerHTML="")},t.confirmValue=function(e,t){var r=t.querySelector(".highlight");r&&(e.value=r.innerText)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var g=r(75),h=r(76),m=r(64);function n(e,t){e.querySelector("[role=tablist]").classList.add("deque-tabpanel-tablist");var r=e.querySelector(".deque-tabpanel-button-bar");r&&!r.classList.contains("hidden")&&r.click();var n=function(e){for(var t=e.querySelectorAll("[role=tab]"),r=0;r<t.length;r++)t[r].classList.add("deque-tabpanel-tab"),0==r?(t[r].setAttribute("aria-selected","true"),t[r].setAttribute("tabindex","0")):(t[r].setAttribute("aria-selected","false"),t[r].setAttribute("tabindex","-1"));return t}(e);var i,a,o,u,l,c,d=function(e){for(var t=e.querySelectorAll("[role=tabpanel]"),r=0;r<t.length;r++)t[r].classList.add("deque-tabpanel-tabpanel"),0!=r&&t[r].classList.add("deque-hidden");return t}(e),s=(0,m.createLiveRegion)();function f(e,t,r){for(var n=e.getAttribute("aria-controls"),i=0;i<r.length;i++)r[i].id===n?r[i].classList.remove("deque-hidden"):r[i].classList.add("deque-hidden");for(var a=0;a<t.length;a++)t[a].getAttribute("aria-controls")===n?(t[a].setAttribute("tabindex","0"),t[a].setAttribute("aria-selected","true")):(t[a].setAttribute("tabindex","-1"),t[a].setAttribute("aria-selected","false"))}function p(e){for(var t=0;t<e.length;t++)if("0"===e[t].getAttribute("tabindex"))return e[t]}function v(e){return e.previousElementSibling||n[n.length-1]}function b(e){return e.nextElementSibling||n[0]}document.body.appendChild(s),t.autoplay&&(a={onPlay:function(){},onPause:function(){},onNext:function(){var e=b(p(n));f(e,n,d),s.notify(e.innerText+"tab")},onPrevious:function(){var e=v(p(n));f(e,n,d),s.notify(e.innerText+"tab")}},i=(0,h.activateCarouselControls)(e,s,a,t.autoplay||3e3)),o=n,u=d,c={onSpace:function(e){for(var t=e.getAttribute("aria-controls"),r=0;r<u.length;r++)u[r].id===t?u[r].classList.remove("deque-hidden"):u[r].classList.add("deque-hidden")},onClick:function(e){for(var t=e.getAttribute("aria-controls"),r=0;r<u.length;r++)u[r].id===t?u[r].classList.remove("deque-hidden"):u[r].classList.add("deque-hidden")},select:f,useAriaSelected:!0,autoselect:(l=t).autoselect},l.vertical?(c.onUp=function(e){return i&&i.pause(),v(e)},c.onDown=function(e){return i&&i.pause(),b(e)}):(c.onLeft=function(e){return i&&i.pause(),v(e)},c.onRight=function(e){return i&&i.pause(),b(e)}),(0,g.createSingleTabstopStructure)(o,u,c)}!function(){for(var e,t=document.querySelectorAll(".deque-tabpanel"),r=0;r<t.length;r++)e="carousel"==t[r].id?{autoselect:!0,autoplay:3e3}:{autoselect:!0,autoplay:!1},n(t[r],e)}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSingleTabstopStructure=function(e,n,i){var a=Array.prototype.slice.call(e);a.forEach(function(r){r.addEventListener("focus",function(){i.onFocus&&i.onFocus(r)}),i.select||(i.select=function(){}),i.onClick&&r.addEventListener("click",function(){i.onClick(r),i.select(r,a,n)}),i.onSpace&&o.onElementSpace(r,function(e){e.preventDefault(),e.stopPropagation(),i.onSpace(r),i.select(r,a,n)}),i.onLeft&&o.onElementLeft(r,function(e){e.preventDefault(),e.stopPropagation();var t=i.onLeft(r);t&&(t.focus(),i.autoselect&&i.select(t,a,n))}),i.onRight&&o.onElementRight(r,function(e){e.preventDefault(),e.stopPropagation();var t=i.onRight(r);t&&(t.focus(),i.autoselect&&i.select(t,a,n))}),i.onUp&&o.onElementUp(r,function(e){e.preventDefault(),e.stopPropagation();var t=i.onUp(r);t&&(t.focus(),i.autoselect&&i.select(t,a,n))}),i.onDown&&o.onElementDown(r,function(e){e.preventDefault(),e.stopPropagation();var t=i.onDown(r);t&&(t.focus(),i.autoselect&&i.select(t,a,n))}),i.onHome&&o.onElementHome(r,function(e){e.preventDefault(),e.stopPropagation();var t=i.onHome(r);t&&(t.focus(),i.autoselect&&i.select(t,a,n))}),i.onEnd&&o.onElementEnd(r,function(e){e.preventDefault(),e.stopPropagation();var t=i.onEnd(r);t&&(t.focus(),i.autoselect&&i.select(t,a,n))}),i.onPageUp&&o.onElementPageUp(r,function(e){e.preventDefault(),e.stopPropagation();var t=i.onPageUp(r);t&&(t.focus(),i.autoselect&&i.select(t,a,n))}),i.onPageDown&&o.onElementPageDown(r,function(e){e.preventDefault(),e.stopPropagation();var t=i.onPageDown(r);t&&(t.focus(),i.autoselect&&i.select(t,a,n))}),i.onCharacter&&o.onElementCharacter(r,function(e){e.preventDefault(),e.stopPropagation();var t=i.onCharacter(r);t&&(t.focus(),i.autoselect&&i.select(t,a,n))})})};var o=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}}(r(44))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildCarouselControls=function(e){var t=e.onPlay,r=e.onPause,n=e.onNext,i=e.onPrevious,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:2e3,o=document.createElement("div");o.className="output-wrap";var u=y("prev",["prev"]),l=y("play",["play","hidden"]),c=y("pause",["pause"]),d=y("next",["next"]),s=(0,m.createLiveRegion)();document.body.appendChild(s);var f=void 0,p=!1,v=function(){f&&b(),f=setInterval(g,a),l.classList.add("hidden"),c.classList.remove("hidden"),c.focus(),t&&t(),s.notify("Carousel playing")},b=function(){clearInterval(f),f=null,l.classList.remove("hidden"),p&&l.focus(),c.classList.add("hidden"),r&&r(),p=!0,s.notify("Carousel paused")},g=function(){n&&n()},h=function(){i&&i()};return d.addEventListener("click",g),u.addEventListener("click",h),l.addEventListener("click",v),c.addEventListener("click",b),o.appendChild(u),o.appendChild(l),o.appendChild(c),o.appendChild(d),v(),o.start=v,o.pause=b,o.prev=h,o.next=g,o},t.activateCarouselControls=function(e,t,r){for(var n,i,a,o,u=r.onPlay,l=r.onPause,c=r.onNext,d=r.onPrevious,s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:2e3,f=e.querySelector(".deque-tabpanel-button-bar"),p=f.querySelectorAll(".deque-button"),v=0;v<p.length;v++)"prevButton"==p[v].id?n=p[v]:"playButton"==p[v].id?i=p[v]:"pauseButton"==p[v].id?a=p[v]:"nextButton"==p[v].id&&(o=p[v]);i.classList.add("deque-hidden"),i.classList.remove("deque-button");var b=!1,g=function(){b&&h(),b=setInterval(m,s),i.classList.add("deque-hidden"),i.classList.remove("deque-button"),a.classList.remove("deque-hidden"),a.classList.add("deque-button"),a.focus(),u&&u(),t.notify("Carousel playing")},h=function(){clearInterval(b),b=null,i.classList.remove("deque-hidden"),i.classList.add("deque-button"),i.focus(),a.classList.add("deque-hidden"),a.classList.remove("deque-button"),l&&l(),t.notify("Carousel paused")},m=function(){c&&c()},y=function(){d&&d()};return o.addEventListener("click",m),n.addEventListener("click",y),i.addEventListener("click",g),a.addEventListener("click",h),g(),f.start=g,f.pause=h,f.prev=y,f.next=m,f};var m=r(64);function y(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=document.createElement("button");return r.innerText=e,t.forEach(function(e){return r.classList.add(e)}),r}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(r,e){var t=e.bounded;if(void 0!==t&&t){var n=r.getAttribute("aria-valuemin"),i=r.getAttribute("aria-valuemax");r.setAttribute("value-now",n),r.setAttribute("max",i),r.setValue=function(e){e<n&&(e=n),i<e&&(e=i);var t=parseInt(e/i*100);r.innerText=t+"%",r.setAttribute("aria-valuenow",e),r.setAttribute("value-now",e),r.setAttribute("value",e)},r.setValue(n)}return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n,i=r(79),a=r(80),o=(n=a)&&n.__esModule?n:{default:n},A=r(44);function u(e){return"DETAILS"==e.tagName&&(0,i.isDetailsSupported)()&&!(0,o.default)()?function(e){var t=e.querySelector(".deque-expander-summary");if(t.hasAttribute("aria-expanded"))return!1;t.setAttribute("tabindex","0"),t.setAttribute("aria-expanded","false"),e.classList.add("deque-expander"),e.hasAttribute("open")?(t.setAttribute("aria-expanded","true"),e.setAttribute("open")):(t.setAttribute("aria-expanded","false"),e.removeAttribute("open"));function r(){e.hasAttribute("open")?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false")}t.setAttribute("role","button"),t.setAttribute("aria-expanded","false"),t.addEventListener("click",function(){setTimeout(r)})}(e):l(e)}function l(e){var t=e.tagName,i=e.querySelector(".deque-expander-summary");if(i.hasAttribute("aria-expanded"))return!1;if("DETAILS"==t){for(var r,n=document.createElement("div"),a=[],o=[],u=0,l=i.attributes,c=l.length;u<c;u++)r=l[u],a.push(r.nodeName),o.push(r.nodeValue);for(var d=0;d<a.length;d++)n.setAttribute(a[d],o[d]);n.classList.add("deque-expander-summary"),n.innerHTML=i.innerHTML,i.parentNode.replaceChild(n,i);for(var s,f=document.createElement("div"),p=[],v=[],b=0,g=e.attributes,h=g.length;b<h;b++)s=g[b],p.push(s.nodeName),v.push(s.nodeValue);for(var m=0;m<p.length;m++)f.setAttribute(p[m],v[m]);f.classList.add("deque-expander"),f.innerHTML=e.innerHTML,e.parentNode.replaceChild(f,e),i=(e=f).querySelector(".deque-expander-summary")}i.setAttribute("tabindex","0"),i.setAttribute("aria-expanded","false"),i.setAttribute("role","button");var y=e.querySelector(".deque-expander-content");function E(e){var t=window.navigator.userAgent,r=t.indexOf("Trident/"),n=t.indexOf("Edge");(0<r||0<n)&&(window.onkeydown=function(e){return!(32==e.keyCode)}),e.stopPropagation(),e.preventDefault(),y.classList.toggle("deque-hidden"),y.classList.contains("deque-hidden")?i.setAttribute("aria-expanded","false"):i.setAttribute("aria-expanded","true")}y.classList.add("deque-hidden"),(0,A.onElementEnter)(i,E),(0,A.onElementSpace)(i,E),i.addEventListener("click",E),i.addEventListener("keyup",function(e){e.keyCode})}!function(){for(var e=document.querySelectorAll(".deque-expander"),t=0;t<e.length;t++)e[t].contains(e[t].querySelector("summary"))&&e[t].contains(e[t].querySelector(".deque-expander-summary"))||u(e[t])}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDetailsSupported=function(){var e,t=document.createElement("details");if(!("open"in t))return!1;return document.body.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight,document.body.removeChild(t),e}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(u,e){u.classList.add("deque"),u.setAttribute("novalidate","true");var v=u.getAttribute("data-feedback-type")||h.TOP,b=(0,g.createFeedbackArea)();u.insertBefore(b,u.children[0]);var t=(0,c.queryAll)('[type="password"]',u);e.passwordEvaluator&&0<t.length&&(0,f.wireupPasswordEvaluator)(t,e.passwordEvaluator,function(e,t,r){b.logNotification(e,t,r)});var r=(0,c.queryAll)("[maxlength]",u);0<r.length&&(0,p.wireupMaxLengthNotifications)(r,function(e,t,r){b.logNotification(e,t,r)});var l=n({},e,a);u.addEventListener("submit",function(e){var t=(0,c.queryAll)("[data-validate]",u);t.forEach(function(e){var t=(0,d.getValidationFunction)(l,e);e.classList.remove("invalid"),e.removeAttribute("aria-invalid"),t()||(e.classList.add("invalid"),e.setAttribute("aria-invalid","true"))});var r,n=t.every(function(e){return!e.classList.contains("invalid")});if(n)!function(){b.clear(),b.logNotification("Form submission successful","successReport",["success"]);for(var e=document.getElementsByClassName("errorExplanationOuterWrapper"),t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}(),m(u);else{e.preventDefault(),e.stopPropagation();var i=t.filter(function(e){return e.classList.contains("invalid")}),a=(0,d.getValidationErrors)(i,v===h.INLINE);if(function(e){if(b.clear(),v===h.TOP){var t="is",r="";1<e.length&&(t="are",r="s"),b.logNotification("<h4><strong>Error:</strong> There "+t+" "+e.length+" problem"+r+" to fix in this form</h4>"),e.forEach(function(e){return b.logNotification(e,null,["error"])});for(var n=document.getElementsByTagName("input"),i=0;i<n.length;++i){var a=n[i];if(a.getAttribute("aria-invalid")){var o=a.getAttribute("data-validate-failed-require"),u=a.getAttribute("data-validate-failed-pattern"),l=a.getAttribute("aria-describedby"),c=a.id;if(o||u){var d="errorExplanation-"+c,s=l+" "+d;a.setAttribute("aria-describedby",s),o=o?'<span class="errorExplanation required">'+o+"</span>":"",u=u?'<span class="errorExplanation pattern">'+u+"</span>":"";var f=document.createElement("span");f.className="errorExplanationOuterWrapper",f.innerHTML='<span class="errorExplanationWrapper icon message" id="'+d+'"><span class="deque glyph exclamation-triangle" aria-hidden="true"></span> '+o+" "+u+"</span>",a.parentNode.insertBefore(f,a.nextSibling)}}}}else if(v===h.INLINE){n=document.getElementsByTagName("input");for(var p=0;i<n.length;p++)(a=n[i]).getAttribute("aria-invalid")&&((f=document.createElement("span")).className="errorExplanationOuterWrapper",f.innerHTML='<span class="errorExplanationWrapper icon"><span class="fa fa-exclamation-triangle" aria-hidden="true"></span></span>',a.parentNode.insertBefore(f,a.nextSibling))}}(a),v===h.TOP){var o=b.querySelector("h4");o.setAttribute("tabindex","-1"),o.focus()}else m(u),r=u,(0,c.queryAll)("[data-tooltip]",r).forEach(function(e){e.cancelTooltip=(0,s.default)(e)}),u.querySelector(".invalid").focus()}})};var i,c=r(37),a=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}}(r(82)),d=r(83),o=r(42),s=(i=o)&&i.__esModule?i:{default:i},f=r(84),p=r(87),g=r(89);var h={TOP:"top",INLINE:"inline"};function m(e){(0,c.queryAll)("[data-tooltip]",e).forEach(function(e){e.cancelTooltip&&e.cancelTooltip()})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.required=function(e){var t=!!e.value,r=e.getAttribute("data-validate-errormessage-required")||"failed to provide a required value.";t?e.removeAttribute("data-validate-failed-require"):e.setAttribute("data-validate-failed-require",r);return t},t.maxChars=function(e){var t=e.getAttribute("maxlength");if(!t)throw new Error("The maxChars validator needs a maxlength attribute to test against.");var r=e.getAttribute("data-validate-errormessage-maxchars")||"Value length exceeds threshold of "+t,n=e.value.length<=t;n?e.removeAttribute("data-validate-failed-max_chars"):e.setAttribute("data-validate-failed-max_chars",r);return n},t.isEmail=function(e){var t=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.value),r=e.getAttribute("data-validate-errormessage-is_email")||"value must be a valid email address";t?e.removeAttribute("data-validate-failed-is_email"):e.setAttribute("data-validate-failed-is_email",r);return t},t.pattern=function(e){var t=e.getAttribute("pattern");if(!t)throw new Error("The pattern validator requires a pattern attribute to test against.");var r=new RegExp(t).test(e.value),n=e.getAttribute("data-validate-errormessage-pattern")||"Value did not match pattern <"+t+">";r?e.removeAttribute("data-validate-failed-pattern"):e.setAttribute("data-validate-failed-pattern",n);return r},t.isNumeric=function(e){var t=!isNaN(parseFloat(e.value)),r=e.getAttribute("data-validate-errormessage-is_numeric")||"input is not a numeric value";t?e.removeAttribute("data-validate-failed-is_numeric"):e.setAttribute("data-validate-failed-is_numeric",r);return t},t.passwordStrength=function(e){var t=parseInt(e.getAttribute("data-validate-password-strength"));if(!t||t<0||4<t||isNaN(t))throw new Error('Using the password strength validator requires you to specify "data-validate-password-strenght" with a value between 0-4');var r=e.getAttribute("aria-describedby");if(!r)throw new Error("Your input should be `aria-describedby` a password quality feedback component. If not, did you pass in a `passwordEvaluator` function into your config?");var n=document.getElementById(r);if(!n)throw new Error("Your input should be `aria-describedby` a password quality feedback component. If not, did you pass in a `passwordEvaluator` function into your config?");var i=parseInt(n.getAttribute("data-password-quality"));if(isNaN(i)||i<0||4<i)throw new Error("Unable to read password quality from quality meter.");var a=e.getAttribute("data-validate-errormessage-password_strength")||"Your password quality is "+(i+1)+"/5 but needs to be at least "+(t+1)+"/5",o=t<=i;o||e.setAttribute("data-validate-failed-password_strength",a);return o}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getValidationFunction=function(t,r){return r.getAttribute("data-validate").split(" ").map(function(e){if(t[e])return t[e].bind(null,r);throw new Error("no validator defined for "+e)}).reduce(function(e,t){return e.bind(null,t)},function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.every(function(e){return e()})})},t.getValidationErrors=function(e,a){return e.map(function(e){var t=e.id||e.name,r=document.querySelector("[for="+t+"]");r=r?r.innerText:"An input";var n=(0,o.toArray)(e.attributes).filter(function(e){return 0===e.name.indexOf("data-validate-failed-")}).map(function(e){return"<strong>"+r+" </strong>: "+e.value});if(a){var i=n[0].split("</strong>: ")[1];e.setAttribute("data-tooltip",i)}return n}).reduce(function(e,t){return e.concat(t)},[])};var o=r(38)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wireupPasswordEvaluator=function(e,n){var a=["unacceptable","poor","ok","good","great"],o=void 0;n&&"function"==typeof n&&e.forEach(function(t){var r=(0,i.createPasswordEvaluation)();t.parentElement.insertBefore(r,t),t.parentElement.insertBefore(t,r),(0,l.noClobber)(t,"aria-describedby",r.id),t.addEventListener("input",function(){var e=n(t.value);r.update(e,a),function(r,n,i){o&&(clearTimeout(o),o=null);o=setTimeout(function(){var e=(0,u.getLabel)(r),t=a[n];i("The password you've entered for "+e+" is "+t+".")},2e3)}(t,e,r.notify)});var e=n(t.value);r.update(e,a)})};var i=r(85),u=r(86),l=r(45)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createPasswordEvaluation=function(){var r=document.createElement("div");r.id=(0,l.generateGuid)(),r.classList.add("passwordEvaluation");var e=d(0),t=d(1),n=d(2),i=d(3),a=d(4);r.appendChild(e),r.appendChild(t),r.appendChild(n),r.appendChild(i),r.appendChild(a);var o,u=(0,c.createLiveRegion)("polite");return r.update=function(e,t){r.setAttribute("data-password-quality",e),r.setAttribute("aria-label","Password quality is "+t[e])},r.setAttribute("aria-describedby",u.id),document.body.appendChild(u),r.notify=function(e){u.innerText=e,o&&clearInterval(o),o=setTimeout(function(){u.innerText="",o=null},5e3)},r};var l=r(43),c=r(64);function d(e){var t=document.createElement("div");t.classList.add("password_level"),t.classList.add("level"+e);var r=document.createElement("img");return r.setAttribute("alt",""),r.setAttribute("role","presentation"),t.appendChild(r),t}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLabel=function(e){if(e.hasAttribute("aria-label"))return e.getAttribute("aria-label");var t=e.id||e.name;if(!t)return"unlabeled input";var r=document.querySelector("[for="+t+"]"),n=void 0;n=r?r.innerText:"unlabeled input";return n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wireupMaxLengthNotifications=function(e){var t=void 0;e.forEach(function(r){var n=parseInt(r.getAttribute("maxlength")),i=(0,a.createCharsRemaining)(r);function e(){n<e&&(r.value=r.value.substr(0,n-1));var e=r.value.length;i.update(e,n),function(i,a){t&&(clearTimeout(t),t=null);t=setTimeout(function(){var e=(0,o.getLabel)(i),t=i.value.length,r=parseInt(i.getAttribute("maxlength")),n=r-t;a(e+": You've used "+t+" out of "+r+" characters and have "+n+" left.")},500)}(r,i.notify)}r.setAttribute("aria-describedby",i.id),r.addEventListener("input",function(e){var t=r.value.length;n<=t&&(e.preventDefault(),i.notify((0,o.getLabel)(r)+": You've used all "+n+" characters available to this input.")),i.update(t,n)}),r.addEventListener("keyup",e),r.addEventListener("paste",e),r.parentElement.insertBefore(i,r),r.parentElement.insertBefore(r,i)})};var a=r(88),o=r(86)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createCharsRemaining=function(){var e=document.createElement("div");e.id=(0,i.generateGuid)();var n=document.createElement("span");e.appendChild(n),e.classList.add("chars-remaining"),e.update=function(e,t){var r="("+e+"/"+t+")";n.innerText!==r&&(n.innerText=r)};var t=document.createElement("span");return t.id=(0,i.generateGuid)(),t.setAttribute("aria-live","polite"),t.setAttribute("role","log"),t.setAttribute("aria-atomic",!1),t.setAttribute("aria-relevant","additions"),t.classList.add("visuallyhidden"),e.setAttribute("aria-describedby",t.id),document.body.appendChild(t),e.notify=function(e){t.innerText=e},e};var i=r(43)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createFeedbackArea=function(){var i=document.createElement("div");return i.classList.add("feedback-holder"),i.setAttribute("role","alert"),i.clear=function(){i.innerHTML=""},i.clearID=function(e){if(e){var t=i.querySelector("#"+e);t&&i.removeChild(t)}},i.logNotification=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[];i.clearID(t);var n=document.createElement("p");n.innerHTML=e,r.forEach(function(e){return n.classList.add(e)}),i.appendChild(n)},i}},function(e,t){"use strict";function r(e){var a=e.querySelector("table"),n=a.querySelector("thead").querySelector("tr"),t=n.querySelectorAll("th"),r=a.querySelector("tbody"),o=r.querySelectorAll("tr"),i=a.querySelector("caption"),u=i.innerText,l=e.querySelector("#liveRegion"),c=l.getAttribute("readCaptions");null===c&&(c=!1),l.classList.add("deque-visuallyhidden"),l.notify=function(e){l.innerHTML=e};var d=null,s=-1;function f(){var e=null===d?null:n.children[d];return e?e.innerText:null}function p(){return 0<s?"ascending":"descending"}function v(){return null===d?"unsorted":"sorted by "+f()+", "+p()}function b(){var e;e=u+", "+v(),i.innerText=e,function(){for(var e=0;e<n.children.length;e++){var t=n.children[e];if(null!==d&&e===Math.abs(d)){var r=p();t.setAttribute("aria-sort",r)}else t.removeAttribute("aria-sort")}}(),function(){if(c){var e="Table "+u+" is now "+v();l.notify(e)}}()}if(!(o=Array.prototype.slice.call(o)).every(function(e){return e.children.length===t.length}))throw new Error("Each row must be the same length as the headers row.");(t=Array.prototype.slice.call(t)).forEach(function(e,r){var t,n;t=function(e){var t,i;e.preventDefault(),t=o,o=d===(i=r)?(s=-s,t.reverse()):(d=i,t.sort(function(e,t){e=Array.prototype.slice.call(e.children),t=Array.prototype.slice.call(t.children);var r=e[i].innerText,n=t[i].innerText;return isNaN(parseInt(r))||isNaN(parseInt(n))?r<n?-1:n<r?1:0:parseInt(r)<parseInt(n)?-1:parseInt(r)>parseInt(n)?1:0})),a.renderData(o)},(n=e.querySelector("button")).setAttribute("tabindex","0"),n.addEventListener("click",t)}),a.renderData=function(e){r.innerHTML=e.map(function(e){return'<tr role="row">\n    '+(e=Array.prototype.slice.call(e.children)).map(function(e,t){return 0===t?'<th scope="row" role="rowheader">'+e.innerText+"</th>":'<td role="gridcell">'+e.innerText+"</td>"}).join("")+"</tr>"}).join(""),b()},a.renderData(o);var g=a.querySelector(".sortableColumnLabel");g&&g.click()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,function(){for(var e=document.querySelectorAll(".deque-table-sortable-group"),t=0;t<e.length;t++)r(e[t])}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeTableResponsive=function(r){var e,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:300;function i(){window.innerWidth<t?function(){if(!a){var e=document.activeElement.id;if(a=c(r,n),o.appendChild(a),o.removeChild(r),l("The data for "+f(r)+" is now being rendered as a list."),e){var t=document.querySelector("#"+e);t&&t.focus()}}}():function(){if(a){var e=document.activeElement.id;if(o.removeChild(a),o.appendChild(r),a=null,l("The data for "+f(r)+" is now being rendered as a table."),e){var t=document.querySelector("#"+e);t&&t.focus()}}}()}var a=void 0,o=document.createElement("div");o.classList.add("responsive-table-wrapper");var u=document.createElement("div");function l(e){u.innerText=e}return u.setAttribute("role","alert"),u.setAttribute("aria-live","polite"),u.classList.add("visuallyhidden"),o.appendChild(u),r.parentElement.insertBefore(o,r),o.appendChild(r),window.addEventListener("resize",function(){e||(e=setTimeout(function(){e=null,i()},66))}),i(),r},t.collapseTableToList=c;var s=r(37);function f(e){var t=e.querySelector("caption");return t?t.innerText:e.getAttribute("aria-label")||"unnamed table"}function c(e,t){var r=t.labelColumns,u=void 0===r?[]:r,n=t.labelFunction,l=void 0===n?function(){return"Row:"}:n,i=document.createElement("div");i.classList.add("deque"),i.classList.add("responsive-table-list-holder");var a=document.createElement("h3");a.innerText=f(e),i.appendChild(a);var c=(0,s.queryAll)("th",e),o=(0,s.queryAll)("tbody tr",e),d=document.createElement("ul");return d.classList.add("collapsed-table"),d.setAttribute("data-num-columns",c.length),o.reduce(function(r,t){var n=[];u.forEach(function(e){n.push(t.children[e])});var e=l.apply(null,n),a=document.createElement("li"),i=document.createElement("span");i.classList.add("collapsed-table-header"),i.innerHTML=e.outerHTML?e.outerHTML:e,a.appendChild(i);var o=document.createElement("ul");return o.classList.add("collapsed-table-content"),(0,s.queryAll)("th, td",t).forEach(function(e,i){var t=[];-1===u.indexOf(i)&&t.push({cell:e,label:c[i].innerHTML}),0<t.length&&t.forEach(function(e){var t=document.createElement("li");t.setAttribute("data-table-column-index",i);var r=document.createElement("span");r.innerHTML=e.label,t.appendChild(r);var n=document.createElement("div");n.innerHTML=e.cell.innerHTML,t.appendChild(n),o.appendChild(t)}),r.appendChild(a)}),0<o.children.length&&a.appendChild(o),r},d),i.appendChild(d),i}},function(e,t){"use strict";function i(e,t,r){var n,i,a,o=e.getAttribute("min"),u=r,l=e.getAttribute("max"),c=e.getAttribute("step"),d=e.getAttribute("aria-orientation");if(null===d&&(d="horizontal"),isNaN(o)||isNaN(l)||isNaN(u)||isNaN(c))throw new Error("min, max, initial values must all be numbers. StepSize must be a number.");if("horizontal"!==d&&"vertical"!==d)throw new Error('orientation must be either "horizontal" or "vertical", or blank (defaults to horizontal)');if("vertical"===d){!0===(n=!!document.documentMode,i=!n&&!!window.StyleMedia,a="undefined"!=typeof InstallTrigger,n||i||a)&&e.setAttribute("orient","vertical")}if(t){t.innerText=e.value;var s=function(){e.setAttribute("aria-valuetext",e.value),t.innerText=e.value};e.addEventListener("change",s,!1),e.addEventListener("input",s,!1)}e.setAttribute("aria-valuetext",e.value)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,function(){for(var e=document.querySelectorAll(".deque-slider"),t=0;t<e.length;t++){var r=e[t].querySelector(".deque-slider-widget"),n=e[t].querySelector("span");i(r,n,n.innerText)}}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n,i=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}}(r(94)),a=r(95),o=(n=a)&&n.__esModule?n:{default:n};function u(e){e.setAttribute("aria-expanded","false"),e.addEventListener("click",function(){return i.isOpen(e)?(i.closeNode(e),!0):(i.openNode(e),!1)})}function l(e){for(var t=e.querySelector("#navigationRoot"),r=e.querySelectorAll("button"),n=0;n<r.length;n++)u(r[n]);(0,o.default)(t)}!function(){for(var e=document.querySelectorAll(".deque-hierarchical-menu-group"),t=0;t<e.length;t++)l(e[t])}()},function(e,t){"use strict";function d(e,t,r){var n=void 0,i=e.nodeName.toUpperCase(),a=e.parentNode;if(9===e.nodeType)return!0;if(null===(n=window.getComputedStyle(e,null)))return!1;var o="none"===n.getPropertyValue("display"),u="STYLE"===i.toUpperCase()||"SCRIPT"===i.toUpperCase(),l=t&&"true"===e.getAttribute("aria-hidden"),c=!r&&"hidden"===n.getPropertyValue("visibility");return!(o||u||l||c)&&(!!a&&d(a,t,!0))}Object.defineProperty(t,"__esModule",{value:!0}),t.isOpen=function(e){return"true"===e.getAttribute("aria-expanded")},t.closeNode=function(e){return e.setAttribute("aria-expanded","false"),e},t.openNode=function(e){return e.setAttribute("aria-expanded","true"),e},t.setFocus=function(e,t){e.forEach(function(e){e===t?(e.tabIndex=0,e.focus()):e.tabIndex=-1})},t.getNextVisibleNode=function(e,t){var r=e.filter(function(e){return d(e,!0,!0)}),n=r.indexOf(t);return r[n+1]},t.getPreviousVisibleNode=function(e,t){var r=e.filter(function(e){return d(e,!0,!0)}),n=r.indexOf(t);return r[n-1]},t.isVisible=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var i=(0,n.queryAll)("ul > li > [data-menu-id]",e);i.forEach(function(n,e){n.tabIndex=0===e?0:-1,a.onElementRight(n,function(e){e.preventDefault(),!o.isOpen(n)&&n.hasAttribute("aria-expanded")&&n.click()}),a.onElementDown(n,function(e){e.preventDefault();var t=o.getNextVisibleNode(i,n);t&&o.setFocus(i,t)}),a.onElementUp(n,function(e){e.preventDefault();var t=o.getPreviousVisibleNode(i,n);t&&o.setFocus(i,t)}),a.onElementLeft(n,function(e){if(e.preventDefault(),o.isOpen(n))return n.click();var t=n.getAttribute("data-parent-id"),r=t&&document.getElementById(t);r&&o.setFocus(i,r)})})};var a=i(r(44)),o=i(r(94)),n=r(37);function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}},function(e,t){}])});


var $navlist = $('#navlist');
var $tabContainer = $('#tab-container');
var $panels = $('#panels');

$navlist.on('keydown', 'li a', function (keyVent) {
  var arrows = [37, 38, 39, 40];
  var which = keyVent.which;
  var target = keyVent.target;
  if ($.inArray(which, arrows) > -1) {
    var adjacentTab = findAdjacentTab(target, $navlist, which);

    if (adjacentTab) {
      keyVent.preventDefault();
      adjacentTab.focus();
      // if desired behavior is that when tab receives focus -> make it the active tab:
      setActiveAndInactive(adjacentTab, $navlist);
    }
  } else if (which === 13 || which === 32) { // ENTER |or| SPACE
    keyVent.preventDefault(); // don't scroll the page around...
    target.click();
  } else if (which === 34) { // PAGE DOWN
    keyVent.preventDefault(); // don't scroll the page
    var assocPanel = $('#' + this.getAttribute('aria-controls'));
    if (assocPanel) {
      assocPanel.focus();
    }
  }
});

$(document.body).on('keydown', '.panel', function (e) {
  if (e.which === 33) { // PAGE UP
    e.preventDefault(); // don't scroll
    var activeTab = $navlist.find('li.active a')[0];
    if (activeTab) {
      activeTab.focus();
    }
  }
});

// click support
$navlist.on('click', 'li a', function () {
  setActiveAndInactive(this, $navlist);
});

function findAdjacentTab(startTab, $list, key) {
  var dir = (key === 37 || key === 38) ? 'prev' : 'next';
  var adjacentTab = (dir === 'prev') ?
                    $(startTab.parentNode).prev()[0] :
                    $(startTab.parentNode).next()[0];

  if (!adjacentTab) {
    var allTabs = $list.find('li');
    if (dir === 'prev') {
      adjacentTab = allTabs[allTabs.length - 1];
    } else {
      adjacentTab = allTabs[0];
    }
  }

  return $(adjacentTab).find('a')[0];
}

function setActiveAndInactive(newActive, $list) {
  $list.find('li').each(function () {
    var assocPanelID = $(this)
                          .find('a')
                          .first()
                          .attr('aria-controls');
    var anchor = $(this).find('a')[0];

    if (this !== newActive.parentNode) {
      $(this).removeClass('active');
      anchor.tabIndex = -1;
      anchor.setAttribute('aria-selected', 'false');
      $('#' + assocPanelID)
        .removeClass('current')
        .attr('aria-hidden', 'true');
    } else {
      $(this).addClass('active');
      anchor.tabIndex = 0;
      anchor.setAttribute('aria-selected', 'true');
      $('#' + assocPanelID)
        .addClass('current')
        .removeAttr('aria-hidden');
    }

  });
}

// initial configuration based on window's width
var isAccordionView = false;
var isTabsView = false;

determineView();

// Debounced Resize() jQuery Plugin
// Author: Paul Irish
(function($, sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          }

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  };
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


// RESIZE EVENT:
$(window).smartresize(determineView);


function determineView() {
  var winWidth = $(window).width();

  if (winWidth <= 800 && !isAccordionView) { // SHOW ACCORDION VIEW
    // switch to the accordion view
    $tabContainer
      .removeClass('tabs-view')
      .addClass('accordion-view');

    // fix the markup to be more suited for accordions
    $panels.find('.panel').each(function () {
      var panelID = this.id;
      var assocLink = panelID && $('#navlist a[aria-controls="' + panelID + '"]')[0];
      if (assocLink) {
        $(assocLink.parentNode).append(this);
      }
    });

    isAccordionView = true;
    isTabsView = false;
  } else if (winWidth > 800 && !isTabsView) { // SHOW TABS VIEW
    var wasAccordion = $tabContainer.hasClass('accordion-view');
    // switch to the tabs view
    $tabContainer
      .removeClass('accordion-view')
      .addClass('tabs-view');

    if (wasAccordion) {
      $navlist.find('.panel').each(function () {
        $panels.append(this);
      });
    }

    isTabsView = true;
    isAccordionView = false;
  }
}


!function(accordionElement){
    accordionElement.fn.mackAccordion = function(a){
        Array.prototype.slice.call(this).forEach(function(accordion){

            //Allow multiple accordion sections to be expanded at the same time
            var allowMultiple = accordion.hasAttribute("data-allow-multiple");

            //Create the array of toggle elements for the accordion group;
            var triggers = Array.prototype.slice.call(accordion.querySelectorAll(".accordion__trigger"));
            var panels = Array.prototype.slice.call(accordion.querySelectorAll(".accordion__panel"));

            accordion.addEventListener("click", function(event){
                var target = event.target;

                if(target.classList.contains("accordion__trigger")){
                    var isExpanded = target.getAttribute("aria-expanded") == 'true';
                    var active = accordion.querySelector('[aria-expanded="true"]');

                    //without the allowMultiple, close the open accordion
                    if(!allowMultiple && active && active != target){
                        //set the expanded state on the triggered element
                        active.setAttribute("aria-expanded", false);
                        document.getElementById(active.getAttribute("aria-controls")).setAttribute("hidden", "")
                    }

                    if(!isExpanded){
                        //set expanded state in the element
                        target.setAttribute("aria-expanded", "true");

                        document.getElementById(target.getAttribute("aria-controls")).removeAttribute("hidden");
                    }else{
                        target.setAttribute("aria-expanded", "false");

                        document.getElementById(target.getAttribute("aria-controls")).setAttribute("hidden", "");
                    }

                    event.preventDefault();
                }
            })

            accordion.addEventListener('keydown', function(event){
                var target = event.target;
                var key = event.which.toString();

                var ctrlModifier = (event.ctrlKey && key.match(/33|34/));

                if(target.classList.contains('accordion__trigger')){
                    if(key.match(/38|40/) || ctrlModifier){
                        var index = triggers.indexOf(target);
                        var direction = (key.match(/34|40/)) ? 1 : -1;
                        var length = triggers.length;
                        var newIndex = (index + length + direction) % length;

                        triggers[newIndex].focus();
                        event.preventDefault();
                    }else if(key.match(/35|36/)){
                        switch(key){
                            case '36':
                            triggers[0].focus();
                            break;

                            case '35':
                            triggers[triggers.length -1].focus()
                            break;
                        }

                        event.preventDefault();
                    }else if(ctrlModifier){
                        panels.forEach(function(panel, index){
                            if(panel.contains(target)){
                                triggers[index].focus();
                                event.preventDefault();
                            }
                        })
                    }
                }
            })
        })
    }
}(jQuery)




$(document).on("click", ".skipto", function(e){
    e.preventDefault();

    let element = $(this);

    if(typeof($(element).attr("href") == "undefined")){
        var target = $(element).attr("data-target");
    }else{
        var target = $(element).attr("href");
    }

    $(target).attr("tabindex", "-1").focus();
    $(target).one("blur", function(e){
        $(target).removeAttr("tabindex")
    })
})


$(document).on("click", '.mack-box__close', function(){
    var elementParents = $(this).parents('.mack-box');
    var elementParent = $(this).parent();
    var targetElement = $(this).attr("data-target");

    if($(".mack-box__item", elementParents).length == 1){
        $(elementParents).remove();
    }else{
        $(elementParent).remove();
    }

    if($(targetElement).is('a') || $(targetElement).is('button')){
        $(targetElement).focus();
    }else if($(targetElement).attr("tabindex") == undefined){
        $(targetElement).attr("tabindex", "-1").focus()
    }else{
        $(targetElement).focus()
    }
})


function dayTripper() {
    $('.ui-datepicker-trigger').click(function () {
      setTimeout(function () {
        var today = $('.ui-datepicker-today a')[0];
  
        if (!today) {
          today = $('.ui-state-active')[0] ||
                  $('.ui-state-default')[0];
        }
  
  
        // Hide the entire page (except the date picker)
        // from screen readers to prevent document navigation
        // (by headings, etc.) while the popup is open
        $("main").attr('id','dp-container');
        $("#dp-container").attr('aria-hidden','true');
        $("#skipnav").attr('aria-hidden','true');
  
        // Hide the "today" button because it doesn't do what
        // you think it supposed to do
        $(".ui-datepicker-current").hide();
  
        today.focus();
        datePickHandler();
        $(document).on('click', '#ui-datepicker-div .ui-datepicker-close', function () {
          closeCalendar();
        });
      }, 0);
    });
  }
  
  function datePickHandler() {
    var activeDate;
    var container = document.getElementById('ui-datepicker-div');
    var input = document.getElementById('datepicker');
  
    if (!container || !input) {
      return;
    }
  
   // $(container).find('table').first().attr('role', 'grid');
  
    container.setAttribute('role', 'application');
    container.setAttribute('aria-label', 'Calendar view date-picker');
  
      // the top controls:
    var prev = $('.ui-datepicker-prev', container)[0],
        next = $('.ui-datepicker-next', container)[0];
  
  
  // This is the line that needs to be fixed for use on pages with base URL set in head
    next.href = 'javascript:void(0)';
    prev.href = 'javascript:void(0)';
  
    next.setAttribute('role', 'button');
    next.removeAttribute('title');
    prev.setAttribute('role', 'button');
    prev.removeAttribute('title');
  
    appendOffscreenMonthText(next);
    appendOffscreenMonthText(prev);
  
    // delegation won't work here for whatever reason, so we are
    // forced to attach individual click listeners to the prev /
    // next month buttons each time they are added to the DOM
    $(next).on('click', handleNextClicks);
    $(prev).on('click', handlePrevClicks);
  
    monthDayYearText();
  
    $(container).on('keydown', function calendarKeyboardListener(keyVent) {
      var which = keyVent.which;
      var target = keyVent.target;
      var dateCurrent = getCurrentDate(container);
  
      if (!dateCurrent) {
        dateCurrent = $('a.ui-state-default')[0];
        setHighlightState(dateCurrent, container);
      }
  
      if (27 === which) {
        keyVent.stopPropagation();
        return closeCalendar();
      } else if (which === 9 && keyVent.shiftKey) { // SHIFT + TAB
        keyVent.preventDefault();
        if ($(target).hasClass('ui-datepicker-close')) { // close button
          $('.ui-datepicker-prev')[0].focus();
        } else if ($(target).hasClass('ui-state-default')) { // a date link
          $('.ui-datepicker-close')[0].focus();
        } else if ($(target).hasClass('ui-datepicker-prev')) { // the prev link
          $('.ui-datepicker-next')[0].focus();
        } else if ($(target).hasClass('ui-datepicker-next')) { // the next link
          activeDate = $('.ui-state-highlight') ||
                      $('.ui-state-active')[0];
          if (activeDate) {
            activeDate.focus();
          }
        }
      } else if (which === 9) { // TAB
        keyVent.preventDefault();
        if ($(target).hasClass('ui-datepicker-close')) { // close button
          activeDate = $('.ui-state-highlight') ||
                      $('.ui-state-active')[0];
          if (activeDate) {
            activeDate.focus();
          }
        } else if ($(target).hasClass('ui-state-default')) {
          $('.ui-datepicker-next')[0].focus();
        } else if ($(target).hasClass('ui-datepicker-next')) {
          $('.ui-datepicker-prev')[0].focus();
        } else if ($(target).hasClass('ui-datepicker-prev')) {
          $('.ui-datepicker-close')[0].focus();
        }
      } else if (which === 37) { // LEFT arrow key
        // if we're on a date link...
        if (!$(target).hasClass('ui-datepicker-close') && $(target).hasClass('ui-state-default')) {
          keyVent.preventDefault();
          previousDay(target);
        }
      } else if (which === 39) { // RIGHT arrow key
        // if we're on a date link...
        if (!$(target).hasClass('ui-datepicker-close') && $(target).hasClass('ui-state-default')) {
          keyVent.preventDefault();
          nextDay(target);
        }
      } else if (which === 38) { // UP arrow key
        if (!$(target).hasClass('ui-datepicker-close') && $(target).hasClass('ui-state-default')) {
          keyVent.preventDefault();
          upHandler(target, container, prev);
        }
      } else if (which === 40) { // DOWN arrow key
        if (!$(target).hasClass('ui-datepicker-close') && $(target).hasClass('ui-state-default')) {
          keyVent.preventDefault();
          downHandler(target, container, next);
        }
      } else if (which === 13) { // ENTER
        if ($(target).hasClass('ui-state-default')) {
          setTimeout(function () {
            closeCalendar();
          }, 100);
        } else if ($(target).hasClass('ui-datepicker-prev')) {
          handlePrevClicks();
        } else if ($(target).hasClass('ui-datepicker-next')) {
          handleNextClicks();
        }
      } else if (32 === which) {
        if ($(target).hasClass('ui-datepicker-prev') || $(target).hasClass('ui-datepicker-next')) {
          target.click();
        }
      } else if (33 === which) { // PAGE UP
        moveOneMonth(target, 'prev');
      } else if (34 === which) { // PAGE DOWN
        moveOneMonth(target, 'next');
      } else if (36 === which) { // HOME
        var firstOfMonth = $(target).closest('tbody').find('.ui-state-default')[0];
        if (firstOfMonth) {
          firstOfMonth.focus();
          setHighlightState(firstOfMonth, $('#ui-datepicker-div')[0]);
        }
      } else if (35 === which) { // END
        var $daysOfMonth = $(target).closest('tbody').find('.ui-state-default');
        var lastDay = $daysOfMonth[$daysOfMonth.length - 1];
        if (lastDay) {
          lastDay.focus();
          setHighlightState(lastDay, $('#ui-datepicker-div')[0]);
        }
      }
      $(".ui-datepicker-current").hide();
    });
  }
  
  function closeCalendar() {
    var container = $('#ui-datepicker-div');
    $(container).off('keydown');
    var input = $('#datepicker')[0];
    $(input).datepicker('hide');
  
    input.focus();
  }
  
  function removeAria() {
    // make the rest of the page accessible again:
    $("#dp-container").removeAttr('aria-hidden');
    $("#skipnav").removeAttr('aria-hidden');
  }
  
  ///////////////////////////////
  //////////////////////////// //
  ///////////////////////// // //
  // UTILITY-LIKE THINGS // // //
  ///////////////////////// // //
  //////////////////////////// //
  ///////////////////////////////
  function isOdd(num) {
    return num % 2;
  }
  
  function moveOneMonth(currentDate, dir) {
    var button = (dir === 'next')
                ? $('.ui-datepicker-next')[0]
                : $('.ui-datepicker-prev')[0];
  
    if (!button) {
      return;
    }
  
    var ENABLED_SELECTOR = '#ui-datepicker-div tbody td:not(.ui-state-disabled)';
    var $currentCells = $(ENABLED_SELECTOR);
    var currentIdx = $.inArray(currentDate.parentNode, $currentCells);
  
    button.click();
    setTimeout(function () {
      updateHeaderElements();
  
      var $newCells = $(ENABLED_SELECTOR);
      var newTd = $newCells[currentIdx];
      var newAnchor = newTd && $(newTd).find('a')[0];
  
      while (!newAnchor) {
        currentIdx--;
        newTd = $newCells[currentIdx];
        newAnchor = newTd && $(newTd).find('a')[0];
      }
  
      setHighlightState(newAnchor, $('#ui-datepicker-div')[0]);
      newAnchor.focus();
  
    }, 0);
  
  }
  
  function handleNextClicks() {
    setTimeout(function () {
      updateHeaderElements();
      prepHighlightState();
      $('.ui-datepicker-next').focus();
      $(".ui-datepicker-current").hide();
    }, 0);
  }
  
  function handlePrevClicks() {
    setTimeout(function () {
      updateHeaderElements();
      prepHighlightState();
      $('.ui-datepicker-prev').focus();
      $(".ui-datepicker-current").hide();
    }, 0);
  }
  
  function previousDay(dateLink) {
    var container = document.getElementById('ui-datepicker-div');
    if (!dateLink) {
      return;
    }
    var td = $(dateLink).closest('td');
    if (!td) {
      return;
    }
  
    var prevTd = $(td).prev(),
        prevDateLink = $('a.ui-state-default', prevTd)[0];
  
    if (prevTd && prevDateLink) {
      setHighlightState(prevDateLink, container);
      prevDateLink.focus();
    } else {
      handlePrevious(dateLink);
    }
  }
  
  
  function handlePrevious(target) {
    var container = document.getElementById('ui-datepicker-div');
    if (!target) {
      return;
    }
    var currentRow = $(target).closest('tr');
    if (!currentRow) {
      return;
    }
    var previousRow = $(currentRow).prev();
  
    if (!previousRow || previousRow.length === 0) {
      // there is not previous row, so we go to previous month...
      previousMonth();
    } else {
      var prevRowDates = $('td a.ui-state-default', previousRow);
      var prevRowDate = prevRowDates[prevRowDates.length - 1];
  
      if (prevRowDate) {
        setTimeout(function () {
          setHighlightState(prevRowDate, container);
          prevRowDate.focus();
        }, 0);
      }
    }
  }
  
  function previousMonth() {
    var prevLink = $('.ui-datepicker-prev')[0];
    var container = document.getElementById('ui-datepicker-div');
    prevLink.click();
    // focus last day of new month
    setTimeout(function () {
      var trs = $('tr', container),
          lastRowTdLinks = $('td a.ui-state-default', trs[trs.length - 1]),
          lastDate = lastRowTdLinks[lastRowTdLinks.length - 1];
  
      // updating the cached header elements
      updateHeaderElements();
  
      setHighlightState(lastDate, container);
      lastDate.focus();
  
    }, 0);
  }
  
  ///////////////// NEXT /////////////////
  /**
   * Handles right arrow key navigation
   * @param  {HTMLElement} dateLink The target of the keyboard event
   */
  function nextDay(dateLink) {
    var container = document.getElementById('ui-datepicker-div');
    if (!dateLink) {
      return;
    }
    var td = $(dateLink).closest('td');
    if (!td) {
      return;
    }
    var nextTd = $(td).next(),
        nextDateLink = $('a.ui-state-default', nextTd)[0];
  
    if (nextTd && nextDateLink) {
      setHighlightState(nextDateLink, container);
      nextDateLink.focus(); // the next day (same row)
    } else {
      handleNext(dateLink);
    }
  }
  
  function handleNext(target) {
    var container = document.getElementById('ui-datepicker-div');
    if (!target) {
      return;
    }
    var currentRow = $(target).closest('tr'),
        nextRow = $(currentRow).next();
  
    if (!nextRow || nextRow.length === 0) {
      nextMonth();
    } else {
      var nextRowFirstDate = $('a.ui-state-default', nextRow)[0];
      if (nextRowFirstDate) {
        setHighlightState(nextRowFirstDate, container);
        nextRowFirstDate.focus();
      }
    }
  }
  
  function nextMonth() {
    nextMon = $('.ui-datepicker-next')[0];
    var container = document.getElementById('ui-datepicker-div');
    nextMon.click();
    // focus the first day of the new month
    setTimeout(function () {
      // updating the cached header elements
      updateHeaderElements();
  
      var firstDate = $('a.ui-state-default', container)[0];
      setHighlightState(firstDate, container);
      firstDate.focus();
    }, 0);
  }
  
  /////////// UP ///////////
  /**
   * Handle the up arrow navigation through dates
   * @param  {HTMLElement} target   The target of the keyboard event (day)
   * @param  {HTMLElement} cont     The calendar container
   * @param  {HTMLElement} prevLink Link to navigate to previous month
   */
  function upHandler(target, cont, prevLink) {
    prevLink = $('.ui-datepicker-prev')[0];
    var rowContext = $(target).closest('tr');
    if (!rowContext) {
      return;
    }
    var rowTds = $('td', rowContext),
        rowLinks = $('a.ui-state-default', rowContext),
        targetIndex = $.inArray(target, rowLinks),
        prevRow = $(rowContext).prev(),
        prevRowTds = $('td', prevRow),
        parallel = prevRowTds[targetIndex],
        linkCheck = $('a.ui-state-default', parallel)[0];
  
    if (prevRow && parallel && linkCheck) {
      // there is a previous row, a td at the same index
      // of the target AND theres a link in that td
      setHighlightState(linkCheck, cont);
      linkCheck.focus();
    } else {
      // we're either on the first row of a month, or we're on the
      // second and there is not a date link directly above the target
      prevLink.click();
      setTimeout(function () {
        // updating the cached header elements
        updateHeaderElements();
        var newRows = $('tr', cont),
            lastRow = newRows[newRows.length - 1],
            lastRowTds = $('td', lastRow),
            tdParallelIndex = $.inArray(target.parentNode, rowTds),
            newParallel = lastRowTds[tdParallelIndex],
            newCheck = $('a.ui-state-default', newParallel)[0];
  
        if (lastRow && newParallel && newCheck) {
          setHighlightState(newCheck, cont);
          newCheck.focus();
        } else {
          // theres no date link on the last week (row) of the new month
          // meaning its an empty cell, so we'll try the 2nd to last week
          var secondLastRow = newRows[newRows.length - 2],
              secondTds = $('td', secondLastRow),
              targetTd = secondTds[tdParallelIndex],
              linkCheck = $('a.ui-state-default', targetTd)[0];
  
          if (linkCheck) {
            setHighlightState(linkCheck, cont);
            linkCheck.focus();
          }
  
        }
      }, 0);
    }
  }
  
  //////////////// DOWN ////////////////
  /**
   * Handles down arrow navigation through dates in calendar
   * @param  {HTMLElement} target   The target of the keyboard event (day)
   * @param  {HTMLElement} cont     The calendar container
   * @param  {HTMLElement} nextLink Link to navigate to next month
   */
  function downHandler(target, cont, nextLink) {
    nextLink = $('.ui-datepicker-next')[0];
    var targetRow = $(target).closest('tr');
    if (!targetRow) {
      return;
    }
    var targetCells = $('td', targetRow),
        cellIndex = $.inArray(target.parentNode, targetCells), // the td (parent of target) index
        nextRow = $(targetRow).next(),
        nextRowCells = $('td', nextRow),
        nextWeekTd = nextRowCells[cellIndex],
        nextWeekCheck = $('a.ui-state-default', nextWeekTd)[0];
  
    if (nextRow && nextWeekTd && nextWeekCheck) {
      // theres a next row, a TD at the same index of `target`,
      // and theres an anchor within that td
      setHighlightState(nextWeekCheck, cont);
      nextWeekCheck.focus();
    } else {
      nextLink.click();
  
      setTimeout(function () {
        // updating the cached header elements
        updateHeaderElements();
  
        var nextMonthTrs = $('tbody tr', cont),
            firstTds = $('td', nextMonthTrs[0]),
            firstParallel = firstTds[cellIndex],
            firstCheck = $('a.ui-state-default', firstParallel)[0];
  
        if (firstParallel && firstCheck) {
          setHighlightState(firstCheck, cont);
          firstCheck.focus();
        } else {
          // lets try the second row b/c we didnt find a
          // date link in the first row at the target's index
          var secondRow = nextMonthTrs[1],
              secondTds = $('td', secondRow),
              secondRowTd = secondTds[cellIndex],
              secondCheck = $('a.ui-state-default', secondRowTd)[0];
  
          if (secondRow && secondCheck) {
            setHighlightState(secondCheck, cont);
            secondCheck.focus();
          }
        }
      }, 0);
    }
  }
  
  
  function onCalendarHide() {
    closeCalendar();
  }
  
  // add an aria-label to the date link indicating the currently focused date
  // (formatted identically to the required format: mm/dd/yyyy)
  function monthDayYearText() {
    var cleanUps = $('.amaze-date');
  
    $(cleanUps).each(function (clean) {
    // each(cleanUps, function (clean) {
      clean.parentNode.removeChild(clean);
    });
  
    var datePickDiv = document.getElementById('ui-datepicker-div');
    // in case we find no datepick div
    if (!datePickDiv) {
      return;
    }
  
    var dates = $('a.ui-state-default', datePickDiv);
    $(dates).attr('role', 'button').on('keydown', function (e) {
      if (e.which === 32) {
        e.preventDefault();
        e.target.click();
        setTimeout(function () {
          closeCalendar();
        }, 100);
      }
    });
    $(dates).each(function (index, date) {
      var currentRow = $(date).closest('tr'),
          currentTds = $('td', currentRow),
          currentIndex = $.inArray(date.parentNode, currentTds),
          headThs = $('thead tr th', datePickDiv),
          dayIndex = headThs[currentIndex],
          daySpan = $('span', dayIndex)[0],
          monthName = $('.ui-datepicker-month', datePickDiv)[0].innerHTML,
          year = $('.ui-datepicker-year', datePickDiv)[0].innerHTML,
          number = date.innerHTML;
  
      if (!daySpan || !monthName || !number || !year) {
        return;
      }
  
      // AT Reads: {month} {date} {year} {day}
      // "December 18 2014 Thursday"
      var dateText = date.innerHTML + ' ' + monthName + ' ' + year + ' ' + daySpan.title;
      // AT Reads: {date(number)} {name of day} {name of month} {year(number)}
      // var dateText = date.innerHTML + ' ' + daySpan.title + ' ' + monthName + ' ' + year;
      // add an aria-label to the date link reading out the currently focused date
      date.setAttribute('aria-label', dateText);
    });
  }
  
  
  
  // update the cached header elements because we're in a new month or year
  function updateHeaderElements() {
    var context = document.getElementById('ui-datepicker-div');
    if (!context) {
      return;
    }
  
  //  $(context).find('table').first().attr('role', 'grid');
  
    prev = $('.ui-datepicker-prev', context)[0];
    next = $('.ui-datepicker-next', context)[0];
  
    //make them click/focus - able
    next.href = 'javascript:void(0)';
    prev.href = 'javascript:void(0)';
  
    next.setAttribute('role', 'button');
    prev.setAttribute('role', 'button');
    appendOffscreenMonthText(next);
    appendOffscreenMonthText(prev);
  
    $(next).on('click', handleNextClicks);
    $(prev).on('click', handlePrevClicks);
  
    // add month day year text
    monthDayYearText();
  }
  
  
  function prepHighlightState() {
    var highlight;
    var cage = document.getElementById('ui-datepicker-div');
    highlight = $('.ui-state-highlight', cage)[0] ||
                $('.ui-state-default', cage)[0];
    if (highlight && cage) {
      setHighlightState(highlight, cage);
    }
  }
  
  // Set the highlighted class to date elements, when focus is received
  function setHighlightState(newHighlight, container) {
    var prevHighlight = getCurrentDate(container);
    // remove the highlight state from previously
    // highlighted date and add it to our newly active date
    $(prevHighlight).removeClass('ui-state-highlight');
    $(newHighlight).addClass('ui-state-highlight');
  }
  
  
  // grabs the current date based on the highlight class
  function getCurrentDate(container) {
    var currentDate = $('.ui-state-highlight', container)[0];
    return currentDate;
  }
  
  /**
   * Appends logical next/prev month text to the buttons
   * - ex: Next Month, January 2015
   *       Previous Month, November 2014
   */
  function appendOffscreenMonthText(button) {
    var buttonText;
    var isNext = $(button).hasClass('ui-datepicker-next');
    var months = [
        'january', 'february',
        'march', 'april',
        'may', 'june', 'july',
        'august', 'september',
        'october',
        'november', 'december'
      ];
  
    var currentMonth = $('.ui-datepicker-title .ui-datepicker-month').text().toLowerCase();
    var monthIndex = $.inArray(currentMonth.toLowerCase(), months);
    var currentYear = $('.ui-datepicker-title .ui-datepicker-year').text().toLowerCase();
    var adjacentIndex = (isNext) ? monthIndex + 1 : monthIndex - 1;
  
    if (isNext && currentMonth === 'dezembro') {
      currentYear = parseInt(currentYear, 10) + 1;
      adjacentIndex = 0;
    } else if (!isNext && currentMonth === 'janeiro') {
      currentYear = parseInt(currentYear, 10) - 1;
      adjacentIndex = months.length - 1;
    }
  
    buttonText = (isNext)
                  ? 'Next Month, ' + firstToCap(months[adjacentIndex]) + ' ' + currentYear
                  : 'Previous Month, ' + firstToCap(months[adjacentIndex]) + ' ' + currentYear;
  
    $(button).find('.ui-icon').html(buttonText);
  
  }
  
  // Returns the string with the first letter capitalized
  function firstToCap(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }


  /*! Lity - v2.3.1 - 2018-04-20
* http://sorgalla.com/lity/
* Copyright (c) 2015-2018 Jan Sorgalla; Licensed MIT */
(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory(window, $);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(window, require('jquery'));
    } else {
        window.lity = factory(window, window.jQuery || window.Zepto);
    }
}(typeof window !== "undefined" ? window : this, function(window, $) {
    'use strict';

    var document = window.document;

    var _win = $(window);
    var _deferred = $.Deferred;
    var _html = $('html');
    var _instances = [];

    var _attrAriaHidden = 'aria-hidden';
    var _dataAriaHidden = 'lity-' + _attrAriaHidden;

    var _focusableElementsSelector = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])';

    var _defaultOptions = {
        esc: true,
        handler: null,
        handlers: {
            image: imageHandler,
            inline: inlineHandler,
            youtube: youtubeHandler,
            vimeo: vimeoHandler,
            googlemaps: googlemapsHandler,
            facebookvideo: facebookvideoHandler,
            iframe: iframeHandler
        },
        template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
    };

    var _imageRegexp = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i;
    var _youtubeRegex = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i;
    var _vimeoRegex =  /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/;
    var _googlemapsRegex = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i;
    var _facebookvideoRegex = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i;

    var _transitionEndEvent = (function() {
        var el = document.createElement('div');

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        };

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return transEndEventNames[name];
            }
        }

        return false;
    })();

    function transitionEnd(element) {
        var deferred = _deferred();

        if (!_transitionEndEvent || !element.length) {
            deferred.resolve();
        } else {
            element.one(_transitionEndEvent, deferred.resolve);
            setTimeout(deferred.resolve, 500);
        }

        return deferred.promise();
    }

    function settings(currSettings, key, value) {
        if (arguments.length === 1) {
            return $.extend({}, currSettings);
        }

        if (typeof key === 'string') {
            if (typeof value === 'undefined') {
                return typeof currSettings[key] === 'undefined'
                    ? null
                    : currSettings[key];
            }

            currSettings[key] = value;
        } else {
            $.extend(currSettings, key);
        }

        return this;
    }

    function parseQueryParams(params) {
        var pairs = decodeURI(params.split('#')[0]).split('&');
        var obj = {}, p;

        for (var i = 0, n = pairs.length; i < n; i++) {
            if (!pairs[i]) {
                continue;
            }

            p = pairs[i].split('=');
            obj[p[0]] = p[1];
        }

        return obj;
    }

    function appendQueryParams(url, params) {
        return url + (url.indexOf('?') > -1 ? '&' : '?') + $.param(params);
    }

    function transferHash(originalUrl, newUrl) {
        var pos = originalUrl.indexOf('#');

        if (-1 === pos) {
            return newUrl;
        }

        if (pos > 0) {
            originalUrl = originalUrl.substr(pos);
        }

        return newUrl + originalUrl;
    }

    function error(msg) {
        return $('<span class="lity-error"/>').append(msg);
    }

    function imageHandler(target, instance) {
        var desc = (instance.opener() && instance.opener().data('lity-desc')) || 'Image with no description';
        var img = $('<img src="' + target + '" alt="' + desc + '"/>');
        var deferred = _deferred();
        var failed = function() {
            deferred.reject(error('Failed loading image'));
        };

        img
            .on('load', function() {
                if (this.naturalWidth === 0) {
                    return failed();
                }

                deferred.resolve(img);
            })
            .on('error', failed)
        ;

        return deferred.promise();
    }

    imageHandler.test = function(target) {
        return _imageRegexp.test(target);
    };

    function inlineHandler(target, instance) {
        var el, placeholder, hasHideClass;

        try {
            el = $(target);
        } catch (e) {
            return false;
        }

        if (!el.length) {
            return false;
        }

        placeholder = $('<i style="display:none !important"/>');
        hasHideClass = el.hasClass('lity-hide');

        instance
            .element()
            .one('lity:remove', function() {
                placeholder
                    .before(el)
                    .remove()
                ;

                if (hasHideClass && !el.closest('.lity-content').length) {
                    el.addClass('lity-hide');
                }
            })
        ;

        return el
            .removeClass('lity-hide')
            .after(placeholder)
        ;
    }

    function youtubeHandler(target) {
        var matches = _youtubeRegex.exec(target);

        if (!matches) {
            return false;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://www.youtube' + (matches[2] || '') + '.com/embed/' + matches[4],
                    $.extend(
                        {
                            autoplay: 1
                        },
                        parseQueryParams(matches[5] || '')
                    )
                )
            )
        );
    }

    function vimeoHandler(target) {
        var matches = _vimeoRegex.exec(target);

        if (!matches) {
            return false;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://player.vimeo.com/video/' + matches[3],
                    $.extend(
                        {
                            autoplay: 1
                        },
                        parseQueryParams(matches[4] || '')
                    )
                )
            )
        );
    }

    function facebookvideoHandler(target) {
        var matches = _facebookvideoRegex.exec(target);

        if (!matches) {
            return false;
        }

        if (0 !== target.indexOf('http')) {
            target = 'https:' + target;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://www.facebook.com/plugins/video.php?href=' + target,
                    $.extend(
                        {
                            autoplay: 1
                        },
                        parseQueryParams(matches[4] || '')
                    )
                )
            )
        );
    }

    function googlemapsHandler(target) {
        var matches = _googlemapsRegex.exec(target);

        if (!matches) {
            return false;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://www.google.' + matches[3] + '/maps?' + matches[6],
                    {
                        output: matches[6].indexOf('layer=c') > 0 ? 'svembed' : 'embed'
                    }
                )
            )
        );
    }

    function iframeHandler(target) {
        return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + target + '"/></div>';
    }

    function winHeight() {
        return document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : Math.round(_win.height());
    }

    function keydown(e) {
        var current = currentInstance();

        if (!current) {
            return;
        }

        // ESC key
        if (e.keyCode === 27 && !!current.options('esc')) {
            current.close();
        }

        // TAB key
        if (e.keyCode === 9) {
            handleTabKey(e, current);
        }
    }

    function handleTabKey(e, instance) {
        var focusableElements = instance.element().find(_focusableElementsSelector);
        var focusedIndex = focusableElements.index(document.activeElement);

        if (e.shiftKey && focusedIndex <= 0) {
            focusableElements.get(focusableElements.length - 1).focus();
            e.preventDefault();
        } else if (!e.shiftKey && focusedIndex === focusableElements.length - 1) {
            focusableElements.get(0).focus();
            e.preventDefault();
        }
    }

    function resize() {
        $.each(_instances, function(i, instance) {
            instance.resize();
        });
    }

    function registerInstance(instanceToRegister) {
        if (1 === _instances.unshift(instanceToRegister)) {
            _html.addClass('lity-active');

            _win
                .on({
                    resize: resize,
                    keydown: keydown
                })
            ;
        }

        $('body > *').not(instanceToRegister.element())
            .addClass('lity-hidden')
            .each(function() {
                var el = $(this);

                if (undefined !== el.data(_dataAriaHidden)) {
                    return;
                }

                el.data(_dataAriaHidden, el.attr(_attrAriaHidden) || null);
            })
            .attr(_attrAriaHidden, 'true')
        ;
    }

    function removeInstance(instanceToRemove) {
        var show;

        instanceToRemove
            .element()
            .attr(_attrAriaHidden, 'true')
        ;

        if (1 === _instances.length) {
            _html.removeClass('lity-active');

            _win
                .off({
                    resize: resize,
                    keydown: keydown
                })
            ;
        }

        _instances = $.grep(_instances, function(instance) {
            return instanceToRemove !== instance;
        });

        if (!!_instances.length) {
            show = _instances[0].element();
        } else {
            show = $('.lity-hidden');
        }

        show
            .removeClass('lity-hidden')
            .each(function() {
                var el = $(this), oldAttr = el.data(_dataAriaHidden);

                if (!oldAttr) {
                    el.removeAttr(_attrAriaHidden);
                } else {
                    el.attr(_attrAriaHidden, oldAttr);
                }

                el.removeData(_dataAriaHidden);
            })
        ;
    }

    function currentInstance() {
        if (0 === _instances.length) {
            return null;
        }

        return _instances[0];
    }

    function factory(target, instance, handlers, preferredHandler) {
        var handler = 'inline', content;

        var currentHandlers = $.extend({}, handlers);

        if (preferredHandler && currentHandlers[preferredHandler]) {
            content = currentHandlers[preferredHandler](target, instance);
            handler = preferredHandler;
        } else {
            // Run inline and iframe handlers after all other handlers
            $.each(['inline', 'iframe'], function(i, name) {
                delete currentHandlers[name];

                currentHandlers[name] = handlers[name];
            });

            $.each(currentHandlers, function(name, currentHandler) {
                // Handler might be "removed" by setting callback to null
                if (!currentHandler) {
                    return true;
                }

                if (
                    currentHandler.test &&
                    !currentHandler.test(target, instance)
                ) {
                    return true;
                }

                content = currentHandler(target, instance);

                if (false !== content) {
                    handler = name;
                    return false;
                }
            });
        }

        return {handler: handler, content: content || ''};
    }

    function Lity(target, options, opener, activeElement) {
        var self = this;
        var result;
        var isReady = false;
        var isClosed = false;
        var element;
        var content;

        options = $.extend(
            {},
            _defaultOptions,
            options
        );

        element = $(options.template);

        // -- API --

        self.element = function() {
            return element;
        };

        self.opener = function() {
            return opener;
        };

        self.options  = $.proxy(settings, self, options);
        self.handlers = $.proxy(settings, self, options.handlers);

        self.resize = function() {
            if (!isReady || isClosed) {
                return;
            }

            content
                .css('max-height', winHeight() + 'px')
                .trigger('lity:resize', [self])
            ;
        };

        self.close = function() {
            if (!isReady || isClosed) {
                return;
            }

            isClosed = true;

            removeInstance(self);

            var deferred = _deferred();

            // We return focus only if the current focus is inside this instance
            if (
                activeElement &&
                (
                    document.activeElement === element[0] ||
                    $.contains(element[0], document.activeElement)
                )
            ) {
                try {
                    activeElement.focus();
                } catch (e) {
                    // Ignore exceptions, eg. for SVG elements which can't be
                    // focused in IE11
                }
            }

            content.trigger('lity:close', [self]);

            element
                .removeClass('lity-opened')
                .addClass('lity-closed')
            ;

            transitionEnd(content.add(element))
                .always(function() {
                    content.trigger('lity:remove', [self]);
                    element.remove();
                    element = undefined;
                    deferred.resolve();
                })
            ;

            return deferred.promise();
        };

        // -- Initialization --

        result = factory(target, self, options.handlers, options.handler);

        element
            .attr(_attrAriaHidden, 'false')
            .addClass('lity-loading lity-opened lity-' + result.handler)
            .appendTo('body')
            .focus()
            .on('click', '[data-lity-close]', function(e) {
                if ($(e.target).is('[data-lity-close]')) {
                    self.close();
                }
            })
            .trigger('lity:open', [self])
        ;

        registerInstance(self);

        $.when(result.content)
            .always(ready)
        ;

        function ready(result) {
            content = $(result)
                .css('max-height', winHeight() + 'px')
            ;

            element
                .find('.lity-loader')
                .each(function() {
                    var loader = $(this);

                    transitionEnd(loader)
                        .always(function() {
                            loader.remove();
                        })
                    ;
                })
            ;

            element
                .removeClass('lity-loading')
                .find('.lity-content')
                .empty()
                .append(content)
            ;

            isReady = true;

            content
                .trigger('lity:ready', [self])
            ;
        }
    }

    function lity(target, options, opener) {
        if (!target.preventDefault) {
            opener = $(opener);
        } else {
            target.preventDefault();
            opener = $(this);
            target = opener.data('lity-target') || opener.attr('href') || opener.attr('src');
        }

        var instance = new Lity(
            target,
            $.extend(
                {},
                opener.data('lity-options') || opener.data('lity'),
                options
            ),
            opener,
            document.activeElement
        );

        if (!target.preventDefault) {
            return instance;
        }
    }

    lity.version  = '2.3.1';
    lity.options  = $.proxy(settings, lity, _defaultOptions);
    lity.handlers = $.proxy(settings, lity, _defaultOptions.handlers);
    lity.current  = currentInstance;

    $(document).on('click.lity', '[data-lity]', lity);

    return lity;
}));


$(document).on("click", '[mack-popover]', function(){
    let toggletip = this;
    let title = toggletip.getAttribute("mack-popover-title");
    let message = toggletip.getAttribute("mack-popover")
    let liveRegion = toggletip.nextElementSibling;
    let popoverPosition = toggletip.getAttribute("mack-popover-position");
    let elementHeight;
    let elementWidth;
    let elementMarginTop;
    let elementMarginLeft;
    let buttonHeight;
    let buttonWidth;
    toggletip.setAttribute("aria-expanded", "false");

    if(liveRegion.innerHTML ==""){
        this.setAttribute("aria-expanded", "true");
        if(title == null || title == ""){
            liveRegion.innerHTML = '<span class="mack-popover__bubble"><div class="mack-popover__text">'+ message+'</div></span>'
        }else{
            liveRegion.innerHTML = '<span class="mack-popover__bubble"><h3 class="mack-popover__title">'+ title +'</h3><div class="mack-popover__text">'+ message+'</div></span>'
        }

        buttonHeight = $(toggletip).outerHeight() / 2;
        buttonWidth = $(toggletip).outerWidth() / 2;
        elementHeight = $(".mack-popover__bubble", liveRegion).outerHeight();
        elementMarginTop = (elementHeight / 2) * -1;

        elementWidth = $(".mack-popover__bubble", liveRegion).outerWidth();
        elementMarginLeft = [(elementWidth /2) + buttonWidth] * -1;

        if(popoverPosition == "right" || popoverPosition == "left"){
            $(".mack-popover__bubble", liveRegion).css({
                "margin-top": (elementMarginTop + buttonHeight),
                "opacity" : 1
            });
        } else if (popoverPosition == "top" || popoverPosition == "bottom"){
            $(".mack-popover__bubble", liveRegion).css({
                "margin-left" : elementMarginLeft
            })

            if(popoverPosition == "top"){
                $(".mack-popover__bubble", liveRegion).css({
                    "top" : (buttonHeight + elementHeight) * -1,
                    "opacity" : 1
                })
            }else{
                $(".mack-popover__bubble", liveRegion).css({
                    "bottom" : (buttonHeight + elementHeight) * -1,
                    "opacity" : 1
                })
                
            }
        }
        debugger;
    }else{
        this.setAttribute("aria-expanded", "false");
        liveRegion.innerHTML = '';
    }

    toggletip.addEventListener("keydown", function(e){
        if((e.keyCode || e.which) === 27){
            this.setAttribute("aria-expanded", "false");
            liveRegion.innerHTML = '';
        }
    })

    document.addEventListener("click", function(e){
        if(toggletip !== e.target){
            this.setAttribute("aria-expanded", "false");
            liveRegion.innerHTML = '';
        }
    })

    toggletip.addEventListener("blur", function(){
        this.setAttribute("aria-expanded", "false");
        liveRegion.innerHTML = '';
    })
})

var host = document.getElementById('progressbar-unbounded');
var progressBar = host.querySelector('progress');
progressBar.classList.add('deque-hidden');

var unboundedProgressBar = deque.createProgressBar(progressBar, {bounded: false});
unboundedProgressBar.id = 'unboundedProgressBar';
unboundedProgressBar.setAttribute(
  'aria-label',
  'An unbounded progress bar which will run like this forever.'
);

var startButton = host.querySelector('#start-progressbar');
startButton.addEventListener('click', function() {
  unboundedProgressBar.classList.add('deque-progressbar');
  unboundedProgressBar.classList.add('deque-progressbar-unbounded');
  unboundedProgressBar.classList.remove('deque-hidden');
  unboundedProgressBar.setAttribute('aria-busy', 'true');
});

var stopButton = host.querySelector('#stop-progressbar');
stopButton.addEventListener('click', function() {
  unboundedProgressBar.classList.remove('deque-progressbar');
  unboundedProgressBar.classList.remove('deque-progressbar-unbounded');
  unboundedProgressBar.classList.add('deque-hidden');
  unboundedProgressBar.setAttribute('aria-busy', 'false');
});




var $toolbar = $('#social-toolbar');
var $items = $toolbar.find('li');
$toolbar.on('keydown', 'button', function (e) {
  var which = e.which;
  var target = e.target;

  if (which === 37 || which === 38) { // LEFT |or| UP
    focusAdjacentItem(target, which, $items);
  } else if (which === 39 || which === 40) { // RIGHT |or| DOWN
    focusAdjacentItem(target, which, $items);
  }
});

/**
 * Focuses the adjacent item in the toolbar
 * @param  {HTMLElement} element   The target of the keyboard event
 * @param  {Integer} keystroke     The keycode
 * @param  {Object} $items         The jQuery object of items in the toolbar (array-like)
 */
function focusAdjacentItem(element, keystroke, $items) {
  var dir = (keystroke === 37 || keystroke === 38) ? 'prev' : 'next';
  var $li = $(element).closest('li');
  var $adjacentLi = (dir === 'next') ?
                    $li.next().first() :
                    $li.prev().first();
  if (!$adjacentLi[0]) {
    if (dir === 'next') {
      // there wasn't a found adjacent sibling
      // so let's go from the last to the first
      $adjacentLi = $($items[0]);
    } else {
      // there wasn't a found adjacent sibling
      // so let's go from the first to the last
      $adjacentLi = $($items[$items.length - 1]);
    }
  }
  var adjacentBtn = $adjacentLi.find('button')[0];

  if (adjacentBtn) {
    adjacentBtn.focus();
    adjacentBtn.tabIndex = 0; // make the "active" button the natively focusable aspect
    element.tabIndex = -1;
  }
}


/// Access Key ///
$(document.body).on('keydown', function (keyVent) {
  // access keys involve the alt key
  if (!keyVent.altKey) {
    return;
  }

  // s
  if (keyVent.which === 83) {
    keyVent.preventDefault();
    $toolbar.focus();
  }
});

// iOS specific fix:
// Applies aria-describedby="hidden-share" so the display: none
// message "Share Page" is read out as help text
var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
if (iOS) {
  $('#social-toolbar button').each(function () {
    this.setAttribute('aria-describedby', 'hidden-share');
  });
}



$(document).on("click", '[mack-tooltip]', function(){
    let toggletip = this;
    let message = toggletip.getAttribute("mack-tooltip")
    let liveRegion = toggletip.nextElementSibling;
    let tooltipPosition = toggletip.getAttribute("mack-tooltip-position");
    let elementHeight;
    let elementWidth;
    let elementMarginTop;
    let elementMarginLeft;
    let buttonHeight;
    let buttonWidth;
    toggletip.setAttribute("aria-expanded", "false");

    if(liveRegion.innerHTML ==""){
        this.setAttribute("aria-expanded", "true");

        liveRegion.innerHTML = '<span class="mack-tooltip__bubble">'+ message+'</span>'


        buttonHeight = $(toggletip).outerHeight() / 2;
        buttonWidth = $(toggletip).outerWidth() / 2;
        elementHeight = $(".mack-tooltip__bubble", liveRegion).outerHeight();
        elementMarginTop = (elementHeight / 2) * -1;

        elementWidth = $(".mack-tooltip__bubble", liveRegion).outerWidth();
        elementMarginLeft = [(elementWidth /2) + buttonWidth] * -1;

        if(tooltipPosition == "right" || tooltipPosition == "left"){
            $(".mack-tooltip__bubble", liveRegion).css({
                "margin-top": (elementMarginTop + buttonHeight),
                "opacity" : 1
            });
        } else if (tooltipPosition == "top" || tooltipPosition == "bottom"){
            $(".mack-tooltip__bubble", liveRegion).css({
                "margin-left" : elementMarginLeft
            })

            if(tooltipPosition == "top"){
                $(".mack-tooltip__bubble", liveRegion).css({
                    "top" : (buttonHeight + elementHeight) * -1,
                    "opacity" : 1
                })
            }else{
                $(".mack-tooltip__bubble", liveRegion).css({
                    "bottom" : (buttonHeight + elementHeight) * -1,
                    "opacity" : 1
                })
                
            }
        }
        debugger;
    }else{
        this.setAttribute("aria-expanded", "false");
        liveRegion.innerHTML = '';
    }

    toggletip.addEventListener("keydown", function(e){
        if((e.keyCode || e.which) === 27){
            this.setAttribute("aria-expanded", "false");
            liveRegion.innerHTML = '';
        }
    })

    document.addEventListener("click", function(e){
        if(toggletip !== e.target){
            this.setAttribute("aria-expanded", "false");
            liveRegion.innerHTML = '';
        }
    })

    toggletip.addEventListener("blur", function(){
        this.setAttribute("aria-expanded", "false");
        liveRegion.innerHTML = '';
    })
})