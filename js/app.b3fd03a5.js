(function(e){function t(t){for(var c,i,r=t[0],s=t[1],u=t[2],l=0,d=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},a={app:0},o=[];function i(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a57a04ee"}[e]+".js"}function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=a[e]=[t,c]}));t.push(n[2]=c);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",u.name="ChunkLoadError",u.type=c,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-workshop/",r.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1704:function(e,t,n){"use strict";n("c4ee")},2259:function(e,t,n){},2457:function(e,t,n){},2516:function(e,t,n){},"4aa9":function(e,t,n){"use strict";n("2516")},"4d0c":function(e,t,n){"use strict";n("ee26")},"4ed7":function(e,t,n){"use strict";n("2457")},"4f32":function(e,t,n){"use strict";n("e2a1")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={id:"nav"},o=Object(c["f"])("Home"),i=Object(c["f"])(" | "),r=Object(c["f"])("About");function s(e,t,n,s,u,l){var b=Object(c["A"])("router-link"),d=Object(c["A"])("router-view");return Object(c["t"])(),Object(c["e"])(c["a"],null,[Object(c["g"])("div",a,[Object(c["g"])(b,{to:"/"},{default:Object(c["G"])((function(){return[o]})),_:1}),i,Object(c["g"])(b,{to:"/about"},{default:Object(c["G"])((function(){return[r]})),_:1})]),Object(c["g"])(d)],64)}var u={name:"app-component"};n("4d0c");u.render=s;var l=u,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),d={class:"home"};function p(e,t,n,a,o,i){var r=Object(c["A"])("home-header-component"),s=Object(c["A"])("home-nav-bar"),u=Object(c["A"])("home-main-component"),l=Object(c["A"])("home-footer-component");return Object(c["t"])(),Object(c["e"])("div",d,[Object(c["g"])(r),Object(c["g"])(s),Object(c["g"])(u),Object(c["g"])(l)])}var f=Object(c["I"])("data-v-3300d0af");Object(c["w"])("data-v-3300d0af");var O=Object(c["g"])("div",{class:"image-container"},[Object(c["g"])("div",null,[Object(c["g"])("p",null,[Object(c["g"])("span",null," what "),Object(c["f"])(" its like to travel to "),Object(c["g"])("span",null,"hawaii"),Object(c["f"])(" right now ")]),Object(c["g"])("p",null,[Object(c["g"])("span",null,"free"),Object(c["g"])("span",null,"flights to remote workers")])])],-1);Object(c["u"])();var j=f((function(e,t,n,a,o,i){return Object(c["t"])(),Object(c["e"])("header",null,[O])})),h={name:"header-app",data:function(){return{name:"header-app"}}};n("4ed7");h.render=j,h.__scopeId="data-v-3300d0af";var g=h,m=(n("b0c0"),Object(c["I"])("data-v-407a1472")),v=m((function(e,t,n,a,o,i){return Object(c["t"])(),Object(c["e"])("nav",null,[Object(c["g"])("ul",null,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(o.links,(function(e,t){return Object(c["t"])(),Object(c["e"])("li",{key:t},[Object(c["g"])("a",{class:{active:e.isActive},onClick:function(t){return i.naveToSection(e)}},Object(c["C"])(e.name),11,["onClick"])])})),128))])])})),w={name:"app-nav-bar",data:function(){return{links:[{name:"section1",hash:"#section1",isActive:!1},{name:"section2",hash:"#section2",isActive:!1},{name:"section3",hash:"#section3",isActive:!1}],activeLink:void 0}},methods:{activeRoute:function(e){this.activeLink&&(this.activeLink.isActive=!1),this.activeLink=e,this.activeLink.isActive=!e.isActive},naveToSection:function(e){var t=this;this.$router.push(e.hash).then((function(){t.activeRoute(e)}))},checkRoute:function(){window.scrollY>=990?this.activeRoute(this.links[2]):window.scrollY>=807?this.activeRoute(this.links[1]):window.scrollY>=572&&this.activeRoute(this.links[0])}},mounted:function(){document.addEventListener("scroll",this.checkRoute)}};n("c842");w.render=v,w.__scopeId="data-v-407a1472";var k=w,y=Object(c["I"])("data-v-aede5c68"),x=y((function(e,t,n,a,o,i){var r=Object(c["A"])("app-section1"),s=Object(c["A"])("app-section2"),u=Object(c["A"])("app-section3");return Object(c["t"])(),Object(c["e"])("main",null,[Object(c["g"])(r),Object(c["g"])(s),Object(c["g"])(u)])})),S=n("872d"),_=n.n(S),A=Object(c["I"])("data-v-322d5f06");Object(c["w"])("data-v-322d5f06");var I={id:"section1",class:"container"},C=Object(c["g"])("div",{class:"card"},[Object(c["g"])("div",{class:"card-image"},[Object(c["g"])("img",{src:_.a})]),Object(c["g"])("div",{class:"card-container"},[Object(c["g"])("p",{class:"card-title"},"section 1"),Object(c["g"])("ul",{class:"card-content"},[Object(c["g"])("li",null,[Object(c["g"])("p",{class:"contnet-head"},"Population"),Object(c["g"])("p",{class:"contnet-body"},"Total (1,415,872), Rank (40th)")]),Object(c["g"])("li",null,[Object(c["g"])("p",{class:"contnet-head"},"Dimensions"),Object(c["g"])("p",{class:"contnet-body"}," Length 1,522 mi (2,450 km) . Width n/a mi (n/a km) ")]),Object(c["g"])("li",null,[Object(c["g"])("p",{class:"contnet-head"},"Language"),Object(c["g"])("p",{class:"contnet-body"},"Official languages English, Hawaiian")]),Object(c["g"])("li",null,[Object(c["g"])("p",{class:"contnet-head"},"Largest city"),Object(c["g"])("p",{class:"contnet-body"},"The capital (Honolulu)")]),Object(c["g"])("li",null,[Object(c["g"])("p",{class:"contnet-head"},"Largest metro"),Object(c["g"])("p",{class:"contnet-body"},"The largest metro in Island of O`ahu")]),Object(c["g"])("li",null,[Object(c["g"])("p",{class:"contnet-head"},"Elevation"),Object(c["g"])("p",{class:"contnet-body"},"Highest elevation 13,796 ft (4,205.0 m)")])])])],-1);Object(c["u"])();var B=A((function(e,t,n,a,o,i){return Object(c["t"])(),Object(c["e"])("section",I,[C])})),L={name:"main-app",data:function(){return{checkBox:!1}},methods:{toggleCheckBox:function(){this.checkBox=!this.checkBox}}};n("4aa9");L.render=B,L.__scopeId="data-v-322d5f06";var T=L,R=Object(c["I"])("data-v-74fadba6");Object(c["w"])("data-v-74fadba6");var H={id:"section2",class:"container"},P=Object(c["g"])("p",{class:"title"},"section 2",-1),E={class:"card-collabse"},q={class:"form-group"},M=Object(c["g"])("label",{class:"inlinelabel",for:"checkId"},"1779",-1),z=Object(c["g"])("p",{class:"card-description"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod dolorem optio, repellendus possimus, hic consequatur aperiam vero velit recusandae facere a ducimus. Totam a quis ad, quasi aliquam excepturi! ",-1),$=Object(c["g"])("span",{class:"arrow"},[Object(c["g"])("span",{class:"arrow-head"})],-1),D={class:"line-indicator"};Object(c["u"])();var Y=R((function(e,t,n,a,o,i){return Object(c["t"])(),Object(c["e"])("section",H,[P,Object(c["g"])("div",E,[Object(c["g"])("form",q,[Object(c["g"])("input",{class:"card-checkbox",id:"checkId",ref:"checkBoxRef",type:"checkbox",checked:o.checkBox,onClick:t[1]||(t[1]=function(){return i.toggleCheckBox&&i.toggleCheckBox.apply(i,arguments)})},null,8,["checked"]),M]),z,Object(c["g"])(c["b"],{name:"fade"},{default:R((function(){return[Object(c["H"])(Object(c["g"])("ul",{class:"card-body",onClick:t[2]||(t[2]=function(){return e.test&&e.test.apply(e,arguments)})},[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(o.items,(function(e,t){return Object(c["t"])(),Object(c["e"])("li",{key:t,class:"card-item"},[Object(c["g"])("span",null,Object(c["C"])(e),1),$])})),128))],512),[[c["E"],o.checkBox]])]})),_:1}),Object(c["H"])(Object(c["g"])("span",D,null,512),[[c["E"],o.checkBox]])])])})),G={name:"main-app",data:function(){return{checkBox:!1,items:[1997,1998,1779,1774,1820]}},methods:{toggleCheckBox:function(){this.checkBox=!this.checkBox}}};n("6d99");G.render=Y,G.__scopeId="data-v-74fadba6";var J=G,F=Object(c["I"])("data-v-5f06bab0");Object(c["w"])("data-v-5f06bab0");var N={id:"section3",class:"carousel-container"},V=Object(c["g"])("p",null,"section 3",-1);Object(c["u"])();var W=F((function(e,t,n,a,o,i){var r=Object(c["A"])("swiper-slide"),s=Object(c["A"])("swiper");return Object(c["t"])(),Object(c["e"])("section",N,[V,Object(c["g"])(s,{navigation:"",thumbs:{swiper:o.thumbsSwiper}},{default:F((function(){return[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(o.images,(function(e){return Object(c["t"])(),Object(c["e"])(r,{key:e.id},{default:F((function(){return[Object(c["g"])("img",{class:"img-selected",src:e.url},null,8,["src"])]})),_:2},1024)})),128))]})),_:1},8,["thumbs"]),Object(c["g"])(s,{"slides-per-view":4,"space-between":20,onSlideChange:i.onSlideChange,scrollbar:{draggable:!0},virtualIndex:e.index,onSwiper:i.setThumbsSwiper,"watch-slides-visibility":"","watch-slides-progress":""},{default:F((function(){return[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(o.images,(function(e){return Object(c["t"])(),Object(c["e"])(r,{key:e.id},{default:F((function(){return[Object(c["g"])("img",{class:"img-swipe",src:e.url},null,8,["src"])]})),_:2},1024)})),128))]})),_:1},8,["onSlideChange","virtualIndex","onSwiper"])])})),K=n("1da1"),Q=(n("96cf"),n("6d3b")),U=n("8343"),X=n("5dc8"),Z=n("029e"),ee=n("6577"),te=n("76b7"),ne=n("cc84"),ce=n("90ea"),ae=n("a16a"),oe=(n("5f67"),n("bc3a").default);Q["a"].use([U["a"],X["a"],Z["a"],ee["a"],te["a"],ne["a"]]);var ie={name:"app-section2",components:{Swiper:ce["a"],SwiperSlide:ae["a"]},data:function(){return{images:[],Swiper:ce["a"],SwiperSlide:ae["a"],thumbsSwiper:null}},methods:{onSlideChange:function(){},setThumbsSwiper:function(e){this.thumbsSwiper=e},fetchData:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,oe.get("https://jsonplaceholder.typicode.com/photos?albumId=1");case 2:n=t.sent,200==n.status?e.images=n.data:alert("faild to get images please try again");case 4:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.fetchData()}};n("4f32");ie.render=W,ie.__scopeId="data-v-5f06bab0";var re=ie,se={name:"main-app",components:{AppSection1:T,AppSection2:J,AppSection3:re}};n("ac17");se.render=x,se.__scopeId="data-v-aede5c68";var ue=se,le=Object(c["I"])("data-v-24682452");Object(c["w"])("data-v-24682452");var be=Object(c["g"])("div",{class:"container"},[Object(c["g"])("p",null,"all right reserved copyright @2021"),Object(c["g"])("ul",null,[Object(c["g"])("li",null,[Object(c["g"])("a",null,"sitmap")]),Object(c["g"])("li",null,[Object(c["g"])("a",null,"terms and conditions")]),Object(c["g"])("li",null,[Object(c["g"])("a",null,"privacy")]),Object(c["g"])("li",null,[Object(c["g"])("a",null,"help")])])],-1);Object(c["u"])();var de=le((function(e,t,n,a,o,i){return Object(c["t"])(),Object(c["e"])("footer",null,[be])})),pe={name:"footer-app"};n("1704");pe.render=de,pe.__scopeId="data-v-24682452";var fe=pe,Oe={name:"home-app",components:{homeHeaderComponent:g,homeMainComponent:ue,homeFooterComponent:fe,homeNavBar:k},data:function(){return{}},methods:{checkRoute:function(e){console.log(e),console.info("Home mounted",this.$route),console.info("Home mounted",this.$router)}},mounted:function(){console.info("Home mounted",this.$router)}};Oe.render=p;var je=Oe,he=[{path:"/",name:"Home",component:je},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ge=Object(b["a"])({history:Object(b["b"])("/vue-workshop/"),routes:he,scrollBehavior:function(e){if(e.hash)return new Promise((function(t){setTimeout((function(){t({el:e.hash,top:100,behavior:"smooth"})}),0)}))}}),me=ge,ve=n("5502"),we=Object(ve["a"])({state:{},mutations:{},actions:{},modules:{}});n("f5df1"),n("5903");Object(c["d"])(l).use(we).use(me).mount("#app")},5903:function(e,t,n){},"6d99":function(e,t,n){"use strict";n("2259")},"872d":function(e,t,n){e.exports=n.p+"img/sec-01.110cf94e.png"},ac17:function(e,t,n){"use strict";n("fa62")},c4ee:function(e,t,n){},c830:function(e,t,n){},c842:function(e,t,n){"use strict";n("c830")},e2a1:function(e,t,n){},ee26:function(e,t,n){},fa62:function(e,t,n){}});
//# sourceMappingURL=app.b3fd03a5.js.map