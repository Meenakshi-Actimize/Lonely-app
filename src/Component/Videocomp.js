import Imports from '../Import/Import';
import { Getvideo } from '../redux/action/Action2';

// Video component in flash page

function Videocomp({ data, Getvideo }) {
    Imports.useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const gettingvideodata = await Imports.Get1video();
                // Dispatch the fetched data using GetCardData
                Getvideo(gettingvideodata);
                console.log('Hi success', gettingvideodata);
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
                <Imports.Box position="relative" sx={{ marginTop: '60px', width: '100%' }}>
                    {data && data.map((vdeo, index) => (
                        <video autoPlay muted loop
                            style={{ width: '100%', maxWidth: '100%', height: 'auto' }} >
                            <source
                                src={vdeo.video}
                                type="video/mp4"
                            />
                        </video>
                    ))}

                    {/* Text Overlay */}
                    <Imports.Typography
                        variant="h1"
                        component="div"
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white', // Text color
                            textAlign: 'center',
                            padding: '20px',
                            borderRadius: '5px',
                            whiteSpace: 'nowrap', fontSize: { lg: '64px', md: '50px', sm: '30px', xs: '20px' }
                        }}
                    >
                        <strong>BEST IN TRAVEL 2024</strong> <br />
                        <Imports.Button variant="contained" sx={{ border: '1px solid white', borderRadius: '18px', backgroundColor: 'white', color: 'black', textTransform: 'none' }}>Discover the winners</Imports.Button>

                    </Imports.Typography>

                </Imports.Box>
            </Imports.Grid>
        </>
    )
}


const mapStateToProps = (state) => {
    console.log('State data:', state.reducer2.data); // Add this console.log statement
    return {
        data: state.reducer2.data,
    };
};


const mapDispatchToProps = { Getvideo }

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Videocomp);
