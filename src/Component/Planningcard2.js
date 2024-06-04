import { Container, Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';
import * as React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';

function Planningcard2() {
    return (
        <>
            <Container maxWidth="xl">
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid xs={11.5} sx={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F0FF', borderRadius: '16px', height: '750px',  marginBottom:'70px' }}>
                        <Typography sx={{ fontSize: '30px', textAlign: 'center', marginTop: '80px', fontWeight: 'bold' }}>How it works</Typography>
                        <Grid sx={{ marginTop: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <Typography sx={{ paddingLeft: '20px' }}><Button sx={{ border: '3px solid #8C46F4', borderRadius: '20px', width: '140px', textTransform: 'none', fontFamily: 'Geomanist web font', color: 'black' }}>Process</Button></Typography>
                            <Typography sx={{ paddingLeft: '20px' }}><Button sx={{ border: '1px solid lightgray', borderRadius: '20px', width: '140px', textTransform: 'none', fontFamily: 'Geomanist web font', color: 'black' }}>Pricing</Button></Typography>
                            <Typography sx={{ paddingLeft: '20px' }}><Button sx={{ border: '1px solid lightgray', borderRadius: '20px', width: '140px', textTransform: 'none', fontFamily: 'Geomanist web font', color: 'black' }}>Local Experts</Button></Typography>
                        </Grid>
                        <Grid container gap={4} sx={{ alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
                            <Grid xs={4} >
                                <List >
                                        <ListItem sx={{marginBottom:'20px'}}>
                                            <Typography sx={{fontSize:'25px', fontWeight:'bold', borderRadius:'30px', backgroundColor:'white', width:'100%', height:'60px', alignItems:'center', display:'flex', paddingLeft:'15px'}}>
                                                <span style={{color:'#8C46F4', fontSize:'30px'}}>1&nbsp;</span> Make a trip Request
                                                <ArrowForwardIosSharpIcon sx={{color:'#8C46F4',  fontSize:'18px', marginLeft:'auto', marginRight:'20px'}}/>
                                                </Typography>
                                        </ListItem>
                                        <ListItem sx={{marginBottom:'20px'}}>
                                        <Typography sx={{fontSize:'25px', fontWeight:'bold', paddingLeft:'15px'}}>
                                        <span style={{color:'#8C46F4', fontSize:'30px'}}>2&nbsp;</span> Craft your trip
                                                
                                                </Typography>
                                        </ListItem>
                                        <ListItem sx={{marginBottom:'20px'}}>
                                        <Typography sx={{fontSize:'25px', fontWeight:'bold', paddingLeft:'15px'}}>
                                        <span style={{color:'#8C46F4', fontSize:'30px'}}>3&nbsp;</span> Book your trip
                                                
                                                </Typography>
                                        </ListItem>
                                        <ListItem sx={{marginBottom:'20px'}}>
                                        <Typography sx={{fontSize:'25px', fontWeight:'bold', paddingLeft:'15px'}}>
                                        <span style={{color:'#8C46F4', fontSize:'30px'}}>4&nbsp;</span> Take-off
                                                
                                                </Typography>
                                        </ListItem>
                                </List>

                                <Button sx={{background: 'linear-gradient(45deg, #324bf9 11%, #9409ee 84%)', color:'white', textTransform:'none', marginLeft:'28px', borderRadius:'24px', width:'40%', height:'50px', fontWeight:'bold', fontSize:'16px'}}>Craft Your trip</Button>

                            </Grid>
                            <Grid xs={6} sx={{  height:'370px' }}>
                                <Typography sx={{fontSize:'16px'}}>Your adventure starts now. Your local expert will act as your right hand throughout your journey. We work exclusively with award-winning and certified local partners, true destination obsessives who know their home country inside-out.</Typography>
                                <Typography sx={{marginTop:'20px', fontWeight:'bold', fontSize:'18px'}}>Laying the groundwork:</Typography>
                                <List>
                                    <ListItem>
                                       <CheckSharpIcon sx={{marginRight:'10px'}}/> Make a trip request to your desired destination.

                                    </ListItem>
                                    <ListItem>
                                    <CheckSharpIcon sx={{marginRight:'10px'}}/> It’s simple and fast and will help your local expert pinpoint exactly what you’re looking for.
                                    </ListItem>
                                    <ListItem>                                
                                    <CheckSharpIcon sx={{marginRight:'10px'}}/> Once submitted, you will be matched with your local expert.
                                    </ListItem>
                                </List>
                            </Grid>

                        </Grid>
                    </Grid>


                </Grid>
            </Container>

        </>
    )
}
export default Planningcard2;