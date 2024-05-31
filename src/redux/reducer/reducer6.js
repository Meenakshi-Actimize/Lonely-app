import data from '../api/api'
import { GET_FOUCARDS } from '../action/Actiontypes'

const initialState = {
    data : [],
}

const reducer6 = (state = initialState, action) => {
    
    switch(action.type){
        case 'GET_FOUCARDS': 
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

export default reducer6;