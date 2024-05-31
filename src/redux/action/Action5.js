import axios from "axios";
import { GET_THRCARDS } from "./Actiontypes";

export const Gethomecard3act = (data) => {
    console.log('Hi this is homecardsaction..')
    
        
    return{
            type:'GET_THRCARDS',
            payload: data,
    };   

};