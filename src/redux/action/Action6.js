import axios from "axios";
import { GET_FOUCARDS } from "./Actiontypes";

export const Gethomecard4act = (data) => {
    console.log('Hi this is homecardsaction..')
    
        
    return{
            type:'GET_FOUCARDS',
            payload: data,
    };   

};