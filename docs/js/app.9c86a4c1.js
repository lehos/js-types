webpackJsonp([0],{"+VGo":function(e,n){},0:function(e,n,t){e.exports=t("NHnr")},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("/5sW"),l={name:"TypesSum",data:function(){var e=[{val:0,key:"0"},{val:"0",key:"'0'"},{val:"",key:"''"},{val:null,key:"null"},{val:void 0,key:"undefined"},{val:{},key:"{}"},{val:[],key:"[]"},{val:NaN,key:"NaN"},{val:1/0,key:"Infinity"},{val:-1/0,key:"-Infinity"}];return Object.freeze(e),{types:e}},methods:{sum:function(e,n){var t=e+n;return this.normalizeResult(t)},normalizeResult:function(e){return"string"==typeof e&&0==e.length?"''":e}},created:function(){}},a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"types-sum"},[t("h1",[e._v("JS types summation")]),t("table",[t("tr",[t("th",[e._v("+")]),e._l(e.types,function(n){return t("th",{key:n.key},[e._v(e._s(n.key))])})],2),e._l(e.types,function(n){return t("tr",{key:n.key},[t("th",[e._v(e._s(n.key))]),e._l(e.types,function(r){return t("td",{key:r.key,attrs:{title:n.key+" + "+r.key}},[e._v("\n        "+e._s(e.sum(n.val,r.val))+"\n      ")])})],2)})],2),t("p",[e._v("\n    This table represents honest JS types summation result.\n  ")]),e._m(0)])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("\n    For example, "),t("code",[e._v("{} + null")]),e._v(" in console returns "),t("code",[e._v("0")]),e._v(",\n    but more real-world example "),t("code",[e._v("console.log({} + null)")]),e._v(" \n    (or "),t("code",[e._v("let a = {} + null; console.log(a)")]),e._v(") returns "),t("code",[e._v("[object Object]null")])])}],u=t("XyMi");function s(e){t("PaLO")}var i=!1,c=s,v="data-v-2676a55d",y=null,p=Object(u["a"])(l,a,o,i,c,v,y),_=p.exports,f={name:"app",components:{TypesSum:_}},m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("TypesSum")],1)},d=[];function k(e){t("+VGo")}var h=!1,b=k,O=null,j=null,N=Object(u["a"])(f,m,d,h,b,O,j),g=N.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")},PaLO:function(e,n){}},[0]);
//# sourceMappingURL=app.9c86a4c1.js.map