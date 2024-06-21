import Imports from "../Import/Import";

// Fourth card component in home page

function Homecard4() {
    const Carddata = [{ img: './images/booksvg.png', title: 'Things to Know', subtitle: 'Plan the perfect trip to Bali with this advice on health, safety and etiquette.', art: 'Read article' }, { img: './images/train.png', title: 'Transportation', subtitle: 'Bali is relatively small, but it can take a long time to travel around. Here are the best ways to get around on the “island of the gods.” ', art: 'Read article' }, { img: './images/wallet.png', title: 'Money and Costs', subtitle: 'Bali on the cheap? Most would struggle to spend a lottery jackpot here. If you do need to save some money, here s how.', art: 'Read article' }, { img: './images/kids.png', title: 'Traveling with Kids', subtitle: 'A growing number of travelers are booking family holidays on the island of Bali. Here are the best things to do there with kids.', art: 'Read article' }]
    return (
        <>
            <Imports.Container maxWidth="xl">
                <Imports.Grid sx={{ backgroundColor: '#FDFBF6', height: { lg: '800px', md: '1000px', sm: '1000px', xs: '1350px' }, marginTop: '100px' }}>
                    <Imports.Grid>
                        <Imports.Typography sx={{ textAlign: 'center', paddingTop: '90px' }}><span style={{ color: '#758090' }}>02 / A</span><span style={{ color: '#C9C2CC' }}>TT</span><span style={{ color: '#D7989A' }}>RACTIONS</span></Imports.Typography>
                        <Imports.Typography sx={{ textAlign: "center", paddingTop: '20px', fontSize: { lg: '60px', md: '60px', sm: '40px', xs: '20px' }, textDecoration: 'bold' }}>Expert guidance to help you<br />plan your trip</Imports.Typography>
                    </Imports.Grid>
                    <Imports.Grid container sx={{ marginTop: '55px' }}>
                        {Carddata.map((item) => (

                            <Imports.Grid xs={12} sm={6} md={4} lg={3}>


                                <Imports.Card sx={{ borderRadius: '16px', width: { lg: '80%', md: '78%', sm: '80%', xs: '80%' }, height: '180px', backgroundColor: '#FBF7EC', margin: { lg: '14px', md: '14px', sm: '15px', xs: '8px' }, padding: '20px', border: '1px solid #D3D3D3' }}>

                                    <Imports.Typography sx={{ fontSize: '25px', display: 'flex' }}><img src={item.img} alt="" width="15%" /> <span>{item.title}</span></Imports.Typography>
                                    <Imports.Typography sx={{ fontSize: '13px', marginTop: '8px' }}> {item.subtitle}</Imports.Typography>
                                    <Imports.Typography> {item.art} <Imports.ArrowForwardIcon sx={{ marginTop: '8px', color: 'gray', fontSize: '18px' }} /></Imports.Typography>


                                </Imports.Card>
                            </Imports.Grid>
                        ))}

                    </Imports.Grid>
                    <Imports.Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <Imports.Button sx={{ borderRadius: '22px', border: '1px solid #D3D3D3', textTransform: 'none', color: 'black', width: { lg: '8%', md: '12%', sm: '15%', xs: '40%' } }}>
                            <strong>View more</strong>
                        </Imports.Button>
                    </Imports.Box>

                </Imports.Grid>
            </Imports.Container>

        </>
    )
}
export default Homecard4;