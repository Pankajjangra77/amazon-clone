(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),n=c(24),i=c.n(n),r=(c(46),c(38)),o=c(10),l=(c(47),c(48),c(39)),j=c.n(l),d=c(40),h=c.n(d),u=c(18),m=c(2),b=Object(a.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(m.jsx)(b.Provider,{value:Object(a.useReducer)(t,c),children:s})},p=function(){return Object(a.useContext)(b)},g=c(32),x=(g.a.initializeApp({apiKey:"AIzaSyAqJrSHfMP0oPitg4nmqHmaeBJj_KW-6bk",authDomain:"clone-a3403.firebaseapp.com",projectId:"clone-a3403",storageBucket:"clone-a3403.appspot.com",messagingSenderId:"405233879994",appId:"1:405233879994:web:3dacbad64132c1ae8fab83",measurementId:"G-TXNLG9548P"}).firestore(),g.a.auth());var _=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:"header__logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG25.png"})}),Object(m.jsxs)("div",{className:"header__search",children:[Object(m.jsx)("input",{className:"header__searchInput",type:"text"}),Object(m.jsx)(j.a,{className:"header__searchIcon"})]}),Object(m.jsxs)("div",{className:"header__nav",children:[Object(m.jsx)(u.b,{to:!s&&"/login",children:Object(m.jsxs)("div",{onClick:function(){s&&x.signOut()},className:"header__option",children:[Object(m.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",s?s.email:"Guest"]}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(m.jsxs)("div",{className:"header__option",children:[Object(m.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(m.jsxs)("div",{className:"header__option",children:[Object(m.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(m.jsx)(u.b,{to:"/checkout",children:Object(m.jsxs)("div",{className:"header__optionBasket",children:[Object(m.jsx)(h.a,{}),Object(m.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})};c(61),c(62);var v=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,n=e.rating,i=p(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("div",{className:"product__info",children:[Object(m.jsx)("p",{children:c}),Object(m.jsxs)("p",{className:"product__price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:s})]}),Object(m.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\u2b50"})}))})]}),Object(m.jsx)("img",{src:a,alt:""}),Object(m.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:s,rating:n}})},children:"Add to Basket"})]})};var f=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsxs)("div",{className:"home__container",children:[Object(m.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB658235929_.jpg",alt:""}),Object(m.jsxs)("div",{className:"home__row",children:[Object(m.jsx)(v,{id:"741852",title:"The Lean Startup | Bhut achi book h khrid lo",price:19.99,image:"https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg",rating:4}),Object(m.jsx)(v,{id:"789456",title:"Bourge Men's Loire-z189 Running Shoes | Ek no k jute h lelo bhai",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/71vwCXqAfUL._UL1500_.jpg",rating:5})]}),Object(m.jsxs)("div",{className:"home__row",children:[Object(m.jsx)(v,{id:"785386",title:"KMJSA AB010 M4 | Bluetooth Wireless Smart | Sports Watch Compatible with All Android and iOS Device | Heart Rate and BP Monitor - Calories Counter",price:25.99,image:"https://images-na.ssl-images-amazon.com/images/I/31Brq4HngzL.jpg",rating:3}),Object(m.jsx)(v,{id:"852963",title:"Infinity (JBL) Fuze 100 Deep Bass Dual Equalizer IPX7 Waterproof Portable Wireless Speaker (Charcoal Black)",price:39.99,image:"https://images-na.ssl-images-amazon.com/images/I/81QmRXKHWEL._SL1500_.jpg",rating:4}),Object(m.jsx)(v,{id:"123789",title:"New Apple iPhone 12 (64GB) - Green | Sheeshe k aage photo leke instagram pe dalna Cool lagoge",price:199.99,image:"https://images-na.ssl-images-amazon.com/images/I/71cQWYVtcBL._SL1500_.jpg",rating:5})]}),Object(m.jsx)("div",{className:"home__row",children:Object(m.jsx)(v,{id:"789159",title:"Samsung 27 inch (68.6 cm) Curved Bezel Less, Speakers, Fabric Textured Back Side, FHD, VA Panel with DP, HDMI, VGA, Audio in, Headphone Ports | Bhaut chauda TV hai ye",price:1999.99,image:"https://images-na.ssl-images-amazon.com/images/I/91%2BfneWO62L._SL1500_.jpg",rating:4})})]})})},N=c(9);c(63),c(64);var k=function(e){var t=e.id,c=e.image,a=e.title,s=e.price,n=e.rating,i=p(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(m.jsxs)("div",{className:"checkoutProduct",children:[Object(m.jsx)("img",{src:c,alt:"",className:"checkoutProduct__image"}),Object(m.jsxs)("div",{className:"checkoutProduct__info",children:[Object(m.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(m.jsxs)("p",{className:"checkoutProduct__price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:s})]}),Object(m.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\u2b50"})}))}),Object(m.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove From Basket"})]})]})},S=(c(65),c(41)),y=c.n(S),A=c(22),B=c(23),C=(c(67),function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)}),P=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(B.a)(Object(B.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(A.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as it's not in the basket!")),Object(B.a)(Object(B.a)({},e),{},{basket:a});case"SET_USER":return Object(B.a)(Object(B.a)({},e),{},{user:t.user});default:return e}};var T=function(){var e=Object(N.f)(),t=p(),c=Object(o.a)(t,2),a=c[0].basket;return c[1],Object(m.jsxs)("div",{className:"subtotal",children:[Object(m.jsx)(y.a,{renderText:function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{children:["Subtotal (",a.length," items): ",Object(m.jsx)("strong",{children:e})]}),Object(m.jsxs)("small",{className:"subtotal__gift",children:[Object(m.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},displayType:"text",decimalScale:2,value:C(a),prefix:"$",thousandSeparator:!0}),Object(m.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed To Checkout"})]})};var E=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(m.jsxs)("div",{className:"checkout",children:[Object(m.jsxs)("div",{className:"checkout__left",children:[Object(m.jsx)("img",{className:"checkout__ad",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg",alt:""}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h3",{children:["Hello, ",null===s||void 0===s?void 0:s.email]}),Object(m.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),a.map((function(e){return Object(m.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(m.jsx)("div",{className:"checkout__right",children:Object(m.jsx)(T,{})})]})};c(70);var I=function(){var e=Object(N.f)(),t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],j=r[1];return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("h1",{children:"Sign-in"}),Object(m.jsxs)("form",{action:"",children:[Object(m.jsx)("h5",{children:"E-mail"}),Object(m.jsx)("input",{type:"text",value:s,onChange:function(e){return n(e.target.value)}}),Object(m.jsx)("h5",{children:"Password"}),Object(m.jsx)("input",{type:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(m.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),x.signInWithEmailAndPassword(s,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_signInButton",children:"Sign In"})]}),Object(m.jsx)("p",{children:"By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(m.jsx)("button",{onClick:function(t){t.preventDefault(),x.createUserWithEmailAndPassword(s,l).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_registerButton",children:"Create your Amazon Account"})]})]})};c(71);var L=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(m.jsx)("div",{className:"payment",children:Object(m.jsxs)("div",{className:"payment__container",children:[Object(m.jsxs)("h1",{children:["Checkout (",Object(m.jsxs)(u.b,{to:"/checkout",children:[a.length," items"]}),")"]}),Object(m.jsxs)("div",{className:"payment__section",children:[Object(m.jsx)("div",{className:"payment__title",children:Object(m.jsx)("h3",{children:"Delivery Address"})}),Object(m.jsxs)("div",{className:"payment__address",children:[Object(m.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(m.jsx)("p",{children:"123 Satnampura"}),Object(m.jsx)("p",{children:"Phagwara, Punjab"})]})]}),Object(m.jsxs)("div",{className:"payment__section",children:[Object(m.jsx)("div",{className:"payment__title",children:Object(m.jsx)("h3",{children:"Review items and delivery"})}),Object(m.jsx)("div",{className:"payment__items",children:a.map((function(e){return Object(m.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(m.jsxs)("div",{className:"payment__section",children:[Object(m.jsx)("div",{className:"payment__title",children:Object(m.jsx)("h3",{children:"Payment Method"})}),Object(m.jsx)("div",{className:"payment__details"})]})]})})};var w=function(){var e=p(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){x.onAuthStateChanged((function(e){console.log("The user is ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(m.jsx)(u.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(N.c,{children:[Object(m.jsx)(N.a,{path:"/login",children:Object(m.jsx)(I,{})}),Object(m.jsxs)(N.a,{path:"/checkout",children:[Object(m.jsx)(_,{}),Object(m.jsx)(E,{})]}),Object(m.jsxs)(N.a,{path:"/payment",children:[Object(m.jsx)(_,{}),Object(m.jsx)(L,{})]}),Object(m.jsxs)(N.a,{path:"/",children:[Object(m.jsx)(_,{}),Object(m.jsx)(f,{})]})]})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,85)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(O,{initialState:{basket:[],user:null},reducer:P,children:Object(m.jsx)(w,{})})}),document.getElementById("root")),z()}},[[73,1,2]]]);
//# sourceMappingURL=main.bf83068e.chunk.js.map