(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my-collection/my-collection"],{"37f5":function(t,n,e){"use strict";e.r(n);var o=e("59f9"),s=e("9034");for(var u in s)"default"!==u&&function(t){e.d(n,t,(function(){return s[t]}))}(u);e("ce21");var a,i=e("f0c5"),c=Object(i["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=c.exports},"59f9":function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var o={postList:function(){return e.e("components/post-list/post-list").then(e.bind(null,"de0e"))}},s=function(){var t=this,n=t.$createElement;t._self._c},u=[]},9034:function(t,n,e){"use strict";e.r(n);var o=e("ed44"),s=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=s.a},bd48:function(t,n,e){"use strict";(function(t){e("2be1");o(e("66fd"));var n=o(e("37f5"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},ce21:function(t,n,e){"use strict";var o=e("d572"),s=e.n(o);s.a},d572:function(t,n,e){},ed44:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("components/post-list/post-list").then(function(){return resolve(e("de0e"))}.bind(null,e)).catch(e.oe)},s={components:{postList:o},data:function(){return{postList:[],loadStatus:"loading",page:1}},onLoad:function(){this.getPostList()},onReachBottom:function(){this.page++,this.getPostList()},methods:{getPostList:function(){var t=this;this.loadStatus="loading",this.$H.get("post/myCollectPost",{page:this.page}).then((function(n){t.postList=t.postList.concat(n.result.data),n.result.current_page===n.result.last_page||0===n.result.last_page?t.loadStatus="nomore":t.loadStatus="loadmore"}))}}};n.default=s}},[["bd48","common/runtime","common/vendor"]]]);