import axios from "axios";
import { GET_FOODANDDRINK1 } from "./Actiontypes";

export const Getfood1act = (data) => {
    console.log('Hi this is foodanddrink page..')
    
        
    return{
            type:'GET_FOODANDDRINK1',
            payload: data,
    };   

};