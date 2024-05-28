import * as React from 'react';
import Navbarcomp from '../Component/Navbarcomp';
import { Container, Typography } from '@mui/material';
import Alertbox from '../Component/Alertbox';
import { BorderBottom } from '@mui/icons-material';

function Home1(){
    return(

        <>
            <Alertbox />
            <Navbarcomp />
            <Container maxWidth="xl" sx={{backgroundColor:'white'}}>
                <img src="https://lp-cms-production.imgix.net/2023-01/GettyImages-827446284.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75"  alt="" width="100%" style={{marginTop: 0, borderRadius:'22px', height:{xl:'876px',lg:'876px', md:'476px', sm:'300px', xs:'300px'} , zIndex:10, color:'transparent'}}/>
                <Typography sx={{color:'#fff',marginTop:'-3%',fontWeight:'bold', fontSize:'12px', textAlign:'left', paddingLeft:'22px', marginBottom:'80px'}}>Getty Images</Typography>
            </Container>
        
        </>
    )
}
export default Home1;