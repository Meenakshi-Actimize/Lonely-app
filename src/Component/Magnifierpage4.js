import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import { Card, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Magnifierpage4(){
    return(
        <>
        <Grid  sx={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
            <Typography sx={{fontSize:'30px', fontWeight:'bold'}}>You may also like</Typography>
            </Grid>
            <Grid sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'30px', marginBottom:'50px'}}>
                                        <Card
                                            sx={{
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
                                                    marginTop: '150px'
                                                }
                                            }}
                                        >
                                            <img src="https://cdn.shopify.com/s/files/1/0650/8521/0875/products/9781787011472_300x.jpg?v=1695403023" alt=""  width="100%" style={{height:'350px'}}/>

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

        
        </>
    )
}
export default Magnifierpage4;