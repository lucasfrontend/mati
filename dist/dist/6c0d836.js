(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{540:function(t,e,r){"use strict";r.r(e);r(11),r(9),r(8),r(12),r(13);var n=r(65),o=r(1),c=(r(341),r(3),r(10),r(74));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{leadsPorCreador:[]}},created:function(){},methods:d(d({},Object(c.b)("authentication",["SET_AUTHENTICATED"])),{},{orderBycreated:function(){var t=this.$store.state.leads.leads,e={};t.sort((function(t,e){return t.created_by_id-e.created_by_id})),t.forEach((function(t){var r=t.created_by_id;e[r]||(e[r]=[]),e[r].push(t)})),console.log("leadsPorCreador:",e),this.leadsPorCreador=e;var r=Object(n.a)(t);this.SET_LEADS(r)}}),computed:{totalLeadsStandby:function(){return this.$store.state.leads.leads.length}}},O=r(41),component=Object(O.a)(f,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"font-weight-thin",staticStyle:{"font-size":"1.5rem",color:"#5335EC"}},[t._v(t._s(t.leadsPorCreador.length))])}),[],!1,null,null,null);e.default=component.exports}}]);