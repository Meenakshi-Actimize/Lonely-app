import Imports from '../Import/Import';
import '../App.css';
import 'swiper/css';

function ContinueSwiper() {

    const imageData = [{img:'https://www.elsewhere.io/webflow/images/press-bar/vogue-logo.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/authority-mag-logo.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/the-points-guy-logo.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/full-time-travel-logo.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/conde-nast-traveler-logo.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/washington-post-logo.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/usa-today-logo.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/well-good-logo.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/here-logo.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/skift.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/nyt-logo.svg'}, {img:'https://www.elsewhere.io/webflow/images/press-bar/forbes-logo.svg'}]
    return (
        <>
            <Imports.Grid container sx={{ marginTop: '45px' }}>
                <Imports.Swiper
                    loop={true}
                    centeredSlides={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={6}
                    spaceBetween={0}  // Add space between slides
                    modules={[Imports.Autoplay]}
                     // Adjusted width to 100% for full-width view
                >
                    {imageData.map((item) => (
                        <Imports.SwiperSlide sx={{ display: 'flex', alignItems:'center', justifyContent:'center'}}>
                        <img src={item.img} alt="image"  width={'50%'}/>
                    </Imports.SwiperSlide>

                    )
                )}
                    
                  
                </Imports.Swiper>
            </Imports.Grid>
        </>
    );
}

export default ContinueSwiper;
