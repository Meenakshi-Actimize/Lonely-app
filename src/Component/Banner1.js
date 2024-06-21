import Imports from "../Import/Import";

// First banner in flash page

function Banner1comp() {

    return (
        <>
            <Imports.Grid sx={{
                marginTop: '120px',
                textAlign: 'center'
            }}>
                <Imports.Typography sx={{ fontSize: { xs: '10px', md: '12px', lg: '13px' } }}>
                    ADVERTISEMENT
                </Imports.Typography>
                <img src="https://tpc.googlesyndication.com/simgad/6861019118589770948" alt="" width="50%" />
            </Imports.Grid>
        </>
    )
}

export default Banner1comp;
