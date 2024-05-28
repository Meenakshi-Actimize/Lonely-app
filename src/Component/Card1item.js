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
            <Grid sx={{ marginTop: '80px' }}>
                <Typography sx={{ textAlign: 'left', marginLeft: '35px', fontSize: '12px', color: 'gray' }}>
                    <strong>PLAN YOUR TRIP</strong>
                </Typography>
            </Grid>

            <Grid>
                <Box>
                <Typography sx={{ textAlign: 'left', marginLeft: '35px', fontSize: '45px', color: 'black' }}>
                    <strong>Where to next?</strong>
                    <Button  variant='filled' sx={{border:'1px solid gray',borderRadius:'16px', margin:'20px 35px', float:{xs:'center',sm:'right',md:'right',lg:'right'}}}>View all descriptions</Button>

                </Typography>
                </Box>
            </Grid>
        </>
    );
}
export default Card1item;
