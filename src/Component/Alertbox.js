import Imports from "../Import/Import";



function Alertbox() {
   
    const [open, setOpen] = Imports.useState(true);

    const handleClose = () => {
        setOpen(false);
    };


        return (
            <Imports.Grid variant="filled" >
                <Imports.Collapse in={open}>
                <Imports.Grid
                 sx={{ backgroundColor:'black' , height:'50px', justifyContent: 'center'}}>

                    <Imports.IconButton aria-label="close" color="inherit" onClick={handleClose} sx={{float:'right', marginRight:'15px'}}>

                    <Imports.CloseIcon fontSize="large" sx={{  color:"white"}}/>

                    </Imports.IconButton>

                        <Imports.Typography sx={{fontSize:'14px', color:'#bdbdbd', textAlign:'center', paddingTop:'13px'}}>
                            <i>Best in Travel is here! <u style={{color:'white'}}>Discover 2024’s destinations</u></i>
                        </Imports.Typography>
                    </Imports.Grid>
                </Imports.Collapse>
               
            </Imports.Grid>
        )
    }

    export default Alertbox;