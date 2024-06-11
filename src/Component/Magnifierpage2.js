import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';


function Magnifierpage2() {
    
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sm={12} md={2} lg={2} sx={{ alignItems: 'center' }}>
                    <img src='https://shop.lonelyplanet.com/cdn/shop/files/9781787011472_216x.jpg' alt='' width="40%" style={{border:'2px solid blue'}}/>
                    <Typography sx={{fontSize:'10px', marginTop:'20px', color:'#2D6ADE', textDecoration:'underline', fontWeight:'bold'}}>SEE MORE IMAGES</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <img src='https://shop.lonelyplanet.com/cdn/shop/files/9781787011472_216x.jpg' alt='' width="85%" />


                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Typography sx={{ fontSize: '35px', color: '#2670DF', fontWeight: 'bold' }}>Africa</Typography>
                    <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Rs. 3,000.00</Typography>
                    <Grid sx={{ marginTop: '20px' , display:'flex', justifyContent:'center'}}>
                        <Button sx={{ border: '1px solid gray', textTransform: 'none', width:'30%', height: '65px', borderRadius: '13px', color: 'black', fontWeight: 'bold', fontSize: '13px', backgroundColor: '#EBF4FF', display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>Book<br />Rs. 3,000.00</Button>
                        <Button sx={{ border: '1px solid gray', textTransform: 'none', marginLeft: '20px', width: '30%', height: '65px', borderRadius: '13px', color: 'black', fontSize: '13px', display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>eBook <br />Rs. 1,600.00</Button>
                        <Button sx={{ border: '1px solid gray', textTransform: 'none', marginLeft: '20px', width: '30%', height: '65px', borderRadius: '13px', color: 'black', fontSize: '13px', display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>Book + eBook <br />Rs. 3,400.00</Button>
                    </Grid>
                    <Grid>
                        <Button sx={{ width: '97%', border: '1px solid gray', marginTop: '25px', height: '60px', borderRadius: '13px', backgroundColor: 'white', marginLeft:'10px' }}>
                            <Grid container sx={{ margin: '10px' }}>
                                <Grid item xs={6} >
                                    <Typography sx={{ fontSize: '13px', textTransform: 'none', color: 'black', textAlign: 'left' }}>Book<br />Rs. 0.00</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}>
                                    <img src="https://static.thenounproject.com/png/2392586-200.png" alt="" width="7%" style={{ height: '20px', marginTop: '8px' }} />&nbsp;
                                    <img src="https://shop.lonelyplanet.com/cdn/shop/files/lp-insider-blue-h-200_50116a12-e0e7-4417-977c-be3d10321011.svg?v=1707831694&width=50" alt="" width="60%" />
                                </Grid>
                            </Grid>
                        </Button>
                    </Grid>


                    <Grid sx={{ marginTop: '30px' }}>
                        <Button sx={{ border: '1px solid gray', borderRadius: '22px', width: '46%', height: '45px', backgroundColor: '#0057D9', color: 'white', fontWeight: 'bold' }}>Add to Cart</Button>
                        <Button sx={{ border: '1px solid gray', borderRadius: '22px', width: '46%', height: '45px', marginLeft: '30px', backgroundColor: '#AC98F9', color: 'white', textTransform: 'none' }}>Buy with Shop</Button>
                    </Grid>


                    <Grid sx={{marginTop:'30px'}}>
                    <Accordion sx={{color:'#0057D9', fontWeight:'bold', borderTop:'1px solid lightgray', borderBottom:'1px solid lightgray'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:'blue'}}/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            WHAT'S INSIDE
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul style={{color:'black', textDecoration:'none'}}>
                                <li>Colour maps and images throughout</li>
                                <li>Highlights and itineraries help you tailor your trip to your personal needs and interests</li>
                                <li>Insider tips to save time and money and get around like a local, avoiding crowds and trouble spots</li>
                                <li>Essential info at your fingertips - hours of operation, phone numbers, websites, transit tips, prices</li>
                                <li>Honest reviews for all budgets - eating, sleeping, sight-seeing, going out, shopping, hidden gems that most guidebooks miss</li>
                                <li>Cultural insights give you a richer, more rewarding travel experience – history, culture, wildlife, safaris, cuisine, music, environment</li>
                                <li>Over 220 maps</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{color:'#0057D9', fontWeight:'bold', borderBottom:'1px solid lightgray'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:'blue'}}/>}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            COVERS
                        </AccordionSummary>
                        <AccordionDetails sx={{color:'black'}}>
                        Coverage Includes: Egypt, Tanzania, Morocco, Botswana, Mozambique, South Africa, Madagascar, Kenya, Ethiopia, Ghana, Nigeria, Cabo Verde and more
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{color:'#0057D9', fontWeight:'bold'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:'blue'}}/>}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            BOOK DETAILS
                        </AccordionSummary>
                        <AccordionDetails sx={{color:'black'}}>
                            <Typography>eBook is available in ePub, MOBI and PDF.</Typography>
                            <Typography>ISBN: 9781786571526</Typography>
                            <Typography>Edition: 14th</Typography>
                            <Typography>Publication Date: November 2017</Typography>
                            <Typography>Language: English</Typography>
                            <Typography>Writers: Anthony Ham, Brett Atkinson, James Bainbridge, Stuart Butler, Jean-Bernard Carillet, Paul Clammer, Lucy Corne, Emilie Filou, Mary Fitzpatrick, Michael Grosberg, Trent Holden, Jessica Lee, Stephen Lioy, Nana Luckham, Vesna Maric, Tom Masters, Virginia Maxwell, Lorna Parkes, Helen Ranger, Brendan Sainsbury, Caroline Sieg, Helena Smith, Regis St Louis, Paul Stiles</Typography>
                            <Typography>1120 pages, 64pp color, 229 maps | Dimensions: 128mm × 197mm</Typography>
                            <Typography>Next edition due: December 2024</Typography>
                        </AccordionDetails>

                    </Accordion>
                    </Grid>

                    <Grid  sx={{border:'1px solid gray', backgroundColor:'#EBF4FF', marginTop:'30px', width:'80%',  height: '120px', 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto', borderRadius:'16px', marginBottom:'100px'}}>
                        <Grid item xs={4} >
                            <LocalShippingOutlinedIcon  sx={{color:'#2D6ADE', width:'100%', fontSize:'50px'}}/>
                            <Typography sx={{color:'#2D6ADE', textAlign:'center'}}>Free shipping on all orders</Typography>
                        </Grid>
                        <Grid item xs={4} >
                        <AssignmentReturnedOutlinedIcon sx={{color:'#2D6ADE', width:'100%', fontSize:'50px'}}/>
                        <Typography sx={{color:'#2D6ADE', textAlign:'center'}}>30 day<br/>returns</Typography>

                        </Grid>
                        <Grid item xs={4} >
                            <EngineeringOutlinedIcon sx={{color:'#2D6ADE', width:'100%', fontSize:'50px'}}/>
                            <Typography sx={{color:'#2D6ADE', textAlign:'center'}}>Expert customer service</Typography>

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}
export default Magnifierpage2;