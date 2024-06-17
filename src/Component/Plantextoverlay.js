import * as React from 'react';
import { Grid, Typography, Button, Container } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


function Plantextoverlay(){
    return(
        <>
        <Grid container sx={{marginTop:'60px'}}>
            <img src="./images/textoverlay.png" alt="" width="100%" />

        </Grid>

        <Grid container gap={4} sx={{backgroundColor: '#F5F0FF', height:'200px', justifyContent:'center', alignItems:'center', display:'flex'}}>
            <Grid>
            <Typography sx={{fontSize:{lg:'26px', md:'26px', sm:'20px', xs:'18px'}, textAlign:'center', fontWeight:'bold'}}>Looking to go ElseWhere?</Typography>
            </Grid>
            <Grid>
             <Button sx={{border:'1px solid #9409EE', borderRadius:'18px', width:'130%', textTransform:'none', color:'black', fontWeight:'bold'}}>Our destinations <ArrowForwardIosSharpIcon sx={{paddingLeft:'20px',  fontSize:'16px', fontWeight:'bold'}}/></Button>
             </Grid>

        </Grid>
        </>
    )
}
export default Plantextoverlay;