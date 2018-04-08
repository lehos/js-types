webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,n){e.exports=n("NHnr")},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/5sW"),s=n("/ocq"),a={name:"Nav"},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("\n    JS types:\n\n    "),n("nav",{staticClass:"nav"},[n("div",{staticClass:"nav-inner"},[n("router-link",{attrs:{to:"/sum"}},[e._v("summation")]),n("router-link",{attrs:{to:"/sub"}},[e._v("subtraction")]),n("router-link",{attrs:{to:"/mult"}},[e._v("multiplication")]),n("router-link",{attrs:{to:"/div"}},[e._v("division")])],1)])])},u=[],o=n("XyMi");function c(e){n("mwQM")}var i=!1,p=c,v=null,y=null,f=Object(o["a"])(a,l,u,i,p,v,y),m=f.exports,_={name:"app",components:{Nav:m}},d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view"),e._v("\n\n  -- "),n("br"),n("a",{attrs:{href:"https://github.com/lehos/js-types"}},[e._v("github")])],1)},b=[];function h(e){n("+VGo")}var k=!1,T=h,j=null,x=null,O=Object(o["a"])(_,d,b,k,T,j,x),g=O.exports;function N(e){return"string"==typeof e&&0==e.length?"''":e}var $=[{val:!0,key:"true"},{val:!1,key:"false"},{val:0,key:"0"},{val:"0",key:"'0'"},{val:"",key:"''"},{val:null,key:"null"},{val:void 0,key:"undefined"},{val:{},key:"{}"},{val:[],key:"[]"},{val:NaN,key:"NaN"},{val:1/0,key:"Infinity"},{val:-1/0,key:"-Infinity"}];function w(){return Object.freeze($),$}var E={name:"TypesTable",props:{types:Array,wrapClass:String,operand:String,func:Function},methods:{calc:function(e,t){var n=this.func(e,t);return N(n)}}},C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("tr",[n("th",[e._v(e._s(e.operand))]),e._l(e.types,function(t){return n("th",{key:t.key},[e._v(e._s(t.key))])})],2),e._l(e.types,function(t){return n("tr",{key:t.key},[n("th",[e._v(e._s(t.key))]),e._l(e.types,function(r){return n("td",{key:r.key,attrs:{title:t.key+" "+e.operand+" "+r.key}},[e._v("\n      "+e._s(e.calc(t.val,r.val))+"\n    ")])})],2)})],2)},S=[],M=!1,J=null,F=null,G=null,H=Object(o["a"])(E,C,S,M,J,F,G),I=H.exports,Q={name:"TypesSum",components:{TypesTable:I},data:function(){return{types:w()}},methods:{func:function(e,t){return e+t}}},V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"types-sum"},[n("TypesTable",{attrs:{types:e.types,func:e.func,operand:"+"}}),n("p",[e._v("\n    This table represents honest JS types summation result.\n  ")]),e._m(0)],1)},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For example, "),n("code",[e._v("{} + null")]),e._v(" in console returns "),n("code",[e._v("0")]),e._v(",\n    but more real-world example "),n("code",[e._v("console.log({} + null)")]),e._v(" \n    (or "),n("code",[e._v("let a = {} + null; console.log(a)")]),e._v(") returns "),n("code",[e._v("[object Object]null")])])}],z=!1,A=null,D=null,P=null,W=Object(o["a"])(Q,V,q,z,A,D,P),X=W.exports,B={name:"TypesSub",components:{TypesTable:I},data:function(){return{types:w()}},methods:{func:function(e,t){return e-t}}},K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"types-sub"},[n("TypesTable",{attrs:{types:e.types,func:e.func,operand:"-"}})],1)},L=[],R=!1,U=null,Y=null,Z=null,ee=Object(o["a"])(B,K,L,R,U,Y,Z),te=ee.exports,ne={name:"TypesMult",components:{TypesTable:I},data:function(){return{types:w()}},methods:{func:function(e,t){return e*t}}},re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"types-mult"},[n("TypesTable",{attrs:{types:e.types,func:e.func,operand:"*"}})],1)},se=[],ae=!1,le=null,ue=null,oe=null,ce=Object(o["a"])(ne,re,se,ae,le,ue,oe),ie=ce.exports,pe={name:"TypesDiv",components:{TypesTable:I},data:function(){return{types:w()}},methods:{func:function(e,t){return e/t}}},ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"types-mult"},[n("TypesTable",{attrs:{types:e.types,func:e.func,operand:"/"}})],1)},ye=[],fe=!1,me=null,_e=null,de=null,be=Object(o["a"])(pe,ve,ye,fe,me,_e,de),he=be.exports,ke=new s["a"]({routes:[{path:"/",redirect:"/sum"},{path:"/sum",component:X},{path:"/sub",component:te},{path:"/mult",component:ie},{path:"/div",component:he}]});r["a"].config.productionTip=!1,r["a"].use(s["a"]),new r["a"]({router:ke,render:function(e){return e(g)}}).$mount("#app")},mwQM:function(e,t){}},[0]);
//# sourceMappingURL=app.d939505e.js.map