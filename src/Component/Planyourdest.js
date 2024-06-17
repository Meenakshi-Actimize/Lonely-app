import { Container, Grid, ListItem, List, Typography } from '@mui/material';
import * as React from 'react';
import { Tabs, Tab } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Planyourdest() {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => { 
        setValue(newValue); 
    }; 

    return (
        <>
            <Grid sx={{ backgroundColor: '#F4F2FF', height: 'auto', marginBottom: '20px' }}>
                <Grid sx={{ marginBottom: '18px' }}>
                    <Typography sx={{ fontSize: '30px', textAlign: 'center', paddingTop: '50px' }}><strong>Trips you can feel good about</strong></Typography>
                    <Typography sx={{ textAlign: 'center', marginTop: '20px' }}>We believe that travel should be built on local insight,<br />
                        created and sold directly from the destination itself.</Typography>
                </Grid>


                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>
                        <img src="https://www.elsewhere.io/webflow/images/you-traveler.png" alt="" width="30%" style={{ borderRadius: '80px' }} />
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="black"
                            indicatorColor="primary"
                            aria-label="secondary tabs example"
                            sx={{display:'flex', justifyContent:'center'}}
                        >

                            <Tab value="one" label="You" sx={{marginLeft:'30px', textTransform:'none', fontSize:'18px', fontWeight:'bold', color:'black'}}/>
                        </Tabs>



                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: 'right', display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>
                        <img src="https://www.elsewhere.io/webflow/images/your-destination.png" alt="" width="26%" style={{ borderRadius: '80px' }} />
                        
                        <Tabs
                            value={value}
                            textColor="black"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >

                            <Tab value="one" label="Your destination" sx={{color:'black',  textTransform:'none', fontSize:'18px', fontWeight:'bold', marginLeft:'410px'}}/>
                        </Tabs>


                    </Grid>
                   
                </Grid>

                

                   
            </Grid>

        <Container maxWidth="xl">
            <Grid container  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      
                        <Typography sx={{fontWeight:'bold' }}>By traveling with Elsewhere, we guarantee inside access to<br/> extraordinary trips:</Typography>
                        <List >
                            <ListItem>
                                <CheckCircleOutlineIcon sx={{color:'#006CFF', fontSize:'30px'}}/>&nbsp;&nbsp;Truly unique and hyper-local experiences
                            </ListItem>
                            <ListItem>
                            <CheckCircleOutlineIcon sx={{color:'#006CFF', fontSize:'30px'}}/>&nbsp;&nbsp;The most relevant and reliable choices

                            </ListItem>
                            <ListItem>
                            <CheckCircleOutlineIcon sx={{color:'#006CFF', fontSize:'30px'}}/>&nbsp;&nbsp;An in-destination wingman
                            </ListItem>
                        </List>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        
                        <Typography sx={{   fontWeight:'bold' }}>87% of your tourist dollars are funneled directly into your<br/> destination, toward quality suppliers and projects that:</Typography>
                        <List sx={{alignItems:'right'}}>
                            <ListItem>
                                <CheckCircleOutlineIcon sx={{color:'#A200ED', fontSize:'28px'}}/>&nbsp;&nbsp;Support the local economy
                            </ListItem>
                            <ListItem>
                            <CheckCircleOutlineIcon sx={{color:'#A200ED', fontSize:'28px'}}/>&nbsp;&nbsp;Combat overtourism

                            </ListItem>
                            <ListItem>
                            <CheckCircleOutlineIcon sx={{color:'#A200ED', fontSize:'28px'}}/>&nbsp;&nbsp;Protect local culture, wildlife, and the environment
                            </ListItem>
                        </List>
                        

                    </Grid>
                </Grid>
                </Container>



         
                


        </>
    )
}
export default Planyourdest;
