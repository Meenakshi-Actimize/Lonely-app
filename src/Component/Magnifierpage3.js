import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import React from 'react';


function Magnifierpage3() {



    return (
        <Container maxWidth="xl">
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img
                        src="./images/bac.png"
                        alt=""
                        style={{
                            width: '100%',
                            maxWidth: { lg: '80%', md: '90%', sm: '100%', xs: '100%' },
                            height: '450px'
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
                    <Grid sx={{ margin: '30px' }}>
                        <Typography sx={{ fontSize: { lg: '13px', md: '12px', sm: '12px', xs: '11px' } }}>
                            WHAT IS A MULTI COUNTRY GUIDE?
                        </Typography>
                        <Typography sx={{ fontSize: { lg: '38px', md: '31px', sm: '38px', xs: '22px' }, fontWeight: 'bold' }}>
                            You are viewing a Multi Country Guide
                        </Typography>
                        <Typography>
                            Similar in style and format to our Country and Regional guidebooks, this series helps you focus on two or three neighbouring countries. Extensive pre-planning sections and in-depth coverage are combined with information and listings on history, culture, food, drink, shopping, nightlife and more.
                        </Typography>
                        <List>
                            <ListItem>• Packed with amazing experiences, author recommendations and local knowledge</ListItem>
                            <ListItem>• Planning features and itineraries give you the freedom to create your perfect trip</ListItem>
                            <ListItem>• Our expert authors reveal the local secrets that will make your trip unique</ListItem>
                            <ListItem>• Full of cultural insights for a richer, more rewarding travel experience</ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Magnifierpage3;
