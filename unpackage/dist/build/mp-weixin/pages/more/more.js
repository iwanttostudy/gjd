(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/more/more","components/discuss-list/discuss-list"],{"0f59":function(t,n,e){"use strict";var i=e("2eae"),o=e.n(i);o.a},"156d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{list:Array,loadStatus:{type:String,default:"loading"}},data:function(){return{}}};n.default=i},"26a6":function(t,n,e){"use strict";e.r(n);var i=e("156d"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=o.a},"2eae":function(t,n,e){},3755:function(t,n,e){"use strict";e.r(n);var i=e("d820"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=o.a},6541:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={uEmpty:function(){return e.e("uview-ui/components/u-empty/u-empty").then(e.bind(null,"967f"))},uLoadmore:function(){return e.e("uview-ui/components/u-loadmore/u-loadmore").then(e.bind(null,"f7f0"))}},o=function(){var t=this,n=t.$createElement;t._self._c},s=[]},8390:function(t,n,e){"use strict";(function(t){e("2be1");i(e("66fd"));var n=i(e("d3d2"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"901e":function(t,n,e){"use strict";e.r(n);var i=e("6541"),o=e("26a6");for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);e("0f59");var u,a=e("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=r.exports},"9a46":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={uSearch:function(){return e.e("uview-ui/components/u-search/u-search").then(e.bind(null,"6646"))},uTabs:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-tabs/u-tabs")]).then(e.bind(null,"14de"))},discussList:function(){return Promise.resolve().then(e.bind(null,"901e"))}},o=function(){var t=this,n=t.$createElement;t._self._c},s=[]},"9c79":function(t,n,e){"use strict";var i=e("b97a"),o=e.n(i);o.a},b97a:function(t,n,e){},d3d2:function(t,n,e){"use strict";e.r(n);var i=e("9a46"),o=e("3755");for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);e("9c79");var u,a=e("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=r.exports},d820:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(e("901e"));function i(t){return t&&t.__esModule?t:{default:t}}var o=function(){e.e("components/topic-list/topic-list").then(function(){return resolve(e("13f4"))}.bind(null,e)).catch(e.oe)},s={components:{list:o},data:function(){return{keyword:"",myTopic:[],current:0,tabList:[{name:"推荐"},{name:"热议话题"}],topicList:[],page:1,loadStatus:"loadmore",topicClassTop:[],disList:[]}},onLoad:function(){this.getTopicList(),this.getTopClassList(),this.getDisList()},onPullDownRefresh:function(){this.page=1,this.topicList=[],this.topicClassTop=[],this.disList=[],this.getTopicList(),this.getTopClassList(),this.getDisList()},onReachBottom:function(){this.page++,this.getTopicList()},methods:{search:function(){t.navigateTo({url:"/pages/topic-list/topic-list?keyword="+this.keyword})},getDisList:function(){var t=this;this.loadStatus="loading",this.$H.get("discuss/list",{order:"hot"}).then((function(n){t.disList=n.result.data,n.result.current_page===n.result.last_page||0===n.result.last_page?t.loadStatus="nomore":t.loadStatus="loadmore"}))},getTopClassList:function(){var t=this;this.$H.get("topic/topicClassTop").then((function(n){t.topicClassTop=n.result}))},tabChange:function(t){this.current=t},getTopicList:function(){var n=this;this.loadStatus="loading",this.$H.post("topic/list",{class_id:this.topicClassId,page:this.page}).then((function(e){n.topicList=n.topicList.concat(e.result.data),e.result.current_page===e.result.last_page||0===e.result.last_page?n.loadStatus="nomore":n.loadStatus="loadmore",t.stopPullDownRefresh()}))}}};n.default=s}).call(this,e("543d")["default"])}},[["8390","common/runtime","common/vendor"]]]);