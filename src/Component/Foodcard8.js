import Imports from "../Import/Import";
import { Pagination } from "@mui/material";


function Foodcard8() {
    return (
        <>

            <Imports.Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <Imports.Grid item xs={8}>
                    <Imports.Stack spacing={2}>
                        <Pagination count={10} color="standard" />


                    </Imports.Stack>
                </Imports.Grid>
            </Imports.Container>
        </>
    )
}
export default Foodcard8;