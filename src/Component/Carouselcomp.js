import Imports from "../Import/Import";

function Carouselcomp() {
    const carousel = [{ img: "./images/Food-and-Drink-Stories-Lonely-Planet.png" }, { img: "./images/Food-and-Drink-Stories-Lonely-Planet (1).png" }, { img: "./images/Food-and-Drink-Stories-Lonely-Planet (2).png" }]
    return (
        <>

            <Imports.Grid container>
                <Imports.Typography variant='caption' sx={{
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, color: 'red',

                    position: 'absolute',
                    bottom: 0,
                    fontSize: { lg: '80px', md: '50px' }, color: 'white', paddingLeft: '450px'
                }}><strong>Food and Drink</strong></Imports.Typography>
                {carousel.map((item) => (

                <Imports.Grid item xs={4} sx={{
                    "&:hover img": {
                        opacity: 0.8
                    }
                }}>

                    <img className="carousel-image" src={item.img} alt="" width="100%" />




                </Imports.Grid>
                ))}


            </Imports.Grid>
        </>
    );
}
export default Carouselcomp;
