(this.webpackJsonpphotosearch=this.webpackJsonpphotosearch||[]).push([[0],{18:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(10),a=c.n(r),i=c(7),o=c.n(i),j=c(8),l=c(11),u=c(3),d=(c(18),c(0)),b=function(e){var t=e.setInputQuery,c=(e.inputQuery,e.setPage),s=JSON.parse(localStorage.getItem("storedInput"))||[],r=Object(n.useState)(s),a=Object(u.a)(r,2),i=a[0],o=a[1],j=Object(n.useState)([]),l=Object(u.a)(j,2),b=l[0],O=l[1],h=Object(n.useState)(!0),m=Object(u.a)(h,2),f=m[0],p=m[1];return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"title",children:"Search Images"})}),Object(d.jsx)("div",{children:Object(d.jsx)("h5",{className:"title",children:"Input and press enter to search awesome images!"})}),Object(d.jsxs)("div",{className:"searchContainer",children:[Object(d.jsx)("input",{type:"search",className:"search",onKeyUp:function(e){var n=e.target.value,s=i.filter((function(e){return e.includes(n)}));O(s),p(!0),"Enter"===e.key&&""!==n&&(t(n),i.includes(n)||(i.push(n),localStorage.setItem("storedInput",JSON.stringify(i))),c(1))}}),Object(d.jsx)("div",{className:f?"searchString":"displayNone",children:b.length>0?Object(d.jsxs)(d.Fragment,{children:[b.map((function(e,c){return Object(d.jsx)("li",{onClick:function(){return t(e),void p(!1)},className:"searchSuggestions",style:{color:"black"},children:e},c)})),Object(d.jsx)("button",{onClick:function(){localStorage.getItem("storedInput")&&(localStorage.removeItem("storedInput"),o([]),p(!1))},className:"clearSearchButton",children:"Clear"})]}):null})]})]})},O=c(12),h=c.n(O),m=function(){return Object(d.jsxs)("div",{className:"loading",children:[Object(d.jsx)("div",{children:Object(d.jsx)(h.a,{type:"Puff",color:"#ff5d33f1",height:200,width:200,timeout:5e3})}),Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:"Loading.."})})]})},f=function(e){var t=e.imagesArray,c=e.inputQuery,s=e.setOpenModal,r=e.setModalSrc,a=e.loading,i=e.page,o=e.setPage,j=Object(n.useRef)(),l=Object(n.useCallback)((function(e){a||(j.current&&j.current.disconnect(),j.current=new IntersectionObserver((function(e){e[0].isIntersecting&&i<10&&o((function(e){return e+1}))})),e&&j.current.observe(e))}),[a,i]),u=function(e){s(!0),r(e)};return Object(d.jsxs)("div",{className:"imageContainer",children:[t===[]?Object(d.jsx)("h3",{children:"No results found"}):t.map((function(e,c){return t.length===c+1?Object(d.jsx)("img",{src:e,alt:"image-error",onClick:function(){return u(e)},style:{cursor:"pointer"},ref:l}):Object(d.jsx)("img",{src:e,alt:"image-error",onClick:function(){return u(e)},style:{cursor:"pointer"}})})),Object(d.jsx)("div",{className:"moreImages",children:""!==c&&i<10?Object(d.jsx)("h3",{children:"Loading"}):Object(d.jsx)("h4",{children:".."})})]})},p=(c(9),function(e){var t=e.link,c=e.setOpenModal;return Object(d.jsx)("div",{className:"modalBack",children:Object(d.jsxs)("div",{className:"modalContainer",children:[Object(d.jsx)("div",{className:"modalClose",onClick:function(){c(!1)},children:Object(d.jsx)("i",{class:"fas fa-times-circle"})}),Object(d.jsx)("div",{className:"modalContent",children:Object(d.jsx)("img",{className:"image",alt:"image-error",src:t})})]})})}),g=c.p+"static/media/eImg.13468768.svg",x=function(){return Object(d.jsxs)("div",{className:"errorImg",children:[Object(d.jsx)("img",{src:g}),Object(d.jsx)("h4",{children:"Sorry!! Some error occured"})]})};var v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(u.a)(a,2),O=i[0],h=i[1],g=Object(n.useState)(!1),v=Object(u.a)(g,2),S=v[0],y=v[1],k=Object(n.useState)(""),N=Object(u.a)(k,2),I=N[0],w=N[1],C=Object(n.useState)(1),M=Object(u.a)(C,2),Q=M[0],E=M[1],P=Object(n.useState)(!1),J=Object(u.a)(P,2),B=J[0],_=J[1],A=Object(n.useState)(!1),F=Object(u.a)(A,2),L=F[0],R=F[1];function K(e){return U.apply(this,arguments)}function U(){return(U=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],R(!0),e.next=4,fetch(t).then((function(e){return e.json()})).then((function(e){c=e.photos.photo.map((function(e){return"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")})),r((function(e){return[].concat(Object(j.a)(e),Object(j.a)(c))})),R(!1)})).catch((function(e){_(!0)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q="https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=c603ee6ad346f3682d963bc43161ad94&page=".concat(Q,"&format=json&nojsoncallback=1");return Object(n.useEffect)((function(){""===I&&K(q)}),[I,Q]),Object(n.useEffect)((function(){""!==I&&K("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c603ee6ad346f3682d963bc43161ad94&page=".concat(Q,"&tags=").concat(I,"&format=json&nojsoncallback=1"))}),[I,Q]),Object(n.useEffect)((function(){r([])}),[I]),Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(b,{setInputQuery:w,inputQuery:I,setPage:E})}),Object(d.jsxs)("div",{className:"body",children:[L?Object(d.jsx)(m,{}):"",B?Object(d.jsx)(x,{}):Object(d.jsx)(f,{imagesArray:c,setOpenModal:y,setModalSrc:h,loading:L,page:Q,setPage:E,inputQuery:I}),S?Object(d.jsx)(p,{link:O,setOpenModal:y}):""]})]})})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dc19ccb9.chunk.js.map