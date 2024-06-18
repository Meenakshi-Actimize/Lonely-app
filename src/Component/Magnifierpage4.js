import Imports from "../Import/Import";


function Magnifierpage4(){
    const navigate = Imports.useNavigate();
    const location = Imports.useLocation();
    const { state } = location;
    const { images, img } = state || {};

    return(
        <>
        <Imports.Grid  sx={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
            <Imports.Typography sx={{fontSize:'30px', fontWeight:'bold'}}>You may also like</Imports.Typography>
            </Imports.Grid>
            <Imports.Grid sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'30px', marginBottom:'50px'}}>
                                        <Imports.Card
                                            sx={{
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
                                                    marginTop: '150px'
                                                }
                                            }}
                                        >
                                            <img src={img} alt=""  width="100%" style={{height:'350px'}}/>

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

        
        </>
    )
}
export default Magnifierpage4;