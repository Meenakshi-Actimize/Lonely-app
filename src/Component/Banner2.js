import Imports from "../Import/Import";

// Second banner in flash page

function Banner2comp() {
    return (
        <Imports.Box sx={{ position: 'relative', width: '100%', marginTop: '100px' }}>
            <Imports.CardMedia
                component="img"
                width="100%"
                image="https://lonelyplanetstatic.imgix.net/marketing/2022/BIT/bit-guidebook-bg-desk.jpeg?auto=format&q=75&w=1920"
            />
            {/* Textoverlay */}
            <Imports.Grid
                container
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    color: 'white',
                    padding: '30px',
                    textAlign: 'left',
                }}
            >
                <Imports.Grid sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
                    <Imports.Typography sx={{ color: '#C2C2C2', fontSize: '13px', paddingBottom: { lg: '0px', md: '0px', sm: '-80%', xs: '-80%' } }}><strong>SHOP OUR BOOKS</strong></Imports.Typography>
                    <Imports.Typography variant="h3"><strong>Our guidebooks &<br /> travel books</strong></Imports.Typography>
                    <Imports.Typography >Whether you’re interested in traveling to a new city,<br /> going on a cruise, or cooking a new dish — we’re<br /> committed to inspiring you to experience travel in a<br /> whole new way. Lonely Planet’s collection of 825+<br /> travel and guidebooks is sure to inspire the traveler<br /> within.</Imports.Typography>
                    <Imports.Button variant="filled" sx={{ borderRadius: '18px', border: '1px solid gray', marginTop: '30px', textTransform: 'none' }}>View All Books</Imports.Button>

                </Imports.Grid>
            </Imports.Grid>
        </Imports.Box>
    );
}

export default Banner2comp;
