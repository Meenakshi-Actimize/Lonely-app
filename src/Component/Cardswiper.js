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

function Cardswiper() {

    const photo = [{ img: 'https://lp-cms-production.imgix.net/2024-04/copenhagen-iStock-1327471226-rfc.jpeg?auto=format&w=140&h=140&fit=crop&q=75', title: 'PUBLIC TRANSPORT', subtitle: '15 tips for travelling to Copenhangen on a budget', des: 'Apr 30, 2024 • 6 min read', icon: BookmarkBorderRoundedIcon }, { img: 'https://lp-cms-production.imgix.net/2024-04/copenhagen-iStock-1327471226-rfc.jpeg?auto=format&w=140&h=140&fit=crop&q=75', title: 'PUBLIC TRANSPORT', subtitle: '15 tips for travelling to Copenhangen on a budget', des: 'Apr 30, 2024 • 6 min read', icon: BookmarkBorderRoundedIcon }, { img: 'https://lp-cms-production.imgix.net/2024-04/copenhagen-iStock-1327471226-rfc.jpeg?auto=format&w=140&h=140&fit=crop&q=75', title: 'PUBLIC TRANSPORT', subtitle: '15 tips for travelling to Copenhangen on a budget', des: 'Apr 30, 2024 • 6 min read', icon: BookmarkBorderRoundedIcon }, { img: 'https://lp-cms-production.imgix.net/2024-04/copenhagen-iStock-1327471226-rfc.jpeg?auto=format&w=140&h=140&fit=crop&q=75', title: 'PUBLIC TRANSPORT', subtitle: '15 tips for travelling to Copenhangen on a budget', des: 'Apr 30, 2024 • 6 min read', icon: BookmarkBorderRoundedIcon }]


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
            <Container maxWidth="xl" sx={{textAlign:'center'}}>
                <Grid container sx={{textAlign:'center'}}>
                    <Grid item xs={12} md={7} >
                        <Box position="relative">

                            <img src="https://lp-cms-production.imgix.net/2024-04/GettyImages-949207386.jpeg?auto=format&w=780&h=425&fit=crop&q=75" alt="" width="100%" style={{ borderRadius: '16px', height: '670px' }} />
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

                            <Typography
                                sx={{
                                    position: 'absolute',
                                    bottom: '-8%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white', // Text color
                                    padding: '20px',
                                    borderRadius: '5px',
                                    textAlign: 'left',
                                    justifyContent: 'left',
                                    alignItems: 'left',
                                    display:{lg:'block', md:'block', sm:'block', xs:'none'},

                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <strong><span sx={{ fontSize: { lg: '30px', md: '20px', sm: '10px', xs: '5px' } }}>Activities</span></strong> <br />
                                <strong><span sx={{ fontSize: { lg: '40px', md: '30px', sm: '20px', xs: '10px' } }}>The top 10 things do in the Netherlands</span></strong> <br />
                                <strong><span sx={{ fontSize: { lg: '30px', md: '20px', sm: '10px', xs: '5px' } }}>May 1, 2024 &#x2022; 6 min read</span></strong> <br />
                                <strong><span sx={{ fontSize: { lg: '30px', md: '20px', sm: '10px', xs: '5px' } }}>Follow this guide to the most unique and memorable experiences to be</span></strong> <br />
                                <strong><span sx={{ fontSize: { lg: '30px', md: '20px', sm: '10px', xs: '5px' } }}>had in the  Netherlands</span></strong>



                            </Typography>
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
                                                <Typography sx={{ textAlign: 'left' }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{ textAlign: 'left' }}>
                                                    {item.subtitle}
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
                                                <Typography sx={{ textAlign: 'left' }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{ textAlign: 'left' }}>
                                                    {item.subtitle}
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
                                                <Typography sx={{ textAlign: 'left' }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{ textAlign: 'left' }}>
                                                    {item.subtitle}
                                                </Typography>
                                                <Typography sx={{ textAlign: 'left' }}>
                                                    {item.des}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    ))}
                                </SwiperSlide>
                                <Button sx={{ position: 'relative', left: 0, borderRadius: '18px', marginLeft: '8px', border: '1px solid gray' }}><ArrowBackIosNewRoundedIcon onClick={goPrev} /></Button>
                                <Button sx={{ position: 'relative', right: 0, borderRadius: '18px', border: '1px solid gray' }}><ArrowForwardIosRoundedIcon onClick={goNext} /></Button>
                            </Swiper>
                        </Container>
                    </Grid>
                </Grid>
            </Container>


        </>
    )
}
export default Cardswiper;