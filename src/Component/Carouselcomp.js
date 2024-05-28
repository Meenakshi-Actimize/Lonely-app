import * as React from 'react';
import { Grid, Typography } from '@mui/material';
// import '/App.css';
function Carouselcomp() {
    return (
        <>

            <Grid container>
            <Typography variant='caption' sx={{ display: { xs: 'none', sm:'none', md: 'none', lg:'block' }, color: 'red',
                        
                        position: 'absolute',
                      bottom: 0,
                       fontSize:{lg:'80px',md:'50px'}, color: 'white', paddingLeft:'450px'}}><strong>Food and Drink</strong></Typography>

                <Grid item xs={4} sx={{"&:hover img": {
                                opacity: 0.8
                              }}}>

                    <img className="carousel-image" src="./images/Food-and-Drink-Stories-Lonely-Planet.png" alt="" width="100%" />




                </Grid>
                <Grid item xs={4} sx={{ padding: 0 , "&:hover img": {
                                opacity: 0.8
                              }}}>
                   
                    <img className="carousel-image" src="./images/Food-and-Drink-Stories-Lonely-Planet (1).png" alt="" width="100%" />


                </Grid>
                <Grid item xs={4} sx={{"&:hover img": {
                                opacity: 0.8
                              }}}>
                    <img className="carousel-image" src="./images/Food-and-Drink-Stories-Lonely-Planet (2).png" alt="" width="100%" />
                  
                </Grid>
            </Grid>
        </>
    );
}
export default Carouselcomp;
