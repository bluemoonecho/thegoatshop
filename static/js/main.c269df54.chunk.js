(this.webpackJsonpe_commerce=this.webpackJsonpe_commerce||[]).push([[0],{135:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(12),c=n.n(r),i=n(7),s=n.n(i),o=n(11),u=n(10),l=n(76),j=new(n.n(l).a)("pk_test_276387a07584675ea6268f252d0238a9d4b1dd588e821",!0),d=n(169),b=n(171),p=n(56),h=n(173),m=n(174),x=n(172),O=n(175),f=n(16),g=n(166),v=n(18),y=Object(g.a)((function(t){return{appBar:Object(f.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px",heigth:"100px"},menuButton:Object(f.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(f.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(v.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),k=n(14),w=n(20),C=n(2),S=function(t){var e=t.totalItems,n=y(),a=Object(k.g)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(d.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(C.jsxs)(b.a,{children:[Object(C.jsxs)(p.a,{component:w.b,to:"/",varient:"h6",className:n.title,color:"inherit",children:[Object(C.jsx)(x.a,{style:{height:"30px",margin:"10px"}}),"The Goat Shop \ud83d\udc10"]}),Object(C.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(h.a,{component:w.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(m.a,{badgeContent:e,color:"secondary",children:Object(C.jsx)(O.a,{})})})})]})})})},_=n(181),N=n(176),T=n(177),B=n(178),E=n(179),R=n(180),F=Object(g.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}}));function I(t){var e=t.product,n=t.onAddToCart,a=F();return Object(C.jsxs)(N.a,{classsName:a.root,children:[Object(C.jsx)(T.a,{className:a.media,image:e.media.source,title:e.name}),Object(C.jsx)(B.a,{children:Object(C.jsxs)("div",{className:a.cardContent,children:[Object(C.jsx)(p.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(C.jsx)(p.a,{variant:"h5",children:e.price.formatted_with_symbol}),Object(C.jsx)(p.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]})}),Object(C.jsx)(E.a,{disableSpacing:!0,className:a.cardActions,children:Object(C.jsx)(h.a,{"aria-label":"Add to Cart",onClick:function(){return n(e.id,1)},children:Object(C.jsx)(R.a,{})})})]})}var q=Object(g.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),A=function(t){var e=t.products,n=t.onAddToCart,a=q();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(_.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(C.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(I,{product:t,onAddToCart:n})},t.id)}))})]})},L=n(182),W=n(183),D=Object(g.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(f.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(f.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),Object(f.a)(e,"backgroundColor","pink"),e),checkoutButton:{minWidth:"150px",backgroundColor:"#a2d1f5"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),Q=Object(g.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),G=function(t){var e=t.item,n=t.onUpdateCardQty,a=t.onRemoveFromCart,r=Q();return Object(C.jsxs)(N.a,{children:[Object(C.jsx)(T.a,{image:e.media.source,alt:e.name,className:r.media}),Object(C.jsxs)(B.a,{className:r.cartContent,children:[Object(C.jsx)(p.a,{variant:"h4",children:e.name}),Object(C.jsx)(p.a,{variant:"h5",children:e.line_total.formatted_with_symbol})]}),Object(C.jsxs)(E.a,{className:r.cardActions,children:[Object(C.jsxs)("div",{className:r.buttons,children:[Object(C.jsx)(L.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity-1)},children:"-"}),Object(C.jsx)(p.a,{children:e.quantity}),Object(C.jsx)(L.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity+1)},children:"+"})]}),Object(C.jsx)(L.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(e.id)},children:"Remove"})]})]})},P=function(t){var e=t.cart,n=t.handleUpdateCartQty,a=t.handleRemoveFromCart,r=t.handleEmptyCart,c=D(),i=function(){return Object(C.jsxs)(p.a,{variant:"subtitle1",children:["You have no items in your shopping cart,",Object(C.jsx)(w.b,{to:"/",className:c.link,children:"start adding some"}),"!"]})},s=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(_.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(C.jsx)(_.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(G,{item:t,onUpdateCardQty:n,onRemoveFromCart:a})},t.id)}))}),Object(C.jsxs)("div",{className:c.cardDetails,children:[Object(C.jsxs)(p.a,{variant:"h4",children:["Subtotal: ",e.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(L.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(C.jsx)(L.a,{component:w.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Check Out"})]})]})]})};return e.line_items?Object(C.jsxs)(W.a,{children:[Object(C.jsx)("div",{className:c.toolbar}),Object(C.jsx)(p.a,{className:c.title,variant:"h4",gutterBottom:!0,children:"Your Shopping Cart"}),e.line_items.length?Object(C.jsx)(s,{}):Object(C.jsx)(i,{})]}):"Loading..."},z=n(189),U=n(190),J=n(191),M=n(83),X=n(198),H=n(192),Y=n(194),Z=Object(g.a)((function(t){var e;return{appBar:{position:"relative"},toolbar:t.mixins.toolbar,layout:Object(f.a)({marginTop:"5%",width:"auto",marginLeft:t.spacing(2),marginRight:t.spacing(2)},t.breakpoints.up(600+2*t.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(e={marginTop:t.spacing(3),marginBottom:t.spacing(3),padding:t.spacing(2)},Object(f.a)(e,t.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(f.a)(e,t.breakpoints.up(600+2*t.spacing(3)),{marginTop:t.spacing(6),marginBottom:t.spacing(6),padding:t.spacing(3)}),e),stepper:{padding:t.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:t.spacing(3),marginLeft:t.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),K=n(33),V=n(197),$=n(193),tt=n(187),et=n(45),nt=n(195),at=function(t){var e=t.name,n=t.label,a=Object(et.d)().control;return Object(C.jsx)(_.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(et.a,{render:function(t){var e=t.field;return Object(C.jsx)(nt.a,Object(K.a)(Object(K.a)({},e),{},{label:n}))},control:a,defaultValue:"",fullWidth:!0,name:e,required:!0})})},rt=function(t){var e=t.checkoutToken,n=t.next,r=Object(a.useState)([]),c=Object(u.a)(r,2),i=c[0],l=c[1],d=Object(a.useState)(""),b=Object(u.a)(d,2),h=b[0],m=b[1],x=Object(a.useState)([]),O=Object(u.a)(x,2),f=O[0],g=O[1],v=Object(a.useState)(""),y=Object(u.a)(v,2),k=y[0],S=y[1],N=Object(a.useState)([]),T=Object(u.a)(N,2),B=T[0],E=T[1],R=Object(a.useState)(""),F=Object(u.a)(R,2),I=F[0],q=F[1],A=Object(et.c)(),W=Object.entries(i).map((function(t){var e=Object(u.a)(t,2);return{id:e[0],label:e[1]}})),D=Object.entries(f).map((function(t){var e=Object(u.a)(t,2);return{id:e[0],label:e[1]}})),Q=B.map((function(t){return{id:t.id,label:"".concat(t.description," - (").concat(t.price.formatted_with_symbol,")")}})),G=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.services.localeListShippingCountries(e);case 2:n=t.sent,a=n.countries,l(a),m(Object.keys(a)[0]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),P=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.services.localeListSubdivisions(e);case 2:n=t.sent,a=n.subdivisions,g(a),S(Object.keys(a)[0]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,t.next=3,j.checkout.getShippingOptions(e,{country:n,region:a});case 3:r=t.sent,E(r),q(r[0].id);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){G(e.id)}),[]),Object(a.useEffect)((function(){h&&P(h)}),[h]),Object(a.useEffect)((function(){k&&z(e.id,h,k)}),[k]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(C.jsx)(et.b,Object(K.a)(Object(K.a)({},A),{},{children:Object(C.jsxs)("form",{onSubmit:A.handleSubmit((function(t){return n(Object(K.a)(Object(K.a)({},t),{},{shippingCountry:h,shippingSubdivision:k,shippingOption:I}))})),children:[Object(C.jsxs)(_.a,{container:!0,spacing:3,children:[Object(C.jsx)(at,{required:!0,name:"firstName",label:"First name"}),Object(C.jsx)(at,{required:!0,name:"lastName",label:"Last name"}),Object(C.jsx)(at,{required:!0,name:"address1",label:"Address line 1"}),Object(C.jsx)(at,{required:!0,name:"email",label:"Email"}),Object(C.jsx)(at,{required:!0,name:"city",label:"City"}),Object(C.jsx)(at,{required:!0,name:"zip",label:"Zip / Postal code"}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(V.a,{children:"Shipping Country"}),Object(C.jsx)($.a,{value:h,fullWidth:!0,onChange:function(t){return m(t.target.value)},children:W.map((function(t){return Object(C.jsx)(tt.a,{value:t.id,children:t.label},t.id)}))})]}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(V.a,{children:"Shipping Subdivision"}),Object(C.jsx)($.a,{value:k,fullWidth:!0,onChange:function(t){return S(t.target.value)},children:D.map((function(t){return Object(C.jsx)(tt.a,{value:t.id,children:t.label},t.id)}))})]}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(V.a,{children:"Shipping Option"}),Object(C.jsx)($.a,{value:I,fullWidth:!0,onChange:function(t){return q(t.target.value)},children:Q.map((function(t){return Object(C.jsx)(tt.a,{value:t.id,children:t.label},t.id)}))})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"space-around",padding:"20px",marginLeft:"10px"},children:[Object(C.jsx)(L.a,{component:w.b,variant:"outlined",to:"/cart",children:"Back to Cart"}),Object(C.jsx)(L.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},ct=n(50),it=n(81),st=n(186),ot=n(136),ut=n(188),lt=function(t){var e=t.checkoutToken;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(C.jsxs)(st.a,{disablePadding:!0,children:[e.live.line_items.map((function(t){return Object(C.jsxs)(ot.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(ut.a,{primary:t.name,secondary:"Quantity: ".concat(t.quantity)}),Object(C.jsx)(p.a,{variant:"body2",children:t.line_total.formatted_with_symbol})]},t.name)})),Object(C.jsxs)(ot.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(ut.a,{primary:"Total"}),Object(C.jsx)(p.a,{variant:"subtitle1",style:{fontWeight:700},children:e.live.subtotal.formatted_with_symbol})]})]})]})},jt=Object(it.a)("pk_test_51It7U6HJmwTdR7B17S1xmfRuTDXCnUGIWWGbQ63qoi8UtQPITCFbs6XtPQJmAFwKiM3GjenXsBx3nER6nvpheZit00auDw05Qk"),dt=function(t){var e=t.checkoutToken,n=t.shippingData,a=t.backStep,r=t.onCaptureCheckout,c=t.nextStep,i=t.timeout,u=function(){var t=Object(o.a)(s.a.mark((function t(a,o,u){var l,j,d,b,p;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),u&&o){t.next=3;break}return t.abrupt("return");case 3:return l=o.getElement(ct.CardElement),t.next=6,u.createPaymentMethod({type:"card",card:l});case 6:j=t.sent,d=j.error,b=j.paymentMethod,d?console.log("[error]",d):(p={line_items:e.live.line_items,customer:{firstname:n.firstName,lastname:n.lastName,email:n.email},shipping:{name:"International",street:n.address1,town_city:n.city,county_state:n.shippingSubdivision,postal_zip_code:n.zip,country:n.shippingCountry},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:b.id}}},r(e.id,p),i(),c());case 10:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(lt,{checkoutToken:e}),Object(C.jsx)(z.a,{}),Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(C.jsx)(ct.Elements,{stripe:jt,children:Object(C.jsx)(ct.ElementsConsumer,{children:function(t){var n=t.elements,r=t.stripe;return Object(C.jsxs)("form",{onSubmit:function(t){return u(t,n,r)},children:[Object(C.jsx)(ct.CardElement,{}),Object(C.jsx)("br",{})," ",Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(L.a,{variant:"outlined",onClick:a,children:"Back"}),Object(C.jsxs)(L.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ",e.live.subtotal.formatted_with_symbol]})]})]})}})})]})},bt=["Shipping address","Payment details"],pt=function(t){var e=t.cart,n=t.order,r=t.onCaptureCheckout,c=t.error,i=Z(),l=Object(k.f)(),d=Object(a.useState)(0),b=Object(u.a)(d,2),h=b[0],m=b[1],x=Object(a.useState)(null),O=Object(u.a)(x,2),f=O[0],g=O[1],v=Object(a.useState)({}),y=Object(u.a)(v,2),S=y[0],_=y[1],N=Object(a.useState)(!1),T=Object(u.a)(N,2),B=T[0],E=T[1];Object(a.useEffect)((function(){(function(){var t=Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.checkout.generateToken(e.id,{type:"cart"});case 3:n=t.sent,g(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),l.push("/");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var R=function(){return m((function(t){return t+1}))},F=function(){return m((function(t){return t-1}))},I=function(t){_(t),R()},q=function(){setTimeout((function(){E(!0)}),3e3)},A=function(){return n.customer?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(p.a,{variant:"h5",children:["Thank you for your purchase, ",n.customer.firstname," ",n.customer.lastname,"!"]}),Object(C.jsx)(z.a,{className:i.divider}),Object(C.jsxs)(p.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(C.jsx)("br",{}),Object(C.jsx)(L.a,{component:w.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]}):B?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(p.a,{variant:"h5",children:"Thank you for your purchase!"}),Object(C.jsx)(z.a,{className:i.divider})]}),Object(C.jsx)("br",{}),Object(C.jsx)(L.a,{component:w.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]}):Object(C.jsx)("div",{className:i.spinner,children:Object(C.jsx)(U.a,{})})};c&&(A=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(p.a,{variant:"h5",children:["Error: ",c]}),Object(C.jsx)("br",{}),Object(C.jsx)(L.a,{component:w.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]})});var W=function(){return 0===h?Object(C.jsx)(rt,{checkoutToken:f,next:I}):Object(C.jsx)(dt,{shippingData:S,checkoutToken:f,nextStep:R,backStep:F,onCaptureCheckout:r,timeout:q})};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(J.a,{}),Object(C.jsx)("div",{className:i.toolbar}),Object(C.jsx)("main",{className:i.layout,children:Object(C.jsxs)(M.a,{className:i.paper,children:[Object(C.jsx)(p.a,{variant:"h4",align:"center",children:"Checkout"}),Object(C.jsx)(X.a,{activeStep:h,className:i.stepper,children:bt.map((function(t){return Object(C.jsx)(H.a,{children:Object(C.jsx)(Y.a,{children:t})},t)}))}),h===bt.length?Object(C.jsx)(A,{}):f&&Object(C.jsx)(W,{})]})})]})};function ht(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)({}),i=Object(u.a)(c,2),l=i[0],d=i[1],b=Object(a.useState)({}),p=Object(u.a)(b,2),h=p[0],m=p[1],x=Object(a.useState)(""),O=Object(u.a)(x,2),f=O[0],g=O[1],v=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.products.list();case 2:e=t.sent,n=e.data,r(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=d,t.next=3,j.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.add(e,n);case 2:a=t.sent,r=a.cart,d(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),N=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.update(e,{quantity:n});case 2:a=t.sent,r=a.cart,d(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),T=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.remove(e);case 2:n=t.sent,a=n.cart,d(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.empty();case 2:n=t.sent,a=n.cart,d(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.refresh();case 2:e=t.sent,d(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.checkout.capture(e,n);case 3:a=t.sent,m(a),E(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),g(t.t0.data.error.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){v(),y()}),[]),console.log(l),Object(C.jsx)(w.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)(S,{totalItems:l.total_items}),Object(C.jsxs)(k.c,{children:[Object(C.jsx)(k.a,{exact:!0,path:"/",children:Object(C.jsx)(A,{products:n,onAddToCart:_})}),Object(C.jsx)(k.a,{exact:!0,path:"/cart",children:Object(C.jsx)(P,{cart:l,handleUpdateCartQty:N,handleRemoveFromCart:T,handleEmptyCart:B})}),Object(C.jsx)(k.a,{exact:!0,path:"/checkout",children:Object(C.jsx)(pt,{cart:l,order:h,onCaptureCheckout:R,error:f})})]})]})})}c.a.render(Object(C.jsx)(ht,{}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.c269df54.chunk.js.map