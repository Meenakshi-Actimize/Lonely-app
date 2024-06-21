"use strict";(self.webpackChunklonely_app=self.webpackChunklonely_app||[]).push([[163],{8163:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});i(5043);var n=i(6981),r=i(6707),o=i(4849),s=i(579);const a=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.A.Grid,{container:!0,children:[(0,s.jsx)(o.A.Typography,{variant:"caption",sx:{display:{xs:"none",sm:"none",md:"none",lg:"block"},color:"red",position:"absolute",bottom:0,fontSize:{lg:"80px",md:"50px"},color:"white",paddingLeft:"450px"},children:(0,s.jsx)("strong",{children:"Food and Drink"})}),[{img:"./images/Food-and-Drink-Stories-Lonely-Planet.png"},{img:"./images/Food-and-Drink-Stories-Lonely-Planet (1).png"},{img:"./images/Food-and-Drink-Stories-Lonely-Planet (2).png"}].map((e=>(0,s.jsx)(o.A.Grid,{item:!0,xs:4,sx:{"&:hover img":{opacity:.8}},children:(0,s.jsx)("img",{className:"carousel-image",src:e.img,alt:"",width:"100%"})})))]})})};const l=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A.Grid,{sx:{marginTop:"80px"},children:(0,s.jsx)(o.A.Typography,{sx:{textAlign:"left",marginLeft:"35px",fontSize:"12px",color:"gray"},children:(0,s.jsx)("strong",{children:"PLAN YOUR TRIP"})})}),(0,s.jsx)(o.A.Grid,{children:(0,s.jsx)(o.A.Box,{children:(0,s.jsxs)(o.A.Typography,{sx:{textAlign:"left",marginLeft:"35px",fontSize:"45px",color:"black"},children:[(0,s.jsx)("strong",{children:"Where to next?"}),(0,s.jsx)(o.A.Button,{variant:"filled",sx:{border:"1px solid gray",borderRadius:"16px",margin:"20px 35px",float:{xs:"center",sm:"right",md:"right",lg:"right"}},children:"View all descriptions"})]})})})]})};const x={Getflash:e=>(console.log("Hi this is action.."),{type:"SET_DATA",payload:e})},d=o.A.connect((e=>(console.log("State data:",e.reducer1.data),{data:e.reducer1.data})),x)((function(e){let{data:t,Getflash:i}=e;const[n,r]=o.A.useState(null);return o.A.useEffect((()=>{(async()=>{try{const e=await o.A.Get1card();i(e),console.log("Hi success",e)}catch(e){console.error("Error fetching data:",e)}})()}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.A.Container,{maxWidth:"xl",children:(0,s.jsx)(o.A.Grid,{container:!0,children:t&&t.map(((e,t)=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.A.Grid,{item:!0,xs:12,sm:12,md:4,lg:4,sx:{textAlign:"center"},children:[(0,s.jsx)("img",{src:e.img,alt:"",width:"90%",style:{borderRadius:"16px",height:"380px"}}),(0,s.jsx)(o.A.Typography,{sx:{textAlign:"left",fontSize:"20px",marginLeft:"28px"},children:(0,s.jsx)("strong",{children:e.title})})]})})))})})})}));const c=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.A.Grid,{sx:{marginTop:"120px",textAlign:"center"},children:[(0,s.jsx)(o.A.Typography,{sx:{fontSize:{xs:"10px",md:"12px",lg:"13px"}},children:"ADVERTISEMENT"}),(0,s.jsx)("img",{src:"https://tpc.googlesyndication.com/simgad/6861019118589770948",alt:"",width:"50%"})]})})};const p={Getvideo:e=>(console.log("Hi this is action2.."),{type:"GET_VIDEO",payload:e})},g=o.A.connect((e=>(console.log("State data:",e.reducer2.data),{data:e.reducer2.data})),p)((function(e){let{data:t,Getvideo:i}=e;return o.A.useEffect((()=>{(async()=>{try{const e=await o.A.Get1video();i(e),console.log("Hi success",e)}catch(e){console.error("Error fetching data:",e)}})()}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.A.Grid,{container:!0,children:(0,s.jsxs)(o.A.Box,{position:"relative",sx:{marginTop:"60px",width:"100%"},children:[t&&t.map(((e,t)=>(0,s.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,style:{width:"100%",maxWidth:"100%",height:"auto"},children:(0,s.jsx)("source",{src:e.video,type:"video/mp4"})}))),(0,s.jsxs)(o.A.Typography,{variant:"h1",component:"div",sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",textAlign:"center",padding:"20px",borderRadius:"5px",whiteSpace:"nowrap",fontSize:{lg:"64px",md:"50px",sm:"30px",xs:"20px"}},children:[(0,s.jsx)("strong",{children:"BEST IN TRAVEL 2024"})," ",(0,s.jsx)("br",{}),(0,s.jsx)(o.A.Button,{variant:"contained",sx:{border:"1px solid white",borderRadius:"18px",backgroundColor:"white",color:"black",textTransform:"none"},children:"Discover the winners"})]})]})})})}));o.A.SwiperCore.use([o.A.Navigation]);const h=function(){const e=[{img:"https://lp-cms-production.imgix.net/2024-04/copenhagen-iStock-1327471226-rfc.jpeg?auto=format&w=140&h=140&fit=crop&q=75",title:"PUBLIC TRANSPORT",subtitle:"15 tips for travelling to Copenhangen on a budget",des:"Apr 30, 2024 \u2022 6 min read",icon:o.A.BookmarkBorderRoundedIcon},{img:"https://lp-cms-production.imgix.net/2024-04/copenhagen-iStock-1327471226-rfc.jpeg?auto=format&w=140&h=140&fit=crop&q=75",title:"PUBLIC TRANSPORT",subtitle:"15 tips for travelling to Copenhangen on a budget",des:"Apr 30, 2024 \u2022 6 min read",icon:o.A.BookmarkBorderRoundedIcon},{img:"https://lp-cms-production.imgix.net/2024-04/copenhagen-iStock-1327471226-rfc.jpeg?auto=format&w=140&h=140&fit=crop&q=75",title:"PUBLIC TRANSPORT",subtitle:"15 tips for travelling to Copenhangen on a budget",des:"Apr 30, 2024 \u2022 6 min read",icon:o.A.BookmarkBorderRoundedIcon},{img:"https://lp-cms-production.imgix.net/2024-04/copenhagen-iStock-1327471226-rfc.jpeg?auto=format&w=140&h=140&fit=crop&q=75",title:"PUBLIC TRANSPORT",subtitle:"15 tips for travelling to Copenhangen on a budget",des:"Apr 30, 2024 \u2022 6 min read",icon:o.A.BookmarkBorderRoundedIcon}],t=o.A.React.useRef(null);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.A.Container,{maxWidth:"xl",sx:{textAlign:"center"},children:(0,s.jsxs)(o.A.Grid,{container:!0,sx:{textAlign:"center"},children:[(0,s.jsx)(o.A.Grid,{item:!0,xs:12,md:7,children:(0,s.jsxs)(o.A.Box,{position:"relative",children:[(0,s.jsx)("img",{src:"https://lp-cms-production.imgix.net/2024-04/GettyImages-949207386.jpeg?auto=format&w=780&h=425&fit=crop&q=75",alt:"",width:"100%",style:{borderRadius:"16px",height:"670px"}}),(0,s.jsx)(o.A.BookmarkBorderRoundedIcon,{sx:{position:"absolute",top:"15px",right:"20px",color:"white",borderRadius:"24px",border:"0px solid gray",backgroundColor:"#132743",width:"30px",height:"30px",display:"block",justifyContent:"center",alignItems:"center",boxSizing:"border-box",fontSize:"5px"}}),(0,s.jsxs)(o.A.Typography,{sx:{position:"absolute",bottom:"-8%",left:"50%",transform:"translate(-50%, -50%)",color:"white",padding:"20px",borderRadius:"5px",textAlign:"left",justifyContent:"left",alignItems:"left",display:{lg:"block",md:"block",sm:"block",xs:"none"},whiteSpace:"nowrap"},children:[(0,s.jsx)("strong",{children:(0,s.jsx)("span",{sx:{fontSize:{lg:"30px",md:"20px",sm:"10px",xs:"5px"}},children:"Activities"})})," ",(0,s.jsx)("br",{}),(0,s.jsx)("strong",{children:(0,s.jsx)("span",{sx:{fontSize:{lg:"40px",md:"30px",sm:"20px",xs:"10px"}},children:"The top 10 things do in the Netherlands"})})," ",(0,s.jsx)("br",{}),(0,s.jsx)("strong",{children:(0,s.jsx)("span",{sx:{fontSize:{lg:"30px",md:"20px",sm:"10px",xs:"5px"}},children:"May 1, 2024 \u2022 6 min read"})})," ",(0,s.jsx)("br",{}),(0,s.jsx)("strong",{children:(0,s.jsx)("span",{sx:{fontSize:{lg:"30px",md:"20px",sm:"10px",xs:"5px"}},children:"Follow this guide to the most unique and memorable experiences to be"})})," ",(0,s.jsx)("br",{}),(0,s.jsx)("strong",{children:(0,s.jsx)("span",{sx:{fontSize:{lg:"30px",md:"20px",sm:"10px",xs:"5px"}},children:"had in the  Netherlands"})})]})]})}),(0,s.jsx)(o.A.Grid,{item:!0,xs:12,md:5,children:(0,s.jsxs)(o.A.Container,{maxWidth:"xl",children:[(0,s.jsx)(s.Fragment,{}),(0,s.jsxs)(o.A.Swiper,{ref:t,children:[(0,s.jsx)(o.A.SwiperSlide,{children:e.map(((e,t)=>(0,s.jsxs)(o.A.Grid,{container:!0,maxWidth:"xl",sx:{backgroundColor:"#F0F7FC",borderRadius:"16px",marginBottom:"17px"},children:[(0,s.jsx)(o.A.Grid,{item:!0,xs:4,sx:{marginBottom:"20px"},children:(0,s.jsx)("img",{src:e.img,alt:"",width:"60%",style:{borderRadius:"16px",paddingTop:"20px"}})}),(0,s.jsx)(e.icon,{sx:{position:"absolute",top:"15px",right:"20px",color:"white",zIndex:1,borderRadius:"24px",border:"3px solid gray",backgroundColor:"#818487",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",fontSize:"10px"}}),(0,s.jsxs)(o.A.Grid,{item:!0,xs:8,sx:{marginTop:"20px"},children:[(0,s.jsx)(o.A.Typography,{sx:{textAlign:"left"},children:e.title}),(0,s.jsx)(o.A.Typography,{sx:{textAlign:"left"},children:e.subtitle}),(0,s.jsx)(o.A.Typography,{sx:{textAlign:"left"},children:e.des})]})]})))}),(0,s.jsx)(o.A.Button,{sx:{position:"relative",left:0,borderRadius:"18px",marginLeft:"8px",border:"1px solid gray"},children:(0,s.jsx)(o.A.ArrowBackIosNewRoundedIcon,{onClick:()=>{t.current&&t.current.swiper&&t.current.swiper.slidePrev()}})}),(0,s.jsx)(o.A.Button,{sx:{position:"relative",right:0,borderRadius:"18px",border:"1px solid gray"},children:(0,s.jsx)(o.A.ArrowForwardIosRoundedIcon,{onClick:()=>{t.current&&t.current.swiper&&t.current.swiper.slideNext()}})})]})]})})]})})})};const m=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A.Grid,{sx:{marginTop:"80px"},children:(0,s.jsx)(o.A.Typography,{sx:{textAlign:"left",marginLeft:"35px",fontSize:"12px",color:"#B08084",fontSize:"16px"},children:(0,s.jsxs)("strong",{children:["TRAVEL STOR",(0,s.jsx)("span",{style:{color:"#D76E6B"},children:"IES AND NEWS"})]})})}),(0,s.jsx)(o.A.Grid,{children:(0,s.jsx)(o.A.Box,{children:(0,s.jsxs)(o.A.Typography,{sx:{textAlign:"left",marginLeft:"35px",fontSize:{lg:"64px",md:"64px",sm:"45px",xs:"25px"},color:"black",fontFamily:"Pangea Display, Helvetica, Arial, sans-serif;"},children:[(0,s.jsx)("strong",{children:"Explore our latest stories"}),(0,s.jsx)(o.A.Button,{variant:"filled",sx:{border:"1px solid gray",borderRadius:"20px",margin:"20px 35px",textTransform:"none",float:{xs:"center",sm:"right",md:"right",lg:"right"}},children:(0,s.jsx)("strong",{children:"Read more articles"})}),(0,s.jsx)(o.A.Button,{variant:"filled",sx:{border:"1px solid gray",borderRadius:"20px",margin:"20px 35px",textTransform:"none",float:{xs:"center",sm:"right",md:"right",lg:"right"}},children:(0,s.jsx)("strong",{children:"Read more news"})})]})})})]})};const j=function(){return(0,s.jsxs)(o.A.Box,{sx:{position:"relative",width:"100%",marginTop:"100px"},children:[(0,s.jsx)(o.A.CardMedia,{component:"img",width:"100%",image:"https://lonelyplanetstatic.imgix.net/marketing/2022/BIT/bit-guidebook-bg-desk.jpeg?auto=format&q=75&w=1920"}),(0,s.jsx)(o.A.Grid,{container:!0,sx:{position:"absolute",top:0,left:0,width:"100%",color:"white",padding:"30px",textAlign:"left"},children:(0,s.jsxs)(o.A.Grid,{sx:{display:{lg:"block",md:"block",sm:"none",xs:"none"}},children:[(0,s.jsx)(o.A.Typography,{sx:{color:"#C2C2C2",fontSize:"13px",paddingBottom:{lg:"0px",md:"0px",sm:"-80%",xs:"-80%"}},children:(0,s.jsx)("strong",{children:"SHOP OUR BOOKS"})}),(0,s.jsx)(o.A.Typography,{variant:"h3",children:(0,s.jsxs)("strong",{children:["Our guidebooks &",(0,s.jsx)("br",{})," travel books"]})}),(0,s.jsxs)(o.A.Typography,{children:["Whether you\u2019re interested in traveling to a new city,",(0,s.jsx)("br",{})," going on a cruise, or cooking a new dish \u2014 we\u2019re",(0,s.jsx)("br",{})," committed to inspiring you to experience travel in a",(0,s.jsx)("br",{})," whole new way. Lonely Planet\u2019s collection of 825+",(0,s.jsx)("br",{})," travel and guidebooks is sure to inspire the traveler",(0,s.jsx)("br",{})," within."]}),(0,s.jsx)(o.A.Button,{variant:"filled",sx:{borderRadius:"18px",border:"1px solid gray",marginTop:"30px",textTransform:"none"},children:"View All Books"})]})})]})};const u=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.A.Grid,{sx:{backgroundColor:"#0057D9"},children:[(0,s.jsxs)(o.A.Grid,{sx:{textAlign:"center "},children:[(0,s.jsx)(o.A.Typography,{variant:"h3",sx:{textAlign:"left",color:"white",fontWeight:"500"},children:(0,s.jsx)("strong",{children:"#lonelyplanet"})}),(0,s.jsx)(o.A.Typography,{sx:{textAlign:"right",color:"white"},children:(0,s.jsxs)("strong",{children:["FOLLOW LONELY PLANET:",(0,s.jsx)(o.A.FacebookRoundedIcon,{}),(0,s.jsx)(o.A.InstagramIcon,{}),(0,s.jsx)(o.A.XIcon,{}),(0,s.jsx)("img",{src:"./images/tiktok.png",alt:"",width:"1.5%",height:"1.5%"})]})})]}),(0,s.jsx)(o.A.Grid,{container:!0,sx:{paddingBottom:"80px",paddingTop:"80px"},children:[{img:"https://lonelyplanetstatic.imgix.net/marketing/2022/ig/pandeyrr.jpg?auto=format&fit=fill&q=75&w=750",caption:"@pandeyrr"},{img:"https://lonelyplanetstatic.imgix.net/marketing/2022/ig/richardwhitetravels.jpg?auto=format&fit=fill&q=75",caption:"@ali.vonlewinski"},{img:"https://lonelyplanetstatic.imgix.net/marketing/2022/ig/wanderlust_fabiana.jpg?auto=format&fit=fill&q=75",caption:"@wanderlust_fabiana"},{img:"https://lonelyplanetstatic.imgix.net/marketing/2022/ig/o_thessalonikios.jpg?auto=format&fit=fill&q=75&w=750",caption:"@Unchartedbackpacker"},{img:"https://lonelyplanetstatic.imgix.net/marketing/2022/ig/les_carnets_de_mel.jpg?auto=format&fit=fill&q=75&w=750",caption:"@les_Carnets_de_mel"},{img:"https://lonelyplanetstatic.imgix.net/marketing/2022/ig/dominik-kobler.jpg?auto=format&fit=fill&q=75&w=750",caption:"@dominik.cobler"}].map((e=>(0,s.jsx)(o.A.Grid,{item:!0,lg:2,md:2,sm:12,xs:12,sx:{"&:hover img":{opacity:.8}},children:(0,s.jsxs)(o.A.Box,{children:[(0,s.jsx)("img",{src:e.img,title:e.caption,width:"100%"}),(0,s.jsx)(o.A.Typography,{sx:{color:"#fff",marginTop:"-20%",fontWeight:"bold",textAlign:"left",paddingLeft:"8px"},children:e.caption})]})})))})]})})};var f=i(8441),A=i(7597);const y=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{}),(0,s.jsx)(r.default,{}),(0,s.jsx)(a,{}),(0,s.jsx)(l,{}),(0,s.jsx)(d,{}),(0,s.jsx)(c,{}),(0,s.jsx)(g,{}),(0,s.jsx)(m,{}),(0,s.jsx)(h,{}),(0,s.jsx)(j,{}),(0,s.jsx)(u,{}),(0,s.jsx)(f.default,{}),(0,s.jsx)(A.default,{})]})}}]);
//# sourceMappingURL=163.a1c51cfc.chunk.js.map