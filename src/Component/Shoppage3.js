import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Shoppage3(){
    return(
        <>
        <Container maxWidth="xl" sx={{marginTop:'40px'}}>
            <Grid container >
                <Grid item xs={3} >
                    <Typography sx={{fontSize:'23px', color:'#0057D9', fontWeight:'bold'}}>Filters</Typography>
                    <List>
                        <ListItem sx={{borderTop:'1px solid gray', marginTop:'20px', fontWeight:'bold'}}>Regions <KeyboardArrowDownIcon sx={{color:'gray', }}/></ListItem>
                        <ListItem sx={{borderTop:'1px solid gray',  marginTop:'20px', fontWeight:'bold'}}>Countries  <KeyboardArrowDownIcon sx={{color:'gray', textAlign:'end'}}/></ListItem>
                        <ListItem sx={{borderTop:'1px solid gray',  marginTop:'20px', fontWeight:'bold'}}>Categories  <KeyboardArrowDownIcon sx={{color:'gray', textAlign:'end'}}/></ListItem>

                    </List>
                </Grid>
                <Grid item xs={9} sx={{border:'1px solid red'}}>
                    Hello
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
export default Shoppage3;