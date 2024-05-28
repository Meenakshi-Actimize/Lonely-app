import * as React from 'react';
import { Grid, Typography, Container, Button } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footercomp() {
    const lists = ['New York City', 'Paris', 'Italy', 'Costa Rica', 'Japan', 'USA', 'Amsterdam', 'Portugal', 'Cancún', 'Chicago', 'England', 'Tokyo', 'France', 'Thailand', 'Ireland', 'Rome', 'London', 'Los Angeles', 'Mexico', 'San Francisco', 'Explore More Destinations']

    const lists2 = ['Adventure Travel', 'Art and Culture', 'Beaches, Coasts and Islands', 'Family Holidays', 'Festivals', 'Food and Drink', 'Honeymoon and Romance', 'Road Trips', 'Sustainable Travel', 'Travel on a Budget', 'Wildlife and Nature']

    const lists3 = ['Destination Guides', 'Lonely Planet Kids', 'Lonely Planet Shop', 'Non-English Guides']

    const lists4 = ['About Lonely Planet', 'Contact Us', 'Trade and Advertising', 'Privacy Policy', 'Terms and Conditions', 'Work For Us', 'Write For Us', 'Write For Us', 'Sitemap', 'Consumer Health Data Privacy Policy', 'Cookie Settings', 'Do Not Sell or Share My Personal Information']

    return (
        <>
            <Container maxWidth={false} sx={{ paddingTop: '60px' }}>
                <Grid container columns={10}>
                    <Grid xs={10} sm={10} md={5} lg={4} >
                        <Typography variant="h4" sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: '#0057D9'}}><strong>lonely planet</strong></Typography>
                        <Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, paddingBottom: '20px' }}>For Explorers Everywhere</Typography>
                        <Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, fontSize: '14px', fontWeight: '500' }}><strong>FOLLOW US</strong></Typography>
                        <Typography sx={{  textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' },paddingBottom: '20px' }}>
                            <FacebookRoundedIcon sx={{ borderRadius: '50%', bgcolor: '#0057D9', color: 'white', width: '36px', height: '36px', fontSize: '12px', marginLeft:'5px' }} />
                            <InstagramIcon sx={{ borderRadius: '50%', bgcolor: '#F00073', color: 'white', width: '36px', height: '36px', fontSize: '12px' }} />
                            <XIcon sx={{ borderRadius: '50%', bgcolor: 'black', color: 'white', width: '36px', height: '36px', fontSize: '12px' }} />
                            <YouTubeIcon sx={{ borderRadius: '50%', bgcolor: '#FF0000', color: 'white', width: '36px', height: '36px', fontSize: '12px' }} />
                            <PinterestIcon sx={{ borderRadius: '50%', bgcolor: '#E60023', color: 'white', width: '36px', height: '36px', fontSize: '12px' }} />
                        </Typography>
                        <Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, fontSize: '14px', fontWeight: '500', paddingBottom: '10px' }}><strong>BECOME A MEMBER</strong></Typography>

                        <Typography variant="h4" sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: '#0057D9', fontSize: '24px' }}>Join The Lovely Planet</Typography>
                        <Typography variant="h4" sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: '#0057D9', fontSize: '24px', paddingBottom: '20px' }}>Community of travelers</Typography>
                        <Button varaint="contained" sx={{  border: '1px solid gray', 
            borderRadius: '18px', 
            bgcolor: '#0057D9', 
            color: 'white', 
            display: 'flex', 
            fontSize: '14px', 
            textTransform: 'none', 
            width: {lg:'26%',md:'26%',sm:'100%', xs:'100%'}, 
            justifyContent: 'center', 
            alignItems: 'center'  }}>Create account</Button>



                    </Grid>
                    <Grid xs={10} sm={10} md={5} lg={2} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, marginBottom: '5px' }}>TOP DESTINATIONS</Typography>
                        {lists.map((item, index) => (
                            <>
                                <Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: 'black', marginBottom: '5px', fontSize: '14px' }}>{item}</Typography>

                            </>
                        ))}
                    </Grid>
                    <Grid xs={10} sm={10} md={5} lg={2} >

                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, marginBottom: '5px' }}>TRAVEL INTERESTS</Typography>
                        {lists2.map((item, index) => (
                            <>
                                <Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: 'black', marginBottom: '5px', fontSize: '14px' }}>{item}</Typography>

                            </>
                        ))}
                    </Grid>
                    <Grid xs={10} sm={10} md={5} lg={2} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, marginBottom: '5px' }}>SHOP</Typography>
                        {lists3.map((item, index) => (
                            <>
                                <Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: 'black', marginBottom: '5px', fontSize: '14px' }}>{item}</Typography>

                            </>
                        ))}

                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, marginBottom: '5px', marginTop: '25px' }}>ABOUT US</Typography>
                        {lists4.map((item, index) => (
                            <>
                                <Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: 'black', marginBottom: '5px', fontSize: '14px' }}>{item}</Typography>

                            </>
                        ))}

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Footercomp;
