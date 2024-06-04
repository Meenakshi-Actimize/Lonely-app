import * as React from 'react';
import { Grid, TextField, Typography, Button } from '@mui/material';
import { InputAdornment } from '@mui/material';

function Plansignup() {
    return (
        <>
            <Grid sx={{ marginTop: '40px', textAlign: 'center', marginBottom: '80px' }}>
                <Typography sx={{ fontSize: '36px', fontWeight: 'bold' }}>Join our travel revolution</Typography>
                <Typography sx={{ marginTop: '10px' }}>Sign up to stay in the know - hot new travel spots,<br />how we strive to make the world a better place, and all sorts of surprises.
                </Typography>
                <TextField
                    variant="outlined"
                    placeholder="Your email"
                    sx={{ width: '30%', borderRadius: '30px', color:'black' }}
                    InputProps={{
                        sx: {
                            borderRadius: '30px',
                            marginTop: '20px',
                            color: 'black', // Text color
                            '& .MuiInputBase-input': {
                                color: 'black', // Text color inside the input
                            },
                        },
                        endAdornment: (
                            <InputAdornment position="end" sx={{ width: '30%' }}>
                                <Button sx={{ borderRadius: '30px', border: '1px solid gray', textTransform: 'none', color: 'white', width: '100px', background: 'linear-gradient(45deg, #324bf9 11%, #9409ee 84%)', fontSize: '16px', fontWeight: 'bold' }}>
                                    Sign Up
                                </Button>
                            </InputAdornment>
                        ),
                    }}
                />

            </Grid>


        </>
    )
}
export default Plansignup;