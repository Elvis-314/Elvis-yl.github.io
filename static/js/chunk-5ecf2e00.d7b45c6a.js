(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ecf2e00"],{"685d":function(t,e,n){"use strict";n.r(e);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{id:"",name:"",cols:"30",rows:"10"},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),t._v(" "),n("inputNumber",{attrs:{"input-content":t.inputText,"max-length":10}})],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{class:{red:t.isRed}},[t._v(t._s(t.inputContent.length))]),t._v(" "),n("span",[t._v("/")]),t._v(" "),n("span",[t._v(t._s(t.maxLength)+" (请填写"+t._s(t.minLength)+"-"+t._s(t.maxLength)+"字)")])])},s=[],r=(n("c5f6"),{name:"InputNumber",props:{inputContent:{type:String,default:""},minLength:{type:Number,default:1},maxLength:{type:Number,default:10}},data:function(){return{isRed:!1}},watch:{inputContent:{handler:function(){parseInt(this.inputContent.length)>parseInt(this.maxLength)?this.isRed=!0:this.isRed=!1},deep:!0}}}),p=r,o=(n("c745"),n("2877")),c=Object(o["a"])(p,i,s,!1,null,"74d54ca5",null),l=c.exports,m={name:"InputNumber",components:{inputNumber:l},data:function(){return{inputText:"输入框回显长度"}}},d=m,h=Object(o["a"])(d,u,a,!1,null,null,null);e["default"]=h.exports},c745:function(t,e,n){"use strict";var u=n("e2b2"),a=n.n(u);a.a},e2b2:function(t,e,n){}}]);