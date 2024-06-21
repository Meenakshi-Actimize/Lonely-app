import Imports from "../Import/Import";

// Text before swiper in flash page

function Swipertext() {
    return (
        <>
            <Imports.Grid sx={{ marginTop: '80px' }}>
                <Imports.Typography sx={{ textAlign: 'left', marginLeft: '35px', fontSize: '12px', color: '#B08084', fontSize: '16px' }}>
                    <strong>TRAVEL STOR<span style={{ color: '#D76E6B' }}>IES AND NEWS</span></strong>
                </Imports.Typography>
            </Imports.Grid>

            <Imports.Grid>
                <Imports.Box>
                    <Imports.Typography sx={{ textAlign: 'left', marginLeft: '35px', fontSize: { lg: '64px', md: '64px', sm: '45px', xs: '25px' }, color: 'black', fontFamily: 'Pangea Display, Helvetica, Arial, sans-serif;' }}>
                        <strong>Explore our latest stories</strong>
                        <Imports.Button variant='filled' sx={{ border: '1px solid gray', borderRadius: '20px', margin: '20px 35px', textTransform: 'none', float: { xs: 'center', sm: 'right', md: 'right', lg: 'right' } }}><strong>Read more articles</strong></Imports.Button>
                        <Imports.Button variant='filled' sx={{ border: '1px solid gray', borderRadius: '20px', margin: '20px 35px', textTransform: 'none', float: { xs: 'center', sm: 'right', md: 'right', lg: 'right' } }}><strong>Read more news</strong></Imports.Button>

                    </Imports.Typography>
                </Imports.Box>
            </Imports.Grid>

        </>
    )
}
export default Swipertext;