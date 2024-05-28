import axios from "axios";
import { GET_VIDEO} from "./Actiontypes"

export const Getvideo = (video) => {
    console.log('Hi this is action2..')
    
        
    return{
            type:'GET_VIDEO',
            payload: video,
    };

    
        

};