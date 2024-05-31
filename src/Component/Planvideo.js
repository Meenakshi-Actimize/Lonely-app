import * as React from 'react';
import { Grid, Typography, Box, Button, Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

function Planvideo(){
    return(
        <>
        <Container maxWidth="xl">
            <Grid container sx={{justifyContent:'center', alignItems:'center'}} >
                <Grid xs={11.5} position="relative">
              
                    <video autoPlay muted loop
                        style={{ width:'100%', height:'600px', borderRadius:'22px' , objectFit:'cover', top:'-100%', bottom:'-100%'}} >
                        <source
                            src='https://www.elsewhere.io/webflow/videos/hero-home-transcode.mp4'
                            type="video/mp4"
                        />
                        </video>

                        {/* Text Overlay */}
                        <Typography
                            variant="h1"
                            component="div"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                outLine:'none',
                                transform: 'translate(-50%, -50%)',
                                color: 'white', // Text color
                                textAlign: 'center',
                                padding: '20px',
                                borderRadius: '5px',
                                whiteSpace: 'nowrap', fontSize: { lg: '51px', md: '50px', sm: '34px', xs: '20px' }
                            }}
                        >
                            <strong>Travel like you mean it.</strong> <br />
                            <Typography sx={{fontSize:{lg:'19px', md:'19px', sm:'15px', xs:'10px'}}}><strong >Trips you couldn't plan, even if you wanted to</strong></Typography>
                            <TextField 
                                placeholder="Where do you want to go ?"
                                sx={{backgroundColor:'white',
                                color:'black',
                                borderRadius:'32px', 
                                width:'80%', 
                                textAlign:'center',
                                marginTop:'80px', 
                                height:'65px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'}
                                }}  
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <SearchIcon sx={{backgroundColor:'#7A1BF2', color:'white', borderRadius:'22px', fontSize:'42px'}}/>
                                      </InputAdornment>
                                     
                                     )
                                    }} />
                                  
                        </Typography>

                </Grid>
            </Grid>
        </Container>
        
        </>
    )
}
export default Planvideo;