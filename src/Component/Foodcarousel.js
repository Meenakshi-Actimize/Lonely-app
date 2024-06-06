import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Foodcarousel() {
    return (
        <>
            <Grid container>
                <Typography sx={{position:'absolute', top:300, left:480, fontSize:'80px', zIndex:4, textTransform:'none', color:'white', fontWeight:'bold'}}>Food and Drink</Typography>
                <Grid 
                    item 
                    xs={4} 
                    sx={{ position: 'relative', '&:hover img': { filter: 'brightness(1.2)' }, '& img': { filter: 'brightness(0.8)', transition: 'filter 0.3s' } }}
                >
                    <img src='https://lp-cms-production.imgix.net/2024-06/Title.jpg?auto=format&w=600&h=800&dpr=1&fit=crop&q=40' alt="" width="100%" />
                    <Typography sx={{ position: 'absolute', top: '455px', left: 20, color: 'white', fontSize: '33px' }}>
                        <Grid>Local flavour the best</Grid>
                        <Grid>places to eat and</Grid>
                        <Grid>drink in Tuscon,</Grid>
                        <Grid sx={{ display: 'flex' }}>
                            <Grid>Arizona</Grid>
                            <Grid sx={{ marginLeft: 'auto', textAlign: 'end' }}>
                                <ArrowForwardIcon sx={{ color: 'white' }} />
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    xs={4} 
                    sx={{ position: 'relative', '&:hover img': { filter: 'brightness(1.2)' }, '& img': { filter: 'brightness(0.8)', transition: 'filter 0.3s' } }}
                >
                    <img src='https://lp-cms-production.imgix.net/2024-05/GettyImages-901549690.jpg?auto=format&w=600&h=800&dpr=1&fit=crop&q=40' alt="" width="100%" />
                    <Typography sx={{ position: 'absolute', top: '555px', right: 150, color: 'white', fontSize: '33px' }}>
                        <Grid>What to eat and drink</Grid>
                        <Grid sx={{ display: 'flex' }}>
                            <Grid>in Australia</Grid>
                            <Grid sx={{ marginLeft: 'auto', textAlign: 'end' }}>
                                <ArrowForwardIcon sx={{ color: 'white' }} />
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    xs={4} 
                    sx={{ position: 'relative', '&:hover img': { filter: 'brightness(1.2)' }, '& img': { filter: 'brightness(0.8)', transition: 'filter 0.3s' } }}
                >
                    <img src='https://lp-cms-production.imgix.net/2024-05/Local-Flavor-KC.png?auto=format&w=600&h=800&dpr=1&fit=crop&q=40' alt="" width="100%" />
                    <Typography sx={{ position: 'absolute', top: '510px', right: 150, color: 'white', fontSize: '33px' }}>
                        <Grid>Local flavour: the best</Grid>
                        <Grid>places to eat and</Grid>
                        <Grid sx={{ display: 'flex' }}>
                            <Grid>drink in Kansas City</Grid>
                            <Grid sx={{ paddingLeft: '20px', textAlign: 'end' }}>
                                <ArrowForwardIcon sx={{ color: 'white' }} />
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default Foodcarousel;
