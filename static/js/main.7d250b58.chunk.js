(this["webpackJsonpparty-list"]=this["webpackJsonpparty-list"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),u=n(6),i=n(3);var o=function(e){return r.a.createElement("div",{onClick:function(){e.onChecked(e.id)}},r.a.createElement("li",null,e.text))};var m=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{className:"form"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",value:c}),r.a.createElement("button",{onClick:function(){e.onAdd(c),l("")}},r.a.createElement("span",null,"Add")))};var s=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];function l(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Party Guest List")),r.a.createElement(m,{type:"text",placeholder:"Write a Name",onAdd:function(e){c((function(t){return[].concat(Object(u.a)(t),[e])}))}}),r.a.createElement("div",null,r.a.createElement("ul",null,n.map((function(e,t){return r.a.createElement(o,{text:e,onChecked:l,key:t,id:t})})))))};l.a.render(r.a.createElement(s,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.7d250b58.chunk.js.map