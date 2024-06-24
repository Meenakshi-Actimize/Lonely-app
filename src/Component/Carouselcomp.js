import Imports from "../Import/Import";

function Carouselcomp() {
    const cardata = [{img:'https://lp-cms-production.imgix.net/2023-02/Argentina-shutterstock_653309122-RFE.jpg?auto=format&w=600&h=800&dpr=1&fit=crop&q=40', text1:'Local flavour the best', text2:'places to eat and', text3:'drink in Tuscon,', text4:'Arizona'}, {img:'https://lp-cms-production.imgix.net/2024-06/GettyImages-1155040646.jpg?auto=format&w=600&h=800&dpr=1&fit=crop&q=40', text1:'What to eat and drink', text2:'', text3:'', text4:'in Australia'}, {img:'https://lp-cms-production.imgix.net/2024-06/Miami-Mayfair-Hotel---Sipsip-Rooftop-Bar-Will-Pryce.jpg?auto=format&w=600&h=800&dpr=1&fit=crop&q=40', text1:'Local flavour: the best', text2:'places to eat and', text3:'', text4:'drink in Kansas City'}]

    return (
        <>
            <Imports.Grid container>
                <Imports.Typography sx={{ position: 'absolute', top: { lg: 300, md: 200, sm: 180, xs: 160 }, left: { lg: 350, md: 210, sm: 190, xs: 50 }, fontSize: { lg: '80px', md: '60px', sm: '40px', xs: '20px' }, zIndex: 4, textTransform: 'none', color: 'white', fontWeight: 'bold' }}>Discover the moments</Imports.Typography>
                    {cardata.map((item) => (
                                 <Imports.Grid
                                 item
                                 xs={4}
                                 sx={{ position: 'relative', '&:hover img': { filter: 'brightness(1.2)' }, '& img': { filter: 'brightness(0.8)', transition: 'filter 0.3s' } }}
                             >
                                 <img src={item.img} alt="" width="100%" />
         
                                 <Imports.Typography sx={{ position: 'absolute', top: { lg: '440px', md: '290px', sm: '200px', xs: '20px' }, left: { lg: 20, md: 18, sm: 15, xs: 8 }, color: 'white', fontSize: { lg: '33px', md: '28px', sm: '20px', xs: '15px' }, display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>
                                     <Imports.Grid>{item.text1}</Imports.Grid>
                                     <Imports.Grid>{item.text2}</Imports.Grid>
                                     <Imports.Grid>{item.text3}</Imports.Grid>
                                     <Imports.Grid sx={{ display: 'flex' }}>
                                         <Imports.Grid>{item.text4}</Imports.Grid>
                                         <Imports.Grid sx={{ marginLeft: 'auto', textAlign: 'end' }}>
                                             <Imports.ArrowForwardIcon sx={{ color: 'white' }} />
                                         </Imports.Grid>
                                     </Imports.Grid>
                                 </Imports.Typography>
                             </Imports.Grid>

                    ))}

                   
            </Imports.Grid>
        </>
    );
}

export default Carouselcomp;