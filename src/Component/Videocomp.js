import * as React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { Getvideo } from '../redux/action/Action2';
import { Get1video } from '../redux/api/api';
import { connect } from 'react-redux'
import { useEffect } from 'react';


function Videocomp({ data, Getvideo }) {
    useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const gettingvideodata = await Get1video();
                // Dispatch the fetched data using GetCardData
                Getvideo(gettingvideodata);
                console.log('Hi success', gettingvideodata);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []);

    return (
        <>
            <Grid container>
                <Box position="relative" sx={{ marginTop: '60px', width: '100%' }}>
                {data && data.map((vdeo, index) => (
                    <video autoPlay muted loop
                        style={{ width: '100%', maxWidth: '100%', height: 'auto' }} >
                        <source
                            src={vdeo.video}
                            type="video/mp4"
                        />
                        </video>
                ))}

                        {/* Text Overlay */}
                        <Typography
                            variant="h1"
                            component="div"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white', // Text color
                                textAlign: 'center',
                                padding: '20px',
                                borderRadius: '5px',
                                whiteSpace: 'nowrap', fontSize: { lg: '64px', md: '50px', sm: '30px', xs: '20px' }
                            }}
                        >
                            <strong>BEST IN TRAVEL 2024</strong> <br />
                            <Button variant="contained" sx={{ border: '1px solid white', borderRadius: '18px', backgroundColor: 'white', color: 'black', textTransform: 'none' }}>Discover the winners</Button>

                        </Typography>

                </Box>
            </Grid>
        </>
    )
}

// export default Videocomp;

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer2.data); // Add this console.log statement
    return {
        data: state.reducer2.data,
    };
};


const mapDispatchToProps = { Getvideo }

export default connect(mapStateToProps, mapDispatchToProps)(Videocomp);
