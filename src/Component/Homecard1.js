import * as React from 'react';
import { Grid, Typography, Container, Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function Homecard1() {
    const images = [
        {
            img: 'https://lonelyplanetstatic.imgix.net/marketing/placeholders/placeholder-attractions.jpg',
            title: 'Ubud Market',
            subtitle: 'CENTRAL MOUNTAINS',
            des: 'Newly developed as a tourist attraction in early 2018, the falls here are among the best on Bali. It’s about a 20-minute walk from the car park; a 500m…',
            showIcon: true,
        },
        {
            img: 'https://lp-cms-production.imgix.net/2019-06/40d4f378a2dacf02a4e636bb2b214abb-lpl-agung_rai_museum_of_art_1.jpg',
            title: 'Agung Rai Museum of Art',
            subtitle: 'UBUD',
            des: 'If you only visit one museum in Ubud, make it this one. Founder Agung Rai built his fortune selling Balinese artwork to foreigners in the 1970s, and…',
            showIcon: false,
        },
        {
            img: 'https://lp-cms-production.imgix.net/2020-11/shutterstockRF_1153729063.jpg',
            title: 'Sekumpul Waterfall',
            subtitle: 'SINGARAJA',
            des: 'Sitting 18km southeast of Singaraja, some six or seven separate waterfalls – all fed by upland streams – pour up to 80m over cliffs in a verdant bamboo…',
            showIcon: false,
        },
        {
            img: 'https://lp-cms-production.imgix.net/2020-11/GettyRF_629296818.jpg',
            title: 'Pura Besakih',
            subtitle: 'EAST BAL',
            des: 'Perched nearly 1000m up the side of Gunung Agung, this is Balis most important Hindu temple. The site encompasses 23 separate but related temples, with…',
            showIcon: false,
        },
        {
            img: 'https://lp-cms-production.imgix.net/2020-11/GettyRF_161822191.jpg',
            title: 'Pura Luhur Ulu Watu',
            subtitle: 'BUKIT PENINSULA',
            des: 'This important temple is perched precipitously on the southwestern tip of the peninsula, atop sheer cliffs that drop straight into the ceaseless surf…',
            showIcon: false,
        },
        {
            img: 'https://lp-cms-production.imgix.net/2019-06/5e98785eaffaca67dfc656d08613c816-lpl-neka_art_museum_1.jpg',
            title: 'Neka Art Museum',
            subtitle: 'UBUD',
            des: 'Offering an excellent introduction to Balinese art, the top-notch collection is displayed in a series of pavilions and halls. Dont miss the multiroom…',
            showIcon: false,
        },
        {
            img: 'https://lp-cms-production.imgix.net/2019-06/3ec1ae3861914e8a493a8c6a2c98d03b-pura-taman-ayun.jpg',
            title: 'Pura Taman Ayun',
            subtitle: 'WEST BALI',
            des: 'Dont miss one of the top temples on Bali, a serene place of enveloping calm. The huge royal water temple of Pura Taman Ayun, surrounded by a wide,…',
            showIcon: false,
        },
        {
            img: 'https://lp-cms-production.imgix.net/2019-06/531368295_full.jpg',
            title: 'Puri Agung Semarapura',
            subtitle: 'EAST BALI',
            des: 'Built when the Dewa Agung dynasty moved here in 1710, this palace compound was laid out as a large square, believed to be in the form of a mandala, with…',
            showIcon: false,
        },
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
        <Container maxWidth="xl">
            <Grid container sx={{ backgroundColor: '#E0EEFA', height: '1000px', borderRadius: '14px' }}>
                <Box sx={{ margin: '30px' }}>
                    <Typography>
                        <span style={{ color: '#758090' }}>01 / A</span>
                        <span style={{ color: '#C9C2CC' }}>TT</span>
                        <span style={{ color: '#D7989A' }}>RACTIONS</span>
                    </Typography>
                    <Typography sx={{ marginTop: '15px', fontSize:{lg:'65px', md:'55px', sm:'40px', xs:'24px'} }}>Must-see attractions</Typography>
                </Box>
                <Swiper
                    spaceBetween={20}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        1440: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 2,
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
                    {images.map((image) => (
                        <SwiperSlide key={image.title}>
                            <Container maxWidth="xl">
                            <Grid container  sx={{ position: 'relative', justifyContent:'center', alignItems:'center' }}>
                                <img src={image.img} alt={image.title} style={{ width: '90%', height: '400px', borderRadius:'16px' }} />
                                {image.showIcon && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '35%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            zIndex: 1,
                                            color: 'white',
                                        }}
                                    >
                                        <img src="./images/home.png" width="80%" alt="Home Icon" />
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
                                        marginTop: '18px',
                                    }}
                                >
                                    <BookmarkBorderIcon sx={{ fontSize: 20 }} />
                                </Box>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 45,
                                        zIndex: 1,
                                        color: 'white',
                                        lineHeight: 0.45,
                                        marginTop: '6px',
                                    }}
                                >
                                    <img src="./images/topchoice.png" width="75%" alt="Top Choice" />
                                </Box>
                                <Typography sx={{ textAlign: 'start', marginLeft: '15px', fontSize: '23px' }}>
                                    <strong>{image.title}</strong>
                                </Typography>
                                <Typography sx={{ textAlign: 'start', margin: '10px 36px', fontSize: '14px', fontWeight: 500 }}>
                                    {image.subtitle}
                                </Typography>
                                <Typography sx={{ textAlign: 'start', marginLeft: '36px' }}>
                                    {image.des}
                                </Typography>
                            </Grid>
                            </Container>
                        </SwiperSlide>

                    ))}
                </Swiper>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                        marginRight: '30px',
                        marginTop: '10px',
                    }}
                >
                    <Button sx={{ border: '1px solid gray', borderRadius: '16px', textTransform: 'none', color: 'black', width: {lg:'14%', md:'20%', sm:'25%', xs:'0%'}, height: '35px', marginRight:'150px', marginTop:'13px', display:{lg:'block', md:'block', sm:'block', xs:'none'} }}>
                        <strong>View more attractions</strong>
                    </Button>
                    <Box sx={{ position: 'absolute', right: 45, display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                        <Button onClick={goPrev} sx={{ minWidth: 'auto', border:'2px solid gray', borderRadius:'22px', color:'gray', marginRight: '10px' }}>
                            <ArrowBackIosNewRoundedIcon />
                        </Button>
                        <Button onClick={goNext} sx={{ minWidth: 'auto', border:'2px solid gray', borderRadius:'22px', color:'gray' }}>
                            <ArrowForwardIosRoundedIcon />
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Container>
    );
}

export default Homecard1;
