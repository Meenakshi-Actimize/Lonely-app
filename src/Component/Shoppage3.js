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
    }, [Getshopact]);

    const handleButtonClick = (shop) => {
        setIsClicked(true);
        navigate('/magnifier', { state: { img: shop.img, title: shop.title } });
    };

    const filterSections = [
        {
            title: "Regions",
            items: ["Africa (11)", "Asia (38)", "Australia and Pacific (31)", "Caribbean (2)", "Central America (7)", "Europe (134)", "Middle East (7)", "North America (86)", "South America (13)"]
        },
        {
            title: "Countries",
            items: ["Argentina (2)", "Australia (24)", "Austria (4)", "Brazil (2)", "Canada (14)", "Chile (2)", "Croatia (3)", "Czech Republic (2)", "Denmark (2)", "Ecuador (2)", "England (4)", "France (12)", "Germany (7)", "Greece (4)", "Iceland (3)", "India (3)", "Ireland (6)", "Italy (21)", "Japan (7)", "New Zealand (12)", "Portugal (6)", "Russia (3)", "Scotland (7)", "Spain (16)", "Thailand (4)", "The Netherlands (3)", "USA (64)"]
        },
        {
            title: "Categories",
            items: ["Accessible (7)", "Best Walks/Hikes (17)", "Bike Rides (11)", "City (47)", "City Map (7)", "Country Guide (20)", "Epic (18)", "Experience (33)", "General Reference (2)", "Maps (7)", "Multi Country Guide (26)", "National Parks (14)", "Pocket (83)", "Regional Guide (75)", "Road Trips (34)"]
        }
    ];

    return (
        <Imports.Container maxWidth="xl" sx={{ marginTop: '40px' }}>
            <Imports.Grid container>
                {/* Filter component */}
                <Imports.Grid item xs={12} sm={12} md={3} lg={3} sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
                    <Imports.Typography sx={{ fontSize: '23px', color: '#0057D9', fontWeight: 'bold', paddingBottom: '16px' }}>Filters</Imports.Typography>
                    {filterSections.map((section, index) => (
                        <Imports.Accordion key={index} sx={{ paddingBottom: '16px' }}>
                            <Imports.AccordionSummary
                                expandIcon={<Imports.ExpandMoreIcon />}
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                            >
                                <Imports.Typography sx={{ color: 'black', fontWeight: 'bold' }}>{section.title}</Imports.Typography>
                            </Imports.AccordionSummary>
                            <Imports.AccordionDetails>
                                <Imports.List sx={{ fontSize: '13px' }}>
                                    {section.items.map((item, idx) => (
                                        <Imports.ListItem key={idx}>
                                            <Imports.CheckBoxOutlineBlankIcon />&nbsp;{item}
                                        </Imports.ListItem>
                                    ))}
                                </Imports.List>
                            </Imports.AccordionDetails>
                        </Imports.Accordion>
                    ))}
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
