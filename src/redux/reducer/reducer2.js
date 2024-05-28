import data from '../api/api'
import { GET_VIDEO } from "../action/Actiontypes";

const initialState = {
    data : [],
}

const reducer2 = (state = initialState, action) => {
    
    switch(action.type){
        case 'GET_VIDEO': 
        // alert('Hi......');
        console.log('Hi im reducer')
        return{
            ...state, 
            data: action.payload,
        };
        default:
            return state;
    }
  
}

export default reducer2;