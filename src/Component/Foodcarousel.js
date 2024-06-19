import Imports from "../Import/Import";
import { Getfood1act } from "../redux/action/Action9";

function Foodcarousel({ data, Getfood1act }) {
    Imports.useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const gettingfood = await Imports.Getfood1api();
                // Dispatch the fetched data using GetCardData
                Getfood1act(gettingfood);
                console.log('Hi success plan', gettingfood);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []);

    return (
        <>
            <Imports.Grid container>
                <Imports.Typography sx={{ position: 'absolute', top: { lg: 300, md: 200, sm: 180, xs: 110 }, left: { lg: 440, md: 280, sm: 190, xs: 80 }, fontSize: { lg: '80px', md: '80px', sm: '50px', xs: '25px' }, zIndex: 4, textTransform: 'none', color: 'white', fontWeight: 'bold' }}>Food and Drink</Imports.Typography>
                {data && data.map((fooddata, index) => (
                    <Imports.Grid
                        item
                        xs={4}
                        sx={{ position: 'relative', '&:hover img': { filter: 'brightness(1.2)' }, '& img': { filter: 'brightness(0.8)', transition: 'filter 0.3s' } }}
                    >
                        <img src={fooddata.img} alt="" width="100%" />
                        <Imports.Typography sx={{ position: 'absolute', top: { lg: '440px', md: '290px', sm: '200px', xs: '20px' }, left: { lg: 20, md: 18, sm: 15, xs: 8 }, color: 'white', fontSize: { lg: '33px', md: '28px', sm: '20px', xs: '15px' }, display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>
                            <Imports.Grid>{fooddata.text1}</Imports.Grid>
                            <Imports.Grid>{fooddata.text2}</Imports.Grid>
                            <Imports.Grid>{fooddata.text3}</Imports.Grid>
                            <Imports.Grid sx={{ display: 'flex' }}>
                                <Imports.Grid>{fooddata.text4}</Imports.Grid>
                                <Imports.Grid sx={{ marginLeft: 'auto', textAlign: 'end' }}>
                                    <Imports.ArrowForwardIcon sx={{ color: 'white' }} />
                                </Imports.Grid>
                            </Imports.Grid>
                        </Imports.Typography>
                    </Imports.Grid>
                ))}
            </Imports.Grid>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer9.data); // Add this console.log statement
    return {
        data: state.reducer9.data,
    };
};


const mapDispatchToProps = { Getfood1act }

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Foodcarousel);