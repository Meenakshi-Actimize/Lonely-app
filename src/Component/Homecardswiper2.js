import Imports from '../Import/Import';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Gethomecard4act } from '../redux/action/Action6';

function Homecardswiper2({data, Gethomecard4act}) {
    const [hoveredCard, setHoveredCard] = Imports.useState(null);
    Imports.useEffect(() => {
        const fetchData = async () => {
            try {
              // Call the async function to fetch data
              const getcard4data = await Imports.Gethomecards4();
              // Dispatch the fetched data using GetCardData
              Gethomecard4act(getcard4data);
              console.log('Hi got homecard4 data', getcard4data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          // Call the async function
          fetchData();
        }, []);

    // const images = [
    //     { img: 'https://lp-cms-production.imgix.net/2019-06/e9ac919055b124c2c1d7e657a26fa7e6-kuta-beach.jpg', title: 'Kuta & Southwest Beaches', showIcon:false}, 
    //     { img: 'https://lp-cms-production.imgix.net/2019-06/5775bb6de2bc380fe037f943b092ac14ec339950ddcea45488a9c50c9dc2d182.jpg', title: 'South Bali & the Islands', showIcon:false}, 
    //     { img: 'https://lp-cms-production.imgix.net/2019-06/d17e2f08a5c5c438d1b92080d9021b799cee122a102bce1edd87bf110ec6c061.jpg', title: 'Ubud Region', showIcon:false }, 
    //     { img: 'https://lp-cms-production.imgix.net/2023-02/shutterstockRF_755737138.jpg', title: 'Ubud', showIcon:false}, 
    //     { img: 'https://lonelyplanetstatic.imgix.net/marketing/placeholders/placeholder-destination.jpg', title: 'East Bali', showIcon:true }, 
    //     { img: 'https://lp-cms-production.imgix.net/2022-03/iStock-1337343641%20RFC.jpg', title: 'North Bali' ,showIcon:false},
    //     { img: 'https://lp-cms-production.imgix.net/2019-06/4ef6922e5b33070362868d21c0dee04b5184006a3b1ff4c1f0c321936205aa71.jpg', title: 'Central Mountains', showIcon:false }, 
    //     { img: 'https://lp-cms-production.imgix.net/2019-06/6860faa7c76b29cff3563d3dcff8f9af-pura-tanah-lot.jpg', title: 'West Bali' , showIcon:false}
    // ];

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
            <Imports.Container maxWidth="xl">
                <Imports.Grid container sx={{ marginTop: '350px' }}>
                    <Imports.Grid xs={12} sm={12} md={6} lg={6}>
                        <Imports.Typography sx={{ textAlign: 'left' }}>
                            <span style={{ color: '#C9C2CC' }}>05&nbsp;/&nbsp;GO</span>
                            <span style={{ color: '#758090' }}>BE</span>
                            <span style={{ color: '#D7989A' }}>YOND</span>
                            <Imports.Typography sx={{ fontSize: '55px', textAlign: 'left' }}>Bali and beyond</Imports.Typography>
                        </Imports.Typography>
                    </Imports.Grid>
                    <Imports.Grid xs={12} sm={12} md={6} lg={6} sx={{ textAlign: { lg: 'right', md: 'right', sm: 'center', xs: 'center' } }}>
                        <Imports.Typography>
                            <Imports.Button sx={{
                                border: '1px solid gray', color: 'black', textTransform: 'none',
                                marginTop: '50px', borderRadius: '19px', width: { lg: '18%', md: '30%', sm: '20%', xs: '45%' }
                            }}>
                                <strong>Beyond Bali</strong>
                            </Imports.Button>
                        </Imports.Typography>
                    </Imports.Grid>
                </Imports.Grid>
                <Imports.Box sx={{ position: 'relative', marginTop: '30px' }}>
                    <Imports.Swiper
                        spaceBetween={20}
                        navigation={false}
                        modules={[Imports.Pagination, Imports.Navigation]}
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
                        {data && data.map((homecard5, index) => (
                            <Imports.SwiperSlide key={index}>
                                <Imports.Box>
                                    <img src={homecard5.img} alt="1" style={{ width: '100%',  height: '350px', borderRadius: '16px' }} />
                                    {homecard5.showIcon && (
                                        <Imports.Box
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
                                        </Imports.Box>
                                    )}
                                    <Imports.Typography sx={{ textAlign: 'start', fontSize: '23px' }}>
                                        <strong>{homecard5.title}</strong>
                                    </Imports.Typography>
                                </Imports.Box>
                            </Imports.SwiperSlide>
                        ))}
                    </Imports.Swiper>
                    <Imports.Box sx={{ position: 'absolute',right:0, display: 'flex', flexDirection: 'row', marginRight:'25px'}}>
                        <Imports.Button onClick={goPrev} sx={{ minWidth: 'auto', border:'2px solid gray', borderRadius:'22px', color:'gray', marginRight: '10px' }}>
                            <Imports.ArrowBackIosNewRoundedIcon />
                        </Imports.Button>
                        <Imports.Button onClick={goNext} sx={{ minWidth: 'auto', border:'2px solid gray', borderRadius:'22px', color:'gray' }}>
                            <Imports.ArrowForwardIosRoundedIcon />
                        </Imports.Button>
                    </Imports.Box>
                </Imports.Box>
            </Imports.Container>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer6.data); // Add this console.log statement
    return {
        data: state.reducer6.data,
    };
};


const mapDispatchToProps = {Gethomecard4act}

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Homecardswiper2);