import * as React from 'react';
import { Grid, Typography } from '@mui/material';

function Banner1comp(){

    return(
        <>
        <Grid  sx={{
            marginTop:'120px' ,
            textAlign:'center'
        }}>
            <Typography sx={{ fontSize: { xs: '10px', md: '12px', lg: '13px' } }}>
                ADVERTISEMENT
            </Typography>
            <img src="https://tpc.googlesyndication.com/simgad/6861019118589770948" alt="" width="50%" />
        </Grid>
        </>
    )
}

export default Banner1comp;
