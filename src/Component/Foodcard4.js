import Imports from "../Import/Import";

function Foodcard4() {
    return (
        <>
            <Imports.Container maxWidth="xl" sx={{ marginTop: '55px' }}>
                <Imports.Grid container>
                    <Imports.Grid item xs={8}>
                        <Imports.Typography sx={{ fontSize: '11px', textAlign: 'center', paddingRight: '80px' }}>ADVERTISEMENT</Imports.Typography>
                        <img src="./images/banner2.png" alt="" width="90%" />
                    </Imports.Grid>
                    <Imports.Grid item xs={4}>

                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Container>
        </>
    )
}
export default Foodcard4;