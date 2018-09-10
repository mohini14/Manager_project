
import firebase from 'firebase';
import {EMAIL_CHANGED , PASSWORD_CHANGE} from './types';
import ReduxThunk from 'redux-thunk';
export const emailChanged = (text) => {
    return ({
        type: EMAIL_CHANGED,
        payload: text

    });
};

export const passwordChange = (text) => {
    return ({
        type: PASSWORD_CHANGE,
        payload: text
    });
};

export const loginUser = ({email, password}) => {
return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password).
    then(user => {
        dispatch({type : 'LOGIN_USER_SUCCESS' , payload : user});
    });
};
};