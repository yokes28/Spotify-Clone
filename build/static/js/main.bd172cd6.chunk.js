(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(25),i=c.n(a),r=(c(60),c(15)),o=(c(61),c(62),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("1a07ad6494ed400ca8ab070169a67b39","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),l=c(1);var j=function(){return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(l.jsx)("a",{href:o,children:"LOGIN WITH SPOTIFY"})]})},d=c(34),b=c.n(d),u=(c(64),c(35)),O=c.n(u),h=c(28),x=c.n(h),f=c(41),m=c.n(f);c(65);var p=function(e){var t=e.title,c=e.Icon;return Object(l.jsxs)("div",{className:"sidebaroption",children:[c&&Object(l.jsx)(c,{className:"sidebaroptionicon"}),c?Object(l.jsx)("h4",{children:t}):Object(l.jsx)("p",{children:t})]})},v=Object(s.createContext)(),y=function(e){var t=e.initialState,c=e.reducer,n=e.children;return Object(l.jsx)(v.Provider,{value:Object(s.useReducer)(c,t),children:n})},g=function(){return Object(s.useContext)(v)};var _=function(){var e,t=g(),c=Object(r.a)(t,2),s=c[0].playlists;return c[1],Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("img",{className:"logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"}),Object(l.jsx)(p,{Icon:O.a,title:"Home"}),Object(l.jsx)(p,{Icon:x.a,title:"Search"}),Object(l.jsx)(p,{Icon:m.a,title:"Your Library"}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{className:"sidebar_title",children:"PLAYLIST"}),Object(l.jsx)("hr",{}),null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.map((function(e){return Object(l.jsx)(p,{title:e.name})}))]})},N=(c(71),c(72),c(73),c(91));var S=function(){var e,t=g(),c=Object(r.a)(t,2),s=c[0].user;return c[1],Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header_left",children:[Object(l.jsx)(x.a,{}),Object(l.jsx)("input",{placeholder:"Search for Artists, Songs, Other Albums",type:"text"})]}),Object(l.jsxs)("div",{className:"header_right",children:[Object(l.jsx)(N.a,{src:null===s||void 0===s||null===(e=s.images[0])||void 0===e?void 0:e.url,alt:null===s||void 0===s?void 0:s.display_name}),Object(l.jsx)("h4",{children:null===s||void 0===s?void 0:s.display_name})]})]})},k=c(42),E=c.n(k),T=c(43),I=c.n(T),w=c(44),L=c.n(w);c(74);var P=function(e){var t=e.track,c=void 0===t?"test":t;return Object(l.jsxs)("div",{className:"songRow",children:[Object(l.jsx)("img",{className:"songRow_album",src:c.album.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"songRow_info",children:[Object(l.jsx)("h1",{children:c.name}),Object(l.jsxs)("p",{children:[c.artists.map((function(e){return e.name})).join(","),"-"," ",c.album.name]})]})]})};var R=function(e){var t=e.spotify,c=g(),s=Object(r.a)(c,2),n=s[0].discover_weekly;return s[1],Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(S,{spotify:t}),Object(l.jsxs)("div",{className:"body_info",children:[Object(l.jsx)("img",{src:null===n||void 0===n?void 0:n.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"body_infoText",children:[Object(l.jsx)("strong",{children:"PLAYLIST"}),Object(l.jsx)("h2",{children:"Discover Weekly"}),Object(l.jsx)("p",{children:null===n||void 0===n?void 0:n.description})]})]}),Object(l.jsxs)("div",{className:"body_songs",children:[Object(l.jsxs)("div",{className:"body_icons",children:[Object(l.jsx)(E.a,{className:"body_shuffle"}),Object(l.jsx)(I.a,{fontSize:"large"}),Object(l.jsx)(L.a,{})]}),null===n||void 0===n?void 0:n.tracks.items.map((function(e){return Object(l.jsx)(P,{track:e.track})}))]})]})},Y=(c(75),c(47)),A=c.n(Y),C=c(46),F=c.n(C),K=c(48),V=c.n(K),D=c(45),U=c.n(D),W=c(49),z=c.n(W),H=c(89),B=c(90),J=c(50),M=c.n(J),G=c(51),Q=c.n(G);var X=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer_left",children:[Object(l.jsx)("img",{className:"footer_albumLogo",src:"https://upload.wikimedia.org/wikipedia/commons/e/ec/COVER_OF_HOT_ALTERNATIVE_PLAYLIST.jpg",alt:""}),Object(l.jsxs)("div",{className:"footer_songInfo",children:[Object(l.jsx)("h4",{children:"Yesh"}),Object(l.jsx)("p",{children:"Yokes !"})]})]}),Object(l.jsxs)("div",{className:"footer_center",children:[Object(l.jsx)(U.a,{className:"footer_green"}),Object(l.jsx)(F.a,{className:"footer_icon"}),Object(l.jsx)(A.a,{fontSize:"large",className:"footer_icon"}),Object(l.jsx)(V.a,{className:"footer_icon"}),Object(l.jsx)(z.a,{className:"footer_green"})]}),Object(l.jsx)("div",{className:"footer_right",children:Object(l.jsxs)(H.a,{container:!0,spacing:2,children:[Object(l.jsx)(H.a,{item:!0,children:Object(l.jsx)(M.a,{})}),Object(l.jsx)(H.a,{item:!0,children:Object(l.jsx)(Q.a,{})}),Object(l.jsx)(H.a,{item:!0,xs:!0,children:Object(l.jsx)(B.a,{})})]})})]})};var Z=function(e){var t=e.spotify;return Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("div",{className:"player_body",children:[Object(l.jsx)(_,{}),Object(l.jsx)(R,{spotify:t})]}),Object(l.jsx)(X,{})]})},q=new b.a;var $=function(){var e=g(),t=Object(r.a)(e,2),c=t[0],n=(c.user,c.token),a=t[1];return Object(s.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("=");return e[c[0]]=decodeURIComponent(c[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(a({type:"SET_TOKEN",token:t}),q.setAccessToken(t),q.getMe().then((function(e){a({type:"SET_USER",user:e})})),q.getUserPlaylists().then((function(e){a({type:"SET_PLAYLISTS",playlists:e})})),q.getPlaylist("37i9dQZEVXcLdIvkIfgKk8").then((function(e){a({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),Object(l.jsx)("div",{className:"app",children:n?Object(l.jsx)(Z,{spotify:q}):Object(l.jsx)(j,{})})},ee=c(13),te=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(ee.a)(Object(ee.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(ee.a)(Object(ee.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(ee.a)(Object(ee.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ee.a)(Object(ee.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,93)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(y,{initialState:{user:null,playlists:[],playing:!1,item:null,token:null},reducer:te,children:Object(l.jsx)($,{})})}),document.getElementById("root")),ce()}},[[76,1,2]]]);
//# sourceMappingURL=main.bd172cd6.chunk.js.map