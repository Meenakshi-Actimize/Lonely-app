import Imports from "../Import/Import";

function Home2(){

    return(
        <>
        <Imports.Container maxWidth="xl">
            <Imports.Grid sx={{marginBottom:'80px'}}>
                <Imports.Typography sx={{color:'#0057DA', fontSize:'75px'}}><strong>Bali </strong> <span style={{fontSize:'25px', color:'black', textDecoration: 'underline', textDecorationColor: '#0057D9'}}><strong>Indonesia, Asia</strong></span></Imports.Typography>
                <Imports.Typography sx={{fontSize:'20px', color:'rgb(75,75,75)'}}>The mere mention of Bali evokes thoughts of a paradise. It's more than a <br/>place; it's a mood, an aspiration, a tropical state of mind</Imports.Typography>
                <Imports.Button sx={{backgroundColor:'#EEF4EF', marginTop:'50px', width:{lg:'15%', md:'23%', sm:'30%', xs:'75%'}, height:'50px',color:'black', fontSize:'14px', textTransform:'none', borderRadius:'11px'}}><img src="https://images.echocommunity.org/2184c8fe-4747-420d-a050-d30272601e57/calendar_icon.png?w=1200" alt="" width="8%" style={{paddingLeft:'8px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Best time to visit</strong> &nbsp;&nbsp;&nbsp;<img src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg" alt="" width="8%" /></Imports.Button>
                <Imports.Button sx={{backgroundColor:'#FDF2F1', marginTop:'45px', width:{lg:'15%', md:'23%', sm:'30%', xs:'75%'}, height:'50px',color:'black', fontSize:'14px', textTransform:'none', borderRadius:'11px', marginLeft:'16px'}}><img src="https://cdn-icons-png.flaticon.com/256/8824/8824040.png" alt="" width="8%" style={{paddingLeft:'8px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Best things to do</strong> &nbsp;&nbsp;&nbsp;<img src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg" alt="" width="8%" /></Imports.Button>
            </Imports.Grid>
        </Imports.Container>
        </>
    )
}
export default Home2;