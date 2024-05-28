import * as React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import StarIcon from '@mui/icons-material/Star';

function Homecard5() {
    const card5data = [{ img: 'https://cdn.getyourguide.com/img/tour/97fb8354b14ee913.jpeg/156.webp', title: 'Uluwatu Kecak and Fire Dance Show Entry Ticket', du: '1 hour', star: '4.5(1991)' }, { img: 'https://cdn.getyourguide.com/img/tour/38b278fd57c674a9d36b7837170ad78049fbdcdc1d14d2077f1ed97ddf13f311.jpg/156.webp', title: 'All Inclusive Mt Batur Sunrise, Breakfast & Hot Spring', du: '5-10 hours', star: '5 (393)' }, { img: 'https://cdn.getyourguide.com/img/tour/b5f16039c1985eabf4cf880f4af7e28dce7fc1471facb05df1ab694eea6b8578.jpg/156.webp', title: 'Manta Point Snorkeling Tour by Boat', du: '3 hours', star: '4 (13)' }]
    return (
        <>
            <Container maxWidth='xl'>
                <Grid>
                    <Typography sx={{ textAlign: 'center', paddingTop: '90px' }}><span style={{ color: '#758090' }}>IN PARTNERSHIP</span>&nbsp;<span style={{ color: '#C9C2CC' }}>WITH</span> &nbsp;<span style={{ color: '#D7989A' }}>GETYOURGUIDE</span></Typography>
                    <Typography sx={{ textAlign: "center", paddingTop: '20px', fontSize: { lg: '60px', md: '60px', sm: '40px', xs: '20px' }, textDecoration: 'bold' }}>Book Popular activities in Bali</Typography>
                </Grid>
                <Grid container sx={{ margin: '40px 30px 0px 0px' }}>
                    {card5data.map((item) => (
                         <Grid 
                         item 
                         xs={12} 
                         sm={12} 
                         md={6} 
                         lg={4} 
                         key={item.title} 
                         sx={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                     >
                         <Box sx={{ width: {lg:'100%', md:'100%',sm:'100%', xs:'100%'}}}>
                             <img src={item.img} alt="" width="100%" style={{ borderRadius: '16px', height: '290px' }} />
                             <Typography sx={{ color: '#0057D9', textDecoration: 'underline', fontSize: '18px' }}><strong>{item.title}</strong></Typography>
                             <Grid sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                 <UpdateIcon sx={{ width: '5%' }} />
                                 <Typography >&nbsp;&nbsp;Duration: {item.du}</Typography>
                             </Grid>
                             <Typography sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                 <StarIcon sx={{ color: 'yellow', width: '4%' }} />{item.star}
                             </Typography>
                         </Box>
                     </Grid>

                    ))}
                  
                </Grid>
                <Typography sx={{color:'gray', fontSize:'12px', margin:'15px 12px 0px 0px'}}>Powered by GetYourGuide.Join our travel affiliate program</Typography>

            </Container>


        </>

    )
}
export default Homecard5;