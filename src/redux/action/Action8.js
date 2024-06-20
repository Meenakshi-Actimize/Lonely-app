import axios from "axios";
import { GET_SHOP } from "./Actiontypes";

export const Getshopact = (data) => {
    console.log('Hi this is Shoppage..')
    
        
    return{
            type:'GET_SHOP',
            payload: data,
    };   

};