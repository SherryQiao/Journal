
import defaultState from "./state"
import { combineReducers } from "redux"
// Reducer
const selectedDate = ( state = defaultState || null, action ) => {
    switch(action.type) {
        case "SELECT_DATE": {
            return  action.selectedDate || state;
        };
        default: {
            return state
        }
    }
}

export default combineReducers( { selectedDate } );