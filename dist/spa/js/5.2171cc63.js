(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh Lpr lFf"}},[a("q-drawer",{staticClass:"gt-xs",attrs:{mini:t.miniState,breakpoint:500,"content-class":"bg-grey-10"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{padding:""}},[t._l(t.links,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,attrs:{clickable:""},on:{click:function(a){t.current=e.id}}},[a("q-item-section",{class:t.current===e.id?"text-primary":"",attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[t._v("\n            "+t._s(e.label)+"\n          ")])],1)})),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){t.editLayout=!t.editLayout}}},[a("q-item-section",{class:t.editLayout?"text-primary":"",attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-pencil"}})],1),a("q-item-section",[t._v("\n            Edit\n          ")])],1)],2)],1)],1),a("q-page-container",[a("router-view")],1),t.$q.screen.lt.md?a("q-footer",[a("q-toolbar",{staticClass:"bg-black text-white"},[a("q-tabs",{staticClass:"full-width",attrs:{"narrow-indicator":"",dense:"","no-caps":"",align:"justify"},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},t._l(t.links,(function(t){return a("q-tab",{key:t.id,attrs:{icon:t.icon,name:t.id}})})),1)],1)],1):t._e()],1)},i=[],n={name:"MainLayout",data:function(){return{drawer:!0,miniState:!0}},computed:{editLayout:{get:function(){return this.$store.state.dashboards.editLayout},set:function(t){this.$store.commit("dashboards/updateEditLayout",t)}},current:{get:function(){return this.$store.state.dashboards.current},set:function(t){this.$store.commit("dashboards/updateCurrent",t)}},links:function(){return this.$store.state.dashboards.pages.slice().sort((function(t,e){return t.order<e.order?-1:1})).map((function(t){return{id:t.id,label:t.config.title,icon:t.config.icon}}))}}},s=n,o=a("2877"),c=a("eebe"),l=a.n(c),u=a("4d5a"),d=a("9404"),m=a("4983"),p=a("1c1c"),f=a("66e5"),b=a("4074"),w=a("0016"),q=a("09e3"),h=a("7ff0"),k=a("65c6"),v=a("429b"),y=a("7460"),g=a("714f"),Q=Object(o["a"])(s,r,i,!1,null,null,null);e["default"]=Q.exports;l()(Q,"components",{QLayout:u["a"],QDrawer:d["a"],QScrollArea:m["a"],QList:p["a"],QItem:f["a"],QItemSection:b["a"],QIcon:w["a"],QPageContainer:q["a"],QFooter:h["a"],QToolbar:k["a"],QTabs:v["a"],QTab:y["a"]}),l()(Q,"directives",{Ripple:g["a"]})}}]);