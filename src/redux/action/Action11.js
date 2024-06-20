import axios from "axios";
import { GET_FOODCARD1 } from "./Actiontypes";


export const Getfoodcard1act = (data) => {
    console.log('Hi this is magnifier page..')
    
        
    return{
            type:'GET_FOODCARD1',
            payload: data,
    };   

};