import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, Typography, Link } from '@mui/material';
import { useState } from 'react';



function Alertbox() {
   
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };


        return (
            <Grid variant="filled" >
                <Collapse in={open}>
                <Grid sx={{ backgroundColor:'black' , height:'50px', justifyContent: 'center'}}>

                    <IconButton aria-label="close" color="inherit" onClick={handleClose} sx={{float:'right', marginRight:'15px'}}>

                    <CloseIcon fontSize="large" sx={{  color:"white"}}/>

                    </IconButton>

                        <Typography sx={{fontSize:'14px', color:'#bdbdbd', justifyContent: 'center', alignItems:'center', paddingTop:'13px'}}>
                            <i>Best in Travel is here! <u style={{color:'white'}}>Discover 2024’s destinations</u></i>
                        </Typography>
                    </Grid>
                </Collapse>
               
            </Grid>
        )
    }

    export default Alertbox;