import Imports from "../Import/Import";

function Foodcard1() {
    return (
        <>
            <Imports.Container maxWidth="xl" sx={{ marginTop: '80px' }}>
                <Imports.Grid container spacing={2}>
                    <Imports.Grid item xs={9} sx={{ height: 'auto', display: 'flex' }}>
                        <Imports.Card
                            sx={{
                                display: 'flex',
                                width: '80%',
                                boxShadow: 'none',
                                border: 'none',
                                backgroundColor: 'transparent',
                                transition: 'box-shadow 0.3s',
                                '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
                            }}
                        >
                            <Imports.Box sx={{ display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
                                <img
                                    src="https://lp-cms-production.imgix.net/2024-06/Title.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                                    alt=""
                                    width="100%"
                                    style={{ borderRadius: '14px', margin: '20px', height:'170px' }}
                                />
                            </Imports.Box>
                            <Imports.Box sx={{ marginY: '20px' }}>
                                <Imports.Typography sx={{ fontSize: '14px', color: '#B1B1B1', fontWeight: 'bold', paddingBottom: '5px' }}>
                                    FOOD AND DRINK
                                </Imports.Typography>
                                <Imports.Typography sx={{ fontSize: '18px', color: '#121212', fontWeight: 'bold', paddingBottom: '5px' }}>
                                    Local Flavour: the best places to eat and drink in Tucson, Arizona
                                </Imports.Typography>
                                <Imports.Typography sx={{ fontSize: '14px', color: '#514B4B', paddingBottom: '5px' }}>
                                    Jun 4, 2024 &#x2022; 5 min read
                                </Imports.Typography>
                                <Imports.Typography sx={{ color: '#4B4B4B', fontSize: '14px' }}>
                                    <Imports.Grid>Located in the heart of the Sonoran Desert, the vivacious little city of Tucson, Arizona,</Imports.Grid>
                                    <Imports.Grid>has a unique culinary scene that represents a confluence of cultures.</Imports.Grid>
                                </Imports.Typography>
                            </Imports.Box>
                        </Imports.Card>
                    </Imports.Grid>
                 
                </Imports.Grid>



                <Imports.Grid container spacing={2} sx={{ marginTop: '10px' }}>
                    <Imports.Grid item xs={9} sx={{ height: 'auto', display: 'flex' }}>
                        <Imports.Card
                            sx={{
                                display: 'flex',
                                width: '80%',
                                boxShadow: 'none',
                                border: 'none',
                                backgroundColor: 'transparent',
                                transition: 'box-shadow 0.3s',
                                '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
                            }}
                        >
                            <Imports.Box sx={{ display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
                                <img
                                    src="https://lp-cms-production.imgix.net/2024-05/GettyImages-901549690.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                                    alt=""
                                    width="99%"
                                    style={{ borderRadius: '14px', margin: '20px' }}
                                />
                            </Imports.Box>
                            <Imports.Box sx={{ marginY: '20px' }}>
                                <Imports.Typography sx={{ fontSize: '14px', color: '#B1B1B1', fontWeight: 'bold', paddingBottom: '5px' }}>
                                    FOOD AND DRINK
                                </Imports.Typography>
                                <Imports.Typography sx={{ fontSize: '18px', color: '#121212', fontWeight: 'bold', paddingBottom: '5px' }}>
                                    What to eat and drink in Australia
                                </Imports.Typography>
                                <Imports.Typography sx={{ fontSize: '14px', color: '#514B4B', paddingBottom: '5px' }}>
                                    Jun 2, 2024 &#x2022; 6 min read
                                </Imports.Typography>
                                <Imports.Typography sx={{ color: '#4B4B4B', fontSize: '14px' }}>
                                    <Imports.Grid>Eat Your way through a varied menu spanning meat-heavy, rustic dishes, farm-fresh  Here's</Imports.Grid>
                                    <Imports.Grid>our guide to Austrian cuisine. Has a unique culinary scene that represents a confluence of cultures.</Imports.Grid>
                                </Imports.Typography>
                            </Imports.Box>
                        </Imports.Card>
                    </Imports.Grid>
                  
                </Imports.Grid>
            </Imports.Container>
        </>
    );
}

export default Foodcard1;
