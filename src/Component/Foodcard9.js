import * as React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';

function Foodcard9(){
    return(
        <>
            <Grid  sx={{
            marginTop:'150px',
            textAlign:'center', 
            borderBottom:'1px solid gray'
        
        }}>
            <Typography sx={{ fontSize: { xs: '10px', md: '11px', lg: '11px' } }}>
                ADVERTISEMENT
            </Typography>
            <Box sx={{marginBottom:'40px'}}>
            <img src="https://tpc.googlesyndication.com/simgad/3754044293244444204" alt=""  width="60%" style={{ height:{lg:'90px', md:'40px', sm:'30px', xs:'28px'}}}/>
            </Box>
        </Grid>
        
        </>
    )
}
export default Foodcard9;