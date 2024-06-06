import data from '../api/api'
import { GET_PLANVIDEO } from '../action/Actiontypes'

const initialState = {
    data : [],
}

const reducer7 = (state = initialState, action) => {
    
    switch(action.type){
        case 'GET_PLANVIDEO': 
        // alert('Hi......');
        console.log('Hi im reducer in plan expert page')
        return{
            ...state, 
            data: action.payload,
        };
        default:
            return state;
    }
  
}

export default reducer7;