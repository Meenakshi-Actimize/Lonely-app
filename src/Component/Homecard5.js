import Imports from "../Import/Import";
import { Gethomecard3act } from "../redux/action/Action5";

// Fifth card component in home page

function Homecard5({ data, Gethomecard3act }) {

    const [hoveredCard, setHoveredCard] = Imports.useState(null);
    Imports.useEffect(() => {
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const getcard3data = await Imports.Gethomecards3();
                // Dispatch the fetched data using GetCardData
                Gethomecard3act(getcard3data);
                console.log('Hi got homecard3 data', getcard3data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []);

    return (
        <>
            <Imports.Container maxWidth='xl'>
                <Imports.Grid>
                    <Imports.Typography sx={{ textAlign: 'center', paddingTop: '90px' }}><span style={{ color: '#758090' }}>IN PARTNERSHIP</span>&nbsp;<span style={{ color: '#C9C2CC' }}>WITH</span> &nbsp;<span style={{ color: '#D7989A' }}>GETYOURGUIDE</span></Imports.Typography>
                    <Imports.Typography sx={{ textAlign: "center", paddingTop: '20px', fontSize: { lg: '60px', md: '60px', sm: '40px', xs: '20px' }, textDecoration: 'bold' }}>Book Popular activities in Bali</Imports.Typography>
                </Imports.Grid>
                <Imports.Grid container sx={{ margin: '40px 30px 0px 0px' }}>
                    {data && data.map((homecard3, index) => (
                        <Imports.Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            key={homecard3.title}
                            sx={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Imports.Box sx={{ width: { lg: '100%', md: '100%', sm: '100%', xs: '100%' } }}>
                                <img src={homecard3.img} alt="" width="100%" style={{ borderRadius: '16px', height: '290px' }} />
                                <Imports.Typography sx={{ color: '#0057D9', textDecoration: 'underline', fontSize: '18px' }}><strong>{homecard3.title}</strong></Imports.Typography>
                                <Imports.Grid sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                    <Imports.UpdateIcon sx={{ width: '5%' }} />
                                    <Imports.Typography >&nbsp;&nbsp;Duration: {homecard3.du}</Imports.Typography>
                                </Imports.Grid>
                                <Imports.Typography sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                    <Imports.StarIcon sx={{ color: 'yellow', width: '4%' }} />{homecard3.star}
                                </Imports.Typography>
                            </Imports.Box>
                        </Imports.Grid>

                    ))}

                </Imports.Grid>
                <Imports.Typography sx={{ color: 'gray', fontSize: '12px', margin: '15px 12px 0px 0px' }}>Powered by GetYourGuide.Join our travel affiliate program</Imports.Typography>

            </Imports.Container>


        </>

    )
}

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer5.data); // Add this console.log statement
    return {
        data: state.reducer5.data,
    };
};

const mapDispatchToProps = { Gethomecard3act }

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Homecard5);