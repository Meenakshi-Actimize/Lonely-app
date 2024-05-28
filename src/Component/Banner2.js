import * as React from 'react';
import { Typography, Card, Box, Grid } from '@mui/material';
import { CardMedia, Button } from '@mui/material';

function Banner2comp() {
    return (
        <Box sx={{ position: 'relative', width: '100%', marginTop:'100px' }}>
            <CardMedia
                component="img"
                width="100%"
                image="https://lonelyplanetstatic.imgix.net/marketing/2022/BIT/bit-guidebook-bg-desk.jpeg?auto=format&q=75&w=1920"
            />
             <Grid
                container
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    color: 'white',
                    padding: '30px',
                    textAlign: 'left', 
                }}
            >
                <Grid sx={{display:{lg:'block', md:'block', sm:'none', xs:'none'}}}>
                    <Typography sx={{color:'#C2C2C2', fontSize:'13px', paddingBottom:{lg:'0px', md:'0px', sm:'-80%', xs:'-80%'}}}><strong>SHOP OUR BOOKS</strong></Typography>
                    <Typography variant="h3"><strong>Our guidebooks &<br/> travel books</strong></Typography>
                    <Typography >Whether you’re interested in traveling to a new city,<br/> going on a cruise, or cooking a new dish — we’re<br/> committed to inspiring you to experience travel in a<br/> whole new way. Lonely Planet’s collection of 825+<br/> travel and guidebooks is sure to inspire the traveler<br/> within.</Typography>
                    <Button variant="filled" sx={{borderRadius:'18px', border:'1px solid gray', marginTop:'30px', textTransform:'none'}}>View All Books</Button>

                </Grid>
            </Grid>
        </Box>
    );
}

export default Banner2comp;
