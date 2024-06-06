import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';

function Foodcard4(){
    return(
        <>
        <Container maxWidth="xl" sx={{marginTop:'55px'}}>
        <Grid container>
            <Grid item xs={8}>
                <Typography sx={{fontSize:'11px', textAlign:'center', paddingRight:'80px'}}>ADVERTISEMENT</Typography>
                <img src="./images/banner2.png" alt="" width="90%" /> 
            </Grid>
            <Grid item xs={4}>

            </Grid>
        </Grid>
        </Container>
        </>
    )
}
export default Foodcard4;