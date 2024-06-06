import * as React from 'react';
import { Grid, Typography, Box, Container, Card } from '@mui/material';

function Foodcard7(){
    const food3data = [
        { img: 'https://lp-cms-production.imgix.net/2022-03/Indonesia%20Gili%20Meno%20%C2%A9%20Wonderful%20Nature%20shutterstock_1475734397.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'ACTIVITIES', subtitle: 'Which Gili island is best for you? Heres how to choose', time: 'May 16, 2024 • 5 min read', des: 'The three Gili Islands have developed their own individual character and atmosphere. Our guide can help you choose the right island for you.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/GettyImages-1749105154-cropped.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'FOOD AND DRINK', subtitle: 'I’ve been to nearly every rooftop bar in NYC. These are the best for summer 2024', time: 'May 16, 2024 • 8 min read', des: 'What makes a cold cocktail taste even better? Superb view of the Big Apple. These are the 14 best rooftop bars in New York City.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/NHNewportHarbor-scaled.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'ACTIVITIES', subtitle: 'Copy My Trip: Whale-watching, relaxation and sweet treats in Newport Beach, California', time: 'May 15, 2024 • 5 min read', des: 'Plan your sunny coastal getaway to Newport Beach, California, with these tips and insight from a Lonely Planet editor.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/IndigenousVideoPhotography-Edmonton.jpeg?auto=format&w=140&h=140&fit=crop&q=75', title: 'ACTIVITIES', subtitle: 'Get to know the Indigenous side of Edmonton, Albertas capital city', time: 'May 15, 2024 • 8 min read', des: 'Edmonton offers tons of experiences that lend insight into the citys Indigenous culture, heritage and traditions – get to know the citys Indigenous side.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/barbados-de-thirsty-lizard-kyle-babb-KB21193.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'SHOPPING', subtitle: 'You’ll see this everywhere: rum shops in Barbados', time: 'May 13, 2024 • 7 min read', des: 'Discover Barbados’ rich history as the birthplace of rum and how it became home to almost 1500 rum shops across the island.' },
          ];
    return(
        <>
         <Container maxWidth="xl" sx={{ marginTop: '80px' }}>
                <Grid container spacing={2}>
                    {food3data.map((item, index) => (
                        <Grid item xs={8} key={index} sx={{ height: 'auto', display: 'flex' }}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    width: '90%',
                                    boxShadow: 'none',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    transition: 'box-shadow 0.3s',
                                    '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
                                }}
                            >
                                <Box sx={{ display: 'block', justifyContent: 'center', flex: '0 0 auto' }}>
                                    <img
                                        src={item.img}
                                        alt=""
                                        width="80%"
                                        style={{ borderRadius: '14px', margin: '20px', height: '170px' }}
                                    />
                                </Box>
                                <Box sx={{ marginY: '20px' }}>
                                    <Typography sx={{ fontSize: '14px', color: '#B1B1B1', fontWeight: 'bold', paddingBottom: '5px' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: '18px', color: '#121212', fontWeight: 'bold', paddingBottom: '5px' }}>
                                        {item.subtitle}
                                    </Typography>
                                    <Typography sx={{ fontSize: '14px', color: '#514B4B', paddingBottom: '5px' }}>
                                        {item.time}
                                    </Typography>
                                    <Typography sx={{ color: '#4B4B4B', fontSize: '14px' }}>
                                        {item.des}
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                      
                    ))}
                      <Grid item xs={4}>
                        </Grid>
                </Grid>
            </Container>
        
        </>
    )
}
export default Foodcard7;