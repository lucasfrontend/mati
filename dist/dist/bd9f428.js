(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{536:function(t,e,r){var content=r(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("3caf4273",content,!0,{sourceMap:!1})},537:function(t,e,r){"use strict";r(536)},538:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,"\n.custom-btn{\r\n  position: absolute;\r\n  bottom: 4px;\r\n  right: 4px;\n}\r\n",""]),n.locals={},t.exports=n},539:function(t,e,r){"use strict";var n=r(250),o=r(241),c=r(48),l=r(532),d=r(528),f={props:{lead:Object},data:function(){return{showDialog:!1}},methods:{goToFilmDetail:function(t){this.$router.push({path:"/filmDetail",query:{id:t}})},truncateTitle:function(title,t){return title.length<=t?title:title.substring(0,t)+"..."}},computed:{isAuthenticated:function(){return this.$store.state.authentication.isAuthenticated},newUsername:function(){return this.$store.state.authentication.newUserName}}},h=(r(537),r(41)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,{style:{"max-height":"400px"},attrs:{elevation:"2"}},[e("div",{staticClass:"overlay image-overlay"},[e(c.c,{}),t._v(" "),e(c.a)],1),t._v(" "),e(l.a,{attrs:{persistent:"","max-width":"500px"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[e(o.a,[e(c.c,[t._v("Mati Leads")]),t._v(" "),e(c.b,[t._v("Iniciá sesión o registrate para ver este contenido")]),t._v(" "),e(c.a,[e(d.a),t._v(" "),e("nuxt-link",{attrs:{to:"/login"}},[e(n.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.showDialog=!1}}},[t._v("Iniciar sesión")])],1),t._v(" "),e("nuxt-link",{attrs:{to:"/register"}},[e(n.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.showDialog=!1}}},[t._v("Registrarse")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},540:function(t,e,r){"use strict";r.r(e);r(11),r(9),r(8),r(12),r(13);var n=r(65),o=r(1),c=(r(341),r(3),r(10),r(74));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{leadsPorCreador:[]}},created:function(){},methods:d(d({},Object(c.b)("authentication",["SET_AUTHENTICATED"])),{},{orderBycreated:function(){var t=this.$store.state.leads.leads,e={};t.sort((function(t,e){return t.created_by_id-e.created_by_id})),t.forEach((function(t){var r=t.created_by_id;e[r]||(e[r]=[]),e[r].push(t)})),console.log("leadsPorCreador:",e),this.leadsPorCreador=e;var r=Object(n.a)(t);this.SET_LEADS(r)}}),computed:{totalLeadsStandby:function(){return this.$store.state.leads.leads.length}}},h=r(41),component=Object(h.a)(f,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"font-weight-thin",staticStyle:{"font-size":"1.5rem",color:"#5335EC"}},[t._v(t._s(t.leadsPorCreador.length))])}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,r){"use strict";r(203);var n=r(180);e.a=Object(n.a)("layout")},563:function(t,e,r){"use strict";r.r(e);var n=r(530),o=r(524),c=r(531),l=r(559),d=r(529),f=(r(11),r(9),r(12),r(13),r(65)),h=r(1),v=(r(3),r(26),r(8),r(43),r(341),r(10),r(265)),y=r(539),_=r(158),O=r.n(_),m=r(74),j=r(540);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var w={data:function(){return{}},components:{},methods:{},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.c)("leads",["leads"]))},E=w,P=r(41),S=Object(P.a)(E,(function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("visitas")]),t._v(" "),e("ul",t._l(t.leads,(function(r){return e("li",{key:r.id},[t._v("\n      "+t._s(r.title)+"\n    ")])})),0),t._v(" "),e("h1",[t._v("chau")])])}),[],!1,null,null,null).exports;function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A={components:{LeadCard:y.a,CustomProgressCircular:v.a,byUsers:j.default,visitas:S},data:function(){return{standByleads:[],users:[],pipelines:[],apiKey:"021c22690d44a4c08868dfaaf514305c1b0742f9637603a2",apiUrl:"https://coterranea.nocrm.io/api/v2",limit:100,offset:0,loading:null,leadsEnStandbyMasDe14Dias:0,leadsPorCreador:[],leadsByCreatedAt:[],calls:[]}},created:function(){this.getLeadsStandby()},computed:{totalLeadsStandby:function(){return this.$store.state.leads.leads.length}},methods:L(L({},Object(m.b)("leads",["SET_LEADS","RESET_LEADS"])),{},{getLeadsStandby:function(){var t=this;return new Promise((function(e,r){O.a.get("/api/leads?status=".concat("standby","&limit=").concat(t.limit,"&offset=").concat(t.offset),{headers:{"X-API-KEY":"021c22690d44a4c08868dfaaf514305c1b0742f9637603a2"}}).then((function(n){var o=n.data;o.length>0?(t.standByleads=[].concat(Object(f.a)(t.standByleads),Object(f.a)(o)),t.offset+=t.limit,t.getLeadsStandby().then(e).catch(r)):(console.log("Se han obtenido todos los leads."),console.log("this.leads",t.standByleads),e(t.standByleads))})).catch((function(t){console.error(t),r(t)}))})).finally((function(){console.log("Tarea de obtención de leads finalizada."),t.filterLeadsByStep(),t.getLeadById("24680426"),t.getLeadByIdWithComment("24680426"),t.calculateDays(),t.orderBycreated(),t.orderByCreatedAt()}))},getLeadById:function(t){return O.a.get("/api/leads/".concat(t),{headers:{"X-API-KEY":"021c22690d44a4c08868dfaaf514305c1b0742f9637603a2"}}).then((function(t){var e=t.data;return console.log("Lead num:",e),e})).catch((function(t){throw console.error("ERROR GETTING LEAD",t),t}))},getLeadByIdWithComment:function(t){return O.a.get("/api/leads/".concat(t,"/comments"),{headers:{"X-API-KEY":"021c22690d44a4c08868dfaaf514305c1b0742f9637603a2"}}).then((function(t){var e=t.data;return console.log("Lead num:",e),e})).catch((function(t){throw console.error("ERROR GETTING LEAD",t),t}))},filterLeadsByStep:function(){var t=this.standByleads.filter((function(t){return"Visita Agendada"===t.step}));return console.log("filtradas por step:",t),t},getUsers:function(){var t=this;O.a.get("/api/users?status=activated",{headers:{"X-API-KEY":"021c22690d44a4c08868dfaaf514305c1b0742f9637603a2"}}).then((function(e){var r=e.data;console.log("Usuarios:",e.data),t.users=r})).catch((function(t){console.error("ERROR USERS",t)}))},getPipelines:function(){var t=this;O.a.get("/api/pipelines",{headers:{"X-API-KEY":"021c22690d44a4c08868dfaaf514305c1b0742f9637603a2"}}).then((function(e){var r=e.data;console.log("respuesta pipelines:",e.data),t.pipelines=r,console.log("this.pipelines:",t.pipelines)})).catch((function(t){console.error("ERROR USERS",t)}))},calcularDiasTranscurridos:function(t,e){var r=new Date(t),n=new Date(e);return Math.round(Math.abs((n-r)/864e5))},calculateDays:function(){var t=this,e=new Date,r=this.standByleads.reduce((function(r,n){"standby"===n.status&&(t.calcularDiasTranscurridos(n.created_at,e)>14&&r++);return r}),0);this.leadsEnStandbyMasDe14Dias=r,console.log("Número de leads en Standby por más de 14 días:",r)},formatName:function(t){return t?t.charAt(0).toUpperCase()+t.slice(1).toLowerCase():""},orderBycreated:function(){var t=this.standByleads,e={};t.sort((function(t,e){return t.created_by_id-e.created_by_id})),t.forEach((function(t){var r=t.created_by_id;e[r]||(e[r]=[]),e[r].push(t)})),console.log("leadsPorCreador:",e),this.leadsPorCreador=e;var r=Object(f.a)(t);this.SET_LEADS(r)},orderByCreatedAt:function(){var t=this.standByleads,e=new Date;e.setDate(e.getDate()-14);var r=t.filter((function(t){return new Date(t.created_at)<e}));console.log("leadsByCreatedAt:",r),this.leadsByCreatedAt=r},getCalls:function(){var t=this;O.a.get("/api/calls",{headers:{"X-API-KEY":"021c22690d44a4c08868dfaaf514305c1b0742f9637603a2"}}).then((function(e){var r=e.data;console.log("respuesta calls:",e.data),t.calls=r,console.log("this.CALLS:",t.calls)})).catch((function(t){console.error("ERROR CALLS",t)}))}}),mounted:function(){}},B=Object(P.a)(A,(function(){var t=this,e=t._self._c;return e(l.a,[e(c.a,[t.totalLeadsStandby?e("h2",{staticClass:"pl-3"},[t._v("Total Leads Standby: "+t._s(t.totalLeadsStandby))]):t._e(),t._v(" "),t.leadsEnStandbyMasDe14Dias?e("h2",[t._v("Leads + 14 dias: "+t._s(t.leadsEnStandbyMasDe14Dias)+" ")]):t._e(),t._v(" "),t.users?e("h3",[t._v("total users: "+t._s(t.users.length)+" ")]):t._e(),t._v(" "),e("visitas"),t._v(" "),e(o.a,{attrs:{fluid:""}},[e(d.a,t._l(t.standByleads,(function(r){return e(n.a,{key:r.id,attrs:{xs:"12",sm:"6",md:"4",lg:"3"}},[e("h4",[t._v(t._s(r.title))]),t._v(" "),e("p",[t._v(t._s())]),t._v(" "),e("p",[t._v(t._s())]),t._v(" "),e("p",[t._v(t._s())]),t._v(" "),e("p",[t._v(t._s())]),t._v(" "),e("p",[t._v(t._s())]),t._v(" "),e("lead-card",{attrs:{lead:r}})],1)})),1)],1),t._v(" "),e("byUsers"),t._v(" "),t.leadsPorCreador?e("h4",[t._v("Por creador: "+t._s(t.leadsPorCreador))]):t._e(),t._v(" "),t.leadsByCreatedAt?e("p",[t._v("Mas de 14: "+t._s(t.leadsByCreatedAt))]):t._e(),t._v(" "),t.loading?e(c.a,{attrs:{"align-center":"","justify-center":""}},[e("custom-progress-circular",{attrs:{size:"50",color:"#5335EC"}})],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=B.exports}}]);