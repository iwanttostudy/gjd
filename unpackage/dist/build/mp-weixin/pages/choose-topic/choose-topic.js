(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/choose-topic/choose-topic"],{"0e7c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("a34a"));function c(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,c,s,u){try{var a=t[s](u),r=a.value}catch(o){return void n(o)}a.done?e(r):Promise.resolve(r).then(i,c)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,c){var u=t.apply(e,n);function a(t){s(u,i,c,a,r,"next",t)}function r(t){s(u,i,c,a,r,"throw",t)}a(void 0)}))}}var a={data:function(){return{scrollTop:0,current:0,menuHeight:0,menuItemHeight:0,classList:[],classId:"",topicList:[],loadStatus:"loadmore",keyword:""}},onLoad:function(t){t.class_id&&(this.classId=t.class_id),this.getClassList()},methods:{chooseTopic:function(e,n){var i=getCurrentPages(),c=(i[i.length-1],i[i.length-2]);c.$vm.form.topic_id=e,c.$vm.topicName=n,t.navigateBack()},search:function(){t.navigateTo({url:"/pages/topic-list/topic-list?keyword="+this.keyword})},getClassList:function(){var t=this,e=this;this.$H.get("topic/classList").then((function(n){t.classList=n.result,t.classId?t.classList.forEach((function(i,c){i.cate_id==e.classId&&(t.classId=n.result[c].cate_id,t.swichMenu(c))})):(t.classId=n.result[0].cate_id,t.getTopicList())}))},getTopicList:function(){var t=this;this.loadStatus="loading",this.$H.get("topic/list",{class_id:this.classId}).then((function(e){t.topicList=t.topicList.concat(e.result.data),e.result.current_page===e.result.last_page||0===e.result.last_page?t.loadStatus="nomore":t.loadStatus="loadmore"}))},swichMenu:function(t){var e=this;return u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t!=e.current){n.next=2;break}return n.abrupt("return");case 2:if(e.current=t,0!=e.menuHeight&&0!=e.menuItemHeight){n.next=8;break}return n.next=6,e.getElRect("menu-scroll-view","menuHeight");case 6:return n.next=8,e.getElRect("u-tab-item","menuItemHeight");case 8:e.scrollTop=t*e.menuItemHeight+e.menuItemHeight/2-e.menuHeight/2,e.classId=e.classList[t].cate_id,e.topicList=[],e.getTopicList();case 12:case"end":return n.stop()}}),n)})))()},getElRect:function(e,n){var i=this;new Promise((function(c,s){var u=t.createSelectorQuery().in(i);u.select("."+e).fields({size:!0},(function(t){t?i[n]=t.height:setTimeout((function(){i.getElRect(e)}),10)})).exec()}))}}};e.default=a}).call(this,n("543d")["default"])},b01a:function(t,e,n){"use strict";n.r(e);var i=n("0e7c"),c=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=c.a},b34f:function(t,e,n){"use strict";var i=n("edc9"),c=n.n(i);c.a},e2c4:function(t,e,n){"use strict";(function(t){n("2be1");i(n("66fd"));var e=i(n("faa1"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},edc9:function(t,e,n){},f6c9:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uSearch:function(){return n.e("uview-ui/components/u-search/u-search").then(n.bind(null,"6646"))},uImage:function(){return n.e("uview-ui/components/u-image/u-image").then(n.bind(null,"e268"))}},c=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.topicList,(function(e,n){var i=t.__get_orig(e),c=e.description.substring(0,10);return{$orig:i,g0:c}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},s=[]},faa1:function(t,e,n){"use strict";n.r(e);var i=n("f6c9"),c=n("b01a");for(var s in c)"default"!==s&&function(t){n.d(e,t,(function(){return c[t]}))}(s);n("b34f");var u,a=n("f0c5"),r=Object(a["a"])(c["default"],i["b"],i["c"],!1,null,"41ce33d2",null,!1,i["a"],u);e["default"]=r.exports}},[["e2c4","common/runtime","common/vendor"]]]);