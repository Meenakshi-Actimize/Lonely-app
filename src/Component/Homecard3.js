import Imports from '../Import/Import';
import { Gethomecard2act } from '../redux/action/Action4';

// Third card component in home page


function Homecard3({ data, Gethomecard2act }) {
    const [hoveredCard, setHoveredCard] = Imports.useState(null);
    Imports.useEffect(() => {
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const getcard2data = await Imports.Gethomecards2();
                // Dispatch the fetched data using GetCardData
                Gethomecard2act(getcard2data);
                console.log('Hi got homecard data', getcard2data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []);

    //     { img: 'https://lonelyplanetstatic.imgix.net/marketing/placeholders/placeholder-shopping.jpg?auto=format&fit=crop&ar=1:1&q=75&w=640', title: 'Ubud Market', subtitle: 'UBUD', des: 'The large Ubud Market is your one-stop shop for kitschy souvenirs, clothing and presents for back home. Its inside a large…', showIcon: true, showIcon2: false },
    //     { img: 'https://lp-cms-production.imgix.net/2019-06/fdbafc5f268ee0991ec4b9d415cd3582-lpl-pura_gunung_lebah_1.jpg?auto=format&fit=crop&ar=1:1&q=75&w=640', title: 'Pura Gunung Lebah', subtitle: 'UBUD', des: 'This old temple, which sits on a jutting rock at the confluence of two tributaries of Sungai Cerik (campuan means two…', showIcon: false, showIcon2: false },
    //     { img: 'https://lp-cms-production.imgix.net/2019-06/dddcb82a3f9096504274908218e5c350-petulu.jpg?auto=format&fit=crop&ar=1:1&q=75&w=640', title: 'Petulu', subtitle: 'UBUD', des: 'Every evening beginning after 5pm, up to 20,000 big herons fly in to Petulu, a village about 2.5km north of Jl Raya…', showIcon: false, showIcon2: false },
    //     { img: 'https://lonelyplanetstatic.imgix.net/marketing/placeholders/placeholder-restaurants.jpg?auto=format&fit=crop&ar=1:1&q=75&w=640', title: 'Pasar Sindhu Night Market', subtitle: 'SANUR', des: 'This market sells fresh vegetables, dried fish, pungent spices, various household goods and many tempting Balinese…', showIcon: false, showIcon2: true }
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
                <Imports.Grid>
                    <Imports.Typography sx={{ fontSize: { lg: '35px', md: '32px', sm: '23px', xs: '17px' }, marginLeft: '25px', textDecoration: 'underline', textDecorationColor: '#0057D9' }}>
                        <strong>14 free things to do in Bali for paradise without the price tag</strong>
                    </Imports.Typography>
                    <Imports.Typography sx={{ marginLeft: '25px' }}>
                        Curated by  <span style={{ color: '#0057D9' }}>Anita Surewicz, Mark Eveleigh</span>
                    </Imports.Typography>
                </Imports.Grid>
                {/* Swiper */}
                <Imports.Grid sx={{ marginTop: '30px' }}>
                    <Imports.Swiper
                        ref={swiperRef}
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
                    >
                        <Imports.Container maxWidth="xl">
                            <Imports.Grid container>

                                {data && data.map((homecard2, index) => (
                                    <Imports.SwiperSlide key={homecard2.title}>
                                        <Imports.Box position="relative">
                                            <img src={homecard2.img} alt={homecard2.title} style={{ width: '100%', height: '300px', borderRadius: '16px' }} />
                                            {homecard2.showIcon && (
                                                <Imports.Box
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
                                                    marginTop: '18px'
                                                }}
                                            >
                                                <Imports.BookmarkBorderIcon sx={{ fontSize: 20 }} />
                                            </Imports.Box>
                                            {homecard2.showIcon2 && (
                                                <Imports.Box
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
                                                </Imports.Box>
                                            )}
                                            <Imports.Typography sx={{ textAlign: 'left', fontSize: '23px' }}>
                                                <strong>{homecard2.title}</strong>
                                            </Imports.Typography>

                                            <Imports.Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: 500 }}>
                                                {homecard2.subtitle}
                                            </Imports.Typography>
                                            <Imports.Typography sx={{ textAlign: 'left' }}>
                                                {homecard2.des}
                                            </Imports.Typography>
                                        </Imports.Box>

                                    </Imports.SwiperSlide>

                                ))}
                            </Imports.Grid>
                        </Imports.Container>

                    </Imports.Swiper>
                    <Imports.Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginRight: '25px' }}>
                        <Imports.Button onClick={goPrev} sx={{ minWidth: 'auto', border: '1px solid gray', borderRadius: '22px', color: 'gray', marginRight: '10px' }}>
                            <Imports.ArrowBackIosNewRoundedIcon />
                        </Imports.Button>
                        <Imports.Button onClick={goNext} sx={{ minWidth: 'auto', border: '1px solid gray', borderRadius: '22px', color: 'gray' }}>
                            <Imports.ArrowForwardIosRoundedIcon />
                        </Imports.Button>
                    </Imports.Box>
                </Imports.Grid>
            </Imports.Container>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer4.data); // Add this console.log statement
    return {
        data: state.reducer4.data,
    };
};


const mapDispatchToProps = { Gethomecard2act }

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Homecard3);