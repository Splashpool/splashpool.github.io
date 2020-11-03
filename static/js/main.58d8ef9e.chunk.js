(this["webpackJsonpsplashpool.github.io"]=this["webpackJsonpsplashpool.github.io"]||[]).push([[0],{136:function(e,t,a){e.exports=a.p+"static/media/loading.2dc69883.svg"},170:function(e,t,a){e.exports=a(248)},179:function(e,t,a){},180:function(e,t,a){},182:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=a(19),i=(a(179),a(285)),s=a(61),u=a(288),m=a(308),d=(a(180),a(16)),p=a(14),E=a(283),g=a(52),f=a(287),h=a(68);a(182);var v=function(){return r.a.createElement("div",{className:"Header",style:{padding:20}},r.a.createElement(E.a,{container:!0,spacing:0},r.a.createElement(E.a,{item:!0,md:!0}),r.a.createElement(E.a,{item:!0,xs:12,md:6},r.a.createElement(h.a,{icon:"hand-holding-water",className:"spl--pb"}),r.a.createElement(g.a,{variant:"h2",component:"h1",gutterBottom:!0,className:"spl--pb"},"Welcome to Oasis"),r.a.createElement(g.a,{variant:"body1",gutterBottom:!0,className:"spl--pb"},"Find for your nearest drinking water and toilet facilities"),r.a.createElement(d.b,{to:"/locations",style:{textDecoration:"none"}},r.a.createElement(f.a,{variant:"contained",color:"primary"},"Search locations"))),r.a.createElement(E.a,{item:!0,md:!0})))},b=a(23),y=function(){var e=Object(b.b)().user,t=e.name,a=e.picture,n=e.email,o=e.sub;return r.a.createElement("div",null,r.a.createElement("div",{className:"row align-items-center profile-header"},r.a.createElement("div",{className:"col-md-2 mb-3"},r.a.createElement("img",{src:a,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})),r.a.createElement("div",{className:"col-md text-center text-md-left"},r.a.createElement("h2",null,t),r.a.createElement("p",null,"User id: ",o),r.a.createElement("p",{className:"lead text-muted"},n))),r.a.createElement("div",{className:"row"},r.a.createElement("pre",{className:"col-12 text-light bg-dark p-4"},JSON.stringify(e,null,2))))},O=a(62),L=a.n(O),j=a(18),C=a.n(j),w=a(33),k=a(57),N=a.n(k),x=a(42),S="https://j33niy2o35.execute-api.eu-west-2.amazonaws.com/dev/",I=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_LOCATION_BEGINS"}),e.next=4,N.a.get("".concat(S,"/locations"));case 4:a=e.sent,t({type:"GET_LOCATION_SUCCESS",payload:a.data}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t({type:"GET_LOCATION_FAILURE"}),x.a.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"ADD_LOCATION_BEGINS"}),t.next=4,N.a.post("".concat(S,"/locations"),e);case 4:n=t.sent,a({type:"ADD_LOCATION_SUCCESS",payload:n.data}),a(I()),x.a.success("Location Added Successfully!"),t.next=16;break;case 10:throw t.prev=10,t.t0=t.catch(0),console.log(t.t0),a({type:"ADD_LOCATION_FAILURE"}),x.a.error(t.t0.message),t.t0;case 16:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return e.location.locationList},D=function(e){return e.location.getLocationLoading},_=function(e){return e.location.addLocationLoading},R=function(e){return e.location.deleteLocationLoading},U=function(e){return e.location.updateLocationLoading},B=a(289),F=a(251),W=a(291),P=a(292),G=a(290),M=a(88),K=a.n(M),z=function(e){var t=e.match.params.number;console.log("idddd",t);var a,o=Object(l.b)(),c=Object(l.c)(T),i=Object(n.useCallback)((function(){o(I())}),[o]);if(Object(n.useEffect)((function(){i()}),[i]),c&&(a=c.filter((function(e){return e.locationId===parseInt(t)}))[0]),a){console.log("data  ",a);var s="";return s=!0===a.drinkable?"Drinkable":"Needs treatment",r.a.createElement(E.a,{container:!0,spacing:0},r.a.createElement(E.a,{item:!0,md:!0}),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(g.a,{variant:"h4",component:"h1",gutterBottom:!0,className:"spl--pb spl--pt"},a.locationName),r.a.createElement(E.a,{container:!0,justify:"flex-end",className:"spl--pb"},r.a.createElement(f.a,{color:"primary",variant:"contained"},"Report a problem")),r.a.createElement("div",{className:"spl--pb"},r.a.createElement("img",{src:a.pictureURL,alt:a.locationName,className:"responsive"})),r.a.createElement(E.a,{container:!0,spacing:0},r.a.createElement(E.a,{item:!0,xs:2},r.a.createElement(g.a,{variant:"h6",component:"h4"},"Rating")),r.a.createElement(E.a,{item:!0,xs:8},r.a.createElement(L.a,{value:a.rating,max:5,onChange:function(e){return console.log("Rated with value ".concat(e))}}))),r.a.createElement(B.a,{component:"nav","aria-label":"location status"},r.a.createElement(G.a,null),r.a.createElement(F.a,null,r.a.createElement(W.a,null,r.a.createElement(K.a,{fontSize:"large",color:"primary"})),r.a.createElement(P.a,{primary:s})),r.a.createElement(G.a,null),r.a.createElement(F.a,{divider:!0},r.a.createElement(P.a,{inset:!0,primary:"Needs Treatment"})),r.a.createElement(F.a,null,r.a.createElement(P.a,{inset:!0,primary:"Unknown"}))),r.a.createElement(g.a,{variant:"h6",component:"h3",className:"spl--pb spl--pt"},"Address"),r.a.createElement(g.a,{variant:"body1",gutterBottom:!0},a.address1,r.a.createElement("br",null),a.city,r.a.createElement("br",null),a.country,r.a.createElement("br",null),a.postCode,r.a.createElement("br",null))),r.a.createElement(E.a,{item:!0,md:!0}))}return r.a.createElement(E.a,{container:!0,spacing:0},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(g.a,{variant:"h5"},"loading .....")))},H=(a(211),a(63)),J=a(64),Y=a(67),q=a(66),V=a(311),X=a(91),Z=a.n(X),$=a(130),Q=a.n($),ee=a(131),te=a.n(ee),ae=a(296),ne=a(99),re=a.n(ne),oe=function(e){Object(Y.a)(a,e);var t=Object(q.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).handleTextChange=function(e){n.setState({text:e.target.value})},n.state={text:"",geoClicked:!1,saveLocsClicked:!1,searchEntered:!1},n}return Object(J.a)(a,[{key:"handleClick",value:function(e){console.log("".concat(e," Clicked")),"geolocation"===e?(console.log("".concat(e," Clicked2")),this.setState({geoClicked:!0})):(console.log("".concat(e," Clicked3")),this.setState({saveLocsClicked:!0})),console.log(this.state.geoClicked.toString()),console.log(this.state.saveLocsClicked.toString()),console.log(this.state.searchEntered.toString()),this.setState({redirect:!0})}},{key:"handleEnterKeyPress",value:function(e){if(13===e.keyCode){var t=e.target.value;console.log("".concat(t,"<ENTER>")),this.setState({searchEntered:!0}),e.target.value=""}}},{key:"render",value:function(){var e=this;if(this.state.redirect&&this.state.geoClicked){return console.log("passing to Filter1 - ".concat("geolocation")),r.a.createElement(re.a,{searchString:"geolocation"})}if(!this.state.redirect||!this.state.saveLocsClicked){if(this.state.redirect&&this.state.searchEntered){var t={searchString:this.state.text};return console.log("passing to Filter2 - searchString"),r.a.createElement(re.a,{searchString:t})}return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(V.a,{id:"search",label:"Search locations",placeholder:"Search locations",onChange:this.handleTextChange,onKeyDown:this.handleEnterKeyPress,value:this.state.text,InputProps:{startAdornment:r.a.createElement(ae.a,{position:"start"},r.a.createElement(Z.a,null))}})),r.a.createElement("div",null,r.a.createElement(f.a,{color:"primary",startIcon:r.a.createElement(Q.a,null),onClick:function(){return e.handleClick("geolocation")}},"Find Nearest Facility")),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/manage-locations",style:{textDecoration:"none"}},r.a.createElement(f.a,{color:"primary",startIcon:r.a.createElement(te.a,null),onClick:function(){return e.handleClick("savedLocations")}},"Manage Saved Locations"))))}console.log("Into Managed Saved Locations")}}]),a}(n.Component),ce=a(51),le=a.n(ce),ie=a(132),se=a.n(ie);a(242);var ue=function(e){var t=e.longitude,a=e.latitude,n=.025*Math.sqrt(Math.random()),r=2*Math.random()*Math.PI,o=a+n*Math.cos(r);return{longitude:t+n*Math.sin(r),latitude:o}},me=function(e){for(var t=[],a=0;a<20;a++){var n=a,r=ue(e),o=r.longitude,c=r.latitude;t.push({type:"Feature",geometry:{type:"Point",coordinates:[o,c]},properties:{id:n,name:"Random Point #".concat(n),description:"description for Random Point #".concat(n),WC:!0,Water:!0,stars:4,status:"drinkable"}})}return Promise.resolve({type:"FeatureCollection",features:t})},de=function(e){var t=e.feature.properties,a=t.id,n=t.name,o=t.stars;return r.a.createElement(E.a,{container:!0,spacing:0,className:"popupdiv"},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(g.a,null,n)),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(L.a,{value:o,max:5,onChange:function(e){return console.log("Rated with value ".concat(e))},className:"spl-star"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(f.a,{color:"primary",onClick:function(){window.location.href="/location-details/".concat(a)}},"Details")))};function pe(){return(pe=Object(w.a)(C.a.mark((function e(t){var a,n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.longitude,n=t.latitude,r=[],e.next=4,fetch("https://j33niy2o35.execute-api.eu-west-2.amazonaws.com/dev/locations?longitude=".concat(a,"&latitude=").concat(n)).then((function(e){return e.json()})).then((function(e){return e.forEach((function(e){console.log(e);var t=e.locationId;r.push({type:"Feature",geometry:{type:"Point",coordinates:[e.longitude,e.latitude]},properties:{id:t,name:e.locationName,city:e.city,WC:e.maleToilets,Water:e.water,stars:e.rating,status:e.drinkable}})}))}));case 4:return e.abrupt("return",Promise.resolve({type:"FeatureCollection",features:r}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=function(e){return pe.apply(this,arguments)},ge=a(9);le.a.accessToken="pk.eyJ1Ijoic2FuYWVzcGxhc2giLCJhIjoiY2tmYTlwMWpmMHR0cDJ0cHAyOHZhd3V0MSJ9.PmRGRrM4p1wgKavJKm-56A";var fe=function(e){e.props;var t=Object(n.useRef)(null),a=Object(n.useRef)(new le.a.Popup({offset:[20,0]})),o=new le.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0});return Object(n.useEffect)((function(){var e=new le.a.Map({container:t.current,style:"mapbox://styles/mapbox/streets-v11",center:[-1.9876,51.7405],zoom:12.5});e.addControl(new le.a.NavigationControl,"bottom-right"),e.addControl(o.on("geolocate",(function(e){var t=[e.coords.longitude,e.coords.latitude];console.log(t)})));var n=new se.a({accessToken:le.a.accessToken,mapboxgl:le.a});return document.getElementById("geocoder").childNodes[0]||document.getElementById("geocoder").appendChild(n.onAdd(e)),e.on("load",(function(){e.addSource("random-points-data",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:"random-points-layer",source:"random-points-data",type:"symbol",layout:{"icon-image":"drinking-water-15","icon-padding":0,"icon-size":1.5,"icon-allow-overlap":!0}})})),e.on("moveend",Object(w.a)(C.a.mark((function t(){var a,n,r,o,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.getCenter(),n=a.lng,r=a.lat,console.log(n,r),t.next=4,me({longitude:n,latitude:r});case 4:return o=t.sent,console.log(o),t.next=8,Ee({longitude:n,latitude:r});case 8:c=t.sent,e.getSource("random-points-data").setData(c);case 10:case"end":return t.stop()}}),t)})))),e.on("mouseenter","random-points-layer",(function(t){t.features.length&&(e.getCanvas().style.cursor="pointer")})),e.on("mouseleave","random-points-layer",(function(){e.getCanvas().style.cursor=""})),e.on("click","random-points-layer",(function(t){if(t.features.length){var n=t.features[0],o=document.createElement("div");ge.render(r.a.createElement(de,{feature:n}),o),a.current.setLngLat(n.geometry.coordinates).setDOMContent(o).addTo(e)}})),function(){return e.remove()}}),[]),r.a.createElement("div",{className:"map-container",ref:t})};var he=function(e){var t=e.searchString;return r.a.createElement(E.a,{container:!0,id:"container"},r.a.createElement(E.a,{item:!0,xs:12,md:12},r.a.createElement("div",{id:"geocoder",className:"geocoder"}),r.a.createElement(fe,{searchString:t})))},ve=a(73),be=a(139),ye=a(72),Oe=a(297),Le=a(309);var je=function(){return r.a.createElement("div",null,r.a.createElement(Le.a,{mt:8},r.a.createElement(g.a,{variant:"body2",align:"center",style:{color:"rgba(255, 255, 255, 0.54)"}},"Copyright \xa9 ",r.a.createElement(Oe.a,{color:"inherit",href:"/",className:"spl--pb"},"Splashpool")," ",(new Date).getFullYear(),".")))},Ce=a(5),we=a(298),ke=a(299),Ne=a(111),xe=a(135),Se=a.n(xe),Ie=function(){var e=Object(b.b)().loginWithRedirect;return r.a.createElement(f.a,{variant:"outlined",color:"primary",onClick:function(){return e()}},"Log In")},Ae=function(){var e=Object(b.b)().logout;return r.a.createElement(f.a,{variant:"outlined",color:"primary",onClick:function(){return e({returnTo:window.location.origin})}},"Log Out")},Te=function(){return Object(b.b)().isAuthenticated?r.a.createElement(Ae,null):r.a.createElement(Ie,null)},De=function(){return r.a.createElement(Te,null)},_e=a(92),Re=a(314),Ue=a(133),Be=a.n(Ue),Fe=a(134),We=a.n(Fe),Pe=function(e){Object(Y.a)(a,e);var t=Object(q.a)(a);function a(){var e;Object(H.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(J.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(Re.a,{style:{width:"240px"},varian:"persistent",anchor:"left",open:this.props.drawerOpened,onClose:this.props.toggleDrawer(!1),classes:{paper:e.drawerPaper}},r.a.createElement(B.a,{onClick:this.props.toggleDrawer(!1),onKeyDown:this.props.toggleDrawer(!1)},r.a.createElement(d.b,{to:"/",className:e.link},r.a.createElement(F.a,{button:!0},r.a.createElement(W.a,null,r.a.createElement(Be.a,null)),r.a.createElement(P.a,{primary:"Home"}))),r.a.createElement(d.b,{to:"/manage-locations",className:e.link},r.a.createElement(F.a,{button:!0},r.a.createElement(W.a,null,r.a.createElement(We.a,null)),r.a.createElement(P.a,{primary:"Manage Locations"}))),r.a.createElement(d.b,{to:"/locations",className:e.link},r.a.createElement(F.a,{button:!0},r.a.createElement(W.a,null,r.a.createElement(Z.a,null)),r.a.createElement(P.a,{primary:"Search Locations"}))))))}}]),a}(n.Component),Ge=Object(Ce.a)((function(e){return{drawerPaper:Object(_e.a)({width:"inherit",marginTop:64},e.breakpoints.down("sm"),{marginTop:56}),link:{textDecoration:"none",color:e.palette.text.primary},gutterBottom:{marginBottom:"1.5rem"}}}))(Pe),Me=function(e){Object(Y.a)(a,e);var t=Object(q.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).toggleDrawer=function(e){return function(){n.setState({drawerOpened:e})}},n.state={drawerOpened:!1},n}return Object(J.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(we.a,{position:"static",color:"transparent"},r.a.createElement(ke.a,null,r.a.createElement(Ne.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:this.toggleDrawer(!0)},r.a.createElement(Se.a,null)),r.a.createElement(g.a,{variant:"h6",className:e.title},"Oasis"),r.a.createElement("div",null,r.a.createElement(De,null)))),r.a.createElement(Ge,{drawerOpened:this.state.drawerOpened,toggleDrawer:this.toggleDrawer}))}}]),a}(r.a.Component),Ke=Object(Ce.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}))(Me),ze=function(e){var t,a=e.match.params.locationId,o=Object(l.b)(),c=Object(l.c)(T),i=Object(n.useCallback)((function(){o(I())}),[o]);if(Object(n.useEffect)((function(){i()}),[i]),c&&(t=c.filter((function(e){return e.locationId===parseInt(a)}))[0]),t){console.log("data  ",t);var s="";return s=!0===t.drinkable?"Drinkable":"Needs treatment",r.a.createElement("div",null,r.a.createElement(E.a,{container:!0,spacing:0},r.a.createElement(E.a,{item:!0,md:!0}),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(g.a,{variant:"h4",component:"h1",gutterBottom:!0,className:"spl--pb spl--pt"},t.locationName),r.a.createElement("div",{className:"spl--pb"},r.a.createElement("img",{src:t.pictureURL,alt:t.locationName,className:"responsive"})),r.a.createElement(E.a,{container:!0,spacing:0},r.a.createElement(E.a,{item:!0,xs:2},r.a.createElement(g.a,{variant:"h6",component:"h4"},"Rating")),r.a.createElement(E.a,{item:!0,xs:8},r.a.createElement(L.a,{value:t.rating,max:5,onChange:function(e){return console.log("Rated with value ".concat(e))}}))),r.a.createElement(B.a,{component:"nav","aria-label":"location status"},r.a.createElement(G.a,null),r.a.createElement(F.a,null,r.a.createElement(W.a,null,r.a.createElement(K.a,{fontSize:"large",color:"primary"})),r.a.createElement(P.a,{primary:s})),r.a.createElement(G.a,null),r.a.createElement(F.a,{divider:!0},r.a.createElement(P.a,{inset:!0,primary:"Needs Treatment"})),r.a.createElement(F.a,null,r.a.createElement(P.a,{inset:!0,primary:"Unknown"}))),r.a.createElement(g.a,{variant:"h6",component:"h3",className:"spl--pb spl--pt"},"Address"),r.a.createElement(g.a,{variant:"body1",gutterBottom:!0},t.address1,r.a.createElement("br",null),t.city,r.a.createElement("br",null),t.country,r.a.createElement("br",null),t.postCode,r.a.createElement("br",null)),r.a.createElement(E.a,{container:!0,justify:"flex-end",className:"spl--pt"},r.a.createElement(d.b,{to:"/manage-locations"},r.a.createElement(f.a,{variant:"outlined",color:"primary"},"Back to list")))),r.a.createElement(E.a,{item:!0,md:!0})))}return r.a.createElement(E.a,{container:!0,spacing:0},r.a.createElement(E.a,{item:!0,md:!0}),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(g.a,{variant:"h4",component:"h1",gutterBottom:!0,className:"spl--pb spl--pt"},"Location not found")),r.a.createElement(E.a,{item:!0,md:!0}))},He=a(136),Je=a.n(He),Ye={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},qe=function(){return r.a.createElement("div",{style:Ye},r.a.createElement("img",{src:Je.a,alt:"Loading..."}))},Ve=a(144),Xe=function(e){var t=e.component,a=Object(Ve.a)(e,["component"]);return r.a.createElement(p.a,Object.assign({component:Object(b.c)(t,{onRedirecting:function(){return r.a.createElement(qe,null)}})},a))},Ze=a(10),$e=a(34),Qe=a(307),et=a(306),tt=a(137),at=a.n(tt),nt=a(112),rt=a(138),ot=a.n(rt),ct=a(313),lt=a(304),it=a(295),st=a(310),ut=a(300),mt=a(305),dt=a(302),pt=a(303),Et=a(301),gt=Object(nt.a)((function(e){return{formControl:{minWidth:300},selectEmpty:{marginTop:e.spacing(2)}}}));function ft(){var e=gt(),t=at()().getData(),a=Object(l.b)(),o=r.a.useState(!1),c=Object($e.a)(o,2),i=c[0],s=c[1],u=Object(n.useState)(""),m=Object($e.a)(u,2),d=m[0],p=m[1],g=Object(n.useState)(""),h=Object($e.a)(g,2),v=h[0],b=h[1],y=Object(n.useState)(""),O=Object($e.a)(y,2),L=O[0],j=O[1],k=Object(n.useState)(""),x=Object($e.a)(k,2),S=x[0],I=x[1],T=Object(n.useState)(""),D=Object($e.a)(T,2),R=D[0],U=D[1],B=Object(n.useState)(""),F=Object($e.a)(B,2),W=F[0],P=F[1],G=Object(l.c)(_),M=function(){p(""),b(""),j(""),I(""),U(""),P("")},K=function(){M(),s(!1)},z=function(){var e=Object(w.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(d,v,L,S,R,W),e.next=3,N.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(R,"&key=").concat("AIzaSyBinAucLM8flXk8sNUy1lG7APlKTpn4KUs"));case 3:return t=e.sent,n=t.data.results[0].geometry.location,e.prev=5,e.next=8,a(A({locationName:d,address1:v,address2:L,city:S,postCode:R,country:W,longitude:n.lng,latitude:n.lat,adminOrg:"",water:!1,drinkable:!0,treatment:!1,unknown:!1,largeWaterFacility:!1,maleToilets:!1,femaleToilets:!1,largeToiletFacility:!1,disabledAccess:!1,chargeForUse:!1,openingHours:"",hasIssue:!1}));case 8:s(!1),M(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(E.a,{container:!0,justify:"flex-end",className:"spl--pb"},r.a.createElement(f.a,{variant:"outlined",color:"primary",onClick:function(){s(!0)}},r.a.createElement(ot.a,null)," Add Location")),r.a.createElement(ut.a,{open:i,onClose:K,"aria-labelledby":"form-dialog-title"},r.a.createElement(Et.a,{id:"form-dialog-title"},"Add Location"),r.a.createElement(dt.a,null,r.a.createElement(pt.a,null,"Please enter your location details here."),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement("div",null,r.a.createElement(V.a,{margin:"dense",id:"locationName",label:"Location Name",placeholder:"Enter location name",type:"text",fullWidth:!0,required:!0,value:d,onChange:function(e){p(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(V.a,{margin:"dense",id:"address1",label:"Address Line 1",type:"text",fullWidth:!0,value:v,onChange:function(e){b(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(V.a,{margin:"dense",id:"address2",label:"Address Line 2",type:"text",fullWidth:!0,value:L,onChange:function(e){j(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(V.a,{margin:"dense",id:"city",label:"City",type:"text",fullWidth:!0,required:!0,value:S,onChange:function(e){I(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(V.a,{margin:"dense",id:"postcode",label:"Postcode",type:"text",fullWidth:!0,value:R,onChange:function(e){U(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(it.a,{className:e.formControl},r.a.createElement(ct.a,{id:"country"},"Country"),r.a.createElement(st.a,{labelId:"country",id:"country",required:!0,value:W,onChange:function(e){P(e.target.value)}},t.map((function(e){return r.a.createElement(lt.a,{key:e.value,value:e.label},e.label)}))))))),r.a.createElement(mt.a,null,r.a.createElement(f.a,{onClick:K,color:"primary"},"Cancel"),r.a.createElement(f.a,{onClick:function(){return z()},color:"primary"},"Add Location",G&&r.a.createElement(et.a,null)))))}function ht(){var e=Object(l.b)(),t=Object(l.c)(T),a=Object(l.c)(D),o=Object(l.c)(R),c=Object(l.c)(U),i=Object(n.useState)(null),s=Object($e.a)(i,2),u=s[0],m=s[1],p=Object(n.useState)(null),v=Object($e.a)(p,2),b=v[0],y=v[1],O=Object(n.useCallback)((function(){e(I())}),[e]);Object(n.useEffect)((function(){O()}),[O]);var L=function(t){var a;m(t.locationId),e((a=t.locationId,function(){var e=Object(w.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"DELETE_LOCATION_BEGINS"}),e.next=4,N.a.delete("".concat(S,"/locations?locationId=").concat(a));case 4:t({type:"DELETE_LOCATION_SUCCESS",payload:a}),x.a.success("Location Deleted Successfully!"),e.next=14;break;case 8:throw e.prev=8,e.t0=e.catch(0),console.log(e.t0),t({type:"DELETE_LOCATION_FAILURE"}),x.a.error(e.t0.message),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))};return r.a.createElement("div",null,r.a.createElement(E.a,{container:!0,spacing:0},r.a.createElement(E.a,{item:!0,md:!0}),r.a.createElement(E.a,{item:!0,xs:12,md:6},r.a.createElement(g.a,{variant:"h5",component:"h1",gutterBottom:!0,className:"spl--pb spl--pt"},"Manage Locations"),!a&&0===t.length&&r.a.createElement(g.a,{variant:"body1",gutterBottom:!0,className:"spl--pb"},"Locations list empty."),a&&r.a.createElement(Qe.a,null),r.a.createElement(ft,null),r.a.createElement("div",null,r.a.createElement(B.a,null,t.map((function(t,a){return r.a.createElement(F.a,{key:a},r.a.createElement(P.a,{primary:t.locationName}),r.a.createElement(d.b,{to:"/location/".concat(t.locationId)},r.a.createElement(f.a,{variant:"contained",color:"primary","aria-label":"display"},r.a.createElement(h.a,{icon:"eye"}))),r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{marginLeft:"0.5rem"},"aria-label":"update",onClick:function(){return function t(a){y(a.locationId),e(t(Object(Ze.a)({},a)))}(t)}},r.a.createElement(h.a,{icon:"pen"}),c&&t.locationId===b&&r.a.createElement(et.a,{color:"secondary"})),r.a.createElement(f.a,{variant:"outlined",color:"secondary",style:{marginLeft:"0.5rem"},"aria-label":"delete",onClick:function(){return L(t)}},r.a.createElement(h.a,{icon:"trash-alt"}),o&&t.locationId===u&&r.a.createElement(et.a,{color:"secondary"})))}))))),r.a.createElement(E.a,{item:!0,md:!0})))}ve.b.add(be.a,ye.b,ye.d,ye.e,ye.c,ye.a);var vt=Object(s.a)({palette:{primary:{main:"#1FB0F5"}},typography:{fontFamily:['"Montserrat"',"BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")}}),bt=function(){return Object(b.b)().isLoading?r.a.createElement(qe,null):r.a.createElement(u.a,{theme:vt},r.a.createElement(i.b,{injectFirst:!0},r.a.createElement(d.a,null,r.a.createElement(Ke,null),r.a.createElement(m.a,{maxWidth:"md"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/locations"},r.a.createElement(he,null)),r.a.createElement(p.a,{path:"/search",component:oe}),r.a.createElement(p.a,{path:"/map-view",component:fe}),r.a.createElement(p.a,{path:"/popup",component:de}),r.a.createElement(Xe,{path:"/manage-locations",component:ht}),r.a.createElement(p.a,{path:"/location/:locationId",component:ze}),r.a.createElement(Xe,{path:"/profile",component:y}),r.a.createElement(p.a,{path:"/location-details/:number",component:z}),r.a.createElement(p.a,{path:"/",exact:!0,component:v}))),r.a.createElement(je,null))))},yt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ot(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Lt=a(46),jt=a(140),Ct=a(141),wt=a(142),kt={userList:[]},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_USER":return Object(Ze.a)(Object(Ze.a)({},e),{},{userList:n});default:return e}},xt=a(143),St={locationList:[],getLocationLoading:!1,addLocationLoading:!1,deleteLocationLoading:!1,updateLocationLoading:!1},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_LOCATION_BEGINS":return Object(Ze.a)(Object(Ze.a)({},e),{},{getLocationLoading:!0});case"GET_LOCATION_SUCCESS":return Object(Ze.a)(Object(Ze.a)({},e),{},{locationList:n,getLocationLoading:!1});case"GET_LOCATION_FAILURE":return Object(Ze.a)(Object(Ze.a)({},e),{},{getLocationLoading:!1});case"ADD_LOCATION_BEGINS":return Object(Ze.a)(Object(Ze.a)({},e),{},{addLocationLoading:!0});case"ADD_LOCATION_SUCCESS":return Object(Ze.a)(Object(Ze.a)({},e),{},{locationList:[].concat(Object(xt.a)(e.locationList),[n]),addLocationLoading:!1});case"ADD_LOCATION_FAILURE":return Object(Ze.a)(Object(Ze.a)({},e),{},{addLocationLoading:!1});case"DELETE_LOCATION_BEGINS":return Object(Ze.a)(Object(Ze.a)({},e),{},{deleteLocationLoading:!0});case"DELETE_LOCATION_SUCCESS":return Object(Ze.a)(Object(Ze.a)({},e),{},{locationList:e.locationList.filter((function(e){return e.locationId!==n})),deleteLocationLoading:!1});case"DELETE_LOCATION_FAILURE":return Object(Ze.a)(Object(Ze.a)({},e),{},{deleteLocationLoading:!1});case"UPDATE_LOCATION_BEGINS":return Object(Ze.a)(Object(Ze.a)({},e),{},{updateLocationLoading:!0});case"UPDATE_LOCATION_SUCCESS":return Object(Ze.a)(Object(Ze.a)({},e),{},{locationList:e.locationList.map((function(e){return e.locationId===n.locationId?n:e})),updateLocationLoading:!1});case"UPDATE_LOCATION_FAILURE":return Object(Ze.a)(Object(Ze.a)({},e),{},{updateLocationLoading:!1});default:return e}},At=Object(Lt.combineReducers)({user:Nt,location:It}),Tt=Object(wt.createLogger)({collapsed:!0}),Dt=Object(Lt.createStore)(At,void 0,Object(Ct.composeWithDevTools)(Object(Lt.applyMiddleware)(jt.a,Tt))),_t=(a(247),function(e){var t=e.children,a=Object(p.f)();return r.a.createElement(b.a,{domain:"dev-ov395x0x.eu.auth0.com",clientId:"VvokYrBlTBptqKIeAu6XmkIa9ypeKYk8",redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:"https://express.sample"},t)});x.a.configure({autoClose:1500}),c.a.render(r.a.createElement(d.a,null,r.a.createElement(_t,null,r.a.createElement(l.a,{store:Dt},r.a.createElement(bt,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");yt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ot(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ot(t,e)}))}}()},99:function(e,t){}},[[170,1,2]]]);
//# sourceMappingURL=main.58d8ef9e.chunk.js.map