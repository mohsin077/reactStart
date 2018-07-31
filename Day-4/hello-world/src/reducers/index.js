import {user} from "../actions/types";
import {combineReducers} from 'redux';

let State={name:'ali'}
let userReducer=function ( state={},action){
switch(action.type){
    case user:
    return action.payload;
    default:
    return State;

}
}
export default combineReducers({
    user:userReducer
});