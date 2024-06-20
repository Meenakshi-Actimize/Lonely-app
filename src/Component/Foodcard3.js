import Imports from "../Import/Import";

function Foodcard3() {
    const fooddata = [
        { img: 'https://lp-cms-production.imgix.net/2024-05/Local-Flavor-KC.png?auto=format&w=140&h=140&fit=crop&q=75', title: 'FOOD AND DRINK', subtitle: 'Local Flavor: the best places to eat and drink in Kansas City', time: 'May 31, 2024 • 7 min read', des: 'Kansas City is synonymous with barbecue, but there is an ever-expanding, diverse menu of flavors to explore too. Here are the best places to do that.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/Where-Locals-Go-Greece-Hero.png?auto=format&w=140&h=140&fit=crop&q=75', title: 'BEACHES', subtitle: '3 of the best places to visit in Greece according to locals', time: 'May 31, 2024 • 4 min read', des: 'Local writers share their favorite lesser-visited destinations for their vacations in Greece.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/GettyRF760264327.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'ACTIVITIES', subtitle: '14 reasons Kansas City should be your next trip', time: 'May 30, 2024 • 12 min read', des: 'Even before Taylor Swift showed up, Kansas City had been hitting the headlines as a city break destination in the US. Read on for the best things to do.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/Local-Flavor-Lyon-Hero-Image.png?auto=format&w=140&h=140&fit=crop&q=75', title: 'FOOD AND DRINK', subtitle: 'Local Flavor: where to eat and drink in Lyon, France', time: 'May 29, 2024 • 5 min read', des: 'Enjoy the exceptional flavors of Lyon with this locals guide of what to eat and where.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/GettyImages-1343930342.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'BEACHES', subtitle: 'See the best of Croatia in just a week with this itinerary', time: 'May 28, 2024 • 8 min read', des: 'See the highlights of Croatia with this week-long itinerary, perfect for first-time visitors.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/GettyImages-170054565.jpeg?auto=format&w=140&h=140&fit=crop&q=75', title: 'TIPS AND ADVICE', subtitle: 'What to eat and drink in the Netherlands', time: 'May 25, 2024 • 8 min read', des: 'From street snacks to fine dining via Indonesian and Suriname influences, heres what to eat and drink in the Netherlands.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/GettyImages-1243962111-cropped.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'ARCHITECTURE', subtitle: '10 things you need to do in Belgium: chocolate, comics, castles and more', time: 'May 24, 2024 • 7 min read', des: 'Here are some unmissable ways to savor Belgium’s history, beauty and creativity. Oh, and it’s beer, chocolate and fries, too.' }
    ];

    return (
        <>
            <Imports.Container maxWidth="xl" sx={{ marginTop: '80px' }}>
                <Imports.Grid container spacing={2}>
                    {fooddata.map((item, index) => (
                        <Imports.Grid item xs={10} key={index} sx={{ height: 'auto', display: 'flex' }}>
                            <Imports.Card
                                sx={{
                                    display: 'flex',
                                    width: '70%',
                                    boxShadow: 'none',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    transition: 'box-shadow 0.3s',
                                    '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
                                }}
                            >
                                <Imports.Grid container>
                                <Imports.Grid xs={12} sm={6} lg={3} md={4} >

                                <Imports.Box sx={{ display: 'block', justifyContent: 'center', flex: '0 0 auto' }}>
                                    <img
                                        src={item.img}
                                        alt=""
                                        width="80%"
                                        style={{ borderRadius: '14px', margin: '20px', height: '170px' }}
                                    />
                                </Imports.Box>
                                </Imports.Grid>
                                <Imports.Grid xs={12} sm={12} lg={8} md={8} >

                                <Imports.Box sx={{ marginY: '20px' }}>
                                    <Imports.Typography sx={{ fontSize: '14px', color: '#B1B1B1', fontWeight: 'bold', paddingBottom: '5px' }}>
                                        {item.title}
                                    </Imports.Typography>
                                    <Imports.Typography sx={{ fontSize: '18px', color: '#121212', fontWeight: 'bold', paddingBottom: '5px' }}>
                                        {item.subtitle}
                                    </Imports.Typography>
                                    <Imports.Typography sx={{ fontSize: '14px', color: '#514B4B', paddingBottom: '5px' }}>
                                        {item.time}
                                    </Imports.Typography>
                                    <Imports.Typography sx={{ color: '#4B4B4B', fontSize: '14px' }}>
                                        {item.des}
                                    </Imports.Typography>
                                </Imports.Box>
                                </Imports.Grid>
                                </Imports.Grid>
                            </Imports.Card>
                            </Imports.Grid>

                    ))}
                    <Imports.Grid item xs={4}>
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Container>
        </>
    )
}

export default Foodcard3;
