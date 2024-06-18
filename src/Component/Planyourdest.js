import Imports from "../Import/Import";

function Planyourdest() {
    const [value, setValue] = Imports.React.useState(2);

    const handleChange = (event, newValue) => { 
        setValue(newValue); 
    }; 

    return (
        <>
            <Imports.Grid sx={{ backgroundColor: '#F4F2FF', height: 'auto', marginBottom: '20px' }}>
                <Imports.Grid sx={{ marginBottom: '18px' }}>
                    <Imports.Typography sx={{ fontSize: '30px', textAlign: 'center', paddingTop: '50px' }}><strong>Trips you can feel good about</strong></Imports.Typography>
                    <Imports.Typography sx={{ textAlign: 'center', marginTop: '20px' }}>We believe that travel should be built on local insight,<br />
                        created and sold directly from the destination itself.</Imports.Typography>
                </Imports.Grid>


                <Imports.Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Imports.Grid item xs={12} sm={12} md={6} lg={6} sx={{ display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>
                        <img src="https://www.elsewhere.io/webflow/images/you-traveler.png" alt="" width="30%" style={{ borderRadius: '80px' }} />
                        <Imports.Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="black"
                            indicatorColor="primary"
                            aria-label="secondary tabs example"
                            sx={{display:'flex', justifyContent:'center'}}
                        >

                            <Imports.Tab value="one" label="You" sx={{marginLeft:'30px', textTransform:'none', fontSize:'18px', fontWeight:'bold', color:'black'}}/>
                        </Imports.Tabs>



                    </Imports.Grid>

                    <Imports.Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: 'right', display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>
                        <img src="https://www.elsewhere.io/webflow/images/your-destination.png" alt="" width="26%" style={{ borderRadius: '80px' }} />
                        
                        <Imports.Tabs
                            value={value}
                            textColor="black"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >

                            <Imports.Tab value="one" label="Your destination" sx={{color:'black',  textTransform:'none', fontSize:'18px', fontWeight:'bold', marginLeft:'410px'}}/>
                        </Imports.Tabs>


                    </Imports.Grid>
                   
                </Imports.Grid>

                

                   
            </Imports.Grid>

        <Imports.Container maxWidth="xl">
            <Imports.Grid container  >
                    <Imports.Grid item xs={12} sm={12} md={6} lg={6}>
                      
                        <Imports.Typography sx={{fontWeight:'bold' }}>By traveling with Elsewhere, we guarantee inside access to<br/> extraordinary trips:</Imports.Typography>
                        <Imports.List >
                            <Imports.ListItem>
                                <Imports.CheckCircleOutlineIcon sx={{color:'#006CFF', fontSize:'30px'}}/>&nbsp;&nbsp;Truly unique and hyper-local experiences
                            </Imports.ListItem>
                            <Imports.ListItem>
                            <Imports.CheckCircleOutlineIcon sx={{color:'#006CFF', fontSize:'30px'}}/>&nbsp;&nbsp;The most relevant and reliable choices

                            </Imports.ListItem>
                            <Imports.ListItem>
                            <Imports.CheckCircleOutlineIcon sx={{color:'#006CFF', fontSize:'30px'}}/>&nbsp;&nbsp;An in-destination wingman
                            </Imports.ListItem>
                        </Imports.List>

                    </Imports.Grid>
                    <Imports.Grid item xs={12} sm={12} md={6} lg={6} >
                        
                        <Imports.Typography sx={{   fontWeight:'bold' }}>87% of your tourist dollars are funneled directly into your<br/> destination, toward quality suppliers and projects that:</Imports.Typography>
                        <Imports.List sx={{alignItems:'right'}}>
                            <Imports.ListItem>
                                <Imports.CheckCircleOutlineIcon sx={{color:'#A200ED', fontSize:'28px'}}/>&nbsp;&nbsp;Support the local economy
                            </Imports.ListItem>
                            <Imports.ListItem>
                            <Imports.CheckCircleOutlineIcon sx={{color:'#A200ED', fontSize:'28px'}}/>&nbsp;&nbsp;Combat overtourism

                            </Imports.ListItem>
                            <Imports.ListItem>
                            <Imports.CheckCircleOutlineIcon sx={{color:'#A200ED', fontSize:'28px'}}/>&nbsp;&nbsp;Protect local culture, wildlife, and the environment
                            </Imports.ListItem>
                        </Imports.List>
                        

                    </Imports.Grid>
                </Imports.Grid>
                </Imports.Container>



         
                


        </>
    )
}
export default Planyourdest;
