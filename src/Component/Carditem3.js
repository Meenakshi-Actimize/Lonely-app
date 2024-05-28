import { Grid , Typography,Box} from '@mui/material';
import * as React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { Card, CardContent, CardCover } from '@mui/joy'


function Card3items() {
    const pics = [{img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/pandeyrr.jpg?auto=format&fit=fill&q=75&w=750', caption:'@pandeyrr'}, {img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/richardwhitetravels.jpg?auto=format&fit=fill&q=75', caption:'@ali.vonlewinski'}, {img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/wanderlust_fabiana.jpg?auto=format&fit=fill&q=75', caption:'@wanderlust_fabiana'}, {img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/o_thessalonikios.jpg?auto=format&fit=fill&q=75&w=750', caption:'@Unchartedbackpacker'}, {img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/les_carnets_de_mel.jpg?auto=format&fit=fill&q=75&w=750', caption:'@les_Carnets_de_mel'}, {img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/dominik-kobler.jpg?auto=format&fit=fill&q=75&w=750', caption:'@dominik.cobler'}]
    return (
        <>
            <Grid sx={{ backgroundColor: '#0057D9' }}>
                <Grid sx={{textAlign:'center'}}>
                    <Typography variant="h3" sx={{ textAlign: 'left', color: 'white', fontWeight: '500' }}><strong>#lonelyplanet</strong></Typography>
                    <Typography sx={{ textAlign: 'right', color: 'white' }}><strong>FOLLOW LONELY PLANET:
                        <FacebookRoundedIcon />
                        <InstagramIcon />
                        <XIcon />
                        <img src="./images/tiktok.png" alt="" width="1.5%" height="1.5%" /></strong></Typography>
                    </Grid>

                    <Grid container sx={{paddingBottom:'80px', paddingTop:'80px'}}>
                        {pics.map((item) => (
                              <Grid item lg={2} md={2} sm={12} xs={12} sx={{"&:hover img": {
                                opacity: 0.8
                              }}}>
                                

                               <Box>

                              <img src={item.img} title={item.caption} width="100%" />
                              <Typography sx={{color:'#fff',marginTop:'-20%',fontWeight:'bold', textAlign:'left', paddingLeft:'8px'}}>{item.caption}</Typography>
                                </Box> 
                              
                           
                          </Grid>

                        ))}
                      
                    </Grid>


            </Grid>

        </>
    )
}
export default Card3items;