import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';

function Shoppage2(){
    return(
        <>
        <Container maxWidth="xl" sx={{marginTop:'20px'}}>
            <Grid >
            <Typography sx={{fontSize:'12px'}}>Home / Guidebooks</Typography>
            
            <Typography sx={{fontSize:'36px', fontWeight:'bold', marginTop:'15px'}}>Guidebooks</Typography>
            </Grid>

        </Container>
        
        </>
    )
}
export default Shoppage2;