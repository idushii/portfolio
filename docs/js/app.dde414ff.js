(function(t){function e(e){for(var i,s,a=e[0],c=e[1],l=e[2],u=0,d=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function s(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d99facbe"}[t]+".js"}function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=r[t]=[e,i]}));e.push(n[2]=i);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="https://idushii.github.io/portfolio/docs/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"container"},[n("router-view")],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"nav-wrapper"},[n("a",{staticClass:"brand-logo",attrs:{href:"#"}},[t._v("ИП Ильинов Николай")]),n("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}})])])}],s=(n("5c0b"),n("2877")),a={},c=Object(s["a"])(a,r,o,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.items,(function(t,e){return n("list-item-record",{key:"item-"+e,staticClass:"col s6 m4",attrs:{title:t.title,desc:t.desc,link:t.link,links:t.links,prev:t.prev}})})),1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image waves-effect waves-block waves-light"},[t.img?n("img",{staticClass:"activator",attrs:{src:t.img}}):t._e()]),n("div",{staticClass:"card-content"},[n("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" "+t._s(t.title)+" "),n("i",{staticClass:"material-icons right"},[t._v("more_vert")])]),n("p",[n("a",{attrs:{href:t.MainLink,target:"_blank"}},[t._v("Ссылка")])])]),n("div",{staticClass:"card-reveal"},[n("span",{staticClass:"card-title grey-text text-darken-4"},[t._v(" "+t._s(t.title)+" "),n("i",{staticClass:"material-icons right"},[t._v("close")])]),n("p",[t._v(t._s(t.desc))]),t.link?n("a",{attrs:{href:t.link,target:"_blank"}},[t._v("Ссылка")]):t._e(),t.links?t._l(t.links,(function(e){var i=e.link,r=e.title;return n("p",{key:"item-"+i},[n("a",{attrs:{href:i,target:"_blank"}},[t._v(t._s(r))])])})):t._e()],2)])])},h=[],v=(n("9911"),{name:"ListItemRecord",props:{prev:{type:String,default:""},title:{type:String,default:""},desc:{type:String,default:""},link:{type:[String,Boolean],default:!1},links:{type:[Array,Boolean],default:!1}},computed:{img:function(){return this.prev?"https://idushii.github.io/portfolio/img/prev/".concat(this.prev):"https://via.placeholder.com/150"},MainLink:function(){return this.link?this.link:this.links[0].link}}}),g=v,m=(n("65ee"),Object(s["a"])(g,f,h,!1,null,"48719e64",null)),k=m.exports,b={name:"home",computed:{items:function(){return this.$store.state.projects}},components:{ListItemRecord:k}},w=b,_=(n("8913"),Object(s["a"])(w,p,d,!1,null,"2db2dd0c",null)),j=_.exports;i["a"].use(u["a"]);var y=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],x=new u["a"]({routes:y}),C=x,O=n("2f62");i["a"].use(O["a"]);var S=new O["a"].Store({state:{projects:[{title:"Профиль github",link:"https://github.com/idushii",prev:"1.jpg"},{title:"Генерация xlsx файла",desc:"Форма генерации xlsx таблицы с помощью vue js по заранее заданной таблице артикулов",link:"http://simle-db.j693917.myjino.ru/",prev:"2.jpg"},{title:"Список задач",desc:"Реализовано с использованием firebase",link:"https://task-list-2013c.web.app/#/",prev:"3.jpg"},{title:"Заготовка Tower Defence",desc:"Изучение three js (3D игра защита башен)",link:"http://tower-game.surge.sh/",prev:"4.jpg"},{title:'Проект "Изучение китайского языка"',desc:"Реализовано с использованием Nuxt JS",links:[{link:"http://sayana.surge.sh",title:"Заготовка front"},{link:"https://github.com/idushii/Kitai",title:"Полный репозиторий"}],prev:"5.jpg"},{title:'Проект "Чат"',desc:"Реализовано с использованием websockets",links:[{link:"http://chat.j693917.myjino.ru/#/",title:"Демо front"},{link:"https://bitbucket.org/Nic34_/chat/",title:"Репозиторий front"},{link:"https://bitbucket.org/Nic34_/chat-server/",title:"Репозиторий back"}],prev:"6.jpg"},{title:"Генератор иконок окон",desc:"npm пакет генерации иконок окон",links:[{link:"http://heavenly-effect.surge.sh/",title:"Вариант 1"},{link:"http://window-icon.surge.sh/",title:"Вариант 2"},{link:"https://www.npmjs.com/package/windows-icon-generate",title:"Сам npm пакет"}],prev:"7.jpg"},{title:"Bootstrap компоненты",desc:'npm пакет "Bootstrap компоненты"',link:"https://www.npmjs.com/package/vue-bootstrap-elements",prev:"8.jpg"},{title:"Расширение vs code",desc:'Расширение для упрощения генерации файл-компонентов vue js. Полное название: "generator-vue-components"',links:[{link:"https://marketplace.visualstudio.com/items?itemName=Nic34.generator-vue-components",title:"vs code marketplace"},{link:"https://github.com/idushii/generator-vue-components",title:"Репозиторий"}],prev:"9.jpg"},{title:"PDF make JS",desc:"Изучение генерации pdf с использованием фреймворка pdfmake. Пример взят случайный. Все совпадения данных исключительно случайны.",links:[{link:"http://pdfmake.surge.sh",title:"Ссылка"}],prev:"10.jpg"},{title:"Video record API",desc:"Измение процесса записи монитора с использованием api google chrome",links:[{link:"http://nic34-record-screen.surge.sh",title:"Ссылка"},{link:"https://bitbucket.org/Nic34_/record-screen",title:"Репозиторий"}],prev:"11.jpg"},{title:"API озвучивания текста",desc:"изучение api озвучки текста",links:[{link:"http://say.surge.sh/",title:"Ссылка"}],prev:"12.jpg"}]},mutations:{},actions:{},modules:{}}),P=n("9483");Object(P["a"])("".concat("https://idushii.github.io/portfolio/docs/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),i["a"].config.productionTip=!1,n("4d5c"),n("dc53"),new i["a"]({router:C,store:S,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},"65ee":function(t,e,n){"use strict";var i=n("85d6"),r=n.n(i);r.a},"85d6":function(t,e,n){},8913:function(t,e,n){"use strict";var i=n("e658"),r=n.n(i);r.a},"9c0c":function(t,e,n){},e658:function(t,e,n){}});
//# sourceMappingURL=app.dde414ff.js.map