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
    const images = [{img: 'https://lp-cms-production.imgix.net/2024-04/GettyImages-1131907103-cropped.jpg?auto=format&w=140&h=140&fit=crop&q=75', title:'ART', subtitle:'10 times literary bars around the world', date:'Apr 23, 2024  &#x2022; 6 min read', des:'From Paris to Buenos Aires, you&lsquo; ll want to settle in and raise a glass at these famous literary bars, notebook at the ready.'}, {img: 'https://lp-cms-production.imgix.net/2024-04/IMG8707-2.jpeg?auto=format&w=140&h=140&fit=crop&q=75', title:'SOLO TRAVEL', subtitle:'10 times literary bars around the world', date:'Apr 23, 2024  &#x2022; 6 min read', des:'From Paris to Buenos Aires, you&lsquo; ll want to settle in and raise a glass at these famous literary bars, notebook at the ready.'}]
    return (
        <>
            <Grid>
                
            </Grid>
            <Grid item xs={3} sx={{ marginTop: '80px' , paddingLeft:'50px',}}>
                    {images.map((item) => (
                        <>
                        <Card
                    variant="outlined"
                    orientation="horizontal"
                    sx={{
                        width: '55%',
                        height:'140px',
                        marginTop:'40px',
                        
                        
                        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                    }}
                >
                          <img
                          src={item.img}
                        
                          loading="lazy"
                          alt=""
                          width="137px" style={{borderRadius:'10px', height:'137px'}}
                      />
                  <CardContent>
                      <Typography sx={{textAlign:'start', color:'gray', fontSize:'12px'}}>
                          <strong>{item.title}</strong>
                      </Typography>
                      <Typography sx={{textAlign:'start', color:'black'}}>
                          <strong>{item.subtitle}</strong>
                      </Typography>
                      <Typography sx={{textAlign:'start', color:'gray'}}>
                          {item.date}
                      </Typography>
                      <Typography sx={{textAlign:'start', color:'gray'}}>
                           {item.des}
                      </Typography>
                         
                     
                  </CardContent>
                  </Card>
                  </>

                    ))}
                      


            </Grid>
            {/* <Grid item xs={3}>
                Hi
            </Grid> */}
        </>
    );
}
export default Card1item;