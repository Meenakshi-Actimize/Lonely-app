import * as React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'; // Import Swiper bundle CSS
import { Button } from '@mui/material';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';


SwiperCore.use([Navigation]);

function HomecardSwiper() {

    const photo = [{ img: 'https://lp-cms-production.imgix.net/2024-01/GettyImages-1470432978.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'DESTINATION PRACTICALITIES', subtitle: '12 things to know before going to Bali, Indonesia', des: 'Jan18, 2024 • 8 min read', icon: BookmarkBorderRoundedIcon }, { img: 'https://lp-cms-production.imgix.net/2022-01/GettyRF_1154363753.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'BUDGET TRAVEL', subtitle: 'How to visit Bali on a Budget', des: 'Jan 17, 2024 • 6 min read', icon: BookmarkBorderRoundedIcon }, { img: 'https://lp-cms-production.imgix.net/2024-01/GettyImages-1055292950.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'FAMILY TRAVEL', subtitle: '7 of the best things to do with kids in Bali, Indonesia', des: 'Jan 16, 2024 • 8 min read', icon: BookmarkBorderRoundedIcon }, { img: 'https://lp-cms-production.imgix.net/2023-10/GettyImages-1094629404.jpeg?auto=format&w=140&h=140&fit=crop&q=75', title: 'BEACHES', subtitle: 'The 12 most Beautiful beaches in Bali for an island escape', des: 'Nov 1, 2023 • 6 min read', icon: BookmarkBorderRoundedIcon }]


    const swiperRef = React.useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };


    return (
        <>
            <Container maxWidth="xl" sx={{ textAlign: 'center', marginTop: '80px' }}>
                <Grid container sx={{ textAlign: 'center' }}>
                    <Grid sx={{marginBottom:'25px'}}>
                    <Typography sx={{textAlign:'left', paddingTop:'90px'}}><span style={{ color: '#758090' }}>03 / A</span><span style={{ color: '#C9C2CC' }}>TT</span><span style={{ color: '#D7989A' }}>RACTIONS</span></Typography>
                    <Typography sx={{textAlign:"left", paddingTop:'20px', fontSize:{lg:'60px', md:'60px', sm:'40px', xs:'20px'}, textDecoration:'bold'}}>Latest stories from Bali</Typography>
                    <Typography sx={{marginTop:'20px', textAlign:'left', color:'gray', fontSize:'13px'}}>Filter by interest:</Typography>
                   </Grid>

                    

                   <Grid container sx={{display:{lg:'block', md:'none', sm:'none', xs:'none'}}}>
                    
                    <Grid item xs={6} sx={{display:'flex', alignItems:'center'}}>
                        <Grid item xs={2} sx={{display:'flex', alignItems:'center'}}>
                            <img src='./images/tickmark.png' alt='' width="20%"/>
                            <Typography sx={{textDecoration:'underline', fontSize:'14px'}}>All Interests</Typography>
                        </Grid>
                        <Grid item xs={2.7} sx={{display:'flex', alignItems:'center'}}>
                            <img src='./images/navigate.png' alt='' width="20%"/>
                            <Typography sx={{fontSize:'14px', display:'inline'}}>Adventure Travel</Typography>
                        </Grid>
                        <Grid item xs={2.2} sx={{display:'flex', alignItems:'center'}}>
                            <img src='./images/house.png' alt='' width="28%"/>
                            <Typography sx={{fontSize:'14px'}}>Art & Culture</Typography>
                        </Grid>
                        <Grid item xs={3.6} sx={{display:'flex', alignItems:'center'}}>
                            <img src='./images/umb.png' alt='' width="15%"/>
                            <Typography sx={{fontSize:'14px'}}>Beaches,&nbsp;Coasts&nbsp;&&nbsp;Islands</Typography>
                        </Grid>
                        <Grid item xs={1.5} sx={{display:'flex', alignItems:'center'}}>
                            <img src='./images/spoons.png' alt='' width='30%' />
                            <Typography sx={{fontSize:'14px'}}>Food&nbsp;&&nbsp;Drink</Typography>
                        </Grid>
                    </Grid>
                   </Grid>


                    <Grid item xs={12} md={7} >
                        <Box position="relative" >

                            <img src="https://lp-cms-production.imgix.net/2024-02/shutterstockRF1159268683.jpg?auto=format&w=730&h=630&fit=crop&q=75" alt="" width="100%" style={{ borderRadius: '24px', height: '670px',  filter: 'brightness(58%)' }} />
                            <BookmarkBorderRoundedIcon sx={{
                                position: 'absolute',
                                top: '15px', // Adjust top position
                                right: '20px', // Adjust right position
                                color: 'white',
                                borderRadius: '24px', // Make it a circle
                                border: '0px solid gray', // Add border
                                backgroundColor: '#132743',
                                width: '30px', // Increase width and height for a larger circle
                                height: '30px',
                                display: 'block',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxSizing: 'border-box',
                                fontSize: '5px', // Decrease icon size

                            }} />

                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: '-5%',
                                    left: {lg:'38%',md:'49%'},
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white', // Text color
                                    padding: '20px',
                                    borderRadius: '5px',
                                    textAlign: 'left',
                                    justifyContent: 'left',
                                    alignItems: 'left',
                                    display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' },

                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <Typography sx={{fontSIze:'14px'}}><strong>SUSTAINABLE TRAVEL</strong></Typography>

                                <Typography sx={{fontSize:'32px'}}><strong>Traveling to Bali? Prepare to pay a</strong><br/> <strong>new tourist fee from today</strong></Typography>
                                <Typography sx={{fontSize:'15px', marginBottom:'10px'}}>Feb 13, 2024 • 4 min read</Typography>

                                <Typography><strong>Bali is introducing a new tourist tax starting February 14.</strong></Typography>



                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5}  >
                        <Container maxWidth="xl">
                            <>

                            </>
                            <Swiper ref={swiperRef}>
                                <SwiperSlide>
                                    {photo.map((item, index) => (


                                        <Grid container maxWidth="xl" sx={{ backgroundColor: '#F0F7FC', borderRadius: '16px', marginBottom: '17px' }}>


                                            <Grid item xs={4} sx={{ marginBottom: '20px' }}>

                                                <img src={item.img} alt="" width="60%" style={{ borderRadius: '24px', paddingTop: '20px' }} />

                                            </Grid>

                                            <item.icon
                                                sx={{
                                                    position: 'absolute',
                                                    top: '15px',
                                                    right: '20px',
                                                    color: 'white',
                                                    zIndex: 1,
                                                    borderRadius: '24px',
                                                    border: '3px solid gray',
                                                    backgroundColor: '#818487',
                                                    width: '30px',
                                                    height: '30px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    boxSizing: 'border-box',
                                                    fontSize: '10px',
                                                }}
                                            />


                                            <Grid item xs={8} sx={{ marginTop: '20px' }}>
                                                <Typography sx={{ textAlign: 'left', color:'gray', fontSize:'14px' }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{ textAlign: 'left', fontSize:'20px' }}>
                                                    <strong>{item.subtitle}</strong>
                                                </Typography>
                                                <Typography sx={{ textAlign: 'left' }}>
                                                    {item.des}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    ))}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {photo.map((item, index) => (

                                        <Grid container maxWidth="sm" sx={{ backgroundColor: '#F0F7FC', borderRadius: '16px', marginBottom: '17px' }}>
                                            <Grid item xs={4} sx={{ marginBottom: '20px', alignItems: 'center', justifyContent: 'center' }}>
                                                <img src={item.img} alt="" width="60%" style={{ borderRadius: '16px', paddingTop: '20px' }} />
                                            </Grid>
                                            <item.icon
                                                sx={{
                                                    position: 'absolute',
                                                    top: '15px',
                                                    right: '20px',
                                                    color: 'white',
                                                    zIndex: 1,
                                                    borderRadius: '24px',
                                                    border: '3px solid gray',
                                                    backgroundColor: '#818487',
                                                    width: '30px',
                                                    height: '30px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    boxSizing: 'border-box',
                                                    fontSize: '10px',
                                                }}

                                            />
                                           <Grid item xs={8} sx={{ marginTop: '20px' }}>
                                                <Typography sx={{ textAlign: 'left', color:'gray', fontSize:'14px' }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{ textAlign: 'left', fontSize:'20px' }}>
                                                    <strong>{item.subtitle}</strong>
                                                </Typography>
                                                <Typography sx={{ textAlign: 'left' }}>
                                                    {item.des}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    ))}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {photo.map((item, index) => (

                                        <Grid container maxWidth="sm" sx={{ backgroundColor: '#F0F7FC', borderRadius: '16px', marginBottom: '17px' }}>
                                            <Grid item xs={4} sx={{ marginBottom: '20px' }}>
                                                <img src={item.img} alt="" width="60%" style={{ borderRadius: '16px', paddingTop: '20px' }} />
                                            </Grid>
                                            <item.icon
                                                sx={{
                                                    position: 'absolute',
                                                    top: '15px',
                                                    right: '20px',
                                                    color: 'white',
                                                    zIndex: 1,
                                                    borderRadius: '24px',
                                                    border: '3px solid gray',
                                                    backgroundColor: '#818487',
                                                    width: '30px',
                                                    height: '30px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    boxSizing: 'border-box',
                                                    fontSize: '10px',
                                                }}

                                            />
                                            <Grid item xs={8} sx={{ marginTop: '20px' }}>
                                                <Typography sx={{ textAlign: 'left', color:'gray', fontSize:'14px' }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{ textAlign: 'left', fontSize:'20px' }}>
                                                    <strong>{item.subtitle}</strong>
                                                </Typography>
                                                <Typography sx={{ textAlign: 'left' }}>
                                                    {item.des}
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                    ))}
                                </SwiperSlide>
                                <Button sx={{ position: 'relative', left: 0, borderRadius: '40px', marginLeft: '8px', border: '1px solid gray', width: "10%" , color:'black'}}><ArrowBackIosNewRoundedIcon onClick={goPrev} /></Button>
                                <Button sx={{ position: 'relative', right: 0, borderRadius: '18px', border: '1px solid gray', color:'black' }}><ArrowForwardIosRoundedIcon onClick={goNext} /></Button>
                            </Swiper>
                        </Container>
                    </Grid>
                </Grid>
            </Container>


        </>
    )
}
export default HomecardSwiper;