import Imports from "../Import/Import";
function Homebanner3(){
    return(
        <>
        <Imports.Grid  sx={{
            marginTop:'150px',
            textAlign:'center', 
            borderBottom:'1px solid gray'
        
        }}>
            <Imports.Typography sx={{ fontSize: { xs: '10px', md: '12px', lg: '13px' } }}>
                ADVERTISEMENT
            </Imports.Typography>
            <Imports.Box sx={{marginBottom:'40px'}}>
            <img src="https://tpc.googlesyndication.com/simgad/3510117500144793346" alt=""  width="50%" style={{ height:{lg:'90px', md:'40px', sm:'30px', xs:'28px'}}}/>
            </Imports.Box>
        </Imports.Grid>
        </>
    )
}
export default Homebanner3;