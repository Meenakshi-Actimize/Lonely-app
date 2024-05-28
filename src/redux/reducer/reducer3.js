import data from '../api/api'
import { GET_CARDS } from "../action/Actiontypes";

const initialState = {
    data : [],
}

const reducer3 = (state = initialState, action) => {
    
    switch(action.type){
        case 'GET_CARDS': 
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

export default reducer3;