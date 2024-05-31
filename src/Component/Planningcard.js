import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import '../App.css';
import 'swiper/css';


function Planningcard() {
    return (
        <>

            <Container maxWidth="lg" sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '30px', padding: 0, marginBottom: '80px' }}>
                
                <img src="https://www.elsewhere.io/webflow/images/operator1.png" alt="" width="54%" style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }} />
                <Typography className="text-overlay1" sx={{ position: 'absolute', bottom: '20px', left: '85px', top: '1050px', right: '8px', padding: '20px 40px', borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', position: 'absolute', backgroundColor: 'white', width: '15%', height: '70px', textAlign: 'left', fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '18px' }}>Why trust Gary in Florida to plan your trip to Portugal?</Typography>
                <Swiper
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true,
                    }}
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[Autoplay, EffectFade]}
                    style={{ width: '100%', height: 'auto', borderTopRightRadius: '16px', borderBottomRightRadius: '16px', marginLeft: '-88px', marginTop: '60px' }}
                >
                    <SwiperSlide className="swiper-slide-custom">
                        <Typography sx={{
                            bgcolor: '#FFFFFF', color: '#A200ED', fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '20px', width: '30%', borderTopRightRadius: '16px',
                            borderBottomRightRadius: '16px',
                            borderBottomLeftRadius: '16px',
                            border: '1px solid',
                            padding: '16px', position: 'absolute', top: '50%', right: '8px'
                        }}>When Tiago in Lisbon knows best.</Typography>
                        <img src="https://www.elsewhere.io/webflow/images/local-expert-portugal.png" alt="Portugal Expert" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-custom">
                        <Typography sx={{
                            bgcolor: '#FFFFFF', color: '#A200ED', fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '20px', width: '30%', borderTopRightRadius: '16px',
                            borderBottomRightRadius: '16px',
                            borderBottomLeftRadius: '16px',
                            border: '1px solid',
                            padding: '16px', position: 'absolute', top: '50%', right: '4px'
                        }}>When Lucas in Buenos Aires knows best.</Typography>
                        <img src="https://www.elsewhere.io/webflow/images/local-expert-argentina.png" alt="Argentina Expert" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-custom">
                        <Typography sx={{
                            bgcolor: '#FFFFFF', color: '#A200ED', fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '20px', width: '30%', borderTopRightRadius: '16px',
                            borderBottomRightRadius: '16px',
                            borderBottomLeftRadius: '16px',
                            border: '1px solid',
                            padding: '16px', position: 'absolute', top: '50%', right: '8px'
                        }}>When Angela in Johannesburg knows best.</Typography>


                        <img src="https://www.elsewhere.io/webflow/images/local-expert-south-africa.png" alt="South Africa Expert" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-custom">
                        <Typography sx={{
                            bgcolor: '#FFFFFF', color: '#A200ED', fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '20px', width: '30%', borderTopRightRadius: '16px',
                            borderBottomRightRadius: '16px',
                            borderBottomLeftRadius: '16px',
                            border: '1px solid',
                            padding: '16px', position: 'absolute', top: '50%', right: '8px'
                        }}>When Zoloo in Ulaanbaatar knows best.</Typography>
                        <img src="https://www.elsewhere.io/webflow/images/local-expert-mongolia.png" alt="Mongolia Expert" />
                    </SwiperSlide>

                </Swiper>
            </Container>




        </>
    )
}
export default Planningcard;