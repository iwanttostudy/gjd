(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/order-list/order-list"],{"02a4":function(t,e,n){"use strict";(function(t){n("2be1");r(n("66fd"));var e=r(n("9766"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},2976:function(t,e,n){"use strict";var r=n("9db8"),o=n.n(r);o.a},"5bdc":function(t,e,n){"use strict";n.r(e);var r=n("ddbe"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},9766:function(t,e,n){"use strict";n.r(e);var r=n("a8b4"),o=n("5bdc");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("2976");var i,a=n("f0c5"),s=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=s.exports},"9db8":function(t,e,n){},a8b4:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var r={uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,"14de"))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,"4ed5"))},uButton:function(){return n.e("uview-ui/components/u-button/u-button").then(n.bind(null,"a28a"))},uEmpty:function(){return n.e("uview-ui/components/u-empty/u-empty").then(n.bind(null,"967f"))},uLoadmore:function(){return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null,"f7f0"))}},o=function(){var t=this,e=t.$createElement;t._self._c},u=[]},ddbe:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{loadStatus:"loadmore",tabsList:[{name:"全部"},{name:"待付款"},{name:"待发货"},{name:"待收货"},{name:"已完成"}],current:0,orderList:[],page:1}},onLoad:function(t){this.getOrderList()},onReachBottom:function(){this.page++,this.getOrderList()},methods:{jumpRefund:function(e){t.navigateTo({url:e})},jumpComment:function(e){t.navigateTo({url:"/pages/goods-comment-add/goods-comment-add?id="+e})},cancelOrder:function(e,n){var r=this;e=parseInt(e),this.$H.post("shop.order/order_cancel.html",{key:t.getStorageSync("sessionKey"),order_id:e}).then((function(t){if(200===t.code){var e=r.orderList;e.splice(n,1),r.orderList=e}}))},confirmOrder:function(e,n){var r=this;e=parseInt(e);var o=this;this.$H.post("shop.order/order_receive.html",{key:t.getStorageSync("sessionKey"),order_id:e}).then((function(t){200===t.code&&(r.$u.toast("已成功确认收货"),setTimeout((function(){var t=o.orderList;t.splice(n,1),o.orderList=t}),1e3))}))},tabChange:function(t){this.current=t,this.orderList=[],this.page=1,this.getOrderList()},getOrderList:function(){var t=this;this.loadStatus="loading";var e="";switch(this.current){case 1:e=0;break;case 2:e=1;break;case 3:e=2;break;case 4:e=5;break}this.$H.get("order/list",{page:this.page,status:e}).then((function(e){t.orderList=t.orderList.concat(e.result.data),e.result.current_page>=e.result.last_page&&(t.loadStatus="nomore")}))}}};e.default=n}).call(this,n("543d")["default"])}},[["02a4","common/runtime","common/vendor"]]]);