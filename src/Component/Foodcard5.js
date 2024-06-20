import Imports from "../Import/Import";

function Foodcard5() {
    const food2data = [
        { img: 'https://lp-cms-production.imgix.net/2024-05/Paris-best-pastries.png?auto=format&w=140&h=140&fit=crop&q=75', title: 'FOOD', subtitle: 'The 6 best pastries in Paris - and where to find them', time: 'May 24, 2024 • 5 min read', des: 'The best pastries in Paris right now.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/GettyImages-517360973-cropped.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'CAMPING', subtitle: 'Curious about Nova Scotia? Consider these 11 fabulous things to do in the province', time: 'May 24, 2024 • 7 min read', des: 'Nova Scotia offers a multitude of once-in-a-lifetime experiences for every type of traveler. Here are the best things to do in Nova Scotia.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/GettyImages-1263002018.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'ART AND CULTURE', subtitle: 'The ultimate (long) weekend in Barcelona', time: 'May 21, 2024 • 10 min read', des: 'Barcelona overflows with charm: surrealist architecture, sandy beaches and a world-class glut of museums. Heres how to spend the perfect weekend there.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/shutterstock2428597047cropped.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'FOOD AND DRINK', subtitle: 'Why you need to try Türkiyes cheeses', time: 'May 21, 2024 • 4 min read', des: 'Türkiyes culinary richness is the stuff of legend – and so are its cheeses. Dive into the wonderful world of these varied cultures (get it?).' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/Where-Locals-Go-Spain-Tarifa.png?auto=format&w=140&h=140&fit=crop&q=75', title: 'BEACHES', subtitle: 'Explore the destinations where locals travel in Spain', time: 'May 20, 2024 • 5 min read', des: 'We asked four travel writers about the their favorite under-the-radar vacation spots in their native Spain.' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/Local-Flavor-Panhandle-feature.png?auto=format&w=140&h=140&fit=crop&q=75', title: 'FOOD AND DRINK', subtitle: 'Local Flavor: where to eat and drink on the Florida Panhandle', time: 'May 20, 2024 • 7 min read', des: 'A bona fide culinary scene is heating up along the Gulf. Heres where to go — and what to avoid — on the Florida Panhandle. ' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/GettyImages-1409535695.jpg?auto=format&w=140&h=140&fit=crop&q=75', title: 'ATTRACTION', subtitle: 'Passport to Portugal: Six ways to dive into its culture', time: 'May 17, 2024 • 6 min read', des: 'Music, art, history and culture are interwoven into the fabric of Portugal – a destination with something for everyone' },
        { img: 'https://lp-cms-production.imgix.net/2024-05/Local-Flavor-Miami-feature.png?auto=format&w=140&h=140&fit=crop&q=75', title: 'FOOD AND DRINK', subtitle: 'Local Flavor: where to eat and drink in Miami', time: 'May 16, 2024 • 6 min read', des: 'Miami brings together a roster of Latin cuisines from around the Caribbean and South America in one gloriously simmering pot – dive into its local flavor.' }
    ];
    return (
        <>
            <Imports.Container maxWidth="xl" sx={{ marginTop: '80px' }}>
                <Imports.Grid container spacing={2}>
                    {food2data.map((item, index) => (
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
export default Foodcard5;