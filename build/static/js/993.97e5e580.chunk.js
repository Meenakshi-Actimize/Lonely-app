"use strict";(self.webpackChunklonely_app=self.webpackChunklonely_app||[]).push([[993],{487:(e,o,a)=>{a.d(o,{Mn:()=>c,ai:()=>d,j2:()=>l});var t=a(7064),n=a(5437),s=a(6213),r=a(6623);const i=(0,t.Wp)({apiKey:"AIzaSyD5oOxSddv_21l9DIt-V7_ncBGGP8Htv7Q",authDomain:"lonelyplanet-88073.firebaseapp.com",databaseURL:"https://lonelyplanet-88073-default-rtdb.firebaseio.com",projectId:"lonelyplanet-88073",storageBucket:"lonelyplanet-88073.appspot.com",messagingSenderId:"475760343086",appId:"1:475760343086:web:fdf1b38a454c8fb706c7bf"}),l=(0,r.xI)(i),c=((0,n.P5)(i),new r.HF),d=new r.sk;(async e=>{try{const o=await s.A.get(e,{responseType:"arraybuffer"});console.log(o.data)}catch(o){console.error("Error fetching image data:",o)}})("")},4849:(e,o,a)=>{a.d(o,{A:()=>Ie});var t=a(5043),n=a.t(t,2),s=a(1906),r=a(5865),i=a(8903),l=a(9252),c=a(279),d=a(6446),g=a(6992),p=a(203),h=a(8988),m=a(2110),x=a(6494),u=a(6591),A=a(8911),y=a(5721),f=a(1322),j=a(889),b=a(6605),I=a(710),T=a(1337),k=a(3003),w=a(3216),S=a(6423),C=a(2548),v=a(5475),B=a(2314),F=a(4535),G=a(5263),L=a(7392),O=a(645),P=a(6360),D=a(6623),E=a(4802),N=a(7424),R=a(7734),z=a(3650),_=a(4980),M=a(2212),U=a(5129),H=a(8499),W=a(8385),K=a(6502),V=a(8703),q=a(6284),J=a(6149),Q=a(7412),X=a(6825),Y=a(7800),Z=a(8087),$=a(4440),ee=a(4536),oe=a(9611),ae=a(9578),te=a(2530),ne=a(1045),se=a(8380),re=a(1937),ie=a(6546),le=a(4056),ce=a(6977),de=a(1981),ge=a(1787),pe=a(1338),he=a(9120),me=a(1576),xe=a(4665),ue=a(3217),Ae=a(1036),ye=a(4109),fe=a(6974),je=a(6213);const be="https://lonelyplanet-88073-default-rtdb.firebaseio.com",Ie={React:n,Button:s.A,Typography:r.A,Grid:i.Ay,Accordion:j.A,Container:l.A,CloseIcon:E.A,AccordionSummary:b.A,AccordionDetails:I.A,Collapse:c.A,ExpandMoreIcon:T.A,connect:k.Ng,useParams:w.g,Icon:S.In,useEffect:t.useEffect,useState:t.useState,Link:v.N_,Box:d.A,useNavigate:w.Zp,AppBar:B.A,styled:F.Ay,Toolbar:G.A,IconButton:L.A,InputBase:O.Ay,SearchIcon:P.A,Hidden:g.A,Menu:p.A,MenuItem:h.A,signOut:D.CI,Card:m.A,CardContent:x.A,CardMedia:u.A,FacebookRoundedIcon:N.A,InstagramIcon:R.A,XIcon:z.A,ArrowBackIosNewRoundedIcon:_.A,ArrowForwardIosRoundedIcon:M.A,BookmarkBorderRoundedIcon:U.A,Swiper:H.RC,SwiperSlide:H.qr,SwiperCore:C.A,Autoplay:W.Ij,Stack:A.A,ArrowForwardIcon:K.A,YouTubeIcon:V.A,PinterestIcon:q.A,UpdateIcon:J.A,StarIcon:Q.A,AssignmentReturnedOutlinedIcon:Y.A,LocalShippingOutlinedIcon:X.A,EngineeringOutlinedIcon:Z.A,useLocation:w.zy,Shop:$.A,KeyboardArrowDownIcon:ee.A,MenuIcon:oe.A,SearchOutlinedIcon:ae.A,BookmarkBorderIcon:te.A,Avatar:ne.A,EffectFade:W._R,CheckSharpIcon:se.A,ArrowForwardIosSharpIcon:re.A,Tabs:ie.A,Tab:le.A,PieChart:ce.r,useDrawingArea:de.N,InputAdornment:ge.A,CheckCircleOutlineIcon:pe.A,ArrowBackIcon:he.A,PaginationItem:me.A,TextField:xe.A,Checkbox:ue.A,ToastContainer:Ae.N9,toast:Ae.oR,Bounce:Ae.br,Pagination:W.dK,Navigation:W.Vx,List:y.A,ListItem:f.Ay,CheckBoxOutlineBlankIcon:ye.A,TuneIcon:fe.A,Get1card:async()=>{try{const e=await je.A.get("".concat(be,"/flash.json"));console.log("This is Data from the 3FireBase -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}},Getfood1api:async()=>{try{const e=await je.A.get("".concat(be,"/foodanddrink1.json"));console.log("This is Data from the data in foodanddrink page -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}},Gethomecards:async()=>{try{const e=await je.A.get("".concat(be,"/cards.json"));console.log("This is Data from the 3FireBase -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}},Gethomecards2:async()=>{try{const e=await je.A.get("".concat(be,"/cards2.json"));console.log("This is Data from the 3FireBase -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}},Gethomecards3:async()=>{try{const e=await je.A.get("".concat(be,"/cards3.json"));console.log("This is Data from the 3FireBase -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}},Gethomecards4:async()=>{try{const e=await je.A.get("".concat(be,"/cards4.json"));console.log("This is Data from the 3FireBase -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}},Getmagnifierapi:async()=>{try{const e=await je.A.get("".concat(be,"/magnifier.json"));console.log("This is Data from the data in  page -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}},Getplanvideo1api:async()=>{try{const e=await je.A.get("".concat(be,"/planexpert.json"));console.log("This is Data from the video in plan expert page -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}},Getshopapi:async()=>{try{const e=await je.A.get("".concat(be,"/shop.json"));console.log("This is Data from the data in shop page -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}},Get1video:async()=>{try{const e=await je.A.get("".concat(be,"/video.json"));console.log("This is Data from the 3FireBase -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}},Getfoodcard1api:async()=>{try{const e=await je.A.get("".concat(be,"/foodcard1.json"));console.log("This is Data from the data in  page -----\x3e",e);const o=e.data;return console.log("This is json data",o),null===o?[]:Object.keys(o).map((e=>({id:e,...o[e]})))}catch(e){return console.log("error in  get api data",e.message),[]}}}},5993:(e,o,a)=>{a.r(o),a.d(o,{default:()=>i});var t=a(4849),n=a(6623),s=a(487),r=a(579);const i=()=>{const e=t.A.useNavigate(),[o,a]=t.A.useState(!1),[i,l]=t.A.useState(""),[c,d]=t.A.useState(""),[g,p]=t.A.useState(""),[h,m]=t.A.useState({}),x=e=>""===e.trim(),u=()=>{const e={};let o=!0;return x(i)?(e.name="Please enter name",o=!1):i.trim().length<3&&(e.name="Name must be at least 3 characters long",o=!1),x(c)?(e.email="Email not given",o=!1):/\S+@\S+\.\S+/.test(c)||(e.email="Invalid email format",o=!1),x(g)?(e.password="Password not given",o=!1):g.trim().length<6&&(e.password="Password must be at least 6 characters long",o=!1),m(e),o};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.A.Container,{maxWidth:"xl",sx:{backgroundColor:{lg:"#E0EEFA",md:"#E0EEFA",sm:"#E0EEFA",xs:"white"},height:{lg:"350vh",md:"330vh",sm:"160vh"},width:"100%"},children:(0,r.jsxs)(t.A.Grid,{container:!0,children:[(0,r.jsxs)(t.A.Grid,{item:!0,xs:12,sm:12,md:8,lg:8,sx:{textAlign:"left",paddingTop:"40px",paddingLeft:"100px",width:"100%",display:{lg:"block",md:"block",sm:"block",xs:"none"}},children:[(0,r.jsx)(t.A.Grid,{children:(0,r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Lonely_Planet.svg/2560px-Lonely_Planet.svg.png",alt:"",width:"16%"})}),(0,r.jsxs)(t.A.Grid,{children:[(0,r.jsxs)(t.A.Typography,{variant:"h3",sx:{fontFamily:"Arial sans-serif",padding:"180px 160px 20px 0px",fontWeight:"600",lineHeight:"150%",fontSize:{xs:"25px",sm:"30px"}},children:["The trip of your dreams starts",(0,r.jsx)("br",{})," with Lonely Planet"]}),(0,r.jsxs)(t.A.Typography,{sx:{fontWeight:"400",paddingLeft:"10px",lineHeight:"150%",verticalAlign:"baseline",fontSize:"calc(10px + 1vw)"},children:["Covering hundreds of destinations and countless",(0,r.jsx)("br",{})," experiences, Lonely Planet is your guide for traveling",(0,r.jsx)("br",{})," better and smarter."]})]})]}),(0,r.jsx)(t.A.Grid,{item:!0,xs:12,sm:12,md:4,lg:4,sx:{display:"flex",flexDirection:"column",paddingTop:{lg:"80px",md:"80px",sm:"80px",xs:"0px"}},children:(0,r.jsx)(t.A.Grid,{container:!0,children:(0,r.jsxs)(t.A.Box,{sx:{borderRadius:"16px",width:{lg:"75%",md:"100%",sm:"65%",xs:"100%"},margin:"auto",backgroundColor:"white",height:"810px"},children:[(0,r.jsx)(t.A.Typography,{variant:"h6",sx:{margin:"auto",marginTop:"55px",textAlign:"center"},children:"Welcome to Lonely Planet"}),(0,r.jsx)(t.A.Typography,{sx:{margin:"16px",fontSize:"12px",textAlign:"center"},children:"SignUp to continue"}),(0,r.jsxs)(t.A.Grid,{sx:{width:"80%",margin:"auto",height:{lg:"630px",md:"630px",sm:"650px",xs:"680px"}},children:[(0,r.jsxs)(t.A.Typography,{sx:{border:"1px solid gray",borderRadius:"22px",height:"43px",fontSize:"14px",color:"blue",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)("img",{src:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",alt:"",width:"9%"})," \xa0\xa0\xa0",(0,r.jsx)(t.A.Link,{href:"#",underline:"none",onClick:()=>{(0,n.df)(s.j2,s.Mn).then((o=>{console.log("result",o),e("/home");const a=o.user.accessToken;localStorage.setItem("accessToken",a),localStorage.setItem("email",o.user.email),localStorage.setItem("photo",o.user.photoURL);const t=o.user.displayName;localStorage.setItem("displayName",t)})).catch((e=>{console.log(e.message,"error generated")}))},children:"Continue with Google"})]}),(0,r.jsxs)(t.A.Typography,{sx:{border:"1px solid gray",borderRadius:"22px",height:"43px",marginTop:"10px",fontSize:"14px",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)("img",{src:"https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg",alt:"",width:"6%"})," \xa0\xa0\xa0",(0,r.jsx)(t.A.Link,{href:"#",underline:"none",onClick:()=>{(0,n.df)(s.j2,s.ai).then((o=>{console.log(o),e("/home");const a=o.user.accessToken;localStorage.setItem("accessToken",a),localStorage.setItem("email",o.user.email),localStorage.setItem("photofb",o.user.photoURL);const t=o.user.displayName;localStorage.setItem("displayName",t)})).catch((e=>{console.log(e.message,"error occured")}))},children:"Continue with Facebook"})]}),(0,r.jsx)(t.A.Typography,{sx:{color:"#bdbdbd",textAlign:"center",marginTop:"20px",fontSize:"10px"},children:"-------------------- OR --------------------"}),o?(0,r.jsx)(t.A.TextField,{id:"outlined-basic",label:"First Name*",variant:"outlined",onChange:e=>{const o=e.target.value;l(o)},error:!!h.name,helperText:h.name,sx:{width:"100%",marginTop:"10px",marginBottom:"8px",height:"30px"}}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(t.A.TextField,{id:"outlined-basic",label:"Email address*",variant:"outlined",onChange:e=>{const o=e.target.value;d(o)},error:!!h.email,helperText:h.email,sx:{width:"100%",marginTop:"40px",marginBottom:"8px"}}),(0,r.jsx)(t.A.TextField,{id:"outlined-basic",label:"Password*",variant:"outlined",onChange:e=>{const o=e.target.value;p(o)},error:!!h.password,helperText:h.password,sx:{width:"100%",marginTop:"10px"}}),(0,r.jsx)(t.A.Box,{sx:{backgroundColor:"#F9F9F9",marginTop:"30px",justifyContent:"left",alignItems:"left"},children:(0,r.jsxs)(t.A.Typography,{sx:{backgroundColor:"#E0EEFA",fontSize:"13px",textAlign:"left"},children:[(0,r.jsx)(t.A.Checkbox,{inputProps:{"aria-label":"Checkbox demo"},sx:{"& .MuiSvgIcon-root":{fontSize:16}}}),"I want to receive emails about awesome travel experiences and news!"]})}),(0,r.jsx)(t.A.Box,{sx:{marginTop:"8px",justifyContent:"left",alignItems:"left"},children:(0,r.jsxs)(t.A.Typography,{sx:{fontSize:"12px",textAlign:"left"},children:["By creating an account, I am agreeing to Lonely Planet's ",(0,r.jsx)(t.A.Link,{sx:{color:"blue"},children:"Terms of Service"})," and ",(0,r.jsx)(t.A.Link,{sx:{color:"blue"},children:"Privacy Policy."})]})}),(0,r.jsxs)(t.A.Box,{children:["  ",o?(0,r.jsx)(t.A.Button,{onChange:()=>e("/signup"),variant:"contained",onClick:async r=>{if(a(!0),r.preventDefault(),u()&&o)try{const o=await(0,n.eJ)(s.j2,c,g),t=o.user;await(0,n.r7)(o.user,{displayName:i}),console.log("this is the user",t);const r=await t.getIdToken();localStorage.setItem("email",o.user.email),localStorage.setItem("accessToken",r),console.log("this is sign in token",r),localStorage.setItem("displayName",o.user.displayName);const h=localStorage.getItem(t.displayName);console.log("User display name:",h),alert("Successfully Sign Up..!"),e("/signup"),a(!1),d(""),p(""),l("")}catch(h){console.error("Error creating user:",h.code,h.message),t.A.toast.error("Alredy have an account Please Log in",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",transition:t.A.Bounce})}},sx:{backgroundColor:"#0057D9",width:"100%",borderRadius:"20px",marginTop:"20px",textTransform:"none",height:"45px"},children:"Continue"}):(0,r.jsx)(t.A.Button,{onChange:()=>e("/home"),variant:"contained",onClick:async o=>{try{const o=await(0,n.x9)(s.j2,c,g),a=o.user,t=await a.getIdToken();localStorage.setItem("accessToken",t),localStorage.setItem("email",o.user.email);const r=o.user.displayName;localStorage.setItem("displayName",r),localStorage.getItem("displayName",r),console.log("This is the name in log in ",r),console.log("this is the login token",t),alert("Successfully Log In..!"),d(""),p(""),e("/home")}catch(a){console.log(a,"error occured"),t.A.toast.info("Please Create an account First",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",transition:t.A.Bounce})}},sx:{backgroundColor:"#0057D9",width:"100%",borderRadius:"20px",marginTop:"20px",textTransform:"none",height:"45px"},children:"Login"})]})]}),(0,r.jsx)(t.A.Grid,{sx:{textAlign:"center",marginBottom:"30px"},children:(0,r.jsxs)(t.A.Typography,{sx:{fontSize:"14px",marginTop:"12px"},children:[o?"Alredy have an account?":"Don`t have an account?","  ",(0,r.jsxs)("span",{style:{color:"#0057DA",fontWeight:"bold",cursor:"pointer",fontSize:"0.875rem"},onClick:()=>{a((e=>!e))},children:[" ",o?"Log in":"Sign Up"]}),"  "]})})]})})})]})})})}}}]);
//# sourceMappingURL=993.97e5e580.chunk.js.map