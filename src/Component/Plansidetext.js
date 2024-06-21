import Imports from "../Import/Import";

// Text after continuous swiper in planning page

function Plansidetext(){
    return(
        <>
        <Imports.Grid  sx={{justifyContent:'center', alignItems:'center', marginTop:'40px'}}>
            <Imports.Typography sx={{fontSize:{lg:'30px', md:'30px', sm:'30px', xs:'16px'}, textAlign:'center'}}><strong>No one does it like our local experts</strong></Imports.Typography>
            <Imports.Typography sx={{textAlign:'center', marginTop:'20px', fontSize:{lg:'16px', md:'16px', sm:'16px', xs:'11px'}}}>Meet our on-the-ground heroes. They know the secret spots, </Imports.Typography>
            <Imports.Typography sx={{textAlign:'center', fontSize:{lg:'16px', md:'16px', sm:'16px', xs:'11px'}}}>the must-do adventures, and have the connections to make anything happen.</Imports.Typography>
          

        </Imports.Grid>
        </>
    )
}
export default Plansidetext;