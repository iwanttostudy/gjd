(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message-list/message-list"],{"0d13":function(t,e,n){},"19b9":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s}));var s={uAvatar:function(){return n.e("uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"2447"))}},u=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.msgList,(function(e,n){var s=t.__get_orig(e),u=t._f("timeFrom")(e.create_time);return{$orig:s,f0:u}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},i=[]},"275e":function(t,e,n){"use strict";var s=n("0d13"),u=n.n(s);u.a},"57a9":function(t,e,n){"use strict";n.r(e);var s=n("7b09"),u=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);e["default"]=u.a},"5d0d":function(t,e,n){"use strict";n.r(e);var s=n("19b9"),u=n("57a9");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("275e");var a,r=n("f0c5"),o=Object(r["a"])(u["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=o.exports},"735d":function(t,e,n){"use strict";(function(t){n("2be1");s(n("66fd"));var e=s(n("5d0d"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"7b09":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{msgType:0,msgList:[]}},onLoad:function(t){this.msgType=t.type,this.getMsgList()},methods:{getMsgList:function(){var t=this;this.$H.get("message/list",{type:this.msgType}).then((function(e){t.msgList=e.result}))},readStatus:function(){var t=this,e=this;this.$H.get("message/status",{type:this.msgType}).then((function(n){t.msgList.forEach((function(t,n){e.msgList[n].status=1}))}))}}};e.default=s}},[["735d","common/runtime","common/vendor"]]]);