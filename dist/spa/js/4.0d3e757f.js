(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh Lpr lFf"}},[a("q-drawer",{attrs:{mini:t.miniState,breakpoint:500,"content-class":"bg-grey-10"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{padding:""}},[t._l(t.links,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,attrs:{clickable:""},on:{click:function(a){t.current=e.id}}},[a("q-item-section",{class:t.current===e.id?"text-primary":"",attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[t._v("\n            "+t._s(e.label)+"\n          ")])],1)})),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){t.editLayout=!t.editLayout}}},[a("q-item-section",{class:t.editLayout?"text-primary":"",attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-pencil"}})],1),a("q-item-section",[t._v("\n            Edit\n          ")])],1)],2)],1)],1),a("q-page-container",[a("router-view")],1)],1)},r=[],n={name:"MainLayout",data:function(){return{drawer:!0,miniState:!0}},computed:{editLayout:{get:function(){return this.$store.state.dashboards.editLayout},set:function(t){this.$store.commit("dashboards/updateEditLayout",t)}},current:{get:function(){return this.$store.state.dashboards.current},set:function(t){this.$store.commit("dashboards/updateCurrent",t)}},links:function(){return this.$store.state.dashboards.pages.slice().sort((function(t,e){return t.order<e.order?-1:1})).map((function(t){return{id:t.id,label:t.config.title,icon:t.config.icon}}))}}},o=n,s=a("2877"),c=a("eebe"),u=a.n(c),l=a("4d5a"),d=a("9404"),m=a("4983"),p=a("1c1c"),f=a("66e5"),b=a("4074"),w=a("0016"),h=a("09e3"),v=a("714f"),q=Object(s["a"])(o,i,r,!1,null,null,null);e["default"]=q.exports;u()(q,"components",{QLayout:l["a"],QDrawer:d["a"],QScrollArea:m["a"],QList:p["a"],QItem:f["a"],QItemSection:b["a"],QIcon:w["a"],QPageContainer:h["a"]}),u()(q,"directives",{Ripple:v["a"]})}}]);