(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);a&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},123:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(705),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  height: 100vh;\n}\n\n.top {\n  height: 10%;\n  padding: 10px;\n  max-width: 1152px;\n  margin: 0 auto;\n}\n\n.container-height {\n  display: flex;\n  flex-direction: row;\n  height: 90%;\n}\n\nnav {\n  padding: 25px;\n  width: 45%;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n\nmain {\n  padding: 25px;\n  width: 100%;\n  height: 100%;\n}\n\n#tasksContainer {\n  gap: 20px;\n}\n\n.card {\n  width: 250px;\n  overflow-wrap: break-word;\n  height: 100%;\n}\n\n.card-header-title,\n.card-header {\n  inline-size: 250px;\n  overflow-wrap: break-word;\n}\n\n.card-header-title {\n  border: none;\n  overflow: auto;\n}\n\n.card-header-icon {\n  padding: 0.25rem 0.5rem;\n}\n\n.card-footer-item {\n  padding: 0.25rem 0.75rem;\n}\n\n.done {\n  text-decoration: line-through;\n}\n\n.card-buttons {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-top {\n  box-shadow: 0 0.125em 0.25em rgb(10 10 10 / 10%);\n}\n\n.hidden {\n  display: none;\n}\n",""]);const i=r},379:(e,t,n)=>{var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},a=[],r=0;r<e.length;r++){var c=e[r],d=t.base?c[0]+t.base:c[0],s=n[d]||0,l="".concat(d," ").concat(s);n[d]=s+1;var u=o(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:l,updater:v(m,t),references:1}),a.push(l)}return a}function d(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function m(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,f=0;function v(e,t){var n,a,r;if(t.singleton){var i=f++;n=p||(p=d(t)),a=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=d(t),a=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=o(n[a]);i[r].references--}for(var d=c(e,t),s=0;s<n.length;s++){var l=o(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=d}}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),a=n(123);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var r=function e(t,n,a,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.description=n,this.dueDate=a,this.priority=r};function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o,c,d,s,l,u,m,p,f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.taskList=[]}var t,n;return t=e,(n=[{key:"addTask",value:function(e){this.taskList.push(e)}},{key:"removeTask",value:function(e){this.taskList.splice(e,1)}}])&&i(t.prototype,n),e}(),v=function(){var e=document.createElement("select"),t=document.createElement("option"),n=document.createElement("option"),a=document.createElement("option");return e.id="priority",e.classList.add("input","field"),t.setAttribute("value","Low"),t.textContent="Low",n.setAttribute("value","Medium"),n.textContent="Medium",a.setAttribute("value","High"),a.textContent="High",e.append(t,n,a),e},h=function(){var e=document.createElement("form"),t=document.createElement("label"),n=document.createElement("input"),a=document.createElement("label"),r=document.createElement("input"),i=document.createElement("label"),o=document.createElement("input"),c=document.createElement("label"),d=v(),s=document.createElement("br"),l=document.createElement("a");return e.id="form",e.classList.add("mt-5","box"),t.setAttribute("for","title"),t.textContent="Title:",n.id="title",n.required=!0,n.setAttribute("type","text"),n.classList.add("field","input"),a.setAttribute("for","date"),a.textContent="Due date:",r.id="date",r.required=!0,r.setAttribute("type","date"),r.classList.add("field","input"),i.setAttribute("for","description"),i.textContent="Description:",o.id="description",o.setAttribute("type","text"),o.classList.add("field","input"),c.setAttribute("for","priority"),c.textContent="Priority:",l.classList.add("button","is-primary","is-small","has-text-dark","mt-5"),l.id="addTask",l.textContent="Add Task",e.append(t,n,a,r,i,o,c,d,s,l),e},g=function(e,t){var n=document.createElement("a"),a=document.createElement("p");return n.textContent=e.title,n.href="#",a.setAttribute("data-index",t.indexOf(e)),a.appendChild(n),a},E=function(e){var t=null;switch(e){case"Low":t="has-background-info-light";break;case"Medium":t="has-background-warning-light";break;case"High":t="has-background-danger-light";break;default:t=null}return t},b=function(e,t){var n=document.createElement("div"),a=t.indexOf(e),r=document.createElement("div"),i=document.createElement("input"),o=document.createElement("div"),c=document.createElement("a"),d=document.createElement("span"),s=document.createElement("i"),l=document.createElement("a"),u=document.createElement("span"),m=document.createElement("i"),p=document.createElement("div"),f=document.createElement("div"),h=document.createElement("textarea"),g=document.createElement("input"),b=document.createElement("div"),y=v(),x=document.createElement("a");return n.classList.add("card"),n.setAttribute("data-attribute",a),r.classList.add("card-header"),i.classList.add("card-header-title"),i.id="taskTitle",i.value=e.title,o.classList.add("is-flex","is-flex-direction-column","is-justify-content-space-between"),c.classList.add("card-header-icon"),c.id="done",d.classList.add("icon"),s.classList.add("fas","fa-check-circle"),l.classList.add("card-header-icon"),u.classList.add("icon"),l.id="displayDetails",m.classList.add("fas","fa-angle-down"),p.classList.add("card-content","hidden"),f.classList.add("content"),h.id="description",h.classList.add("textarea"),h.value=e.description,g.id="date",g.setAttribute("value",e.dueDate.replace(/\//,"-")),g.setAttribute("type","date"),g.classList.add("input"),b.classList.add("card-footer"),x.classList.add("card-footer-item"),x.href="#",x.textContent="Delete",y.classList.add("card-footer-item",E(e.priority)),y.value=e.priority,d.append(s),c.append(d),u.append(m),l.append(u),o.append(c,l),r.append(i,o),f.append(h,g),p.append(f),b.append(x,y),n.append(r,p,b),n},y=function(){var e=document.createElement("form"),t=document.createElement("label"),n=document.createElement("input"),a=document.createElement("a");return e.classList.add("mt-5","box"),e.id="projectForm",t.classList.add("label"),t.textContent="New project",n.classList.add("input"),n.id="projectTitle",n.required=!0,n.type="text",a.classList.add("button","mt-5"),a.textContent="Create",a.id="addProject",e.append(t,n,a),e},x=function(e,t,n){var a=document.querySelector("#".concat(e));if(null===document.querySelector("#".concat(t))){var r=n();a.append(r)}return a},L=function(e,t,n){e.target.id===t&&document.querySelector("#".concat(n)).remove()},k=function(e,t){t.append(e)},C=function(e,t){for(var n=0;n<e.taskList.length;n+=1){var a=b(e.taskList[n],e.taskList);k(a,t)}},w=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},S=function(e){""===e.value&&e.classList.add("is-danger")},j=[];m=document.querySelector("#content"),(o=document.createElement("div")).classList.add("container","container-height"),(p=o).append((c=document.createElement("nav"),d=document.createElement("h2"),s=document.createElement("div"),l=document.createElement("button"),u=document.createElement("div"),c.classList.add("box","border"),d.textContent="Projects",u.id="projectFormContainer",s.id="projectsList",s.classList.add("mt-5"),l.textContent="Create Project",l.id="createProject",l.classList.add("button","button-info","is-small","mt-5"),c.append(d,u,s,l),c),function(){var e=document.createElement("main"),t=document.createElement("div"),n=document.createElement("h2"),a=document.createElement("button"),r=document.createElement("div"),i=document.createElement("div");return t.classList.add("is-flex","is-justify-content-space-between","my-5"),n.classList.add("is-size-5","has-text-weight-medium"),n.textContent="Tasks",a.classList.add("button","is-primary","is-small","has-text-dark"),a.id="createTask",a.textContent="Create New Task",r.id="formContainer",i.id="tasksContainer",i.classList.add("is-flex","is-flex-wrap-wrap","is-justify-content-center","mt-5"),t.append(n,a),e.append(t,r,i),e}()),m.append(function(){var e=document.createElement("div"),t=document.createElement("h1");return e.classList.add("top","has-background-primary","container"),t.classList.add("is-size-5"),t.textContent="To-do",e.appendChild(t),e}(),p),j.push(new f("Default")),localStorage.setItem("projectIndex",0);var T=document.querySelector("#tasksContainer");j[0].addTask(new r("Take out trash","Do it after lunch","2030-12-05","Low")),j[0].addTask(new r("Check TypeScript","Set up an initial project","2030-12-05","Medium")),j[0].addTask(new r("Study HTTP/TCP protocol","Difference between TCP and UDP","2030-12-05","High")),C(j[0],T),function(e){for(var t=document.querySelector("#projectsList"),n=0;n<e.length;n+=1)t.appendChild(g(e[n],e))}(j);var q=document.querySelector("#createTask"),A=document.querySelector("main"),I=document.querySelector("#createProject"),N=document.querySelector("nav"),O=document.querySelector("#projectsList"),P=document.querySelector("#tasksContainer");q.addEventListener("click",(function(){return x("formContainer","form",h)})),A.addEventListener("click",(function(e){!function(e,t){var n=document.querySelector("#title"),a=document.querySelector("#date");if("addTask"===e.target.id)if(""!==n.value&&""!==a.value){var i=function(){var e=document.querySelector("#title"),t=document.querySelector("#description"),n=document.querySelector("#date"),a=document.querySelector("#priority"),i=null;return""!==e.value&&(i=new r(e.value,t.value,n.value,a.value)),i}(),o=document.querySelector("#tasksContainer"),c=t[JSON.parse(localStorage.getItem("projectIndex"))];c.addTask(i),w(o),C(c,o),L(e,"addTask","form")}else S(n),S(a)}(e,j)})),I.addEventListener("click",(function(){return x("projectFormContainer","projectForm",y)})),N.addEventListener("click",(function(e){return function(e,t){var n=document.querySelector("#projectTitle");if("addProject"===e.target.id&&""!==n.value){var a=function(){var e=document.querySelector("#projectTitle"),t=null;return""!==e.value&&(t=new f(e.value)),t}(),r=document.querySelector("#projectsList");t.push(a),w(r),function(e,t,n){for(var a=0;a<t.length;a+=1)e.append(n(t[a],t))}(r,t,g),L(e,"addProject","projectForm")}}(e,j)})),O.addEventListener("click",(function(e){return function(e,t,n){if(null!==e.target.parentElement.getAttribute("data-index")){var a=e.target.parentElement.getAttribute("data-index");localStorage.setItem("projectIndex",a),w(n),C(t[a])}}(e,j,T)})),P.addEventListener("click",(function(e){!function(e,t){if("Delete"===e.target.textContent){var n=e.target.parentElement.parentElement.getAttribute("data-attribute"),a=document.querySelector("#tasksContainer"),r=t[JSON.parse(localStorage.getItem("projectIndex"))];r.removeTask(n),w(a),C(r,a)}}(e,j)})),P.addEventListener("click",(function(e){!function(e){if("done"===e.target.parentElement.parentElement.id){var t=e.target.parentElement.parentElement.parentElement.parentElement.parentElement;t.classList.toggle("done"),t.classList.toggle("has-background-grey-light")}}(e)})),P.addEventListener("click",(function(e){!function(e){"displayDetails"===e.target.parentElement.parentElement.id&&e.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].classList.toggle("hidden")}(e)})),P.addEventListener("input",(function(e){!function(e,t){if("date"===e.target.id){var n=e.target.value,a=e.target.parentElement.parentElement.parentElement.getAttribute("data-attribute");t[JSON.parse(localStorage.getItem("projectIndex"))].taskList[a].dueDate=n}}(e,j)})),P.addEventListener("input",(function(e){!function(e,t){if("description"===e.target.id){var n=e.target.value,a=e.target.parentElement.parentElement.parentElement.getAttribute("data-attribute");t[JSON.parse(localStorage.getItem("projectIndex"))].taskList[a].description=n}}(e,j)})),P.addEventListener("input",(function(e){!function(e,t){if("taskTitle"===e.target.id){var n=e.target.value,a=e.target.parentElement.parentElement.getAttribute("data-attribute");t[JSON.parse(localStorage.getItem("projectIndex"))].taskList[a].title=n}}(e,j)})),P.addEventListener("input",(function(e){!function(e,t){if("priority"===e.target.id){var n=e.target.classList,a=e.target.value,r=e.target.parentElement.parentElement.getAttribute("data-attribute"),i=t[JSON.parse(localStorage.getItem("projectIndex"))];n.replace(n[n.length-1],E(e.target.value)),i.taskList[r].priority=a}}(e,j)}))})()})();