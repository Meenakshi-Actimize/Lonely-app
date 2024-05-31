import data from '../api/api'
import { GET_TWOCARDS } from '../action/Actiontypes'

const initialState = {
    data : [],
}

const reducer4 = (state = initialState, action) => {
    
    switch(action.type){
        case 'GET_TWOCARDS': 
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

export default reducer4;