(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{615:function(e,t,r){"use strict";r.r(t);var n=r(35),l=(r(103),r(28),{data:function(){return{submitting:!1,error:null,valid:!1,email:"",emailRules:[function(e){return!!e||"Email is required"},function(e){return/.+@.+/.test(e)||"email must be valid"}]}},methods:{handleSuscribe:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),c=r(18),o=r(24),m=r.n(o),d=r(240),f=r(497),v=r(588),h=r(494),w=r(583),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"success fill-height pt-2 pb-3",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",md:"5"}},[r("h2",{staticClass:"primary--text text-h6 text-center"},[e._v("Subscribe To Our Newsletter")])]),e._v(" "),r("v-col",{staticClass:"primary--text",attrs:{cols:"10",md:"5"}},[r("v-form",{ref:"form",staticClass:"mb-n8",on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{solo:"",required:"",placeholder:"Email",rules:e.emailRules,color:"primary"},scopedSlots:e._u([{key:"append",fn:function(){return[r("v-btn",{staticClass:"secondary mr-n3 my-n4",attrs:{height:"49",elevation:"0"},on:{click:e.handleSuscribe}},[e._v("Subscribe")])]},proxy:!0}]),model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:d.a,VCol:f.a,VForm:v.a,VRow:h.a,VTextField:w.a})}}]);