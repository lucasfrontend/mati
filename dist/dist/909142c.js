(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{564:function(t,e,l){"use strict";l.r(e);var o=l(250),r=l(241),n=l(48),c=l(530),m=l(524),h=l(562),d=l(532),v=l(237),_=l(529),f=l(528),x=l(516),w=(l(29),l(249),{data:function(){return{headers:[{text:"Mis pelis",value:"content.Title"},{text:"Eliminar",value:"actions",sortable:!1}]}},computed:{isAuthenticated:function(){return this.$store.state.leads.leads},newUsername:function(){return this.$store.state.authentication.newUserName}},methods:{}}),k=l(41),component=Object(k.a)(w,(function(){var t=this,e=t._self._c;return e(m.a,{attrs:{fluid:""}},[e("h2",{staticClass:"pb-8"},[t._v(t._s(t.getNameList))]),t._v(" "),e(_.a,[t.getList.length>0?e(c.a,{attrs:{cols:"12"}},[e(x.a,{attrs:{label:"Buscar en mis favoritas","prepend-icon":"mdi-magnify",outlined:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1):t._e()],1),t._v(" "),e(h.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.getList,search:t.search,"items-per-page":10,"no-data-text":"Aún no agregaste películas","no-results-text":t.notPeli,"footer-props":{"items-per-page-text":t.itemsPerPageText}},scopedSlots:t._u([{key:"item.actions",fn:function(l){l.item;return[e(o.a,{attrs:{small:"",color:"error"},on:{click:function(e){t.showDialog=!0}}},[e(v.a,{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-delete")])],1)]}}])}),t._v(" "),0===t.getList.length?e(c.a,{staticClass:"text-center pt-5 pb-5 mb-auto",attrs:{cols:"12"}},[e("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:"/"}},[e(c.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("span",{staticClass:"font-weight-thin",staticStyle:{"font-size":"1.5rem",color:"#5335EC"}},[t._v("Vamos, agrega una película!")])]),t._v(" "),e("img",{staticStyle:{width:"20%",height:"20%"},attrs:{src:t.bottomLogo,alt:"Tabla vacía"}})],1)],1):t._e(),t._v(" "),e(d.a,{attrs:{persistent:"","max-width":"500px"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[e(r.a,[e(n.c,[t._v("Eliminar película")]),t._v(" "),e(n.b,[t._v("¿Está seguro de que desea eliminar la película de su lista?")]),t._v(" "),e(n.a,[e(f.a),t._v(" "),e(o.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.showDialog=!1}}},[t._v("Cancelar")]),t._v(" "),e(o.a,{attrs:{color:"primary",text:""},on:{click:t.removePeli}},[t._v("Aceptar")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);