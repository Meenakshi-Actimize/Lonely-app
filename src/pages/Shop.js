import * as React from 'react';
import Navbarcomp from '../Component/Navbarcomp';
import Shoppage1 from '../Component/Shoppage1';
import Shoppage2 from '../Component/Shoppage2';
import Shoppage3 from '../Component/Shoppage3';
import Footercomp from '../Component/Footer';
import Shoppage4 from '../Component/Shoppage4';

function Shoppage(){
    return(
        <>
        <Shoppage1 />
        <Navbarcomp />
        <Shoppage2 />
        <Shoppage3 />
        <Shoppage4 />
        <Footercomp />
        </>
    )
}
export default Shoppage;