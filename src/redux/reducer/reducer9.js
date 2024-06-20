import data from '../api/api'
import { GET_FOODANDDRINK1 } from '../action/Actiontypes'

const initialState = {
    data : [],
}

const reducer9 = (state = initialState, action) => {
    
    switch(action.type){
        case 'GET_FOODANDDRINK1': 
        // alert('Hi......');
        console.log('Hi im reducer in foodanddrink page')
        return{
            ...state, 
            data: action.payload,
        };
        default:
            return state;
    }
  
}

export default reducer9;