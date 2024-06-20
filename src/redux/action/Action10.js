import axios from "axios";
import { GET_MAGNIFIER } from "./Actiontypes";


export const Getmagnifieract = (data) => {
    console.log('Hi this is magnifier page..')
    
        
    return{
            type:'GET_MAGNIFIER',
            payload: data,
    };   

};