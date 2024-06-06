import * as React from 'react';
import { Box, Container, Grid, Card, Typography } from '@mui/material';

function Foodcard1() {
    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: '80px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={9} sx={{ height: 'auto', display: 'flex' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                width: '80%',
                                boxShadow: 'none',
                                border: 'none',
                                backgroundColor: 'transparent',
                                transition: 'box-shadow 0.3s',
                                '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
                            }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
                                <img
                                    src="https://lp-cms-production.imgix.net/2024-06/Title.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                                    alt=""
                                    width="100%"
                                    style={{ borderRadius: '14px', margin: '20px', height:'170px' }}
                                />
                            </Box>
                            <Box sx={{ marginY: '20px' }}>
                                <Typography sx={{ fontSize: '14px', color: '#B1B1B1', fontWeight: 'bold', paddingBottom: '5px' }}>
                                    FOOD AND DRINK
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: '#121212', fontWeight: 'bold', paddingBottom: '5px' }}>
                                    Local Flavour: the best places to eat and drink in Tucson, Arizona
                                </Typography>
                                <Typography sx={{ fontSize: '14px', color: '#514B4B', paddingBottom: '5px' }}>
                                    Jun 4, 2024 &#x2022; 5 min read
                                </Typography>
                                <Typography sx={{ color: '#4B4B4B', fontSize: '14px' }}>
                                    <Grid>Located in the heart of the Sonoran Desert, the vivacious little city of Tucson, Arizona,</Grid>
                                    <Grid>has a unique culinary scene that represents a confluence of cultures.</Grid>
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                 
                </Grid>



                <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                    <Grid item xs={9} sx={{ height: 'auto', display: 'flex' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                width: '80%',
                                boxShadow: 'none',
                                border: 'none',
                                backgroundColor: 'transparent',
                                transition: 'box-shadow 0.3s',
                                '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
                            }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
                                <img
                                    src="https://lp-cms-production.imgix.net/2024-05/GettyImages-901549690.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                                    alt=""
                                    width="99%"
                                    style={{ borderRadius: '14px', margin: '20px', height:'170px' }}
                                />
                            </Box>
                            <Box sx={{ marginY: '20px' }}>
                                <Typography sx={{ fontSize: '14px', color: '#B1B1B1', fontWeight: 'bold', paddingBottom: '5px' }}>
                                    FOOD AND DRINK
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: '#121212', fontWeight: 'bold', paddingBottom: '5px' }}>
                                    What to eat and drink in Australia
                                </Typography>
                                <Typography sx={{ fontSize: '14px', color: '#514B4B', paddingBottom: '5px' }}>
                                    Jun 2, 2024 &#x2022; 6 min read
                                </Typography>
                                <Typography sx={{ color: '#4B4B4B', fontSize: '14px' }}>
                                    <Grid>Eat Your way through a varied menu spanning meat-heavy, rustic dishes, farm-fresh  Here's</Grid>
                                    <Grid>our guide to Austrian cuisine. Has a unique culinary scene that represents a confluence of cultures.</Grid>
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                  
                </Grid>
            </Container>
        </>
    );
}

export default Foodcard1;
