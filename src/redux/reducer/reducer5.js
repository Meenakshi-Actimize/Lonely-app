import data from '../api/api'
import { GET_THRCARDS } from '../action/Actiontypes'

const initialState = {
    data : [],
}

const reducer5 = (state = initialState, action) => {
    
    switch(action.type){
        case 'GET_THRCARDS': 
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

export default reducer5;