(this["webpackJsonplanddox-react-code-challenge"]=this["webpackJsonplanddox-react-code-challenge"]||[]).push([[0],{17:function(e,t,a){e.exports=a(33)},22:function(e,t,a){},24:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),u=(a(22),a(36)),m=a(37),o=a(38),i=a(39),E=a(40),s=(a(23),a(24),a(12)),d=a(6),v=a(35),b=a(41),p=a(42),h=a(43),f=a(16),O=a(9),g=a(10);O.b.add(g.a,g.b,g.c,g.d);var j=function(e){var t=function(e){switch(e){case"add":return{icon:"plus"};case"indent":return{icon:"level-up-alt",rotation:90};case"remove":return{icon:"minus-circle"};case"smile":return{icon:"smile"};default:return{}}}(e.icon);return l.a.createElement(f.a,t)},w=function(e){var t=Object(n.useState)(e.owner),a=Object(d.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(e.interest),m=Object(d.a)(u,2),o=m[0],i=m[1],E=Object(n.useState)(e.lease),s=Object(d.a)(E,2),v=s[0],h=s[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("td",null,l.a.createElement(b.a,{placeholder:"Luke Skywalker",onChange:function(e){return c(e.target.value)},value:r})),l.a.createElement("td",null,l.a.createElement(p.a,{className:"mb-3"},l.a.createElement(b.a,{placeholder:"0.5",onChange:function(e){return i(e.target.value)},value:o}),l.a.createElement(p.a.Append,null,l.a.createElement(p.a.Text,null,"%")))),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement(p.a,{className:"mb-3"},l.a.createElement(b.a,{placeholder:"tatooine lease",onChange:function(e){return h(e.target.value)},value:v}))))},k=function(e){var t=Object(n.useState)(e.owner),a=Object(d.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(e.npri),m=Object(d.a)(u,2),o=m[0],i=m[1];return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(p.a,{className:"mb-3"},l.a.createElement(p.a.Append,null,l.a.createElement(p.a.Text,null,l.a.createElement(j,{icon:"indent"}))),l.a.createElement(b.a,{placeholder:"Luke Skywalker",onChange:function(e){return c(e.target.value)},value:r}))),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement(p.a,{className:"mb-3"},l.a.createElement(b.a,{placeholder:"0.5",onChange:function(e){return i(e.target.value)},value:o}),l.a.createElement(p.a.Append,null,l.a.createElement(p.a.Text,null,"%")))),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement(h.a,{variant:"secondary",size:"sm",active:!0},l.a.createElement(j,{icon:"remove"}))))},S=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(""),m=Object(d.a)(u,2),o=m[0],i=m[1],E=Object(n.useState)([]),v=Object(d.a)(E,2),f=v[0],O=v[1],g=[];return l.a.createElement(l.a.Fragment,null,f.map((function(e,t){return l.a.createElement(k,{key:t,owner:e.owner,npri:e.npri})})),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(p.a,{className:"mb-3"},l.a.createElement(p.a.Append,null,l.a.createElement(p.a.Text,null,l.a.createElement(j,{icon:"indent"}))),l.a.createElement(b.a,{placeholder:"Luke Skywalker",onChange:function(e){return c(e.target.value)}}))),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement(p.a,{className:"mb-3"},l.a.createElement(b.a,{placeholder:"0.5",onChange:function(e){return i(e.target.value)}}),l.a.createElement(p.a.Append,null,l.a.createElement(p.a.Text,null,"%")))),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement(h.a,{variant:"secondary",size:"sm",active:!0},l.a.createElement(j,{icon:"remove"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(h.a,{variant:"secondary",size:"sm",onClick:function(e){return g.owner=r,g.npri=o,void O((function(e){return[].concat(Object(s.a)(e),[g])}))},active:!0},l.a.createElement(j,{icon:"add"})," Add NPRI"))))},y=function(e){var t=e.minerals,a=Object(n.useState)(t),r=Object(d.a)(a,2),c=(r[0],r[1]);return l.a.createElement(l.a.Fragment,null,t.map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement(w,{key:a,owner:e.owner,interest:e.interest,lease:e.lease}),l.a.createElement("td",null,l.a.createElement(h.a,{variant:"secondary",size:"sm",onClick:function(e){return function(e){var a=t.indexOf(e),n=t.splice(a,1);c(n)}()},active:!0},l.a.createElement(j,{icon:"remove"})))),l.a.createElement(S,null))})))},C=function(e){e.value,e.onChange;var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(""),m=Object(d.a)(u,2),o=m[0],i=m[1],E=Object(n.useState)(""),f=Object(d.a)(E,2),O=f[0],g=f[1],w=Object(n.useState)([]),k=Object(d.a)(w,2),S=k[0],C=k[1],x=[];return l.a.createElement(v.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,["Owner","Mineral Interest","NPRI","Lease"].map((function(e,t){return l.a.createElement("td",null,l.a.createElement("b",null,e))})),l.a.createElement("td",null))),l.a.createElement("tbody",null,l.a.createElement(y,{minerals:S}),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(b.a,{placeholder:"Luke Skywalker",onChange:function(e){return c(e.target.value)},npm:!0,start:!0})),l.a.createElement("td",null,l.a.createElement(p.a,{className:"mb-3"},l.a.createElement(b.a,{placeholder:"0.5",onChange:function(e){return i(e.target.value)}}),l.a.createElement(p.a.Append,null,l.a.createElement(p.a.Text,null,"%")))),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement(p.a,{className:"mb-3"},l.a.createElement(b.a,{placeholder:"tatooine lease",onChange:function(e){return g(e.target.value)}}))),l.a.createElement("td",null,l.a.createElement(h.a,{variant:"secondary",size:"sm",active:!0},l.a.createElement(j,{icon:"remove"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(h.a,{variant:"secondary",size:"sm",onClick:function(e){return x.owner=r,x.interest=o,x.lease=O,void C((function(e){return[].concat(Object(s.a)(e),[x])}))},active:!0},l.a.createElement(j,{icon:"add"})," Add Mineral interest")))))},x=[{id:Object(E.a)(),owner:"Luke Skywalker",interest:.5,lease:"Tatooine Lease",npris:[{id:Object(E.a)(),owner:"Leia Organa",interest:.45},{id:Object(E.a)(),owner:"Han Solo",interest:.15}]}];var N=function(){return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement("h1",null,"Landdox Code Challenge ",l.a.createElement(j,{icon:"smile"}))))),l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(C,{value:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5ed46bf0.chunk.js.map