import Imports from "../Import/Import";

function Foodcard9() {
    return (
        <>
            <Imports.Grid sx={{
                marginTop: '150px',
                textAlign: 'center',
                borderBottom: '1px solid gray'

            }}>
                <Imports.Typography sx={{ fontSize: { xs: '10px', md: '11px', lg: '11px' } }}>
                    ADVERTISEMENT
                </Imports.Typography>
                <Imports.Box sx={{ marginBottom: '40px' }}>
                    <img src="https://tpc.googlesyndication.com/simgad/3754044293244444204" alt="" width="60%" style={{ height: { lg: '90px', md: '40px', sm: '30px', xs: '28px' } }} />
                </Imports.Box>
            </Imports.Grid>

        </>
    )
}
export default Foodcard9;