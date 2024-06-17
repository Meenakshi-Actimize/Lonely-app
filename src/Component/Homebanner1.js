import Imports from "../Import/Import";

function Homebanner1(){
    return(
        <>
          <Imports.Grid  sx={{
            marginTop:'120px' ,
            textAlign:'center'
        }}>
            <Imports.Typography sx={{ fontSize: { xs: '10px', md: '12px', lg: '13px' } }}>
                ADVERTISEMENT
            </Imports.Typography>
            <Imports.Box>
            <img src="https://tpc.googlesyndication.com/simgad/9710485096168726448" alt=""  width="50%" style={{ height:{lg:'90px', md:'40px', sm:'30px', xs:'28px'}}}/>
            </Imports.Box>
        </Imports.Grid>
        </>

    )
}
export default Homebanner1;