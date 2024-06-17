import Imports from "../Import/Import";
import { Getflash } from "../redux/action/Action";


function Card2items({data, Getflash}) {

    const [hoveredCard, setHoveredCard] = Imports.useState(null);
    Imports.useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
          try {
            // Call the async function to fetch data
            const gettingflashdata = await Imports.Get1card();
            // Dispatch the fetched data using GetCardData
            Getflash(gettingflashdata);
            console.log('Hi success', gettingflashdata);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Call the async function
        fetchData();
      }, []);

    // const images = [{ img: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-163642367_super.jpg?auto=format&fit=crop&w=360&ar=1:1&q=75', title: 'Great Smoky Mountains National Park' }, { img: 'https://lp-cms-production.imgix.net/2023-02/LPT1212_017.jpg?auto=format&fit=crop&w=360&ar=1:1&q=75', title: 'Queensland' }, { img: 'https://lp-cms-production.imgix.net/2023-02/shutterstockRF_349034636.jpg?auto=format&fit=crop&w=360&ar=1:1&q=75', title: 'Split' }]

    return (
        <>
        <Imports.Container maxWidth="xl">
            <Imports.Grid container  >
                {data && data.map((pics, index) => (
                    <>
                        <Imports.Grid item xs={12} sm={12} md={4} lg={4} sx={{textAlign:'center'}}>
                            <img src={pics.img}  alt="" width="90%" style={{ borderRadius: '16px', height:'380px'}} />
                            <Imports.Typography sx={{textAlign:'left',  fontSize:'20px', marginLeft:'28px'}}><strong>{pics.title}</strong></Imports.Typography>
                        </Imports.Grid>
                    </>
                ))}
            </Imports.Grid>
        </Imports.Container>
    
        </>
    )
}

// export default Card2items;

const mapStateToProps = (state) => {
    console.log('State data:', state.reducer1.data); // Add this console.log statement
    return {
        data: state.reducer1.data,
    };
};


const mapDispatchToProps = {Getflash}

export default Imports.connect(mapStateToProps, mapDispatchToProps)(Card2items);