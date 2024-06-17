import Imports from "../Import/Import";

function Lastcomp(){
    return(
        <>
                <Imports.Grid container xs={12} sx={{backgroundColor:'black', marginTop:'30px', color:'white'}}>
                <Imports.Grid >
                    <Imports.Typography sx={{textAlign:'start', fontSize:'13px', marginLeft:'25px'}}>
           © 2024 Lonely Planet, a Red Ventures company. All rights reserved. No part of this site may be reproduced without our written permission.</Imports.Typography>
           </Imports.Grid>
       
         </Imports.Grid>

        </>
    )
}

export default Lastcomp;