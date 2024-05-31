import axios from "axios";
import { GET_TWOCARDS } from "./Actiontypes";

export const Gethomecard2act = (data) => {
    console.log('Hi this is homecardsaction..')
    
        
    return{
            type:'GET_TWOCARDS',
            payload: data,
    };   

};