import Imports from "../Import/Import";
function Shoppage1(){
    return(
        <>
        <Imports.Grid container sx={{backgroundColor:'black', display:'flex', justifyContent:'center', alignItems:'center', height:'50px'}}>
            <Imports.Typography sx={{color:'white', textAlign:'center', fontSize:'13px', fontWeight:'bold'}}>Free shipping on all orders</Imports.Typography>
        </Imports.Grid>
        
        </>
    )
}
export default Shoppage1;