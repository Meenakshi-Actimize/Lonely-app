import Imports from '../Import/Import';
import { Gethomecard } from '../redux/action/Action3';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Homecard1({data, Gethomecard}) {
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
    
    // const images = [
    //     {
    //         img: 'https://lonelyplanetstatic.imgix.net/marketing/placeholders/placeholder-attractions.jpg',
    //         title: 'Ubud Market',
    //         subtitle: 'CENTRAL MOUNTAINS',
    //         des: 'Newly developed as a tourist attraction in early 2018, the falls here are among the best on Bali. It’s about a 20-minute walk from the car park; a 500m…',
    //         showIcon: true,
    //     },
    //     {
    //         img: 'https://lp-cms-production.imgix.net/2019-06/40d4f378a2dacf02a4e636bb2b214abb-lpl-agung_rai_museum_of_art_1.jpg',
    //         title: 'Agung Rai Museum of Art',
    //         subtitle: 'UBUD',
    //         des: 'If you only visit one museum in Ubud, make it this one. Founder Agung Rai built his fortune selling Balinese artwork to foreigners in the 1970s, and…',
    //         showIcon: false,
    //     },
    //     {
    //         img: 'https://lp-cms-production.imgix.net/2020-11/shutterstockRF_1153729063.jpg',
    //         title: 'Sekumpul Waterfall',
    //         subtitle: 'SINGARAJA',
    //         des: 'Sitting 18km southeast of Singaraja, some six or seven separate waterfalls – all fed by upland streams – pour up to 80m over cliffs in a verdant bamboo…',
    //         showIcon: false,
    //     },
    //     {
    //         img: 'https://lp-cms-production.imgix.net/2020-11/GettyRF_629296818.jpg',
    //         title: 'Pura Besakih',
    //         subtitle: 'EAST BAL',
    //         des: 'Perched nearly 1000m up the side of Gunung Agung, this is Balis most important Hindu temple. The site encompasses 23 separate but related temples, with…',
    //         showIcon: false,
    //     },
    //     {
    //         img: 'https://lp-cms-production.imgix.net/2020-11/GettyRF_161822191.jpg',
    //         title: 'Pura Luhur Ulu Watu',
    //         subtitle: 'BUKIT PENINSULA',
    //         des: 'This important temple is perched precipitously on the southwestern tip of the peninsula, atop sheer cliffs that drop straight into the ceaseless surf…',
    //         showIcon: false,
    //     },
    //     {
    //         img: 'https://lp-cms-production.imgix.net/2019-06/5e98785eaffaca67dfc656d08613c816-lpl-neka_art_museum_1.jpg',
    //         title: 'Neka Art Museum',
    //         subtitle: 'UBUD',
    //         des: 'Offering an excellent introduction to Balinese art, the top-notch collection is displayed in a series of pavilions and halls. Dont miss the multiroom…',
    //         showIcon: false,
    //     },
    //     {
    //         img: 'https://lp-cms-production.imgix.net/2019-06/3ec1ae3861914e8a493a8c6a2c98d03b-pura-taman-ayun.jpg',
    //         title: 'Pura Taman Ayun',
    //         subtitle: 'WEST BALI',
    //         des: 'Dont miss one of the top temples on Bali, a serene place of enveloping calm. The huge royal water temple of Pura Taman Ayun, surrounded by a wide,…',
    //         showIcon: false,
    //     },
    //     {
    //         img: 'https://lp-cms-production.imgix.net/2019-06/531368295_full.jpg',
    //         title: 'Puri Agung Semarapura',
    //         subtitle: 'EAST BALI',
    //         des: 'Built when the Dewa Agung dynasty moved here in 1710, this palace compound was laid out as a large square, believed to be in the form of a mandala, with…',
    //         showIcon: false,
    //     },
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
        <Imports.Container maxWidth="xl">
            <Imports.Grid container sx={{ backgroundColor: '#E0EEFA', height: '1000px', borderRadius: '14px' }}>
                <Imports.Box sx={{ margin: '30px' }}>
                    <Imports.Typography>
                        <span style={{ color: '#758090' }}>01 / A</span>
                        <span style={{ color: '#C9C2CC' }}>TT</span>
                        <span style={{ color: '#D7989A' }}>RACTIONS</span>
                    </Imports.Typography>
                    <Imports.Typography sx={{ marginTop: '15px', fontSize:{lg:'65px', md:'55px', sm:'40px', xs:'24px'} }}>Must-see attractions</Imports.Typography>
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
                            <Imports.Grid container  sx={{ position: 'relative', justifyContent:'center', alignItems:'center' }}>
                                <img src={homedata.img} alt={homedata.title} style={{ width: '90%', height: '400px', borderRadius:'16px' }} />
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
                                <Imports.Typography sx={{  marginLeft:'25px', fontSize: '23px', fontWeight:'bold' }}>
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
                    <Imports.Button sx={{ border: '1px solid gray', borderRadius: '16px', textTransform: 'none', color: 'black', width: {lg:'14%', md:'20%', sm:'25%', xs:'0%'}, height: '35px', marginRight:'150px', marginTop:'13px', display:{lg:'block', md:'block', sm:'block', xs:'none'} }}>
                        <strong>View more attractions</strong>
                    </Imports.Button>
                    <Imports.Box sx={{ position: 'absolute', right: 45, display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                        <Imports.Button onClick={goPrev} sx={{ minWidth: 'auto', border:'2px solid gray', borderRadius:'22px', color:'gray', marginRight: '10px' }}>
                            <Imports.ArrowBackIosNewRoundedIcon />
                        </Imports.Button>
                        <Imports.Button onClick={goNext} sx={{ minWidth: 'auto', border:'2px solid gray', borderRadius:'22px', color:'gray' }}>
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


const mapDispatchToProps = {Gethomecard}

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Homecard1);
