import axios from "axios";
import { GET_CARDS} from "./Actiontypes"

export const Gethomecard = (homecard) => {
    console.log('Hi this is homecardsaction..')
    
        
    return{
            type:'GET_CARDS',
            payload: homecard,
    };

    
        

};