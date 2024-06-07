import { Container, Grid, List, ListItem, Typography, Box, Card, Button } from '@mui/material';
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function Shoppage3() {
    const shopcarddata = [{ img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781787011472_200x.jpg?v=1695403023' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/alaska_14_300x.jpg?v=1716918902' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/amalfi-coast-road-trips_300x.jpg?v=1667667098' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781788687645_300x.jpg?v=1695402965' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/9781838691639.MAIN_300x.jpg?v=1717621055' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/antarctica-travel-guide_300x.jpg?v=1695749422' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/atlantic-canada-7_300x.jpg?v=1713988786' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781788683609_300x.jpg?v=1665997525' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/Austria_11_300x.jpg?v=1717010793' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781788683760_300x.jpg?v=1695401405' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/banff-jasper-glacier-np-7_300x.jpg?v=1705954944' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/bangkok-city-guide_300x.jpg?v=1695748992' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/barcelona_300x.jpg?v=1695402023' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/BarcelonaCityMap2_300x.jpg?v=1699558197' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/beijing-city-map_300x.jpg?v=1695749795' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781788680547_300x.jpg?v=1695402684' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781788680738_300x.jpg?v=1695402956' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/BerlinCityMap2_300x.jpg?v=1699558614' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/Best_Bike_Rides_Australia_1_300x.jpg?v=1694626722' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/Best_Bike_Rides_France_1_300x.jpg?v=1694629620' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/9781838697907_300x.jpg?v=1694627985' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/9781838698126_300x.jpg?v=1694628531' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/Best_Bike_Rides_New_Zealand_1_300x.jpg?v=1694629116' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781838691158_300x.jpg?v=1680324341' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781838691172_300x.jpg?v=1680324341' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/files/France_Best_Day_Walk_ROW_2.9781838696887_300x.jpg?v=1713993780' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/best-day-walks-great-britain-1-au-uk_300x.jpg?v=1667761023' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781838690762_300x.jpg?v=1680324341' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781838690779_300x.jpg?v=1680324341' }, { img: 'https://shop.lonelyplanet.com/cdn/shop/products/9781838691219_300x.jpg?v=1680324341' }]
    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: '40px' }}>
                <Grid container>


                    {/* filter component */}


                    <Grid item xs={3}>
                        <Typography sx={{ fontSize: '23px', color: '#0057D9', fontWeight: 'bold', paddingBottom: '16px' }}>Filters</Typography>
                        <Accordion sx={{ paddingBottom: '16px' }}>
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


                    <Grid item xs={9} sx={{}}>
                        <Grid >
                            {/* <Grid><Typography>327 products</Typography></Grid>
                            <Grid sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>

                                <Typography>
                                    <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"

                                        >
                                            Alphabetically, A-Z
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List sx={{ fontSize: '13px' }}>
                                                <ListItem>Best selling</ListItem>
                                                <ListItem>Alphabetically A-Z</ListItem>
                                                <ListItem>Alphabetically Z-A</ListItem>
                                                <ListItem>Price, high to low</ListItem>
                                                <ListItem>Price, low to high</ListItem>
                                                <ListItem>Date, old to new</ListItem>
                                                <ListItem>Date, new to old</ListItem>
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                </Typography>
                            </Grid> */}
                            <Grid sx={{display:'flex', alignItems:'center', marginBottom:'20px'}}x>
                                <Typography>327 products</Typography>
                                <Typography sx={{marginLeft:'auto', display:'flex', justifyContent:'center'}}>
                               
                                            Sort by Alphabetically, A-Z
                                        <KeyboardArrowDownIcon />
                                </Typography>
                            </Grid>
                            <Grid container>
                                {shopcarddata.map((item, index) => (
                                    <Grid item xs={2.4} key={index} sx={{ marginBottom: '40px' }}>
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
                                                    backgroundColor:'white',
                                                    marginTop:'20px'
                                                }
                                            }}
                                        >
                                            <img src={item.img} alt="" width="60%" />
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

export default Shoppage3;
