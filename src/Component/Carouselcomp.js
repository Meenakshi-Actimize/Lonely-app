import * as React from 'react';
import { Grid, Typography } from '@mui/material';
// import '/App.css';
function Carouselcomp() {
    return (
        <>

            <Grid container>
            <Typography variant='caption' sx={{ color: 'red',
                        
                        position: 'absolute',
                      bottom: 0,
                       fontSize:'80px', color: 'white', paddingLeft:'350px'}}><strong>Food and Drink</strong></Typography>

                <Grid item xs={4} >

                    <img className="carousel-image" src="./images/Food-and-Drink-Stories-Lonely-Planet.png" alt="" width="100%" />




                </Grid>
                <Grid item xs={4} sx={{ padding: 0 }}>
                   
                    <img className="carousel-image" src="./images/Food-and-Drink-Stories-Lonely-Planet (1).png" alt="" width="100%" />


                </Grid>
                <Grid item xs={4}>
                    <img className="carousel-image" src="./images/Food-and-Drink-Stories-Lonely-Planet (2).png" alt="" width="100%" />
                    {/* <Typography variant='caption' sx={{ color: 'red',
                        p: 1, 
                        textAlign: 'center',  position: 'absolute',
                        bottom: 0,
                        left: 0, fontSize:'32px', color: 'white', height:'1.3'}}>Local Flavour: the best places to eat and drink in</Typography> */}

                </Grid>
            </Grid>
        </>
    );
}
export default Carouselcomp;
