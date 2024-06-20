import data from '../api/api'
import { GET_FOODCARD1 } from '../action/Actiontypes'
const initialState = {
    data : [],
}

const reducer11 = (state = initialState, action) => {
    
    switch(action.type){
        case 'GET_FOODCARD1': 
        // alert('Hi......');
        console.log('Hi im reducer in foodcard1 page')
        return{
            ...state, 
            data: action.payload,
        };
        default:
            return state;
    }
  
}

export default reducer11;