import Imports from "../Import/Import";
import { Getmagnifieract } from "../redux/action/Action10";

function Magnifierpage2({data, Getmagnifieract}) {
    const navigate = Imports.useNavigate();
    const location = Imports.useLocation();
    const { state } = location;
    const { images, img , title} = state || {};


   

    Imports.useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                // Call the async function to fetch data
                const gettingmag = await Imports.Getmagnifierapi();
                // Dispatch the fetched data using GetCardData
                Getmagnifieract(gettingmag);
                console.log('Hi success plan', gettingmag);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []);
    
    return (
        <>
                {data && data.map((item, key) => (

            <Imports.Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Imports.Grid item xs={12} sm={12} md={2} lg={2} sx={{ alignItems: 'center' }}>

                    <img src={img} alt='' width="40%" style={{border:'2px solid blue',justifyContent: {sm:'center', xs:'center'}}}/>             

                    <Imports.Typography sx={{fontSize:'10px', marginTop:'20px', color:'#2D6ADE', textDecoration:'underline', fontWeight:'bold'}}>SEE MORE IMAGES</Imports.Typography>
                </Imports.Grid>
                <Imports.Grid item xs={12} sm={12} md={3} lg={3}>

                    <img src={img} alt='' width="85%" />  


                </Imports.Grid>
                
                <Imports.Grid item xs={12} sm={12} md={5} lg={5}>
                    <Imports.Typography sx={{ fontSize: '35px', color: '#2670DF', fontWeight: 'bold' }}>{title}</Imports.Typography>
                    <Imports.Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>{item.cost}</Imports.Typography>
                    <Imports.Grid sx={{ marginTop: '20px' , display:'flex', justifyContent:'center'}}>
                        <Imports.Button sx={{ border: '1px solid gray', textTransform: 'none', width:'30%', height: '65px', borderRadius: '13px', color: 'black', fontWeight: 'bold', fontSize: '13px', backgroundColor: '#EBF4FF', display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>Book<br />Rs. 3,000.00</Imports.Button>
                        <Imports.Button sx={{ border: '1px solid gray', textTransform: 'none', marginLeft: 'auto', width: '30%', height: '65px', borderRadius: '13px', color: 'black', fontSize: '13px', display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>eBook <br />Rs. 1,600.00</Imports.Button>
                        <Imports.Button sx={{ border: '1px solid gray', textTransform: 'none', marginLeft: 'auto', width: '30%', height: '65px', borderRadius: '13px', color: 'black', fontSize: '13px', display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>Book + eBook <br />Rs. 3,400.00</Imports.Button>
                    </Imports.Grid>
                    <Imports.Grid   sx={{marginTop:'20px', display:'flex', justifyContent:'center'}}>
                        <Imports.Button sx={{ width: {lg:'100%', md:'100%', sm:'100%'}, border: '1px solid gray', height: '60px', borderRadius: '13px', backgroundColor: 'white' }}>
                            <Imports.Grid container >
                                <Imports.Grid item xs={6} >
                                    <Imports.Typography sx={{ fontSize: '13px', textTransform: 'none', color: 'black', textAlign: 'left' }}>Book<br />Rs. 0.00</Imports.Typography>
                                </Imports.Grid>
                                <Imports.Grid item xs={6} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}>
                                    <img src="https://static.thenounproject.com/png/2392586-200.png" alt="" width="7%" style={{ height: '20px', marginTop: '8px' }} />&nbsp;
                                    <img src="https://shop.lonelyplanet.com/cdn/shop/files/lp-insider-blue-h-200_50116a12-e0e7-4417-977c-be3d10321011.svg?v=1707831694&width=50" alt="" width="60%" />
                                </Imports.Grid>
                            </Imports.Grid>
                        </Imports.Button>
                    </Imports.Grid>


                    <Imports.Grid container sx={{ marginTop: '30px', display:'flex', justifyContent:'center' }}>
                        <Imports.Button sx={{ border: '1px solid gray', borderRadius: '22px', width: {lg:'46%', md:'46%', sm:'46%', xs:'100%'}, height: '45px', backgroundColor: '#0057D9', color: 'white', fontWeight: 'bold' }}>Add to Cart</Imports.Button>
                        <Imports.Button sx={{ border: '1px solid gray', borderRadius: '22px', width:{lg:'46%', md:'46%', sm:'46%', xs:'100%'}, height: '45px', marginLeft:'auto', backgroundColor: '#AC98F9', color: 'white', textTransform: 'none' }}>Buy with Shop</Imports.Button>
                    </Imports.Grid>


                    <Imports.Grid sx={{marginTop:'30px'}}>
                    <Imports.Accordion sx={{color:'#0057D9', fontWeight:'bold', borderTop:'1px solid lightgray', borderBottom:'1px solid lightgray'}}>
                        <Imports.AccordionSummary
                            expandIcon={<Imports.ExpandMoreIcon sx={{color:'blue'}}/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            {item.title1}
                        </Imports.AccordionSummary>
                        <Imports.AccordionDetails>
                            <ul style={{color:'black', textDecoration:'none'}}>
                                <li>Colour maps and images throughout</li>
                                <li>Highlights and itineraries help you tailor your trip to your personal needs and interests</li>
                                <li>Insider tips to save time and money and get around like a local, avoiding crowds and trouble spots</li>
                                <li>Essential info at your fingertips - hours of operation, phone numbers, websites, transit tips, prices</li>
                                <li>Honest reviews for all budgets - eating, sleeping, sight-seeing, going out, shopping, hidden gems that most guidebooks miss</li>
                                <li>Cultural insights give you a richer, more rewarding travel experience – history, culture, wildlife, safaris, cuisine, music, environment</li>
                                <li>Over 220 maps</li>
                            </ul>
                        </Imports.AccordionDetails>
                    </Imports.Accordion>
                    <Imports.Accordion sx={{color:'#0057D9', fontWeight:'bold', borderBottom:'1px solid lightgray'}}>
                        <Imports.AccordionSummary
                            expandIcon={<Imports.ExpandMoreIcon sx={{color:'blue'}}/>}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            {item.title2}
                        </Imports.AccordionSummary>
                        <Imports.AccordionDetails sx={{color:'black'}}>
                        Coverage Includes: Egypt, Tanzania, Morocco, Botswana, Mozambique, South Africa, Madagascar, Kenya, Ethiopia, Ghana, Nigeria, Cabo Verde and more
                        </Imports.AccordionDetails>
                    </Imports.Accordion>
                    <Imports.Accordion sx={{color:'#0057D9', fontWeight:'bold'}}>
                        <Imports.AccordionSummary
                            expandIcon={<Imports.ExpandMoreIcon sx={{color:'blue'}}/>}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            {item.title3}
                        </Imports.AccordionSummary>
                        <Imports.AccordionDetails sx={{color:'black'}}>
                            <Imports.Typography>eBook is available in ePub, MOBI and PDF.</Imports.Typography>
                            <Imports.Typography>ISBN: 9781786571526</Imports.Typography>
                            <Imports.Typography>Edition: 14th</Imports.Typography>
                            <Imports.Typography>Publication Date: November 2017</Imports.Typography>
                            <Imports.Typography>Language: English</Imports.Typography>
                            <Imports.Typography>Writers: Anthony Ham, Brett Atkinson, James Bainbridge, Stuart Butler, Jean-Bernard Carillet, Paul Clammer, Lucy Corne, Emilie Filou, Mary Fitzpatrick, Michael Grosberg, Trent Holden, Jessica Lee, Stephen Lioy, Nana Luckham, Vesna Maric, Tom Masters, Virginia Maxwell, Lorna Parkes, Helen Ranger, Brendan Sainsbury, Caroline Sieg, Helena Smith, Regis St Louis, Paul Stiles</Imports.Typography>
                            <Imports.Typography>1120 pages, 64pp color, 229 maps | Dimensions: 128mm × 197mm</Imports.Typography>
                            <Imports.Typography>Next edition due: December 2024</Imports.Typography>
                        </Imports.AccordionDetails>

                    </Imports.Accordion>
                    </Imports.Grid>

                    <Imports.Grid  sx={{border:'1px solid gray', backgroundColor:'#EBF4FF', marginTop:'30px', width:'80%',  height: '120px', 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto', borderRadius:'16px', marginBottom:'100px'}}>
                        <Imports.Grid item xs={4} >
                            <Imports.LocalShippingOutlinedIcon  sx={{color:'#2D6ADE', width:'100%', fontSize:'50px'}}/>
                            <Imports.Typography sx={{color:'#2D6ADE', textAlign:'center'}}>Free shipping on all orders</Imports.Typography>
                        </Imports.Grid>
                        <Imports.Grid item xs={4} >
                        <Imports.AssignmentReturnedOutlinedIcon sx={{color:'#2D6ADE', width:'100%', fontSize:'50px'}}/>
                        <Imports.Typography sx={{color:'#2D6ADE', textAlign:'center'}}>30 day<br/>returns</Imports.Typography>

                        </Imports.Grid>
                        <Imports.Grid item xs={4} >
                            <Imports.EngineeringOutlinedIcon sx={{color:'#2D6ADE', width:'100%', fontSize:'50px'}}/>
                            <Imports.Typography sx={{color:'#2D6ADE', textAlign:'center'}}>Expert customer service</Imports.Typography>

                        </Imports.Grid>

                    </Imports.Grid>


                </Imports.Grid>
            </Imports.Grid>
                ))}
        </>
    )
}
const mapStateToProps = (state) => {
    console.log('State data:', state.reducer10.data); // Add this console.log statement
    return {
        data: state.reducer10.data,
    };
};


const mapDispatchToProps = { Getmagnifieract }

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Magnifierpage2);