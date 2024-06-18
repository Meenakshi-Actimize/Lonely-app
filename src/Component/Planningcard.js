
import '../App.css';
import 'swiper/css';
import Imports from '../Import/Import';


function Planningcard() {
    return (
        <>

            <Imports.Container maxWidth="lg" sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '30px', marginBottom: '80px' }}>
                <Imports.Grid container>
                <Imports.Grid item xs={6} sm={6} md={6} lg={6}>
                <img src="https://www.elsewhere.io/webflow/images/operator1.png" alt="" width="100%" style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px', marginLeft:'45px' }} />
                <Imports.Typography className="text-overlay1" sx={{ position: 'absolute', bottom: '20px', left: '85px', top: '1050px', right: '8px', padding: '20px 40px', borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', position: 'absolute', backgroundColor: 'white', width: '15%', height: '70px', textAlign: 'left', fontFamily: 'Monospace', fontWeight: 'bold', fontSize: {lg:'18px', md:'14px'}, display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>Why trust Gary in Florida to plan your trip to Portugal?</Imports.Typography>
                </Imports.Grid>
                <Imports.Grid item xs={6} sm={6} md={6} lg={6} sx={{marginTop: {lg:'60px', md:'60px', sm:'0px', xs:'0px'}}}>

                <Imports.Swiper
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
                    modules={[Imports.Autoplay, Imports.EffectFade]}
                    style={{ width: '100%', height: 'auto', borderTopRightRadius: '16px', borderBottomRightRadius: '16px', marginLeft:'-45px'}}>
                    <Imports.SwiperSlide className="swiper-slide-custom">
                        <Imports.Typography sx={{
                            bgcolor: '#FFFFFF', color: '#A200ED', fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '20px', width: '30%', borderTopRightRadius: '16px',
                            borderBottomRightRadius: '16px',
                            borderBottomLeftRadius: '16px',
                            border: '1px solid',
                            padding: '16px', position: 'absolute', top: '50%', right: '8px', display:{lg:'block', md:'block', sm:'none', xs:'none'}
                        }}>When Tiago in Lisbon knows best.</Imports.Typography>
                        <img src="https://www.elsewhere.io/webflow/images/local-expert-portugal.png" alt="Portugal Expert" width="100%" />
                    </Imports.SwiperSlide>
                    <Imports.SwiperSlide className="swiper-slide-custom">
                        <Imports.Typography sx={{
                            bgcolor: '#FFFFFF', color: '#A200ED', fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '20px', width: '30%', borderTopRightRadius: '16px',
                            borderBottomRightRadius: '16px',
                            borderBottomLeftRadius: '16px',
                            border: '1px solid',
                            padding: '16px', position: 'absolute', top: '50%', right: '4px', display:{lg:'block', md:'block', sm:'none', xs:'none'}
                        }}>When Lucas in Buenos Aires knows best.</Imports.Typography>
                        <img src="https://www.elsewhere.io/webflow/images/local-expert-argentina.png" alt="Argentina Expert" width="100%"/>
                    </Imports.SwiperSlide>
                    <Imports.SwiperSlide className="swiper-slide-custom">
                        <Imports.Typography sx={{
                            bgcolor: '#FFFFFF', color: '#A200ED', fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '20px', width: '30%', borderTopRightRadius: '16px',
                            borderBottomRightRadius: '16px',
                            borderBottomLeftRadius: '16px',
                            border: '1px solid',
                            padding: '16px', position: 'absolute', top: '50%', right: '8px', display:{lg:'block', md:'block', sm:'none', xs:'none'}
                        }}>When Angela in Johannesburg knows best.</Imports.Typography>


                        <img src="https://www.elsewhere.io/webflow/images/local-expert-south-africa.png" alt="South Africa Expert" width="100%"/>
                    </Imports.SwiperSlide>
                    <Imports.SwiperSlide className="swiper-slide-custom">
                        <Imports.Typography sx={{
                            bgcolor: '#FFFFFF', color: '#A200ED', fontFamily: 'Monospace', fontWeight: 'bold', fontSize: '20px', width: '30%', borderTopRightRadius: '16px',
                            borderBottomRightRadius: '16px',
                            borderBottomLeftRadius: '16px',
                            border: '1px solid',
                            padding: '16px', position: 'absolute', top: '50%', right: '8px', display:{lg:'block', md:'block', sm:'none', xs:'none'}
                        }}>When Zoloo in Ulaanbaatar knows best.</Imports.Typography>
                        <img src="https://www.elsewhere.io/webflow/images/local-expert-mongolia.png" alt="Mongolia Expert" width="100%"/>
                    </Imports.SwiperSlide>

                </Imports.Swiper>
                </Imports.Grid>
                </Imports.Grid>
            </Imports.Container>




        </>
    )
}
export default Planningcard;