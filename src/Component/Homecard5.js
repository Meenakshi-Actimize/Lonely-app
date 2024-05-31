import * as React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import StarIcon from '@mui/icons-material/Star';

import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Gethomecard3act } from '../redux/action/Action5';
import { Gethomecards3 } from '../redux/api/api';

function Homecard5({data, Gethomecard3act}) {

    const [hoveredCard, setHoveredCard] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
              // Call the async function to fetch data
              const getcard3data = await Gethomecards3();
              // Dispatch the fetched data using GetCardData
              Gethomecard3act(getcard3data);
              console.log('Hi got homecard3 data', getcard3data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          // Call the async function
          fetchData();
        }, []);
    // const card5data = [{ img: 'https://cdn.getyourguide.com/img/tour/97fb8354b14ee913.jpeg/156.webp', title: 'Uluwatu Kecak and Fire Dance Show Entry Ticket', du: '1 hour', star: '4.5(1991)' }, { img: 'https://cdn.getyourguide.com/img/tour/38b278fd57c674a9d36b7837170ad78049fbdcdc1d14d2077f1ed97ddf13f311.jpg/156.webp', title: 'All Inclusive Mt Batur Sunrise, Breakfast & Hot Spring', du: '5-10 hours', star: '5 (393)' }, { img: 'https://cdn.getyourguide.com/img/tour/b5f16039c1985eabf4cf880f4af7e28dce7fc1471facb05df1ab694eea6b8578.jpg/156.webp', title: 'Manta Point Snorkeling Tour by Boat', du: '3 hours', star: '4 (13)' }]
    return (
        <>
            <Container maxWidth='xl'>
                <Grid>
                    <Typography sx={{ textAlign: 'center', paddingTop: '90px' }}><span style={{ color: '#758090' }}>IN PARTNERSHIP</span>&nbsp;<span style={{ color: '#C9C2CC' }}>WITH</span> &nbsp;<span style={{ color: '#D7989A' }}>GETYOURGUIDE</span></Typography>
                    <Typography sx={{ textAlign: "center", paddingTop: '20px', fontSize: { lg: '60px', md: '60px', sm: '40px', xs: '20px' }, textDecoration: 'bold' }}>Book Popular activities in Bali</Typography>
                </Grid>
                <Grid container sx={{ margin: '40px 30px 0px 0px' }}>
                    {data && data.map((homecard3, index) => (
                         <Grid 
                         item 
                         xs={12} 
                         sm={12} 
                         md={6} 
                         lg={4} 
                         key={homecard3.title} 
                         sx={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                     >
                         <Box sx={{ width: {lg:'100%', md:'100%',sm:'100%', xs:'100%'}}}>
                             <img src={homecard3.img} alt="" width="100%" style={{ borderRadius: '16px', height: '290px' }} />
                             <Typography sx={{ color: '#0057D9', textDecoration: 'underline', fontSize: '18px' }}><strong>{homecard3.title}</strong></Typography>
                             <Grid sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                 <UpdateIcon sx={{ width: '5%' }} />
                                 <Typography >&nbsp;&nbsp;Duration: {homecard3.du}</Typography>
                             </Grid>
                             <Typography sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                 <StarIcon sx={{ color: 'yellow', width: '4%' }} />{homecard3.star}
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

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer5.data); // Add this console.log statement
    return {
        data: state.reducer5.data,
    };
};


const mapDispatchToProps = {Gethomecard3act}

export default connect(mapStateToProps, mapDispatchToProps)(Homecard5);