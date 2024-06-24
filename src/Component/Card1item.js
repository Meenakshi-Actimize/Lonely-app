import Imports from "../Import/Import";

// first card component in flash page

function Card1item() {
    return (
        <>
        <Imports.Container maxWidth="xl">
            <Imports.Grid sx={{ marginTop: '80px' }}>
                <Imports.Typography sx={{ textAlign: 'left', marginLeft: '35px', fontSize: '12px', color: 'gray' }}>
                    <strong>PLAN YOUR TRIP</strong>
                </Imports.Typography>
            </Imports.Grid>

            <Imports.Grid>
                <Imports.Box>
                    <Imports.Typography sx={{ textAlign: 'left', marginLeft: '35px', fontSize: '45px', color: 'black' }}>
                        <strong>Where to next?</strong>
                        <Imports.Button variant='filled' sx={{ border: '1px solid gray', borderRadius: '16px', marginRight:'auto', float: { xs: 'center', sm: 'right', md: 'right', lg: 'right' } }}>View all descriptions</Imports.Button>

                    </Imports.Typography>
                </Imports.Box>
            </Imports.Grid>
            </Imports.Container>
        </>
    );
}
export default Card1item;
