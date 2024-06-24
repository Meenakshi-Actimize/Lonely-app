import Imports from "../Import/Import";
import { useScrollTrigger, Slide } from "@mui/material";



function Foodcard1() {

    

    function HideOnScroll(props) {
        const trigger = useScrollTrigger();
        return (
          <Slide in={trigger}>
            <Imports.Typography><img src="https://tpc.googlesyndication.com/simgad/9089412356908920395" alt=""  style={{position:'fixed', top:220, left:1100}}/>
            </Imports.Typography>
          </Slide>
        );
      }
      
    const card1 = [
        {
            img: 'https://lp-cms-production.imgix.net/2024-06/Title.jpg?auto=format&w=140&h=140&fit=crop&q=75',
            title: 'FOOD AND DRINK',
            subtitle: 'Local Flavour: the best places to eat and drink in Tucson, Arizona',
            time: 'Jun 4, 2024 • 5 min read',
            des1: 'Located in the heart of the Sonoran Desert, the vivacious little city of Tucson, Arizona,',
            des2: 'has a unique culinary scene that represents a confluence of cultures.'
        },
        {
            img: 'https://lp-cms-production.imgix.net/2024-05/GettyImages-901549690.jpg?auto=format&w=140&h=140&fit=crop&q=75',
            title: 'FOOD AND DRINK',
            subtitle: 'What to eat and drink in Australia',
            time: 'Jun 2,2024 • 6 min read',
            des1: 'Eat Your way through a varied menu spanning meat-heavy, rustic dishes, farm-fresh  Heres',
            des2: 'our guide to Austrian cuisine. Has a unique culinary scene that represents a confluence of cultures.'
        }
    ];

    return (
        <>
            <Imports.Container maxWidth="xl" sx={{ marginTop: '80px' }}>
                {card1.map((item, index) => (
                    <Imports.Grid container spacing={2} key={index} >
                        <Imports.Grid item xs={10} sx={{ height: 'auto', display: 'flex' }}>
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
                                    <Imports.Grid item xs={12} sm={6} lg={3} md={4}>
                                        <Imports.Box sx={{ display: 'flex', justifyContent: 'center', flex: '0 0 auto', margin:'auto' }}>
                                            <img
                                                src={item.img}
                                                alt=""
                                                width="100%"
                                                style={{ borderRadius: '14px', margin: '20px', height: '170px' }}
                                            />
                                        </Imports.Box>
                                    </Imports.Grid>
                                    <Imports.Grid item xs={12} sm={12} lg={8} md={8}>
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
                                                <Imports.Grid>{item.des1}</Imports.Grid>
                                                <Imports.Grid>{item.des2}</Imports.Grid>
                                            </Imports.Typography>
                                        </Imports.Box>
                                    </Imports.Grid>
                                </Imports.Grid>
                            </Imports.Card>
                        </Imports.Grid>
                    </Imports.Grid>
                ))}
                <Imports.Grid item xs={2} sx={{display:'flex', justifyContent:'right'}}>
                    <HideOnScroll />
                    

                </Imports.Grid>
               
                
          
                </Imports.Container>

        </>
    );
}

export default Foodcard1;
