(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(7),c=n.n(i),r=n(2),s=n(10),u=n(0);function o(t){var e=t.setCategories,n=Object(a.useState)("Busca tu gif"),i=Object(r.a)(n,2),c=i[0],o=i[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(t),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){o(t.target.value)}})})}var j=n(8),d=n.n(j),p=n(11),b=n(6),m=n.n(b),f=n(9),l=function(){var t=Object(f.a)(m.a.mark((function t(e){var n,a,i,c,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=12&api_key=0p5QcgB8WR8jiCntwt0Dd4vibpEqZPGz"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return i=t.sent,c=i.data,r=c.map((function(t){var e;return{id:t.id,title:t.title,img:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=l,h=function(t){t.id;var e=t.title,n=t.img;return Object(u.jsxs)("div",{className:"card animate__animated animate__backInRight",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(e,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){g(t).then((function(t){c({data:t,loading:!1})}))}),[t]),i}(e),i=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{animate__animated:!0,animate__backInRight:!0,children:e}),c&&Object(u.jsx)("p",{className:"loading animate__animated animate__backInLeft ",children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid animate__animated animate__backInRight",children:i.map((function(t){return Object(u.jsx)(h,Object(p.a)({},t),t.id)}))})]})},x=function(){var t=Object(a.useState)(["Avengers"]),e=Object(r.a)(t,2),n=e[0],i=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:i}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};o.propTypes={setCategories:d.a.func.isRequired};n(20);c.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b5cbdb38.chunk.js.map