import Imports from "../Import/Import";


function Plantextoverlay(){
    return(
        <>
        <Imports.Grid container sx={{marginTop:'60px'}}>
            <img src="./images/textoverlay.png" alt="" width="100%" />

        </Imports.Grid>

        <Imports.Grid container gap={4} sx={{backgroundColor: '#F5F0FF', height:'200px', justifyContent:'center', alignItems:'center', display:'flex'}}>
            <Imports.Grid>
            <Imports.Typography sx={{fontSize:{lg:'26px', md:'26px', sm:'20px', xs:'18px'}, textAlign:'center', fontWeight:'bold'}}>Looking to go ElseWhere?</Imports.Typography>
            </Imports.Grid>
            <Imports.Grid>
             <Imports.Button sx={{border:'1px solid #9409EE', borderRadius:'18px', width:'130%', textTransform:'none', color:'black', fontWeight:'bold'}}>Our destinations <Imports.ArrowForwardIosSharpIcon sx={{paddingLeft:'20px',  fontSize:'16px', fontWeight:'bold'}}/></Imports.Button>
             </Imports.Grid>

        </Imports.Grid>
        </>
    )
}
export default Plantextoverlay;