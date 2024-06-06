import axios from "axios";
import { GET_PLANVIDEO } from "./Actiontypes";

export const Getplanvideo1act = (data) => {
    console.log('Hi this is planvideoaction..')
    
        
    return{
            type:'GET_PLANVIDEO',
            payload: data,
    };   

};