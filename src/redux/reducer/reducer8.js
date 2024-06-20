import data from '../api/api'
import { GET_SHOP } from '../action/Actiontypes'

const initialState = {
    data : [],
}

const reducer8 = (state = initialState, action) => {
    
    switch(action.type){
        case 'GET_SHOP': 
        // alert('Hi......');
        console.log('Hi im reducer in shop page')
        return{
            ...state, 
            data: action.payload,
        };
        default:
            return state;
    }
  
}

export default reducer8;