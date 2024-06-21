import Imports from '../Import/Import';
import { Gethomecard } from '../redux/action/Action3';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// First card in home page


function Homecard1({ data, Gethomecard }) {
    const [hoveredCard, setHoveredCard] = Imports.useState(null);
    Imports.useEffect(() => {
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const getcarddata = await Imports.Gethomecards();
                // Dispatch the fetched data using GetCardData
                Gethomecard(getcarddata);
                console.log('Hi got homecard data', getcarddata);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []);

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
        <Imports.Container maxWidth="xl">
            <Imports.Grid container sx={{ backgroundColor: '#E0EEFA', height: '1000px', borderRadius: '14px' }}>
                <Imports.Box sx={{ margin: '30px' }}>
                    <Imports.Typography>
                        <span style={{ color: '#758090' }}>01 / A</span>
                        <span style={{ color: '#C9C2CC' }}>TT</span>
                        <span style={{ color: '#D7989A' }}>RACTIONS</span>
                    </Imports.Typography>
                    <Imports.Typography sx={{ marginTop: '15px', fontSize: { lg: '65px', md: '55px', sm: '40px', xs: '24px' } }}>Must-see attractions</Imports.Typography>
                </Imports.Box>
                <Imports.Swiper
                    spaceBetween={20}
                    navigation={false}
                    modules={[Imports.Pagination, Imports.Navigation]}
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
                    {data && data.map((homedata, index) => (
                        <Imports.SwiperSlide key={homedata.title}>
                            <Imports.Container maxWidth="xl">
                                <Imports.Grid container sx={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={homedata.img} alt={homedata.title} style={{ width: '90%', height: '400px', borderRadius: '16px' }} />
                                    {homedata.showIcon && (
                                        <Imports.Box
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
                                        </Imports.Box>
                                    )}
                                    <Imports.Box
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
                                        <Imports.BookmarkBorderIcon sx={{ fontSize: 20 }} />
                                    </Imports.Box>
                                    <Imports.Box
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
                                    </Imports.Box>
                                    <Imports.Grid>
                                        <Imports.Typography sx={{ marginLeft: '25px', fontSize: '23px', fontWeight: 'bold' }}>
                                            {homedata.title}
                                        </Imports.Typography>
                                        <Imports.Typography sx={{ marginLeft: '25px', fontSize: '14px', fontWeight: 500 }}>
                                            {homedata.subtitle}
                                        </Imports.Typography>
                                        <Imports.Typography sx={{ marginLeft: '25px' }}>
                                            {homedata.des}
                                        </Imports.Typography>
                                    </Imports.Grid>
                                </Imports.Grid>
                            </Imports.Container>
                        </Imports.SwiperSlide>

                    ))}
                </Imports.Swiper>

                <Imports.Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                        marginRight: '30px',
                        marginTop: '10px',
                    }}
                >
                    <Imports.Button sx={{ border: '1px solid gray', borderRadius: '16px', textTransform: 'none', color: 'black', width: { lg: '14%', md: '20%', sm: '25%', xs: '0%' }, height: '35px', marginRight: '150px', marginTop: '13px', display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>
                        <strong>View more attractions</strong>
                    </Imports.Button>
                    <Imports.Box sx={{ position: 'absolute', right: 45, display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                        <Imports.Button onClick={goPrev} sx={{ minWidth: 'auto', border: '2px solid gray', borderRadius: '22px', color: 'gray', marginRight: '10px' }}>
                            <Imports.ArrowBackIosNewRoundedIcon />
                        </Imports.Button>
                        <Imports.Button onClick={goNext} sx={{ minWidth: 'auto', border: '2px solid gray', borderRadius: '22px', color: 'gray' }}>
                            <Imports.ArrowForwardIosRoundedIcon />
                        </Imports.Button>
                    </Imports.Box>
                </Imports.Box>
            </Imports.Grid>
        </Imports.Container>
    );
}

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer3.data); // Add this console.log statement
    return {
        data: state.reducer3.data,
    };
};


const mapDispatchToProps = { Gethomecard }

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Homecard1);
