(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,n,o){},11:function(t,n,o){"use strict";o.r(n);var r=o(3),c=o.n(r),e=o(4),i=o(1),s=o(0),u=function(t){var n=t.goods;return Object(s.jsx)("ul",{children:n.map((function(t){return Object(s.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};o(10);function a(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){var t=Object(i.useState)([]),n=Object(e.a)(t,2),o=n[0],r=n[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){a().then((function(t){r(t)})).catch((function(){throw new Error("Error, sorry :(")}))},children:"Load all goods"}),Object(s.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){a().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){r(t)})).catch((function(){throw new Error("Error, sorry :(")}))},children:"Load 5 first goods"}),Object(s.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){a().then((function(t){return t.filter((function(t){return"red"===t.color})).slice(0,5)})).then((function(t){r(t)})).catch((function(){throw new Error("Error, sorry :(")}))},children:"Load red goods"}),Object(s.jsx)(u,{goods:o})]})};c.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.e0096693.chunk.js.map