import { Container, Grid, List, ListItem, Typography, Box, Card, Button } from '@mui/material';
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import TuneIcon from '@mui/icons-material/Tune';
import { Getshopact } from '../redux/action/Action8';
import { Getshopapi } from '../redux/api/api';
import { useEffect } from 'react';
import { connect } from 'react-redux'



function Shoppage3({data, Getshopact}) {

    useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const gettingshop = await Getshopapi();
                // Dispatch the fetched data using GetCardData
                Getshopact(gettingshop);
                console.log('Hi success plan', gettingshop);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []);

   
   
    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: '40px' }}>
                <Grid container>
                    {/* filter component */}
                    <Grid item xs={12} sm={12} md={3} lg={3} sx={{display:{lg:'block', md:'block', sm:'none', xs:'none'}}}>
                        <Typography sx={{ fontSize: '23px', color: '#0057D9', fontWeight: 'bold', paddingBottom: '16px' }}>Filters</Typography>
                        <Accordion sx={{ paddingBottom: '16px'  }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                
                            >
                                <Typography sx={{ color: 'black', fontWeight: 'bold' }}>Regions</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List sx={{ fontSize: '13px' }}>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Africa (11)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Asia (38)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Australia and Pacific (31)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Caribbean (2)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Central America (7)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Europe (134)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Middle East (7)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;North America (86)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;South America (13)</ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ paddingBottom: '16px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography sx={{ color: 'black', fontWeight: 'bold' }}>Countries</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List sx={{ fontSize: '13px' }}>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Argentina (2)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Australia (24)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Austria (4)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Brazil (2)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Canada (14)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Chile (2)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Croatia (3)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Czech Republic (2)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Denmark (2)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Ecuador (2)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;England (4)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;France (12)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Germany (7)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Greece (4)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Iceland (3)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;India (3)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Ireland (6)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Italy (21)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Japan (7)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;New Zealand (12)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Portugal (6)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Russia (3)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Scotland (7)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Spain (16)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Thailand (4)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;The Netherlands (3)</ListItem>
                                    <ListItem><CheckBoxOutlineBlankIcon />&nbsp;USA (64)</ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ paddingBottom: '16px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography sx={{ color: 'black', fontWeight: 'bold' }}>Categories</Typography>
                            </AccordionSummary>
                            <List sx={{ fontSize: '13px' }}>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Accessible (7)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Best Walks/Hikes (17)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Bike Rides (11)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;City (47)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;City Map (7)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Country Guide (20)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Epic (18)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Experience (33)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;General Reference (2)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Maps (7)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Multi Country Guide (26)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;National Parks (14)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Pocket (83)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Regional Guide (75)</ListItem>
                                <ListItem><CheckBoxOutlineBlankIcon />&nbsp;Road Trips (34)</ListItem>
                            </List>
                        </Accordion>
                    </Grid>

                    {/* Card component */}
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                    <Grid>
                            <Grid sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', }}>
                                <Typography sx={{display:{lg:'block', md:'block', sm:'none', xs:'none'}}}>327 products</Typography>
                                <Typography sx={{display:{lg:'none', md:'none', sm:'block', xs:'block'}}}>Filters&nbsp;<TuneIcon sx={{marginBottom:'-6px'}}/></Typography>
                                <Typography sx={{ marginLeft: 'auto', display: 'flex', justifyContent: 'center' }}>
                                    Sort by 
                                    <KeyboardArrowDownIcon />
                                </Typography>
                            </Grid>
                            <Grid container>
                            {data && data.map((shopdata, index) => (

                                    <Grid item xs={12} sm={6} md={6} lg={2.4} key={index} sx={{ marginBottom: '40px' }}>
                                        <Card
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                boxShadow: 'none',
                                                border: 'none',
                                                position: 'relative',

                                                '&:hover .hover-buttons': {
                                                    opacity: 1,
                                                    visibility: 'visible',
                                                    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
                                                    backgroundColor: 'white',
                                                    marginTop: '20px'
                                                }
                                            }}
                                        >
                                            <img src={shopdata.img} alt="" style={{ width: shopdata.width === 'true' ? "76%" : "60%" }} />

                                            <Grid container className="hover-buttons" sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '10px',
                                                opacity: 1.8,
                                                visibility: 'hidden',
                                                boxShadow: 'none', border: 'none'
                                            }}>
                                                <Button sx={{ border: '1px solid gray', borderRadius: '22px', width: '80%', textTransform: 'none', color: 'black', fontSize: '17px', backgroundColor: 'white' }}>Select option <KeyboardArrowDownIcon /></Button>
                                                <Button sx={{ border: '1px solid gray', borderRadius: '22px', width: '80%', backgroundColor: '#0057D9', textTransform: 'none', color: 'white', fontSize: '17px' }}>Add to cart</Button>
                                                <Button sx={{ border: '1px solid gray', borderRadius: '22px', width: '80%', backgroundColor: '#AC98F9', textTransform: 'none', color: 'white', fontSize: '17px' }}>Buy with Shop</Button>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer8.data); // Add this console.log statement
    return {
        data: state.reducer8.data,
    };
};


const mapDispatchToProps = { Getshopact }

export default connect(mapStateToProps, mapDispatchToProps)(Shoppage3);