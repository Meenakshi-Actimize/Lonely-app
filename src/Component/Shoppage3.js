import Imports from "../Import/Import";
import { Getshopact } from "../redux/action/Action8";

function Shoppage3({ data, Getshopact }) {
    const navigate = Imports.useNavigate();
    const [isClicked, setIsClicked] = Imports.useState(false);

    Imports.useEffect(() => {
        const fetchData = async () => {
            try {
                const gettingshop = await Imports.Getshopapi();
                Getshopact(gettingshop);
                console.log('Hi success plan', gettingshop);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleButtonClick = (shop) => {
        setIsClicked(true);
        navigate('/magnifier', { state: {  img: shop.img , title: shop.title } });
    };

    return (
        <>
            <Imports.Container maxWidth="xl" sx={{ marginTop: '40px' }}>
                <Imports.Grid container>
                    {/* Filter component */}
                    <Imports.Grid item xs={12} sm={12} md={3} lg={3} sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
                        <Imports.Typography sx={{ fontSize: '23px', color: '#0057D9', fontWeight: 'bold', paddingBottom: '16px' }}>Filters</Imports.Typography>
                        <Imports.Accordion sx={{ paddingBottom: '16px' }}>
                            <Imports.AccordionSummary
                                expandIcon={<Imports.ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Imports.Typography sx={{ color: 'black', fontWeight: 'bold' }}>Regions</Imports.Typography>
                            </Imports.AccordionSummary>
                            <Imports.AccordionDetails>
                                <Imports.List sx={{ fontSize: '13px' }}>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Africa (11)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Asia (38)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Australia and Pacific (31)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Caribbean (2)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Central America (7)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Europe (134)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Middle East (7)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;North America (86)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;South America (13)</Imports.ListItem>
                                </Imports.List>
                            </Imports.AccordionDetails>
                        </Imports.Accordion>
                        <Imports.Accordion sx={{ paddingBottom: '16px' }}>
                            <Imports.AccordionSummary
                                expandIcon={<Imports.ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Imports.Typography sx={{ color: 'black', fontWeight: 'bold' }}>Countries</Imports.Typography>
                            </Imports.AccordionSummary>
                            <Imports.AccordionDetails>
                                <Imports.List sx={{ fontSize: '13px' }}>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Argentina (2)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Australia (24)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Austria (4)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Brazil (2)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Canada (14)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Chile (2)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Croatia (3)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Czech Republic (2)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Denmark (2)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Ecuador (2)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;England (4)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;France (12)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Germany (7)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Greece (4)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Iceland (3)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;India (3)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Ireland (6)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Italy (21)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Japan (7)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;New Zealand (12)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Portugal (6)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Russia (3)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Scotland (7)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Spain (16)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Thailand (4)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;The Netherlands (3)</Imports.ListItem>
                                    <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;USA (64)</Imports.ListItem>
                                </Imports.List>
                            </Imports.AccordionDetails>
                        </Imports.Accordion>
                        <Imports.Accordion sx={{ paddingBottom: '16px' }}>
                            <Imports.AccordionSummary
                                expandIcon={<Imports.ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Imports.Typography sx={{ color: 'black', fontWeight: 'bold' }}>Categories</Imports.Typography>
                            </Imports.AccordionSummary>
                            <Imports.List sx={{ fontSize: '13px' }}>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Accessible (7)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Best Walks/Hikes (17)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Bike Rides (11)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;City (47)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;City Map (7)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Country Guide (20)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Epic (18)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Experience (33)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;General Reference (2)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Maps (7)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Multi Country Guide (26)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;National Parks (14)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Pocket (83)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Regional Guide (75)</Imports.ListItem>
                                <Imports.ListItem><Imports.CheckBoxOutlineBlankIcon />&nbsp;Road Trips (34)</Imports.ListItem>
                            </Imports.List>
                        </Imports.Accordion>
                    </Imports.Grid>

                    {/* Card component */}
                    <Imports.Grid item xs={12} sm={12} md={9} lg={9}>
                        <Imports.Grid>
                            <Imports.Grid sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <Imports.Typography sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>327 products</Imports.Typography>
                                <Imports.Typography sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>Filters&nbsp;<Imports.TuneIcon sx={{ marginBottom: '-6px' }} /></Imports.Typography>
                                <Imports.Typography sx={{ marginLeft: 'auto', display: 'flex', justifyContent: 'center' }}>
                                    Sort by
                                    <Imports.KeyboardArrowDownIcon />
                                </Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid container>
                                {data && data.map((shop, index) => (
                                    <Imports.Grid item xs={12} sm={6} md={6} lg={2.4} key={index} sx={{ marginBottom: '40px' }}>
                                        <Imports.Card
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                boxShadow: 'none',
                                                border: 'none',
                                                position: 'relative',

                                                '&:hover .hover-buttons': {
                                                    opacity: 1,
                                                    visibility: 'visible',
                                                    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
                                                    backgroundColor: 'white',
                                                    marginTop: '20px'
                                                }
                                            }}
                                        >
                                            <img
                                                src={shop.img}
                                                alt=""
                                                style={{ width: shop.width === 'true' ? "76%" : "60%" }}
                                                onClick={() => handleButtonClick(shop)}
                                            />

                                            <Imports.Grid container className="hover-buttons" sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '10px',
                                                opacity: 1.8,
                                                visibility: 'hidden',
                                                boxShadow: 'none', border: 'none'
                                            }}>
                                                <Imports.Button sx={{ border: '1px solid gray', borderRadius: '22px', width: '80%', textTransform: 'none', color: 'black', fontSize: '17px', backgroundColor: 'white' }}>Select option <Imports.KeyboardArrowDownIcon /></Imports.Button>
                                                <Imports.Button sx={{ border: '1px solid gray', borderRadius: '22px', width: '80%', backgroundColor: '#0057D9', textTransform: 'none', color: 'white', fontSize: '17px' }}>Add to cart</Imports.Button>
                                                <Imports.Button sx={{ border: '1px solid gray', borderRadius: '22px', width: '80%', backgroundColor: '#AC98F9', textTransform: 'none', color: 'white', fontSize: '17px' }}>Buy with Shop</Imports.Button>
                                            </Imports.Grid>
                                        </Imports.Card>
                                    </Imports.Grid>
                                ))}
                            </Imports.Grid>
                        </Imports.Grid>
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Container>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer8.data);
    return {
        data: state.reducer8.data,
    };
};

const mapDispatchToProps = { Getshopact };

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Shoppage3);
