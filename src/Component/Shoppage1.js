import { Typography, Grid } from '@mui/material';
import * as React from 'react';

function Shoppage1(){
    return(
        <>
        <Grid container sx={{backgroundColor:'black', display:'flex', justifyContent:'center', alignItems:'center', height:'50px'}}>
            <Typography sx={{color:'white', textAlign:'center', fontSize:'13px', fontWeight:'bold'}}>Free shipping on all orders</Typography>
        </Grid>
        
        </>
    )
}
export default Shoppage1;