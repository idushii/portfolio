(function(t){function e(e){for(var n,o,a=e[0],l=e[1],c=e[2],p=0,d=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"0973":function(t,e,i){"use strict";var n=i("b3a4"),r=i.n(n);r.a},"160c":function(t,e,i){},1785:function(t,e,i){"use strict";var n=i("2754"),r=i.n(n);r.a},2754:function(t,e,i){},3291:function(t,e,i){"use strict";var n=i("160c"),r=i.n(n);r.a},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),r=i.n(n);r.a},"63d7":function(t,e,i){"use strict";var n=i("706d"),r=i.n(n);r.a},"706d":function(t,e,i){},7109:function(t,e,i){},"73b3":function(t,e,i){"use strict";var n=i("7109"),r=i.n(n);r.a},"9c0c":function(t,e,i){},b3a4:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("MyMenu"),i("div",{staticClass:"container"},[i("router-view")],1)],1)},s=[],o=i("9ab4"),a=i("60a3"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i("div",{staticClass:"nav-wrapper indigo darken-1"},[i("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v("ИП Ильинов Николай")]),i("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[i("li",[i("router-link",{attrs:{to:"/"}},[t._v("Портфолио")])],1),i("li",[i("router-link",{attrs:{to:"/About"}},[t._v("Резюме")])],1),i("li",[i("router-link",{attrs:{to:"/Contacts"}},[t._v("Контакты")])],1)]),t._m(0)],1),i("ul",{staticClass:"sidenav",attrs:{id:"slide-out"}},[i("li",[i("router-link",{attrs:{to:"/"}},[t._v("Портфолио")])],1),i("li",[i("router-link",{attrs:{to:"/About"}},[t._v("Резюме")])],1),i("li",[i("router-link",{attrs:{to:"/Contacts"}},[t._v("Контакты")])],1)])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"slide-out"}},[i("i",{staticClass:"material-icons"},[t._v("menu")])])}],u=(i("4160"),i("159b"),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o["b"](e,t),e.prototype.mounted=function(){var t=this.MenuInstance;document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");t=M.Sidenav.init(e,{}),document.querySelectorAll(".sidenav a").forEach((function(e){e.onclick=function(){e.classList.contains("router-link-active")&&t[0].close()}}))}))},e=o["a"]([a["a"]],e),e}(a["c"])),p=u,d=p,v=i("2877"),g=Object(v["a"])(d,l,c,!1,null,"24c53216",null),m=g.exports,h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o["b"](e,t),e=o["a"]([Object(a["a"])({components:{MyMenu:m}})],e),e}(a["c"]),f=h,b=f,_=(i("5c0b"),Object(v["a"])(b,r,s,!1,null,null,null)),k=_.exports,y=i("8c4f"),w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col s12"},[i("div",{staticClass:"input-field col s12"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.tagsFilter,expression:"tagsFilter"}],attrs:{multiple:""},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.tagsFilter=e.target.multiple?i:i[0]},t.filterByTag]}},[i("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Выберите теги для фильтрации")]),t._l(t.tags,(function(e){return i("option",{key:"tag-"+e,domProps:{value:e}},[t._v(t._s(e))])}))],2),i("label",[t._v("Отбор по тегам")])]),i("div",{staticClass:"switch right"},[t._v(" Отобразить "),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inColumn,expression:"inColumn"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inColumn)?t._i(t.inColumn,null)>-1:t.inColumn},on:{change:function(e){var i=t.inColumn,n=e.target,r=!!n.checked;if(Array.isArray(i)){var s=null,o=t._i(i,s);n.checked?o<0&&(t.inColumn=i.concat([s])):o>-1&&(t.inColumn=i.slice(0,o).concat(i.slice(o+1)))}else t.inColumn=r}}}),i("span",{staticClass:"lever"}),t._v(" В колонку ")])])]),i("div",{staticClass:"col s12",class:[t.inColumn?"row":"my-grid"]},t._l(t.items,(function(e,n){return i("list-item-record",{key:"item-"+n,class:[t.inColumn?"col s12":""],attrs:{title:e.title,smallTitle:e.smallTitle,desc:e.desc,link:e.link,links:e.links,img:e.img,"in-column":t.inColumn}})})),1)])},j=[],S=(i("a4d3"),i("e01a"),i("d28b"),i("4de4"),i("caad"),i("d3b7"),i("2532"),i("3ca3"),i("ddb0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.inColumn?i("ItemHorizontal",{attrs:{title:t.title,img:t._img,desc:t.desc,link:t._link,links:t.links}}):i("ItemVertival",{attrs:{title:t.title,smallTitle:t.smallTitle,img:t._img,desc:t.desc,link:t._link,links:t.links}})],1)}),C=[],O=(i("9911"),function(){function t(t,e){void 0===e&&(e="Ссылка"),this.title="",this.link="",this.link=t,this.title=e}return Object.defineProperty(t.prototype,"url",{get:function(){return this.link},set:function(t){this.link=t},enumerable:!0,configurable:!0}),t}()),x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-image waves-effect waves-block waves-light"},[i("img",{staticClass:"activator",attrs:{src:t.img}})]),i("div",{staticClass:"card-content"},[i("span",{staticClass:"card-title activator grey-text text-darken-4"},[i("i",{staticClass:"material-icons right"},[t._v("more_vert")]),t._v(" "+t._s(t.smallTitle||t.title)+" ")]),i("p",[i("a",{attrs:{href:t.link.url,target:"_blank"}},[t._v(t._s(t.link.title))])])]),i("div",{staticClass:"card-reveal"},[i("span",{staticClass:"card-title grey-text text-darken-4"},[i("i",{staticClass:"material-icons right"},[t._v("close")]),t._v(" "+t._s(t.title)+" ")]),i("p",[t._v(t._s(t.desc))]),!t.links&&t.link?i("a",{staticClass:"default-link",attrs:{href:t.link.url,target:"_blank"}},[t._v(t._s(t.link.title))]):t._e(),t.links?t._l(t.links,(function(e){var n=e.link,r=e.title;return i("p",{key:"item-"+n},[i("a",{attrs:{href:n,target:"_blank"}},[t._v(t._s(r))])])})):t._e()],2)])},J=[],P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o["b"](e,t),o["a"]([Object(a["b"])(String)],e.prototype,"title",void 0),o["a"]([Object(a["b"])([String,Boolean])],e.prototype,"smallTitle",void 0),o["a"]([Object(a["b"])(String)],e.prototype,"img",void 0),o["a"]([Object(a["b"])(String)],e.prototype,"desc",void 0),o["a"]([Object(a["b"])([Object,Boolean])],e.prototype,"link",void 0),o["a"]([Object(a["b"])(Array)],e.prototype,"links",void 0),e=o["a"]([a["a"]],e),e}(a["c"]),V=P,A=V,T=(i("1785"),Object(v["a"])(A,x,J,!1,null,"343e71dc",null)),E=T.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card horizontal"},[i("div",{staticClass:"card-image"},[i("img",{attrs:{src:t.img}})]),i("div",{staticClass:"card-stacked"},[i("div",{staticClass:"card-content"},[i("p",{staticClass:"card-title",domProps:{textContent:t._s(t.title)}}),i("p",{domProps:{textContent:t._s(t.desc)}})]),i("div",{staticClass:"card-action"},[!t.links&&t.link?i("a",{staticClass:"default-link",attrs:{href:t.link.url,target:"_blank"}},[t._v(t._s(t.link.title))]):t._e(),t.links?t._l(t.links,(function(e){var n=e.link,r=e.title;return i("p",{key:"item-"+n},[i("a",{attrs:{href:n,target:"_blank"}},[t._v(t._s(r))])])})):t._e()],2)])])},B=[],N=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o["b"](e,t),o["a"]([Object(a["b"])(String)],e.prototype,"title",void 0),o["a"]([Object(a["b"])([String,Boolean])],e.prototype,"smallTitle",void 0),o["a"]([Object(a["b"])(String)],e.prototype,"img",void 0),o["a"]([Object(a["b"])(String)],e.prototype,"desc",void 0),o["a"]([Object(a["b"])([Object,Boolean])],e.prototype,"link",void 0),o["a"]([Object(a["b"])(Array)],e.prototype,"links",void 0),e=o["a"]([a["a"]],e),e}(a["c"]),F=N,L=F,I=(i("0973"),Object(v["a"])(L,$,B,!1,null,"22fb0a97",null)),D=I.exports,W=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o["b"](e,t),Object.defineProperty(e.prototype,"_img",{get:function(){return this.img?"https://idushii.github.io/portfolio/img/prev/"+this.img:"https://via.placeholder.com/150"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_link",{get:function(){return this.link?this.link:new O(this.links[0].link)},enumerable:!0,configurable:!0}),o["a"]([Object(a["b"])(Boolean)],e.prototype,"inColumn",void 0),o["a"]([Object(a["b"])(String)],e.prototype,"img",void 0),o["a"]([Object(a["b"])(String)],e.prototype,"title",void 0),o["a"]([Object(a["b"])([String,Boolean])],e.prototype,"smallTitle",void 0),o["a"]([Object(a["b"])(String)],e.prototype,"desc",void 0),o["a"]([Object(a["b"])([Object,Boolean])],e.prototype,"link",void 0),o["a"]([Object(a["b"])(Array)],e.prototype,"links",void 0),e=o["a"]([Object(a["a"])({components:{ItemVertival:E,ItemHorizontal:D}})],e),e}(a["c"]),z=W,q=z,R=Object(v["a"])(q,S,C,!1,null,null,null),Q=R.exports,H={name:"home",computed:{items:function(){if(this.tagsFilter.length){var t=this.tagsFilter;return this.$store.state.projects.filter((function(e){var i=!1,n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var l=o.value;e.tags.includes(l)&&(i=!0)}}catch(c){r=!0,s=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return i}))}return this.$store.state.projects},tags:function(){return this.$store.getters.tags}},data:function(){return{inColumn:!1,tagsFilter:[]}},components:{ListItemRecord:Q},mounted:function(){document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll("select");M.FormSelect.init(t,{})}))},methods:{filterByTag:function(t){}}},K=H,X=(i("63d7"),Object(v["a"])(K,w,j,!1,null,"e1a83136",null)),G=X.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col s12"},[i("h3",[t._v("Кто я?")]),i("p",[t._v("Я front-end разработчик, который использует Vuejs в работе. "),i("br"),t._v(" Для прототипрования использую bootstrap 4 или https://materializecss.com/. "),i("br"),t._v(" При работе использую scss, а так же современные возможности css (css var, ...). "),i("br"),t._v(" Работаю с css flex. "),i("br"),t._v(" Работаю с css grid, но т.к. у него не полная поддержка браузерами, использую в частных случаях. ")]),i("h3",[t._v("С чем я работаю?")]),i("p",[t._v(" Имею опыт работы с php, в частности с фреймворком https://codeigniter.com (3 и 4 (сейчас rс) версиями), "),i("br"),t._v(" БД MySQL или SQLite. ")]),i("h3",[t._v("Что я делаю?")]),i("p",[t._v(" Основное направление разработка web приложений, соответственно, использование codeingnter как json api сервер. ")]),i("h3",[t._v("Где можно еще найти информацию?")]),i("p",[t._v(" Мой профиль на stack overflow: https://ru.stackoverflow.com/users/208471/Николай ")]),i("p",[t._v(" Мои репозитории на github https://github.com/idushii ")]),i("h3",[t._v("Кстати")]),i("p",[t._v(" Знаком с ssr (https://ru.nuxtjs.org/), работал с node js (azura). Реализовывал программы c# (WPF) (простые). Реализовывал простые приложения на delphi. ")]),i("h3",[t._v("Что я умею?")]),i("ol",[i("li",[t._v("Web приложения с использванием VueJS "),i("i",[t._v("например калькулятор")])]),i("li",[t._v("Web сайты с использованием VueJS"),i("i",[t._v(", а так же wordpress")])]),i("li",[t._v("Настольные приложения с использованием ElectronJS и Vue JS ")]),i("li",[t._v("Мобильные приложения с использованием NativeScript и Vue JS "),i("i",[t._v("пока что учусь")])])]),i("h3",[t._v("Образование")]),i("p",[t._v(" Закончил бакалавриат ВКИ НГУ по направлению программирование. ")])])])}],Z={},tt=Z,et=(i("3291"),Object(v["a"])(tt,U,Y,!1,null,"423c6719",null)),it=et.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col s12"},[i("h3",[t._v("Контакты")]),i("p",[t._v("Email: idushii-mail@yandex.ru")]),i("p",[t._v("Skype: nicolay1232")]),i("p",[t._v("Telegram: @ilinov")])])])}],st={},ot=st,at=(i("73b3"),Object(v["a"])(ot,nt,rt,!1,null,"23dfedbc",null)),lt=at.exports;n["a"].use(y["a"]);var ct=[{path:"/",name:"home",component:G},{path:"/About",name:"About",component:it},{path:"/Contacts",name:"Contacts",component:lt}],ut=new y["a"]({routes:ct}),pt=ut,dt=(i("d81d"),i("b64b"),i("2f62"));n["a"].use(dt["a"]);var vt=new dt["a"].Store({state:{projects:[{title:"Профиль github",desc:"Мой профиль github",link:new O("https://github.com/idushii"),img:"1.jpg",tags:["Обо мне"]},{title:"Профиль stackoverflow",desc:"Мой профиль stackoverflow",link:new O("https://ru.stackoverflow.com/users/208471/%d0%9d%d0%b8%d0%ba%d0%be%d0%bb%d0%b0%d0%b9"),img:"14.jpg",tags:["Обо мне"]},{title:"Канал VueJS Jobs",desc:"Учебный проект. Представление данных канала в удобном визуальном виде.  Изучение VueJS + ts. Тесты компонентов.",links:[new O("https://idushii.github.io/tg-vue-jobs/"),new O("https://github.com/idushii/tg-vue-jobs","Репозиторий")],img:"15.jpg",tags:["VueJS","TypeScript","Test"]},{title:"API hh ru",desc:"Изучение api hh ru. Изучение VueJS + ts. Тесты компонентов.",links:[new O("https://idushii.github.io/hhru/"),new O("https://github.com/idushii/hhru","Репозиторий")],img:"13.jpg",tags:["VueJS","TypeScript","Test"]},{title:"Laravel Simple Blog",desc:"Учебный проект по Laravel. Изучение ORM, авторизация, миграции, сиды. Изучение привязки компонентов VueJS к проекту Laravel. Изучение шаблонизатора blade. Изучение использования API вместе с laravel.",links:[new O("https://github.com/idushii/laravel-simle-blog","Репозиторий")],img:"16.jpg",tags:["Laravel","Учебный проект","ORM","php"]},{title:"Список задач",desc:"Реализовано с использованием firebase",link:new O("https://task-list-2013c.web.app/#/"),img:"3.jpg",tags:["VueJS","Firebase"]},{title:"Заготовка Tower Defence",desc:"Изучение three js (3D игра защита башен)",link:new O("http://tower-game.surge.sh/"),img:"4.jpg",tags:["ThreeJS","3D"]},{smallTitle:'"Изучение китайского языка"',title:'Проект "Изучение китайского языка"',desc:"Реализовано с использованием Nuxt JS",links:[new O("http://sayana.surge.sh","Заготовка front"),new O("https://github.com/idushii/Kitai","Полный репозиторий")],img:"5.jpg",tags:["VueJS","NuxtJS","MySQL"]},{title:'Проект "Чат"',desc:"Реализовано с использованием websockets",links:[new O("http://chat.j693917.myjino.ru/#/","Демо front"),new O("https://bitbucket.org/app-ew/chat/","Репозиторий front"),new O("https://bitbucket.org/app-ew/chat-server/","Репозиторий back")],img:"6.jpg",tags:["VueJS","NodeJS","WebSockets","Учебный проект"]},{title:"Генератор иконок окон",desc:"npm пакет генерации иконок окон",links:[new O("http://heavenly-effect.surge.sh/","Вариант 1"),new O("http://window-icon.surge.sh/","Вариант 2"),new O("https://www.npmjs.com/package/windows-icon-generate","Сам npm пакет")],img:"7.jpg",tags:["VueJS","NPM пакет"]},{title:"Bootstrap компоненты",desc:'npm пакет "Bootstrap компоненты"',links:[new O("https://www.npmjs.com/package/vue-bootstrap-elements"),new O("https://github.com/idushii/vue-bootstrap-elements","Репозиторий")],img:"8.jpg",tags:["VueJS","Bootstrap","NPM пакет"]},{title:"Расширение vs code",desc:'Расширение для упрощения генерации файл-компонентов vue js. Полное название: "generator-vue-components"',links:[new O("https://marketplace.visualstudio.com/items?itemName=Nic34.generator-vue-components","vs code marketplace"),new O("https://github.com/idushii/generator-vue-components","Репозиторий")],img:"9.jpg",tags:["VueJS","VS Code Extension"]},{title:"PDF make JS",desc:"Изучение генерации pdf с использованием фреймворка pdfmake. Пример взят случайный. Все совпадения данных исключительно случайны.",link:new O("http://pdfmake.surge.sh"),img:"10.jpg",tags:["PDF","PdfMake","Учебный проект"]},{title:"Video record API",desc:"Измение процесса записи монитора с использованием api google chrome",links:[new O("http://nic34-record-screen.surge.sh"),new O("https://bitbucket.org/Nic34_/record-screen","Репозиторий")],img:"11.jpg",tags:["Video Record","Web API","VueJS"]},{title:"API озвучивания текста",desc:"изучение api озвучки текста",links:[new O("http://say.surge.sh/")],img:"12.jpg",tags:["SpeechSynthesis","Web API","VueJS"]},{title:"Генерация xlsx файла",desc:"Форма генерации xlsx таблицы с помощью vue js по заранее заданной таблице артикулов",link:new O("http://simle-db.j693917.myjino.ru/"),img:"2.jpg",tags:["Xlsx","VueJS"]}]},getters:{tags:function(t){var e=t.projects.map((function(t){return t.tags})),i={},n=!0,r=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var l=o.value,c=!0,u=!1,p=void 0;try{for(var d,v=l[Symbol.iterator]();!(c=(d=v.next()).done);c=!0){var g=d.value;i[g]=!0}}catch(m){u=!0,p=m}finally{try{c||null==v.return||v.return()}finally{if(u)throw p}}}}catch(m){r=!0,s=m}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return Object.keys(i)}},mutations:{},actions:{},modules:{}}),gt=i("9483");Object(gt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,i("4d5c"),i("dc53"),new n["a"]({router:pt,store:vt,render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.2f399488.js.map