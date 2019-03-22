
import {GET_ERRORS} from '../actions/types';

const initialState = {}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ERRORS:
            debugger
            return action.payload;
            debugger
        default:
        return state
    }
};