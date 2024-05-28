import * as React from 'react';
import { Grid, Typography, Button, Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function Homecardswiper2() {
    const images = [
        { img: 'https://lp-cms-production.imgix.net/2019-06/e9ac919055b124c2c1d7e657a26fa7e6-kuta-beach.jpg', title: 'Kuta & Southwest Beaches', showIcon:false}, 
        { img: 'https://lp-cms-production.imgix.net/2019-06/5775bb6de2bc380fe037f943b092ac14ec339950ddcea45488a9c50c9dc2d182.jpg', title: 'South Bali & the Islands', showIcon:false}, 
        { img: 'https://lp-cms-production.imgix.net/2019-06/d17e2f08a5c5c438d1b92080d9021b799cee122a102bce1edd87bf110ec6c061.jpg', title: 'Ubud Region', showIcon:false }, 
        { img: 'https://lp-cms-production.imgix.net/2023-02/shutterstockRF_755737138.jpg', title: 'Ubud', showIcon:false}, 
        { img: 'https://lonelyplanetstatic.imgix.net/marketing/placeholders/placeholder-destination.jpg', title: 'East Bali', showIcon:true }, 
        { img: 'https://lp-cms-production.imgix.net/2022-03/iStock-1337343641%20RFC.jpg', title: 'North Bali' ,showIcon:false},
        { img: 'https://lp-cms-production.imgix.net/2019-06/4ef6922e5b33070362868d21c0dee04b5184006a3b1ff4c1f0c321936205aa71.jpg', title: 'Central Mountains', showIcon:false }, 
        { img: 'https://lp-cms-production.imgix.net/2019-06/6860faa7c76b29cff3563d3dcff8f9af-pura-tanah-lot.jpg', title: 'West Bali' , showIcon:false}
    ];

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
            <Container maxWidth="xl">
                <Grid container sx={{ marginTop: '350px' }}>
                    <Grid xs={12} sm={12} md={6} lg={6}>
                        <Typography sx={{ textAlign: 'left' }}>
                            <span style={{ color: '#C9C2CC' }}>05&nbsp;/&nbsp;GO</span>
                            <span style={{ color: '#758090' }}>BE</span>
                            <span style={{ color: '#D7989A' }}>YOND</span>
                            <Typography sx={{ fontSize: '55px', textAlign: 'left' }}>Bali and beyond</Typography>
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} sx={{ textAlign: { lg: 'right', md: 'right', sm: 'center', xs: 'center' } }}>
                        <Typography>
                            <Button sx={{
                                border: '1px solid gray', color: 'black', textTransform: 'none',
                                marginTop: '50px', borderRadius: '19px', width: { lg: '18%', md: '30%', sm: '20%', xs: '45%' }
                            }}>
                                <strong>Beyond Bali</strong>
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ position: 'relative', marginTop: '30px' }}>
                    <Swiper
                        spaceBetween={20}
                        navigation={false}
                        modules={[Pagination, Navigation]}
                        breakpoints={{
                            1440: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            764: {
                                slidesPerView: 2,
                            },
                            576: {
                                slidesPerView: 1,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        ref={swiperRef}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Box>
                                    <img src={image.img} alt="1" style={{ width: '95%', height: '350px', borderRadius: '16px' }} />
                                    {image.showIcon && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '45%',
                                                left: '58%',
                                                transform: 'translate(-50%, -50%)',
                                                zIndex: 1,
                                                color: 'white',
                                            }}
                                        >
                                            <img src="./images/location.png" width="90%" />
                                        </Box>
                                    )}
                                    <Typography sx={{ textAlign: 'start', fontSize: '23px' }}>
                                        <strong>{image.title}</strong>
                                    </Typography>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Box sx={{ position: 'absolute',right:0, display: 'flex', flexDirection: 'row', marginRight:'25px'}}>
                        <Button onClick={goPrev} sx={{ minWidth: 'auto', border:'2px solid gray', borderRadius:'22px', color:'gray', marginRight: '10px' }}>
                            <ArrowBackIosNewRoundedIcon />
                        </Button>
                        <Button onClick={goNext} sx={{ minWidth: 'auto', border:'2px solid gray', borderRadius:'22px', color:'gray' }}>
                            <ArrowForwardIosRoundedIcon />
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Homecardswiper2;
