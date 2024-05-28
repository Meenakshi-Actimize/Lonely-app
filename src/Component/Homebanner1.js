import * as React from 'react';
import { Grid, Typography, Box } from '@mui/material';

function Homebanner1(){
    return(
        <>
          <Grid  sx={{
            marginTop:'120px' ,
            textAlign:'center'
        }}>
            <Typography sx={{ fontSize: { xs: '10px', md: '12px', lg: '13px' } }}>
                ADVERTISEMENT
            </Typography>
            <Box>
            <img src="https://tpc.googlesyndication.com/simgad/9710485096168726448" alt=""  width="50%" style={{ height:{lg:'90px', md:'40px', sm:'30px', xs:'28px'}}}/>
            </Box>
        </Grid>
        </>

    )
}
export default Homebanner1;