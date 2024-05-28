import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
 
function Homebanner3(){
    return(
        <>
        <Grid  sx={{
            marginTop:'150px',
            textAlign:'center', 
            borderBottom:'1px solid gray'
        
        }}>
            <Typography sx={{ fontSize: { xs: '10px', md: '12px', lg: '13px' } }}>
                ADVERTISEMENT
            </Typography>
            <Box sx={{marginBottom:'40px'}}>
            <img src="https://tpc.googlesyndication.com/simgad/3510117500144793346" alt=""  width="50%" style={{ height:{lg:'90px', md:'40px', sm:'30px', xs:'28px'}}}/>
            </Box>
        </Grid>
        </>
    )
}
export default Homebanner3;