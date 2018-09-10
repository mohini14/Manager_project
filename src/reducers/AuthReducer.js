import {
    EMAIL_CHANGED,
    PASSWORD_CHANGE,
    LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
   console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGE:
            return { ...state, password: action.payload };
       case LOGIN_USER_SUCCESS : 
       return;
            default:
            return state;
    }
};