"use strict";(self.webpackChunklonely_app=self.webpackChunklonely_app||[]).push([[259],{259:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});i(5043);var r=i(4849),s=i(579);const o=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.A.Container,{maxWidth:"xl",sx:{backgroundColor:"white"},children:[(0,s.jsx)("img",{src:"https://lp-cms-production.imgix.net/2023-01/GettyImages-827446284.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75",alt:"",width:"100%",style:{marginTop:0,borderRadius:"22px",height:{xl:"876px",lg:"876px",md:"476px",sm:"300px",xs:"300px"},zIndex:10,color:"transparent"}}),(0,s.jsx)(r.A.Typography,{sx:{color:"#fff",marginTop:"-3%",fontWeight:"bold",fontSize:"12px",textAlign:"left",paddingLeft:"22px",marginBottom:"80px"},children:"Getty Images"})]})})};const n=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.A.Container,{maxWidth:"xl",children:(0,s.jsxs)(r.A.Grid,{sx:{marginBottom:"80px"},children:[(0,s.jsxs)(r.A.Typography,{sx:{color:"#0057DA",fontSize:"75px"},children:[(0,s.jsx)("strong",{children:"Bali "})," ",(0,s.jsx)("span",{style:{fontSize:"25px",color:"black",textDecoration:"underline",textDecorationColor:"#0057D9"},children:(0,s.jsx)("strong",{children:"Indonesia, Asia"})})]}),(0,s.jsxs)(r.A.Typography,{sx:{fontSize:"20px",color:"rgb(75,75,75)"},children:["The mere mention of Bali evokes thoughts of a paradise. It's more than a ",(0,s.jsx)("br",{}),"place; it's a mood, an aspiration, a tropical state of mind"]}),(0,s.jsxs)(r.A.Button,{sx:{backgroundColor:"#EEF4EF",marginTop:"50px",width:{lg:"15%",md:"23%",sm:"30%",xs:"75%"},height:"50px",color:"black",fontSize:"14px",textTransform:"none",borderRadius:"11px"},children:[(0,s.jsx)("img",{src:"https://images.echocommunity.org/2184c8fe-4747-420d-a050-d30272601e57/calendar_icon.png?w=1200",alt:"",width:"8%",style:{paddingLeft:"8px"}}),"\xa0\xa0\xa0\xa0",(0,s.jsx)("strong",{children:"Best time to visit"})," \xa0\xa0\xa0",(0,s.jsx)("img",{src:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg",alt:"",width:"8%"})]}),(0,s.jsxs)(r.A.Button,{sx:{backgroundColor:"#FDF2F1",marginTop:"45px",width:{lg:"15%",md:"23%",sm:"30%",xs:"75%"},height:"50px",color:"black",fontSize:"14px",textTransform:"none",borderRadius:"11px",marginLeft:"16px"},children:[(0,s.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/256/8824/8824040.png",alt:"",width:"8%",style:{paddingLeft:"8px"}}),"\xa0\xa0\xa0\xa0",(0,s.jsx)("strong",{children:"Best things to do"})," \xa0\xa0\xa0",(0,s.jsx)("img",{src:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg",alt:"",width:"8%"})]})]})})})};i(4014);const x={Gethomecard:e=>(console.log("Hi this is homecardsaction.."),{type:"GET_CARDS",payload:e})},l=r.A.connect((e=>(console.log("State data:",e.reducer3.data),{data:e.reducer3.data})),x)((function(e){let{data:t,Gethomecard:i}=e;const[o,n]=r.A.useState(null);r.A.useEffect((()=>{(async()=>{try{const e=await r.A.Gethomecards();i(e),console.log("Hi got homecard data",e)}catch(e){console.error("Error fetching data:",e)}})()}),[]);const x=r.A.React.useRef(null);return(0,s.jsx)(r.A.Container,{maxWidth:"xl",children:(0,s.jsxs)(r.A.Grid,{container:!0,sx:{backgroundColor:"#E0EEFA",height:"1000px",borderRadius:"14px"},children:[(0,s.jsxs)(r.A.Box,{sx:{margin:"30px"},children:[(0,s.jsxs)(r.A.Typography,{children:[(0,s.jsx)("span",{style:{color:"#758090"},children:"01 / A"}),(0,s.jsx)("span",{style:{color:"#C9C2CC"},children:"TT"}),(0,s.jsx)("span",{style:{color:"#D7989A"},children:"RACTIONS"})]}),(0,s.jsx)(r.A.Typography,{sx:{marginTop:"15px",fontSize:{lg:"65px",md:"55px",sm:"40px",xs:"24px"}},children:"Must-see attractions"})]}),(0,s.jsx)(r.A.Swiper,{spaceBetween:20,navigation:!1,modules:[r.A.Pagination,r.A.Navigation],breakpoints:{1440:{slidesPerView:3},1024:{slidesPerView:2},764:{slidesPerView:2},576:{slidesPerView:1},0:{slidesPerView:1}},ref:x,children:t&&t.map(((e,t)=>(0,s.jsx)(r.A.SwiperSlide,{children:(0,s.jsx)(r.A.Container,{maxWidth:"xl",children:(0,s.jsxs)(r.A.Grid,{container:!0,sx:{position:"relative",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)("img",{src:e.img,alt:e.title,style:{width:"90%",height:"400px",borderRadius:"16px"}}),e.showIcon&&(0,s.jsx)(r.A.Box,{sx:{position:"absolute",top:"35%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1,color:"white"},children:(0,s.jsx)("img",{src:"./images/home.png",width:"80%",alt:"Home Icon"})}),(0,s.jsx)(r.A.Box,{sx:{position:"absolute",top:0,right:45,padding:"10px",zIndex:1,backgroundColor:"hsla(0,0%,7%,.5)",color:"white",border:"1px solid gray",borderRadius:"25px",lineHeight:.45,marginTop:"18px"},children:(0,s.jsx)(r.A.BookmarkBorderIcon,{sx:{fontSize:20}})}),(0,s.jsx)(r.A.Box,{sx:{position:"absolute",top:0,left:45,zIndex:1,color:"white",lineHeight:.45,marginTop:"6px"},children:(0,s.jsx)("img",{src:"./images/topchoice.png",width:"75%",alt:"Top Choice"})}),(0,s.jsxs)(r.A.Grid,{children:[(0,s.jsx)(r.A.Typography,{sx:{marginLeft:"25px",fontSize:"23px",fontWeight:"bold"},children:e.title}),(0,s.jsx)(r.A.Typography,{sx:{marginLeft:"25px",fontSize:"14px",fontWeight:500},children:e.subtitle}),(0,s.jsx)(r.A.Typography,{sx:{marginLeft:"25px"},children:e.des})]})]})})},e.title)))}),(0,s.jsxs)(r.A.Box,{sx:{display:"flex",justifyContent:"flex-end",width:"100%",marginRight:"30px",marginTop:"10px"},children:[(0,s.jsx)(r.A.Button,{sx:{border:"1px solid gray",borderRadius:"16px",textTransform:"none",color:"black",width:{lg:"14%",md:"20%",sm:"25%",xs:"0%"},height:"35px",marginRight:"150px",marginTop:"13px",display:{lg:"block",md:"block",sm:"block",xs:"none"}},children:(0,s.jsx)("strong",{children:"View more attractions"})}),(0,s.jsxs)(r.A.Box,{sx:{position:"absolute",right:45,display:"flex",flexDirection:"row",marginTop:"10px"},children:[(0,s.jsx)(r.A.Button,{onClick:()=>{x.current&&x.current.swiper&&x.current.swiper.slidePrev()},sx:{minWidth:"auto",border:"2px solid gray",borderRadius:"22px",color:"gray",marginRight:"10px"},children:(0,s.jsx)(r.A.ArrowBackIosNewRoundedIcon,{})}),(0,s.jsx)(r.A.Button,{onClick:()=>{x.current&&x.current.swiper&&x.current.swiper.slideNext()},sx:{minWidth:"auto",border:"2px solid gray",borderRadius:"22px",color:"gray"},children:(0,s.jsx)(r.A.ArrowForwardIosRoundedIcon,{})})]})]})]})})}));const a=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.A.Container,{maxWidth:"xl",children:[(0,s.jsx)(r.A.Grid,{container:!0,sx:{marginTop:"60px"},children:(0,s.jsxs)(r.A.Grid,{xs:10,children:[(0,s.jsxs)(r.A.Typography,{sx:{textAlign:"left",paddingTop:"90px",fontSize:"14px",marginLeft:"28px"},children:[(0,s.jsx)("span",{style:{color:"#758090"},children:"A"}),(0,s.jsx)("span",{style:{color:"#C9C2CC"},children:"TT"}),(0,s.jsx)("span",{style:{color:"#D7989A"},children:"RACTIONS"})]}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",paddingTop:"20px",fontSize:{lg:"60px",md:"60px",sm:"40px",xs:"20px"},textDecoration:"bold",paddingLeft:"20px"},children:"Top picks from out travel experts"}),(0,s.jsx)(r.A.Typography,{sx:{fontSize:{lg:"35px",md:"32px",sm:"23px",xs:"17px"},marginLeft:"25px",textDecoration:"underline",textDecorationColor:"#0057D9",marginTop:"60px"},children:(0,s.jsx)("strong",{children:"The best of Bali: top ways to find your own piece of paradise"})}),(0,s.jsxs)(r.A.Typography,{sx:{marginLeft:"25px"},children:["Curated by  ",(0,s.jsx)("span",{style:{color:"#0057D9"},children:(0,s.jsx)("strong",{children:"Mark Eveleigh"})})]})]})}),(0,s.jsxs)(r.A.Box,{sx:{margin:"42px",position:"relative",width:{lg:"21%",md:"28%",sm:"38%",xs:"78%"}},children:[(0,s.jsx)("img",{src:"https://lonelyplanetstatic.imgix.net/marketing/placeholders/placeholder-restaurants.jpg?auto=format&fit=crop&ar=1:1&q=75&w=640",alt:"1",style:{width:"95%",height:"310px",borderRadius:"16px"}}),(0,s.jsx)(r.A.Box,{sx:{position:"absolute",top:"35%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1,color:"white"},children:(0,s.jsx)("img",{src:"./images/spoon.png",width:"80%",alt:"Spoon Icon"})}),(0,s.jsx)(r.A.Box,{sx:{position:"absolute",top:0,right:45,padding:"10px",zIndex:1,backgroundColor:"hsla(0,0%,7%,.5)",color:"white",border:"1px solid gray",borderRadius:"25px",lineHeight:.45,marginTop:"18px"},children:(0,s.jsx)(r.A.BookmarkBorderIcon,{sx:{fontSize:20}})}),(0,s.jsxs)(r.A.Box,{sx:{position:"relative",zIndex:2,marginTop:"16px"},children:[(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",fontSize:"23px"},children:(0,s.jsx)("strong",{children:"Byrdhouse Beach Club"})}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",fontSize:"14px",fontWeight:500},children:(0,s.jsx)("strong",{children:"SANUR"})}),(0,s.jsxs)(r.A.Typography,{sx:{textAlign:"left",fontSize:{lg:"16px",md:"14px",sm:"13px",xs:"12px"}},children:["With sun lounges, a swimming pool, a",(0,s.jsx)("br",{})," restaurant, bar and table tennis on-site,",(0,s.jsx)("br",{})," you could happily spend an entire day..."]})]})]})]})})};const d={Gethomecard2act:e=>(console.log("Hi this is homecardsaction.."),{type:"GET_TWOCARDS",payload:e})},p=r.A.connect((e=>(console.log("State data:",e.reducer4.data),{data:e.reducer4.data})),d)((function(e){let{data:t,Gethomecard2act:i}=e;const[o,n]=r.A.useState(null);r.A.useEffect((()=>{(async()=>{try{const e=await r.A.Gethomecards2();i(e),console.log("Hi got homecard data",e)}catch(e){console.error("Error fetching data:",e)}})()}),[]);const x=r.A.React.useRef(null);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.A.Container,{maxWidth:"xl",children:[(0,s.jsxs)(r.A.Grid,{children:[(0,s.jsx)(r.A.Typography,{sx:{fontSize:{lg:"35px",md:"32px",sm:"23px",xs:"17px"},marginLeft:"25px",textDecoration:"underline",textDecorationColor:"#0057D9"},children:(0,s.jsx)("strong",{children:"14 free things to do in Bali for paradise without the price tag"})}),(0,s.jsxs)(r.A.Typography,{sx:{marginLeft:"25px"},children:["Curated by  ",(0,s.jsx)("span",{style:{color:"#0057D9"},children:"Anita Surewicz, Mark Eveleigh"})]})]}),(0,s.jsxs)(r.A.Grid,{sx:{marginTop:"30px"},children:[(0,s.jsx)(r.A.Swiper,{ref:x,spaceBetween:20,navigation:!1,modules:[r.A.Pagination,r.A.Navigation],breakpoints:{1440:{slidesPerView:4},1024:{slidesPerView:3},764:{slidesPerView:2},576:{slidesPerView:1},0:{slidesPerView:1}},children:(0,s.jsx)(r.A.Container,{maxWidth:"xl",children:(0,s.jsx)(r.A.Grid,{container:!0,children:t&&t.map(((e,t)=>(0,s.jsx)(r.A.SwiperSlide,{children:(0,s.jsxs)(r.A.Box,{position:"relative",children:[(0,s.jsx)("img",{src:e.img,alt:e.title,style:{width:"100%",height:"300px",borderRadius:"16px"}}),e.showIcon&&(0,s.jsx)(r.A.Box,{sx:{position:"absolute",top:"30%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1,color:"white"},children:(0,s.jsx)("img",{src:"./images/bag.png",width:"80%"})}),(0,s.jsx)(r.A.Box,{sx:{position:"absolute",top:0,right:45,padding:"10px",zIndex:1,backgroundColor:"hsla(0,0%,7%,.5)",color:"white",border:"1px solid gray",borderRadius:"25px",lineHeight:.45,marginTop:"18px"},children:(0,s.jsx)(r.A.BookmarkBorderIcon,{sx:{fontSize:20}})}),e.showIcon2&&(0,s.jsx)(r.A.Box,{sx:{position:"absolute",top:"35%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1,color:"white"},children:(0,s.jsx)("img",{src:"./images/spoon.png",width:"80%"})}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",fontSize:"23px"},children:(0,s.jsx)("strong",{children:e.title})}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",fontSize:"14px",fontWeight:500},children:e.subtitle}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left"},children:e.des})]})},e.title)))})})}),(0,s.jsxs)(r.A.Box,{sx:{display:"flex",justifyContent:"flex-end",marginTop:"20px",marginRight:"25px"},children:[(0,s.jsx)(r.A.Button,{onClick:()=>{x.current&&x.current.swiper&&x.current.swiper.slidePrev()},sx:{minWidth:"auto",border:"1px solid gray",borderRadius:"22px",color:"gray",marginRight:"10px"},children:(0,s.jsx)(r.A.ArrowBackIosNewRoundedIcon,{})}),(0,s.jsx)(r.A.Button,{onClick:()=>{x.current&&x.current.swiper&&x.current.swiper.slideNext()},sx:{minWidth:"auto",border:"1px solid gray",borderRadius:"22px",color:"gray"},children:(0,s.jsx)(r.A.ArrowForwardIosRoundedIcon,{})})]})]})]})})}));const c=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.A.Grid,{sx:{marginTop:"120px",textAlign:"center"},children:[(0,s.jsx)(r.A.Typography,{sx:{fontSize:{xs:"10px",md:"12px",lg:"13px"}},children:"ADVERTISEMENT"}),(0,s.jsx)(r.A.Box,{children:(0,s.jsx)("img",{src:"https://tpc.googlesyndication.com/simgad/9710485096168726448",alt:"",width:"50%",style:{height:{lg:"90px",md:"40px",sm:"30px",xs:"28px"}}})})]})})};const g=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.A.Container,{maxWidth:"xl",children:(0,s.jsxs)(r.A.Grid,{sx:{backgroundColor:"#FDFBF6",height:{lg:"800px",md:"1000px",sm:"1000px",xs:"1350px"},marginTop:"100px"},children:[(0,s.jsxs)(r.A.Grid,{children:[(0,s.jsxs)(r.A.Typography,{sx:{textAlign:"center",paddingTop:"90px"},children:[(0,s.jsx)("span",{style:{color:"#758090"},children:"02 / A"}),(0,s.jsx)("span",{style:{color:"#C9C2CC"},children:"TT"}),(0,s.jsx)("span",{style:{color:"#D7989A"},children:"RACTIONS"})]}),(0,s.jsxs)(r.A.Typography,{sx:{textAlign:"center",paddingTop:"20px",fontSize:{lg:"60px",md:"60px",sm:"40px",xs:"20px"},textDecoration:"bold"},children:["Expert guidance to help you",(0,s.jsx)("br",{}),"plan your trip"]})]}),(0,s.jsx)(r.A.Grid,{container:!0,sx:{marginTop:"55px"},children:[{img:"./images/booksvg.png",title:"Things to Know",subtitle:"Plan the perfect trip to Bali with this advice on health, safety and etiquette.",art:"Read article"},{img:"./images/train.png",title:"Transportation",subtitle:"Bali is relatively small, but it can take a long time to travel around. Here are the best ways to get around on the \u201cisland of the gods.\u201d ",art:"Read article"},{img:"./images/wallet.png",title:"Money and Costs",subtitle:"Bali on the cheap? Most would struggle to spend a lottery jackpot here. If you do need to save some money, here s how.",art:"Read article"},{img:"./images/kids.png",title:"Traveling with Kids",subtitle:"A growing number of travelers are booking family holidays on the island of Bali. Here are the best things to do there with kids.",art:"Read article"}].map((e=>(0,s.jsx)(r.A.Grid,{xs:12,sm:6,md:4,lg:3,children:(0,s.jsxs)(r.A.Card,{sx:{borderRadius:"16px",width:{lg:"80%",md:"78%",sm:"80%",xs:"80%"},height:"180px",backgroundColor:"#FBF7EC",margin:{lg:"14px",md:"14px",sm:"15px",xs:"8px"},padding:"20px",border:"1px solid #D3D3D3"},children:[(0,s.jsxs)(r.A.Typography,{sx:{fontSize:"25px",display:"flex"},children:[(0,s.jsx)("img",{src:e.img,alt:"",width:"15%"})," ",(0,s.jsx)("span",{children:e.title})]}),(0,s.jsxs)(r.A.Typography,{sx:{fontSize:"13px",marginTop:"8px"},children:[" ",e.subtitle]}),(0,s.jsxs)(r.A.Typography,{children:[" ",e.art," ",(0,s.jsx)(r.A.ArrowForwardIcon,{sx:{marginTop:"8px",color:"gray",fontSize:"18px"}})]})]})})))}),(0,s.jsx)(r.A.Box,{sx:{display:"flex",justifyContent:"center",marginTop:"50px"},children:(0,s.jsx)(r.A.Button,{sx:{borderRadius:"22px",border:"1px solid #D3D3D3",textTransform:"none",color:"black",width:{lg:"8%",md:"12%",sm:"15%",xs:"40%"}},children:(0,s.jsx)("strong",{children:"View more"})})})]})})})};i(121);r.A.SwiperCore.use([r.A.Navigation]);const h=function(){const e=[{img:"https://lp-cms-production.imgix.net/2024-01/GettyImages-1470432978.jpg?auto=format&w=140&h=140&fit=crop&q=75",title:"DESTINATION PRACTICALITIES",subtitle:"12 things to know before going to Bali, Indonesia",des:"Jan18, 2024 \u2022 8 min read",icon:r.A.BookmarkBorderRoundedIcon},{img:"https://lp-cms-production.imgix.net/2022-01/GettyRF_1154363753.jpg?auto=format&w=140&h=140&fit=crop&q=75",title:"BUDGET TRAVEL",subtitle:"How to visit Bali on a Budget",des:"Jan 17, 2024 \u2022 6 min read",icon:r.A.BookmarkBorderRoundedIcon},{img:"https://lp-cms-production.imgix.net/2024-01/GettyImages-1055292950.jpg?auto=format&w=140&h=140&fit=crop&q=75",title:"FAMILY TRAVEL",subtitle:"7 of the best things to do with kids in Bali, Indonesia",des:"Jan 16, 2024 \u2022 8 min read",icon:r.A.BookmarkBorderRoundedIcon},{img:"https://lp-cms-production.imgix.net/2023-10/GettyImages-1094629404.jpeg?auto=format&w=140&h=140&fit=crop&q=75",title:"BEACHES",subtitle:"The 12 most Beautiful beaches in Bali for an island escape",des:"Nov 1, 2023 \u2022 6 min read",icon:r.A.BookmarkBorderRoundedIcon}],t=r.A.React.useRef(null);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.A.Container,{maxWidth:"xl",sx:{textAlign:"center",marginTop:"80px"},children:(0,s.jsxs)(r.A.Grid,{container:!0,sx:{textAlign:"center"},children:[(0,s.jsxs)(r.A.Grid,{sx:{marginBottom:"25px"},children:[(0,s.jsxs)(r.A.Typography,{sx:{textAlign:"left",paddingTop:"90px"},children:[(0,s.jsx)("span",{style:{color:"#758090"},children:"03 / A"}),(0,s.jsx)("span",{style:{color:"#C9C2CC"},children:"TT"}),(0,s.jsx)("span",{style:{color:"#D7989A"},children:"RACTIONS"})]}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",paddingTop:"20px",fontSize:{lg:"60px",md:"60px",sm:"40px",xs:"20px"},textDecoration:"bold"},children:"Latest stories from Bali"}),(0,s.jsx)(r.A.Typography,{sx:{marginTop:"20px",textAlign:"left",color:"gray",fontSize:"13px"},children:"Filter by interest:"})]}),(0,s.jsx)(r.A.Grid,{container:!0,sx:{display:{lg:"block",md:"none",sm:"none",xs:"none"}},children:(0,s.jsxs)(r.A.Grid,{item:!0,xs:6,sx:{display:"flex",alignItems:"center"},children:[(0,s.jsxs)(r.A.Grid,{item:!0,xs:2,sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("img",{src:"./images/tickmark.png",alt:"",width:"20%"}),(0,s.jsx)(r.A.Typography,{sx:{textDecoration:"underline",fontSize:"14px"},children:"All Interests"})]}),(0,s.jsxs)(r.A.Grid,{item:!0,xs:2.7,sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("img",{src:"./images/navigate.png",alt:"",width:"20%"}),(0,s.jsx)(r.A.Typography,{sx:{fontSize:"14px",display:"inline"},children:"Adventure Travel"})]}),(0,s.jsxs)(r.A.Grid,{item:!0,xs:2.2,sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("img",{src:"./images/house.png",alt:"",width:"28%"}),(0,s.jsx)(r.A.Typography,{sx:{fontSize:"14px"},children:"Art & Culture"})]}),(0,s.jsxs)(r.A.Grid,{item:!0,xs:3.6,sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("img",{src:"./images/umb.png",alt:"",width:"15%"}),(0,s.jsx)(r.A.Typography,{sx:{fontSize:"14px"},children:"Beaches,\xa0Coasts\xa0&\xa0Islands"})]}),(0,s.jsxs)(r.A.Grid,{item:!0,xs:1.5,sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("img",{src:"./images/spoons.png",alt:"",width:"30%"}),(0,s.jsx)(r.A.Typography,{sx:{fontSize:"14px"},children:"Food\xa0&\xa0Drink"})]})]})}),(0,s.jsx)(r.A.Grid,{item:!0,xs:12,md:7,children:(0,s.jsxs)(r.A.Box,{position:"relative",children:[(0,s.jsx)("img",{src:"https://lp-cms-production.imgix.net/2024-02/shutterstockRF1159268683.jpg?auto=format&w=730&h=630&fit=crop&q=75",alt:"",width:"100%",style:{borderRadius:"24px",height:"670px",filter:"brightness(58%)"}}),(0,s.jsx)(r.A.BookmarkBorderRoundedIcon,{sx:{position:"absolute",top:"15px",right:"20px",color:"white",borderRadius:"24px",border:"0px solid gray",backgroundColor:"#132743",width:"30px",height:"30px",display:"block",justifyContent:"center",alignItems:"center",boxSizing:"border-box",fontSize:"5px"}}),(0,s.jsxs)(r.A.Box,{sx:{position:"absolute",bottom:"-5%",left:{lg:"38%",md:"49%"},transform:"translate(-50%, -50%)",color:"white",padding:"20px",borderRadius:"5px",textAlign:"left",justifyContent:"left",alignItems:"left",display:{lg:"block",md:"block",sm:"none",xs:"none"},whiteSpace:"nowrap"},children:[(0,s.jsx)(r.A.Typography,{sx:{fontSIze:"14px"},children:(0,s.jsx)("strong",{children:"SUSTAINABLE TRAVEL"})}),(0,s.jsxs)(r.A.Typography,{sx:{fontSize:"32px"},children:[(0,s.jsx)("strong",{children:"Traveling to Bali? Prepare to pay a"}),(0,s.jsx)("br",{})," ",(0,s.jsx)("strong",{children:"new tourist fee from today"})]}),(0,s.jsx)(r.A.Typography,{sx:{fontSize:"15px",marginBottom:"10px"},children:"Feb 13, 2024 \u2022 4 min read"}),(0,s.jsx)(r.A.Typography,{children:(0,s.jsx)("strong",{children:"Bali is introducing a new tourist tax starting February 14."})})]})]})}),(0,s.jsx)(r.A.Grid,{item:!0,xs:12,md:5,children:(0,s.jsxs)(r.A.Container,{maxWidth:"xl",children:[(0,s.jsx)(s.Fragment,{}),(0,s.jsxs)(r.A.Swiper,{ref:t,children:[(0,s.jsx)(r.A.SwiperSlide,{children:e.map(((e,t)=>(0,s.jsxs)(r.A.Grid,{container:!0,maxWidth:"xl",sx:{backgroundColor:"#F0F7FC",borderRadius:"16px",marginBottom:"17px"},children:[(0,s.jsx)(r.A.Grid,{item:!0,xs:4,sx:{marginBottom:"20px"},children:(0,s.jsx)("img",{src:e.img,alt:"",width:"60%",style:{paddingTop:"20px"}})}),(0,s.jsx)(e.icon,{sx:{position:"absolute",top:"15px",right:"20px",color:"white",zIndex:1,borderRadius:"24px",border:"3px solid gray",backgroundColor:"#818487",width:"30px",height:"30px",display:{lg:"block",md:"block",sm:"none",xs:"none"},justifyContent:"center",alignItems:"center",boxSizing:"border-box",fontSize:"10px"}}),(0,s.jsxs)(r.A.Grid,{item:!0,xs:8,sx:{marginTop:"20px"},children:[(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",color:"gray",fontSize:"14px"},children:e.title}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",fontSize:"20px"},children:(0,s.jsx)("strong",{children:e.subtitle})}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left"},children:e.des})]})]})))}),(0,s.jsx)(r.A.SwiperSlide,{children:e.map(((e,t)=>(0,s.jsxs)(r.A.Grid,{container:!0,maxWidth:"sm",sx:{backgroundColor:"#F0F7FC",borderRadius:"16px",marginBottom:"17px"},children:[(0,s.jsx)(r.A.Grid,{item:!0,xs:4,sx:{marginBottom:"20px",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)("img",{src:e.img,alt:"",width:"60%",style:{paddingTop:"20px"}})}),(0,s.jsx)(e.icon,{sx:{position:"absolute",top:"15px",right:"20px",color:"white",zIndex:1,borderRadius:"24px",border:"3px solid gray",backgroundColor:"#818487",width:"30px",height:"30px",display:{lg:"block",md:"block",sm:"none",xs:"none"},justifyContent:"center",alignItems:"center",boxSizing:"border-box",fontSize:"10px"}}),(0,s.jsxs)(r.A.Grid,{item:!0,xs:8,sx:{marginTop:"20px"},children:[(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",color:"gray",fontSize:"14px"},children:e.title}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",fontSize:"20px"},children:(0,s.jsx)("strong",{children:e.subtitle})}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left"},children:e.des})]})]})))}),(0,s.jsx)(r.A.SwiperSlide,{children:e.map(((e,t)=>(0,s.jsxs)(r.A.Grid,{container:!0,maxWidth:"sm",sx:{backgroundColor:"#F0F7FC",borderRadius:"16px",marginBottom:"17px"},children:[(0,s.jsx)(r.A.Grid,{item:!0,xs:4,sx:{marginBottom:"20px"},children:(0,s.jsx)("img",{src:e.img,alt:"",width:"60%",style:{paddingTop:"20px"}})}),(0,s.jsx)(e.icon,{sx:{position:"absolute",top:"15px",right:"20px",color:"white",zIndex:1,borderRadius:"24px",border:"3px solid gray",backgroundColor:"#818487",width:"30px",height:"30px",display:{lg:"block",md:"block",sm:"none",xs:"none"},justifyContent:"center",alignItems:"center",boxSizing:"border-box",fontSize:"10px"}}),(0,s.jsxs)(r.A.Grid,{item:!0,xs:8,sx:{marginTop:"20px"},children:[(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",color:"gray",fontSize:"14px"},children:e.title}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left",fontSize:"20px"},children:(0,s.jsx)("strong",{children:e.subtitle})}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"left"},children:e.des})]})]})))}),(0,s.jsx)(r.A.Button,{sx:{position:"relative",left:0,borderRadius:"40px",marginLeft:"8px",border:"1px solid gray",width:"10%",color:"black"},children:(0,s.jsx)(r.A.ArrowBackIosNewRoundedIcon,{onClick:()=>{t.current&&t.current.swiper&&t.current.swiper.slidePrev()}})}),(0,s.jsx)(r.A.Button,{sx:{position:"relative",right:0,borderRadius:"18px",border:"1px solid gray",color:"black"},children:(0,s.jsx)(r.A.ArrowForwardIosRoundedIcon,{onClick:()=>{t.current&&t.current.swiper&&t.current.swiper.slideNext()}})})]})]})})]})})})};const m={Gethomecard3act:e=>(console.log("Hi this is homecardsaction.."),{type:"GET_THRCARDS",payload:e})},j=r.A.connect((e=>(console.log("State data:",e.reducer5.data),{data:e.reducer5.data})),m)((function(e){let{data:t,Gethomecard3act:i}=e;const[o,n]=r.A.useState(null);return r.A.useEffect((()=>{(async()=>{try{const e=await r.A.Gethomecards3();i(e),console.log("Hi got homecard3 data",e)}catch(e){console.error("Error fetching data:",e)}})()}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.A.Container,{maxWidth:"xl",children:[(0,s.jsxs)(r.A.Grid,{children:[(0,s.jsxs)(r.A.Typography,{sx:{textAlign:"center",paddingTop:"90px"},children:[(0,s.jsx)("span",{style:{color:"#758090"},children:"IN PARTNERSHIP"}),"\xa0",(0,s.jsx)("span",{style:{color:"#C9C2CC"},children:"WITH"})," \xa0",(0,s.jsx)("span",{style:{color:"#D7989A"},children:"GETYOURGUIDE"})]}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"center",paddingTop:"20px",fontSize:{lg:"60px",md:"60px",sm:"40px",xs:"20px"},textDecoration:"bold"},children:"Book Popular activities in Bali"})]}),(0,s.jsx)(r.A.Grid,{container:!0,sx:{margin:"40px 30px 0px 0px"},children:t&&t.map(((e,t)=>(0,s.jsx)(r.A.Grid,{item:!0,xs:12,sm:12,md:6,lg:4,sx:{padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,s.jsxs)(r.A.Box,{sx:{width:{lg:"100%",md:"100%",sm:"100%",xs:"100%"}},children:[(0,s.jsx)("img",{src:e.img,alt:"",width:"100%",style:{borderRadius:"16px",height:"290px"}}),(0,s.jsx)(r.A.Typography,{sx:{color:"#0057D9",textDecoration:"underline",fontSize:"18px"},children:(0,s.jsx)("strong",{children:e.title})}),(0,s.jsxs)(r.A.Grid,{sx:{display:"flex",alignItems:"left",justifyContent:"left"},children:[(0,s.jsx)(r.A.UpdateIcon,{sx:{width:"5%"}}),(0,s.jsxs)(r.A.Typography,{children:["\xa0\xa0Duration: ",e.du]})]}),(0,s.jsxs)(r.A.Typography,{sx:{display:"flex",alignItems:"left",justifyContent:"left"},children:[(0,s.jsx)(r.A.StarIcon,{sx:{color:"yellow",width:"4%"}}),e.star]})]})},e.title)))}),(0,s.jsx)(r.A.Typography,{sx:{color:"gray",fontSize:"12px",margin:"15px 12px 0px 0px"},children:"Powered by GetYourGuide.Join our travel affiliate program"})]})})}));const A=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.A.Grid,{container:!0,sx:{marginTop:"20px",position:"relative",height:{lg:"200px",md:"180px"}},children:(0,s.jsxs)(r.A.Box,{sx:{position:"relative",width:"100%"},children:[(0,s.jsx)("img",{src:"./images/Bannerimg.jpg",alt:"Banner",style:{width:"100%",height:"500px"}}),(0,s.jsxs)(r.A.Box,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",textAlign:"center"},children:[(0,s.jsxs)(r.A.Typography,{sx:{marginTop:"5px"},children:[(0,s.jsx)("span",{style:{color:"#C9C2CC"},children:"04\xa0/\xa0GUI"}),(0,s.jsx)("span",{style:{color:"#758090"},children:"DE"}),(0,s.jsx)("span",{style:{color:"#D7989A"},children:"BOOKS"})]}),(0,s.jsxs)(r.A.Typography,{sx:{paddingTop:"20px",fontSize:{lg:"60px",md:"60px",sm:"40px",xs:"20px"},fontWeight:"bold"},children:["Purchase our award-winning",(0,s.jsx)("br",{}),"guidebooks"]}),(0,s.jsxs)(r.A.Typography,{children:["Get to the heart of Bali with one of our in-depth, award-winning guidebooks,",(0,s.jsx)("br",{})," covering maps, itineraries, and expert guidance."]}),(0,s.jsx)(r.A.Button,{sx:{margin:"20px",color:"white",borderRadius:"18px",border:"1px solid white",width:{lg:"13%",md:"18%",sm:"25%",xs:"55%"},textTransform:"none"},children:(0,s.jsx)("strong",{children:"Shop our Guidebooks"})})]})]})})})};const u=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.A.Grid,{sx:{marginTop:"150px",textAlign:"center",borderBottom:"1px solid gray"},children:[(0,s.jsx)(r.A.Typography,{sx:{fontSize:{xs:"10px",md:"12px",lg:"13px"}},children:"ADVERTISEMENT"}),(0,s.jsx)(r.A.Box,{sx:{marginBottom:"40px"},children:(0,s.jsx)("img",{src:"https://tpc.googlesyndication.com/simgad/3510117500144793346",alt:"",width:"50%",style:{height:{lg:"90px",md:"40px",sm:"30px",xs:"28px"}}})})]})})};var y=i(8441),f=i(7597);const b={Gethomecard4act:e=>(console.log("Hi this is homecardsaction.."),{type:"GET_FOUCARDS",payload:e})},w=r.A.connect((e=>(console.log("State data:",e.reducer6.data),{data:e.reducer6.data})),b)((function(e){let{data:t,Gethomecard4act:i}=e;const[o,n]=r.A.useState(null);r.A.useEffect((()=>{(async()=>{try{const e=await r.A.Gethomecards4();i(e),console.log("Hi got homecard4 data",e)}catch(e){console.error("Error fetching data:",e)}})()}),[]);const x=r.A.React.useRef(null);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.A.Container,{maxWidth:"xl",children:[(0,s.jsxs)(r.A.Grid,{container:!0,sx:{marginTop:"350px"},children:[(0,s.jsx)(r.A.Grid,{xs:12,sm:12,md:6,lg:6,children:(0,s.jsxs)(r.A.Typography,{sx:{textAlign:"left"},children:[(0,s.jsx)("span",{style:{color:"#C9C2CC"},children:"05\xa0/\xa0GO"}),(0,s.jsx)("span",{style:{color:"#758090"},children:"BE"}),(0,s.jsx)("span",{style:{color:"#D7989A"},children:"YOND"}),(0,s.jsx)(r.A.Typography,{sx:{fontSize:"55px",textAlign:"left"},children:"Bali and beyond"})]})}),(0,s.jsx)(r.A.Grid,{xs:12,sm:12,md:6,lg:6,sx:{textAlign:{lg:"right",md:"right",sm:"center",xs:"center"}},children:(0,s.jsx)(r.A.Typography,{children:(0,s.jsx)(r.A.Button,{sx:{border:"1px solid gray",color:"black",textTransform:"none",marginTop:"50px",borderRadius:"19px",width:{lg:"18%",md:"30%",sm:"20%",xs:"45%"}},children:(0,s.jsx)("strong",{children:"Beyond Bali"})})})})]}),(0,s.jsxs)(r.A.Box,{sx:{position:"relative",marginTop:"30px"},children:[(0,s.jsx)(r.A.Swiper,{spaceBetween:20,navigation:!1,modules:[r.A.Pagination,r.A.Navigation],breakpoints:{1440:{slidesPerView:4},1024:{slidesPerView:3},764:{slidesPerView:2},576:{slidesPerView:1},0:{slidesPerView:1}},ref:x,children:t&&t.map(((e,t)=>(0,s.jsx)(r.A.SwiperSlide,{children:(0,s.jsxs)(r.A.Box,{children:[(0,s.jsx)("img",{src:e.img,alt:"1",style:{width:"100%",height:"350px",borderRadius:"16px"}}),e.showIcon&&(0,s.jsx)(r.A.Box,{sx:{position:"absolute",top:"45%",left:"58%",transform:"translate(-50%, -50%)",zIndex:1,color:"white"},children:(0,s.jsx)("img",{src:"./images/location.png",width:"90%"})}),(0,s.jsx)(r.A.Typography,{sx:{textAlign:"start",fontSize:"23px"},children:(0,s.jsx)("strong",{children:e.title})})]})},t)))}),(0,s.jsxs)(r.A.Box,{sx:{position:"absolute",right:0,display:"flex",flexDirection:"row",marginRight:"25px"},children:[(0,s.jsx)(r.A.Button,{onClick:()=>{x.current&&x.current.swiper&&x.current.swiper.slidePrev()},sx:{minWidth:"auto",border:"2px solid gray",borderRadius:"22px",color:"gray",marginRight:"10px"},children:(0,s.jsx)(r.A.ArrowBackIosNewRoundedIcon,{})}),(0,s.jsx)(r.A.Button,{onClick:()=>{x.current&&x.current.swiper&&x.current.swiper.slideNext()},sx:{minWidth:"auto",border:"2px solid gray",borderRadius:"22px",color:"gray"},children:(0,s.jsx)(r.A.ArrowForwardIosRoundedIcon,{})})]})]})]})})}));var T=i(6981),B=i(6707);const C=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(T.A,{}),(0,s.jsx)(B.default,{}),(0,s.jsx)(o,{}),(0,s.jsx)(n,{}),(0,s.jsx)(l,{}),(0,s.jsx)(a,{}),(0,s.jsx)(p,{}),(0,s.jsx)(c,{}),(0,s.jsx)(g,{}),(0,s.jsx)(h,{}),(0,s.jsx)(j,{}),(0,s.jsx)(A,{}),(0,s.jsx)(w,{}),(0,s.jsx)(u,{}),(0,s.jsx)(y.default,{}),(0,s.jsx)(f.default,{})]})}},4014:()=>{}}]);
//# sourceMappingURL=259.b23a8edf.chunk.js.map