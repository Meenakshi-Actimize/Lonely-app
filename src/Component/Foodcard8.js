import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container, Grid } from '@mui/material';


function Foodcard8(){
    return(
        <>
        
        <Container maxWidth="xl" sx={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
        <Grid item xs={8}>
        <Stack spacing={2}>
         <Pagination count={10} color="standard"/>
         
      
        </Stack>
        </Grid>
        </Container>
        </>
    )
}
export default Foodcard8;