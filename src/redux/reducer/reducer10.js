import data from '../api/api'
import { GET_MAGNIFIER } from '../action/Actiontypes'
const initialState = {
    data : [],
}

const reducer10 = (state = initialState, action) => {
    
    switch(action.type){
        case 'GET_MAGNIFIER': 
        // alert('Hi......');
        console.log('Hi im reducer in magnifier page')
        return{
            ...state, 
            data: action.payload,
        };
        default:
            return state;
    }
  
}

export default reducer10;