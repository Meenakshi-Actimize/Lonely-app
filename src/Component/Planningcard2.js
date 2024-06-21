import Imports from "../Import/Import";

// How it works card component in Planning page

function Planningcard2() {
    return (
        <>
            <Imports.Container maxWidth="xl">
                <Imports.Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Imports.Grid xs={11.5} sx={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F0FF', borderRadius: '16px', height: 'auto',  marginBottom:'70px' }}>
                        <Imports.Typography sx={{ fontSize: '30px', textAlign: 'center', marginTop: '80px', fontWeight: 'bold' }}>How it works</Imports.Typography>
                        <Imports.Grid sx={{ marginTop: '25px', display: {lg:'flex', md:'flex', sm:'flex', xs:'block'}, justifyContent: 'center', alignItems: 'center', }}>
                            <Imports.Typography sx={{ paddingLeft: '20px' }}><Imports.Button sx={{ border: '3px solid #8C46F4', borderRadius: '20px', width: {lg:'140px', md:'140px', sm:'140px', xs:'238px'}, textTransform: 'none', fontFamily: 'Geomanist web font', color: 'black' }}>Process</Imports.Button></Imports.Typography>
                            <Imports.Typography sx={{ paddingLeft: '20px' }}><Imports.Button sx={{ border: '1px solid lightgray', borderRadius: '20px', width: {lg:'140px', md:'140px', sm:'140px', xs:'238px'}, textTransform: 'none', fontFamily: 'Geomanist web font', color: 'black' }}>Pricing</Imports.Button></Imports.Typography>
                            <Imports.Typography sx={{ paddingLeft: '20px' }}><Imports.Button sx={{ border: '1px solid lightgray', borderRadius: '20px', width: {lg:'140px', md:'140px', sm:'140px', xs:'238px'}, textTransform: 'none', fontFamily: 'Geomanist web font', color: 'black' }}>Local Experts</Imports.Button></Imports.Typography>
                        </Imports.Grid>
                        <Imports.Grid container gap={4} sx={{ alignItems: 'center', justifyContent: 'center', display:'flex', marginTop: '40px' }}>
                            <Imports.Grid xs={12} sm={12} md={4} lg={4} >
                                <Imports.List >
                                        <Imports.ListItem sx={{marginBottom:'20px'}}>
                                            <Imports.Typography sx={{fontSize:'25px', fontWeight:'bold', borderRadius:'30px', backgroundColor:'white', width:'100%', height:'60px', alignItems:'center', display:'flex', paddingLeft:'15px', color:'#8C46F4', fontSize:{lg:'25px', md:'18px', sm:'25px', xs:'15px'}}}>
                                            <span style={{color:'#8C46F4'}}>1&nbsp;</span> <span style={{color:'black'}}>Mantage a trip request</span>
                                                <Imports.ArrowForwardIosSharpIcon sx={{color:'#8C46F4',  fontSize:'18px', marginLeft:'auto', marginRight:'20px'}}/>
                                                </Imports.Typography>
                                        </Imports.ListItem>
                                        <Imports.ListItem sx={{marginBottom:'20px'}}>
                                        <Imports.Typography sx={{fontSize:'25px', fontWeight:'bold', paddingLeft:'15px', fontSize:{lg:'25px', md:'18px', sm:'25px', xs:'15px'}}}>
                                        <span style={{color:'#8C46F4'}}>2&nbsp;</span> Craft your trip
                                                
                                                </Imports.Typography>
                                        </Imports.ListItem>
                                        <Imports.ListItem sx={{marginBottom:'20px'}}>
                                        <Imports.Typography sx={{fontSize:'25px', fontWeight:'bold', paddingLeft:'15px', fontSize:{lg:'25px', md:'18px', sm:'25px', xs:'15px'}}}>
                                        <span style={{color:'#8C46F4'}}>3&nbsp;</span> Book your trip
                                                
                                                </Imports.Typography>
                                        </Imports.ListItem>
                                        <Imports.ListItem sx={{marginBottom:'20px'}}>
                                        <Imports.Typography sx={{fontSize:'25px', fontWeight:'bold', paddingLeft:'15px', fontSize:{lg:'25px', md:'18px', sm:'25px', xs:'15px'}}}>
                                        <span style={{color:'#8C46F4'}}>4&nbsp;</span> Take-off
                                                
                                                </Imports.Typography>
                                        </Imports.ListItem>
                                </Imports.List>

                                <Imports.Button sx={{background: 'linear-gradient(45deg, #324bf9 11%, #9409ee 84%)', color:'white', textTransform:'none', borderRadius:'24px', width:{lg:'40%', md:'60%', sm:'60%', xs:'100%'}, height:'50px', fontWeight:'bold', fontSize:'16px', marginLeft:{lg:'25px', md:'25px',sm:'140px', xs:'auto'}}}>Craft Your trip</Imports.Button>

                           </Imports.Grid>
                           <Imports.Grid xs={12} sm={12} md={6} lg={6} >

                                <Imports.Typography sx={{fontSize:'16px'}}>Your adventure starts now. Your local expert will act as your right hand throughout your journey. We work exclusively with award-winning and certified local partners, true destination obsessives who know their home country inside-out.</Imports.Typography>
                                <Imports.Typography sx={{marginTop:'20px', fontWeight:'bold', fontSize:'18px'}}>Laying the groundwork:</Imports.Typography>
                                <Imports.List>
                                    <Imports.ListItem>
                                       <Imports.CheckSharpIcon sx={{marginRight:'10px'}}/> Make a trip request to your desired destination.

                                    </Imports.ListItem>
                                    <Imports.ListItem>
                                    <Imports.CheckSharpIcon sx={{marginRight:'10px'}}/> It’s simple and fast and will help your local expert pinpoint exactly what you’re looking for.
                                    </Imports.ListItem>
                                    <Imports.ListItem>                                
                                    <Imports.CheckSharpIcon sx={{marginRight:'10px'}}/> Once submitted, you will be matched with your local expert.
                                    </Imports.ListItem>
                                </Imports.List>
                            </Imports.Grid>

                        </Imports.Grid>
                    </Imports.Grid>


                </Imports.Grid>
            </Imports.Container>

        </>
    )
}
export default Planningcard2;