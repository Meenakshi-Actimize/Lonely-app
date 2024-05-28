import * as React from 'react';
import { Grid, Typography, Container, Button } from '@mui/material';
import KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown'

function Lastcomp(){
    return(
        <>
                <Grid container xs={12} sx={{backgroundColor:'black', marginTop:'30px', color:'white'}}>
                <Grid >
                    <Typography sx={{textAlign:'start', fontSize:'13px', marginLeft:'25px'}}>
           © 2024 Lonely Planet, a Red Ventures company. All rights reserved. No part of this site may be reproduced without our written permission.</Typography>
           </Grid>
       
         </Grid>

        </>
    )
}

export default Lastcomp;