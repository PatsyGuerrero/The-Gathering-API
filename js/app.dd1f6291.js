(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8b04c318"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-pages/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ab0":function(t,e,n){"use strict";n("c432")},4066:function(t,e,n){"use strict";n("568e")},"568e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"route",attrs:{to:"/",exact:""}},[t._v("Home")]),t._v(" | ")],1),n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),s={},l=Object(i["a"])(s,r,o,!1,null,null,null),c=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Container")],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"people"}},[n("div",{staticClass:"filter"},[n("multiselect",{attrs:{options:t.options},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("h1",[t._v(t._s(t.filteredPeople.length))]),n("div",{staticClass:"containerClass"},t._l(t.filteredPeople,(function(t,e){return n("Card",{key:e,attrs:{name:t.name,id:t.id,img:t.imageUrl,types:t.types,artist:t.artist,flavor:t.flavor}})})),1)])},m=[],v=n("1da1"),h=(n("4de4"),n("96cf"),n("bc3a")),g=n.n(h),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cards"},[n("router-link",{staticClass:"router_active",attrs:{to:{name:"details",params:{id:t.id}}}},[n("h1",[t._v(t._s(t.name))])]),n("img",{attrs:{alt:"Game",src:t.img}})],1)},y=[],_={props:{name:{type:String},img:{type:String},id:{type:String},types:{type:Array},artist:{type:String},flavor:{type:String}}},C=_,w=(n("0ab0"),Object(i["a"])(C,b,y,!1,null,null,null)),j=w.exports,O=n("10f6"),x=n.n(O);a["a"].component("multiselect",x.a);var P={name:"Container",components:{Card:j,Multiselect:x.a},data:function(){return{data:null,selectedCategory:"All",upto:10,size:null,value:"All",options:["All","Artifact","Autobot","Character","Conspiracy","Creature","Dragon","Elemental","Enchantment","Goblin","Hero","instant","Instant","Jaguar","Knights","Land","Phenomenon","Plane","Planeswalker","Scheme","Sorcery","Specter","Summon","Tribal","Vanguard","Wolf","You’ll"]}},mounted:function(){this.getTodos(),this.totalPage()},methods:{getTodos:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.magicthegathering.io/v1/cards").then((function(e){t.data=e.data.cards})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}},computed:{filteredPeople:function(){var t=this,e=t.value;return"All"===e?t.data:null===t||void 0===t?void 0:t.data.filter((function(t){return t.types[0]===e}))}}},S=P,k=(n("88b1"),Object(i["a"])(S,f,m,!1,null,null,null)),E=k.exports,A={name:"Home",components:{Container:E}},T=A,$=Object(i["a"])(T,d,p,!1,null,null,null),G=$.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"principal"},[n("div",{staticClass:"detail"},[n("div",{staticClass:"cont_izq"},[n("h1",[t._v(" "+t._s(t.detail.name)+" ")]),n("div",{staticClass:"cont_img"},[n("img",{attrs:{alt:"Game",src:t.detail.imageUrl}})])]),n("div",{staticClass:"cont_der"},[n("h2",[t._v(t._s(t.detail.power))]),n("span",[t._v(t._s(t.detail.originalText))]),n("p",[t._v(t._s(t.detail.type))]),n("p",[t._v(t._s(t.detail.artist))])])])])},H=[],J={data:function(){return{detail:null}},mounted:function(){this.detailGame()},methods:{detailGame:function(){var t=this;g.a.get("https://api.magicthegathering.io/v1/cards/".concat(this.$route.params.id)).then((function(e){console.log(e.data),t.detail=e.data.card})).catch((function(t){console.log(t)}))}}},L=J,q=(n("4066"),Object(i["a"])(L,M,H,!1,null,"2b7e782c",null)),z=q.exports;a["a"].use(u["a"]);var R=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/game/:id",name:"details",component:z,props:!0}],U=new u["a"]({mode:"history",base:"/vue-pages/",routes:R}),D=U,I=n("2f62");a["a"].use(I["a"]),a["a"].config.productionTip=!1,new a["a"]({router:D,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5faf":function(t,e,n){},"88b1":function(t,e,n){"use strict";n("5faf")},"9c0c":function(t,e,n){},c432:function(t,e,n){}});
//# sourceMappingURL=app.dd1f6291.js.map