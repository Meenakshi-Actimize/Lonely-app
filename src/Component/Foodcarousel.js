import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Getfood1act } from '../redux/action/Action9';
import { Getfood1api } from '../redux/api/api';
import { useEffect } from 'react';
import { connect } from 'react-redux'

function Foodcarousel({data, Getfood1act}) {
    useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const gettingfood = await Getfood1api();
                // Dispatch the fetched data using GetCardData
                Getfood1act(gettingfood);
                console.log('Hi success plan', gettingfood);
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
                <Typography sx={{position:'absolute', top:300, left:480, fontSize:'80px', zIndex:4, textTransform:'none', color:'white', fontWeight:'bold'}}>Food and Drink</Typography>
                {data && data.map((fooddata, index) => (
                <Grid 
                    item 
                    xs={4} 
                    sx={{ position: 'relative', '&:hover img': { filter: 'brightness(1.2)' }, '& img': { filter: 'brightness(0.8)', transition: 'filter 0.3s' } }}
                >
                    <img src={fooddata.img} alt="" width="100%" />
                    <Typography sx={{ position: 'absolute', top: '455px', left: 20, color: 'white', fontSize: '33px' }}>
                        <Grid>{fooddata.text1}</Grid>
                        <Grid>{fooddata.text2}</Grid>
                        <Grid>{fooddata.text3}</Grid>
                        <Grid sx={{ display: 'flex' }}>
                            <Grid>{fooddata.text4}</Grid>
                            <Grid sx={{ marginLeft: 'auto', textAlign: 'end' }}>
                                <ArrowForwardIcon sx={{ color: 'white' }} />
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
                ))}
            </Grid>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer9.data); // Add this console.log statement
    return {
        data: state.reducer9.data,
    };
};


const mapDispatchToProps = { Getfood1act }

export default connect(mapStateToProps, mapDispatchToProps)(Foodcarousel);