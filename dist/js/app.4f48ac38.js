(function(e){function t(t){for(var r,c,s=t[0],l=t[1],i=t[2],u=0,m=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&m.push(n[c][0]),n[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4042:function(e,t,a){"use strict";a("da96")},"4fcc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var r=a("2b0e"),n=a("5f5b");a("ab8b"),a("2dd8");r["default"].use(n["a"]);var o=a("ecee"),c=a("ad3d"),s=a("c074"),l=a("f2d1");o["c"].add(s["e"],s["c"],s["b"],l["a"],s["f"],s["d"],s["a"]),r["default"].component("fa-icon",c["a"]);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},d=[],u=(a("5c0b"),a("2877")),m={},f=Object(u["a"])(m,i,d,!1,null,null,null),b=f.exports,v=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-row",{staticClass:"m-0 mb-3 ml-2"},[a("b-button",{staticClass:"btn-show",on:{click:e.changeShow}},[e._v(e._s(e.show?"Show card":"Add card"))])],1),e.show?e._e():a("b-row",{staticClass:"m-0",attrs:{"align-v":"center"}},e._l(e.cardItems,(function(e,t){return a("Ewallet",{key:t,staticClass:"ml-2 mb-2",attrs:{cardNumber:e.cardNumber,cardHolderName:e.cardHolderName,validDate:e.validDate,vendersName:e.vendersName,bg:e.bg,logImg:e.logImg}})})),1),e.show?a("b-row",{staticClass:"m-0",attrs:{"align-v":"center"}},[a("AddCard",{on:{cardData:e.addCard}})],1):e._e()],1)},g=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{staticClass:"card",style:e.classobj},[a("div",{staticClass:"card-header-info"},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-8"},[a("div",{staticClass:"row m-0 mb-2 ml-3"},[a("fa-icon",{staticClass:"simCard",attrs:{icon:["fas","wifi"]}})],1),a("div",{staticClass:"row m-0 ml-4"},[a("fa-icon",{staticClass:"simCard",attrs:{icon:["fas","sim-card"]}})],1)]),a("div",{staticClass:"col-4"},[a("fa-icon",{attrs:{icon:[e.logImg.fontType,e.logImg.icon],size:"3x",pull:"right"}})],1)])]),a("div",{staticClass:"card-number"},[a("span",[e._v(e._s(e.cardNumber))])]),a("b-row",[a("b-col",{attrs:{cols:"8"}},[a("div",[a("span",[e._v("Cardholder Name")]),a("br"),a("span",[e._v(e._s(e.cardHolderName))])])]),a("b-col",{attrs:{cols:"4"}},[a("div",[a("span",[e._v("Valid Date")]),a("br"),a("span",[e._v(e._s(e.validDate))])])])],1)],1)},N=[],C={name:"EwalletCard",props:{cardNumber:{type:String},cardHolderName:{type:String},validDate:{type:String},vendersName:{type:String},bg:{type:String,default:"Gray"},logImg:{type:Object}},computed:{classobj:function(){return{"background-color":this.bg}},logoIcon:function(){return{fontType:"fas",icon:"sim-card"}}}},w=C,y=(a("ee84"),Object(u["a"])(w,h,N,!1,null,"b1826850",null)),I=y.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-jumbotron",{attrs:{align:"center",fluid:""}},[a("b-form",{on:{submit:e.onSubmit}},[a("b-row",{staticClass:"m-0 mb-2"},[a("label",{attrs:{for:"enter-card-number"}},[e._v("CARD NUMBER")]),a("b-form-input",{attrs:{id:"enter-card-number",maxlength:"19",minlength:"19",formatter:e.formatter,required:""},model:{value:e.form.cardNumber,callback:function(t){e.$set(e.form,"cardNumber",t)},expression:"form.cardNumber"}})],1),a("b-row",{staticClass:"m-0 mb-2"},[a("label",{attrs:{for:"enter-name"}},[e._v("CARDHOLDER NAME")]),a("b-form-input",{attrs:{id:"enter-name",maxlength:"30",minlength:"5",required:""},model:{value:e.form.cardHolderName,callback:function(t){e.$set(e.form,"cardHolderName",t)},expression:"form.cardHolderName"}})],1),a("b-row",{staticClass:"m-0 mb-2"},[a("b-col",{attrs:{cols:"8"}},[a("label",{staticClass:"date-ccv-label",attrs:{for:"example-datepicker"}},[e._v("VALID THRU")]),a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"example-datepicker",min:e.minDate,"date-format-options":{year:"numeric",month:"numeric",day:"2-digit"}},model:{value:e.form.validDate,callback:function(t){e.$set(e.form,"validDate",t)},expression:"form.validDate"}})],1),a("b-col",{attrs:{cols:"4"}},[a("label",{staticClass:"date-ccv-label",attrs:{for:"example-ccv"}},[e._v("CCV")]),a("b-form-input",{attrs:{id:"example-ccv",type:"text",maxlength:"3",minlength:"3",required:""},model:{value:e.form.ccv,callback:function(t){e.$set(e.form,"ccv",t)},expression:"form.ccv"}})],1)],1),a("b-row",{staticClass:"m-0 mb-3"},[a("label",{attrs:{for:"wallet-vendor"}},[e._v("VENDOR")]),a("b-form-select",{attrs:{options:e.options},model:{value:e.form.vendersName,callback:function(t){e.$set(e.form,"vendersName",t)},expression:"form.vendersName"}})],1),a("b-button",{staticClass:"btn-show addbtn",attrs:{type:"submit"}},[e._v("Add Card")])],1)],1)},x=[],D=(a("99af"),a("0d03"),{"BITCOIN INK":{bgcolor:"Orange",logoImage:{fontType:"fab",icon:"btc"}},"SNINJA BANK":{bgcolor:"black",logoImage:{fontType:"fas",icon:"user-ninja"}},"BLOCK CHAIN INC":{bgcolor:"MediumSlateBlue",logoImage:{fontType:"fas",icon:"link"}},"EVIL CORP":{bgcolor:"Crimson",logoImage:{fontType:"fas",icon:"link"}},"":{bgcolor:"gray",logoImage:{fontType:"fas",icon:"link"}}}),O=function(){return{cardNumber:"",cardHolderName:"",validDate:"",vendersName:"",bg:"",logImg:"",ccv:""}},k=function(){var e=new Date,t=new Date(e.getFullYear()+1,e.getMonth(),e.getDate());return t},j=function(e){var t=new Date(e),a=t.getMonth()+1;return"".concat(a<10?"0"+a:a,"/").concat(t.getFullYear()%2e3)},S={name:"AddCard",data:function(){return{form:O(),options:[{value:"",text:""},{value:"BITCOIN INK",text:"BITCOIN INC "},{value:"SNINJA BANK",text:"SNINJA BANK"},{value:"BLOCK CHAIN INC",text:"BLOCK CHAIN INC"},{value:"EVIL CORP",text:"EVIL CORP"}],minDate:k()}},methods:{onSubmit:function(e){e.preventDefault();var t=this.form.vendersName?this.form.vendersName:"";this.form.bg=D[t].bgcolor,this.form.logImg=D[t].logoImage,this.form.validDate=j(this.form.validDate),this.$emit("cardData",this.form,!1)},reset:function(){this.cardAdded=!1},formatter:function(e){return e=4===e.length||9===e.length||14===e.length?e+" ":e,e}}},A=S,H=(a("c1ca"),Object(u["a"])(A,_,x,!1,null,"5d08eaac",null)),T=H.exports,E={name:"Home",components:{Ewallet:I,AddCard:T},data:function(){return{show:!1,cards:[{cardNumber:"1215 8878 9997",cardHolderName:"Natnae Lijato",validDate:"12/23",vendersName:"Our bannk",bg:"SkyBlue",logImg:{fontType:"fab",icon:"btc"}},{cardNumber:"127875 8878 9997",cardHolderName:"Girma Lijato",validDate:"12/23",vendersName:"My bannk",bg:"RosyBrown",logImg:{fontType:"fas",icon:"link"}},{cardNumber:"1215 8878 9997",cardHolderName:"Dave Lijato",validDate:"12/23",vendersName:"Your bannk",bg:"Sienna",logImg:{fontType:"fas",icon:"user-ninja"}}]}},computed:{cardItems:function(){return this.cards}},methods:{addCard:function(e,t){this.cards.push(e),this.show=t},changeShow:function(){this.show=!this.show}}},B=E,L=(a("4042"),Object(u["a"])(B,p,g,!1,null,null,null)),$=L.exports;r["default"].use(v["a"]);var M=[{path:"/",name:"Home",component:$}],P=new v["a"]({mode:"history",base:"/",routes:M}),R=P,K=a("2f62");r["default"].use(K["a"]);var V=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["default"].config.productionTip=!1,new r["default"]({router:R,store:V,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},bf29:function(e,t,a){},c1ca:function(e,t,a){"use strict";a("bf29")},da96:function(e,t,a){},ee84:function(e,t,a){"use strict";a("4fcc")}});
//# sourceMappingURL=app.4f48ac38.js.map