import Imports from "../Import/Import";
import 'swiper/css/bundle'; // Import Swiper bundle CSS


// Image and swiper in flash page


Imports.SwiperCore.use([Imports.Navigation]);

function Cardswiper() {

    const photo = [{ img: 'https://lp-cms-production.imgix.net/2024-04/copenhagen-iStock-1327471226-rfc.jpeg?auto=format&w=140&h=140&fit=crop&q=75', title: 'PUBLIC TRANSPORT', subtitle: '15 tips for travelling to Copenhangen on a budget', des: 'Apr 30, 2024 • 6 min read', icon: Imports.BookmarkBorderRoundedIcon }, { img: 'https://lp-cms-production.imgix.net/2024-06/Azores-sao-miguel-erin-lenczycki-IMG6816.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'PUBLIC TRANSPORT', subtitle: '15 tips for travelling to Copenhangen on a budget', des: 'Apr 30, 2024 • 6 min read', icon: Imports.BookmarkBorderRoundedIcon }, { img: 'https://lp-cms-production.imgix.net/2024-06/IMG2139.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'PUBLIC TRANSPORT', subtitle: '15 tips for travelling to Copenhangen on a budget', des: 'Apr 30, 2024 • 6 min read', icon: Imports.BookmarkBorderRoundedIcon }, { img: 'https://lp-cms-production.imgix.net/2024-06/shutterstock1101553775.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'PUBLIC TRANSPORT', subtitle: '15 tips for travelling to Copenhangen on a budget', des: 'Apr 30, 2024 • 6 min read', icon: Imports.BookmarkBorderRoundedIcon }]


    const swiperRef = Imports.React.useRef(null);

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
            <Imports.Container maxWidth="xl" sx={{ textAlign: 'center' }}>
                <Imports.Grid container sx={{ textAlign: 'center' }}>
                    <Imports.Grid item xs={12} sm={12} md={7} lg={7}>
                        <Imports.Box position="relative">

                            <img src="https://lp-cms-production.imgix.net/2024-04/GettyImages-949207386.jpeg?auto=format&w=780&h=425&fit=crop&q=75" alt="" width="100%" style={{ borderRadius: '16px', height: '670px' }} />
                            <Imports.BookmarkBorderRoundedIcon sx={{
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

                            <Imports.Typography
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
                                    display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' },

                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <strong><span sx={{ fontSize: { lg: '30px', md: '20px', sm: '10px', xs: '5px' } }}>Activities</span></strong> <br />
                                <strong><span sx={{ fontSize: { lg: '40px', md: '30px', sm: '20px', xs: '10px' } }}>The top 10 things do in the Netherlands</span></strong> <br />
                                <strong><span sx={{ fontSize: { lg: '30px', md: '20px', sm: '10px', xs: '5px' } }}>May 1, 2024 &#x2022; 6 min read</span></strong> <br />
                                <strong><span sx={{ fontSize: { lg: '30px', md: '20px', sm: '10px', xs: '5px' } }}>Follow this guide to the most unique and memorable experiences to be</span></strong> <br />
                                <strong><span sx={{ fontSize: { lg: '30px', md: '20px', sm: '10px', xs: '5px' } }}>had in the  Netherlands</span></strong>



                            </Imports.Typography>
                        </Imports.Box>
                    </Imports.Grid>

                    <Imports.Grid item xs={12} sm={12} md={5} lg={5}>
                        <Imports.Container maxWidth="xl" >

                            <Imports.Swiper ref={swiperRef} >


                                    <Imports.SwiperSlide>
                                    {photo.map((item, index) => (


                                        <Imports.Grid container maxWidth="xl" sx={{ backgroundColor: '#F0F7FC', borderRadius: '16px', marginBottom: '17px' }}>


                                            <Imports.Grid item xs={4} sx={{ marginBottom: '20px' }}>

                                                <img src={item.img} alt="" width="65%" style={{ borderRadius: '30px', paddingTop: '20px' }} />

                                            </Imports.Grid>

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


                                            <Imports.Grid item xs={8} sx={{ marginTop: '20px' }}>
                                                <Imports.Typography sx={{ textAlign: 'left' }}>
                                                    {item.title}
                                                </Imports.Typography>
                                                <Imports.Typography sx={{ textAlign: 'left' }}>
                                                    {item.subtitle}
                                                </Imports.Typography>
                                                <Imports.Typography sx={{ textAlign: 'left' }}>
                                                    {item.des}
                                                </Imports.Typography>
                                            </Imports.Grid>
                                        </Imports.Grid>
                                        ))}


                                    </Imports.SwiperSlide>
                                    <Imports.SwiperSlide>
                                    {photo.map((item, index) => (


                                        <Imports.Grid container maxWidth="xl" sx={{ backgroundColor: '#F0F7FC', borderRadius: '16px', marginBottom: '17px' }}>


                                            <Imports.Grid item xs={4} sx={{ marginBottom: '20px' }}>

                                                <img src={item.img} alt="" width="60%" style={{ borderRadius: '30px', paddingTop: '20px' }} />

                                            </Imports.Grid>

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


                                            <Imports.Grid item xs={8} sx={{ marginTop: '20px' }}>
                                                <Imports.Typography sx={{ textAlign: 'left' }}>
                                                    {item.title}
                                                </Imports.Typography>
                                                <Imports.Typography sx={{ textAlign: 'left' }}>
                                                    {item.subtitle}
                                                </Imports.Typography>
                                                <Imports.Typography sx={{ textAlign: 'left' }}>
                                                    {item.des}
                                                </Imports.Typography>
                                            </Imports.Grid>
                                        </Imports.Grid>
                                        ))}


                                    </Imports.SwiperSlide>
                                    <Imports.SwiperSlide>
                                    {photo.map((item, index) => (


                                        <Imports.Grid container maxWidth="xl" sx={{ backgroundColor: '#F0F7FC', borderRadius: '16px', marginBottom: '17px' }}>


                                            <Imports.Grid item xs={4} sx={{ marginBottom: '20px' }}>

                                                <img src={item.img} alt="" width="60%" style={{ borderRadius: '30px', paddingTop: '20px' }} />

                                            </Imports.Grid>

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


                                            <Imports.Grid item xs={8} sx={{ marginTop: '20px' }}>
                                                <Imports.Typography sx={{ textAlign: 'left' }}>
                                                    {item.title}
                                                </Imports.Typography>
                                                <Imports.Typography sx={{ textAlign: 'left' }}>
                                                    {item.subtitle}
                                                </Imports.Typography>
                                                <Imports.Typography sx={{ textAlign: 'left' }}>
                                                    {item.des}
                                                </Imports.Typography>
                                            </Imports.Grid>
                                        </Imports.Grid>
                                        ))}


                                    </Imports.SwiperSlide>
                               


                                <Imports.Button sx={{ left: 0, borderRadius: '18px', marginLeft: '8px', border: '1px solid gray' }}><Imports.ArrowBackIosNewRoundedIcon onClick={goPrev} /></Imports.Button>
                                <Imports.Button sx={{ right: 0, borderRadius: '18px', border: '1px solid gray' }}><Imports.ArrowForwardIosRoundedIcon onClick={goNext} /></Imports.Button>
                            </Imports.Swiper>


                        </Imports.Container>
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Container>


        </>
    )
}
export default Cardswiper;