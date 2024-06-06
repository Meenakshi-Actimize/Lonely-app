import * as React from 'react';
import { Grid, Typography, Container } from '@mui/material';

function Foodcard6(){
    return(
        <>
         <Container maxWidth="xl" sx={{marginTop:'55px'}}>
        <Grid container>
            <Grid item xs={8}>
                <Typography sx={{fontSize:'11px', textAlign:'center', paddingRight:'80px'}}>ADVERTISEMENT</Typography>
            </Grid>
            <Grid item xs={4}>

            </Grid>
        </Grid>
        </Container>
        </>
    )
}
export default Foodcard6;