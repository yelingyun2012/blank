webpackJsonp([1],{"/J8e":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"where",props:{whereData:{type:[Array,Object,String]},selectedTabName:{type:[Array,String]},selectField:{type:[Array,String]}},data:function(){return{showType:!0,character:"and",confitions:{items:[{tabName:"",field:"",queryCriteria:"",value:"",copyValue:"",Remaining:!0,showValue:!0,type:"",queryCriterias:[]}]},productFields:[],shopFields:[],stringCriteria:[{value:"=",label:"等于"},{value:" is not ",label:"不等于"},{value:" in ",label:"包含"},{value:" not in ",label:"不包含"}],defaultCriteria:[{value:"=",label:"等于"},{value:">",label:"大于"},{value:"<",label:"小于"},{value:">=",label:"大于等于"},{value:"<=",label:"小于等于"},{value:" is not ",label:"不等于"}],boolCriteria:[{value:'="true"',label:"真"},{value:'="false"',label:"假"}],focusItem:0}},computed:{hasType:function(){return this.showType?"primary":"ghost"},hasReverseType:function(){return this.showType?"ghost":"primary"}},methods:{handleDelete:function(e){this.confitions.items.splice(e,1)},handleToggle:function(){this.showType=!this.showType,"并且"===event.target.innerHTML?this.character="and":this.character="or"},handleAdd:function(){this.confitions.items.push({tabName:"",field:"",queryCriteria:"",value:"",copyValue:"",Remaining:!1,showValue:!1,type:"",queryCriterias:[]})},handleCriterias:function(e){var t=e.split("-");t.length>3?(this.focusItem=t[1],this.confitions.items[this.focusItem].tabName=t[0],this.confitions.items[this.focusItem].field=t[2],this.confitions.items[this.focusItem].Remaining=!0,this.confitions.items[this.focusItem].queryCriteria="",this.confitions.items[this.focusItem].value="",this.confitions.items[this.focusItem].copyValue="","String"===t[3]?(this.confitions.items[this.focusItem].showValue=!0,this.confitions.items[this.focusItem].type="String"):"Boolean"===t[3]?(this.confitions.items[this.focusItem].showValue=!1,this.confitions.items[this.focusItem].type="Boolean"):(this.confitions.items[this.focusItem].showValue=!0,this.confitions.items[this.focusItem].type="")):(this.focusItem=t[0],this.confitions.items[this.focusItem].field=t[1],this.confitions.items[this.focusItem].Remaining=!0,this.confitions.items[this.focusItem].queryCriteria="",this.confitions.items[this.focusItem].value="","String"===t[2]?(this.confitions.items[this.focusItem].showValue=!0,this.confitions.items[this.focusItem].type="String"):"Boolean"===t[2]?(this.confitions.items[this.focusItem].showValue=!1,this.confitions.items[this.focusItem].type="Boolean"):(this.confitions.items[this.focusItem].showValue=!0,this.confitions.items[this.focusItem].type=""))},handleValue:function(e){if([" not in "," in "].includes(this.confitions.items[e].queryCriteria)){var t=this.confitions.items[e].copyValue.split(","),i="(";t.forEach(function(e,s){i=s===t.length-1?i+"'"+e+"'":i+"'"+e+"',"}),this.confitions.items[e].value=i+")"}else this.confitions.items[e].value=this.confitions.items[e].copyValue}}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"where"},[i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[i("Icon",{attrs:{type:"android-remove"}}),e._v("查询条件")],1),i("div",{staticClass:"action-con"},[i("ButtonGroup",[i("Button",{attrs:{type:e.hasType},on:{click:e.handleToggle}},[e._v("并且")]),i("Button",{attrs:{type:e.hasReverseType},on:{click:e.handleToggle}},[e._v("或者")])],1),i("Button",{staticStyle:{marginLeft:"10px"},attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("添加新行")])],1),i("div",{staticClass:"conditions-con"},[i("Form",{ref:"confitions",attrs:{model:e.confitions}},e._l(e.confitions.items,function(t,s){return i("FormItem",{key:s},[i("Row",[i("Col",{attrs:{span:"7"}},[i("Select",{staticStyle:{width:"300px"},attrs:{disabled:0===e.selectField.length},on:{"on-change":e.handleCriterias}},[e._l(e.selectedTabName,function(t,n){return e.selectedTabName.length>1?i("OptionGroup",{key:n,attrs:{label:t}},e._l(e.whereData[t+"Field"],function(n,a){return i("Option",{key:a,attrs:{value:t+"-"+s+"-"+n.column_name+"-"+n.colum_type}},[e._v(e._s(n.column_name))])})):e._e()}),e._l(e.whereData,function(t,n){return e.selectedTabName.length<=1?i("Option",{key:n,attrs:{value:s+"-"+t.column_name+"-"+t.colum_type}},[e._v(e._s(t.column_name))]):e._e()})],2)],1),t.Remaining?i("Col",{attrs:{span:"7"}},["String"===t.type?i("Select",{staticStyle:{width:"300px"},attrs:{disabled:0===e.selectField.length},model:{value:t.queryCriteria,callback:function(i){e.$set(t,"queryCriteria",i)},expression:"item.queryCriteria"}},e._l(e.stringCriteria,function(t,s){return i("Option",{key:t.label,attrs:{value:t.value}},[e._v(e._s(t.label))])})):"Boolean"===t.type?i("Select",{staticStyle:{width:"300px"},attrs:{disabled:0===e.selectField.length},model:{value:t.queryCriteria,callback:function(i){e.$set(t,"queryCriteria",i)},expression:"item.queryCriteria"}},e._l(e.boolCriteria,function(t,s){return i("Option",{key:t.label,attrs:{value:t.value}},[e._v(e._s(t.label))])})):i("Select",{staticStyle:{width:"300px"},attrs:{disabled:0===e.selectField.length},model:{value:t.queryCriteria,callback:function(i){e.$set(t,"queryCriteria",i)},expression:"item.queryCriteria"}},e._l(e.defaultCriteria,function(t,s){return i("Option",{key:t.label,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1):e._e(),t.Remaining&&t.showValue?i("Col",{attrs:{span:"7"}},[i("Input",{attrs:{placeholder:"请输入内容",disabled:0===e.selectField.length},on:{"on-blur":function(t){e.handleValue(s)}},model:{value:t.copyValue,callback:function(i){e.$set(t,"copyValue",i)},expression:"item.copyValue"}})],1):e._e(),i("Col",{attrs:{span:"2"}},[i("Icon",{attrs:{type:"ios-trash-outline"},on:{click:function(t){e.handleDelete(s)}}})],1)],1)],1)}))],1)])],1)},staticRenderFns:[]};var a=i("vSla")(s,n,!1,function(e){i("kXmg")},null,null);t.default=a.exports},kXmg:function(e,t){}});