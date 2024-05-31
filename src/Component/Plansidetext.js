import { Typography } from '@mui/material';
import * as React from 'react';
import { Grid } from '@mui/material';

function Plansidetext(){
    return(
        <>
        <Grid  sx={{justifyContent:'center', alignItems:'center', marginTop:'40px'}}>
            <Typography sx={{fontSize:'30px', textAlign:'center'}}><strong>No one does it like our local experts</strong></Typography>
            <Typography sx={{textAlign:'center', marginTop:'20px'}}>Meet our on-the-ground heroes. They know the secret spots, </Typography>
            <Typography sx={{textAlign:'center'}}>the must-do adventures, and have the connections to make anything happen.</Typography>
          

        </Grid>
        </>
    )
}
export default Plansidetext;