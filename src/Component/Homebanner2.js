import Imports from "../Import/Import";

// Second banner in home page

function Homebanner2() {
    return (
        <>
            <Imports.Grid container sx={{ marginTop: '20px', position: 'relative', height: { lg: '200px', md: '180px' } }}>
                <Imports.Box sx={{ position: 'relative', width: '100%' }}>
                    <img src="./images/Bannerimg.jpg" alt="Banner" style={{ width: '100%', height: '500px' }} />
                    {/* Text overlay */}
                    <Imports.Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        <Imports.Typography sx={{ marginTop: '5px' }}>
                            <span style={{ color: '#C9C2CC' }}>04&nbsp;/&nbsp;GUI</span>
                            <span style={{ color: '#758090' }}>DE</span>
                            <span style={{ color: '#D7989A' }}>BOOKS</span>
                        </Imports.Typography>
                        <Imports.Typography
                            sx={{
                                paddingTop: '20px',
                                fontSize: {
                                    lg: '60px',
                                    md: '60px',
                                    sm: '40px',
                                    xs: '20px',
                                },
                                fontWeight: 'bold',
                            }}
                        >
                            Purchase our award-winning
                            <br />
                            guidebooks
                        </Imports.Typography>
                        <Imports.Typography>Get to the heart of Bali with one of our in-depth, award-winning guidebooks,<br /> covering maps, itineraries, and expert guidance.</Imports.Typography>
                        <Imports.Button sx={{ margin: '20px', color: 'white', borderRadius: '18px', border: '1px solid white', width: { lg: '13%', md: '18%', sm: '25%', xs: '55%' }, textTransform: 'none' }}><strong>Shop our Guidebooks</strong></Imports.Button>
                    </Imports.Box>
                </Imports.Box>
            </Imports.Grid>
        </>
    )
}
export default Homebanner2;
