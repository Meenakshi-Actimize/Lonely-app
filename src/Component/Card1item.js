import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Grid, Link, Chip } from '@mui/material';


function Card1item() {
    return (
        <>
            <Grid item xs={3} sx={{ marginTop: '80px' }}>

                <Card
                    variant="outlined"
                    orientation="horizontal"
                    sx={{
                        width: '60%',
                        height:'150px',
                        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                    }}
                >
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                        <img
                            src="https://lp-cms-production.imgix.net/2024-04/GettyImages-1131907103-cropped.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          
                            loading="lazy"
                            alt=""
                            width="50%"
                        />
                    </AspectRatio>
                    <CardContent>
                        <Typography sx={{textAlign:'start'}}>
                            ART
                        </Typography>
                        <Typography sx={{textAlign:'start', color:'black'}}>
                            10 times literary bars around the world
                        </Typography>
                        <Typography sx={{textAlign:'start', color:'black'}}>
                            Apr 23, 2024  &#x2022; 6 min read
                        </Typography>
                           
                       
                    </CardContent>
                </Card>


            </Grid>
            {/* <Grid item xs={3}>
                Hi
            </Grid> */}
        </>
    );
}
export default Card1item;