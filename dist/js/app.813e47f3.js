(function(e){function t(t){for(var a,c,d=t[0],i=t[1],l=t[2],m=0,u=[];m<d.length;m++)c=d[m],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&u.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);s&&s(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,d=1;d<r.length;d++){var i=r[d];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o=[];function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var s=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1016:function(e,t,r){e.exports=r.p+"img/vendor-blockchain.a2171465.svg"},"169f":function(e,t,r){e.exports=r.p+"img/vendor-evil.1c4415c7.svg"},"18a3":function(e,t,r){"use strict";r("30dd")},"30dd":function(e,t,r){},3914:function(e,t,r){var a={"./chip-dark.svg":"3d81","./chip-light.svg":"b876","./vendor-bitcoin.svg":"921c","./vendor-blockchain.svg":"1016","./vendor-evil.svg":"169f","./vendor-ninja.svg":"a239"};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="3914"},"3d81":function(e,t,r){e.exports=r.p+"img/chip-dark.fc147077.svg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var a=r("2b0e"),n=r("5f5b");r("ab8b"),r("2dd8");a["default"].use(n["a"]);var o=r("ecee"),c=r("ad3d"),d=r("c074"),i=r("f2d1");o["c"].add(d["e"],d["c"],d["b"],i["a"],d["f"],d["d"],d["a"]),a["default"].component("fa-icon",c["a"]);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],m=(r("5c0b"),r("2877")),u={},v=Object(m["a"])(u,l,s,!1,null,null,null),f=v.exports,b=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-container"},[r("h3",[e._v("E-wallet")]),r("div",{staticClass:"active-card"},[r("Ewallet",{attrs:{cardNumber:e.getActiveCard.cardNumber,cardHolderName:e.getActiveCard.cardHolderName,valid_month:e.getActiveCard.valid_month,valid_year:e.getActiveCard.valid_year,vendersName:e.getActiveCard.vendersName,bg:e.getActiveCard.bg,logImg:e.getActiveCard.logImg,index:0}})],1),r("div",{staticClass:"card-stock"},e._l(e.getCardStock,(function(t,a){return r("Ewallet",{directives:[{name:"show",rawName:"v-show",value:a!==e.activeCardIndex,expression:"index !== activeCardIndex"}],key:a,style:"margin-top:-130px;",attrs:{cardNumber:t.cardNumber,cardHolderName:t.cardHolderName,valid_month:t.valid_month,valid_year:t.valid_year,vendersName:t.vendersName,bg:t.bg,logImg:t.logImg,index:a}})})),1),r("b-button",{attrs:{block:"",variant:"primary"},on:{click:e.addCardRoute}},[e._v("Add card")])],1)},p=[],h=r("5530"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{staticClass:"card",style:e.classobj,on:{click:function(t){return e.activeCard(e.index)}}},[a("div",{staticClass:"card-header-info"},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-9"},[a("div",{staticClass:"row m-0 ml-3 "},[a("img",{attrs:{src:r("b876")}})])]),a("div",{staticClass:"col-3"},[a("img",{staticClass:"vendors",attrs:{src:r("3914")("./"+e.logImg)}})])])]),a("div",{staticClass:"card-number"},[a("span",[e._v(e._s(e.cardNumber))])]),a("b-row",[a("b-col",{attrs:{cols:"8"}},[a("div",[a("span",[e._v("Cardholder Name")]),a("br"),a("span",[e._v(e._s(e.cardHolderName))])])]),a("b-col",{attrs:{cols:"4"}},[a("div",[a("span",[e._v("Valid Date")]),a("br"),a("span",[e._v(e._s(e.valid_month)+"/")]),a("span",[e._v(e._s(e.valid_year))])])])],1)],1)},N=[],_=(r("a9e3"),r("2f62")),x={name:"EwalletCard",props:{cardNumber:{type:String},cardHolderName:{type:String},valid_month:{type:String},valid_year:{type:String},vendersName:{type:String},bg:{type:String},logImg:{type:String},index:{type:Number}},computed:{classobj:function(){return{"background-color":this.bg}},logoIcon:function(){return{fontType:"fas",icon:"sim-card"}}},methods:Object(h["a"])(Object(h["a"])({},Object(_["b"])(["updateActiveCard"])),{},{activeCard:function(e){this.updateActiveCard(e)}})},y=x,I=(r("f7b2"),Object(m["a"])(y,C,N,!1,null,"cd03dec6",null)),O=I.exports,A={name:"Home",components:{Ewallet:O},data:function(){return{cards:[]}},created:function(){this.storeCards()},computed:Object(h["a"])(Object(h["a"])({},Object(_["c"])({getCardStock:"getCards",getActiveCard:"getActiveCard"})),Object(_["d"])(["activeCardIndex"])),methods:Object(h["a"])(Object(h["a"])({},Object(_["b"])(["storeCards"])),{},{addCardRoute:function(){this.$router.push({path:"/addecard"})}})},w=A,j=(r("a7f2"),Object(m["a"])(w,g,p,!1,null,"472c6f0e",null)),E=j.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("EcardForm")],1)},S=[],D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-form"},[r("h1",[e._v("Add Card")]),r("div",{staticClass:"row default-card m-0 mb-5"},[r("Ewallet",{attrs:{cardNumber:e.form.cardNumber,cardHolderName:e.form.cardHolderName,valid_month:e.form.valid_month,valid_year:e.form.valid_year,vendersName:e.form.vendersName,bg:e.form.bg,logImg:e.form.logImg}})],1),r("div",{staticClass:"row justify-content-center"},[r("b-form",{on:{submit:e.onSubmit}},[r("div",{staticClass:"row m-0 mb-2"},[r("label",{attrs:{for:"card-number"}},[e._v("CARD NUMBER")]),r("b-form-input",{attrs:{id:"card-number",type:"text",maxlength:"19",minlength:"19",placeholder:"xxxx xxxx xxxx xxxx",formatter:e.formatter,required:""},model:{value:e.form.cardNumber,callback:function(t){e.$set(e.form,"cardNumber",t)},expression:"form.cardNumber"}})],1),r("div",{staticClass:"row m-0 mb-2"},[r("label",{attrs:{for:"card-holder-name"}},[e._v("CARDHOLDER NAME")]),r("b-form-input",{attrs:{required:"",id:"card-holder-name",type:"text",placeholder:"First and last name",maxlength:"25",minlength:"3"},model:{value:e.form.cardHolderName,callback:function(t){e.$set(e.form,"cardHolderName",t)},expression:"form.cardHolderName"}})],1),r("div",{staticClass:"row m-0 mb-2"},[r("div",{staticClass:"col-4"},[r("label",{attrs:{for:"month"}},[e._v("MONTH")]),r("b-form-select",{attrs:{required:"",id:"month",options:e.monthRange},model:{value:e.form.valid_month,callback:function(t){e.$set(e.form,"valid_month",t)},expression:"form.valid_month"}})],1),r("div",{staticClass:"col-4"},[r("label",{attrs:{for:"year"}},[e._v("YEAR")]),r("b-form-select",{attrs:{id:"year",options:e.yearRange},model:{value:e.form.valid_year,callback:function(t){e.$set(e.form,"valid_year",t)},expression:"form.valid_year"}})],1),r("div",{staticClass:"col-4"},[r("label",{attrs:{for:"ccv"}},[e._v("CCV")]),r("b-form-input",{attrs:{id:"ccv",type:"text",placeholder:"xxx",minlength:"3",maxlength:"3",required:""},model:{value:e.form.ccv,callback:function(t){e.$set(e.form,"ccv",t)},expression:"form.ccv"}})],1)]),r("div",{staticClass:"row m-0  mb-2"},[r("label",{attrs:{for:"wallet-vendor"}},[e._v("VENDOR")]),r("b-form-select",{attrs:{required:"",id:"wallet-vendor",options:e.options_vendor},on:{change:function(t){return e.changeVendor(t)}},model:{value:e.form.vendersName,callback:function(t){e.$set(e.form,"vendersName",t)},expression:"form.vendersName"}})],1),r("b-button",{attrs:{type:"submit"}},[e._v("Add Card")])],1)],1)])},H=[],R=(r("0d03"),r("d3b7"),r("25f0"),{"BITCOIN INK":{bgcolor:"Orange",logImg:"vendor-bitcoin.svg"},"SNINJA BANK":{bgcolor:"black",logImg:"vendor-ninja.svg"},"BLOCK CHAIN INC":{bgcolor:"MediumSlateBlue",logImg:"vendor-blockchain.svg"},"EVIL CORP":{bgcolor:"Crimson",logImg:"vendor-evil.svg"}}),T=[{cardNumber:"1215 8878 9997",cardHolderName:"Natnae Lijato",valid_month:"12",valid_year:"23",vendersName:"BITCOIN INK",bg:"Orange",logImg:"vendor-bitcoin.svg"},{cardNumber:"127875 8878 2997",cardHolderName:"Girma Lijato",valid_month:"12",valid_year:"23",vendersName:"My bannk",bg:"black",logImg:"vendor-ninja.svg"},{cardNumber:"1215 8878 1997",cardHolderName:"Dave Lijato",valid_month:"12",valid_year:"23",vendersName:"SNINJA BANK",bg:"MediumSlateBlue",logImg:"vendor-blockchain.svg"},{cardNumber:"1215 8008 1997",cardHolderName:"Solomon Dom",valid_month:"12",valid_year:"23",vendersName:"EVIL CORP",bg:"Crimson",logImg:"vendor-evil.svg"}],B=function(){return{cardNumber:"",cardHolderName:"",valid_month:"",valid_year:"",vendersName:"",bg:"gray",logImg:"vendor-bitcoin.svg",ccv:""}},$={name:"AddCard",components:{Ewallet:O},data:function(){return{form:B(),options_vendor:[{value:"",text:""},{value:"BITCOIN INK",text:"BITCOIN INC "},{value:"SNINJA BANK",text:"SNINJA BANK"},{value:"BLOCK CHAIN INC",text:"BLOCK CHAIN INC"},{value:"EVIL CORP",text:"EVIL CORP"}]}},computed:{yearRange:function(){for(var e=[],t=21;t<=99;t++)e.push(t.toString());return e},monthRange:function(){for(var e=[],t=1;t<=12;t++)e.push(t<10?"0".concat(t):"".concat(t));return e}},methods:Object(h["a"])(Object(h["a"])({},Object(_["b"])(["addNewCard"])),{},{onSubmit:function(e){e.preventDefault(),this.form.cardNumber&&this.form.cardHolderName&&this.addNewCard(this.form),this.$router.push({path:"/"})},formatter:function(e){return e=4===e.length||9===e.length||14===e.length?e+" ":e,e},changeVendor:function(){this.form.vendersName&&(this.form.bg=R[this.form.vendersName].bgcolor,this.form.logImg=R[this.form.vendersName].logImg)}})},P=$,L=(r("18a3"),Object(m["a"])(P,D,H,!1,null,"1313e4b5",null)),M=L.exports,V={name:"AddEcard",components:{EcardForm:M}},K=V,J=(r("e417"),Object(m["a"])(K,k,S,!1,null,"4ffb980a",null)),q=J.exports;a["default"].use(b["a"]);var U=[{path:"/",name:"Home",component:E},{path:"/addecard",name:"addecard",component:q}],F=new b["a"]({mode:"history",base:"/",routes:U}),W=F;a["default"].use(_["a"]);var X=new _["a"].Store({state:{allCards:[],activeCardIndex:0},getters:{getCards:function(e){return e.allCards},getActiveCard:function(e){return e.allCards[e.activeCardIndex]}},mutations:{ADD_NEW_ECARD:function(e,t){e.allCards.push(t),e.activeCardIndex=e.allCards.length-1},STORED_CARD:function(e,t){return e.allCards=t},UPDATE_ACTIVE_CARD_INDEX:function(e,t){return e.activeCardIndex=t}},actions:{storeCards:function(e){e.commit("STORED_CARD",T)},addNewCard:function(e,t){e.commit("ADD_NEW_ECARD",t)},updateActiveCard:function(e,t){e.commit("UPDATE_ACTIVE_CARD_INDEX",t)}}});a["default"].config.productionTip=!1,new a["default"]({router:W,store:X,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"67a0":function(e,t,r){},"8c5c":function(e,t,r){},"921c":function(e,t,r){e.exports=r.p+"img/vendor-bitcoin.6d450848.svg"},"95f2":function(e,t,r){},"9c0c":function(e,t,r){},a239:function(e,t,r){e.exports=r.p+"img/vendor-ninja.046254ea.svg"},a7f2:function(e,t,r){"use strict";r("8c5c")},b876:function(e,t,r){e.exports=r.p+"img/chip-light.5bf3177c.svg"},e417:function(e,t,r){"use strict";r("95f2")},f7b2:function(e,t,r){"use strict";r("67a0")}});
//# sourceMappingURL=app.813e47f3.js.map