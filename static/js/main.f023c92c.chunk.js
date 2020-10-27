(this["webpackJsonpsplashpool.github.io"]=this["webpackJsonpsplashpool.github.io"]||[]).push([[0],{114:function(e,t,a){},140:function(e,t,a){e.exports=a.p+"static/media/loading.2dc69883.svg"},172:function(e,t,a){e.exports=a(249)},181:function(e,t,a){},183:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=a(34),i=(a(181),a(295)),s=a(61),u=a(298),m=a(325),d=(a(114),a(17)),p=a(14),g=a(293),E=a(50),f=a(297),h=a(74);a(183);var v=function(){var e=document.getElementById("geocoder");return e&&e.removeChild(e.childNodes[0]),r.a.createElement("div",{className:"Header",style:{padding:20}},r.a.createElement(g.a,{container:!0,spacing:0},r.a.createElement(g.a,{item:!0,md:!0}),r.a.createElement(g.a,{item:!0,xs:12,md:6},r.a.createElement(h.a,{icon:"hand-holding-water",className:"spl--pb"}),r.a.createElement(E.a,{variant:"h2",component:"h1",gutterBottom:!0,className:"spl--pb"},"Welcome to Oasis"),r.a.createElement(E.a,{variant:"body1",gutterBottom:!0,className:"spl--pb"},"Find for your nearest drinking water and toilet facilities"),r.a.createElement(d.b,{to:"/search",style:{textDecoration:"none"}},r.a.createElement(f.a,{variant:"contained",color:"primary"},"Search locations"))),r.a.createElement(g.a,{item:!0,md:!0})))},b=a(22),O=function(){var e=Object(b.b)().user,t=e.name,a=e.picture,n=e.email,o=e.sub;return r.a.createElement("div",null,r.a.createElement("div",{className:"row align-items-center profile-header"},r.a.createElement("div",{className:"col-md-2 mb-3"},r.a.createElement("img",{src:a,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})),r.a.createElement("div",{className:"col-md text-center text-md-left"},r.a.createElement("h2",null,t),r.a.createElement("p",null,"User id: ",o),r.a.createElement("p",{className:"lead text-muted"},n))),r.a.createElement("div",{className:"row"},r.a.createElement("pre",{className:"col-12 text-light bg-dark p-4"},JSON.stringify(e,null,2))))},y=a(92),L=a.n(y),w=a(305),C=a(328),j=a(329),k=a(304),N=a(302),S=a(299),x=a(300),I=a(306),T=a(301);var A=function(e){var t={};e.features?t=e.features.properties:(console.log("dataaaaa",e.match.params),t={id:1,name:"name",description:"descriptionn",status:"unkown",stars:2});var a=document.getElementById("geocoder");return a&&a.removeChild(a.childNodes[0]),r.a.createElement(g.a,{container:!0,spacing:0},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(S.a,{className:"spl-root"},r.a.createElement(x.a,null,r.a.createElement("img",{className:"spl-media",src:"https://images.freeimages.com/images/large-previews/113/water-from-spring-1426253.jpg",alt:"Contemplative Reptile"}),r.a.createElement(T.a,null,r.a.createElement(E.a,{variant:"h5"},"Rating"),r.a.createElement(L.a,{value:t.stars,max:5,onChange:function(e){return console.log("Rated with value ".concat(e))}}),r.a.createElement(N.a,{component:"fieldset"},r.a.createElement(j.a,{"aria-label":"gender",name:"water",value:t.status,onChange:function(e){},className:"spl-radio"},r.a.createElement(k.a,{value:"drinkable",control:r.a.createElement(C.a,{color:"primary"}),label:"Drinkable"}),r.a.createElement(w.a,null),r.a.createElement(k.a,{value:"treatment",control:r.a.createElement(C.a,{color:"primary"}),label:"Need treatment"}),r.a.createElement(w.a,null),r.a.createElement(k.a,{value:"undrinkable",control:r.a.createElement(C.a,{color:"primary"}),label:"Undrinkable"}),r.a.createElement(w.a,null),r.a.createElement(k.a,{value:"unkown",control:r.a.createElement(C.a,{color:"primary"}),label:"Unkown"}))))),r.a.createElement(I.a,null,r.a.createElement(f.a,{size:"small",color:"primary"},"Report a problem"),r.a.createElement(f.a,{size:"small",variant:"contained",color:"primary",disableElevation:!0},"Notify me")))))},D=(a(195),a(64)),_=a(65),W=a(69),R=a(68),U=a(330),B=a(98),F=a.n(B),M=a(135),P=a.n(M),G=a(136),q=a.n(G),H=a(104),J=a(66),K=a(10),z=a(29),Y=a(252),V=a(303),X=a(307);function Z(){var e=r.a.useState({water:!0,toilet:!0}),t=Object(z.a)(e,2),a=t[0],n=t[1],o=function(e){n(Object(K.a)(Object(K.a)({},a),{},Object(J.a)({},e.target.name,e.target.checked)))};return r.a.createElement(N.a,{component:"fieldset"},r.a.createElement(Y.a,{className:"spl-filterTitle"},"Filter Results"),r.a.createElement(V.a,null,r.a.createElement(k.a,{control:r.a.createElement(X.a,{checked:a.water,color:"primary",onChange:o,name:"water"}),label:"Water"}),r.a.createElement(k.a,{control:r.a.createElement(X.a,{checked:a.toilet,color:"primary",onChange:o,name:"toilet"}),label:"Toilets"})))}var $=a(21),Q=a.n($),ee=a(44),te=a(49),ae=a.n(te),ne=a(134),re=a.n(ne);a(227);var oe=function(e){var t=e.longitude,a=e.latitude,n=.025*Math.sqrt(Math.random()),r=2*Math.random()*Math.PI,o=a+n*Math.cos(r);return{longitude:t+n*Math.sin(r),latitude:o}},ce=function(e){for(var t=[],a=0;a<20;a++){var n=a,r=oe(e),o=r.longitude,c=r.latitude;t.push({type:"Feature",geometry:{type:"Point",coordinates:[o,c]},properties:{id:n,name:"Random Point #".concat(n),description:"description for Random Point #".concat(n),WC:!0,Water:!0,stars:4,status:"drinkable"}})}return Promise.resolve({type:"FeatureCollection",features:t})},le=function(e){var t=e.feature,a=t.properties,n=a.id,o=a.status,l=a.stars;return r.a.createElement(g.a,{container:!0,spacing:0,className:"popupdiv"},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,null,o)),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(L.a,{value:l,max:5,onChange:function(e){return console.log("Rated with value ".concat(e))},className:"spl-star"})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(d.a,null,r.a.createElement("ul",null,r.a.createElement("li",{key:n},r.a.createElement(d.b,{to:"/location-details/".concat(n),onClick:function(){c.a.render(r.a.createElement(A,{features:t}),document.querySelector("#container"))}},"Details"))))))},ie=a(9);ae.a.accessToken="pk.eyJ1Ijoic2FuYWVzcGxhc2giLCJhIjoiY2tmYTlwMWpmMHR0cDJ0cHAyOHZhd3V0MSJ9.PmRGRrM4p1wgKavJKm-56A";var se=function(e){var t=e.searchString;console.log("".concat(t," was given to MapView"));var a=Object(n.useRef)(null),o=Object(n.useRef)(new ae.a.Popup({offset:[20,0]})),c=new ae.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0});return Object(n.useEffect)((function(){var e=new ae.a.Map({container:a.current,style:"mapbox://styles/mapbox/streets-v11",center:[-1.9876,51.7405],zoom:12.5});e.addControl(new ae.a.NavigationControl,"bottom-right"),e.addControl(c.on("geolocate",(function(e){var t=[e.coords.longitude,e.coords.latitude];console.log(t)})));var t=new re.a({accessToken:ae.a.accessToken,mapboxgl:ae.a});return document.getElementById("geocoder").childNodes[0]||document.getElementById("geocoder").appendChild(t.onAdd(e)),e.on("load",(function(){e.addSource("random-points-data",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:"random-points-layer",source:"random-points-data",type:"symbol",layout:{"icon-image":"drinking-water-15","icon-padding":0,"icon-size":1.5,"icon-allow-overlap":!0}})})),e.on("moveend",Object(ee.a)(Q.a.mark((function t(){var a,n,r,o;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.getCenter(),n=a.lng,r=a.lat,t.next=3,ce({longitude:n,latitude:r});case 3:o=t.sent,e.getSource("random-points-data").setData(o);case 5:case"end":return t.stop()}}),t)})))),e.on("mouseenter","random-points-layer",(function(t){t.features.length&&(e.getCanvas().style.cursor="pointer")})),e.on("mouseleave","random-points-layer",(function(){e.getCanvas().style.cursor=""})),e.on("click","random-points-layer",(function(t){if(t.features.length){var a=t.features[0],n=document.createElement("div");ie.render(r.a.createElement(le,{feature:a}),n),o.current.setLngLat(a.geometry.coordinates).setDOMContent(n).addTo(e)}})),function(){return e.remove()}}),[]),r.a.createElement("div",{className:"map-container",ref:a})},ue=[{id:1,name:"london",longitude:"51.5074",latitude:" 0.1278",status:"Drinkable",isWater:!1,isWc:!0},{id:2,name:"Santiago",longitude:"54.5074",latitude:" 7.1278",status:"Need traitment",isWater:!0,isWc:!0},{id:3,name:"Santiago",longitude:"94.5074",latitude:" 7.1278",status:"Drinkable",isWater:!0,isWc:!1},{id:4,name:"Santiago",longitude:"04.5074",latitude:" 7.1278",status:"Uknown",isWater:!0,isWc:!0}];var me=function(e){var t=e.searchString;return console.log("".concat(t," was given to Filter")),r.a.createElement(g.a,{container:!0,id:"container"},r.a.createElement(g.a,{item:!0,xs:12,md:12},r.a.createElement(se,{searchString:t})),r.a.createElement(g.a,{item:!0,xs:12,md:12},r.a.createElement(Z,{filterResults:function(e){return e.waterOn&&e.wcOn?(console.log("Both filters are ON"),ue):function(e,t){if(void 0===e)throw new Error("locations is required");if(void 0===t)throw new Error("state is required");var a=[];if(t.waterOn){console.log("water is ON");for(var n=0;n<e.length;n++)e[n].isWater&&a.push(e[n])}else if(t.wcOn){console.log("Toilets is ON");for(var r=0;r<e.length;r++)e[r].isWc&&a.push(e[r])}return console.log(a),a}(ue,e)}})))},de=function(e){Object(W.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).handleTextChange=function(e){n.setState({text:e.target.value})},n.state={text:"",geoClicked:!1,saveLocsClicked:!1,searchEntered:!1},n}return Object(_.a)(a,[{key:"handleClick",value:function(e){console.log("".concat(e," Clicked")),"geolocation"===e?(console.log("".concat(e," Clicked2")),this.setState({geoClicked:!0})):(console.log("".concat(e," Clicked3")),this.setState({saveLocsClicked:!0})),console.log(this.state.geoClicked.toString()),console.log(this.state.saveLocsClicked.toString()),console.log(this.state.searchEntered.toString()),this.setState({redirect:!0})}},{key:"handleEnterKeyPress",value:function(e){if(13===e.keyCode){var t=e.target.value;console.log("".concat(t,"<ENTER>")),this.setState({searchEntered:!0}),e.target.value=""}}},{key:"render",value:function(){var e=this;if(this.state.redirect&&this.state.geoClicked){return console.log("passing to Filter1 - ".concat("geolocation")),r.a.createElement(me,{searchString:"geolocation"})}if(!this.state.redirect||!this.state.saveLocsClicked){if(this.state.redirect&&this.state.searchEntered){var t={searchString:this.state.text};return console.log("passing to Filter2 - searchString"),r.a.createElement(me,{searchString:t})}return r.a.createElement("div",null,r.a.createElement(g.a,{container:!0,spacing:1,alignItems:"flex-start"},r.a.createElement(g.a,{item:!0,className:"mui-col-md-2 mui-col--md-offset-2"},r.a.createElement(F.a,null)),r.a.createElement(g.a,{item:!0},r.a.createElement(U.a,{className:"textBox",variant:"filled",id:"input-with-icon-grid",label:"Search locations",style:{minWidth:350,maxWidth:800},onChange:this.handleTextChange,onKeyDown:this.handleEnterKeyPress,value:this.state.text}))),r.a.createElement(g.a,{container:!0,spacing:1,alignItems:"flex-start"},r.a.createElement(g.a,{item:!0},r.a.createElement(H.a,{onClick:function(){return e.handleClick("geolocation")}},r.a.createElement(P.a,null),"Find Nearest Facility"))),r.a.createElement(g.a,{container:!0,spacing:1,alignItems:"flex-start"},r.a.createElement(g.a,{item:!0},r.a.createElement(H.a,{onClick:function(){return e.handleClick("savedLocations")}},r.a.createElement(q.a,null),"Manage Saved Locations"))))}console.log("Into Managed Saved Locations")}}]),a}(n.Component),pe=a(75),ge=a(143),Ee=a(79),fe=a(312),he=a(326);var ve=function(){return r.a.createElement("div",null,r.a.createElement(he.a,{mt:8},r.a.createElement(E.a,{variant:"body2",align:"center",style:{color:"rgba(255, 255, 255, 0.54)"}},"Copyright \xa9 ",r.a.createElement(fe.a,{color:"inherit",href:"/"},"Splashpool")," ",(new Date).getFullYear(),".")))},be=a(5),Oe=a(315),ye=a(316),Le=a(139),we=a.n(Le),Ce=function(){var e=Object(b.b)().loginWithRedirect;return r.a.createElement(f.a,{variant:"outlined",color:"primary",onClick:function(){return e()}},"Log In")},je=function(){var e=Object(b.b)().logout;return r.a.createElement(f.a,{variant:"outlined",color:"primary",onClick:function(){return e({returnTo:window.location.origin})}},"Log Out")},ke=function(){return Object(b.b)().isAuthenticated?r.a.createElement(je,null):r.a.createElement(Ce,null)},Ne=function(){return r.a.createElement(ke,null)},Se=a(332),xe=a(311),Ie=a(254),Te=a(313),Ae=a(314),De=a(137),_e=a.n(De),We=a(108),Re=a.n(We),Ue=a(138),Be=a.n(Ue),Fe=function(e){Object(W.a)(a,e);var t=Object(R.a)(a);function a(){var e;Object(D.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(_.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(Se.a,{style:{width:"240px"},varian:"persistent",anchor:"left",open:this.props.drawerOpened,onClose:this.props.toggleDrawer(!1),classes:{paper:e.drawerPaper}},r.a.createElement(xe.a,{onClick:this.props.toggleDrawer(!1),onKeyDown:this.props.toggleDrawer(!1)},r.a.createElement(d.b,{to:"/",className:e.link},r.a.createElement(Ie.a,{button:!0},r.a.createElement(Te.a,null,r.a.createElement(_e.a,null)),r.a.createElement(Ae.a,{primary:"Home"}))),r.a.createElement(d.b,{to:"/locations",className:e.link},r.a.createElement(Ie.a,{button:!0},r.a.createElement(Te.a,null,r.a.createElement(Re.a,null)),r.a.createElement(Ae.a,{primary:"Locations"}))),r.a.createElement(d.b,{to:"/manage-locations",className:e.link},r.a.createElement(Ie.a,{button:!0},r.a.createElement(Te.a,null,r.a.createElement(Re.a,null)),r.a.createElement(Ae.a,{primary:"Manage Locations"}))),r.a.createElement(d.b,{to:"/location-details/:number",className:e.link},r.a.createElement(Ie.a,{button:!0},r.a.createElement(Te.a,null,r.a.createElement(Be.a,null)),r.a.createElement(Ae.a,{primary:"Locations Details"}))),r.a.createElement(d.b,{to:"/search",className:e.link},r.a.createElement(Ie.a,{button:!0},r.a.createElement(Te.a,null,r.a.createElement(F.a,null)),r.a.createElement(Ae.a,{primary:"Search"}))))))}}]),a}(n.Component),Me=Object(be.a)((function(e){return{drawerPaper:Object(J.a)({width:"inherit",marginTop:64},e.breakpoints.down("sm"),{marginTop:56}),link:{textDecoration:"none",color:e.palette.text.primary},gutterBottom:{marginBottom:"1.5rem"}}}))(Fe),Pe=function(e){Object(W.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).toggleDrawer=function(e){return function(){n.setState({drawerOpened:e})}},n.state={drawerOpened:!1},n}return Object(_.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(Oe.a,{position:"static",color:"transparent"},r.a.createElement(ye.a,null,r.a.createElement(H.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:this.toggleDrawer(!0)},r.a.createElement(we.a,null)),r.a.createElement("div",{id:"geocoder",className:"geocoder"}),r.a.createElement(E.a,{variant:"h6",className:e.title},"Photos"),r.a.createElement("div",null,r.a.createElement(Ne,null)))),r.a.createElement(Me,{drawerOpened:this.state.drawerOpened,toggleDrawer:this.toggleDrawer}))}}]),a}(r.a.Component),Ge=Object(be.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}))(Pe),qe=a(140),He=a.n(qe),Je={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},Ke=function(){return r.a.createElement("div",{style:Je},r.a.createElement("img",{src:He.a,alt:"Loading..."}))},ze=a(148),Ye=function(e){var t=e.component,a=Object(ze.a)(e,["component"]);return r.a.createElement(p.a,Object.assign({component:Object(b.c)(t,{onRedirecting:function(){return r.a.createElement(Ke,null)}})},a))},Ve=a(57),Xe=a.n(Ve),Ze=a(324),$e=a(323),Qe=a(41),et="https://j33niy2o35.execute-api.eu-west-2.amazonaws.com/dev/",tt=function(e){return function(){var t=Object(ee.a)(Q.a.mark((function t(a){var n;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"ADD_LOCATION_BEGINS"}),t.next=4,Xe.a.post("".concat(et,"/locations"),e);case 4:n=t.sent,a({type:"ADD_LOCATION_SUCCESS",payload:n.data}),Qe.a.success("Location Added Successfully!"),t.next=15;break;case 9:throw t.prev=9,t.t0=t.catch(0),console.log(t.t0),a({type:"ADD_LOCATION_FAILURE"}),Qe.a.error(t.t0.message),t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},at=function(e){return e.location.locationList},nt=function(e){return e.location.getLocationLoading},rt=function(e){return e.location.addLocationLoading},ot=function(e){return e.location.deleteLocationLoading},ct=function(e){return e.location.updateLocationLoading},lt=a(141),it=a.n(lt),st=a(117),ut=a(310),mt=a(317),dt=a(327),pt=Object(st.a)((function(e){return{formControl:{minWidth:300},selectEmpty:{marginTop:e.spacing(2)}}})),gt=it()().getData();console.log(gt);var Et=function(){};function ft(){var e=pt();return r.a.createElement("div",null,r.a.createElement(N.a,{className:e.formControl},r.a.createElement(ut.a,{id:"country"},"Country"),r.a.createElement(dt.a,{labelId:"country",id:"country",required:!0,onChange:Et},gt.map((function(e){return r.a.createElement(mt.a,{value:e.value},e.label)})))))}var ht=a(142),vt=a.n(ht),bt=a(318),Ot=a(322),yt=a(320),Lt=a(321),wt=a(319);function Ct(){var e=Object(l.b)(),t=r.a.useState(!1),a=Object(z.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),s=Object(z.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(""),p=Object(z.a)(d,2),E=p[0],h=p[1],v=Object(n.useState)(""),b=Object(z.a)(v,2),O=b[0],y=b[1],L=Object(n.useState)(""),w=Object(z.a)(L,2),C=w[0],j=w[1],k=Object(n.useState)(""),N=Object(z.a)(k,2),S=N[0],x=N[1],I=Object(l.c)(rt),T=function(){m(""),h(""),y(""),j(""),x("")},A=function(){T(),c(!1)},D=function(){var t=Object(ee.a)(Q.a.mark((function t(){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(u,E,O,C,S),t.prev=1,t.next=4,e(tt({locationName:u,address1:E,address2:O,city:C,postCode:S,country:"",longitude:21.455,latitude:100.9876,adminOrg:"",water:!1,drinkable:!1,treatment:!1,unknown:!1,largeWaterFacility:!1,maleToilets:!1,femaleToilets:!1,largeToiletFacility:!1,disabledAccess:!1,chargeForUse:!1,openingHours:"",hasIssue:!1}));case 4:c(!1),T(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(g.a,{container:!0,justify:"flex-end",className:"spl--pb"},r.a.createElement(f.a,{variant:"outlined",color:"primary",onClick:function(){c(!0)}},r.a.createElement(vt.a,null)," Add Location")),r.a.createElement(bt.a,{open:o,onClose:A,"aria-labelledby":"form-dialog-title"},r.a.createElement(wt.a,{id:"form-dialog-title"},"Add Location"),r.a.createElement(yt.a,null,r.a.createElement(Lt.a,null,"Please enter your location details here."),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(U.a,{margin:"dense",id:"locationName",label:"Location Name",placeholder:"Enter location name",type:"text",fullWidth:!0,required:!0,value:u,onChange:function(e){m(e.target.value)}}),r.a.createElement(U.a,{margin:"dense",id:"address1",label:"Address Line 1",type:"text",fullWidth:!0,value:E,onChange:function(e){h(e.target.value)}}),r.a.createElement(U.a,{margin:"dense",id:"address2",label:"Address Line 2",type:"text",fullWidth:!0,value:O,onChange:function(e){y(e.target.value)}}),r.a.createElement(U.a,{margin:"dense",id:"city",label:"City",type:"text",fullWidth:!0,required:!0,value:C,onChange:function(e){j(e.target.value)}}),r.a.createElement(U.a,{margin:"dense",id:"postcode",label:"Postcode",type:"text",fullWidth:!0,value:S,onChange:function(e){x(e.target.value)}}),r.a.createElement(ft,null))),r.a.createElement(Ot.a,null,r.a.createElement(f.a,{onClick:A,color:"primary"},"Cancel"),r.a.createElement(f.a,{onClick:function(){return D()},color:"primary"},"Add Location",I&&r.a.createElement($e.a,null)))))}function jt(){var e=Object(l.b)(),t=Object(l.c)(at),a=Object(l.c)(nt),o=Object(l.c)(ot),c=Object(l.c)(ct),i=Object(n.useState)(null),s=Object(z.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(null),p=Object(z.a)(d,2),v=p[0],b=p[1],O=Object(n.useCallback)((function(){e(function(){var e=Object(ee.a)(Q.a.mark((function e(t){var a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_LOCATION_BEGINS"}),e.next=4,Xe.a.get("".concat(et,"/locations"));case 4:a=e.sent,t({type:"GET_LOCATION_SUCCESS",payload:a.data}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t({type:"GET_LOCATION_FAILURE"}),Qe.a.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);Object(n.useEffect)((function(){O()}),[O]);var y=function(t){var a;m(t.locationId),e((a=t.locationId,function(){var e=Object(ee.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"DELETE_LOCATION_BEGINS"}),e.next=4,Xe.a.delete("".concat(et,"/locations?locationId=").concat(a));case 4:console.log("Eva",a),t({type:"DELETE_LOCATION_SUCCESS",payload:a}),Qe.a.success("Location Deleted Successfully!"),e.next=15;break;case 9:throw e.prev=9,e.t0=e.catch(0),console.log(e.t0),t({type:"DELETE_LOCATION_FAILURE"}),Qe.a.error(e.t0.message),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))};return r.a.createElement("div",null,r.a.createElement(g.a,{container:!0,spacing:0},r.a.createElement(g.a,{item:!0,md:!0}),r.a.createElement(g.a,{item:!0,xs:12,md:6},r.a.createElement(E.a,{variant:"h3",component:"h1",gutterBottom:!0,className:"spl--pb spl--pt"},"Manage Locations"),!a&&0===t.length&&r.a.createElement(E.a,{variant:"body1",gutterBottom:!0,className:"spl--pb"},"Locations list empty."),a&&r.a.createElement(Ze.a,null),r.a.createElement(Ct,null),r.a.createElement("div",null,r.a.createElement(xe.a,null,t.map((function(t){return r.a.createElement(Ie.a,{key:t.locationId},r.a.createElement(Ae.a,{primary:t.locationName}),r.a.createElement(f.a,{variant:"contained",color:"primary","aria-label":"update",onClick:function(){return function t(a){b(a.locationId),e(t(Object(K.a)({},a)))}(t)}},r.a.createElement(h.a,{icon:"pen"}),c&&t.locationId===v&&r.a.createElement($e.a,{color:"secondary"})),r.a.createElement(f.a,{variant:"outlined",color:"secondary",style:{marginLeft:"0.5rem"},"aria-label":"delete",onClick:function(){return y(t)}},r.a.createElement(h.a,{icon:"trash-alt"}),o&&t.locationId===u&&r.a.createElement($e.a,{color:"secondary"})))}))))),r.a.createElement(g.a,{item:!0,md:!0})))}pe.b.add(ge.a,Ee.a,Ee.c,Ee.d,Ee.b);var kt=Object(s.a)({palette:{primary:{main:"#1FB0F5"}},typography:{fontFamily:['"Montserrat"',"BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")}}),Nt=function(){var e=Object(b.b)().isLoading;return Object(n.useEffect)((function(){Xe.a.get("https://j33niy2o35.execute-api.eu-west-2.amazonaws.com/dev/locations",{crossdomain:!0}).then((function(e){console.log(e)}),(function(e){console.log(e)}),[])})),e?r.a.createElement(Ke,null):r.a.createElement(u.a,{theme:kt},r.a.createElement(i.b,{injectFirst:!0},r.a.createElement(d.a,null,r.a.createElement(Ge,null),r.a.createElement(m.a,{maxWidth:"md"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/locations"},r.a.createElement(me,null)),r.a.createElement(p.a,{path:"/search",component:de}),r.a.createElement(p.a,{path:"/manage-locations",component:jt}),r.a.createElement(Ye,{path:"/profile",component:O}),r.a.createElement(p.a,{path:"/location-details/:number",component:A}),r.a.createElement(p.a,{path:"/",exact:!0,component:v}))),r.a.createElement(ve,null))))},St=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var It=a(45),Tt=a(144),At=a(145),Dt=a(146),_t={userList:[]},Wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_USER":return Object(K.a)(Object(K.a)({},e),{},{userList:n});default:return e}},Rt=a(147),Ut={locationList:[],getLocationLoading:!1,addLocationLoading:!1,deleteLocationLoading:!1,updateLocationLoading:!1},Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_LOCATION_BEGINS":return Object(K.a)(Object(K.a)({},e),{},{getLocationLoading:!0});case"GET_LOCATION_SUCCESS":return Object(K.a)(Object(K.a)({},e),{},{locationList:n,getLocationLoading:!1});case"GET_LOCATION_FAILURE":return Object(K.a)(Object(K.a)({},e),{},{getLocationLoading:!1});case"ADD_LOCATION_BEGINS":return Object(K.a)(Object(K.a)({},e),{},{addLocationLoading:!0});case"ADD_LOCATION_SUCCESS":return Object(K.a)(Object(K.a)({},e),{},{locationList:[].concat(Object(Rt.a)(e.locationList),[n]),addLocationLoading:!1});case"ADD_LOCATION_FAILURE":return Object(K.a)(Object(K.a)({},e),{},{addLocationLoading:!1});case"DELETE_LOCATION_BEGINS":return Object(K.a)(Object(K.a)({},e),{},{deleteLocationLoading:!0});case"DELETE_LOCATION_SUCCESS":return Object(K.a)(Object(K.a)({},e),{},{locationList:e.locationList.filter((function(e){return e.locationId!==n})),deleteLocationLoading:!1});case"DELETE_LOCATION_FAILURE":return Object(K.a)(Object(K.a)({},e),{},{deleteLocationLoading:!1});case"UPDATE_LOCATION_BEGINS":return Object(K.a)(Object(K.a)({},e),{},{updateLocationLoading:!0});case"UPDATE_LOCATION_SUCCESS":return Object(K.a)(Object(K.a)({},e),{},{locationList:e.locationList.map((function(e){return e.locationId===n.locationId?n:e})),updateLocationLoading:!1});case"UPDATE_LOCATION_FAILURE":return Object(K.a)(Object(K.a)({},e),{},{updateLocationLoading:!1});default:return e}},Ft=Object(It.combineReducers)({user:Wt,location:Bt}),Mt=Object(Dt.createLogger)({collapsed:!0}),Pt=Object(It.createStore)(Ft,void 0,Object(At.composeWithDevTools)(Object(It.applyMiddleware)(Tt.a,Mt))),Gt=(a(248),function(e){var t=e.children,a=Object(p.f)();return r.a.createElement(b.a,{domain:"dev-ov395x0x.eu.auth0.com",clientId:"VvokYrBlTBptqKIeAu6XmkIa9ypeKYk8",redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:"https://express.sample"},t)});Qe.a.configure({autoClose:1500}),c.a.render(r.a.createElement(d.a,null,r.a.createElement(Gt,null,r.a.createElement(l.a,{store:Pt},r.a.createElement(Nt,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");St?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):xt(t,e)}))}}()}},[[172,1,2]]]);
//# sourceMappingURL=main.f023c92c.chunk.js.map