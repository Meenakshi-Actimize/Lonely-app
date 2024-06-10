import { Button, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';

function Magnifierpage2(){
    return(
        <>
            <Grid container sx={{display:'flex', justifyContent:'center'}}>
                <Grid item xs={2} sx={{alignItems:'center'}}>
                    <img src='https://shop.lonelyplanet.com/cdn/shop/files/9781787011472_216x.jpg' alt='' width="40%" />
                </Grid>
                <Grid item xs={3} sx={{}}>
                <img src='https://shop.lonelyplanet.com/cdn/shop/files/9781787011472_216x.jpg' alt='' width="85%" />

                    
                </Grid>
                <Grid item xs={5} sx={{border:'1px solid blue'}}>
                    <Typography sx={{fontSize:'35px', color:'#2670DF', fontWeight:'bold'}}>Amalfi Coast Road Trips</Typography>
                    <Typography sx={{fontSize:'25px', fontWeight:'bold'}}>Rs. 1,200.00</Typography>
                    <Grid sx={{marginLeft:'20px'}}> 
                    <Button sx={{border:'1px solid gray'}}>Book</Button>
                    <Button sx={{border:'1px solid gray'}}>eBook</Button>
                    <Button sx={{border:'1px solid gray'}}>Book + eBook</Button>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}
export default Magnifierpage2;