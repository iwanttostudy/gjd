(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/ucenter"],{"1b1b":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var o={uButton:function(){return e.e("uview-ui/components/u-button/u-button").then(e.bind(null,"a28a"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"7e78"))},uTabs:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-tabs/u-tabs")]).then(e.bind(null,"14de"))},topicList:function(){return e.e("components/topic-list/topic-list").then(e.bind(null,"13f4"))},postList:function(){return e.e("components/post-list/post-list").then(e.bind(null,"de0e"))}},i=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){return t.$f.jump("/pages/chat/chat?user="+t.userJson)})},u=[]},"25a2":function(t,n,e){"use strict";var o=e("a5b1"),i=e.n(o);i.a},"25d3":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("components/post-list/post-list").then(function(){return resolve(e("de0e"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/topic-list/topic-list").then(function(){return resolve(e("13f4"))}.bind(null,e)).catch(e.oe)},u={components:{postList:o,topicList:i},data:function(){return{tabs:[{tab_name:"主页"},{tab_name:"帖子"},{tab_name:"加入圈子"}],current:0,uid:0,postList:[],topicList:[],userInfo:{},userJson:"",loadStatus:"loading",page:1}},onLoad:function(t){this.uid=t.uid,this.getUserInfo(),this.getPostList()},onReachBottom:function(){this.page++,this.getPostList()},methods:{follow:function(){var t=this;this.$H.post("user/addFollow",{id:this.userInfo.uid}).then((function(n){200===n.code?t.userInfo.is_follow=!0:t.$refs.uToast.show({title:n.msg,type:"error"})}))},cancelFollow:function(){var t=this;this.$H.post("user/cancelFollow",{id:this.userInfo.uid}).then((function(n){200===n.code&&(t.userInfo.is_follow=!1)}))},tabChange:function(t){this.current=t,1===t&&this.getTopicList()},getPostList:function(){var t=this;this.loadStatus="loading",this.$H.get("post/list",{page:this.page,uid:this.uid}).then((function(n){t.postList=t.postList.concat(n.result.data),n.result.current_page===n.result.last_page||0===n.result.last_page?t.loadStatus="nomore":t.loadStatus="loadmore"}))},getTopicList:function(){var t=this;this.$H.get("topic/list",{uid:this.uid}).then((function(n){t.topicList=n.result.data}))},getUserInfo:function(){var n=this;this.$H.get("user/userInfoById",{uid:this.uid}).then((function(e){n.userInfo=e.result;var o={uid:e.result.uid,username:e.result.username,avatar:e.result.avatar};n.userJson=JSON.stringify(o),t.setNavigationBarTitle({title:n.userInfo.username})}))}}};n.default=u}).call(this,e("543d")["default"])},"42a2":function(t,n,e){"use strict";(function(t){e("2be1");o(e("66fd"));var n=o(e("8b5a"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"4bdb":function(t,n,e){"use strict";var o=e("6e5c"),i=e.n(o);i.a},"6e5c":function(t,n,e){},"7d84":function(t,n,e){"use strict";e.r(n);var o=e("25d3"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=i.a},"8b5a":function(t,n,e){"use strict";e.r(n);var o=e("1b1b"),i=e("7d84");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("4bdb"),e("25a2");var s,a=e("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"0b972b5d",null,!1,o["a"],s);n["default"]=r.exports},a5b1:function(t,n,e){}},[["42a2","common/runtime","common/vendor"]]]);