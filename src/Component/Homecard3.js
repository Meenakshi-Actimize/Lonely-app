import { Typography, Grid, Container, Box, Button } from '@mui/material';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import HomeIcon from '@mui/icons-material/Home'; // Import the home icon from MUI icons

function Homecard3() {
    const images = [
        { img: 'https://lp-cms-production.imgix.net/2019-06/7bd629aa8cc9966caeaa668194731e88-lpl-pura_taman_saraswati_1.jpg?auto=format&fit=crop&ar=1:1&q=75', title: 'Pura Taman Saraswati', subtitle: 'UBUD', des: 'Waters from the temple at the rear of this site feed the pond in the front, which overflows with pretty lotus blossoms…', showIcon: false, showIcon2: false },
        { img: 'https://lonelyplanetstatic.imgix.net/marketing/placeholders/placeholder-shopping.jpg?auto=format&fit=crop&ar=1:1&q=75&w=640', title: 'Ubud Market', subtitle: 'UBUD', des: 'The large Ubud Market is your one-stop shop for kitschy souvenirs, clothing and presents for back home. Its inside a large…', showIcon: true, showIcon2: false },
        { img: 'https://lp-cms-production.imgix.net/2019-06/fdbafc5f268ee0991ec4b9d415cd3582-lpl-pura_gunung_lebah_1.jpg?auto=format&fit=crop&ar=1:1&q=75&w=640', title: 'Pura Gunung Lebah', subtitle: 'UBUD', des: 'This old temple, which sits on a jutting rock at the confluence of two tributaries of Sungai Cerik (campuan means two…', showIcon: false, showIcon2: false },
        { img: 'https://lp-cms-production.imgix.net/2019-06/dddcb82a3f9096504274908218e5c350-petulu.jpg?auto=format&fit=crop&ar=1:1&q=75&w=640', title: 'Petulu', subtitle: 'UBUD', des: 'Every evening beginning after 5pm, up to 20,000 big herons fly in to Petulu, a village about 2.5km north of Jl Raya…', showIcon: false, showIcon2: false },
        { img: 'https://lonelyplanetstatic.imgix.net/marketing/placeholders/placeholder-restaurants.jpg?auto=format&fit=crop&ar=1:1&q=75&w=640', title: 'Pasar Sindhu Night Market', subtitle: 'SANUR', des: 'This market sells fresh vegetables, dried fish, pungent spices, various household goods and many tempting Balinese…', showIcon: false, showIcon2: true }
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
                <Grid>
                    <Typography sx={{ fontSize: { lg: '35px', md: '32px', sm: '23px', xs: '17px' }, marginLeft: '25px', textDecoration: 'underline', textDecorationColor: '#0057D9' }}>
                        <strong>14 free things to do in Bali for paradise without the price tag</strong>
                    </Typography>
                    <Typography sx={{ marginLeft: '25px' }}>
                        Curated by  <span style={{ color: '#0057D9' }}>Anita Surewicz, Mark Eveleigh</span>
                    </Typography>
                </Grid>
                <Grid sx={{ marginTop: '30px' }}>
                    <Swiper
                        ref={swiperRef}
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
                    >
                    <Container maxWidth="xl">
                        <Grid container>

                        {images.map((image) => (
                            <SwiperSlide key={image.title}>
                                <Box position="relative">
                                    <img src={image.img} alt={image.title} style={{ width: '100%', height: '300px', borderRadius:'16px' }} />
                                    {image.showIcon && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '30%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                zIndex: 1,
                                                color: 'white'
                                            }}
                                        >
                                            <img src="./images/bag.png" width="80%" />
                                        </Box>
                                    )}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 45,
                                            padding: '10px',
                                            zIndex: 1,
                                            backgroundColor: 'hsla(0,0%,7%,.5)',
                                            color: 'white',
                                            border: '1px solid gray',
                                            borderRadius: '25px',
                                            lineHeight: 0.45,
                                            marginTop: '18px'
                                        }}
                                    >
                                        <BookmarkBorderIcon sx={{ fontSize: 20 }} />
                                    </Box>
                                    {image.showIcon2 && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '35%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                zIndex: 1,
                                                color: 'white'
                                            }}
                                        >
                                            <img src="./images/spoon.png" width="80%" />
                                        </Box>
                                    )}

                                    <Typography sx={{ textAlign: 'left', marginLeft: '36px', fontSize: '23px' }}>
                                        <strong>{image.title}</strong>
                                    </Typography>
                                    <Typography sx={{ textAlign: 'left', margin: '10px 36px', fontSize: '14px', fontWeight: 500 }}>
                                        {image.subtitle}
                                    </Typography>
                                    <Typography sx={{ textAlign: 'left', marginLeft: '36px' }}>
                                        {image.des}
                                    </Typography>
                                </Box>

                            </SwiperSlide>

                        ))}
                        </Grid>
                    </Container>

                    </Swiper>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginRight: '25px' }}>
                        <Button onClick={goPrev} sx={{ minWidth: 'auto', border: '1px solid gray', borderRadius: '22px', color: 'gray', marginRight: '10px' }}>
                            <ArrowBackIosNewRoundedIcon />
                        </Button>
                        <Button onClick={goNext} sx={{ minWidth: 'auto', border: '1px solid gray', borderRadius: '22px', color: 'gray' }}>
                            <ArrowForwardIosRoundedIcon />
                        </Button>
                    </Box>
                </Grid>
            </Container>
        </>
    );
}

export default Homecard3;
