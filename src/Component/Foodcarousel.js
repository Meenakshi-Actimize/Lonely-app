import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Foodcarousel(){
    return(
        <>
        <Grid container>
            <Grid item xs={4}>
                <img src='https://lp-cms-production.imgix.net/2024-06/Title.jpg?auto=format&w=600&h=800&dpr=1&fit=crop&q=40' alt="" width="100%" />
                <Typography sx={{position:'absolute', top:'525px', left:20, color:'white', fontSize:'33px'}}>
                    <Grid>Local flavour the best</Grid>
                    <Grid>places to eat and</Grid>
                    <Grid>drink in Tuscon,</Grid>
                    <Grid>Arizona </Grid> <ArrowForwardIcon sx={{margin:'auto'}}/></Typography>

            </Grid>
            <Grid item xs={4}>
                <img src='https://lp-cms-production.imgix.net/2024-05/GettyImages-901549690.jpg?auto=format&w=600&h=800&dpr=1&fit=crop&q=40' alt="" width="100%" />
                <Typography sx={{position:'absolute', top:'525px', left:20, color:'white', fontSize:'33px'}}>Local flavour the best<br/>places to eat and<br/>drink in Tuscon,<br/>Arizona</Typography>


            </Grid>
            <Grid item xs={4}>
                <img src='https://lp-cms-production.imgix.net/2024-05/Local-Flavor-KC.png?auto=format&w=600&h=800&dpr=1&fit=crop&q=40' alt="" width="100%" />


            </Grid>
        </Grid>
        
        </>
    )
}
export default Foodcarousel;