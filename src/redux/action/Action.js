import axios from "axios";
import { GET_FLASH} from "./Actiontypes"

export const Getflash = (data) => {
    console.log('Hi this is action..')
    
        
    return{
            type:'SET_DATA',
            payload: data,
    };

    
        

};