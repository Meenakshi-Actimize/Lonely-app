import axios from "axios";
import { GET_CARDS} from "./Actiontypes"

export const Gethomecard = (data) => {
    console.log('Hi this is homecardsaction..')
    
        
    return{
            type:'GET_CARDS',
            payload: data,
    };   

};