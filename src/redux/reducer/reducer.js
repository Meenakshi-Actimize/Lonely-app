import data from '../api/api'
import { GET_FLASH } from "../action/Actiontypes";

const initialState = {
    data : [],
}

const reducer1 = (state = initialState, action) => {
    
    switch(action.type){
        case 'SET_DATA': 
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

export default reducer1;