import Imports from "../Import/Import";
import { Getfoodcard1act } from "../redux/action/Action11";

function Foodcard7({data, Getfoodcard1act}) {
    Imports.useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const gettingfood1 = await Imports.Getfoodcard1api();
                // Dispatch the fetched data using GetCardData
                Getfoodcard1act(gettingfood1);
                console.log('Hi success plan', gettingfood1);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []);


  
    return (
        <>
            <Imports.Container maxWidth="xl" sx={{ marginTop: '80px' }}>
                <Imports.Grid container spacing={2}>
                {data && data.map((foodcard1, index) => (

                        <Imports.Grid item xs={10} key={index} sx={{ height: 'auto', display: 'flex' }}>
                            <Imports.Card
                                sx={{
                                    display: 'flex',
                                    width: '70%',
                                    boxShadow: 'none',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    transition: 'box-shadow 0.3s',
                                    '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
                                }}
                            >
                                 <Imports.Grid container>
                                <Imports.Grid xs={12} sm={6} lg={3} md={4} >
                                <Imports.Box sx={{ display: 'block', justifyContent: 'center', flex: '0 0 auto' }}>
                                    <img
                                        src={foodcard1.img}
                                        alt=""
                                        width="80%"
                                        style={{ borderRadius: '14px', margin: '20px', height: '170px' }}
                                    />
                                </Imports.Box>
                                </Imports.Grid>
                                <Imports.Grid xs={12} sm={12} lg={8} md={8} >

                                <Imports.Box sx={{ marginY: '20px' }}>
                                    <Imports.Typography sx={{ fontSize: '14px', color: '#B1B1B1', fontWeight: 'bold', paddingBottom: '5px' }}>
                                        {foodcard1.title}
                                    </Imports.Typography>
                                    <Imports.Typography sx={{ fontSize: '18px', color: '#121212', fontWeight: 'bold', paddingBottom: '5px' }}>
                                        {foodcard1.subtitle}
                                    </Imports.Typography>
                                    <Imports.Typography sx={{ fontSize: '14px', color: '#514B4B', paddingBottom: '5px' }}>
                                        {foodcard1.time}
                                    </Imports.Typography>
                                    <Imports.Typography sx={{ color: '#4B4B4B', fontSize: '14px' }}>
                                        {foodcard1.des}
                                    </Imports.Typography>
                                </Imports.Box>
                                </Imports.Grid>
                                </Imports.Grid>
                            </Imports.Card>
                        </Imports.Grid>

                    ))}
                  
                </Imports.Grid>
            </Imports.Container>

        </>
    )
}
const mapStateToProps = (state) => {
    console.log('State data:', state.reducer11.data); // Add this console.log statement
    return {
        data: state.reducer11.data,
    };
};


const mapDispatchToProps = { Getfoodcard1act }

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Foodcard7);