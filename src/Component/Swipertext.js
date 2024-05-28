import * as React from 'react';
import {Grid, Box, Typography} from '@mui/material'
import { Button } from '@mui/material';

function Swipertext(){
    return(
        <>
        <Grid sx={{ marginTop: '80px' }}>
                <Typography sx={{ textAlign: 'left', marginLeft: '35px', fontSize: '12px', color: '#B08084', fontSize:'16px' }}>
                    <strong>TRAVEL STOR<span style={{color:'#D76E6B'}}>IES AND NEWS</span></strong>
                </Typography>
            </Grid>

            <Grid>
                <Box>
                <Typography sx={{ textAlign: 'left', marginLeft: '35px', fontSize: {lg:'64px', md:'64px', sm:'45px', xs:'25px'}, color: 'black', fontFamily:'Pangea Display, Helvetica, Arial, sans-serif;' }}>
                    <strong>Explore our latest stories</strong>
                    <Button  variant='filled' sx={{border:'1px solid gray',borderRadius:'20px', margin:'20px 35px', textTransform:'none', float:{xs:'center',sm:'right',md:'right',lg:'right'}}}><strong>Read more articles</strong></Button>
                    <Button  variant='filled' sx={{border:'1px solid gray',borderRadius:'20px', margin:'20px 35px', textTransform:'none', float:{xs:'center',sm:'right',md:'right',lg:'right'}}}><strong>Read more news</strong></Button>

                </Typography>
                </Box>
            </Grid>
        
        </>
    )
}
export default Swipertext;