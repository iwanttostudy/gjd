(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my-topic/my-topic"],{"0c22":function(t,n,e){"use strict";e.r(n);var o=e("e63e"),u=e("a65d");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("cb78");var c,a=e("f0c5"),r=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=r.exports},"4c9f":function(t,n,e){},"9f09":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("components/topic-list/topic-list").then(function(){return resolve(e("13f4"))}.bind(null,e)).catch(e.oe)},u={components:{topicList:o},data:function(){return{topicList:[],loadStatus:"loading",page:1}},onLoad:function(){this.getMyTopic()},onReachBottom:function(){this.page++,this.getMyTopic()},methods:{getMyTopic:function(){var t=this;this.loadStatus="loading",this.$H.get("topic/myCreateTopic",{page:this.page}).then((function(n){t.topicList=t.topicList.concat(n.result.data),n.result.current_page===n.result.last_page||0===n.result.last_page?t.loadStatus="nomore":t.loadStatus="loadmore"}))},jump:function(){t.navigateTo({url:"/pages/topic-add/topic-add"})}}};n.default=u}).call(this,e("543d")["default"])},a65d:function(t,n,e){"use strict";e.r(n);var o=e("9f09"),u=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=u.a},b9af:function(t,n,e){"use strict";(function(t){e("2be1");o(e("66fd"));var n=o(e("0c22"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},cb78:function(t,n,e){"use strict";var o=e("4c9f"),u=e.n(o);u.a},e63e:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var o={topicList:function(){return e.e("components/topic-list/topic-list").then(e.bind(null,"13f4"))},uButton:function(){return e.e("uview-ui/components/u-button/u-button").then(e.bind(null,"a28a"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"7e78"))}},u=function(){var t=this,n=t.$createElement;t._self._c},i=[]}},[["b9af","common/runtime","common/vendor"]]]);