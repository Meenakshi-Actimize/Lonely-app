import * as React from 'react';
import Navbarcomp from '../Component/Navbarcomp';
import Shoppage1 from '../Component/Shoppage1';
import Shopppage2 from '../Component/Shoppage2';
import Shoppage3 from '../Component/Shoppage3';

function Shoppage(){
    return(
        <>
        <Shoppage1 />
        <Navbarcomp />
        <Shopppage2 />
        <Shoppage3 />
        </>
    )
}
export default Shoppage;