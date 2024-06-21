import Imports from '../Import/Import';
import { Getplanvideo1act } from '../redux/action/Action7';

// video component in planning page

function Planvideo({ data, Getplanvideo1act }) {
    Imports.useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const gettingplanvideo = await Imports.Getplanvideo1api();
                // Dispatch the fetched data using Getplanvideo1act
                Getplanvideo1act(gettingplanvideo);
                console.log('Hi success plan', gettingplanvideo);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []);

    return (
        <>
            <Imports.Container maxWidth="xl">
                <Imports.Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Imports.Grid xs={11.5} position="relative">
                        {data && data.map((planvideo, index) => (

                            <video
                                key={index}
                                autoPlay
                                muted
                                loop
                                style={{ width: '100%', height: '600px', borderRadius: '22px', objectFit: 'cover', top: '-100%', bottom: '-100%' }}
                            >
                                <source
                                    src={planvideo.video}
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
                                outLine: 'none',
                                transform: 'translate(-50%, -50%)',
                                color: 'white', // Text color
                                textAlign: 'center',
                                padding: '20px',
                                borderRadius: '5px',
                                whiteSpace: 'nowrap',
                                fontSize: { lg: '51px', md: '50px', sm: '34px', xs: '20px' }
                            }}
                        >
                            <strong>Travel like you mean it.</strong> <br />
                            <Imports.Typography sx={{ fontSize: { lg: '19px', md: '19px', sm: '15px', xs: '10px' } }}>
                                <strong>Trips you couldn't plan, even if you wanted to</strong>
                            </Imports.Typography>
                            <Imports.TextField
                                placeholder="Where do you want to go ?"
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    borderRadius: '32px',
                                    width: '80%',
                                    textAlign: 'center',
                                    marginTop: '80px',
                                    height: '65px',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none'
                                    }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <Imports.InputAdornment position="end">
                                            <Imports.SearchIcon sx={{ backgroundColor: '#7A1BF2', color: 'white', borderRadius: '22px', fontSize: '42px' }} />
                                        </Imports.InputAdornment>
                                    )
                                }}
                            />
                        </Imports.Typography>
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Container>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer7.data); // Add this console.log statement
    return {
        data: state.reducer7.data,
    };
};

const mapDispatchToProps = { Getplanvideo1act };

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Planvideo);
