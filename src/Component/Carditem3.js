import Imports from "../Import/Import";


function Card3items() {
    const pics = [{img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/pandeyrr.jpg?auto=format&fit=fill&q=75&w=750', caption:'@pandeyrr'}, {img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/richardwhitetravels.jpg?auto=format&fit=fill&q=75', caption:'@ali.vonlewinski'}, {img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/wanderlust_fabiana.jpg?auto=format&fit=fill&q=75', caption:'@wanderlust_fabiana'}, {img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/o_thessalonikios.jpg?auto=format&fit=fill&q=75&w=750', caption:'@Unchartedbackpacker'}, {img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/les_carnets_de_mel.jpg?auto=format&fit=fill&q=75&w=750', caption:'@les_Carnets_de_mel'}, {img:'https://lonelyplanetstatic.imgix.net/marketing/2022/ig/dominik-kobler.jpg?auto=format&fit=fill&q=75&w=750', caption:'@dominik.cobler'}]
    return (
        <>
            <Imports.Grid sx={{ backgroundColor: '#0057D9' }}>
                <Imports.Grid sx={{textAlign:'center '}}>
                    <Imports.Typography variant="h3" sx={{ textAlign: 'left', color: 'white', fontWeight: '500' }}><strong>#lonelyplanet</strong></Imports.Typography>
                    <Imports.Typography sx={{ textAlign: 'right', color: 'white' }}><strong>FOLLOW LONELY PLANET:
                        <Imports.FacebookRoundedIcon />
                        <Imports.InstagramIcon />
                        <Imports.XIcon />
                        <img src="./images/tiktok.png" alt="" width="1.5%" height="1.5%" /></strong></Imports.Typography>
                    </Imports.Grid>

                    <Imports.Grid container sx={{paddingBottom:'80px', paddingTop:'80px'}}>
                        {pics.map((item) => (
                              <Imports.Grid item lg={2} md={2} sm={12} xs={12} sx={{"&:hover img": {
                                opacity: 0.8
                              }}}>
                                

                               <Imports.Box>

                              <img src={item.img} title={item.caption} width="100%" />
                              <Imports.Typography sx={{color:'#fff',marginTop:'-20%',fontWeight:'bold', textAlign:'left', paddingLeft:'8px'}}>{item.caption}</Imports.Typography>
                                </Imports.Box> 
                              
                           </Imports.Grid>

                        ))}
                      
                    </Imports.Grid>


            </Imports.Grid>

        </>
    )
}
export default Card3items;