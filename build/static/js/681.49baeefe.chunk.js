"use strict";(self.webpackChunklonely_app=self.webpackChunklonely_app||[]).push([[681],{5681:(o,e,a)=>{a.r(e),a.d(e,{default:()=>s});var t=a(4849),n=a(579);const s=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.A.Grid,{sx:{marginTop:"40px",textAlign:"center",marginBottom:"80px"},children:[(0,n.jsx)(t.A.Typography,{sx:{fontSize:{lg:"36px",md:"36px",sm:"36px",xs:"25px"},fontWeight:"bold"},children:"Join our travel revolution"}),(0,n.jsxs)(t.A.Typography,{sx:{marginTop:"10px",fontSize:{lg:"16px",md:"14px",sm:"13px",xs:"10px"}},children:["Sign up to stay in the know - hot new travel spots,",(0,n.jsx)("br",{}),"how we strive to make the world a better place, and all sorts of surprises."]}),(0,n.jsx)(t.A.TextField,{variant:"outlined",placeholder:"Your email",sx:{width:{lg:"30%",md:"40%",sm:"40%",xs:"90%"},borderRadius:"30px",color:"black"},InputProps:{sx:{borderRadius:"30px",marginTop:"20px",color:"black","& .MuiInputBase-input":{color:"black"}},endAdornment:(0,n.jsx)(t.A.InputAdornment,{position:"end",sx:{width:"30%"},children:(0,n.jsx)(t.A.Button,{sx:{borderRadius:"30px",border:"1px solid gray",textTransform:"none",color:"white",width:{lg:"100px",md:"100px",sm:"120px",xs:"130px"},background:"linear-gradient(45deg, #324bf9 11%, #9409ee 84%)",fontSize:"16px",fontWeight:"bold"},children:"Sign Up"})})}})]})})}},4849:(o,e,a)=>{a.d(e,{A:()=>wo});var t=a(5043),n=a.t(t,2),s=a(1906),r=a(5865),c=a(8903),i=a(9252),l=a(279),d=a(6446),p=a(6992),g=a(203),A=a(8988),u=a(2110),h=a(6494),m=a(6591),x=a(8911),y=a(5721),I=a(1322),j=a(889),f=a(6605),k=a(710),w=a(1337),T=a(3003),b=a(3216),B=a(6423),S=a(2548),C=a(5475),O=a(2314),v=a(4535),D=a(5263),F=a(7392),G=a(645),R=a(6360),N=a(6623),M=a(4802),P=a(7424),E=a(7734),L=a(3650),z=a(4980),_=a(2212),K=a(5129),U=a(8499),W=a(8385),Y=a(6502),q=a(8703),H=a(6284),J=a(6149),V=a(7412),X=a(6825),Z=a(7800),Q=a(8087),$=a(4440),oo=a(4536),eo=a(9611),ao=a(9578),to=a(2530),no=a(1045),so=a(8380),ro=a(1937),co=a(6546),io=a(4056),lo=a(6977),po=a(1981),go=a(1787),Ao=a(1338),uo=a(9120),ho=a(1576),mo=a(4665),xo=a(3217),yo=a(1036),Io=a(4109),jo=a(6974),fo=a(6213);const ko="https://lonelyplanet-88073-default-rtdb.firebaseio.com",wo={React:n,Button:s.A,Typography:r.A,Grid:c.Ay,Accordion:j.A,Container:i.A,CloseIcon:M.A,AccordionSummary:f.A,AccordionDetails:k.A,Collapse:l.A,ExpandMoreIcon:w.A,connect:T.Ng,useParams:b.g,Icon:B.In,useEffect:t.useEffect,useState:t.useState,Link:C.N_,Box:d.A,useNavigate:b.Zp,AppBar:O.A,styled:v.Ay,Toolbar:D.A,IconButton:F.A,InputBase:G.Ay,SearchIcon:R.A,Hidden:p.A,Menu:g.A,MenuItem:A.A,signOut:N.CI,Card:u.A,CardContent:h.A,CardMedia:m.A,FacebookRoundedIcon:P.A,InstagramIcon:E.A,XIcon:L.A,ArrowBackIosNewRoundedIcon:z.A,ArrowForwardIosRoundedIcon:_.A,BookmarkBorderRoundedIcon:K.A,Swiper:U.RC,SwiperSlide:U.qr,SwiperCore:S.A,Autoplay:W.Ij,Stack:x.A,ArrowForwardIcon:Y.A,YouTubeIcon:q.A,PinterestIcon:H.A,UpdateIcon:J.A,StarIcon:V.A,AssignmentReturnedOutlinedIcon:Z.A,LocalShippingOutlinedIcon:X.A,EngineeringOutlinedIcon:Q.A,useLocation:b.zy,Shop:$.A,KeyboardArrowDownIcon:oo.A,MenuIcon:eo.A,SearchOutlinedIcon:ao.A,BookmarkBorderIcon:to.A,Avatar:no.A,EffectFade:W._R,CheckSharpIcon:so.A,ArrowForwardIosSharpIcon:ro.A,Tabs:co.A,Tab:io.A,PieChart:lo.r,useDrawingArea:po.N,InputAdornment:go.A,CheckCircleOutlineIcon:Ao.A,ArrowBackIcon:uo.A,PaginationItem:ho.A,TextField:mo.A,Checkbox:xo.A,ToastContainer:yo.N9,toast:yo.oR,Bounce:yo.br,Pagination:W.dK,Navigation:W.Vx,List:y.A,ListItem:I.Ay,CheckBoxOutlineBlankIcon:Io.A,TuneIcon:jo.A,Get1card:async()=>{try{const o=await fo.A.get("".concat(ko,"/flash.json"));console.log("This is Data from the 3FireBase -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}},Getfood1api:async()=>{try{const o=await fo.A.get("".concat(ko,"/foodanddrink1.json"));console.log("This is Data from the data in foodanddrink page -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}},Gethomecards:async()=>{try{const o=await fo.A.get("".concat(ko,"/cards.json"));console.log("This is Data from the 3FireBase -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}},Gethomecards2:async()=>{try{const o=await fo.A.get("".concat(ko,"/cards2.json"));console.log("This is Data from the 3FireBase -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}},Gethomecards3:async()=>{try{const o=await fo.A.get("".concat(ko,"/cards3.json"));console.log("This is Data from the 3FireBase -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}},Gethomecards4:async()=>{try{const o=await fo.A.get("".concat(ko,"/cards4.json"));console.log("This is Data from the 3FireBase -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}},Getmagnifierapi:async()=>{try{const o=await fo.A.get("".concat(ko,"/magnifier.json"));console.log("This is Data from the data in  page -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}},Getplanvideo1api:async()=>{try{const o=await fo.A.get("".concat(ko,"/planexpert.json"));console.log("This is Data from the video in plan expert page -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}},Getshopapi:async()=>{try{const o=await fo.A.get("".concat(ko,"/shop.json"));console.log("This is Data from the data in shop page -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}},Get1video:async()=>{try{const o=await fo.A.get("".concat(ko,"/video.json"));console.log("This is Data from the 3FireBase -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}},Getfoodcard1api:async()=>{try{const o=await fo.A.get("".concat(ko,"/foodcard1.json"));console.log("This is Data from the data in  page -----\x3e",o);const e=o.data;return console.log("This is json data",e),null===e?[]:Object.keys(e).map((o=>({id:o,...e[o]})))}catch(o){return console.log("error in  get api data",o.message),[]}}}}}]);
//# sourceMappingURL=681.49baeefe.chunk.js.map