import Imports from "../Import/Import";





const data = [
    { value: 2, color:'#D1B9AC'},
    { value: 11, color:'#A200ED'},
    { value: 87, color:'#4695FF'},
];

const size = {
    width: 400,
    height: 200,
};

const StyledText = Imports.styled('text')(({ theme }) => ({
    fill: theme.palette.text.secondary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = Imports.useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}


function Planpiechart() {
    const [value, setValue] = Imports.React.useState(2);
    const handleChange = (event, newValue) => { 
        setValue(newValue); 
    }; 
  
    return (
        <>
            <Imports.Container maxWidth="lg" sx={{ marginTop: '100px' }}>
                <Imports.Grid sx={{ }}>
                    <Imports.Typography>Radical transparency</Imports.Typography>
                    <Imports.Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Where your money goes</Imports.Typography>
                </Imports.Grid>

                <Imports.Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="black"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    sx={{ marginTop: '25px' }}
                >
                    <Imports.Tab value="one" label="our model" sx={{ color: 'black', textTransform: 'none', fontSize: '14px', fontWeight: 'bold' }} />

                    <Imports.Tab value="two" label="Industry model" sx={{ color: 'black', textTransform: 'none', fontSize: '14px', fontWeight: 'bold' }} />
                </Imports.Tabs>

                <Imports.Card sx={{ marginBottom: '25px', height: '400px' }}>
                    <Imports.Grid container>
                        <Imports.Grid item xs={12} sm={12} md={8} lg={8}> 
                            <Imports.Grid sx={{ display: 'flex' }}>
                                <Imports.Grid sx={{margin:'25px'}}>
                                    <Imports.Typography variant="h4" sx={{color:'#4695FF', fontWeight:'bold'}}>87%</Imports.Typography>
                                    <Imports.Typography sx={{fontSize:'16px'}}>Investment in quality suppliers<br /> and projects that support the destination</Imports.Typography>
                                </Imports.Grid>
                                <Imports.Grid sx={{margin:'25px'}}>
                                    <Imports.Typography variant="h4" sx={{color:'#A200ED', fontWeight:'bold'}}>11%</Imports.Typography>
                                    <Imports.Typography>Keeps our website running and<br /> our super lean staff fed</Imports.Typography>
                                </Imports.Grid>
                            </Imports.Grid>
                        <Imports.Grid sx={{margin:'25px'}}>
                            <Imports.Typography variant="h4" sx={{color:'#D1B9AC', fontWeight:'bold'}}>2%</Imports.Typography>
                            <Imports.Typography>Carbon offset, reforestation, ocean plastic removal,<br /> and trying to make the world a better place</Imports.Typography>
                        </Imports.Grid>
                        <Imports.Button sx={{border:'1px solid #9409EE', borderRadius:'20px', margin:'25px', textTransform:'none', width:{lg:'25%', md:'30%', sm:'30%', xs:'30%'}, color:'black', fontWeight:'bold'}}>Our commitments <Imports.ArrowForwardIosSharpIcon sx={{fontSize:'18px', marginLeft:'16px', color:'black', fontWeight:'bold'}}/></Imports.Button>

                        </Imports.Grid>
                        

                        <Imports.Grid item xs={12} sm={12} md={4} lg={4} >
                            <Imports.PieChart series={[{ data, innerRadius: 140 }]} {...{ ...size, width: 450, height: 450 }} >
                                <PieCenterLabel>Our model</PieCenterLabel>
                            </Imports.PieChart>

                        </Imports.Grid>
                        
                    </Imports.Grid>
                    

                </Imports.Card>
            </Imports.Container>

        </>
    )
}
export default Planpiechart;