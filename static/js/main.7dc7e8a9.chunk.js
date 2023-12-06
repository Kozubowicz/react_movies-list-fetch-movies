(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(14),c(9)),n=c(2),r=c(1),l=(c(15),c(16),c(17),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(6),m=c(8);c(19);function b(e){return fetch("".concat("https://www.omdbapi.com/?apikey=c5d31a0f","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var u=function(e){var t=e.addMovie,c=Object(r.useState)(""),i=Object(n.a)(c,2),a=i[0],s=i[1],d=Object(r.useState)(null),u=Object(n.a)(d,2),h=u[0],v=u[1],O=Object(r.useState)(!1),x=Object(n.a)(O,2),p=x[0],f=x[1],g=Object(r.useState)(0),N=Object(n.a)(g,2),y=N[0],w=N[1],I=Object(r.useState)(!1),k=Object(n.a)(I,2),F=k[0],S=k[1],C=function(){var e=Object(m.a)(Object(j.a)().mark((function e(t){var c,i;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),w((function(e){return e+1})),!(a.trim().length>=1)){e.next=8;break}return S(!0),e.next=6,b(a);case 6:"Response"in(c=e.sent)&&"False"===c.Response?(v(null),f(!0)):(v({title:(i=c).Title,description:i.Plot,imgUrl:"N/A"!==i.Poster?i.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"https://www.imdb.com/title/".concat(i.imdbID),imdbId:i.imdbID}),f(!1));case 8:S(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(p?"is-danger":""),value:a,onChange:function(e){s(e.target.value),f(!1)}})}),p&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:F?"button is-loading":"button is-light",disabled:0===a.length,onClick:C,children:0===y?"Find a movie":"Search again"})}),h&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){h&&(t(h),v(null),s(""))},children:"Add to the list"})})]})]}),h&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:h})]})]})},h=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(u,{addMovie:function(e){void 0===c.find((function(t){return t.imdbId===e.imdbId}))&&i((function(t){return[].concat(Object(s.a)(t),[e])}))}})})]})};a.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7dc7e8a9.chunk.js.map