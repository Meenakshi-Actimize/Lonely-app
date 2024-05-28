import * as React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


function Homecard2() {
    return (
        <>
            <Container maxWidth="xl">
                <Grid container sx={{ marginTop: '60px' }}>
                    <Grid xs={10}>
                        <Typography sx={{ textAlign: 'left', paddingTop: '90px', fontSize: '14px', marginLeft:'28px' }}><span style={{ color: '#758090' }}>A</span><span style={{ color: '#C9C2CC' }}>TT</span><span style={{ color: '#D7989A' }}>RACTIONS</span></Typography>
                        <Typography sx={{ textAlign: "left", paddingTop: '20px', fontSize: { lg: '60px', md: '60px', sm: '40px', xs: '20px' }, textDecoration: 'bold' , paddingLeft:'20px'}}>Top picks from out travel experts</Typography>
                        <Typography sx={{ fontSize: { lg: '35px', md: '32px', sm: '23px', xs: '17px' }, marginLeft: '25px', textDecoration: 'underline', textDecorationColor: '#0057D9', marginTop:'60px' }}>
                            <strong>The best of Bali: top ways to find your own piece of paradise</strong>

                        </Typography>
                        <Typography sx={{ marginLeft: '25px' }}>
                            Curated by  <span style={{ color: '#0057D9' }}><strong>Mark Eveleigh</strong></span>

                        </Typography>
                    </Grid>

                </Grid>


                <Box sx={{ margin: '42px', position: 'relative', width: { lg: '21%', md: '28%', sm: '38%', xs: '78%' } }}>
                    <img
                        src="https://lonelyplanetstatic.imgix.net/marketing/placeholders/placeholder-restaurants.jpg?auto=format&fit=crop&ar=1:1&q=75&w=640"
                        alt="1"
                        style={{ width: '95%', height: '310px', borderRadius: '16px' }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '35%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                            color: 'white'
                        }}
                    >
                        <img src="./images/spoon.png" width="80%" alt="Spoon Icon" />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 45,
                            padding: '10px',
                            zIndex: 1,
                            backgroundColor: 'hsla(0,0%,7%,.5)',
                            color: 'white',
                            border: '1px solid gray',
                            borderRadius: '25px',
                            lineHeight: 0.45,
                            marginTop: '18px'
                        }}
                    >
                        <BookmarkBorderIcon sx={{ fontSize: 20 }} />
                    </Box>

                    <Box sx={{ position: 'relative', zIndex: 2, marginTop: '16px' }}>
                        <Typography sx={{ textAlign: 'left', fontSize: '23px' }}>
                            <strong>Byrdhouse Beach Club</strong>
                        </Typography>
                        <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: 500 }}>
                            <strong>SANUR</strong>
                        </Typography>
                        <Typography sx={{ textAlign: 'left', fontSize: { lg: '16px', md: '14px', sm: '13px', xs: '12px' } }}>
                            With sun lounges, a swimming pool, a<br /> restaurant, bar and table tennis on-site,<br /> you could happily spend an entire day...
                        </Typography>
                    </Box>
                </Box>
            </Container>


        </>
    )
}
export default Homecard2;