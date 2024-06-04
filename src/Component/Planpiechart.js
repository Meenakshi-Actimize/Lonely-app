import { Container, Typography, Grid, Box, Card, Button } from '@mui/material';
import * as React from 'react';
import { Tabs, Tab } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';




const data = [
    { value: 2, color:'#D1B9AC'},
    { value: 11, color:'#A200ED'},
    { value: 87, color:'#4695FF'},
];

const size = {
    width: 400,
    height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.secondary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}


function Planpiechart() {
    const [value, setValue] = React.useState(2);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
                <Grid sx={{ marginLeft: '-90px' }}>
                    <Typography>Radical transparency</Typography>
                    <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Where your money goes</Typography>
                </Grid>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="black"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    sx={{ marginTop: '25px' }}
                >
                    <Tab value="one" label="our model" sx={{ color: 'black', textTransform: 'none', fontSize: '14px', fontWeight: 'bold' }} />

                    <Tab value="two" label="Industry model" sx={{ color: 'black', textTransform: 'none', fontSize: '14px', fontWeight: 'bold' }} />
                </Tabs>

                <Card sx={{ marginBottom: '25px', height: '400px' }}>
                    <Grid container>
                        <Grid item xs={8}>
                            <Grid sx={{ display: 'flex' }}>
                                <Grid sx={{margin:'25px'}}>
                                    <Typography variant="h4" sx={{color:'#4695FF', fontWeight:'bold'}}>87%</Typography>
                                    <Typography sx={{fontSize:'16px'}}>Investment in quality suppliers<br /> and projects that support the destination</Typography>
                                </Grid>
                                <Grid sx={{margin:'25px'}}>
                                    <Typography variant="h4" sx={{color:'#A200ED', fontWeight:'bold'}}>11%</Typography>
                                    <Typography>Keeps our website running and<br /> our super lean staff fed</Typography>
                                </Grid>
                            </Grid>
                        <Grid sx={{margin:'25px'}}>
                            <Typography variant="h4" sx={{color:'#D1B9AC', fontWeight:'bold'}}>2%</Typography>
                            <Typography>Carbon offset, reforestation, ocean plastic removal,<br /> and trying to make the world a better place</Typography>
                        </Grid>
                        <Button sx={{border:'1px solid #9409EE', borderRadius:'20px', margin:'25px', textTransform:'none', width:'25%', color:'black', fontWeight:'bold'}}>Our commitments <ArrowForwardIosSharpIcon sx={{fontSize:'18px', marginLeft:'16px', color:'black', fontWeight:'bold'}}/></Button>

                        </Grid>
                        

                        <Grid item xs={4} >
                            <PieChart series={[{ data, innerRadius: 140 }]} {...{ ...size, width: 450, height: 450 }} >
                                <PieCenterLabel>Our model</PieCenterLabel>
                            </PieChart>

                        </Grid>
                        
                    </Grid>
                    

                </Card>
            </Container>

        </>
    )
}
export default Planpiechart;