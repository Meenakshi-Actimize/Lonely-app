import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';

function Foodcard2(){
    return(
        <>
        <Container maxWidth="xl" sx={{marginTop:'55px'}}>
        <Grid container>
            <Grid item xs={8}>
                <Typography sx={{fontSize:'11px', textAlign:'center', paddingRight:'80px'}}>ADVERTISEMENT</Typography>
                <img src="./images/banner.png" alt="" width="90%" /> 
            </Grid>
            <Grid item xs={4}>

            </Grid>
        </Grid>
        </Container>
        
        </>
    )
}
export default Foodcard2;