import * as React from 'react';
import { Grid, Typography } from '@mui/material';
// import '/App.css';
function Carouselcomp() {
    return (
        <>

            <Grid container>
            <Typography variant='caption' sx={{ display: { xs: 'none', md: 'block' }, color: 'red',
                        
                        position: 'absolute',
                      bottom: 0,
                       fontSize:'80px', color: 'white', paddingLeft:{lg:'350px'}}}><strong>Food and Drink</strong></Typography>

                <Grid item xs={4} >

                    <img className="carousel-image" src="./images/Food-and-Drink-Stories-Lonely-Planet.png" alt="" width="100%" />




                </Grid>
                <Grid item xs={4} sx={{ padding: 0 }}>
                   
                    <img className="carousel-image" src="./images/Food-and-Drink-Stories-Lonely-Planet (1).png" alt="" width="100%" />


                </Grid>
                <Grid item xs={4}>
                    <img className="carousel-image" src="./images/Food-and-Drink-Stories-Lonely-Planet (2).png" alt="" width="100%" />
                  
                </Grid>
            </Grid>
        </>
    );
}
export default Carouselcomp;
